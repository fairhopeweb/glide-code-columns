var Sr=Object.create;var w=Object.defineProperty,Mr=Object.defineProperties,kr=Object.getOwnPropertyDescriptor,Ar=Object.getOwnPropertyDescriptors,jr=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,qr=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable;var j=(r,e,t)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&j(r,t,e[t]);if(k)for(var t of k(e))Or.call(e,t)&&j(r,t,e[t]);return r},b=(r,e)=>Mr(r,Ar(e)),Dr=r=>w(r,"__esModule",{value:!0});var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ir=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of jr(e))!A.call(r,i)&&i!=="default"&&w(r,i,{get:()=>e[i],enumerable:!(t=kr(e,i))||t.enumerable});return r},Nr=r=>Ir(Dr(w(r!=null?Sr(qr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var h=(r,e,t)=>new Promise((i,n)=>{var u=a=>{try{l(t.next(a))}catch(o){n(o)}},d=a=>{try{l(t.throw(a))}catch(o){n(o)}},l=a=>a.done?i(a.value):Promise.resolve(a.value).then(u,d);l((t=t.apply(r,e)).next())});var I=s((yn,D)=>{function Ur(r,e,t,i){var n=-1,u=r==null?0:r.length;for(i&&u&&(t=r[++n]);++n<u;)t=e(t,r[n],n,r);return t}D.exports=Ur});var U=s((Pn,N)=>{function Vr(r){return function(e){return r==null?void 0:r[e]}}N.exports=Vr});var E=s((Cn,V)=>{var Er=U(),Lr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},_r=Er(Lr);V.exports=_r});var _=s((Rn,L)=>{var Hr=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=Hr});var z=s((Sn,H)=>{var zr=_(),Fr=typeof self=="object"&&self&&self.Object===Object&&self,Gr=zr||Fr||Function("return this")();H.exports=Gr});var x=s((Mn,F)=>{var Wr=z(),Br=Wr.Symbol;F.exports=Br});var W=s((kn,G)=>{function Zr(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}G.exports=Zr});var Z=s((An,B)=>{var $r=Array.isArray;B.exports=$r});var K=s((jn,Y)=>{var $=x(),J=Object.prototype,Jr=J.hasOwnProperty,Yr=J.toString,p=$?$.toStringTag:void 0;function Kr(r){var e=Jr.call(r,p),t=r[p];try{r[p]=void 0;var i=!0}catch(u){}var n=Yr.call(r);return i&&(e?r[p]=t:delete r[p]),n}Y.exports=Kr});var X=s((qn,Q)=>{var Qr=Object.prototype,Xr=Qr.toString;function et(r){return Xr.call(r)}Q.exports=et});var ie=s((On,te)=>{var ee=x(),rt=K(),tt=X(),it="[object Null]",nt="[object Undefined]",re=ee?ee.toStringTag:void 0;function at(r){return r==null?r===void 0?nt:it:re&&re in Object(r)?rt(r):tt(r)}te.exports=at});var ae=s((Dn,ne)=>{function st(r){return r!=null&&typeof r=="object"}ne.exports=st});var oe=s((In,se)=>{var ot=ie(),ut=ae(),lt="[object Symbol]";function dt(r){return typeof r=="symbol"||ut(r)&&ot(r)==lt}se.exports=dt});var he=s((Nn,me)=>{var ue=x(),ct=W(),mt=Z(),ht=oe(),ft=1/0,le=ue?ue.prototype:void 0,de=le?le.toString:void 0;function ce(r){if(typeof r=="string")return r;if(mt(r))return ct(r,ce)+"";if(ht(r))return de?de.call(r):"";var e=r+"";return e=="0"&&1/r==-ft?"-0":e}me.exports=ce});var v=s((Un,fe)=>{var gt=he();function pt(r){return r==null?"":gt(r)}fe.exports=pt});var pe=s((Vn,ge)=>{var wt=E(),bt=v(),xt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,vt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Pt=vt+Tt+yt,Ct="["+Pt+"]",Rt=RegExp(Ct,"g");function St(r){return r=bt(r),r&&r.replace(xt,wt).replace(Rt,"")}ge.exports=St});var be=s((En,we)=>{var Mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function kt(r){return r.match(Mt)||[]}we.exports=kt});var ve=s((Ln,xe)=>{var At=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function jt(r){return At.test(r)}xe.exports=jt});var Le=s((_n,Ee)=>{var Te="\\ud800-\\udfff",qt="\\u0300-\\u036f",Ot="\\ufe20-\\ufe2f",Dt="\\u20d0-\\u20ff",It=qt+Ot+Dt,ye="\\u2700-\\u27bf",Pe="a-z\\xdf-\\xf6\\xf8-\\xff",Nt="\\xac\\xb1\\xd7\\xf7",Ut="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Vt="\\u2000-\\u206f",Et=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",Lt="\\ufe0e\\ufe0f",Re=Nt+Ut+Vt+Et,Se="['\u2019]",Me="["+Re+"]",_t="["+It+"]",ke="\\d+",Ht="["+ye+"]",Ae="["+Pe+"]",je="[^"+Te+Re+ke+ye+Pe+Ce+"]",zt="\\ud83c[\\udffb-\\udfff]",Ft="(?:"+_t+"|"+zt+")",Gt="[^"+Te+"]",qe="(?:\\ud83c[\\udde6-\\uddff]){2}",Oe="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+Ce+"]",Wt="\\u200d",De="(?:"+Ae+"|"+je+")",Bt="(?:"+f+"|"+je+")",Ie="(?:"+Se+"(?:d|ll|m|re|s|t|ve))?",Ne="(?:"+Se+"(?:D|LL|M|RE|S|T|VE))?",Ue=Ft+"?",Ve="["+Lt+"]?",Zt="(?:"+Wt+"(?:"+[Gt,qe,Oe].join("|")+")"+Ve+Ue+")*",$t="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Jt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Yt=Ve+Ue+Zt,Kt="(?:"+[Ht,qe,Oe].join("|")+")"+Yt,Qt=RegExp([f+"?"+Ae+"+"+Ie+"(?="+[Me,f,"$"].join("|")+")",Bt+"+"+Ne+"(?="+[Me,f+De,"$"].join("|")+")",f+"?"+De+"+"+Ie,f+"+"+Ne,Jt,$t,ke,Kt].join("|"),"g");function Xt(r){return r.match(Qt)||[]}Ee.exports=Xt});var He=s((Hn,_e)=>{var ei=be(),ri=ve(),ti=v(),ii=Le();function ni(r,e,t){return r=ti(r),e=t?void 0:e,e===void 0?ri(r)?ii(r):ei(r):r.match(e)||[]}_e.exports=ni});var Fe=s((zn,ze)=>{var ai=I(),si=pe(),oi=He(),ui="['\u2019]",li=RegExp(ui,"g");function di(r){return function(e){return ai(oi(si(e).replace(li,"")),r,"")}}ze.exports=di});var We=s((Fn,Ge)=>{function ci(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(n);++i<n;)u[i]=r[i+e];return u}Ge.exports=ci});var Ze=s((Gn,Be)=>{var mi=We();function hi(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:mi(r,e,t)}Be.exports=hi});var P=s((Wn,$e)=>{var fi="\\ud800-\\udfff",gi="\\u0300-\\u036f",pi="\\ufe20-\\ufe2f",wi="\\u20d0-\\u20ff",bi=gi+pi+wi,xi="\\ufe0e\\ufe0f",vi="\\u200d",Ti=RegExp("["+vi+fi+bi+xi+"]");function yi(r){return Ti.test(r)}$e.exports=yi});var Ye=s((Bn,Je)=>{function Pi(r){return r.split("")}Je.exports=Pi});var nr=s((Zn,ir)=>{var Ke="\\ud800-\\udfff",Ci="\\u0300-\\u036f",Ri="\\ufe20-\\ufe2f",Si="\\u20d0-\\u20ff",Mi=Ci+Ri+Si,ki="\\ufe0e\\ufe0f",Ai="["+Ke+"]",C="["+Mi+"]",R="\\ud83c[\\udffb-\\udfff]",ji="(?:"+C+"|"+R+")",Qe="[^"+Ke+"]",Xe="(?:\\ud83c[\\udde6-\\uddff]){2}",er="[\\ud800-\\udbff][\\udc00-\\udfff]",qi="\\u200d",rr=ji+"?",tr="["+ki+"]?",Oi="(?:"+qi+"(?:"+[Qe,Xe,er].join("|")+")"+tr+rr+")*",Di=tr+rr+Oi,Ii="(?:"+[Qe+C+"?",C,Xe,er,Ai].join("|")+")",Ni=RegExp(R+"(?="+R+")|"+Ii+Di,"g");function Ui(r){return r.match(Ni)||[]}ir.exports=Ui});var sr=s(($n,ar)=>{var Vi=Ye(),Ei=P(),Li=nr();function _i(r){return Ei(r)?Li(r):Vi(r)}ar.exports=_i});var ur=s((Jn,or)=>{var Hi=Ze(),zi=P(),Fi=sr(),Gi=v();function Wi(r){return function(e){e=Gi(e);var t=zi(e)?Fi(e):void 0,i=t?t[0]:e.charAt(0),n=t?Hi(t,1).join(""):e.slice(1);return i[r]()+n}}or.exports=Wi});var dr=s((Yn,lr)=>{var Bi=ur(),Zi=Bi("toUpperCase");lr.exports=Zi});var mr=s((Kn,cr)=>{var $i=Fe(),Ji=dr(),Yi=$i(function(r,e,t){return r+(t?" ":"")+Ji(e)});cr.exports=Yi});var wr=s((g,pr)=>{"use strict";var hn=function(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof m!="undefined")return m;throw new Error("unable to locate global object")},m=hn();pr.exports=g=m.fetch;m.fetch&&(g.default=m.fetch.bind(m));g.Headers=m.Headers;g.Request=m.Request;g.Response=m.Response});var yr=s((ra,Tr)=>{"use strict";function fn(r){if(r&&r.__esModule)return r;var e=Object.create(null);return r&&Object.keys(r).forEach(function(t){if(t!=="default"){var i=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return r[t]}})}}),e.default=r,Object.freeze(e)}var br="https://secure.gravatar.com",M={defaultIcon:"404",rating:"G",size:"80"},gn=r=>Object.entries(r).map(e=>e.map(encodeURIComponent).join("=")).join("&"),pn=r=>{for(var e=[],t=0;t<64;)e[t]=0|Math.sin(++t%Math.PI)*4294967296;var i,n,u,d=[i=1732584193,n=4023233417,~i,~n],l=[],a=unescape(encodeURI(r))+"\x80",o=a.length;for(r=--o/4+2|15,l[--r]=o*8;~o;)l[o>>2]|=a.charCodeAt(o)<<8*o--;for(t=a=0;t<r;t+=16){for(o=d;a<64;o=[u=o[3],i+((u=o[0]+[i&n|~i&u,u&i|~u&n,i^n^u,n^(i|~u)][o=a>>4]+e[a]+~~l[t|[a,5*a+1,3*a+5,7*a][o]&15])<<(o=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*o+a++%4])|u>>>-o),i,n])i=o[1]|0,n=o[2];for(a=4;a;)d[--a]+=o[a]}for(r="";a<32;)r+=(d[a>>3]>>(1^a++)*4&15).toString(16);return r},xr=r=>pn(r.trim().toLowerCase()),vr=async function(){return typeof window!="undefined"?window.fetch(...arguments):await Promise.resolve().then(function(){return fn(wr())}).then(r=>r.default(...arguments))},wn={url(r,e={}){let t={d:e.defaultIcon||M.defaultIcon,r:e.rating||M.rating,s:e.size||M.size};return`${br}/avatar/${xr(r)}?${gn(t)}`},async profiles(r,e={format:"json"}){let t=`${br}/${e.hash===!1?r:xr(r)}.${e.format}`;return vr(t).then(i=>i.json()).then(i=>i.entry)},async resolve(r,e={}){let t=this.url(r,e);return vr(t,{method:"HEAD"}).then(i=>i.status===200?t:Promise.reject("Avatar does not exist"))}};Tr.exports=wn});var q={timeoutSeconds:5*60};function O(r){return(new Date().getTime()-r.getTime())/1e3}var y=class{constructor(e=q){this.cache=new Map;this.props=c(c({},e),q)}get(e){return h(this,null,function*(){var n;let{timestamp:t,item:i}=(n=this.cache.get(e))!=null?n:{timestamp:new Date(0)};if(O(t)<this.props.timeoutSeconds)return i;this.cache.delete(e)})}getWith(e,t){return h(this,null,function*(){var u;let{timestamp:i,item:n}=(u=this.cache.get(e))!=null?u:{timestamp:new Date(0)};if(O(i)<this.props.timeoutSeconds)return n;{let d=yield t(e);return this.set(e,d),d}})}set(e,t){return this.cache.set(e,{timestamp:new Date,item:t})}fetch(i){return h(this,arguments,function*(e,t=e){return yield this.getWith(t,()=>fetch(e).then(n=>n.json()))})}};var fr=Nr(mr());var Ki=`
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
    `,Qi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Xi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,hr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,en=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,rn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,tn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,an=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,sn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,on=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,un=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,ln={Glide:Ki,"Machine Learning":on,General:hr,Array:en,Number:Xi,Encoding:un,Text:sn,"Data & APIs":an,Image:rn,Fun:tn,"Date & Time":nn,Code:Qi};function S({icon:r,category:e}){var t;return(t=r!=null?r:ln[e])!=null?t:hr}function dn(r){return b(c({},r),{json:JSON.stringify(cn(r),null,2)})}function cn(r){let{name:e,category:t,released:i,description:n,author:u,result:d,params:l,about:a,video:o}=r,Pr=S(r);return{name:e,category:t,released:i,description:n,author:u,result:d,about:a,icon:Pr,video:o,params:Object.entries(l).map(([Cr,Rr])=>c({name:Cr},Rr))}}var mn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return h(this,null,function*(){})}},T=class{constructor(e={},t=[]){this.definition=c(c({},mn),e),this.requiredParams=[...t]}with(e,t=[]){return new T(c(c({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:S({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,fr.default)(t)),this.with({params:b(c({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...d){let l={};if(d.forEach(({value:a},o)=>{l[n[o]]=a}),!i.some(a=>l[a]===void 0))return e(l)}return dn(b(c({},this.definition),{run:u}))}};function gr(r){return new T({name:r})}var bn=yr(),xn=new y,na=gr("Email to Photo").withCategory("Image").withReleased("direct").withDescription("Uses gravatar.com to find a person's photo given their email address.").withRequiredStringParam("email").withNumberParam("size").withImageResult().withFailingTest({email:"david@glideapps.com"},"???").run(t=>h(void 0,[t],function*({email:r,size:e=200}){try{return yield xn.getWith(r,()=>bn.resolve(r,{defaultIcon:"404",size:e}))}catch(i){return}}));export{na as default};
//# sourceMappingURL=function.js.map
