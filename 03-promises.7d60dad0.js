function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var l=r("7Y9D8");const i={formEl:document.querySelector(".form"),delayEl:document.querySelector('[name="delay"]'),stepEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]')};function u(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.formEl.addEventListener("submit",(function(o){o.preventDefault();const t=Number(i.delayEl.value),n=Number(i.stepEl.value),r=Number(i.amountEl.value);for(let o=1;o<=r;o+=1){u(o,t+n*(o-1)).then((({position:o,delay:t})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.7d60dad0.js.map