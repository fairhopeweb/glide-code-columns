var ce=Object.create;var p=Object.defineProperty,me=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,he=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var C=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&C(e,t,r[t]);if(v)for(var t of v(r))xe.call(r,t)&&C(e,t,r[t]);return e},g=(e,r)=>me(e,ge(r)),Te=e=>p(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ye=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of be(r))!R.call(e,i)&&i!=="default"&&p(e,i,{get:()=>r[i],enumerable:!(t=pe(r,i))||t.enumerable});return e},we=e=>ye(Te(p(e!=null?ce(he(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var S=(e,r,t)=>new Promise((i,u)=>{var s=a=>{try{o(t.next(a))}catch(d){u(d)}},c=a=>{try{o(t.throw(a))}catch(d){u(d)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,c);o((t=t.apply(e,r)).next())});var q=n((Wi,A)=>{function Pe(e,r,t,i){var u=-1,s=e==null?0:e.length;for(i&&s&&(t=e[++u]);++u<s;)t=r(t,e[u],u,e);return t}A.exports=Pe});var L=n((Gi,O)=>{function ve(e){return function(r){return e==null?void 0:e[r]}}O.exports=ve});var j=n((Fi,M)=>{var Re=L(),Ce={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Se=Re(Ce);M.exports=Se});var U=n((zi,N)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ae});var D=n((Hi,k)=>{var qe=U(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=qe||Oe||Function("return this")();k.exports=Le});var b=n((Ji,_)=>{var Me=D(),je=Me.Symbol;_.exports=je});var I=n((Bi,E)=>{function Ne(e,r){for(var t=-1,i=e==null?0:e.length,u=Array(i);++t<i;)u[t]=r(e[t],t,e);return u}E.exports=Ne});var Z=n((Yi,V)=>{var Ue=Array.isArray;V.exports=Ue});var z=n(($i,F)=>{var W=b(),G=Object.prototype,ke=G.hasOwnProperty,De=G.toString,m=W?W.toStringTag:void 0;function _e(e){var r=ke.call(e,m),t=e[m];try{e[m]=void 0;var i=!0}catch(s){}var u=De.call(e);return i&&(r?e[m]=t:delete e[m]),u}F.exports=_e});var J=n((Ki,H)=>{var Ee=Object.prototype,Ie=Ee.toString;function Ve(e){return Ie.call(e)}H.exports=Ve});var K=n((Qi,$)=>{var B=b(),Ze=z(),We=J(),Ge="[object Null]",Fe="[object Undefined]",Y=B?B.toStringTag:void 0;function ze(e){return e==null?e===void 0?Fe:Ge:Y&&Y in Object(e)?Ze(e):We(e)}$.exports=ze});var X=n((Xi,Q)=>{function He(e){return e!=null&&typeof e=="object"}Q.exports=He});var er=n((rn,rr)=>{var Je=K(),Be=X(),Ye="[object Symbol]";function $e(e){return typeof e=="symbol"||Be(e)&&Je(e)==Ye}rr.exports=$e});var sr=n((en,ar)=>{var tr=b(),Ke=I(),Qe=Z(),Xe=er(),rt=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ur(e){if(typeof e=="string")return e;if(Qe(e))return Ke(e,ur)+"";if(Xe(e))return nr?nr.call(e):"";var r=e+"";return r=="0"&&1/e==-rt?"-0":r}ar.exports=ur});var h=n((tn,or)=>{var et=sr();function tt(e){return e==null?"":et(e)}or.exports=tt});var dr=n((nn,lr)=>{var it=j(),nt=h(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",lt=at+st+ot,dt="["+lt+"]",ft=RegExp(dt,"g");function ct(e){return e=nt(e),e&&e.replace(ut,it).replace(ft,"")}lr.exports=ct});var cr=n((un,fr)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(mt)||[]}fr.exports=pt});var pr=n((an,mr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(e){return gt.test(e)}mr.exports=bt});var Nr=n((sn,jr)=>{var gr="\\ud800-\\udfff",ht="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=ht+xt+Tt,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",Ct="\\ufe0e\\ufe0f",Tr=wt+Pt+vt+Rt,yr="['\u2019]",wr="["+Tr+"]",St="["+yt+"]",Pr="\\d+",At="["+br+"]",vr="["+hr+"]",Rr="[^"+gr+Tr+Pr+br+hr+xr+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+St+"|"+qt+")",Lt="[^"+gr+"]",Cr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+xr+"]",Mt="\\u200d",Ar="(?:"+vr+"|"+Rr+")",jt="(?:"+f+"|"+Rr+")",qr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Ot+"?",Mr="["+Ct+"]?",Nt="(?:"+Mt+"(?:"+[Lt,Cr,Sr].join("|")+")"+Mr+Lr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=Mr+Lr+Nt,_t="(?:"+[At,Cr,Sr].join("|")+")"+Dt,Et=RegExp([f+"?"+vr+"+"+qr+"(?="+[wr,f,"$"].join("|")+")",jt+"+"+Or+"(?="+[wr,f+Ar,"$"].join("|")+")",f+"?"+Ar+"+"+qr,f+"+"+Or,kt,Ut,Pr,_t].join("|"),"g");function It(e){return e.match(Et)||[]}jr.exports=It});var kr=n((on,Ur)=>{var Vt=cr(),Zt=pr(),Wt=h(),Gt=Nr();function Ft(e,r,t){return e=Wt(e),r=t?void 0:r,r===void 0?Zt(e)?Gt(e):Vt(e):e.match(r)||[]}Ur.exports=Ft});var _r=n((ln,Dr)=>{var zt=q(),Ht=dr(),Jt=kr(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(e){return function(r){return zt(Jt(Ht(r).replace(Yt,"")),e,"")}}Dr.exports=$t});var Ir=n((dn,Er)=>{function Kt(e,r,t){var i=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var s=Array(u);++i<u;)s[i]=e[i+r];return s}Er.exports=Kt});var Zr=n((fn,Vr)=>{var Qt=Ir();function Xt(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Qt(e,r,t)}Vr.exports=Xt});var y=n((cn,Wr)=>{var ri="\\ud800-\\udfff",ei="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ei+ti+ii,ui="\\ufe0e\\ufe0f",ai="\\u200d",si=RegExp("["+ai+ri+ni+ui+"]");function oi(e){return si.test(e)}Wr.exports=oi});var Fr=n((mn,Gr)=>{function li(e){return e.split("")}Gr.exports=li});var Qr=n((pn,Kr)=>{var zr="\\ud800-\\udfff",di="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",mi=di+fi+ci,pi="\\ufe0e\\ufe0f",gi="["+zr+"]",w="["+mi+"]",P="\\ud83c[\\udffb-\\udfff]",bi="(?:"+w+"|"+P+")",Hr="[^"+zr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",hi="\\u200d",Yr=bi+"?",$r="["+pi+"]?",xi="(?:"+hi+"(?:"+[Hr,Jr,Br].join("|")+")"+$r+Yr+")*",Ti=$r+Yr+xi,yi="(?:"+[Hr+w+"?",w,Jr,Br,gi].join("|")+")",wi=RegExp(P+"(?="+P+")|"+yi+Ti,"g");function Pi(e){return e.match(wi)||[]}Kr.exports=Pi});var re=n((gn,Xr)=>{var vi=Fr(),Ri=y(),Ci=Qr();function Si(e){return Ri(e)?Ci(e):vi(e)}Xr.exports=Si});var te=n((bn,ee)=>{var Ai=Zr(),qi=y(),Oi=re(),Li=h();function Mi(e){return function(r){r=Li(r);var t=qi(r)?Oi(r):void 0,i=t?t[0]:r.charAt(0),u=t?Ai(t,1).join(""):r.slice(1);return i[e]()+u}}ee.exports=Mi});var ne=n((hn,ie)=>{var ji=te(),Ni=ji("toUpperCase");ie.exports=Ni});var ae=n((xn,ue)=>{var Ui=_r(),ki=ne(),Di=Ui(function(e,r,t){return e+(t?" ":"")+ki(r)});ue.exports=Di});var se=we(ae());function _i(e){return g(l({},e),{json:JSON.stringify(Ii(e),null,2)})}var Ei=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,oe=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ii(e){let{name:r,category:t,released:i,description:u,author:s,result:c,params:o,about:a,video:d}=e,{icon:T=oe}=e;return T==="glide"&&(T=Ei),{name:r,category:t,released:i,description:u,author:s,result:c,about:a,icon:T,video:d,params:Object.entries(o).map(([de,fe])=>l({name:de},fe))}}var Vi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:oe,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},x=class{constructor(r={},t=[]){this.definition=l(l({},Vi),r),this.requiredParams=[...t]}with(r,t=[]){return new x(l(l({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,se.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function s(...c){let o={};if(c.forEach(({value:a},d)=>{o[u[d]]=a}),!i.some(a=>o[a]===void 0))return r(o)}return _i(g(l({},this.definition),{run:s}))}};function le(e){return new x({name:e})}var wn=le("Trim Whitespace").withCategory("Text").withReleased("direct").withDescription("Remove whitespace around text.").withRequiredStringParam("text").withStringResult().withTest({text:" hello "},"hello").run(({text:e})=>e.trim());export{wn as default};
//# sourceMappingURL=function.js.map
