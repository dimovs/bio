(function(e){function t(t){for(var c,i,f=t[0],u=t[1],b=t[2],l=0,s=[];l<f.length;l++)i=f[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&s.push(a[i][0]),a[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);o&&o(t);while(s.length)s.shift()();return r.push.apply(r,b||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,f=1;f<n.length;f++){var u=n[f];0!==a[u]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bio/";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],u=f.push.bind(f);f.push=t,f=f.slice();for(var b=0;b<f.length;b++)t(f[b]);var o=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a13":function(e,t,n){"use strict";n("b4c5")},"0f70":function(e,t,n){},"11db":function(e,t,n){e.exports=n.p+"img/me.1392a23a.jpeg"},1437:function(e,t,n){},"4fee":function(e,t,n){"use strict";n("1437")},5246:function(e,t,n){"use strict";n("8e90")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t){var n=Object(c["x"])("router-view");return Object(c["r"])(),Object(c["d"])(n)}n("833b");var r=n("6b0d"),i=n.n(r);const f={},u=i()(f,[["render",a]]);var b=u,o=n("6c02"),l=function(e){return Object(c["u"])("data-v-2d26b2d3"),e=e(),Object(c["s"])(),e},s={class:"page--entry"},j={class:"page__header"},d=l((function(){return Object(c["f"])("h1",null," Здравствуйте! Вы попали на мою страничку. ",-1)})),O=Object(c["h"])("Войти");function m(e,t,n,a,r,i){var f=Object(c["x"])("router-link");return Object(c["r"])(),Object(c["e"])("div",s,[Object(c["f"])("div",j,[d,Object(c["i"])(f,{class:"page__enter-link",to:"/main/bio",replace:""},{default:Object(c["B"])((function(){return[O]})),_:1})])])}var p={name:"Home"};n("a2f4");const v=i()(p,[["render",m],["__scopeId","data-v-2d26b2d3"]]);var _=v,h=function(e){return Object(c["u"])("data-v-250839c2"),e=e(),Object(c["s"])(),e},g={class:"page"},y={class:"page__menu"},x={class:"menu"},k={class:"menu__item"},w=Object(c["h"])("Биография"),S={class:"menu__item"},B=Object(c["h"])("Моя семья"),I={class:"menu__item"},P=Object(c["h"])("Моя друзья"),M={class:"menu__item"},q=Object(c["h"])("Мои увлечения"),H={class:"menu__item"},F=Object(c["h"])("Анкета"),J={class:"page__content"},T=h((function(){return Object(c["f"])("header",{class:"page__header"},[Object(c["f"])("h1",null,"Моя личная страница")],-1)})),A={class:"page__main"},C=h((function(){return Object(c["f"])("footer",{class:"page__footer"},[Object(c["f"])("span",null,"Со мной можно связаться по"),Object(c["h"])(),Object(c["f"])("a",{href:"mailto: tatata@gmail.com",class:"mail"},"tatata@gmail.com")],-1)}));function z(e,t){var n=Object(c["x"])("router-link"),a=Object(c["x"])("router-view");return Object(c["r"])(),Object(c["e"])("div",g,[Object(c["f"])("div",y,[Object(c["f"])("ul",x,[Object(c["f"])("li",k,[Object(c["i"])(n,{to:"/main/bio"},{default:Object(c["B"])((function(){return[w]})),_:1})]),Object(c["f"])("li",S,[Object(c["i"])(n,{to:"/main/family"},{default:Object(c["B"])((function(){return[B]})),_:1})]),Object(c["f"])("li",I,[Object(c["i"])(n,{to:"/main/friends"},{default:Object(c["B"])((function(){return[P]})),_:1})]),Object(c["f"])("li",M,[Object(c["i"])(n,{to:"/main/hobbies"},{default:Object(c["B"])((function(){return[q]})),_:1})]),Object(c["f"])("li",H,[Object(c["i"])(n,{to:"/main/application"},{default:Object(c["B"])((function(){return[F]})),_:1})])])]),Object(c["f"])("div",J,[T,Object(c["f"])("main",A,[Object(c["i"])(a)]),C])])}n("5246");const D={},E=i()(D,[["render",z],["__scopeId","data-v-250839c2"]]);var G=E,K=n("11db"),L=n.n(K),N=function(e){return Object(c["u"])("data-v-13e49927"),e=e(),Object(c["s"])(),e},Q=N((function(){return Object(c["f"])("h2",{class:"header"},"О себе",-1)})),R=N((function(){return Object(c["f"])("div",{class:"content"},[Object(c["f"])("p",{class:"content__text"}," Меня зовут Анастасия. Я живу в очень красивом городке, в котором есть много достопримечательностей. "),Object(c["f"])("div",{class:"content__image"},[Object(c["f"])("img",{src:L.a,alt:"Я в детстве"})])],-1)}));function U(e,t,n,a,r,i){return Object(c["r"])(),Object(c["e"])(c["a"],null,[Q,R],64)}var V={name:"Bio"};n("0a13");const W=i()(V,[["render",U],["__scopeId","data-v-13e49927"]]);var X=W,Y=function(e){return Object(c["u"])("data-v-cac694b6"),e=e(),Object(c["s"])(),e},Z=Y((function(){return Object(c["f"])("h2",{class:"header"},"Мои увлечения",-1)})),$=Y((function(){return Object(c["f"])("p",null," У меня есть много интересных увлечений. Например: ",-1)})),ee=Y((function(){return Object(c["f"])("ul",{class:"hobbies__list"},[Object(c["f"])("li",null,"вязание"),Object(c["f"])("li",null,"вышивание"),Object(c["f"])("li",null,"кулинария")],-1)})),te=Y((function(){return Object(c["f"])("p",null," Это мое основное хобби, которому я уделяю максимум внимания. Особенно я отдаюсь творчеству на выходные. Но если меня заинтересовало что-то новое, то я обязательно попробую себя и в этом. ",-1)})),ne=Y((function(){return Object(c["f"])("p",null," Я люблю много читать. Больше всего мне нравится классическая зарубежная литература. Мою любимый автор – это Эрих-Мария Ремарк, а любимое его произведение «Жизнь взаймы». Из поэтических произведений я выделяю стихи Джорджа Гордона Байрона, наиболее меня впечатлил его стих «Ворон». ",-1)}));function ce(e,t,n,a,r,i){return Object(c["r"])(),Object(c["e"])(c["a"],null,[Z,$,ee,te,ne],64)}var ae={name:"Hobbies"};n("c333");const re=i()(ae,[["render",ce],["__scopeId","data-v-cac694b6"]]);var ie=re,fe=function(e){return Object(c["u"])("data-v-5151392a"),e=e(),Object(c["s"])(),e},ue=fe((function(){return Object(c["f"])("h2",{class:"header"},"Моя семья",-1)})),be=fe((function(){return Object(c["f"])("p",null," У меня большая семья. ",-1)})),oe=fe((function(){return Object(c["f"])("ul",{class:"family__list"},[Object(c["f"])("li",null,"мама"),Object(c["f"])("li",null,"папа"),Object(c["f"])("li",null,"младший брат Олег"),Object(c["f"])("li",null,"старшая сестра Марина")],-1)})),le=fe((function(){return Object(c["f"])("p",null," Еще у меня есть бабушки и дедушки, которых я очень люблю и часто приезжаю к ним в гости. Моя семья очень дружная и веселая. Мама работает бухгалтером, папа – врач-педиатр, сестра учится в школе ,а вот брат еще маленький и ходит в садик. Каждые выходные мы ездим в гости к бабушкам и дедушкам, они нам рады всегда. ",-1)}));function se(e,t,n,a,r,i){return Object(c["r"])(),Object(c["e"])(c["a"],null,[ue,be,oe,le],64)}var je={name:"Family"};n("fb2e");const de=i()(je,[["render",se],["__scopeId","data-v-5151392a"]]);var Oe=de,me=n("9447"),pe=n.n(me),ve=function(e){return Object(c["u"])("data-v-149ed3da"),e=e(),Object(c["s"])(),e},_e=ve((function(){return Object(c["f"])("h2",{class:"header"},"Моя друзья",-1)})),he=ve((function(){return Object(c["f"])("p",{class:"text"}," У меня много друзей. Мы вместе проводим все свободное время за рукоделием. ",-1)})),ge=ve((function(){return Object(c["f"])("ul",{class:"images"},[Object(c["f"])("li",{class:"images__item"},[Object(c["f"])("a",{href:"/bio/img/friends2.8393ef6c.jpg",target:"_blank"},[Object(c["h"])(" Это мы на вечеринке "),Object(c["f"])("img",{src:pe.a,alt:"Мои друзья"})])]),Object(c["f"])("li",{class:"images__item"},[Object(c["f"])("a",{href:"/bio/img/friends2.8393ef6c.jpg",target:"_blank"},[Object(c["h"])(" Это мы в походе "),Object(c["f"])("img",{src:pe.a,alt:"Мои друзья"})])]),Object(c["f"])("li",{class:"images__item"},[Object(c["f"])("a",{href:"/bio/img/friends2.8393ef6c.jpg",target:"_blank"},[Object(c["h"])(" Это мы на вечеринке "),Object(c["f"])("img",{src:pe.a,alt:"Мои друзья"})])]),Object(c["f"])("li",{class:"images__item"},[Object(c["f"])("a",{href:"/bio/img/friends2.8393ef6c.jpg",target:"_blank"},[Object(c["h"])(" Это мы в походе "),Object(c["f"])("img",{src:pe.a,alt:"Мои друзья"})])]),Object(c["f"])("li",{class:"images__item"},[Object(c["f"])("a",{href:"/bio/img/friends2.8393ef6c.jpg",target:"_blank"},[Object(c["h"])(" Это мы на вечеринке "),Object(c["f"])("img",{src:pe.a,alt:"Мои друзья"})])]),Object(c["f"])("li",{class:"images__item"},[Object(c["f"])("a",{href:"/img/friends2.8393ef6c.jpg",target:"_blank"},[Object(c["h"])(" Это мы на вечеринке "),Object(c["f"])("img",{src:pe.a,alt:"Мои друзья"})])]),Object(c["f"])("li",{class:"images__item"},[Object(c["f"])("a",{href:"/bio/img/friends2.8393ef6c.jpg",target:"_blank"},[Object(c["h"])(" Это мы на вечеринке "),Object(c["f"])("img",{src:pe.a,alt:"Мои друзья"})])])],-1)}));function ye(e,t,n,a,r,i){return Object(c["r"])(),Object(c["e"])(c["a"],null,[_e,he,ge],64)}var xe={name:"Friends"};n("4fee");const ke=i()(xe,[["render",ye],["__scopeId","data-v-149ed3da"]]);var we=ke,Se=function(e){return Object(c["u"])("data-v-1839df40"),e=e(),Object(c["s"])(),e},Be=Se((function(){return Object(c["f"])("h2",{class:"header"},"Форма обратной связи",-1)})),Ie={class:"form__wrapper"},Pe=Object(c["g"])('<div data-v-1839df40><label for="name" data-v-1839df40>Введите ваше имя: </label><input type="text" name="name" id="name" required data-v-1839df40></div><div data-v-1839df40><label for="email" data-v-1839df40>Введите ваш email: </label><input type="email" name="email" id="email" required data-v-1839df40></div><div data-v-1839df40><label for="idea" data-v-1839df40>Введите ваши пожелания:</label><textarea id="idea" name="story" rows="5" cols="33" required data-v-1839df40></textarea></div><div class="form-example" data-v-1839df40><button type="submit" data-v-1839df40>Отправить</button></div>',4),Me=[Pe],qe={key:1};function He(e,t,n,a,r,i){return Object(c["r"])(),Object(c["e"])(c["a"],null,[Be,Object(c["f"])("div",Ie,[a.isSent?(Object(c["r"])(),Object(c["e"])("div",qe," Спасибо! Я обязательно рассмотрю ваши предложения! ")):(Object(c["r"])(),Object(c["e"])("form",{key:0,action:"/",method:"post",class:"form",onSubmit:t[0]||(t[0]=Object(c["C"])((function(){return a.handleSubmit&&a.handleSubmit.apply(a,arguments)}),["prevent"]))},Me,32))])],64)}var Fe={name:"Application",setup:function(){var e=Object(c["w"])(!1),t=function(){e.value=!0};return{handleSubmit:t,isSent:e}}};n("df86");const Je=i()(Fe,[["render",He],["__scopeId","data-v-1839df40"]]);var Te=Je,Ae=[{path:"/",name:"Home",component:_},{path:"/main",name:"Main",component:G,children:[{path:"bio",component:X},{path:"family",component:Oe},{path:"friends",component:we},{path:"hobbies",component:ie},{path:"application",component:Te}]}],Ce=Object(o["a"])({history:Object(o["b"])("/bio/"),routes:Ae}),ze=Ce;Object(c["c"])(b).use(ze).mount("#app")},"833b":function(e,t,n){"use strict";n("b086")},"8e90":function(e,t,n){},9447:function(e,t,n){e.exports=n.p+"img/friends2.8393ef6c.jpg"},a2f4:function(e,t,n){"use strict";n("bb63")},b086:function(e,t,n){},b4c5:function(e,t,n){},bb63:function(e,t,n){},c333:function(e,t,n){"use strict";n("e54d")},df86:function(e,t,n){"use strict";n("0f70")},e54d:function(e,t,n){},fb2e:function(e,t,n){"use strict";n("fe1d")},fe1d:function(e,t,n){}});
//# sourceMappingURL=app.a725cc94.js.map