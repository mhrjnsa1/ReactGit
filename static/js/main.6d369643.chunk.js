(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(12),i=a(13),l=a(16),u=a(14),d=a(17),m=a(2),h=a(15),g=a.n(h),f=(a(10),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={userLogin:[],searchText:"",scrollActive:"normal",showloader:!0},e.selectUser=function(){e.setState(function(t){return{userlogin:e.state.userLogin.map(function(e){e.selected=!1,"User"===e.type&&(e.selected=!0)})}})},e.selectOrg=function(){e.setState(function(t){return{userlogin:e.state.userLogin.map(function(e){e.selected=!1,"Organization"===e.type&&(e.selected=!0)})}})},e.selectAll=function(){e.setState(function(t){return{userlogin:e.state.userLogin.map(function(e){e.selected=!0})}})},e.getText=function(t){var a=t.target.value;e.setState({searchText:a}),a.length>0?e.setState(function(t){return{userlogin:e.state.userLogin.map(function(e){e.selected=!1,e.login.indexOf(a)>=0&&(e.selected=!0)})}}):e.setState(function(t){return{userlogin:e.state.userLogin.map(function(e){e.selected=!0})}})},e.checkuser=function(){var t=0;return e.state.userLogin.map(function(e){e.selected&&t++}),t},e.hightlightheader=function(){var t="";document.addEventListener("scroll",function(){t=window.scrollY>60?"activeheader":"normale",e.setState({scrollActive:t})})},e.handleClick=e.handleClick.bind(Object(m.a)(Object(m.a)(e))),e.state.showloader=!0,e.handleClick(),e.hightlightheader(),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){var e=this;g.a.get("https://api.github.com/users").then(function(t){t.data.map(function(e){e.selected=!0}),e.setState({userLogin:t.data}),setTimeout(function(){e.state.userLogin.length>0&&e.setState({showloader:!1})},1e3)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid bodyWrapper "+(this.state.showloader?"showLoader":"showWrapper")},s.a.createElement("div",{className:"loader_dsg"},"Loading...."),s.a.createElement("div",{className:"gitWrappercontainer"},s.a.createElement("div",{className:"userSelect_dsg "+this.state.scrollActive},s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.selectAll()}},"All"),s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.selectUser()}},"User"),s.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.selectOrg()}},"Organization"),s.a.createElement("input",{type:"text",value:this.state.searchText,onChange:function(t){return e.getText(t)}})),s.a.createElement("h1",{className:"noInfo"},this.checkuser()?"":"no user available"),s.a.createElement("div",{className:"cardWrapper"},this.state.userLogin.map(function(e,t){return e.selected?s.a.createElement("div",{className:"card userDesign",key:t},s.a.createElement("h1",{className:"userName_dsg"},e.login),s.a.createElement("img",{className:"card-img-top",src:e.avatar_url,alt:"Card image cap"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},e.type),s.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement("a",{href:"#",className:"btn btn-primary"},"Go somewhere"))):""}))))}}]),t}(n.Component));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.6d369643.chunk.js.map