(()=>{var le=Object.create;var p=Object.defineProperty,ce=Object.defineProperties,me=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,xe=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&P(r,t,e[t]);if(w)for(var t of w(e))be.call(e,t)&&P(r,t,e[t]);return r},g=(r,e)=>ce(r,pe(e)),he=r=>p(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ge(e))!R.call(r,n)&&n!=="default"&&p(r,n,{get:()=>e[n],enumerable:!(t=me(e,n))||t.enumerable});return r},Te=r=>ye(he(p(r!=null?le(xe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var x=(r,e,t)=>new Promise((n,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},d=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,d);s((t=t.apply(r,e)).next())});var A=i((zu,q)=>{function Ce(r,e,t,n){var u=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}q.exports=Ce});var L=i((Gu,O)=>{function ve(r){return function(e){return r==null?void 0:r[e]}}O.exports=ve});var M=i((Hu,j)=>{var Se=L(),we={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Re=Se(we);j.exports=Re});var _=i((Vu,U)=>{var Pe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Pe});var E=i((Fu,N)=>{var qe=_(),Ae=typeof self=="object"&&self&&self.Object===Object&&self,Oe=qe||Ae||Function("return this")();N.exports=Oe});var b=i((Ju,D)=>{var Le=E(),je=Le.Symbol;D.exports=je});var Z=i((Bu,k)=>{function Me(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}k.exports=Me});var W=i((Yu,I)=>{var Ue=Array.isArray;I.exports=Ue});var V=i(($u,H)=>{var z=b(),G=Object.prototype,_e=G.hasOwnProperty,Ne=G.toString,m=z?z.toStringTag:void 0;function Ee(r){var e=_e.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(o){}var u=Ne.call(r);return n&&(e?r[m]=t:delete r[m]),u}H.exports=Ee});var J=i((Ku,F)=>{var De=Object.prototype,ke=De.toString;function Ze(r){return ke.call(r)}F.exports=Ze});var K=i((Qu,$)=>{var B=b(),Ie=V(),We=J(),ze="[object Null]",Ge="[object Undefined]",Y=B?B.toStringTag:void 0;function He(r){return r==null?r===void 0?Ge:ze:Y&&Y in Object(r)?Ie(r):We(r)}$.exports=He});var X=i((Xu,Q)=>{function Ve(r){return r!=null&&typeof r=="object"}Q.exports=Ve});var er=i((rn,rr)=>{var Fe=K(),Je=X(),Be="[object Symbol]";function Ye(r){return typeof r=="symbol"||Je(r)&&Fe(r)==Be}rr.exports=Ye});var ar=i((en,or)=>{var tr=b(),$e=Z(),Ke=W(),Qe=er(),Xe=1/0,ur=tr?tr.prototype:void 0,nr=ur?ur.toString:void 0;function ir(r){if(typeof r=="string")return r;if(Ke(r))return $e(r,ir)+"";if(Qe(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-Xe?"-0":e}or.exports=ir});var h=i((tn,sr)=>{var rt=ar();function et(r){return r==null?"":rt(r)}sr.exports=et});var dr=i((un,fr)=>{var tt=M(),ut=h(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",st=it+ot+at,ft="["+st+"]",dt=RegExp(ft,"g");function lt(r){return r=ut(r),r&&r.replace(nt,tt).replace(dt,"")}fr.exports=lt});var cr=i((nn,lr)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(r){return r.match(ct)||[]}lr.exports=mt});var pr=i((on,mr)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(r){return pt.test(r)}mr.exports=gt});var Ur=i((an,Mr)=>{var gr="\\ud800-\\udfff",xt="\\u0300-\\u036f",bt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",yt=xt+bt+ht,xr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Tt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",wt="\\ufe0e\\ufe0f",yr=Tt+Ct+vt+St,Tr="['\u2019]",Cr="["+yr+"]",Rt="["+yt+"]",vr="\\d+",Pt="["+xr+"]",Sr="["+br+"]",wr="[^"+gr+yr+vr+xr+br+hr+"]",qt="\\ud83c[\\udffb-\\udfff]",At="(?:"+Rt+"|"+qt+")",Ot="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+hr+"]",Lt="\\u200d",qr="(?:"+Sr+"|"+wr+")",jt="(?:"+c+"|"+wr+")",Ar="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Lr=At+"?",jr="["+wt+"]?",Mt="(?:"+Lt+"(?:"+[Ot,Rr,Pr].join("|")+")"+jr+Lr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nt=jr+Lr+Mt,Et="(?:"+[Pt,Rr,Pr].join("|")+")"+Nt,Dt=RegExp([c+"?"+Sr+"+"+Ar+"(?="+[Cr,c,"$"].join("|")+")",jt+"+"+Or+"(?="+[Cr,c+qr,"$"].join("|")+")",c+"?"+qr+"+"+Ar,c+"+"+Or,_t,Ut,vr,Et].join("|"),"g");function kt(r){return r.match(Dt)||[]}Mr.exports=kt});var Nr=i((sn,_r)=>{var Zt=cr(),It=pr(),Wt=h(),zt=Ur();function Gt(r,e,t){return r=Wt(r),e=t?void 0:e,e===void 0?It(r)?zt(r):Zt(r):r.match(e)||[]}_r.exports=Gt});var Dr=i((fn,Er)=>{var Ht=A(),Vt=dr(),Ft=Nr(),Jt="['\u2019]",Bt=RegExp(Jt,"g");function Yt(r){return function(e){return Ht(Ft(Vt(e).replace(Bt,"")),r,"")}}Er.exports=Yt});var Zr=i((dn,kr)=>{function $t(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++n<u;)o[n]=r[n+e];return o}kr.exports=$t});var Wr=i((ln,Ir)=>{var Kt=Zr();function Qt(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Kt(r,e,t)}Ir.exports=Qt});var C=i((cn,zr)=>{var Xt="\\ud800-\\udfff",ru="\\u0300-\\u036f",eu="\\ufe20-\\ufe2f",tu="\\u20d0-\\u20ff",uu=ru+eu+tu,nu="\\ufe0e\\ufe0f",iu="\\u200d",ou=RegExp("["+iu+Xt+uu+nu+"]");function au(r){return ou.test(r)}zr.exports=au});var Hr=i((mn,Gr)=>{function su(r){return r.split("")}Gr.exports=su});var Qr=i((pn,Kr)=>{var Vr="\\ud800-\\udfff",fu="\\u0300-\\u036f",du="\\ufe20-\\ufe2f",lu="\\u20d0-\\u20ff",cu=fu+du+lu,mu="\\ufe0e\\ufe0f",pu="["+Vr+"]",v="["+cu+"]",S="\\ud83c[\\udffb-\\udfff]",gu="(?:"+v+"|"+S+")",Fr="[^"+Vr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",xu="\\u200d",Yr=gu+"?",$r="["+mu+"]?",bu="(?:"+xu+"(?:"+[Fr,Jr,Br].join("|")+")"+$r+Yr+")*",hu=$r+Yr+bu,yu="(?:"+[Fr+v+"?",v,Jr,Br,pu].join("|")+")",Tu=RegExp(S+"(?="+S+")|"+yu+hu,"g");function Cu(r){return r.match(Tu)||[]}Kr.exports=Cu});var re=i((gn,Xr)=>{var vu=Hr(),Su=C(),wu=Qr();function Ru(r){return Su(r)?wu(r):vu(r)}Xr.exports=Ru});var te=i((xn,ee)=>{var Pu=Wr(),qu=C(),Au=re(),Ou=h();function Lu(r){return function(e){e=Ou(e);var t=qu(e)?Au(e):void 0,n=t?t[0]:e.charAt(0),u=t?Pu(t,1).join(""):e.slice(1);return n[r]()+u}}ee.exports=Lu});var ne=i((bn,ue)=>{var ju=te(),Mu=ju("toUpperCase");ue.exports=Mu});var oe=i((hn,ie)=>{var Uu=Dr(),_u=ne(),Nu=Uu(function(r,e,t){return r+(t?" ":"")+_u(e)});ie.exports=Nu});var ae=Te(oe());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function Eu(r,e){return x(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,o;try{u=yield e(...n)}catch(a){u=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let d={key:t};u!==void 0&&(u=se(u),d.result={type:"string",value:u}),o!==void 0&&(d.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function Du(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Eu(e,r.run)),g(l({},r),{json:JSON.stringify(Zu(r),null,2)})}var ku=`
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
    `,fe=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Zu(r){let{name:e,description:t,author:n,result:u,params:o,about:d,video:s}=r,{icon:a=fe}=r;return a==="glide"&&(a=ku),{name:e,description:t,author:n,result:u,about:d,icon:a,video:s,params:Object.entries(o).map(([f,T])=>l({name:f},T))}}var Iu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,run(){return x(this,null,function*(){})}},y=class{constructor(e={},t=[]){this.definition=l(l({},Iu),e),this.requiredParams=[...t]}with(e,t=[]){return new y(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n,u){return n===void 0&&(n=(0,ae.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:n}})},u==="required"?[t]:[])}withStringParam(e,t){return this.withParam("string",e,t)}withRequiredStringParam(e,t){return this.withParam("string",e,t,"required")}withRequiredNumberParam(e,t){return this.withParam("number",e,t,"required")}withNumberParam(e,t){return this.withParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function o(...d){return x(this,null,function*(){let s={};if(d.forEach(({value:f},T)=>{s[u[T]]=f}),n.some(f=>s[f]===void 0))return;let a=e(s);return Promise.resolve(a)})}return Du(g(l({},this.definition),{run:o}))}};function de(r){return new y({name:r})}var Cn=de("Base64 Encode").withDescription("A common binary encoding for text.").withStringResult().withRequiredStringParam("text").withExample({text:"Hello, world!"}).run(({text:r})=>btoa(r));})();
//# sourceMappingURL=index.js.map
