(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],f=0,m=[];f<i.length;f++)r=i[f],s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0cfb":function(e,t,a){},"1d25":function(e,t,a){},"250f":function(e,t,a){},"51f9":function(e,t,a){"use strict";var n=a("e531"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"mainContainer"},[a("AnimBackground"),a("router-view")],1),a("Footer")],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",[a("transition",{attrs:{name:"navbar"}},[e.showNav?a("div",{staticClass:"navbar"},[a("ul",[a("li",{on:{click:e.toggleStage}},[a("router-link",{attrs:{to:"/"}},[e._v("HOME")])],1),a("li",{on:{click:e.toggleStage}},[a("router-link",{attrs:{to:"/about"}},[e._v("ABOUT ME")])],1),a("li",{on:{click:e.toggleStage}},[a("router-link",{attrs:{to:"/work"}},[e._v("MY WORK")])],1),a("li",{on:{click:e.toggleStage}},[a("router-link",{attrs:{to:"/contact"}},[e._v("CONTACT")])],1)])]):e._e()]),a("div",{staticClass:"hamburger"},[a("div",{class:e.classObject,on:{mouseenter:e.hoverOn,mouseleave:e.hoverOff,click:e.toggleStage}},[a("i"),a("i"),a("i")])])],1)])},i=[],c={data:function(){return{showNav:!1,classObject:{burger:!0,st1:!1,st2:!1,hover:!1}}},methods:{hoverOn:function(){this.classObject.hover=!0},hoverOff:function(){this.classObject.hover=!1},toggleStage:function(){var e=this;this.showNav=!this.showNav,this.classObject.st2&&(this.classObject.st2=!1),this.classObject.hover=!1,this.classObject.st1=!this.classObject.st1,this.classObject.st1&&setTimeout(function(){e.classObject.st2=!e.classObject.st2},1e3)}}},l=c,u=(a("f227"),a("2877")),f=Object(u["a"])(l,r,i,!1,null,"22b8a931",null),m=f.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animContainer"},[a("div",{staticClass:"animBackground"},[a("div",{staticClass:"sphere sphere01"},[a("div",{staticClass:"planet"})]),a("div",{staticClass:"sphere sphere02"},[a("div",{staticClass:"planet"})]),a("div",{staticClass:"sphere sphere03"},[a("div",{staticClass:"planet"})]),a("div",{staticClass:"sphere sphere04"},[a("div",{staticClass:"planet"})]),a("div",{staticClass:"sphere sphere05"},[a("div",{staticClass:"planet"})]),a("div",{staticClass:"sphere sphere06"},[a("div",{staticClass:"planet"})]),a("div",{staticClass:"sphere sphere07"},[a("div",{staticClass:"planet"})])])])}],p={},g=p,h=(a("9c3e"),Object(u["a"])(g,v,d,!1,null,"ede4c31c",null)),_=h.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{on:{click:e.showFooter}},[e._m(0),a("div",{staticClass:"copyrights"},[e._v("\n    WW Project Studio ©2019\n  ")]),e._m(1)])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("span",[e._v("^")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adminLogin"},[a("a",{attrs:{href:"https://focused-edison-6deac0.netlify.com/",target:"_blank",rel:"noreferrer nofollow noopener"}},[e._v("Admin Login")])])}],C={data:function(){return{footerActive:!1}},methods:{showFooter:function(){this.footerActive?(document.querySelector(".header").innerHTML="Hiding",document.querySelector("footer").style.pointerEvents="none",setTimeout(function(){document.querySelector("footer").classList.remove("show"),document.querySelector(".header").innerHTML="<span>^</span>",document.querySelector("footer").style.pointerEvents="all"},1500),this.footerActive=!1):(document.querySelector("footer").classList.add("show"),setTimeout(function(){document.querySelector(".header").innerHTML="Click to hide"},1500),this.footerActive=!0)},hideFooter:function(){document.querySelector(".header").innerHTML="Hiding",document.querySelector("footer").style.pointerEvents="none",setTimeout(function(){document.querySelector("footer").classList.remove("show"),document.querySelector(".header").innerHTML="<span>^</span>",document.querySelector("footer").style.pointerEvents="all"},1500)}}},k=C,j=(a("5720"),Object(u["a"])(k,b,w,!1,null,null,null)),y=j.exports,O={components:{Navbar:m,AnimBackground:_,Footer:y},data:function(){return{}}},T=O,S=(a("cf25"),Object(u["a"])(T,s,o,!1,null,null,null)),I=S.exports,E=a("8c4f"),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"about"},[a("transition",[e.el1?a("div",{staticClass:"mainTitle"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"Images/Waldi.jpg",alt:"My photo"}})]),a("h1",[e._v("\n            Val Wroblewski\n          ")])]):e._e()]),a("transition",[e.el2?a("h6",[e._v("\n          Web Developer.\n        ")]):e._e()]),a("transition",[e.el3?a("div",{staticClass:"info"},[a("router-link",{attrs:{to:"/work"}},[a("p",[e._v('\n            "Turning passion into career. My expertise is in the area of responsive design. I strive to make the web a nice and pleasant place."\n          ')]),a("span",[e._v("click to see my work")])])],1):e._e()])],1),a("transition",[e.el5?a("div",{staticClass:"socialLinks"},[a("social")],1):e._e()])],1)])},M=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",[e.show?a("div",{staticClass:"title"},[a("h2",[e._v("Follow Me:")])]):e._e()]),a("ul",{on:{mouseenter:function(t){e.show=!0},mouseleave:function(t){e.show=!1}}},e._l(e.socialLinks,function(e,t){return a("li",{key:t},[a("a",{attrs:{href:e.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[a("div",{staticClass:"imageContainer"},[a("img",{attrs:{src:e.image,alt:e.name}})])])])}),0)],1)},L=[],N={data:function(){return{show:!1,socialLinks:[{name:"Facebook",link:"https://facebook.com/val.wroblewski",image:"Images/Social/fb.png"},{name:"github",link:"https://github.com/mru24",image:"Images/Social/gh.png"},{name:"LinkedIn",link:"https://LinkedIn.com/in/val-wroblewski-278724139/",image:"Images/Social/li.png"}]}}},P=N,q=(a("dd9b"),Object(u["a"])(P,$,L,!1,null,"5be0fabb",null)),A=q.exports,H={components:{social:A},data:function(){return{el1:!1,el2:!1,el3:!1,el4:!1,el5:!1,show:!0,arrowDown:"Images/arrow-down.png"}},created:function(){var e=this,t=1e3;setTimeout(function(){e.el1=!0},t),setTimeout(function(){e.el2=!0},t+1500),setTimeout(function(){e.el3=!0},t+3e3),setTimeout(function(){e.el4=!0},t+4e3),setTimeout(function(){e.el5=!0},t+6e3)}},W=H,F=(a("51f9"),Object(u["a"])(W,x,M,!1,null,"60aa3eb0",null)),B=F.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("transition",[e.el5?a("div",{staticClass:"socialLinks"},[a("social")],1):e._e()])],1)},Y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"about"},[a("h1",[e._v("Under construction..")])])])}],D={components:{social:A},data:function(){return{}}},R=D,V=(a("8a88"),Object(u["a"])(R,U,Y,!1,null,"2ecca201",null)),z=V.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[e._v("CONTACT ME")]),a("div",{staticClass:"contactInfo"},[a("div",{staticClass:"imageContainer"},[a("img",{attrs:{src:e.image,alt:""}})]),a("div",{staticClass:"infoContainer"},[a("ul",[a("li",[e._v("Name: "+e._s(e.name))])]),a("ul",[a("li",[e._v("Email: "+e._s(e.email))])]),a("ul",[a("li",[e._v("Website: "+e._s(e.web))])]),a("ul",[a("li",[e._v("Mobile: "+e._s(e.tel))])])])]),a("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage(t)}}},[a("div",{staticClass:"form-control"},[a("label",[e._v("Your Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.name,expression:"message.name"}],attrs:{type:"text",required:""},domProps:{value:e.message.name},on:{input:function(t){t.target.composing||e.$set(e.message,"name",t.target.value)}}})]),a("div",{staticClass:"form-control"},[a("label",[e._v("Your Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.message.email,expression:"message.email"}],attrs:{type:"email",required:""},domProps:{value:e.message.email},on:{input:function(t){t.target.composing||e.$set(e.message,"email",t.target.value)}}})]),a("div",{staticClass:"form-control"},[a("label",[e._v("Your Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message.message,expression:"message.message"}],attrs:{required:""},domProps:{value:e.message.message},on:{input:function(t){t.target.composing||e.$set(e.message,"message",t.target.value)}}})]),a("button",{attrs:{type:"submit"}},[e._v("Send")])])])])},G=[],K=(a("7f7f"),a("59ca")),Q=a.n(K),X=(a("e71f"),{apiKey:"AIzaSyBvL0UbxfU3O4bINITJVR2wzwnQhLht7Vw",authDomain:"myportfolio-fde76.firebaseapp.com",databaseURL:"https://myportfolio-fde76.firebaseio.com",projectId:"myportfolio-fde76",storageBucket:"myportfolio-fde76.appspot.com",messagingSenderId:"21364349422"}),Z=Q.a.initializeApp(X),ee=Q.a.firestore();ee.settings({timestampsInSnapshots:!0});var te=Z.firestore(),ae={data:function(){return{name:"Val Wroblewski",image:"Images/Waldi.jpg",email:"mru24@yahoo.com",web:"wwproject.eu",tel:"07599384805",message:{name:null,email:null,message:null}}},methods:{sendMessage:function(){var e=this;te.collection("Messages").add({name:this.message.name,email:this.message.email,message:this.message.message}).then(function(t){console.log("Message sent:",t.id),e.$router.push("/success")}).catch(function(e){console.error("Error sending message: ",e)})}}},ne=ae,se=(a("a648"),Object(u["a"])(ne,J,G,!1,null,"13131aa4",null)),oe=se.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"workNav"},[a("ul",e._l(e.workNav,function(t,n){return a("li",{key:n,staticClass:"navItem",on:{click:function(a){return e.changeCat(t.data)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0)]),a("div",{staticClass:"workContainer"},[a("transition-group",e._l(e.sortProjects(e.projects),function(t){return a("ul",{key:t.id},[e.projectsToShow==t.category?a("li",[a("a",{attrs:{href:t.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[a("div",{staticClass:"project",on:{mouseenter:function(e){t.showTags=!0},mouseleave:function(e){t.showTags=!1}}},[a("img",{attrs:{src:"Images/work/"+t.image,alt:""}}),a("h6",{staticClass:"title"},[e._v("\n                  "+e._s(t.name)+"\n                ")]),a("div",{class:[t.showTags?e.projectHover:e.projectInner]}),a("div",{staticClass:"tags"},[a("transition",{attrs:{name:"tagsIn"}},[t.showTags?a("ul",e._l(t.tags,function(t,n){return a("li",{key:n,class:{tagClass:e.tagClass}},[e._v("\n                        "+e._s(t)+"\n                      ")])}),0):e._e()])],1),a("div",{staticClass:"footer"},[a("a",{attrs:{href:t.github,target:"_blank",rel:"nofollow noreferrer noopener"}},[a("img",{attrs:{src:e.githubIcon,alt:"Github Icon"}})]),a("p",{staticClass:"title"},[e._v("\n                    "+e._s(t.name)+"\n                  ")])])])])]):"all"==e.projectsToShow?a("li",[a("a",{attrs:{href:t.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[a("div",{staticClass:"project",on:{mouseenter:function(e){t.showTags=!0},mouseleave:function(e){t.showTags=!1}}},[a("img",{attrs:{src:"Images/work/"+t.image,alt:""}}),a("div",{class:[t.showTags?e.projectHover:e.projectInner]}),a("div",{staticClass:"tags"},[a("transition",{attrs:{name:"tagsIn"}},[t.showTags?a("ul",e._l(t.tags,function(t,n){return a("li",{key:n,class:{tagClass:e.tagClass}},[e._v("\n                        "+e._s(t)+"\n                      ")])}),0):e._e()])],1),a("div",{staticClass:"footer"},[a("a",{attrs:{href:t.github,target:"_blank",rel:"nofollow noreferrer noopener"}},[a("img",{attrs:{src:e.githubIcon,alt:"Github Icon"}})]),a("p",{staticClass:"title"},[e._v("\n                    "+e._s(t.name)+"\n                  ")])])])])]):e._e()])}),0)],1)])])},ie=[],ce=(a("b54a"),a("ac6a"),a("55dd"),{data:function(){return{projectsToShow:"all",githubIcon:"Images/Social/gh.png",projectInner:"projectInner",projectHover:"projectHover",tagClass:"tagClass",workNav:[{name:"all",info:"",data:"all"},{name:"responsive design",info:"",data:"resp"},{name:"java script",info:"",data:"js"},{name:"php",info:"",data:"php"}],projects:[]}},methods:{sortProjects:function(e){return e.slice().sort(function(e,t){return t.id-e.id})},changeCat:function(e){this.projectsToShow=e}},created:function(){var e=this;te.collection("Project").get().then(function(t){t.forEach(function(t){var a={name:t.data().name,info:t.data().info,link:t.data().link,github:t.data().github,image:t.data().image,tags:t.data().item.tag,showTags:t.data().showTags,category:t.data().category,id:t.data().id};e.projects.push(a)})})}}),le=ce,ue=(a("e98a"),Object(u["a"])(le,re,ie,!1,null,"6842305a",null)),fe=ue.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[e._m(0),a("router-link",{attrs:{to:"/"}},[e._v("Back to Main Page")])],1)])},ve=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"success"},[a("h4",[e._v("\n        Your message has been sent."),a("br"),e._v("\n        Thank you.\n      ")])])}],de={},pe=de,ge=(a("d52d"),Object(u["a"])(pe,me,ve,!1,null,"7336092f",null)),he=ge.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[e._m(0),a("router-link",{attrs:{to:"/contact"}},[e._v("Return to Contact Page")])],1)])},be=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fail"},[a("h4",[e._v("\n        Ooops. Something went wrong."),a("br"),e._v("\n        Please try again\n      ")])])}],we={},Ce=we,ke=(a("8744"),Object(u["a"])(Ce,_e,be,!1,null,"5ccc5e11",null)),je=ke.exports;n["a"].use(E["a"]);var ye=new E["a"]({base:"/",routes:[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:z},{path:"/contact",name:"Contact",component:oe},{path:"/work",name:"Work",component:fe},{path:"/success",name:"Success",component:he},{path:"/fail",name:"Fail",component:je}]}),Oe=a("2f62");n["a"].use(Oe["a"]);var Te=new Oe["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:ye,store:Te,render:function(e){return e(I)}}).$mount("#app")},5720:function(e,t,a){"use strict";var n=a("e049"),s=a.n(n);s.a},6200:function(e,t,a){},"6c93":function(e,t,a){},8744:function(e,t,a){"use strict";var n=a("6c93"),s=a.n(n);s.a},"8a88":function(e,t,a){"use strict";var n=a("f7c2"),s=a.n(n);s.a},"9c3e":function(e,t,a){"use strict";var n=a("250f"),s=a.n(n);s.a},a648:function(e,t,a){"use strict";var n=a("a6c3"),s=a.n(n);s.a},a6c3:function(e,t,a){},cf25:function(e,t,a){"use strict";var n=a("0cfb"),s=a.n(n);s.a},d167:function(e,t,a){},d52d:function(e,t,a){"use strict";var n=a("fe7a"),s=a.n(n);s.a},dd9b:function(e,t,a){"use strict";var n=a("6200"),s=a.n(n);s.a},e049:function(e,t,a){},e531:function(e,t,a){},e98a:function(e,t,a){"use strict";var n=a("1d25"),s=a.n(n);s.a},f227:function(e,t,a){"use strict";var n=a("d167"),s=a.n(n);s.a},f7c2:function(e,t,a){},fe7a:function(e,t,a){}});
//# sourceMappingURL=app.e5789797.js.map