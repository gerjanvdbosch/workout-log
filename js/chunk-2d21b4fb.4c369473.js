(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b4fb"],{bedf:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation",[n("template",{slot:"menu"},[n("v-btn",{attrs:{icon:""},on:{click:t.updateWorkout}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),n("template",{slot:"title"},[n("v-toolbar-title",[t._v("Exercise")])],1),n("template",{slot:"options"},[n("v-menu",{attrs:{"content-class":"elevation-2 c-tile"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",{staticClass:"pt-0 pb-0 c-tile"},[n("v-list-item",[n("v-list-item-title",[t._v("Remove exercise")])],1)],1)],1)],1)],2),n("v-container",{attrs:{fluid:""}},[n("v-card",{attrs:{tile:"",elevation:"1"}},[n("v-list-item",{staticClass:"c-list-item"},[n("v-list-item-avatar",[n("ExerciseAvatar",{attrs:{name:t.exercise.name}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.exercise.name))])],1)],1),t._l(t.exercise.sets,(function(e,r){return n("v-list-item",{staticClass:"c-list-item pr-1"},[n("v-list-item-avatar",[n("v-avatar",{attrs:{color:"grey--text text--darken-2 c-border-grey",size:"30"}},[t._v(" "+t._s(r+1)+" ")])],1),n("v-list-item-content",{staticClass:"pt-0 pb-3"},[n("v-row",[n("v-col",{staticClass:"pt-0 pb-0"},[n("v-text-field",{staticClass:"mt-0",attrs:{type:"number",step:"0.5",label:"Weight",suffix:"kg","hide-details":""},model:{value:e.weight,callback:function(n){t.$set(e,"weight",n)},expression:"set.weight"}})],1),n("v-col",{staticClass:"pt-0 pb-0"},[n("v-text-field",{staticClass:"mt-0",attrs:{type:"number",label:"Reps","hide-details":""},model:{value:e.reps,callback:function(n){t.$set(e,"reps",n)},expression:"set.reps"}})],1)],1)],1),n("v-list-item-action",{staticClass:"ml-0"},[n("v-menu",{attrs:{"content-class":"elevation-2 c-tile","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[n("v-list",{staticClass:"pt-0 pb-0 c-tile"},[n("v-list-item",{on:{click:function(e){return t.removeSet(r)}}},[n("v-list-item-title",[t._v("Remove set")])],1)],1)],1)],1)],1)})),n("v-list-item",{staticClass:"c-list-item",on:{click:t.addSet}},[n("v-list-item-avatar",[n("v-avatar",{staticClass:"c-border-grey",attrs:{size:"30"}},[n("v-icon",[t._v("mdi-plus")])],1)],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Add set")])],1)],1)],2)],1)],1)},a=[],i=(n("a4d3"),n("4de4"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("ac1f"),n("5319"),n("159b"),n("ade3")),c=n("2b0e"),o=n("2f62"),s=n("f4dd"),l=n("802f");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=c["default"].extend({name:"Exercise",data:function(){return{exercise:{}}},created:function(){this.exercise=this.workout.exercises[this.$route.params.index]},computed:f({},Object(o["b"])({workout:"getActiveWorkout"})),methods:{addSet:function(){this.exercise.sets.push({})},removeSet:function(t){this.exercise.sets.splice(t,1)},updateWorkout:function(){this.$store.commit("setActiveWorkout",this.workout),this.$router.replace({name:"workout"})}},components:{Navigation:s["a"],ExerciseAvatar:l["a"]}}),d=p,v=n("2877"),b=n("6544"),g=n.n(b),m=n("8212"),O=n("8336"),y=n("b0af"),j=(n("caad"),n("4ec9"),n("a9e3"),n("d3b7"),n("3ca3"),n("2ca0"),n("ddb0"),n("4b85"),n("d9f7")),w=n("80d2");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=["sm","md","lg","xl"],x=function(){return k.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),C=function(){return k.reduce((function(t,e){return t["offset"+Object(w["p"])(e)]={type:[String,Number],default:null},t}),{})}(),P=function(){return k.reduce((function(t,e){return t["order"+Object(w["p"])(e)]={type:[String,Number],default:null},t}),{})}(),_={col:Object.keys(x),offset:Object.keys(C),order:Object.keys(P)};function V(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var E=new Map,D=c["default"].extend({name:"v-col",functional:!0,props:S({cols:{type:[Boolean,String,Number],default:!1}},x,{offset:{type:[String,Number],default:null}},C,{order:{type:[String,Number],default:null}},P,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,a=e.children,c=(e.parent,"");for(var o in n)c+=String(n[o]);var s=E.get(c);return s||function(){var t,e;for(e in s=[],_)_[e].forEach((function(t){var r=n[t],a=V(e,t,r);a&&s.push(a)}));var r=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!r||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),E.set(c,s)}(),t(n.tag,Object(j["a"])(r,{class:s}),a)}}),L=n("a523"),A=n("132d"),N=n("8860"),I=n("da13"),W=n("1800"),$=n("8270"),B=n("5d23"),R=n("e449");n("99af"),n("2532");function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z=["sm","md","lg","xl"],G=["start","end","center"];function J(t,e){return z.reduce((function(n,r){return n[t+Object(w["p"])(r)]=e(),n}),{})}var F=function(t){return[].concat(G,["baseline","stretch"]).includes(t)},q=J("align",(function(){return{type:String,default:null,validator:F}})),H=function(t){return[].concat(G,["space-between","space-around"]).includes(t)},K=J("justify",(function(){return{type:String,default:null,validator:H}})),Q=function(t){return[].concat(G,["space-between","space-around","stretch"]).includes(t)},U=J("alignContent",(function(){return{type:String,default:null,validator:Q}})),X={align:Object.keys(q),justify:Object.keys(K),alignContent:Object.keys(U)},Y={align:"align",justify:"justify",alignContent:"align-content"};function Z(t,e,n){var r=Y[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var tt=new Map,et=c["default"].extend({name:"v-row",functional:!0,props:M({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:F}},q,{justify:{type:String,default:null,validator:H}},K,{alignContent:{type:String,default:null,validator:Q}},U),render:function(t,e){var n=e.props,r=e.data,a=e.children,c="";for(var o in n)c+=String(n[o]);var s=tt.get(c);return s||function(){var t,e;for(e in s=[],X)X[e].forEach((function(t){var r=n[t],a=Z(e,t,r);a&&s.push(a)}));s.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),tt.set(c,s)}(),t(n.tag,Object(j["a"])(r,{staticClass:"row",class:s}),a)}}),nt=n("8654"),rt=n("2a7f"),at=Object(v["a"])(d,r,a,!1,null,null,null);e["default"]=at.exports;g()(at,{VAvatar:m["a"],VBtn:O["a"],VCard:y["a"],VCol:D,VContainer:L["a"],VIcon:A["a"],VList:N["a"],VListItem:I["a"],VListItemAction:W["a"],VListItemAvatar:$["a"],VListItemContent:B["a"],VListItemTitle:B["c"],VMenu:R["a"],VRow:et,VTextField:nt["a"],VToolbarTitle:rt["a"]})}}]);
//# sourceMappingURL=chunk-2d21b4fb.4c369473.js.map