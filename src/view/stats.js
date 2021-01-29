import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import SmartView from './smart';
import {countMoneyAmount, countPointsAmount, countTimeAmount} from '../util/stats';
import {EVENT_TYPES, StatisticsCharts, Color, BAR_HEIGHT} from '../const';

const drawChartTemplate = (chartLabel, chartHedings, chartFormatter, chartData) => {
  return {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: chartLabel,
      datasets: [{
        data: chartData,
        backgroundColor: Color.BACKDROP,
        hoverBackgroundColor: Color.BACKDROP,
        anchor: `start`
      }]
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 15
          },
          color: Color.TEXT,
          anchor: `end`,
          align: `start`,
          formatter: chartFormatter
        }
      },
      title: {
        display: true,
        text: `${chartHedings}`,
        fontColor: Color.TEXT,
        fontSize: 25,
        position: `left`
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: Color.TEXT,
            padding: 10,
            fontSize: 15,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          barThickness: 40,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          minBarLength: 55
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
      }
    }
  };
};

const createStatistics = () => {
  return `<section class="statistics" id="stats">
    <h2 class="visually-hidden">Trip statistics</h2>
    ${Object.values(StatisticsCharts).map((chartType) => `<div class="statistics__item statistics__item--${chartType}">
      <canvas class="statistics__chart  statistics__chart--${chartType}" width="900" height ="${BAR_HEIGHT * EVENT_TYPES.length}"></canvas>
    </div>`).join(``)}
  </section>`;
};

export default class StatsView extends SmartView {
  constructor(events) {
    super();

    this._data = events;

    this._moneyChart = null;
    this._typeChart = null;
    this._timeChart = null;

    this._setCharts();
  }

  removeElement() {
    super.removeElement();

    if (this._moneyChart !== null || this._typeChart !== null || this._timeChart !== null) {
      this._moneyChart = null;
      this._typeChart = null;
      this._timeChart = null;
    }
  }

  getTemplate() {
    return createStatistics(this._data);
  }

  restoreHandlers() {
    this._setCharts();
  }

  _setCharts() {
    if (this._typeChart !== null || this._moneyChart !== null || this._timeChart !== null) {
      this._typeChart = null;
      this._moneyChart = null;
      this._timeChart = null;
    }

    const typeSetting = this.getElement().querySelector(`.statistics__chart--transport`);
    const moneySetting = this.getElement().querySelector(`.statistics__chart--money`);
    const timeSetting = this.getElement().querySelector(`.statistics__chart--time`);

    const labels = EVENT_TYPES.map((type) => type.toUpperCase());
    const typeChartData = EVENT_TYPES.map((type) => countPointsAmount(this._data, type));
    const moneyChartData = EVENT_TYPES.map((type) => countMoneyAmount(this._data, type));
    const timeSpendChartData = EVENT_TYPES.map((type) => countTimeAmount(this._data, type));

    this._moneyChart = new Chart(moneySetting, drawChartTemplate(labels, `MONEY`, (val) => `€ ${val}`, moneyChartData));
    this._typeChart = new Chart(typeSetting, drawChartTemplate(labels, `TYPE`, (val) => `${val}x`, typeChartData));
    this._timeChart = new Chart(timeSetting, drawChartTemplate(labels, `TIME-SPEND`, (val) => `${val}H`, timeSpendChartData));
  }
}
