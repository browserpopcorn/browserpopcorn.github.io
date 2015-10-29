/*
Project Name: SSPlayer
Project URI: http://ssplayer.merokay.net/
Author: Emre OKAY
Author URI: http://emreokay.net/
Description: SSPlayer HTML5 teknolojisi kullanan bir video oynatıcıdır. Kullanıcılarından gelen öneriler doğrultusunda geliştirilmeye devam edilmektedir.
Version: 3.0.0
License: CC0 1.0 Universal
License URI: http://creativecommons.org/publicdomain/zero/1.0
Note: Bu proje her türlü projenizde kullanılabilir. Fakat projenin orjinali, üzerinde yapılan birkaç değişiklik üzerinden herhangi bir ticari faaliyette bulunamazsınız.
*/

/* NOUISlider | https://github.com/leongersen/noUiSlider/ */
!function(a){"use strict";function b(a,b){return Math.round(a/b)*b}function c(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function d(a){var b=Math.pow(10,7);return Number((Math.round(a*b)/b).toFixed(7))}function e(a,b,c){a.addClass(b),setTimeout(function(){a.removeClass(b)},c)}function f(a){return Math.max(Math.min(a,100),0)}function g(b){return a.isArray(b)?b:[b]}function h(a){var b=a.split(".");return b.length>1?b[1].length:0}function i(a,b){return 100/(b-a)}function j(a,b){return 100*b/(a[1]-a[0])}function k(a,b){return j(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function l(a,b){return b*(a[1]-a[0])/100+a[0]}function m(a,b){for(var c=1;a>=b[c];)c+=1;return c}function n(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=m(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+k([d,e],c)/i(f,g)}function o(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=m(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],l([d,e],(c-f)*i(f,g))}function p(a,c,d,e){if(100===e)return e;var f,g,h=m(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):c[h-1]?a[h-1]+b(e-a[h-1],c[h-1]):e}function q(a,b,d){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!c(e)||!c(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");d.xPct.push(e),d.xVal.push(b[0]),e?d.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(d.xSteps[0]=b[1])}function r(a,b,c){return b?void(c.xSteps[a]=j([c.xVal[a],c.xVal[a+1]],b)/i(c.xPct[a],c.xPct[a+1])):!0}function s(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)q(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)r(e,this.xNumSteps[e],this)}function t(a,b){if(!c(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function u(b,c){if("object"!=typeof c||a.isArray(c))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===c.min||void 0===c.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");b.spectrum=new s(c,b.snap,b.dir,b.singleStep)}function v(b,c){if(c=g(c),!a.isArray(c)||!c.length||c.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");b.handles=c.length,b.start=c}function w(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function x(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function y(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function z(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function A(a,b){if(!c(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(a.margin=a.spectrum.getMargin(b),!a.margin)throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function B(a,b){if(!c(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function C(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function D(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0;a.events={tap:c||f,drag:d,fixed:e,snap:f}}function E(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function F(b){var c,d={margin:0,limit:0,animate:!0,format:V};return c={step:{r:!1,t:t},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:C},snap:{r:!1,t:w},animate:{r:!1,t:x},range:{r:!0,t:u},orientation:{r:!1,t:z},margin:{r:!1,t:A},limit:{r:!1,t:B},behaviour:{r:!0,t:D},format:{r:!1,t:E}},b=a.extend({connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal"},b),a.each(c,function(a,c){if(void 0===b[a]){if(c.r)throw new Error("noUiSlider: '"+a+"' is required.");return!0}c.t(d,b[a])}),d.style=d.ort?"top":"left",d}function G(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[f(d),f(e)]):[d,e]}function H(a){a.preventDefault();var b,c,d=0===a.type.indexOf("touch"),e=0===a.type.indexOf("mouse"),f=0===a.type.indexOf("pointer"),g=a;return 0===a.type.indexOf("MSPointer")&&(f=!0),a.originalEvent&&(a=a.originalEvent),d&&(b=a.changedTouches[0].pageX,c=a.changedTouches[0].pageY),(e||f)&&(f||void 0!==window.pageXOffset||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),b=a.clientX+window.pageXOffset,c=a.clientY+window.pageYOffset),g.points=[b,c],g.cursor=e,g}function I(b,c){var d=a("<div><div/></div>").addClass(U[2]),e=["-lower","-upper"];return b&&e.reverse(),d.children().addClass(U[3]+" "+U[3]+e[c]),d}function J(a,b,c){switch(a){case 1:b.addClass(U[7]),c[0].addClass(U[6]);break;case 3:c[1].addClass(U[6]);case 2:c[0].addClass(U[7]);case 0:b.addClass(U[6])}}function K(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(I(b,d).appendTo(c));return e}function L(b,c,d){return d.addClass([U[0],U[8+b],U[4+c]].join(" ")),a("<div/>").appendTo(d).addClass(U[1])}function M(b,c,d){function i(){return C[["width","height"][c.ort]]()}function j(a){var b,c=[E.val()];for(b=0;b<a.length;b+=1)E.trigger(a[b],c)}function k(a){return 1===a.length?a[0]:c.dir?a.reverse():a}function l(a){return function(b,c){E.val([a?null:c,a?c:null],!0)}}function m(b){var c=a.inArray(b,N);E[0].linkAPI&&E[0].linkAPI[b]&&E[0].linkAPI[b].change(M[c],D[c].children(),E)}function n(b,d){var e=a.inArray(b,N);return d&&d.appendTo(D[e].children()),c.dir&&c.handles>1&&(e=1===e?0:1),l(e)}function o(){var a,b;for(a=0;a<N.length;a+=1)this.linkAPI&&this.linkAPI[b=N[a]]&&this.linkAPI[b].reconfirm(b)}function p(a,b,d,e){return a=a.replace(/\s/g,S+" ")+S,b.on(a,function(a){return E.attr("disabled")?!1:E.hasClass(U[14])?!1:(a=H(a),a.calcPoint=a.points[c.ort],void d(a,e))})}function q(a,b){var c,d=b.handles||D,e=!1,f=100*(a.calcPoint-b.start)/i(),g=d[0][0]!==D[0][0]?1:0;c=G(f,b.positions,d.length>1),e=v(d[0],c[g],1===d.length),d.length>1&&(e=v(d[1],c[g?0:1],!1)||e),e&&j(["slide"])}function r(b){a("."+U[15]).removeClass(U[15]),b.cursor&&a("body").css("cursor","").off(S),Q.off(S),E.removeClass(U[12]),j(["set","change"])}function s(b,c){1===c.handles.length&&c.handles[0].children().addClass(U[15]),b.stopPropagation(),p(T.move,Q,q,{start:b.calcPoint,handles:c.handles,positions:[F[0],F[D.length-1]]}),p(T.end,Q,r,null),b.cursor&&(a("body").css("cursor",a(b.target).css("cursor")),D.length>1&&E.addClass(U[12]),a("body").on("selectstart"+S,!1))}function t(b){var d,f=b.calcPoint,g=0;b.stopPropagation(),a.each(D,function(){g+=this.offset()[c.style]}),g=g/2>f||1===D.length?0:1,f-=C.offset()[c.style],d=100*f/i(),c.events.snap||e(E,U[14],300),v(D[g],d),j(["slide","set","change"]),c.events.snap&&s(b,{handles:[D[g]]})}function u(a){var b,c;if(!a.fixed)for(b=0;b<D.length;b+=1)p(T.start,D[b].children(),s,{handles:[D[b]]});a.tap&&p(T.start,C,t,{handles:D}),a.drag&&(c=C.find("."+U[7]).addClass(U[10]),a.fixed&&(c=c.add(C.children().not(c).children())),p(T.start,c,s,{handles:D}))}function v(a,b,d){var e=a[0]!==D[0][0]?1:0,g=F[0]+c.margin,h=F[1]-c.margin,i=F[0]+c.limit,j=F[1]-c.limit;return D.length>1&&(b=e?Math.max(b,g):Math.min(b,h)),d!==!1&&c.limit&&D.length>1&&(b=e?Math.min(b,i):Math.max(b,j)),b=I.getStep(b),b=f(parseFloat(b.toFixed(7))),b===F[e]?!1:(a.css(c.style,b+"%"),a.is(":first-child")&&a.toggleClass(U[17],b>50),F[e]=b,M[e]=I.fromStepping(b),m(N[e]),!0)}function w(a,b){var d,e,f;for(c.limit&&(a+=1),d=0;a>d;d+=1)e=d%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=c.format.from(f),(f===!1||isNaN(f)||v(D[e],I.toStepping(f),d===3-c.dir)===!1)&&m(N[e]))}function x(a){if(E[0].LinkIsEmitting)return this;var b,d=g(a);return c.dir&&c.handles>1&&d.reverse(),c.animate&&-1!==F[0]&&e(E,U[14],300),b=D.length>1?3:1,1===d.length&&(b=1),w(b,d),j(["set"]),this}function y(){var a,b=[];for(a=0;a<c.handles;a+=1)b[a]=c.format.to(M[a]);return k(b)}function z(){return a(this).off(S).removeClass(U.join(" ")).empty(),delete this.LinkUpdate,delete this.LinkConfirm,delete this.LinkDefaultFormatter,delete this.LinkDefaultFlag,delete this.reappend,delete this.vGet,delete this.vSet,delete this.getCurrentStep,delete this.getInfo,delete this.destroy,d}function A(){var b=a.map(F,function(a,b){var c=I.getApplicableStep(a),d=h(String(c[2])),e=M[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),i=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[[i,f]]});return k(b)}function B(){return d}var C,D,E=a(b),F=[-1,-1],I=c.spectrum,M=[],N=["lower","upper"].slice(0,c.handles);if(c.dir&&N.reverse(),b.LinkUpdate=m,b.LinkConfirm=n,b.LinkDefaultFormatter=c.format,b.LinkDefaultFlag="lower",b.reappend=o,E.hasClass(U[0]))throw new Error("Slider was already initialized.");C=L(c.dir,c.ort,E),D=K(c.handles,c.dir,C),J(c.connect,E,D),u(c.events),b.vSet=x,b.vGet=y,b.destroy=z,b.getCurrentStep=A,b.getOriginalOptions=B,b.getInfo=function(){return[I,c.style,c.ort]},E.val(c.start)}function N(a){var b=F(a,this);return this.each(function(){M(this,b,a)})}function O(b){return this.each(function(){if(!this.destroy)return void a(this).noUiSlider(b);var c=a(this).val(),d=this.destroy(),e=a.extend({},d,b);a(this).noUiSlider(e),this.reappend(),d.start===e.start&&a(this).val(c)})}function P(){return this[0][arguments.length?"vSet":"vGet"].apply(this[0],arguments)}var Q=a(document),R=a.fn.val,S=".nui",T=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},U=["noUi-target","noUi-base","noUi-origin","noUi-handle","noUi-horizontal","noUi-vertical","noUi-background","noUi-connect","noUi-ltr","noUi-rtl","noUi-dragable","","noUi-state-drag","","noUi-state-tap","noUi-active","","noUi-stacking"];s.prototype.getMargin=function(a){return 2===this.xPct.length?j(this.xVal,a):!1},s.prototype.toStepping=function(a){return a=n(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},s.prototype.fromStepping=function(a){return this.direction&&(a=100-a),d(o(this.xVal,this.xPct,a))},s.prototype.getStep=function(a){return this.direction&&(a=100-a),a=p(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},s.prototype.getApplicableStep=function(a){var b=m(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},s.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var V={to:function(a){return a.toFixed(2)},from:Number};a.fn.val=function(b){function c(a){return a.hasClass(U[0])?P:R}if(!arguments.length){var d=a(this[0]);return c(d).call(d)}var e=a.isFunction(b);return this.each(function(d){var f=b,g=a(this);e&&(f=b.call(this,d,g.val())),c(g).call(g,f)})},a.fn.noUiSlider=function(a,b){switch(a){case"step":return this[0].getCurrentStep();case"options":return this[0].getOriginalOptions()}return(b?O:N).call(this,a)}}(window.jQuery||window.Zepto);


/* jQuery Browser Plugin | https://github.com/gabceb/jquery-browser-plugin */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){b(c,a)}):b(jQuery,a)}(this,function(a,b){"use strict";var c,d;if(a.uaMatch=function(a){a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[];return{browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""}},c=a.uaMatch(b.navigator.userAgent),d={},c.browser&&(d[c.browser]=!0,d.version=c.version,d.versionNumber=parseInt(c.versionNumber,10)),c.platform&&(d[c.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.edge){var e="msie";c.browser=e,d[e]=!0}if(d.safari&&d.blackberry){var f="blackberry";c.browser=f,d[f]=!0}if(d.safari&&d.playbook){var g="playbook";c.browser=g,d[g]=!0}if(d.bb){var h="blackberry";c.browser=h,d[h]=!0}if(d.opr){var i="opera";c.browser=i,d[i]=!0}if(d.safari&&d.android){var j="android";c.browser=j,d[j]=!0}if(d.safari&&d.kindle){var k="kindle";c.browser=k,d[k]=!0}if(d.safari&&d.silk){var l="silk";c.browser=l,d[l]=!0}return d.name=c.browser,d.platform=c.platform,a.browser=d,d});


/*! Idle Timer v1.0.1 2014-03-21 | https://github.com/thorst/jquery-idletimer | (c) 2014 Paul Irish | Licensed MIT */
!function(a){a.idleTimer=function(b,c){var d;"object"==typeof b?(d=b,b=null):"number"==typeof b&&(d={timeout:b},b=null),c=c||document,d=a.extend({idle:!1,timeout:3e4,events:"mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"},d);var e=a(c),f=e.data("idleTimerObj")||{},g=function(b){var d=a.data(c,"idleTimerObj")||{};d.idle=!d.idle,d.olddate=+new Date;var e=a.Event((d.idle?"idle":"active")+".idleTimer");a(c).trigger(e,[c,a.extend({},d),b])},h=function(b){var d=a.data(c,"idleTimerObj")||{};if(null==d.remaining){if("mousemove"===b.type){if(b.pageX===d.pageX&&b.pageY===d.pageY)return;if("undefined"==typeof b.pageX&&"undefined"==typeof b.pageY)return;var e=+new Date-d.olddate;if(200>e)return}clearTimeout(d.tId),d.idle&&g(b),d.lastActive=+new Date,d.pageX=b.pageX,d.pageY=b.pageY,d.tId=setTimeout(g,d.timeout)}},i=function(){var b=a.data(c,"idleTimerObj")||{};b.idle=b.idleBackup,b.olddate=+new Date,b.lastActive=b.olddate,b.remaining=null,clearTimeout(b.tId),b.idle||(b.tId=setTimeout(g,b.timeout))},j=function(){var b=a.data(c,"idleTimerObj")||{};null==b.remaining&&(b.remaining=b.timeout-(+new Date-b.olddate),clearTimeout(b.tId))},k=function(){var b=a.data(c,"idleTimerObj")||{};null!=b.remaining&&(b.idle||(b.tId=setTimeout(g,b.remaining)),b.remaining=null)},l=function(){var b=a.data(c,"idleTimerObj")||{};clearTimeout(b.tId),e.removeData("idleTimerObj"),e.off("._idleTimer")},m=function(){var b=a.data(c,"idleTimerObj")||{};if(b.idle)return 0;if(null!=b.remaining)return b.remaining;var d=b.timeout-(+new Date-b.lastActive);return 0>d&&(d=0),d};if(null===b&&"undefined"!=typeof f.idle)return i(),e;if(null===b);else{if(null!==b&&"undefined"==typeof f.idle)return!1;if("destroy"===b)return l(),e;if("pause"===b)return j(),e;if("resume"===b)return k(),e;if("reset"===b)return i(),e;if("getRemainingTime"===b)return m();if("getElapsedTime"===b)return+new Date-f.olddate;if("getLastActiveTime"===b)return f.lastActive;if("isIdle"===b)return f.idle}return e.on(a.trim((d.events+" ").split(" ").join("._idleTimer ")),function(a){h(a)}),f=a.extend({},{olddate:+new Date,lastActive:+new Date,idle:d.idle,idleBackup:d.idle,timeout:d.timeout,remaining:null,tId:null,pageX:null,pageY:null}),f.idle||(f.tId=setTimeout(g,f.timeout)),a.data(c,"idleTimerObj",f),e},a.fn.idleTimer=function(b){return this[0]?a.idleTimer(b,this[0]):this}}(jQuery);

/* SSPlayer | https://github.com/emreokay/ssplayer/ */
(function($){
	
$.fn.ssplayer	=	function( settings ){
	
	/* A. USER SETTINGS
	----------------------------------------------------------------------------------------------------*/
	var a	=	$.extend({
		
		volume: 100,
		source: false,
		languages: false,
		quality: false,
		share: false,
		promo: false,
		subtitle: false,
		advertising: false,
		infinite: false,
		annotations: false,
		autoplay: false,
		speed: false,
		logo: false,
		whatsapp: "SSPlayer",
		iframe: false

	}, settings);
	
	/* ---------------------------------------------------------------------------------------------------
	 * B. PLUGIN CODES
	------------------------------------------------------------------------------------------------------
	 *  1. CKPlayer Construction
	 *  2. Default Variables
	 *  3. Default Settings
	 *  4. Controls Codes
	 *  5. Controls Codes
	 *  6. Layers Codes
	 *  7. Promo Codes
	 *  8. Advertising Codes
	----------------------------------------------------------------------------------------------------*/
	
	return this.each(function(){
		
		/* -----------------------------------------------------------------------------------------------
		 *  0. Browser Control
		------------------------------------------------------------------------------------------------*/
		if( $.browser.name == "safari" ){
			a.volume = false;
			a.source = false;
			a.languages = false;
			a.quality = false;
			a.share = false;
			a.promo = false;
			a.subtitle = false;
			a.advertising = false;
			a.infinite = false;
			a.annotations = false;
			a.autoplay = false;
			a.speed = false;
			a.logo = false;
			a.whatsapp = false;
			a.iframe = false;
		};
		
		/* -----------------------------------------------------------------------------------------------
		 *  1. CKPlayer Construction
		------------------------------------------------------------------------------------------------*/
		$(this).wrap('<div id="ss-video-player"><div class="ss-video"></div></div>');
		$("#ss-video-player").append('<div class="ss-controls"></div>' +
									 '<div class="ss-layers"></div>');
		
		/* -----------------------------------------------------------------------------------------------
		 *  2. Default Variables
		------------------------------------------------------------------------------------------------*/
		var container	=	$("#ss-video-player"),
			ssvideo		=	$(this)[0],
			id			=	$(this).attr("id"),
			minwidth	=	640,
			u			=	"undefined",
			volume		=	Math.floor(a.volume),
			fade		=	200,
			href		=	window.location,
			playCount	=	0;
					
		/* -----------------------------------------------------------------------------------------------
		 * 4. Default Settings
		 * 4.1. Tag Codes
		 * 4.2. Width & Height Codes
		------------------------------------------------------------------------------------------------*/
			/* 4.1. Tag Settings
			--------------------------------------------------------------------------------------------*/
			$("#"+ id +"").removeAttr("controls");
			$("#"+ id +"").removeAttr("loop");
			$("#"+ id +"").removeAttr("autoplay");
			$("#"+ id +"").attr("preload", "auto");
			
			/* 4.2. Width & Height Codes
			--------------------------------------------------------------------------------------------*/
			var defaultwidth  = $("#"+ id +"").attr("width"),
				defaultheight = $("#"+ id +"").attr("height");
			
			if( a.iframe == true ){
				var bodyWidth = $("body").width();
				defaultwidth = bodyWidth;
				defaultheight = "100%";
			}else if( a.iframe == false ){
				if( defaultwidth == undefined ){
					defaultwidth = minwidth;
					defaultheight = resizeHeight(minwidth);
				}else {
					var widthSearch = defaultwidth.search("%");
					if( widthSearch != -1 ){
						var parentWidth = $("#ss-video-player").parent().width();
						var defaultWidthPercent = parseInt(defaultwidth.split("%")[0], 10);
						var containerWidth = ((parentWidth * defaultWidthPercent) / 100);
						if( containerWidth > minwidth ){
							defaultwidth = containerWidth;
							defaultheight = resizeHeight(containerWidth);
						}else {
							defaultwidth = minwidth;
							defaultheight = resizeHeight(minwidth);
						}
					}else {
						if(typeof(defaultwidth) !== u && typeof(defaultheight) == u) {
							if( defaultwidth < minwidth ){defaultwidth = minwidth;}
							defaultheight = resizeHeight(defaultwidth);
						}else if(typeof(defaultwidth) !== u && typeof(defaultheight) !== u) {
							defaultwidth = defaultwidth;
							defaultheight = defaultheight;
						};
					}
				}
			};
			
			$("#"+ id +"").attr("width", defaultwidth);
			$("#"+ id +"").attr("height", defaultheight);
			container.width(defaultwidth);
			container.height(defaultheight);
			
			if (self != top) {
				container.css({"overflow" : "hidden"});
			};
		
		/* -----------------------------------------------------------------------------------------------
		 * 5. Controls Codes
		 * 5.1. Progress Codes
		 * 5.2. Control Left Codes
		 * 5.3. Control Rigth Codes
		------------------------------------------------------------------------------------------------*/
		$(".ss-controls").append('<div class="ss-controls-container">' +
									'<div class="ss-time-rail"></div>' +
								 	'<div class="ss-progress"></div>' +
									'<div class="ss-control">' +
										'<div class="ss-control-left"></div>' +
										'<div class="ss-control-right"></div>' +
									'</div>' +
								 '</div>');
		
		controlCss("controls-container", defaultwidth);
		
			/* 5.1. Progress Codes
			--------------------------------------------------------------------------------------------*/
			$(".ss-progress").append('<div class="ss-progress-container">' +
									 	'<div class="ss-progress-total"></div>' +
									 	'<div class="ss-progress-buffered"></div>' +
									 	'<div class="ss-progress-current"></div>' +
									 	'<div class="ss-progress-handle"></div>' +
								 	'</div>');			
			controlCss("progress", defaultwidth);
			
			$(".ss-progress").mousemove(function(e){
				duration = ssvideo.duration;
				var mouseX = e.pageX - ($("#ss-video-player").offset().left + 16);
				var timeRail = ((duration * mouseX) / $(".ss-progress").outerWidth());
				if( timeRail >= 0 && timeRail <= duration ){
					$(".ss-time-rail").stop().fadeIn(fade);
					$(".ss-time-rail").text(readableDuration(timeRail));
					if( mouseX <= $(".ss-time-rail").outerWidth() / 2 ){
						$(".ss-time-rail").css("left", 0);
						$(".ss-time-rail").css("margin-left", 8);
					}else if( mouseX >= ($(".ss-progress").outerWidth(true) - ($(".ss-time-rail").outerWidth() / 2)) ) {
						$(".ss-time-rail").css("left", $(".ss-progress").outerWidth());
						$(".ss-time-rail").css("margin-left", - ($(".ss-time-rail").outerWidth() - 8));
					}else {
						$(".ss-time-rail").css("left", mouseX + 8);
						$(".ss-time-rail").css("margin-left", - ($(".ss-time-rail").outerWidth()/2));
					}
				}
			});
			
			$(".ss-progress").mouseout(function(e){
				$(".ss-time-rail").stop().fadeOut(fade);
			});
			
			$(".ss-progress").on('click', function(e){
				// farenin  x konumu
				var posX = $(".ss-progress").offset().left;
				
				
				
				// progress barın toplam genişliği
				var totalWidth = $(".ss-progress").width(),
				
				// farenin tıklanan nesneden x ekseninda uzaklığı (genişliği)
				currentWidth = e.pageX - posX;
					
				// tıklanan yere göre % değeri
				var clicked = (currentWidth / totalWidth) * 100;
			
				// bilinen % değerine göre zaman hesabı
				var resultSecond = ssvideo.duration * clicked / 100;
			
				$(".ss-progress-current").width(clicked + '%');
				$(".ss-progress-handle").css({ "left" : clicked + '%'});
				
				ssvideo.currentTime = resultSecond;
				var dataStatus = $(".ss-video").attr("data-status");
				if( dataStatus == "pause" || dataStatus == undefined ){
					ssvideo.pause();
				}else if( dataStatus == "play" ) {
					ssvideo.play();
				}
								
			});
			
			ssvideo.addEventListener('progress', function(){
				var buffered = $('.ss-progress-buffered');
				try {
					var currentBuffered = ssvideo.buffered.end(ssvideo.buffered.length - 1) / ssvideo.duration * 100;
					buffered.width(currentBuffered + '%');
				} catch ( err ){
				}
			});
			
						
			/* 5.2. Control Left Codes
			--------------------------------------------------------------------------------------------*/
				/* 5.2.1. Play - Pause - Repeat Codes
				----------------------------------------------------------------------------------------*/
				$(".ss-control-left").append('<div class="ss-play-pause-repeat-buttons">' +
												 '<div class="ss-play ss-tooltip" data-content="Oynat" data-type="top-left" data-css="8,28"></div>' +
												 '<div class="ss-pause ss-tooltip none" data-content="Durdur" data-type="top-left" data-css="8,28"></div>' +
												 '<div class="ss-repeat ss-tooltip none"  data-content="Tekrarla" data-type="top-left" data-css="8,28"></div>' +
											 '</div>');
				
				$(".ss-play").on("click", function(){
					ssvideo.play();
				});
				$(".ss-pause").on("click", function(){
					ssvideo.pause();
				});
				$(".ss-repeat").on("click", function(){
					ssvideo.currentTime = 0;
					ssvideo.play();
				});
				
				/* 5.2.2. Volume Icon Codes
				----------------------------------------------------------------------------------------*/
				$(".ss-control-left").append('<div class="ss-volume">' +
												 '<div class="ss-volume-up ss-tooltip" data-content="Yüksek Ses" data-type="top-center" data-css="0,28"></div>' +
												 '<div class="ss-volume-down ss-tooltip none" data-content="Normal Ses" data-type="top-center" data-css="0,28"></div>' +
												 '<div class="ss-volume-mute ss-tooltip none" data-content="Düşük Ses" data-type="top-center" data-css="0,28"></div>' +
												 '<div class="ss-volume-off ss-tooltip none" data-content="Sessiz" data-type="top-center" data-css="0,28"></div>' +
											 '</div>');
				
				/* 5.2.3. Time Codes
				----------------------------------------------------------------------------------------*/
				$(".ss-control-left").append('<div class="ss-time">' +
											 '<div class="ss-current">'+ readableDuration(0) +'</div>' +
											 '<div class="ss-time-split">/</div>' +
											 '<div class="ss-duration">'+ readableDuration(0) +'</div>' +
										 '</div>');
				
			
			/* 5.3. Control Right Codes
			--------------------------------------------------------------------------------------------*/
				/* 5.3.1. Fullscreen Codes
				----------------------------------------------------------------------------------------*/
				$(".ss-control-right").append('<div class="ss-fullscreen">' +
												  '<div class="ss-enterfullscreen ss-tooltip"  data-content="Tam Ekran" data-type="top-right" data-css="8,28"></div>' +
												  '<div class="ss-exitfullscreen ss-tooltip none"  data-content="Normal Ekran" data-type="top-right" data-css="8,28"></div>' +
											  '</div>');
				
				$(".ss-enterfullscreen").on("click", globalEnterFullscreen);
				$(".ss-exitfullscreen").on("click", globalExitFullscreen);
				
				/* 5.3.2. Video Speed
				----------------------------------------------------------------------------------------*/
				if( a.speed == true ){
					$(".ss-control-right").append('<div class="ss-speed ss-tooltip" data-content="Video Oynatma Hızı" data-type="top-center" data-css="-16,28"></div>');
					
					$(".ss-layers").append('<div class="ss-table ss-speed">' +
												'<div class="ss-title">Video Oynatma Hızı</div>' +
												'<div class="ss-row" data-speed="2">2.00</div>' +
												'<div class="ss-row" data-speed="1.5">1.50</div>' +
												'<div class="ss-row selected" data-speed="1">Normal</div>' +
												'<div class="ss-row" data-speed="0.75">0.75</div>' +
												'<div class="ss-row" data-speed="0.50">0.50</div>' +
											'</div>');
					
					tableCss("ss-speed");
					tableFadeToggle("ss-speed");
									
					$(".ss-table.ss-speed").on("click", ".ss-row", function(){
						$(this).parent().stop().fadeOut(fade);
						$(".ss-table.ss-speed .ss-row").removeClass("selected");
						$(this).addClass("selected");
						$(".ss-control-right .ss-speed").removeClass("selected");
						var dataSpeed = $(this).attr("data-speed");
						ssvideo.playbackRate = dataSpeed;
					});
				};
				
				/* 5.3.3. Source Codes
				----------------------------------------------------------------------------------------*/
					// Type source-language
					if( a.source != false && a.source.type == "source-language" ){
						// Varsayılanları atama işlemleri
						// Control-Right
						$(".ss-control-right").append('<div class="ss-source ss-tooltip" data-content="Kaynak Seçimi" data-type="top-center" data-css="0,28"></div>' +
													  '<div class="ss-language ss-tooltip" data-content="Lisan Seçimi" data-type="top-center" data-css="0,28"></div>' +
													  '<div class="ss-quality ss-tooltip" data-content="Kalite Seçimi" data-type="top-center" data-css="0,28"></div>');
						
						// Layers (Kaynak Dil Kalite) Alanlarını Ekleyelim
						$(".ss-layers").append('<div class="ss-table ss-source">' +
													'<div class="ss-title">Kaynak Seçimi</div>' +
												'</div>');
						
						$(".ss-layers").append('<div class="ss-table ss-language">' +
													'<div class="ss-title">Lisan Seçimi</div>' +
												'</div>');
												
						$(".ss-layers").append('<div class="ss-table ss-quality">' +
													'<div class="ss-title">Kalite Seçimi</div>' +
												'</div>');
												
						tableCss("ss-source");
						tableCss("ss-language");
						tableCss("ss-quality");
						
						tableFadeToggle("ss-source");
						tableFadeToggle("ss-language");
						tableFadeToggle("ss-quality");
						
						// Kaynakların tümünü ekrana yazdıralım
						$.each( a.source, function( source, content ){
							if( source != "type" && source != "default" ){
								$(".ss-table.ss-source").append('<div class="ss-row" data-source="'+source+'"> '+ content.label +' </div>');
							}
						});
						
						// Seçili Kaynağı Belirtelim
						$(".ss-table.ss-source .ss-row[data-source="+ a.source.default.default.source +"]").addClass("selected");
						
						// Varsayılan Kaynağın Dil Seçeneklerini Yazdıralım
						var defaultSource = a.source.default.default.source;
						$.each( a.source[defaultSource], function( language, content ){
							if( language != "label" ){
								$(".ss-table.ss-language").append('<div class="ss-row"' + 
																  'data-source="'+ defaultSource +'"' + 
																  'data-language="'+ language +'"' + 
																  '> '+ content.label +' </div>');
							}
						});
						
						// Seçili Dili Belirtelim
						$(".ss-table.ss-language .ss-row[data-language="+ a.source.default.default.language +"]").addClass("selected");
						
						// Varsayılan kaynağın kalite seçeneklerini yazdıralım
						var defaultSource = a.source.default.default.source;
						var defaultLanguage = a.source.default.default.language;
						var loopSource = a.source[defaultSource][defaultLanguage].quality;
						$.each( loopSource, function( quality, src ){
							$(".ss-table.ss-quality").append('<div class="ss-row"' + 
															 'data-source="'+ defaultSource +'"' + 
															 'data-language="'+ defaultLanguage +'"' + 
															 'data-quality="'+ quality +'"' + 
															 'data-src="'+ src +'"' + 
															 '> '+ quality +' </div>');
							qualitytags(quality);
						});
						
						// Seçili Kaliteyi Belirtelim
						$(".ss-table.ss-quality .ss-row[data-quality="+ a.source.default.default.quality +"]").addClass("selected");
						controlqualitytags(a.source.default.default.quality);
						
						// Seçilmiş kalite
						var selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
						qualityChange(selectedQuality, true);
						
						// Kaynakta tıklananı atama işlemleri
						$(".ss-table.ss-source").on("click", ".ss-row", function(){
							$(this).parent().fadeOut(fade);
							$(".ss-control-right .ss-source").removeClass("selected");
							var hasSelected = $(this).hasClass("selected");
							if( hasSelected == false ){
								var dataSource = $(this).attr("data-source");
								var defaultLanguage = a.source.default.clicked[dataSource].language;
								var loopLanguage = a.source[dataSource];
								var loopQaulity = a.source[dataSource][defaultLanguage].quality;
								$(".ss-table.ss-language .ss-row").remove();
								$(".ss-table.ss-quality .ss-row").remove();
								
								// Döngü ile tıklanan kaynağın içindeki dilleri ekrana yazdıralım
								$.each( loopLanguage, function( language, content ){
									if( language != "label" ){
										$(".ss-table.ss-language").append('<div class="ss-row"' + 
																		  'data-source="'+ dataSource +'"' + 
																		  'data-language="'+ language +'"' + 
																		  '> '+ content.label +' </div>');
									}
								});
								
								// Seçili Dili Belirtelim
								$(".ss-table.ss-language .ss-row[data-language="+ defaultLanguage +"]").addClass("selected");
								
								// Döngü ile tıklanan dilin içindeki kaliteleri ekrana yazdıralım
								$.each( loopQaulity, function( quality, src ){
									$(".ss-table.ss-quality").append('<div class="ss-row"' + 
																	 'data-source="'+ dataSource +'"' + 
																	 'data-language="'+ defaultLanguage +'"' + 
																	 'data-quality="'+ quality +'"' + 
																	 'data-src="'+ src +'"' + 
																	 '> '+ quality +' </div>');
									qualitytags(quality);
								});
								
								// Seçili Kaliteyi Belirtelim
								$(".ss-table.ss-quality .ss-row[data-quality="+ a.source.default.clicked[dataSource][a.source.default.clicked[dataSource].language] +"]").addClass("selected");
								
								controlqualitytags(a.source.default.clicked[dataSource][a.source.default.clicked[dataSource].language])
								
								
								$(".ss-table.ss-source .ss-row").removeClass("selected");
								$(this).addClass("selected");
								
								var selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
								qualityChange(selectedQuality);
								
								// Speed
								$(".ss-table.ss-speed .ss-row").removeClass("selected");
								$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
							}
							
						});
						
						// Lisanda tıklananı atama işlemi
						$(".ss-table.ss-language").on("click", ".ss-row", function(){
							$(this).parent().fadeOut(fade);
							$(".ss-control-right .ss-language").removeClass("selected");
							var hasSelected = $(this).hasClass("selected");
							if( hasSelected == false ){
								var dataSource = $(this).attr("data-source");
								var dataLanguage = $(this).attr("data-language");
								var loopQaulity = a.source[dataSource][dataLanguage].quality;
								$(".ss-table.ss-quality .ss-row").remove();
								$.each( loopQaulity, function( quality, src ){
									$(".ss-table.ss-quality").append('<div class="ss-row"' + 
																	 'data-source="'+ dataSource +'"' + 
																	 'data-language="'+ dataLanguage +'"' + 
																	 'data-quality="'+ quality +'"' + 
																	 'data-src="'+ src +'"' + 
																	 '> '+ quality +' </div>');
									qualitytags(quality);
								});
								
								$(".ss-table.ss-quality .ss-row[data-quality="+ a.source.default.clicked[dataSource][dataLanguage] +"]").addClass("selected");
								
								$(".ss-table.ss-language .ss-row").removeClass("selected");
								$(this).addClass("selected");
								
								var selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
								qualityChange(selectedQuality);
								
								// Speed
								$(".ss-table.ss-speed .ss-row").removeClass("selected");
								$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
							}
							
						});
						
						
						// Kaliteye tıklanınca atama işlemleri
						$(".ss-table.ss-quality").on("click", ".ss-row", function(){
							$(this).parent().fadeOut(fade);
							$(".ss-control-right .ss-quality").removeClass("selected");
							var hasSelected = $(this).hasClass("selected");
							if( hasSelected == false ){
								var dataSrc = $(this).attr("data-src");
								var dataQaulity = $(this).attr("data-quality");
								controlqualitytags(dataQaulity);
								$(".ss-table.ss-quality .ss-row").removeClass("selected");
								$(this).addClass("selected");
								selectedQuality = dataSrc;
								qualityChange(selectedQuality);
								// Speed
								$(".ss-table.ss-speed .ss-row").removeClass("selected");
								$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
							}
						});	
						
					};
					
					// Type source-quality
					if( a.source != false && a.source.type == "source-quality" ){
						// Varsayılanları atama işlemleri
						// (Kaynak ve Kalite) Alanlarını Ekleyelim
						$(".ss-control-right").append('<div class="ss-source ss-tooltip" data-content="Kaynak Seçimi" data-type="top-center" data-css="0,28"></div>' +
													  '<div class="ss-quality ss-tooltip" data-content="Kalite Seçimi" data-type="top-center" data-css="0,28"></div>');
													  
						$(".ss-layers").append('<div class="ss-table ss-source">' +
													'<div class="ss-title">Kaynak Seçimi</div>' +
												'</div>');
												
						$(".ss-layers").append('<div class="ss-table ss-quality">' +
													'<div class="ss-title">Kalite Seçimi</div>' +
												'</div>');
						
						tableCss("ss-source");
						tableCss("ss-quality");
						
						tableFadeToggle("ss-source");
						tableFadeToggle("ss-quality");
						
						// Kaynakların tümünü ekrana yazdıralım
						$.each( a.source, function( source, content ){
							if( source != "type" && source != "default" ){
								$(".ss-table.ss-source").append('<div class="ss-row" data-source="'+source+'"> '+ content.label +' </div>');
							}
						});
						
						// Seçili Kaynağı Belirtelim
						$(".ss-table.ss-source .ss-row[data-source="+ a.source.default.default.source +"]").addClass("selected");
						
						// Varsayılan kaynağın kalite seçeneklerini yazdıralım
						var defaultSource = a.source[a.source.default.default.source].quality;
						$.each( defaultSource, function( quality, src ){
							$(".ss-table.ss-quality").append('<div class="ss-row"' + 
															 'data-source="'+ a.source.default.default.source +'"' + 
															 'data-quality="'+ quality +'"' + 
															 'data-src="'+ src +'"' + 
															 '> '+ quality +' </div>');
							qualitytags(quality);
						});
						
						// Seçili Kaliteyi Belirtelim
						$(".ss-table.ss-quality .ss-row[data-quality="+ a.source.default.default.quality +"]").addClass("selected");
						controlqualitytags(a.source.default.default.quality);
						
						// Seçilmiş kalite
						var selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
						qualityChange(selectedQuality, true);
						
						// Kaynakta tıklananı atama işlemleri
						$(".ss-table.ss-source").on("click", ".ss-row", function(){
							$(this).parent().fadeOut(fade);
							$(".ss-control-right .ss-source").removeClass("selected");
							var hasSelected = $(this).hasClass("selected");
							if( hasSelected == false ){
								var dataSource = $(this).attr("data-source");
								$(".ss-table.ss-quality .ss-row").remove();
								$.each( a.source[dataSource].quality, function( quality, src ){
									$(".ss-table.ss-quality").append('<div class="ss-row"' + 
																 'data-source="'+ dataSource +'"' + 
																 'data-quality="'+ quality +'"' + 
																 'data-src="'+ src +'"' + 
																 '> '+ quality +' </div>');
									qualitytags(quality);
								});
								
								$(".ss-table.ss-quality .ss-row[data-quality="+ a.source.default.clicked[dataSource] +"]").addClass("selected");
								selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
								qualityChange(selectedQuality);
								controlqualitytags(a.source.default.clicked[dataSource])
								
								$(".ss-table.ss-source .ss-row").removeClass("selected");
								$(this).addClass("selected");
								
								// Speed
								$(".ss-table.ss-speed .ss-row").removeClass("selected");
								$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
							}
						});
						
						// Kaliteye tıklanınca atama işlemleri
						$(".ss-table.ss-quality").on("click", ".ss-row", function(){
							$(this).parent().fadeOut(fade);
							$(".ss-control-right .ss-quality").removeClass("selected");
							var hasSelected = $(this).hasClass("selected");
							if( hasSelected == false ){
								var dataSrc = $(this).attr("data-src");
								$(".ss-table.ss-quality .ss-row").removeClass("selected");
								var dataQaulity = $(this).attr("data-quality");
								controlqualitytags(dataQaulity);
								$(this).addClass("selected");
								selectedQuality = dataSrc;
								qualityChange(selectedQuality);
								// Speed
								$(".ss-table.ss-speed .ss-row").removeClass("selected");
								$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
							}
						});
						
					};
				
				
				/* 5.3.4. Languages Codes
				----------------------------------------------------------------------------------------*/
				if( a.languages != false ){
					
					// Control-Right
					$(".ss-control-right").append('<div class="ss-language ss-tooltip" data-content="Lisan Seçimi" data-type="top-center" data-css="-,28"></div>' +
												  '<div class="ss-quality ss-tooltip" data-content="Kalite Seçimi" data-type="top-center" data-css="0,28"></div>');
	
					$(".ss-layers").append('<div class="ss-table ss-language">' +
												'<div class="ss-title">Lisan Seçimi</div>' +
											'</div>');
					
					$(".ss-layers").append('<div class="ss-table ss-quality">' +
												'<div class="ss-title">Kalite Seçimi</div>' +
											'</div>');
					tableCss("ss-language");
					tableCss("ss-quality");
					
					tableFadeToggle("ss-language");
					tableFadeToggle("ss-quality");
											
					// Lisanların tümünü ekrana yazdıralım
					$.each( a.languages, function( language, content ){
						if( language != "default" ){
							$(".ss-table.ss-language").append('<div class="ss-row" data-language="'+language+'"> '+ content.label +' </div>');
						}
					});
					
					// Seçili Lisanı Belirtelim
					$(".ss-table.ss-language .ss-row[data-language="+ a.languages.default.default.language +"]").addClass("selected");
					
					// Varsayılan lisanın kalite seçeneklerini yazdıralım
					var defaultLanguage = a.languages.default.default.language;
					var loopSource = a.languages[defaultLanguage].quality;
					$.each( loopSource, function( quality, src ){
						$(".ss-table.ss-quality").append('<div class="ss-row"' + 
														 'data-language="'+ defaultLanguage +'"' + 
														 'data-quality="'+ quality +'"' + 
														 'data-src="'+ src +'"' + 
														 '> '+ quality +' </div>');
						qualitytags(quality);
					});
					
					// Seçili Kaliteyi Belirtelim
					$(".ss-table.ss-quality .ss-row[data-quality="+ a.languages.default.default.quality +"]").addClass("selected");
					controlqualitytags(a.languages.default.default.quality);
					
					// Seçilmiş kalite
					var selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
					qualityChange(selectedQuality, true);
					
					// TIKLAMA İŞLEMLERİ
					$(".ss-language").on("click", ".ss-row", function(){
						$(this).parent().fadeOut(fade);
						$(".ss-control-right .ss-language").removeClass("selected");
						
						var hasSelected = $(this).hasClass("selected");
						if( hasSelected == false ){
							
							$(".ss-language .ss-row").removeClass("selected");
							$(this).addClass("selected");
							
							var dataLanguage = $(this).attr("data-language");
							var loopQaulity = a.languages[dataLanguage].quality;
							$(".ss-table.ss-quality .ss-row").remove();
							$.each( loopQaulity, function( quality, src ){
								$(".ss-table.ss-quality").append('<div class="ss-row"' + 
																 'data-language="'+ dataLanguage +'"' + 
																 'data-quality="'+ quality +'"' + 
																 'data-src="'+ src +'"' + 
																 '> '+ quality +' </div>');
								qualitytags(quality);
							});
							
							$(".ss-table.ss-quality .ss-row[data-quality="+ a.languages.default.clicked[dataLanguage] +"]").addClass("selected");
							
							var selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
							qualityChange(selectedQuality);
							
							// Speed
							$(".ss-table.ss-speed .ss-row").removeClass("selected");
							$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
						}
					});
					
					// Kaliteye tıklanınca atama işlemleri
					$(".ss-table.ss-quality").on("click", ".ss-row", function(){
						$(this).parent().fadeOut(fade);
						$(".ss-control-right .ss-quality").removeClass("selected");
						var hasSelected = $(this).hasClass("selected");
						if( hasSelected == false ){
							var dataSrc = $(this).attr("data-src");
							var dataQaulity = $(this).attr("data-quality");
							controlqualitytags(dataQaulity);
							$(".ss-table.ss-quality .ss-row").removeClass("selected");
							$(this).addClass("selected");
							selectedQuality = dataSrc;
							qualityChange(selectedQuality);
							// Speed
							$(".ss-table.ss-speed .ss-row").removeClass("selected");
							$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
						}
					});
					
				};
				
				/* 5.3.5. Quality Codes
				----------------------------------------------------------------------------------------*/
				if( a.quality != false ){
					
					$(".ss-control-right").append('<div class="ss-quality ss-tooltip" data-content="Kalite Seçimi" data-type="top-center" data-css="-4,28"></div>');
			
					$(".ss-layers").append('<div class="ss-table ss-quality">' +
												'<div class="ss-title">Kalite Seçimi</div>' +
											'</div>');
											
					tableCss("ss-quality");

					tableFadeToggle("ss-quality");
					
					// Varsayılan lisanın kalite seçeneklerini yazdıralım
					$.each( a.quality, function( quality, src ){
						if( quality != "default" ){
							$(".ss-table.ss-quality").append('<div class="ss-row"' + 
														 'data-quality="'+ quality +'"' + 
														 'data-src="'+ src +'"' + 
														 '> '+ quality +' </div>');
							qualitytags(quality);
						}
					});
					
					// Seçili Kaliteyi Belirtelim
					$(".ss-table.ss-quality .ss-row[data-quality="+ a.quality.default +"]").addClass("selected");
					controlqualitytags(a.quality.default);
					
					// Seçilmiş kalite
					var selectedQuality = $(".ss-table.ss-quality .ss-row.selected").attr("data-src");
					qualityChange(selectedQuality, true);
					
					// TIKLAMA İŞLEMLERİ			
					// Kaliteye tıklanınca atama işlemleri
					$(".ss-table.ss-quality").on("click", ".ss-row", function(){
						$(this).parent().fadeOut(fade);
						$(".ss-control-right .ss-quality").removeClass("selected");
						var hasSelected = $(this).hasClass("selected");
						if( hasSelected == false ){
							var dataSrc = $(this).attr("data-src");
							var dataQaulity = $(this).attr("data-quality");
							controlqualitytags(dataQaulity);
							$(".ss-table.ss-quality .ss-row").removeClass("selected");
							$(this).addClass("selected");
							selectedQuality = dataSrc;
							qualityChange(selectedQuality);
							// Speed
							$(".ss-table.ss-speed .ss-row").removeClass("selected");
							$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
						}
					});
					
				};
				
				/* 5.3.6. Subtitle Codes
				----------------------------------------------------------------------------------------*/
				if( a.subtitle != false ){
					$(".ss-control-right").append('<div class="ss-subtitle ss-tooltip" data-content="Altyazılar" data-type="top-center" data-css="0,28"></div>');
					$(".ss-layers").append('<div class="ss-table ss-subtitle">' +
												'<div class="ss-title">Altyazı Seçimi</div>' +
												'<div class="ss-row" data-type="off">Kapalı</div>' +
											'</div>');
					tableCss("ss-subtitle");
					tableFadeToggle("ss-subtitle");
					
					// Varsayılan lisanın kalite seçeneklerini yazdıralım
					$.each( a.subtitle, function( language, content ){
						if( language != "default" ){
							$(".ss-table.ss-subtitle").append('<div class="ss-row"' + 
															  'data-type="'+ language +'"' + 
															  'data-src="'+ content.src +'"' + 
															  '> '+ content.label +' </div>');
						}
					});
					
					// Seçili altyazıyı belirtelim
					$(".ss-table.ss-subtitle .ss-row[data-type="+ a.subtitle.default +"]").addClass("selected");
					
					if( a.subtitle.default != "off" ){
						$(".ss-layers").append('<div class="ss-layer-subtitle">' +
													'<div class="ss-layer-subtitle-content">Deneme</div>' +
											   '</div>');
											   
						subtitleSrc = a.subtitle[a.subtitle.default].src;
						
						subtitle(id, "ss-layer-subtitle-content", subtitleSrc)
					}
					
					// Tıklama İşlemleri
					$(".ss-table.ss-subtitle").on("click", ".ss-row", function(){
						$(this).parent().fadeOut(fade);
						$(".ss-control-right .ss-subtitle").removeClass("selected");
						var type = $(this).attr("data-type");
						var hasSelected = $(this).hasClass("selected");
						if( hasSelected == false){
							$(".ss-table.ss-subtitle .ss-row").removeClass("selected");
							$(this).addClass("selected");
							if( type == "off" ){
								$(".ss-layers .ss-layer-subtitle").remove();
							}else {
								$(".ss-layers .ss-layer-subtitle").remove();
								$(".ss-layers").append('<div class="ss-layer-subtitle">' +
															'<div class="ss-layer-subtitle-content"></div>' +
													   '</div>');
													   
								subtitleSrc = a.subtitle[type].src;
								subtitle(id, "ss-layer-subtitle-content", subtitleSrc);
							}
						}
					});
					
				};
				
				/* 5.3.7. Infinite Codes
				----------------------------------------------------------------------------------------*/
				if( a.infinite != false ){
					$(".ss-control-right").append('<div class="ss-infinite ss-tooltip" data-content="Sürekli Tekrarlama" data-type="top-center" data-css="0,28"></div>');
					
					$(".ss-layers").append('<div class="ss-table ss-infinite">' +
												'<div class="ss-title">Sürekli Tekrarlama</div>' +
												'<div class="ss-row" data-infinite="true">Açık</div>' +
												'<div class="ss-row" data-infinite="false">Kapalı</div>' +
											'</div>');
					
					tableCss("ss-infinite");
					tableFadeToggle("ss-infinite");
					
					if( a.infinite == "on" ){
						$(".ss-video").attr("data-infinite", true);
						$(".ss-table.ss-infinite .ss-row[data-infinite=true]").addClass("selected");
					}else if( a.infinite == "off" ){
						$(".ss-video").attr("data-infinite", false);
						$(".ss-table.ss-infinite .ss-row[data-infinite=false]").addClass("selected");
					};
					
					$(".ss-table.ss-infinite").on("click", ".ss-row", function(){
						$(this).parent().stop().fadeOut(fade);
						$(".ss-table.ss-infinite .ss-row").removeClass("selected");
						$(this).addClass("selected");
						$(".ss-control-right .ss-infinite").removeClass("selected");
						var dataInfinite= $(this).attr("data-infinite");
						if( dataInfinite == "true" ){
							$(".ss-video").attr("data-infinite", true);
						}else if( dataInfinite == "false" ){
							$(".ss-video").attr("data-infinite", false);
						};
					});
					
					ssvideo.addEventListener("ended", function(){
						var dataInfinite = $(".ss-video").attr("data-infinite");
						if( dataInfinite == "true" ){
							ssvideo.currentTime = 0;
							ssvideo.play();
							$(".ss-play-pause-repeat-buttons div").addClass("none");
							$(".ss-play-pause-repeat-buttons .ss-pause").removeClass("none");
							$(".ss-layer-play-pause div").addClass("none");
							$(".ss-layer-pause").removeClass("none");
						}
					});
					
				};
				
				/* 5.3.8. Annotations Codes
				----------------------------------------------------------------------------------------*/
				if( a.annotations != false ){
					$(".ss-control-right").append('<div class="ss-annotations ss-tooltip" data-content="Ek Açıklamalar" data-type="top-center" data-css="0,28"></div>');
					
					$(".ss-layers").append('<div class="ss-table ss-annotations">' +
												'<div class="ss-title">Ek Açıklamalar</div>' +
												'<div class="ss-row" data-annotations="true">Açık</div>' +
												'<div class="ss-row" data-annotations="false">Kapalı</div>' +
											'</div>');
					
					tableCss("ss-annotations");
					tableFadeToggle("ss-annotations");
					
					if( a.annotations == "on" ){
						$(".ss-video").attr("data-annotations", true);
						$(".ss-table.ss-annotations .ss-row[data-annotations=true]").addClass("selected");
					}else if( a.annotations == "off" ){
						$(".ss-video").attr("data-annotations", false);
						$(".ss-table.ss-annotations .ss-row[data-annotations=false]").addClass("selected");
					};
					
					$(".ss-table.ss-annotations").on("click", ".ss-row", function(){
						$(this).parent().fadeOut(fade);
						$(".ss-table.ss-annotations .ss-row").removeClass("selected");
						$(this).addClass("selected");
						$(".ss-control-right .ss-annotations").removeClass("selected");
					});
					
				};
				
				/* 5.3.9. Share Codes
				----------------------------------------------------------------------------------------*/
				if( a.share != false && a.share == true ){
					$(".ss-control-right").append('<div class="ss-share ss-tooltip" data-content="Paylaş" data-type="top-center" data-css="0,28"></div>');
					$(".ss-share").on("click", function(){
						ssvideo.pause();
						$(".ss-layer-share").attr("data-share", true);
						$(".ss-advertising").stop().fadeOut(fade);
						$(".ss-logo").stop().fadeOut(fade);
						$(".ss-controls").stop().fadeOut(fade, function(){
							$(".ss-layer-share").stop().fadeIn(fade);
						});
					});
				};
				
				
				
		
		/* -----------------------------------------------------------------------------------------------
		 * 6. Layers Codes
		 * 6.1. Play - Puase Codes
		 * 6.2. Volume Codes
		 * 6.3. Logo Codes
		 * 6.4. Share Codes
		 * 6.5. Loading Codes
		------------------------------------------------------------------------------------------------*/
			/* 6.1. Play - Pause Codes
			--------------------------------------------------------------------------------------------*/
			$(".ss-layers").append('<div class="ss-layer-play-pause">' +
								   		'<div class="ss-layer-play"></div>' +
										'<div class="ss-layer-pause none"></div>' +
										'<div class="ss-layer-repeat none"></div>' +
								   '</div>');
			
			$(".ss-layer-repeat").append('<small class="ss-repeat-icon"></small>');
			
			$(".ss-layer-play").on("dblclick", function(){
				if( ssvideo.currentTime == ssvideo.duration ){
					ssvideo.currentTime = 0;
					ssvideo.play();
				}else {
					ssvideo.play();
				}
			});
			$(".ss-layer-pause").on("dblclick", function(){
				ssvideo.pause();
			});
			$(".ss-layer-repeat").on("dblclick", function(){
				ssvideo.currentTime = 0;
				ssvideo.play();
			});
			
			/* 6.2. Volume Codes
			--------------------------------------------------------------------------------------------*/
			$(".ss-layers").append('<div class="ss-layer-volume">' +
										'<div class="ss-layer-volume-icons">' +
											'<div class="ss-volume-up"></div>' +
											'<div class="ss-volume-down none"></div>' +
											'<div class="ss-volume-mute none"></div>' +
											'<div class="ss-volume-off none"></div>' +
										'</div>' +
										'<div class="ss-layer-volume-section">' +
											'<div class="ss-layer-volume-slider"></div>' +
										'</div>' +
										'<div class="ss-layer-volume-value">'+ volume +'</div>' +
									'</div>');
			
			ssvideo.volume = volume / 100;
			
			volumeCss($(".ss-layer-volume").outerWidth());
			
			$(".ss-volume div").on("click", function(){
				$(".ss-layer-volume").stop().fadeToggle(fade);
			});
			
			volumeicons(volume);
			
			localStorage.setItem("__volume", volume);
			
			$(".ss-layer-volume-slider").noUiSlider({
				start: volume,
				behaviour: "tap",
				connect: "lower",
				step: 1,
				range: {
					"min":  0,
					"max":  100
				}
			}).on({
				slide : function(){	
					var volumeChange = $(this).val() / 100;
					ssvideo.volume	=	volumeChange;
					volumeicons(volumeChange * 100);
				},
				change : function(){
					localStorage.setItem("__volume", $(this).val());
				}
			});
			
			$(".ss-layer-volume-icons .ss-volume-up, .ss-layer-volume-icons .ss-volume-down, .ss-layer-volume-icons .ss-volume-mute").on("click", function(){
				ssvideo.volume = 0;
				volumeicons(0);
				$(".ss-layer-volume-slider").val(0);
			});
			$(".ss-layer-volume-icons .ss-volume-off").on("click", function(){
				ssvideo.volume = (localStorage.getItem("__volume") / 100);
				volumeicons(localStorage.getItem("__volume"));
				$(".ss-layer-volume-slider").val(localStorage.getItem("__volume"));	
			});
			
			/* 6.3. Logo Codes
			--------------------------------------------------------------------------------------------*/
			if( a.logo != false ){
				$(".ss-layers").append('<div class="ss-logo ss-square"></div>');
				$(".ss-logo").css("background", "url("+ a.logo.src +")");
				
				// Href
				if( a.logo.href ){
					$(".ss-logo").css("cursor", "pointer");
					$(".ss-logo").on("click", function(){
						if( $.browser.name == "msie" ){
							$(".ss-table.ss-speed .ss-row").removeClass("selected");
							$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
						};
						ssvideo.pause();
						if( a.logo.target ){
							if( a.logo.target == "blank" ){
								window.open(a.logo.href, "_blank");
							}else if( a.logo.target == "top" ){
								window.open(a.logo.href, "_top");
							}else {
								window.open(a.logo.href, "_blank");
							}
						}else {
							window.open(a.logo.href, "_blank");
						}
					});
				};
				
				// position
				if( a.logo.position ){
					if( a.logo.position == "top-left" ){
						if( a.logo.title ){
							$(".ss-logo")
							.addClass("ss-tooltip")
							.attr("data-css", "8,0")
							.attr("data-type", "center-right")
							.attr("data-content", a.logo.title);
						};
						$(".ss-logo").css({
							"top": 16,
							"left": 16
						});
					}else if( a.logo.position == "top-right" ){
						if( a.logo.title ){
							$(".ss-logo")
							.addClass("ss-tooltip")
							.attr("data-css", "8,0")
							.attr("data-type", "center-left")
							.attr("data-content", a.logo.title);
						};
						$(".ss-logo").css({
							"top": 16,
							"right": 16
						});
					}else if( a.logo.position == "bottom-left" ){
						if( a.logo.title ){
							$(".ss-logo")
							.addClass("ss-tooltip")
							.attr("data-css", "8,0")
							.attr("data-type", "center-right")
							.attr("data-content", a.logo.title);
						};
						$(".ss-logo").css({
							"bottom": 76,
							"left": 16
						});
					}else if( a.logo.position == "bottom-right" ){
						if( a.logo.title ){
							$(".ss-logo")
							.addClass("ss-tooltip")
							.attr("data-css", "8,0")
							.attr("data-type", "center-left")
							.attr("data-content", a.logo.title);
						};
						$(".ss-logo").css({
							"bottom": 76,
							"right": 16
						});
					}
				}else {
					if( a.logo.title ){
						$(".ss-logo")
						.addClass("ss-tooltip")
						.attr("data-css", "8,0")
						.attr("data-type", "center-left")
						.attr("data-content", a.logo.title);
					}
					$(".ss-logo").css({
						"top": 16,
						"right": 16
					});
				}
				
				// shape
				if( a.logo.shape ){
					if( a.logo.shape == "circle" ){
						$(".ss-logo").removeClass("ss-square");
						$(".ss-logo").addClass("ss-circle");
					}else if( a.logo.shape == "square" ){
						$(".ss-logo").removeClass("ss-circle");
						$(".ss-logo").addClass("ss-square");
					}
				}
			};
			
			/* 6.4. Share Codes
			--------------------------------------------------------------------------------------------*/
			if( a.share != false && a.share == true ){
				// Genel iskeleti yazdıralım
				$(".ss-layers").append( '<div class="ss-layer-share" data-share="false">' +
										'<div class="ss-layer-share-close ss-tooltip" data-content="Kapat" data-type="bottom-right" data-css="8,0"></div>' +
										'<div class="ss-layer-share-container">' +
											'<div class="ss-layer-share-buttons">' +
												'<div class="ss-layer-share-button"><div class="ss-facebook"></div></div>' +
												'<div class="ss-layer-share-button"><div class="ss-twitter" data-url="'+ href +'"></div></div>' +
												'<div class="ss-layer-share-button"><div class="ss-google"></div></div>' +
											'</div>' +
											'<div class="ss-layer-share-link">' +
												'<input class="ss-layer-share-input" type="text" value="'+ href +'"  onClick="this.select();" />' +
											'</div>' +
										'</div>' +
									'</div>');
				
				if( $.browser.desktop != true ){
					$(".ss-layer-share-buttons").append('<div class="ss-layer-share-button"><div class="ss-whatsapp"></div></div>');
					$(".ss-whatsapp").on("click", function(){
						window.open("whatsapp://send?text="+ a.whatsapp +"", "_blank");
					});
				}
				
				$(".ss-facebook").on("click", function(){
					window.open("http://www.facebook.com/share.php?u="+ href +"", "_blank");
				});
				
				$(".ss-twitter").on("click", function(){
					window.open("https://twitter.com/share", "_blank");
				});
				
				$(".ss-google").on("click", function(){
					window.open("https://plus.google.com/share?url="+ href +"", "_blank");
				});
			};
			
			/* 6.5. Loading Codes
			--------------------------------------------------------------------------------------------*/
			$(".ss-layers").append('<div class="ss-loading"></div>');
			$(".ss-loading").append('<div class="ss-spinner"></div>');
			$(".ss-spinner").append('<div class="ss-rectangle-1"></div>' +
								    '<div class="ss-rectangle-2"></div>' +
								    '<div class="ss-rectangle-3"></div>' +
								    '<div class="ss-rectangle-4"></div>' +
								    '<div class="ss-rectangle-5"></div>');
			
		/* -----------------------------------------------------------------------------------------------
		 * 7. Promo Codes
		 * 7.1. Video Pause
		 * 7.2. Promo Video Tag Codes
		 * 7.3. Progress Promo Indicator
		 * 7.4. Promo Controls - Progress Codes
		 * 7.5. Promo Controls - Control Codes
		 * 7.6. Promo Play Events
		 * 7.7. Promo Close
		------------------------------------------------------------------------------------------------*/
		if( a.promo != false && a.promo.type == "pre" && playCount == 0 ){
			ssvideo.addEventListener("play", function(){
				if( playCount == 0 ){
					
					/* 7.1. Video Pause
					--------------------------------------------------------------------------------------------*/
					ssvideo.pause();
					
					/* 7.2. Promo Video Tag Codes
					--------------------------------------------------------------------------------------------*/
					$("#ss-video-player").append('<div class="ss-promo"></div>');
					$(".ss-promo").append('<div class="ss-promo-video"></div>' +
										  '<div class="ss-promo-controls"></div>' +
										  '<div class="ss-promo-href"></div>');
					$(".ss-promo-video").append('<video src="'+ a.promo.src +'"></video>');
					

					$.each( $("#ss-video-player > div"), function( index, value ){
						hasPromo = $(this).hasClass("ss-promo");
						if( hasPromo == true ){
							
							/* 7.3. Progress Promo Indicator
							--------------------------------------------------------------------------------------------*/
							$(".ss-progress-container").append('<div class="ss-promo-indicator"></div>');
					
							/* 7.4. Promo Controls - Progress Codes
							--------------------------------------------------------------------------------------------*/
							$(".ss-promo-controls").append('<div class="ss-promo-progress">' +
															'<div class="ss-promo-progress-container">' +
																'<div class="ss-promo-progress-total"></div>' +
																'<div class="ss-promo-progress-current"></div>' +
																'<div class="ss-promo-progress-handle"></div>' +
															'</div>' +
														  '</div>');
							
							/* 7.5. Promo Controls - Control Codes
							--------------------------------------------------------------------------------------------*/
							$(".ss-promo-controls").append('<div class="ss-promo-control"></div>');
							$(".ss-promo-control").append('<div class="ss-promo-control-left"></div>' +
														  '<div class="ss-promo-control-center"></div>' +
														  '<div class="ss-promo-control-right"></div>');
							$(".ss-promo-control-left").append('<div class="ss-promo-button"><span>Reklam</span></div>');
							$(".ss-promo-control-center").append('<div class="ss-promo-control-center">' +
																	 '<div class="ss-promo-current">00:00</div>' +
																	 '<div class="ss-promo-control-play-pause">' +
																		 '<div class="ss-promo-play none"></div>' +
																		 '<div class="ss-promo-pause"></div>' +
																	 '</div>' +
																	 '<div class="ss-promo-duration">00:00</div>' +
																'</div>');
							$(".ss-promo-control-right").append('<div class="ss-promo-button"><small>'+ a.promo.time +'</small> sn sonra reklamı geçebilirsin</div>');
							
							/* 7.6. Promo Play Events
							--------------------------------------------------------------------------------------------*/
							var ckpromo = $(".ss-promo-video video")[0];
							var ckpromotime = 5;
							$(".ss-video").attr("data-promo", "promo");
							$(".ss-controls").stop().fadeOut(fade);
							$(".ss-logo").stop().fadeOut(fade);
							$(".ss-promo-play").on("click", function(){
								ckpromo.play();
							});
							$(".ss-promo-pause").on("click", function(){
								ckpromo.pause();
							});
							$(".ss-promo-href").on("click", function(){
								$(".ss-video").attr("data-promo", "end");
								window.open(a.promo.href, "_blank");
								ckpromo.pause();
								$(".ss-promo").stop().fadeOut(fade, function(){
									$(".ss-controls").stop().fadeIn(fade);
									$(".ss-logo").stop().fadeIn(fade);
								}).addClass("none");
								$("#ss-video-player .ss-promo").remove();
							});
							ckpromo.addEventListener("canplay", function() {
								ckpromo.play();
								$(".ss-promo-duration").text(readableDuration(ckpromo.duration));
								if( a.promo.time == undefined ){
									$(".ss-promo-button small").text(Math.floor(ckpromotime));
								}else {
									$(".ss-promo-button small").text(Math.floor(a.promo.time));
								}
							});
							ckpromo.addEventListener("play", function() {
								$(".ss-video").attr("data-promo", "play");
								$(".ss-promo-control-play-pause > div").addClass("none");
								$(".ss-promo-control-play-pause .ss-promo-pause").removeClass("none");
							});
							ckpromo.addEventListener("pause", function() {
								$(".ss-promo-control-play-pause > div").addClass("none");
								$(".ss-promo-control-play-pause .ss-promo-play").removeClass("none");
							});
							ckpromo.addEventListener("timeupdate", function() {
								currenttime		=	ckpromo.currentTime;
								duration		=	ckpromo.duration;
								$(".ss-promo-current").text(readableDuration(currenttime));
								var currentWidth = (100*currenttime)/duration;
								$(".ss-promo-progress-current").width(currentWidth + "%");
								$(".ss-promo-progress-handle").css({"left" : currentWidth + "%"});
								if( a.promo.time == undefined ){
									if( Math.floor(currenttime) == Math.floor(ckpromotime) ){
										$(".ss-promo-control-right .ss-promo-button").html('<span>Reklamı Şimdi Geç</span>');
									};
									$(".ss-promo-button small").text(Math.floor(ckpromotime - currenttime));
					
								}else {
									if( Math.floor(currenttime) == Math.floor(a.promo.time) ){
										$(".ss-promo-control-right .ss-promo-button").html('<span>Reklamı Şimdi Geç</span>');
									};
									$(".ss-promo-button small").text(Math.floor(a.promo.time - currenttime));
								}
							});
							
							/* 7.7. Promo Close
							--------------------------------------------------------------------------------------------*/
							ckpromo.addEventListener("ended", function() {
								$(".ss-video").attr("data-promo", "end");
								ckpromo.pause();
								$(".ss-promo").stop().fadeOut(fade, function(){
									$(".ss-controls").stop().fadeIn(fade);
									$(".ss-logo").stop().fadeIn(fade);
								}).addClass("none");
								if( a.promo.after == "play" || a.promo.after == undefined ){
									ssvideo.play();
								}else if( a.promo.after == "pause" ){
									ssvideo.pause();
								};
								$("#ss-video-player .ss-promo").remove();
							});
							ckpromo.addEventListener("error", function() {
								$(".ss-video").attr("data-promo", "end");
								ckpromo.pause();
								$(".ss-promo").stop().fadeOut(fade, function(){
									$(".ss-controls").stop().fadeIn(fade);
									$(".ss-logo").stop().fadeIn(fade);
								}).addClass("none");
								if( a.promo.after == "play" || a.promo.after == undefined ){
									ssvideo.play();
								}else if( a.promo.after == "pause" ){
									ssvideo.pause();
								};
								$("#ss-video-player .ss-promo").remove();
							});
							$(".ss-promo-control-right .ss-promo-button").on("click", "span", function(){
								$(".ss-video").attr("data-promo", "end");
								ckpromo.pause();
								$(".ss-promo").stop().fadeOut(fade, function(){
									$(".ss-controls").stop().fadeIn(fade);
									$(".ss-logo").stop().fadeIn(fade);
								}).addClass("none");
								if( a.promo.after == "play" || a.promo.after == undefined ){
									ssvideo.play();
								}else if( a.promo.after == "pause" ){
									ssvideo.pause();
								};
								$("#ss-video-player .ss-promo").remove();
							});
						}
					});
				}
			});
		};
		
		/* -----------------------------------------------------------------------------------------------
		 * 8. Advertising Plugin
		------------------------------------------------------------------------------------------------*/
		if( a.advertising != false && $.type(a.advertising) == "object" ){
			$(".ss-layers").append('<div class="ss-advertising"></div>');
			$(".ss-advertising").append('<div class="ss-advertising-open"><small></small></div>');
			$(".ss-progress-container").append('<div class="ss-indicators"></div>');
			var adsIndex = 0;
			$.each( a.advertising, function( key, value ){
				if( value.format == "728x90" ){
					advertising(key, adsIndex, value.type, value.time, 728, 90, value.src, value.href, value.code);
				}else if( value.format == "468x60" ){
					advertising(key, adsIndex, value.type, value.time, 468, 60, value.src, value.href, value.code);
				}else if( value.format == "320x50" ){
					advertising(key, adsIndex, value.type, value.time, 320, 50, value.src, value.href, value.code);
				};
			adsIndex++;
			});
		};

		
		/* -----------------------------------------------------------------------------------------------
		 * 9. Context Menu
		------------------------------------------------------------------------------------------------*/
		$("#ss-video-player").append('<div class="ss-menu"><ul class="ss-menu-ul"></ul></div>');
		if( $.browser.name != "safari" ){
			$(".ss-menu-ul").append('<li class="ss-menu-li none" data-menu="enterfullscreen">Tam ekran moduna geç</li>');
			$(".ss-menu-ul").append('<li class="ss-menu-li none" data-menu="exitfullscreen">Normal ekran moduna geç</li>');
		}
		$(".ss-menu-ul").append('<li class="ss-menu-li" data-menu="producer">ssplayer\'a git</li>');
		
		$(".ss-menu-li[data-menu=producer]").css("border", "none");
		
		$(".ss-menu-ul").on("click", ".ss-menu-li", function(){
			var dataMenu = $(this).attr("data-menu");
			if( dataMenu == "enterfullscreen" ){
				$(".ss-menu-ul .ss-menu-li[data-menu=enterfullscreen]").addClass("none");
				$(".ss-menu-ul .ss-menu-li[data-menu=exitfullscreen]").removeClass("none");
				globalEnterFullscreen();
			}else if( dataMenu == "exitfullscreen" ){
				$(".ss-menu-ul .ss-menu-li[data-menu=exitfullscreen]").addClass("none");
				$(".ss-menu-ul .ss-menu-li[data-menu=enterfullscreen]").removeClass("none");
				globalExitFullscreen();
			}else if( dataMenu == "producer" ){
				ssvideo.pause();
				window.open("http://ssplayer.emreokay.net/", "_blank");
			}
		});
		
		$(".ss-menu").fadeOut(fade);
		$("#ss-video-player").bind("contextmenu", function(e){
			e.preventDefault();
						
			$(".ss-menu").css({
				top: e.pageY - $(this).offset().top,
				left: e.pageX - $(this).offset().left
			});
			
			var promoStatus = $(".ss-video").attr("data-promo");
			var controlFullscreen = $("#ss-video-player").attr("data-fullscreen");
			if( a.promo == false ){
				if( controlFullscreen == undefined || controlFullscreen == "false" ){
					$(".ss-menu-li[data-menu=enterfullscreen]").removeClass("none");
				}
			}else {
				if( promoStatus == "end" ){
					if( controlFullscreen == undefined || controlFullscreen == "false" ){
						$(".ss-menu-li[data-menu=enterfullscreen]").removeClass("none");
					}
				}
			}
			
			$(".ss-menu").fadeIn(fade,function(){
				$("#ss-video-player").on("click", function(){
					$(".ss-menu").fadeOut(fade);
					$(document).off("click");
				});
			});
		});
		
		/* -----------------------------------------------------------------------------------------------
		 * 10. Autoplay
		------------------------------------------------------------------------------------------------*/
		if( a.autoplay == true ){
			ssvideo.addEventListener("canplay", function(){
				if( playCount == 0 ){
					ssvideo.currentTime = 0;
					ssvideo.play();
				}
			});
		};
				
		/* -----------------------------------------------------------------------------------------------
		 * 11. Keyboard Plugin
		------------------------------------------------------------------------------------------------*/
		$(window).on("keydown", function(e){
			
			var keyboardCode = {
				space: 32,
				enter: 13,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			
			// Space
			if( e.keyCode == keyboardCode.space ){
				e.preventDefault();
				var promoStatus = $(".ss-video").attr("data-promo"),
					controlShare = $(".ss-layer-share").attr("data-share"),
					videoStatus = $(".ss-video").attr("data-status");
				
				if( a.promo == false ){
					if(controlShare == "true"){
						ssvideo.pause();
					}else {
						if(videoStatus == "play"){
							ssvideo.pause();
						}else if( videoStatus == "end" ) {
							ssvideo.currentTime = 0;
							ssvideo.play();
						}else {
							ssvideo.play();
						}
					}
				}else {
					if(promoStatus == "end" || promoStatus == undefined){
						if(controlShare == "true"){
							ssvideo.pause();
						}else {
							if(videoStatus == "play"){
								ssvideo.pause();
							}else if( videoStatus == "end" ) {
								ssvideo.currentTime = 0;
								ssvideo.play();
							}else {
								ssvideo.play();
							}
						}
					}
				}
				
			};
			
			// Enter
			if( e.keyCode == keyboardCode.enter && $.browser.name != "msie" ){
				var promoStatus = $(".ss-video").attr("data-promo");
				if( a.promo == false ){
					e.preventDefault();
					var dataFullscreen = $("#ss-video-player").attr("data-fullscreen");
					if( dataFullscreen == "true" ){
						globalExitFullscreen();
					}else if( dataFullscreen == "false" || dataFullscreen == undefined ){
						globalEnterFullscreen();
					}
				}else {
					if( promoStatus == "end" ){
						e.preventDefault();
						var dataFullscreen = $("#ss-video-player").attr("data-fullscreen");
						if( dataFullscreen == "true" ){
							globalExitFullscreen();
						}else if( dataFullscreen == "false" || dataFullscreen == undefined ){
							globalEnterFullscreen();
						}
					}
				}
			};
			
			// Left
			if( e.keyCode == keyboardCode.left ){
				e.preventDefault();
				ssvideo.currentTime = ssvideo.currentTime - 5;
				var dataStatus = $(".ss-video").attr("data-status");
				if( dataStatus == "play" ){
					ssvideo.play();
				}else if( dataStatus == "pause" ){
					ssvideo.pause();
				}
			};
			
			// Right
			if( e.keyCode == keyboardCode.right ){
				e.preventDefault();
				ssvideo.currentTime = ssvideo.currentTime + 5;
				var dataStatus = $(".ss-video").attr("data-status");
				if( dataStatus == "play" ){
					ssvideo.play();
				}else if( dataStatus == "pause" ){
					ssvideo.pause();
				}
			};
			
			var keyVolumeChange = Number( $(".ss-layer-volume-slider").val() );
			
			// Up
			if(e.keyCode == keyboardCode.up){
				e.preventDefault();
				$(".ss-layer-volume-slider").val( keyVolumeChange + 5 );
				volumeicons(keyVolumeChange);
				ssvideo.volume = keyVolumeChange / 100;
				localStorage.setItem("__volume", keyVolumeChange);
			};
			
			// Down
			if(e.keyCode == keyboardCode.down){
				e.preventDefault();
				$(".ss-layer-volume-slider").val( keyVolumeChange - 5 );
				volumeicons(keyVolumeChange);
				ssvideo.volume = keyVolumeChange / 100;
				localStorage.setItem("__volume", keyVolumeChange);
			};
			
		});
		
		/* -----------------------------------------------------------------------------------------------
		 * 12. Mouse Still
		------------------------------------------------------------------------------------------------*/
		$("#ss-video-player").idleTimer( {
			timeout: 2 * 1000, 
			idle:true
		});
		$("#ss-video-player").on( "idle.idleTimer", function(event, elem, obj){
			var controlFullscreen = $("#ss-video-player").attr("data-fullscreen");
			var controlShare = $(".ss-layer-share").attr("data-share");
			if( controlFullscreen == "true" ){
				exitmouse();
			}else {
				if(controlShare != "true"){
					entermouse();
				}
			}
		});
		
		$("#ss-video-player").on( "active.idleTimer", function(event, elem, obj, triggerevent){
			var controlShare = $(".ss-layer-share").attr("data-share");
			if(controlShare != "true"){
				entermouse();
			}
		});
		
		$.idleTimer('destroy');
		
		/* T. Annotations
		------------------------------------------------------------------------------------------------*/
		if( a.annotations != false ){
			var annotationsElements = $(".ss-layers .ss-logo," +
										".ss-progress-container > .ss-indicators," +
										".ss-layers .ss-advertising");
			if( a.annotations == "off" ){
				annotationsElements.addClass("none");
			}
			
			$(".ss-table.ss-annotations").on("click", ".ss-row", function(){
				var dataAnnotations = $(this).attr("data-annotations");
				if(dataAnnotations == "true"){
					annotationsElements.removeClass("none");
				}else if(dataAnnotations == "false"){
					annotationsElements.addClass("none");
				}
			});
		};
		
		/* X. CKPlayer Construction
		------------------------------------------------------------------------------------------------*/
		for( var i = 0; i < $(".ss-control-right > div").length; i++ ){
			$(".ss-control-right > div:eq("+ i +") ").css("right", i * 32)
		};		
				
		/* Y. NON-Target Clicked
		------------------------------------------------------------------------------------------------*/
		$("#ss-video-player").on("click", function(e){
			
			
			tableNonTarget("speed", e);
			
			if ( !$(e.target).is(".ss-volume, .ss-layer-volume") && !$(e.target).is(".ss-volume *, .ss-layer-volume *") ){
				$(".ss-layer-volume").stop().fadeOut(fade);
			};
						
			if( a.source != false && a.source.type == "source-language" ){
				tableNonTarget("source", e);
				tableNonTarget("language", e);
				tableNonTarget("quality", e);
			}
			
			if( a.source != false && a.source.type == "source-quality" ){
				tableNonTarget("source", e);
				tableNonTarget("quality", e);
			}
			
			if( a.languages != false ){
				tableNonTarget("language", e);
				tableNonTarget("quality", e);
			}
			
			if( a.quality != false ){
				tableNonTarget("quality", e);
			}
			
			if( a.subtitle != false ){
				tableNonTarget("subtitle", e);
			}
			
			if( a.infinite != false ){
				tableNonTarget("infinite", e);
			}
			
			if( a.annotations != false ){
				tableNonTarget("annotations", e);
			}
			
		});
		
		$(".ss-layer-share").on("click", function(e){
			if( a.share != false && a.share == true ){
				sharenontarget(e);
			};
		});
		
		/* Z. Tooltip
		------------------------------------------------------------------------------------------------*/
		$(".ss-tooltip").hover(function(){
			var tooltip = $(this),
				content = tooltip.attr("data-content"),
				type	= tooltip.attr("data-type"),
				css		= tooltip.attr("data-css").split(","),
				cssX	= parseInt(css[0], 10),
				cssY	= parseInt(css[1], 10);
			
			tooltip.append('<span class="ss-tooltip-content">'+ content +'</div>');
			tooltip.children(".ss-tooltip-content").fadeIn(200);
			var tooltipWidth  = tooltip.outerWidth(),
				tooltipHeight = tooltip.outerHeight(),
				contentWidth  = tooltip.children(".ss-tooltip-content").outerWidth(true),
				contentHeight = tooltip.children(".ss-tooltip-content").outerHeight(true);
			
			if( type == "top-left" ){
				tooltip.children(".ss-tooltip-content").css({ "top": 0, "left": 0 });
				tooltip.children(".ss-tooltip-content").css({ "margin-top": -(contentHeight + cssY), "margin-left": cssX });
			}else if( type == "top-center" ){
				tooltip.children(".ss-tooltip-content").css({ "top": 0, "left": ((tooltipWidth - contentWidth) / 2) });
				tooltip.children(".ss-tooltip-content").css({ "margin-top": -(contentHeight + cssY), "margin-left": cssX });
			}else if( type == "top-right" ){
				tooltip.children(".ss-tooltip-content").css({ "top": 0, "right": 0 });
				tooltip.children(".ss-tooltip-content").css({ "margin-top": -(contentHeight + cssY), "margin-right": cssX });
			}else if( type == "bottom-left" ){
				tooltip.children(".ss-tooltip-content").css({ "bottom": 0, "left": 0 });
				tooltip.children(".ss-tooltip-content").css({ "margin-bottom": -(contentHeight + cssY), "margin-left": cssX });
			}else if( type == "bottom-center" ){
				tooltip.children(".ss-tooltip-content").css({ "bottom": 0, "left": ((tooltipWidth - contentWidth) / 2) });
				tooltip.children(".ss-tooltip-content").css({ "margin-bottom": -(contentHeight + cssY), "margin-left": cssX });
			}else if( type == "bottom-right" ){
				tooltip.children(".ss-tooltip-content").css({ "bottom": 0, "right": 0 });
				tooltip.children(".ss-tooltip-content").css({ "margin-bottom": -(contentHeight + cssY), "margin-right": cssX });
			}else if( type == "center-left" ){
				tooltip.children(".ss-tooltip-content").css({ "top": (tooltipHeight - contentHeight) / 2, "left": 0 });
				tooltip.children(".ss-tooltip-content").css({ "margin-left": -(contentWidth + cssX), "margin-top": cssY });
			}else if( type == "center-right" ){
				tooltip.children(".ss-tooltip-content").css({ "top": (tooltipHeight - contentHeight) / 2, "right": 0 });
				tooltip.children(".ss-tooltip-content").css({ "margin-right": -(contentWidth + cssX), "margin-top": cssY });
			}
			
		}, function(){
			var tooltip = $(this);
			tooltip.children(".ss-tooltip-content").remove();
		});
		
		
	
	/* C. ERRORS
	----------------------------------------------------------------------------------------------------*/	
	if( $.browser.name == "safari" ){
		$("#ss-video-player .ss-video").remove();
		$("#ss-video-player .ss-controls").remove();
		$("#ss-video-player .ss-layers").remove();
		$("#ss-video-player").append('<div class="ss-error">'+
									 '<div class="ss-error-container">'+
										 '<div class="ss-error-image"></div>'+
										 '<div class="ss-error-content">'+
											 '<div class="ss-error-title">DESTEKLENMEYEN TARAYICI</div>'+
											 '<div class="ss-error-text">'+
												 '<strong>Safari</strong> tarayıcısı HTML5 video teknolojisini desteklememektedir.'+
												 '<br/>'+
												 'Bunun yerine Mozilla, Chrome, Yandex, Opera vb. tarayıcıları kullanmanızı öneriririz...'+
											 '</div>'+
										 '</div>'+
									 '</div>'+
									 '<div class="ss-error-logo"></div>'+
								 '</div>');
	};
	
	if (self != top && $.browser.name == "msie"){
		$("#ss-video-player .ss-video").remove();
		$("#ss-video-player .ss-controls").remove();
		$("#ss-video-player .ss-layers").remove();
		$("#ss-video-player").append('<div class="ss-error">'+
									 '<div class="ss-error-container">'+
										 '<div class="ss-error-image"></div>'+
										 '<div class="ss-error-content">'+
											 '<div class="ss-error-title">IFRAME</div>'+
											 '<div class="ss-error-text">'+
												 'Internet Explorer sürümlerinde şuan için iframe desteklenmemektedir.'+
												 '<br/>'+
												 'Bunun yerine Mozilla, Chrome, Yandex, Opera vb. tarayıcıları kullanmanızı öneriririz...'+
											 '</div>'+
										 '</div>'+
									 '</div>'+
									 '<div class="ss-error-logo"></div>'+
								 '</div>');
	};
	
			
	/* D. HTML5 EVENTS
	----------------------------------------------------------------------------------------------------*/
	ssvideo.addEventListener("play", function(){
		playCount++;
		$(".ss-video").attr("data-status", "play");
		$(".ss-play-pause-repeat-buttons div").addClass("none");
		$(".ss-play-pause-repeat-buttons .ss-pause").removeClass("none");
		$(".ss-layer-play-pause div").addClass("none");
		$(".ss-layer-pause").removeClass("none");
		$(".ss-loading").stop().fadeOut(fade);
		$(".ss-layer-repeat .ss-repeat-icon").stop().fadeOut(fade);
		$(".ss-layers .ss-error").remove();
	});
	
	ssvideo.addEventListener("playing", function(){
		playCount++;
		$(".ss-video").attr("data-status", "play");
		$(".ss-play-pause-repeat-buttons div").addClass("none");
		$(".ss-play-pause-repeat-buttons .ss-pause").removeClass("none");
		$(".ss-layer-play-pause div").addClass("none");
		$(".ss-layer-pause").removeClass("none");
		$(".ss-loading").stop().fadeOut(fade);
		$(".ss-layer-repeat .ss-repeat-icon").stop().fadeOut(fade);
		$(".ss-layers .ss-error").remove();
	});
	
	ssvideo.addEventListener("timeupdate", function(){
		if( ssvideo.currentTime != 0 ){
			$(".ss-video").attr("data-current", ssvideo.currentTime);
		}
		currenttime		=	ssvideo.currentTime;
		duration		=	ssvideo.duration;
		$(".ss-current").text(readableDuration(currenttime));
		var currentWidth = (100*currenttime)/duration;
		$(".ss-progress-current").width(currentWidth + "%");
		$(".ss-progress-handle").css({"left" : currentWidth + "%"});
		$(".ss-indicators").stop().fadeIn(fade);
		$(".ss-layers .ss-error").remove();
		if( $.browser.name == "msie" ){
			$(".ss-loading").stop().fadeOut(fade);
		}
	});
	
	ssvideo.addEventListener("pause", function(){
		$(".ss-video").attr("data-status", "pause");
		$(".ss-play-pause-repeat-buttons div").addClass("none");
		$(".ss-play-pause-repeat-buttons .ss-play").removeClass("none");
		$(".ss-layer-play-pause div").addClass("none");
		$(".ss-layer-play").removeClass("none");
		$(".ss-layer-repeat .ss-repeat-icon").stop().fadeOut(fade);
		$(".ss-layers .ss-error").remove();
	});
	
	ssvideo.addEventListener("ended", function(){
		$(".ss-video").attr("data-status", "end");
		$(".ss-play-pause-repeat-buttons div").addClass("none");
		$(".ss-play-pause-repeat-buttons .ss-repeat").removeClass("none");
		$(".ss-layer-play-pause div").addClass("none");
		$(".ss-layer-repeat").removeClass("none");
		$(".ss-loading").stop().fadeOut(fade);
		var dataInfinite = $(".ss-video").attr("data-infinite");
		if( dataInfinite != "true" ){
			$(".ss-layer-repeat .ss-repeat-icon").stop().fadeIn(fade);
		}
		$(".ss-layers .ss-error").remove();
	});
	
	ssvideo.addEventListener("canplay", function(){
		$(".ss-duration").text(readableDuration(ssvideo.duration));
		$(".ss-loading").stop().fadeOut(fade);
	});
	
	ssvideo.addEventListener("waiting", function(){
		$(".ss-loading").stop().fadeIn(fade);
	});
	
	ssvideo.addEventListener("error", function(){
		a.promo = false;
		$(".ss-loading").stop().fadeOut(fade);
		$(".ss-play-pause-repeat-buttons div").addClass("none");
		$(".ss-play-pause-repeat-buttons .ss-play").removeClass("none");
		$(".ss-duration, .ss-current").text("00:00");
		$(".ss-progress-handle").css("left", 0);
		$(".ss-progress-current, .ss-progress-buffered").width(0);
		$(".ss-indicators, .ss-promo-indicator").fadeOut(fade);
		$(".ss-layers").append('<div class="ss-error" style="z-index: 1160 !important;">'+
									 '<div class="ss-error-container">'+
										 '<div class="ss-error-image"></div>'+
										 '<div class="ss-error-content">'+
											 '<div class="ss-error-title">KAYNAK BULUNAMADI</div>'+
											 '<div class="ss-error-text">'+
												 'Video kaynağında bir sorun meydana geldi.'+
												 '<br/>'+
												 'Varsa farklı bir kaynak, farklı bir lisan veya farklı bir kalite seçebilirsiniz...'+
											 '</div>'+
										 '</div>'+
									 '</div>'+
									 '<div class="ss-error-logo" style="bottom: 70px !important;"></div>'+
								 '</div>');
	});
	
	// Fullscreen
	document.addEventListener("fullscreenchange", function () {
		if(document.fullscreenElement == true){
			enterfullscreen();
		}else {
			exitfullscreen();
		}
	}, false);
	
	document.addEventListener("MSFullscreenChange", function () {
		if(document.msFullscreenElement != null){
			enterfullscreen();
		}else {
			exitfullscreen();
		}
	}, false);
	
	document.addEventListener("mozfullscreenchange", function () {
		if(document.mozFullScreen == true){
			enterfullscreen();
		}else {
			exitfullscreen();
		}
	}, false);
	
	document.addEventListener("webkitfullscreenchange", function () {
		if(document.webkitIsFullScreen == true){
			enterfullscreen();
		}else {
			exitfullscreen();
		}
	}, false);
	
	
	
	/* E. FUNCTIONS
	----------------------------------------------------------------------------------------------------*/
	// other
	function resizeWidth(number){
		var result = ((number * 16) / 9);
		return result;
	}
	
	function resizeHeight(number){
		var result = ((number * 9) / 16);
		return result;
	}
	
	function type(value){
		return $.type(value);
	};
	
	function num(value){
		return $.isNumeric(value);
	};
			
	// readableDuration
	function readableDuration(seconds) {
		sec 	=	Math.floor( seconds );
		minute2	=	Math.floor( sec / 60 );
		minute	=	Math.floor( minute2 % 60 );
		minute	=	minute >= 10 ? minute : '0' + minute;
		second	=	Math.floor( sec % 60 );
		second	=	second >= 10 ? second : '0' + second;
		hour	=	Math.floor( minute2 / 60 );
		if(hour == 0){
			return minute + ':' + second
		}else {
			return hour + ':' + minute + ':' + second
		}
	};
	
	// timeExplode
	function timeExplode(time){
				
		var hType = time.search("h");
		var mType = time.search("m");
		var sType = time.search("s");
		
		if( hType == -1 && mType == -1 && sType == -1 ){
			return parseInt(time, 10);
		}
				
	};
		
	// qualitytags
	function qualitytags( quality ){
		if( quality == "1080p" || quality == "720p" ){
			$(".ss-table.ss-quality .ss-row[data-quality="+ quality +"]").append('<small>HD</small>');
		}else if( quality == "1440p" ){
			$(".ss-table.ss-quality .ss-row[data-quality="+ quality +"]").append('<small>UHD</small>');
		}else if( quality == "2160p" ){
			$(".ss-table.ss-quality .ss-row[data-quality="+ quality +"]").append('<small>4K</small>');
		}else if( quality == "4320p" ){
			$(".ss-table.ss-quality .ss-row[data-quality="+ quality +"]").append('<small>8K</small>');
			$(".ss-control-right .ss-quality").append('<small>8K</small>');
		}
	};
	
	// controlqualitytags
	function controlqualitytags( quality ){
		if( quality == "1440p" || quality == "1080p" || quality == "720p" ){
			$(".ss-control-right .ss-quality small").remove();
			$(".ss-control-right .ss-quality").append('<small>HD</small>');
		}else if( quality == "2160p" ){
			$(".ss-control-right .ss-quality small").remove();
			$(".ss-control-right .ss-quality").append('<small>4K</small>');
		}else if( quality == "4320p" ){
			$(".ss-control-right .ss-quality small").remove();
			$(".ss-control-right .ss-quality").append('<small>8K</small>');
		}else {
			$(".ss-control-right .ss-quality small").remove();
		}
	};
	
	// controllcss
	function controlCss( a , b ){
		 if( a == "controls-container" ){
			$(".ss-controls-container").css({
				"width" : ( b - 16 ) + "px",
				"left" : 8
			});
		}else if( a == "progress" ){
			$(".ss-progress").css({
				"width" : ( b - 32 ) + "px",
				"left" : 8
			});
		}
	};
	
	// volumecss
	function volumeCss( a ){
		var volumeWidth = ( a - ( $(".ss-layer-volume-icons").outerWidth() + $(".ss-layer-volume-value").outerWidth() + 10 ) );
	
		$(".ss-layer-volume-section").css({
			"width" : volumeWidth,
			"left" : $(".ss-layer-volume-icons").outerWidth() + "px"
		});
	};
	
	// tablecss
	function tableCss( object ){
		var controlIndex = $(".ss-control-right ."+ object +"").index();
		var tableGap = ($(".ss-table."+ object +"").outerWidth(true) - $(".ss-control-right ."+ object +"").outerWidth(true)) / 2;
		var tableRight = ((controlIndex * 32) + 8 ) - tableGap;
		if( tableRight < 5 ){
			$(".ss-table."+ object +"").css("right", 5);
		}else{
			$(".ss-table."+ object +"").css("right", tableRight);
		}
	};
	
	// tablefadetoggle
	function tableFadeToggle( object ){
		$(".ss-control-right ."+ object +"").on("click", function(){
			$(".ss-control-right ."+ object +"").toggleClass("selected");
			$(".ss-table."+ object +"").stop().fadeToggle(fade);
		});
	};
	
	// tablenontarget
	function tableNonTarget( object , e ){
		if ( !$(e.target).is(".ss-control-right .ss-"+ object +", .ss-layers .ss-"+ object +"") && !$(e.target).is(".ss-control-right .ss-"+ object +" *, .ss-layers .ss-"+ object +" *") ){
			$(".ss-control-right .ss-"+ object +"").removeClass("selected");
			$(".ss-layers .ss-"+ object +"").stop().fadeOut(fade);
		};
	};
	
	// sharenontarget
	function sharenontarget(e){
		if ( !$(e.target).is(".ss-layer-share-container") && !$(e.target).is(".ss-layer-share-container *") ){
			ssvideo.play();
			if( $.browser.name == "msie" ){
				$(".ss-table.ss-speed .ss-row").removeClass("selected");
				$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
			};
			$(".ss-layer-share").attr("data-share", false);
			$(".ss-layer-share").stop().fadeOut(fade, function(){
				$(".ss-controls").stop().fadeIn(fade);
				$(".ss-advertising").stop().fadeIn(fade);
				$(".ss-logo").stop().fadeIn(fade);
			});
		};
	};
	
	// globalenterfullscreen & globalexitfullscreen
	function globalEnterFullscreen(){
		var element = document.getElementById("ss-video-player");
	
		if (element.requestFullscreen) {
			element.requestFullscreen();
		}
		else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
		else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		}
		else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		}
		
		enterfullscreen();
	};
	
	function globalExitFullscreen(){
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
		else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		}
		else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
		
		exitfullscreen();
	};
	
	// enterfullscreen
	function enterfullscreen(){
		$("#ss-video-player").attr("data-fullscreen", true);
		$(".ss-fullscreen div").addClass("none");
		$(".ss-fullscreen .ss-exitfullscreen").removeClass("none");
		$("#ss-video-player").css({"width" : "100%", "height" : "100%"});
		controlCss("controls-container", $("#ss-video-player").outerWidth());
		controlCss("progress", $("#ss-video-player").outerWidth());
		volumeCss($(".ss-layer-volume").outerWidth());
		$(".ss-menu-ul .ss-menu-li[data-menu=enterfullscreen]").addClass("none");
		$(".ss-menu-ul .ss-menu-li[data-menu=exitfullscreen]").removeClass("none");
		$(".ss-indicators").stop().fadeOut(fade);
		
	};
	
	// exitfullscreen
	function exitfullscreen(){
		$("#ss-video-player").attr("data-fullscreen", false);
		$(".ss-fullscreen div").addClass("none");
		$(".ss-fullscreen .ss-enterfullscreen").removeClass("none");
		$("#ss-video-player").css({"width" : defaultwidth, "height" : defaultheight});
		controlCss("controls-container", defaultwidth);
		controlCss("progress", defaultwidth);
		volumeCss($(".ss-layer-volume").outerWidth());
		$(".ss-menu-ul .ss-menu-li[data-menu=exitfullscreen]").addClass("none");
		$(".ss-menu-ul .ss-menu-li[data-menu=enterfullscreen]").removeClass("none");
		$(".ss-indicators").stop().fadeOut(fade);
	};
		
	// entermouse
	function entermouse(){
		$("#ss-video-player").css("cursor", "default");
		$(".ss-controls").stop().fadeIn(fade);
		if( a.logo != false && (a.logo.position == "bottom-left" || a.logo.position == "bottom-right") ){
				$(".ss-layers .ss-logo").stop().animate({bottom: 76}, fade);
			}
		$(".ss-layers .ss-advertising .ss-adsBlock").stop().animate({bottom: 70}, fade);
		$(".ss-layers .ss-advertising .ss-advertising-open").stop().animate({bottom: 70}, fade);
	}
	
	// exitmouse
	function exitmouse(){
		$("#ss-video-player").css("cursor", "none");
		$(".ss-table").stop().fadeOut(fade);
		$(".ss-control-right > div").removeClass("selected");
		$(".ss-controls").stop().fadeOut(0, function(){
			if( a.logo != false && (a.logo.position == "bottom-left" || a.logo.position == "bottom-right") ){
				$(".ss-layers .ss-logo").stop().animate({bottom: 16}, fade);
			}
			$(".ss-layers .ss-advertising .ss-adsBlock").stop().animate({bottom: 16}, fade);
			$(".ss-layers .ss-advertising .ss-advertising-open").stop().animate({bottom: 16}, fade);
		});
	}
	
	// volumeicons
	function volumeicons(value){
		$(".ss-layer-volume-value").text(Math.floor(value));
		if(value == 0){
			$(".ss-layer-volume-icons div").addClass("none");
			$(".ss-layer-volume-icons .ss-volume-off").removeClass("none");
			$(".ss-volume div").addClass("none");
			$(".ss-volume .ss-volume-off").removeClass("none");
		}else if(value > 0 && value < 40){
			$(".ss-layer-volume-icons div").addClass("none");
			$(".ss-layer-volume-icons .ss-volume-mute").removeClass("none");
			$(".ss-volume div").addClass("none");
			$(".ss-volume .ss-volume-mute").removeClass("none");
		}else if(value >= 40 && value < 80){
			$(".ss-layer-volume-icons div").addClass("none");
			$(".ss-layer-volume-icons .ss-volume-down").removeClass("none");
			$(".ss-volume div").addClass("none");
			$(".ss-volume .ss-volume-down").removeClass("none");
		}else if(value >= 80){
			$(".ss-layer-volume-icons div").addClass("none");
			$(".ss-layer-volume-icons .ss-volume-up").removeClass("none");
			$(".ss-volume div").addClass("none");
			$(".ss-volume .ss-volume-up").removeClass("none");
		}
	};
	
	// qualitychange
	function qualityChange( src, pause ){
		ssvideo.pause();
		ssvideo.src = src;
		ssvideo.playbackRate = 1;
		ssvideo.addEventListener("canplay", function() {
			if( $.browser.name == "chrome" || $.browser.name == "opera" ){
				var dataCurrent = $(".ss-video").attr("data-current");
				if( dataCurrent == u ){
					ssvideo.currentTime = 0;
				}else {
					if( dataCurrent != ssvideo.duration ){
						ssvideo.currentTime = dataCurrent;
					}
				}
			}else if( $.browser.name == "mozilla" || $.browser.name == "msie" ){
				if( ssvideo.currentTime == 0 ){
					var dataCurrent = $(".ss-video").attr("data-current");
					if( dataCurrent == u ){
						ssvideo.currentTime = 0;
					}else {
						if( dataCurrent != ssvideo.duration ){
							ssvideo.currentTime = dataCurrent;
						}
					}
				}
			}
		});
		if( pause == true ){
			ssvideo.pause();
		}else if( pause == undefined ){
			var dataStatus = $(".ss-video").attr("data-status");
			if( dataStatus == "pause" ){
				ssvideo.pause();
			}else {
				ssvideo.play();
			}
		}
	};
	
	// Subtitle
	function subtitle( thisvideoID, subtitleClass, thisvideoSRT ){
		
		// toSeconds
		function toSeconds(t){
			var s = 0.0;
			if(t) {
				var p = t.split(':');
				for(i=0;i<p.length;i++)
				s = s * 60 + parseFloat(p[i].replace(',', '.'))
			};
			return s;
		};
		
		// Strip
		function strip(s) {
			return s.replace(/^\s+|\s+$/g,"");
		};
		
		// playSubtitles
		function playSubtitles(subtitleElement) {
			var videoId = thisvideoID;
			var srt = subtitleElement.text();
			subtitleElement.text('');
			srt = srt.replace(/\r\n|\r|\n/g, '\n')
			
			var subtitles = {};
			srt = strip(srt);
			var srt_ = srt.split('\n\n');
			for(s in srt_) {
				st = srt_[s].split('\n');
				if(st.length >=2) {
					n = st[0];
					i = strip(st[1].split(' --> ')[0]);
					o = strip(st[1].split(' --> ')[1]);
					t = st[2];
					if(st.length > 2) {
						for(j=3; j<st.length;j++)
						t += '\n'+st[j];
					}
					is = toSeconds(i);
					os = toSeconds(o);
					subtitles[is] = {i:i, o: o, t: t};
				}
			}
			var currentSubtitle = -1;
			var ival = setInterval(function() {
				var currentTime = document.getElementById(videoId).currentTime;
				var subtitle = -1;
				for(s in subtitles) {
				if(s > currentTime)
					break
				subtitle = s;
				}
				if(subtitle > 0) {
					if(subtitle != currentSubtitle) {
						subtitleElement.html(subtitles[subtitle].t);
						currentSubtitle=subtitle;
				} else if(subtitles[subtitle].o < currentTime) {
					subtitleElement.html('');
				}
				}
			}, 100);
		}
		
		
			$("."+ subtitleClass +"").each(function() {
				var subtitleElement = $(this);
				var videoId = thisvideoID;
				if(!videoId) return;
				var srtUrl = thisvideoSRT;
				if(srtUrl) {
					$(this).load(srtUrl, function (responseText, textStatus, req) { playSubtitles(subtitleElement)})
				} else {
					playSubtitles(subtitleElement);
				}
			});
	};
		
	// adsIndicator
	function adsIndicator(index, time){
		var progressWidth = $(".ss-progress-container").width();
		var result = ((time * progressWidth) / ssvideo.duration);
		$(".ss-adsIndicator:eq("+index+")").css("left", result);
	};	
	
	// advertising
	function advertising( advertising, index, type, time, width, height, src, href, code ){		
		// Reklam bloğunu ekleyelim
		$(".ss-advertising").append('<div class="ss-adsBlock"' +
									'data-advertising="'+ advertising +'"' +
									'data-time="'+ time +'"' +
									'data-status="hidden"' +
									'></div>');
									
		// Reklamı kapatma bloğunu ekleyelim
		$(".ss-adsBlock:eq("+index+")").append('<div class="ss-adsBlock-close"><small></small></div>');
		$(".ss-adsBlock-close").on("click", function(){
			$(this).parent().stop().fadeOut(fade);
			$(".ss-advertising-open").stop().fadeIn(fade);
		});
		
		// adsBlock CSS Properties
		$(".ss-adsBlock:eq("+index+")").css({
			"width": width + "px",
			"height": height + "px",
			"margin-left": -(width/2) + "px"
		});
		
		// Tıklanıldığında adrese gitme
		$(".ss-adsBlock:eq("+index+")").append('<div class="ss-adsBlock-content"></div>');
		if( type == "image" ){
			$(".ss-adsBlock .ss-adsBlock-content").css("cursor", "pointer");
			$(".ss-adsBlock:eq("+index+") .ss-adsBlock-content").css("background", "url("+ src +")");
			$(".ss-adsBlock:eq("+index+") .ss-adsBlock-content").on("click", function(){
				if( $.browser.name == "msie" ){
					$(".ss-table.ss-speed .ss-row").removeClass("selected");
					$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
				};
				ssvideo.pause();
				window.open(href, "_blank");
			});
		}else if( type == "flash" ){
			$(".ss-adsBlock:eq("+index+") .ss-adsBlock-content").html(code);
			$(".ss-adsBlock:eq("+index+") .ss-adsBlock-content").on("click", function(){
				if( $.browser.name == "msie" ){
					$(".ss-table.ss-speed .ss-row").removeClass("selected");
					$(".ss-table.ss-speed .ss-row[data-speed=1]").addClass("selected");
				};
				ssvideo.pause();
			});
		}
		
		// Indicators
		$(".ss-indicators").append('<div class="ss-adsIndicator"></div>');
		ssvideo.addEventListener("canplay", function(){
			adsIndicator(index, time);
		});
		
		ssvideo.addEventListener("timeupdate", function(){
			adsIndicator(index, time);
			currenttime = Math.floor(ssvideo.currentTime);
			var dataAdsStatus = $(".ss-adsBlock[data-advertising="+ advertising +"]").attr("data-status");
			// Belirtilen anda reklamın açılması
			if( currenttime == time ){
				$(".ss-advertising").attr("data-advertising", advertising);
				if( dataAdsStatus == "hidden" ){
					$(".ss-adsBlock").stop().fadeOut(fade);
					$(".ss-adsBlock[data-advertising="+ advertising +"]").stop().fadeIn(fade);
					$(".ss-adsBlock[data-advertising="+ advertising +"]  .ss-adsBlock-content").stop().animate({"opacity": 1}, fade);
					$(".ss-advertising-open").stop().fadeOut(fade);
				};
			}else if( currenttime == time + 5 ){
				if( dataAdsStatus == "hidden" ){
					$(".ss-adsBlock[data-advertising="+ advertising +"]  .ss-adsBlock-content").stop().animate({"opacity": 0.2}, fade);
				};
			}else if( currenttime == time + 10 ){
				if( dataAdsStatus == "hidden" ){
					$(".ss-adsBlock").stop().fadeOut(fade);
					$(".ss-advertising-open").stop().fadeIn(fade);
					$(".ss-adsBlock[data-advertising="+ advertising +"]").attr("data-status", "display");
				}
			};

		});
		
		$(".ss-advertising-open").on("click", function(){
			var dataAdvertising = $(".ss-advertising").attr("data-advertising");
			$(".ss-adsBlock").stop().fadeOut(fade);
			$(".ss-adsBlock[data-advertising="+ dataAdvertising +"]").stop().fadeIn(fade);
			$(".ss-adsBlock[data-advertising="+ advertising +"]  .ss-adsBlock-content").stop().animate({"opacity": 1}, fade);
			$(this).stop().fadeOut(fade);
		});
		
	};	

	}); // return this.each() biter
};

})(jQuery);