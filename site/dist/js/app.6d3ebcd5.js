(function(e){function a(a){for(var t,c,i=a[0],l=a[1],u=a[2],p=0,b=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);s&&s(a);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],t=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(t=!1)}t&&(r.splice(a--,1),e=c(c.s=n[0]))}return e}var t={},o={app:0},r=[];function c(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=t,c.d=function(e,a,n){c.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,a){if(1&a&&(e=c(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)c.d(n,t,function(a){return e[a]}.bind(null,t));return n},c.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(a,"a",a),a},c.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var u=0;u<i.length;u++)a(i[u]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"50dd":function(e,a,n){},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("7a23");function o(e,a,n,o,r,c){var i=Object(t["h"])("Main");return Object(t["g"])(),Object(t["c"])(i)}var r=Object(t["f"])("h1",null,"Panda do Mal Bot",-1),c=Object(t["f"])("p",null,[Object(t["e"])(" O Panda do Mal Bot foi pensado para as lives do canal da "),Object(t["f"])("a",{href:"https://twitch.tv/levxyca"},"Levxyca")],-1);function i(e,a,n,o,i,l){var u=Object(t["h"])("Github"),s=Object(t["h"])("Desenvolvimento"),p=Object(t["h"])("Contribuindo"),b=Object(t["h"])("Geral"),d=Object(t["h"])("Donate"),f=Object(t["h"])("Social");return Object(t["g"])(),Object(t["c"])(t["a"],null,[r,c,Object(t["f"])(u,{name:"levxyca/pandadomalbot",link:"pandadomalbot"}),Object(t["f"])(s),Object(t["f"])(p),Object(t["f"])(b),Object(t["f"])(d),Object(t["f"])(f)],64)}var l=Object(t["d"])('<h1>Executando o bot localmente</h1><p> Para executar este projeto, você precisa do <a href="https://nodejs.org/en/download/">NodeJS</a> instalado e um token de acesso para uma conta existente na Twitch. Pode-se utilizar usa própria conta para testes, mas o ideal é ter uma exclusiva para o bot. </p><p> Para obter o token, entre <a href="https://twitchapps.com/tmi/">neste serviço</a> e autorize-o a ter acesso a sua conta da Twitch. Guarde o token obtido em um local seguro. Com o token em mãos: instale as dependências, defina as variáveis de ambiente (você pode criar um arquivo <code>.env</code> na raiz do projeto com as variáveis presentes no arquivo <a href="https://github.com/levxyca/pandadomalbot/blob/main/.env.example">.env.example</a>) e execute a aplicação: </p><pre>npm install\n\nBOT_USERNAME=pandadomal         # nome de usuário da sua conta.\nCHANNEL_NAME=levxyca            # canal que irá escutar pelos comandos.\nOAUTH_TOKEN=                    # token de acesso obtido anteriormente.\n\nnpm run start\n\n    Bot is running at irc-ws.chat.twitch.tv:80\n  </pre>',4);function u(e,a,n,t,o,r){return l}var s={name:"Desenvolvimento"};s.render=u;var p=s,b=Object(t["f"])("h1",null,"Contribuindo",-1),d=Object(t["f"])("ul",null,[Object(t["f"])("li",null,"Faça o fork desse repositório em sua conta do GitHub."),Object(t["f"])("li",null,[Object(t["e"])(" Clone o seu fork no seu ambiente e crie uma branch a partir da "),Object(t["f"])("code",null,"main"),Object(t["e"])(". ")]),Object(t["f"])("li",null,[Object(t["e"])(" Faça o commit das suas alterações e envie um novo pull request tendo a branch "),Object(t["f"])("code",null,"main"),Object(t["e"])(" como destino. ")])],-1);function f(e,a,n,o,r,c){return Object(t["g"])(),Object(t["c"])(t["a"],null,[b,d],64)}var m={name:"Contribuindo"};m.render=f;var h=m,O=(n("b0c0"),{class:"github"}),j={class:"githubName"},v=Object(t["f"])("div",{class:"githubLink"},null,-1);function g(e,a,n,o,r,c){return Object(t["g"])(),Object(t["c"])("a",{href:c.linkDisplay,target:"_blank",class:"disableLink"},[Object(t["f"])("div",O,[Object(t["f"])("span",j,Object(t["i"])(n.name),1),v])],8,["href"])}n("9911");var y={name:"Github",props:{name:String,link:String},computed:{linkDisplay:function(){return"https://github.com/levxyca/"+this.link}}};n("c9bb");y.render=g;var x=y,k=Object(t["d"])('<h1><a name="geral">Geral</a></h1><h2>!ban</h2><p>Digite o comando <code>!ban</code> com o nome da pessoa.</p><p>Exemplo:</p><p><code>!ban levxyca</code></p><p>ou</p><p><code>!ban @levxyca</code></p><h2>!comandos</h2><p>Lista todos os comandos já existentes.</p><h2>!pergunta</h2><p>Faça uma pergunta para a vida o universo e tudo mais.</p><p>Exemplo:</p><p><code>!pergunta vai ter sorteio hoje?</code></p>',13);function w(e,a,n,t,o,r){return k}var P={name:"Geral"};P.render=w;var S=P,L=Object(t["f"])("h1",null,[Object(t["f"])("a",{name:"donate"},"Donate e Sub")],-1),D=Object(t["f"])("h2",null,"!donate",-1),M=Object(t["f"])("p",null,"Link para fazer donate pela twitch.",-1),_=Object(t["f"])("h2",null,"!prime",-1),G=Object(t["f"])("p",null,"Link para dar um sub no canal via Amazon Prime.",-1),E=Object(t["f"])("h2",null,"!picpay",-1),N=Object(t["f"])("p",null,"Link para doar através do PicPay.",-1),A=Object(t["f"])("h2",null,"!sub",-1),C=Object(t["f"])("p",null,"Link para dar sub no canal.",-1);function T(e,a,n,o,r,c){return Object(t["g"])(),Object(t["c"])(t["a"],null,[L,D,M,_,G,E,N,A,C],64)}var q={name:"Donate"};q.render=T;var z=q,B=Object(t["f"])("h1",null,[Object(t["f"])("a",{name:"social"},"Social")],-1),H=Object(t["f"])("p",null," Nesta categoria estão diversos comandos que direcionam para as redes da Levxyca: ",-1),F=Object(t["f"])("h2",null,"!social",-1),J=Object(t["f"])("p",null,"Retorna os links para todas as redes da streamer.",-1),R=Object(t["f"])("h2",null,"!telegram",-1),U=Object(t["f"])("h2",null,"!discord",-1),W=Object(t["f"])("h2",null,"!fofinhos",-1),K=Object(t["f"])("p",null," Link para um grupo de WhatsApp onde se pode enviar imagens e vídeos de bichinhos fofinhos para alegrar seu dia. ",-1),I=Object(t["f"])("h2",null,"!github",-1);function Q(e,a,n,o,r,c){return Object(t["g"])(),Object(t["c"])(t["a"],null,[B,H,F,J,R,U,W,K,I],64)}var V={name:"Social"};V.render=Q;var X=V,Y={name:"HelloWorld",components:{Geral:S,Donate:z,Social:X,Contribuindo:h,Desenvolvimento:p,Github:x}};n("b2b1");Y.render=i;var Z=Y,$={name:"App",components:{Main:Z}};$.render=o;var ee=$;Object(t["b"])(ee).mount("#app")},b2b1:function(e,a,n){"use strict";n("bd1f")},bd1f:function(e,a,n){},c9bb:function(e,a,n){"use strict";n("50dd")}});
//# sourceMappingURL=app.6d3ebcd5.js.map