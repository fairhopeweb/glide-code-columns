(()=>{var xe=Object.create;var g=Object.defineProperty,be=Object.defineProperties,he=Object.getOwnPropertyDescriptor,Te=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,Ce=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&P(r,t,e[t]);if(S)for(var t of S(e))ve.call(e,t)&&P(r,t,e[t]);return r},m=(r,e)=>be(r,Te(e)),we=r=>g(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Se=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ye(e))!R.call(r,n)&&n!=="default"&&g(r,n,{get:()=>e[n],enumerable:!(t=he(e,n))||t.enumerable});return r},A=r=>Se(we(g(r!=null?xe(Ce(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var T=(r,e,t)=>new Promise((n,u)=>{var a=o=>{try{s(t.next(o))}catch(f){u(f)}},l=o=>{try{s(t.throw(o))}catch(f){u(f)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,l);s((t=t.apply(r,e)).next())});var O=i(($n,q)=>{function Re(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}q.exports=Re});var j=i((Bn,L)=>{function Pe(r){return function(e){return r==null?void 0:r[e]}}L.exports=Pe});var U=i((Yn,M)=>{var Ae=j(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Oe=Ae(qe);M.exports=Oe});var N=i((Kn,_)=>{var Le=typeof global=="object"&&global&&global.Object===Object&&global;_.exports=Le});var Z=i((Qn,E)=>{var je=N(),Me=typeof self=="object"&&self&&self.Object===Object&&self,Ue=je||Me||Function("return this")();E.exports=Ue});var x=i((Xn,D)=>{var _e=Z(),Ne=_e.Symbol;D.exports=Ne});var z=i((ru,k)=>{function Ee(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}k.exports=Ee});var W=i((eu,I)=>{var Ze=Array.isArray;I.exports=Ze});var F=i((tu,H)=>{var V=x(),G=Object.prototype,De=G.hasOwnProperty,ke=G.toString,p=V?V.toStringTag:void 0;function ze(r){var e=De.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(a){}var u=ke.call(r);return n&&(e?r[p]=t:delete r[p]),u}H.exports=ze});var $=i((nu,J)=>{var Ie=Object.prototype,We=Ie.toString;function Ve(r){return We.call(r)}J.exports=Ve});var Q=i((uu,K)=>{var B=x(),Ge=F(),He=$(),Fe="[object Null]",Je="[object Undefined]",Y=B?B.toStringTag:void 0;function $e(r){return r==null?r===void 0?Je:Fe:Y&&Y in Object(r)?Ge(r):He(r)}K.exports=$e});var rr=i((iu,X)=>{function Be(r){return r!=null&&typeof r=="object"}X.exports=Be});var tr=i((au,er)=>{var Ye=Q(),Ke=rr(),Qe="[object Symbol]";function Xe(r){return typeof r=="symbol"||Ke(r)&&Ye(r)==Qe}er.exports=Xe});var sr=i((ou,or)=>{var nr=x(),rt=z(),et=W(),tt=tr(),nt=1/0,ur=nr?nr.prototype:void 0,ir=ur?ur.toString:void 0;function ar(r){if(typeof r=="string")return r;if(et(r))return rt(r,ar)+"";if(tt(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-nt?"-0":e}or.exports=ar});var b=i((su,fr)=>{var ut=sr();function it(r){return r==null?"":ut(r)}fr.exports=it});var lr=i((fu,dr)=>{var at=U(),ot=b(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ft="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",ct=ft+dt+lt,mt="["+ct+"]",pt=RegExp(mt,"g");function gt(r){return r=ot(r),r&&r.replace(st,at).replace(pt,"")}dr.exports=gt});var mr=i((du,cr)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(xt)||[]}cr.exports=bt});var gr=i((lu,pr)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(r){return ht.test(r)}pr.exports=Tt});var _r=i((cu,Ur)=>{var xr="\\ud800-\\udfff",yt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",vt="\\u20d0-\\u20ff",wt=yt+Ct+vt,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",St="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pt="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",yr=St+Rt+Pt+At,Cr="['\u2019]",vr="["+yr+"]",Ot="["+wt+"]",wr="\\d+",Lt="["+br+"]",Sr="["+hr+"]",Rr="[^"+xr+yr+wr+br+hr+Tr+"]",jt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+Ot+"|"+jt+")",Ut="[^"+xr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Tr+"]",_t="\\u200d",qr="(?:"+Sr+"|"+Rr+")",Nt="(?:"+c+"|"+Rr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=Mt+"?",Mr="["+qt+"]?",Et="(?:"+_t+"(?:"+[Ut,Pr,Ar].join("|")+")"+Mr+jr+")*",Zt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Mr+jr+Et,zt="(?:"+[Lt,Pr,Ar].join("|")+")"+kt,It=RegExp([c+"?"+Sr+"+"+Or+"(?="+[vr,c,"$"].join("|")+")",Nt+"+"+Lr+"(?="+[vr,c+qr,"$"].join("|")+")",c+"?"+qr+"+"+Or,c+"+"+Lr,Dt,Zt,wr,zt].join("|"),"g");function Wt(r){return r.match(It)||[]}Ur.exports=Wt});var Er=i((mu,Nr)=>{var Vt=mr(),Gt=gr(),Ht=b(),Ft=_r();function Jt(r,e,t){return r=Ht(r),e=t?void 0:e,e===void 0?Gt(r)?Ft(r):Vt(r):r.match(e)||[]}Nr.exports=Jt});var Dr=i((pu,Zr)=>{var $t=O(),Bt=lr(),Yt=Er(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(r){return function(e){return $t(Yt(Bt(e).replace(Qt,"")),r,"")}}Zr.exports=Xt});var zr=i((gu,kr)=>{function rn(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}kr.exports=rn});var Wr=i((xu,Ir)=>{var en=zr();function tn(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:en(r,e,t)}Ir.exports=tn});var y=i((bu,Vr)=>{var nn="\\ud800-\\udfff",un="\\u0300-\\u036f",an="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",sn=un+an+on,fn="\\ufe0e\\ufe0f",dn="\\u200d",ln=RegExp("["+dn+nn+sn+fn+"]");function cn(r){return ln.test(r)}Vr.exports=cn});var Hr=i((hu,Gr)=>{function mn(r){return r.split("")}Gr.exports=mn});var Xr=i((Tu,Qr)=>{var Fr="\\ud800-\\udfff",pn="\\u0300-\\u036f",gn="\\ufe20-\\ufe2f",xn="\\u20d0-\\u20ff",bn=pn+gn+xn,hn="\\ufe0e\\ufe0f",Tn="["+Fr+"]",C="["+bn+"]",v="\\ud83c[\\udffb-\\udfff]",yn="(?:"+C+"|"+v+")",Jr="[^"+Fr+"]",$r="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",Cn="\\u200d",Yr=yn+"?",Kr="["+hn+"]?",vn="(?:"+Cn+"(?:"+[Jr,$r,Br].join("|")+")"+Kr+Yr+")*",wn=Kr+Yr+vn,Sn="(?:"+[Jr+C+"?",C,$r,Br,Tn].join("|")+")",Rn=RegExp(v+"(?="+v+")|"+Sn+wn,"g");function Pn(r){return r.match(Rn)||[]}Qr.exports=Pn});var ee=i((yu,re)=>{var An=Hr(),qn=y(),On=Xr();function Ln(r){return qn(r)?On(r):An(r)}re.exports=Ln});var ne=i((Cu,te)=>{var jn=Wr(),Mn=y(),Un=ee(),_n=b();function Nn(r){return function(e){e=_n(e);var t=Mn(e)?Un(e):void 0,n=t?t[0]:e.charAt(0),u=t?jn(t,1).join(""):e.slice(1);return n[r]()+u}}te.exports=Nn});var ie=i((vu,ue)=>{var En=ne(),Zn=En("toUpperCase");ue.exports=Zn});var oe=i((wu,ae)=>{var Dn=Dr(),kn=ie(),zn=Dn(function(r,e,t){return r+(t?" ":"")+kn(e)});ae.exports=zn});var ce=i(le=>{"use strict";var Fn=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;le.validate=function(r){if(!r||r.length>254)return!1;var e=Fn.test(r);if(!e)return!1;var t=r.split("@");if(t[0].length>64)return!1;var n=t[1].split(".");return!n.some(function(u){return u.length>63})}});var w=A(oe());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function In(r,e){return T(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,a;try{u=yield e(...n)}catch(o){u=void 0;try{a=o.toString()}catch(f){a="Exception can't be stringified."}}let l={key:t};u!==void 0&&(u=se(u),l.result={type:"string",value:u}),a!==void 0&&(l.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Wn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>In(e,r.run)),m(d({},r),{json:JSON.stringify(Gn(r),null,2)})}var Vn=`
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
</svg>`;function Gn(r){let{name:e,category:t,description:n,author:u,result:a,params:l,about:s,video:o}=r,{icon:f=fe}=r;return f==="glide"&&(f=Vn),{name:e,category:t,description:n,author:u,result:a,about:s,icon:f,video:o,params:Object.entries(l).map(([pe,ge])=>d({name:pe},ge))}}var Hn={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,run(){return T(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Hn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,w.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return n===void 0&&(n=(0,w.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:n}})},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...l){let s={};if(l.forEach(({value:o},f)=>{s[u[f]]=o}),!n.some(o=>s[o]===void 0))return e(s)}return Wn(m(d({},this.definition),{run:a}))}};function de(r,e){return new h({name:r,category:e})}var me=A(ce()),Au=de("Email Validator","Text").withDescription("Indicates whether text is an email.").withBooleanResult().withStringParam("email").withExample({email:"hello@world.co"}).run(({email:r})=>r!==void 0&&me.default.validate(r));})();
//# sourceMappingURL=index.js.map
