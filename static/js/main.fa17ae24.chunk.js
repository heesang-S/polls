(this.webpackJsonppoll=this.webpackJsonppoll||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(11),r=n.n(i),o=(n(51),n(52),n(9)),c=n(5),l=n(10),s=n(6),d=n(33),u="auth/LOGIN",j="auth/LOGOUT",b={logged:!1,name:""};var h=n(19),p=n.n(h),O=n(45),x=n(16),f="poll/SAVE",m="poll/DELETE",g="poll/VOTE",v={polls:[],nextId:1};var C,y,w,D,k,I,S,P,U,V,T,E,L,R,z,N,M,K,B,F=n(46),A=s.a.div(C||(C=Object(c.a)(["\n  width: ",";\n  background: white;\n  border-radius: 2px;\n\n  overflow-y: auto;\n\n  margin-top: ",";\n  box-shadow: 1px 1px 1px black;\n"])),(function(e){return e.width||"400px"}),(function(e){return e.marginTop||"0"})),G=s.a.div(y||(y=Object(c.a)(["\n  width: ",";\n  height: ",";\n  background: #b3b6c2;\n\n  display: flex;\n  position: relative;\n\n  justify-content: center;\n  align-items: center;\n"])),(function(e){return e.width||"400px"}),(function(e){return e.height||"80px"})),J=s.a.div(w||(w=Object(c.a)(["\n  position: absolute;\n  right: ",";\n"])),(function(e){return e.right||"20px"})),H=s.a.input(D||(D=Object(c.a)(["\n  width: 200px;\n  background-color: inherit;\n  color: #231815;\n\n  border: none;\n  text-align: center;\n\n  &::placeholder {\n    text-align: center;\n    color: #231815;\n    opacity: 0.7;\n  }\n"]))),W=s.a.div(k||(k=Object(c.a)(["\n  width: 100%;\n  height: ",";\n\n  overflow-y: auto;\n  background-color: #f8f8f8;\n  color: white;\n\n  padding: 20px;\n"])),(function(e){return e.height||"520px"})),q=s.a.div(I||(I=Object(c.a)(["\n  flex: 1 100px;\n  justify-self: right;\n\n  display: flex;\n  justify-content: center;\n\n  & > * {\n    color: grey;\n    border-radius: 4px;\n    font-weight: 500;\n  }\n"]))),Q=s.a.div(S||(S=Object(c.a)(["\n  width: 100%;\n  background-color: #f8f8f8;\n"]))),X=s.a.input(P||(P=Object(c.a)(["\n  width: 50px;\n  height: 35px;\n  background-color: ",";\n\n  position: ",";\n  right: 20px;\n\n  &:disabled {\n    cursor: default;\n    border: none;\n  }\n"])),(function(e){return e.color||"#B3B6C2"}),(function(e){return e.position||"absolute"})),Y=s.a.input(U||(U=Object(c.a)(["\n  width: 300px;\n  border-radius: 4px;\n\n  background-color: white;\n\n  margin: 5px 10px 5px 0;\n\n  &:disabled {\n    cursor: pointer;\n  }\n"]))),Z=s.a.div(V||(V=Object(c.a)(["\n  width: 300px;\n  border-radius: 4px;\n\n  background-color: white;\n  color: black;\n\n  margin: 5px 10px 5px 0;\n\n  &.active {\n    background-color: orange;\n    color: white;\n  }\n"]))),$=n(3),_=s.a.div(T||(T=Object(c.a)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),ee=s.a.div(E||(E=Object(c.a)(["\n  display: flex;\n"]))),te=Object(s.a)(x.a)(L||(L=Object(c.a)(["\n  height: 30px;\n"]))),ne=s.a.div(R||(R=Object(c.a)(["\n  padding: 10px;\n\n  float: right;\n"]))),ae=Object(s.a)(x.a)(z||(z=Object(c.a)(["\n  margin-left: 10px;\n"]))),ie=function(e){var t=e.toCreate,n=e.username,a=e.title,i=e.setTitle,r=e.handleTitleOnEnter;return Object($.jsxs)(G,{width:"100%",height:"50px",children:[Object($.jsx)(H,{type:"text",defaultValue:a,name:"title",placeholder:"Title",onKeyPress:r,disabled:!t,onChange:function(e){return i(e.target.value)}}),Object($.jsx)(J,{right:"0",children:Object($.jsx)(X,{position:"relative",type:"text",name:"username",value:n,onChange:function(){},disabled:!0})})]})},re=function(e){var t=e.usernameRedux,n=e.toCreate,a=e.toVote,i=e.startDate,r=e.setStartDate,o=e.endDate,c=e.setEndDate,l=e.items,s=e.handleItemEnter,d=e.handleItemOnChange,u=e.handleItemOnClick,j=e.handleItemAdd,b=e.handleItemDelete;return Object($.jsxs)(W,{children:[Object($.jsxs)(q,{children:[Object($.jsx)(p.a,{onChange:r,value:i}),Object($.jsx)("span",{children:" ~ "}),Object($.jsx)(p.a,{onChange:c,value:o})]}),Object($.jsxs)(_,{children:[a?l.map((function(e,n){return Object($.jsxs)(ee,{children:[Object($.jsx)(Z,{name:e.id,onClick:function(n){u(e.id,t)},className:e.votedUsers.includes(t)?"active":"",children:e.content}),Object($.jsx)(te,{variant:"outline-secondary",size:"sm",onClick:function(){b(e.id)},disabled:!!(n<3||a),"data-item":e.id,children:"-"})]},e.id)})):l.map((function(e,i){return Object($.jsxs)(ee,{children:[Object($.jsx)(Y,{type:"text",defaultValue:e.content,name:e.id,placeholder:"write an item",onKeyPress:function(t){s(e.id,t)},onChange:function(t){d(e.id,t)},disabled:a||!n,className:e.votedUsers.includes(t)?"active":""}),Object($.jsx)(te,{variant:"outline-secondary",size:"sm",onClick:function(){b(e.id)},disabled:!!(i<3||a),"data-item":e.id,children:"-"})]},e.id)})),Object($.jsx)("div",{className:"poll-item-add",children:!a&&n?Object($.jsx)(te,{variant:"outline-secondary",size:"sm",onClick:j,children:"+"}):""})]})]})},oe=function(e){var t=e.username,n=e.usernameRedux,a=e.votedUsers,i=e.poll,r=e.toCreate,o=e.toVote,c=e.handleOnPollCreate,l=e.handleOnPollDelete,s=e.handleOnPollVote,d=e.handleModalClose;return Object($.jsx)(Q,{children:Object($.jsxs)(ne,{children:[Object($.jsx)(ae,{size:"sm",variant:"outline-danger",onClick:d,children:"Discard"}),r?Object($.jsx)(ae,{size:"sm",variant:"primary",onClick:function(){c()},children:"Create"}):"",!r&&t===n&&i?Object($.jsx)(ae,{size:"sm",variant:"danger",onClick:l,children:"Delete"}):"",o&&!a.includes(n)?Object($.jsx)(ae,{size:"sm",variant:"warning",onClick:s,children:"Vote"}):""]})})},ce=[{id:1,content:"",votedUsers:[]},{id:2,content:"",votedUsers:[]},{id:3,content:"",votedUsers:[]}],le=function(e){var t=e.pollRedux,n=e.pollNextId,i=e.usernameRedux,r=e.toCreate,c=e.toVote,l=e.pollSave,s=e.pollDelete,d=e.pollVote,u=e.handleModalClose,j=Object(a.useState)(t?t.id:n+1),b=Object(o.a)(j,2),h=b[0],p=(b[1],Object(a.useState)(t?t.username:i)),O=Object(o.a)(p,2),x=O[0],f=(O[1],Object(a.useState)(t?t.title:"")),m=Object(o.a)(f,2),g=m[0],v=m[1],C=Object(a.useState)(t?t.startDate:""),y=Object(o.a)(C,2),w=y[0],D=y[1],k=Object(a.useState)(t?t.endDate:""),I=Object(o.a)(k,2),S=I[0],P=I[1],U=Object(a.useState)(t?t.items:ce),V=Object(o.a)(U,2),T=V[0],E=V[1],L=Object(a.useRef)(4),R=Object(a.useState)(!!t&&t.isInProgress),z=Object(o.a)(R,2),N=z[0],M=(z[1],Object(a.useState)(!!t&&t.isDone)),K=Object(o.a)(M,2),B=K[0],G=(K[1],Object(a.useState)(t?t.votedUsers:[])),J=Object(o.a)(G,2),H=J[0],W=(J[1],Object(a.useState)(t?t.result:null)),q=Object(o.a)(W,2),Q=q[0];q[1];return Object($.jsxs)(A,{width:"100%",children:[Object($.jsx)(ie,{toCreate:r,title:g,setTitle:v,username:x,handleTitleOnEnter:function(e){13==window.event.keyCode&&e.target.blur()}}),Object($.jsx)(re,{usernameRedux:i,toVote:c,toCreate:r,startDate:w,setStartDate:D,setEndDate:P,endDate:S,items:T,handleItemEnter:function(e,t){13==window.event.keyCode&&t.target.blur()},handleItemOnChange:function(e,t){13!==window.event.keyCode&&E(T.map((function(n){return n.id===e?{id:e,content:t.target.value,votedUsers:[]}:n})))},handleItemOnClick:function(e){c&&E(T.map((function(t){return t.id===e?{id:e,content:t.content,votedUsers:t.votedUsers.includes(i)?t.votedUsers.filter((function(e){return e!==i})):t.votedUsers.concat([i])}:t})))},handleItemAdd:function(e){return E([].concat(Object(F.a)(T),[{id:L.current++,content:"",votedUsers:[]}]))},handleItemDelete:function(e){E(T.filter((function(t){return t.id!==e})))}}),Object($.jsx)(oe,{username:x,usernameRedux:i,poll:t,votedUsers:H,toCreate:r,toVote:c,handleOnPollCreate:function(){l({id:h,username:x,title:g,startDate:w,endDate:S,items:T,isInProgress:N,isDone:B,votedUsers:H,result:Q}),u()},handleOnPollDelete:function(){s(h),u()},handleOnPollVote:function(){d({id:h,username:x,items:T}),u()},handleModalClose:u})]})},se=function(e){var t=e.pollId,n=e.toCreate,a=e.toVote,i=e.handleModalClose,r=Object(l.c)((function(e){return e.poll.polls.find((function(e){return e.id===t}))})),o=Object(l.c)((function(e){return e.poll.nextId})),c=Object(l.c)((function(e){return e.auth.name})),s=Object(l.b)();return Object($.jsx)(le,{pollRedux:r,pollNextId:o,usernameRedux:c,toCreate:n,toVote:a,pollSave:function(e){return s({type:f,poll:{id:(t=e).id,username:t.username,title:t.title,startDate:t.startDate,endDate:t.endDate,items:t.items,isInProgress:t.isInProgress,isDone:t.isDone,result:t.id?t.result:null,votedUsers:t.id?t.votedUsers:[]}});var t},pollDelete:function(e){return s(function(e){return{type:m,pollId:e}}(e))},pollVote:function(e){var t=e.id,n=e.username,a=e.items;return s({type:g,payload:{id:t,username:n,items:a}})},handleModalClose:i})},de=s.a.div(N||(N=Object(c.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]))),ue=s.a.div(M||(M=Object(c.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: #231815;\n\n  display: inline;\n"]))),je=s.a.div(K||(K=Object(c.a)(["\n  padding: 20px 20px 2p 20px;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]))),be=Object(s.a)(x.a)(B||(B=Object(c.a)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n"]))),he=function(e){var t=e.username,n=e.logged,a=e.handleInputOnChange,i=e.handleInputKeyPress,r=e.handleLoginOnClick,o=e.handleLogout;return Object($.jsxs)(G,{width:"100%",height:"60px",children:[Object($.jsx)(ue,{children:"Polls"}),Object($.jsxs)(J,{children:[Object($.jsx)(X,{position:"relative",type:"text",name:"username",value:t,placeholder:"Name?",onKeyPress:i,onChange:a,disabled:n}),n?Object($.jsx)(x.a,{variant:"primary",onClick:function(){o(t)},children:"Logout"}):Object($.jsx)(x.a,{variant:"primary",onClick:function(){r()},children:"Login"})]})]})},pe=function(e){var t=e.poll,n=e.handlePollSummaryClick,a=(t.id,t.username),i=t.title,r=t.startDate,o=t.endDate,c=(t.items,t.votedUsers,t.result);return Object($.jsxs)(A,{marginTop:"10px",width:"450px",onClick:function(){n(t)},children:[Object($.jsxs)(G,{width:"100%",height:"50px",children:[Object($.jsx)(H,{type:"text",value:i,disabled:!0}),Object($.jsx)(J,{right:"0",children:Object($.jsx)(X,{position:"relative",type:"text",name:"username",value:a,disabled:!0})})]}),Object($.jsxs)(W,{height:"100px",children:[Object($.jsxs)(q,{children:[Object($.jsx)(p.a,{onChange:function(){},value:r,disabled:!0}),Object($.jsx)("span",{children:" ~ "}),Object($.jsx)(p.a,{onChange:function(){},value:o,disabled:!0})]}),Object($.jsx)("div",{children:c?"On going":"Result : ".concat(c)})]}),Object($.jsx)(Q,{})]})},Oe=function(){var e=Object(l.c)((function(e){return e.auth.logged})),t=Object(l.c)((function(e){return e.auth.name})),n=(Object(l.c)((function(e){return e.poll.nextId})),Object(l.c)((function(e){return e.poll.polls}))),i=Object(l.b)(),r=function(e){return i(function(e){return{type:u,name:e}}(e))},c=function(e){return i(function(e){return{type:j,name:e}}(e))},s=Object(a.useState)(t),d=Object(o.a)(s,2),b=d[0],h=d[1],p=Object(a.useState)(!1),x=Object(o.a)(p,2),f=x[0],m=x[1],g=Object(a.useState)(""),v=Object(o.a)(g,2),C=v[0],y=v[1],w=Object(a.useState)(!1),D=Object(o.a)(w,2),k=D[0],I=D[1],S=Object(a.useState)(!1),P=Object(o.a)(S,2),U=P[0],V=P[1],T=function(e){return m(!1)},E=function(t){var n=t.id;t.username,t.title,t.startDate,t.endDate,t.items,t.result;y(n),I(!1),V(e),m(!0)};return Object($.jsxs)(de,{children:[Object($.jsx)(he,{username:b,logged:e,handleInputOnChange:function(e){h(e.target.value)},handleInputKeyPress:function(t){13==window.event.keyCode&&(e?c(t.target.value):r(t.target.value))},handleLoginOnClick:function(){r(b)},handleLogout:c}),Object($.jsx)(je,{children:n.map((function(e){return Object($.jsx)(pe,{poll:e,handlePollSummaryClick:E},e.id)}))}),Object($.jsx)(be,{variant:"primary",onClick:function(t){y(""),I(e),V(!1),m(!0)},children:"Create"}),Object($.jsx)(O.a,{show:f,onHide:T,children:Object($.jsx)(se,{pollId:C,toCreate:k,toVote:U,handleModalClose:T})})]})};n(79),n(80),n(81),n(82);var xe=function(){return Object($.jsx)(Oe,{})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))},me=n(42),ge=n(13),ve=n(32),Ce=n(43),ye=n.n(Ce),we=Object(ge.combineReducers)({poll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{polls:e.polls.concat([t.poll]),nextId:1};case m:return{polls:e.polls.filter((function(e){return e.id!==t.pollId}))};case g:return{polls:e.polls.map((function(e){return e.id!==t.payload.id||e.votedUsers.includes(t.payload.username)?e:{id:e.id,username:e.username,title:e.title,startDate:e.startDate,endDate:e.endDate,items:t.payload.items,isInProgress:t.payload.isInProgress,isDone:t.payload.isDone,result:e.result,votedUsers:e.votedUsers.concat([t.payload.username])}}))};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{name:t.name,logged:""!==t.name.trim()});case j:return{name:"",logged:!1};default:return e}}}),De=n(44),ke={key:"root",storage:ye.a},Ie=Object(ve.a)(ke,we);var Se=function(){var e=Object(ge.createStore)(Ie,Object(De.composeWithDevTools)());return{store:e,persistor:Object(ve.b)(e)}}(),Pe=Se.store,Ue=Se.persistor;r.a.render(Object($.jsx)(l.a,{store:Pe,children:Object($.jsx)(me.a,{loading:null,persistor:Ue,children:Object($.jsx)(xe,{})})}),document.getElementById("root")),fe()}},[[86,1,2]]]);
//# sourceMappingURL=main.fa17ae24.chunk.js.map