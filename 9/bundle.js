/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: EVENT_TYPES, TRANSFER_EVENTS, EVENT_OFFERS, SortTypes, ESC_BUTTON, OperatingMode, RenderPosition, FilterTypes, MenuTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPES", function() { return EVENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFER_EVENTS", function() { return TRANSFER_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_OFFERS", function() { return EVENT_OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortTypes", function() { return SortTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESC_BUTTON", function() { return ESC_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatingMode", function() { return OperatingMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTypes", function() { return FilterTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTabs", function() { return MenuTabs; });
const EVENT_TYPES = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

const TRANSFER_EVENTS = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];

const EVENT_OFFERS = [
  `Add luggage`,
  `Add meal`,
  `Switch to comfort`,
  `Choose seats`,
  `Book tickets`,
  `Lunch in the city`,
  `Excursion with a guide`,
  `Child safety seat`,
  `Order room service`,
  `Late checkout`,
  `Airport transfer`,
  `Add breakfast`,
  `Travel by train`,
  `Rent a car`,
  `Order a taxi`,
  `Order VIP service`,
  `Upgrade to business class`
];

const SortTypes = {
  DAY: `day`,
  TIME: `time`,
  PRICE: `price`
};

const ESC_BUTTON = `Escape`;

const OperatingMode = {
  DEFAULT: `default`,
  EDITING: `editing`
};

const RenderPosition = {
  BEFOREBEGIN: `beforebegin`,
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const FilterTypes = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`
};

const MenuTabs = {
  TABLE: `table`,
  STATS: `stats`
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/event */ "./src/mock/event.js");
/* harmony import */ var _presenter_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/route */ "./src/presenter/route.js");



const EVENTS_AMOUNT = 18;
const routePoints = new Array(EVENTS_AMOUNT).fill().map(_mock_event__WEBPACK_IMPORTED_MODULE_0__["generateEvent"]);

const siteMainElement = document.querySelector(`.page-body`);
const routeMainElement = siteMainElement.querySelector(`.trip-main`);
const routeEventsElement = siteMainElement.querySelector(`.trip-events`);

const routePresenter = new _presenter_route__WEBPACK_IMPORTED_MODULE_1__["default"](routeMainElement, routeEventsElement);
routePresenter.init(routePoints);


/***/ }),

/***/ "./src/mock/event.js":
/*!***************************!*\
  !*** ./src/mock/event.js ***!
  \***************************/
/*! exports provided: generateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvent", function() { return generateEvent; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _util_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/global */ "./src/util/global.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);




const OFFERS_AMOUNT = 3;

const CITIES = [`Luxembourg`, `Trier`, `Paris`, `Bernkastel-Kues`, `Strasbourg`, `Aachen`, `Barcelona`, `Sant Pol de Mar`, `London`, `Dublin`, `Cabo da Roca`, `Geneva`, `Chamonix`, `Amsterdam`];

const TEXT = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
];

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const generateCities = () => {
  const randomIndex = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, CITIES.length - 1);

  return CITIES[randomIndex];
};

const generateEndDate = (eventStart) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(eventStart).add(Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 48), `hours`).add(Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 60), `minutes`).toDate();
};


const generateStartDate = () => {
  const daysGap = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-7, 7);
  const hourGap = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-24, 24);
  const minGap = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-59, 59);
  return dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(daysGap, `day`).add(hourGap, `hour`).add(minGap, `minute`).toDate();
};

const generateDescription = () => {
  const randomIndex = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, TEXT.length - 1);

  return TEXT[randomIndex];
};


const generatePhotos = () => {
  const photos = [];
  const randomIndex = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 5);

  for (let i = 0; i < randomIndex; i++) {
    photos.unshift({photoPath: `http://picsum.photos/248/152?r=${Math.random()}`});
  }

  return photos;
};


const generateValue = (range) => {
  const randomIndex = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, range.length - 1);

  return range[randomIndex];
};

