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
/*! exports provided: EVENT_TYPES, TRANSFER_EVENTS, EVENT_OFFERS, SortTypes, RenderPosition, FilterTypes, MenuTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPES", function() { return EVENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFER_EVENTS", function() { return TRANSFER_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_OFFERS", function() { return EVENT_OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortTypes", function() { return SortTypes; });
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
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`
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
/* harmony import */ var _view_trip_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/trip-info */ "./src/view/trip-info.js");
/* harmony import */ var _view_site_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/site-menu */ "./src/view/site-menu.js");
/* harmony import */ var _view_trip_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/trip-filters */ "./src/view/trip-filters.js");
/* harmony import */ var _view_empty_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/empty-list */ "./src/view/empty-list.js");
/* harmony import */ var _view_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/list */ "./src/view/list.js");
/* harmony import */ var _view_trip_sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/trip-sorting */ "./src/view/trip-sorting.js");
/* harmony import */ var _view_edit_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/edit-event */ "./src/view/edit-event.js");
/* harmony import */ var _view_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/event */ "./src/view/event.js");
/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/event */ "./src/mock/event.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./const */ "./src/const.js");












const EVENTS_AMOUNT = 18;

const events = new Array(EVENTS_AMOUNT).fill().map(_mock_event__WEBPACK_IMPORTED_MODULE_8__["generateEvent"]);


const siteMainElement = document.querySelector(`.page-body`);
const tripMainElement = siteMainElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = siteMainElement.querySelector(`.trip-events`);
const eventsListComponent = new _view_list__WEBPACK_IMPORTED_MODULE_4__["default"]();

const renderEvent = (eventsListElement, eventElement) => {
  const eventComponent = new _view_event__WEBPACK_IMPORTED_MODULE_7__["default"](eventElement).getElement();
  const eventEditComponent = new _view_edit_event__WEBPACK_IMPORTED_MODULE_6__["default"](eventElement).getElement();


  const replaceCardToForm = () => {
    eventsListElement.replaceChild(eventEditComponent, eventComponent);
  };

  const replaceFormToCard = () => {
    eventsListElement.replaceChild(eventComponent, eventEditComponent);
  };

  eventComponent.querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceCardToForm();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const closeCard = (evt) => {
    evt.preventDefault();
    replaceFormToCard();
    document.removeEventListener(`keydown`, onEscKeyDown);
  };

  eventEditComponent.querySelector(`.event--edit`).addEventListener(`submit`, closeCard);

  eventEditComponent.querySelector(`.event--edit .event__rollup-btn`).addEventListener(`click`, closeCard);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  Object(_util__WEBPACK_IMPORTED_MODULE_9__["render"])(eventsListElement, eventComponent, _const__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
};


const renderTripBoard = () => {
  Object(_util__WEBPACK_IMPORTED_MODULE_9__["render"])(tripMainElement, new _view_trip_info__WEBPACK_IMPORTED_MODULE_0__["default"](events).getElement(), _const__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].AFTERBEGIN);
  Object(_util__WEBPACK_IMPORTED_MODULE_9__["render"])(tripControlsElement, new _view_site_menu__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _const__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].AFTERBEGIN);
  Object(_util__WEBPACK_IMPORTED_MODULE_9__["render"])(tripControlsElement, new _view_trip_filters__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement(), _const__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
  Object(_util__WEBPACK_IMPORTED_MODULE_9__["render"])(tripEventsElement, new _view_trip_sorting__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), _const__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].AFTERBEGIN);
  Object(_util__WEBPACK_IMPORTED_MODULE_9__["render"])(tripEventsElement, eventsListComponent.getElement(), _const__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

  if (events.length) {
    for (let i = 0; i < EVENTS_AMOUNT; i++) {
      renderEvent(eventsListComponent.getElement(), events[i]);
    }
  } else {
    Object(_util__WEBPACK_IMPORTED_MODULE_9__["render"])(tripEventsElement, new _view_empty_list__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _const__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);
  }

};

renderTripBoard();


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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
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
  const randomIndex = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, CITIES.length - 1);

  return CITIES[randomIndex];
};

const generateEndDate = (eventStart) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(eventStart).add(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 48), `hours`).add(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 60), `minutes`).toDate();
};


const generateStartDate = () => {
  const daysGap = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-7, 7);
  const hourGap = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-24, 24);
  const minGap = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(-59, 59);
  return dayjs__WEBPACK_IMPORTED_MODULE_2___default()().add(daysGap, `day`).add(hourGap, `hour`).add(minGap, `minute`).toDate();
};

const generateDescription = () => {
  const randomIndex = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, TEXT.length - 1);

  return TEXT[randomIndex];
};


const generatePhotos = () => {
  const photos = [];
  const randomIndex = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 5);

  for (let i = 0; i < randomIndex; i++) {
    photos.unshift({photoPath: `http://picsum.photos/248/152?r=${Math.random()}`});
  }

  return photos;
};


const generateValue = (range) => {
  const randomIndex = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, range.length - 1);

  return range[randomIndex];
};

const generateOffers = () => {
  const offers = new Map();
  _const__WEBPACK_IMPORTED_MODULE_1__["EVENT_TYPES"].forEach((eventType) => {
    const relatedDeals = [];
    for (let i = 0; i < OFFERS_AMOUNT; i++) {
      relatedDeals.push({
        type: eventType,
        name: _const__WEBPACK_IMPORTED_MODULE_1__["EVENT_OFFERS"][Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_1__["EVENT_OFFERS"].length - 1)],
        id: generateId(),
        price: Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(3, 150),
      });
    }
    offers.set(eventType, relatedDeals.slice(0, Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, OFFERS_AMOUNT)));
  });
  return offers;
};

