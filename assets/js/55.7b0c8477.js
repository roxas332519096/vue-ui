(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{108:function(t,r,n){"use strict";n(69),n(70),n(23),n(48);var e={name:"gRow",props:{gutter:{type:[String,Number]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},data:function(){return{}},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},rowClass:function(){return this.align&&"align-".concat(this.align)}},mounted:function(){var t=this;this.$children.forEach(function(r){r.gutter=t.gutter})}},s=(n(91),n(1)),a=Object(s.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"d6424aee",null);r.a=a.exports},109:function(t,r,n){"use strict";var e=n(127),s=(n(48),n(92),n(93),n(70),n(69),n(117),function(t){var r=Object.keys(t),n=!0;return r.forEach(function(t){["span","offset"].includes(t)||(n=!1)}),n}),a={name:"gCol",props:{span:{type:[Number,String],default:24},offset:{type:[Number,String]},xs:{type:Object,validator:s},sm:{type:Object,validator:s},md:{type:Object,validator:s},lg:{type:Object,validator:s},xl:{type:Object,validator:s}},data:function(){return{gutter:null}},computed:{colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}},colClass:function(){var t=this.span,r=this.offset,n=this.xs,s=this.sm,a=this.md,i=this.lg,c=this.xl,o=this.createClass;return[].concat(Object(e.a)(o({span:t,offset:r})),Object(e.a)(o(n,"xs-")),Object(e.a)(o(s,"sm-")),Object(e.a)(o(a,"md-")),Object(e.a)(o(i,"lg-")),Object(e.a)(o(c,"xl-")))}},methods:{createClass:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(r).concat(t.span)),t.offset&&n.push("offset-".concat(r).concat(t.offset)),n}},mounted:function(){}},i=(n(96),n(1)),c=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"7dafe6ee",null);r.a=c.exports},164:function(t,r,n){},277:function(t,r,n){"use strict";var e=n(164);n.n(e).a},334:function(t,r,n){"use strict";n.r(r);var e=n(108),s=n(109),a={components:{gRow:e.a,gCol:s.a},data:function(){return{}}},i=(n(277),n(1)),c=Object(i.a)(a,function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("div",{staticClass:"demo"},[n("g-row",{attrs:{gutter:"20"}},[n("g-col",{attrs:{span:"12"}},[n("div",{staticClass:"grid-content bg-purple-dark"})]),t._v(" "),n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"grid-content bg-purple-dark"})])],1)],1),t._v(" "),n("div",{staticClass:"demo"},[n("g-row",[n("g-col",{attrs:{span:"12"}},[n("div",{staticClass:"grid-content bg-purple-dark"})]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),n("g-col",{attrs:{span:"6"}},[n("div",{staticClass:"grid-content bg-purple-dark"})])],1)],1),t._v(" "),n("div",{staticClass:"demo"},[n("g-row",{attrs:{gutter:"20"}},[n("g-col",{attrs:{span:"8"}},[n("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"grid-content bg-purple-dark"})]),t._v(" "),n("g-col",{attrs:{span:"4"}},[n("div",{staticClass:"grid-content bg-purple-light"})])],1)],1)])},[],!1,null,null,null);r.default=c.exports},48:function(t,r,n){"use strict";var e=n(12),s=n(15),a=n(27),i=n(55),c=n(20),o=n(13),u=n(53).f,l=n(40).f,f=n(16).f,g=n(54).trim,p=e.Number,d=p,h=p.prototype,v="Number"==a(n(51)(h)),b="trim"in String.prototype,m=function(t){var r=c(t,!1);if("string"==typeof r&&r.length>2){var n,e,s,a=(r=b?r.trim():g(r,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=r.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(r.charCodeAt(1)){case 66:case 98:e=2,s=49;break;case 79:case 111:e=8,s=55;break;default:return+r}for(var i,o=r.slice(2),u=0,l=o.length;u<l;u++)if((i=o.charCodeAt(u))<48||i>s)return NaN;return parseInt(o,e)}}return+r};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var r=arguments.length<1?0:t,n=this;return n instanceof p&&(v?o(function(){h.valueOf.call(n)}):"Number"!=a(n))?i(new d(m(r)),n,p):m(r)};for(var C,y=n(11)?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)s(d,C=y[N])&&!s(p,C)&&f(p,C,l(d,C));p.prototype=h,h.constructor=p,n(25)(e,"Number",p)}},70:function(t,r,n){"use strict";var e=n(22),s=n(85)(0),a=n(39)([].forEach,!0);e(e.P+e.F*!a,"Array",{forEach:function(t){return s(this,t,arguments[1])}})},72:function(t,r,n){},73:function(t,r,n){},91:function(t,r,n){"use strict";var e=n(72);n.n(e).a},92:function(t,r,n){"use strict";var e=n(22),s=n(32)(!0);e(e.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(82)("includes")},93:function(t,r,n){"use strict";var e=n(22),s=n(94);e(e.P+e.F*n(95)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},94:function(t,r,n){var e=n(122),s=n(26);t.exports=function(t,r,n){if(e(r))throw TypeError("String#"+n+" doesn't accept regex!");return String(s(t))}},95:function(t,r,n){var e=n(66)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(n){try{return r[e]=!1,!"/./"[t](r)}catch(t){}}return!0}},96:function(t,r,n){"use strict";var e=n(73);n.n(e).a}}]);