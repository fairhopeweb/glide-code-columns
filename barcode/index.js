(()=>{var fe=Object.create;var p=Object.defineProperty,le=Object.defineProperties,ce=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,me=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,ge=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,x=(r,e)=>{for(var t in e||(e={}))w.call(e,t)&&S(r,t,e[t]);if(v)for(var t of v(e))be.call(e,t)&&S(r,t,e[t]);return r},R=(r,e)=>le(r,pe(e)),xe=r=>p(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var he=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of me(e))!w.call(r,u)&&u!=="default"&&p(r,u,{get:()=>e[u],enumerable:!(t=ce(e,u))||t.enumerable});return r},ye=r=>he(xe(p(r!=null?fe(ge(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var m=(r,e,t)=>new Promise((u,n)=>{var o=a=>{try{s(t.next(a))}catch(f){n(f)}},d=a=>{try{s(t.throw(a))}catch(f){n(f)}},s=a=>a.done?u(a.value):Promise.resolve(a.value).then(o,d);s((t=t.apply(r,e)).next())});var A=i((zn,P)=>{function Ce(r,e,t,u){var n=-1,o=r==null?0:r.length;for(u&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}P.exports=Ce});var O=i((Wn,q)=>{function Te(r){return function(e){return r==null?void 0:r[e]}}q.exports=Te});var j=i((Gn,M)=>{var ve=O(),we={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Se=ve(we);M.exports=Se});var U=i((Fn,L)=>{var Re=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=Re});var V=i((Jn,_)=>{var Pe=U(),Ae=typeof self=="object"&&self&&self.Object===Object&&self,qe=Pe||Ae||Function("return this")();_.exports=qe});var g=i((Bn,H)=>{var Oe=V(),Me=Oe.Symbol;H.exports=Me});var Z=i(($n,N)=>{function je(r,e){for(var t=-1,u=r==null?0:r.length,n=Array(u);++t<u;)n[t]=e(r[t],t,r);return n}N.exports=je});var E=i((Yn,D)=>{var Le=Array.isArray;D.exports=Le});var W=i((Kn,z)=>{var k=g(),I=Object.prototype,Ue=I.hasOwnProperty,_e=I.toString,c=k?k.toStringTag:void 0;function Ve(r){var e=Ue.call(r,c),t=r[c];try{r[c]=void 0;var u=!0}catch(o){}var n=_e.call(r);return u&&(e?r[c]=t:delete r[c]),n}z.exports=Ve});var F=i((Qn,G)=>{var He=Object.prototype,Ne=He.toString;function Ze(r){return Ne.call(r)}G.exports=Ze});var Y=i((Xn,$)=>{var J=g(),De=W(),Ee=F(),ke="[object Null]",Ie="[object Undefined]",B=J?J.toStringTag:void 0;function ze(r){return r==null?r===void 0?Ie:ke:B&&B in Object(r)?De(r):Ee(r)}$.exports=ze});var Q=i((ru,K)=>{function We(r){return r!=null&&typeof r=="object"}K.exports=We});var rr=i((eu,X)=>{var Ge=Y(),Fe=Q(),Je="[object Symbol]";function Be(r){return typeof r=="symbol"||Fe(r)&&Ge(r)==Je}X.exports=Be});var or=i((tu,ir)=>{var er=g(),$e=Z(),Ye=E(),Ke=rr(),Qe=1/0,tr=er?er.prototype:void 0,nr=tr?tr.toString:void 0;function ur(r){if(typeof r=="string")return r;if(Ye(r))return $e(r,ur)+"";if(Ke(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-Qe?"-0":e}ir.exports=ur});var b=i((nu,ar)=>{var Xe=or();function rt(r){return r==null?"":Xe(r)}ar.exports=rt});var dr=i((uu,sr)=>{var et=j(),tt=b(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",at=ut+it+ot,st="["+at+"]",dt=RegExp(st,"g");function ft(r){return r=tt(r),r&&r.replace(nt,et).replace(dt,"")}sr.exports=ft});var lr=i((iu,fr)=>{var lt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ct(r){return r.match(lt)||[]}fr.exports=ct});var pr=i((ou,cr)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function mt(r){return pt.test(r)}cr.exports=mt});var Lr=i((au,jr)=>{var mr="\\ud800-\\udfff",gt="\\u0300-\\u036f",bt="\\ufe20-\\ufe2f",xt="\\u20d0-\\u20ff",ht=gt+bt+xt,gr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Tt="\\u2000-\\u206f",vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",wt="\\ufe0e\\ufe0f",hr=yt+Ct+Tt+vt,yr="['\u2019]",Cr="["+hr+"]",St="["+ht+"]",Tr="\\d+",Rt="["+gr+"]",vr="["+br+"]",wr="[^"+mr+hr+Tr+gr+br+xr+"]",Pt="\\ud83c[\\udffb-\\udfff]",At="(?:"+St+"|"+Pt+")",qt="[^"+mr+"]",Sr="(?:\\ud83c[\\udde6-\\uddff]){2}",Rr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+xr+"]",Ot="\\u200d",Pr="(?:"+vr+"|"+wr+")",Mt="(?:"+l+"|"+wr+")",Ar="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",qr="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Or=At+"?",Mr="["+wt+"]?",jt="(?:"+Ot+"(?:"+[qt,Sr,Rr].join("|")+")"+Mr+Or+")*",Lt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Mr+Or+jt,Vt="(?:"+[Rt,Sr,Rr].join("|")+")"+_t,Ht=RegExp([l+"?"+vr+"+"+Ar+"(?="+[Cr,l,"$"].join("|")+")",Mt+"+"+qr+"(?="+[Cr,l+Pr,"$"].join("|")+")",l+"?"+Pr+"+"+Ar,l+"+"+qr,Ut,Lt,Tr,Vt].join("|"),"g");function Nt(r){return r.match(Ht)||[]}jr.exports=Nt});var _r=i((su,Ur)=>{var Zt=lr(),Dt=pr(),Et=b(),kt=Lr();function It(r,e,t){return r=Et(r),e=t?void 0:e,e===void 0?Dt(r)?kt(r):Zt(r):r.match(e)||[]}Ur.exports=It});var Hr=i((du,Vr)=>{var zt=A(),Wt=dr(),Gt=_r(),Ft="['\u2019]",Jt=RegExp(Ft,"g");function Bt(r){return function(e){return zt(Gt(Wt(e).replace(Jt,"")),r,"")}}Vr.exports=Bt});var Zr=i((fu,Nr)=>{function $t(r,e,t){var u=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++u<n;)o[u]=r[u+e];return o}Nr.exports=$t});var Er=i((lu,Dr)=>{var Yt=Zr();function Kt(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:Yt(r,e,t)}Dr.exports=Kt});var h=i((cu,kr)=>{var Qt="\\ud800-\\udfff",Xt="\\u0300-\\u036f",rn="\\ufe20-\\ufe2f",en="\\u20d0-\\u20ff",tn=Xt+rn+en,nn="\\ufe0e\\ufe0f",un="\\u200d",on=RegExp("["+un+Qt+tn+nn+"]");function an(r){return on.test(r)}kr.exports=an});var zr=i((pu,Ir)=>{function sn(r){return r.split("")}Ir.exports=sn});var Kr=i((mu,Yr)=>{var Wr="\\ud800-\\udfff",dn="\\u0300-\\u036f",fn="\\ufe20-\\ufe2f",ln="\\u20d0-\\u20ff",cn=dn+fn+ln,pn="\\ufe0e\\ufe0f",mn="["+Wr+"]",y="["+cn+"]",C="\\ud83c[\\udffb-\\udfff]",gn="(?:"+y+"|"+C+")",Gr="[^"+Wr+"]",Fr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",bn="\\u200d",Br=gn+"?",$r="["+pn+"]?",xn="(?:"+bn+"(?:"+[Gr,Fr,Jr].join("|")+")"+$r+Br+")*",hn=$r+Br+xn,yn="(?:"+[Gr+y+"?",y,Fr,Jr,mn].join("|")+")",Cn=RegExp(C+"(?="+C+")|"+yn+hn,"g");function Tn(r){return r.match(Cn)||[]}Yr.exports=Tn});var Xr=i((gu,Qr)=>{var vn=zr(),wn=h(),Sn=Kr();function Rn(r){return wn(r)?Sn(r):vn(r)}Qr.exports=Rn});var ee=i((bu,re)=>{var Pn=Er(),An=h(),qn=Xr(),On=b();function Mn(r){return function(e){e=On(e);var t=An(e)?qn(e):void 0,u=t?t[0]:e.charAt(0),n=t?Pn(t,1).join(""):e.slice(1);return u[r]()+n}}re.exports=Mn});var ne=i((xu,te)=>{var jn=ee(),Ln=jn("toUpperCase");te.exports=Ln});var ie=i((hu,ue)=>{var Un=Hr(),_n=ne(),Vn=Un(function(r,e,t){return r+(t?" ":"")+_n(e)});ue.exports=Vn});var Hn=ye(ie());function oe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(oe):r}function Nn(r,e){return m(this,null,function*(){var s;let{data:{key:t,params:u}}=r,n,o;try{n=yield e(...u)}catch(a){n=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=oe(n),d.result={type:"string",value:n}),o!==void 0&&(d.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function ae(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Nn(e,r.run)),R(x({},r),{json:JSON.stringify(En(r),null,2)})}var Zn=`
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
    `,Dn=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function En(r){let{name:e,description:t,author:u,result:n,params:o,about:d,video:s}=r,{icon:a=Dn}=r;return a==="glide"&&(a=Zn),{name:e,description:t,author:u,result:n,about:d,icon:a,video:s,params:Object.entries(o).map(([f,de])=>x({name:f},de))}}function se(r,e){let t="?"+Object.entries(e).map(([u,n])=>`${encodeURIComponent(u)}=${encodeURIComponent(n)}`).join("&");return r+t}var T;(function(e){e.UPC_A="UPC_A"})(T||(T={}));var kn=(r,e)=>m(void 0,null,function*(){let{value:t}=r,{value:u=500}=e;if(t!==void 0)return se("https://mobiledemand-barcode.azurewebsites.net/barcode/image",{content:t,size:u,symbology:T.UPC_A,format:"png",text:!0})}),wu=ae({name:"Barcode",description:"Generates barcode images",about:`
      Uses [ruggedtabletpc.com](https://ruggedtabletpc.com) to generate images of barcodes.

      Only supports 11-digit barcodes for now.
    `,author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:12345678910,size:250},result:{type:"image-uri"},run:kn,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4H1V44H3V4Z" fill="currentColor"/>
    <path d="M47 4H45V44H47V4Z" fill="currentColor"/>
    <path d="M8 4H6V39H8V4Z" fill="currentColor"/>
    <path d="M42 4H40V39H42V4Z" fill="currentColor"/>
    <path d="M37 4H35V39H37V4Z" fill="currentColor"/>
    <path d="M18 4H11V39H18V4Z" fill="currentColor"/>
    <path d="M33 4H27V39H33V4Z" fill="currentColor"/>
    <path d="M24 4H21V39H24V4Z" fill="currentColor"/>
    </svg>`});})();
//# sourceMappingURL=index.js.map
