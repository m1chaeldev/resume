"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[5],{9160:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var o=t(885),i=t(1413),r=t(7313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"},l=t(6081),c=function(e,n){return r.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};c.displayName="MinusOutlined";var s=r.forwardRef(c),p=t(7462),d=t(4942),m=t(2508),f=t(6123),u=t.n(f),h=t(4714),g=t(8138),v=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},x=function(e){var n,t,o=e.prefixCls,i=e.className,a=e.color,l=void 0===a?"blue":a,c=e.dot,s=e.pending,m=void 0!==s&&s,f=(e.position,e.label),g=e.children,x=v(e,["prefixCls","className","color","dot","pending","position","label","children"]),y=(0,r.useContext(h.E_).getPrefixCls)("timeline",o),j=u()((n={},(0,d.Z)(n,"".concat(y,"-item"),!0),(0,d.Z)(n,"".concat(y,"-item-pending"),m),n),i),b=u()((t={},(0,d.Z)(t,"".concat(y,"-item-head"),!0),(0,d.Z)(t,"".concat(y,"-item-head-custom"),!!c),(0,d.Z)(t,"".concat(y,"-item-head-").concat(l),!0),t)),w=/blue|red|green|gray/.test(l||"")?void 0:l;return r.createElement("li",(0,p.Z)({},x,{className:j}),f&&r.createElement("div",{className:"".concat(y,"-item-label")},f),r.createElement("div",{className:"".concat(y,"-item-tail")}),r.createElement("div",{className:b,style:{borderColor:w,color:w}},c),r.createElement("div",{className:"".concat(y,"-item-content")},g))},y=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},j=function(e){var n,t=r.useContext(h.E_),o=t.getPrefixCls,i=t.direction,a=e.prefixCls,l=e.pending,c=void 0===l?null:l,s=e.pendingDot,f=e.children,v=e.className,j=e.reverse,b=void 0!==j&&j,w=e.mode,N=void 0===w?"":w,O=y(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),E=o("timeline",a),C="boolean"===typeof c?null:c,Z=c?r.createElement(x,{pending:!!c,dot:s||r.createElement(m.Z,null)},C):null,S=r.Children.toArray(f);S.push(Z),b&&S.reverse();var P=function(e,n){return"alternate"===N?"right"===e.props.position?"".concat(E,"-item-right"):"left"===e.props.position?"".concat(E,"-item-left"):"".concat(E,n%2===0?"-item-left":"-item-right"):"left"===N?"".concat(E,"-item-left"):"right"===N||"right"===e.props.position?"".concat(E,"-item-right"):""},I=S.filter((function(e){return!!e})),k=r.Children.count(I),A="".concat(E,"-item-last"),D=r.Children.map(I,(function(e,n){var t=n===k-2?A:"",o=n===k-1?A:"";return(0,g.Tm)(e,{className:u()([e.props.className,!b&&c?t:o,P(e,n)])})})),z=S.some((function(e){var n;return!!(null===(n=null===e||void 0===e?void 0:e.props)||void 0===n?void 0:n.label)})),M=u()(E,(n={},(0,d.Z)(n,"".concat(E,"-pending"),!!c),(0,d.Z)(n,"".concat(E,"-reverse"),!!b),(0,d.Z)(n,"".concat(E,"-").concat(N),!!N&&!z),(0,d.Z)(n,"".concat(E,"-label"),z),(0,d.Z)(n,"".concat(E,"-rtl"),"rtl"===i),n),v);return r.createElement("ul",(0,p.Z)({},O,{className:M}),D)};j.Item=x;var b,w=j,N=t(168),O=t(244),E=t(2298),C=O.ZP.div(b||(b=(0,N.Z)(["\n  width: 100%;\n  margin-top: 20px;\n\n  .custom-timeline-for-mobile {\n    padding-top: 16px;\n  }\n\n  .ant-timeline-item-tail {\n    border-left-color: ",";\n    opacity: 0.6;\n  }\n\n  .project-time {\n    ",";\n    font-weight: bold;\n  }\n\n  .company-logo-wrapper {\n    margin-top: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n\n  .company-logo-wrapper.end {\n    justify-content: flex-end;\n  }\n\n  .company-logo-wrapper.mobile {\n    margin-bottom: 5px;\n  }\n\n  .project-name {\n    font-weight: bold;\n    text-transform: uppercase;\n    ","\n  }\n\n  .role-text {\n    color: ",";\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n  .project-description {\n    font-size: 12px;\n    margin-top: 8px;\n    color: ",";\n    ",";\n  }\n\n  .more-details-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    width: 100%;\n\n    .more-details-text {\n      color: ",";\n      cursor: pointer;\n      font-size: 12px;\n    }\n  }\n\n  @media only screen and (max-width: 480px) {\n    margin-top: 0px;\n  }\n"])),E.O9.primary,E.IV,E.IV,E.O9.primary,E.O9.subText,E.IV,E.O9.primary),Z=t.p+"static/media/deliveree.b62352935546adc349a0.png",S=t.p+"static/media/xtek.67f9f2f2aee000d14a22.png",P=t(3912),I=t(2540),k=t(7292),A=t(6417),D=function(){var e=(0,r.useState)((0,P.i)()),n=(0,o.Z)(e,2),t=n[0],i=n[1];document.onreadystatechange=function(){"complete"===document.readyState&&i((0,P.i)())},(0,r.useEffect)((function(){function e(){i((0,P.i)())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var a=[{from:"Mar 2022",to:"Now",name:"Deliveree Logistics Web App",role:"Front-end Developer",description:"Southeast Asia's leading delivery logistics platform to book a wide\n    range of vehicles to transport goods.",img:Z},{from:"Oct 2021",to:"Now",name:"DELIVEREE SHOPIFY PLUGIN",role:"Full-stack Developer",description:"A web-app's plugin to provide the delivery services by connecting the users with\n      Deliveree's drivers on Shopify.",img:Z},{from:"Jul 2021",to:"Sep 2021",name:"SOS MAP",role:"Front-end Developer",description:"The application to connect the people in difficulty with the donors during the\n      Covid-19 pandemic.",img:S},{from:"Jul 2020",to:"Sep 2021",name:"CS9 CRYPTOCURRENCY EXCHANGE",role:"Front-end Developer",description:"The CS9's exchange application for crypto trading. It allows the users to buy and\n      sell the crypto in minutes.",img:S},{from:"Sep 2018",to:"Jun 2020",name:"CAR PARKING MANAGEMENT",role:"Front-end Developer",description:"The desktop application to give the professional management for car parking.\n      Includes: parking fee collection, parking guides and solving the congestion in the parking lot.",img:S}],l=(t||{}).width,c=void 0===l?0:l;return(0,A.jsxs)(C,{children:[(0,A.jsx)(I.Z,{title:"Experience"}),c<=480?(0,A.jsx)("div",{className:"custom-timeline-for-mobile",children:(0,A.jsx)(w,{children:a.map((function(e){return(0,A.jsxs)(w.Item,{children:[(0,A.jsxs)("div",{className:"project-time",children:[e.from," ",(0,A.jsx)(s,{})," ",e.to,(0,A.jsx)("div",{className:"company-logo-wrapper mobile",children:(0,A.jsx)("img",{alt:"Company's logo",src:e.img,width:"100px"})})]}),(0,A.jsx)("div",{className:"project-name",children:e.name}),(0,A.jsx)("div",{className:"role-text",children:e.role}),(0,A.jsx)("div",{className:"project-description",children:e.description})]},e.name)}))})}):(0,A.jsx)(w,{mode:"alternate",children:a.map((function(e,n){return(0,A.jsxs)(w.Item,{label:(0,A.jsxs)("div",{className:"project-time",children:[e.from," ",(0,A.jsx)(s,{})," ",e.to,(0,A.jsx)("div",{className:"company-logo-wrapper".concat(n%2?"":" end"),children:(0,A.jsx)("img",{alt:"Company's logo",src:e.img,width:"100px"})})]}),children:[(0,A.jsx)("div",{className:"project-name",children:e.name}),(0,A.jsx)("div",{className:"role-text",children:e.role}),(0,A.jsx)("div",{className:"project-description",children:e.description})]},e.name)}))}),(0,A.jsx)("div",{className:"more-details-wrapper",children:(0,A.jsx)("div",{className:"more-details-text",onClick:function(){return window.open(k.cVUrl)},children:"More details..."})})]})}},2540:function(e,n,t){t.d(n,{Z:function(){return s}});t(7313);var o,i=t(168),r=t(244),a=t(2298),l=r.ZP.div(o||(o=(0,i.Z)(["\n  width: 100%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n\n  .header-text {\n    font-weight: bold;\n    font-size: 18px;\n    color: ",";\n    text-transform: uppercase;\n  }\n\n  @media only screen and (max-width: 480px) {\n    display: flex;\n  }\n"])),a.O9.primary),c=t(6417),s=function(e){var n=e.title;return(0,c.jsx)(l,{children:(0,c.jsx)("div",{className:"header-text",children:n})})}}}]);