(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bd54"],{f13f:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navigation",[r("template",{slot:"menu"},[r("v-btn",{attrs:{icon:"",exact:"",replace:"",to:{name:"history"}}},[r("v-icon",[t._v("mdi-arrow-left")])],1)],1),r("template",{slot:"title"},[r("v-toolbar-title",[t._v("Workout")])],1),r("template",{slot:"options"},[r("v-menu",{attrs:{"content-class":"elevation-2 c-tile"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{icon:""}},o),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[r("v-list",{staticClass:"pt-0 pb-0 c-tile"},[r("v-list-item",{on:{click:t.removeWorkout}},[r("v-list-item-title",[t._v("Remove workout")])],1)],1)],1)],1)],2),r("v-container",{attrs:{fluid:""}},[t.workout?r("v-card",{attrs:{tile:"",elevation:"1"}},t._l(t.workout.exercises,(function(e){return r("div",[r("v-list-item",{staticClass:"c-list-item"},[r("v-list-item-avatar",[r("v-avatar",{staticClass:"white--text",attrs:{color:e.color,size:"38"}},[t._v(" "+t._s(e.code)+" ")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))])],1)],1),t._l(e.sets,(function(o,i){return r("v-list-item",{staticStyle:{height:"48px"}},[r("v-list-item-avatar",[r("v-avatar",{attrs:{color:"grey--text text--darken-2 c-border-grey",size:"30"}},[t._v(" "+t._s(i+1)+" ")])],1),r("v-list-item-content",[r("v-list-item-title",["body"!==e.type&&"time"!==e.type?r("span",[t._v(" "+t._s(o.weight)+" kg x ")]):t._e(),t._v(" "+t._s(o.reps)+" "),"time"===e.type?r("span",[t._v(" seconds ")]):r("span",[t._v(" reps ")])])],1)],1)}))],2)})),0):t._e()],1)],1)},i=[],a=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("5319"),r("159b"),r("ade3")),n=r("2b0e"),s=r("2f62"),c=r("f4dd");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=n["default"].extend({name:"Workout",computed:v({},Object(s["b"])(["getWorkout"]),{workout:function(){return this.getWorkout(this.$route.params.id)}}),methods:{removeWorkout:function(){this.$store.commit("removeWorkout",this.$route.params.id),this.$router.replace("/")}},components:{Navigation:c["a"]}}),p=u,m=r("2877"),d=r("6544"),b=r.n(d),f=r("8212"),_=r("8336"),y=r("b0af"),O=r("a523"),k=r("132d"),w=r("8860"),h=r("da13"),g=r("8270"),j=r("5d23"),V=r("e449"),x=r("2a7f"),P=Object(m["a"])(p,o,i,!1,null,null,null);e["default"]=P.exports;b()(P,{VAvatar:f["a"],VBtn:_["a"],VCard:y["a"],VContainer:O["a"],VIcon:k["a"],VList:w["a"],VListItem:h["a"],VListItemAvatar:g["a"],VListItemContent:j["a"],VListItemTitle:j["c"],VMenu:V["a"],VToolbarTitle:x["a"]})}}]);
//# sourceMappingURL=chunk-2d22bd54.31008d68.js.map