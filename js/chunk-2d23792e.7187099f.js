(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23792e"],{fc61:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Navigation",[i("template",{slot:"title"},[i("v-toolbar-title",[t._v("Workout")])],1),t.workout.exercises.length?i("template",{slot:"options"},[i("v-menu",{attrs:{"content-class":"elevation-2 c-tile"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:""}},o),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[i("v-list",{staticClass:"pt-0 pb-0 c-tile"},[i("v-list-item",{on:{click:t.finishWorkout}},[i("v-list-item-title",[t._v("Finish workout")])],1),i("v-list-item",{on:{click:t.cancelWorkout}},[i("v-list-item-title",[t._v("Cancel workout")])],1)],1)],1)],1):t._e()],2),i("v-container",{attrs:{fluid:""}},[i("v-card",{attrs:{tile:"",elevation:"1"}},[t._l(t.workout.exercises,(function(e,o){return i("v-list-item",{staticClass:"c-list-item",attrs:{replace:"",to:{name:"workout_exercise",params:{index:o}}}},[i("v-list-item-avatar",[i("v-avatar",{staticClass:"white--text",attrs:{color:e.color,size:"38"}},[t._v(" "+t._s(e.code)+" ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))]),i("v-list-item-subtitle",[t._v(t._s(e.sets.length)+" sets")])],1)],1)})),i("v-list-item",{staticClass:"c-list-item",attrs:{replace:"",to:{name:"workout_exercise_list"}}},[i("v-list-item-avatar",[i("v-avatar",{attrs:{color:"grey lighten-2",size:"38"}},[i("v-icon",[t._v("mdi-plus")])],1)],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Add exercise")])],1)],1)],2)],1)],1)},r=[],a=(i("a4d3"),i("4de4"),i("e439"),i("dbb4"),i("b64b"),i("ac1f"),i("5319"),i("159b"),i("ade3")),s=i("2b0e"),n=i("2f62"),c=i("f4dd");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u=s["default"].extend({name:"Workout",computed:v({},Object(n["b"])({workout:"getActiveWorkout"})),methods:{finishWorkout:function(){this.$store.commit("finishActiveWorkout"),this.$router.replace("/")},cancelWorkout:function(){this.$store.commit("cancelActiveWorkout"),this.$router.replace("/")}},components:{Navigation:c["a"]}}),m=u,p=i("2877"),b=i("6544"),f=i.n(b),d=i("8212"),k=i("8336"),_=i("b0af"),h=i("a523"),w=i("132d"),O=i("8860"),g=i("da13"),j=i("8270"),y=i("5d23"),V=i("e449"),x=i("2a7f"),W=Object(p["a"])(m,o,r,!1,null,null,null);e["default"]=W.exports;f()(W,{VAvatar:d["a"],VBtn:k["a"],VCard:_["a"],VContainer:h["a"],VIcon:w["a"],VList:O["a"],VListItem:g["a"],VListItemAvatar:j["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VMenu:V["a"],VToolbarTitle:x["a"]})}}]);
//# sourceMappingURL=chunk-2d23792e.7187099f.js.map