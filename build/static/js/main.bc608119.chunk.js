(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),o=t.n(c),r=t(8),a=t(3),u=t(1),i=t(0),s=function(e){var n=e.filter,t=e.handler;return Object(i.jsxs)("div",{children:["Filter numbers with:",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){var n=e.onSubmit,t=e.newName,c=e.onNameChange,o=e.newNumber,r=e.onNumberChange;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name:",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:["number:",Object(i.jsx)("input",{value:o,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var n=e.person,t=e.onRemove;return Object(i.jsxs)(i.Fragment,{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:t,children:"Remove"}),Object(i.jsx)("br",{})]})},j=function(e){var n=e.list,t=e.onRemoveOf;return Object(i.jsx)("div",{children:n.map((function(e){return Object(i.jsx)(b,{person:e,onRemove:function(){return t(e)}},e.name)}))})},d=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"notification",children:n})},m=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},f=t(4),h=t.n(f),O="/api/persons",v=function(){return h.a.get(O).then((function(e){return e.data}))},g=function(e){return h.a.post(O,e).then((function(e){return e.data}))},p=function(e,n){return h.a.put("".concat(O,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){h.a.delete("".concat(O,"/").concat(e)).then(console.log("Deleted person with id ".concat(e)))},w=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(u.useState)(""),b=Object(a.a)(o,2),f=b[0],h=b[1],O=Object(u.useState)(""),w=Object(a.a)(O,2),N=w[0],S=w[1],C=Object(u.useState)(""),k=Object(a.a)(C,2),y=k[0],R=k[1],D=Object(u.useState)(null),E=Object(a.a)(D,2),F=E[0],I=E[1],J=Object(u.useState)(null),T=Object(a.a)(J,2),A=T[0],B=T[1];Object(u.useEffect)((function(){v().then((function(e){c(e)}))}),[]);var P=function(e){I(e),setTimeout((function(){I(null)}),3e3)},W=function(e){B(e),setTimeout((function(){B(null)}),3e3)},q=t.filter((function(e){return e.name.startsWith(y)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(d,{message:F}),Object(i.jsx)(m,{message:A}),Object(i.jsx)(s,{filter:y,handler:function(e){console.log(e.target.value),R(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new number"}),Object(i.jsx)(l,{onSubmit:function(e){e.preventDefault();var n={name:f,number:N},o=t.find((function(e){return e.name===f}));void 0!==o?window.confirm("".concat(f," is already added to phonebook, replace the number?"))?function(){var e=o.id,a=Object(r.a)(Object(r.a)({},o),{},{number:n.number});p(e,a).then((function(r){c(t.map((function(n){return n.id!==e?n:r}))),h(""),S(""),P("Number changed for ".concat(n.name," to ").concat(n.number," from ").concat(o.number))})).catch((function(e){console.log(e.response.data),W("Information on ".concat(o.name," is already removed from the server."))})).then(c(t.filter((function(n){return n.id!==e}))))}():(h(""),S("")):g(n).then((function(e){c(t.concat(e)),h(""),S(""),P("New person added: ".concat(n.name))})).catch((function(e){W(e.response.data.error)}))},newName:f,onNameChange:function(e){console.log(e.target.value),h(e.target.value)},newNumber:N,onNumberChange:function(e){console.log(e.target.value),S(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(j,{list:q,onRemoveOf:function(e){window.confirm("Do you really want to remove ".concat(e.name,"?"))&&(x("".concat(e.id)),c(t.filter((function(n){return n.id!==e.id}))),P("Deleted ".concat(e.name)))}})]})};t(41);o.a.render(Object(i.jsx)(w,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bc608119.chunk.js.map