(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),o=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),i=(n(13),n(2)),h=n(3),l=n(5),b=n(4),d=n(0),u=function(e){var t=e.name,n=e.email,r=e.website,c=e.id;return Object(d.jsxs)("div",{className:"bg-dark-purple ba b--transparent br3 grow ma2 measure tc pa3 small-caps calisto light-green hover-black shadow-hover contain dib",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(c),alt:"robot"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n}),Object(d.jsx)("p",{children:r})]})]})},j=function(e){return e.filteredRobot.map((function(e,t){return Object(d.jsx)(u,{name:e.name,email:e.email,website:e.website,id:e.id},t)}))},f=function(e){var t=e.change;return Object(d.jsx)("div",{className:"pa1 ma2",children:Object(d.jsx)("input",{className:"bg-green pa2 grow",type:"search",placeholder:"enter robot name...",onChange:t})})},p=function(e){return Object(d.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:" Ooooopppps, I did it again!"}):this.props.children}}]),n}(c.a.Component),O=(n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value}),console.log(t.target.value)},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return console.log(e.status),e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(d.jsx)("h1",{className:"f1 light-green tc",children:"Loading..."}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1 light-green",children:" RoboFriends"}),Object(d.jsx)(f,{change:this.onSearchChange}),Object(d.jsx)(p,{children:Object(d.jsx)(g,{children:Object(d.jsx)(j,{filteredRobot:t})})})]})}}]),n}(c.a.Component));s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.7a1ce5e9.chunk.js.map