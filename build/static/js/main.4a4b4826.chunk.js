(this.webpackJsonpreactionport2=this.webpackJsonpreactionport2||[]).push([[0],{23:function(e){e.exports=JSON.parse('[{"id":1,"name":"CodePal","image":"https://github.com/spectocr/super-fortnight/blob/main/ss.png?raw=true","github":"https://github.com/spectocr/super-fortnight","deploy":"https://secret-ravine-72636.herokuapp.com/dashboard","topics":"Bcrypt, connect-session, express, handlebars, mysql2, nodemon, sequelize"},{"id":2,"name":"mvc tech blog","image":"https://github.com/spectocr/paytotechwhatistechs/blob/main/ss.png?raw=true","github":"https://github.com/spectocr/paytotechwhatistechs/","deploy":"https://radiant-journey-89319.herokuapp.com/","topics":"model-view-controller, bulma, bcrypt, express-js, mysql, sequelize, node-js, nodemon, dotenv, handlebars-js, jest"},{"id":3,"name":"Budget Tracker","image":"https://github.com/spectocr/MoMoneyMoProblems/blob/3d85587739cd50f8871f837131792ef86c950039/ss.png?raw=true","github":"https://github.com/spectocr/MoMoneyMoProblems","deploy":"https://tranquil-mesa-80725.herokuapp.com/","topics":"javascript, pwa, indexedDB, mongoDB, mongoose, compression, morgan, nodemon, express"},{"id":4,"name":"weather dashboard","image":"https://github.com/spectocr/doppler3/blob/main/ss.png?raw=true","github":"https://github.com/spectocr/doppler3","deploy":"https://spectocr.github.io/doppler3/","topics":"javascript, jQuery, html, bootstrap, moment, API"}]')},30:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),n=c(19),a=c.n(n),o=(c(30),c(20)),i=c(21),l=c(25),j=c(24),d=c(7),m=c(2),b=c(0);var h=function(e){return Object(b.jsxs)("div",{className:"navigation",id:"navigation",children:[Object(b.jsx)(d.b,{to:"/about",children:"about "}),Object(b.jsx)(d.b,{to:"/portfolio",children:"portfolio "}),Object(b.jsx)(d.b,{to:"/contact",children:"contact "}),Object(b.jsx)(d.b,{to:"/resume",children:"resume"})]})};var p=function(){return Object(b.jsxs)("section",{className:"title",children:[Object(b.jsx)("h1",{className:"name",children:"about: Cris Spector"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsxs)("div",{className:"col-10",id:"about-section",children:[Object(b.jsx)("img",{className:"mb-5",src:"https://avatars.githubusercontent.com/u/81635351?s=400&u=5452e8ffb333ac1cf18b740e74ddfb85903423b1&v=4",alt:"Cris."}),Object(b.jsx)("p",{children:"Have no fear this is here."}),Object(b.jsxs)("p",{children:["View full ",Object(b.jsx)("a",{href:"#/resume",className:"link",children:"resume"})]})]})})]})},u=c(10),x=c(16),O=c(17);var g=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(O.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(""),a=Object(O.a)(n,2),o=a[0],i=a[1],l=c.name,j=c.email,d=c.message;function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);i(t?"":"please enter a valid email")}else e.target.value.length?i(""):i("".concat(e.target.name," is required."));o||r(Object(x.a)(Object(x.a)({},c),{},Object(u.a)({},e.target.name,e.target.value)))}return Object(b.jsxs)("section",{className:"justify-content-center",id:"contact-section",children:[Object(b.jsx)("h1",{"data-testid":"h1tag",className:"contact",children:"contact: Cris"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{className:"justify-content-center",id:"contact-form",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"name:"}),Object(b.jsx)("input",{className:"form-control",type:"text",name:"name",defaultValue:l,onBlur:m})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"email:"}),Object(b.jsx)("input",{className:"form-control",type:"email",name:"email",defaultValue:j,onBlur:m})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"message",children:"message:"}),Object(b.jsx)("textarea",{className:"form-control",name:"message",defaultValue:d,onBlur:m,rows:"7"})]}),o&&Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"error-text",children:o})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{"data-testid":"button",className:"btn btn-outline-dark mt-4",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})};c(13);var f=function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{alt:e.name,src:e.image})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{className:"project-title",id:"card-title",children:e.name}),Object(b.jsxs)("p",{children:[Object(b.jsx)("a",{href:e.github,children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Repository",id:"project-icon"})}),Object(b.jsx)("a",{href:e.deploy,children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/monitor.png",alt:"Deployed Site",id:"project-icon"})})]}),Object(b.jsxs)("p",{id:"topics",children:["(",e.topics,")"]})]})]})},v=c(23);function y(e){return Object(b.jsx)("div",{className:"wrapper",children:e.children})}var N=function(){return Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{className:"project",children:[Object(b.jsx)("h1",{className:"title",children:"development portfolio: Cris"}),Object(b.jsx)("hr",{})]}),Object(b.jsx)(y,{id:"card-data",children:v.map((function(e){return Object(b.jsx)(f,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})};var w=function(){return Object(b.jsxs)("section",{className:"mb-5",children:[Object(b.jsx)("h1",{className:"resume",children:"resume: Cris"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row justify-content-center",id:"resume",children:Object(b.jsxs)("div",{className:"mt-5 pl-5 pr-5",children:["some guy who likes to code.",Object(b.jsxs)("p",{children:["Download my full ",Object(b.jsx)("a",{href:"https://raw.githubusercontent.com/spectocr/ReationPort2/main/src/assets/BlankResume.jpeg",className:"link",children:"resume"}),Object(b.jsx)("br",{})]})]})}),Object(b.jsxs)("div",{className:"justify-content-center mt-5",children:[Object(b.jsxs)("div",{id:"front-back",children:[Object(b.jsx)("h2",{children:"front end experience"}),Object(b.jsx)("p",{children:"HTML, CSS (Bootstrap, Foundation), JavaScript, jQuery, React.js, IndexedDB"})]}),Object(b.jsxs)("div",{id:"front-back",className:"mt-5",children:[Object(b.jsx)("h2",{children:"back end experience"}),Object(b.jsx)("p",{children:"Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, API's (third-party, RESTful, server-side), Templating (Handlebars)"})]})]})]})},S=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(d.a,{children:[Object(b.jsxs)("div",{className:"row Header",id:"header",children:[Object(b.jsx)("a",{href:"https://github.com/spectocr/ReationPort2",children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/48/000000/cat.png",alt:"Cris Spector",className:"icon",id:"astro"})}),Object(b.jsx)(h,{})]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(m.a,{to:"/portfolio"})}}),Object(b.jsx)(m.b,{path:"/portfolio",component:N}),Object(b.jsx)(m.b,{path:"/about",component:p}),Object(b.jsx)(m.b,{path:"/contact",component:g}),Object(b.jsx)(m.b,{path:"/resume",component:w})]})]})}}]),c}(s.Component);var k=function(){return Object(b.jsx)("div",{className:"footer",id:"footer",children:Object(b.jsxs)("p",{children:["\xa9 MeOw  | made with ",Object(b.jsx)("img",{id:"react-icon",src:"https://img.icons8.com/color/48/000000/react-native.png",alt:"React"})]})})};c(37);var B=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(S,{}),Object(b.jsx)(k,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4a4b4826.chunk.js.map