const generateOffers = () => {
  const offers = new Map();
  _const__WEBPACK_IMPORTED_MODULE_0__["EVENT_TYPES"].forEach((eventType) => {
    const relatedDeals = [];
    for (let i = 0; i < OFFERS_AMOUNT; i++) {
      relatedDeals.push({
        type: eventType,
        name: _const__WEBPACK_IMPORTED_MODULE_0__["EVENT_OFFERS"][Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_0__["EVENT_OFFERS"].length - 1)],
        id: generateId(),
        price: Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(3, 150),
        isChecked: Boolean(Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1))
      });
    }
    offers.set(eventType, relatedDeals.slice(0, Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, OFFERS_AMOUNT)));
  });
  return offers;
};

const generateEvent = () => {
  const eventStart = generateStartDate();
  const eventEnd = generateEndDate(eventStart);
  const travelDuration = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(eventEnd).diff(eventStart, `minutes`);
  const city = generateCities();
  const eventType = generateValue(_const__WEBPACK_IMPORTED_MODULE_0__["EVENT_TYPES"]);
  const isFavorite = Boolean(Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1));
  const description = generateDescription();
  const photos = generatePhotos();
  const price = Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(3, 150);
  const offers = generateOffers();
  const relatedDeals = offers.get(eventType);
  const id = generateId();

  return {
    eventStart,
    eventEnd,
    id,
    travelDuration,
    city,
    eventType,
    isFavorite,
    description,
    photos,
    offers: relatedDeals,
    price,
  };
};



/***/ }),

/***/ "./src/presenter/point.js":
/*!********************************!*\
  !*** ./src/presenter/point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointPresenter; });
/* harmony import */ var _view_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/event */ "./src/view/event.js");
/* harmony import */ var _view_edit_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/edit-event */ "./src/view/edit-event.js");
/* harmony import */ var _util_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/render */ "./src/util/render.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/const.js");






class PointPresenter {
  constructor(eventsListContainer, changeData, changeMode) {
    this._eventsListContainer = eventsListContainer;

    this._changeData = changeData;
    this._changeMode = changeMode;

    this._mode = _const__WEBPACK_IMPORTED_MODULE_3__["OperatingMode"].DEFAULT;

    this._eventComponent = null;
    this._eventEditComponent = null;

    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleClickFavorite = this._handleClickFavorite.bind(this);
    this._handleArrowClick = this._handleArrowClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);

  }

  init(routePoint) {
    this._routePoint = routePoint;

    const prevEventComponent = this._eventComponent;
    const prevEventEditComponent = this._eventEditComponent;

    this._eventComponent = new _view_event__WEBPACK_IMPORTED_MODULE_0__["default"](routePoint);
    this._eventEditComponent = new _view_edit_event__WEBPACK_IMPORTED_MODULE_1__["default"](routePoint);

    this._eventComponent.setEditClickHandler(this._handleEditClick);
    this._eventEditComponent.setCardArrowHandler(this._handleArrowClick);
    this._eventEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    this._eventComponent.setClickFavoriteHandler(this._handleClickFavorite);


    if (prevEventComponent === null || prevEventEditComponent === null) {
      Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["render"])(this._eventsListContainer, this._eventComponent, _const__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].BEFOREEND);
      return;
    }

    if (this._mode === _const__WEBPACK_IMPORTED_MODULE_3__["OperatingMode"].DEFAULT) {
      Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventComponent, prevEventComponent);
    }

    if (this._mode === _const__WEBPACK_IMPORTED_MODULE_3__["OperatingMode"].EDITING) {
      Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventEditComponent, prevEventEditComponent);
    }

    Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevEventComponent);
    Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevEventEditComponent);
  }

  destroy() {
    Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._eventComponent);
    Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._eventEditComponent);
  }

  resetView() {
    if (this._mode !== _const__WEBPACK_IMPORTED_MODULE_3__["OperatingMode"].DEFAULT) {
      this._replaceFormToCard();
    }
  }

  _replaceFormToCard() {
    Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventComponent, this._eventEditComponent);
    document.removeEventListener(`keydown`, this._escKeyDownHandler);
    this._mode = _const__WEBPACK_IMPORTED_MODULE_3__["OperatingMode"].DEFAULT;
  }

  _replaceCardToForm() {
    Object(_util_render__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._eventEditComponent, this._eventComponent);
    document.addEventListener(`keydown`, this._escKeyDownHandler);
    this._changeMode();
    this._mode = _const__WEBPACK_IMPORTED_MODULE_3__["OperatingMode"].EDITING;
  }

  _escKeyDownHandler(evt) {
    if (evt.key === _const__WEBPACK_IMPORTED_MODULE_3__["ESC_BUTTON"]) {
      evt.preventDefault();
      this._replaceFormToCard();
    }
  }

  _handleEditClick() {
    this._replaceCardToForm();
  }

  _handleFormSubmit(routePoint) {
    this._changeData(routePoint);
    this._replaceFormToCard();
  }

  _handleArrowClick() {
    this._replaceFormToCard();
  }

  _handleClickFavorite() {
    this._changeData(
        Object.assign(
            {},
            this._routePoint,
            {
              isFavorite: !this._routePoint.isFavorite
            }
        )
    );
  }
}


