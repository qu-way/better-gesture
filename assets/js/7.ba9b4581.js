(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{315:function(e,t,s){},363:function(e,t,s){"use strict";var r=s(315);s.n(r).a},378:function(e,t,s){"use strict";s.r(t);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var n={name:"rebound",data:function(){var e;return r(e={distanceY:0,clientY:0,scrollTop:0,startY:0,currentY:0,overDistance:0,text:"上拉加载",point:150,data:[],scrollBottom:!1},"scrollTop",0),r(e,"top",0),r(e,"abc",0),r(e,"maxScrollTop",0),e},computed:{getDistance:function(){return.4*this.distanceY}},mounted:function(){this.maxScrollTop=this.$refs.wrap.scrollHeight-this.$refs.wrap.clientHeight},methods:{start:function(e){this.startY=e.clientY||e.touches[0].clientY},scrolll:function(e){this.top=this.$refs.wrap.scrollTop+this.$refs.wrap.clientHeight,this.scrollBottom=this.$refs.page.offsetHeight===parseInt(this.$refs.wrap.scrollTop)+parseInt(this.$refs.wrap.offsetHeight)-2},pressMove:function(e){this.currentY=e.clientY||e.touches[0].clientY,this.$refs.wrap.scrollTop+this.$refs.wrap.clientHeight>=this.$refs.wrap.scrollHeight&&this.currentY-this.startY<0&&(this.abc=this.$refs.wrap.scrollTop,e.preventDefault(),e.stopPropagation(),this.distanceY+=Math.round(e.deltaY)-this.$refs.wrap.scrollTop)},end:function(e){var t=this;this.distanceY<0&&this.animation(this.getDistance,-this.maxScrollTop-this.getDistance,(function(e){t.distanceY=Math.round(e)/.4}),(function(){t.$nextTick((function(){t.$refs.wrap.scrollTop=t.maxScrollTop}))}))},animation:function(e,t,s,r){var n=Math.ceil(500/16.7),a=null,i=0;!function o(){if(i>n||0==n)cancelAnimationFrame(a),i=0,r&&r();else{var c=function(e,t,s,r){return-s*((e=e/r-1)*e*e*e-1)+t}(++i,e,t,n);s(c),a=requestAnimationFrame(o)}}()}}},a=(s(363),s(45)),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rebound-wrap"},[s("div",{ref:"wrap",staticClass:"rebound",on:{scroll:e.scrolll}},[s("div",{directives:[{name:"gesture",rawName:"v-gesture:start",value:e.start,expression:"start",arg:"start"},{name:"gesture",rawName:"v-gesture:pressMove",value:e.pressMove,expression:"pressMove",arg:"pressMove"},{name:"gesture",rawName:"v-gesture:end",value:e.end,expression:"end",arg:"end"},{name:"gesture",rawName:"v-gesture:mouseLeave",value:e.end,expression:"end",arg:"mouseLeave"}],ref:"page",staticClass:"page",style:{transform:"translate3d(0,"+e.getDistance+"px,0)"}},[s("div",e._l(7,(function(t){return s("p",{staticClass:"item"},[e._v(e._s(t))])})),0)])])])}),[],!1,null,"31974cac",null);t.default=i.exports}}]);