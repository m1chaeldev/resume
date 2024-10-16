"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[829],{300:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(885),o=t(1413),r=t(7313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"},l=t(6081),c=function(e,n){return r.createElement(l.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:a}))};c.displayName="MinusOutlined";var s=r.forwardRef(c),p=t(7462),d=t(4942),m=t(2508),f=t(6123),u=t.n(f),g=t(4714),h=t(8138),v=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]])}return t},x=function(e){var n,t,i=e.prefixCls,o=e.className,a=e.color,l=void 0===a?"blue":a,c=e.dot,s=e.pending,m=void 0!==s&&s,f=(e.position,e.label),h=e.children,x=v(e,["prefixCls","className","color","dot","pending","position","label","children"]),y=(0,r.useContext(g.E_).getPrefixCls)("timeline",i),b=u()((n={},(0,d.Z)(n,"".concat(y,"-item"),!0),(0,d.Z)(n,"".concat(y,"-item-pending"),m),n),o),j=u()((t={},(0,d.Z)(t,"".concat(y,"-item-head"),!0),(0,d.Z)(t,"".concat(y,"-item-head-custom"),!!c),(0,d.Z)(t,"".concat(y,"-item-head-").concat(l),!0),t)),w=/blue|red|green|gray/.test(l||"")?void 0:l;return r.createElement("li",(0,p.Z)({},x,{className:b}),f&&r.createElement("div",{className:"".concat(y,"-item-label")},f),r.createElement("div",{className:"".concat(y,"-item-tail")}),r.createElement("div",{className:j,style:{borderColor:w,color:w}},c),r.createElement("div",{className:"".concat(y,"-item-content")},h))},y=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)n.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(t[i[o]]=e[i[o]])}return t},b=function(e){var n,t=r.useContext(g.E_),i=t.getPrefixCls,o=t.direction,a=e.prefixCls,l=e.pending,c=void 0===l?null:l,s=e.pendingDot,f=e.children,v=e.className,b=e.reverse,j=void 0!==b&&b,w=e.mode,N=void 0===w?"":w,O=y(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),C=i("timeline",a),E="boolean"===typeof c?null:c,Z=c?r.createElement(x,{pending:!!c,dot:s||r.createElement(m.Z,null)},E):null,P=r.Children.toArray(f);P.push(Z),j&&P.reverse();var S=function(e,n){return"alternate"===N?"right"===e.props.position?"".concat(C,"-item-right"):"left"===e.props.position?"".concat(C,"-item-left"):"".concat(C,n%2===0?"-item-left":"-item-right"):"left"===N?"".concat(C,"-item-left"):"right"===N||"right"===e.props.position?"".concat(C,"-item-right"):""},I=P.filter((function(e){return!!e})),k=r.Children.count(I),A="".concat(C,"-item-last"),D=r.Children.map(I,(function(e,n){var t=n===k-2?A:"",i=n===k-1?A:"";return(0,h.Tm)(e,{className:u()([e.props.className,!j&&c?t:i,S(e,n)])})})),M=P.some((function(e){var n;return!!(null===(n=null===e||void 0===e?void 0:e.props)||void 0===n?void 0:n.label)})),z=u()(C,(n={},(0,d.Z)(n,"".concat(C,"-pending"),!!c),(0,d.Z)(n,"".concat(C,"-reverse"),!!j),(0,d.Z)(n,"".concat(C,"-").concat(N),!!N&&!M),(0,d.Z)(n,"".concat(C,"-label"),M),(0,d.Z)(n,"".concat(C,"-rtl"),"rtl"===o),n),v);return r.createElement("ul",(0,p.Z)({},O,{className:z}),D)};b.Item=x;var j,w=b,N=t(168),O=t(244),C=t(2298),E=O.ZP.div(j||(j=(0,N.Z)(["\n  width: 100%;\n  margin-top: 20px;\n\n  .custom-timeline {\n    &.ant-timeline-item-left {\n      .ant-timeline-item-content {\n        margin: 0;\n        left: calc(50% + 14px);\n      }\n    }\n  }\n\n  .custom-timeline-for-mobile {\n    padding-top: 16px;\n  }\n\n  .ant-timeline-item-tail {\n    border-left-color: ",";\n    opacity: 0.6;\n  }\n\n  .project-time {\n    ",";\n    font-weight: bold;\n  }\n\n  .company-logo-wrapper {\n    margin-top: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n\n  .company-logo-wrapper.end {\n    justify-content: flex-end;\n  }\n\n  .company-logo-wrapper.mobile {\n    margin-bottom: 5px;\n  }\n\n  .project-name {\n    font-weight: bold;\n    text-transform: uppercase;\n    ","\n  }\n\n  .role-text {\n    color: ",";\n    font-size: 12px;\n    font-weight: bold;\n  }\n\n  .project-description {\n    font-size: 12px;\n    margin-top: 8px;\n    color: ",";\n    ",";\n  }\n\n  .more-details-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    width: 100%;\n\n    .more-details-text {\n      color: ",";\n      cursor: pointer;\n      font-size: 12px;\n    }\n  }\n\n  @media only screen and (max-width: 480px) {\n    margin-top: 0px;\n  }\n"])),C.O9.primary,C.IV,C.IV,C.O9.primary,C.O9.subText,C.IV,C.O9.primary),Z=t.p+"static/media/deliveree.b62352935546adc349a0.png",P=t.p+"static/media/xtek.67f9f2f2aee000d14a22.png",S=t.p+"static/media/tymex.976ef0567fc8a9d28aab.png",I=t(3912),k=t(2540),A=t(7292),D=t(6417),M=function(){var e=(0,r.useState)((0,I.i)()),n=(0,i.Z)(e,2),t=n[0],o=n[1];document.onreadystatechange=function(){"complete"===document.readyState&&o((0,I.i)())},(0,r.useEffect)((function(){function e(){o((0,I.i)())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var a=[{from:"Jul 2024",to:"Now",name:"Merchant Cash Advance",role:"Front-end Developer",description:"Merchant Cash Advance (MCA) is a new financing program designed to\n      empower the sole proprietors by offering flexible funding to fuel business growth\n      and address variety of business's needs.",img:S},{from:"Mar 2022",to:"Jan 2024",name:"Deliveree Logistics Web App",role:"Front-end Developer",description:"Southeast Asia's leading delivery logistics platform to book a wide\n      range of vehicles to transport goods.",img:Z},{from:"Oct 2021",to:"Jan 2024",name:"DELIVEREE SHOPIFY PLUGIN",role:"Full-stack Developer",description:"A web-app's plugin to provide the delivery services by connecting the users with\n      Deliveree's drivers on Shopify.",img:Z},{from:"Jul 2021",to:"Oct 2021",name:"SOS MAP",role:"Front-end Developer",description:"The application to connect the people in difficulty with the donors during the\n      Covid-19 pandemic.",img:P},{from:"Jul 2020",to:"Sep 2021",name:"CS9 CRYPTOCURRENCY EXCHANGE",role:"Front-end Developer",description:"The CS9's exchange application for crypto trading. It allows the users to buy and\n      sell the crypto in minutes.",img:P},{from:"Sep 2018",to:"Jun 2020",name:"CAR PARKING MANAGEMENT",role:"Front-end Developer",description:"The desktop application to give the professional management for car parking.\n      Includes: parking fee collection, parking guides and solving the congestion in the parking lot.",img:P}],l=(t||{}).width,c=void 0===l?0:l;return(0,D.jsxs)(E,{children:[(0,D.jsx)(k.Z,{title:"Experience"}),c<=480?(0,D.jsx)("div",{className:"custom-timeline-for-mobile",children:(0,D.jsx)(w,{children:a.map((function(e){return(0,D.jsxs)(w.Item,{children:[(0,D.jsxs)("div",{className:"project-time",children:[e.from," ",(0,D.jsx)(s,{})," ",e.to,(0,D.jsx)("div",{className:"company-logo-wrapper mobile",children:(0,D.jsx)("img",{alt:"Company's logo",src:e.img,width:"100px"})})]}),(0,D.jsx)("div",{className:"project-name",children:e.name}),(0,D.jsx)("div",{className:"role-text",children:e.role}),(0,D.jsx)("div",{className:"project-description",children:e.description})]},e.name)}))})}):(0,D.jsx)(w,{mode:"alternate",children:a.map((function(e,n){return(0,D.jsxs)(w.Item,{label:(0,D.jsxs)("div",{className:"project-time",children:[e.from," ",(0,D.jsx)(s,{})," ",e.to,(0,D.jsx)("div",{className:"company-logo-wrapper".concat(n%2?"":" end"),children:(0,D.jsx)("img",{alt:"Company's logo",src:e.img,width:"100px"})})]}),className:"custom-timeline",children:[(0,D.jsx)("div",{className:"project-name",children:e.name}),(0,D.jsx)("div",{className:"role-text",children:e.role}),(0,D.jsx)("div",{className:"project-description",children:e.description})]},e.name)}))}),(0,D.jsx)("div",{className:"more-details-wrapper",children:(0,D.jsx)("div",{className:"more-details-text",onClick:function(){return window.open(A.cVUrl)},children:"More details..."})})]})}},2540:function(e,n,t){t.d(n,{Z:function(){return s}});t(7313);var i,o=t(168),r=t(244),a=t(2298),l=r.ZP.div(i||(i=(0,o.Z)(["\n  width: 100%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n\n  .header-text {\n    font-weight: bold;\n    font-size: 18px;\n    color: ",";\n    text-transform: uppercase;\n  }\n\n  @media only screen and (max-width: 480px) {\n    display: flex;\n  }\n"])),a.O9.primary),c=t(6417),s=function(e){var n=e.title;return(0,c.jsx)(l,{children:(0,c.jsx)("div",{className:"header-text",children:n})})}}}]);