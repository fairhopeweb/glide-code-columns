(()=>{var me=Object.create;var g=Object.defineProperty,pe=Object.defineProperties,ge=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,he=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var q=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&q(r,t,e[t]);if(P)for(var t of P(e))Te.call(e,t)&&q(r,t,e[t]);return r},m=(r,e)=>pe(r,xe(e)),ye=r=>g(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ce=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of be(e))!A.call(r,u)&&u!=="default"&&g(r,u,{get:()=>e[u],enumerable:!(t=ge(e,u))||t.enumerable});return r},O=r=>Ce(ye(g(r!=null?me(he(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var x=(r,e,t)=>new Promise((u,n)=>{var o=a=>{try{s(t.next(a))}catch(f){n(f)}},l=a=>{try{s(t.throw(a))}catch(f){n(f)}},s=a=>a.done?u(a.value):Promise.resolve(a.value).then(o,l);s((t=t.apply(r,e)).next())});var j=i((Gu,L)=>{function ve(r,e,t,u){var n=-1,o=r==null?0:r.length;for(u&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}L.exports=ve});var U=i((Hu,M)=>{function we(r){return function(e){return r==null?void 0:r[e]}}M.exports=we});var _=i((Vu,N)=>{var Se=U(),Re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pe=Se(Re);N.exports=Pe});var D=i((Fu,E)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;E.exports=Ae});var W=i((Ju,k)=>{var qe=D(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=qe||Oe||Function("return this")();k.exports=Le});var b=i((Bu,Z)=>{var je=W(),Me=je.Symbol;Z.exports=Me});var z=i((Yu,I)=>{function Ue(r,e){for(var t=-1,u=r==null?0:r.length,n=Array(u);++t<u;)n[t]=e(r[t],t,r);return n}I.exports=Ue});var H=i(($u,G)=>{var Ne=Array.isArray;G.exports=Ne});var B=i((Ku,J)=>{var V=b(),F=Object.prototype,_e=F.hasOwnProperty,Ee=F.toString,p=V?V.toStringTag:void 0;function De(r){var e=_e.call(r,p),t=r[p];try{r[p]=void 0;var u=!0}catch(o){}var n=Ee.call(r);return u&&(e?r[p]=t:delete r[p]),n}J.exports=De});var $=i((Qu,Y)=>{var ke=Object.prototype,We=ke.toString;function Ze(r){return We.call(r)}Y.exports=Ze});var rr=i((Xu,X)=>{var K=b(),Ie=B(),ze=$(),Ge="[object Null]",He="[object Undefined]",Q=K?K.toStringTag:void 0;function Ve(r){return r==null?r===void 0?He:Ge:Q&&Q in Object(r)?Ie(r):ze(r)}X.exports=Ve});var tr=i((rn,er)=>{function Fe(r){return r!=null&&typeof r=="object"}er.exports=Fe});var nr=i((en,ur)=>{var Je=rr(),Be=tr(),Ye="[object Symbol]";function $e(r){return typeof r=="symbol"||Be(r)&&Je(r)==Ye}ur.exports=$e});var dr=i((tn,fr)=>{var ir=b(),Ke=z(),Qe=H(),Xe=nr(),rt=1/0,or=ir?ir.prototype:void 0,ar=or?or.toString:void 0;function sr(r){if(typeof r=="string")return r;if(Qe(r))return Ke(r,sr)+"";if(Xe(r))return ar?ar.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}fr.exports=sr});var h=i((un,lr)=>{var et=dr();function tt(r){return r==null?"":et(r)}lr.exports=tt});var mr=i((nn,cr)=>{var ut=_(),nt=h(),it=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",at="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",ft=ot+at+st,dt="["+ft+"]",lt=RegExp(dt,"g");function ct(r){return r=nt(r),r&&r.replace(it,ut).replace(lt,"")}cr.exports=ct});var gr=i((on,pr)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(mt)||[]}pr.exports=pt});var br=i((an,xr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return gt.test(r)}xr.exports=xt});var Er=i((sn,_r)=>{var hr="\\ud800-\\udfff",bt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=bt+ht+Tt,Tr="\\u2700-\\u27bf",yr="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Cr="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",vr=Ct+vt+wt+St,wr="['\u2019]",Sr="["+vr+"]",Pt="["+yt+"]",Rr="\\d+",At="["+Tr+"]",Pr="["+yr+"]",Ar="[^"+hr+vr+Rr+Tr+yr+Cr+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Pt+"|"+qt+")",Lt="[^"+hr+"]",qr="(?:\\ud83c[\\udde6-\\uddff]){2}",Or="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Cr+"]",jt="\\u200d",Lr="(?:"+Pr+"|"+Ar+")",Mt="(?:"+c+"|"+Ar+")",jr="(?:"+wr+"(?:d|ll|m|re|s|t|ve))?",Mr="(?:"+wr+"(?:D|LL|M|RE|S|T|VE))?",Ur=Ot+"?",Nr="["+Rt+"]?",Ut="(?:"+jt+"(?:"+[Lt,qr,Or].join("|")+")"+Nr+Ur+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=Nr+Ur+Ut,Dt="(?:"+[At,qr,Or].join("|")+")"+Et,kt=RegExp([c+"?"+Pr+"+"+jr+"(?="+[Sr,c,"$"].join("|")+")",Mt+"+"+Mr+"(?="+[Sr,c+Lr,"$"].join("|")+")",c+"?"+Lr+"+"+jr,c+"+"+Mr,_t,Nt,Rr,Dt].join("|"),"g");function Wt(r){return r.match(kt)||[]}_r.exports=Wt});var kr=i((fn,Dr)=>{var Zt=gr(),It=br(),zt=h(),Gt=Er();function Ht(r,e,t){return r=zt(r),e=t?void 0:e,e===void 0?It(r)?Gt(r):Zt(r):r.match(e)||[]}Dr.exports=Ht});var Zr=i((dn,Wr)=>{var Vt=j(),Ft=mr(),Jt=kr(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return Vt(Jt(Ft(e).replace(Yt,"")),r,"")}}Wr.exports=$t});var zr=i((ln,Ir)=>{function Kt(r,e,t){var u=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++u<n;)o[u]=r[u+e];return o}Ir.exports=Kt});var Hr=i((cn,Gr)=>{var Qt=zr();function Xt(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:Qt(r,e,t)}Gr.exports=Xt});var C=i((mn,Vr)=>{var ru="\\ud800-\\udfff",eu="\\u0300-\\u036f",tu="\\ufe20-\\ufe2f",uu="\\u20d0-\\u20ff",nu=eu+tu+uu,iu="\\ufe0e\\ufe0f",ou="\\u200d",au=RegExp("["+ou+ru+nu+iu+"]");function su(r){return au.test(r)}Vr.exports=su});var Jr=i((pn,Fr)=>{function fu(r){return r.split("")}Fr.exports=fu});var ee=i((gn,re)=>{var Br="\\ud800-\\udfff",du="\\u0300-\\u036f",lu="\\ufe20-\\ufe2f",cu="\\u20d0-\\u20ff",mu=du+lu+cu,pu="\\ufe0e\\ufe0f",gu="["+Br+"]",v="["+mu+"]",w="\\ud83c[\\udffb-\\udfff]",xu="(?:"+v+"|"+w+")",Yr="[^"+Br+"]",$r="(?:\\ud83c[\\udde6-\\uddff]){2}",Kr="[\\ud800-\\udbff][\\udc00-\\udfff]",bu="\\u200d",Qr=xu+"?",Xr="["+pu+"]?",hu="(?:"+bu+"(?:"+[Yr,$r,Kr].join("|")+")"+Xr+Qr+")*",Tu=Xr+Qr+hu,yu="(?:"+[Yr+v+"?",v,$r,Kr,gu].join("|")+")",Cu=RegExp(w+"(?="+w+")|"+yu+Tu,"g");function vu(r){return r.match(Cu)||[]}re.exports=vu});var ue=i((xn,te)=>{var wu=Jr(),Su=C(),Ru=ee();function Pu(r){return Su(r)?Ru(r):wu(r)}te.exports=Pu});var ie=i((bn,ne)=>{var Au=Hr(),qu=C(),Ou=ue(),Lu=h();function ju(r){return function(e){e=Lu(e);var t=qu(e)?Ou(e):void 0,u=t?t[0]:e.charAt(0),n=t?Au(t,1).join(""):e.slice(1);return u[r]()+n}}ne.exports=ju});var ae=i((hn,oe)=>{var Mu=ie(),Uu=Mu("toUpperCase");oe.exports=Uu});var S=i((Tn,se)=>{var Nu=Zr(),_u=ae(),Eu=Nu(function(r,e,t){return r+(t?" ":"")+_u(e)});se.exports=Eu});var R=O(S());function fe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(fe):r}function Du(r,e){return x(this,null,function*(){var s;let{data:{key:t,params:u}}=r,n,o;try{n=yield e(...u)}catch(a){n=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=fe(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function ku(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Du(e,r.run)),m(d({},r),{json:JSON.stringify(Zu(r),null,2)})}var Wu=`
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
    `,de=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Zu(r){let{name:e,description:t,author:u,result:n,params:o,about:l,video:s}=r,{icon:a=de}=r;return a==="glide"&&(a=Wu),{name:e,description:t,author:u,result:n,about:l,icon:a,video:s,params:Object.entries(o).map(([f,y])=>d({name:f},y))}}var Iu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:de,about:void 0,video:void 0,run(){return x(this,null,function*(){})}},T=class{constructor(e={},t=[]){this.definition=d(d({},Iu),e),this.requiredParams=[...t]}with(e,t=[]){return new T(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,u){return u===void 0&&(u=(0,R.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:u}})})}withRequiredParam(e,t,u){return u===void 0&&(u=(0,R.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:u}})},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,u=this.requiredParams,n=Object.keys(t);function o(...l){return x(this,null,function*(){let s={};if(l.forEach(({value:f},y)=>{s[n[y]]=f}),u.some(f=>s[f]===void 0))return;let a=e(s);return Promise.resolve(a)})}return ku(m(d({},this.definition),{run:o}))}};function le(r){return new T({name:r})}var ce=O(S()),vn=le("Start Case").withDescription('"hello world" \u2192 "Hello World"').withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"helloWorld"}).run(({text:r})=>r===void 0?void 0:(0,ce.default)(r));})();
//# sourceMappingURL=index.js.map
