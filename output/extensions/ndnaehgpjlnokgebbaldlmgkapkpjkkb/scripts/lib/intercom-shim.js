/* El código a continuación es propiedad intelectual de The Mail Track Company S.L. de Barcelona, España,
y solo debe ser utilizado y manejado bajo estos Términos: https://mailtrack.io/es/terms

The code hereafter is the intellectual property of The Mail Track Company S.L. of Barcelona, Spain
and must be used and handled only according to these Terms: https://mailtrack.io/en/terms */
!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return n[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var e={};return t.m=n,t.c=e,t.p=window.MT_INTERCOM_PATH,t(0)}({0:function(n,t,e){n.exports=e(502)},502:function(n,t,e){"use strict";var o=e(508),r=e(505),i=r.addTurbolinksEventListeners,c="Intercom",d="q",u=/bot|googlebot|crawler|spider|robot|crawling/i,a=function(){return window[c]&&window[c].booted},s=function(){return window[c].booted=!0},f=function(){return"attachEvent"in window&&!window.addEventListener},l=function(){return navigator&&navigator.userAgent&&u.test(navigator.userAgent)},p=function(){return!f()&&!l()},w=function(){var n=document.createElement("script");return n.type="text/javascript",n.charset="utf-8",n.src=o,n},m=function(){var n=document.createElement("iframe");n.id="intercom-frame",n.style.display="none",document.body.appendChild(n),n.contentWindow.document.open("text/html","replace"),n.contentWindow.document.write("\n    <!doctype html>\n    <head></head>\n    <body>\n    </body>\n    </html>"),n.contentWindow.document.close();var t=w();return n.contentWindow.document.head.appendChild(t),n},v=function(){if(!window[c]){var n=function n(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];n[d].push(e)};n[d]=[],window[c]=n}},h=function(){delete window[c]},b=function(){v(),m(),s()},g=function(){window[c]("shutdown",!1),h(),v()};p()&&!a()&&(b(),i(b,g))},505:function(n,t){"use strict";function e(n,t){o.forEach(function(n){document.addEventListener(n,t)}),r.forEach(function(t){document.addEventListener(t,n)})}var o=["page:before-change","turbolinks:click"],r=["page:change","turbolinks:load"];n.exports={addTurbolinksEventListeners:e}},508:function(n,t,e){n.exports=e.p+"intercom-frame.js"}});