const generateEvent = () => {
  const eventStart = generateStartDate();
  const eventEnd = generateEndDate(eventStart);
  const travelDuration = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(eventEnd).diff(eventStart, `minutes`);
  const city = generateCities();
  const eventType = generateValue(_const__WEBPACK_IMPORTED_MODULE_1__["EVENT_TYPES"]);
  const isFavorite = Boolean(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1));
  const description = generateDescription();
  const photos = generatePhotos();
  const price = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(3, 150);
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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: createElement, getRandomInteger, capitalize, humaneEventDate, humaneEventTime, humaneEditEventTime, createPrepositions, render, renderTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humaneEventDate", function() { return humaneEventDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humaneEventTime", function() { return humaneEventTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humaneEditEventTime", function() { return humaneEditEventTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrepositions", function() { return createPrepositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/const.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const humaneEventDate = (dueDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dueDate).format(`D MMM`);
};

const humaneEventTime = (dueDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dueDate).format(`HH:mm`);
};

const humaneEditEventTime = (dueDate) => {
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(dueDate).format(`DD/MM/YY HH:mm`);
};

const createPrepositions = (type) => {
  return _const_js__WEBPACK_IMPORTED_MODULE_0__["TRANSFER_EVENTS"].includes(type) ? `to` : `in`;
};

const render = (container, element, place) => {
  switch (place) {
    case _const_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN:
      container.prepend(element);
      break;
    case _const_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};



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
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");




const createEditEventTemplate = (event = {}) => {
  const {
    city,
    eventType,
    eventStart,
    eventEnd,
    price,
    offers,
    description,
    photos
  } = event;

  const createDetailsSection = () => {
    const offersSection = createOffersSection();
    return `
    ${offersSection}
    `;
  };


  const createOffersSection = () => {
    return `
    ${offersTemplate}
    `;
  };

  const createPhotosSection = () => {
    return `
    ${photos.map(({photoPath}) => `
      <img class="event__photo" src=${photoPath}" alt="Event photo">
    `).join(``)}
    `;
  };

  const offerTemplate = (offer) => {
    const {id, name, isChecked} = offer;
    return ` <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id}" ${isChecked ? `checked` : ``}>
                        <label class="event__offer-label" for="event-offer-${id}">
                          <span class="event__offer-title">${name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>`;
  };

  const createOffers = () => {
    return `
    ${offers.map((offer) => offerTemplate(offer)).join(``)}
    `;
  };

  const createEventTypeItems = () => {
    return `
    ${_const__WEBPACK_IMPORTED_MODULE_0__["EVENT_TYPES"].map(({type, name, image, id}) => `
      <div class="event__type-item">
          <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${name}">
          <label class="event__type-label  event__type-label--${image}" for="event-type-${type}-${id}">${name}</label>
      </div>`).join(``)}
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
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${eventType.toLowerCase()}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${eventTypeItems}
                        </fieldset>
                    </div>
                    </div>

                    <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(eventType)}  ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["createPrepositions"])(eventType)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>


                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${Object(_util__WEBPACK_IMPORTED_MODULE_1__["humaneEditEventTime"])(eventStart)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${Object(_util__WEBPACK_IMPORTED_MODULE_1__["humaneEditEventTime"])(eventEnd)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
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


class EditEventView {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createEditEventTemplate(this._event);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");


const createEmptyListTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

class EmptyListView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEmptyListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");




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
                <time class="event__date" datetime="${eventStart}">${Object(_util__WEBPACK_IMPORTED_MODULE_0__["humaneEventDate"])(eventStart)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${eventType} ${Object(_util__WEBPACK_IMPORTED_MODULE_0__["createPrepositions"])(eventType)} ${city}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${eventStart}">${Object(_util__WEBPACK_IMPORTED_MODULE_0__["humaneEventTime"])(eventStart)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${eventEnd}">${Object(_util__WEBPACK_IMPORTED_MODULE_0__["humaneEventTime"])(eventEnd)}</time>
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

class EventView {
  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");


const createListTemplate = () => {
  return `<ul class="trip-events__list"></ul>`;
};

class ListView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");




const createSiteMenuTemplate = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn" href="#">${Object(_util__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(_const__WEBPACK_IMPORTED_MODULE_1__["MenuTabs"].TABLE)}</a>
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${Object(_util__WEBPACK_IMPORTED_MODULE_0__["capitalize"])(_const__WEBPACK_IMPORTED_MODULE_1__["MenuTabs"].STATS)}</a>
  </nav>`;
};

class SiteMenuView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
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

class TripFiltersView {
  constructor(filter) {
    this._filter = filter;
    this._element = null;
  }

  getTemplate() {
    return createTripFiltersTemplate(this._filter);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");


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

class TripInfoView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");




const createTripSortingTemplate = () => {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>
      <div class="trip-sort__item  trip-sort__item--event" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortTypes"].EVENT}">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" checked>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--time" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortTypes"].TIME}">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
        <label class="trip-sort__btn" for="sort-time">
          Time
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>
      <div class="trip-sort__item  trip-sort__item--price" data-sort-type="${_const__WEBPACK_IMPORTED_MODULE_1__["SortTypes"].PRICE}">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
        <label class="trip-sort__btn" for="sort-price">
          Price
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>
      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
    </form>`
  );
};

class SortingView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripSortingTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}




/***/ })

/******/ });