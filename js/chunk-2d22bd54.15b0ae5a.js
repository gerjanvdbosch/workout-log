(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bd54"],{f13f:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navigation",[r("template",{slot:"menu"},[r("v-btn",{attrs:{icon:"",exact:"",replace:"",to:{name:"history"}}},[r("v-icon",[t._v("mdi-arrow-left")])],1)],1),r("template",{slot:"title"},[r("v-toolbar-title",[t._v("Workout")])],1),r("template",{slot:"options"},[r("v-menu",{attrs:{"content-class":"elevation-2 custom-tile"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({attrs:{icon:""}},o),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[r("v-list",{staticClass:"pt-0 pb-0 custom-tile"},[r("v-list-item",{on:{click:t.removeWorkout}},[r("v-list-item-title",[t._v("Remove workout")])],1)],1)],1)],1)],2),r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{tile:"",elevation:"1"}},t._l(t.workout.exercises,(function(e){return r("div",[r("v-list-item",{staticClass:"custom-list-item"},[r("v-list-item-avatar",[r("ExerciseAvatar",{attrs:{name:e.name}})],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))])],1)],1),t._l(e.sets,(function(e,o){return r("v-list-item",{staticStyle:{height:"48px"}},[r("v-list-item-avatar",[r("v-avatar",{attrs:{color:"grey--text text--darken-2 custom-border-grey",size:"30"}},[t._v(" "+t._s(o+1)+" ")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.weight)+" kg x "+t._s(e.reps)+" reps")])],1)],1)}))],2)})),0)],1)],1)},i=[],a=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("5319"),r("159b"),r("ade3")),n=r("2b0e"),s=r("2f62"),c=r("f4dd"),l=r("802f");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m=n["default"].extend({name:"Workout",computed:v({},Object(s["b"])(["getWorkout"]),{workout:function(){return this.getWorkout(this.$route.params.id)}}),methods:{removeWorkout:function(){this.$store.commit("removeWorkout",this.$route.params.id),this.$router.replace("/")}},components:{Navigation:c["a"],ExerciseAvatar:l["a"]}}),p=m,b=r("2877"),d=r("6544"),f=r.n(d),O=r("8212"),k=r("8336"),g=r("b0af"),h=r("a523"),w=r("132d"),_=r("8860"),y=r("da13"),j=r("8270"),V=r("5d23"),x=r("e449"),P=r("2a7f"),W=Object(b["a"])(p,o,i,!1,null,null,null);e["default"]=W.exports;f()(W,{VAvatar:O["a"],VBtn:k["a"],VCard:g["a"],VContainer:h["a"],VIcon:w["a"],VList:_["a"],VListItem:y["a"],VListItemAvatar:j["a"],VListItemContent:V["a"],VListItemTitle:V["c"],VMenu:x["a"],VToolbarTitle:P["a"]})}}]);
//# sourceMappingURL=chunk-2d22bd54.15b0ae5a.js.map