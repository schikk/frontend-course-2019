!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){(e.classList.contains("invalid")&&t||!t&&!e.classList.contains("invalid"))&&e.classList.toggle("invalid")}function o(e,t){e.classList.contains("submitForm")||(e.classList.toggle("submitForm"),t.classList.contains("submitForm")&&t.classList.toggle("submitForm"))}n.r(t);var u=/^[a-zA-Zа-яА-Я ]/,a=/^[a-zA-Z0-9.!#$%&*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,s=/^\+[0-9]{2}\([0-9]{3}\)[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,l=/^[0-9]{1,3}$/;function c(e,t,n){return u.test(e)&&e.length>=t&&e.length<=n}function i(e){var t,n,u,i=c(e.firstName.value,2,20),m=c(e.lastName.value,2,20),f=a.test(e.email.value),d=s.test(e.phone.value),g=(t=e.age.value,n=18,u=120,!t.length||l.test(t)&&Number(t)>=n&&Number(t)<=u);return r(e.firstName,i),r(e.lastName,m),r(e.email,f),r(e.phone,d),r(e.age,g),i&&m&&f&&d&&g?(o(document.querySelector(".successfullFormMessages"),document.querySelector(".invalidFormMessages")),!0):(o(document.querySelector(".invalidFormMessages"),document.querySelector(".successfullFormMessages")),!1)}document.querySelector(".form_button").addEventListener("click",(function(e){e.preventDefault();var t={},n={firstName:document.querySelector("#firstName"),lastName:document.querySelector("#lastName"),email:document.querySelector("#email"),phone:document.querySelector("#phone"),age:document.querySelector("#age")};i(n)&&(Object.keys(n).forEach((function(e){t[e]=n[e].value})),console.log(t))}))}]);