(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23792e"],{fc61:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Navigation",[i("template",{slot:"title"},[i("v-toolbar-title",[t._v("Workout")])],1),t.workout.exercises.length?i("template",{slot:"options"},[i("v-menu",{attrs:{"content-class":"elevation-2 custom-tile"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:""}},o),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!1,2097855828)},[i("v-list",{staticClass:"pt-0 pb-0 custom-tile"},[i("v-list-item",{on:{click:t.finishWorkout}},[i("v-list-item-title",[t._v("Finish workout")])],1),i("v-list-item",{on:{click:t.cancelWorkout}},[i("v-list-item-title",[t._v("Cancel workout")])],1)],1)],1)],1):t._e()],2),i("v-container",{attrs:{fluid:""}},[i("v-card",{attrs:{tile:"",elevation:"1"}},[t._l(t.workout.exercises,(function(e,o){return i("v-list-item",{staticClass:"custom-list-item",attrs:{replace:"",to:{name:"workout_exercise",params:{index:o}}}},[i("v-list-item-avatar",[i("ExerciseAvatar",{attrs:{name:e.name}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))]),i("v-list-item-subtitle",[t._v(t._s(e.sets.length)+" sets")])],1)],1)})),i("v-list-item",{staticClass:"custom-list-item",attrs:{replace:"",to:{name:"workout_exercise_list"}}},[i("v-list-item-avatar",[i("v-avatar",{attrs:{color:"grey lighten-2",size:"38"}},[i("v-icon",[t._v("mdi-plus")])],1)],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Add exercise")])],1)],1)],2)],1)],1)},r=[],a=(i("a4d3"),i("4de4"),i("e439"),i("dbb4"),i("b64b"),i("ac1f"),i("5319"),i("159b"),i("ade3")),s=i("2b0e"),n=i("2f62"),c=i("f4dd"),l=i("802f");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m=s["default"].extend({name:"Workout",computed:v({},Object(n["b"])({workout:"getActiveWorkout"})),methods:{finishWorkout:function(){this.$store.commit("finishActiveWorkout"),this.$router.replace("/")},cancelWorkout:function(){this.$store.commit("cancelActiveWorkout"),this.$router.replace("/")}},components:{Navigation:c["a"],ExerciseAvatar:l["a"]}}),p=m,b=i("2877"),f=i("6544"),d=i.n(f),k=i("8212"),O=i("8336"),h=i("b0af"),w=i("a523"),_=i("132d"),g=i("8860"),j=i("da13"),y=i("8270"),V=i("5d23"),x=i("e449"),W=i("2a7f"),A=Object(b["a"])(p,o,r,!1,null,null,null);e["default"]=A.exports;d()(A,{VAvatar:k["a"],VBtn:O["a"],VCard:h["a"],VContainer:w["a"],VIcon:_["a"],VList:g["a"],VListItem:j["a"],VListItemAvatar:y["a"],VListItemContent:V["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VMenu:x["a"],VToolbarTitle:W["a"]})}}]);
//# sourceMappingURL=chunk-2d23792e.ce114ed9.js.map