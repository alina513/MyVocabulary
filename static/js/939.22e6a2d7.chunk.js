"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[939],{7757:function(n,e,r){r.d(e,{A:function(){return $}});var t,i,o,a,c,s,l,d,x,p,u,h,g,f,m=r(9439),b=r(168),Z=r(6487),w=Z.ZP.input(t||(t=(0,b.Z)(["\nmargin-bottom: 8px;\n  box-sizing: border-box;\n  border: 1px solid rgba(18, 20, 23, 0.1);\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 343px;\n  height: 48px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  display: block;\n  color: ",";\n  background-color: #FFFFFF;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0px;\n    width: 274px;\n  height: 48px;\n  }\n"])),(function(n){return n.theme.colors.black})),j=Z.ZP.select(i||(i=(0,b.Z)(["\nbox-sizing: border-box;\ndisplay: flex;\nwidth: 343px;\n  height: 48px;\n  padding: 12px 24px;\n@media screen and (min-width: 768px) {\n  border: 1px solid rgba(18, 20, 23, 0.1);\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 164px;\n  height: 48px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  color: ",";\n  margin-left: 8px;\n  display: block;\n  background-color: #FFFFFF;}\n"])),(function(n){return n.theme.colors.black})),k=Z.ZP.div(o||(o=(0,b.Z)(["\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    margin-bottom: 28px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 0px;\n  }\n"]))),v=Z.ZP.input.attrs({type:"radio"})(a||(a=(0,b.Z)(["\n  display: flex;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n  line-height: 22px;\n  color: ",";\n  background-color: ",";\n\n  &:checked {\n    background-color: green;\n    color: ",";\n    border: 2px solid green;\n    background-clip: content-box;\n    padding: 3px;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.black})),y=Z.ZP.div(c||(c=(0,b.Z)(["\n  box-sizing: border-box;\n  height: 48px;\n  padding: 12px 0px;\n  display: flex;\n  gap: 16px;\n  gap: 16px;\n  margin-bottom: 22px;\n  margin-top: 8px;\n  margin-left: 8px;\n  align-items: center;\n"]))),P=Z.ZP.label(s||(s=(0,b.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.black})),z=r(4420),C=r(321),F=r(5086),A=r(8501),S=r(8332),M=r(2791),D=r(8573),I=r.n(D),H=r(184),O=function(){var n=(0,z.v9)(C.rK),e=(0,z.I0)();(0,M.useEffect)((function(){e((0,A.pE)({token:n}))}),[e,n]);var r=(0,z.v9)(F.us),t=(0,M.useState)(""),i=(0,m.Z)(t,2),o=i[0],a=i[1],c=(0,M.useState)(""),s=(0,m.Z)(c,2),l=s[0],d=s[1],x=(0,M.useState)(""),p=(0,m.Z)(x,2),u=p[0],h=p[1],g=(0,M.useMemo)((function(){return I()((function(n){return e((0,S.Tv)(n))}),300)}),[e]),f=function(n){h(n.target.value)};return(0,M.useEffect)((function(){return function(){g.cancel()}}),[g]),(0,H.jsxs)(k,{children:[(0,H.jsx)(w,{placeholder:"Find the word",value:l,onChange:function(n){var e=n.target.value.trim();d(e),g(e)}}),(0,H.jsxs)(j,{id:"categories",name:"categories",onChange:function(n){a(n.target.value),e((0,S.PR)(n.target.value))},children:[(0,H.jsx)("option",{value:""}),r&&r.map((function(n){return(0,H.jsx)("option",{value:n,children:n},n)}))]}),"verb"===o&&(0,H.jsxs)(y,{children:[(0,H.jsx)(v,{type:"radio",id:"regular",name:"verb",value:"regular",checked:"regular"===u,onChange:f}),(0,H.jsx)(P,{htmlFor:"regular",children:"Regular"}),(0,H.jsx)(v,{type:"radio",id:"irregular",name:"verb",value:"irregular",checked:"irregular"===u,onChange:f}),(0,H.jsx)(P,{htmlFor:"irregular",children:"Irregular"})]})]})},E=Z.ZP.p(l||(l=(0,b.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),R=Z.ZP.span(d||(d=(0,b.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 150%;\n  color: ",";\n"])),(function(n){return n.theme.colors.black})),V=function(){var n=(0,z.v9)(F.Uq);return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(E,{children:["To study:",(0,H.jsx)(R,{children:n.length||0})]})})},L=r(1087),_=Z.ZP.button(x||(x=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  border: none;\n  color: ",";\n  // background-color: ",";\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.buttonWhite}),(function(n){return n.theme.colors.green})),q=(0,Z.ZP)(L.OL)(p||(p=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  color: ",";\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.green})),N=Z.ZP.svg(u||(u=(0,b.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),T=Z.ZP.div(h||(h=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n"]))),U=r(7649),W=r(5561),K=function(n){var e=n.exam,r=(0,M.useState)(!1),t=(0,m.Z)(r,2),i=t[0],o=t[1];return(0,H.jsxs)(T,{children:[e&&(0,H.jsxs)(_,{onClick:function(){o(!0)},children:["Add word",(0,H.jsx)(N,{children:(0,H.jsx)("use",{xlinkHref:W.Z+"#icon-plus"})})]}),(0,H.jsxs)(q,{to:"/training",children:["Train oneself",(0,H.jsx)(N,{children:(0,H.jsx)("use",{xlinkHref:W.Z+"#icon-switch"})})]}),(0,H.jsx)(U.M,{isOpenModalLogin:i,setIsOpenModalLogin:o})]})},B=Z.ZP.div(g||(g=(0,b.Z)(["\n  display: block;\n  margin-top: 32px;\n  margin-left: 16px;\n  @media screen and (min-width: 768px) {\n    margin-left: 32px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 1240px;\n    margin-right: 80px;\n    margin-left: 80px;\n  }\n"]))),J=Z.ZP.div(f||(f=(0,b.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n  }\n"]))),$=function(n){var e=n.exam;return(0,H.jsxs)(B,{children:[(0,H.jsx)(O,{}),(0,H.jsxs)(J,{children:[(0,H.jsx)(V,{}),(0,H.jsx)(K,{exam:e})]})]})}},2360:function(n,e,r){r.d(e,{t:function(){return ne}});var t,i,o,a,c,s,l,d,x,p,u,h,g,f,m,b,Z,w,j,k,v,y,P,z,C,F,A,S,M,D,I,H,O,E,R,V,L,_,q,N,T,U,W,K=r(9439),B=r(8080),J=r(6996),$=r(2791),G=r(168),Q=r(6487),X=Q.ZP.div(t||(t=(0,G.Z)(["\n  background-color: ",";\n  border-radius: 15px;\n  margin-right: auto;\n  margin-left: auto;\n\n  padding: 14px;\n  width: 343px;\n  height: 563px;\n  margin-top: 32px;\n  @media screen and (min-width: 768px) {\n    width: 704px;\n  height: 666px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 18px;\n    width: 1240px;\n    height: 640px;\n    margin-top: 37px;\n  }\n"])),(function(n){return n.theme.colors.white})),Y=(Q.ZP.div(i||(i=(0,G.Z)(["\n  width: 343px;\n  @media screen and (min-width: 768px) {\n    width: 666px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 1240px;\n    height: 640px;\n  }\n"]))),Q.ZP.table(o||(o=(0,G.Z)(["\nbox-sizing: border-box;\n  width: 343px;\n  height: 540px;\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n  height: 566px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1240px;\n    height: 540px;\n    margin-right: auto;\n    margin-left: auto;\n    border-collapse: collapse;\n    border-radius: 8px;\n    overflow: hidden;\n    box-shadow: 0 0 0 1px ",";\n  }\n"])),(function(n){return n.theme.colors.white}))),nn=Q.ZP.span(a||(a=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),en=Q.ZP.th(c||(c=(0,G.Z)(["\nbox-sizing: border-box;\npadding: 16px 0px 16px 14px;\nwidth; 84px;\n  // height: 54px;\n  font-weight: 500;\n  font-size: 16px;\n\n  @media screen and (min-width: 1440px) {\n    border-bottom: 1px solid #dbdbdb;\n    border-right: 1px solid #dbdbdb;\n    text-align: left;\n    padding: 0px 22px 0px 22px;\n    height: 72px;\n    background-color: rgba(133, 170, 159, 0.1);\n    font-weight: 500;\n    font-size: 20px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.black})),rn=Q.ZP.tr(s||(s=(0,G.Z)(["\nbox-sizing: border-box;\n  // height: 70px;\n  height: 30px;\n\n  &:last-child td {\n    border-bottom: none;\n  }\n  background-color: #fcfcfc;\n  @media screen and (min-width: 1440px) {\n    height: 80px;\n  }\n"]))),tn=Q.ZP.td(l||(l=(0,G.Z)(["\nfont-weight: 500;\nfont-size: 14px;\ncolor: ",";\n\n&.category-exam {\n  display: none;\n}\nborder-bottom: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n  padding: 10px 0px 10px 14px;\n\n  &:last-child {\n    border-right: none; /* \u041f\u0440\u0438\u0431\u0438\u0440\u0430\u0454\u043c\u043e \u043f\u0440\u0430\u0432\u0438\u0439 \u0431\u043e\u0440\u0434\u0435\u0440 \u0443 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0457 \u043a\u043e\u043c\u0456\u0440\u043a\u0438 \u0432 \u0440\u044f\u0434\u043a\u0443 */\n  }\n\n  @media screen and (min-width: 768px) {\n    &.category-exam {\n      display: table-cell;\n    }\n\n  @media screen and (min-width: 1440px) {\n    font-weight: 500;\nfont-size: 20px;\npadding:  0px 22px 0px 22px;\n  }\n"])),(function(n){return n.theme.colors.black})),on=Q.ZP.button(d||(d=(0,G.Z)(["\n  border: none;\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.green})),an=Q.ZP.svg(x||(x=(0,G.Z)(["\n  display: none;\n  width: 32px;\n  height: 32px;\n  @media screen and (min-width: 768px) {\n    display: block;\n  }\n"]))),cn=Q.ZP.span(p||(p=(0,G.Z)(["\n  display: none;\n"]))),sn=Q.ZP.svg(u||(u=(0,G.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),ln=Q.ZP.span(h||(h=(0,G.Z)(["\ndisplay: none;\n@media screen and (min-width: 768px) {\n  display: block;}\n"]))),dn=Q.ZP.span(g||(g=(0,G.Z)(["\n@media screen and (min-width: 768px) {\n  font-weight: 500;\n  font-size: 16px;\n  display: block;\n  align-items: center;\n  gap: 8px;}\n  @media screen and (min-width: 1440px) {\n    display: flex;\n  }\n"]))),xn=Q.ZP.button(f||(f=(0,G.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  color: ",";\n  border: none;\n  background-color: transparent;\n  display: block;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.green})),pn=Q.ZP.div(m||(m=(0,G.Z)(["\ndisplay: flex;\ngap: 7px;\n"]))),un=Q.ZP.p(b||(b=(0,G.Z)(["\ndisplay: none;\n@media screen and (min-width: 1440px) {\n  display: flex;\nfont-weight: 500;\nfont-size: 22px;}\n"]))),hn=r(5561),gn=r(4387),fn=Q.ZP.nav(Z||(Z=(0,G.Z)(["\n  margin-top: 28px;\n  margin-bottom: 50px;\n"]))),mn=Q.ZP.ul(w||(w=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),bn=Q.ZP.button(j||(j=(0,G.Z)(["\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background-color: transparent;\n\n  color: var(--primary-color-black);\n  border: 1px solid var(--primary-color-fon);\n  &:hoveer,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white})),Zn=Q.ZP.button(k||(k=(0,G.Z)(["\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 13px;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background-color: ",";\n  color: ",";\n  border: 1px solid #121417;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.active?"#85AA9F":"#fff"}),(function(n){return n.active?"#fff":"#121417"}),(function(n){return n.active?"#0056b3":"#e7e7e7"})),wn=r(184),jn=function(n){var e=n.totalPages,r=n.page,t=n.onPageChange,i=function(n){n!==r&&t(n)};return(0,wn.jsx)(fn,{children:(0,wn.jsxs)(mn,{children:[(0,wn.jsx)("li",{children:(0,wn.jsx)(bn,{disabled:1===r,onClick:function(){return i(1)},children:"<<"})}),1!==r&&(0,wn.jsx)("li",{children:(0,wn.jsx)(bn,{onClick:function(){return i(r-1)},children:"<"})}),function(){var n,t=[];if(e<=7)for(var o=function(n){t.push((0,wn.jsx)("li",{className:r===n?"active":"",children:(0,wn.jsx)(Zn,{active:r===n,onClick:function(){return i(n)},children:n})},n))},a=1;a<=e;a++)o(a);else{var c=1,s=3;r>1&&(c=r-1,s=r+1),r>e-3&&(c=e-3,s=e-1);for(var l=function(n){t.push((0,wn.jsx)("li",{className:r===n?"active":"",children:(0,wn.jsx)(Zn,{active:r===n,onClick:function(){return i(n)},children:n})},n))},d=c;d<=s;d++)l(d);t.push((n="dots1",(0,wn.jsx)("li",{className:"dots",children:"..."},n)));for(var x=function(n){t.push((0,wn.jsx)("li",{children:(0,wn.jsx)(Zn,{active:r===n,onClick:function(){return i(n)},children:n})},n))},p=e;p<=e;p++)x(p)}return t}(),r!==e&&(0,wn.jsx)("li",{children:(0,wn.jsx)(bn,{onClick:function(){return i(r+1)},children:">"})}),(0,wn.jsx)("li",{children:(0,wn.jsx)(bn,{disabled:r===e,onClick:function(){return i(e)},children:">>"})})]})})},kn=r(8501),vn=r(4420),yn=r(5086),Pn=r(321),zn=r(7948),Cn=r.n(zn),Fn=Q.ZP.form(v||(v=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),An=Q.ZP.button(y||(y=(0,G.Z)(["\ndisplay: flex;\nwidth: 76px;\nheight: 24px;\nfont-weight: 500;\nfont-size: 16px;\nline-height: 150%;\nborder: none;\nbackground-color: transparent;\n&:hover, &:focus {\n    color: ",";\n    \n\n"])),(function(n){return n.theme.colors.green})),Sn=Q.ZP.button(P||(P=(0,G.Z)(["\ndisplay: flex;\nalign-items: center;\nwidth: 76px;\nheight: 24px;\nfont-weight: 500;\nfont-size: 16px;\nline-height: 150%;\nborder: none;\nbackground-color: transparent;\n&:hover, &:focus {\n    color: ",";\n    \n"])),(function(n){return n.theme.colors.green})),Mn=Q.ZP.svg(z||(z=(0,G.Z)(["\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n"]))),Dn=r(5861),In=r(4687),Hn=r.n(In),On=r(8007),En=r(5218),Rn=Q.ZP.form(C||(C=(0,G.Z)(["\n  color: ",";\n  position: relative;\n"])),(function(n){return n.theme.colors.white})),Vn=(Q.ZP.h2(F||(F=(0,G.Z)(["\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 120%;\n  letter-spacing: -0.02em;\n  margin-bottom: 20px;\n"]))),Q.ZP.p(A||(A=(0,G.Z)(["\n  ont-weight: 400;\n  font-size: 20px;\n  line-height: 150%;\n  color: rgba(252, 252, 252, 0.8);\n  margin-bottom: 32px;\n"]))),Q.ZP.select(S||(S=(0,G.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  border: 1px solid rgba(252, 252, 252, 0.3);\n  border-radius: 15px;\n  padding: 12px 24px;\n  width: 204px;\n  height: 48px;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white})),Q.ZP.input(M||(M=(0,G.Z)(["\n  display: flex;\n  box-sizing: border-box;\n  border: 1px solid rgba(252, 252, 252, 0.3);\n  border-radius: 15px;\n  padding: 16px 246px 16px 18px;\n  width: 354px;\n  height: 56px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 150%;\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white}))),Ln=Q.ZP.p(D||(D=(0,G.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 150%;\n"]))),_n=Q.ZP.button(I||(I=(0,G.Z)(["\n  border-radius: 30px;\n  padding: 14px 104px;\n  width: 245px;\n  height: 56px;\n  border: none;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 156%;\n  background-color: ",";\n  color: ",";\n  margin-right: 10px;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.green})),qn=Q.ZP.button(H||(H=(0,G.Z)(["\n  border: 1px solid rgba(252, 252, 252, 0.4);\n  border-radius: 30px;\n  padding: 14px 92px;\n  width: 245px;\n  height: 56px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 156%;\n  background-color: ",";\n  color: ",";\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white})),Nn=Q.ZP.button(O||(O=(0,G.Z)(["\n  margin-left: auto;\n  background-color: #85aa9f;\n  display: block;\n  border: none;\n  position: absolute;\n  right: -50px;\n  top: -50px;\n"]))),Tn=Q.ZP.svg(E||(E=(0,G.Z)(["\n  width: 32px;\n  height: 32px;\n"]))),Un=(Q.ZP.input(R||(R=(0,G.Z)([""]))),Q.ZP.div(V||(V=(0,G.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-bottom: 22px;\n  margin-top: 8px;\n"]))),Q.ZP.label(L||(L=(0,G.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),Q.ZP.svg(_||(_=(0,G.Z)(["\n  width: 32px;\n  height: 32px;\n"])))),Wn=Q.ZP.div(q||(q=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin-left: 32px;\n"]))),Kn=Q.ZP.div(N||(N=(0,G.Z)(["\n  display: flex;\n  margin-top: 16px;\n"]))),Bn=Q.ZP.div(T||(T=(0,G.Z)(["\n  display: flex;\n  gap: 10px;\n  margin-top: 32px;\n"]))),Jn=(Q.ZP.p(U||(U=(0,G.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 117%;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),Q.ZP.p(W||(W=(0,G.Z)(["\n  color: red;\n  font-size: 14px;\n  margin-top: 5px;\n"]))));Cn().setAppElement("#modal");var $n=On.Ry({eng:On.Z_().matches(/\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,"Text is not valid").required("Is required"),ukr:On.Z_().matches(/^(?![A-Za-z])[\t-\r \xA0\u02BC\u0404\u0406\u0407\u0410-\u044F\u0454\u0456\u0457\u0490\u0491\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+$/,"Text is not valid").required("Is required")}).required(),Gn=function(n){var e=n.isOpenModal,r=n.setIsOpenModal,t=n.wordData,i=(0,$.useState)(""),o=(0,K.Z)(i,2),a=o[0],c=o[1],s=(0,vn.v9)(Pn.rK),l=(0,vn.I0)(),d=function(){var n=(0,Dn.Z)(Hn().mark((function n(e){var i,o,a,d,x;return Hn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.preventDefault(),i=e.target.elements.eng.value,o=e.target.elements.ukr.value,a=t.category,d=t.isIrregular,x=t._id,n.next=9,$n.validate({eng:i,ukr:o});case 9:l((0,kn.A8)({id:x,en:i,ua:o,category:a,isIrregular:d,token:s})),e.target.reset(),r(!1),c(""),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),c(n.t0.message),En.ZP.error(n.t0.message);case 19:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e){return n.apply(this,arguments)}}();return(0,wn.jsx)(wn.Fragment,{children:(0,wn.jsx)(Cn(),{isOpen:e,onRequestClose:function(){r(!1)},style:{overlay:{backgroundColor:"rgba(18, 20, 23, 0.2)"},content:{boxSizing:"border-box",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"48px 64px 48px 64px",paddingLeft:"64px",width:"627px",height:"345px",borderRadius:"30px",backgroundColor:"#85AA9F"}},contentLabel:"More info modal",children:(0,wn.jsxs)(Rn,{onSubmit:d,children:[(0,wn.jsx)(Nn,{onClick:function(){return r(!1)},children:(0,wn.jsx)(Tn,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-close"})})}),(0,wn.jsxs)(Kn,{children:[(0,wn.jsx)(Vn,{name:"ukr"}),(0,wn.jsxs)(Wn,{children:[(0,wn.jsx)(Un,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-ukraine"})}),(0,wn.jsx)(Ln,{children:"Ukrainian"})]})]}),(0,wn.jsxs)(Kn,{children:[(0,wn.jsx)(Vn,{name:"eng"}),(0,wn.jsxs)(Wn,{children:[(0,wn.jsx)(Un,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-uk"})}),(0,wn.jsx)(Ln,{children:"English"})]})]}),a&&(0,wn.jsx)(Jn,{children:a}),(0,wn.jsxs)(Bn,{children:[(0,wn.jsx)(_n,{type:"submit",children:"Save"}),(0,wn.jsx)(qn,{type:"button",onClick:function(){return r(!1)},children:"Cancel"})]})]})})})};Cn().setAppElement("#modal");var Qn=function(n){var e=n.isOpenModal,r=n.setIsOpenModal,t=n.wordData,i=(0,$.useState)(!1),o=(0,K.Z)(i,2),a=o[0],c=o[1],s=(0,vn.v9)(Pn.rK),l=(0,vn.I0)();return(0,wn.jsxs)(wn.Fragment,{children:[(0,wn.jsx)(Cn(),{isOpen:e,onRequestClose:function(){r(!1)},style:{overlay:{backgroundColor:"transparent",width:"1600px"},content:{boxSizing:"border-box",top:"45%",left:"85%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"12px 0px 12px 0px",width:"130px",height:"80px",borderRadius:"15px",backgroundColor:"#FFF",boxShadow:"0 4px 47px 0 rgba(18, 20, 23, 0.08)",border:"none"}},contentLabel:"More info modal",children:(0,wn.jsxs)(Fn,{onSubmit:function(){var n=t._id;l((0,kn.lk)({id:n,token:s})),r(!1)},children:[(0,wn.jsxs)(An,{onClick:function(){c(!0)},type:"button",children:[(0,wn.jsx)(Mn,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-pen"})}),"Edit"]}),(0,wn.jsxs)(Sn,{type:"submit",children:[(0,wn.jsx)(Mn,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-trash"})}),"Delete"]})]})}),(0,wn.jsx)(Gn,{isOpenModal:a,setIsOpenModal:c,wordData:t})]})},Xn=r(4137),Yn=function(){return(0,wn.jsx)(Xn.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})};function ne(n){var e=n.exam,r=(0,$.useState)(!1),t=(0,K.Z)(r,2),i=t[0],o=t[1],a=(0,$.useState)(null),c=(0,K.Z)(a,2),s=c[0],l=c[1],d=(0,vn.v9)(yn.Fu),x=(0,vn.v9)(yn.NJ),p=(0,vn.v9)(Pn.rK),u=(0,vn.v9)(yn.cC),h=(0,vn.v9)(yn.Q$),g=(0,vn.v9)(yn.wW),f=(0,vn.v9)(yn.d5),m=(0,vn.v9)(yn.xU),b=(0,vn.I0)();(0,$.useEffect)((function(){b((0,kn.Jv)({token:p}))}),[b,p]),(0,$.useEffect)((function(){b(e?(0,kn.UA)({token:p,page:h,keyword:g,category:f}):(0,kn.Lg)({token:p,page:h,keyword:g,category:f}))}),[b,p,h,g,f,e]);var Z,w,j=(0,B.Cl)();Z=!0===e?[j.accessor("en",{cell:function(n){return n.getValue()},header:function(){return(0,wn.jsxs)(nn,{children:["Word",(0,wn.jsx)(an,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-uk"})})]})}}),j.accessor("ua",{cell:function(n){return n.getValue()},header:function(){return(0,wn.jsxs)(nn,{children:["Translation",(0,wn.jsx)(an,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-ukraine"})})]})}}),j.accessor("category",{header:function(){return(0,wn.jsx)("span",{className:"category-exam",children:"Category"})},cell:function(n){return(0,wn.jsx)("span",{className:"category-exam",children:n.getValue()})}}),j.accessor("progress",{header:function(){return(0,wn.jsx)("span",{children:"Progress"})},cell:function(n){return(0,wn.jsxs)(pn,{children:[(0,wn.jsxs)(un,{children:[n.getValue(),"%"]}),(0,wn.jsx)(gn.D,{size:26,strokeWidth:4,progress:n.getValue(),color1:"#2BD627",color2:"#D4F8D3",color3:"#D4F8D3"})]})}}),j.accessor("status",{header:function(){return(0,wn.jsx)(cn,{children:"Status"})},cell:function(n){return(0,wn.jsx)(on,{onClick:function(){return e=n.row.original,l(e),void o(!0);var e},children:n.getValue()||"..."})}})]:[j.accessor("en",{cell:function(n){return n.getValue()},header:function(){return(0,wn.jsxs)(nn,{children:["Word",(0,wn.jsx)(an,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-uk"})})]})}}),j.accessor("ua",{cell:function(n){return n.getValue()},header:function(){return(0,wn.jsxs)(nn,{children:["Translation",(0,wn.jsx)(an,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-ukraine"})})]})}}),j.accessor("category",{header:function(){return"Category"},cell:function(n){return(0,wn.jsx)("span",{children:n.getValue()})}}),j.accessor("status",{header:function(){return(0,wn.jsx)(cn,{children:"Status"})},cell:function(n){return(0,wn.jsx)(xn,{type:"submit",onClick:function(){return e=n.row.original._id,void b((0,kn.UE)({id:e,token:p}));var e},children:n.getValue()||(0,wn.jsxs)(dn,{children:[(0,wn.jsx)(ln,{children:" Add to dictionary"}),(0,wn.jsx)(sn,{children:(0,wn.jsx)("use",{xlinkHref:hn.Z+"#icon-switch"})})]})})}})],w=e?d:x;var k=(0,J.b7)({data:w,columns:Z,getCoreRowModel:(0,B.sC)()});return(0,wn.jsxs)(wn.Fragment,{children:[(0,wn.jsxs)(X,{children:[m?(0,wn.jsx)(Yn,{}):(0,wn.jsxs)(Y,{children:[(0,wn.jsx)("thead",{children:k.getHeaderGroups().map((function(n){return(0,wn.jsx)("tr",{children:n.headers.map((function(n){return(0,wn.jsx)(en,{children:n.isPlaceholder?null:(0,J.ie)(n.column.columnDef.header,n.getContext())},n.id)}))},n.id)}))}),(0,wn.jsx)("tbody",{children:k.getRowModel().rows.map((function(n){return(0,wn.jsx)(rn,{children:n.getVisibleCells().map((function(n){return(0,wn.jsx)(tn,{className:e&&"category"===n.column.id?"category-exam":"",children:(0,J.ie)(n.column.columnDef.cell,n.getContext())},n.id)}))},n.id)}))})]}),(0,wn.jsx)(Qn,{isOpenModal:i,setIsOpenModal:o,wordData:s})]}),(0,wn.jsx)(jn,{totalPages:u,page:h,onPageChange:function(n){b(e?(0,kn.UA)({token:p,page:n}):(0,kn.Lg)({token:p,page:n}))}})]})}}}]);
//# sourceMappingURL=939.22e6a2d7.chunk.js.map