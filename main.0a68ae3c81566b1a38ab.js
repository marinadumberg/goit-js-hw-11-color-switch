(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,o){},QfWi:function(t,e,o){"use strict";o.r(e);o("L1EO"),o("TKt4")},TKt4:function(t,e){const o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],n={buttonStart:document.querySelector('[data-action="start"]'),buttonStop:document.querySelector('[data-action="stop"]')};let a=void 0;n.buttonStart.addEventListener("click",(function(){n.buttonStop.classList.toggle("deactive"),n.buttonStart.setAttribute("disabled",""),n.buttonStart.classList.toggle("deactive"),a=setInterval(()=>{var t,e;document.body.style.background=o[(t=0,e=o.length-1,Math.floor(Math.random()*(e-t+1)+t))]},1e3)})),n.buttonStop.addEventListener("click",(function(){clearInterval(a),n.buttonStart.removeAttribute("disabled",""),n.buttonStop.classList.add("deactive"),n.buttonStart.classList.remove("deactive")})),n.buttonStop.classList.add("deactive")}},[["QfWi",1]]]);
//# sourceMappingURL=main.0a68ae3c81566b1a38ab.js.map