(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(301),n(139);function r(t,e,n,r,o){var text,l=[function(t,e){return 1},function(t,e){return t},function(t,e){return e},function(t,e){return t*e},function(t,e){return Math.pow(t,2)},function(t,e){return Math.pow(e,2)}],c=function(t){return function(t){for(var e=t.length,n=[],i=e-1;i>=0;i--){for(var r=0,o=i+1;o<e;o++)r+=t[i][o]*n[o];n[i]=t[i][e]-r}return n}(function(t){for(var e=t.length,i=0;i<e;i++){for(var n=t[i][i],r=i;r<e+1;r++)t[i][r]=t[i][r]/n;for(var o=i+1;o<e;o++)for(var l=t[o][i],c=i;c<e+1;c++)t[o][c]-=t[i][c]*l}return t}(t))}(function(t,e,n,r,o){for(var l=[function(t,e){return 1},function(t,e){return t},function(t,e){return e},function(t,e){return t*e},function(t,e){return Math.pow(t,2)},function(t,e){return Math.pow(e,2)}],c=3*o,f=t.length,d=[],i=0;i<c;i++){d[i]=[];for(var j=0;j<c;j++){d[i][j]=0;for(var m=0;m<f;m++){var h=l[i],y=l[j];d[i][j]+=r[m]*h(t[m],e[m])*y(t[m],e[m])}}d[i][c]=0;for(var v=0;v<f;v++){var x=l[i];d[i][c]+=r[v]*n[v]*x(t[v],e[v])}}return d}(t,e,n,r,o));if(1===o){var f=c[0].toFixed(4),d=c[1].toFixed(4),j=c[2].toFixed(4);text="P(x,y) = ".concat(f," + ").concat(d,"x + ").concat(j,"y")}else if(2===o){var m=c[0].toFixed(4),h=c[1].toFixed(4),y=c[2].toFixed(4),v=c[3].toFixed(4),x=c[4].toFixed(4),w=c[5].toFixed(4);text="P(x,y) = ".concat(m," + ").concat(h,"x + ").concat(y,"y + ").concat(v,"xy + ").concat(x,"x^2 + ").concat(w,"y^2")}return{polynome:function(t,e){for(var n=0,i=0;i<3*o;i++)n+=c[i]*l[i](t,e);return n},text:text}}},298:function(t,e,n){"use strict";var r=n(9),o=n(638),l=n.n(o);r.default.use(l.a)},299:function(t,e,n){"use strict";n.r(e);var r,o=n(41),l=(n(201),n(296)),c=n.n(l),f=n(61),d=n(30),j=(n(69),n(31),n(89),n(78),n(91),n(48),n(68),n(93),n(94),n(49),n(225)),m=n(63),h=n.n(m);function y(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var x={props:{points:{type:Object,default:function(){return{X:[1,2,3,1,2,3,1,2,3],Y:[1,1,1,2,2,2,3,3,3],Z:[3.1,3.15,3.5,4.9,4.65,4.4,9.85,9.4,11.1],Ro:[1,1,1,1,1,1,1,1,1]}}},X:{type:Number,default:0},Y:{type:Number,default:0},polynome:{type:Object,default:function(){return{degree:1}}}},data:function(){return{plotCreated:!1}},watch:(r={points:function(){this.drawPlot(this.points,this.polynome.degree)}},Object(o.a)(r,"polynome.degree",(function(){this.drawPlot(this.points,this.polynome.degree)})),Object(o.a)(r,"X",(function(){isNaN(parseFloat(this.X))||this.drawPlot(this.points,this.polynome.degree)})),Object(o.a)(r,"Y",(function(){isNaN(parseFloat(this.X))||this.drawPlot(this.points,this.polynome.degree)})),r),mounted:function(){this.drawPlot(this.points,this.polynome.degree)},methods:{drawPlot:function(t,e){var n=f.default.layout,r=f.default.mesh,o=f.default.scatterOrig,l=f.default.scatterAppr,m=f.default.scatterMain,v=f.default.surface,x=this.points,w=x.X,z=x.Y,k=x.Z,_=x.Ro,N=Object(j.a)(w,z,k,_,Number(e)).polynome,M=function(t,e,n){for(var r=[],o=[],l=Math.ceil(h.a.max(t.map(Number)))+1,c=Math.floor(h.a.min(t.map(Number)))-1,f=Math.ceil(h.a.max(e.map(Number)))+1,d=Math.floor(h.a.min(e.map(Number)))-1,j=l-c,m=f-d,y=0,i=0;i<j;i++)for(var v=0;v<m;v++)r[y]=c+i,o[y]=d+v,y++;for(var x=[],w=0;w<r.length;w++)x[w]=n(r[w],o[w]);return{X:r,Y:o,Z:x}}(w,z,N),F=function(t,e,n){for(var r=Math.ceil(h.a.max(t.map(Number)))+1,o=Math.floor(h.a.min(t.map(Number)))-1,l=Math.ceil(h.a.max(e.map(Number)))+1,c=Math.floor(h.a.min(e.map(Number)))-1,f=r-o,j=l-c,m=[],v=[],x=[],i=0;i<f;i++)m[i]=o+i;for(var w=0;w<j;w++)v[w]=c+w;var z,k=y(v.entries());try{for(k.s();!(z=k.n()).done;){var _=Object(d.a)(z.value,2),N=_[0],M=_[1];x[N]=[];var F,O=y(m.entries());try{for(O.s();!(F=O.n()).done;){var X=Object(d.a)(F.value,2),Y=X[0],C=X[1];x[N][Y]=n(C,M)}}catch(t){O.e(t)}finally{O.f()}}}catch(t){k.e(t)}finally{k.f()}return{X:m,Y:v,Z:x}}(w,z,N);r.x=M.X,r.y=M.Y,r.z=M.Z,l.x=M.X,l.y=M.Y,l.z=M.Z,o.x=w,o.y=z,o.z=k,m.x=[this.X],m.y=[this.Y],m.z=[N(this.X,this.Y)],v.x=F.X,v.y=F.Y,v.z=F.Z,!1===this.plotCreated?(c.a.newPlot(this.$refs.plot,[o,l,m,v],n),this.plotCreated=!0):c.a.update(this.$refs.plot,[o,l,m,v],n)}}},w=(n(687),n(53)),component=Object(w.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"plot-wrapper"},[e("div",{ref:"plot",attrs:{id:"plot-id"}})])}),[],!1,null,"6937a252",null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);n(201),n(31),n(49),n(69),n(301);var r=n(297),o=n.n(r),l=n(199),c=n.n(l),f={props:{columns:{type:Array,default:function(){return["X","Y","Z","Ro"]}},rowsNumber:{type:Number,default:15}},data:function(){return{values:{X:[],Y:[],Z:[],Ro:[]}}},mounted:function(){this.generateRandomValues()},updated:function(){this.isValuesValid(this.values)&&this.$emit("valueschange",this.values)},methods:{getRange:function(t){return o()(t)},isValuesValid:function(t){return!(t.X.some((function(t){return isNaN(parseFloat(t))}))||t.Y.some((function(t){return isNaN(parseFloat(t))}))||t.Z.some((function(t){return isNaN(parseFloat(t))}))||t.Ro.some((function(t){return isNaN(parseFloat(t))})))},generateRandomValues:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9.9,e=o()(this.rowsNumber);this.values.Ro=e.map((function(){return 1})),this.values.X=e.map((function(){return c()(0,t).toFixed(2)})),this.values.Y=e.map((function(){return c()(0,t).toFixed(2)})),this.values.Z=e.map((function(){return c()(0,t).toFixed(2)}))}}},d=(n(696),n(53)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"table__row row_header"},t._l(t.columns,(function(e,i){return n("div",{key:i,staticClass:"table__cell cell_heading",domProps:{textContent:t._s(e)}})})),0),t._v(" "),t._l(t.getRange(t.rowsNumber),(function(e){return n("div",{key:e,staticClass:"table__row"},t._l(t.columns,(function(r,i){return n("input",{directives:[{name:"model",rawName:"v-model",value:t.values[r][e],expression:"values[heading][index]"}],key:i,staticClass:"table__cell cell_input",domProps:{value:t.values[r][e]},on:{input:function(n){n.target.composing||t.$set(t.values[r],e,n.target.value)}}})})),0)}))],2)}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){var content=n(683);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("56b15182",content,!0,{sourceMap:!1})},343:function(t,e,n){var content=n(688);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("5d53fdf0",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("a4293d64",content,!0,{sourceMap:!1})},61:function(t,e,n){"use strict";n.r(e),e.default={layout:{autosize:!0,scene:{aspectratio:{x:1,y:1,z:1},camera:{center:{x:0,y:0,z:0},eye:{x:1.25,y:1.25,z:1.25},up:{x:0,y:0,z:1}},xaxis:{type:"linear",range:[-5,15]},yaxis:{type:"linear",range:[-5,15]},zaxis:{type:"linear",range:[-5,15]}}},mesh:{opacity:.2,type:"mesh3d",x:[],y:[],z:[]},scatterAppr:{x:[],y:[],z:[],mode:"markers",type:"scatter3d",marker:{color:"rgb(10, 50, 230)",size:1},name:"approximation"},scatterOrig:{x:[],y:[],z:[],mode:"markers",type:"scatter3d",marker:{color:"rgb(23, 190, 207)",size:4},name:"original points"},scatterMain:{x:[],y:[],z:[],mode:"markers",type:"scatter3d",marker:{color:"rgb(255, 140, 0)",size:4},name:"specified point"},surface:{x:[],y:[],z:[],type:"surface",opacity:.2,showscale:!1}}},641:function(t,e,n){"use strict";n(682);var r=n(53),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},642:function(t,e,n){n(643),t.exports=n(644)},682:function(t,e,n){"use strict";n(342)},683:function(t,e,n){var r=n(87)(!1);r.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=r},687:function(t,e,n){"use strict";n(343)},688:function(t,e,n){var r=n(87)(!1);r.push([t.i,".plot-wrapper[data-v-6937a252]{border:1px solid #000;border-radius:2px}#plot-id[data-v-6937a252]{height:438px}",""]),t.exports=r},696:function(t,e,n){"use strict";n(346)},697:function(t,e,n){var r=n(87)(!1);r.push([t.i,".table{display:flex;flex-direction:column;width:320px}.table__row{display:flex;flex-direction:row;justify-content:space-between}.table__cell{min-width:80px;min-height:40px;display:flex;text-align:center;align-items:center;justify-content:center;font-size:12px}.row_header{background-color:#33c4ff;font-weight:700}.cell_heading{border:1px solid #555}",""]),t.exports=r},878:function(t,e,n){var map={"./af":406,"./af.js":406,"./ar":407,"./ar-dz":408,"./ar-dz.js":408,"./ar-kw":409,"./ar-kw.js":409,"./ar-ly":410,"./ar-ly.js":410,"./ar-ma":411,"./ar-ma.js":411,"./ar-sa":412,"./ar-sa.js":412,"./ar-tn":413,"./ar-tn.js":413,"./ar.js":407,"./az":414,"./az.js":414,"./be":415,"./be.js":415,"./bg":416,"./bg.js":416,"./bm":417,"./bm.js":417,"./bn":418,"./bn-bd":419,"./bn-bd.js":419,"./bn.js":418,"./bo":420,"./bo.js":420,"./br":421,"./br.js":421,"./bs":422,"./bs.js":422,"./ca":423,"./ca.js":423,"./cs":424,"./cs.js":424,"./cv":425,"./cv.js":425,"./cy":426,"./cy.js":426,"./da":427,"./da.js":427,"./de":428,"./de-at":429,"./de-at.js":429,"./de-ch":430,"./de-ch.js":430,"./de.js":428,"./dv":431,"./dv.js":431,"./el":432,"./el.js":432,"./en-au":433,"./en-au.js":433,"./en-ca":434,"./en-ca.js":434,"./en-gb":435,"./en-gb.js":435,"./en-ie":436,"./en-ie.js":436,"./en-il":437,"./en-il.js":437,"./en-in":438,"./en-in.js":438,"./en-nz":439,"./en-nz.js":439,"./en-sg":440,"./en-sg.js":440,"./eo":441,"./eo.js":441,"./es":442,"./es-do":443,"./es-do.js":443,"./es-mx":444,"./es-mx.js":444,"./es-us":445,"./es-us.js":445,"./es.js":442,"./et":446,"./et.js":446,"./eu":447,"./eu.js":447,"./fa":448,"./fa.js":448,"./fi":449,"./fi.js":449,"./fil":450,"./fil.js":450,"./fo":451,"./fo.js":451,"./fr":452,"./fr-ca":453,"./fr-ca.js":453,"./fr-ch":454,"./fr-ch.js":454,"./fr.js":452,"./fy":455,"./fy.js":455,"./ga":456,"./ga.js":456,"./gd":457,"./gd.js":457,"./gl":458,"./gl.js":458,"./gom-deva":459,"./gom-deva.js":459,"./gom-latn":460,"./gom-latn.js":460,"./gu":461,"./gu.js":461,"./he":462,"./he.js":462,"./hi":463,"./hi.js":463,"./hr":464,"./hr.js":464,"./hu":465,"./hu.js":465,"./hy-am":466,"./hy-am.js":466,"./id":467,"./id.js":467,"./is":468,"./is.js":468,"./it":469,"./it-ch":470,"./it-ch.js":470,"./it.js":469,"./ja":471,"./ja.js":471,"./jv":472,"./jv.js":472,"./ka":473,"./ka.js":473,"./kk":474,"./kk.js":474,"./km":475,"./km.js":475,"./kn":476,"./kn.js":476,"./ko":477,"./ko.js":477,"./ku":478,"./ku.js":478,"./ky":479,"./ky.js":479,"./lb":480,"./lb.js":480,"./lo":481,"./lo.js":481,"./lt":482,"./lt.js":482,"./lv":483,"./lv.js":483,"./me":484,"./me.js":484,"./mi":485,"./mi.js":485,"./mk":486,"./mk.js":486,"./ml":487,"./ml.js":487,"./mn":488,"./mn.js":488,"./mr":489,"./mr.js":489,"./ms":490,"./ms-my":491,"./ms-my.js":491,"./ms.js":490,"./mt":492,"./mt.js":492,"./my":493,"./my.js":493,"./nb":494,"./nb.js":494,"./ne":495,"./ne.js":495,"./nl":496,"./nl-be":497,"./nl-be.js":497,"./nl.js":496,"./nn":498,"./nn.js":498,"./oc-lnc":499,"./oc-lnc.js":499,"./pa-in":500,"./pa-in.js":500,"./pl":501,"./pl.js":501,"./pt":502,"./pt-br":503,"./pt-br.js":503,"./pt.js":502,"./ro":504,"./ro.js":504,"./ru":505,"./ru.js":505,"./sd":506,"./sd.js":506,"./se":507,"./se.js":507,"./si":508,"./si.js":508,"./sk":509,"./sk.js":509,"./sl":510,"./sl.js":510,"./sq":511,"./sq.js":511,"./sr":512,"./sr-cyrl":513,"./sr-cyrl.js":513,"./sr.js":512,"./ss":514,"./ss.js":514,"./sv":515,"./sv.js":515,"./sw":516,"./sw.js":516,"./ta":517,"./ta.js":517,"./te":518,"./te.js":518,"./tet":519,"./tet.js":519,"./tg":520,"./tg.js":520,"./th":521,"./th.js":521,"./tk":522,"./tk.js":522,"./tl-ph":523,"./tl-ph.js":523,"./tlh":524,"./tlh.js":524,"./tr":525,"./tr.js":525,"./tzl":526,"./tzl.js":526,"./tzm":527,"./tzm-latn":528,"./tzm-latn.js":528,"./tzm.js":527,"./ug-cn":529,"./ug-cn.js":529,"./uk":530,"./uk.js":530,"./ur":531,"./ur.js":531,"./uz":532,"./uz-latn":533,"./uz-latn.js":533,"./uz.js":532,"./vi":534,"./vi.js":534,"./x-pseudo":535,"./x-pseudo.js":535,"./yo":536,"./yo.js":536,"./zh-cn":537,"./zh-cn.js":537,"./zh-hk":538,"./zh-hk.js":538,"./zh-mo":539,"./zh-mo.js":539,"./zh-tw":540,"./zh-tw.js":540};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=878}},[[642,3,1,4]]]);