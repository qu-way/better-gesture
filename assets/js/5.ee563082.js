(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{313:function(t,a,i){},361:function(t,a,i){"use strict";var n=i(313);i.n(n).a},380:function(t,a,i){"use strict";i.r(a);var n={name:"adSwipeTwo",data:function(){return{distanceX:0,timer:null,data:["女生真的会拧不开瓶盖吗？","双缝干涉实验恐怖吗？恐怖在哪？","明星现实中真的很漂亮吗?"]}},watch:{},mounted:function(){this.move()},methods:{move:function(){this.distanceX>=0&&this.data.push(this.data[0]),Math.abs(this.distanceX)>=300?(cancelAnimationFrame(this.timer),this.data.shift(),this.distanceX=0,this.move()):(this.distanceX+=-1,this.timer=requestAnimationFrame(this.move))}}},s=(i(361),i(45)),e=Object(s.a)(n,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"adSwipeTwo"},[i("div",{ref:"wrap",staticClass:"wrap",style:{transform:"translate3d("+t.distanceX+"px,0px,0)"}},t._l(t.data,(function(a,n){return i("p",{key:n},[t._v(t._s(a))])})),0)])}),[],!1,null,"4b7fbf29",null);a.default=e.exports}}]);