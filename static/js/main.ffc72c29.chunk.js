(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Walter Figit","position":"CEO","email":"walter.figit@gmail.com","department":"Executive","image":"https://randomuser.me/api/portraits/men/23.jpg"},{"id":2,"name":"Puppet O\'Shannahan","position":"CFO","email":"puppet.oshannahan@gmail.com","department":"Finance","image":"https://randomuser.me/api/portraits/women/3.jpg"},{"id":3,"name":"Jiminy Bork","position":"CTO","department":"Engineering","email":"jimminy.bork@gmail.com","image":"https://randomuser.me/api/portraits/men/94.jpg"},{"id":4,"name":"Wanda Krautenhammer","position":"VP of Marketing","email":"wanda.krautenhammer","department":"Marketing","image":"https://randomuser.me/api/portraits/women/92.jpg"},{"id":5,"name":"Clifton Clift","position":"VP of Sales","email":"clifton.chaulk@gmail.com","department":"Sales","image":"https://randomuser.me/api/portraits/men/25.jpg"},{"id":6,"name":"Pauly Gingertoes","position":"Accountant","email":"pauly.gingertoes@gmail.com","department":"Finance","image":"https://randomuser.me/api/portraits/men/3.jpg"},{"id":7,"name":"Ortholax the Beheader","position":"Social Media Manager","email":"ortholax.the.beheader@gmail.com","department":"Marketing","image":"https://randomuser.me/api/portraits/men/69.jpg"},{"id":8,"name":"Fred Brut","position":"Corporate Stooge","email":"fred.brut@gmail.com","department":"Executive","image":"https://randomuser.me/api/portraits/men/26.jpg"},{"id":9,"name":"Sharkeisha Nguyen","position":"Account Executive","email":"sharkeisha.nguyen@gmail.com","department":"Sales","image":"https://randomuser.me/api/portraits/women/24.jpg"},{"id":10,"name":"Craig Randawagainsbourogh","position":"Janitor","email":"craig.r@gmail.com","department":"Custodial","image":"https://randomuser.me/api/portraits/men/40.jpg"}]')},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t(1),r=t.n(i),m=t(3),s=t.n(m),o=(t(14),t(4)),c=t(5),l=t(8),p=t(7);t(15);var d=function(e){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("img",{alt:e.name,src:e.image})}),Object(n.jsx)("div",{className:"col-2",children:e.name}),Object(n.jsx)("div",{className:"col-2",children:e.position}),Object(n.jsx)("div",{className:"col-2",children:e.department}),Object(n.jsx)("div",{className:"col-2",children:e.email})]})})};t(16);var u=function(e){return Object(n.jsx)("div",{className:"wrapper",children:e.children})};t(17);var h=function(e){return Object(n.jsx)("form",{className:"form-group",children:Object(n.jsx)("input",{className:"searchbar",placeholder:"Please Enter a Name",onChange:function(a){return e.handleSubmit(a)}})})};t(18);var j=function(e){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2",children:"Picture"}),Object(n.jsx)("div",{className:"col-2 name",onClick:function(a){return e.handleClickname(a)},children:Object(n.jsx)("p",{className:"name",children:"Name^"})}),Object(n.jsx)("div",{className:"col-2",children:"Position"}),Object(n.jsx)("div",{className:"col-2 name",onClick:function(a){return e.handleClickdepartment(a)},children:"Department^"}),Object(n.jsx)("div",{className:"col-2",children:"Email Address"})]})})};t(19);var g=function(e){return Object(n.jsx)("h1",{className:"title",children:e.children})},b=t(6),f=function(e){Object(l.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={employees:b},e.handleSubmit=function(a){var t=e.state.employees,n=a.target.value.toUpperCase(),i=t.filter((function(e){return e.name.toUpperCase().includes(n)}));e.setState({employees:i})},e.handleClickname=function(a){var t=e.state.employees.sort((function(e,a){var t=e.name.toUpperCase(),n=a.name.toUpperCase();return t<n?-1:t>n?1:0}));e.setState({employees:t})},e.handleClickdepartment=function(a){var t=e.state.employees.sort((function(e,a){var t=e.department.toUpperCase(),n=a.department.toUpperCase();return t<n?-1:t>n?1:0}));e.setState({employees:t})},e}return Object(c.a)(t,[{key:"render",value:function(){return Object(n.jsxs)(u,{children:[Object(n.jsx)(g,{children:"Employee Directory"}),Object(n.jsx)(h,{handleSubmit:this.handleSubmit}),Object(n.jsx)(j,{handleClickname:this.handleClickname,handleClickdepartment:this.handleClickdepartment}),this.state.employees.map((function(e){return Object(n.jsx)(d,{id:e.id,name:e.name,image:e.image,email:e.email,position:e.position,department:e.department},e.id)}))]})}}]),t}(i.Component);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.ffc72c29.chunk.js.map