!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=(document.querySelector("body"),null);e.setAttribute("disabled",!0),e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,t.setAttribute("disabled",!0),e.removeAttribute("disabled",!1),d=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.disabled=!1,e.disabled=!0,e.setAttribute("disabled",!0),t.removeAttribute("disabled",!1)}))}();
//# sourceMappingURL=01-color-switcher.ad3cf1eb.js.map