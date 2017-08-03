webpackJsonp([0],[,function(t,e,i){function s(t){i(23)}var o=i(0)(i(9),i(37),s,null,null);t.exports=o.exports},,function(t,e,i){"use strict";var s=i(4),o=i.n(s);e.a={fetch:function(){return JSON.parse(window.localStorage.getItem("jasery")||"[]")},save:function(t){window.localStorage.setItem("jasery",o()(t))}}},,function(t,e,i){"use strict";var s=i(2),o=i(40),n=i(31),a=i.n(n),r=i(30),l=i.n(r);s.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"TodoList",component:a.a},{path:"/add",name:"TodoAdd",component:l.a},{path:"/edit/:id",name:"TodoEdit",component:l.a}]})},function(t,e,i){function s(t){i(18)}var o=i(0)(i(7),i(32),s,null,null);t.exports=o.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"DetailItem",props:["detail"],data:function(){return{}},methods:{remove:function(t){this.$emit("remove",t)}},watch:{}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Shade",data:function(){return{}},methods:{shadeClick:function(){this.$emit("shadeClick")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TodoItem",data:function(){return{}},computed:{markStateText:function(){return this.todoItem.isCompleted?"标记为未完成":"标记为已完成"}},props:["todoItem"],methods:{remove:function(t){this.$emit("remove",t)},edit:function(t){this.$router.push("/edit/"+t)},toggleCompleteState:function(t){t.isCompleted=!t.isCompleted}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1),o=i.n(s);e.default={name:"FilterSort",props:["text"],components:{Shade:o.a},data:function(){return{isShowFilter:!1,isShowSort:!1,filterText:"未完成清单",sortText:"按更新时间排序",filterTexts:{all:"全部清单",notCompleted:"未完成清单",isCompleted:"已完成清单"},sortTexts:{title:"按名称排序",createTime:"按创建时间排序",updateTime:"按更新时间排序"}}},mounted:function(){this.$emit("sort","updateTime"),this.$emit("filter","notCompleted")},methods:{toggleFilter:function(){this.isShowSort=!1,this.isShowFilter=!this.isShowFilter},toggleSort:function(){this.isShowFilter=!1,this.isShowSort=!this.isShowSort},sort:function(t){this.sortText=this.sortTexts[t],this.$emit("sort",t)},filter:function(t){this.filterText=this.filterTexts[t],this.$emit("filter",t)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TodoAddLink",data:function(){return{}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),o=i.n(s),n=i(26),a=i.n(n),r=i(1),l=i.n(r),d=i(3);e.default={name:"TodoContent",components:{DetailItem:a.a,Shade:l.a},data:function(){return{detailCount:1,editItem:null,isShowShade:!1,todoTitle:"",details:[{id:0,isComplete:!1,detailText:""}],todoList:{}}},methods:{clearInput:function(){this.todoTitle=""},addDetailItem:function(){this.details.push({id:this.detailCount,isComplete:!1,detailText:""}),this.detailCount++},removeDetailItem:function(t){var e=this.details.indexOf(t);this.details.splice(e,1)},detailSave:function(){if(!this.todoTitle)return void(this.isShowShade=!0);if(this.editItem)this.editItem.title=this.todoTitle,this.editItem.items=this.details.filter(function(t){return t.detailText}),this.editItem.updateTime=this.getDateString(),this.editItem.isCompleted=!1;else{this.details=this.details.filter(function(t){return t.detailText});var t=this.getMaxId(this.todoList)+1,e={id:t,createTime:this.getDateString(),updateTime:this.getDateString(),title:this.todoTitle,items:this.details,isCompleted:!1};this.todoList.push(e)}d.a.save(this.todoList),this.$router.push("/")},hideShade:function(){this.isShowShade=!1},getMaxId:function(t){if(0==t.length)return 1;var e=t[0].id;return t.forEach(function(t){return t.id>e?e=t.id:e}),e},getDateString:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1;i=i>=10?i:"0"+i;var s=t.getDate();s=s>=10?s:"0"+s;var o=t.getHours();o=o>=10?o:"0"+o;var n=t.getMinutes();n=n>=10?n:"0"+n;var a=t.getSeconds();return a=a>=10?a:"0"+a,e+"-"+i+"-"+s+" "+o+":"+n+":"+a}},mounted:function(){var t=this;if(this.todoList=d.a.fetch(),this.$route.params.id){var e=this.todoList.find(function(e){return e.id==t.$route.params.id});e&&(this.todoTitle=e.title,this.details=JSON.parse(o()(e.items)),this.editItem=e,this.detailCount=this.getMaxId(e.items)+1)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(28),o=i.n(s),n=i(29),a=i.n(n),r=i(27),l=i.n(r),d=i(1),c=i.n(d),u=i(3);e.default={name:"TodoList",components:{FilterSort:o.a,TodoItem:l.a,TodoAddLink:a.a,Shade:c.a},data:function(){return{todoList:[],displayList:[],sortType:"",filterType:""}},mounted:function(){this.todoList=u.a.fetch(),this.displayList=this.todoList},methods:{removeTodoItem:function(t){var e=this.todoList.indexOf(t);this.todoList.splice(e,1)},changeFilter:function(t){this.filterType=t,"all"==t?this.displayList=this.todoList.slice():"isCompleted"==t?this.displayList=this.todoList.filter(function(t){return t.isCompleted}):"notCompleted"==t&&(this.displayList=this.todoList.filter(function(t){return!t.isCompleted}))},changeSort:function(t){this.sortType=t,"createTime"==t?this.displayList.sort(function(t,e){return t.createTime.localeCompare(e.createTime)}):"updateTime"==t?this.displayList.sort(function(t,e){return t.updateTime.localeCompare(e.updateTime)}):"title"==t&&this.displayList.sort(function(t,e){return t.title.localeCompare(e.title)})},updateDisplayList:function(){this.changeFilter(this.filterType),this.changeSort(this.sortType)}},watch:{todoList:{handler:function(t,e){this.updateDisplayList(),u.a.save(t)},deep:!0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2),o=i(6),n=i.n(o),a=i(5);s.a.config.productionTip=!1,new s.a({el:"#app",router:a.a,template:"<App/>",components:{App:n.a}})},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){function s(t){i(20)}var o=i(0)(i(8),i(34),s,null,null);t.exports=o.exports},function(t,e,i){function s(t){i(22)}var o=i(0)(i(10),i(36),s,null,null);t.exports=o.exports},function(t,e,i){function s(t){i(19)}var o=i(0)(i(11),i(33),s,null,null);t.exports=o.exports},function(t,e,i){function s(t){i(24)}var o=i(0)(i(12),i(38),s,null,null);t.exports=o.exports},function(t,e,i){function s(t){i(25)}var o=i(0)(i(13),i(39),s,null,null);t.exports=o.exports},function(t,e,i){function s(t){i(21)}var o=i(0)(i(14),i(35),s,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"title"},[t._v("微清单")]),t._v(" "),i("div",{staticClass:"g-content"},[i("router-view")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filter-sort"},[i("div",{staticClass:"filter",on:{click:t.toggleFilter}},[i("div",{staticClass:"filter-sort-text"},[i("span",{domProps:{textContent:t._s(t.filterText)}})]),t._v(" "),i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i("shade",{directives:[{name:"show",rawName:"v-show",value:t.isShowFilter,expression:"isShowFilter"}]},[i("ul",[i("li",{on:{click:function(e){t.filter("all")}}},[t._v(t._s(t.filterTexts.all))]),t._v(" "),i("li",{on:{click:function(e){t.filter("notCompleted")}}},[t._v(t._s(t.filterTexts.notCompleted))]),t._v(" "),i("li",{on:{click:function(e){t.filter("isCompleted")}}},[t._v(t._s(t.filterTexts.isCompleted))])])])],1)],1),t._v(" "),i("div",{staticClass:"sort",on:{click:t.toggleSort}},[i("div",{staticClass:"filter-sort-text"},[i("span",{domProps:{textContent:t._s(t.sortText)}})]),t._v(" "),i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i("shade",{directives:[{name:"show",rawName:"v-show",value:t.isShowSort,expression:"isShowSort"}]},[i("ul",[i("li",{on:{click:function(e){t.sort("title")}}},[t._v(t._s(t.sortTexts.title))]),t._v(" "),i("li",{on:{click:function(e){t.sort("createTime")}}},[t._v(t._s(t.sortTexts.createTime))]),t._v(" "),i("li",{on:{click:function(e){t.sort("updateTime")}}},[t._v(t._s(t.sortTexts.updateTime))])])])],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-item"},[i("div",{staticClass:"detail-content"},[i("div",{staticClass:"isCompleted"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.isCompleted,expression:"detail.isCompleted"}],attrs:{id:"isCompleted-"+t.detail.id,type:"checkbox"},domProps:{checked:Array.isArray(t.detail.isCompleted)?t._i(t.detail.isCompleted,null)>-1:t.detail.isCompleted},on:{__c:function(e){var i=t.detail.isCompleted,s=e.target,o=!!s.checked;if(Array.isArray(i)){var n=t._i(i,null);o?n<0&&(t.detail.isCompleted=i.concat(null)):n>-1&&(t.detail.isCompleted=i.slice(0,n).concat(i.slice(n+1)))}else t.detail.isCompleted=o}}}),t._v(" "),i("label",{attrs:{for:"isCompleted-"+t.detail.id}})]),t._v(" "),i("div",{staticClass:"detail-text"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.detailText,expression:"detail.detailText"}],attrs:{type:"text",placeholder:"点击编辑"},domProps:{value:t.detail.detailText},on:{input:function(e){e.target.composing||(t.detail.detailText=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"item-remove",on:{click:function(e){t.remove(t.detail)}}},[t._v("删除")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("filter-sort",{on:{filter:t.changeFilter,sort:t.changeSort}}),t._v(" "),i("div",{staticClass:"content"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown"}},t._l(t.displayList,function(e){return i("todo-item",{key:"todo-item-"+e.id,attrs:{todoItem:e},on:{remove:t.removeTodoItem}})}))],1),t._v(" "),i("todo-add-link")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-item-container"},[i("div",{staticClass:"todo-item",on:{click:function(e){t.edit(t.todoItem.id)}}},[i("div",{staticClass:"todo-content"},[i("p",{class:["todo-title",{isCompleted:t.todoItem.isCompleted}]},[t._v(t._s(t.todoItem.title))]),t._v(" "),i("p",{staticClass:"todo-time"},[t._v(t._s(t.todoItem.updateTime))])]),t._v(" "),i("div",{staticClass:"mark-completed",on:{click:function(e){e.stopPropagation(),t.toggleCompleteState(t.todoItem)}}},[t._v(t._s(t.markStateText))]),t._v(" "),i("div",{staticClass:"remove",on:{click:function(e){e.stopPropagation(),t.remove(t.todoItem)}}},[t._v("删除")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shade",on:{click:t.shadeClick}},[i("div",{staticClass:"shade-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-add-link"},[i("router-link",{attrs:{to:"/add"}},[t._v("+")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-add"},[i("div",{staticClass:"todo-title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.todoTitle,expression:"todoTitle"}],attrs:{placeholder:"未命名清单"},domProps:{value:t.todoTitle},on:{input:function(e){e.target.composing||(t.todoTitle=e.target.value)}}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.todoTitle,expression:"todoTitle"}],staticClass:"clear-input",on:{click:t.clearInput}},[t._v("×")])]),t._v(" "),i("div",{staticClass:"todo-detail"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutRight"}},t._l(t.details,function(e,s){return i("detail-item",{key:"detail-"+e.id,attrs:{detail:e},on:{"update:detail":function(t){e=t},remove:t.removeDetailItem}})})),t._v(" "),i("div",{staticClass:"add-detail-item",on:{click:t.addDetailItem}},[t._v("\n            添加事项\n        ")])],1),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:this.todoTitle||this.details.length>0,expression:"this.todoTitle || this.details.length > 0"}],staticClass:"detail-save",on:{click:t.detailSave}},[t._v("保存")]),t._v(" "),i("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i("shade",{directives:[{name:"show",rawName:"v-show",value:t.isShowShade,expression:"isShowShade"}],on:{shadeClick:t.hideShade}},[i("div",{staticClass:"err-tip"},[i("p",{staticClass:"err-title"},[t._v("提示")]),t._v(" "),i("p",{staticClass:"err-msg"},[t._v("请输入清单标题")]),t._v(" "),i("p",{staticClass:"err-confirm"},[t._v("确定")])])])],1)],1)},staticRenderFns:[]}}],[15]);
//# sourceMappingURL=app.f5a0c8b45ad125baac09.js.map