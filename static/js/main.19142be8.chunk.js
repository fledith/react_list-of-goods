(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var r,n=s(3),o=s.n(n),a=s(6),c=s(4),i=s(5),u=s(8),l=s(7),d=s(1),b=(s(13),s(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var p=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isStarted:!1,isReversed:!1,sortType:r.NONE},t.getReorderedGoods=function(t,e,s){var n=Object(a.a)(t);return n.sort((function(t,s){switch(e){case r.ALPHABET:return t.localeCompare(s);case r.LENGTH:return t.length-s.length;default:return 0}})),s?n.reverse():n},t.startedSort=function(){return t.setState({isStarted:!0})},t.sortByLength=function(){return t.setState({sortType:r.LENGTH})},t.sortAlphabetically=function(){return t.setState({sortType:r.ALPHABET})},t.revers=function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){return t.setState({sortType:r.NONE,isReversed:!1})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isStarted,s=t.isReversed,r=t.sortType,n=this.getReorderedGoods(h,r,s);return Object(b.jsxs)("div",{className:"App is-light",children:[!e&&Object(b.jsx)("button",{type:"button",className:"button is-success button-start",onClick:this.startedSort,children:"Start"}),e&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:"button is-dark",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:"button is-dark",onClick:this.sortByLength,children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"button is-dark",onClick:this.revers,children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:"button is-danger button-reset",onClick:this.reset,children:"Reset"})]}),Object(b.jsx)("ul",{className:"Goods",children:n.map((function(t){return Object(b.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})}}]),s}(d.Component);o.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.19142be8.chunk.js.map