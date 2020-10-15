(this["webpackJsonprobots-redux"]=this["webpackJsonprobots-redux"]||[]).push([[0],{220:function(e,t,n){e.exports=n(499)},236:function(e,t){},295:function(e,t){},309:function(e,t){},311:function(e,t){},496:function(e,t,n){},497:function(e,t,n){},498:function(e,t,n){},499:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(69),c=n.n(o),s=n(28),i=n(70),u=n(218),l=n(219),h=(n(230),n(24)),b=n(25),d=n(27),p=n(26),m=function(){return function(e){return e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}));var t}},f=(n(231),function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))}),E=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(f,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},g=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(r.Component),O=(n(496),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).filterRobots=function(){return e.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}))},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=(e.robots,e.onSearchChange),n=e.isPending;return a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(g,{searchChange:t}),n?a.a.createElement("h1",null,"Loading"):a.a.createElement(v,null,a.a.createElement(E,{robots:this.filterRobots()})))}}]),n}(r.Component)),R=(n(497),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return a.a.createElement(O,this.props)}}]),n}(r.Component)),y=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(m())}}}))(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S={searchField:""},j={robots:[],isPending:!1},C=(n(498),Object(l.createLogger)()),w=Object(s.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),_=Object(s.d)(w,Object(s.a)(u.a,C));c.a.render(a.a.createElement(i.a,{store:_},a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[220,1,2]]]);
//# sourceMappingURL=main.daf63739.chunk.js.map