/***/ }),

/***/ "./src/presenter/route.js":
/*!********************************!*\
  !*** ./src/presenter/route.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Route; });
/* harmony import */ var _view_trip_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/trip-info */ "./src/view/trip-info.js");
/* harmony import */ var _view_site_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/site-menu */ "./src/view/site-menu.js");
/* harmony import */ var _view_trip_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/trip-filters */ "./src/view/trip-filters.js");
/* harmony import */ var _view_empty_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/empty-list */ "./src/view/empty-list.js");
/* harmony import */ var _view_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/list */ "./src/view/list.js");
/* harmony import */ var _view_trip_sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/trip-sorting */ "./src/view/trip-sorting.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point */ "./src/presenter/point.js");
/* harmony import */ var _util_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/render */ "./src/util/render.js");
/* harmony import */ var _util_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/global */ "./src/util/global.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/event */ "./src/util/event.js");












class Route {
  constructor(routeMainContainer, routePointsContainer) {
    this._routePresenter = {};
    this._currentSortType = _const__WEBPACK_IMPORTED_MODULE_9__["SortTypes"].DAY;


    this._routeMainContainer = routeMainContainer;
    this._routePointsContainer = routePointsContainer;

    this._eventsListComponent = new _view_list__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this._sortingComponent = new _view_trip_sorting__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this._menuComponent = new _view_site_menu__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._filtersComponent = new _view_trip_filters__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._emptyListComponent = new _view_empty_list__WEBPACK_IMPORTED_MODULE_3__["default"]();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlerSortTypeChange = this._handlerSortTypeChange.bind(this);

  }

