(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var a=e(5),o=e.n(a),l=(e(11),e(4)),c=e(6),r=e(1),s=e.n(r),i=e(0);function u(t){var n=t.display;return Object(i.jsx)("input",{type:"text",className:"calc-inp",value:n,onChange:function(t){t.target.value=n}})}function x(t){var n=t.value,e=t.className,a=t.handleClick;return Object(i.jsx)("input",{type:"button",value:n,className:e,onClick:function(){a(n)}})}function b(t){var n=[{content:"AC",className:"btn"},{content:"+/-",className:"btn"},{content:"%",className:"btn"},{content:"\xf7",className:"btn btn-orange"},{content:"7",className:"btn"},{content:"8",className:"btn"},{content:"9",className:"btn"},{content:"x",className:"btn btn-orange"},{content:"4",className:"btn"},{content:"5",className:"btn"},{content:"6",className:"btn"},{content:"-",className:"btn btn-orange"},{content:"1",className:"btn"},{content:"2",className:"btn"},{content:"3",className:"btn"},{content:"+",className:"btn btn-orange"},{content:"0",className:"btn"},{content:".",className:"btn"},{content:"=",className:"btn btn-orange"}],e=s.a.useMemo((function(){var e=t.handleClick;return n.map((function(t){return Object(i.jsx)("li",{children:Object(i.jsx)(x,{value:t.content,className:t.className,handleClick:e})},t.content)}))}));return Object(i.jsx)("ul",{className:"btn-list flex",children:e})}function p(t){var n=t.display,e=t.click;return Object(i.jsxs)("div",{className:"calc-div",children:[Object(i.jsx)(u,{display:n}),Object(i.jsx)(b,{handleClick:e})]})}var m=e(2),N=e.n(m);function f(t,n,e){var a=N()(t||"0"),o=N()(n||("\xf7"===e||"x"===e?"1":"0"));if("+"===e)return a.plus(o).toString();if("-"===e)return a.minus(o).toString();if("x"===e)return a.times(o).toString();if("\xf7"===e)return"0"===o.toString()?"Divison by zero":a.div(o).toString();if("%"===e)return a.mod(o).toString();throw Error("Unknown operation '".concat(e,"'"))}function j(){var t=Object(r.useState)({total:null,next:null,operation:null}),n=Object(c.a)(t,2),e=n[0],a=n[1];return Object(i.jsx)(p,{click:function(t){var n=function(t,n){if("AC"===n)return{total:null,next:null,operation:null};if(n.match(/[0-9]+/))return"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:"0"===t.next?n:t.next+n,total:null}:{next:n,total:null};if("%"===n){if(t.operation&&t.next){var e=f(t.total,t.next,t.operation);return{total:N()(e).div(N()("100")).toString(),next:null,operation:null}}return t.next?{next:null,total:t.next.toString(),operation:n}:{}}return"."===n?t.next?t.next.includes(".")?{}:{next:"".concat(t.next,".")}:{next:"0."}:"="===n?t.next&&t.operation?{total:f(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:f(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}}(e,t);a((function(t){return Object(l.a)(Object(l.a)({},t),n)}))},display:e.next||e.total||"0"})}o.a.render(Object(i.jsx)(j,{}),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.81d0d110.chunk.js.map