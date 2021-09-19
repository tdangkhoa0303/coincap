(this["webpackJsonpcoin-cap"]=this["webpackJsonpcoin-cap"]||[]).push([[0],{113:function(e,t){},126:function(e,t,n){"use strict";n(50),n(113);var a=n(66);n.d(t,"EnhancedTable",(function(){return a.a}))},164:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(32),i=n.n(r),o=(n(164),n(5)),s=n(312),l=n(2),u=Object(o.a)(s.a)({objectFit:"cover"},(function(e){var t=e.size;return{height:t,width:t}})),j=Object(o.a)("img")({width:"100%",height:"100%"}),d=function(e){var t=e.size,n=e.className;return Object(l.jsx)(u,{size:t,children:Object(l.jsx)(j,{src:"/logo.svg",alt:"logo",className:n})})};d.defaultProps={size:48};var b=c.a.memo(d),h=n(314),O=n(86),f=n(315),m=n(316),p=function(){return Object(l.jsx)(h.a,{position:"static",children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(m.a,{children:Object(l.jsx)(b,{})}),Object(l.jsx)(O.a,{variant:"h6",children:"CoinCap"})]})})},x=c.a.memo(p),g=function(e){var t=e.value;return Object(l.jsx)(O.a,{sx:{color:function(e){return t>0?e.palette.common.green:e.palette.common.red},textAlign:"right",fontSize:"14px"},children:"".concat(t.toFixed(2),"%")})},v=c.a.memo(g),C=n(310),w=function(e){var t=e.value,n=e.row;return Object(l.jsxs)(s.a,{display:"flex",alignItems:"center",children:[Object(l.jsx)(C.a,{alt:n.name,src:"https://s2.coinmarketcap.com/static/img/coins/64x64/".concat(n.id,".png")}),Object(l.jsx)(O.a,{ml:2,sx:{fontSize:"14px"},children:t})]})},P=c.a.memo(w),k=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},L=[{field:"cmc_rank",headerName:"Rank",path:"cmc_rank"},{field:"name",headerName:"Name",path:"name",cellRenderer:function(e,t){return Object(l.jsx)(P,{value:e,row:t})}},{field:"symbol",headerName:"Symbol",path:"symbol",TableCellProps:{align:"right"}},{field:"market_cap",headerName:"Market Cap",path:"quote.USD.market_cap",TableCellProps:{align:"right"},valueFormatter:k},{field:"price",headerName:"Price",path:"quote.USD.price",TableCellProps:{align:"right"},valueFormatter:k},{field:"circulating_supply",headerName:"Circulating Supply",path:"circulating_supply",TableCellProps:{align:"right"},valueFormatter:k},{field:"volume_24h",headerName:"Volume (24h)",path:"quote.USD.volume_24h",TableCellProps:{align:"right"},valueFormatter:k},{field:"percent_change_1h",headerName:"% 1h",cellRenderer:function(e,t){return Object(l.jsx)(v,{value:e,row:t})},path:"quote.USD.percent_change_1h",TableCellProps:{align:"right"}},{field:"percent_change_24h",headerName:"% 24h",cellRenderer:function(e,t){return Object(l.jsx)(v,{value:e,row:t})},path:"quote.USD.percent_change_24h",TableCellProps:{align:"right"}},{field:"percent_change_7d",headerName:"% 7d",cellRenderer:function(e,t){return Object(l.jsx)(v,{value:e,row:t})},path:"quote.USD.percent_change_7d",TableCellProps:{align:"right"}}],y=n(126),S=n(302),T=n(298),_=Object(S.a)((function(){return Object(T.a)({root:{height:"100%"}})}),{name:"CoinCapTable"}),N=function(e){var t=e,n=t.rows,a=t.loading,c=_();return Object(l.jsx)(y.EnhancedTable,{rows:n,isLoading:a,className:c.root,headers:L})};N.defaultProps={loading:!1};var I=c.a.memo(N),R=n(15),F=n(139),D=function(e){var t=e.currentIndex,n=e.children,a=Object(F.a)(e,["currentIndex","children"]);return Object(l.jsx)(s.a,Object(R.a)(Object(R.a)({},a),{},{children:c.a.Children.toArray(n).map((function(e,n){return Object(l.jsx)(s.a,{sx:{height:"100%"},hidden:t!==n,children:e},n)}))}))},W=c.a.memo(D),U=n(41),M=n(21),q=n(64),z=n(131),A=n(101),E=n.n(A),H=n(132),B=n(102),G=n(133),J=n.n(G).a.create({baseURL:"http://localhost:1402",withCredentials:!1}),V="coins",Y=Object(B.a)("".concat(V,"/fetchCoins"),Object(H.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("/v1/cryptocurrency/listings/latest?limit=5000");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),K=Object(B.b)({name:V,initialState:{data:[],watchList:[],isLoading:!1},reducers:{updateWatchList:function(e,t){var n=t.payload;return Object(R.a)(Object(R.a)({},e),{},{watchList:n})}},extraReducers:function(e){e.addCase(Y.pending,(function(e,t){return Object(R.a)(Object(R.a)({},e),{},{isLoading:!0})})).addCase(Y.fulfilled,(function(e,t){var n=t.payload.data;return Object(R.a)(Object(R.a)({},e),{},{data:n,isLoading:!1})}))}}),Q=K.actions.updateWatchList,X=K.reducer,Z=Object(M.combineReducers)({coins:X}),$=Object(z.composeWithDevTools)(Object(M.applyMiddleware)(q.a)),ee=Object(M.createStore)(Z,$),te=n(13),ne=U.c,ae=function(){return ne((function(e){return e.coins}))},ce=n(306),re=n(313),ie=n(136),oe=n.n(ie),se=n(137),le=n.n(se),ue=n(318),je=n(308),de=n(240),be=n(305),he=n(319),Oe=n(17),fe=n(309),me=n(299),pe=n(300),xe=n(301),ge=n(135),ve=n.n(ge),Ce=n(134),we=n.n(Ce),Pe=function(e){var t=e.isInWatchList,n=e.setInternalWatchList,c=e.item,r=c.id,i=c.name,o=c.cmc_rank,s=Object(a.useCallback)((function(){n((function(e){return t?e.filter((function(e){return e!==r})):[].concat(Object(Oe.a)(e),[r])}))}),[t,r,n]);return Object(l.jsx)(fe.a,{disablePadding:!0,secondaryAction:Object(l.jsx)(m.a,{edge:"end",onClick:s,children:t?Object(l.jsx)(we.a,{}):Object(l.jsx)(ve.a,{})}),children:Object(l.jsxs)(me.a,{children:[Object(l.jsx)(pe.a,{children:Object(l.jsx)(O.a,{children:o})}),Object(l.jsx)(xe.a,{primary:i})]})},r)},ke=c.a.memo(Pe),Le=n(304),ye=function(e){var t=e.internalWatchList,n=e.setInternalWatchList,c=ae().data,r=Object(a.useState)(""),i=Object(te.a)(r,2),o=i[0],s=i[1],u=function(e,t){var n=Object(a.useState)(e),c=Object(te.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r}(o,300),j=Object(a.useCallback)((function(e){s(e.target.value)}),[s]),d=Object(a.useMemo)((function(){return u?c.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})):c.slice(0,100)}),[c,u]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Le.a,{fullWidth:!0,label:"Coin name",value:o,onChange:j,placeholder:"Search coin"}),Object(l.jsx)(he.a,{sx:{width:"100%",minHeight:function(e){return e.spacing(40)},maxHeight:function(e){return e.spacing(40)},overflowY:"auto",marginTop:function(e){return e.spacing(2)}},children:d.map((function(e){var a=e.id;return Object(l.jsx)(ke,{item:e,isInWatchList:t.includes(a),setInternalWatchList:n},a)}))})]})},Se=c.a.memo(ye),Te=function(e){var t=e.forwardedRef,n=Object(a.useState)(!1),c=Object(te.a)(n,2),r=c[0],i=c[1],o=ae().watchList,u=function(){var e=Object(U.b)();return Object(a.useCallback)((function(t){return e(Q(t))}),[e])}(),j=Object(a.useState)(o),d=Object(te.a)(j,2),b=d[0],h=d[1];Object(a.useImperativeHandle)(t,(function(){return{isOpen:r,setIsOpen:i}}),[r,i]);var f=Object(a.useCallback)((function(){return i(!1)}),[i]),m=Object(a.useCallback)((function(){u(b),i(!1)}),[u,b]);return Object(l.jsx)(be.a,{open:r,BackdropComponent:je.a,BackdropProps:{timeout:200},children:Object(l.jsxs)(de.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:function(e){return e.spacing(60)},boxShadow:24,p:4,outline:"none"},children:[Object(l.jsx)(O.a,{variant:"h5",mb:4,children:"Add to Watch List"}),Object(l.jsx)(Se,{internalWatchList:b,setInternalWatchList:h}),Object(l.jsxs)(s.a,{mt:3,display:"flex",justifyContent:"flex-end",children:[Object(l.jsx)(ue.a,{variant:"outlined",onClick:f,children:"Cancel"}),Object(l.jsx)(ue.a,{variant:"contained",sx:{marginLeft:function(e){return e.spacing(2)}},onClick:m,children:"Done"})]})]})})},_e=c.a.memo(Te),Ne=c.a.forwardRef((function(e,t){return Object(l.jsx)(_e,Object(R.a)({forwardedRef:t},e))})),Ie=function(e){var t=e.onClick,n=e.modalRef;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(ue.a,{variant:"outlined",onClick:t,children:"ADD TO WATCH LIST"}),Object(l.jsx)(Ne,{ref:n})]})},Re=c.a.memo(Ie),Fe=function(){var e=Object(a.useRef)(null),t=Object(a.useCallback)((function(){e.current&&e.current.setIsOpen(!0)}),[]);return Object(l.jsx)(Re,{modalRef:e,onClick:t})},De=Object(S.a)((function(){return Object(T.a)({root:{flexGrow:2,overflow:"hidden"}})}),{name:"CoinCapTable"}),We=function(){var e,t=function(){var e=Object(U.b)();return Object(a.useCallback)((function(){return e(Y())}),[e])}(),n=function(){var e=ae(),t=e.data,n=e.watchList;return Object(a.useMemo)((function(){return t.filter((function(e){return n.includes(e.id)}))}),[t,n])}(),c=Object(a.useState)(0),r=Object(te.a)(c,2),i=r[0],o=r[1],u=ae(),j=u.data,d=u.isLoading,b=De();e=function(){t()},Object(a.useEffect)(e,[]);var h=Object(a.useCallback)((function(e,t){o(t)}),[o]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(s.a,{display:"flex",my:2,mr:2,justifyContent:"space-between",children:[Object(l.jsxs)(ce.a,{sx:{marginRight:function(e){return e.spacing(2)}},value:i,onChange:h,children:[Object(l.jsx)(re.a,{icon:Object(l.jsx)(oe.a,{})}),Object(l.jsx)(re.a,{icon:Object(l.jsx)(le.a,{})})]}),Object(l.jsx)(Fe,{})]}),Object(l.jsxs)(W,{currentIndex:i,className:b.root,children:[Object(l.jsx)(I,{rows:j,loading:d}),Object(l.jsx)(I,{rows:n,loading:d})]})]})},Ue=c.a.memo(We),Me=n(138),qe="#4caf50",ze="#ff3d00",Ae=Object(Me.a)({palette:{common:{green:qe,red:ze}}}),Ee=n(317),He=function(){return Object(l.jsx)(U.a,{store:ee,children:Object(l.jsx)(Ee.a,{theme:Ae,children:Object(l.jsxs)(s.a,{sx:{display:"flex",height:"100vh",flexDirection:"column"},children:[Object(l.jsx)(x,{}),Object(l.jsx)(Ue,{})]})})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,323)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(He,{})}),document.getElementById("root")),Be()},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a=100,c=[20,50,100],r=0},66:function(e,t,n){"use strict";var a=n(15),c=n(13),r=n(0),i=n.n(r),o=n(242),s=n(243),l=n(241),u=n(244),j=n(87),d=n(105),b=n(239),h=n(127),O=n.n(h),f=n(50),m=n(245),p=n(240),x=n(2),g={isLoading:!1,rowsPerPage:f.b,initialPage:f.a,rowsPerPageOptions:f.c},v=function(e){var t=e,n=t.rows,i=t.headers,h=t.isLoading,f=t.className,g=t.initialPage,v=t.rowsPerPageOptions,C=t.rowsPerPage,w=Object(r.useState)(g),P=Object(c.a)(w,2),k=P[0],L=P[1],y=Object(r.useState)(C),S=Object(c.a)(y,2),T=S[0],_=S[1],N=Object(r.useCallback)((function(e,t){L(t)}),[L]),I=Object(r.useCallback)((function(e){_(parseInt(e.target.value,10)),L(0)}),[]),R=Object(r.useMemo)((function(){return n.slice(k*T,(k+1)*T+1)}),[k,n,T]),F=Object(r.useMemo)((function(){return Math.max(0,(1+k)*T-n.length)}),[k,n.length,T]);return Object(x.jsxs)(p.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(x.jsx)(l.a,{className:f,sx:{height:0,flexGrow:2},children:Object(x.jsxs)(o.a,{stickyHeader:!0,sx:{height:"100%"},children:[Object(x.jsx)(s.a,{children:Object(x.jsx)(d.a,{children:i.map((function(e){var t=e.field,n=e.headerName,c=e.TableCellProps;return Object(x.jsx)(j.a,Object(a.a)(Object(a.a)({},c),{},{children:n}),t)}))})}),Object(x.jsxs)(u.a,{children:[R.map((function(e){return Object(x.jsx)(d.a,{children:i.map((function(t){var n=t.cellRenderer,c=t.field,r=t.path,i=t.valueFormatter,o=t.TableCellProps,s=O()(e,r,"");return n?Object(x.jsx)(j.a,Object(a.a)(Object(a.a)({},o),{},{children:n(s,e)}),c):Object(x.jsx)(j.a,Object(a.a)(Object(a.a)({},o),{},{children:i?i(s):s}),c)}))},e.id)})),F>0&&Object(x.jsx)(d.a,{sx:{height:53*F},children:Object(x.jsx)(j.a,{colSpan:i.length})})]})]})}),h?Object(x.jsx)(m.a,{sx:{position:"absolute",transform:"translate(-50%, -50%)",top:"50%",right:"50%"}}):Object(x.jsx)(b.a,{page:k,component:"div",sx:{overflow:"hidden"},count:n.length,rowsPerPage:T,rowsPerPageOptions:v,onPageChange:N,onRowsPerPageChange:I})]})};v.defaultProps=g,t.a=i.a.memo(v)}},[[234,1,2]]]);
//# sourceMappingURL=main.80bb9e74.chunk.js.map