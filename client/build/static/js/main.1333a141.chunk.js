(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a,c,r,s=n(1),o=n.n(s),i=n(40),l=n.n(i),u=(n(130),n(7)),d=n(114),j=n(213),b=n(15),p=n(21),x=n(0),h=Object(s.createContext)(null),f=function(e){var t=e.children,n=Object(s.useState)({name:"",username:""}),a=Object(u.a)(n,2),c=a[0],r=a[1];return Object(x.jsx)(h.Provider,{value:{account:c,setAccount:r},children:t})},O=n(13),m=n(5),g=n(210),y=n(212),v=n(94),w=n.n(v),k=n(95),S=n.n(k),N=n(96),E=n.n(N),C=n(97),T=n.n(C),A=Object(m.a)(g.a)(a||(a=Object(O.a)(["\n    background: #FFFFFF;\n    color: black;\n"]))),P=Object(m.a)(y.a)(c||(c=Object(O.a)(["\n    justify-content: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    & > div > a {\n        padding: 20px;\n        color: #fff;\n        text-decoration: none;\n        font-weight: 400;\n    }\n"]))),F=function(){return Object(x.jsx)(A,{children:Object(x.jsxs)(P,{children:[Object(x.jsx)("div",{style:{position:"relative",display:"flex",alignItems:"center",alignSelf:"center"},children:Object(x.jsx)("img",{style:{height:"45px",padding:"10px"},src:"https://res.cloudinary.com/dhbyg08yc/image/upload/v1684508241/logo-fotor-bg-remover-202304179588_rh4zlh.png",alt:""})}),Object(x.jsxs)("div",{style:{paddingRight:"100px"},className:"button-86",children:[Object(x.jsx)(p.b,{to:"/",children:Object(x.jsx)("abbr",{title:"Home",children:Object(x.jsx)(w.a,{})})}),Object(x.jsx)(p.b,{to:window.location,onClick:function(){return window.open("https://github.com/20Sunny/aivana","_blank")},children:Object(x.jsx)("abbr",{title:"About",children:Object(x.jsx)(S.a,{})})}),Object(x.jsx)(p.b,{to:"/contact",children:Object(x.jsx)("abbr",{title:"Contact Us",children:Object(x.jsx)(E.a,{})})}),Object(x.jsx)(p.b,{to:"/account",children:Object(x.jsx)("abbr",{title:"Log Out",children:Object(x.jsx)(T.a,{})})})]})]})})},_=n(208),z=n(105),D=n.n(z),I=n(98),R=n.n(I),q=n(99),L=n.n(q),U=n(100),M=n.n(U),B=n(101),Y=n.n(B),W=n(102),H=n.n(W),J=[{id:1,name:"Music & Album",icon:Object(x.jsx)(R.a,{}),type:"Music"},{id:2,name:"Movie & T.V. Shows",icon:Object(x.jsx)(L.a,{}),type:"Movies"},{id:3,name:"Sports & Games",icon:Object(x.jsx)(M.a,{}),type:"Sports"},{id:4,name:"A.I. &  Tech",icon:Object(x.jsx)(Y.a,{}),type:"Tech"},{id:5,name:"Fashions & Glamour",icon:Object(x.jsx)(H.a,{}),type:"Fashion"}],G=n(104),Q=n.n(G),V=n(103),K=n.n(V),X=Object(m.a)(p.b)(r||(r=Object(O.a)(["\n    text-decoration: none;\n    color: inherit;\n"]))),Z=function(){var e=Object(p.c)(),t=Object(u.a)(e,1)[0].get("category");return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsxs)(p.b,{className:"button-86",to:"/create?category=".concat(t||""),style:{textDecoration:"none",margin:"20px 10px"},children:[Object(x.jsx)(K.a,{style:{fontSize:"20px",color:"black"}}),Object(x.jsx)(Q.a,{style:{fontSize:"40px",color:"black"}})]})}),Object(x.jsx)("div",{children:Object(x.jsx)("abbr",{title:"All Categories",style:{textDecoration:"none"},children:Object(x.jsxs)(X,{to:"/",className:"button-86 none",children:[Object(x.jsx)(D.a,{}),Object(x.jsx)("span",{children:"All Categories"})]})})}),J.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(X,{to:"/?category=".concat(e.type),className:"button-86",children:Object(x.jsxs)("abbr",{className:"none",title:e.name,children:[e.icon,Object(x.jsx)("span",{children:e.type})]})})},e.id)}))]})},$=n(16),ee=n.n($),te=n(19),ne=n(205),ae=n(106),ce={loading:{title:"Loading...",message:"Data is being loaded. Please wait"},success:{title:"Success",message:"Data successfully loaded"},requestFailure:{title:"Error!",message:"An error occur while parsing request data"},responseFailure:{title:"Error!",message:"An error occur while fetching response from server. Please try again"},networkError:{title:"Error!",message:"Unable to connect to the server. Please check internet connectivity and try again."}},re=function(e,t){return e.params?{params:t}:e.query?"object"===typeof t?{query:t._id}:{query:t}:{}},se=n.n(ae).a.create({baseURL:"http://localhost:8000",timeout:1e4,headers:{"content-type":"application/json"}});se.interceptors.request.use((function(e){return e.TYPE.params?e.params=e.TYPE.params:e.TYPE.query&&(e.url=e.url+"/"+e.TYPE.query),e}),(function(e){return Promise.reject(e)})),se.interceptors.response.use((function(e){return oe(e)}),(function(e){return Promise.reject(ie(e))}));for(var oe=function(e){return 200===(null===e||void 0===e?void 0:e.status)?{isSuccess:!0,data:e.data}:{isFailure:!0,status:null===e||void 0===e?void 0:e.status,msg:null===e||void 0===e?void 0:e.msg,code:null===e||void 0===e?void 0:e.code}},ie=function(){var e=Object(te.a)(ee.a.mark((function e(t){var n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response){e.next=9;break}if(403!==(null===(n=t.response)||void 0===n?void 0:n.status)){e.next=5;break}sessionStorage.clear(),e.next=7;break;case 5:return console.log("ERROR IN RESPONSE: ",t.toJSON()),e.abrupt("return",{isError:!0,msg:ce.responseFailure,code:t.response.status});case 7:e.next=16;break;case 9:if(!t.request){e.next=14;break}return console.log("ERROR IN RESPONSE: ",t.toJSON()),e.abrupt("return",{isError:!0,msg:ce.requestFailure,code:""});case 14:return console.log("ERROR IN RESPONSE: ",t.toJSON()),e.abrupt("return",{isError:!0,msg:ce.networkError,code:""});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le={},ue=function(){var e=Object(u.a)(je[de],2),t=e[0],n=e[1];le[t]=function(e,t,a){return se({method:n.method,url:n.url,data:"DELETE"===n.method?"":e,responseType:n.responseType,headers:{authorization:sessionStorage.getItem("accessToken")},TYPE:re(n,e),onUploadProgress:function(e){if(t){var n=Math.round(100*e.loaded/e.total);t(n)}},onDownloadProgress:function(e){if(a){var t=Math.round(100*e.loaded/e.total);a(t)}}})}},de=0,je=Object.entries({userLogin:{url:"/login",method:"POST"},userSignup:{url:"/signup",method:"POST"},getAllPosts:{url:"/posts",method:"GET",params:!0},getRefreshToken:{url:"/token",method:"POST"},uploadFile:{url:"file/upload",method:"POST"},createPost:{url:"create",method:"POST"},deletePost:{url:"delete",method:"DELETE",query:!0},getPostById:{url:"post",method:"GET",query:!0},newComment:{url:"/comment/new",method:"POST"},getAllComments:{url:"comments",method:"GET",query:!0},deleteComment:{url:"comment/delete",method:"DELETE",query:!0},updatePost:{url:"update",method:"PUT",query:!0}});de<je.length;de++)ue();var be,pe,xe,he,fe,Oe,me,ge,ye,ve,we,ke,Se,Ne,Ee,Ce,Te,Ae,Pe,Fe,_e,ze,De,Ie,Re,qe,Le,Ue,Me=n(214),Be=Object(m.a)(j.a)(be||(be=Object(O.a)(["\n    padding: 20px;\n    border: 1px solid #ffffff50;\n    border-radius: 25px;\n    background: #ffffff1c;\n    filter: drop-shadow(2px 4px 6px black);\n    box-shadow:5px 5px 10px #00000050;\n    margin: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    height: 350px;\n"]))),Ye=Object(m.a)("img")({width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0",height:150}),We=Object(m.a)(Me.a)(pe||(pe=Object(O.a)(["\n    font-size: 18px;\n"]))),He=Object(m.a)(Me.a)(xe||(xe=Object(O.a)(["\n    font-size: 14px;\n    word-break: break-word;\n"]))),Je=function(e){var t=e.post,n=t.picture?t.picture:"https://res.cloudinary.com/dhbyg08yc/image/upload/v1685015449/photo_placeholder_landscape_0_xga5uf.jpg",a=function(e,t){return e.length>t?e.substring(0,t)+"...":e};return Object(x.jsxs)(Be,{className:"width-50",children:[Object(x.jsx)("span",{className:"flag",children:t.categories}),Object(x.jsxs)("span",{className:"auther",children:["Post By -:- ",t.username]}),Object(x.jsx)(Ye,{src:n,alt:"post"}),Object(x.jsxs)("div",{className:"shadow",children:[Object(x.jsx)(We,{className:"tittle-h",style:{color:"#000"},children:a(t.title,30)}),Object(x.jsx)(He,{className:"tittle-h",children:a(t.description,100)})]})]})},Ge=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(p.c)(),r=Object(u.a)(c,1)[0].get("category");return Object(s.useEffect)((function(){(function(){var e=Object(te.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.getAllPosts({category:r||""});case 2:(t=e.sent).isSuccess&&a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(x.jsx)(x.Fragment,{children:(null===n||void 0===n?void 0:n.length)?n.map((function(e){return Object(x.jsx)(_.a,{item:!0,lg:3,sm:4,xs:12,children:Object(x.jsx)(p.b,{style:{textDecoration:"none",color:"inherit"},to:"details/".concat(e._id),children:Object(x.jsx)(Je,{post:e})})})})):Object(x.jsxs)(j.a,{style:{color:"878787",margin:"30px 80px",fontSize:18},children:["No data is available for selected category",Object(x.jsx)(ne.a,{variant:"outlined",severity:"warning",children:"This is a warning alert \u2014 check it out!"})]})})},Qe=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(_.a,{container:!0,style:{minHeight:"100vh"},children:[Object(x.jsx)(_.a,{className:"header",item:!0,lg:12,xs:12,sm:12,spacing:4,style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",paddingTop:"64px",maxHeight:"150px"},children:Object(x.jsx)(Z,{})}),Object(x.jsx)(_.a,{container:!0,xs:12,sm:12,lg:12,style:{paddingTop:"0px",margin:"0 5vw"},children:Object(x.jsx)(Ge,{})})]})})},Ve=n(30),Ke=n(3),Xe=n(215),Ze=n(27),$e=n(196),et=n(209),tt=n(197),nt=Object(m.a)(j.a)((function(e){var t=e.theme;return Object(Ke.a)({margin:"0px 100px",height:"100%",minHeight:"100vh"},t.breakpoints.down("md"),{margin:0})})),at=Object(m.a)("img")({width:"100%",height:"60vh",objectFit:"cover",borderRadius:"10px"}),ct=Object(m.a)(Xe.a)(he||(he=Object(O.a)(["\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n"]))),rt=Object(m.a)(Ze.c)(fe||(fe=Object(O.a)(["\n    flex: 1;\n    margin: 0 30px;\n    font-size: 25px;\n"]))),st=Object(m.a)($e.a)(Oe||(Oe=Object(O.a)(["\nwidth: calc(100% - 60px);\npadding: 30px;\nbackground: #ffffff1c;\nbox-shadow: 0px 0px 10px #00000050;\nborder-radius: 25px;\noverflow: auto !important;\nheight: calc(100vh - 140px) !important;\nfilter: drop-shadow(2px 4px 6px #00000050);\nborder: 1px solid #00000050;\nmargin-top: 50px;\nfont-size: 18px;\n    &:focus-visible {\n        outline: none;\n    }\n"]))),ot={title:"",description:"",picture:"",username:"",categories:"",createdDate:new Date},it=function(){var e=Object(b.h)(),t=Object(b.g)(),n=Object(s.useState)(ot),a=Object(u.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)(""),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(s.useContext)(h).account,p=c.picture?c.picture:"https://res.cloudinary.com/dhbyg08yc/image/upload/v1685015449/photo_placeholder_landscape_0_xga5uf.jpg";Object(s.useEffect)((function(){var e;(function(){var e=Object(te.a)(ee.a.mark((function e(){var t,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=8;break}return(t=new FormData).append("name",l.name),t.append("file",l),e.next=6,le.uploadFile(t);case 6:n=e.sent,c.picture=n.data;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),c.categories=(null===(e=t.search)||void 0===e?void 0:e.split("=")[1])||"All",c.username=j.username}),[l]);var f=function(){var t=Object(te.a)(ee.a.mark((function t(){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.createPost(c);case 2:e("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(e){r(Object(Ve.a)(Object(Ve.a)({},c),{},Object(Ke.a)({},e.target.name,e.target.value)))};return Object(x.jsxs)(nt,{children:[Object(x.jsxs)("div",{className:"shadow-detail",style:{justifyContent:"flex-start"},children:[Object(x.jsx)(at,{src:p,alt:"post"}),Object(x.jsx)("label",{htmlFor:"fileInput",className:"flag",children:Object(x.jsx)(tt.a,{style:{color:"#000000 !important"},fontSize:"large",color:"action"})}),Object(x.jsxs)(ct,{className:"shadow",children:[Object(x.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return d(e.target.files[0])}}),Object(x.jsx)(rt,{className:"shadow",style:{filter:"none"},onChange:function(e){return O(e)},name:"title",placeholder:"Title"}),Object(x.jsx)(et.a,{onClick:function(){return f()},className:"button-86",style:{padding:"30px",filter:"none !important"},children:"Publish"})]})]}),Object(x.jsx)(st,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:function(e){return O(e)}})]})},lt=n(109),ut=n.n(lt),dt=n(199),jt=n(198),bt=n(108),pt=n.n(bt),xt=n(62),ht=n.n(xt),ft=Object(m.a)(j.a)(me||(me=Object(O.a)(["\n    margin-top: 30px;\n    background: #ffffff1c;\n    padding: 20px;\n    border: 1px solid #ffffff50;\n    border-radius: 50px;\n    filter: drop-shadow(2px 4px 6px #00000050);\n    box-shadow: 0px 0px 10px #0000001c;\n"]))),Ot=Object(m.a)(j.a)(ge||(ge=Object(O.a)(["\n    display: flex;\n    margin-bottom: 5px;\n"]))),mt=Object(m.a)(Me.a)(ye||(ye=Object(O.a)(["\n    font-weight: 600,\n    font-size: 18px;\n    margin-right: 20px;\n"]))),gt=Object(m.a)(Me.a)(ve||(ve=Object(O.a)(["\n    font-size: 14px;\n    color: #222;\n"]))),yt=Object(m.a)(jt.a)(we||(we=Object(O.a)(["\n    margin-left: auto;\n"]))),vt=function(e){var t=e.comment,n=e.setToggle,a=Object(s.useContext)(h).account,c=function(){var e=Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.deleteComment(t._id);case 2:n((function(e){return!e}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(ft,{children:[Object(x.jsxs)(Ot,{children:[Object(x.jsx)(mt,{children:t.name}),Object(x.jsx)(gt,{children:new Date(t.date).toDateString()}),t.name===a.username&&Object(x.jsx)(yt,{style:{cursor:"pointer",background:"red",padding:"5px",border:"1px solid #fff",borderRadius:"10px",color:"#fff"},onClick:function(){return c()}})]}),Object(x.jsx)(Me.a,{style:{fontSize:"20px",color:"#fff",textTransform:"capitalize"},children:t.comments})]})},wt=Object(m.a)(Me.a)(ke||(ke=Object(O.a)(["\nfont-weight: bold;\ntext-align: center;\n    padding-bottom: 10vh;\n    font-size: 2rem;\n"]))),kt=Object(m.a)(j.a)(Se||(Se=Object(O.a)(["\n    display: flex;\n    align-items: center;\n"]))),St=Object(m.a)($e.a)(Ne||(Ne=Object(O.a)(["\n    width: 100%; \n    height: auto !important;\n    padding: 25px;\n    border-radius: 50px;\n    border: 1px solid #ffffff50;\n    box-shadow: 0px 0px 10px #0000001c;\n    background: #ffffff1c;\n    filter: drop-shadow(2px 4px 6px #00000050);\n    overflow: hidden;\n}\n"]))),Nt={name:"",postId:"",date:new Date,comments:""},Et=function(e){var t=e.post,n=Object(s.useState)(Nt),a=Object(u.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)([]),i=Object(u.a)(o,2),l=i[0],d=i[1],b=Object(s.useState)(!1),p=Object(u.a)(b,2),f=p[0],O=p[1],m=Object(s.useContext)(h).account;Object(s.useEffect)((function(){(function(){var e=Object(te.a)(ee.a.mark((function e(){var n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.getAllComments(t._id);case 2:(n=e.sent).isSuccess&&d(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f,t]);var g=m.name,y=function(){var e=Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.newComment(c);case 2:r(Nt),O((function(e){return!e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(j.a,{children:[Object(x.jsx)(wt,{children:"Write Your Feedback / Suggestion"}),Object(x.jsxs)(kt,{children:[Object(x.jsx)(St,{rowsMin:5,placeholder:"Hello! "+g+" What Is Your Though?",onChange:function(e){return function(e){r(Object(Ve.a)(Object(Ve.a)({},c),{},{name:m.username,postId:t._id,comments:e.target.value}))}(e)},value:c.comments}),Object(x.jsx)(et.a,{className:"button-86 comment-btn",style:{height:40},onClick:function(e){return y(e)},children:Object(x.jsx)(ht.a,{})})]}),Object(x.jsx)(j.a,{style:{display:"flex",flexDirection:"column-reverse"},children:l&&l.length>0&&l.map((function(e){return Object(x.jsx)(vt,{comment:e,setToggle:O})}))})]})},Ct=Object(m.a)(j.a)((function(e){var t=e.theme;return Object(Ke.a)({margin:"0px 100px"},t.breakpoints.down("md"),{margin:0})})),Tt=Object(m.a)("img")({width:"100%",height:"50vh",objectFit:"cover",borderRadius:"10px"}),At=(Object(m.a)(dt.a)(Ee||(Ee=Object(O.a)(["\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid #878787;\n    border-radius: 10px;\n"]))),Object(m.a)(jt.a)(Ce||(Ce=Object(O.a)(["\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid #878787;\n    border-radius: 10px;\n"]))),Object(m.a)(Me.a)(Te||(Te=Object(O.a)(["\n    font-size: 38px;\n    font-weight: 600;\n    text-align: center;\n    margin: 50px 0 10px 0;\n"])))),Pt=Object(m.a)(j.a)((function(e){var t=e.theme;return Object(Ke.a)({color:"#878787",display:"block",textAlign:"center",margin:"20px 0"},t.breakpoints.down("sm"),{display:"block"})})),Ft=function(){var e=Object(s.useState)({}),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(s.useContext)(h).account,r=n.picture,o=Object(b.h)(),i=Object(b.i)().id;Object(s.useEffect)((function(){(function(){var e=Object(te.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.getPostById(i);case 2:(t=e.sent).isSuccess&&a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=function(){var e=Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.deletePost(n._id);case 2:o("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(Ct,{children:[Object(x.jsxs)("div",{className:"shadow-detail",children:[Object(x.jsx)(At,{children:n.title}),Object(x.jsx)(j.a,{className:"none",style:{gap:"30px"},children:c.username===n.username&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(p.b,{className:"button-86",to:"/update/".concat(n._id),children:[Object(x.jsx)(pt.a,{style:{color:"greenyellow"}}),Object(x.jsx)("span",{style:{fontWeight:"500",color:"greenyellow"},children:"Edit"})]}),Object(x.jsxs)("button",{className:"button-86",onClick:function(){return l()},children:[Object(x.jsx)(ut.a,{}),Object(x.jsx)("span",{style:{fontWeight:"500"},children:"Delete"})]})]})}),Object(x.jsxs)(Pt,{children:[Object(x.jsxs)(Me.a,{style:{color:"#000"},children:[Object(x.jsx)("span",{style:{fontWeight:"600"},children:"Author : "}),Object(x.jsx)("span",{children:Object(x.jsx)("abbr",{title:"View All Posts From "+n.username,style:{textDecoration:"none"},children:Object(x.jsx)(p.b,{to:"/?username=".concat(n.username),style:{textDecoration:"none",color:"#000"},children:n.username})})})]}),Object(x.jsxs)(Me.a,{style:{marginLeft:"auto",color:"#000"},children:[Object(x.jsx)("span",{style:{fontWeight:"600"},children:"Posted On :"})," ",new Date(n.createdDate).toDateString()]})]}),Object(x.jsx)(Tt,{src:r||"https://res.cloudinary.com/dhbyg08yc/image/upload/v1684508241/logo-fotor-bg-remover-202304179588_rh4zlh.png",alt:"post"})]}),Object(x.jsx)("div",{className:"shadow",style:{padding:"35px",fontSize:"1.2rem",width:"auto",marginTop:"5vh"},children:Object(x.jsx)(Me.a,{children:n.description})}),Object(x.jsx)("div",{className:"shadow",style:{marginTop:"10%",padding:"5%",display:"block",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"},children:Object(x.jsx)(Et,{post:n})})]})},_t=Object(m.a)(j.a)((function(e){var t=e.theme;return Object(Ke.a)({margin:"0px 100px"},t.breakpoints.down("md"),{margin:0})})),zt=Object(m.a)("img")({width:"100%",height:"60vh",objectFit:"cover",borderRadius:"10px"}),Dt=Object(m.a)(Xe.a)(Ae||(Ae=Object(O.a)(["\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n"]))),It=Object(m.a)(Ze.c)(Pe||(Pe=Object(O.a)(["\n    flex: 1;\n    margin: 0 30px;\n    font-size: 25px;\n"]))),Rt=Object(m.a)($e.a)(Fe||(Fe=Object(O.a)(["\n    width: calc(100% - 60px);\n    padding: 30px;\n    background: #ffffff1c;\n    box-shadow: 0px 0px 10px #00000050;\n    border-radius: 25px;\n    overflow: auto !important;\n    height: calc(100vh - 140px) !important;\n    filter: drop-shadow(2px 4px 6px #00000050);\n    border: 1px solid #00000050;\n    margin-top: 50px;\n    font-size: 18px;\n    &:focus-visible {\n        outline: none;\n    }\n"]))),qt={title:"",description:"",picture:"",username:"20sunny",categories:"Tech",createdDate:new Date},Lt=function(){var e=Object(b.h)(),t=Object(s.useState)(qt),n=Object(u.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(""),o=Object(u.a)(r,2),i=o[0],l=o[1],d=Object(s.useState)(""),j=Object(u.a)(d,2),p=(j[0],j[1]),h=Object(b.i)().id;Object(s.useEffect)((function(){(function(){var e=Object(te.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.getPostById(h);case 2:(t=e.sent).isSuccess&&c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){(function(){var e=Object(te.a)(ee.a.mark((function e(){var t,n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=8;break}return(t=new FormData).append("name",i.name),t.append("file",i),e.next=6,le.uploadFile(t);case 6:(n=e.sent).isSuccess&&(a.picture=n.data,p(n.data));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var f=function(){var t=Object(te.a)(ee.a.mark((function t(){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.updatePost(a);case 2:e("/details/".concat(h));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(e){c(Object(Ve.a)(Object(Ve.a)({},a),{},Object(Ke.a)({},e.target.name,e.target.value)))};return Object(x.jsxs)(_t,{children:[Object(x.jsxs)("div",{className:"shadow-detail",style:{justifyContent:"flex-start"},children:[Object(x.jsx)(zt,{src:a.picture||"https://res.cloudinary.com/dhbyg08yc/image/upload/v1685015449/photo_placeholder_landscape_0_xga5uf.jpg",alt:"post"}),Object(x.jsx)("label",{htmlFor:"fileInput",className:"flag",children:Object(x.jsx)(tt.a,{style:{color:"#000000 !important"},fontSize:"large",color:"action"})}),Object(x.jsxs)(Dt,{className:"shadow",children:[Object(x.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return l(e.target.files[0])}}),Object(x.jsx)(It,{className:"shadow",style:{filter:"none"},onChange:function(e){return O(e)},value:a.title,name:"title",placeholder:"Title"}),Object(x.jsx)(et.a,{onClick:function(){return f()},className:"button-86",style:{padding:"30px",filter:"none !important"},children:"Update"}),Object(x.jsx)(et.a,{onClick:function(){return e("/details/".concat(h))},className:"button-86",style:{padding:"30px",filter:"none !important",color:"red"},children:"Cancel"})]})]}),Object(x.jsx)(Rt,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:function(e){return O(e)},value:a.description})]})},Ut=n(200),Mt=n(201),Bt=n(202),Yt=n(203),Wt=n(110),Ht=n.n(Wt),Jt=Object(m.a)(j.a)(_e||(_e=Object(O.a)(["\n    padding: 20px;\n    justify-content: center;\n    height:75vh;\n    display:flex;\n    margin-top:75px !important;\n    margin:auto;\n    & > h3, & > h5 {\n        margin-top: 50px;\n    }\n"]))),Gt=Object(m.a)(Me.a)(ze||(ze=Object(O.a)(["\n    color: #fff;\n"]))),Qt=function(){return Object(x.jsxs)(j.a,{className:"basic",style:{maxHeight:"100vh",height:"100%",overflow:"hidden !important"},children:[Object(x.jsxs)(Jt,{className:"shadow",children:[Object(x.jsx)("span",{className:"flag2",children:"Contact Us"}),Object(x.jsxs)("form",{id:"invisible-recaptcha-form",action:"https://usebasin.com/f/34f6b8c3154e",method:"post",style:{display:"flex",flexDirection:"column",justifyContent:"center",gap:"20px",width:"80vw"},children:[Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%",gap:"20px"},children:[Object(x.jsx)("input",{className:"input",type:"text",name:"Name",placeholder:"Full Name",required:!0,style:{width:"100%"}}),Object(x.jsx)("input",{className:"input",type:"email",placeholder:"E-mail",name:"email",id:"",required:!0,style:{width:"100%"}})]}),Object(x.jsx)("input",{className:"input",type:"text",placeholder:"Subject",required:!0}),Object(x.jsx)("textarea",{className:"input",name:"message",id:"message",placeholder:"Message",required:!0,style:{height:"25vh"}}),Object(x.jsx)("div",{class:"g-recaptcha","data-sitekey":"6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"}),Object(x.jsx)("button",{className:"button-86 g-recaptcha","data-sitekey":"6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy","data-callback":"onSubmit","data-badge":"inline",type:"submit",id:"submit-btn",style:{width:"25%",margin:"auto"},children:Object(x.jsx)("abbr",{title:"Send",children:Object(x.jsx)(ht.a,{})})})]})]}),Object(x.jsx)("div",{className:"footer",children:Object(x.jsxs)("div",{className:"shadow over",children:[Object(x.jsx)(Gt,{children:"Follow Us"}),Object(x.jsx)("a",{href:"https://20sunny.netlify.app",target:"_blank",style:{color:"#fff"},children:Object(x.jsx)("abbr",{title:"Portfolio",children:Object(x.jsx)(Ut.a,{})})}),Object(x.jsx)("a",{href:"https://www.linkedin.com/in/20sunny",target:"_blank",style:{color:"#fff"},children:Object(x.jsx)("abbr",{title:"LinkedIn",children:Object(x.jsx)(Ht.a,{})})}),Object(x.jsx)("a",{href:"https://github.com/20Sunny",target:"_blank",style:{color:"#fff"},children:Object(x.jsx)("abbr",{title:"Github",children:Object(x.jsx)(Mt.a,{})})}),Object(x.jsx)("a",{href:"mailto:sunnysharma7601@gmail.com",target:"_blank",style:{color:"#fff"},children:Object(x.jsx)("abbr",{title:"E-mail",children:Object(x.jsx)(Bt.a,{})})}),Object(x.jsx)("a",{href:"https://www.instagram.com/sharma_sunny_7601",target:"_blank",style:{color:"#fff"},children:Object(x.jsx)("abbr",{title:"Instagram",children:Object(x.jsx)(Yt.a,{})})})]})})]})},Vt=n(111),Kt=n.n(Vt),Xt=n(204),Zt=n(78),$t=n.n(Zt),en=n(112),tn=n.n(en),nn=Object(m.a)(j.a)(De||(De=Object(O.a)(["\n  width: 400px;\n  border-radius: 25px;\n  margin: auto;\n  box-shadow: 0px 0px 10px #00000050;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(2px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  filter: drop-shadow(2px 4px 6px black);\n"]))),an=Object(m.a)("img")({width:150,display:"flex",margin:"auto",padding:"50px 0 0"}),cn=Object(m.a)(j.a)(Ie||(Ie=Object(O.a)(["\n  padding: 25px 35px;\n  display: flex;\n  flex: 1;\n  overflow: auto;\n  flex-direction: column;\n  & > div,\n  & > button,\n  & > p {\n    margin-top: 20px;\n  }\n"]))),rn=Object(m.a)(et.a)(Re||(Re=Object(O.a)(["\n  text-transform: none;\n  background: #fb641b;\n  color: #fff;\n  height: 48px;\n  border-radius: 25px;\n  all: unset;\n  height: 30px;\n  font-size: 16px;\n  background: transparent;\n  border: none;\n  position: relative;\n  color: #f0f0f0;\n  cursor: pointer;\n  z-index: 1;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  -moz-user-select: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n"]))),sn=Object(m.a)(et.a)(qe||(qe=Object(O.a)(["\n  text-transform: none;\n  background: #fb641b;\n  color: #fff;\n  height: 48px;\n  border-radius: 25px;\n  all: unset;\n  height: 30px;\n  font-size: 16px;\n  background: transparent;\n  border: none;\n  position: relative;\n  color: #f0f0f0;\n  cursor: pointer;\n  z-index: 1;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  -moz-user-select: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n"]))),on=Object(m.a)(Me.a)(Le||(Le=Object(O.a)(["\n  color: #878787;\n  font-size: 12px;\n"]))),ln=Object(m.a)(Me.a)(Ue||(Ue=Object(O.a)(["\n  font-size: 10px;\n  color: #ff6161;\n  line-height: 0;\n  margin-top: 10px;\n  font-weight: 600;\n"]))),un={username:"",password:""},dn={name:"",username:"",password:""},jn=function(e){var t=e.isUserAuthenticated,n=Object(s.useState)(un),a=Object(u.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)(dn),i=Object(u.a)(o,2),l=i[0],d=i[1],p=Object(s.useState)(""),f=Object(u.a)(p,2),O=f[0],m=f[1],g=Object(s.useState)("login"),y=Object(u.a)(g,2),v=y[0],w=y[1],k=Object(b.h)(),S=Object(s.useContext)(h).setAccount;Object(s.useEffect)((function(){m(!1)}),[c]);var N=function(e){r(Object(Ve.a)(Object(Ve.a)({},c),{},Object(Ke.a)({},e.target.name,e.target.value)))},E=function(e){d(Object(Ve.a)(Object(Ve.a)({},l),{},Object(Ke.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(te.a)(ee.a.mark((function e(){var n;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.userLogin(c);case 2:(n=e.sent).isSuccess?(m(""),sessionStorage.setItem("accessToken","Bearer ".concat(n.data.accessToken)),sessionStorage.setItem("refreshToken","Bearer ".concat(n.data.refreshToken)),S({name:n.data.name,username:n.data.username}),t(!0),r(un),k("/")):m("Something went wrong! please try again later");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(te.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.userSignup(l);case 2:e.sent.isSuccess?(m(""),d(dn),w("login")):m("Something went wrong! please try again later");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){w("signup"===v?"login":"signup")};return Object(x.jsx)(j.a,{style:{display:"flex",height:"100vh"},children:Object(x.jsx)(nn,{children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(an,{src:"https://res.cloudinary.com/dhbyg08yc/image/upload/v1684508241/logo-fotor-bg-remover-202304179588_rh4zlh.png",alt:"blog"}),"login"===v?Object(x.jsxs)(cn,{children:[Object(x.jsx)("h2",{className:"flag",style:{textAlign:"center",fontWeight:"400",top:"0%"},children:"Log In"}),Object(x.jsx)(Xt.a,{variant:"outlined",value:c.username,onChange:function(e){return N(e)},name:"username",label:"Enter Username",focused:!0}),Object(x.jsx)(Xt.a,{variant:"outlined",value:c.password,onChange:function(e){return N(e)},type:"password",name:"password",label:"Enter Password",focused:!0}),O&&Object(x.jsx)(ln,{children:O}),Object(x.jsx)(rn,{className:"button-86",onClick:function(){return C()},children:Object(x.jsxs)("abbr",{title:"Log In",children:[" ",Object(x.jsx)(Kt.a,{})]})}),Object(x.jsx)(on,{style:{textAlign:"center",color:"#000"},children:"OR"}),Object(x.jsx)(sn,{className:"button-86",onClick:function(){return A()},style:{marginBottom:50},children:Object(x.jsx)("abbr",{title:"Create New Account",children:Object(x.jsx)($t.a,{})})})]}):Object(x.jsxs)(cn,{children:[Object(x.jsx)("h2",{className:"flag",style:{textAlign:"center",fontWeight:"400",top:"0%"},children:"Sign Up"}),Object(x.jsx)(Xt.a,{variant:"outlined",onChange:function(e){return E(e)},type:"username",name:"username",label:"Enter Username",focused:!0}),Object(x.jsx)(Xt.a,{variant:"outlined",onChange:function(e){return E(e)},type:"name",name:"name",label:"Enter Full Name",focused:!0}),Object(x.jsx)(Xt.a,{variant:"outlined",onChange:function(e){return E(e)},name:"password",label:"Enter Password",focused:!0}),Object(x.jsx)(sn,{className:"button-86",onClick:function(){return T()},children:Object(x.jsx)("abbr",{title:"Create Account",children:Object(x.jsx)($t.a,{})})}),Object(x.jsx)(on,{style:{textAlign:"center",color:"#000"},children:"OR"}),Object(x.jsx)(rn,{className:"button-86",onClick:function(){return A()},children:Object(x.jsx)("abbr",{title:"Already Have An Account",children:Object(x.jsx)(tn.a,{})})})]})]})})})},bn=["isAuthenticated"],pn=function(e){var t=e.isAuthenticated,n=(Object(d.a)(e,bn),sessionStorage.getItem("accessToken"));return t&&n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(F,{}),Object(x.jsx)(b.b,{})]}):Object(x.jsx)(b.a,{replace:!0,to:"/account"})};var xn=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(x.jsx)(f,{children:Object(x.jsx)(p.a,{children:Object(x.jsx)(j.a,{style:{height:"100%"},children:Object(x.jsxs)(b.e,{children:[Object(x.jsx)(b.c,{path:"/account",element:Object(x.jsx)(jn,{isUserAuthenticated:a})}),Object(x.jsx)(b.c,{path:"/",element:Object(x.jsx)(pn,{isAuthenticated:n}),children:Object(x.jsx)(b.c,{path:"/",element:Object(x.jsx)(Qe,{})})}),Object(x.jsx)(b.c,{path:"/create",element:Object(x.jsx)(pn,{isAuthenticated:n}),children:Object(x.jsx)(b.c,{path:"/create",element:Object(x.jsx)(it,{})})}),Object(x.jsx)(b.c,{path:"/details/:id",element:Object(x.jsx)(pn,{isAuthenticated:n}),children:Object(x.jsx)(b.c,{path:"/details/:id",element:Object(x.jsx)(Ft,{})})}),Object(x.jsx)(b.c,{path:"/update/:id",element:Object(x.jsx)(pn,{isAuthenticated:n}),children:Object(x.jsx)(b.c,{path:"/update/:id",element:Object(x.jsx)(Lt,{})})}),Object(x.jsx)(b.c,{path:"/contact",element:Object(x.jsx)(pn,{isAuthenticated:n}),children:Object(x.jsx)(b.c,{path:"/contact",element:Object(x.jsx)(Qt,{})})})]})})})})},hn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};l.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(xn,{})}),document.getElementById("root")),hn()}},[[154,1,2]]]);
//# sourceMappingURL=main.1333a141.chunk.js.map