var ce=Object.create;var p=Object.defineProperty,me=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,xe=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&R(r,t,e[t]);if(v)for(var t of v(e))he.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>me(r,ge(e)),Te=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of be(e))!C.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=pe(e,i))||t.enumerable});return r},we=r=>ye(Te(p(r!=null?ce(xe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var S=(r,e,t)=>new Promise((i,u)=>{var s=a=>{try{o(t.next(a))}catch(l){u(l)}},c=a=>{try{o(t.throw(a))}catch(l){u(l)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,c);o((t=t.apply(r,e)).next())});var q=n((Wi,A)=>{function Pe(r,e,t,i){var u=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++u]);++u<s;)t=e(t,r[u],u,r);return t}A.exports=Pe});var L=n((Gi,O)=>{function ve(r){return function(e){return r==null?void 0:r[e]}}O.exports=ve});var j=n((Hi,M)=>{var Ce=L(),Re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Se=Ce(Re);M.exports=Se});var U=n((zi,N)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ae});var E=n((Fi,k)=>{var qe=U(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=qe||Oe||Function("return this")();k.exports=Le});var b=n((Ji,D)=>{var Me=E(),je=Me.Symbol;D.exports=je});var I=n((Bi,_)=>{function Ne(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}_.exports=Ne});var Z=n((Yi,V)=>{var Ue=Array.isArray;V.exports=Ue});var z=n(($i,H)=>{var W=b(),G=Object.prototype,ke=G.hasOwnProperty,Ee=G.toString,m=W?W.toStringTag:void 0;function De(r){var e=ke.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(s){}var u=Ee.call(r);return i&&(e?r[m]=t:delete r[m]),u}H.exports=De});var J=n((Ki,F)=>{var _e=Object.prototype,Ie=_e.toString;function Ve(r){return Ie.call(r)}F.exports=Ve});var K=n((Qi,$)=>{var B=b(),Ze=z(),We=J(),Ge="[object Null]",He="[object Undefined]",Y=B?B.toStringTag:void 0;function ze(r){return r==null?r===void 0?He:Ge:Y&&Y in Object(r)?Ze(r):We(r)}$.exports=ze});var X=n((Xi,Q)=>{function Fe(r){return r!=null&&typeof r=="object"}Q.exports=Fe});var er=n((rn,rr)=>{var Je=K(),Be=X(),Ye="[object Symbol]";function $e(r){return typeof r=="symbol"||Be(r)&&Je(r)==Ye}rr.exports=$e});var sr=n((en,ar)=>{var tr=b(),Ke=I(),Qe=Z(),Xe=er(),rt=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ur(r){if(typeof r=="string")return r;if(Qe(r))return Ke(r,ur)+"";if(Xe(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}ar.exports=ur});var x=n((tn,or)=>{var et=sr();function tt(r){return r==null?"":et(r)}or.exports=tt});var lr=n((nn,dr)=>{var it=j(),nt=x(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",dt=at+st+ot,lt="["+dt+"]",ft=RegExp(lt,"g");function ct(r){return r=nt(r),r&&r.replace(ut,it).replace(ft,"")}dr.exports=ct});var cr=n((un,fr)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(mt)||[]}fr.exports=pt});var pr=n((an,mr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return gt.test(r)}mr.exports=bt});var Nr=n((sn,jr)=>{var gr="\\ud800-\\udfff",xt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=xt+ht+Tt,br="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",Tr=wt+Pt+vt+Ct,yr="['\u2019]",wr="["+Tr+"]",St="["+yt+"]",Pr="\\d+",At="["+br+"]",vr="["+xr+"]",Cr="[^"+gr+Tr+Pr+br+xr+hr+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+St+"|"+qt+")",Lt="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+hr+"]",Mt="\\u200d",Ar="(?:"+vr+"|"+Cr+")",jt="(?:"+f+"|"+Cr+")",qr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Ot+"?",Mr="["+Rt+"]?",Nt="(?:"+Mt+"(?:"+[Lt,Rr,Sr].join("|")+")"+Mr+Lr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=Mr+Lr+Nt,Dt="(?:"+[At,Rr,Sr].join("|")+")"+Et,_t=RegExp([f+"?"+vr+"+"+qr+"(?="+[wr,f,"$"].join("|")+")",jt+"+"+Or+"(?="+[wr,f+Ar,"$"].join("|")+")",f+"?"+Ar+"+"+qr,f+"+"+Or,kt,Ut,Pr,Dt].join("|"),"g");function It(r){return r.match(_t)||[]}jr.exports=It});var kr=n((on,Ur)=>{var Vt=cr(),Zt=pr(),Wt=x(),Gt=Nr();function Ht(r,e,t){return r=Wt(r),e=t?void 0:e,e===void 0?Zt(r)?Gt(r):Vt(r):r.match(e)||[]}Ur.exports=Ht});var Dr=n((dn,Er)=>{var zt=q(),Ft=lr(),Jt=kr(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return zt(Jt(Ft(e).replace(Yt,"")),r,"")}}Er.exports=$t});var Ir=n((ln,_r)=>{function Kt(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(u);++i<u;)s[i]=r[i+e];return s}_r.exports=Kt});var Zr=n((fn,Vr)=>{var Qt=Ir();function Xt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Qt(r,e,t)}Vr.exports=Xt});var y=n((cn,Wr)=>{var ri="\\ud800-\\udfff",ei="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ei+ti+ii,ui="\\ufe0e\\ufe0f",ai="\\u200d",si=RegExp("["+ai+ri+ni+ui+"]");function oi(r){return si.test(r)}Wr.exports=oi});var Hr=n((mn,Gr)=>{function di(r){return r.split("")}Gr.exports=di});var Qr=n((pn,Kr)=>{var zr="\\ud800-\\udfff",li="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",mi=li+fi+ci,pi="\\ufe0e\\ufe0f",gi="["+zr+"]",w="["+mi+"]",P="\\ud83c[\\udffb-\\udfff]",bi="(?:"+w+"|"+P+")",Fr="[^"+zr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",xi="\\u200d",Yr=bi+"?",$r="["+pi+"]?",hi="(?:"+xi+"(?:"+[Fr,Jr,Br].join("|")+")"+$r+Yr+")*",Ti=$r+Yr+hi,yi="(?:"+[Fr+w+"?",w,Jr,Br,gi].join("|")+")",wi=RegExp(P+"(?="+P+")|"+yi+Ti,"g");function Pi(r){return r.match(wi)||[]}Kr.exports=Pi});var re=n((gn,Xr)=>{var vi=Hr(),Ci=y(),Ri=Qr();function Si(r){return Ci(r)?Ri(r):vi(r)}Xr.exports=Si});var te=n((bn,ee)=>{var Ai=Zr(),qi=y(),Oi=re(),Li=x();function Mi(r){return function(e){e=Li(e);var t=qi(e)?Oi(e):void 0,i=t?t[0]:e.charAt(0),u=t?Ai(t,1).join(""):e.slice(1);return i[r]()+u}}ee.exports=Mi});var ne=n((xn,ie)=>{var ji=te(),Ni=ji("toUpperCase");ie.exports=Ni});var ae=n((hn,ue)=>{var Ui=Dr(),ki=ne(),Ei=Ui(function(r,e,t){return r+(t?" ":"")+ki(e)});ue.exports=Ei});var se=we(ae());function Di(r){return g(d({},r),{json:JSON.stringify(Ii(r),null,2)})}var _i=`
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
</svg>`;function Ii(r){let{name:e,category:t,released:i,description:u,author:s,result:c,params:o,about:a,video:l}=r,{icon:T=oe}=r;return T==="glide"&&(T=_i),{name:e,category:t,released:i,description:u,author:s,result:c,about:a,icon:T,video:l,params:Object.entries(o).map(([le,fe])=>d({name:le},fe))}}var Vi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:oe,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Vi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,se.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function s(...c){let o={};if(c.forEach(({value:a},l)=>{o[u[l]]=a}),!i.some(a=>o[a]===void 0))return e(o)}return Di(g(d({},this.definition),{run:s}))}};function de(r){return new h({name:r})}var wn=de("Extract Matching Text").withCategory("Text").withReleased("direct").withDescription("Extract text matching a regular expression.").withStringParam("text").withStringParam("regex","Regular Expression").withStringResult().withTest({text:"Hello, world.",regex:"Hello, (.+)."},"world").run(({text:r,regex:e})=>{var t;if(e!==void 0)return(t=r==null?void 0:r.match(e))==null?void 0:t[1]});export{wn as default};
//# sourceMappingURL=function.js.map
