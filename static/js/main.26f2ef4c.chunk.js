(this["webpackJsonpbeer-shop"]=this["webpackJsonpbeer-shop"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(8),r=a.n(s),l=a(3),i=a(4),o=a(6),d=a(5),j=a(0),b=function(e){return e.beers.map((function(e){return Object(j.jsxs)("div",{className:"card mb-2",style:{width:"220px"},children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("img",{src:e.image_url,className:"img-fluid p-5",alt:"."})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.name}),Object(j.jsxs)("div",{className:"card-text d-flex flex-column justify-content-between",children:[Object(j.jsxs)("small",{children:["\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f: ",e.abv,"%"]})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("small",{children:["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",e.description]})," ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("small",{children:["\u0410\u0442\u0442\u0435\u043d\u044e\u0430\u0446\u0438\u044f \u043f\u0438\u0432\u0430: ",e.attenuation_level]})," ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("small",{children:["\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ",e.contributed_by]})]})]})]},e.id)}))},u=a(2),m=function(e){var t=Object(c.useState)(""),a=Object(u.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(""),l=Object(u.a)(r,2),i=l[0],o=l[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),m=b[0],h=b[1],f=Object(c.useState)(""),O=Object(u.a)(f,2),p=O[0],x=O[1],v=Object(c.useState)(!1),N=Object(u.a)(v,2),g=N[0],y=N[1],k=function(){return 0!==n.length},C=function(){return 0!==i.length},B=function(){return!(m.length<6)},w=function(){return 0!==p.length&&!!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(p)};return Object(j.jsx)("div",{className:"modal fade",id:"registrationModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",role:"document",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("form",{className:"needs-validation",noValidate:!0,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0424\u0418\u041e",className:k()?"form-control":g?"form-control is-invalid":"form-control",value:n,onChange:function(e){s(e.target.value)},required:!0}),Object(j.jsx)("div",{class:"invalid-feedback",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0424\u0418\u041e!"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("input",{type:"date",placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",className:C()?"form-control":g?"form-control is-invalid":"form-control",value:i,onChange:function(e){o(e.target.value)},required:!0}),Object(j.jsx)("div",{class:"invalid-feedback",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0414\u0430\u0442\u0443!"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:B()?"form-control":g?"form-control is-invalid":"form-control",value:m,onChange:function(e){h(e.target.value)},required:!0}),Object(j.jsx)("div",{class:"invalid-feedback",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u041f\u0430\u0440\u043e\u043b\u044c!"})]}),Object(j.jsxs)("div",{className:"form-group mt-3",children:[Object(j.jsx)("input",{type:"email",placeholder:"Email",className:w()?"form-control":g?"form-control is-invalid":"form-control",value:p,onChange:function(e){x(e.target.value)},required:!0}),Object(j.jsx)("div",{class:"invalid-feedback",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443!"})]})]})}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",id:"closeButton",children:"Close"}),Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){y(!0),k()&&C()&&B()&&w()&&document.getElementById("closeButton").click()},children:"Save changes"})]})]})})})},h=function(e){e.term;var t=e.data,a=e.update;return Object(j.jsxs)("nav",{className:"navbar navbar-light bg-light d-flex justify-content-between",children:[Object(j.jsx)("form",{className:"form-inline",children:Object(j.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search",onChange:function(e){var c=e.target.value.toLowerCase(),n=t.filter((function(e){return e.name.toLowerCase().includes(c)}));a({beers:n,filter:c})},"aria-label":"Search"})}),Object(j.jsx)("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#registrationModal",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)(m,{})]})},f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"sort",value:function(e){var t=this.props,a=t.update,c=t.data;a({beers:[].slice.call(c).sort((function(t,a){return a[e]<t[e]?1:a[e]>t[e]?-1:0}))})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("input",{type:"radio",name:"type",value:"name",className:"form-check-input",id:"nameRB",onChange:function(){return e.sort("name")}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"nameRB",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]}),Object(j.jsxs)("div",{className:"form-check ",children:[Object(j.jsx)("input",{type:"radio",name:"type",value:"abv",className:"form-check-input",id:"abvRB",onChange:function(){return e.sort("abv")}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"abvRB",children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f"})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("input",{type:"radio",name:"type",value:"attenuation_level",className:"form-check-input",id:"attRB",onChange:function(){return e.sort("attenuation_level")}}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"attRB",children:"\u0410\u0442\u0442\u0435\u043d\u044e\u0430\u0446\u0438\u044f \u043f\u0438\u0432\u0430"})]})]})}}]),a}(c.Component),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).fetchBeers=function(){fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80").then((function(e){return e.json()})).then((function(t){e.initialData=t,e.setState({beers:e.initialData})})).catch((function(e){return console.log(e)}))},e.state={beers:[],filter:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchBeers()}},{key:"updateData",value:function(e){this.setState(e)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h,{term:this.state.filter,data:this.initialData,update:this.updateData.bind(this)}),Object(j.jsx)("h3",{className:"text-center mt-3",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(j.jsx)(f,{data:this.state.beers,update:this.updateData.bind(this)}),Object(j.jsx)("div",{className:"mt-3 d-flex justify-content-between flex-wrap m-auto",children:Object(j.jsx)(b,{beers:this.state.beers})})]})}}]),a}(c.Component);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.26f2ef4c.chunk.js.map