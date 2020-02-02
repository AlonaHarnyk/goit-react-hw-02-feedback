(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=n(7),u=n(8),i=n(9),s=n(14),d=n(10),b=n(15),f=n(1),m=n(2);function p(){var e=Object(f.a)(["\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.5;\n"]);return p=function(){return e},e}function v(){var e=Object(f.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 18px;\n  line-height: 1.5;\n"]);return v=function(){return e},e}var g=m.a.ul(v()),h=m.a.p(p()),k=function(e){var t=e.good,n=e.neutral,a=e.bad,o=e.total,c=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null,r.a.createElement("li",null,"Good: ",t),r.a.createElement("li",null,"Neutral: ",n),r.a.createElement("li",null,"Bad: ",a)),r.a.createElement(h,null,"Total: ",o),r.a.createElement(h,null,"Positive feedback: ",c,"%"))};function E(){var e=Object(f.a)(["\n  border-radius: 4px;\n  border: 1px solid grey;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  font-size: 14px;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n\n  :hover {\n    background-color: #3b4ee0;\n  }\n"]);return E=function(){return e},e}function j(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 150px;\n"]);return j=function(){return e},e}var O=m.a.div(j()),x=m.a.button(E()),y=function(e){var t=e.options,n=e.onLeaveFeedback;return r.a.createElement(O,null,t.map((function(e){return r.a.createElement(x,{key:e,name:e,onClick:n},e)})))},F=function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),n)};function P(){var e=Object(f.a)(["\n  font-size: 18px;\n"]);return P=function(){return e},e}var w=m.a.p(P()),T=function(e){var t=e.message;return r.a.createElement(w,null,t)},z=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},n.handleIncrement=function(e){var t=e.target.name;n.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},n.countTotalFeedback=function(){var e=n.state;return e.good+e.neutral+e.bad},n.countPositiveFeedbackPercentage=function(){var e=n.state.good;return Math.round(100*e/n.countTotalFeedback())},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,o=this.props,c=o.title,l=o.message;return r.a.createElement("div",null,r.a.createElement(F,{title:c},r.a.createElement(y,{options:Object.keys(this.state),onLeaveFeedback:this.handleIncrement}),r.a.createElement("h2",null,"Statistics"),this.countTotalFeedback()>0?r.a.createElement(k,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):r.a.createElement(T,{message:l})))}}]),t}(a.Component);z.defaultProps={title:"Please leave feedback",message:"No feedback given"},c.a.render(r.a.createElement(z,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.72976200.chunk.js.map