(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c417d338"],{aa9c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"pa-0"},[a("v-container",{staticClass:"pt-3 mb-0 grey lighten-5",attrs:{fluid:""}},[a("v-layout",{staticClass:"my-0",attrs:{wrap:"","align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-flex",{staticClass:"my-0",attrs:{xs12:"",md10:""}},[a("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"200%",color:"#0277bd"}},[t._v(t._s(t.ChapterDetails.ChapterName)+"'s Events")]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"110%"}},[t._v("Questions? Please contact "+t._s(t.ChapterDetails.ChapterEmail)+".")])])],1)],1),a("v-container",{staticClass:"grey lighten-5",attrs:{fluid:""}},[a("v-layout",{attrs:{wrap:"","align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("upcommingEvents")],1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{wrap:"","align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("pastEvents")],1)],1)],1)],1)},o=[],r=a("96a1"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"pa-0 "},[s("v-layout",{staticClass:"mt-0 mb-0",attrs:{wrap:"","align-center":"","justify-center":"",row:"","fill-height":""}},[s("v-flex",{staticClass:"pa-2 mb-0",attrs:{xs12:"",md12:"",lg12:""}},[s("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"170%",color:"#0277bd"}},[t._v("Upcoming Events")]),s("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"120%"}},[t._v("\n               Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.\n           ")])])],1),s("v-layout",{staticClass:"hidden-sm-and-down my-3",staticStyle:{"background-position":"right"},style:{"background-image":"url("+a("c50c")+")"},attrs:{wrap:"","align-start":"","justify-start":"",row:"","fill-height":""}},[t.showLoader?s("v-flex",{attrs:{xs12:""}},[s("v-progress-circular",{attrs:{size:50,color:"blue",indeterminate:""}})],1):t._e(),t._l(t.eventsData,function(e,a){return s("v-flex",{key:a,attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[s("v-card",{staticClass:"ma-1 pa-1 my-0 elevation-1",attrs:{flat:""}},[s("v-card-title",{staticClass:"mb-0"},[s("div",[s("p",{staticClass:"google-font mb-2",staticStyle:{"font-size":"140%",color:"#0277bd"}},[t._v(t._s(e.name))]),s("p",{staticClass:"google-font mt-2 mb-1"},[s("span",{staticStyle:{"font-size":"110%"},domProps:{innerHTML:t._s(t.$options.filters.summery(e.description,180))}})]),s("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"110%"}},[s("v-icon",[t._v("insert_invitation")]),t._v("\n                            "+t._s(e.local_date)+"\n                        ")],1),s("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"110%"}},[s("v-icon",[t._v("watch_later")]),t._v("\n                            "+t._s(e.local_time)+"\n                        ")],1),s("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"110%"}},[s("v-icon",[t._v("map")]),t._v("\n                            "+t._s(t._f("summery")(e.venue.name,30))+"\n                        ")],1)])]),s("v-card-actions",{staticClass:"mt-0"},[s("v-spacer"),s("v-btn",{staticClass:"mb-0 ml-0 mt-0 google-font",staticStyle:{"border-radius":"7px","text-transform":"capitalize"},attrs:{flat:"",color:"#4C4A78",href:e.link,target:"_blank"}},[t._v("See More")])],1)],1)],1)})],2),s("v-layout",{staticClass:"hidden-md-and-up",attrs:{wrap:"","align-center":"","justify-center":"",row:"","fill-height":""}},[t.showLoader?s("v-flex",{attrs:{xs12:""}},[s("v-progress-circular",{attrs:{size:50,color:"blue",indeterminate:""}})],1):t._e(),s("v-flex",{attrs:{xs12:""}},[s("v-slide-y-reverse-transition",[s("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],staticClass:"grey lighten-5",attrs:{"two-line":"",subheader:""}},t._l(t.eventsData,function(e,a){return s("v-list-tile",{key:a,staticStyle:{"border-color":"#e0e0e0","border-width":"1px","border-style":"solid","border-top":"0","border-left":"0","border-right":"0","border-bottom":"1"},attrs:{avatar:""}},[s("v-list-tile-avatar",[s("v-icon",[t._v("view_compact")])],1),s("v-list-tile-content",[s("v-list-tile-title",{staticClass:"google-font"},[t._v(t._s(e.name))]),s("v-list-tile-sub-title",{staticClass:"google-font"},[t._v(t._s(e.local_date)+" | "+t._s(e.local_time))])],1),s("v-list-tile-action",[s("v-btn",{attrs:{icon:"",ripple:"",href:e.link,target:"_blank"}},[s("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("arrow_forward")])],1)],1)],1)}),1)],1)],1)],1)],1)},l=[],n=a("4bde"),c={data:function(){return{chapterDetails:r,eventsData:[],showLoader:!0,showData:!1,showData1:!1}},created:function(){var t=this;fetch("https://cors.io/?https://api.meetup.com/"+n["a"].urlname+"/events?key="+n["a"].apiKey).then(function(t){return t.json()}).then(function(e){t.showLoader=!1,t.showData=!0,t.showData1=!0,t.eventsData=e})},filters:{summery:function(t,e){return t.substring(0,e)+"..."}}},v=c,u=a("2877"),m=Object(u["a"])(v,i,l,!1,null,null,null),p=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 mb-3"},[a("v-layout",{staticClass:"mt-0 mb-0",attrs:{wrap:"","align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-flex",{staticClass:"pa-2 mb-0",attrs:{xs12:"",md12:"",lg12:""}},[a("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"170%",color:"#0277bd"}},[t._v("Directory of past events")]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"110%",color:"#616161"}},[t._v("\n               Events are listed in reverse chronological order by date.\n           ")]),a("p",{staticClass:"google-font",staticStyle:{"font-size":"110%",color:"#616161"}},[t._v("Here are the recent 10 meetups. To know more about the past meetups "),a("a",{staticStyle:{"text-decoration":"none",color:"#0277bd"},attrs:{href:t.chapterDetails.ChapterMeetupLink,target:"_blank"}},[t._v("Click here")])])])],1),a("v-layout",{attrs:{wrap:"",row:""}},[t.showLoader?a("v-flex",{attrs:{xs12:""}},[a("v-progress-circular",{attrs:{size:50,color:"blue",indeterminate:""}})],1):t._e(),t._l(t.eventsData,function(e,s){return a("v-flex",{key:s,attrs:{xs12:"",sm6:"",md4:"",lg4:""}},[a("v-slide-y-reverse-transition",[a("v-list",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],staticClass:"pa-2",attrs:{"two-line":"",subheader:""}},[a("v-list-tile",{staticStyle:{"border-color":"#e0e0e0","border-width":"1px","border-style":"solid","border-top":"0","border-left":"0","border-right":"0","border-bottom":"1"},attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-icon",[t._v("view_compact")])],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"google-font",staticStyle:{color:"#424242"}},[t._v(t._s(e.name))]),a("v-list-tile-sub-title",{staticClass:"google-font"},[t._v(t._s(t._f("dateFilter")(e.local_date))+" | "+t._s(e.local_time))])],1),a("v-list-tile-action",[a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",icon:"",ripple:"",href:e.link,target:"_blank"},slot:"activator"},[a("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("arrow_forward")])],1),a("span",[t._v("See More about "+t._s(e.name))])],1)],1)],1)],1)],1)],1)})],2)],1)},d=[],h={data:function(){return{chapterDetails:r,eventsData:[],showLoader:!0,showData:!1}},created:function(){var t=this;fetch("https://cors.io/?https://api.meetup.com/"+n["a"].urlname+"/events?desc=true&photo-host=public&page=8&status=past&key="+n["a"].apiKey).then(function(t){return t.json()}).then(function(e){t.showLoader=!1,t.showData=!0,t.eventsData=e})},filters:{summery:function(t,e){return t.substring(0,e)+".."},dateFilter:function(t){var e=new Date(t);return e.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric"})}}},g=h,b=Object(u["a"])(g,f,d,!1,null,null,null),_=b.exports,y={components:{upcommingEvents:p,pastEvents:_},data:function(){return{ChapterDetails:r}}},w=y,C=Object(u["a"])(w,s,o,!1,null,null,null);e["default"]=C.exports},c50c:function(t,e,a){t.exports=a.p+"img/bg.7ef974da.svg"}}]);
//# sourceMappingURL=chunk-c417d338.896cb422.js.map