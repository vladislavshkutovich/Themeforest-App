"use strict";(self.webpackChunkthemeforest_app=self.webpackChunkthemeforest_app||[]).push([[471],{3954:function(n,t,e){e.d(t,{R:function(){return h},$:function(){return l}});var r={min:2,max:20,req:"Name is required!"},i={intro:2,noEmail:20,req:"Email is required!"},o={min:2,max:50,req:"Theme is required!"},a={min:10,max:300,req:"Message is required!"},s=e(2797),c=r,m=i,d=a,u=o,l=s.Ry().shape({email:s.Z_().email("Entered email is not valid.").required(m.req)}),h=s.Ry().shape({name:s.Z_().min(c.min,"Too Short!").max(c.max,"Max ".concat(c.max," symbols")).required(c.req),email:s.Z_().email("Entered email is not valid.").required(m.req),theme:s.Z_().min(u.min,"Too Short!").max(u.max,"Max ".concat(u.max," symbols")).required(u.req),message:s.Z_().min(u.min,"Too Short!").max(u.max,"Max ".concat(d.max," symbols")).required(d.req)})},2954:function(n,t,e){e.d(t,{c:function(){return s}});var r=e(885),i=e(2791),o=e(7530),a=e(5705),s=function(n){var t=n.initialValues,e=n.validationSchema,s=n.template,c=n.alertMessage;(0,o.S1)("kU9R1VvVVj3IlNWV4");var m=(0,i.useState)(!1),d=(0,r.Z)(m,2),u=d[0],l=d[1],h=(0,i.useRef)(null),f=(0,a.TA)({initialValues:t,validationSchema:e,validateOnChange:!1,validateOnBlur:!1,onSubmit:function(){l(!0),o.ZP.sendForm("service_themeforest",s,h.current,"kU9R1VvVVj3IlNWV4").then((function(){return alert(c)}),(function(){return alert("Something went wrong...")})).finally((function(){return l(!1)}))}}),p=f.handleSubmit,x=f.handleChange,g=f.values,b=f.touched,y=f.errors;return{subscribeRef:h,disabled:u,handleSubmit:p,handleChange:x,values:g,touched:b,errors:y}}},3471:function(n,t,e){e.d(t,{Z:function(){return Dn}});var r=e(7689),i=e(1087),o=e(657),a=e(2791);var s=e.p+"static/media/logo_blue.7faa926775e34503646bd75d657fda39.svg",c=e(885);var m,d,u,l,h,f,p,x,g,b,y=e.p+"static/media/icon_play.0a954b338e6004cfa42a3e604ff79c28.svg",v=(e(912),e(6096)),w=e(168),Z=e(6444),j=Z.ZP.div(m||(m=(0,w.Z)(["\n\tposition: absolute;\n"]))),k=e(184),P=function(n){var t=n.isOpen,e=n.handleOpening;return(0,k.jsx)(j,{children:(0,k.jsx)(v.Z,{channel:"youtube",youtube:{autoplay:0},isOpen:t,onClose:e,allowFullScreen:!0,videoId:"79ojlwMzs0Q"})})},S=Z.ZP.button(d||(d=(0,w.Z)(["\n\tdisplay: flex;\n\tjustify-self: center;\n\talign-self: center;\n\tjustify-content: center;\n\tbackground-color: ",";\n\tcolor: ",";\n\twidth: 16.8rem;\n\theight: 4.4rem;\n\tborder-radius: 0.6rem;\n\tborder: none;\n\tpadding: 10px 14px;\n\n\t:hover {\n\t\tbackground-color: ",";\n\t}\n\n\t:active {\n\t\tbackground-color: ",";\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\tdisplay: none;\n\t}\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.breakpoints.headerSecond})),F=Z.ZP.img(u||(u=(0,w.Z)(["\n\tmargin-right: 0.5rem;\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin-right: 1rem;\n\t}\n"])),(function(n){return n.theme.breakpoints.layoutFirst})),q=Z.ZP.p(l||(l=(0,w.Z)(["\n\t","\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.headlines.headline7}),(function(n){return n.theme.breakpoints.layoutFirst}),(function(n){return n.theme.headlines.headline8})),T=function(){var n=(0,a.useState)(!1),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=function(){r((function(n){return!n}))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(S,{onClick:i,children:[(0,k.jsx)(F,{alt:"Vector",src:y}),(0,k.jsx)(q,{children:e?"Close Video":"Watch The Demo"})]}),e&&(0,k.jsx)(P,{isOpen:e,handleOpening:i})]})},_=[{name:"Services",route:o.HW},{name:"About Us",route:o.oT},{name:"Our Team",route:o.Bc},{name:"FAQs",route:o.oW}],C=Z.ZP.select(h||(h=(0,w.Z)(["\n\tfont-size: ",";\n\tcolor: ",";\n\tborder: none;\n\tbackground: none;\n\tcursor: pointer;\n\ttext-align: center;\n\n\t@media only screen and (max-width: ",") {\n\t\tfont-size: ",";\n\t}\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.breakpoints.homeFifth}),(function(n){return n.theme.fontSizes.small})),V=Z.ZP.option(f||(f=(0,w.Z)(["\n\tborder: none;\n\tbackground: none;\n"]))),B=function(){var n=(0,r.s0)();return(0,k.jsxs)(C,{defaultValue:"Pages",onChange:function(t){n(t.target.value)},children:[(0,k.jsx)("option",{hidden:!0,disabled:!0,value:"Pages",children:"Pages"}),_.map((function(n){return(0,k.jsx)(V,{value:n.route,children:n.name},"".concat(n.name,"id"))}))]})},R=Z.ZP.div(p||(p=(0,w.Z)(["\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 10;\n\tmin-width: 100vw;\n\theight: 10vh;\n\tmax-height: 12.6rem;\n\tbackground-color: ",";\n\tdisplay: flex;\n\talign-content: center;\n\tjustify-content: space-between;\n\n\t& > * {\n\t\t","\n\t\tcursor: pointer;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\tjustify-content: center;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\tjustify-content: center;\n\t\theight: 20vh;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\t& > * {\n\t\t\tfont-size: ",";\n\t\t}\n\t}\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.headlines.headline7}),(function(n){return n.theme.breakpoints.headerSecond}),(function(n){return n.theme.breakpoints.headerThird}),(function(n){return n.theme.breakpoints.homeFifth}),(function(n){return n.theme.fontSizes.small})),U=Z.ZP.img(x||(x=(0,w.Z)(["\n\twidth: 14.1rem;\n\theight: 4.6rem;\n\tdisplay: flex;\n\tjustify-self: center;\n\talign-self: center;\n\n\t@media only screen and (max-width: ",") {\n\t\ttransform: scale(0.6);\n\t}\n"])),(function(n){return n.theme.breakpoints.headerSecond})),M=Z.ZP.div(g||(g=(0,w.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-self: center;\n\tjustify-self: center;\n"]))),O=Z.ZP.div(b||(b=(0,w.Z)(["\n\t& > * {\n\t\tcolor: ",";\n\t\ttext-decoration: none;\n\t\tmargin: 0 2rem;\n\t}\n"])),(function(n){return n.theme.colors.grey})),z=function(){var n=(0,r.s0)();return(0,k.jsxs)(R,{children:[(0,k.jsx)(U,{alt:"Logo",src:s,onClick:function(){n(o.qh)}}),(0,k.jsxs)(M,{children:[(0,k.jsx)(O,{children:(0,k.jsx)(i.rU,{to:o.qh,children:"Home"})}),(0,k.jsx)(O,{children:(0,k.jsx)(i.rU,{to:o.GF,children:"Solutions"})}),(0,k.jsx)(B,{}),(0,k.jsx)(O,{children:(0,k.jsx)(i.rU,{to:o._o,children:"Blog"})}),(0,k.jsx)(O,{children:(0,k.jsx)(i.rU,{to:o.Nn,children:"Contacts"})})]}),(0,k.jsx)(T,{})]})};var W=e.p+"static/media/logo_white.691ddacae8e1e8745a3349a4168a9d0b.svg";var A=e.p+"static/media/icon_facebook.152932848b0542f2101c758c12738ca7.svg";var E=e.p+"static/media/icon_twitter.9ed2681d7d2b097fcb395c9cbeb04ffe.svg";var N=e.p+"static/media/icon_linkedin.9a42b20b558558b08f2de2a597e34ef9.svg";var H=e.p+"static/media/icon_youtube.c97621c07df839fea7ea011664566aa1.svg";var I,Q,L,G,$,D,J,Y,K,X,nn,tn,en,rn,on,an,sn,cn,mn,dn,un,ln,hn,fn,pn,xn,gn,bn=[A,E,N,H,e.p+"static/media/icon_behance.1ca30da0fbb42c541aaf4aeaf297a16d.svg"],yn=[{name:"Home",route:o.qh},{name:"Solutions",route:o.GF},{name:"Blog",route:o._o},{name:"Contacts",route:o.Nn},{name:"Our Team",route:o.Bc},{name:"About Us",route:o.oT},{name:"Services",route:o.HW},{name:"FAQs",route:o.oW}],vn=Z.ZP.div(I||(I=(0,w.Z)(["\n\tmin-width: 100vw;\n\tmin-height: 53rem;\n\tbackground-color: ",";\n\tdisplay: flex;\n\tflex-direction: column;\n"])),(function(n){return n.theme.colors.secondary})),wn=Z.ZP.div(Q||(Q=(0,w.Z)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\t@media only screen and (max-width: ",") {\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n"])),(function(n){return n.theme.breakpoints.footerFirst})),Zn=Z.ZP.div(L||(L=(0,w.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 28.5rem;\n\n\t& > * {\n\t\tdisplay: flex;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin-bottom: 5rem;\n\n\t\t& > * {\n\t\t\talign-self: center;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"])),(function(n){return n.theme.breakpoints.footerFirst})),jn=Z.ZP.img(G||(G=(0,w.Z)(["\n\twidth: 14.1rem;\n\theight: 4.6rem;\n\tcolor: ",";\n\tmargin-bottom: 2rem;\n\tcursor: pointer;\n\n\t@media only screen and (max-width: ",") {\n\t\talign-self: center;\n\t}\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.footerFirst})),kn=Z.ZP.div($||($=(0,w.Z)(["\n\tmargin-top: 2rem;\n\tcolumn-gap: 1.6rem;\n"]))),Pn=Z.ZP.img(D||(D=(0,w.Z)(["\n\twidth: 2.4rem;\n\theight: 2.4rem;\n\tcursor: pointer;\n"]))),Sn=Z.ZP.div(J||(J=(0,w.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin-bottom: 5rem;\n\t\talign-items: center;\n\t}\n"])),(function(n){return n.theme.breakpoints.footerFirst})),Fn=Z.ZP.div(Y||(Y=(0,w.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 23.3rem;\n\n\t@media only screen and (max-width: ",") {\n\t\t& > * {\n\t\t\talign-self: center;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"])),(function(n){return n.theme.breakpoints.footerFirst})),qn=Z.ZP.div(K||(K=(0,w.Z)(["\n\t","\n\tcolor: ",";\n\tmargin-bottom: 3rem;\n"])),(function(n){return n.theme.headlines.headline6}),(function(n){return n.theme.colors.white})),Tn=Z.ZP.div(X||(X=(0,w.Z)(["\n\t","\n\tcolor: ",";\n\tmargin-bottom: 1.2rem;\n\n\t& > * {\n\t\t","\n\t\tcolor: ",";\n\t\ttext-decoration: none;\n\t}\n"])),(function(n){return n.theme.paragraphs.paragraph3}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.paragraphs.paragraph3}),(function(n){return n.theme.colors.grey})),_n=Z.ZP.div(nn||(nn=(0,w.Z)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 0px;\n\tmargin-top: 3.8rem;\n\n\talign-self: center;\n\n\tborder: 0.1rem solid ",";\n\ttransform: rotate(180deg);\n\n\t@media only screen and (max-width: ",") {\n\t\twidth: 80%;\n\t}\n"])),(function(n){return n.theme.colors.helperBlue2}),(function(n){return n.theme.breakpoints.footerFirst})),Cn=Z.ZP.div(tn||(tn=(0,w.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\talign-self: center;\n\tmargin-top: 3rem;\n\twidth: 100%;\n\n\t@media only screen and (max-width: ",") {\n\t\tflex-direction: column;\n\t\tgap: 2rem;\n\t\tmargin-bottom: 5rem;\n\t}\n"])),(function(n){return n.theme.breakpoints.footerFirst})),Vn=Z.ZP.div(en||(en=(0,w.Z)(["\n\tdisplay: flex;\n\tmargin-right: auto;\n\n\t","\n\tcolor: ",";\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin-right: 0;\n\t}\n"])),(function(n){return n.theme.paragraphs.paragraph3}),(function(n){return n.theme.colors.helperBlue2}),(function(n){return n.theme.breakpoints.footerFirst})),Bn=Z.ZP.div(rn||(rn=(0,w.Z)(["\n\tdisplay: flex;\n\tmargin-left: 9.5rem;\n\n\t","\n\tcolor: ",";\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin-left: 0;\n\t}\n"])),(function(n){return n.theme.paragraphs.paragraph3}),(function(n){return n.theme.colors.helperBlue2}),(function(n){return n.theme.breakpoints.footerFirst})),Rn=function(){var n=(0,r.s0)();return(0,k.jsxs)(vn,{children:[(0,k.jsxs)(wn,{children:[(0,k.jsxs)(Zn,{children:[(0,k.jsx)(jn,{alt:"Logo",src:W,onClick:function(){n(o.qh)}}),(0,k.jsx)(Tn,{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis\xa0suscipit laboriosam, nisi ut aliquid ex ea commodi."}),(0,k.jsx)(kn,{children:bn.map((function(n){return(0,k.jsx)(Pn,{alt:"icon",src:n},n)}))})]}),(0,k.jsxs)(Sn,{children:[(0,k.jsx)(qn,{children:"Quick Link"}),yn.map((function(n){return(0,k.jsx)(Tn,{children:(0,k.jsx)(i.rU,{to:n.route,children:n.name})},n.name)}))]}),(0,k.jsxs)(Fn,{children:[(0,k.jsx)(qn,{children:"Contact Info"}),(0,k.jsx)(Tn,{children:"ensome@info.co.us"}),(0,k.jsx)(Tn,{children:"+1 601-201-5580"}),(0,k.jsx)(Tn,{children:"1642 Washington Avenue, Jackson, MS, Mississippi, 39201"})]})]}),(0,k.jsx)(_n,{}),(0,k.jsxs)(Cn,{children:[(0,k.jsx)(Vn,{children:"Ensome\xa9 2022 All Rights Reserved"}),(0,k.jsx)(Bn,{children:"Privacy policy"}),(0,k.jsx)(Bn,{children:"Terms of us"})]})]})},Un=e(3954),Mn=e(2954),On=Z.ZP.form(on||(on=(0,w.Z)(["\n\tdisplay: flex;\n\tmax-width: 44.5rem;\n\theight: 5.4rem;\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin-bottom: 10rem;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\ttransform: scale(0.8);\n\t\tmargin-bottom: 5rem;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\ttransform: scale(0.6);\n\t}\n"])),(function(n){return n.theme.breakpoints.subscribeFirst}),(function(n){return n.theme.breakpoints.subscribeSecond}),(function(n){return n.theme.breakpoints.subscribeThird})),zn=Z.ZP.input(an||(an=(0,w.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\toutline: none;\n\n\tbackground-color: ",";\n\t","\n\n\tborder-radius: 0.6rem;\n\tborder: none;\n\twidth: 44.5rem;\n\tmargin-right: -12.5rem;\n\tpadding: 1.5rem 2.5rem;\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.colors.helperBlue3}),(function(n){return n.theme.paragraphs.paragraph3}),(function(n){return n.theme.breakpoints.subscribeThird}),(function(n){return n.theme.headlines.headline4})),Wn=Z.ZP.p(sn||(sn=(0,w.Z)(["\n\tposition: absolute;\n\tpadding: 0.5rem 1rem;\n\tmargin-top: 6rem;\n\tmargin-left: 0rem;\n\tborder-radius: 1rem;\n\tdisplay: flex;\n\t","\n\tcolor: ",";\n\tbackground-color: ",";\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.paragraphs.paragraph3}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.error}),(function(n){return n.theme.breakpoints.subscribeThird}),(function(n){return n.theme.paragraphs.paragraph1})),An=Z.ZP.button(cn||(cn=(0,w.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tbackground-color: ",";\n\t","\n\n\tborder-radius: 0.6rem;\n\tborder: none;\n\twidth: 12.5rem;\n\tpadding: 1.5rem 2rem;\n\tcursor: pointer;\n\n\t:hover {\n\t\tbackground-color: ",";\n\t}\n\n\t:active {\n\t\tbackground-color: ",";\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.headlines.headline6}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.subscribeThird}),(function(n){return n.theme.headlines.headline4})),En=function(){var n=(0,Mn.c)({initialValues:{email:""},validationSchema:Un.$,template:"template_to_user",alertMessage:"Check your mail!"}),t=n.subscribeRef,e=n.disabled,r=n.handleSubmit,i=n.handleChange,o=n.values,a=n.touched,s=n.errors;return(0,k.jsxs)(On,{ref:t,onSubmit:r,children:[(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(zn,{placeholder:"Your email",name:"email",onChange:i,value:o.email,error:a.email&&Boolean(s.email),message:s.email}),s.email&&(0,k.jsx)(Wn,{children:s.email})]}),(0,k.jsx)(An,{type:"submit",disabled:e,children:"Send"})]})},Nn=Z.ZP.div(mn||(mn=(0,w.Z)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmin-width: 100vw;\n\theight: minmax(max-content, 30.6rem);\n\tbackground-color: ",";\n\n\t@media only screen and (max-width: ",") {\n\t\tflex-direction: column;\n\t}\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.breakpoints.subscribeFirst})),Hn=Z.ZP.div(dn||(dn=(0,w.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 10rem 2rem;\n\ttext-align: center;\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin: 5rem 2rem;\n\t}\n"])),(function(n){return n.theme.breakpoints.subscribeFirst})),In=Z.ZP.p(un||(un=(0,w.Z)(["\n\t","\n\tcolor: ",";\n\n\tmargin-bottom: 2.4rem;\n\twidth: minmax(min-content, 51rem);\n\tmax-width: 51rem;\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.headlines.headline2}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.subscribeThird}),(function(n){return n.theme.headlines.headline3}),(function(n){return n.theme.breakpoints.layoutFirst}),(function(n){return n.theme.headlines.headline3})),Qn=Z.ZP.p(ln||(ln=(0,w.Z)(["\n\t","\n\tcolor: ",";\n\twidth: minmax(min-content, 51rem);\n\tmax-width: 51rem;\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.paragraphs.paragraph1}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.subscribeThird}),(function(n){return n.theme.paragraphs.paragraph2})),Ln=(Z.ZP.form(hn||(hn=(0,w.Z)(["\n\tdisplay: flex;\n\tmax-width: 44.5rem;\n\theight: 5.4rem;\n\n\t@media only screen and (max-width: ",") {\n\t\tmargin-bottom: 10rem;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\ttransform: scale(0.8);\n\t\tmargin-bottom: 5rem;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\ttransform: scale(0.6);\n\t}\n"])),(function(n){return n.theme.breakpoints.subscribeFirst}),(function(n){return n.theme.breakpoints.subscribeSecond}),(function(n){return n.theme.breakpoints.subscribeThird})),Z.ZP.input(fn||(fn=(0,w.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\toutline: none;\n\n\tbackground-color: ",";\n\t","\n\n\tborder-radius: 0.6rem;\n\tborder: none;\n\twidth: 44.5rem;\n\tmargin-right: -12.5rem;\n\tpadding: 1.5rem 2.5rem;\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.colors.helperBlue3}),(function(n){return n.theme.paragraphs.paragraph3}),(function(n){return n.theme.breakpoints.subscribeThird}),(function(n){return n.theme.headlines.headline4})),Z.ZP.button(pn||(pn=(0,w.Z)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tbackground-color: ",";\n\t","\n\n\tborder-radius: 0.6rem;\n\tborder: none;\n\twidth: 12.5rem;\n\tpadding: 1.5rem 2rem;\n\tcursor: pointer;\n\n\t:hover {\n\t\tbackground-color: ",";\n\t}\n\n\t:active {\n\t\tbackground-color: ",";\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\t","\n\t}\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.headlines.headline6}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.subscribeThird}),(function(n){return n.theme.headlines.headline4})),function(){return(0,k.jsxs)(Nn,{children:[(0,k.jsxs)(Hn,{children:[(0,k.jsx)(In,{children:"Subscribe to our newsletter"}),(0,k.jsx)(Qn,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),(0,k.jsx)(En,{})]})}),Gn=Z.ZP.div(xn||(xn=(0,w.Z)([""]))),$n=Z.ZP.div(gn||(gn=(0,w.Z)(["\n\t& > * {\n\t\twidth: 100vw;\n\t\tpadding: 0 10vw;\n\t}\n\n\t@media only screen and (max-width: ",") {\n\t\t& > * {\n\t\t\tpadding: 0 3vw;\n\t\t}\n\t}\n"])),(function(n){return n.theme.breakpoints.layoutFirst})),Dn=function(n){var t=n.children;return(0,k.jsx)(Gn,{children:(0,k.jsxs)($n,{children:[(0,k.jsx)(z,{}),(0,k.jsx)(k.Fragment,{children:t}),(0,k.jsx)(Ln,{}),(0,k.jsx)(Rn,{})]})})}}}]);
//# sourceMappingURL=471.2e255b90.chunk.js.map