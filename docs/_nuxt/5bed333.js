(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{333:function(t,e,o){var content=o(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("eb8e9102",content,!0,{sourceMap:!1})},473:function(t,e,o){"use strict";o(333)},474:function(t,e,o){var n=o(61)((function(i){return i[1]}));n.push([t.i,".category-select .category-options[data-v-5c1abc0e]{background-color:#fff;border:1px solid #ced4da;display:flex;flex-wrap:wrap;justify-content:space-around;margin-left:5px;margin-top:5px;max-width:100px;padding:.3em;position:absolute}.category-select .category-options button[data-v-5c1abc0e]{border:2px solid rgba(0,0,0,.11)}",""]),n.locals={},t.exports=n},481:function(t,e,o){"use strict";o.r(e);var n={name:"AddNewItem",props:["categories"],data:function(){return{activeColor:"red",newItem:{category:"0",price:""},showCategoryDropdown:!1}},methods:{clearInput:function(){this.newItem.category="0",this.newItem.price=""},addCategory:function(t){this.newItem.category=t},addItem:function(){this.$emit("add-item",this.newItem),this.clearInput()}},mounted:function(){var t=this;document.body.addEventListener("click",(function(e){t.showCategoryDropdown=!1})),document.body.addEventListener("keyup",(function(e){"Escape"==e.key&&(t.showCategoryDropdown=!1)}))}},r=(o(473),o(43)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.addItem.apply(null,arguments)}}},[e("div",{staticClass:"d-flex align-items-center mt-3 category-select"},[e("div",{staticClass:"category-select"},[e("button",{staticClass:"btn btn-secondary rounded-circle mx-2",style:[""!==t.newItem.category?{backgroundColor:t.categories[t.newItem.category].color,borderColor:t.categories[t.newItem.category].color}:null],on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.showCategoryDropdown=!t.showCategoryDropdown},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showCategoryDropdown=!1}}},[e("i",{staticClass:"fas fa-plus"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCategoryDropdown,expression:"showCategoryDropdown"}],staticClass:"category-options rounded",on:{click:function(t){t.stopPropagation()}}},t._l(t.categories,(function(o,n){return e("button",{key:n,staticClass:"category-option",style:"background-color: ".concat(o.color),on:{click:function(e){return e.preventDefault(),t.addCategory(n)}}})})),0)]),t._v(" "),e("div",{staticClass:"input-group"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.price,expression:"newItem.price"}],staticClass:"form-control rounded-right",attrs:{type:"number","aria-label":"Amount",step:"0.01",required:""},domProps:{value:t.newItem.price},on:{input:function(e){e.target.composing||t.$set(t.newItem,"price",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-link text-muted",on:{click:function(e){return e.preventDefault(),t.clearInput.apply(null,arguments)}}},[e("i",{staticClass:"fas fa-times"})])]),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text rounded-left"},[this._v("$")])])},function(){var t=this._self._c;return t("p",{staticClass:"text-right"},[t("button",{staticClass:"btn btn-outline-secondary btn-block mt-3",attrs:{type:"submit"}},[t("i",{staticClass:"fas fa-plus"}),this._v(" Add Item")])])}],!1,null,"5c1abc0e",null);e.default=component.exports}}]);