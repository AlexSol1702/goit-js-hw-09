var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("eWCmQ");const r=e=>document.querySelector(e);function l(e,n){return new Promise(((o,t)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}r(".form").addEventListener("submit",(function(e){e.preventDefault();let n=Number(r('[name="delay"]').value),o=Number(r('[name="step"]').value),t=Number(r('[name="amount"]').value);!function(e,n,o){for(let t=1;t<=o;t+=1)l(t,e).then((({position:e,delay:n})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)})),e+=n}(n,o,t)}));
//# sourceMappingURL=03-promises.5824c354.js.map