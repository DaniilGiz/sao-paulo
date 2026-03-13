var Bastian=function(t){var e={}
function n(r){if(e[r])return e[r].exports
var i=e[r]={i:r,l:!1,exports:{}}
return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i))
return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict"
n.r(e)
var r=n(1),i=n.n(r),o=n(5),s=n.n(o),a=(n(7),n(8),n(22),n(60),n(70)),c=n(23),l=n(71)
const u={"authoring-toolkit/misc":()=>n(72),"authoring-toolkit/ui":()=>n(220),"adapters/headless-adapter":()=>n(59),feed:()=>n(214),"feed/authoring/card":()=>n(218).exposable,"feed/items/register":()=>n(213).registerExternalItemFactory,renderer:()=>n(82),version:()=>n(188)},h=c.Globals.document
function d(t){try{n(216).launch(t)}catch(e){Object(l.triggerDomEvent)(a.LAUNCH_FAILED,h),n(20).error("Impossible to launch Bastian",e,e.stack)}}d.require=function(t){return i()(t)&&t in u?u[t]():n(t)},Object.defineProperty(d,"version",{get:u.version}),c.Globals.bstn&&Object.defineProperty(d,"lazy",{get:c.Globals.bstn.lazy}),Object(l.triggerDomEvent)(a.APP_LOADED,h),s()(c.Globals.globalWebdeps)&&!window.isNoLoadPlayerFeed&&c.Globals.globalWebdeps("player"),e.default=d},function(t,e,n){var r=n(2),i=n(3),o=n(4)
t.exports=function(t){return"string"==typeof t||!i(t)&&o(t)&&"[object String]"==r(t)}},function(t,e){var n=Object.prototype.toString
t.exports=function(t){return n.call(t)}},function(t,e){var n=Array.isArray
t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(2),i=n(6)
t.exports=function(t){if(!i(t))return!1
var e=r(t)
return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e){t.exports=function(t){var e=typeof t
return null!=t&&("object"==e||"function"==e)}},function(t,e,n){},function(t,e,n){"use strict"
n.r(e),n.d(e,"$OnDemandSource",(function(){return h}))
var r=n(9),i=n.n(r),o=n(5),s=n.n(o),a=n(10),c=n.n(a),l=n(15),u=n(21)
class h{constructor(t){this.buffer=[],this.loadLocked=!1,this.nextFetch=null,this.nextPage=null,this.isFetchNeeded=()=>this.whenToFetch(),this.unlock=t=>(this.loadLocked=!1,t),this.isEnded=()=>this.whenToComplete()
const e=this
this.stream=c.a.create({start(t){e.listener=t},stop(){e.listener=null}}),t&&this.store(t)}store(t){const e=Object(u.castArray)(t).map(l.PostIndex.filter).filter(t=>t)
return this.buffer.push(...e),e.length}isEmpty(){return 0===this.buffer.length}setNextFetch(t){this.nextFetch=i()(t)?t:null}setNextPage(t){this.nextPage=i()(t)?t:null}request(t){if(this.listener){const e=this.listener,n=this.isEmpty()
n&&this.isEnded()?e.complete():(t&&!0===t.preventFetch&&!n||!this.isFetchNeeded()||this.fetch(t),n||e.next(this.buffer.shift()))}}whenToFetch(){throw new Error("Not implemented")}fetch(t){if(!1===this.loadLocked)return this.loadLocked=!0,this.howToFetch(t)}howToFetch(t){throw new Error("Not implemented")}whenToComplete(){throw new Error("Not implemented")}saveAndResumeStream(t,e){const n=this.isEmpty()
this.store(t),s()(e)&&e(t),n&&setTimeout(()=>{this.request()},100)}}},function(t,e,n){var r=n(2),i=n(4)
t.exports=function(t){return"number"==typeof t||i(t)&&"[object Number]"==r(t)}},function(t,e,n){"use strict"
var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)}
return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()
Object.defineProperty(e,"__esModule",{value:!0})
var i=n(11),o={}
function s(){}function a(t){for(var e=t.length,n=Array(e),r=0;r<e;++r)n[r]=t[r]
return n}function c(t,e,n){try{return t.f(e)}catch(r){return n._e(r),o}}e.NO=o
var l={_n:s,_e:s,_c:s}
function u(t){t._start=function(t){t.next=t._n,t.error=t._e,t.complete=t._c,this.start(t)},t._stop=t.stop}e.NO_IL=l
var h=function(){function t(t,e){this._stream=t,this._listener=e}return t.prototype.unsubscribe=function(){this._stream._remove(this._listener)},t}(),d=function(){function t(t){this._listener=t}return t.prototype.next=function(t){this._listener._n(t)},t.prototype.error=function(t){this._listener._e(t)},t.prototype.complete=function(){this._listener._c()},t}(),p=function(){function t(t){this.type="fromObservable",this.ins=t,this.active=!1}return t.prototype._start=function(t){this.out=t,this.active=!0,this._sub=this.ins.subscribe(new d(t)),this.active||this._sub.unsubscribe()},t.prototype._stop=function(){this._sub&&this._sub.unsubscribe(),this.active=!1},t}(),f=function(){function t(t){this.type="merge",this.insArr=t,this.out=o,this.ac=0}return t.prototype._start=function(t){this.out=t
var e=this.insArr,n=e.length
this.ac=n
for(var r=0;r<n;r++)e[r]._add(this)},t.prototype._stop=function(){for(var t=this.insArr,e=t.length,n=0;n<e;n++)t[n]._remove(this)
this.out=o},t.prototype._n=function(t){var e=this.out
e!==o&&e._n(t)},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){if(--this.ac<=0){var t=this.out
if(t===o)return
t._c()}},t}(),m=function(){function t(t,e,n){this.i=t,this.out=e,this.p=n,n.ils.push(this)}return t.prototype._n=function(t){var e=this.p,n=this.out
if(n!==o&&e.up(t,this.i)){for(var r=e.vals,i=r.length,s=Array(i),a=0;a<i;++a)s[a]=r[a]
n._n(s)}},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.p
t.out!==o&&0==--t.Nc&&t.out._c()},t}(),g=function(){function t(t){this.type="combine",this.insArr=t,this.out=o,this.ils=[],this.Nc=this.Nn=0,this.vals=[]}return t.prototype.up=function(t,e){var n=this.vals[e],r=this.Nn?n===o?--this.Nn:this.Nn:0
return this.vals[e]=t,0===r},t.prototype._start=function(t){this.out=t
var e=this.insArr,n=this.Nc=this.Nn=e.length,r=this.vals=new Array(n)
if(0===n)t._n([]),t._c()
else for(var i=0;i<n;i++)r[i]=o,e[i]._add(new m(i,t,this))},t.prototype._stop=function(){for(var t=this.insArr,e=t.length,n=this.ils,r=0;r<e;r++)t[r]._remove(n[r])
this.out=o,this.ils=[],this.vals=[]},t}(),v=function(){function t(t){this.type="fromArray",this.a=t}return t.prototype._start=function(t){for(var e=this.a,n=0,r=e.length;n<r;n++)t._n(e[n])
t._c()},t.prototype._stop=function(){},t}(),b=function(){function t(t){this.type="fromPromise",this.on=!1,this.p=t}return t.prototype._start=function(t){var e=this
this.on=!0,this.p.then((function(n){e.on&&(t._n(n),t._c())}),(function(e){t._e(e)})).then(s,(function(t){setTimeout((function(){throw t}))}))},t.prototype._stop=function(){this.on=!1},t}(),y=function(){function t(t){this.type="periodic",this.period=t,this.intervalID=-1,this.i=0}return t.prototype._start=function(t){var e=this
this.intervalID=setInterval((function(){t._n(e.i++)}),this.period)},t.prototype._stop=function(){-1!==this.intervalID&&clearInterval(this.intervalID),this.intervalID=-1,this.i=0},t}(),E=function(){function t(t,e){this.type="debug",this.ins=t,this.out=o,this.s=s,this.l="","string"==typeof e?this.l=e:"function"==typeof e&&(this.s=e)}return t.prototype._start=function(t){this.out=t,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o},t.prototype._n=function(t){var e=this.out
if(e!==o){var n=this.s,r=this.l
if(n!==s)try{n(t)}catch(i){e._e(i)}else r?console.log(r+":",t):console.log(t)
e._n(t)}},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.out
t!==o&&t._c()},t}(),_=function(){function t(t,e){this.type="drop",this.ins=e,this.out=o,this.max=t,this.dropped=0}return t.prototype._start=function(t){this.out=t,this.dropped=0,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o},t.prototype._n=function(t){var e=this.out
e!==o&&this.dropped++>=this.max&&e._n(t)},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.out
t!==o&&t._c()},t}(),O=function(){function t(t,e){this.out=t,this.op=e}return t.prototype._n=function(){this.op.end()},t.prototype._e=function(t){this.out._e(t)},t.prototype._c=function(){this.op.end()},t}(),S=function(){function t(t,e){this.type="endWhen",this.ins=e,this.out=o,this.o=t,this.oil=l}return t.prototype._start=function(t){this.out=t,this.o._add(this.oil=new O(t,this)),this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.o._remove(this.oil),this.out=o,this.oil=l},t.prototype.end=function(){var t=this.out
t!==o&&t._c()},t.prototype._n=function(t){var e=this.out
e!==o&&e._n(t)},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){this.end()},t}(),w=function(){function t(t,e){this.type="filter",this.ins=e,this.out=o,this.f=t}return t.prototype._start=function(t){this.out=t,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o},t.prototype._n=function(t){var e=this.out
if(e!==o){var n=c(this,t,e)
n!==o&&n&&e._n(t)}},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.out
t!==o&&t._c()},t}(),I=function(){function t(t,e){this.out=t,this.op=e}return t.prototype._n=function(t){this.out._n(t)},t.prototype._e=function(t){this.out._e(t)},t.prototype._c=function(){this.op.inner=o,this.op.less()},t}(),T=function(){function t(t){this.type="flatten",this.ins=t,this.out=o,this.open=!0,this.inner=o,this.il=l}return t.prototype._start=function(t){this.out=t,this.open=!0,this.inner=o,this.il=l,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.inner!==o&&this.inner._remove(this.il),this.out=o,this.open=!0,this.inner=o,this.il=l},t.prototype.less=function(){var t=this.out
t!==o&&(this.open||this.inner!==o||t._c())},t.prototype._n=function(t){var e=this.out
if(e!==o){var n=this.inner,r=this.il
n!==o&&r!==l&&n._remove(r),(this.inner=t)._add(this.il=new I(e,this))}},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){this.open=!1,this.less()},t}(),C=function(){function t(t,e,n){var r=this
this.type="fold",this.ins=n,this.out=o,this.f=function(e){return t(r.acc,e)},this.acc=this.seed=e}return t.prototype._start=function(t){this.out=t,this.acc=this.seed,t._n(this.acc),this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o,this.acc=this.seed},t.prototype._n=function(t){var e=this.out
if(e!==o){var n=c(this,t,e)
n!==o&&e._n(this.acc=n)}},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.out
t!==o&&t._c()},t}(),x=function(){function t(t){this.type="last",this.ins=t,this.out=o,this.has=!1,this.val=o}return t.prototype._start=function(t){this.out=t,this.has=!1,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o,this.val=o},t.prototype._n=function(t){this.has=!0,this.val=t},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.out
t!==o&&(this.has?(t._n(this.val),t._c()):t._e(new Error("last() failed because input stream completed")))},t}(),j=function(){function t(t,e){this.type="map",this.ins=e,this.out=o,this.f=t}return t.prototype._start=function(t){this.out=t,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o},t.prototype._n=function(t){var e=this.out
if(e!==o){var n=c(this,t,e)
n!==o&&e._n(n)}},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.out
t!==o&&t._c()},t}(),A=function(){function t(t){this.type="remember",this.ins=t,this.out=o}return t.prototype._start=function(t){this.out=t,this.ins._add(t)},t.prototype._stop=function(){this.ins._remove(this.out),this.out=o},t}(),P=function(){function t(t,e){this.type="replaceError",this.ins=e,this.out=o,this.f=t}return t.prototype._start=function(t){this.out=t,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o},t.prototype._n=function(t){var e=this.out
e!==o&&e._n(t)},t.prototype._e=function(t){var e=this.out
if(e!==o)try{this.ins._remove(this),(this.ins=this.f(t))._add(this)}catch(n){e._e(n)}},t.prototype._c=function(){var t=this.out
t!==o&&t._c()},t}(),N=function(){function t(t,e){this.type="startWith",this.ins=t,this.out=o,this.val=e}return t.prototype._start=function(t){this.out=t,this.out._n(this.val),this.ins._add(t)},t.prototype._stop=function(){this.ins._remove(this.out),this.out=o},t}(),R=function(){function t(t,e){this.type="take",this.ins=e,this.out=o,this.max=t,this.taken=0}return t.prototype._start=function(t){this.out=t,this.taken=0,this.max<=0?t._c():this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=o},t.prototype._n=function(t){var e=this.out
if(e!==o){var n=++this.taken
n<this.max?e._n(t):n===this.max&&(e._n(t),e._c())}},t.prototype._e=function(t){var e=this.out
e!==o&&e._e(t)},t.prototype._c=function(){var t=this.out
t!==o&&t._c()},t}(),k=function(){function t(t){this._prod=t||o,this._ils=[],this._stopID=o,this._dl=o,this._d=!1,this._target=o,this._err=o}return t.prototype._n=function(t){var e=this._ils,n=e.length
if(this._d&&this._dl._n(t),1==n)e[0]._n(t)
else{if(0==n)return
for(var r=a(e),i=0;i<n;i++)r[i]._n(t)}},t.prototype._e=function(t){if(this._err===o){this._err=t
var e=this._ils,n=e.length
if(this._x(),this._d&&this._dl._e(t),1==n)e[0]._e(t)
else{if(0==n)return
for(var r=a(e),i=0;i<n;i++)r[i]._e(t)}if(!this._d&&0==n)throw this._err}},t.prototype._c=function(){var t=this._ils,e=t.length
if(this._x(),this._d&&this._dl._c(),1==e)t[0]._c()
else{if(0==e)return
for(var n=a(t),r=0;r<e;r++)n[r]._c()}},t.prototype._x=function(){0!==this._ils.length&&(this._prod!==o&&this._prod._stop(),this._err=o,this._ils=[])},t.prototype._stopNow=function(){this._prod._stop(),this._err=o,this._stopID=o},t.prototype._add=function(t){var e=this._target
if(e!==o)return e._add(t)
var n=this._ils
if(n.push(t),!(n.length>1))if(this._stopID!==o)clearTimeout(this._stopID),this._stopID=o
else{var r=this._prod
r!==o&&r._start(this)}},t.prototype._remove=function(t){var e=this,n=this._target
if(n!==o)return n._remove(t)
var r=this._ils,i=r.indexOf(t)
i>-1&&(r.splice(i,1),this._prod!==o&&r.length<=0?(this._err=o,this._stopID=setTimeout((function(){return e._stopNow()}))):1===r.length&&this._pruneCycles())},t.prototype._pruneCycles=function(){this._hasNoSinks(this,[])&&this._remove(this._ils[0])},t.prototype._hasNoSinks=function(t,e){if(-1!==e.indexOf(t))return!0
if(t.out===this)return!0
if(t.out&&t.out!==o)return this._hasNoSinks(t.out,e.concat(t))
if(t._ils){for(var n=0,r=t._ils.length;n<r;n++)if(!this._hasNoSinks(t._ils[n],e.concat(t)))return!1
return!0}return!1},t.prototype.ctor=function(){return this instanceof D?D:t},t.prototype.addListener=function(t){t._n=t.next||s,t._e=t.error||s,t._c=t.complete||s,this._add(t)},t.prototype.removeListener=function(t){this._remove(t)},t.prototype.subscribe=function(t){return this.addListener(t),new h(this,t)},t.prototype[i.default]=function(){return this},t.create=function(e){if(e){if("function"!=typeof e.start||"function"!=typeof e.stop)throw new Error("producer requires both start and stop functions")
u(e)}return new t(e)},t.createWithMemory=function(t){return t&&u(t),new D(t)},t.never=function(){return new t({_start:s,_stop:s})},t.empty=function(){return new t({_start:function(t){t._c()},_stop:s})},t.throw=function(e){return new t({_start:function(t){t._e(e)},_stop:s})},t.from=function(e){if("function"==typeof e[i.default])return t.fromObservable(e)
if("function"==typeof e.then)return t.fromPromise(e)
if(Array.isArray(e))return t.fromArray(e)
throw new TypeError("Type of input to from() must be an Array, Promise, or Observable")},t.of=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return t.fromArray(e)},t.fromArray=function(e){return new t(new v(e))},t.fromPromise=function(e){return new t(new b(e))},t.fromObservable=function(e){if(e.endWhen)return e
var n="function"==typeof e[i.default]?e[i.default]():e
return new t(new p(n))},t.periodic=function(e){return new t(new y(e))},t.prototype._map=function(t){return new(this.ctor())(new j(t,this))},t.prototype.map=function(t){return this._map(t)},t.prototype.mapTo=function(t){var e=this.map((function(){return t}))
return e._prod.type="mapTo",e},t.prototype.filter=function(e){var n,r,i=this._prod
return new t(i instanceof w?new w((n=i.f,r=e,function(t){return n(t)&&r(t)}),i.ins):new w(e,this))},t.prototype.take=function(t){return new(this.ctor())(new R(t,this))},t.prototype.drop=function(e){return new t(new _(e,this))},t.prototype.last=function(){return new t(new x(this))},t.prototype.startWith=function(t){return new D(new N(this,t))},t.prototype.endWhen=function(t){return new(this.ctor())(new S(t,this))},t.prototype.fold=function(t,e){return new D(new C(t,e,this))},t.prototype.replaceError=function(t){return new(this.ctor())(new P(t,this))},t.prototype.flatten=function(){return new t(new T(this))},t.prototype.compose=function(t){return t(this)},t.prototype.remember=function(){return new D(new A(this))},t.prototype.debug=function(t){return new(this.ctor())(new E(this,t))},t.prototype.imitate=function(t){if(t instanceof D)throw new Error("A MemoryStream was given to imitate(), but it only supports a Stream. Read more about this restriction here: https://github.com/staltz/xstream#faq")
this._target=t
for(var e=this._ils,n=e.length,r=0;r<n;r++)t._add(e[r])
this._ils=[]},t.prototype.shamefullySendNext=function(t){this._n(t)},t.prototype.shamefullySendError=function(t){this._e(t)},t.prototype.shamefullySendComplete=function(){this._c()},t.prototype.setDebugListener=function(t){t?(this._d=!0,t._n=t.next||s,t._e=t.error||s,t._c=t.complete||s,this._dl=t):(this._d=!1,this._dl=o)},t.merge=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return new t(new f(e))},t.combine=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return new t(new g(e))},t}()
e.Stream=k
var D=function(t){function e(e){var n=t.call(this,e)||this
return n._has=!1,n}return r(e,t),e.prototype._n=function(e){this._v=e,this._has=!0,t.prototype._n.call(this,e)},e.prototype._add=function(t){var e=this._target
if(e!==o)return e._add(t)
var n=this._ils
if(n.push(t),n.length>1)this._has&&t._n(this._v)
else if(this._stopID!==o)this._has&&t._n(this._v),clearTimeout(this._stopID),this._stopID=o
else if(this._has)t._n(this._v)
else{var r=this._prod
r!==o&&r._start(this)}},e.prototype._stopNow=function(){this._has=!1,t.prototype._stopNow.call(this)},e.prototype._x=function(){this._has=!1,t.prototype._x.call(this)},e.prototype.map=function(t){return this._map(t)},e.prototype.mapTo=function(e){return t.prototype.mapTo.call(this,e)},e.prototype.take=function(e){return t.prototype.take.call(this,e)},e.prototype.endWhen=function(e){return t.prototype.endWhen.call(this,e)},e.prototype.replaceError=function(e){return t.prototype.replaceError.call(this,e)},e.prototype.remember=function(){return this},e.prototype.debug=function(e){return t.prototype.debug.call(this,e)},e}(k)
e.MemoryStream=D
var M=k
e.default=M},function(t,e,n){"use strict"
n.r(e),function(t,r){var i,o=n(14)
i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r
var s=Object(o.default)(i)
e.default=s}.call(this,n(12),n(13)(t))},function(t,e){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t)
e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,n){"use strict"
function r(t){var e,n=t.Symbol
return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict"
n.r(e),n.d(e,"PostIndex",(function(){return g}))
var r=n(16),i=n.n(r),o=n(1),s=n.n(o),a=n(19),c=n.n(a)
n(20)
const l=[],u=/^[a-z0-9]+:\/\//,h=t=>t.replace(u,""),d=i()(t=>{c()([...new Set(t)]).filter(s.a).forEach(p)}),p=t=>{l.push(h(t))}
function f(t){if(!s()(t.key))throw new Error("Can't register post without a key (post: "+JSON.stringify(t)+")")
p(t.key)}function m(t){if(s()(t.key))return l.indexOf(h(t.key))>=0
throw new Error("Can't look for a post without a key (post: "+JSON.stringify(t)+")")}const g={loadInitialURLs:d,register:f,has:m,filter:function(t){if(!m(t))return f(t),t},destroy:function(){l.splice(0,l.length)}}},function(t,e,n){var r=n(17)
t.exports=function(t){return r(2,t)}},function(t,e,n){var r=n(18)
t.exports=function(t,e){var n
if("function"!=typeof e)throw new TypeError("Expected a function")
return t=r(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=void 0),n}}},function(t,e){t.exports=function(t){return t}},function(t,e){t.exports=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e]
o&&(i[r++]=o)}return i}},function(t,e,n){"use strict"
n.r(e),n.d(e,"error",(function(){return s})),n.d(e,"warn",(function(){return a})),n.d(e,"info",(function(){return c})),n.d(e,"log",(function(){return l}))
var r=n(1),i=n.n(r)
function o(t){return i()(t[0])?["[bastian] "+t[0],...t.slice(1)]:["[bastian]",...t]}const s=(...t)=>console.error(...o(t)),a=(...t)=>{console.warn(...o(t))},c=(...t)=>{},l=(...t)=>{}},function(t,e,n){"use strict"
function r(t){return Array.isArray(t)?t:[t]}n.r(e),n.d(e,"castArray",(function(){return r}))},function(t,e,n){"use strict"
n.r(e),n.d(e,"setKey",(function(){return g})),n.d(e,"$Falkor",(function(){return v}))
var r=n(1),i=n.n(r),o=n(9),s=n.n(o),a=n(23),c=n(20),l=n(24),u=n(56),h=n(26),d=n(59),p=n(8)
let f
const m={},g=t=>{let e=t.key
i()(e)||s()(e)||(Object(h.get)(t,"content.url")?e=t.content.url:Object(h.get)(t,"content.video.id")?e=t.content.video.id:t.id&&(e=t.id)),e&&(t.key=String(e).trim())}
class v extends p.$OnDemandSource{static getInstance(t){if(t&&!f&&(f=new v(t,m)),f)return f
throw new Error("Couldn't return an $Falkor instance")}constructor(t,e){e!==m&&Object(c.warn)("Class $Falkor is a singleton and shouldn't be called directly."),super(t.items),this.minimun=20,this.feedId=l.Configs.get("feedId"),this.setNextFetch(t.nextFetch||t.nextPage),this.setNextPage(t.nextPage)}whenToFetch(){let t=!1
return t=this.buffer.length<=this.minimun&&!this.isEnded(),t}static buildRequestUrl(t,e,n){return t+"/page/"+e+(n?"/query_parameter/"+encodeURI(n):"")}store(t){let e=l.Configs.get("recLastPosition")
return Array.isArray(t)||(t=[t]),t.forEach(t=>{e+=1,g(t),t.position=t.position||e,t.source=v.staticName}),l.Configs.set("recLastPosition",e),super.store(t)}getResourceURI(){const t=u.Settings.get("RESOURCE_URI")
return t.match(/local.globoi.com/g)?t.replace("http://local.globoi.com:4000","http://falkor-cda.bastian.qa.globoi.com"):t}howToFetch(){const t=this.nextFetch,e=this.getResourceURI(),n=u.Settings.get("DEVICE_GROUP"),r={method:"GET",headers:new Headers({"X-Mobile-Group":n,Vary:"X-Mobile-Group"})},i=v.buildRequestUrl(e,t,u.Settings.get("QUERY_PARAMETER"))
if(s()(t))return fetch(i,r).then(t=>{if(!t.ok)throw new Error("[feed-fe:falkor] Network response was not ok: "+t.status+" "+t.statusText)
return t}).then(t=>t.json()).then(d.adaptHeadlessPayload).then(this.unlock).then(t=>{this.setNextPage(t.nextPage),this.setNextFetch(t.nextFetch||t.nextPage),this.saveAndResumeStream(t.items),a.Globals.bstn.hasSentImpression=!1}).catch(t=>{this.listener&&this.listener.error(t)})}whenToComplete(){let t
return t=null===this.nextPage,t}}v.staticName="$Falkor"},function(t,e,n){"use strict"
n.r(e),n.d(e,"Globals",(function(){return r}))
const r=function(){return this||(0,eval)("this")}()},function(t,e,n){"use strict"
n.r(e),n.d(e,"set",(function(){return p})),n.d(e,"get",(function(){return f})),n.d(e,"decr",(function(){return m})),n.d(e,"incr",(function(){return g})),n.d(e,"absorbConfigs",(function(){return b})),n.d(e,"Configs",(function(){return I}))
var r=n(25),i=n.n(r),o=n(9),s=n.n(o),a=n(26),c=n(29),l=n(55),u=n(23),h=n(56)
const d=new Map([["referer",""]])
function p(t,e){return d.set(t,e),e}const f=(t,e)=>{const n=d.get(t)
return i()(n)?e:n},m=(t,e=1)=>{const n=parseInt(f(t,null),10)
if(s()(n)&&e>0)return p(t,n-e)},g=(t,e=1)=>{const n=parseInt(f(t,null),10)
if(s()(n)&&e>0)return p(t,n+e)},v=[["forePosts","config.forePosts",0],["headlineVariation","config.headlineVariation"],["componentPosition","config.componentPosition",7],["cardsPosition","config.cardsPosition",[]],["feedType","config.feedType",h.Settings.get("FEED_TYPE")||"unknown-type"],["photoOverVideo","config.photoOverVideo",h.Settings.get("IS_PHOTO_PRIORIZED")||!1],["recommendationContentId","config.recommendation.contentId",h.Settings.get("RECOMMENDATION.CONTENT_ID")||"feed"],["disableDateTime","config.disableDateTime",!1],["isDebugModeClient","isDebugModeClient",!1],["renderContext","renderContext","csr"]],b=t=>{for(const[e,n,r]of v)p(e,Object(a.get)(t,n)||r)
p("feedId",t.id||Object(a.get)(t,"items.0.feedId")||"unknown-feedId"),p("referer",t.referer),p("recommendationCounter",0),_(t),O(t),w(t),S(t),E(t),y(t)},y=t=>{const e=Object(c.getHeadlinesType)(t)
p("headlinesSelected",e.name),p("headlinesMaxPosts",e.maxPosts),p("headlinesNrPosts",Object(c.getNrHeadlines)(t)),p("hasCustomHeadlines",e.name===c.HEADLINES_TYPES.CUSTOM.name),p("hasHeadlinesToRender",Object(c.hasHeadlines)(t))},E=t=>{Object.keys(t.atreyu||{}).forEach(e=>{p(e,t.atreyu[e])}),p("isHome","home-api"===f("api")),p("isHomeOrTopic","home-api"===f("api")||"topic-api"===f("api")),p("isMulticontent","multi-content"===f("api"))},_=t=>{const e="distributed-components",n="cards"
let r
const i=h.Settings.get("EXTENSION_MODEL"),o=Object(a.get)(t,"config.componentPosition")
r=[e,n].includes(i)?i:s()(o)?e:n,p("thirdPartyingModel",r)},O=t=>{var e
const n=Object(a.get)(t,"config.recommendation.start")||Object(a.get)(t,"config.cutRange")+1,r=h.Settings.get("HAS_HOMELIVE")||!1?0:f("forePosts"),i="home-api"===(null===(e=t.atreyu)||void 0===e?void 0:e.api)
p("recommendationStart",(!l.At.smallScreen||"uber"===f("headlineVariation"))&&n<=r&&i?r+1:n)},S=t=>{const e=Object(a.get)(t,"config.strategies")
e&&e.includes("channels")?p("isSegmentedByChannels",!0):p("isSegmentedByChannels",!1)},w=t=>{const e=Object(a.get)(t,"config.recommendation.active")
p("isRecommended",u.Globals.BASTIAN_FORCE_RECOMMENDED||(i()(e)?h.Settings.get("IS_RECOMMENDED",!1):e))},I={set:p,has:t=>d.has(t),get:f,unset:t=>d.delete(t),clear:()=>d.clear(),decr:m,incr:g,absorbConfigs:b}
e.default=I},function(t,e){t.exports=function(t){return void 0===t}},function(t,e,n){"use strict"
n.r(e)
var r=n(27),i=n.n(r)
n.d(e,"get",(function(){return i.a}))},function(t,e,n){n(28)
t.exports=function(t,e){for(var n=e.split("."),r=n.pop();e=n.shift();)if(null==(t=t[e]))return
return t[r]}},function(t,e){t.exports=function(t){switch(typeof t){case"string":case"number":case"boolean":return!0}return null==t}},function(t,e,n){"use strict"
n.r(e),n.d(e,"treatPayload",(function(){return b})),n.d(e,"hasHeadlines",(function(){return f})),n.d(e,"getNrHeadlines",(function(){return g})),n.d(e,"getHeadlinesType",(function(){return p})),n.d(e,"flatAtreyuProps",(function(){return y})),n.d(e,"getFirstPostWithImageForLCP",(function(){return O})),n.d(e,"getFirstImage",(function(){return _})),n.d(e,"HEADLINES_TYPES",(function(){return c}))
var r=n(30),i=n(26)
function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const s="L",a="V",c={UBER:{name:"uberHeadline",maxPosts:1,isSelected:t=>d(t),conditionToRender:t=>u(t)},DEFAULT:{name:"defaultHeadlines",maxPosts:3,isSelected:t=>!d(t)&&!m(t).hasCustomHeadlines,conditionToRender:t=>"desktop"===h(t)&&u(t)},CUSTOM:{name:"customHeadlines",maxPosts:5,isSelected:t=>m(t).hasCustomHeadlines,conditionToRender:t=>u(t)}},l=(t={},e)=>{const n=t||{},r=n.sizes||{}
return(r[e]||((t={})=>Object.keys(t).length?t[Object.keys(t)[0]]:{})(r)).url||n.url},u=(t={},e)=>Math.min((t.config||{}).forePosts||0,e||c.DEFAULT.maxPosts),h=(t={})=>{const e=(t.atreyu||{}).channel
return(t.atreyu||{}).ffe_channel_ef||e},d=(t={})=>"uber"===(t.config||{}).headlineVariation,p=(t={})=>[c.CUSTOM,c.UBER,c.DEFAULT].find(e=>e.isSelected(t)),f=t=>{var e
return!((null===(e=t.atreyu)||void 0===e?void 0:e.has_homelive)||!1)&&p(t).conditionToRender(t)},m=(t={})=>({hasCustomHeadlines:(t.atreyu||{}).ffe_custom_headlines}),g=(t={})=>{const e=p(t)
return f(t)?u(t,e.maxPosts):0},v=t=>{const e=h(t),n=(t=>{const e=g(t),n=t.forePosts||[],r=t.items||[],i=r.length?r[0]:void 0,o=[]
let s=n
return i&&(o.push(i),s=n.filter(t=>t.id!==i.id)),o.push(...s),o.push(...r.slice(1)),o.slice(0,e)})(t),r={0:{checkVertical:()=>[2,3].includes(n.length)||"smart"===e},1:{checkVertical:()=>2===n.length},2:{checkVertical:()=>!1}}
return n.map(t=>{const i=n.indexOf(t),c=(t.content||{}).image,u=!!r[i]&&r[i].checkVertical(),h=c&&(c.url||c.sizes)
return o({},t,{elementClasses:"type-"+t.type+" "+(h&&"desktop"===e?"with-photo":""),imgUrl:l(c,u?a:s)})})},b=t=>{var e
const n=(null===(e=t.atreyu)||void 0===e?void 0:e.has_homelive)||!1,{hasCustomHeadlines:r}=m(t),i=d(t),o=(t.items||[]).length
let s=[],a="",c=""
if(!n&&f(t)&&o){s=v(t)
const e=s.map(t=>t.id)
t.items=t.items.filter(t=>!e.includes(t.id)),a="fore-posts-setted fore-posts-"+s.length+" bsl-has-items bsl-"+(i?"has":"no")+"-headline-variation bsl-has-fore-posts",c="model-"+s.length+" "+(i?"variation-uber":"")}return{headlines:s,hasCustomHeadlines:r,areaShowtimeClasses:a,headlinesClasses:c}},y=(t={})=>{const e=t.parameters||{}
Object.keys(e).forEach(n=>{const r=Array.isArray(e[n])&&e[n].length?e[n][0]:"",i=["true","false"].includes(r)?"true"===r:r
t[n]=i}),t.parameters=void 0},E=(t={})=>Object(i.get)(t,"content.video.id"),_=t=>{const{hasCustomHeadlines:e}=m(t)
let n
if(e)return n
if(f(t))n=v(t)[0].imgUrl
else{const e=O(t)
e&&(n=((t={})=>"video"===t.type)(e)&&E(e)?Object(r.buildUrlForPostVideo4x3)(E(e)):Object(r.choosePicture)(e.content.image))}return n},O=t=>{const{items:e=[]}=t
let n
if(!f(t)){const t=["materia","video","cobertura","tempo_real"],r=e.find(e=>e.content&&e.content.image&&t.includes(e.type))
r&&e.indexOf(r)<4&&(n=r)}return n}},function(t,e,n){"use strict"
n.r(e),n.d(e,"choosePicture",(function(){return O})),n.d(e,"buildUrlForPostVideo4x3",(function(){return S}))
var r=n(31),i=n.n(r),o=n(36),s=n.n(o),a=n(41),c=n.n(a),l=n(50),u=n.n(l),h=n(1),d=n.n(h),p=n(52),f=n.n(p),m=n(23),g=n(26)
const v={1:"S",1.5:"M",2:"L",3:"XL",4:"XXL"},b=Object.keys(v).map(Number),y=u()(b),E=s()(b),_=c()(t=>{const e=f()(t||m.Globals.devicePixelRatio,E,y)
let n=Math.floor(e)
for(;!b.includes(n)&&n<y;)n=Math.floor(n+.1)
return v[n]||v[E]})
function O(t,e,n,r){if(t.sizes){if(r)return t.sizes[r].url
const o=t.sizes,s=function(t=1,e){let n="S"
return e&&e.height>=e.width?n="V":t&&(n=_(t)),n}(e,n)
return Object(g.get)(o,s+".url")||i()(o)[0].url}if(d()(t.url))return t.url}const S=t=>"https://s03.video.glbimg.com/480x360/"+t+".jpg"},function(t,e,n){var r=n(32),i=n(34)
t.exports=function(t){return null==t?[]:r(t,i(t))}},function(t,e,n){var r=n(33)
t.exports=function(t,e){return r(e,(function(e){return t[e]}))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t)
return i}},function(t,e,n){var r=n(35)(Object.keys,Object)
t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(37),i=n(39),o=n(40)
t.exports=function(t){return t&&t.length?r(t,o,i):void 0}},function(t,e,n){var r=n(38)
t.exports=function(t,e,n){for(var i=-1,o=t.length;++i<o;){var s=t[i],a=e(s)
if(null!=a&&(void 0===c?a==a&&!r(a):n(a,c)))var c=a,l=s}return l}},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(t,e){return t<e}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(42)
function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function")
var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache
if(o.has(i))return o.get(i)
var s=t.apply(this,r)
return n.cache=o.set(i,s)||o,s}
return n.cache=new(i.Cache||r),n}i.Cache=r,t.exports=i},function(t,e,n){var r=n(43),i=n(44),o=n(47),s=n(48),a=n(49)
function c(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,t.exports=c},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(45),i=Array.prototype.splice
t.exports=function(t){var e=this.__data__,n=r(e,t)
return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),--this.size,!0)}},function(t,e,n){var r=n(46)
t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n
return-1}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(45)
t.exports=function(t){var e=this.__data__,n=r(e,t)
return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(45)
t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(45)
t.exports=function(t,e){var n=this.__data__,i=r(n,t)
return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},function(t,e,n){var r=n(37),i=n(51),o=n(40)
t.exports=function(t){return t&&t.length?r(t,o,i):void 0}},function(t,e){t.exports=function(t,e){return t>e}},function(t,e,n){var r=n(53),i=n(54)
t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=i(n))==n?n:0),void 0!==e&&(e=(e=i(e))==e?e:0),r(i(t),e,n)}},function(t,e){t.exports=function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}},function(t,e){t.exports=function(t){return t}},function(t,e,n){"use strict"
n.r(e),n.d(e,"SMALL_SCREEN",(function(){return i})),n.d(e,"MEDIUM_SCREEN",(function(){return o})),n.d(e,"LARGE_SCREEN",(function(){return s})),n.d(e,"SCREEN_BREAKPOINT",(function(){return p})),n.d(e,"At",(function(){return g}))
var r=n(23)
const[i,o,s]=[1,2,4]
let a,c,l,u,h,d
const p={SMALL:0,MEDIUM:540,LARGE:1e3}
a=!0
const f=t=>Number(r.Globals.matchMedia("(min-width: "+t+"px)").matches),m=Number(!0)<<f(p.MEDIUM)<<f(p.LARGE)
u=t=>m===t,h=t=>m>t,d=u(i),l=u(o),c=u(s)
const g={server:!1,client:!0,largeScreen:c,mediumScreen:l,smallScreen:d,screen:u,screenGreatThan:h}},function(t,e,n){"use strict"
n.r(e),n.d(e,"Settings",(function(){return p}))
var r=n(41),i=n.n(r),o=n(25),s=n.n(o),a=n(26),c=n(57),l=n(23)
let u,h
const d=t=>"SETTINGS.BASTIAN."+t
u=i()(t=>Object(c.has)(l.Globals,d(t)))
h=i()((t,e)=>{let n=Object(a.get)(l.Globals,d(t))
return s()(n)&&!s()(e)&&(n=e),n},(...t)=>t.map(String).join("|"))
const p={has:u,get:h}},function(t,e,n){"use strict"
n.r(e)
var r=n(58),i=n.n(r)
n.d(e,"has",(function(){return i.a}))},function(t,e,n){var r=n(27)
t.exports=function(t,e){return void 0!==r(t,e)}},function(t,e,n){"use strict"
function r(){return(r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}n.r(e),n.d(e,"isFalkorHeadlessPayload",(function(){return g})),n.d(e,"adaptHeadlessPayload",(function(){return v}))
const i="direita",o="destaque-uber",s={UBER:{isSelected:p,maxPosts:1,area:o,headlineVariation:"uber"},DEFAULT:{isSelected:t=>!p(t),maxPosts:3,area:"destaque",headlineVariation:null}},a="post-base"
function c(t,e,n=null){return t.reduce((t,r)=>(e(r)&&(null==n||t[1].length<n)?t[1].push(r):t[0].push(r),t),[[],[]])}function l(t){const e=new Map(t.items.filter(t=>t.parentId).map(t=>[t.id,t])),n=new Set,i=t.items.map(t=>{var i
if(null===(i=t.children)||void 0===i||!i.length)return t
const o=t.children.map(t=>(n.add(t),e.get(t))).filter(Boolean)
return o.length>0?r({},t,{aggregatedPosts:o}):t})
return r({},t,{items:i.filter(t=>!t.id||!n.has(t.id))})}function u(t){const e=t.items.map(t=>t.type!==a?t:r({},t,{type:t.content.type||a}))
return r({},t,{items:e})}function h(t){const e=t.items.map(t=>t.content.externalAPIConfig?r({},t,{config:t.content.externalAPIConfig}):t)
return r({},t,{items:e})}function d(t){if("specialItems"in t)return t
const[e,n]=c(t.items,t=>t.area===i)
return r({},t,{items:e,specialItems:n})}function p(t){return t.items.some(t=>t.area===o)}function f(t){if("forePosts"in t)return t
const{area:e,maxPosts:n,headlineVariation:i}=function(t){for(const e in s)if(s[e].isSelected(t))return s[e]
return s.DEFAULT}(t),[o,a]=c(t.items,t=>t.area===e,n),l=r({},t.config,{forePosts:a.length})
if(0===a.length)return r({},t,{config:l})
const u=[a[0],...o]
return i&&(l.headlineVariation=i),r({},t,{config:l,items:u,forePosts:a})}function m(t){return r({},t,{meta:r({},t.meta,{__headlessAdapted:!0})})}function g(t){const e=t.items.some(t=>Boolean(t.area)),n=t.items.some(t=>Array.isArray(t.children))
return e||n}function v(t){if(!t||!g(t))return r({},t,{meta:r({},null==t?void 0:t.meta,{__headlessAdapted:!1})})
return[u,h,l,d,f,m].reduce((t,e)=>e(t),t)}},function(t,e,n){"use strict"
n.r(e),n.d(e,"reportToRealtime",(function(){return m}))
var r=n(5),i=n.n(r),o=n(55),s=n(23),a=n(61),c=n(26)
let l
const u=[]
let h=!1
const d=()=>i()(Object(c.get)(s.Globals,"$.glbrealtime.gerar_clique")),p=()=>{for(const t of u)s.Globals.$.glbrealtime.gerar_clique(...t)};(async()=>{await Object(a.availabilityOf)("$.glbrealtime.gerar_clique",d,"30s"),d()&&(h=!0,p())})()
const f=o.At.smallScreen?"mobile":"desktop"
l=function(t,e){u.push([t,f,e]),h&&p()}
const m=l},function(t,e,n){"use strict"
n.r(e),n.d(e,"check",(function(){return E})),n.d(e,"availabilityOf",(function(){return _})),n.d(e,"MISSING_WARN",(function(){return O})),n.d(e,"missingWarn",(function(){return S}))
var r=n(41),i=n.n(r),o=n(1),s=n.n(o),a=n(62),c=n.n(a),l=n(24),u=n(68),h=n(69),d=n(20)
let p,f
let m=!1
const g={}
let v=0
const b=new Promise(()=>{}),y=()=>{m=!0
for(const t in g){const e=g[t]
!e.done&&Object(u.safeCall)(e.assertion,null)&&(v-=1,e.done=!0,c()(e.resolve))}v>0?setTimeout(y,500):m=!1}
p=(t,e={})=>{const{id:n="",timeout:r=1e4}=e,i=t.toString()+n
if(i in g)return g[i].promise
const o={assertion:t,done:!1,promise:b},a=new Promise((t,e)=>{o.resolve=t,setTimeout(()=>{o.done=!0,e(new Error("detector test timeout of "+i))},s()(r)?Object(h.timeToInt)(r):r)})
return o.promise=a,g[i]=o,v+=1,m||c()(y),a},f=async(t,e,n)=>{try{await E(e,{timeout:n})}catch(r){"esppub"!==l.Configs.get("feedType")&&S(t)}}
const E=p,_=f,O="seems to be missing on the page",S=i()(t=>Object(d.warn)(t,O))},function(t,e,n){var r=n(63),i=n(64)((function(t,e){return r(t,1,e)}))
t.exports=i},function(t,e){t.exports=function(t,e,n){if("function"!=typeof t)throw new TypeError("Expected a function")
return setTimeout((function(){t.apply(void 0,n)}),e)}},function(t,e,n){var r=n(40),i=n(65),o=n(67)
t.exports=function(t,e){return o(i(t,e,r),t+"")}},function(t,e,n){var r=n(66),i=Math.max
t.exports=function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,s=-1,a=i(o.length-e,0),c=Array(a);++s<a;)c[s]=o[e+s]
s=-1
for(var l=Array(e+1);++s<e;)l[s]=o[s]
return l[e]=n(c),r(t,this,l)}}},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e)
case 1:return t.call(e,n[0])
case 2:return t.call(e,n[0],n[1])
case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e){t.exports=function(t){return t}},function(t,e,n){"use strict"
n.r(e),n.d(e,"safeCall",(function(){return s}))
var r=n(5),i=n.n(r),o=n(20)
const s=(t,e,...n)=>{try{if(i()(t))return t.apply(e,n)
throw new TypeError("Given value is not a function")}catch(r){Object(o.error)(r)}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"timeToInt",(function(){return a}))
var r=n(41),i=n.n(r)
const o={ms:{value:1,extractor:/^(\d+)ms$/},seg:{value:1e3,extractor:/^(\d+|\d+\.\d+)s$/},min:{value:6e4,extractor:/^(\d+|\d+\.\d+)min$/},hr:{value:36e5,extractor:/^(\d+|\d+\.\d+)hr$/},d:{value:864e5,extractor:/^(\d+|\d+\.\d+)d$/}},s=i()(t=>{for(const e in o){const n=t.match(o[e].extractor)
if(n)return o[e].value*Number(n[1])}throw new Error("Could not find a resolver for translate "+t)}),a=i()(t=>t.split(" ").reduce((t,e)=>t+s(e),0))},function(t,e,n){"use strict"
n.r(e),n.d(e,"CARD_RENDERED",(function(){return r})),n.d(e,"PAGE_RENDERED",(function(){return i})),n.d(e,"APP_LOADED",(function(){return o})),n.d(e,"ELEMENT_VIEWED",(function(){return s})),n.d(e,"LAUNCH_FAILED",(function(){return a})),n.d(e,"ITEM_CLICK",(function(){return c})),n.d(e,"VIDEOPREVIEW_INTERSECT",(function(){return l}))
const r="bastian-feed-card_rendered",i="bastian-feed-page_rendered",o="bstn-app-loaded",s="element-view",a="bstn-launch-failed",c="bstn-item-click",l="bstn-videopreview-intersect"},function(t,e,n){"use strict"
n.r(e),n.d(e,"triggerDomEvent",(function(){return l}))
var r=n(5),i=n.n(r),o=n(62),s=n.n(o),a=n(68)
let c
c=function(t,e,n){const r=new CustomEvent(t,{bubbles:!0,cancelable:!0})
i()(n)&&Object(a.safeCall)(n,null,r),s()(()=>e.dispatchEvent(r))}
const l=c},function(t,e,n){"use strict"
n.r(e),n.d(e,"patch",(function(){return a}))
var r=n(221),i=n(55),o=n(15),s=n(30)
function a(t,e){Object.isFrozen(t)||(t.PostIndex={register:o.PostIndex.register,has:o.PostIndex.has,filter:o.PostIndex.filter},t.getItemPosition=function(t){return()=>t.source===r.$PushStream?0:t.itemIndex.getPosition(t.item)}(e),t.getAreaId=function(t){return()=>t.areaId}(e),t.implode=e.implode,t.isLargeScreen=i.At.largeScreen,t.choosePicture=s.choosePicture,delete t.patch),Object.freeze(t)}},function(t,e,n){var r=n(63),i=n(64),o=n(54),s=i((function(t,e,n){return r(t,o(e)||0,n)}))
t.exports=s},function(t,e,n){"use strict"
n.r(e),n.d(e,"DEVICES",(function(){return r}))
const r={feature:1,smart:2,tablet:3,desktop:4}},function(t,e,n){"use strict"
n.r(e),n.d(e,"EventEmitter",(function(){return i}))
var r=n(20)
class i{constructor(){this.subscribers=[]}on(t,e){this.subscribers.push({eventName:t,callback:e})}off(t,e){for(let n=0;n<this.subscribers.length;n++){const{eventName:r,callback:i}=this.subscribers[n]
r===t&&i===e&&(this.subscribers.splice(n,1),n--)}}trigger(t,e){this.subscribers.filter(({eventName:e})=>e===t).forEach(t=>{try{t.callback(e)}catch(n){Object(r.error)(n)}})}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"now",(function(){return l}))
var r=n(5),i=n.n(r),o=n(23),s=n(26)
const a=["now","webkitNow","msNow","mozNow"].map(t=>Object(s.get)(o.Globals,"performance."+t)).find(i.a)
let c
c=i()(a)?()=>parseInt(a.call(performance),10):()=>(new Date).getTime()
const l=c},function(t,e,n){var r=n(4),i=n(78)
t.exports=function(t){return r(t)&&1===t.nodeType&&!i(t)}},function(t,e,n){var r=n(2),i=n(79),o=n(4),s=Function.prototype,a=Object.prototype,c=s.toString,l=a.hasOwnProperty,u=c.call(Object)
t.exports=function(t){if(!o(t)||"[object Object]"!=r(t))return!1
var e=i(t)
if(null===e)return!0
var n=l.call(e,"constructor")&&e.constructor
return"function"==typeof n&&n instanceof n&&c.call(n)==u}},function(t,e,n){var r=n(35)(Object.getPrototypeOf,Object)
t.exports=r},function(t,e,n){"use strict"
n.r(e),n.d(e,"render",(function(){return g})),n.d(e,"renderToString",(function(){return g})),n.d(e,"shallowRender",(function(){return m}))
var r=n(81),i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,o=function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},s=function(t,e){return String(t).replace(/(\n+)/g,"$1"+(e||"\t"))},a=function(t,e,n){return String(t).length>(e||40)||!n&&-1!==String(t).indexOf("\n")||-1!==String(t).indexOf("<")},c={}
function l(t){var e=""
for(var n in t){var r=t[n]
null!=r&&(e&&(e+=" "),e+=c[n]||(c[n]=n.replace(/([A-Z])/g,"-$1").toLowerCase()),e+=": ",e+=r,"number"==typeof r&&!1===i.test(n)&&(e+="px"),e+=";")}return e||void 0}function u(t,e){for(var n in e)t[n]=e[n]
return t}function h(t,e){return Array.isArray(e)?e.reduce(h,t):null!=e&&!1!==e&&t.push(e),t}var d={shallow:!0},p=[],f=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/
g.render=g
var m=function(t,e){return g(t,e,d)}
function g(t,e,n,i,c,d){if(null==t||"boolean"==typeof t)return""
Array.isArray(t)&&(t=Object(r.createElement)(r.Fragment,null,t))
var m=t.type,v=t.props,b=!1
e=e||{}
var y,E=(n=n||{}).pretty,_=E&&"string"==typeof E?E:"\t"
if("object"!=typeof t&&!m)return o(t)
if("function"==typeof m){if(b=!0,!n.shallow||!i&&!1!==n.renderRootComponent){if(m===r.Fragment){var O="",S=[]
h(S,t.props.children)
for(var w=0;w<S.length;w++)O+=(w>0&&E?"\n":"")+g(S[w],e,n,!1!==n.shallowHighOrder,c,d)
return O}var I,T=t.__c={__v:t,context:e,props:t.props,__h:[]}
if(r.options.__r&&r.options.__r(t),m.prototype&&"function"==typeof m.prototype.render){var C=m.contextType,x=C&&e[C.__c],j=null!=C?x?x.props.value:C.__:e;(T=t.__c=new m(v,j)).__v=t,T._dirty=T.__d=!0,T.props=v,null==T.state&&(T.state={}),null==T._nextState&&null==T.__s&&(T._nextState=T.__s=T.state),T.context=j,m.getDerivedStateFromProps?T.state=u(u({},T.state),m.getDerivedStateFromProps(T.props,T.state)):T.componentWillMount&&T.componentWillMount(),T.state=T._nextState!==T.state?T._nextState:T.__s!==T.state?T.__s:T.state,I=T.render(T.props,T.state,T.context)}else{var A=m.contextType,P=A&&e[A.__c]
I=m.call(t.__c,v,null!=A?P?P.props.value:A.__:e)}return T.getChildContext&&(e=u(u({},e),T.getChildContext())),g(I,e,n,!1!==n.shallowHighOrder,c,d)}m=(y=m).displayName||y!==Function&&y.name||function(t){var e=(Function.prototype.toString.call(t).match(/^\s*function\s+([^( ]+)/)||"")[1]
if(!e){for(var n=-1,r=p.length;r--;)if(p[r]===t){n=r
break}n<0&&(n=p.push(t)-1),e="UnnamedComponent"+n}return e}(y)}var N,R=""
if(v){var k=Object.keys(v)
n&&!0===n.sortAttributes&&k.sort()
for(var D=0;D<k.length;D++){var M=k[D],L=v[M]
if("children"!==M&&!M.match(/[\s\n\\/='"\0<>]/)&&(n&&n.allAttributes||"key"!==M&&"ref"!==M)){if("className"===M){if(v.class)continue
M="class"}else c&&M.match(/^xlink:?./)&&(M=M.toLowerCase().replace(/^xlink:?/,"xlink:"))
"style"===M&&L&&"object"==typeof L&&(L=l(L))
var H=n.attributeHook&&n.attributeHook(M,L,e,n,b)
if(H||""===H)R+=H
else if("dangerouslySetInnerHTML"===M)N=L&&L.__html
else if((L||0===L||""===L)&&"function"!=typeof L){if(!(!0!==L&&""!==L||(L=M,n&&n.xml))){R+=" "+M
continue}if("value"===M){if("select"===m){d=L
continue}"option"===m&&d==L&&(R+=" selected")}R+=" "+M+'="'+o(L)+'"'}}}}if(E){var V=R.replace(/^\n\s*/," ")
V===R||~V.indexOf("\n")?E&&~R.indexOf("\n")&&(R+="\n"):R=V}if(R="<"+m+R+">",String(m).match(/[\s\n\\/='"\0<>]/))throw new Error(m+" is not a valid HTML tag name in "+R)
var U=String(m).match(f)
U&&(R=R.replace(/>$/," />"))
var F,B=[]
if(N)E&&a(N)&&(N="\n"+_+s(N,_)),R+=N
else if(v&&h(F=[],v.children).length){for(var G=E&&~R.indexOf("\n"),z=!1,q=0;q<F.length;q++){var W=F[q]
if(null!=W&&!1!==W){var $=g(W,e,n,!0,"svg"===m||"foreignObject"!==m&&c,d)
if(E&&!G&&a($)&&(G=!0),$)if(E){var Z=$.length>0&&"<"!=$[0]
z&&Z?B[B.length-1]+=$:B.push($),z=Z}else B.push($)}}if(E&&G)for(var K=B.length;K--;)B[K]="\n"+_+s(B[K],_)}if(B.length)R+=B.join("")
else if(n&&n.xml)return R.substring(0,R.length-1)+" />"
return U||(E&&~R.indexOf("\n")&&(R+="\n"),R+="</"+m+">"),R}g.shallowRender=m,e.default=g},function(t,e,n){"use strict"
n.r(e),n.d(e,"render",(function(){return M})),n.d(e,"hydrate",(function(){return L})),n.d(e,"createElement",(function(){return g})),n.d(e,"h",(function(){return g})),n.d(e,"Fragment",(function(){return y})),n.d(e,"createRef",(function(){return b})),n.d(e,"isValidElement",(function(){return i})),n.d(e,"Component",(function(){return E})),n.d(e,"cloneElement",(function(){return H})),n.d(e,"createContext",(function(){return V})),n.d(e,"toChildArray",(function(){return T})),n.d(e,"_unmount",(function(){return k})),n.d(e,"options",(function(){return r}))
var r,i,o,s,a,c,l,u,h={},d=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i
function f(t,e){for(var n in e)t[n]=e[n]
return t}function m(t){var e=t.parentNode
e&&e.removeChild(t)}function g(t,e,n){var r,i=arguments,o={}
for(r in e)"key"!==r&&"ref"!==r&&(o[r]=e[r])
if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(i[r])
if(null!=n&&(o.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===o[r]&&(o[r]=t.defaultProps[r])
return v(t,o,e&&e.key,e&&e.ref)}function v(t,e,n,i){var o={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0}
return r.vnode&&r.vnode(o),o}function b(){return{}}function y(t){return t.children}function E(t,e){this.props=t,this.context=e}function _(t,e){if(null==e)return t.__?_(t.__,t.__.__k.indexOf(t)+1):null
for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e
return"function"==typeof t.type?_(t):null}function O(t){var e,n
if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e
break}return O(t)}}function S(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!s++||c!==r.debounceRendering)&&((c=r.debounceRendering)||a)(w)}function w(){for(var t;s=o.length;)t=o.sort((function(t,e){return t.__v.__b-e.__v.__b})),o=[],t.some((function(t){var e,n,r,i,o,s
t.__d&&(o=(i=(e=t).__v).__e,(s=e.__P)&&(n=[],r=A(s,i,f({},i),e.__n,void 0!==s.ownerSVGElement,null,n,null==o?_(i):o),P(n,i),r!=o&&O(i)))}))}function I(t,e,n,r,i,o,s,a,c){var l,u,p,f,g,v,b,y=n&&n.__k||d,E=y.length
if(a==h&&(a=null!=o?o[0]:E?_(n,0):null),l=0,e.__k=T(e.__k,(function(n){if(null!=n){if(n.__=e,n.__b=e.__b+1,null===(p=y[l])||p&&n.key==p.key&&n.type===p.type)y[l]=void 0
else for(u=0;u<E;u++){if((p=y[u])&&n.key==p.key&&n.type===p.type){y[u]=void 0
break}p=null}if(f=A(t,n,p=p||h,r,i,o,s,a,c),(u=n.ref)&&p.ref!=u&&(b||(b=[]),p.ref&&b.push(p.ref,null,n),b.push(u,n.__c||f,n)),null!=f){var d
if(null==v&&(v=f),void 0!==n.__d)d=n.__d,n.__d=void 0
else if(o==p||f!=a||null==f.parentNode){t:if(null==a||a.parentNode!==t)t.appendChild(f),d=null
else{for(g=a,u=0;(g=g.nextSibling)&&u<E;u+=2)if(g==f)break t
t.insertBefore(f,a),d=a}"option"==e.type&&(t.value="")}a=void 0!==d?d:f.nextSibling,"function"==typeof e.type&&(e.__d=a)}else a&&p.__e==a&&a.parentNode!=t&&(a=_(p))}return l++,n})),e.__e=v,null!=o&&"function"!=typeof e.type)for(l=o.length;l--;)null!=o[l]&&m(o[l])
for(l=E;l--;)null!=y[l]&&k(y[l],y[l])
if(b)for(l=0;l<b.length;l++)R(b[l],b[++l],b[++l])}function T(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null))
else if(Array.isArray(t))for(var r=0;r<t.length;r++)T(t[r],e,n)
else n.push(e?e("string"==typeof t||"number"==typeof t?v(null,t,null,null):null!=t.__e||null!=t.__c?v(t.type,t.props,t.key,null):t):t)
return n}function C(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===p.test(e)?n+"px":null==n?"":n}function x(t,e,n,r,i){var o,s,a,c,l
if(i?"className"===e&&(e="class"):"class"===e&&(e="className"),"key"===e||"children"===e);else if("style"===e)if(o=t.style,"string"==typeof n)o.cssText=n
else{if("string"==typeof r&&(o.cssText="",r=null),r)for(s in r)n&&s in n||C(o,s,"")
if(n)for(a in n)r&&n[a]===r[a]||C(o,a,n[a])}else"o"===e[0]&&"n"===e[1]?(c=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(r||t.addEventListener(e,j,c),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,j,c)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!i&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function j(t){this.l[t.type](r.event?r.event(t):t)}function A(t,e,n,i,o,s,a,c,l){var u,h,d,p,m,g,v,b,_,O,S=e.type
if(void 0!==e.constructor)return null;(u=r.__b)&&u(e)
try{t:if("function"==typeof S){if(b=e.props,_=(u=S.contextType)&&i[u.__c],O=u?_?_.props.value:u.__:i,n.__c?v=(h=e.__c=n.__c).__=h.__E:("prototype"in S&&S.prototype.render?e.__c=h=new S(b,O):(e.__c=h=new E(b,O),h.constructor=S,h.render=D),_&&_.sub(h),h.props=b,h.state||(h.state={}),h.context=O,h.__n=i,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=S.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=f({},h.__s)),f(h.__s,S.getDerivedStateFromProps(b,h.__s))),p=h.props,m=h.state,d)null==S.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount)
else{if(null==S.getDerivedStateFromProps&&b!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,O),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,O)){for(h.props=b,h.state=h.__s,h.__d=!1,h.__v=e,e.__e=n.__e,e.__k=n.__k,h.__h.length&&a.push(h),u=0;u<e.__k.length;u++)e.__k[u]&&(e.__k[u].__=e)
break t}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,O),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(p,m,g)}))}h.context=O,h.props=b,h.state=h.__s,(u=r.__r)&&u(e),h.__d=!1,h.__v=e,h.__P=t,u=h.render(h.props,h.state,h.context),e.__k=null!=u&&u.type==y&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(i=f(f({},i),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(p,m)),I(t,e,n,i,o,s,a,c,l),h.base=e.__e,h.__h.length&&a.push(h),v&&(h.__E=h.__=null),h.__e=!1}else e.__e=N(n.__e,e,n,i,o,s,a,l);(u=r.diffed)&&u(e)}catch(t){r.__e(t,e,n)}return e.__e}function P(t,e){r.__c&&r.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){r.__e(t,e.__v)}}))}function N(t,e,n,r,i,o,s,a){var c,l,u,p,f,m=n.props,g=e.props
if(i="svg"===e.type||i,null!=o)for(c=0;c<o.length;c++)if(null!=(l=o[c])&&((null===e.type?3===l.nodeType:l.localName===e.type)||t==l)){t=l,o[c]=null
break}if(null==t){if(null===e.type)return document.createTextNode(g)
t=i?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,g.is&&{is:g.is}),o=null}if(null===e.type)m!==g&&t.data!=g&&(t.data=g)
else if(e!==n){if(null!=o&&(o=d.slice.call(t.childNodes)),u=(m=n.props||h).dangerouslySetInnerHTML,p=g.dangerouslySetInnerHTML,!a){if(m===h)for(m={},f=0;f<t.attributes.length;f++)m[t.attributes[f].name]=t.attributes[f].value;(p||u)&&(p&&u&&p.__html==u.__html||(t.innerHTML=p&&p.__html||""))}(function(t,e,n,r,i){var o
for(o in n)o in e||x(t,o,null,n[o],r)
for(o in e)i&&"function"!=typeof e[o]||"value"===o||"checked"===o||n[o]===e[o]||x(t,o,e[o],n[o],r)})(t,g,m,i,a),e.__k=e.props.children,p||I(t,e,n,r,"foreignObject"!==e.type&&i,o,s,h,a),a||("value"in g&&void 0!==g.value&&g.value!==t.value&&(t.value=null==g.value?"":g.value),"checked"in g&&void 0!==g.checked&&g.checked!==t.checked&&(t.checked=g.checked))}return t}function R(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){r.__e(t,n)}}function k(t,e,n){var i,o,s
if(r.unmount&&r.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||R(i,null,e)),n||"function"==typeof t.type||(n=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){r.__e(t,e)}i.base=i.__P=null}if(i=t.__k)for(s=0;s<i.length;s++)i[s]&&k(i[s],e,n)
null!=o&&m(o)}function D(t,e,n){return this.constructor(t,n)}function M(t,e,n){var i,o,s
r.__&&r.__(t,e),o=(i=n===l)?null:n&&n.__k||e.__k,t=g(y,null,[t]),s=[],A(e,(i?e:n||e).__k=t,o||h,h,void 0!==e.ownerSVGElement,n&&!i?[n]:o?null:d.slice.call(e.childNodes),s,n||h,i),P(s,t)}function L(t,e){M(t,e,l)}function H(t,e){return e=f(f({},t.props),e),arguments.length>2&&(e.children=d.slice.call(arguments,2)),v(t.type,e,e.key||t.key,e.ref||t.ref)}function V(t){var e={},n={__c:"__cC"+u++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,i=this
return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=i,e},this.shouldComponentUpdate=function(e){t.value!==e.value&&r.some((function(t){t.context=e.value,S(t)}))},this.sub=function(t){r.push(t)
var e=t.componentWillUnmount
t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}}
return n.Consumer.contextType=n,n}r={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return S(n.__E=n)}catch(e){t=e}throw t}},i=function(t){return null!=t&&void 0===t.constructor},E.prototype.setState=function(t,e){var n
n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&f(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),S(this))},E.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),S(this))},E.prototype.render=y,o=[],s=0,a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=h,u=0},function(t,e,n){"use strict"
n.r(e),n.d(e,"Engine",(function(){return i})),n.d(e,"Renderer",(function(){return o})),n.d(e,"createElement",(function(){return s}))
var r=n(81)
const i={render:r.render,Component:r.Component,Fragment:r.Fragment,createElement:r.h,cloneElement:r.cloneElement},o=i,s=r.h},function(t,e,n){"use strict"
n.r(e),n.d(e,"Cover",(function(){return g}))
var r=n(5),i=n.n(r),o=n(84),s=n.n(o),a=n(82),c=n(87),l=n(93),u=n(30),h=n(26),d=n(68),p=n(24)
function f(){return(f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const m={S:1,M:1.5,L:2}
class g extends a.Engine.Component{constructor(t){super(t),this.immediateReveal=!1,this.getSrcSet=t=>{const e=[]
for(const n in m)if(n in t.sizes){const r=this.state.useSizeSrcSet?Object(h.get)(t,"sizes."+n+".url")+" "+Object(h.get)(t,"sizes."+n+".width")+"w":Object(h.get)(t,"sizes."+n+".url")+" "+m[n]+"x"
e.push(r)}return{srcSet:e.join(","),sizes:this.state.useSizeSrcSet?"(min-width: 540px) 50vw, (min-width: 900px) 30vw, 100vw":void 0}},this.reveal=t=>{this.immediateReveal||null!==this.state.cover?(t.className.indexOf("_preempt-visibility")>=0&&t.firstElementChild&&(t=t.firstElementChild),i()(this.props.onReveal)&&Object(d.safeCall)(this.props.onReveal,null,t)):this.setCoverUrl()},this.state={cover:null,renderContext:p.Configs.get("renderContext"),useSizeSrcSet:p.Configs.get("ff_cover_size",!1)}}render(){if(!this.props.images)return null
const t=!!this.props.images.fastRender,e=this.getImageProps({fastRenderEnabled:t}),n=a.Engine.createElement("div",f({ref:Object(l.as)(this),onMouseUp:this.props.onMouseUp},this.getCoverProps()),a.Engine.createElement("picture",{className:"bstn-fd-cover-picture"},a.Engine.createElement("img",f({className:"bstn-fd-picture-image"},e))),this.props.children)
return Object(h.get)(e,"srcSet")||t&&Object(h.get)(e,"src")?(this.immediateReveal=!0,n):a.Engine.createElement(c.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:this.props.threshold},n)}componentDidMount(){this.props.isEsppub&&this.setCoverUrl(),this.immediateReveal&&this.reveal(this._refs.node)}componentDidUpdate(){this.state.cover&&this.reveal(this._refs.node)}getCoverProps(){const t={className:"bstn-fd-item-cover "+(this.props.extraClasses||"")}
for(const e in this.props)e.startsWith("data-")&&(t[e]=this.props[e])
return t}getImageProps1x1(t={},e){let n=f({alt:this.props.alt,title:this.props.alt},t)
const r=this.props.images
if(r.sizes&&this.atFirstPage()&&p.Configs.get("isHomeOrTopic",!0)){n=f({},n,e?{}:this.getSrcSet(r),{src:this.chooseCoverUrl()})}return this.state.cover&&(n=f({},n,{src:this.state.cover,"data-ratio":"1:1"})),n}getImageProps4x3(t={}){return f({src:Object(u.buildUrlForPostVideo4x3)(Object(h.get)(this.props,"data-video-id")),"data-ratio":"4:3"},t)}getImageProps({fastRenderEnabled:t}){const e={loading:t?"eager":"lazy",elementtiming:"image-"+this.state.renderContext}
return"4:3"===this.props.ratio&&Object(h.get)(this.props,"data-video-id")?this.getImageProps4x3(e,t):this.getImageProps1x1(e,t)}atFirstPage(){let t
const e=this.context.item
return t=!e||e&&s()(this.context.itemIndex.getPosition(e),1,11),t}chooseCoverUrl(){return Object(u.choosePicture)(this.props.images,null,null,this.props.thumbOrientation)}setCoverUrl(){const t=this.chooseCoverUrl()
t&&this.setState({cover:t})}}},function(t,e,n){var r=n(85),i=n(86),o=n(54)
t.exports=function(t,e,n){return e=i(e),void 0===n?(n=e,e=0):n=i(n),t=o(t),r(t,e,n)}},function(t,e){var n=Math.max,r=Math.min
t.exports=function(t,e,i){return t>=r(e,i)&&t<n(e,i)}},function(t,e){t.exports=function(t){return t}},function(t,e,n){"use strict"
n.r(e),n.d(e,"DEFAULT_THRESHOLD",(function(){return p})),n.d(e,"PreemptVisibility",(function(){return y}))
var r=n(88),i=n.n(r),o=n(62),s=n.n(o),a=n(82),c=n(23),l=n(93),u=n(98)
let h,d
const p="200%"
h=class extends a.Engine.Component{constructor(t){super(t),this.render=()=>a.Engine.createElement("div",{className:"_preempt-visibility",ref:Object(l.as)(this)},this.props.children),this.checkProximity=i()(()=>{const t=this._refs.node,e=t.getBoundingClientRect(),n=this.getThreshold(),r=e.top-d<n,i=e.top!==e.bottom,o=-e.bottom<n
if(!i&&r||r&&o){if(this.state.isNear&&!this.state.wasTriggered)return s()(()=>this.props.onNearToBeVisible(t)),this.tearDown(),void this.setState({wasTriggered:!0})
this.setState({isNear:!0}),this.reCheckProximity()}else this.setState({isNear:!1})},100,{leading:!0,trailing:!0}),this.reCheckProximity=()=>this.checkProximity(),this.state={isNear:!1,wasTriggered:!1}}async componentDidMount(){const t=await this.props.threshold||p
this.getThreshold=f(t),this.props.awaitScroll||s()(this.checkProximity),u.PassiveScrollListener.on(this.checkProximity)}componentWillUnmount(){this.tearDown()}tearDown(){u.PassiveScrollListener.off(this.checkProximity),this.checkProximity.cancel(),c.Globals.removeEventListener("resize",b)}}
const f=t=>{const[e,n]=g(t).slice(1,3),r=v[n]
return i()(r(Number(e)),1e3,{leading:!0,trailing:!1})},m=/(-?\d+)(%|px)/,g=t=>t.match(m)||["","px",t||"0"],v={"%":t=>()=>d*(t/100),px:t=>()=>t},b=()=>{d=c.Globals.innerHeight}
b(),c.Globals.addEventListener("resize",b,!1)
const y=h},function(t,e,n){var r=n(89),i=n(6)
t.exports=function(t,e,n){var o=!0,s=!0
if("function"!=typeof t)throw new TypeError("Expected a function")
return i(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),r(t,e,{leading:o,maxWait:e,trailing:s})}},function(t,e,n){var r=n(6),i=n(90),o=n(54),s=Math.max,a=Math.min
t.exports=function(t,e,n){var c,l,u,h,d,p,f=0,m=!1,g=!1,v=!0
if("function"!=typeof t)throw new TypeError("Expected a function")
function b(e){var n=c,r=l
return c=l=void 0,f=e,h=t.apply(r,n)}function y(t){return f=t,d=setTimeout(_,e),m?b(t):h}function E(t){var n=t-p
return void 0===p||n>=e||n<0||g&&t-f>=u}function _(){var t=i()
if(E(t))return O(t)
d=setTimeout(_,function(t){var n=e-(t-p)
return g?a(n,u-(t-f)):n}(t))}function O(t){return d=void 0,v&&c?b(t):(c=l=void 0,h)}function S(){var t=i(),n=E(t)
if(c=arguments,l=this,p=t,n){if(void 0===d)return y(p)
if(g)return clearTimeout(d),d=setTimeout(_,e),b(p)}return void 0===d&&(d=setTimeout(_,e)),h}return e=o(e)||0,r(n)&&(m=!!n.leading,u=(g="maxWait"in n)?s(o(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==d&&clearTimeout(d),f=0,c=p=l=d=void 0},S.flush=function(){return void 0===d?h:O(i())},S}},function(t,e,n){var r=n(91)
t.exports=function(){return r.Date.now()}},function(t,e,n){var r=n(92),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")()
t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e
t.exports=n}).call(this,n(12))},function(t,e,n){"use strict"
n.r(e),n.d(e,"as",(function(){return o}))
var r=n(94)
let i
i=function(t,e){return function(n){Object(r.set)(t,"_refs."+(e||"node"),n)}}
const o=i},function(t,e,n){"use strict"
n.r(e)
var r=n(95),i=n.n(r)
n.d(e,"set",(function(){return i.a}))},function(t,e,n){var r=n(96)
t.exports=function(t,e,n){var i=/^(.+)\.(.+)$/.exec(e)
i?r(t,i[1])[i[2]]=n:t[e]=n}},function(t,e,n){var r=n(97)
t.exports=function(t,e){return e?(r(e.split("."),(function(e){t[e]||(t[e]={}),t=t[e]})),t):t}},function(t,e){t.exports=function(t,e,n){if(null!=t)for(var r=-1,i=t.length;++r<i&&!1!==e.call(n,t[r],r,t););}},function(t,e,n){"use strict"
n.r(e),n.d(e,"PassiveScrollListener",(function(){return v}))
var r=n(88),i=n.n(r),o=n(5),s=n.n(o),a=n(99),c=n.n(a),l=n(20),u=n(23),h=n(76),d=n(100),p=n(101)
let f,m
f={subscribers:[],queue:[],paused:!1,flush:function(){if(!this.paused){const e=Object(h.now)()
let n,r=0
for(this.queue=this.subscribers.slice(0);(n=this.queue.shift())&&r<8;){try{n()}catch(t){Object(l.error)(t)}r=Object(h.now)()-e}}},on:function(t){this.subscribers.push(t)},off:function(t){Object(d.pull)(this.subscribers,t)},pause:function(){this.paused=!0},resume:function(){this.paused=!1,this.flush()}},m=t=>(m=p.rAF?t=>Object(p.rAF)(()=>Object(p.rAF)(t)):t=>setTimeout(t,1),m(t))
const g=i()(()=>m(f.flush.bind(f)),100,{leading:!0,trailing:!1})
u.Globals.addEventListener("scroll",g,!!function(){let t=!1
const e=u.Globals.Modernizr
if(e&&c()(e.passiveeventlisteners))return e.passiveeventlisteners
try{if(s()(Object.defineProperty)){const e=Object.defineProperty({},"passive",{get(){t=!0}})
u.Globals.addEventListener("test",null,e)}}catch(n){}return t}()&&{passive:!0})
const v=f},function(t,e,n){var r=n(2),i=n(4)
t.exports=function(t){return!0===t||!1===t||i(t)&&"[object Boolean]"==r(t)}},function(t,e,n){"use strict"
function r(t,e){let n
for(n=t.indexOf(e);-1!==n;)t.splice(n,1),n=t.indexOf(e,n)}n.r(e),n.d(e,"pull",(function(){return r}))},function(t,e,n){"use strict"
let r
n.r(e),n.d(e,"rAF",(function(){return i})),r=n(23).Globals.requestAnimationFrame
const i=r},function(t,e,n){var r

;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict"
var n={}.hasOwnProperty
function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e]
if(r){var o=typeof r
if("string"===o||"number"===o)t.push(r)
else if(Array.isArray(r)&&r.length){var s=i.apply(null,r)
s&&t.push(s)}else if("object"===o)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){"use strict"
n.r(e),n.d(e,"insertIf",(function(){return o}))
var r=n(5),i=n.n(r)
function o(t,e,n){let r=t
return i()(t)&&(r=t()),r?e(r):i()(n)?n(r):null}},function(t,e,n){"use strict"
n.r(e),n.d(e,"Relateds",(function(){return h}))
var r=n(5),i=n.n(r),o=n(24),s=n(82),a=n(26),c=n(103)
function l(){return(l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}function u(t,e){const{thumb:n,title:r,url:a,dateFactory:u,age:h,isRecommended:d}=t,p=n&&n.url,f={}
return n&&n.rightsholder&&(f.alt=""+n.title+n.rightsholder?"Foto: ("+n.rightsholder:"",f.title=n.rightsholder),s.Engine.createElement("li",{key:e,className:"bstn-relateditem"},Object(c.insertIf)(p,()=>s.Engine.createElement("div",{className:"bstn-fd-relatedimage"},s.Engine.createElement("img",l({className:"bstn-fd-relatedthumb",src:p},f,{loading:"lazy"})))),s.Engine.createElement("div",{className:"bstn-fd-relatedtext"},s.Engine.createElement("a",{className:"gui-color-primary gui-color-hover feed-post-body-title bstn-relatedtext",href:a},r),Object(c.insertIf)(!1===o.Configs.get("disableDateTime"),()=>s.Engine.createElement("div",{className:"feed-post-metadata"},i()(u)&&u({age:h,isRecommended:d})))))}const h=({showThumbs:t=!1,children:e,dateFactory:n,items:r})=>(e=Array.isArray(e)?e[0]:e,i()(e)||(e=t=>t),r&&r.length>0?s.Engine.createElement("div",{className:"bstn-related"},e(s.Engine.createElement("ul",{className:"bstn-relateditems"},r.map(((t,e)=>n=>{const{title:r,url:i}=n.content,{age:o,isRecommended:s}=n,c={age:o,dateFactory:e,isRecommended:s,title:r,url:i},u=Object(a.get)(n.content,"image.rightsHolder"),h=Object(a.get)(n.content,"image.sizes.S.url")
let d={}
return t&&h&&(d={thumb:{url:h,rightsholder:u}}),l({},c,d)})(t,n)).map(u)))):null)},function(t,e,n){"use strict"
n.r(e),n.d(e,"Section",(function(){return i}))
var r=n(82)
function i(t){return r.Engine.createElement("span",{className:"feed-post-metadata-section"}," ",t.text," ")}},function(t,e,n){"use strict"
n.r(e),n.d(e,"Summary",(function(){return s}))
var r=n(82),i=n(225),o=n(24)
const s=({text:t})=>r.Engine.createElement(i.LabelEvent,{type:"click",label:"resumo"},r.Engine.createElement("div",{className:"feed-post-body-resumo"},r.Engine.createElement("p",{elementtiming:"text-"+o.Configs.get("renderContext")},t)))},function(t,e,n){"use strict"
n.r(e),n.d(e,"Title",(function(){return s}))
var r=n(108),i=n(82),o=n(225)
const s=t=>{const{text:e}=t
let n=""
return t.extraClasses&&(n=Array.isArray(t.extraClasses)?t.extraClasses.join(" "):String(t.extraClasses)),i.Engine.createElement(o.LabelEvent,{type:"click",label:"titulo"},i.Engine.createElement("div",{className:"feed-post-body-title gui-color-primary gui-color-hover "+n},i.Engine.createElement(r.ElementViewTrigger,{on:"fitInScreen"},t.innerWrapper?i.Engine.createElement(t.innerWrapper,null,e):e)))}},function(t,e,n){"use strict"
n.r(e),n.d(e,"ElementViewTrigger",(function(){return E}))
var r,i=n(88),o=n.n(i),s=n(25),a=n.n(s),c=n(82),l=n(23),u=n(21),h=n(109),d=n(110),p=n(26),f=n(100),m=n(68),g=n(70),v=n(111),b=n(71)
let y;(r=class extends(Object(d.eventable)(Object(h.drawless)(c.Engine.Component))){constructor(t){super(t),this.childrenTriggers=[],this.verifyVisibility=function(){const t=this.props.on
if(this.props.redirectToChildTriggerIfExists&&this.childrenTriggers.length>0)return this.childrenTriggers.some(t=>t.verifyVisibility())
const e=Object(v.getVisibility)(this._refs.node)
return(!1!==e.isBoxed||!0===this.props.evenIfUnboxed)&&Object(u.castArray)(t).some(t=>this.testVisibility(e,t))},this.testVisibility=(t,e)=>{if(t.partial)return this.handleVisibleState(),!0},this.resume=()=>{this.isRoot()&&(Object(m.safeCall)(this.verifyVisibility,this),this.timerID=setTimeout(this.resume,250))},this.pause=()=>{clearTimeout(this.timerID)},this.syncWithVisibility=()=>{"visible"===l.Globals.document.visibilityState?this.resume():this.pause()},t.tagName&&(this.drawlessTag=t.tagName),this.verifyVisibility=o()(this.verifyVisibility.bind(this),this.props.checkInterval||1e3,{leading:!0,trailing:!1})}getChildContext(){return{parentTrigger:this,parentGroup:this.context.parentGroup}}isRoot(){return a()(this.context.parentTrigger)}handleVisibleState(){for(const t of Array.from(this._refs.node.children||[]))Object(b.triggerDomEvent)(g.ELEMENT_VIEWED,t)
this.trigger("visible",this.props.chain)}bindEvents(){this.isRoot()&&l.Globals.window.addEventListener("visibilitychange",this.syncWithVisibility)}registerChildTrigger(t){this.childrenTriggers.push(t)}unregisterChildTrigger(t){Object(f.pull)(this.childrenTriggers,t)}componentDidMount(){this.bindEvents(),this.isRoot()&&this.syncWithVisibility(),Object(p.get)(this,"context.parentTrigger.props.redirectToChildTriggerIfExists")?this.context.parentTrigger.registerChildTrigger(this):this.context.parentGroup&&this.context.parentGroup.registerChild(this)}componentWillUnmount(){this.isRoot()&&this.pause(),this.context.parentGroup&&this.context.parentGroup.unregisterChild(this),this.context.parentTrigger.props.redirectToChildTriggerIfExists&&this.context.parentTrigger.unregisterChildTrigger(this)}}).displayName="evt",y=r
const E=y},function(t,e,n){"use strict"
n.r(e),n.d(e,"drawless",(function(){return p}))
var r=n(41),i=n.n(r),o=n(1),s=n.n(o),a=n(5),c=n.n(a),l=n(82),u=n(93)
const h=/^function ([^(]+)/,d=i()(t=>(t.match(h)||["",""])[1])
function p(t){return class extends t{render(){c()(this.beforeRender)&&this.beforeRender(this.props.children)
let t=""
this.constructor&&(t="_"+(this.constructor.displayName||this.constructor.name||d(this.constructor.toString())).replace("_render","").toLowerCase())
let e="div"
return s()(this.drawlessTag)&&(e=this.drawlessTag),l.Engine.createElement(e,{className:t,ref:Object(u.as)(this)},this.props.children)}}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"eventable",(function(){return i}))
var r=n(75)
function i(t){return class extends t{constructor(t){super(t),this.emitter=new r.EventEmitter}on(t,e){this.emitter.on(t,e)}off(t,e){this.emitter.off(t,e)}trigger(t,e){this.emitter.trigger(t,e)}}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"getVisibility",(function(){return s}))
var r=n(23)
function i(){return(i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}let o
o=function(t){const e=t.getBoundingClientRect(),n=r.Globals.document.documentElement.clientHeight,o=n/4,s=3*o,a=(e.top+e.bottom)/2,c=e.top>=0&&e.top<=n,l=a>=o&&a<=s,u=e.bottom>=0&&e.bottom<=n,h=c&&u,d=e.top<=0&&e.bottom>=n,p=c||u||l||d
return i({isVisible:p,rect:e,viewportHeight:n,isBoxed:e.top!==e.bottom},p?{top:c,middle:l,bottom:u,partial:p,fitInScreen:h,tookWholeScreen:d}:{})}
const s=o},function(t,e,n){"use strict"
n.r(e),n.d(e,"Video",(function(){return b}))
var r=n(9),i=n.n(r),o=n(82),s=n(113),a=n(114),c=n(103),l=n(115),u=n(23),h=n(116),d=n(83)
function p(){return(p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const f=t=>{t&&t.impression&&t.impression()},m=({hasContent:t,testABExperiment:e})=>{let n=!0,r=t=>((t,e)=>{f(e),Object(a.applyVideoLightbox)(t)})(t,e)
var i;(i=e)&&u.Globals.postMateriaVideoAB&&u.Globals.postMateriaVideoAB.experiment===i.experiment&&"redirect"===e.alternative&&(n=!1,r=()=>f(e))
return{showPlayAndDuration:n,component:{onMouseUp:()=>{var t;(t=e)&&t.conversion&&t.conversion()},onReveal:r,extraClasses:"bstn-fd-video-cover "+(t?"feed-post-video-full":"")}}}
var g=o.Engine.createElement(l.BadgeAoVivo,null)
var v=o.Engine.createElement(h.VideoPlay,null)
class b extends o.Engine.Component{render(){const{video:t,image:e,isEsppub:n=!1,title:r,url:a,testABExperiment:l}=this.props
let u
if(!t||!e)return null
t.duration
const h=t.trademark,f=m({testABExperiment:l,hasContent:this.hasContent()})
var b=o.Engine.createElement("img",{className:"feed-post-video-trademark",src:h,loading:"lazy"})
return u=o.Engine.createElement(d.Cover,p({images:e,alt:r},f.component,{isEsppub:n,"data-video-id":t.id,"data-short-url":a,"data-link":a,"data-program-title":t.programTitle,"data-title":r}),o.Engine.createElement("div",{className:"feed-cover-content"},this.Header(),o.Engine.createElement("div",{className:"bstn-fd-play-button"},Object(c.insertIf)(f.showPlayAndDuration,()=>v),((t,e)=>{const{isLive:n,video:r={}}=t
if(n)return g
const a=r.duration
return Object(c.insertIf)(e&&i()(a)&&a>0,()=>o.Engine.createElement("p",{className:"feed-post-video-duration"},Object(s.abbrTime)(a)))})(this.props,f.showPlayAndDuration)),this.Title(),this.Footer(),Object(c.insertIf)(h,()=>b))),u}Header(){return this.props.headerLabel?o.Engine.createElement("div",{className:"feed-post-video-full-header"},this.props.headerLabel):null}Title(){return this.props.titleLabel?o.Engine.createElement("div",{className:"feed-post-video-full-title"},this.props.titleLabel):null}Footer(){return this.props.footerComponent?this.props.footerComponent:null}hasContent(){return this.props.titleLabel||this.props.headerLabel||this.props.footerComponent}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"abbrTime",(function(){return c}))
var r=n(69)
const[i,o,s]=["1s","1min","1hr"].map(r.timeToInt),a=t=>Math.floor(t+.69)
function c(t){if(null===t)return""
const e=Math.floor(t/s)
t%=s
const n=Math.floor(t/o)
t%=o
const r=Math.floor(t/i)
return e>0?a(e+.01*n)+" hr":n>0?a(n+.01*r)+" min":r>0?a(r)+" seg":""}},function(t,e,n){"use strict"
n.r(e),n.d(e,"applyVideoLightbox",(function(){return E}))
var r=n(16),i=n.n(r),o=n(1),s=n.n(o),a=n(5),c=n.n(a),l=n(99),u=n.n(l),h=n(20),d=n(23),p=n(56),f=n(26),m=n(61)
function g(){return(g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const v=i()(()=>{const t=p.Settings.get("PUBLICIDADEPAGINA")
let e=p.Settings.get("VIDEO_SITEPAGE")
return u()(t)&&!u()(e)&&(Object(h.warn)("PUBLICIDADEPAGINA is deprecated. Use VIDEO_SITEPAGE instead."),e=t),!1!==e&&(e=!0),{publicidadePagina:e}}),b=i()(()=>{const t=Object(f.get)(d.Globals,"SETTINGS.FACEBOOK_APP_ID")
return s()(t)?{fbAppId:t}:{}}),y=()=>c()(Object(f.get)(d.Globals,"gui.lightbox.lightbox"))
async function E(t){if(c()(d.Globals.globalWebdeps)&&!window.isNoLoadPlayerFeed&&await d.Globals.globalWebdeps("player"),await Object(m.availabilityOf)("gui.lightbox.lightbox",y),t&&y()){const e=g({},b(),v())
d.Globals.gui.lightbox.lightbox(t,e)}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"BadgeAoVivo",(function(){return i}))
var r=n(82).Engine.createElement("span",{className:"bstn-aovivo-label"},"ao vivo")
const i=()=>r},function(t,e,n){"use strict"
n.r(e),n.d(e,"VideoPlay",(function(){return o}))
var r=n(82),i=r.Engine.createElement("div",{className:"bstn-fd-video-play"},r.Engine.createElement("svg",{className:"bstn-fd-play-icon theme-color-primary",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.Engine.createElement("path",{d:"M8 5v14l11-7z"})))
function o(){return i}},function(t,e,n){"use strict"
n.r(e),n.d(e,"POST_SIZES",(function(){return r})),n.d(e,"DESKTOP_AREAS",(function(){return i}))
const r={SMALL:"p",MEDIUM:"m",LARGE:"g"},i={HEADLINE:"t",LEFT:"e",RIGHT:"d"}},function(t,e,n){"use strict"
n.r(e),n.d(e,"FeedReporter",(function(){return c}))
var r=n(119),i=n.n(r),o=n(55),s=n(24),a=n(122)
class c extends a.AbstractReporter{constructor({area:t}){super(),this.area=t}get areaDesktop(){if(o.At.largeScreen)return this.area}get feedId(){return s.Configs.get("feedId")}get feedType(){return s.Configs.get("feedType","").toLowerCase()}get feedViewTime(){return i()(s.Configs.get("feed_getSeenTime")()/1e3)}}},function(t,e,n){var r=n(120)("round")
t.exports=r},function(t,e,n){var r=n(91),i=n(18),o=n(54),s=n(121),a=r.isFinite,c=Math.min
t.exports=function(t){var e=Math[t]
return function(t,n){if(t=o(t),(n=null==n?0:c(i(n),292))&&a(t)){var r=(s(t)+"e").split("e"),l=e(r[0]+"e"+(+r[1]+n))
return+((r=(s(l)+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}},function(t,e){t.exports=function(t){return t}},function(t,e,n){"use strict"
n.r(e),n.d(e,"AbstractReporter",(function(){return a})),n.d(e,"BaseReporter",(function(){return c})),n.d(e,"createPostReporter",(function(){return h}))
var r=n(119),i=n.n(r),o=n(26)
function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}class a{debug(){return this}}class c extends a{constructor({data:t,telemetry:e}){super(),this.telemetry=e,this.data=s({},t),this.features=new Map}get attachment(){const t=[]
for(const[e,n]of this.features)n()&&t.push(e)
if(t.length>0)return t}get contentType(){return"esppub"===this.data.type?"especial-publicitario":this.data.type}get position(){return this.getPostPosition()}get postId(){return this.data.id}get source(){return String(this.data.source)}get viewTime(){return i()(this.telemetry.getSeenTime()/1e3)}addFeatureChecks(t){for(const e in t){const n=t[e]
this.features.set(e,n)}}setContent(t){this.data=s({},this.data.content,t)}static upgrade(t,e={}){const n=new this(s({},t.reporter),s({},e))
return t.reporter=n,n}}const l=/\s+/
function u(t){if(t)return t.split(l).length}function h(t){return class extends t{get contentId(){let t=Object(o.get)(this.data,"content.url")
return t||(t=Object(o.get)(this.data,"content.video.id"),t&&(t=t.toString())),t}get pinned(){if(Object(o.get)(this.data,"pinned"))return!0}get wordCountSummary(){const t=this.attachment
if(Array.isArray(t)&&t.includes("resumo"))return u(Object(o.get)(this.data,"content.summary"))}get wordCountTitle(){return u(Object(o.get)(this.data,"content.title"))}}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"SeenTimeTelemetry",(function(){return d}))
var r=n(9),i=n.n(r),o=n(89),s=n.n(o),a=n(70),c=(n(20),n(82)),l=n(76)
let u
class h extends c.Engine.Component{constructor(...t){super(...t),this.telemetry={seenTime:0,begin:null,lastSeenTimeReported:0},this.handleElementView=t=>{t.stopPropagation(),this.startCounting(),this.commitElapsedTime(),this.onView()}}cdmSeenTimeTelemetry(){this.startCounting=s()(this.startCounting,1100,{leading:!0,trailing:!1}),this.commitElapsedTime=s()(this.commitElapsedTime,1100,{leading:!1,trailing:!0}),this._refs.node.addEventListener(a.ELEMENT_VIEWED,this.handleElementView,!1)}cwuSeenTimeTelemetry(){this.startCounting.cancel(),this.commitElapsedTime.cancel(),this._refs.node.removeEventListener(a.ELEMENT_VIEWED,this.handleElementView)}startCounting(){this.telemetry.begin=Object(l.now)()}commitElapsedTime(){if(i()(this.telemetry.begin)){const t=this.telemetry.begin,e=parseInt(Object(l.now)()-t,10)
this.telemetry.seenTime+=e,this.telemetry.begin=null}}getSeenTime(){if(i()(this.telemetry.begin)){const t=this.telemetry.begin
return this.telemetry.seenTime+parseInt(Object(l.now)()-t,10)}return this.telemetry.seenTime||0}reportSeenTime(t){this.getSeenTime()!==this.telemetry.lastSeenTimeReported&&(this.telemetry.lastSeenTimeReported=this.getSeenTime(),t())}onView(){}}u=h
const d=u},function(t,e,n){var r=n(125),i=n(128),o=n(131)
t.exports=function(t,e){var n={}
return e=o(e,3),i(t,(function(t,i,o){r(n,i,e(t,i,o))})),n}},function(t,e,n){var r=n(126)
t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e,n){var r=n(127),i=function(){try{var t=r(Object,"defineProperty")
return t({},"",{}),t}catch(e){}}()
t.exports=i},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(129),i=n(34)
t.exports=function(t,e){return t&&r(t,e,i)}},function(t,e,n){var r=n(130)()
t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,o=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++i]
if(!1===n(o[c],c,o))break}return e}}},function(t,e){t.exports=function(t){return t}},function(t,e,n){"use strict"
n.r(e),n.d(e,"$Advertises",(function(){return l}))
var r=n(10),i=n.n(r),o=n(20),s=n(55)
let a
const c={}
class l{static getInstance(){return a||(a=new l(c)),a}constructor(t){t!==c&&Object(o.warn)("Class $Advertise is a singleton and shouldn't be called directly.")
const e=this
this.getNextPosition=u(),this.stream=i.a.create({start(t){e.listener=t},stop(){e.listener=null}})}request(){this.listener&&this.listener.next({id:"banner_"+this.getNextPosition(),type:"advertise",source:l.staticName})}}l.staticName="$Advertises"
const u=()=>{var t
const e="Home"===(null===(t=window.utag_data)||void 0===t?void 0:t.content_type)&&s.At.smallScreen?["mobile1","feed_especial","rm2_feed","rm3_feed"]:["feed_especial","feed__0"],n=((...t)=>{let e=-1
const n=t.map(()=>{return t=(t=1)||0,()=>t++
var t})
return()=>(e=(e+1)%t.length,t[e]+"__"+n[e]())})("middle_feed","feed")
return()=>e.length>0?e.shift():""+n()}},function(t,e,n){"use strict"
n.r(e),n.d(e,"HEADLINES_PLACEHOLDER",(function(){return r})),n.d(e,"PLACEHOLDER",(function(){return i})),n.d(e,"ROOT",(function(){return o})),n.d(e,"FEED",(function(){return s})),n.d(e,"PAGE",(function(){return a})),n.d(e,"ITEM",(function(){return c})),n.d(e,"POST",(function(){return l})),n.d(e,"CARD",(function(){return u})),n.d(e,"LOAD_MORE",(function(){return h})),n.d(e,"LOAD_MORE_LINK",(function(){return d})),n.d(e,"BANNER_SLB_MEIO",(function(){return p})),n.d(e,"SHOWTIME_INITIALIZED",(function(){return f})),n.d(e,"AREATEMPLATE_ESQUERDA",(function(){return m})),n.d(e,"AREATEMPLATE_DIREITA",(function(){return g})),n.d(e,"BS_HOME",(function(){return v}))
const r=".areatemplate-showtime",i="#feed-placeholder",o=".feed-root",s=".bstn-feed",a=".bastian-page",c=".bastian-feed-item",l=".feed-post",u=".bastian-card-mobile, .bastian_card__mobile",h=".load-more",d=".load-more > a",p="#banner_slb_meio",f=".showtime--initialized",m=".areatemplate-esquerda",g=".areatemplate-direita",v=".bs-home"},function(t,e,n){"use strict"
n.r(e),n.d(e,"ItemReporter",(function(){return a})),n.d(e,"ItemPostReporter",(function(){return c}))
var r=n(221),i=n(26),o=n(122)
function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}class a extends o.BaseReporter{constructor(t,e={}){super(t),t.itemReference&&(this.itemReference=t.itemReference),t.positionIndex&&(this.positionIndex=t.positionIndex)
const n={}
for(const r of["face","size"])n[r]=Object(i.get)(t.itemReference.state.data,"klass."+r.toUpperCase())
this.itemProps=s({},n,e)}get format(){return this.itemProps.face}get size(){return this.itemProps.size}getPostPosition(){return this.data.source===r.$PushStream.staticName?0:this.positionIndex.getPosition(this.itemReference)}}const c=Object(o.createPostReporter)(a)},function(t,e,n){"use strict"
n.r(e),n.d(e,"$DistributedComponents",(function(){return d}))
var r=n(6),i=n.n(r),o=n(10),s=n.n(o),a=n(20),c=n(55)
function l(){return(l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}let u
const h={}
class d{static getInstance(t){if(t&&!u&&(u=new d(t,h)),u)return u
throw new Error("Couldn't return an $DistributedComponents instance")}constructor(t,e){this.buffer=[],e!==h&&Object(a.warn)("Class $DistributedComponents is a singleton and shouldn't be called directly."),Array.isArray(t.specialItems)&&this.store([...t.specialItems])
const n=this
this.stream=s.a.create({start(t){n.listener=t},stop(){n.listener=null}})}store(t){this.buffer.push(...t)}isEmpty(){return 0===this.buffer.length}request(t){const e=i()(t)
if(!((c.At.smallScreen||!e)&&this.listener&&this.buffer.length>0))return!1
this.listener.next(l({},this.buffer.shift(),{key:Math.random().toString(),source:d.staticName}))}}d.staticName="$DistributedComponents"},function(t,e,n){"use strict"
n.r(e),n.d(e,"prepare",(function(){return E})),n.d(e,"$Recommendation",(function(){return I}))
var r=n(1),i=n.n(r),o=n(9),s=n.n(o),a=n(20),c=n(24),l=n(23),u=n(56),h=n(57),d=n(137),p=n(8),f=n(22)
function m(){return(m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}let g
const v={},b=({tag:t})=>{i()(t)&&c.Configs.set("recommendationTag",t)},y=/#.*$/,E=t=>(Object(h.has)(t,"content.url")&&(t.key=t.content.url.replace(y,""),t.content.url=t.content.url.replace(y,"")),t.source="$Recommendation",t),_=async()=>await fetch(Object(d.isEnvQA)()?"https://horizon-track.qa.globoi.com/id":"https://horizon-track.globo.com/id",{credentials:"include"}).then(t=>t.json()),O=t=>{const e=("; "+document.cookie).split("; "+t+"=")
if(2===e.length)return e.pop().split(";").shift()},S=(t,e)=>{const n=new RegExp("^(?!.*SMART).*?-FEED-(?:.*-)?(?:item|user)$"),r=new RegExp("^.*-FEED-(?:.*-)?(?:SMART-)(?:item|user)$"),i=new RegExp("(?:item|user)$"),o=(t=>{const e=u.Settings.get("PAGINABLE")
return e&&t.indexOf("item")>=0?"user":!e&&t.indexOf("user")>=0?"item":""})(t),s=o.length?t.replace(i,o):t
if(n.test(s)){if(!e){const t=s.search(i),e=s.slice(t)
return s.replace(i,"SMART-"+e)}return s}return r.test(t)&&e?s.replace("-SMART-","-"):s},w=(t,e)=>{const n=c.Configs.get("recommendationStart"),r=e.filter(t=>t._experiment_properties),i=e.filter(t=>!t._experiment_properties&&t.position>n)
if(c.Configs.set("experimentData",t),l.Globals.bstn.experimentData=t,i.length){const e=i.map((e,n)=>(n<10&&(e=((t,e)=>{var n
return{id:t.id,feedId:t.feedId,lastPublication:t.lastPublication,modified:t.modified,content:m({url:"video"===t.type?null===(n=t.content.video)||void 0===n?void 0:n.url:t.content.url},t.content),aggregatedPosts:t.aggregatedPosts||[],publication:t.publication,created:t.created,tenantId:t.tenantId,position:t.position,type:t.type,_experiment_properties:e._experiment_properties,_documentKey:""+e.tag}})(e,t)),e))
f.$Falkor.getInstance().buffer=[...r,...e],c.Configs.set("lastRecWasInserted",!0)}else c.Configs.set("lastRecWasInserted",!1)}
class I extends p.$OnDemandSource{static getInstance(t){if(t&&!g&&(g=new I(t,v)),g)return g
throw new Error("Couldn't return a $Recommendation instance")}constructor(t,e){e!==v&&Object(a.warn)("Class $Recommendation is a singleton and shouldn't be called directly."),super(t.items),this.receivedZeroItems=T(t.items),this.nextFetch=2,this.nextPage=2,b(t)}whenToFetch(){return 0===this.buffer.length}static async buildRequestUrl(t){const e=-1!==["tablet","desktop"].indexOf(u.Settings.get("DEVICE_GROUP","desktop")),n="home"===u.Settings.get("FULL_FEED_SSR_TYPE"),r=u.Settings.get("RECOMMENDATION.URL",u.Settings.get("RECOMMENDATION_URL"))||"",i=String(u.Settings.get("PORTAL")).toUpperCase(),o=n?"":"&anchors.item="+window.location.href.replace(/^(http|https):/,""),s=c.Configs.get("recommendationContentId")||i+"-FEED-user",a=S(s,e),h=l.Globals.location.hash.match(/(?:^#|&)alternative=([^&]+)/),d=h?"&forcedABAlternative="+h[1]:"",p=await(async()=>{try{const t=await _()
return Promise.resolve(t.glb_uid)}catch(t){return console.log(t),O("glb_uid")}})(),f=p?"&glb_uid="+p:"",m=await(async()=>{try{const t=await _()
return Promise.resolve(t.hsid)}catch(t){return console.log(t),O("hsid")}})()
return""+r+a+"?responseFormat=legacyPublishing&page="+t+"&perPage=10"+d+f+(m?"&hsid="+m:"")+o}async howToFetch(){const t=this.nextFetch
if(s()(t)&&(!this.receivedZeroItems||c.Configs.get("isRecEditorial"))){const e=await I.buildRequestUrl(t),n=c.Configs.get("recommendationStart"),r=f.$Falkor.getInstance().buffer,i=c.Configs.get("experimentData"),o=c.Configs.get("lastRecWasInserted")
l.Globals.bstn.hasSentImpression=!1,!o&&((t,e)=>e.filter(e=>!e._experiment_properties&&e.position>t).length>0)(n,r)?w(i,r):fetch(e,{credentials:"include",headers:{"x-canonical-uri":window.location.href}}).then(t=>{if(200!==t.status){console.error("[bastian] ERROR",t)
const e=()=>new Error("Network error: ")
return Promise.reject(e)}return t.json()}).then(this.unlock).then(t=>{this.setNextFetch(this.nextFetch+1),b(t),Array.isArray(t)?this.saveAndResumeStream(t.map(E),t=>{this.receivedZeroItems=T(t)}):c.Configs.get("isRecEditorial")&&t._experiment_properties?(w(t,r),this.setNextPage(this.nextPage+1)):this.receivedZeroItems=!0}).catch(t=>{c.Configs.unset("recommendationTag"),this.listener&&this.listener.error(t)})}}whenToComplete(){return this.receivedZeroItems}}I.staticName="$Recommendation"
const T=t=>0===t.length},function(t,e,n){"use strict"
function r(){return window.location.hostname.includes(".qa.globoi")||window.location.hostname.includes("localhost")}n.r(e),n.d(e,"isEnvQA",(function(){return r}))},function(t,e,n){var r
self,r=()=>(()=>{var t={31:(t,e)=>{!function(t){var e,n,r,i=String.fromCharCode
function o(t){for(var e,n,r=[],i=0,o=t.length;i<o;)(e=t.charCodeAt(i++))>=55296&&e<=56319&&i<o?56320==(64512&(n=t.charCodeAt(i++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--):r.push(e)
return r}function s(t){if(t>=55296&&t<=57343)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value")}function a(t,e){return i(t>>e&63|128)}function c(t){if(!(4294967168&t))return i(t)
var e=""
return 4294965248&t?4294901760&t?4292870144&t||(e=i(t>>18&7|240),e+=a(t,12),e+=a(t,6)):(s(t),e=i(t>>12&15|224),e+=a(t,6)):e=i(t>>6&31|192),e+i(63&t|128)}function l(){if(r>=n)throw Error("Invalid byte index")
var t=255&e[r]
if(r++,128==(192&t))return 63&t
throw Error("Invalid continuation byte")}function u(){var t,i
if(r>n)throw Error("Invalid byte index")
if(r==n)return!1
if(t=255&e[r],r++,!(128&t))return t
if(192==(224&t)){if((i=(31&t)<<6|l())>=128)return i
throw Error("Invalid continuation byte")}if(224==(240&t)){if((i=(15&t)<<12|l()<<6|l())>=2048)return s(i),i
throw Error("Invalid continuation byte")}if(240==(248&t)&&(i=(7&t)<<18|l()<<12|l()<<6|l())>=65536&&i<=1114111)return i
throw Error("Invalid UTF-8 detected")}t.version="3.0.0",t.encode=function(t){for(var e=o(t),n=e.length,r=-1,i="";++r<n;)i+=c(e[r])
return i},t.decode=function(t){e=o(t),n=e.length,r=0
for(var s,a=[];!1!==(s=u());)a.push(s)
return function(t){for(var e,n=t.length,r=-1,o="";++r<n;)(e=t[r])>65535&&(o+=i((e-=65536)>>>10&1023|55296),e=56320|1023&e),o+=i(e)
return o}(a)}}(e)},92:(t,e,n)=>{"use strict"
n(491).polyfill()},215:(t,e,n)=>{var r,i,o
void 0===(i="function"==typeof(r=o=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t]
for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function i(){}function o(e,n,o){if("undefined"!=typeof document){"number"==typeof(o=t({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():""
try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape)
var a=""
for(var c in o)o[c]&&(a+="; "+c,!0!==o[c]&&(a+="="+o[c].split(";")[0]))
return document.cookie=e+"="+n+a}}function s(t,n){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var a=o[s].split("="),c=a.slice(1).join("=")
n||'"'!==c.charAt(0)||(c=c.slice(1,-1))
try{var l=e(a[0])
if(c=(r.read||r)(c,l)||e(c),n)try{c=JSON.parse(c)}catch(t){}if(i[l]=c,t===l)break}catch(t){}}return t?i[t]:i}}return i.set=o,i.get=function(t){return s(t,!1)},i.getJSON=function(t){return s(t,!0)},i.remove=function(e,n){o(e,"",t(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}((function(){}))})?r.call(e,n,e,t):r)||(t.exports=i),t.exports=o()},471:t=>{for(var e=[],n=0;n<256;++n)e[n]=(n+256).toString(16).substr(1)
t.exports=function(t,n){var r=n||0,i=e
return[i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]]].join("")}},491:t=>{"use strict"
function e(t,e){if(null==t)throw new TypeError("Cannot convert first argument to object")
for(var n=Object(t),r=1;r<arguments.length;r++){var i=arguments[r]
if(null!=i)for(var o=Object.keys(Object(i)),s=0,a=o.length;s<a;s++){var c=o[s],l=Object.getOwnPropertyDescriptor(i,c)
void 0!==l&&l.enumerable&&(n[c]=i[c])}}return n}t.exports={assign:e,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:e})}}},550:(t,e,n)=>{var r=n(814),i=n(471)
t.exports=function(t,e,n){var o=e&&n||0
"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null)
var s=(t=t||{}).random||(t.rng||r)()
if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var a=0;a<16;++a)e[o+a]=s[a]
return e||i(s)}},814:t=>{var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(e){var n=new Uint8Array(16)
t.exports=function(){return e(n),n}}else{var r=new Array(16)
t.exports=function(){for(var t,e=0;e<16;e++)3&e||(t=4294967296*Math.random()),r[e]=t>>>((3&e)<<3)&255
return r}}},914:function(t,e,n){var r
t=n.nmd(t),function(){var i=(t&&t.exports,"object"==typeof n.g&&n.g)
i.global!==i&&i.window
var o=function(t){this.message=t};(o.prototype=new Error).name="InvalidCharacterError"
var s=function(t){throw new o(t)},a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=/[\t\n\f\r ]/g,l={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&s("The string to be encoded contains characters outside of the Latin1 range.")
for(var e,n,r,i,o=t.length%3,c="",l=-1,u=t.length-o;++l<u;)e=t.charCodeAt(l)<<16,n=t.charCodeAt(++l)<<8,r=t.charCodeAt(++l),c+=a.charAt((i=e+n+r)>>18&63)+a.charAt(i>>12&63)+a.charAt(i>>6&63)+a.charAt(63&i)
return 2==o?(e=t.charCodeAt(l)<<8,n=t.charCodeAt(++l),c+=a.charAt((i=e+n)>>10)+a.charAt(i>>4&63)+a.charAt(i<<2&63)+"="):1==o&&(i=t.charCodeAt(l),c+=a.charAt(i>>2)+a.charAt(i<<4&63)+"=="),c},decode:function(t){var e=(t=String(t).replace(c,"")).length
e%4==0&&(e=(t=t.replace(/==?$/,"")).length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&s("Invalid character: the string to be decoded is not correctly encoded.")
for(var n,r,i=0,o="",l=-1;++l<e;)r=a.indexOf(t.charAt(l)),n=i%4?64*n+r:r,i++%4&&(o+=String.fromCharCode(255&n>>(-2*i&6)))
return o},version:"0.1.0"}
void 0===(r=function(){return l}.call(e,n,e,t))||(t.exports=r)}()},916:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){var n=this.event&&this.event.type,r="unload"===n||"beforeunload"===n,i="XMLHttpRequest"in this?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")
i.open("POST",t,!r),i.withCredentials=!0,i.setRequestHeader("Accept","*/*"),"string"==typeof e?(i.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),i.responseType="text/plain"):e instanceof Blob&&e.type&&i.setRequestHeader("Content-Type",e.type)
try{i.send(e)}catch(t){return!1}return!0}function n(){return"navigator"in this&&"sendBeacon"in this.navigator}(function(){n.call(this)||("navigator"in this||(this.navigator={}),this.navigator.sendBeacon=e.bind(this))}).call("object"===("undefined"==typeof window?"undefined":t(window))?window:{})},976:function(t,e){var n,r
void 0===(r="function"==typeof(n=function(){var t=function(){},e={},n={},r={}
function i(t,e){if(t){var i=r[t]
if(n[t]=e,i)for(;i.length;)i[0](t,e),i.splice(0,1)}}function o(e,n){e.call&&(e={success:e}),n.length?(e.error||t)(n):(e.success||t)(e)}function s(e,n,r,i){var o,a,c=document,l=r.async,u=(r.numRetries||0)+1,h=r.before||t,d=e.replace(/^(css|img)!/,"")
i=i||0,/(^css!|\.css$)/.test(e)?((a=c.createElement("link")).rel="stylesheet",a.href=d,(o="hideFocus"in a)&&a.relList&&(o=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(e)?(a=c.createElement("img")).src=d:((a=c.createElement("script")).src=e,a.async=void 0===l||l),a.onload=a.onerror=a.onbeforeload=function(t){var c=t.type[0]
if(o)try{a.sheet.cssText.length||(c="e")}catch(t){18!=t.code&&(c="e")}if("e"==c){if((i+=1)<u)return s(e,n,r,i)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet"
n(e,c,t.defaultPrevented)},!1!==h(e,a)&&c.head.appendChild(a)}function a(t,n,r){var a,c
if(n&&n.trim&&(a=n),c=(a?r:n)||{},a){if(a in e)throw"LoadJS"
e[a]=!0}function l(e,n){!function(t,e,n){var r,i,o=(t=t.push?t:[t]).length,a=o,c=[]
for(r=function(t,n,r){if("e"==n&&c.push(t),"b"==n){if(!r)return
c.push(t)}--o||e(c)},i=0;i<a;i++)s(t[i],r,n)}(t,(function(t){o(c,t),e&&o({success:e,error:n},t),i(a,t)}),c)}if(c.returnPromise)return new Promise(l)
l()}return a.ready=function(t,e){return function(t,e){t=t.push?t:[t]
var i,o,s,a=[],c=t.length,l=c
for(i=function(t,n){n.length&&a.push(t),--l||e(a)};c--;)o=t[c],(s=n[o])?i(o,s):(r[o]=r[o]||[]).push(i)}(t,(function(t){o(e,t)})),a},a.done=function(t){i(t,[])},a.reset=function(){e={},n={},r={}},a.isDefined=function(t){return t in e},a})?n.apply(e,[]):n)||(t.exports=r)}},e={}
function n(r){var i=e[r]
if(void 0!==i)return i.exports
var o=e[r]={id:r,loaded:!1,exports:{}}
return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t
return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis
try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t)
var r={}
return(()=>{"use strict"
n.r(r),n.d(r,{HorizonClient:()=>Ae,IDManager:()=>Pe,Settings:()=>w}),n(92)
var t=n(550),e=n.n(t)
const i=function(t,e){var n=(window.horizonResources=window.horizonResources||{},window.horizonResources)
return n[t]=n[t]||e,n[t]},o={MINIMUM:50,MAXIMUM:1e3,DEFAULT:100},s={MINIMUM:1,MAXIMUM:100,DEFAULT:10},a={MINIMUM:5e3,MAXIMUM:2e4,DEFAULT:1e4}
var c="QUEUE_STATUS",l="SEND_STATUS",u="ID_STATUS",h="SCHEMAS_STATUS",d="REQUEUING_STATUS",p="VALIDATION_STATUS",f="DISCARDED_BY_OVERFLOW",m="DISCARDED_BY_EXPIRED",g="QUEUE_VALIDATED_CURRENT_SIZE",v="SEND_FAILURE",b="IO_EXCEPTION",y="SUCCESS",E="FAILED",_={AVOID_COOKIE_USAGE:!1,EVENTS_BUFFER_SIZE:100,EVENTS_SENDER_INTERVAL:1e4,EVENTS_SENDER_MIN_INTERVAL:5e3,EVENTS_SENDER_MAX_INTERVAL:3e4,EVENTS_DISCARD_AFTER_MSECS:36e5,EVENTS_BULK_SIZE:10,HORIZON_CALLBACK_STACK_LIMIT:1e3,HORIZON_CONFIGS_HOST:"https://horizon-config-api-gcp-us-prod.apps.tsuru.gcp.i.globo/",HORIZON_TRACK_IDENTIFICATION_RESOURCE:"id",HORIZON_TRACK_HOST:"horizon-track.globo.com",HORIZON_CLIENT_UUID:i("clientInstanceUUID",e()()),HORIZON_REQUEST_ENCODING:"base64",HORIZON_SCHEMAS_HOST:"horizon-schemas.globo.com",IDENTIFICATION_LOAD_RETRY_AFTER_MSECS:5e3,PACKAGE_VERSION:"3.8.2",SCHEMA_VALIDATOR_SCRIPT_URL:"s3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js",SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES:2,SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS:1e4,USE_HTTPS:!0,METRICS_SEND_INTERVAL:18e4},O=function(t,e,n,r){_[t]=e<=n?n:e>=r?r:e},S={avoidCookieUsage:function(){_.AVOID_COOKIE_USAGE=!0},useHTTPOnly:function(){_.USE_HTTPS=!1},useQAConfiguration:function(){_.HORIZON_TRACK_HOST="horizon-track.qa.globoi.com",_.HORIZON_SCHEMAS_HOST="horizon-schemas.qa.globoi.com",_.HORIZON_CONFIGS_HOST="horizon-config-api-gcp-qa.rpaasv2-be.tsuru.dev.gcp.i.globo",_.HORIZON_REQUEST_ENCODING="json"},useJSONEncoding:function(){_.HORIZON_REQUEST_ENCODING="json"},changeEventbusBufferSize:function(t){!t||!Number.isInteger(t)||t<=0||(O("EVENTS_BUFFER_SIZE",t,o.MINIMUM,o.MAXIMUM),console.log("changeEventbusBufferSize: ".concat(t)))},changeEventbusBulkSize:function(t){!t||!Number.isInteger(t)||t<=0||O("EVENTS_BULK_SIZE",t,s.MINIMUM,s.MAXIMUM)},changeEventbusSenderInterval:function(t){!t||!Number.isInteger(t)||t<=0||O("EVENTS_SENDER_INTERVAL",t,a.MINIMUM,a.MAXIMUM)}}
const w=Object.assign(_,S)
var I=n(976),T=n.n(I),C={COMPONENT_NOT_READY:"[Horizon] Component is not ready.",COMPONENT_UNAVAILABLE:"[Horizon] Class or function is required.",DUPLICATED_SCHEMA:"[Horizon] Duplicated schema.",ERROR_LOADING_RESOURCE:"[Horizon] Failed to load resource.",INVALID_AUTH_TOKEN:"[Horizon] Invalid authorization token.",INVALID_DATA:"[Horizon] Invalid data.",INVALID_DATE:"[Horizon] Invalid date-time RFC 3339 format.",INVALID_STRING_NUMERIC_STRING:"[Horizon] numericString should be string.",INVALID_EMPTY_NUMERIC_STRING:"[Horizon] numericString should be empty.",INVALID_NUMERIC_STRING:"[Horizon] Invalid number. Field with NumericString must to be number.",INVALID_ENVIRONMENT:"[Horizon] Invalid environment value.",INVALID_FORMAT:"[Horizon] Invalid event format.",INVALID_REQUEST:"[Horizon] Invalid request.",INVALID_TIMESTAMP:"[Horizon] Invalid timestamp.",INVALID_VERSION_FORMAT:"[Horizon] Invalid version format.",INVALID_RELATION_ID:"[Horizon] Invalid relation identification.",LIMIT_EXCEEDED:"[Horizon] Resource limit exceeded.",MUST_BE_DEFINED:"[Horizon] Parameter or argument must be defined",SCHEMA_VALIDATOR_ERROR_LOADING:"[Horizon] Could not load SchemaValidator.",UNSUPPORTED_TYPE:"[Horizon] Unsupported type.",UNSUPPORTED_TENANT:"[Horizon] Unsupported tenant.",UNSUPPORTED_ENCODER:"[Horizon] Unsupported encoder.",USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE:"[Horizon] Can not set or remove a logged user when AVOID_COOKIE_USAGE is not enabled."},x={mustBeDefined:function(t){throw new Error("".concat(C.MUST_BE_DEFINED,": ").concat(t,"."))}}
const j=Object.assign(C,x)
function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t){var e=function(t){if("object"!=A(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=A(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==A(e)?e:e+""}const N=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=new Map},(e=[{key:"addMetric",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])this.data.set(t,e)
else{var n=this.data.get(t)||0
this.data.set(t,n+e)}}},{key:"getMetrics",value:function(){return new Map(this.data)}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e}()
function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e,n){return(e=D(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t){var e=function(t){if("object"!=R(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=R(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==R(e)?e:e+""}var M=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.metricCollectors=k(k(k(k(k(k({},c,{}),l,{}),u,{}),h,{}),d,{}),p,{}),this.allTenants=[],this.initialQueueSizeValidated=0,this.initialQueueSizeUnvalidated=0,this.horizonClientUUID={}},(e=[{key:"addMetric",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"general"
null!==t&&(this.metricCollectors[t][r]||(this.metricCollectors[t][r]=new N,"general"===r||this.allTenants.includes(r)||this.allTenants.push(r)),t===c&&e===g?this.metricCollectors[t][r].addMetric(e,n,!0):this.metricCollectors[t][r].addMetric(e,n))}},{key:"getMetrics",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"general"
return this.metricCollectors[t]&&this.metricCollectors[t][e]?this.metricCollectors[t][e].getMetrics():null}},{key:"addHttpMetric",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"general"
null!==t&&(this.metricCollectors[t][r]||(this.metricCollectors[t][r]=new N,"general"===r||this.allTenants.includes(r)||this.allTenants.push(r)),this.metricCollectors[t][r].addMetric(e,n))}},{key:"getHttpMetrics",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"general"
return this.metricCollectors[t]&&this.metricCollectors[t][e]?this.metricCollectors[t][e].getMetrics():null}},{key:"setCurrentHorizonClientUUID",value:function(t,e){this.horizonClientUUID[t]=e}},{key:"getCurrentHorizonClientUUID",value:function(t){return this.horizonClientUUID[t]}},{key:"getAllTenants",value:function(){return this.allTenants}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,D(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e}()
const L=function(){var t=i("metrics",{})
return t.metricCollector||(t.metricCollector=new M),t.metricCollector}
function H(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t,e,n){return(e=function(t){var e=function(t){if("object"!=U(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=U(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==U(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var F={ready:[]},B=["url"],G=function(){return!!window.tv4},z=function(t){return null===t||isNaN(t)&&!isNaN(Date.parse(t))?null:j.INVALID_DATE},q=function(t){return"string"!=typeof t?j.INVALID_STRING_NUMERIC_STRING:""===t.trim()?j.INVALID_EMPTY_NUMERIC_STRING:Number.isFinite(Number(t))?null:j.INVALID_NUMERIC_STRING}
const W={validateFor:function(t,e,n){var r=L()
if(!G())throw new Error("".concat(j.ERROR_LOADING_RESOURCE," Validator is not ready."))
if(!e)throw r.addMetric(p,E,1,n),new Error("".concat(j.INVALID_DATA," Argument: schema."))
if(!/\d+\.\d+/.test(t.version))throw r.addMetric(p,E,1,n),new Error(j.INVALID_VERSION_FORMAT)
if(!tv4.validate(t.properties,e))throw r.addMetric(p,E,1,n),new Error("".concat(j.INVALID_DATA," ").concat(t.id," ").concat(t.version,". ").concat(tv4.error))},validateArgs:function(t,e){var n=L(),r=Object.prototype.hasOwnProperty
if(!(t&&r.call(t,"id")&&r.call(t,"version")&&r.call(t,"properties")))throw n.addMetric(p,E,1,e),new Error("".concat(j.INVALID_FORMAT," Missing properties: ").concat(JSON.stringify(t)))
if("string"!=typeof t.id||"string"!=typeof t.version||"object"!==U(t.properties))throw n.addMetric(p,E,1,e),new Error("".concat(j.INVALID_FORMAT," Wrong object type: ").concat(JSON.stringify(t)))
if(B.filter((function(e){return t[e]&&"string"!=typeof t[e]})).length>0)throw n.addMetric(p,E,1,e),new Error("".concat(j.INVALID_FORMAT," Wrong object type: ").concat(JSON.stringify(t)))
if(t.id.length<2||t.version.length<3)throw n.addMetric(p,E,1,e),new Error("".concat(j.INVALID_FORMAT," Invalid property size: ").concat(JSON.stringify(t)))
var i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?H(Object(n),!0).forEach((function(e){V(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)
delete i.id,delete i.version,delete i.properties,delete i.contentType
var o=Object.keys(i)
if(o.length>0&&!o.every((function(t){return-1!==B.indexOf(t)})))throw n.addMetric(p,E,1,e),new Error("".concat(j.INVALID_FORMAT," Extra keys aren't allowed: ").concat(JSON.stringify(i)))},tv4IsValidData:z,tv4IsNumericString:q,isReady:G,onReady:function(t){if(G())return t()
if(F.ready.length>w.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(j.LIMIT_EXCEEDED," Validator callback stack."))
return F.ready.unshift(t)},load:function(){if(!T().isDefined("tv4")){var t=w.USE_HTTPS?"https://":"http://",e="".concat(t).concat(w.SCHEMA_VALIDATOR_SCRIPT_URL)
T()([e],"tv4",{async:!0,numRetries:w.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,success:function(){tv4.addFormat("date-time",z),tv4.addFormat("numericString",q),F.ready.forEach((function(t){return t()}))},error:function(t){throw new Error("".concat(j.SCHEMA_VALIDATOR_ERROR_LOADING," ").concat(t))}})}}}
function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(null!=n){var r,i,o,s,a=[],c=!0,l=!1
try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return
c=!1}else for(;!(c=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,i=t}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw i}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return K(t,e)
var n={}.toString.call(t).slice(8,-1)
return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){(null==e||e>t.length)&&(e=t.length)
for(var n=0,r=Array(e);n<e;n++)r[n]=t[n]
return r}function J(t){var e=function(t){if("object"!=$(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=$(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==$(e)?e:e+""}const Q=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.metricCollector=e},(e=[{key:"formatQueueMetric",value:function(t){return[{queueOverflow:t&&t.get("DISCARDED_BY_OVERFLOW")||0,expired:t&&t.get("DISCARDED_BY_EXPIRED")||0,validatedCurrentSize:t&&t.get("QUEUE_VALIDATED_CURRENT_SIZE")||0,unvalidatedCurrentSize:t&&t.get("QUEUE_UNVALIDATED_CURRENT_SIZE")||0}]}},{key:"formatSendStatusHttpCodeMetric",value:function(t){return t?Array.from(t.entries()).map((function(t){var e=Z(t,2)
return{sendStatusCode:e[0],sendStatusQuantity:e[1]}})):[]}},{key:"formatIdStatusHttpCodeMetric",value:function(t){return t?Array.from(t.entries()).map((function(t){var e=Z(t,2)
return{idStatusCode:e[0],idStatusQuantity:e[1]}})):[]}},{key:"formatSchemaStatusHttpCodeMetric",value:function(t){return t?Array.from(t.entries()).map((function(t){var e=Z(t,2)
return{schemaStatusCode:e[0],schemaStatusQuantity:e[1]}})):[]}},{key:"formatRequeuingMetric",value:function(t){var e=v,n=b
return[{requeuingStatusResponse:e.toLowerCase(),requeuingStatusQuantity:t&&t.get(e)||0},{requeuingStatusResponse:n.toLowerCase(),requeuingStatusQuantity:t&&t.get(n)||0}]}},{key:"formatValidationMetric",value:function(t){var e=y,n=E
return[{validationStatusResponse:e.toLowerCase(),validationStatusQuantity:t&&t.get(e)||0},{validationStatusResponse:n.toLowerCase(),validationStatusQuantity:t&&t.get(n)||0}]}},{key:"formatConfigurationStatusMetric",value:function(t){var e=w.USE_HTTPS,n=w.AVOID_COOKIE_USAGE,r=w.HORIZON_TRACK_HOST,i=w.HORIZON_SCHEMAS_HOST,o=w.HORIZON_REQUEST_ENCODING,s=w.EVENTS_BUFFER_SIZE,a=w.EVENTS_BULK_SIZE,c=w.EVENTS_SENDER_INTERVAL
return JSON.stringify({USE_HTTPS:e,AVOID_COOKIE_USAGE:n,HORIZON_TRACK_HOST:r,HORIZON_SCHEMAS_HOST:i,HORIZON_REQUEST_ENCODING:o,EVENTS_BUFFER_SIZE:s,EVENTS_BULK_SIZE:a,EVENTS_SENDER_INTERVAL:c,HORIZON_CLIENT_UUID:this.metricCollector.getCurrentHorizonClientUUID(t),TENANTS_IN_INSTANCE:this.metricCollector.getAllTenants()})}},{key:"reportAllMetrics",value:function(t){var e=this.metricCollector.getHttpMetrics(l,t),n=this.metricCollector.getHttpMetrics(u),r=this.metricCollector.getHttpMetrics(h),i=this.metricCollector.getMetrics(c,t),o=this.metricCollector.getMetrics(d,t),s=this.metricCollector.getMetrics(p,t)
return{id:"horizon-sdk-metrics",version:"1.1",contentType:"metrics",properties:{queueStatus:this.formatQueueMetric(i),sendStatus:this.formatSendStatusHttpCodeMetric(e),idStatus:this.formatIdStatusHttpCodeMetric(n),schemaStatus:this.formatSchemaStatusHttpCodeMetric(r),requeuingStatus:this.formatRequeuingMetric(o),validationStatus:this.formatValidationMetric(s),configurationStatus:this.formatConfigurationStatusMetric(t)}}}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,J(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e}()
function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Y(t){var e=function(t){if("object"!=X(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=X(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==X(e)?e:e+""}var tt=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.lastMetricsSentTimestamp={},this.metricsSendInterval=e,this.initialDelaySet=n,this.wasFirstSend={}},(e=[{key:"shouldSendMetricsNow",value:function(t){var e=Date.now()
return e-(this.lastMetricsSentTimestamp[t]||0)+100>=(this.wasFirstSend[t]?this.metricsSendInterval:this.initialDelaySet)&&(this.lastMetricsSentTimestamp[t]=e,this.wasFirstSend[t]=!0,!0)}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Y(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e}()
function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t){var e=function(t){if("object"!=et(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=et(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==et(e)?e:e+""}const rt=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.interval=0,this.tickIntervalId=0,this.callbacks=[]},(e=[{key:"isRunning",get:function(){return!!this.tickIntervalId}},{key:"tick",value:function(){var t=this
this.callbacks.forEach((function(e){return e(t)}))}},{key:"start",value:function(){return this.tickIntervalId=setInterval(this.tick.bind(this),this.interval),this}},{key:"stop",value:function(){return clearInterval(this.tickIntervalId),this.tickIntervalId=0,this}},{key:"reschedule",value:function(t){return this.stop().every(t).start()}},{key:"every",value:function(t){return this.interval=t,this}},{key:"call",value:function(t){return this.callbacks.push(t),this}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,nt(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e}()
n(916)
var it=n(215),ot=n.n(it)
const st=function(t){var e=w.EVENTS_SENDER_MIN_INTERVAL,n=w.EVENTS_SENDER_MAX_INTERVAL,r=Number(ot().get("_hzt.interval"))||w.EVENTS_SENDER_INTERVAL
r<=n&&r>=e&&t.interval!==r&&t.reschedule(r)}
function at(t){return(at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ct(t,e){(null==e||e>t.length)&&(e=t.length)
for(var n=0,r=Array(e);n<e;n++)r[n]=t[n]
return r}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ut(r.key),r)}}function ut(t){var e=function(t){if("object"!=at(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=at(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==at(e)?e:e+""}const ht=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.MAXIMUM,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._queue=[],this.maxSize=n,this.metricCollector=r,this.queueName=e}return e=t,r=[{key:"fromArray",value:function(e,n){var r=new t(this.productName,n,this.metricCollector)
return e.forEach((function(t){return r.push(t)})),r}}],(n=[{key:"length",get:function(){return this._queue.length}},{key:"items",get:function(){return JSON.parse(JSON.stringify(this._queue))}},{key:"push",value:function(t){this.metricDiscardedEvents(),this._queue=[t].concat(function(t){return function(t){if(Array.isArray(t))return ct(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return ct(t,e)
var n={}.toString.call(t).slice(8,-1)
return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(this.slice(0,this.maxSize-1)))}},{key:"metricDiscardedEvents",value:function(){if(this.metricCollector){var t=this._queue.length
this.slice(0,this.maxSize-1).length<t&&this.metricCollector.addMetric(c,f,this.queueName)}}},{key:"forEach",value:function(t){return this._queue.forEach(t)}},{key:"slice",value:function(t,e){return this._queue.slice(t,e)}},{key:"splice",value:function(t,e){return this._queue.splice(t,e)}},{key:"clear",value:function(){this._queue=[]}},{key:"filter",value:function(e){return t.fromArray(this._queue.filter(e),this.maxSize)}}])&&lt(e.prototype,n),r&&lt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e
var e,n,r}()
var dt=n(914),pt=n.n(dt),ft=n(31),mt=n.n(ft),gt={base64:function(t){var e=new FormData
return e.append("data",pt().encode(mt().encode(JSON.stringify(t)))),e.append("encoding","base64"),e},json:function(t){return JSON.stringify(t)}}
function vt(){var t,e,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return bt(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:t,a:p,f:p.bind(t,4),d:function(e,n){return o=e,a=0,c=t,d.n=n,s}}
function p(n,r){for(a=n,c=r,e=0;!h&&l&&!i&&e<u.length;e++){var i,o=u[e],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=t):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(e=a<2?t:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),e=o[i]){if(!(e=e.call(o,c)))throw TypeError("iterator result is not an object")
if(!e.done)return e
c=e.value,a<2&&(a=0)}else 1===a&&(e=o.return)&&e.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=t}else if((e=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(e){o=t,a=1,c=e}finally{l=1}}return{value:e,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}e=Object.getPrototypeOf
var u=[][r]?e(e([][r]())):(bt(e={},r,(function(){return this})),e),h=l.prototype=a.prototype=Object.create(u)
function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,bt(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return c.prototype=l,bt(h,"constructor",l),bt(l,"constructor",c),c.displayName="GeneratorFunction",bt(l,i,"GeneratorFunction"),bt(h),bt(h,i,"Generator"),bt(h,r,(function(){return this})),bt(h,"toString",(function(){return"[object Generator]"})),(vt=function(){return{w:o,m:d}})()}function bt(t,e,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(t){i=0}(bt=function(t,e,n,r){function o(e,n){bt(t,e,(function(t){return this._invoke(e,n,t)}))}e?i?i(t,e,{value:n,enumerable:!r,configurable:!r,writable:!r}):t[e]=n:(o("next",0),o("throw",1),o("return",2))})(t,e,n,r)}function yt(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}var Et=function(t,e,n){var r=n.status,i=n.statusText,o=n.response
r>=200&&r<400?t({status:r,statusText:i,data:JSON.parse(o)}):e({status:r,statusText:i})}
const _t={request:function(t,e){return new Promise((function(n,r){var i=new XMLHttpRequest
i.open(t,e,!0),i.withCredentials=!0,i.onload=function(){return Et(n,r,i)},i.onerror=function(t){return r(t)},i.send()}))},post:function(){var t,e=(t=vt().m((function t(e,n,r){return vt().w((function(t){for(;;)if(0===t.n)return t.a(2,new Promise((function(t,i){var o=new XMLHttpRequest
o.open("POST",e,!0),o.withCredentials=!0,Object.keys(n).forEach((function(t){o.setRequestHeader(t,n[t])})),o.onload=function(){return Et(t,i,o)},o.onerror=function(t){return i(t)},o.send(JSON.stringify(r))})))}),t)})),function(){var e=this,n=arguments
return new Promise((function(r,i){var o=t.apply(e,n)
function s(t){yt(o,r,i,s,a,"next",t)}function a(t){yt(o,r,i,s,a,"throw",t)}s(void 0)}))})
return function(t,n,r){return e.apply(this,arguments)}}()}
function Ot(t){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function St(){var t,e,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return wt(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:t,a:p,f:p.bind(t,4),d:function(e,n){return o=e,a=0,c=t,d.n=n,s}}
function p(n,r){for(a=n,c=r,e=0;!h&&l&&!i&&e<u.length;e++){var i,o=u[e],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=t):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(e=a<2?t:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),e=o[i]){if(!(e=e.call(o,c)))throw TypeError("iterator result is not an object")
if(!e.done)return e
c=e.value,a<2&&(a=0)}else 1===a&&(e=o.return)&&e.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=t}else if((e=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(e){o=t,a=1,c=e}finally{l=1}}return{value:e,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}e=Object.getPrototypeOf
var u=[][r]?e(e([][r]())):(wt(e={},r,(function(){return this})),e),h=l.prototype=a.prototype=Object.create(u)
function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,wt(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return c.prototype=l,wt(h,"constructor",l),wt(l,"constructor",c),c.displayName="GeneratorFunction",wt(l,i,"GeneratorFunction"),wt(h),wt(h,i,"Generator"),wt(h,r,(function(){return this})),wt(h,"toString",(function(){return"[object Generator]"})),(St=function(){return{w:o,m:d}})()}function wt(t,e,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(t){i=0}(wt=function(t,e,n,r){function o(e,n){wt(t,e,(function(t){return this._invoke(e,n,t)}))}e?i?i(t,e,{value:n,enumerable:!r,configurable:!r,writable:!r}):t[e]=n:(o("next",0),o("throw",1),o("return",2))})(t,e,n,r)}function It(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}function Tt(t){return function(){var e=this,n=arguments
return new Promise((function(r,i){var o=t.apply(e,n)
function s(t){It(o,r,i,s,a,"next",t)}function a(t){It(o,r,i,s,a,"throw",t)}s(void 0)}))}}function Ct(t){var e=function(t){if("object"!=Ot(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=Ot(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==Ot(e)?e:e+""}var xt=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},(e=[{key:"send",value:(i=Tt(St().m((function t(e,n){var r,i,o,s=arguments
return St().w((function(t){for(;;)switch(t.n){case 0:if(r=s.length>2&&void 0!==s[2]?s[2]:"json",n){t.n=1
break}return t.a(2,null)
case 1:return i=this.preparePayload(n,r),o={isSent:!1,status:0},o=this.sendBySendBeacon(e,i),t.n=2,this.sendByFetch(e,i,o)
case 2:return o=t.v,t.n=3,this.sendByXMLHttpRequest(e,i,r,o)
case 3:return o=t.v,t.a(2,o)}}),t,this)}))),function(t,e){return i.apply(this,arguments)})},{key:"preparePayload",value:function(t,e){return function(t){if(!(t in gt))throw new Error("".concat(j.UNSUPPORTED_ENCODER," Invalid ").concat(t," encoder."))
return gt[t]}(e)(t)}},{key:"sendBySendBeacon",value:function(t,e){var n=!1
try{n=navigator.sendBeacon(t,e)}catch(t){n=!1}return{isSent:n,status:200}}},{key:"sendByFetch",value:(r=Tt(St().m((function t(e,n,r){return St().w((function(t){for(;;)switch(t.n){case 0:if(!r.isSent){t.n=1
break}return t.a(2,r)
case 1:return t.a(2,fetch(e,{method:"POST",credentials:"include",body:n}).then((function(t){return t.ok||console.error("Failed to send Horizon events using fetch. Status ".concat(t.status," - ").concat(t.statusText)),{isSent:t.ok,status:t.status}})).catch((function(t){return{isSent:!1,status:t.status||-1}})))}}),t)}))),function(t,e,n){return r.apply(this,arguments)})},{key:"sendByXMLHttpRequest",value:(n=Tt(St().m((function t(e,n,r,i){var o
return St().w((function(t){for(;;)switch(t.n){case 0:if(!i.isSent){t.n=1
break}return t.a(2,i)
case 1:return o={},"json"===r&&(o={"Content-Type":"application/json"}),t.a(2,_t.post(e,o,n).then((function(t){return{isSent:!0,status:t.status}})).catch((function(t){return{isSent:!1,status:t.status||-1}})))}}),t)}))),function(t,e,r,i){return n.apply(this,arguments)})}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Ct(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e,n,r,i}()
function jt(t){return(jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function At(){var t,e,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return Pt(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:t,a:p,f:p.bind(t,4),d:function(e,n){return o=e,a=0,c=t,d.n=n,s}}
function p(n,r){for(a=n,c=r,e=0;!h&&l&&!i&&e<u.length;e++){var i,o=u[e],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=t):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(e=a<2?t:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),e=o[i]){if(!(e=e.call(o,c)))throw TypeError("iterator result is not an object")
if(!e.done)return e
c=e.value,a<2&&(a=0)}else 1===a&&(e=o.return)&&e.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=t}else if((e=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(e){o=t,a=1,c=e}finally{l=1}}return{value:e,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}e=Object.getPrototypeOf
var u=[][r]?e(e([][r]())):(Pt(e={},r,(function(){return this})),e),h=l.prototype=a.prototype=Object.create(u)
function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,Pt(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return c.prototype=l,Pt(h,"constructor",l),Pt(l,"constructor",c),c.displayName="GeneratorFunction",Pt(l,i,"GeneratorFunction"),Pt(h),Pt(h,i,"Generator"),Pt(h,r,(function(){return this})),Pt(h,"toString",(function(){return"[object Generator]"})),(At=function(){return{w:o,m:d}})()}function Pt(t,e,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(t){i=0}(Pt=function(t,e,n,r){function o(e,n){Pt(t,e,(function(t){return this._invoke(e,n,t)}))}e?i?i(t,e,{value:n,enumerable:!r,configurable:!r,writable:!r}):t[e]=n:(o("next",0),o("throw",1),o("return",2))})(t,e,n,r)}function Nt(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}function Rt(t){return function(){var e=this,n=arguments
return new Promise((function(r,i){var o=t.apply(e,n)
function s(t){Nt(o,r,i,s,a,"next",t)}function a(t){Nt(o,r,i,s,a,"throw",t)}s(void 0)}))}}function kt(t){var e=function(t){if("object"!=jt(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=jt(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==jt(e)?e:e+""}var Dt=function(){return t=function t(e,n,r,i,o,s){var a=this
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentTenant=e||j.mustBeDefined("tenant"),this.instanceID=n||j.mustBeDefined("instanceID"),this.deviceGroup=r||j.mustBeDefined("deviceGroup"),this.environment=i||j.mustBeDefined("environment"),this.metricCollector=s,this.queue=new ht(this.currentTenant,w.EVENTS_BUFFER_SIZE,this.metricCollector),this.idManager=o,this.dispatchNumber=1,this.actionCounter=0,this.dispatcher=new xt,this.metricCollector.setCurrentHorizonClientUUID(this.currentTenant,n),(new rt).every(w.EVENTS_SENDER_INTERVAL).call(Rt(At().m((function t(){var e
return At().w((function(t){for(;;)switch(t.n){case 0:return a.queue=a.filterQueue(),e=a.prepareRequest(),t.n=1,a.dispatch(e,w.HORIZON_REQUEST_ENCODING)
case 1:t.v||e.actions.forEach((function(t){return a.enqueue(t)}))
case 2:return t.a(2)}}),t)})))).call(st).start()},(e=[{key:"length",get:function(){return this.queue.length}},{key:"setMaxQueueSize",value:function(t){this.queue=ht.fromArray(this.queue.items,t)}},{key:"filterQueue",value:function(){var t=+Date.now()-w.EVENTS_DISCARD_AFTER_MSECS,e=this.queue.length,n=this.queue.filter((function(e){return e.actionTs>t})),r=e-n.length
return this.metricCollector.addMetric(c,m,r,this.currentTenant),n}},{key:"prepareRequest",value:function(){var t=this.queue.splice(0,w.EVENTS_BULK_SIZE)
return this.metricCollector.addMetric(c,g,this.queue.length,this.currentTenant),this.actionCounter+=t.length,{horizonClientUUID:this.instanceID,horizonClientTenant:this.currentTenant,horizonClientTs:Date.now(),horizonClientType:"js",horizonClientDeviceGroup:this.deviceGroup,horizonDispatchNumber:this.dispatchNumber,horizonActionCounter:this.actionCounter,horizonEnvironment:this.environment,actions:t}}},{key:"isValidRequest",value:function(t){if(!t||t&&!t.actions)throw new Error(j.INVALID_REQUEST)
return t.actions.length>0}},{key:"prepareUrl",value:function(){var t=w.USE_HTTPS?"https://":"http://",e=this.idManager.getAsKeyValue(),n=e?"?".concat(e):""
return"".concat(t).concat(ot().get("_hzt.host")||w.HORIZON_TRACK_HOST,"/event/").concat(this.currentTenant).concat(n)}},{key:"dispatch",value:(n=Rt(At().m((function t(e){var n,r,i,o,s=arguments
return At().w((function(t){for(;;)switch(t.n){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:"json",this.isValidRequest(e)){t.n=1
break}return t.a(2,!1)
case 1:return r=e.actions.length,i=this.prepareUrl(),this.dispatchNumber+=1,t.n=2,this.dispatcher.send(i,e,n)
case 2:return o=t.v,this.handleMetrics(o.isSent,o.status,r),t.a(2,o.isSent)}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"handleMetrics",value:function(t,e,n){if(this.metricCollector.addHttpMetric(l,e,n,this.currentTenant),!t){var r=-1===e?b:v
this.metricCollector.addHttpMetric(d,r,n,this.currentTenant)}}},{key:"enqueue",value:function(t){if(!t.actionTs)throw new Error(j.INVALID_TIMESTAMP)
this.queue.push(t),this.metricCollector.addMetric(c,g,this.queue.length,this.currentTenant)}},{key:"flush",value:function(){for(;this.queue.length>0;){this.queue=this.filterQueue()
var t=this.prepareRequest()
this.dispatch(t,w.HORIZON_REQUEST_ENCODING)}}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,kt(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e,n}()
const Mt=function(t,e,n,r){var o=i("bus",{}),s="".concat(t,"-").concat(e)
return o[s]||(o[s]=new Dt(t,w.HORIZON_CLIENT_UUID,e,n,r,L())),o[s]},Lt=function(t,e){setTimeout((function(){return t(e)}),1)}
function Ht(t){return(Ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Vt(t){var e=function(t){if("object"!=Ht(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=Ht(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==Ht(e)?e:e+""}var Ut="statusReady",Ft="statusNotReady",Bt="statusError",Gt=function(){return i("schemas",{data:{}})},zt=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=e,this.state=Ft,this.metricCollector=L(),this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}},(e=[{key:"get",value:function(t,e){var n="".concat(t,"-").concat(e)
if(!this.isReady())throw new Error("".concat(j.COMPONENT_NOT_READY))
var r=Gt().data[n]
if(!r)throw new Error("".concat(j.UNSUPPORTED_TYPE,": ").concat(n))
return r}},{key:"isReady",value:function(){return this.state===Ut}},{key:"retry",value:function(){var t=this
this.state="statusScheduled",this.callbacks.onRetry.forEach((function(t){return t()})),setTimeout((function(){t.state=Ft,t.load()}),w.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS)}},{key:"onLoad",value:function(t){this.callbacks.onLoad.push(t)}},{key:"onRetry",value:function(t){this.callbacks.onRetry.push(t)}},{key:"onReady",value:function(t){if(this.state===Ut)return t(Gt().data)
if(this.callbacks.onReady.length>w.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(j.LIMIT_EXCEEDED," Schemas callback stack."))
return this.callbacks.onReady.push(t)}},{key:"onError",value:function(t){this.state===Bt?t():this.callbacks.onError.push(t)}},{key:"load",value:function(){var t=this,e=Gt()
if(this.state===Ft){this.state="statusLoading",this.callbacks.onLoad.forEach((function(t){return t()}))
var n=w.USE_HTTPS?"https://":"http://"
_t.request("GET","".concat(n).concat(this.url)).then((function(n){var r=n.status,i=n.data
e.data=Object.assign(e.data||{},i),t.metricCollector.addHttpMetric(h,r),t.state=Ut,t.callbacks.onReady.forEach((function(t){return Lt(t,e.data)}))})).catch((function(e){var n=e.status
t.metricCollector.addHttpMetric(h,n),t.state=Bt,t.callbacks.onError.forEach((function(t){return Lt(t,e)})),t.retry()}))}}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Vt(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e}()
function qt(t){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Wt(){var t,e,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return $t(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:t,a:p,f:p.bind(t,4),d:function(e,n){return o=e,a=0,c=t,d.n=n,s}}
function p(n,r){for(a=n,c=r,e=0;!h&&l&&!i&&e<u.length;e++){var i,o=u[e],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=t):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(e=a<2?t:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),e=o[i]){if(!(e=e.call(o,c)))throw TypeError("iterator result is not an object")
if(!e.done)return e
c=e.value,a<2&&(a=0)}else 1===a&&(e=o.return)&&e.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=t}else if((e=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(e){o=t,a=1,c=e}finally{l=1}}return{value:e,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}e=Object.getPrototypeOf
var u=[][r]?e(e([][r]())):($t(e={},r,(function(){return this})),e),h=l.prototype=a.prototype=Object.create(u)
function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,$t(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return c.prototype=l,$t(h,"constructor",l),$t(l,"constructor",c),c.displayName="GeneratorFunction",$t(l,i,"GeneratorFunction"),$t(h),$t(h,i,"Generator"),$t(h,r,(function(){return this})),$t(h,"toString",(function(){return"[object Generator]"})),(Wt=function(){return{w:o,m:d}})()}function $t(t,e,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(t){i=0}($t=function(t,e,n,r){function o(e,n){$t(t,e,(function(t){return this._invoke(e,n,t)}))}e?i?i(t,e,{value:n,enumerable:!r,configurable:!r,writable:!r}):t[e]=n:(o("next",0),o("throw",1),o("return",2))})(t,e,n,r)}function Zt(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}function Kt(t){var e=function(t){if("object"!=qt(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=qt(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==qt(e)?e:e+""}var Jt=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.protocol=w.USE_HTTPS?"https://":"http://",this.url="".concat(w.HORIZON_TRACK_HOST,"/configs"),this._samplingCache={}},(e=[{key:"fetchConfigRemote",value:(n=Wt().m((function t(e){var n,r,i,o
return Wt().w((function(t){for(;;)switch(t.p=t.n){case 0:return t.p=0,t.n=1,_t.request("GET","".concat(this.protocol).concat(this.url,"?tenant=").concat(e,"&platform=js"))
case 1:return r=t.v,i=r.data,o=(null==i||null===(n=i.Config)||void 0===n?void 0:n.sample)||null,this._samplingCache[e]=o,t.a(2,i.Config)
case 2:return t.p=2,t.v,t.a(2,null)}}),t,this,[[0,2]])})),r=function(){var t=this,e=arguments
return new Promise((function(r,i){var o=n.apply(t,e)
function s(t){Zt(o,r,i,s,a,"next",t)}function a(t){Zt(o,r,i,s,a,"throw",t)}s(void 0)}))},function(t){return r.apply(this,arguments)})},{key:"getConfig",value:function(t){return this._samplingCache[t]}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Kt(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e,n,r}(),Qt=function(t){return window.cdaaas&&window.cdaaas.SETTINGS?window.cdaaas.SETTINGS[t]:null},Xt=function(t){return window.utag_data?window.utag_data[t]:null}
const Yt=function(t){try{var e=t.split(".")[1]
if(!e)return null
var n,r=e.replace(/-/g,"+").replace(/_/g,"/")
if("function"!=typeof atob)throw new Error("atob function not supported.")
return n=decodeURIComponent(atob(r).split("").map((function(t){var e=t.charCodeAt(0).toString(16).padStart(2,"0")
return"%".concat(e)})).join("")),JSON.parse(n)}catch(t){return null}}
function te(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ee(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?te(Object(n),!0).forEach((function(e){ae(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ne(){var t,e,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return re(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:t,a:p,f:p.bind(t,4),d:function(e,n){return o=e,a=0,c=t,d.n=n,s}}
function p(n,r){for(a=n,c=r,e=0;!h&&l&&!i&&e<u.length;e++){var i,o=u[e],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=t):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(e=a<2?t:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),e=o[i]){if(!(e=e.call(o,c)))throw TypeError("iterator result is not an object")
if(!e.done)return e
c=e.value,a<2&&(a=0)}else 1===a&&(e=o.return)&&e.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=t}else if((e=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(e){o=t,a=1,c=e}finally{l=1}}return{value:e,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}e=Object.getPrototypeOf
var u=[][r]?e(e([][r]())):(re(e={},r,(function(){return this})),e),h=l.prototype=a.prototype=Object.create(u)
function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,re(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return c.prototype=l,re(h,"constructor",l),re(l,"constructor",c),c.displayName="GeneratorFunction",re(l,i,"GeneratorFunction"),re(h),re(h,i,"Generator"),re(h,r,(function(){return this})),re(h,"toString",(function(){return"[object Generator]"})),(ne=function(){return{w:o,m:d}})()}function re(t,e,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(t){i=0}(re=function(t,e,n,r){function o(e,n){re(t,e,(function(t){return this._invoke(e,n,t)}))}e?i?i(t,e,{value:n,enumerable:!r,configurable:!r,writable:!r}):t[e]=n:(o("next",0),o("throw",1),o("return",2))})(t,e,n,r)}function ie(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}function oe(t){return function(){var e=this,n=arguments
return new Promise((function(r,i){var o=t.apply(e,n)
function s(t){ie(o,r,i,s,a,"next",t)}function a(t){ie(o,r,i,s,a,"throw",t)}s(void 0)}))}}function se(t){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ae(t,e,n){return(e=ce(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t){var e=function(t){if("object"!=se(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=se(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==se(e)?e:e+""}var le=function(){return i("idManager",{loggedIDs:null,anonymousIDs:null,sessionIDs:null})},ue=["GLBID","GST","EXT_ID","globoId"],he="statusReady",de="statusNotReady",pe="statusError",fe=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.state=n?he:de,this.metricCollector=L(),this.url=e,this.bypass=n,this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}},(e=[{key:"onLoad",value:function(t){this.callbacks.onLoad.push(t)}},{key:"onRetry",value:function(t){this.callbacks.onRetry.push(t)}},{key:"onReady",value:function(t){if(this.state===he)return t(this.getClientIDs())
if(this.callbacks.onReady.length>w.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(j.LIMIT_EXCEEDED," IDManager callback stack."))
return this.callbacks.onReady.push(t)}},{key:"onError",value:function(t){this.state===pe?t():this.callbacks.onError.push(t)}},{key:"getAsKeyValue",value:function(){if(!this.isReady())throw new Error("".concat(j.COMPONENT_NOT_READY))
if(this.bypass)return""
var t=this.getClientIDs()
return Object.keys(t).map((function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))})).join("&")}},{key:"getClientIDs",value:function(){var t=le()
return Object.assign(t.loggedIDs||{},t.anonymousIDs||{},t.sessionIDs||{})}},{key:"isReady",value:function(){return this.state===he}},{key:"retry",value:function(){var t=this
this.state="statusScheduled",this.callbacks.onRetry.forEach((function(t){return t()})),setTimeout((function(){t.state=de,t.load()}),w.IDENTIFICATION_LOAD_RETRY_AFTER_MSECS)}},{key:"setLoggedUser",value:function(t,e){if(-1===ue.indexOf(t))throw Error(j.INVALID_AUTH_TOKEN)
var n=le()
n.loggedIDs=Object.assign(n.loggedIDs||{},ae({},t,e))}},{key:"setAnonymousUser",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=le()
if(null==n.anonymousIDs||e){if(!("glb_uid"in t)||!("glb_uid_jwt"in t))throw j.mustBeDefined("glb_uid and glb_uid_jwt")
var r={glb_uid:t.glb_uid,glb_uid_jwt:t.glb_uid_jwt}
n.anonymousIDs=Object.assign(n.anonymousIDs||{},r)}}},{key:"getAnonymousUser",value:function(){return le().anonymousIDs}},{key:"getHsid",value:function(){return le().sessionIDs}},{key:"setSessionID",value:function(t){t.hsid&&(le().sessionIDs={hsid:t.hsid})}},{key:"removeLoggedUser",value:function(){var t=le()
ue.forEach((function(e){t.loggedIDs[e]&&delete t.loggedIDs[e]}))}},{key:"load",value:function(){var t=this
if(this.state===de){this.state="statusLoading",this.callbacks.onLoad.forEach((function(t){return t()}))
var e=w.USE_HTTPS?"https://":"http://"
_t.request("GET","".concat(e).concat(this.url)).then((function(e){var n=e.status,r=e.data
t.metricCollector.addHttpMetric(u,n),t.setSessionID(r),t.setAnonymousUser(r,!1),t.state=he,t.callbacks.onReady.forEach((function(e){return Lt(e,t.getClientIDs())}))})).catch((function(e){var n=e.status
t.metricCollector.addHttpMetric(u,n),t.state=pe,t.callbacks.onError.forEach((function(t){return Lt(t,e)})),t.retry()}))}}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,ce(r.key),r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,e}(),me=function(t,e){var n=le(),r=t||"".concat(w.HORIZON_TRACK_HOST,"/").concat(w.HORIZON_TRACK_IDENTIFICATION_RESOURCE),i=e||!1
return n.instance=new fe(r,i),n.instance.load(),n.instance},ge=function(t){var e=le()
if(!e.instance){var n=!1===w.AVOID_COOKIE_USAGE
me(t,n)}return e.instance},ve=function(){var t=oe(ne().m((function t(){var e,n,r
return ne().w((function(t){for(;;)switch(t.n){case 0:if(e=function(t){return Boolean((null==t?void 0:t.glb_uid)&&(null==t?void 0:t.glb_uid_jwt)&&(null==t?void 0:t.hsid))},n={cookies:function(){if(!w.AVOID_COOKIE_USAGE)return{glb_uid:ot().get("glb_uid"),glb_uid_jwt:ot().get("glb_uid_jwt"),hsid:ot().get("hsid")}},idManager:function(){var t=oe(ne().m((function t(){var n,r,i,o
return ne().w((function(t){for(;;)switch(t.n){case 0:return n=function(){var t=oe(ne().m((function t(e){return ne().w((function(t){for(;;)switch(t.n){case 0:if(e.isReady()){t.n=1
break}return t.n=1,new Promise((function(t,n){e.onError((function(){n(new Error("Error loading IDManager"))})),e.onReady(t)}))
case 1:return t.a(2)}}),t)})))
return function(e){return t.apply(this,arguments)}}(),r=function(){return me()},i=function(){var t=oe(ne().m((function t(){var e,i,o=arguments
return ne().w((function(t){for(;;)switch(t.n){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:void 0,i=ge(),e===i&&(i=r()),t.n=1,n(i)
case 1:return t.a(2,ee(ee({managerInstance:i},i.getAnonymousUser()),i.getHsid()))}}),t)})))
return function(){return t.apply(this,arguments)}}(),t.n=1,i(void 0)
case 1:if(o=t.v,e(o)){t.n=3
break}return t.n=2,i(o.managerInstance)
case 2:o=t.v
case 3:return delete o.managerInstance,t.a(2,o)}}),t)})))
return function(){return t.apply(this,arguments)}}()},r=n.cookies(),e(r)){t.n=2
break}return t.n=1,n.idManager()
case 1:r=t.v
case 2:return t.a(2,r)}}),t)})))
return function(){return t.apply(this,arguments)}}()
const be={getInstance:ge,getContextManager:le,setLoggedUser:function(t,e){if(!w.AVOID_COOKIE_USAGE)throw Error(j.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
t&&0!==t.length||j.mustBeDefined("tokenName"),e&&0!==e.length||j.mustBeDefined("tokenValue"),ge().setLoggedUser(t,e)},removeLoggedUser:function(){if(!w.AVOID_COOKIE_USAGE)throw Error(j.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
ge().removeLoggedUser()},setAnonymousUser:function(t){ge().setAnonymousUser(t)},getAnonymousUser:function(){var t=oe(ne().m((function t(){var e,n,r
return ne().w((function(t){for(;;)switch(t.n){case 0:return t.n=1,ve()
case 1:return n=t.v,r=n.glb_uid_jwt?null===(e=Yt(n.glb_uid_jwt))||void 0===e?void 0:e.glb_uid:void 0,t.a(2,{glb_uid:n.glb_uid,glb_uid_jwt:n.glb_uid_jwt,glb_uid_public:r})}}),t)})))
return function(){return t.apply(this,arguments)}}(),getHsid:function(){var t=oe(ne().m((function t(){var e
return ne().w((function(t){for(;;)switch(t.n){case 0:return t.n=1,ve()
case 1:return e=t.v,t.a(2,e.hsid)}}),t)})))
return function(){return t.apply(this,arguments)}}()}
function ye(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ee(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?ye(Object(n),!0).forEach((function(e){_e(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _e(t,e,n){return(e=Te(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Oe(t){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Se(){var t,e,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag"
function o(n,r,i,o){var c=r&&r.prototype instanceof a?r:a,l=Object.create(c.prototype)
return we(l,"_invoke",function(n,r,i){var o,a,c,l=0,u=i||[],h=!1,d={p:0,n:0,v:t,a:p,f:p.bind(t,4),d:function(e,n){return o=e,a=0,c=t,d.n=n,s}}
function p(n,r){for(a=n,c=r,e=0;!h&&l&&!i&&e<u.length;e++){var i,o=u[e],p=d.p,f=o[2]
n>3?(i=f===r)&&(c=o[(a=o[4])?5:(a=3,3)],o[4]=o[5]=t):o[0]<=p&&((i=n<2&&p<o[1])?(a=0,d.v=r,d.n=o[1]):p<f&&(i=n<3||o[0]>r||r>f)&&(o[4]=n,o[5]=r,d.n=f,a=0))}if(i||n>1)return s
throw h=!0,r}return function(i,u,f){if(l>1)throw TypeError("Generator is already running")
for(h&&1===u&&p(u,f),a=u,c=f;(e=a<2?t:c)||!h;){o||(a?a<3?(a>1&&(d.n=-1),p(a,c)):d.n=c:d.v=c)
try{if(l=2,o){if(a||(i="next"),e=o[i]){if(!(e=e.call(o,c)))throw TypeError("iterator result is not an object")
if(!e.done)return e
c=e.value,a<2&&(a=0)}else 1===a&&(e=o.return)&&e.call(o),a<2&&(c=TypeError("The iterator does not provide a '"+i+"' method"),a=1)
o=t}else if((e=(h=d.n<0)?c:n.call(r,d))!==s)break}catch(e){o=t,a=1,c=e}finally{l=1}}return{value:e,done:h}}}(n,i,o),!0),l}var s={}
function a(){}function c(){}function l(){}e=Object.getPrototypeOf
var u=[][r]?e(e([][r]())):(we(e={},r,(function(){return this})),e),h=l.prototype=a.prototype=Object.create(u)
function d(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,we(t,i,"GeneratorFunction")),t.prototype=Object.create(h),t}return c.prototype=l,we(h,"constructor",l),we(l,"constructor",c),c.displayName="GeneratorFunction",we(l,i,"GeneratorFunction"),we(h),we(h,i,"Generator"),we(h,r,(function(){return this})),we(h,"toString",(function(){return"[object Generator]"})),(Se=function(){return{w:o,m:d}})()}function we(t,e,n,r){var i=Object.defineProperty
try{i({},"",{})}catch(t){i=0}(we=function(t,e,n,r){function o(e,n){we(t,e,(function(t){return this._invoke(e,n,t)}))}e?i?i(t,e,{value:n,enumerable:!r,configurable:!r,writable:!r}):t[e]=n:(o("next",0),o("throw",1),o("return",2))})(t,e,n,r)}function Ie(t,e,n,r,i,o,s){try{var a=t[o](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,i)}function Te(t){var e=function(t){if("object"!=Oe(t)||!t)return t
var e=t[Symbol.toPrimitive]
if(void 0!==e){var n=e.call(t,"string")
if("object"!=Oe(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t)
return"symbol"==Oe(e)?e:e+""}var Ce="stateNotReady",xe="stateLoading",je=["web","instant-article","app"]
const Ae=function(){return t=function t(){var n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"web"
if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tenant=r||Qt("SITE_ID")||Xt("ut.profile")||"unknown",this.deviceGroup=o||Qt("MOBILE_GROUP")||Xt("platform")||"unknown",this.initialDelay=6e4,this.defaultContentType=s,-1===je.indexOf(a))throw Error(j.INVALID_ENVIRONMENT)
this.environment=a,this.validator=W,this.clientVersion=w.PACKAGE_VERSION,this.state=Ce,this.referer=document.referrer
var c=null,l=null,u=null,h=null,d=null,p=null
this.targetHorizonClientUUID=0
var f=function(){return i("horizonActionInfo",{horizonActionSequence:0,horizonClientContextID:e()()})}
this.getHorizonActionSequence=function(){var t=f()
return 2147483647===t.horizonActionSequence&&(t.horizonActionSequence=0),t.horizonActionSequence+=1,t.horizonActionSequence},this.getHorizonClientContextID=function(){return f().horizonClientContextID},this.getHorizonActionExtraAttributes=function(){return""},this.updateHorizonClientContextID=function(){f().horizonClientContextID=e()()},this.setMetricsCollector=function(t){h=t},this.getMetricsCollector=function(){if(!h){var t=L()
n.setMetricsCollector(t)}return h},this.metricsReport=new Q(this.getMetricsCollector()),this.setSamplingManager=function(t){p=t},this.getSamplingManager=function(){if(!p){var t=((e=i("sampling",{})).manager||(e.manager=new Jt),e.manager)
n.setSamplingManager(t)}var e
return p},this.loadConfig(this.tenant),this.setMetricsManager=function(t){d=t},this.getMetricsManager=function(){if(!d){var t=(e=w.METRICS_SEND_INTERVAL,r=n.initialDelay,(o=i("metrics",{})).metricManager||(o.metricManager=new tt(e,r)),o.metricManager)
n.setMetricsManager(t)}var e,r,o
return d},this.setSchemasProvider=function(t){c=t},this.getSchemasProvider=function(){if(!c){var t=((e=Gt()).provider||(e.provider=new zt("".concat(w.HORIZON_SCHEMAS_HOST,"/schemas"))),e.provider)
n.setSchemasProvider(t)}var e
return c},this.setEventBus=function(t){l=t},this.getEventBus=function(){if(!l){var t=Mt(n.tenant,n.deviceGroup,n.environment,n.getIdManager())
n.setEventBus(t)}return l},this.setIdManager=function(t){u=t},this.getIdManager=function(){if(!u){var t=be.getInstance()
n.setIdManager(t)}return u},this.isReady=function(){return!!c&&!!u&&n.validator.isReady()&&c.isReady()&&u.isReady()},this.startScheduler=function(t){setTimeout((function(){n.sendMetrics(),(new rt).every(w.metricsInterval).call((function(){return n.sendMetrics()})).start()}),t)},this.startScheduler(this.initialDelay),this.normalizeUUID=function(t){for(var e=[],n=0;n<t.length;n+=2){var r=t.substr(n,2)
e.push(parseInt(r,16))}return((e[0]<<24|e[1]<<16|e[2]<<8|e[3])+Math.pow(2,31))/(Math.pow(2,32)-1)},this.targetHorizonClientUUID=this.normalizeUUID(w.HORIZON_CLIENT_UUID),window.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&n.unload()}))},(n=[{key:"loadConfig",value:(r=Se().m((function t(e){var n
return Se().w((function(t){for(;;)switch(t.n){case 0:return n=this.getSamplingManager(),t.n=1,n.fetchConfigRemote(e)
case 1:return t.a(2)}}),t,this)})),o=function(){var t=this,e=arguments
return new Promise((function(n,i){var o=r.apply(t,e)
function s(t){Ie(o,n,i,s,a,"next",t)}function a(t){Ie(o,n,i,s,a,"throw",t)}s(void 0)}))},function(t){return o.apply(this,arguments)})},{key:"useDefaultContentType",value:function(t){this.defaultContentType=t}},{key:"setValidator",value:function(t){this.validator=t}},{key:"setReferer",value:function(t){this.referer=t||document.referrer}},{key:"unload",value:function(){this.flush()}},{key:"getScopeInfo",value:function(t,n){var r={url:document.location.href,actionTs:+Date.now(),horizonClientVersion:this.clientVersion,horizonClientReferer:this.referer,horizonRelationId:t,horizonActionUUID:e()(),horizonActionSequence:this.getHorizonActionSequence(),horizonClientContextID:this.getHorizonClientContextID(),horizonActionExtraAttributes:this.getHorizonActionExtraAttributes()}
return n&&(r.horizonSampling={sampling:n.sampling}),r}},{key:"getSamplingConfig",value:function(t){var e=this.getSamplingManager().getConfig(this.tenant)
if(e){var n=e.find((function(e){return e.schema===t.id}))
if(n)return n}}},{key:"sendMetrics",value:function(){if(this.getMetricsManager().shouldSendMetricsNow(this.tenant)){var t=this.metricsReport.reportAllMetrics(this.tenant)
this.send([t])}}},{key:"validateBeforeEnqueue",value:function(t){var e=this.getSchemasProvider().get(t.id,t.version)
this.validator.validateFor(t,e,this.tenant),this.getMetricsCollector().addMetric(p,y,1,this.tenant)}},{key:"onReady",value:function(t){this.validator.isReady()?this.getSchemasProvider().isReady()?this.getIdManager().isReady()?(this.state="stateReady",t()):(this.state=xe,this.getIdManager().onReady(t),this.getIdManager().load()):(this.state=xe,this.getSchemasProvider().onReady(t),this.getSchemasProvider().load()):(this.state=xe,this.validator.onReady(t),this.validator.load())}},{key:"flush",value:function(){var t=this
this.isReady()?this.getEventBus().flush():this.onReady((function(){return t.flush()}))}},{key:"send",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(null!=n&&"string"!=typeof n)throw new Error("".concat(j.INVALID_RELATION_ID," Wrong relationId type. It should be a String: actual type is ").concat(Oe(n)));[].concat(t).forEach((function(t){var r=e.getSamplingConfig(t)
r&&e.targetHorizonClientUUID>r.sampling||(e.validator.validateArgs(t,e.tenant),e.sendWithInfo(t,e.getScopeInfo(n,r)))}))}},{key:"sendWithInfo",value:function(t,e){var n=this
if(!this.isReady())return this.state===Ce&&this.flush(),void this.onReady((function(){return n.sendWithInfo(t,e)}))
this.validateBeforeEnqueue(t)
var r=Ee(Ee({},e),t)
r.contentType||(this.defaultContentType||j.mustBeDefined("contentType"),r.contentType=this.defaultContentType),this.getEventBus().enqueue(r)}},{key:"newContextId",value:function(){this.updateHorizonClientContextID()}},{key:"getContextId",value:function(){return this.getHorizonClientContextID()}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Te(r.key),r)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t
var t,n,r,o}()
var Pe={setLoggedUser:be.setLoggedUser,removeLoggedUser:be.removeLoggedUser,setAnonymousUser:be.setAnonymousUser,getAnonymousUser:be.getAnonymousUser,getHsid:be.getHsid}})(),r})(),t.exports=r()},function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var r=n(10),i=function(){function t(t,e){this.dt=t,this.ins=e,this.type="throttle",this.out=null,this.id=null}return t.prototype._start=function(t){this.out=t,this.ins._add(this)},t.prototype._stop=function(){this.ins._remove(this),this.out=null,this.id=null},t.prototype.clearInterval=function(){var t=this.id
null!==t&&clearInterval(t),this.id=null},t.prototype._n=function(t){var e=this,n=this.out
n&&(this.id||(n._n(t),this.id=setInterval((function(){e.clearInterval()}),this.dt)))},t.prototype._e=function(t){var e=this.out
e&&(this.clearInterval(),e._e(t))},t.prototype._c=function(){var t=this.out
t&&(this.clearInterval(),t._c())},t}()
e.default=function(t){return function(e){return new r.Stream(new i(t,e))}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"ElementViewGroup",(function(){return h}))
var r,i=n(9),o=n.n(i),s=n(82),a=n(109),c=n(110),l=n(100)
let u;(r=class extends(Object(c.eventable)(Object(a.drawless)(s.Engine.Component))){constructor(t){super(t),this.children=[],this.pointer=0,this.handleParentVisibility=t=>{this.props.id||t?this.props.id===t&&this.activateChildren():this.activateChildren()},o()(t.radius)||(this.props.radius=1)}getChildContext(){return{parentTrigger:this.context.parentTrigger,parentGroup:this}}activateChildren(){const t=Math.max(this.pointer-this.props.radius,0),e=Math.min(this.pointer+this.props.radius+1,this.children.length)
let n,r=this.children.slice(t,e),i=!1
for(n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=t+n,i=!0)
if(!i)for(r=[].concat(this.children.slice(0,t),this.children.slice(e,this.children.length)),n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=this.children.indexOf(r[n]))}registerChild(t){this.children.push(t)}unregisterChild(t){Object(l.pull)(this.children,t)}componentDidMount(){this.context.parentTrigger.on("visible",this.handleParentVisibility)}componentWillUnmount(){this.context.parentTrigger.off("visible",this.handleParentVisibility)}}).displayName="evg",u=r
const h=u},function(t,e,n){"use strict"
n.r(e),n.d(e,"ReporterCascadeAggregator",(function(){return i}))
var r=n(122)
class i extends r.AbstractReporter{constructor(...t){return super(),this.whitelist=["reporters","debug"],this.reporters=t,new Proxy(this,{get:(t,e)=>{if(t.whitelist.includes(e))return t[e]
for(const n of t.reporters){const t=n[e]
if(void 0!==t)return t}}})}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"Scoreboard",(function(){return p}))
var r=n(9),i=n.n(r),o=n(102),s=n.n(o),a=n(82),c=a.Engine.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.Engine.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.Engine.createElement("g",{id:"vs"},a.Engine.createElement("g",null,a.Engine.createElement("polygon",{className:"versus",points:"12.6666667 4.27333333 11.7266667 3.33333333 8 7.06 4.27333333 3.33333333 3.33333333 4.27333333 7.06 8 3.33333333 11.7266667 4.27333333 12.6666667 8 8.94 11.7266667 12.6666667 12.6666667 11.7266667 8.94 8"}),a.Engine.createElement("polygon",{points:"0 0 16 0 16 16 0 16"})))))
function l(){return c}var u=a.Engine.createElement(l,null),h=a.Engine.createElement(l,null)
function d(t){const{away:e,home:n}=t
return i()(e.penalties)&&i()(n.penalties)&&e.penalties+n.penalties>0?a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),a.Engine.createElement("span",{className:"score-penalties"},"(",n.penalties),u,a.Engine.createElement("span",{className:"score-penalties"},e.penalties,")"),a.Engine.createElement("span",{className:"score-number"},e.score)):a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),h,a.Engine.createElement("span",{className:"score-number"},e.score))}function p(t){const{away:e,home:n,headline:r}=t,i=s()("scoreboard-bastian-feed",{headline:r})
return a.Engine.createElement("div",{className:i},a.Engine.createElement("div",{className:"scoreboard-home-team",title:n.name},a.Engine.createElement("span",{className:"shortName"},n.shortName),a.Engine.createElement("img",{className:"crest",src:n.crest,loading:"lazy"})),a.Engine.createElement(d,{away:e,home:n}),a.Engine.createElement("div",{className:"scoreboard-away-team",title:e.name},a.Engine.createElement("img",{className:"crest",src:e.crest,loading:"lazy"}),a.Engine.createElement("span",{className:"shortName"},e.shortName)))}},function(t,e,n){"use strict"
n.r(e),n.d(e,"Horizon",(function(){return v}))
var r=n(1),i=n.n(r),o=n(138),s=n(139),a=n.n(s),c=n(10),l=n.n(c),u=n(20),h=n(75),d=n(23),p=(n(144),n(56)),f=n(24)
let m
class g extends h.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==f.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){d.Globals.location.hostname.includes(".qa.")&&o.Settings.useQAConfiguration()
const t=p.Settings.get("PORTAL"),e=p.Settings.get("DEVICE_GROUP")
i()(t)&&i()(e)?this.client=new o.HorizonClient(t.toLowerCase(),e.toLowerCase(),"feed"):Object(u.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const t=l.a.periodic(1e4).filter(()=>"visible"===d.Globals.document.visibilityState),e=l.a.periodic(6e4)
l.a.merge(t,e).compose(a()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report(t,e){const n=new t(e).toSend()
this.client&&this.client.send(n)}}m=new g
const v=m},function(t,e,n){"use strict"
n.r(e),n.d(e,"HorizonBase",(function(){return O})),n.d(e,"PostClick",(function(){return S})),n.d(e,"PostView",(function(){return w})),n.d(e,"PostViewHeadline",(function(){return I}))
var r=n(124),i=n.n(r),o=n(25),s=n.n(o),a=n(117),c=n(132),l=n(218),u=n(135),h=n(22),d=n(221),p=n(136),f=(n(122),n(20))
function m(){return(m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const g={destaque:"d",basico:"b",video:"v",tempo_real:"r",card:"a",cobertura:"u",placeholder:"h",especial_publicitario:"e",publicidade:"p",component:"c"},v={[c.$Advertises.staticName]:"a",[l.$Cards.staticName]:"d",[u.$DistributedComponents.staticName]:"c",[h.$Falkor.staticName]:"f",[d.$PushStream.staticName]:"p",[p.$Recommendation.staticName]:"r"},b=()=>1,y=(t,e)=>n=>{const r=t[n]
return s()(r)?e:r},E={feedType:y({automatico:"a",editorial:"e",elastic:"l",folder:"f",produto:"p",semantico:"s"},"ukn"),format:y(g,"ukn"),grouped:b,pinned:b,source:y(v,"ukn")},_=(t,e)=>e in E?E[e](t):t
class O{constructor(t){this.reporter=t}toSend(){const t={},e=new Set([...this.fields,...this.optionalFields])
for(const r of e){let e
try{e=this.reporter[r]}catch(n){Object(f.error)(n,this.reporter.debug())}if(s()(e)){if(this.fields.includes(r))throw new Error('Field "'+r+'" is required in action sending')}else t[r]=e}return{id:this.schema,version:this.version,properties:i()(t,_)}}}class S extends O{constructor(...t){super(...t),this.schema="bastian-post-click",this.version="1.1",this.fields=["feedId","position","postId"],this.optionalFields=["areaDesktop","contentId"]}}class w extends O{constructor(...t){super(...t),this.schema="bastian-post-view",this.version="2.0",this.fields=["feedId","postId","contentType","feedType","feedViewTime","format","position","size","source","viewTime"],this.optionalFields=["contentId","areaDesktop","attachment","contentStatus","grouped","pinned","wordCountSummary","wordCountTitle"]}}class I extends w{toSend(){const t=super.toSend()
return m({},t,{properties:m({},t.properties,{format:g.destaque,areaDesktop:a.DESKTOP_AREAS.HEADLINE,size:a.POST_SIZES.LARGE})})}}},function(t,e,n){"use strict"
function r(t){return JSON.parse(JSON.stringify(t))}n.r(e),n.d(e,"cloneJSON",(function(){return r}))},function(t,e,n){"use strict"
n.r(e),n.d(e,"getCategoryColor",(function(){return o}))
var r=n(147),i=n.n(r)
const o=()=>i()(window,"utag_data.cor_pagina",i()(window,"cdaaas.SETTINGS.COR","#000"))},function(t,e,n){var r=n(148)
t.exports=function(t,e,n){var i=null==t?void 0:r(t,e)
return void 0===i?n:i}},function(t,e,n){var r=n(149),i=n(153)
t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[i(e[n++])]
return n&&n==o?t:void 0}},function(t,e,n){var r=n(3),i=n(150),o=n(151),s=n(121)
t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:o(s(t))}},function(t,e,n){var r=n(3),i=n(38),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/
t.exports=function(t,e){if(r(t))return!1
var n=typeof t
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(s.test(t)||!o.test(t)||null!=e&&t in Object(e))}},function(t,e,n){var r=n(152),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=r((function(t){var e=[]
return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,(function(t,n,r,i){e.push(r?i.replace(o,"$1"):n||t)})),e}))
t.exports=s},function(t,e){t.exports=function(t){return t}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(155),i=n(158)
t.exports=function(t){if(null==t)return!0
if("string"==typeof t||i(t))return!t.length
if("object"==typeof t){var e=!0
return r(t,(function(){return e=!1,!1})),e}return!0}},function(t,e,n){var r=n(156),i=n(157)
t.exports=function(t,e,n){i(t,(function(i,o){if(r(t,o))return e.call(n,t[o],o,t)}))}},function(t,e){t.exports=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},function(t,e,n){var r,i,o=n(156)
function s(t,e,n,r){return t.call(r,e[n],n,e)}t.exports=function(t,e,n){var a,c=0
for(a in null==r&&function(){for(var t in i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=!0,{toString:null})r=!1}(),t)if(!1===s(e,t,a,n))break
if(r)for(var l=t.constructor,u=!!l&&t===l.prototype;(a=i[c++])&&("constructor"===a&&(u||!o(t,a))||t[a]===Object.prototype[a]||!1!==s(e,t,a,n)););}},function(t,e,n){var r=n(159),i=Array.isArray||function(t){return r(t,"Array")}
t.exports=i},function(t,e,n){var r=n(160)
t.exports=function(t,e){return r(t)===e}},function(t,e){t.exports=function(t){return Object.prototype.toString.call(t).slice(8,-1)}},function(t,e,n){"use strict"
n.r(e),n.d(e,"isLiveVideo",(function(){return o}))
var r=n(1),i=n.n(r)
const o=t=>i()(t)&&"live"===String(t).toLowerCase()},function(t,e,n){"use strict"
n.r(e),n.d(e,"MAB",(function(){return o})),n.d(e,"Alternative",(function(){return s}))
var r=n(226),i=n(163)
class o{constructor(){const t=Object(i.getCanonicalUri)()
this.client=(new r.ABFactory).mab(),this.client.addHeader({"x-canonical-uri":t})}createExperiment(t,{generateIncrement:e=!1}={}){try{return this.client.createExperiment(t,e)}catch(n){return console.error(n.message),null}}async choose(t,{glbExpIdToken:e=null,headers:n=null}={}){try{const{userId:r,userIdType:o,hsId:a}=await Object(i.getTrackingData)(this.client),c=await this.client.choose(t,r,e,a,n,o)
return c.experiments.map(t=>new s(this.client,t,c.glbExpIdToken,r,o,a))}catch(r){return console.warn("[MAB][error]:",r),[]}}}class s{constructor(t,e,n,r,i,o){this.mab=t,this.alt=e,this.glbExpIdToken=n,this.userId=r,this.userIdType=i,this.hsId=o}get name(){return this.alt.name}get alternative(){return this.alt.abAlternative}get arm(){return this.alt.arm}increment({headers:t=[]}={}){const{name:e,arm:n,testId:r,abAlternative:i}=this.alt
this.mab.increment({experiment:e,arm:n,testId:r,abAlternative:i},this.userId,this.glbExpIdToken,this.hsId,t,this.userIdType)}reward({headers:t=[]}={}){const{name:e,arm:n,testId:r,abAlternative:i}=this.alt
this.mab.reward({experiment:e,arm:n,testId:r,abAlternative:i},this.userId,this.glbExpIdToken,this.hsId,t,this.userIdType)}}},function(t,e,n){"use strict"
n.r(e),n.d(e,"ABUtils",(function(){return a})),n.d(e,"getCookie",(function(){return c})),n.d(e,"getTrackingData",(function(){return l})),n.d(e,"getCanonicalUri",(function(){return u}))
var r=n(55),i=n(56)
let o={}
o=n(138).IDManager
const s=()=>({device:r.At.smallScreen?"mobile":"web",tenant:i.Settings.get("PORTAL")}),a={getEnv:()=>{const t={"qa-https":t=>t.includes(".qa."),local:t=>t.includes("localhost")}
for(const[e,n]of Object.entries(t))if(n(window.location.href))return e
return"prod-https"},getContext:s,buildName:t=>t(s()),canRun:({tenants:t=null,check:e=(()=>!0),devices:n=null}={})=>{const{device:r,tenant:i}=s(),o=null===n||n.includes(r),a=e(),c=null===t||t.includes(i)
return o&&a&&c}},c=t=>{var e
return(null===(e=document.cookie.split("; ").find(e=>e.startsWith(t+"=")))||void 0===e?void 0:e.split("=")[1])||null},l=async t=>{const e={globoid:t.UserIdType.GLOBOID,anonymous:t.UserIdType.GLB_UID},n={anonymous:async()=>{const{glb_uid:t}=await o.getAnonymousUser()||{glb_uid:null}
return t?{userId:t,userIdType:e.anonymous}:null},globoid:()=>{const t=localStorage.getItem("glb_ppid_data")
try{const{glbId:n}=JSON.parse(t)
return{userId:n,userIdType:e.globoid}}catch(n){return null}},horizonSession:async()=>{const t=await o.getHsid()
return t?{hsId:t}:null}},r={userId:null,userIdType:null,hsId:null}
for(const i of Object.values(n)){const t=await i()
t&&Object.assign(r,t)}return r},u=()=>window.location.href||""},function(t,e,n){"use strict"
function r(){const t=new Map
return{get size(){return t.size},has:e=>t.has(e),empty(t){return!this.has(t)},save({key:e=null,alt:n=null}={}){const r=null!==n&&n.alt
if(!r)return;(null!==e||r&&n.alt.name)&&t.set(e||n.alt.name,n)},alternative:e=>t.get(e)||null,remove(e){t.delete(e)}}}n.r(e),n.d(e,"createABStore",(function(){return r})),n.d(e,"ABStore",(function(){return i}))
const i=r()},function(t,e,n){var r=n(166),i=n(167)
t.exports=function(t,e,n,o){return t=r(t),n=n||"...",e=o?e+1:e,(t=i(t)).length<=e?t:(t=t.substr(0,e-n.length),(t=o?t.substr(0,t.lastIndexOf(" ")):i(t))+n)}},function(t,e){t.exports=function(t){return null==t?"":t.toString()}},function(t,e,n){var r=n(166),i=n(168),o=n(169),s=n(170)
t.exports=function(t,e){return t=r(t),o(s(t,e=e||i),e)}},function(t,e){t.exports=[" ","\n","\r","\t","\f","\v"," "," ","᠎"," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　"]},function(t,e,n){var r=n(166),i=n(168)
t.exports=function(t,e){t=r(t),e=e||i
for(var n,o,s=0,a=t.length,c=e.length,l=!0;l&&s<a;)for(l=!1,n=-1,o=t.charAt(s);++n<c;)if(o===e[n]){l=!0,s++
break}return s>=a?"":t.substr(s,a)}},function(t,e,n){var r=n(166),i=n(168)
t.exports=function(t,e){t=r(t),e=e||i
for(var n,o,s=t.length-1,a=e.length,c=!0;c&&s>=0;)for(c=!1,n=-1,o=t.charAt(s);++n<a;)if(o===e[n]){c=!0,s--
break}return s>=0?t.substring(0,s+1):""}},function(t,e,n){"use strict"
n.r(e)
var r=n(82),i=n(146)
const o={mobile:{width:36,height:36},desktop:{width:48,height:48}}
var s=r.Engine.createElement("g",null,r.Engine.createElement("rect",{fill:"#fff",height:"24",width:"24"})),a=r.Engine.createElement("rect",{height:"10",width:"7",x:"8.5",y:"7"}),c=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"6",y:"8.5"}),l=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"16.5",y:"8.5"})
e.default=t=>{const{device:e="mobile"}=t,n={width:o[e].width,height:o[e].height}
return r.Engine.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:n.height,width:n.width,viewBox:"0 0 24 24",style:{marginBottom:"mobile"===e?12:0,borderRadius:"50%"}},s,r.Engine.createElement("g",{fill:Object(i.getCategoryColor)()},a,c,l))}},function(t,e,n){"use strict"
n.r(e),n.d(e,"ItemIndex",(function(){return s}))
var r=n(26)
const i=[],o=t=>{const e=Object(r.get)(t,"state.data.source")
return"$Advertises"!==e&&"$DistributedComponents"!==e||!0===Object(r.get)(t,"_refs.child.isBoxed")}
class s{constructor(){this.items=[],i.push(this)}register(t){this.items.push(t)}getPosition(t){let e,n=0
for(e of this.items)if(o(e)&&(n+=1),e===t)return n
return-1}clear(){this.items.splice(0,this.items.length)}static destroy(){i.forEach(t=>t.clear()),i.splice(0,i.length)}}s.HEADLINE_PLACEHOLDER="headline_placeholder"},function(t,e,n){var r=n(174),i=n(175),o=n(176),s=n(3),a=n(177),c=n(179),l=n(180),u=n(181),h=Object.prototype.hasOwnProperty
t.exports=function(t){if(null==t)return!0
if(a(t)&&(s(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||u(t)||o(t)))return!t.length
var e=i(t)
if("[object Map]"==e||"[object Set]"==e)return!t.size
if(l(t))return!r(t).length
for(var n in t)if(h.call(t,n))return!1
return!0}},function(t,e,n){var r=n(35)(Object.keys,Object)
t.exports=r},function(t,e){var n=Object.prototype.toString
t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,n){var r=n(5),i=n(178)
t.exports=function(t){return null!=t&&i(t.length)&&!r(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(){return!1}},function(t,e,n){"use strict"
n.r(e),n.d(e,"isPostVideoRedirectAvailableForPost",(function(){return y})),n.d(e,"isVideoPreviewAvailableForPost",(function(){return _})),n.d(e,"isVideoFullAvailableForPost",(function(){return E})),n.d(e,"canShowVideoPreviewInPost",(function(){return w})),n.d(e,"canPostVideoRedirectToVideoPage",(function(){return I})),n.d(e,"canShowTagInPost",(function(){return T})),n.d(e,"onPostView",(function(){return x})),n.d(e,"onPostClick",(function(){return j}))
var r=n(23),i=n(56),o=n(183),s=n(164),a=n(137),c=n(163)
function l(){return(l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const u="postVideoFull",h="postVideoRedirectAB",d="postTagAB",p=t=>s.ABStore.alternative(t),f=({contentType:t})=>"video"===t,m=()=>Object(a.isEnvQA)()?"https://ab.qa.globoi.com":"https://ab.g.globo"
let g,v,b
g=({tenantId:t})=>t===i.Settings.get("PORTAL"),v=({content:t,tenantId:e})=>{const n=[r.Globals.location.hostname],i=new URL(t.url)
return"ge"===e&&(n.push("globoesporte.globo.com"),n.push("ge.globo.com"),n.push("globoesporte.qa.globoi.com"),n.push("ge.qa.globoi.com")),i&&n.includes(i.hostname)},b=({content:t})=>t.url===r.Globals.location.href
const y=t=>Boolean(p(h))&&f(t)&&g(t)&&v(t)&&!b(t),E=t=>Boolean(p(u))&&f(t),_=t=>{if(!Object(o.hasExperimentFeatVideoPreviewSupport)())return!1
const{content:e,media:n,contentType:r}=t
if(!["basico","materia","materia_video"].includes(r))return!1
const i=(e.video||{}).previewUrl
return"video"===n&&Boolean(i)},O=(t={})=>{var e,n
return null==t||null===(e=t.content)||void 0===e||null===(n=e.chapeu)||void 0===n?void 0:n.tag},S=(t={})=>{const{contentType:e}=t
return["basico","materia","materia_video"].includes(e)&&Boolean(O(t))},w=t=>Object(o.isExperimentFeatVideoPreviewEnabled)()&&_(t),I=t=>{const e=(p(h)||{}).alternative
return y(t)&&"pagevideo"===e},T=t=>{const e=(p(d)||{}).alternative
return S(t)&&"new-labels"===e},C=[{name:"postVideoPreviewAB",isAvailableForPost:_,impressionOnPostView:!0,conversionOnPostClick:!0},{name:u,isAvailableForPost:E,impressionOnPostView:!0,conversionOnPostClick:!0},{name:h,isAvailableForPost:y,impressionOnPostView:!0,conversionOnPostClick:!0},{name:d,isAvailableForPost:S,impressionOnPostView:!0,conversionOnPostClick:!0,buildParams:(t={},e)=>{var n
const{content:r,position:i,isClickOnMedia:o}=t,s=null==r||null===(n=r.video)||void 0===n?void 0:n.id,a=s?"thumb-video":"thumb-imagem",c=null!=r&&r.image?a:null
let l=s||null
e&&(l=o?"click-thumb":"click-title")
return{context:[{name:O(t)+"|"+c,value:(i||null)+"|"+((null==r?void 0:r.url)||null)+"|"+l}]}}}],x=t=>{if(t.experiment){const{experiment:n,alternative:i,trackId:o,hsid:s,userId:a,userIdType:u,glbExpIdToken:h}=t.experiment,d={experiment:n,alternative:i,testId:o,hsIdToken:s,userId:a,userIdType:u,glbExpIdToken:h}
e=t.experiment.trackId,r.Globals.bstn.lastTestId!==e&&((t=>{const e=m(),n=l({},t,{event:"impression"}),i=Object(c.getCanonicalUri)()
fetch(e+"/event",{method:"POST",headers:{"Content-Type":"application/json","x-canonical-uri":i},body:JSON.stringify(n)}).finally(()=>r.Globals.bstn.hasSentImpression=!0)})(d),r.Globals.bstn.lastTestId=t.experiment.trackId)}var e
C.forEach(e=>{const n=p(e.name)
n&&n.impression&&e.impressionOnPostView&&e.isAvailableForPost(t)&&n.impression(e.buildParams?e.buildParams(t):null)})},j=(t,e={})=>{if(t.experiment){const{experiment:e,alternative:n,trackId:r,hsid:i,userId:o,userIdType:s,glbExpIdToken:a}=t.experiment;(t=>{const e=m(),n=l({},t,{event:"conversion"}),r=Object(c.getCanonicalUri)()
fetch(e+"/event",{method:"POST",headers:{"Content-Type":"application/json","x-canonical-uri":r},body:JSON.stringify(n)})})({experiment:e,alternative:n,testId:r,hsIdToken:i,userId:o,userIdType:s,glbExpIdToken:a})}C.forEach(n=>{const r=p(n.name)
if(r&&r.conversion&&n.conversionOnPostClick&&n.isAvailableForPost(t)){let i
e.target&&(i=Boolean(e.target.closest(".feed-media-wrapper"))),r.conversion(n.buildParams?n.buildParams(l({},t,{isClickOnMedia:i}),!0):null)}})}},function(t,e,n){"use strict"
n.r(e),n.d(e,"hasExperimentFeatVideoPreviewSupport",(function(){return s})),n.d(e,"isExperimentFeatVideoPreviewEnabled",(function(){return a}))
var r=n(224),i=n(164)
const o=()=>(i.ABStore.alternative("postVideoPreviewAB")||{}).alternative,s=()=>Object(r.hasVideoPreviewSupport)("preview-all"===o()),a=()=>!("control"===o())&&s()},function(t,e,n){"use strict"
n.r(e),n.d(e,"setViewportObserver",(function(){return i})),n.d(e,"observeElement",(function(){return o})),n.d(e,"unobserveElement",(function(){return s})),n.d(e,"hasIntersectionObserverSupport",(function(){return a}))
var r=n(20)
let i,o,s,a
i=({options:t,observerName:e,callback:n})=>{if(e&&n)return window[e]=new IntersectionObserver(n,t),window[e]
Object(r.warn)("ViewportObserver :: setViewportObserver - requires observerName and callback")},o=(t,e)=>e&&window[t]&&window[t].observe(e),s=(t,e)=>e&&window[t]&&window[t].unobserve(e),a=()=>"IntersectionObserver"in window},function(t,e,n){"use strict"
n.r(e)
var r=n(173),i=n.n(r)
e.default=t=>!t||i()(t)},function(t,e,n){"use strict"
n.r(e),n.d(e,"setupVideoPreviewViewportObserver",(function(){return m})),n.d(e,"observeElement",(function(){return p})),n.d(e,"unobserveElement",(function(){return f})),n.d(e,"mobileCallback",(function(){return h})),n.d(e,"shouldPlay",(function(){return d}))
var r=n(55),i=(n(82),n(23)),o=n(184),s=n(71),a=n(70),c=n(183)
const l="feed-post-video-viewport-observer",u={root:null,rootMargin:"-100px 0px -20px 0px",threshold:1},h=t=>{Object(s.triggerDomEvent)(a.VIDEOPREVIEW_INTERSECT,i.Globals.window,e=>{e.data=t})},d=(t,e)=>{const n=e.find(e=>e.target.isSameNode(t))
if(!n||!n.isIntersecting)return!1
return!(e.lastIndexOf(t=>t.isIntersecting)>e.indexOf(n))},p=(t,e)=>{Object(o.observeElement)(l,t),i.Globals.window.addEventListener(a.VIDEOPREVIEW_INTERSECT,e)},f=(t,e)=>{Object(o.unobserveElement)(l,t),i.Globals.window.removeEventListener(a.VIDEOPREVIEW_INTERSECT,e)},m=()=>{Object(c.isExperimentFeatVideoPreviewEnabled)()&&r.At.smallScreen&&Object(o.setViewportObserver)({observerName:l,options:u,callback:h})}},function(t,e,n){"use strict"
n.r(e),n.d(e,"whichMedia",(function(){return o}))
var r=n(185),i=n(24)
const o=({image:t,video:e})=>Object(r.default)(t)?null:Boolean(e)&&Boolean(e.id)&&!i.Configs.get("photoOverVideo")?"video":"photo"},function(t,e,n){t.exports="12.14.1",t.exports.default=t.exports},function(t,e,n){var r=n(190)
t.exports=function(t){return r(t,5)}},function(t,e,n){var r=n(191),i=n(192),o=n(193),s=n(194),a=n(196),c=n(198),l=n(200),u=n(201),h=n(203),d=n(205),p=n(206),f=n(175),m=n(207),g=n(208),v=n(209),b=n(3),y=n(179),E=n(211),_=n(6),O=n(212),S=n(34),w={}
w["[object Arguments]"]=w["[object Array]"]=w["[object ArrayBuffer]"]=w["[object DataView]"]=w["[object Boolean]"]=w["[object Date]"]=w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Map]"]=w["[object Number]"]=w["[object Object]"]=w["[object RegExp]"]=w["[object Set]"]=w["[object String]"]=w["[object Symbol]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w["[object Error]"]=w["[object Function]"]=w["[object WeakMap]"]=!1,t.exports=function t(e,n,I,T,C,x){var j,A=1&n,P=2&n,N=4&n
if(I&&(j=C?I(e,T,C,x):I(e)),void 0!==j)return j
if(!_(e))return e
var R=b(e)
if(R){if(j=m(e),!A)return l(e,j)}else{var k=f(e),D="[object Function]"==k||"[object GeneratorFunction]"==k
if(y(e))return c(e,A)
if("[object Object]"==k||"[object Arguments]"==k||D&&!C){if(j=P||D?{}:v(e),!A)return P?h(e,a(j,e)):u(e,s(j,e))}else{if(!w[k])return C?e:{}
j=g(e,k,A)}}x||(x=new r)
var M=x.get(e)
if(M)return M
x.set(e,j),O(e)?e.forEach((function(r){j.add(t(r,n,I,r,e,x))})):E(e)&&e.forEach((function(r,i){j.set(i,t(r,n,I,i,e,x))}))
var L=N?P?p:d:P?keysIn:S,H=R?void 0:L(e)
return i(H||e,(function(r,i){H&&(r=e[i=r]),o(j,i,t(r,n,I,i,e,x))})),j}},function(t,e,n){var r=n(43),i=n(44),o=n(47),s=n(48),a=n(49)
function c(t){var e=-1,n=null==t?0:t.length
for(this.clear();++e<n;){var r=t[e]
this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,t.exports=c},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},function(t,e,n){var r=n(125),i=n(46),o=Object.prototype.hasOwnProperty
t.exports=function(t,e,n){var s=t[e]
o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(195),i=n(34)
t.exports=function(t,e){return t&&r(e,i(e),t)}},function(t,e,n){var r=n(193),i=n(125)
t.exports=function(t,e,n,o){var s=!n
n||(n={})
for(var a=-1,c=e.length;++a<c;){var l=e[a],u=o?o(n[l],t[l],l,n,t):void 0
void 0===u&&(u=t[l]),s?i(n,l,u):r(n,l,u)}return n}},function(t,e,n){var r=n(195),i=n(197)
t.exports=function(t,e){return t&&r(e,i(e),t)}},function(t,e){t.exports=function(t){var e=[]
if(null!=t)for(var n in Object(t))e.push(n)
return e}},function(t,e,n){(function(t){var r=n(91),i=e&&!e.nodeType&&e,o=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===i?r.Buffer:void 0,a=s?s.allocUnsafe:void 0
t.exports=function(t,e){if(e)return t.slice()
var n=t.length,r=a?a(n):new t.constructor(n)
return t.copy(r),r}}).call(this,n(199)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=function(t,e){var n=-1,r=t.length
for(e||(e=Array(r));++n<r;)e[n]=t[n]
return e}},function(t,e,n){var r=n(195),i=n(202)
t.exports=function(t,e){return r(t,i(t),e)}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(195),i=n(204)
t.exports=function(t,e){return r(t,i(t),e)}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(35)(Object.keys,Object)
t.exports=r},function(t,e){t.exports=function(t){var e=[]
if(null!=t)for(var n in Object(t))e.push(n)
return e}},function(t,e){var n=Object.prototype.hasOwnProperty
t.exports=function(t){var e=t.length,r=new t.constructor(e)
return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r}},function(t,e){t.exports=function(t){return t}},function(t,e,n){var r=n(210),i=n(79),o=n(180)
t.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:r(i(t))}},function(t,e,n){var r=n(6),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{}
if(i)return i(e)
t.prototype=e
var n=new t
return t.prototype=void 0,n}}()
t.exports=o},function(t,e){t.exports=function(){return!1}},function(t,e){t.exports=function(){return!1}},function(t,e,n){"use strict"
n.r(e)
var r=n(20),i=n(217),o=n(83),s=n(82),a=n(225),c=n(26)
let l
l=function(t){const e=Object(c.get)(t,"pubeditorial.anunciante")||{url:null,logo_pequeno:null,nome:"Logo Anunciante"}
let n=null
return e.logo_pequeno&&(n=s.Engine.createElement(a.LabelEvent,{type:"click",label:"chapeu"},s.Engine.createElement("a",{href:Object(c.get)(e,"url")||"#"},s.Engine.createElement("span",{className:"feed-post-header-special-advertising-logo"},s.Engine.createElement("img",{className:"special-advertising-logo",alt:"Logo: "+e.nome,title:"Logo: "+e.nome,src:Object(c.get)(e,"logo_pequeno")}))))),s.Engine.createElement("div",{className:"feed-post-header post-header-special-advertising"},s.Engine.createElement("span",{className:"feed-post-header-chapeu gui-text-section-title gui-text-special-advertising"},decodeURI("Especial Publicit%C3%A1rio")),n)}
const u=l,h=t=>e=>s.Engine.createElement("h2",null,s.Engine.createElement("a",{href:t.url,className:"feed-post-link gui-color-primary gui-color-hover"},s.Engine.createElement("p",{elementtiming:t.elementtiming},e.children)))
var d=n(107),p=n(112),f=n(93),m=n(56),g=n(102),v=n.n(g),b=n(222),y=n(223),E=n(114),_=n(185),O=n(103),S=n(113),w=n(115),I=n(116)
const T=t=>{const{extraClasses:e,isEsppub:n,video:r,image:i,url:a,title:c,children:l,onReveal:u,onMouseUp:h,threshold:d,ratio:p="1:1"}=t,f="bstn-fd-video-cover "+(e||""),m=r.description?r.description+" - Programa: "+r.programTitle:r.title+" - Programa: "+r.programTitle+" "
let g
return g=s.Engine.createElement(o.Cover,{images:i,alt:m,extraClasses:f.trim(),isEsppub:n,"data-video-id":r.id,ratio:p,"data-short-url":a,"data-link":a,"data-program-title":r.programTitle,"data-title":c,onReveal:u,onMouseUp:h,threshold:d},l),g}
var C=n(30),x=n(55),j=n(87),A=n(186)
class P extends s.Engine.Component{constructor(...t){super(...t),this.onChangeView=t=>{Object(A.shouldPlay)(this.base,t.data)?this.doPlay():this.doPause()},this.onCanPlay=()=>{this.waitingToPlay&&this.doPlay()},this.doPlay=()=>{this.waitingToPlay=!1,this._refs.preview&&this._refs.preview.paused&&(4===this._refs.preview.readyState?this._refs.preview.play():this.waitingToPlay=!0)},this.doPause=()=>{this._refs.preview&&!this._refs.preview.paused&&this._refs.preview.load()},this.reveal=()=>{!this.revealed&&this._refs.container&&(this._refs.preview&&0===this._refs.preview.readyState&&this._refs.preview.load(),this.props.onReveal(this._refs.container),this.revealed=!0)}}componentDidMount(){x.At.smallScreen&&Object(A.observeElement)(this.base,this.onChangeView)}componentWillUnmount(){x.At.smallScreen&&Object(A.unobserveElement)(this.base,this.onChangeView)}render(){const{children:t,title:e,url:n,video:r,image:i}=this.props,o=Object(C.choosePicture)(i)
return s.Engine.createElement(j.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:Promise.resolve("50%")},s.Engine.createElement("div",{ref:Object(f.as)(this,"container"),className:"post-media-preview","data-video-id":r.id,"data-short-url":n,"data-link":n,"data-program-title":r.programTitle,"data-title":e,onMouseEnter:this.doPlay,onMouseLeave:this.doPause},s.Engine.createElement("video",{ref:Object(f.as)(this,"preview"),className:"post-media-preview__video",poster:o,preload:"none",loop:!0,muted:!0,src:r.previewUrl,oncanplay:this.onCanPlay}),s.Engine.createElement("div",{className:"post-media-preview__content"},t)))}}function N(){return(N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}var R=s.Engine.createElement(w.BadgeAoVivo,null)
var k=s.Engine.createElement(I.VideoPlay,null)
const D=({children:t,isLive:e,video:n})=>s.Engine.createElement("div",{className:"feed-cover-content"},t,s.Engine.createElement("div",{className:"bstn-fd-play-button"},k,((t,e)=>t?R:Object(O.insertIf)(e>0,()=>s.Engine.createElement("p",{className:"feed-post-video-duration"},Object(S.abbrTime)(e))))(e,n.duration)),Object(O.insertIf)(n.trademark,()=>s.Engine.createElement("img",{className:"feed-post-video-trademark",src:n.trademark,loading:"lazy"}))),M=t=>{const{title:e,image:n,video:r,canShowVideoPreview:i,disableLightbox:o}=t
let a
const c=(r||{}).previewUrl
if(Object(_.default)(r)||Object(_.default)(n)||!r.id)return null
const l=t=>{t&&!o&&Object(E.applyVideoLightbox)(t)}
return a=i&&c?s.Engine.createElement(P,N({onReveal:l},t),D(t)):s.Engine.createElement(T,N({onReveal:l},N({},t,{video:N({},t.video,{title:e})})),D(t)),a}
var L=n(187)
const H={video:({image:t,video:e,title:n,url:r,isEsppub:i,canShowVideoPreview:o})=>s.Engine.createElement(M,{title:n,url:r,video:e,image:t,isEsppub:i,canShowVideoPreview:o}),photo:({image:t,title:e,isEsppub:n})=>s.Engine.createElement(o.Cover,{images:t,alt:"",isEsppub:n})},V=t=>{const{image:e,video:n,url:r}=t,i=Object(L.whichMedia)({image:e,video:n})
return null===i?null:s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:r,className:"feed-post-figure-link gui-image-hover"},H[i](t))))}
var U=n(24),F=n(105)
const B=t=>{const{date:e,section:n}=t
return s.Engine.createElement("div",{className:"feed-post-metadata"},Object(O.insertIf)(!1===U.Configs.get("disableDateTime"),()=>s.Engine.createElement(b.Datetime,{isRecommended:e.isRecommended,ageInSeconds:e.age,publication:e.publication})),n&&s.Engine.createElement(F.Section,{text:n}))}
var G=n(104),z=n(106),q=n(182),W=n(134),$=n(117),Z=n(57),K=n(164),J=n(162)
class Q extends s.Engine.Component{constructor(t){super(t),this.getPostContentData=(t={})=>{const e=Object(c.get)(this,"props.content"),n=Object(c.get)(this,"props._experiment_properties")
return{content:e,media:Object(L.whichMedia)(e),contentType:this.getContentType(),tenantId:Object(c.get)(this,"props.tenantId"),experiment:n,position:null==t?void 0:t.position}},this.state={title:this.isMabEnabled()?"":Object(c.get)(t,"content.title"),renderContext:U.Configs.get("renderContext")}}render(){const t=v()("feed-post","bstn-item-shape",{["type-"+this.props.type]:this.props.type})
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:t,id:this.props.id},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=W.ItemPostReporter.upgrade(this.context.sharedItemData),this.reporter.addFeatureChecks({resumo:()=>this.hasSummary(),foto:()=>"photo"===Object(L.whichMedia)(Object(c.get)(this,"props.content")),video:()=>"video"===Object(L.whichMedia)(Object(c.get)(this,"props.content"))})}componentDidMount(){this.isMabEnabled()&&this.installMab()}componentWillUnmount(){this.uninstallMab()}isMabEnabled(){if(x.At.server)return!1
const t=Object(c.get)(this,"props.content.mab.experiment")
return t&&K.ABStore.empty(t)}async installMab(){const t=Object(c.get)(this,"props.content.mab.experiment")
if(t)try{const e=new J.MAB,n=e.createExperiment(t),[r]=await e.choose([n])
if(!r)return
const i=this.props.content.mab.metadata[r.arm]
this.setState({title:i}),this.reporter.setContent({title:i}),this.mabRewardHandler=()=>r.reward(),this._refs.post.addEventListener("click",this.mabRewardHandler,!1)}catch(e){Object(r.error)("title exp failed\n",e)}}uninstallMab(){this.mabRewardHandler&&this._refs.post.removeEventListener("click",this.mabRewardHandler)}getUrl(){return Object(c.get)(this,"props.content.url")||null}getContentType(){return this.props.type}hasMedia(){return Boolean(Object(L.whichMedia)(Object(c.get)(this,"props.content")))}Media(){const{title:t,url:e,video:n,image:r}=this.props.content
return s.Engine.createElement(V,{ref:Object(f.as)(this,Object(L.whichMedia)(Object(c.get)(this,"props.content"))),title:t,url:e,video:n,image:r,isEsppub:Object(Z.has)(this,"props.pubeditorial"),postContentType:this.getContentType(),canShowVideoPreview:Object(q.canShowVideoPreviewInPost)(this.getPostContentData())})}Metadata(){let t
const e=m.Settings.get("PORTAL")
return["valor","valor-investe"].indexOf(e)>=0&&(t=this.props.publication),s.Engine.createElement(B,{section:this.props.content.section,date:{age:this.props.age,publication:t,isRecommended:this.props.isRecommended}})}Header(t){return s.Engine.createElement(y.Header,{content:this.props.content,parent:this,canShowTag:Object(q.canShowTagInPost)(this.getPostContentData())},t)}Title(){return Object(Z.has)(this,"state.title")?s.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:h({url:this.getUrl(),elementtiming:"text-"+this.state.renderContext})}):null}hasSummary(){const t=this.props.aggregatedPosts
return Boolean(this.props.content.summary)&&!(Array.isArray(t)&&t.length>0)}Summary(){const t=this.props.content.summary
return t&&this.hasSummary()?s.Engine.createElement(z.Summary,{text:t}):null}Relateds(){const t=this.props.aggregatedPosts
return Array.isArray(t)&&t.length>0?s.Engine.createElement(G.Relateds,{items:t,dateFactory:({age:t})=>s.Engine.createElement(b.Datetime,{ageInSeconds:t||this.props.age,isRecommended:this.props.isRecommended})},t=>s.Engine.createElement(a.LabelEvent,{type:"click",label:"agregados"},t)):null}onView(t){Object(q.onPostView)(this.getPostContentData(t))}onClick(t,e){this.clicked||(Object(q.onPostClick)(this.getPostContentData(t),e),this.clicked=!0)}reportToHorizon(){return{"post-id":this.props.id,"post-type":this.getContentType(),"post-url":this.getUrl(),"post-has-resumo":this.hasSummary(),"post-has-photo":this.hasMedia()}}}function X(){return(X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}Q.FACE="basico",Q.SIZE=$.POST_SIZES.MEDIUM
class Y extends Q{constructor(...t){super(...t),this.Header=()=>String(m.Settings.get("PORTAL")).startsWith("valor")?null:s.Engine.createElement(u,{pubeditorial:this.props.pubeditorial})}getContentType(){return"especial-publicitario"}Title(){return s.Engine.createElement(d.Title,{text:this.state.title||this.props.content.title,extraClasses:"feed-post-advertising-title",innerWrapper:h({url:this.getUrl()})})}renderVideo(){return Object(c.get)(this,"props.content.video.id")?s.Engine.createElement(p.Video,X({ref:Object(f.as)(this,"video")},this.props.content,{isEsppub:!0})):null}renderImage(){const t=this.props.content.image
if(t){let e=Object(c.get)(this,"props.content.image.rightsHolder")||null
return e&&(e="Foto: ("+e+")"),s.Engine.createElement(o.Cover,{ref:Object(f.as)(this,"photo"),images:t,alt:e,isEsppub:!0})}return null}}Y.FACE="especial_publicitario"
var tt=n(75),et=n(5),nt=n.n(et),rt=n(62),it=n.n(rt),ot=n(72),st=n(220),at=n(89),ct=n.n(at),lt=n(109)
let ut
ut=class extends(Object(lt.drawless)(s.Engine.Component)){constructor(t){super(t),this.observe=()=>{this.observer&&(this.observer.observe(this._refs.node,{childList:!0,subtree:!0,attributes:!0,attributesFilter:["style","width","height"]}),this.checkMutation())},this.checkMutation=ct()(()=>{const{offsetHeight:t,offsetWidth:e}=this._refs.node,n=t>=this.minHeight&&e>=this.minWidth
if(n!==this.isBoxed&&(this.isBoxed=n,nt()(this.props.onChange)))try{this.props.onChange(n,{height:t,width:e})}catch(i){Object(r.error)(i)}this.disconnectObserver()},500,{leading:!0,trailing:!0}),this.disconnectObserver=ct()(()=>{this.observer&&(this.observer.disconnect(),this.observer=null)},1e4,{leading:!1,trailing:!0}),this.isBoxed=!1,this.minHeight=this.props.minHeight||1,this.minWidth=this.props.minWidth||1,this.observer=new MutationObserver(this.checkMutation)}componentDidMount(){nt()(this.props.manualStart)?this.props.manualStart(this.observe):this.observe()}}
const ht=ut
function dt(){return(dt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const pt=dt({},ot,{ui:dt({},st)}),ft=t=>{var e
return(e=class extends s.Engine.Component{constructor(...t){super(...t),this.state={imploded:!1},this.syncBoxingState=t=>{this.isBoxed=t}}render(){return s.Engine.createElement(ht,{onChange:this.syncBoxingState,minHeight:3},Object(O.insertIf)(!this.state.imploded,()=>s.Engine.createElement("div",{className:"post-item",onClick:Object(q.onPostClick)(this.props)},s.Engine.createElement("div",{ref:Object(f.as)(this),className:"bstn-item-shape"}))))}componentWillMount(){W.ItemPostReporter.upgrade(this.context.sharedItemData)}componentDidMount(){it()(()=>{const e=this.context,n=dt({},pt)
ot.patch(n,{areaId:e.areaId,item:e.item,itemIndex:e.itemIndex,source:this.props.source,implode:this.implode.bind(this)})
try{nt()(t)&&t(this.props,this._refs.node,n)}catch(i){Object(r.error)("[component] ["+this.props.type+"]\n",i)}})}shouldComponentUpdate(t,e){return e.imploded}implode(){this.setState({imploded:!0})
const{props:t}=this
Object(r.warn)("The item of type "+t.type+" self imploded.",t)}}).FACE="component",e.SIZE=$.POST_SIZES.MEDIUM,e}
class mt extends W.ItemPostReporter{get contentStatus(){if(this.itemProps.isLive)return"ao_vivo"}}var gt=s.Engine.createElement(w.BadgeAoVivo,null)
class vt extends Q{constructor(...t){super(...t),this.isLive=()=>Object(c.get)(this.props,"cobertura.isLive"),this.Header=()=>{const{content:t}=this.props
return this.isLive()?s.Engine.createElement(y.Header,{content:t},gt):s.Engine.createElement(y.Header,{content:t})}}componentWillMount(){this.reporter=mt.upgrade(this.context.sharedItemData,{isLive:this.isLive()})}}vt.FACE="cobertura"
var bt=n(84),yt=n.n(bt),Et=n(227),_t=n(142)
function Ot(){return(Ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const St={criado:1,iniciado:2,INITIATED:2,"em andamento":3,IN_PROGRESS:3,encerrado:4,CLOSED:4}
var wt=s.Engine.createElement("div",{className:"bstn-aovivo-label"},"tempo real")
class It extends Q{constructor(t){super(t),this.state.match=t.match}render(){return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape bstn-face-temporeal type-"+this.props.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Score(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=Tt.upgrade(this.context.sharedItemData,{status:this.getStatus()}),this.reporter.addFeatureChecks({placar:()=>this.hasScore(),label_tr:()=>this.hasLabelTempoReal(),destaques:()=>this.hasHighlights(),resumo:()=>this.hasSummary(),espectadores:()=>this.showSpectators()})}componentDidMount(){this.completeRecommended()}async completeRecommended(){const{match:t,isRecommended:e}=this.props
if(t&&t.resume&&e){const e=await fetch(t.resume),n=await e.json()
this.fillRecommended(n)}}fillRecommended(t){const e=Ot({},this.state.match)
e&&(e.homeTeam.score=t.equipe_mandante.placar||0,e.awayTeam.score=t.equipe_visitante.placar||0,e.homeTeam.penalties=t.equipe_mandante.penalti||0,e.awayTeam.penalties=t.equipe_visitante.penalti||0,e.status=t.status,this.setState({match:e}))}Header(){return super.Header(this.hasLabelTempoReal()?wt:null)}Metadata(){let t=null
return this.showSpectators()&&(t=s.Engine.createElement("span",{className:"post-tr-spectators"},this.props.match.spectators.toLocaleString("pt-br")," assistindo")),s.Engine.createElement("div",{className:"feed-post-metadata"},s.Engine.createElement(b.Datetime,{isRecommended:this.props.isRecommended,ageInSeconds:this.props.age}),t)}Summary(){return this.hasHighlights()?s.Engine.createElement(Et.Highlight,{content:this.state.match.highlights[0]}):this.hasSummary()?super.Summary():null}Score(){if(this.hasScore()){const{awayTeam:t,homeTeam:e}=this.state.match
return s.Engine.createElement(_t.Scoreboard,{away:t,home:e})}return null}isLive(){const t=((this.props.match||{}).status||"").toLowerCase()
return!!yt()(St[t],St.INITIATED,St.CLOSED)&&(!!this.props.isRecommended||0===String(this.props.content.summary||"").trim().length)}hasScore(){return Boolean(this.state.match)}hasLabelTempoReal(){return this.isLive()}hasChapeu(){return!this.hasLabelTempoReal()&&Object(c.get)(this.props.content,"chapeu.label")}hasSummary(){return!this.hasHighlights()&&super.hasSummary()}hasHighlights(){return this.isLive()&&Object(c.get)(this.state,"match.highlights",[]).length>0}showSpectators(){return this.hasLabelTempoReal()&&Object(c.get)(this.props,"content.showSpectators")&&this.state.match.spectators>0}getStatus(){return(Object(c.get)(this.props,"match.status")||"encerrada").toLowerCase()}}It.FACE="tempo_real"
class Tt extends W.ItemPostReporter{get contentStatus(){if(this.itemProps.status)return this.itemProps.status}}var Ct=n(146),xt=n(147),jt=n.n(xt),At=n(171)
function Pt(){return(Pt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const Nt=t=>{const{extraClasses:e,image:n,description:r,thumbOrientation:i,url:a,title:c,children:l,ratio:u="1:1"}=t,h="bstn-fd-stories-cover "+(e||"")
let d
return d=s.Engine.createElement(o.Cover,{images:n,alt:r,thumbOrientation:i,extraClasses:h.trim(),ratio:u,"data-short-url":a,"data-link":a,"data-title":c},l),d}
var Rt=s.Engine.createElement(At.default,{device:"mobile"})
const kt=t=>{return s.Engine.createElement(Nt,Pt({},t,{thumbOrientation:"V"}),s.Engine.createElement("div",{className:"stories__content"},s.Engine.createElement("div",{className:"stories__content--header"}," ",jt()(t,"chapeu.label",t.section)," "),s.Engine.createElement("div",null,Rt,s.Engine.createElement("p",{className:"stories__content--title"}," ",(e=t.title,n=70,e.length>n?e.substring(0,n)+"...":e)," "),s.Engine.createElement("div",{className:"stories__content--metadata"},t.children))))
var e,n}
var Dt=s.Engine.createElement("div",{className:"bstn-fd-play-button"},s.Engine.createElement(At.default,{device:"desktop"}))
const Mt=t=>s.Engine.createElement(Nt,Pt({},t,{thumbOrientation:"H"}),Dt),Lt=t=>t.desktop?s.Engine.createElement(Mt,t):s.Engine.createElement(kt,t)
function Ht(){return(Ht=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}var Vt=n(23),Ut=n(161)
function Ft(){return(Ft=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}var Bt=s.Engine.createElement(w.BadgeAoVivo,null)
class Gt extends Q{constructor(...t){super(...t),this.renderHeader=()=>s.Engine.createElement("div",{className:"feed-post-video-full-header"},Object(c.get)(this.props,"content.chapeu.label")),this.renderTitle=()=>s.Engine.createElement("div",{className:"feed-post-video-full-title"},this.state.title)}renderVideo(t){const{content:e}=this.props
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(e),this.Title(),s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:t,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(M,Ft({ref:Object(f.as)(this,"video")},e,{isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial")),disableLightbox:Object(q.canPostVideoRedirectToVideoPage)(this.getPostContentData())}))))),this.Metadata(),this.Relateds()))}renderVideoFull(t){const{content:e}=this.props
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type+" feed-post-video-full-container"},s.Engine.createElement("div",{className:"feed-post-body"},s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:t,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(M,Ft({},e,{ratio:"4:3",extraClasses:"feed-post-video-full",isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial")),isLive:this.isLive(),disableLightbox:Object(q.canPostVideoRedirectToVideoPage)(this.getPostContentData())}),this.renderHeader(),this.renderTitle(),this.Metadata())))),this.Relateds()))}render(){const t=this.props.content
t.url=t.url||Object(c.get)(t,"video.url")||Vt.Globals.location.href
const e=t.url||""
return x.At.smallScreen?this.renderVideoFull(e):this.renderVideo(e)}Header(t){return s.Engine.createElement(y.Header,{content:t},Object(O.insertIf)(this.isLive(),()=>Bt))}titleApplyRef(t){if(!Object(q.canPostVideoRedirectToVideoPage)(this.getPostContentData()))return Object(E.applyVideoLightbox)(t)}Title(){if(Object(Z.has)(this,"state.title")){const t=this.getUrl(),e=Object(c.get)(this.props.content,"video.id")
return s.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:n=>s.Engine.createElement("h2",null,s.Engine.createElement("a",{href:t,className:"feed-post-link gui-color-primary gui-color-hover","data-video-id":e,"data-short-url":t,"data-link":t,ref:t=>this.titleApplyRef(t)},n.children))})}return null}componentWillMount(){this.reporter=mt.upgrade(this.context.sharedItemData,{isLive:this.isLive()}),this.reporter.addFeatureChecks({video:()=>!0})}isLive(){return Object(Ut.isLiveVideo)(Object(c.get)(this.props.content,"video.kind"))}}Gt.FACE="video",n.d(e,"emitter",(function(){return zt})),n.d(e,"NEW_POST_TYPE",(function(){return qt})),n.d(e,"registerExternalItemFactory",(function(){return $t})),n.d(e,"assignFactory",(function(){return Zt}))
const zt=new tt.EventEmitter,qt="NEW_POST_TYPE_",Wt={default:Q,basico:Q,materia:Q,materia_video:Q,advertise:i.default,cobertura:vt,stories:class extends Q{constructor(...t){super(...t),this.StoriesMobile=()=>s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type+" stories",style:{borderBottom:"5px solid "+Object(Ct.getCategoryColor)()}},s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(Lt,Ht({mobile:!0,extraClasses:"feed-post-stories-mobile",ref:Object(f.as)(this,"stories")},this.props.content),this.Metadata()))))),this.StoriesDesktop=()=>s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(Lt,Ht({desktop:!0,extraClasses:"feed-post-stories-desktop",ref:Object(f.as)(this,"stories")},this.props.content))))),this.Summary(),this.Metadata()))}render(){return x.At.smallScreen?this.StoriesMobile():this.StoriesDesktop()}},"especial-publicitario":Y,video:Gt,"eventos-esportivos":It},$t=(t,e)=>{((t,e)=>{"advertise"!==t&&"especial-publicitario"!==t&&(Wt[t]=e,zt.trigger(qt+t))})(t,ft(e))},Zt=t=>{let e=t.type
return t.pubeditorial&&"cobertura"!==e&&(e="especial-publicitario"),!(e in Wt)&&(t=>Object(c.get)(t,"content.title")&&Object(c.get)(t,"content.url"))(t)&&(e="default"),e in Wt&&(t.klass=Wt[e]),t}},function(t,e,n){"use strict"
n.r(e)
var r=n(20),i=n(82),o=n(102),s=n.n(o),a=n(24),c=n(117),l=n(108),u=n(118),h=n(123),d=n(93),p=n(88),f=n.n(p),m=n(5),g=n.n(m),v=n(10),b=n.n(v),y=n(31),E=n.n(y),_=n(124),O=n.n(_),S=n(132),w=n(218),I=n(135),T=n(1),C=n.n(T),x=n(22),j=n(136)
let A
const P={}
function N(t){t.content&&C()(t.content.url)&&(t.content.url=t.content.url.trim()+a.Configs.get("recommendationTag"))}class R{static getInstance(){return A||(A=new R(P)),A}constructor(t){t!==P&&Object(r.warn)("Class $Posts is a singleton and shouldn't be called directly.")
const e=x.$Falkor.getInstance(),n=e.stream
let i
this.$falkor=e,this.source=e,this.stream=n
try{i=j.$Recommendation.getInstance()}catch(o){}if(i){this.source=i
const t=i.stream,o=()=>{this.source=e,this.request()}
t.addListener({next:()=>{},error:()=>{Object(r.error)("soft error: recommendation failed, activating fallback"),o()},complete:()=>{console.info("[bastian] Recommendation ended. Activating fallback..."),o()}}),this.stream=b.a.merge(t,n.map(t=>(a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")<a.Configs.get("recommendationStart")?a.Configs.incr("recommendationCounter"):a.Configs.has("recommendationTag")&&(N(t),Array.isArray(t.aggregatedPosts)&&t.aggregatedPosts.forEach(N)),t)))}}request(){a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")+1>=a.Configs.get("recommendationStart")?this.source.request():this.$falkor.request({preventFetch:!0})}isEmpty(){return this.source.isEmpty()}getNextPage(){return this.source.nextPage}}var k=n(55)
let D
const M={},L=(t,e)=>new Array(e).fill().map(()=>t),H=t=>({request:t}),V=(...t)=>H(e=>t.some(t=>!1!==t.request(e))),U=t=>{const e=H(n=>(e.request=()=>!1,t.request(n)))
return e}
class F{static getInstance(){return D||(D=new F(M)),D}constructor(t){var e
let n
t!==M&&Object(r.warn)("Class $Rhythmist is a singleton and shouldn't be called directly."),n={AD:S.$Advertises,CARD:w.$Cards,DISTRIBUTED_COMPONENTS:I.$DistributedComponents,POST:R}
const i=O()(n,t=>t.getInstance()),o="cards"===a.Configs.get("thirdPartyingModel")?i.CARD:i.DISTRIBUTED_COMPONENTS,s=V(i.AD,i.POST)
if("Home"===(null===(e=window.utag_data)||void 0===e?void 0:e.content_type)&&k.At.smallScreen?this.rhythm=[...L(i.POST,2),V(U(i.AD),i.POST),i.POST,s,i.POST,V(U(i.AD),i.POST),i.POST,s]:this.rhythm=[...L(i.POST,4),s,i.POST,...L(i.POST,2),s],!this.shouldIncludeCardsInRecommendationFeedByPosition()){const t=a.Configs.get("componentPosition")-1
this.rhythm.splice(t,0,V(o,i.POST))}const c=E()(i).map(t=>t.stream)
this.stream=b.a.merge(...c).endWhen(R.getInstance().stream.last())}rotateRhythm(){this.rhythm.push(this.rhythm.shift())}shouldIncludeCardsInRecommendationFeedByPosition(){return a.Configs.get("isSegmentedByChannels")&&a.Configs.get("isRecommended")}getSourceByPosition(t){let e
const n=a.Configs.get("cardsPosition")
return this.shouldIncludeCardsInRecommendationFeedByPosition()&&n.includes(t.position)&&k.At.smallScreen?e=I.$DistributedComponents.getInstance():(e=this.rhythm[0],this.rotateRhythm()),e}request(t){let e
e=this.getSourceByPosition(t)
!1===e.request(t)&&(Object(r.warn)("all choices failed, skipping position:",t),this.request(t))}}let B
const G={}
class z{static getInstance(){return B||(B=new z(G)),B}constructor(t){this.itemCounter=0,this.pageCounter=0,this.isBusy=!1,t!==G&&Object(r.warn)("Class $Pages is a singleton and shouldn't be called directly."),this.stream=b.a.create({start:t=>{this.listener=t},stop:()=>{this.listener=null}})}request(){if(!this.isBusy&&this.listener){const t=this.listener,e=[],n=F.getInstance()
let i
const o=()=>{e.length>0&&(this.deliver=null,this.pageCounter++,this.itemCounter+=e.length,n.stream.removeListener(i),t.next(e),this.isBusy=!1)}
this.deliver=o
const s=()=>({pageNumber:this.pageCounter+1,position:this.itemCounter+e.length+1,positionOnPage:e.length+1})
i={next:t=>{e.push(t),e.length<10?n.request(s()):o()},error:e=>{Object(r.error)(e),o(),t.error(e)},complete:()=>{o(),t.complete()}},n.stream.addListener(i),this.isBusy=!0,n.request(s())}}flush(){g()(this.deliver)&&this.deliver()}}var q=n(23)
let W
const $=/(.*\/)([^?#]*)(\?[^#]*|)(#.*|)/
const Z=/(?:(.*\/)([^/]+)\/feed\/pagina-(\d+)(\.g?html|\/|)|(.*\/)([^.]*)(\.g?html|))/,K=/\..*/
function J(){const t=a.Configs.get("referer")||"",e=function(t){const e=t.match($)||["","","",""],[,n,r,i,o]=e
return{path:n,name:r,querystring:i,hash:o}}(t),n=(""+e.path+e.name).match(Z)||["","","","","",""],[,r,i,o,s,c,l,u]=n
return{path:c||r,name:l&&l.replace(K,"")||i||"index",page:o||"1",extension:u||s||"",querystring:e.querystring,hash:e.hash,decomposed:Boolean(t&&(c||r))}}const Q={getPageURL:function(t){return W=W||J(),W.decomposed?""+W.path+W.name+"/feed/pagina-"+t+W.extension+W.querystring+W.hash:null},destroy:function(){W=null}}
var X=n(98),Y=n(111),tt=n(57)
var et=n(219)
class nt extends i.Engine.Component{constructor(){super(),this.autoLoadActive=!1,this.handleLoadMore=t=>{t&&(t.stopPropagation(),t.preventDefault()),Object(et.default)({origin:"botao mais noticias",label:"interacao | carregamento "+String(this.state.pagesDelivered).padStart(3,"0")},["GA","CommonEvents"]),this.proceedLoadMore()},this.proceedLoadMore=f()(()=>{z.getInstance().request(),a.Configs.has("recommendationTag")&&j.$Recommendation.getInstance().fetch()},1e3,{leading:!0,trailing:!1}),this.scheduleAutoLoad=()=>{this.autoLoadActive&&(this.autoLoad(),this.timer=setTimeout(this.scheduleAutoLoad,1e3))},this.teardownAutoLoad=()=>{this.autoLoadActive&&(X.PassiveScrollListener.off(this.autoLoad),clearTimeout(this.timer),this.autoLoadActive=!1)}
const t=z.getInstance()
this.state={pagesDelivered:t.pageCounter,reachedEnd:!1},t.stream.addListener({next:()=>{this.setState({pagesDelivered:t.pageCounter})},error:()=>{},complete:()=>{this.setState({reachedEnd:!0})}})}render(){const t=R.getInstance(),e=t.getNextPage(),n=Math.max(e||0,this.state.pagesDelivered+1)
return(this.state.reachedEnd||null===e)&&t.isEmpty()?null:i.Engine.createElement("div",{className:"load-more gui-color-primary-bg"},i.Engine.createElement("a",{ref:Object(d.as)(this),href:Q.getPageURL(n)},"Veja mais"))}componentDidMount(){this.setupAutoLoad(),this._refs&&this._refs.node&&this._refs.node.addEventListener("click",this.handleLoadMore,!1)}componentWillUnmount(){this.teardownAutoLoad(),this._refs&&this._refs.node&&this._refs.node.removeEventListener("click",this.handleLoadMore)}setupAutoLoad(){const t=R.getInstance()
null===t.getNextPage()&&t.isEmpty()||Object(tt.has)(q.Globals,"campos.pubeditorial")||(this.autoLoad=this.pureAutoLoad.bind(this),this.autoLoad=function(t,e,n){let r=0
return function(){let i
r<t?(i=e(),i&&(r+=1)):i&&g()(n)&&n(i)}}(3,this.autoLoad,this.teardownAutoLoad),this.autoLoad=f()(this.autoLoad,1e3,{leading:!0,trailing:!1}),this.autoLoadActive=!0,setTimeout(this.scheduleAutoLoad,0),X.PassiveScrollListener.on(this.autoLoad))}pureAutoLoad(){const t=Object(Y.getVisibility)(this.context.root._refs.node)
return!!(t.isBoxed&&t.rect.bottom<t.viewportHeight+1e3)&&(this.handleLoadMore(),!0)}}var rt=n(221),it=n(140),ot=n(215),st=n(172),at=n(26),ct=n(70),lt=n(71),ut=n(228)
class ht extends i.Engine.Component{render(){const{items:t,pageIndex:e}=this.props,n="page-"+e+"-items"
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:n},i.Engine.createElement("div",{ref:Object(d.as)(this,"page"),className:"bastian-page","data-index":e},i.Engine.createElement(it.ElementViewGroup,{id:n,radius:2},t.map((t,e)=>i.Engine.createElement(ut.Item,{key:e,data:t,index:e+1})))))}componentDidMount(){Object(lt.triggerDomEvent)(ct.PAGE_RENDERED,this._refs.page)}}function dt(t){let e=[]
return t.stream.take(1).addListener({next:t=>{e=t},error:r.error,complete:()=>{}}),t.request(),t.flush(),e}class pt extends i.Engine.Component{constructor(){super(),this.itemIndex=new st.ItemIndex,this.resetItemIndex()
const t=z.getInstance(),e=t.stream
this.state={updates:[],pages:[dt(t)]},rt.$PushStream.getInstance().stream.addListener({next:t=>this.setState({updates:[...this.state.updates,...t]}),error:r.error,complete:()=>{}}),e.addListener({next:t=>this.setState({pages:[...this.state.pages,t]}),error:r.error,complete:()=>{}})}getChildContext(){return{itemIndex:this.itemIndex}}render(){let t
return this.state.updates.length>0&&(t=i.Engine.createElement(ht,{key:0,pageIndex:0,items:this.state.updates})),i.Engine.createElement(it.ElementViewGroup,{id:"pages"},t,this.state.pages.map((t,e)=>i.Engine.createElement(ht,{key:e+1,pageIndex:e+1,items:t})))}componentWillUpdate(){this.resetItemIndex()}shouldComponentUpdate(t,e){const n=Object(at.get)(this.state,"updates.length")!==Object(at.get)(e,"updates.length"),r=this.state.pages.length!==e.pages.length
return n||r}resetItemIndex(){this.itemIndex.clear(),new Array(ot.Headlines.getConsumed()).fill().forEach(()=>this.itemIndex.register(st.ItemIndex.HEADLINE_PLACEHOLDER))}}var ft=n(133),mt=n(74),gt=n(56),vt=n(101)
function bt(){return(bt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const yt=()=>{},Et={next:yt,error:yt,complete:yt}
function _t(t){setTimeout(()=>{X.PassiveScrollListener.pause()
const e=function(t){const e=Object(at.get)(t,"content.url")
if(!e)return null
let n=q.Globals.document.querySelector('.bastian-page:nth-child(1) .feed-post-link[href="'+e+'"]')
if(n)for(;n.className&&-1===n.className.indexOf(ft.ITEM.slice(1))&&n.parentElement;)n=n.parentElement
return n}(t[0])
e&&function(t,e,n){const r=performance.now(),i=q.Globals.window.scrollY
if(i===t)return n()
Object(vt.rAF)((function o(){const s=performance.now(),a=Math.min(1,(s-r)/e),c=(l=a)<.5?2*l*l:(4-2*l)*l-1
var l
q.Globals.window.scrollTo(0,c*(t-i)+i),a<1?Object(vt.rAF)(o):n()}))}(function(t){let e=13
return mt.DEVICES[gt.Settings.get("DEVICE_GROUP","desktop")]>mt.DEVICES.smart&&(e+=100),t.getBoundingClientRect().top+q.Globals.window.scrollY-e}(e),1e3,()=>{X.PassiveScrollListener.resume()})},100)}class Ot extends i.Engine.Component{constructor(t){super(t),this.handleClick=()=>{Object(et.default)({origin:"botao pushstream click",label:"Quantidade: "+String(this.state.counter).padStart(2,"0")})
const t=rt.$PushStream.getInstance()
t.stream.take(1).addListener(bt({},Et,{next:_t})),t.request()},this.state={counter:0,topIsVisible:!0},rt.$PushStream.getInstance().counterStream.addListener({next:t=>{this.setState({counter:t})},error:r.error,complete:()=>{}})}render(){const t=this.state.counter,e=s()("post-notifier-pushstream gui-color-primary-bg",{"notify-pushstream":Boolean(1===t),"notify-pulse":Boolean(t>1),"bstn-fd-visible-top":this.state.topIsVisible})
return 0===t?i.Engine.createElement("div",{className:e,ref:Object(d.as)(this)}):i.Engine.createElement("div",{className:e,ref:Object(d.as)(this),onClick:this.handleClick},i.Engine.createElement("span",null,t)," ","atualizaç"+(t>1?"ões":"ão"))}componentDidMount(){if(mt.DEVICES[gt.Settings.get("DEVICE_GROUP","desktop")]<=mt.DEVICES.smart){const t=()=>{const t=this._refs.node.parentElement
t&&this.setState({topIsVisible:Object(Y.getVisibility)(t).top})}
t(),X.PassiveScrollListener.on(t)}}}var St=i.Engine.createElement(Ot,null),wt=i.Engine.createElement(pt,null),It=i.Engine.createElement(nt,null)
class Tt extends h.SeenTimeTelemetry{constructor(t){super(t),this.sharedFeedData={reporter:new u.FeedReporter({area:c.DESKTOP_AREAS.LEFT})}}getChildContext(){return{root:this,areaId:"feed",sharedFeedData:this.sharedFeedData}}render(){const t=s()("bstn-fd","bstn-fd-csr",{"bstn-fd-recommended":a.Configs.get("isRecommended")})
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:"pages",checkInterval:1e3},i.Engine.createElement("div",{ref:Object(d.as)(this),className:t},St,wt,It))}componentDidMount(){this.cdmSeenTimeTelemetry(),a.Configs.set("feed_getSeenTime",this.getSeenTime.bind(this))}componentWillUnmount(){this.cwuSeenTimeTelemetry()}}let Ct
n.d(e,"Feed",(function(){return jt}))
const xt={}
class jt{static getInstance(){return Ct||(Ct=new jt(xt)),Ct}constructor(t){t!==xt&&Object(r.warn)("Class Feed is a singleton and shouldn't be called directly."),this.virtualElement=i.Engine.createElement(Tt)}}},function(t,e,n){"use strict"
n.r(e)
var r=n(20),i=n(55),o=n(22),s=n(24),a=n(82),c=n(102),l=n.n(c),u=n(117),h=n(140),d=n(108),p=n(118),f=n(16),m=n.n(f),g=n(77),v=n.n(g),b=n(70),y=n(141),E=n(142),_=n(123),O=n(93),S=n(30),w=n(103),I=a.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},a.Engine.createElement("g",{fill:"none"},a.Engine.createElement("path",{d:"M6 6c1 0 2-1 2-2S7 2 6 2 4 3 4 4s1 2 2 2zm0 1c-1.3 0-4 .7-4 2v1h8V9c0-1.3-2.7-2-4-2z",fill:"#FFF"}),a.Engine.createElement("path",{d:"M0 0h12v12H0"})))
var T=a.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},a.Engine.createElement("g",{fill:"none"},a.Engine.createElement("path",{d:"M6 .2C2.8.2.2 2.8.2 6c0 3.2 2.6 5.8 5.8 5.8 3.2 0 5.8-2.6 5.8-5.8C11.8 2.8 9.2.2 6 .2zm0 10.5c-2.6 0-4.7-2-4.7-4.7 0-2.6 2-4.7 4.7-4.7 2.6 0 4.7 2 4.7 4.7 0 2.6-2 4.7-4.7 4.7z",fill:"#FFF"}),a.Engine.createElement("path",{d:"M-1-1h14v14H-1"}),a.Engine.createElement("path",{fill:"#FFF",d:"M6.3 3h-1v3.6l3.2 1.8.4-.7L6.2 6"})))
var C=a.Engine.createElement("div",{className:"text"},a.Engine.createElement(()=>T,null)," SIGA EM TEMPO REAL"),x=a.Engine.createElement(()=>I,null)
function j({spectators:t}){return a.Engine.createElement("div",{className:"label-tempo-real headline"},C,Object(w.insertIf)(t,()=>a.Engine.createElement("div",{className:"count"},x," ",t.toLocaleString("pt-br")," assistindo")))}var A=n(143),P=n(219),N=n(122)
class R extends N.BaseReporter{constructor(t){super(t),this.isLive=t.isLive,this.status=t.status}get contentStatus(){return this.status?this.status:this.isLive?"ao_vivo":void 0}get format(){return"destaque"}get size(){return u.POST_SIZES.LARGE}getPostPosition(){return this.data.index+1}}const k=Object(N.createPostReporter)(R)
var D=n(23),M=n(115),L=n(144),H=n(145),V=n(26),U=n(146),F=n(154),B=n.n(F),G=n(161),z=n(60),q=n(71),W=n(162),$=n(164),Z=n(227),K=n(114)
function J(){return(J=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}var Q=a.Engine.createElement("div",{className:"bastian-feed-show-temporeal-link"},"Siga em Tempo Real")
class X extends a.Engine.Component{render(){const{hasVideo:t,video:e,url:n,title:r,hasSummary:i,hasScoreFinished:o,summary:s,hasHighlights:c}=this.props,l=Object(V.get)(this.props,"match.highlights")||[],u={}
t&&e&&(u["data-video-id"]=e.id,u["data-short-url"]=n,u["data-link"]=n,u["data-title"]=r)
var h=a.Engine.createElement("span",{className:"bstn-hl-summary gui-color-primary gui-color-hover"},s)
return a.Engine.createElement("div",null,a.Engine.createElement(d.ElementViewTrigger,{on:"fitInScreen"},a.Engine.createElement("span",J({className:"bstn-hl-title gui-color-primary gui-color-hover gui-color-primary-bg-after",ref:Object(O.as)(this,"title")},u),r)),Object(w.insertIf)(i||o,()=>h,()=>Object(w.insertIf)(c,()=>a.Engine.createElement("div",{className:"highlights-bastian-feed"},l.slice(0,2).map((t,e)=>a.Engine.createElement(Z.Highlight,{key:e,content:t,headline:!0})),Q))))}componentDidMount(){this.props.hasVideo&&Object(K.applyVideoLightbox)(this._refs.title)}}function Y(){return(Y=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const tt=({allowThumb:t})=>(e,n)=>{const{title:r,url:i}=e.content,o=Object(V.get)(e.content,"image.sizes.S.url"),s={}
return t&&o&&(s.thumb={url:o,rightsholder:Object(V.get)(e.content,"image.rightsHolder")}),a.Engine.createElement("li",{key:n,className:"bstn-hl-itemlist bstn-hl-relateditem"},a.Engine.createElement(et,Y({title:r,url:i},s)))}
function et({url:t,title:e,thumb:n}){const r=n&&n.url,i={}
return n&&n.rightsholder&&(i.alt=""+n.title+n.rightsholder?"Foto: ("+n.rightsholder:"",i.title=n.rightsholder),a.Engine.createElement("a",{className:"bstn-hl-link bstn-related",href:t},Object(w.insertIf)(r,()=>a.Engine.createElement("img",Y({className:"bstn-hl-relatedthumb",src:r},i,{loading:"lazy"}))),a.Engine.createElement("span",{className:"bstn-hl-title gui-color-primary gui-color-hover bstn-related"},e))}var nt=n(147),rt=n.n(nt),it=n(9),ot=n.n(it),st=n(116),at=n(113),ct=a.Engine.createElement(st.VideoPlay,null)
class lt extends a.Engine.Component{render(){const{props:t}=this
if(t.video&&t.image){const{id:e,duration:n}=t.video,r=t.image.url
return a.Engine.createElement("div",{ref:Object(O.as)(this,"video"),className:"bstn-hl-video",title:t.title,"data-video-id":e,"data-short-url":t.url,"data-link":t.url,"data-title":t.title,"data-img":r},ct,Object(w.insertIf)(ot()(n),()=>a.Engine.createElement("div",{className:"bstn-hl-duration"},Object(at.abbrTime)(n))))}return null}componentDidMount(){rt()(this._refs,"video")&&(Object(K.applyVideoLightbox)(this._refs.video),this._refs.video.addEventListener("click",t=>t.stopPropagation(),!1))}}var ut=n(171),ht=a.Engine.createElement(ut.default,{device:"desktop"})
class dt extends a.Engine.Component{render(){return a.Engine.createElement("div",{ref:Object(O.as)(this,"video"),className:"bstn-hl-video"},ht)}}function pt(){return(pt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const ft=t=>{let e,n
const r=Object(V.get)(t,"content.image")
if(r){const i={height:1,width:!t.headlineVariation&&!t.isHalfSize&&!t.isSingle?1:2},o=2
n=Object(S.choosePicture)(r,o,i),n&&(e='url("'+n+'")')}return e}
var mt=a.Engine.createElement(M.BadgeAoVivo,null),gt=a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-spaceritem"}),vt=a.Engine.createElement(dt,null)
class bt extends _.SeenTimeTelemetry{constructor(t){super(t),this.reportView=()=>{const t=this.getSeenTime()
this.lastReportedSeenTime!==t&&(this.lastReportedSeenTime=t,A.Horizon.report(L.PostViewHeadline,this.reporter))},this.reportClick=t=>{const e=Object(H.cloneJSON)(this.props)
e.bstn$source="headline",Object(q.triggerDomEvent)(b.ITEM_CLICK,document,t=>{t.data=e}),A.Horizon.report(L.PostClick,this.reporter),this.reportEvent(t),this.reportToRealtime()},this.getFeatures=m()(()=>{const t=this.props,{summary:e,status:n,video:r,chapeuLabel:i,imageSizes:o,imageUrl:s,videoKind:a,highlights:c}=this.getProps(),l="uber"===t.headlineVariation,u=Boolean(o||s),h=Boolean(r&&!l),d=Boolean(i),p=Boolean(Object(V.get)(t,"cobertura.isLive")||Object(G.isLiveVideo)(a)),f=Boolean("eventos-esportivos"===t.type&&t.match&&!l),m=f&&(e.length>0||"Encerrada"===n),g=Boolean(!h&&!B()(t.aggregatedPosts)),v=Boolean(e&&(!d||!u||l)&&!h&&(!g||l)),b=Boolean(c&&c.length>0&&!l),y=Boolean(f&&!m),E=Boolean(y&&Object(V.get)(t,"content.showSpectators"))
return{hasPhoto:u,hasVideo:h,hasChapeu:d,isLive:p,hasRelated:g,hasScore:f,hasScoreFinished:m,hasSummary:v,isUber:l,isStories:Boolean("stories"===Object(V.get)(this.props,"type")),hasHighlights:b,hasLabelTempoReal:y,showSpectators:E}}),this.state={title:this.isMabEnabled()?"":Object(V.get)(t,"content.title"),backgroundImage:ft(t)}}render(){const t=this.props,e=this.getFeatures(),n=this.getClasses(e),r=Object(V.get)(t,"match")||{spectators:0},i=r.spectators,o=this.getRelateds(e),s=Object(V.get)(t,"content.chapeu.label")
let c=null,u=null,h=Object(V.get)(t,"content.url")
const d=Object(V.get)(t,"content.video.id")
e.hasVideo&&d&&(h="#v/"+d,h=""+D.Globals.location.origin+D.Globals.location.pathname+"#v/"+d),e.hasScore&&r.awayTeam&&r.homeTeam&&(c=r.awayTeam,u=r.homeTeam)
var p=a.Engine.createElement("span",{className:"bstn-hl-chapeu gui-subject gui-color-primary-bg-after"},s)
return a.Engine.createElement("div",{className:"bstn-hl-wrapper"},a.Engine.createElement("div",{ref:Object(O.as)(this),style:{"--bstn-hl-cover":this.state.backgroundImage},className:l()("bstn-hl type-"+t.type,n),onClick:this.reportClick},a.Engine.createElement("a",{className:"bstn-hl-link",href:h},Object(w.insertIf)(e.hasLabelTempoReal,()=>a.Engine.createElement(j,{spectators:e.showSpectators?i:0})),a.Engine.createElement("ul",{className:"bstn-hl-list"},Object(w.insertIf)(e.hasChapeu||e.isLive,()=>a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-chapeuitem"},Object(w.insertIf)(e.isLive,()=>mt,()=>Object(w.insertIf)(e.hasChapeu,()=>p)))),gt,a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton "},Object(w.insertIf)(e.hasVideo,()=>a.Engine.createElement(lt,this.props.content))),a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton bstn-hl-video"},Object(w.insertIf)(e.isStories,()=>vt)),a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-mainitem"},Object(w.insertIf)(c&&u,()=>a.Engine.createElement(E.Scoreboard,{headline:!0,away:c,home:u})),a.Engine.createElement(X,pt({},t.content,e,{title:this.state.title,match:r}))),Object(w.insertIf)(!e.isUber,()=>o.map(tt({allowThumb:!1})))))),Object(w.insertIf)(e.isUber&&e.hasRelated,()=>a.Engine.createElement("ul",{className:"bstn-hl-uberrelateds",onClick:this.reportClick},o.map(tt({allowThumb:!0})))))}componentWillMount(){const t=this.getFeatures(),e=new k({data:this.props,telemetry:this,isLive:t.isLive,status:t.hasScore&&String(this.getProps().status).toLowerCase()})
e.addFeatureChecks({foto:()=>t.hasPhoto&&!t.hasVideo,agregados:()=>t.hasRelated,resumo:()=>t.hasSummary,video:()=>t.hasVideo,placar:()=>t.hasScore,label_tr:()=>t.hasLabelTempoReal,espectadores:()=>t.showSpectators}),this.reporter=new y.ReporterCascadeAggregator(e,this.context.sharedHeadlineData.reporter)}componentDidMount(){const t=this.getFeatures()
this.cdmSeenTimeTelemetry(),A.Horizon.on("collect-metrics",this.reportView)
const e=this._refs.node
t.isStories&&(e.style.borderBottom="5px solid "+Object(U.getCategoryColor)()),this.isMabEnabled()&&this.installMab()}componentWillUnmount(){A.Horizon.off("collect-metrics",this.reportView),this.cwuSeenTimeTelemetry()}isMabEnabled(){if(i.At.server)return!1
const t=Object(V.get)(this,"props.content.mab.experiment")
return t&&$.ABStore.empty(t)}async installMab(){const t=Object(V.get)(this,"props.content.mab.experiment")
if(t)try{const e=new W.MAB,n=e.createExperiment(t),[r]=await e.choose([n])
if(!r)return
$.ABStore.save(t,r),this.setState({title:this.props.content.mab.metadata[r.arm]}),this.mabRewardHandler=()=>r.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(e){Object(r.error)(e)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getClasses(t){return{"no-photo":!t.hasPhoto,"with-photo":t.hasPhoto,"with-video":t.hasVideo,"with-chapeu":t.hasChapeu,"with-summary":t.hasSummary,"with-related":t.hasRelated,"with-score":t.hasScore,"is-half-size":this.props.isHalfSize,"is-live":t.isLive}}getRelateds(t){return t.hasRelated?Object(V.get)(this.props,"aggregatedPosts"):[]}reportEvent(t){const e={origin:this.props.type,action:yt(t)?"play":"clique",label:"headline",hasVideo:this.getFeatures().hasVideo,hasPhoto:this.getFeatures().hasPhoto,hasSummary:this.getFeatures().hasSummary,position:"posicao "+String(this.getItemPosition()).padStart(4,"0")}
Object(P.default)(e,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const t=this.props
let e='tipo desconhecido "'+Object(V.get)(t,"key")+'"'
const n=Object(V.get)(t,"content.url")
if(n)e=n
else{const n=Object(V.get)(t,"content.video.id")
n&&(e="video "+n)}Object(z.reportToRealtime)("headlines",e)}getProps(){const{content:t}=this.props
return{summary:String(Object(V.get)(t,"summary")||"").trim(),status:Object(V.get)(this.props,"match.status")||"Encerrada",video:Object(V.get)(t,"video"),chapeuLabel:Object(V.get)(t,"chapeu.label"),imageSizes:Object(V.get)(t,"images.sizes"),imageUrl:String(Object(V.get)(t,"image.url")||"").trim(),videoKind:Object(V.get)(t,"video.kind"),highlights:Object(V.get)(this.props,"match.highlights")}}getItemPosition(){return this.props.index+1}}const yt=t=>Boolean(Et(t.srcElement,"bstn-hl-video")),Et=(t,e)=>{for(const n of function*(t){yield t
for(;t&&(t=t.parentElement);)yield t}(t))if(_t(n,e))return n},_t=(t,e)=>v()(t)&&t.classList.contains(e)
function Ot(){return(Ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}class St extends a.Engine.Component{getChildContext(){return{sharedHeadlineData:{reporter:new p.FeedReporter({area:u.DESKTOP_AREAS.HEADLINE})}}}render(){const{items:t}=this.props,e=i.At.screen(i.LARGE_SCREEN)?s.Configs.get("headlineVariation"):""
return a.Engine.createElement(d.ElementViewTrigger,{on:"partial",chain:"headlines",checkInterval:1e3},a.Engine.createElement("div",{className:l()("bstn-hls","xlarge-22","xlarge-offset-1","theme","model-"+t.length,{["variation-"+e]:e}),ref:wt},a.Engine.createElement(h.ElementViewGroup,{id:"headlines",radius:2},t.map((n,r)=>a.Engine.createElement(bt,Ot({index:r,key:r,isSingle:1===t.length&&0===r,isHalfSize:3===t.length&&r>=1,headlineVariation:e},n))))))}}const wt=t=>{const e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
if(t&&e){const e=t.offsetHeight
let n;(n=function(t,e){if(t instanceof e)return t}(t.firstElementChild,HTMLDivElement))&&e>400?n.style.height=e+"px":setTimeout(()=>wt(t),100)}}
function It(){return(It=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const Tt=(t,e)=>{let n
if(e.hasPhoto){const e=Object(S.choosePicture)(Object(V.get)(t,"content.image"),1,{height:1,width:1})
e&&(n='url("'+e+'")')}return n},Ct=({items:t})=>a.Engine.createElement(d.ElementViewTrigger,{on:"partial",checkInterval:1e3},a.Engine.createElement("div",{className:"bstn-uhl xlarge-22 xlarge-offset-1 theme"},a.Engine.createElement(jt,t[0])))
var xt=a.Engine.createElement(M.BadgeAoVivo,null)
class jt extends _.SeenTimeTelemetry{constructor(t){super(t),this.handleClick=t=>{if(this.reportClick(),!t.defaultPrevented){const t=this._refs.node.querySelector(".bstn-uhl-picture .bstn-uhl-link")
t&&(t.addEventListener("click",t=>{t.stopPropagation()},!1),setTimeout(()=>{t.click()},0))}},this.features=At(t),this.state={title:this.isMabEnabled()?"":Object(V.get)(t,"content.title"),backgroundImage:Tt(t,this.features)}}render(){const t=this.props,e=this.features
return a.Engine.createElement("div",{className:l()("bstn-uber-hl type-"+t.type,Pt(e))},a.Engine.createElement("div",{className:"bstn-uhl-picture",ref:Object(O.as)(this),onClick:this.handleClick,style:{"--bstn-uhl-cover":this.state.backgroundImage}},a.Engine.createElement("div",{className:"bstn-uhl-overlay"},Object(w.insertIf)(e.hasHat||e.isLive,()=>a.Engine.createElement("div",{className:"bstn-uhl-hatslot"},Object(w.insertIf)(e.isLive,()=>xt,()=>Object(w.insertIf)(e.hasHat,()=>a.Engine.createElement("span",{className:"bstn-uhl-hat"},Object(V.get)(t,"content.chapeu.label")))))),a.Engine.createElement("a",{className:"bstn-uhl-link",href:t.content.url},a.Engine.createElement(d.ElementViewTrigger,{on:"fitInScreen",tagName:"span"},a.Engine.createElement("span",{className:"bstn-uhl-title"},t.content.title))))),Object(w.insertIf)(e.hasSummary,()=>a.Engine.createElement("div",{className:"bstn-uhl-summary"},t.content.summary)),Object(w.insertIf)(e.hasRelated,()=>a.Engine.createElement("ul",{className:"bstn-uhl-relateds"},this.getRelateds().map((t,e)=>a.Engine.createElement(Nt,It({},t,{key:e}))))))}componentDidMount(){this.cdmSeenTimeTelemetry(),this.isMabEnabled()&&this.installMab()}componentWillUnmount(){this.cwuSeenTimeTelemetry()}isMabEnabled(){if(i.At.server)return!1
const t=Object(V.get)(this,"props.content.mab.experiment")
return Object(V.get)(this,"props.content.mab")&&$.ABStore.empty(t)}async installMab(){const t=Object(V.get)(this,"props.content.mab.experiment")
if(t)try{const e=new W.MAB,n=e.createExperiment(t),[r]=await e.choose([n])
if(!r)return
this.setState({title:this.props.content.mab.metadata[r.arm]}),this.mabRewardHandler=()=>r.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(e){Object(r.error)(e)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getRelateds(){return this.features.hasRelated&&this.props.aggregatedPosts?this.props.aggregatedPosts:[]}reportClick(){const t=Object(H.cloneJSON)(this.props)
t.bstn$source="headline",Object(q.triggerDomEvent)(b.ITEM_CLICK,document,e=>{e.data=t}),this.reportEvent(),this.reportToRealtime()}reportEvent(){const t={origin:this.props.type,action:"clique",label:"headline",hasVideo:!1,hasPhoto:this.features.hasPhoto,hasSummary:this.features.hasSummary,position:"posicao 0001"}
Object(P.default)(t,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const t=this.props
let e='tipo desconhecido "'+Object(V.get)(t,"key")+'"'
const n=Object(V.get)(t,"content.url")
if(n)e=n
else{const n=Object(V.get)(t,"content.video.id")
n&&(e="video "+n)}Object(z.reportToRealtime)("headlines",e)}}const At=t=>{const{content:e}=t
return{hasHat:Boolean(Object(V.get)(e,"chapeu.label")),hasPhoto:Boolean(Object(V.get)(e,"images.sizes")||String(Object(V.get)(e,"image.url")||"").trim()),hasRelated:!B()(t.aggregatedPosts),hasSummary:Boolean(String(Object(V.get)(e,"summary")||"").trim()),isLive:Object(V.get)(t,"cobertura.isLive")||Object(G.isLiveVideo)(Object(V.get)(e,"video.kind"))}},Pt=t=>({"with-hat":t.hasHat,"with-summary":t.hasSummary,"with-related":t.hasRelated,"is-live":t.isLive}),Nt=t=>{const e=Object(V.get)(t.content,"image.sizes.S.url"),n=Object(V.get)(t.content,"image.rightsHolder"),r={},i=Object(V.get)(t.content,"image")
return e&&n&&(r.alt=""+i.title+i.rightsholder?"Foto: ("+i.rightsholder:"",r.title=n),a.Engine.createElement("li",{className:"bstn-uhl-relateditem"},a.Engine.createElement("a",{className:"bstn-uhl-relatedlink",href:t.content.url},a.Engine.createElement("span",{className:"bstn-uhl-related gui-color-primary gui-color-hover"},t.content.title),Object(w.insertIf)(e,()=>a.Engine.createElement("span",{className:"bstn-uhl-relatedthumb",style:'background-image:url("'+String(e)+'")'},a.Engine.createElement("img",It({className:"bstn-uhl-relatedimage",src:e},r,{loading:"lazy"}))))))}
n.d(e,"Headlines",(function(){return Mt})),n.d(e,"consumeHeadlinePosts",(function(){return Lt})),n.d(e,"getHeadlinesQuantity",(function(){return Ht}))
let Rt,kt=0
const Dt={}
class Mt{static getInstance(){return Rt||(Rt=new Mt(Dt)),Rt}static getConsumed(){return kt}constructor(t){if(t!==Dt&&Object(r.warn)("Class Headlines is a singleton and shouldn't be called directly."),this.items=Lt(),this.items.length>0){const t="uber"===s.Configs.get("headlineVariation")&&i.At.screen(i.SMALL_SCREEN)?Ct:St
this.virtualElement=a.Engine.createElement(t,{items:this.items})}}}const Lt=()=>{let t=Ht()
const e=[]
if(t>0){const n=o.$Falkor.getInstance(),i=n.stream.subscribe({next(t){e.push(t),kt+=1},error:r.error,complete(){}})
for(;t>0;)t--,n.request({preventFetch:!0})
i.unsubscribe(),s.Configs.decr("recommendationStart",kt)}return e},Ht=()=>{let t=0
return t=s.Configs.get("headlinesNrPosts"),t}},function(t,e,n){"use strict"
n.r(e)
var r=n(189),i=n.n(r),o=n(16),s=n.n(o),a=n(77),c=n.n(a),l=n(133),u=n(20),h=n(55),d=n(23),p=n(70),f=n(136),m=n(82),g=n(29),v=n(26),b=n(71),y=n(186),E=n(224),_=n(164),O=n(163),S=n(226)
class w{constructor(){this.client=(new S.ABFactory).ab()
const t=Object(O.getCanonicalUri)()
t&&this.client.addHeader({"x-canonical-uri":t})}createExperiment(t,{context:e={},generateImpression:n=!1}={}){try{return this.client.createExperiment(t,e,n)}catch(r){return console.warn("[AB][error]:",r),null}}async choose(t,{glbExpIdToken:e=null,headers:n=null}={}){try{const{userId:r,userIdType:i,hsId:o}=await Object(O.getTrackingData)(this.client),s=await this.client.choose(t,r,e,o,n,i)
return s.experiments.map(t=>new I(this.client,t,s.glbExpIdToken,r,i,o))}catch(r){return console.error(r.message),[]}}}class I{constructor(t,e,n,r,i,o){this.ab=t,this.alt=e,this.glbExpIdToken=n,this.userId=r,this.userIdType=i,this.hsId=o}get name(){return this.alt.name}get alternative(){return this.alt.alternative}impression({headers:t=[],context:e=null}={}){const{name:n,testId:r,alternative:i}=this.alt
this.ab.impression({experiment:n,testId:r,alternative:i,context:e},this.userId,this.glbExpIdToken,this.hsId,t,this.userIdType)}conversion({headers:t=[],context:e=null}={}){const{name:n,testId:r,alternative:i}=this.alt
this.ab.conversion({experiment:n,testId:r,alternative:i,context:e},this.userId,this.glbExpIdToken,this.hsId,t,this.userIdType)}}var T=n(214),C=n(215),x=n(135),j=n(117),A=n(140),P=n(108),N=n(118),R=n(56),k=n(228),D=n(172),M=n(123),L=n(93)
n(109)
let H
function V(t){const e=[...t],n=[[1,2],[Number.POSITIVE_INFINITY,3]],r=[[7,8],[13,14]]
if(d.Globals.document.querySelector(l.BS_HOME)){for(const[t,r]of n)e.splice(t,0,{id:"banner_rm"+r,type:"advertise"})
for(const[t,n]of r)e.length>t&&e.splice(t,0,{id:"banner_rm__"+n,type:"advertise"})}return e}H=class extends M.SeenTimeTelemetry{constructor(){super(),this.state={items:V(this.getItems())},this.itemIndex=new D.ItemIndex}getChildContext(){return{root:this,areaId:"right-column",itemIndex:this.itemIndex,sharedFeedData:{reporter:new N.FeedReporter({area:j.DESKTOP_AREAS.RIGHT})}}}render(){return this.itemIndex.clear(),m.Engine.createElement(P.ElementViewTrigger,{on:"partial",chain:"rightColumn",checkInterval:1e3},m.Engine.createElement("div",{ref:Object(L.as)(this),id:"bstn-rtcl"},m.Engine.createElement(A.ElementViewGroup,{id:"rightColumn",radius:2},this.state.items.map((t,e)=>m.Engine.createElement(k.Item,{key:e,data:t,index:e+1})))))}componentDidMount(){this._refs.node.addEventListener("element-view",t=>t.stopPropagation())}getItems(){const t=[],e=x.$DistributedComponents.getInstance(),n=e.stream.subscribe({next:e=>{t.push(e)},error:()=>{},complete:()=>{}})
for(;!e.isEmpty();)e.request()
return n.unsubscribe(),e.stream.addListener({next:t=>this.setState({items:[...this.state.items,t]}),error:u.error,complete:()=>{}}),t}}
const U=H
let F
const B={}
class G{static getInstance(){return F||(F=new G(B)),F}constructor(t){t!==B&&Object(u.warn)("Class RightColumn is a singleton and shouldn't be called directly."),this.virtualElement=m.Engine.createElement(U)}}var z=n(24)
var q=n(22),W=n(15)
function $(){return($=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const Z=t=>{let e=Object(v.get)(t,"content.url")
return e||(Object(v.get)(t,"content.video.id")?e=t.content.video.id:t.id&&(e=t.id),e)},K=t=>{const{embedData:e,recommendationFirstFetch:n,displayedContentURLs:r}=t
r&&W.PostIndex.loadInitialURLs(r),z.Configs.absorbConfigs(e),e.items=(({items:t})=>t.filter((t,e,n)=>e===n.findIndex(e=>Z(e)===Z(t))))(e),(t=>{if(z.Configs.get("isHomeOrTopic")){const e=Object(g.getFirstPostWithImageForLCP)(t)
e&&(e.content.image.fastRender=!0)}})(e)
const{items:i,rest:o}=function(t){const e=z.Configs.get("recommendationStart")
let n=[],r=t.items
return e>0&&(n=t.items.slice(0,e-1),r=t.items.slice(e-1)),{items:n,rest:r}}(e),s=((t,e)=>()=>{Array.isArray(e)&&e.length>0&&t.store(e)})(q.$Falkor.getInstance($({},e,{items:i})),o)
if(x.$DistributedComponents.getInstance(e),n){z.Configs.set("recommendationTag",n.tag)
let t=!1
n.experimentData.experiment&&(d.Globals.bstn.experimentData=n.experimentData,t=n.experimentData.experiment.length>0),z.Configs.set("isRecEditorial",t),z.Configs.set("recLastPosition",30)
const e=f.$Recommendation.getInstance(n)
t?s():e.stream.addListener({next:()=>{},error:()=>{},complete:s})}else s()}
function J(){return(J=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}n.d(e,"moveForePostsUp",(function(){return et})),n.d(e,"setupPostABs",(function(){return ct})),n.d(e,"launch",(function(){return lt}))
const Q=/[#?].*$/,X=/^https?:\/\//,Y=d.Globals.location.href.replace(Q,"").replace(X,""),tt=t=>{let e=t.items.length
for(;e--;){String(Object(v.get)(t.items[e],"content.url")).trim().replace(X,"").replace(Q,"")===Y&&t.items.splice(e,1)}},et=t=>{const e=Object(g.getNrHeadlines)(t)
if(Object(g.hasHeadlines)(t)){let n=e-1,r=1
const i=Object(v.get)(t,"forePosts")
if(i)for(let e=0;e<i.length&&n>0;e++)t.items.splice(r,0,i[e]),r+=1,Z(i[e])!==Z(t.items[0])&&(n-=1)}},nt=(t,e)=>{Object(b.triggerDomEvent)(p.LAUNCH_FAILED,d.Globals.document,e=>{e.component=t})
const n=['Impossible to initialize Bastian "'+t+'".',e]
e.stack&&n.push(e.stack),Object(u.error)(...n)},rt=()=>{const t='There is no such placeholder with selector "',e=[[l.HEADLINES_PLACEHOLDER,"headlines",()=>Object(u.info)(""+t+l.HEADLINES_PLACEHOLDER+'"')],[l.PLACEHOLDER,"feed",()=>nt("Feed",""+t+l.PLACEHOLDER+'"')]]
h.At.largeScreen&&e.push([l.AREATEMPLATE_DIREITA,"rightColumn",()=>Object(u.info)(""+t+l.AREATEMPLATE_DIREITA+'"')])
const n={}
return e.forEach(([t,e,r])=>{const i=(t=>d.Globals.document.querySelector(t))(t)
i?n[e]=i:r()}),n},it=t=>{var e,n,r,o
const{recommendationFirstFetch:s,embedData:a}=t,c=null===(e=a.config)||void 0===e||null===(n=e.recommendation)||void 0===n?void 0:n.active,l=null===(r=a.config)||void 0===r||null===(o=r.recommendation)||void 0===o?void 0:o.start
if(s){if(c&&(null==s||!s.items.length)&&a.items.length){const t=l-1,e=l+9,n=a.items.map((n,r)=>(n.position=r+1,r>=t&&r<e&&(n=((t,e)=>{var n
return{id:t.id,feedId:t.feedId,lastPublication:t.lastPublication,modified:t.modified,content:J({url:"video"===t.type?null===(n=t.content.video)||void 0===n?void 0:n.url:t.content.url},i()(t.content)),aggregatedPosts:t.aggregatedPosts||[],publication:t.publication,created:t.created,position:t.position,tenantId:t.tenantId,type:t.type,_experiment_properties:e.experimentData,_documentKey:""+e.tag}})(n,s),z.default.set("lastRecWasInserted",!0)),n)).map(f.prepare)
a.items=n}s.items=s.items.map(f.prepare),tt(s)}if(a){var u
R.Settings.get("HAS_HOMELIVE")||!1||"home-api"!==(null==a||null===(u=a.atreyu)||void 0===u?void 0:u.api)||et(a),tt(a)}},ot=d.Globals.document,{showSLBMeio:st=!1}=window,at=t=>ot.querySelector(t),ct=async t=>{if(!t)return
const e=[{name:({tenant:t})=>"feed-"+t+"-post-video-v1",tenants:[],globalsName:"postVideoAB"},{name:({tenant:t})=>"feed-"+t+"-video-preview-v2",tenants:["g1","dev-beta"],globalsName:"postVideoPreviewAB",check:()=>Object(E.hasVideoPreviewSupport)(!0)},{name:"feed-redeglobo-lazyload-gpt-v2",tenants:["redeglobo"],globalsName:"adsLazyLoad"},{name:({tenant:t})=>"feed-"+t+"-post-video-redirect-v1",tenants:["ge","g1","off","multishow"],globalsName:"postVideoRedirectAB"},{name:({tenant:t})=>t+"-layout-2025-feed-labels-v1",tenants:["g1"],globalsName:"postTagAB"}].filter(O.ABUtils.canRun).map(e=>{const n="string"!=typeof e.name?O.ABUtils.buildName(e.name):e.name
return{name:n,key:e.globalsName,instance:t.createExperiment(n)}})
if(0===e.length)return
return(await t.choose(e.map(({instance:t})=>t))).forEach(t=>{const n=e.find(({name:e})=>e===t.name)
n&&_.ABStore.save({key:n.key,alt:t})}),!0},lt=s()(t=>{it(t),K(t)
const e=(t=>{const e="bstn-rtcl-placeholder"
if("rightColumn"in t&&null===ot.getElementById(e)){const n=ot.createElement("div")
n.id=e
const r=t.rightColumn
c()(r)&&(r.firstElementChild?r.insertBefore(n,r.firstElementChild):r.appendChild(n)),t.rightColumn=n}return t})(rt()),n=function(t){const e={}
let n=[]
if(t&&t.headlines){const t=C.Headlines.getInstance()
C.Headlines.getConsumed()>0&&t.virtualElement&&(e.headlines=t.virtualElement,n=t.items)}else z.Configs.get("hasCustomHeadlines")&&z.Configs.get("hasHeadlinesToRender")&&(n=Object(C.consumeHeadlinePosts)())
return globalThis.feedClient&&globalThis.feedClient.setHeadlines(n),T.Feed.getInstance().virtualElement&&(e.feed=T.Feed.getInstance().virtualElement),G.getInstance().virtualElement&&(e.rightColumn=G.getInstance().virtualElement),e}(e),r=new w
ct(r).then(()=>{((t,e)=>{for(const r in t){const i=t[r],o=e[r]
if(i&&c()(o))try{o.innerHTML="",m.Engine.render(i,o)}catch(n){nt(r,n)}}})(n,e)}),Object(y.setupVideoPreviewViewportObserver)(),(t=>{const e=at(l.BANNER_SLB_MEIO),n=at(l.SHOWTIME_INITIALIZED),r=R.Settings.get("HAS_HOMELIVE")||!1
if(h.At.largeScreen&&!e&&(t||r||n||st)){const t=at(l.AREATEMPLATE_ESQUERDA)
if(t){const e=t.parentNode,n=ot.createElement("div")
n.setAttribute("class","row show-for-medium-up"),n.innerHTML='<div class="column medium-24 large-24 large-offset-0 xlarge-22 xlarge-offset-1"><div class="publicidade publicidade-banner_slb_meio"><glb-ad data-position="banner_slb_meio"></glb-ad></div></div>',e.parentNode.insertBefore(n,e)}}})(n.headlines)})},function(t,e,n){"use strict"
n.r(e)
var r=n(16),i=n.n(r),o=n(77),s=n.n(o),a=n(102),c=n.n(a),l=n(5),u=n.n(l),h=n(23),d=n(26),p=n(57),f=n(20),m=n(61)
const g=(t,e)=>n=>{if(!(t=>!(!t||!Object(p.has)(t,"slot.u.o")&&!Object(p.has)(t,"slot.getSlotElementId"))||(Object(f.warn)("mab:vwblt path to creative name seems broken"),!1))(n))return
return(t=>Object(d.get)(t,"slot.u.o")||Object(d.get)(t,"slot.getSlotElementId")())(n)===t.props.id?e(n):void 0}
var v=n(55),b=n(111),y=n(82),E=n(117),_=n(56),O=n(93),S=n(1),w=n.n(S),I=n(6),T=n.n(I),C=n(173),x=n.n(C)
const j={SSR_HEADLINES:!0,AB_SUMMARY_VISIBILITY:null,FORCE_STICKY:!1};(t=>{if(T()(t)&&!x()(t))for(const e of Object.keys(j))e in t&&(j[e]=t[e])})((t=>{if(w()(t)&&t.length>0)try{const e=decodeURIComponent(escape(atob(t)))
return JSON.parse(e)}catch(e){Object(f.error)(e)}})((()=>{const t=h.Globals.location.hash
if(t.includes("bstnflags=")){const e=t.indexOf("bstnflags=")+"bstnflags=".length,n=t.indexOf("&",e),r=[e]
n>=0&&r.push(n)
return t.slice(...r)}})()))
var A=n(164)
function P(){return(P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}const N=t=>{const e=A.ABStore.alternative(t.experimentName)
return t.render({convert:()=>{e&&e.conversion()},imprint:()=>{e&&e.impression()},getAlternative:()=>e})}
var R=n(162)
n.d(e,"isRelativeWidth",(function(){return U}))
class k extends y.Engine.Component{constructor(t){super(t),this.buildTargeting=()=>{const t={abAlternative:this.mabAlternative&&this.mabAlternative.alt||"control",feed:1}
return this.lazyGPTNative&&(t.gptLazyload=!0),JSON.stringify(t)},this.renderSkeleton=()=>{const{adHeightStr:t,isEmpty:e}=this.state,n=this.buildTargeting()
if(this.hasSmartAd){if(!0===e){const e={"--skeleton-width":"100%","--skeleton-height":t},r={"--smart-ad-height":t},i=c()("bstn-ad-rail",{"bstn-ad-rail--expanded":!1,"bstn-ad-rail--collapsed":!0})
return y.Engine.createElement("div",{className:i,style:r},y.Engine.createElement("div",{className:"content-ads__skeleton glb-skeleton-box",style:e}),y.Engine.createElement("glb-ad",{"data-position":this.props.id,"data-targeting":n,id:this.props.id,ref:Object(O.as)(this)}))}if(!1===e){const e={"--smart-ad-height":t,"min-height":this.minHeightStr},r=c()("bstn-ad-rail",{"bstn-ad-rail--expanded":!0,"bstn-ad-rail--collapsed":!1})
return y.Engine.createElement("div",{className:r,style:e},y.Engine.createElement("glb-ad",{"data-position":this.props.id,"data-targeting":n,id:this.props.id,ref:Object(O.as)(this)}))}const r={"--skeleton-width":"100%","--skeleton-height":t},i={"--smart-ad-height":t,"min-height":this.minHeightStr},o=c()("bstn-ad-rail",{"bstn-ad-rail--expanded":!0,"bstn-ad-rail--collapsed":!1})
return y.Engine.createElement("div",{className:o,style:i},y.Engine.createElement("div",{className:"content-ads__skeleton glb-skeleton-box",style:r}),y.Engine.createElement("glb-ad",{"data-position":this.props.id,"data-targeting":n,id:this.props.id,ref:Object(O.as)(this)}))}return y.Engine.createElement("glb-ad",{"data-position":this.props.id,"data-targeting":n,id:this.props.id,ref:Object(O.as)(this)})},this.renderAds=t=>y.Engine.createElement("div",{className:t,ref:Object(O.as)(this,"placeholder")},this.renderSkeleton()),this.sendABImpression=g(this,async()=>{this.props.convert()}),this.checkMABImpression=g(this,async()=>{this.mabAlternative&&this.mabAlternative.increment(),$(this.props.id)&&this.mabAlternative&&this.mabAlternative.reward(),this.props.convert(),this.configureTimeoutBannerStick()}),this.configureTimeoutBannerStick=()=>{this.isBannerStickable()&&setTimeout(()=>{!1===Object(b.getVisibility)(this._refs.placeholder).isVisible&&this._refs.node.classList.remove("bstn-ad-visible"),setTimeout(()=>{this.setState({isSticky:!1})},1e3)},3e3)},this.setAsLoaded=g(this,t=>{if("banner_mobile1"===this.props.id&&this._refs.node.classList.add("bstn-ad-visible"),this.isBannerStickable()){const t=50===this.adHeight?50:100
this.setState({isSticky:!0,stickySize:"bstn-sticky-"+t+"px"})}this.props.imprint()}),this.hasVisibleAdContent=()=>{if(!this._refs||!this._refs.node)return!1
const t=this._refs.node.querySelector("iframe")
if(!t)return!1
const e=h.Globals.getComputedStyle(t)
if(e&&("none"===e.display||"hidden"===e.visibility))return!1
const n=t.getAttribute("id")||""
if("true"===t.getAttribute("data-is-safeframe")||n.includes("google_ads_iframe_"))return!0
const r=t.getBoundingClientRect(),i=t.parentElement,o=i?i.getBoundingClientRect():null,s=r.height||o&&o.height||0,a=Number(t.getAttribute("height")||0),c="true"===t.getAttribute("data-load-complete")
return!!(s>=35||a>=35||c)},this.hasPendingAdRequest=()=>{if(!this._refs||!this._refs.node)return!1
const t=this._refs.node.getAttribute("data-google-query-id")||this._refs.node.querySelector("[data-google-query-id]"),e=this._refs.node.querySelector('[id*="google_ads_iframe_"]')
return Boolean(t||e)},this.ensureAdVisible=()=>{this._refs&&this._refs.node&&this._refs.node.style&&"none"===this._refs.node.style.display&&this.hasPendingAdRequest()&&(this._refs.node.style.display="block")},this.normalizeIsEmpty=t=>"boolean"==typeof t?t:"true"===t||"false"!==t&&(1===t||0===t?Boolean(t):"1"===t||"0"===t?"1"===t:void 0),this.applyAdState=(t,e)=>{const n=(!e||e<35)&&!t,r=!0===t,i=r||n?this.state.adHeight:e,o=r?this.state.adHeightStr:n?"auto":i+"px"
this.minHeightStr=r||n?this.minHeight+"px":"0px",H()||F(this._refs.container,U(this._refs.node)),this.setState({adHeight:i,adHeightStr:o,isEmpty:t})},this.adServerOnSlotRenderEnded=t=>{const e=this.props.id,n=t=>(t||"").replace(/_feed$/,"")
if(n(t.id_elemento||t.divId||t.detail&&(t.detail.id_elemento||t.detail.divId)||t.evento_original&&(t.evento_original.id_elemento||t.evento_original.divId))!==n(e))return
const r=t.evento_original||t.detail&&t.detail.evento_original,i=t.gamEvent||t.detail&&t.detail.gamEvent,o=t.size||t.detail&&t.detail.size||r&&r.size,s=Array.isArray(o)?o[1]:0,a=s>=35,c=void 0!==t.isEmpty?t.isEmpty:t.detail&&void 0!==t.detail.isEmpty?t.detail.isEmpty:r&&r.isEmpty
let l=this.normalizeIsEmpty(c)
const u=void 0!==t.publicidade_visivel?t.publicidade_visivel:t.detail&&void 0!==t.detail.publicidade_visivel?t.detail.publicidade_visivel:r&&r.publicidade_visivel,h=this.normalizeIsEmpty(u),d=i||r,p=Boolean(d&&(d.advertiserId||d.campaignId||d.lineItemId||d.creativeId||d.creativeTemplateId))
if((!0===h||p)&&(l=!1),void 0===l){if(!a)return
l=!1}return!0===l&&!this.hasVisibleAdContent()&&this.hasPendingAdRequest()?(!0===this.state.isEmpty&&this.setState({isEmpty:void 0}),this.ensureAdVisible(),this.emptyConfirmTimeout&&clearTimeout(this.emptyConfirmTimeout),void(this.emptyConfirmTimeout=setTimeout(()=>{this.hasVisibleAdContent()?this.applyAdState(!1,s):this.hasPendingAdRequest()||this.applyAdState(!0,s)},1e3))):!0!==l||this.hasVisibleAdContent()||a?(!0===l&&(this.hasVisibleAdContent()||a)&&(l=!1),this.skeletonCollapseTimeout&&clearTimeout(this.skeletonCollapseTimeout),this.emptyConfirmTimeout&&clearTimeout(this.emptyConfirmTimeout),!1===l&&this.ensureAdVisible(),void this.applyAdState(l,s)):(this.emptyConfirmTimeout&&clearTimeout(this.emptyConfirmTimeout),void(this.emptyConfirmTimeout=setTimeout(()=>{const t=!this.hasVisibleAdContent()
this.applyAdState(!!t,s)},1e3)))},this.isBannerStickable=()=>v.At.smallScreen&&"banner_mobile1"===this.props.id&&(j.FORCE_STICKY||this.adHeight>=50&&this.adHeight<=100),this.shouldAdHaveSkeleton=t=>Boolean(ct(t)),this.lazyGPTNative=this.props.getAlternative&&"lazyload-nativo-google"===this.props.getAlternative(),this.hasSmartAd=this.shouldAdHaveSkeleton(t.id)
const e=ct(t.id),n=(null==e?void 0:e.height)||0
this.minHeight=(null==e?void 0:e.minHeight)||0,this.minHeightStr=this.minHeight+"px",this.state={adHeight:n,adHeightStr:n+"px",isEmpty:void 0,isSticky:!1,stickySize:""}}render(){const t=c()(this.state.stickySize,{"bstn-ad-sticky":this.state.isSticky,"bstn-ad-smart":this.hasSmartAd})
return y.Engine.createElement("div",{className:"bstn-feed-ad",ref:Object(O.as)(this,"container")}," ",this.renderAds(t)," ")}async componentDidMount(){this.skeletonCollapseTimeout=setTimeout(()=>{if(void 0===this.state.isEmpty){if(this.hasVisibleAdContent())return void this.setState({isEmpty:!1})
this.setState({isEmpty:!0})}},5e3),window.document.addEventListener("adserver-ad-rendered",this.adServerOnSlotRenderEnded),this._refs&&this._refs.node&&(this.adVisibilityObserver=new h.Globals.MutationObserver(()=>{this.ensureAdVisible(),!1!==this.state.isEmpty&&(!0===this.state.isEmpty&&this.hasPendingAdRequest()?this.setState({isEmpty:void 0}):this.hasVisibleAdContent()&&(this.skeletonCollapseTimeout&&clearTimeout(this.skeletonCollapseTimeout),this.emptyConfirmTimeout&&clearTimeout(this.emptyConfirmTimeout),this.setState({isEmpty:!1})))}),this.adVisibilityObserver.observe(this._refs.node,{childList:!0,subtree:!0,attributes:!0}),this.ensureAdVisible(),this.hasVisibleAdContent()&&this.setState({isEmpty:!1}))
const t=G(this.props.id),e=new R.MAB,n=e.createExperiment(t)
if("right-column"!==this.context.areaId){const[t]=await e.choose([n])||[]
this.mabAlternative=t,this.forceUpdate()}if(await(async()=>{const t=()=>!!h.Globals.document.querySelector('script[src$="gpt.js"]')
if(await Object(m.availabilityOf)("gpt.js",t,500),!t())return!1
const e=()=>u()(Object(d.get)(h.Globals,"googletag.pubads"))
return await Object(m.availabilityOf)("googletag.pubads",e),e()})()){const t=h.Globals.googletag.pubads()
t.addEventListener("slotOnload",this.setAsLoaded),this.lazyGPTNative?(this.mabAlternative&&this.mabAlternative.increment(),t.addEventListener("impressionViewable",this.sendABImpression)):t.addEventListener("impressionViewable",this.checkMABImpression)}}componentWillUnmount(){window.document.removeEventListener("adserver-ad-rendered",this.adServerOnSlotRenderEnded),this.skeletonCollapseTimeout&&clearTimeout(this.skeletonCollapseTimeout),this.emptyConfirmTimeout&&clearTimeout(this.emptyConfirmTimeout),this.adVisibilityObserver&&this.adVisibilityObserver.disconnect()}}k.FACE="publicidade",k.SIZE=E.POST_SIZES.MEDIUM
const D=(M="adsLazyLoad",L=k,t=>y.Engine.createElement(N,{experimentName:M,render:({convert:e,imprint:n,getAlternative:r})=>y.Engine.createElement(L,P({},t,{convert:e,imprint:n,getAlternative:r}))}))
var M,L
D.FACE=k.FACE,D.SIZE=k.SIZE
e.default=D
const H=i()(()=>h.Globals.document.getElementsByClassName("areatemplate-direita").length>0),V=/^([^0]\d*%|auto)$/,U=t=>{const e=t.querySelector("iframe"),n=t.parentElement,r=t=>V.test(t.width)||V.test(t.minWidth)
return!!e&&(s()(n)?r(e.style)||r(n.style):r(e.style))},F=(t,e)=>{t&&(e?t.classList.add("bstn-fd-elastic-banner"):t.classList.remove("bstn-fd-elastic-banner"))},B=v.At.smallScreen?"mobile":"desktop",G=t=>"bastian-advwblt-r5:"+_.Settings.get("PORTAL")+":"+B+":"+nt+":"+(W(t)||""),z={banner_mobile1:"mobile1",banner_feed_especial:"ep",banner_rm2_feed:"banner2",banner_rm3_feed:"banner3"},q={banner_feed__:"dinamico",banner_middle_feed__:"middle"},W=t=>{const e=Object.keys(q).find(e=>t.startsWith(e))
return e?q[e]:z[t]},$=t=>Boolean(W(t)),Z=t=>h.Globals.document.body.classList.contains(t),K=Z("bs-home"),J=Z("multicontent"),Q=Z("poll-container"),X=Z("cb-live"),Y=Z("bs-tabela"),tt="/"===h.Globals.location.pathname,et={homeprincipal:K&&tt,home:K&&!tt,multicontent:J,votacao:Q,cobertura:X,tabela:Y},nt=(Object.entries(et).filter(([,t])=>t)[0]||[""])[0],rt={mobile:250,desktop:226},it={mobile:250,desktop:454},ot=rt[B],st=it[B],at=[{pattern:/banner_mobile1/,height:st,minHeight:ot},{pattern:/banner_rm2_feed/,height:st,minHeight:ot},{pattern:/banner_rm3_feed/,height:st,minHeight:ot},{pattern:/banner_feed__/,height:st,minHeight:ot},{pattern:/banner_middle_feed__/,height:st,minHeight:ot},{pattern:/banner_feed_especial/,height:v.At.smallScreen?368:it.desktop,minHeight:v.At.smallScreen?157:rt.desktop},{pattern:/banner_feed_placarge__/,height:st,minHeight:ot}],ct=t=>at.find(({pattern:e})=>e.test(t))},function(t,e,n){"use strict"
n.r(e)
var r=n(10),i=n.n(r),o=n(5),s=n.n(o),a=n(82),c=n(117),l=a.Engine.createElement("div",null)
class u extends a.Engine.Component{componentDidMount(){s()(this.props.onPlaceholderMount)&&this.props.onPlaceholderMount(this.context.item)}render(){return l}}u.FACE="placeholder",u.SIZE=c.POST_SIZES.MEDIUM
var h=n(20),d=n(133),p=n(70),f=n(55),m=n(75),g=n(23),v=n(134),b=n(93)
let y
const E=()=>["interactive","complete"].includes(g.Globals.document.readyState),_=new Promise(t=>{E()?t():document.addEventListener("readystatechange",()=>{E()&&t()})})
y=()=>_
const O=y
var S=n(26),w=n(68),I=n(71)
n.d(e,"exposable",(function(){return P})),n.d(e,"$Cards",(function(){return k}))
class T extends a.Engine.Component{answerInvitation(){return!0}shouldComponentUpdate(){return!1}componentDidMount(){this.customComponentDidMount&&Object(w.safeCall)(this.customComponentDidMount,this)
const t=Object(S.get)(this,"_refs.node.firstElementChild.firstElementChild")
t&&Object(I.triggerDomEvent)(p.CARD_RENDERED,t),C.upgrade(this.context.sharedItemData,{face:"card",size:c.POST_SIZES.MEDIUM})}render(){return null}}class C extends v.ItemReporter{get postId(){return this.itemReference._refs.item.textContent.split("\n")[0].trim().toLowerCase()}}function x(t){t.componentDidMount&&(t.customComponentDidMount=t.componentDidMount,delete t.componentDidMount)
class e extends T{}return Object.assign(e.prototype,t),t.klass=e,t}function j(t){return function(){return a.Engine.createElement("div",{ref:Object(b.as)(this),dangerouslySetInnerHTML:{__html:t}})}}function A(t){return t.parentNode&&t.parentNode.removeChild&&t.parentNode.removeChild(t),x({rawHTML:t.outerHTML,render:j(t.outerHTML)})}const P={BaseCard:T,create:x,rawHTMLRender:j,embededHTMLCardFactory:A,defaultCardFactory:A}
let N
const R={}
class k{static getInstance(){return N||(N=new k(R)),N}constructor(t){this.buffer=[],this.placeholders=[],this.emitter=new m.EventEmitter,this.pageScanned=!1,t!==R&&Object(h.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=i.a.create({start:t=>{this.listener=t},stop:()=>{this.listener=null}}),f.At.largeScreen||this.performCollect()}async performCollect(){await O(),this.collect()}collect(){const t=Array.from(g.Globals.document.querySelectorAll(d.CARD)).map(t=>Object(S.get)(t,"firstElementChild.cardComponent")||A(t))
t.slice().forEach(e=>{const n=this.placeholders.shift()
if(n&&n.placeInfo){const e=this.doInvitations(t,n.placeInfo)
if(e)return void this.assignCardToPlaceholder(n,e)}this.buffer.push(e)}),this.pageScanned=!0}doInvitations(t,e){let n,r=!1
const i=[]
for(;!1===r&&(n=t.shift());){try{r=Object(S.get)(n,"klass.prototype.answerInvitation")(e)}catch(o){Object(h.warn)("Soft error: failed to invite card",n),Object(h.error)(o)}!1===r&&i.push(n)}if(t.push(...i),!0===r)return n}assignCardToPlaceholder(t,e){t.card=e,t.klass=e.klass,null!==t.item&&t.item.forceUpdate()}request(t){if(!f.At.smallScreen||!this.listener)return!1
{const e=this.listener,n={id:"card-"+String(Math.random()).substr(2,6),type:"card",card:null,item:null,klass:u,placeInfo:t,onPlaceholderMount:t=>{n.item=t},source:k.staticName},r=this.doInvitations(this.buffer,t)
if(!r&&this.pageScanned)return!1
r?this.assignCardToPlaceholder(n,r):this.pageScanned||this.placeholders.push(n),e.next(n)}}}k.staticName="$Cards"},function(t,e,n){"use strict"
n.r(e)
var r=n(5),i=n.n(r),o=n(20),s=n(23),a=n(61),c=n(26)
let l
const u=["_trackEvent","feed","feed"]
let h=[]
l=t=>{h.push(u.slice().concat(t))},(async()=>{if(await Object(a.availabilityOf)("trackerBuilder",()=>[s.Globals.trackerBuilder].every(d),"3s"),s.Globals.trackerBuilder){const t=s.Globals.trackerBuilder().addGA4().addUA({sender:"push"}).build()
h.forEach(e=>t.push(e)),h=t}})()
const d=t=>i()(Object(c.get)(s.Globals,String(t))),p=l
var f=n(1),m=n.n(f),g=n(138),v=n(139),b=n.n(v),y=n(10),E=n.n(y),_=n(75),O=n(56),S=n(24)
let w,I=null
class T extends _.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==S.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){s.Globals.location.hostname.includes(".qa.")&&g.Settings.useQAConfiguration()
const t=O.Settings.get("PORTAL"),e=O.Settings.get("DEVICE_GROUP")
m()(t)&&m()(e)?I=new g.HorizonClient(t.toLowerCase(),e.toLowerCase(),"feed"):Object(o.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const t=E.a.periodic(1e4).filter(()=>"visible"===s.Globals.document.visibilityState),e=E.a.periodic(6e4)
E.a.merge(t,e).compose(b()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report([t,e]){const n={id:"common-event",version:"0.1",contentType:"common",properties:{eventCategory:"feed",eventAction:t,eventLabel:e}}
I&&I.send(n)}}w=new T
const C=w,x=(t,e)=>e?"com video":t?"com foto":"sem midia"
e.default=(t,e,n)=>{const r={GA:p,CommonEvents:C.report}
let i
i=n&&n.generateLabel?(({action:t,label:e,hasVideo:n,hasPhoto:r,hasSummary:i,position:o})=>t&&e&&o?[t,e,x(r,n),(i?"com":"sem")+" resumo",o].join(" | "):null)(t):t.label
const{origin:o}=t
o&&null!==i&&e.forEach(t=>r[t]([o,i]))}},function(t,e,n){"use strict"
n.r(e)
var r=n(77),i=n.n(r),o=n(19),s=n.n(o),a=n(80),c=n(20),l=n(82),u=n(23),h=n(83),d=n(222),p=n(223),f=n(24),m=n(103)
const g=t=>l.Engine.createElement("div",{className:"feed-post-metadata"},Object(m.insertIf)(!1===f.Configs.get("disableDateTime"),()=>t.date),t.section)
var v=n(104),b=n(105),y=n(106),E=n(107),_=n(112),O=n(116)
function S(){return(S=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}let w
function I(t,e={}){const n=(w&&i()(w)||(w=u.Globals.document.createElement("div")),w.innerHTML="",w)
if(n.innerHTML=Object(a.default)(l.Engine.createElement(t,e)),i()(n.firstChild))return n.removeChild(n.firstChild)}n.d(e,"Relateds",(function(){return T})),n.d(e,"Relacionados",(function(){return C})),n.d(e,"Cover",(function(){return x})),n.d(e,"Foto",(function(){return j})),n.d(e,"Datetime",(function(){return A})),n.d(e,"Datahora",(function(){return P})),n.d(e,"Header",(function(){return N})),n.d(e,"Chapeu",(function(){return R})),n.d(e,"Metadata",(function(){return k})),n.d(e,"Metadados",(function(){return D})),n.d(e,"Section",(function(){return M})),n.d(e,"Secao",(function(){return L})),n.d(e,"Summary",(function(){return H})),n.d(e,"Sumario",(function(){return V})),n.d(e,"Title",(function(){return U})),n.d(e,"Titulo",(function(){return F})),n.d(e,"Video",(function(){return B})),n.d(e,"PlayIcon",(function(){return G})),n.d(e,"IconePlay",(function(){return z}))
const T=({showThumbs:t=!1,showDate:e=!0,items:n})=>{const r={}
return e&&(r.dateFactory=({age:t})=>t?l.Engine.createElement(d.Datetime,{ageInSeconds:t}):null),I(()=>l.Engine.createElement(v.Relateds,S({showThumbs:t,items:n},r)))},C=T,x=t=>{const{imagesCollection:e,alt:n}=t
return I(h.Cover,{alt:n,images:e})},j=x,A=({ageInSeconds:t,time:e})=>(!t&&e&&(t=e,Object(c.warn)('Use of "time" attribute is deprecated on "toolkit.ui.Datetime". Use "ageInSeconds" instead.')),I(d.Datetime,{ageInSeconds:t})),P=A,N=t=>I(p.Header,{content:{chapeu:{label:t.label}}}),R=N,k=(...t)=>{const e=I(g)
if(e)return s()(t).forEach(t=>e.appendChild(t)),e},D=k,M=({text:t})=>I(b.Section,{text:t}),L=M,H=({text:t})=>I(y.Summary,{text:t}),V=H,U=({text:t})=>I(E.Title,{text:t}),F=U,B=t=>{const{alt:e,image:n,url:r}=t,i=t.video
return I(_.Video,{title:e,image:n,video:i,url:r})},G=()=>I(O.VideoPlay),z=G},function(t,e,n){"use strict"
n.r(e)
var r=n(73),i=n.n(r),o=n(5),s=n.n(o),a=n(10),c=n.n(a),l=n(20),u=n(24),h=n(74),d=n(23),p=n(15),f=n(75)
let m
m=class extends f.EventEmitter{constructor(t,e){super()
try{const n=new d.Globals.PushStream({host:t,port:80,longPollingInterval:6e4,reconnectOnChannelUnavailableInterval:6e4,modes:"websocket|eventsource|stream|longpolling"})
n.onmessage=({method:t,resourceId:e,resource:n})=>{this.trigger(t,{resourceId:e,resource:n})},n.removeAllChannels(),n.addChannel(e),n.connect(),this.pushStream=n}catch(n){Object(l.error)(n)}}}
const g=m
var v=n(56),b=n(61),y=n(76)
function E(){return(E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}let _
n.d(e,"$PushStream",(function(){return S}))
const O={}
class S{static getInstance(){return _||(_=new S(O)),_}constructor(t){this.buffer=[],this.initPushStreamClient=()=>{const t=new g(v.Settings.get("PUSHSTREAM_HOST"),"p.bastian-posts-"+u.Configs.get("feedId"))
t.on("create",t=>{if(t){const{resourceId:e,resource:n}=t
n.key=n.id||e,n.arrived=Object(y.now)(),n.source=S.staticName,p.PostIndex.has(n)||(p.PostIndex.register(n),this.buffer.push(n),this.counterListener&&this.counterListener.next(this.buffer.length))}}),t.on("error",()=>{Object(l.error)("Couldn't connect Bastian on PushStream channel")}),t.on("disconnect",()=>{Object(l.warn)("Disconnected from the PushStream channel")})},t!==O&&Object(l.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=c.a.create({start:t=>{this.listener=t},stop:()=>{this.listener=null}}),this.counterStream=c.a.create({start:t=>{this.counterListener=t},stop:()=>{this.counterListener=null}})
const e=h.DEVICES[v.Settings.get("DEVICE_GROUP","desktop")]
v.Settings.has("PUSHSTREAM_HOST")&&e<=h.DEVICES.smart&&i()(async()=>{const t=()=>s()(d.Globals.PushStream)
await Object(b.availabilityOf)("PushStream client",t,"20s"),t()&&this.initPushStreamClient()},1e4)}request(){const t=this.buffer
if(this.listener&&t.length>0){const e=this.listener,n=Object(y.now)()
t.map(t=>t.arrived?E({},t,{age:parseInt((n-t.arrived)/1e3)}):t),e.next(t.splice(0,t.length)),this.counterListener&&this.counterListener.next(0)}}}S.staticName="$PushStream"},function(t,e,n){"use strict"
n.r(e)
var r=n(82)
const i=86400,o=365*i,s=[[60,"Agora",1],[90,"Há 1 minuto",1],[3600,"minutos",60],[5400,"Há 1 hora",1],[i,"horas",3600],[129600,"Ontem",1],[7*i,"dias",i],[907200,"Há 1 semana",1],[2628e3,"semanas",604800],[3942e3,"Há 1 mês",1],[o,"meses",2628e3],[1.5*o,"Há 1 ano",1],[Number.POSITIVE_INFINITY,"anos",o]]
function a(t){if(!t.publication&&!t.ageInSeconds)return null
if(t.isRecommended)return null
return r.Engine.createElement("span",{className:"feed-post-datetime"},(()=>{if(t.publication){const e={hour:"numeric",minute:"numeric"}
return new Date(t.publication).toLocaleDateString("pt-BR",e)}return function(t){if(void 0===t)return""
for(const[e,n,r]of s)if(t<e)return 1===r?n:"Há "+Math.round(t/r)+" "+n
return""}(t.ageInSeconds)})())}n.d(e,"Datetime",(function(){return a}))},function(t,e,n){"use strict"
n.r(e)
var r=n(102),i=n.n(r),o=n(82),s=n(26),a=n(103)
const c={urgente:{text:"Urgente",classes:"feed-post-header-chapeu-tag--urgente",classBefore:"icon-chapeu-tag icon-chapeu-tag-warning"},"conteudo-sensivel":{text:"Conteúdo sensível",classes:"feed-post-header-chapeu-tag--sensivel",classBefore:"icon-chapeu-tag icon-chapeu-tag-warning"},viralizou:{text:"Viralizou",classes:"feed-post-header-chapeu-tag--viralizou",classBefore:"icon-chapeu-tag icon-chapeu-tag-viral"},"mais-lida":{text:"Mais Lida",classes:"feed-post-header-chapeu-tag--mais-lida"},"em-alta":{text:"Em alta",classes:"feed-post-header-chapeu-tag--alta"}}
function l({tagId:t}){const e=c[t]
return e?o.Engine.createElement("div",{className:"feed-post-header-chapeu-tag "+e.classes},e.classBefore?o.Engine.createElement("span",{className:e.classBefore}):"",e.text):""}function u(t){const{canShowTag:e}=t,n=Object(s.get)(t,"content.chapeu.label")||"",r=Object(s.get)(t,"content.chapeu.image.url")||"",c=e?Object(s.get)(t,"content.chapeu.tag")||"":null,u=Boolean(n||c),h=i()("feed-post-header",{"with-post-chapeu":u})
var d=o.Engine.createElement("img",{loading:"lazy",src:r,alt:n,className:"feed-post-header-chapeu-favicon"}),p=o.Engine.createElement(l,{tagId:c})
return o.Engine.createElement("div",{className:h},t.children,Object(a.insertIf)(u,()=>o.Engine.createElement("span",{className:"feed-post-header-chapeu"},r&&d,c&&p,n&&!c?n:"")))}n.d(e,"Header",(function(){return u}))},function(t,e,n){"use strict"
n.r(e)
var r=n(55),i=n(184)
const o={CONNECTION:{RTT:201,TYPES:["slow-2g","2g","3g"]},HARDWARE:{MEMORY:2}}
let s,a,c
a=()=>Boolean(globalThis.navigator)&&Boolean(globalThis.navigator.connection),c=()=>Boolean(globalThis.navigator)&&Boolean(globalThis.navigator.deviceMemory),s=()=>{const t=globalThis.navigator
if(!a()||!c())return!1
const{connection:e,deviceMemory:n}=t,r=e.rtt<o.CONNECTION.RTT&&!e.saveData&&!o.CONNECTION.TYPES.includes(e.effectiveType),i=n>o.HARDWARE.MEMORY
return r&&i},n.d(e,"hasVideoPreviewSupport",(function(){return l}))
const l=(t=!1)=>(t||s())&&(Object(i.hasIntersectionObserverSupport)()||!r.At.smallScreen)},function(t,e,n){"use strict"
n.r(e)
var r,i,o,s=n(81),a=[],c=s.options.__r,l=s.options.diffed,u=s.options.__c,h=s.options.unmount
function d(t){s.options.__h&&s.options.__h(i)
var e=i.__H||(i.__H={__:[],__h:[]})
return t>=e.__.length&&e.__.push({}),e.__[t]}function p(t,e){var n=d(r++)
return v(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function f(){a.some((function(t){if(t.__P)try{t.__H.__h.forEach(m),t.__H.__h.forEach(g),t.__H.__h=[]}catch(e){return s.options.__e(e,t.__v),!0}})),a=[]}function m(t){t.t&&t.t()}function g(t){var e=t.__()
"function"==typeof e&&(t.t=e)}function v(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}s.options.__r=function(t){c&&c(t),r=0,(i=t.__c).__H&&(i.__H.__h.forEach(m),i.__H.__h.forEach(g),i.__H.__h=[])},s.options.diffed=function(t){l&&l(t)
var e=t.__c
if(e){var n=e.__H
n&&n.__h.length&&(1!==a.push(e)&&o===s.options.requestAnimationFrame||((o=s.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100)
"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(f))}},s.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(m),t.__h=t.__h.filter((function(t){return!t.__||g(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],s.options.__e(n,t.__v)}})),u&&u(t,e)},s.options.unmount=function(t){h&&h(t)
var e=t.__c
if(e){var n=e.__H
if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(t){s.options.__e(t,e.__v)}}}
var b=n(82)
n.d(e,"LabelEvent",(function(){return y}))
const y=t=>{let e
const n=(o=null,p((function(){return{current:o}}),[]))
var o
return function(t,e){var n=d(r++)
v(n.__H,e)&&(n.__=t,n.__H=e,i.__H.__h.push(n))}(()=>{n&&n.current&&n.current.addEventListener(t.type,e=>{e.label=t.label})},[]),e=b.Engine.cloneElement(t.children,{ref:n}),e}},function(t,e,n){"use strict"
function r(t){return"local"===t?"http://localhost:8888":"prod-https"===t?"https://sdk-metrics.g.globo":"prod-http"===t||"qa-http"===t?"http://sdk-metrics.g.globo":"https://sdk-metrics.g.globo"}n.r(e)
class i{constructor(t,e,n){this.platform=e,this.request=n,this.abHost=function(t){return"local"===t?"http://localhost:8888":"prod-https"===t?"https://ab.g.globo":"prod-http"===t?"http://ab.g.globo":"qa-http"===t?"http://ab.qa.globoi.com":"qa-https"===t?"https://ab.qa.globoi.com":"pre-prod-http"===t?"http://34.151.249.98":"https://ab.g.globo"}(t),this.metricsHost=r(t)}chooseWithContent(t,e,n,r,i=[],o,s,a,c,l){const u=this.platform.getExtraParams(),h=u["forced-experiment"],d=u["forced-alternative"]
for(const f in t)if(Object.prototype.hasOwnProperty.call(t,f)&&t[f].name===h&&d){t[f].forcedAlternative=d
break}t.forEach(t=>{Object.assign(t,s?{metadata:JSON.stringify(s)}:null)})
const p=Object.assign({},{experiments:t},e?{userId:e}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null)
this.request.do(this.abHost,"/choose","POST",{},p,c,l,null!==i&&i.length?i:a.getHeaders(),a.getTimeout())}chooseWithoutContent(t,e,n,r,i=[],o,s,a,c){const l=this.platform.getExtraParams(),u=l["forced-experiment"],h=l["forced-alternative"],d=Object.assign({},{experiments:t},e?{userId:e}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null,u?{forcedExperiment:u}:null,h?{forcedAlternative:h}:null)
this.request.do(this.abHost,"/choose","GET",d,null,a,c,null!==i&&i.length?i:s.getHeaders())}isolationChoose(t,e,n,r,i=[],o,s,a,c){const l=this.platform.getExtraParams(),u=l["forced-experiment"],h=l["forced-alternative"],d=Object.assign({},{isolationGroup:t.getName()},t.getGenerateImpression()?{generateImpression:t.getGenerateImpression()}:null,e?{userId:e}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null,u?{forcedExperiment:u}:null,h?{forcedAlternative:h}:null)
this.request.do(this.abHost,"/isolation/choose","GET",d,null,a,c,null!==i&&i.length?i:s.getHeaders())}recordMetric(t,e=[],n){this.request.sendBeacon(this.abHost,"/event",t,null!==e&&e.length?e:n.getHeaders(),n.getTimeout())}sendPerformanceMetrics(t){this.request.sendBeacon(this.metricsHost,"/api/v1/performance",t)}}function o(){return"undefined"!=typeof performance&&"function"==typeof performance.now?performance.now():Date.now()}const s={GLOBO_ID:"GLOBO_ID",GLOBOID:"globoId",GLB_UID:"glb_uid"},a={AB:"ab",MAB:"mab",ISOLATION:"isolation"}
class c{constructor(t,e,n){this.platform=e,this.abEndpoint=new i(t,e,n),this.blocklist=[],this.ChooseType=a}choose(t,e,n,r,i,o,s,a){if(Array.isArray(t)&&t.length>0){return t.some(t=>{return null!==t.getContext()&&t.getContext().length>0||void 0!==(n=t.getGenerateImpression())&&!0===n||!(null==(e=s)||"string"==typeof e&&""===e.trim()||Array.isArray(e)&&0===e.length)
var e,n})?this._chooseWithContent(t,e,n,r,i,o,s,a):this._chooseWithoutContent(t,e,n,r,i,o,a)}return Promise.reject(new TypeError("The experiment parameter must be a list of Experiment objects."))}isolationChoose(t,e,n,r,i,o,s){return t?this._isolationChoose(t,e,n,r,i,o,s):Promise.reject(new TypeError("The isolationGroup parameter must be a IsolationGroup object."))}impression(t,e,n,r,i,o,s,a){if(this.blocklist&&this.blocklist.some(e=>e.name===t.experiment)){const e=this.blocklist.find(e=>e.name===t.experiment)
console.warn("Event "+t.event+" cannot be sent: "+e.status)}else t.event="impression",e&&(t.userId=e),n&&(t.glbExpIdToken=n),r&&(t.hsIdToken=r),o&&(t.userIdType=o),s&&(t.metadata=JSON.stringify(s)),this.abEndpoint.recordMetric(t,i,a)}conversion(t,e,n,r,i,o,s,a){if(this.blocklist&&this.blocklist.some(e=>e.name===t.experiment)){const e=this.blocklist.find(e=>e.name===t.experiment)
console.warn("Event "+t.event+" cannot be sent: "+e.status)}else t.event="conversion",e&&(t.userId=e),n&&(t.glbExpIdToken=n),r&&(t.hsIdToken=r),o&&(t.userIdType=o),s&&(t.metadata=JSON.stringify(s)),this.abEndpoint.recordMetric(t,i,a)}_chooseWithoutContent(t,e,n,r,i,s,a){const c=t.map(t=>t.name).join(",")
return new Promise((t,l)=>{this.abEndpoint.chooseWithoutContent(c,e,n,r,i,s,a,e=>{const n=o(),r=this._parseResponse(e,n)
t(r),setTimeout(()=>{const t=r.experiments.map(t=>({testId:t.testId,name:t.name})),e={latency:r.latency,experiments:t,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:r.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.AB})}
this.abEndpoint.sendPerformanceMetrics(e)},250)},t=>{l(t)})})}_chooseWithContent(t,e,n,r,i,s,a,c){return new Promise((l,u)=>{this.abEndpoint.chooseWithContent(t,e,n,r,i,s,a,c,t=>{const e=o(),n=this._parseResponse(t,e)
l(n),setTimeout(()=>{const t=n.experiments.map(t=>({testId:t.testId,name:t.name})),e={latency:n.latency,experiments:t,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:n.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.AB})}
this.abEndpoint.sendPerformanceMetrics(e)},250)},t=>{u(t)})})}_isolationChoose(t,e,n,r,i,s,a){return new Promise((c,l)=>{this.abEndpoint.isolationChoose(t,e,n,r,i,s,a,t=>{const e=o(),n=this._parseResponse(t,e)
c(n),setTimeout(()=>{const t=n.experiments.map(t=>({testId:t.testId,name:t.name})),e={latency:n.latency,experiments:t,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:n.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.ISOLATION})}
this.abEndpoint.sendPerformanceMetrics(e)},250)},t=>{l(t)})})}_parseResponse(t,e){const n=t.response||t
n.latency=parseFloat((e-t.timeTriggerRequest).toFixed(1)),n.statusCode=t.status
const r=n.experiments
this.blocklist=[]
for(let i=0;i<r.length;i++){const t=r[i]
t["extra-info"]&&!1===t["extra-info"]["draw-rule"]["process-event"]&&this.blocklist.push({name:t.name,status:t["extra-info"]["draw-rule"].name})}return n}}class l{constructor(t="",e=[],n=!1){this.name=t,this.context=null!==e?e:[],this.generateImpression=n}_canProcessEvent(){return!(this.data&&this.data["extra-info"]&&this.data["extra-info"]["draw-rule"]&&void 0!==this.data["extra-info"]["draw-rule"]["process-event"])||this.data["extra-info"]["draw-rule"]["process-event"]}setName(t){return this.name=t,this}getName(){return this.name}setContext(t){return this.context=null!==t?t:[],this}getContext(){return this.context}setGenerateImpression(t){return this.generateImpression=t,this}getGenerateImpression(){return this.generateImpression}}class u{constructor(t={}){this.options=t}getHeaders(){return this.options.extraHeaders||[]}getHeader(t){let e=""
return this.getHeaders().forEach(n=>{Object.keys(n).forEach(r=>{t===r&&(e=n[r])})}),e}getTimeout(){let t=this.options.timeout
return void 0===t&&(t=1e3),t}setTimeout(t){return this.options.timeout=t,this}addHeader(t){let e=[]
Object.prototype.hasOwnProperty.call(this.options,"extraHeaders")&&(e=this.options.extraHeaders)
const n=e.findIndex(e=>Object.keys(e).some(e=>e===Object.keys(t)[0]))
return-1!==n?e[n]=t:e.push(t),this.options.extraHeaders=e,this}addHeaders(t){let e=[]
return Object.prototype.hasOwnProperty.call(this.options,"extraHeaders")&&(e=this.options.extraHeaders),t.forEach(t=>{const n=Object.keys(t)[0],r=e.findIndex(t=>Object.keys(t)[0]===n);-1!==r?e[r]=t:e.push(t)}),this.options.extraHeaders=e,this}withOriginURL(t){return new u(this.clone(this.options)).originURL(t)}originURL(t){return this.addHeader({"x-canonical-uri":t}),this}getOriginURL(){return this.getHeader("x-canonical-uri")}}class h{constructor(t="",e=!1){this.name=t,this.generateImpression=e}_canProcessEvent(){return!(this.data&&this.data["extra-info"]&&this.data["extra-info"]["draw-rule"]&&void 0!==this.data["extra-info"]["draw-rule"]["process-event"])||this.data["extra-info"]["draw-rule"]["process-event"]}setName(t){return this.name=t,this}getName(){return this.name}setGenerateImpression(t){return this.generateImpression=t,this}getGenerateImpression(){return this.generateImpression}}class d{constructor(t="prod-https",e,n){this.abMain=new c(t,e,n),this._options=new u,this.UserIdType=s}createExperiment(t,e,n){return new l(t,e,n)}createIsolationGroup(t,e){return new h(t,e)}choose(t,e,n,r,i,o,s){return console.log("AB - Choose requested by application"),this.abMain.choose(t,e,n,r,i,o,s,this._options)}isolationChoose(t,e,n,r,i,o){return console.log("AB - Isolation choose requested by application"),this.abMain.isolationChoose(t,e,n,r,i,o,this._options)}impression(t,e,n,r,i,o,s){console.log("AB - Impression requested by application"),this.abMain.impression(t,e,n,r,i,o,s,this._options)}conversion(t,e,n,r,i,o,s){console.log("AB - Conversion requested by application"),this.abMain.conversion(t,e,n,r,i,o,s,this._options)}addHeader(t){return this._options.addHeader(t),this}addHeaders(t){return this._options.addHeaders(t),this}getHeaders(){return this._options.getHeaders()}setTimeout(t){return this._options.setTimeout(t),this}}class p{constructor(t,e){this.request=e,this.mabHost=function(t){return"local"===t?"http://localhost:8888":"prod-https"===t?"https://mab.g.globo":"prod-http"===t?"http://mab.g.globo":"qa-http"===t?"http://mab.qa.globoi.com":"qa-https"===t?"https://mab.qa.globoi.com":"pre-prod-http"===t?"http://34.151.249.98":"https://mab.g.globo"}(t),this.metricsHost=r(t)}chooseWithoutContent(t,e,n,r,i=[],o,s,a,c){const l=Object.assign({},{experiments:t},e?{userId:e}:null,n?{glbExpIdToken:n}:null,r?{hsIdToken:r}:null,o?{userIdType:o}:null)
this.request.do(this.mabHost,"/choose","GET",l,null,a,c,null!==i&&i.length?i:s.getHeaders(),s.getTimeout())}recordMetric(t,e=[],n){this.request.do(this.mabHost,"/event","POST",{},t,null,null,null!==e&&e.length?e:n.getHeaders(),n.getTimeout())}sendPerformanceMetrics(t){this.request.sendBeacon(this.metricsHost,"/api/v1/performance",t)}}class f{constructor(t,e,n){this.platform=e,this.mabEndpoint=new p(t,n),this.blocklist=[],this.ChooseType=a}increment(t,e,n,r,i,o,s){if(this.blocklist&&this.blocklist.some(e=>e.name===t.experiment)){const e=this.blocklist.find(e=>e.name===t.experiment)
console.warn("Event "+t.event+" cannot be sent: "+e.status)}else t.event="increment",e&&(t.userId=e),n&&(t.glbExpIdToken=n),r&&(t.hsIdToken=r),o&&(t.userIdType=o),this.mabEndpoint.recordMetric(t,i,s)}reward(t,e,n,r,i,o,s){if(this.blocklist&&this.blocklist.some(e=>e.name===t.experiment)){const e=this.blocklist.find(e=>e.name===t.experiment)
console.warn("Event "+t.event+" cannot be sent: "+e.status)}else t.event="reward",e&&(t.userId=e),n&&(t.glbExpIdToken=n),r&&(t.hsIdToken=r),o&&(t.userIdType=o),this.mabEndpoint.recordMetric(t,i,s)}choose(t,e,n,r,i,o,s){return Array.isArray(t)&&t.length>0?this._chooseWithoutContent(t,e,n,r,i,o,s):Promise.reject(new TypeError("The experiment parameter must be a list of Experiment objects."))}_chooseWithoutContent(t,e,n,r,i,s,a){const c=t.map(t=>t.name).join(",")
return new Promise((t,l)=>{this.mabEndpoint.chooseWithoutContent(c,e,n,r,i,s,a,e=>{const n=o(),r=this._parseResponse(e,n)
t(r),setTimeout(()=>{const t=r.experiments.map(t=>({testId:t.testId,name:t.name})),e={latency:r.latency,experiments:t,platform:this.platform.getEnvironmentInfo(),sdk:"web",timestamp:Math.floor(Date.now()/1e3),version:"4.7.4",statusCode:r.statusCode,keys:JSON.stringify({chooseType:this.ChooseType.MAB})}
this.mabEndpoint.sendPerformanceMetrics(e)},250)},t=>{l(t)})})}_parseResponse(t,e){const n=t.response||t
n.latency=parseFloat((e-t.timeTriggerRequest).toFixed(1)),n.statusCode=t.status
const r=n.experiments
this.blocklist=[]
for(let i=0;i<r.length;i++){const t=r[i]
t["extra-info"]&&!1===t["extra-info"]["draw-rule"]["process-event"]&&this.blocklist.push({name:t.name,status:t["extra-info"]["draw-rule"].name})}return n}}class m{constructor(t="",e=!1){this.name=t,this.generateIncrement=e}increment(){let t=this.arms
0===t.length&&(t=[{slot:0,name:this.arm}]),this._sendMetric("increment",t)}reward(t=0,e=""){const n=[{slot:t,name:""===e?this.arm:e}]
this._sendMetric("reward",n)}_sendMetric(t,e){const n={experiment:this.experiment,arm:this.arm,testId:this.testId,abAlternative:this.abAlternative,arms:e}
this._recordMetric(t,n)}_recordMetric(t,e){this.context.mabEndpoint.recordMABMetric(t,e,this.options)}setGenerateIncrement(t){return this.generateIncrement=t,this}getGenerateIncrement(){return this.generateIncrement}}class g{constructor(t="prod-https",e,n){this.mabMain=new f(t,e,n),this._options=new u,this.UserIdType=s}createExperiment(t,e){return new m(t,e)}choose(t,e,n,r,i,o){return console.log("MAB - Choose requested by application"),this.mabMain.choose(t,e,n,r,i,o,this._options)}increment(t,e,n,r,i,o){console.log("MAB - Increment requested by application"),this.mabMain.increment(t,e,n,r,i,o,this._options)}reward(t,e,n,r,i,o){console.log("MAB - Reward requested by application"),this.mabMain.reward(t,e,n,r,i,o,this._options)}addHeader(t){return this._options.addHeader(t),this}addHeaders(t){return this._options.addHeaders(t),this}getHeaders(){return this._options.getHeaders()}setTimeout(t){return this._options.setTimeout(t),this}}class v{getExtraParams(){const t={},e=["forced-experiment","forced-alternative"],n=this.getDocumentLocationSearch().substr(1).split("&")
for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const i=n[r].split("=")
e.indexOf(i[0])>-1&&(t[i[0]]=i[1])}return t}getDocumentLocationSearch(){return document.location.search}getEnvironmentInfo(){const t=navigator.platform,e=navigator.userAgent
let n
return n=e.match(/Firefox\/([0-9]+\.[0-9]+)/)?"Firefox "+e.match(/Firefox\/([0-9]+\.[0-9]+)/)[1]+" ("+t+")":e.match(/Chrome\/([0-9]+\.[0-9]+)/)?"Chrome "+e.match(/Chrome\/([0-9]+\.[0-9]+)/)[1]+" ("+t+")":e.match(/MSIE ([0-9]+\.[0-9]+)/)?"Internet Explorer "+e.match(/MSIE ([0-9]+\.[0-9]+)/)[1]+" ("+t+")":e.match(/Safari\/([0-9]+\.[0-9]+)/)?"Safari "+e.match(/Safari\/([0-9]+\.[0-9]+)/)[1]+" ("+t+")":e.match(/Opera\/([0-9]+\.[0-9]+)/)?"Opera "+e.match(/Opera\/([0-9]+\.[0-9]+)/)[1]+" ("+t+")":e.match(/Edg\/([0-9]+\.[0-9]+)/)?"Edge "+e.match(/Edg\/([0-9]+\.[0-9]+)/)[1]+" ("+t+")":"Unknown",n}}class b{sendBeacon(t,e,n,r=[],i=1e3){const o=void 0!==globalThis.navigator&&"function"==typeof globalThis.navigator.sendBeacon,s=null!=r&&r.length>0
o&&!s?function(t,e,n){const r=new Blob([JSON.stringify(n)],{type:"application/json"})
window.navigator.sendBeacon(t+e,r)}(t,e,n):this.oneWaySend(t,e,n,r,i)}oneWaySend(t,e,n,r,i){this.do(t,e,"POST",null,n,null,null,r,i)}do(t,e,n,r,i,s,a,c=[],l=1e3){let u=""
for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&(u+="&"+o+"="+r[o])
u&&(u="?"+u.substring(1))
const h=t+e+u,d=this.createXHR()
d.open(n,h,!0),d.responseType="json",d.timeout=l,d.onload=()=>{d.status>=200&&d.status<400?this.callIfDefined(s,d):this.callIfDefined(a,this.handleError(d,h))},d.onerror=t=>{this.callIfDefined(a,this.handleError(t,h))},d.ontimeout=t=>{this.callIfDefined(a,this.handleError(t,h))},i&&(d.setRequestHeader("Content-Type","application/json;charset=utf-8"),i=JSON.stringify(i)),Array.from(c).forEach((function(t){Object.keys(t).forEach((function(e){d.setRequestHeader(e,t[e])}))})),d.timeTriggerRequest=o(),d.send(i)}handleError(t,e){const n={}
return n.type=t.type?t.type:"undefined",t.target instanceof XMLHttpRequest&&(t=t.target),t instanceof XMLHttpRequest?(n.status=t.status,n.url=e,n.timeout=t.timeout,n.msg=t.response):n.msg=t.toString(),n}createXHR(){const t=new XMLHttpRequest
return t.withCredentials=!1,t}callIfDefined(t,e){t&&t(e)}}class y{constructor(){this.platform=new v,this.request=new b}ab(t="prod"){return new d(t,this.platform,this.request)}mab(t="prod"){return new g(t,this.platform,this.request)}getVersion(){return"4.7.4"}}var E=n(163)
n.d(e,"ABFactory",(function(){return _}))
class _{constructor(){this.client=new y}mab(){try{const t=this.client.mab(E.ABUtils.getEnv())
return t.setTimeout(3e3),t}catch(t){return console.error("[Globo AB SDK] Não foi possível instanciar o MAB: "+t.message),null}}ab(){try{const t=this.client.ab(E.ABUtils.getEnv())
return t.setTimeout(3e3),t}catch(t){return console.error("[Globo AB SDK] Não foi possível instanciar o AB: "+t.message),null}}}},function(t,e,n){"use strict"
n.r(e)
var r=n(102),i=n.n(r),o=n(82),s=n(165),a=n.n(s)
n.d(e,"Highlight",(function(){return c}))
class c extends o.Engine.Component{render(){let t
const{content:e,headline:n}=this.props,r=i()("highlight-bastian-feed",{headline:n}),s=e.half
e.time>0&&"Pós Jogo"!==s&&(t=e.time+"’ -"+s),"1º tempo"!==s&&"2º tempo"!==s&&(t=s)
const c=a()(e.text,85,"...",!0),l=n?o.Engine.createElement("p",null,o.Engine.createElement("strong",null,e.title)):o.Engine.createElement("span",{className:"title"},e.title)
return o.Engine.createElement("div",{className:r},o.Engine.createElement("div",{className:"time"},t),o.Engine.createElement("div",{className:"text"},l,c))}}},function(t,e,n){"use strict"
n.r(e)
var r=n(5),i=n.n(r),o=n(70),s=n(144),a=n(221),c=n(217),l=n(108),u=n(182),h=n(82),d=n(143),p=n(219),f=n(134),m=n(141),g=n(123),v=n(93),b=n(145),y=n(26),E=n(57),_=n(60),O=n(94),S=n(71),w=n(80),I=n(55),T=n(20)
class C extends h.Engine.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return Object(T.error)("ErrorBoundary:",t),{hasError:!0}}getSSRElement(){let t,e
try{t=Object(w.default)(this.props.children),e="_evt"}catch(n){t=this.getFallbackElement(),e="bstn-error-boundary",Object(T.error)("ErrorBoundary:",n)}return h.Engine.createElement("div",{className:e,dangerouslySetInnerHTML:{__html:t}})}getFallbackElement(){let t=this.props.fallback
return t=I.At.server?Object(w.default)(t):h.Engine.createElement("div",{className:"bstn-error-boundary"},t),t}render(){if(this.state.hasError)return this.getFallbackElement()
let t
return I.At.client?t=this.props.children:I.At.server&&(t=this.getSSRElement()),t}}var x=n(213)
n(187)
function j(){return(j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(null,arguments)}let A
n.d(e,"ItemC",(function(){return P})),n.d(e,"Item",(function(){return N}))
class P extends g.SeenTimeTelemetry{constructor(t){super(t),this.reportPostView=()=>{this.reportSeenTime(()=>this.reportToHorizon(s.PostView))},this.getExtCompPostContent=()=>{const{props:t}=this
return j({},Object(y.get)(t,"data.content"),{experiment:Object(y.get)(t,"data._experiment_properties"),position:this.context.itemIndex.getPosition(this)})},this.onView=()=>{if(!this.viewed){this.viewed=!0
const t=this._refs.child
t&&t.onView&&t.onView(this.getExtCompPostContent()),t&&!t.onView&&Object(u.onPostView)(this.getExtCompPostContent())}},this.onClick=t=>{const e=this._refs.child
t.label&&e&&e.onClick&&e.onClick(this.getExtCompPostContent(),t),e&&!e.onClick&&Object(u.onPostClick)(this.getExtCompPostContent(),t),this.reportPostClick(t)},this.reportPostClick=t=>{if((t.label||t.target.classList.contains("bstn-trk-click"))&&this.reportToHorizon(s.PostClick),t.label){const e=Object(b.cloneJSON)(this.state.data)
Object(O.set)(e,"bstn$source","feed"),Object(S.triggerDomEvent)(o.ITEM_CLICK,document,t=>{t.data=e}),this.reportEvent(t),this.reportToRealtime()}},this.state={data:Object(x.assignFactory)(t.data)},this.sharedItemData={},this.viewed=!1}getChildContext(){return{item:this,sharedItemData:this.sharedItemData}}render(){const t=this.state.data.klass||(()=>null),e=String(this.state.data.type||t.name||t.displayName||"unamed").toLowerCase()
return this.state.data.source!==a.$PushStream.staticName&&this.context.itemIndex&&this.context.itemIndex.register(this),h.Engine.createElement(C,null,h.Engine.createElement(l.ElementViewTrigger,{on:"middle",redirectToChildTriggerIfExists:!0},h.Engine.createElement("div",{ref:Object(v.as)(this,"item"),className:"bastian-feed-item","data-type":e,"data-index":this.props.index},h.Engine.createElement(t,j({ref:Object(v.as)(this,"child")},this.state.data)))))}componentWillMount(){this.sharedItemData.reporter=new f.ItemReporter({telemetry:this,data:this.state.data,itemReference:this,positionIndex:this.context.itemIndex,areaId:this.context.areaId})}componentDidMount(){this._refs.node=this._refs.item,this.cdmSeenTimeTelemetry(),this.lastReportedSeenTime=this.telemetry.seenTime,d.Horizon.on("collect-metrics",this.reportPostView),this._refs.item.addEventListener("click",this.onClick),x.emitter.on(x.NEW_POST_TYPE+this.props.data.type,()=>{this.setState({data:Object(x.assignFactory)(this.props.data)})})}componentWillUnmount(){this.cwuSeenTimeTelemetry(),d.Horizon.off("collect-metrics",this.reportPostView),this._refs.item&&this._refs.item.removeEventListener("click",this.onClick)}reportToHorizon(t){this.sharedItemData.reporter&&d.Horizon.report(t,new m.ReporterCascadeAggregator(this.sharedItemData.reporter,this.context.sharedFeedData.reporter))}reportEvent(t){const e=this._refs.child||{},n=this.context.itemIndex.getPosition(this)
if(t.label){const r={origin:Object(y.get)(this.props,"data.type")||"post basico",action:t.action||"clique",label:t.label,hasVideo:Object(E.has)(e,"_refs.video"),hasPhoto:Object(E.has)(e,"_refs.photo"),hasSummary:i()(e.hasSummary)&&e.hasSummary(),position:"posicao "+String(n).padStart(4,"0")}
Object(p.default)(r,["GA","CommonEvents"],{generateLabel:!0})}else this.state.data.klass===c.default?Object(p.default)({origin:"publicidade"},["GA","CommonEvents"]):"card"===this.state.data.type&&Object(p.default)({origin:"card"},["GA","CommonEvents"])}reportToRealtime(){const t=this.state.data
let e='tipo desconhecido "'+Object(y.get)(t,"key")+'"'
const n=Object(y.get)(t,"content.url")
if(n)e=n
else{const n=Object(y.get)(t,"content.video.id")
n&&(e="video "+n)}Object(_.reportToRealtime)({feed:"feed","right-column":"coluna da direita"}[this.context.areaId],e)}}A=P
const N=A}]).default