  init(routePoints) {

    this._sourcePoints = routePoints.slice().sort(_util_event__WEBPACK_IMPORTED_MODULE_10__["sortByDate"]);
    this._routePoints = this._sourcePoints.slice();

    this._sourcedDays = Object(_util_event__WEBPACK_IMPORTED_MODULE_10__["generateDays"])(this._routePoints);
    this._days = this._sourcedDays.slice();

    Object(_util_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._routeMainContainer, this._eventsListComponent, _const__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

    this._renderRouteInfo();
    this._renderRoute();

  }

  _sortPoints(sortType) {
    switch (sortType) {
      case _const__WEBPACK_IMPORTED_MODULE_9__["SortTypes"].TIME:
        this._routePoints.sort(_util_event__WEBPACK_IMPORTED_MODULE_10__["sortByDuration"]);
        this._days = null;
        break;
      case _const__WEBPACK_IMPORTED_MODULE_9__["SortTypes"].PRICE:
        this._routePoints.sort(_util_event__WEBPACK_IMPORTED_MODULE_10__["sortByPrice"]);
        break;
      case _const__WEBPACK_IMPORTED_MODULE_9__["SortTypes"].DAY:
        this._routePoints.sort(_util_event__WEBPACK_IMPORTED_MODULE_10__["sortByDate"]);
        break;
      default:
        this._routePoints = this._sourcePoints.slice();
        this._days = this._sourcedDays.slice();
    }
    this._currentSortType = sortType;
  }


  _renderSort() {
    Object(_util_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._routePointsContainer, this._sortingComponent, _const__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
    this._sortingComponent.setSortTypeChangeHandler(this._handlerSortTypeChange);
  }


  _handlePointChange(updatePoint) {
    this._routePoints = Object(_util_global__WEBPACK_IMPORTED_MODULE_8__["updateItem"])(this._routePoints, updatePoint);
    this._routePresenter[updatePoint.id].init(updatePoint);
  }

  _handleModeChange() {
    Object
      .values(this._routePresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _clearPointsList() {
    Object
      .values(this._routePresenter)
      .forEach((presenter) => presenter.destroy());
    this._routePresenter = {};
  }


  _renderPoint(points) {
    const routePresenter = new _point__WEBPACK_IMPORTED_MODULE_6__["default"](this._eventsListComponent, this._handlePointChange, this._handleModeChange);
    routePresenter.init(points);
    this._routePresenter[points.id] = routePresenter;
  }

  _renderRoutePoints() {
    this._routePoints
      .forEach((routePoint) => this._renderPoint(routePoint));

  }

  _renderEmptyList() {
    Object(_util_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._routePointsContainer, this._emptyListComponent, _const__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  }

  _renderRouteInfo() {
    const routeInfoComponent = new _view_trip_info__WEBPACK_IMPORTED_MODULE_0__["default"](this._routePoints);
    Object(_util_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._routeMainContainer, routeInfoComponent, _const__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
  }

  _renderRouteControls() {
    const routeControlsElements = this._routeMainContainer.querySelector(`.trip-controls`);
    Object(_util_render__WEBPACK_IMPORTED_MODULE_7__["render"])(routeControlsElements, this._menuComponent, _const__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].AFTERBEGIN);
    Object(_util_render__WEBPACK_IMPORTED_MODULE_7__["render"])(routeControlsElements, this._filtersComponent, _const__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  }

  _renderPointsList() {
    Object(_util_render__WEBPACK_IMPORTED_MODULE_7__["render"])(this._routePointsContainer, this._eventsListComponent, _const__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  }

  _renderRoute() {
    if (this._routePoints.length === 0) {
      this._renderEmptyList();
      return;
    }
    this._renderRouteControls();
    this._renderSort();
    this._renderPointsList();
    this._renderRoutePoints(this._routePoints);
  }

  _handlerSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);
    this._clearPointsList();
    this._renderRoute();
  }
}



/***/ }),

/***/ "./src/util/event.js":
/*!***************************!*\
  !*** ./src/util/event.js ***!
  \***************************/
/*! exports provided: humaneEventDate, humaneEventTime, humaneEditEventTime, createPrepositions, generateDays, sortByDate, sortByPrice, sortByDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humaneEventDate", function() { return humaneEventDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humaneEventTime", function() { return humaneEventTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humaneEditEventTime", function() { return humaneEditEventTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrepositions", function() { return createPrepositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDays", function() { return generateDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDate", function() { return sortByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByPrice", function() { return sortByPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDuration", function() { return sortByDuration; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _util_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/global */ "./src/util/global.js");





const humaneEventDate = (dueDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dueDate).format(`D MMM`);
};

const humaneEventTime = (dueDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dueDate).format(`HH:mm`);
};

const humaneEditEventTime = (dueDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dueDate).format(`DD/MM/YY HH:mm`);
};

