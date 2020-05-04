(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{127:function(e,t,a){e.exports={container:"Chart_container__xPXxi"}},128:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__e55pM"}},132:function(e,t,a){e.exports=a(253)},253:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(118),o=a.n(c),s=a(25),u=a.n(s),i=a(39),l=a(119),d=a(120),m=a(130),f=a(129),p=a(270),v=a(275),h=a(271),b=a(272),E=a(76),y=a.n(E),g=a(77),x=a.n(g),_=a(48),C=a.n(_),w=function(e){return void 0==e.cards.confirmed?"Loading...":r.a.createElement("div",{className:C.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,xs:12,md:3,component:v.a,className:x()(C.a.card,C.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:e.cards.confirmed.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(e.cards.lastUpdate).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,xs:12,md:3,component:v.a,className:x()(C.a.card,C.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:e.cards.recovered.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(e.cards.lastUpdate).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(p.a,{item:!0,xs:12,md:3,component:v.a,className:x()(C.a.card,C.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(y.a,{start:0,end:e.cards.deaths.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(e.cards.lastUpdate).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19")))))},O=a(75),k=a(78),j=a.n(k),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,n=[],a.map((function(e,t){return n.push(e.name)})),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),U=a(88),B=a(127),P=a.n(B),V=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(O.a)(c,2),s=o[0],l=o[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=s.length?r.a.createElement(U.b,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:s.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0,0,0.5)",fill:!0}]}}):null,m=t.confirmed?r.a.createElement(U.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return r.a.createElement("div",{className:P.a.container},a?m:d)},A=a(274),L=a(273),R=a(128),X=a.n(R),G=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log(o),r.a.createElement(A.a,{className:X.a.formControl},r.a.createElement(L.a,{defaultValue:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.length?o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})):null))},J=a(90),M=a.n(J),Z=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:M.a.container},r.a.createElement(p.a,{item:!0,xs:12,md:12},r.a.createElement(b.a,{className:M.a.heading,variant:"h4"},"Learn in Lockdown")),r.a.createElement(w,{cards:t}),r.a.createElement(G,{handleCountryChange:this.handleCountryChange}),r.a.createElement(V,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Z,null),document.getElementById("root"))},48:function(e,t,a){e.exports={container:"Cards_container__1ItdO",card:"Cards_card__1P_tG",infected:"Cards_infected__3n9Zx",recovered:"Cards_recovered__1dyaE",deaths:"Cards_deaths__24Xof"}},90:function(e,t,a){e.exports={container:"App_container__wfkXh",heading:"App_heading__3i3OR"}}},[[132,1,2]]]);
//# sourceMappingURL=main.51175bb9.chunk.js.map