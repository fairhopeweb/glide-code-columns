(()=>{var ce=Object.create;var m=Object.defineProperty,de=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,me=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,ge=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))w.call(e,t)&&R(r,t,e[t]);if(S)for(var t of S(e))be.call(e,t)&&R(r,t,e[t]);return r},x=(r,e)=>de(r,me(e)),he=r=>m(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of xe(e))!w.call(r,n)&&n!=="default"&&m(r,n,{get:()=>e[n],enumerable:!(t=pe(e,n))||t.enumerable});return r},Te=r=>ye(he(m(r!=null?ce(ge(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var g=(r,e,t)=>new Promise((n,u)=>{var o=a=>{try{s(t.next(a))}catch(c){u(c)}},f=a=>{try{s(t.throw(a))}catch(c){u(c)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,f);s((t=t.apply(r,e)).next())});var P=i((zu,A)=>{function Ce(r,e,t,n){var u=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}A.exports=Ce});var L=i((Gu,O)=>{function ve(r){return function(e){return r==null?void 0:r[e]}}O.exports=ve});var q=i((Vu,j)=>{var Se=L(),we={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Re=Se(we);j.exports=Re});var U=i((Hu,M)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;M.exports=Ae});var E=i((Fu,_)=>{var Pe=U(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=Pe||Oe||Function("return this")();_.exports=Le});var b=i((Ju,N)=>{var je=E(),qe=je.Symbol;N.exports=qe});var k=i((Bu,D)=>{function Me(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}D.exports=Me});var W=i((Yu,Z)=>{var Ue=Array.isArray;Z.exports=Ue});var V=i(($u,G)=>{var I=b(),z=Object.prototype,_e=z.hasOwnProperty,Ee=z.toString,p=I?I.toStringTag:void 0;function Ne(r){var e=_e.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(o){}var u=Ee.call(r);return n&&(e?r[p]=t:delete r[p]),u}G.exports=Ne});var F=i((Ku,H)=>{var De=Object.prototype,ke=De.toString;function Ze(r){return ke.call(r)}H.exports=Ze});var $=i((Qu,Y)=>{var J=b(),We=V(),Ie=F(),ze="[object Null]",Ge="[object Undefined]",B=J?J.toStringTag:void 0;function Ve(r){return r==null?r===void 0?Ge:ze:B&&B in Object(r)?We(r):Ie(r)}Y.exports=Ve});var Q=i((Xu,K)=>{function He(r){return r!=null&&typeof r=="object"}K.exports=He});var rr=i((rn,X)=>{var Fe=$(),Je=Q(),Be="[object Symbol]";function Ye(r){return typeof r=="symbol"||Je(r)&&Fe(r)==Be}X.exports=Ye});var or=i((en,ir)=>{var er=b(),$e=k(),Ke=W(),Qe=rr(),Xe=1/0,tr=er?er.prototype:void 0,ur=tr?tr.toString:void 0;function nr(r){if(typeof r=="string")return r;if(Ke(r))return $e(r,nr)+"";if(Qe(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-Xe?"-0":e}ir.exports=nr});var h=i((tn,ar)=>{var rt=or();function et(r){return r==null?"":rt(r)}ar.exports=et});var fr=i((un,sr)=>{var tt=q(),ut=h(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",st=it+ot+at,ft="["+st+"]",lt=RegExp(ft,"g");function ct(r){return r=ut(r),r&&r.replace(nt,tt).replace(lt,"")}sr.exports=ct});var cr=i((nn,lr)=>{var dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(dt)||[]}lr.exports=pt});var pr=i((on,dr)=>{var mt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return mt.test(r)}dr.exports=xt});var Mr=i((an,qr)=>{var mr="\\ud800-\\udfff",gt="\\u0300-\\u036f",bt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",yt=gt+bt+ht,xr="\\u2700-\\u27bf",gr="a-z\\xdf-\\xf6\\xf8-\\xff",Tt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",wt="\\ufe0e\\ufe0f",hr=Tt+Ct+vt+St,yr="['\u2019]",Tr="["+hr+"]",Rt="["+yt+"]",Cr="\\d+",At="["+xr+"]",vr="["+gr+"]",Sr="[^"+mr+hr+Cr+xr+gr+br+"]",Pt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Rt+"|"+Pt+")",Lt="[^"+mr+"]",wr="(?:\\ud83c[\\udde6-\\uddff]){2}",Rr="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+br+"]",jt="\\u200d",Ar="(?:"+vr+"|"+Sr+")",qt="(?:"+d+"|"+Sr+")",Pr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Ot+"?",jr="["+wt+"]?",Mt="(?:"+jt+"(?:"+[Lt,wr,Rr].join("|")+")"+jr+Lr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=jr+Lr+Mt,Nt="(?:"+[At,wr,Rr].join("|")+")"+Et,Dt=RegExp([d+"?"+vr+"+"+Pr+"(?="+[Tr,d,"$"].join("|")+")",qt+"+"+Or+"(?="+[Tr,d+Ar,"$"].join("|")+")",d+"?"+Ar+"+"+Pr,d+"+"+Or,_t,Ut,Cr,Nt].join("|"),"g");function kt(r){return r.match(Dt)||[]}qr.exports=kt});var _r=i((sn,Ur)=>{var Zt=cr(),Wt=pr(),It=h(),zt=Mr();function Gt(r,e,t){return r=It(r),e=t?void 0:e,e===void 0?Wt(r)?zt(r):Zt(r):r.match(e)||[]}Ur.exports=Gt});var Nr=i((fn,Er)=>{var Vt=P(),Ht=fr(),Ft=_r(),Jt="['\u2019]",Bt=RegExp(Jt,"g");function Yt(r){return function(e){return Vt(Ft(Ht(e).replace(Bt,"")),r,"")}}Er.exports=Yt});var kr=i((ln,Dr)=>{function $t(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++n<u;)o[n]=r[n+e];return o}Dr.exports=$t});var Wr=i((cn,Zr)=>{var Kt=kr();function Qt(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Kt(r,e,t)}Zr.exports=Qt});var T=i((dn,Ir)=>{var Xt="\\ud800-\\udfff",ru="\\u0300-\\u036f",eu="\\ufe20-\\ufe2f",tu="\\u20d0-\\u20ff",uu=ru+eu+tu,nu="\\ufe0e\\ufe0f",iu="\\u200d",ou=RegExp("["+iu+Xt+uu+nu+"]");function au(r){return ou.test(r)}Ir.exports=au});var Gr=i((pn,zr)=>{function su(r){return r.split("")}zr.exports=su});var Kr=i((mn,$r)=>{var Vr="\\ud800-\\udfff",fu="\\u0300-\\u036f",lu="\\ufe20-\\ufe2f",cu="\\u20d0-\\u20ff",du=fu+lu+cu,pu="\\ufe0e\\ufe0f",mu="["+Vr+"]",C="["+du+"]",v="\\ud83c[\\udffb-\\udfff]",xu="(?:"+C+"|"+v+")",Hr="[^"+Vr+"]",Fr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",gu="\\u200d",Br=xu+"?",Yr="["+pu+"]?",bu="(?:"+gu+"(?:"+[Hr,Fr,Jr].join("|")+")"+Yr+Br+")*",hu=Yr+Br+bu,yu="(?:"+[Hr+C+"?",C,Fr,Jr,mu].join("|")+")",Tu=RegExp(v+"(?="+v+")|"+yu+hu,"g");function Cu(r){return r.match(Tu)||[]}$r.exports=Cu});var Xr=i((xn,Qr)=>{var vu=Gr(),Su=T(),wu=Kr();function Ru(r){return Su(r)?wu(r):vu(r)}Qr.exports=Ru});var ee=i((gn,re)=>{var Au=Wr(),Pu=T(),Ou=Xr(),Lu=h();function ju(r){return function(e){e=Lu(e);var t=Pu(e)?Ou(e):void 0,n=t?t[0]:e.charAt(0),u=t?Au(t,1).join(""):e.slice(1);return n[r]()+u}}re.exports=ju});var ue=i((bn,te)=>{var qu=ee(),Mu=qu("toUpperCase");te.exports=Mu});var ie=i((hn,ne)=>{var Uu=Nr(),_u=ue(),Eu=Uu(function(r,e,t){return r+(t?" ":"")+_u(e)});ne.exports=Eu});var oe=Te(ie());function ae(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(ae):r}function Nu(r,e){return g(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,o;try{u=yield e(...n)}catch(a){u=void 0;try{o=a.toString()}catch(c){o="Exception can't be stringified."}}let f={key:t};u!==void 0&&(u=ae(u),f.result={type:"string",value:u}),o!==void 0&&(f.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,f,"*")})}function Du(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Nu(e,r.run)),x(l({},r),{json:JSON.stringify(Zu(r),null,2)})}var ku=`
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
    `,se=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Zu(r){let{name:e,description:t,author:n,result:u,params:o,about:f,video:s}=r,{icon:a=se}=r;return a==="glide"&&(a=ku),{name:e,description:t,author:n,result:u,about:f,icon:a,video:s,params:Object.entries(o).map(([c,le])=>l({name:c},le))}}var Wu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,run(){return g(this,null,function*(){})}},y=class{constructor(e={}){this.definition=l(l({},Wu),e)}with(e){return new y(l(l({},this.definition),e))}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,oe.default)(t)),this.with({params:x(l({},this.definition.params),{[t]:{type:e,displayName:n}})})}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=Object.keys(t);function u(...o){return g(this,null,function*(){let f={};o.forEach(({value:a},c)=>{f[n[c]]=a});let s=e(f);return Promise.resolve(s)})}return Du(x(l({},this.definition),{run:u}))}};function fe(r){return new y({name:r})}var Cn=fe("Trim Whitespace").withDescription("Remove whitespace around text.").withStringResult().withStringParam("text").withExample({text:" hello "}).run(({text:r})=>r==null?void 0:r.trim());})();
//# sourceMappingURL=index.js.map