const createPrepositions = (type) => {
  return _const__WEBPACK_IMPORTED_MODULE_1__["TRANSFER_EVENTS"].includes(type) ? `to` : `in`;
};


const getFormatedDate = (date) => {
  return Object(_util_global__WEBPACK_IMPORTED_MODULE_2__["formatDateToIso"])(date).slice();
};

const createDayDates = (routePoints) => {
  const dates = routePoints.map((routePoint) => getFormatedDate(routePoint.eventStart));
  const datesSet = new Set(dates);
  const inimitableDates = Array.from(datesSet);

  return inimitableDates;
};

const generateDays = (routePoints) => {
  const dates = createDayDates(routePoints);

  return dates.map((date) => {
    const matchPoints = routePoints.filter((routePoint) => getFormatedDate(routePoint.eventStart) === date);

    return {
      date,
      dayPoints: matchPoints
    };
  });
};


const sortByDate = (a, b) => {
  return a.eventStart.getTime() - b.eventStart.getTime();
};

const sortByPrice = (a, b) =>{
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  } else {
    return 0;
  }
};

const sortByDuration = (first, second) => {
  const firstDuration = first.eventStart.getTime() - first.eventEnd.getTime();
  const secondDuration = second.eventStart.getTime() - second.eventEnd.getTime();
  return secondDuration - firstDuration;
};



/***/ }),

/***/ "./src/util/global.js":
/*!****************************!*\
  !*** ./src/util/global.js ***!
  \****************************/
/*! exports provided: getRandomInteger, capitalize, formatDateToIso, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToIso", function() { return formatDateToIso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const formatDateToIso = (date) => {
  const year = date.getFullYear();
  const month = (`0` + date.getMonth()).slice(-2);
  const day = (`0` + date.getDate()).slice(-2);
  const hour = (`0` + date.getHours()).slice(-2);
  const minutes = (`0` + date.getMinutes()).slice(-2);

  return `${year}-${month}-${day}T${hour}:${minutes}`;
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/util/render.js":
/*!****************************!*\
  !*** ./src/util/render.js ***!
  \****************************/
/*! exports provided: createElement, render, renderTemplate, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, child, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  if (child instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    child = child.getElement();
  }

  switch (place) {
    case _const__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].AFTERBEGIN:
      container.prepend(child);
      break;
    case _const__WEBPACK_IMPORTED_MODULE_1__["RenderPosition"].BEFOREEND:
      container.append(child);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    container = container.getElement();
  }

  container.insertAdjacentHTML(place, template);
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _util_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/render */ "./src/util/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_render__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/edit-event.js":
/*!********************************!*\
  !*** ./src/view/edit-event.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditEventView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/event */ "./src/util/event.js");
/* harmony import */ var _util_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/global */ "./src/util/global.js");






const offerTemplate = (offer) => {
  const {id, name, price, isChecked} = offer;
  return ` <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id}" ${isChecked ? `checked` : ``}>
                        <label class="event__offer-label" for="event-offer-${id}">
                          <span class="event__offer-title">${name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${price}</span>
                        </label>
                      </div>`;
};

const createOffers = (offers) => {
  return `
    ${offers.map((offer) => offerTemplate(offer)).join(``)}
    `;
};

const createEventTypeItems = () => {
  return `
  ${_const__WEBPACK_IMPORTED_MODULE_1__["EVENT_TYPES"].map(({id, type, name, image}) => `
      <div class="event__type-item">
          <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${name}">
          <label class="event__type-label  event__type-label--${image}" for="event-type-${type}-${id}">${name}</label>
      </div>`).join(``)}
    `;
};

