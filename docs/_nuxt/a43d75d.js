(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{332:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("73273adc",content,!0,{sourceMap:!1})},334:function(t,e,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("352026be",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n(332)},336:function(t,e,n){var o=n(61)((function(i){return i[1]}));o.push([t.i,".card[data-v-3dd69ed2] .card-header{border-bottom:0;border-radius:calc(.25rem - 1px)}.card[data-v-3dd69ed2] .card-header button{border-radius:3px}.card[data-v-3dd69ed2] .card-header button.not-collapsed i{transform:rotate(180deg)}.card[data-v-3dd69ed2] .card-body .category-color{border-radius:100%;height:1em;width:1em}",""]),o.locals={},t.exports=o},472:function(t,e,n){"use strict";n.r(e);n(25),n(1),n(3),n(11),n(19),n(138);var o={name:"PastSalesData",props:["index","transaction","categories"],computed:{categorizedTransactionCombined:function(){for(var t=[],i=0;i<this.categories.length;i++)t.push({amount:0,quantity:0});return this.transaction.forEach((function(e){t[e.category].amount+=parseFloat(e.price),t[e.category].quantity+=1})),t},categorizedTransactionTotal:function(){return{amount:this.transaction.reduce((function(t,i){return t+parseFloat(i.price)}),0),quantity:this.transaction.length}}},filters:{toPrice:function(t){return"$"+t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}}},r=(n(335),n(43)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.transaction.length?e("b-card",{staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-0 bg-white",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+t.index,expression:"'accordion-' + index"}],staticClass:"text-left text-dark text-decoration-none d-flex align-items-center",attrs:{block:"",variant:"link"}},[e("span",[t._v(t._s(t._f("toPrice")(t.categorizedTransactionTotal.amount))+" "),e("small",{staticClass:"text-secondary"},[t._v(t._s(t.categorizedTransactionTotal.quantity)+" items sold")])]),t._v(" "),e("i",{staticClass:"fas fa-caret-down text-secondary ml-auto"})])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-".concat(t.index),accordion:"my-accordion",role:"tabpanel"}},[e("b-card-body",{staticClass:"px-3 pb-3 pt-1"},[e("div",{staticClass:"d-flex flex-wrap"},t._l(t.categorizedTransactionCombined,(function(n,o){return e("div",{key:o,staticClass:"align-items-center mr-3",class:n.amount>0?"d-flex":"d-none"},[e("div",{staticClass:"category-color mr-2",style:"background-color: ".concat(t.categories[o].color)}),t._v(" "),e("div",[e("span",{staticClass:"d-none app-print-inline"},[t._v(t._s(t.categories[o].name)+":")]),t._v(" "+t._s(t._f("toPrice")(n.amount))+" ("+t._s(n.quantity)+")")])])})),0)])],1)],1):t._e()}),[],!1,null,"3dd69ed2",null);e.default=component.exports},475:function(t,e,n){"use strict";n(334)},476:function(t,e,n){var o=n(61)((function(i){return i[1]}));o.push([t.i,".gst-btn-group button[data-v-527270df]{border-radius:0;flex:1 1 auto}.gst-btn-group button[data-v-527270df]:first-child{border-top-left-radius:.2rem}.gst-btn-group button[data-v-527270df]:last-child{border-top-right-radius:.2rem}",""]),o.locals={},t.exports=o},479:function(t,e,n){var map={"./af":337,"./af.js":337,"./ar":338,"./ar-dz":339,"./ar-dz.js":339,"./ar-kw":340,"./ar-kw.js":340,"./ar-ly":341,"./ar-ly.js":341,"./ar-ma":342,"./ar-ma.js":342,"./ar-sa":343,"./ar-sa.js":343,"./ar-tn":344,"./ar-tn.js":344,"./ar.js":338,"./az":345,"./az.js":345,"./be":346,"./be.js":346,"./bg":347,"./bg.js":347,"./bm":348,"./bm.js":348,"./bn":349,"./bn-bd":350,"./bn-bd.js":350,"./bn.js":349,"./bo":351,"./bo.js":351,"./br":352,"./br.js":352,"./bs":353,"./bs.js":353,"./ca":354,"./ca.js":354,"./cs":355,"./cs.js":355,"./cv":356,"./cv.js":356,"./cy":357,"./cy.js":357,"./da":358,"./da.js":358,"./de":359,"./de-at":360,"./de-at.js":360,"./de-ch":361,"./de-ch.js":361,"./de.js":359,"./dv":362,"./dv.js":362,"./el":363,"./el.js":363,"./en-au":364,"./en-au.js":364,"./en-ca":365,"./en-ca.js":365,"./en-gb":366,"./en-gb.js":366,"./en-ie":367,"./en-ie.js":367,"./en-il":368,"./en-il.js":368,"./en-in":369,"./en-in.js":369,"./en-nz":370,"./en-nz.js":370,"./en-sg":371,"./en-sg.js":371,"./eo":372,"./eo.js":372,"./es":373,"./es-do":374,"./es-do.js":374,"./es-mx":375,"./es-mx.js":375,"./es-us":376,"./es-us.js":376,"./es.js":373,"./et":377,"./et.js":377,"./eu":378,"./eu.js":378,"./fa":379,"./fa.js":379,"./fi":380,"./fi.js":380,"./fil":381,"./fil.js":381,"./fo":382,"./fo.js":382,"./fr":383,"./fr-ca":384,"./fr-ca.js":384,"./fr-ch":385,"./fr-ch.js":385,"./fr.js":383,"./fy":386,"./fy.js":386,"./ga":387,"./ga.js":387,"./gd":388,"./gd.js":388,"./gl":389,"./gl.js":389,"./gom-deva":390,"./gom-deva.js":390,"./gom-latn":391,"./gom-latn.js":391,"./gu":392,"./gu.js":392,"./he":393,"./he.js":393,"./hi":394,"./hi.js":394,"./hr":395,"./hr.js":395,"./hu":396,"./hu.js":396,"./hy-am":397,"./hy-am.js":397,"./id":398,"./id.js":398,"./is":399,"./is.js":399,"./it":400,"./it-ch":401,"./it-ch.js":401,"./it.js":400,"./ja":402,"./ja.js":402,"./jv":403,"./jv.js":403,"./ka":404,"./ka.js":404,"./kk":405,"./kk.js":405,"./km":406,"./km.js":406,"./kn":407,"./kn.js":407,"./ko":408,"./ko.js":408,"./ku":409,"./ku.js":409,"./ky":410,"./ky.js":410,"./lb":411,"./lb.js":411,"./lo":412,"./lo.js":412,"./lt":413,"./lt.js":413,"./lv":414,"./lv.js":414,"./me":415,"./me.js":415,"./mi":416,"./mi.js":416,"./mk":417,"./mk.js":417,"./ml":418,"./ml.js":418,"./mn":419,"./mn.js":419,"./mr":420,"./mr.js":420,"./ms":421,"./ms-my":422,"./ms-my.js":422,"./ms.js":421,"./mt":423,"./mt.js":423,"./my":424,"./my.js":424,"./nb":425,"./nb.js":425,"./ne":426,"./ne.js":426,"./nl":427,"./nl-be":428,"./nl-be.js":428,"./nl.js":427,"./nn":429,"./nn.js":429,"./oc-lnc":430,"./oc-lnc.js":430,"./pa-in":431,"./pa-in.js":431,"./pl":432,"./pl.js":432,"./pt":433,"./pt-br":434,"./pt-br.js":434,"./pt.js":433,"./ro":435,"./ro.js":435,"./ru":436,"./ru.js":436,"./sd":437,"./sd.js":437,"./se":438,"./se.js":438,"./si":439,"./si.js":439,"./sk":440,"./sk.js":440,"./sl":441,"./sl.js":441,"./sq":442,"./sq.js":442,"./sr":443,"./sr-cyrl":444,"./sr-cyrl.js":444,"./sr.js":443,"./ss":445,"./ss.js":445,"./sv":446,"./sv.js":446,"./sw":447,"./sw.js":447,"./ta":448,"./ta.js":448,"./te":449,"./te.js":449,"./tet":450,"./tet.js":450,"./tg":451,"./tg.js":451,"./th":452,"./th.js":452,"./tk":453,"./tk.js":453,"./tl-ph":454,"./tl-ph.js":454,"./tlh":455,"./tlh.js":455,"./tr":456,"./tr.js":456,"./tzl":457,"./tzl.js":457,"./tzm":458,"./tzm-latn":459,"./tzm-latn.js":459,"./tzm.js":458,"./ug-cn":460,"./ug-cn.js":460,"./uk":461,"./uk.js":461,"./ur":462,"./ur.js":462,"./uz":463,"./uz-latn":464,"./uz-latn.js":464,"./uz.js":463,"./vi":465,"./vi.js":465,"./x-pseudo":466,"./x-pseudo.js":466,"./yo":467,"./yo.js":467,"./zh-cn":468,"./zh-cn.js":468,"./zh-hk":469,"./zh-hk.js":469,"./zh-mo":470,"./zh-mo.js":470,"./zh-tw":471,"./zh-tw.js":471};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=479},482:function(t,e,n){"use strict";n.r(e);n(25),n(1),n(3),n(68),n(11),n(33),n(17),n(19),n(4),n(14),n(138),n(20);var o=n(331),r=n.n(o),c={name:"TotalSales",props:["categories","completedTransactions","saleName"],data:function(){return{showSaleInfo:!0}},computed:{categorizedTransactionTotals:function(){for(var t=[],i=0;i<this.categories.length;i++)t.push({amount:0,quantity:0});return this.completedTransactions.forEach((function(e){e.forEach((function(e){t[e.category].amount+=parseFloat(e.price),t[e.category].quantity++}))})),t},totalSales:function(){return this.categorizedTransactionTotals.reduce((function(t,i){return t+i.amount}),0)},reversedCompletedTransactions:function(){return this.completedTransactions.reverse()}},methods:{slugify:function(t){var a="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",p=new RegExp(a.split("").join("|"),"g");return t.toString().toLowerCase().replace(/\s+/g,"-").replace(p,(function(t){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(a.indexOf(t))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},downloadData:function(){var t=new Date,e=t.toString(),n=r()(t).format("YYMMDD_HHmmss"),o=JSON.parse(localStorage.getItem("saleName")),c=JSON.parse(localStorage.getItem("categories")),l=JSON.parse(localStorage.getItem("completedTransactions")),d="".concat(this.slugify(o),"-").concat(n),m={instructions:"Go to https://groupsaletracker.nathanblaylock.com and select Upload Data from the main navigation bar. Select this file from your folder. You should automatically be re-directed to the main app.",date:e,version:"0",saleName:o,categories:c,completedTransactions:l},data="text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(m)),a=document.createElement("a");a.href="data:"+data,a.download="".concat(d,".json"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},deleteAllData:function(){localStorage.removeItem("saleName"),localStorage.removeItem("categories"),localStorage.removeItem("completedTransactions"),this.$router.go(0)}},filters:{toPrice:function(t){return"$"+t.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},reverse:function(t){return t.slice().reverse()}}},l=(n(475),n(43)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.showSaleInfo?e("div",{staticClass:"card"},[e("div",{staticClass:"d-flex justify-content-between gst-btn-group app-print-hide"},[e("button",{staticClass:"btn btn-dark btn-sm",on:{click:function(e){t.showSaleInfo=!1}}},[e("i",{staticClass:"fas fa-eye-slash"}),t._v(" Hide Sale Info\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-dark btn-sm",on:{click:t.downloadData}},[e("i",{staticClass:"fas fa-file-download"}),t._v(" Download Data\n      ")]),t._v(" "),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-delete-all-data",modifiers:{"modal-delete-all-data":!0}}],staticClass:"btn btn-dark btn-sm"},[e("i",{staticClass:"fas fa-trash"}),t._v(" Delete Sale\n      ")])]),t._v(" "),e("div",{staticClass:"card-header bg-dark text-white text-center"},[e("p",{staticClass:"h4"},[e("span",{staticClass:"d-none app-print-inline"},[t._v(t._s(t.saleName)+" ")]),t._v("Total Sales\n      ")]),t._v(" "),e("p",{staticClass:"h1"},[t._v(t._s(t._f("toPrice")(t.totalSales)))])]),t._v(" "),e("div",{staticClass:"card-body bg-light pb-0"},t._l(t.categories,(function(n,o){return e("div",{key:o,staticClass:"d-flex mb-3 align-items-center"},[e("div",{staticClass:"mr-2 rounded-circle",staticStyle:{width:"3em",height:"3em"},style:"background-color: ".concat(n.color)}),t._v(" "),e("div",[e("p",{staticClass:"mb-0",staticStyle:{"font-size":"1.8em"}},[t._v("\n            "+t._s(t._f("toPrice")(t.categorizedTransactionTotals[o].amount))+"\n            "),e("small",{staticClass:"text-muted"},[t._v(t._s(t.categorizedTransactionTotals[o].quantity)+" items\n              sold")])]),t._v(" "),e("p",{staticClass:"mb-0"},[e("strong",[t._v(t._s(n.name))])])])])})),0),t._v(" "),e("div",{staticClass:"card-body bg-light border-top"},[e("h2",[t._v("Past Transactions")]),t._v(" "),e("div",{attrs:{role:"tablist"}},t._l(t.reversedCompletedTransactions,(function(n,o){return e("PastSalesData",{key:o,attrs:{index:o,transaction:n,categories:t.categories}})})),1)]),t._v(" "),e("b-modal",{attrs:{id:"modal-delete-all-data","hide-header":"","ok-title":"Yes, Delete","ok-variant":"danger"},on:{ok:t.deleteAllData}},[e("p",{staticClass:"mt-3"},[t._v("\n        Are you sure you want to delete your data? Make sure that you download\n        any data you want to keep in the future.\n      ")])])],1):e("div",{staticClass:"card"},[e("div",{staticClass:"card-body text-center"},[e("i",{staticClass:"fas fa-eye-slash fa-5x mb-3 text-muted"}),t._v(" "),e("p",[e("button",{staticClass:"btn btn-dark",on:{click:function(e){t.showSaleInfo=!0}}},[e("i",{staticClass:"fas fa-eye"}),t._v(" Show Sale Info\n        ")])]),t._v(" "),e("p",{staticClass:"small text-muted mb-0"},[t._v("\n        Your sale information have been hidden.\n      ")])])])])}),[],!1,null,"527270df",null);e.default=component.exports;installComponents(component,{PastSalesData:n(472).default})}}]);