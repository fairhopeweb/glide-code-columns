(()=>{var ge=Object.create;var m=Object.defineProperty,xe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,Te=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var q=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))P.call(e,t)&&q(r,t,e[t]);if(R)for(var t of R(e))Ce.call(e,t)&&q(r,t,e[t]);return r},g=(r,e)=>xe(r,he(e)),ve=r=>m(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var we=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ye(e))!P.call(r,n)&&n!=="default"&&m(r,n,{get:()=>e[n],enumerable:!(t=be(e,n))||t.enumerable});return r},A=r=>we(ve(m(r!=null?ge(Te(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var x=(r,e,t)=>new Promise((n,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},d=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,d);s((t=t.apply(r,e)).next())});var L=i((Ju,O)=>{function Se(r,e,t,n){var u=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}O.exports=Se});var M=i((Bu,j)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}j.exports=Re});var _=i((Yu,U)=>{var Pe=M(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=Pe(qe);U.exports=Ae});var E=i(($u,N)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Oe});var k=i((Ku,D)=>{var Le=E(),je=typeof self=="object"&&self&&self.Object===Object&&self,Me=Le||je||Function("return this")();D.exports=Me});var b=i((Qu,Z)=>{var Ue=k(),_e=Ue.Symbol;Z.exports=_e});var W=i((Xu,I)=>{function Ne(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}I.exports=Ne});var G=i((rn,z)=>{var Ee=Array.isArray;z.exports=Ee});var J=i((en,H)=>{var V=b(),F=Object.prototype,De=F.hasOwnProperty,ke=F.toString,p=V?V.toStringTag:void 0;function Ze(r){var e=De.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(o){}var u=ke.call(r);return n&&(e?r[p]=t:delete r[p]),u}H.exports=Ze});var Y=i((tn,B)=>{var Ie=Object.prototype,We=Ie.toString;function ze(r){return We.call(r)}B.exports=ze});var X=i((un,Q)=>{var $=b(),Ge=J(),Ve=Y(),Fe="[object Null]",He="[object Undefined]",K=$?$.toStringTag:void 0;function Je(r){return r==null?r===void 0?He:Fe:K&&K in Object(r)?Ge(r):Ve(r)}Q.exports=Je});var er=i((nn,rr)=>{function Be(r){return r!=null&&typeof r=="object"}rr.exports=Be});var ur=i((on,tr)=>{var Ye=X(),$e=er(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}tr.exports=Qe});var fr=i((an,sr)=>{var nr=b(),Xe=W(),rt=G(),et=ur(),tt=1/0,ir=nr?nr.prototype:void 0,or=ir?ir.toString:void 0;function ar(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ar)+"";if(et(r))return or?or.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}sr.exports=ar});var h=i((sn,dr)=>{var ut=fr();function nt(r){return r==null?"":ut(r)}dr.exports=nt});var cr=i((fn,lr)=>{var it=_(),ot=h(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ft+dt,ct="["+lt+"]",pt=RegExp(ct,"g");function mt(r){return r=ot(r),r&&r.replace(at,it).replace(pt,"")}lr.exports=mt});var mr=i((dn,pr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(gt)||[]}pr.exports=xt});var xr=i((ln,gr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return bt.test(r)}gr.exports=ht});var Nr=i((cn,_r)=>{var br="\\ud800-\\udfff",yt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",vt=yt+Tt+Ct,hr="\\u2700-\\u27bf",yr="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",Pt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",Cr=wt+St+Rt+Pt,vr="['\u2019]",wr="["+Cr+"]",At="["+vt+"]",Sr="\\d+",Ot="["+hr+"]",Rr="["+yr+"]",Pr="[^"+br+Cr+Sr+hr+yr+Tr+"]",Lt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+At+"|"+Lt+")",Mt="[^"+br+"]",qr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Tr+"]",Ut="\\u200d",Or="(?:"+Rr+"|"+Pr+")",_t="(?:"+c+"|"+Pr+")",Lr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",jr="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",Mr=jt+"?",Ur="["+qt+"]?",Nt="(?:"+Ut+"(?:"+[Mt,qr,Ar].join("|")+")"+Ur+Mr+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Ur+Mr+Nt,Zt="(?:"+[Ot,qr,Ar].join("|")+")"+kt,It=RegExp([c+"?"+Rr+"+"+Lr+"(?="+[wr,c,"$"].join("|")+")",_t+"+"+jr+"(?="+[wr,c+Or,"$"].join("|")+")",c+"?"+Or+"+"+Lr,c+"+"+jr,Dt,Et,Sr,Zt].join("|"),"g");function Wt(r){return r.match(It)||[]}_r.exports=Wt});var Dr=i((pn,Er)=>{var zt=mr(),Gt=xr(),Vt=h(),Ft=Nr();function Ht(r,e,t){return r=Vt(r),e=t?void 0:e,e===void 0?Gt(r)?Ft(r):zt(r):r.match(e)||[]}Er.exports=Ht});var C=i((mn,kr)=>{var Jt=L(),Bt=cr(),Yt=Dr(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Jt(Yt(Bt(e).replace(Kt,"")),r,"")}}kr.exports=Qt});var Ir=i((gn,Zr)=>{function Xt(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++n<u;)o[n]=r[n+e];return o}Zr.exports=Xt});var zr=i((xn,Wr)=>{var ru=Ir();function eu(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:ru(r,e,t)}Wr.exports=eu});var v=i((bn,Gr)=>{var tu="\\ud800-\\udfff",uu="\\u0300-\\u036f",nu="\\ufe20-\\ufe2f",iu="\\u20d0-\\u20ff",ou=uu+nu+iu,au="\\ufe0e\\ufe0f",su="\\u200d",fu=RegExp("["+su+tu+ou+au+"]");function du(r){return fu.test(r)}Gr.exports=du});var Fr=i((hn,Vr)=>{function lu(r){return r.split("")}Vr.exports=lu});var Xr=i((yn,Qr)=>{var Hr="\\ud800-\\udfff",cu="\\u0300-\\u036f",pu="\\ufe20-\\ufe2f",mu="\\u20d0-\\u20ff",gu=cu+pu+mu,xu="\\ufe0e\\ufe0f",bu="["+Hr+"]",w="["+gu+"]",S="\\ud83c[\\udffb-\\udfff]",hu="(?:"+w+"|"+S+")",Jr="[^"+Hr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",yu="\\u200d",$r=hu+"?",Kr="["+xu+"]?",Tu="(?:"+yu+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",Cu=Kr+$r+Tu,vu="(?:"+[Jr+w+"?",w,Br,Yr,bu].join("|")+")",wu=RegExp(S+"(?="+S+")|"+vu+Cu,"g");function Su(r){return r.match(wu)||[]}Qr.exports=Su});var ee=i((Tn,re)=>{var Ru=Fr(),Pu=v(),qu=Xr();function Au(r){return Pu(r)?qu(r):Ru(r)}re.exports=Au});var ue=i((Cn,te)=>{var Ou=zr(),Lu=v(),ju=ee(),Mu=h();function Uu(r){return function(e){e=Mu(e);var t=Lu(e)?ju(e):void 0,n=t?t[0]:e.charAt(0),u=t?Ou(t,1).join(""):e.slice(1);return n[r]()+u}}te.exports=Uu});var ie=i((vn,ne)=>{var _u=ue(),Nu=_u("toUpperCase");ne.exports=Nu});var ae=i((wn,oe)=>{var Eu=C(),Du=ie(),ku=Eu(function(r,e,t){return r+(t?" ":"")+Du(e)});oe.exports=ku});var pe=i((Rn,ce)=>{var Vu=C(),Fu=Vu(function(r,e,t){return r+(t?" ":"")+e.toLowerCase()});ce.exports=Fu});var se=A(ae());function fe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(fe):r}function Zu(r,e){return x(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,o;try{u=yield e(...n)}catch(a){u=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let d={key:t};u!==void 0&&(u=fe(u),d.result={type:"string",value:u}),o!==void 0&&(d.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function Iu(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Zu(e,r.run)),g(l({},r),{json:JSON.stringify(zu(r),null,2)})}var Wu=`
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
</svg>`;function zu(r){let{name:e,description:t,author:n,result:u,params:o,about:d,video:s}=r,{icon:a=de}=r;return a==="glide"&&(a=Wu),{name:e,description:t,author:n,result:u,about:d,icon:a,video:s,params:Object.entries(o).map(([f,T])=>l({name:f},T))}}var Gu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:de,about:void 0,video:void 0,run(){return x(this,null,function*(){})}},y=class{constructor(e={},t=[]){this.definition=l(l({},Gu),e),this.requiredParams=[...t]}with(e,t=[]){return new y(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n,u){return n===void 0&&(n=(0,se.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:n}})},u==="required"?[t]:[])}withStringParam(e,t){return this.withParam("string",e,t)}withRequiredStringParam(e,t){return this.withParam("string",e,t,"required")}withRequiredNumberParam(e,t){return this.withParam("number",e,t,"required")}withNumberParam(e,t){return this.withParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function o(...d){return x(this,null,function*(){let s={};if(d.forEach(({value:f},T)=>{s[u[T]]=f}),n.some(f=>s[f]===void 0))return;let a=e(s);return Promise.resolve(a)})}return Iu(g(l({},this.definition),{run:o}))}};function le(r){return new y({name:r})}var me=A(pe()),qn=le("Lowercase Text").withDescription("Converts string, as space separated words, to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"--Foo-Bar--"}).run(({text:r})=>r===void 0?void 0:(0,me.default)(r));})();
//# sourceMappingURL=index.js.map