const createEditEventTemplate = (event = {}) => {
  const {
    city,
    eventType,
    eventStart,
    eventEnd,
    offers,
    description,
    photos,
    id,
    price
  } = event;

  const createOffersSection = () => {
    return `
    ${offersTemplate}
  `;
  };

  const createDetailsSection = () => {
    const offersSection = createOffersSection();
    return `
        ${offersSection}
        `;
  };

  const createPhotosSection = () => {
    return `
    ${photos.map(({photoPath}) => `
      <img class="event__photo" src=${photoPath}" alt="Event photo">
    `).join(``)}
    `;
  };

  const offersTemplate = createOffers(offers);
  const detailsSection = createDetailsSection();
  const photosSection = createPhotosSection();
  const eventTypeItems = createEventTypeItems();

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${eventTypeItems}
                        </fieldset>
                    </div>
                    </div>

                    <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${Object(_util_global__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(eventType)}  ${Object(_util_event__WEBPACK_IMPORTED_MODULE_2__["createPrepositions"])(eventType)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${city}" list="destination-list-${id}">
                    <datalist id="destination-list-${id}">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>


                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${Object(_util_event__WEBPACK_IMPORTED_MODULE_2__["humaneEditEventTime"])(eventStart)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${Object(_util_event__WEBPACK_IMPORTED_MODULE_2__["humaneEditEventTime"])(eventEnd)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${price}">
                  </div>
                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                ${(offers.length || description.length) ? `

              <section class="event__details">
                  ${offers.length ? `
                    <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                    ${detailsSection}
                    </div>
                    </section>
                ` : ``}
                ${description.length ? `
                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                  </section>
                  ` : ``}
                  <p class="event__destination-description">${description}</p>

                  ${photos.length ? `
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                      ${photosSection}
                      </div>
                    </div>
                    ` : ``}
                    </section>
                    ` : ``}
              </form>
            </li>
            `;
};

class EditEventView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(event) {
    super();
    this._data = event;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._cardArrowHandler = this._cardArrowHandler.bind(this);
  }


  getTemplate() {
    return createEditEventTemplate(this._data);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.submit(this._data);
  }

  _cardArrowHandler() {
    this._callback.onArrowClick();
  }

  setCardArrowHandler(callback) {
    this._callback.onArrowClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._cardArrowHandler);
  }


  setFormSubmitHandler(callback) {
    this._callback.submit = callback;
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }

}


/***/ }),

/***/ "./src/view/empty-list.js":
/*!********************************!*\
  !*** ./src/view/empty-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmptyListView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createEmptyListTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class EmptyListView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createEmptyListTemplate();
  }
}


/***/ }),

/***/ "./src/view/event.js":
/*!***************************!*\
  !*** ./src/view/event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _util_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/event */ "./src/util/event.js");




const createOffers = (offers) => {
  return `<h4 class="visually-hidden">Offers:</h4>
  ${offers.map(({name, price}) => {
    return `<li class="event__offer">
                    <span class="event__offer-title">${name}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${price}</span>
                  </li>`;
  }).join(``)}`;
};

const getTimeDiff = (start, end) => {
  const MS_IN_MINUTE = 60000;
  const timeDiff = end - start;
  const msInHour = MS_IN_MINUTE * 60;
  const msInDay = 24 * MS_IN_MINUTE * 60;

  const days = Math.floor(timeDiff / msInDay);
  const hours = Math.floor((timeDiff - days * msInDay) / msInHour);
  const minutes = Math.floor((timeDiff - days * msInDay - hours * msInHour) / MS_IN_MINUTE);

  return `${days > 0 ? `${days}D` : ``} ${hours > 0 ? `${hours}H` : `00H`} ${minutes > 0 ? `${minutes}M` : `00M`}`;
};

const createEventTemplate = (event) => {
  const {
    eventType,
    city,
    eventStart,
    eventEnd,
    isFavorite,
    offers,
    price
  } = event;


  const duration = getTimeDiff(eventStart, eventEnd);

  const offersTemplate = offers ? createOffers(offers) : ``;

  const favoriteClassName = isFavorite
    ? `event__favorite-btn--active`
    : ``;

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${eventStart}">${Object(_util_event__WEBPACK_IMPORTED_MODULE_1__["humaneEventDate"])(eventStart)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${eventType} ${Object(_util_event__WEBPACK_IMPORTED_MODULE_1__["createPrepositions"])(eventType)} ${city}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${eventStart}">${Object(_util_event__WEBPACK_IMPORTED_MODULE_1__["humaneEventTime"])(eventStart)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${eventEnd}">${Object(_util_event__WEBPACK_IMPORTED_MODULE_1__["humaneEventTime"])(eventEnd)}</time>
                  </p>
                  <p class="event__duration">${duration}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                 ${offersTemplate}
                </ul>
                <button class="event__favorite-btn ${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
            `;
};

class EventView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(event) {
    super();
    this._data = event;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createEventTemplate(this._data);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.onEditClick();
  }

  setEditClickHandler(callback) {
    this._callback.onEditClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._editClickHandler);
  }


  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.clickFavorite();
  }

  setClickFavoriteHandler(callback) {
    this._callback.clickFavorite = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/list.js":
/*!**************************!*\
  !*** ./src/view/list.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createListTemplate = () => {
  return `<ul class="trip-events__list"></ul>`;
};

class ListView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createListTemplate();
  }
}


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenuView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _util_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/global */ "./src/util/global.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");





const createSiteMenuTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn" href="#">${Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(_const__WEBPACK_IMPORTED_MODULE_2__["MenuTabs"].TABLE)}</a>
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${Object(_util_global__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(_const__WEBPACK_IMPORTED_MODULE_2__["MenuTabs"].STATS)}</a>
  </nav>`;
};

class SiteMenuView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createSiteMenuTemplate();
  }
}



/***/ }),

/***/ "./src/view/trip-filters.js":
/*!**********************************!*\
  !*** ./src/view/trip-filters.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripFiltersView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



const createTripFiltersTemplate = () => {
  return `<form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked}>
      <label class="trip-filters__filter-label" for="filter-everything">${_const__WEBPACK_IMPORTED_MODULE_1__["FilterTypes"].EVERYTHING}</label>
    </div>
    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">${_const__WEBPACK_IMPORTED_MODULE_1__["FilterTypes"].FUTURE}</label>
    </div>
    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
      <label class="trip-filters__filter-label" for="filter-past">${_const__WEBPACK_IMPORTED_MODULE_1__["FilterTypes"].PAST}</label>
    </div>
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};

class TripFiltersView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripFiltersTemplate();
  }
}


/***/ }),

/***/ "./src/view/trip-info.js":
/*!*******************************!*\
  !*** ./src/view/trip-info.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TripInfoView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createTripInfoTemplate = () => {
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value"></span>
    </p>
  </section>`;
};

class TripInfoView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createTripInfoTemplate();
  }
}


/***/ }),

/***/ "./src/view/trip-sorting.js":
/*!**********************************!*\
  !*** ./src/view/trip-sorting.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortingView; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");




const createTripSortingTemplate = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <div class="trip-sort__item  trip-sort__item--day">
    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortTypes"].DAY}">
    <label class="trip-sort__btn" for="sort-day">Day</label>
  </div>
  <div class="trip-sort__item  trip-sort__item--event">
    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
    <label class="trip-sort__btn" for="sort-event">Event</label>
  </div>
  <div class="trip-sort__item  trip-sort__item--time">
    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortTypes"].TIME}">
    <label class="trip-sort__btn" for="sort-time">Time</label>
  </div>
  <div class="trip-sort__item  trip-sort__item--price">
    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortTypes"].PRICE}">
    <label class="trip-sort__btn" for="sort-price">Price</label>
  </div>
  <div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
    <label class="trip-sort__btn" for="sort-offer">Offers</label>
  </div>
</form>`;
};

class SortingView extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createTripSortingTemplate();
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `INPUT`) {
      return;
    }
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}


/***/ })

/******/ });