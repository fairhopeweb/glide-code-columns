(()=>{var le=Object.create;var p=Object.defineProperty,fe=Object.defineProperties,ce=Object.getOwnPropertyDescriptor,de=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,me=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var v=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,b=(r,e)=>{for(var t in e||(e={}))y.call(e,t)&&v(r,t,e[t]);if(C)for(var t of C(e))ge.call(e,t)&&v(r,t,e[t]);return r},T=(r,e)=>fe(r,de(e)),xe=r=>p(r,"__esModule",{value:!0});var o=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var be=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of pe(e))!y.call(r,u)&&u!=="default"&&p(r,u,{get:()=>e[u],enumerable:!(t=ce(e,u))||t.enumerable});return r},he=r=>be(xe(p(r!=null?le(me(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var m=(r,e,t)=>new Promise((u,n)=>{var i=a=>{try{s(t.next(a))}catch(f){n(f)}},l=a=>{try{s(t.throw(a))}catch(f){n(f)}},s=a=>a.done?u(a.value):Promise.resolve(a.value).then(i,l);s((t=t.apply(r,e)).next())});var S=o((kn,w)=>{function He(r,e,t,u){var n=-1,i=r==null?0:r.length;for(u&&i&&(t=r[++n]);++n<i;)t=e(t,r[n],n,r);return t}w.exports=He});var M=o((zn,R)=>{function Ve(r){return function(e){return r==null?void 0:r[e]}}R.exports=Ve});var P=o((Wn,A)=>{var Ce=M(),ye={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ve=Ce(ye);A.exports=ve});var j=o((Gn,O)=>{var Te=typeof global=="object"&&global&&global.Object===Object&&global;O.exports=Te});var L=o((Fn,q)=>{var we=j(),Se=typeof self=="object"&&self&&self.Object===Object&&self,Re=we||Se||Function("return this")();q.exports=Re});var g=o((Jn,Z)=>{var Me=L(),Ae=Me.Symbol;Z.exports=Ae});var _=o(($n,U)=>{function Pe(r,e){for(var t=-1,u=r==null?0:r.length,n=Array(u);++t<u;)n[t]=e(r[t],t,r);return n}U.exports=Pe});var D=o((Bn,N)=>{var Oe=Array.isArray;N.exports=Oe});var z=o((Qn,k)=>{var E=g(),I=Object.prototype,je=I.hasOwnProperty,qe=I.toString,d=E?E.toStringTag:void 0;function Le(r){var e=je.call(r,d),t=r[d];try{r[d]=void 0;var u=!0}catch(i){}var n=qe.call(r);return u&&(e?r[d]=t:delete r[d]),n}k.exports=Le});var G=o((Yn,W)=>{var Ze=Object.prototype,Ue=Ze.toString;function _e(r){return Ue.call(r)}W.exports=_e});var B=o((Kn,$)=>{var F=g(),Ne=z(),De=G(),Ee="[object Null]",Ie="[object Undefined]",J=F?F.toStringTag:void 0;function ke(r){return r==null?r===void 0?Ie:Ee:J&&J in Object(r)?Ne(r):De(r)}$.exports=ke});var Y=o((Xn,Q)=>{function ze(r){return r!=null&&typeof r=="object"}Q.exports=ze});var X=o((ru,K)=>{var We=B(),Ge=Y(),Fe="[object Symbol]";function Je(r){return typeof r=="symbol"||Ge(r)&&We(r)==Fe}K.exports=Je});var or=o((eu,ur)=>{var rr=g(),$e=_(),Be=D(),Qe=X(),Ye=1/0,er=rr?rr.prototype:void 0,tr=er?er.toString:void 0;function nr(r){if(typeof r=="string")return r;if(Be(r))return $e(r,nr)+"";if(Qe(r))return tr?tr.call(r):"";var e=r+"";return e=="0"&&1/r==-Ye?"-0":e}ur.exports=nr});var x=o((tu,ir)=>{var Ke=or();function Xe(r){return r==null?"":Ke(r)}ir.exports=Xe});var sr=o((nu,ar)=>{var rt=P(),et=x(),tt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nt="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",it=nt+ut+ot,at="["+it+"]",st=RegExp(at,"g");function lt(r){return r=et(r),r&&r.replace(tt,rt).replace(st,"")}ar.exports=lt});var fr=o((uu,lr)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ct(r){return r.match(ft)||[]}lr.exports=ct});var dr=o((ou,cr)=>{var dt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function pt(r){return dt.test(r)}cr.exports=pt});var Or=o((iu,Pr)=>{var pr="\\ud800-\\udfff",mt="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",xt="\\u20d0-\\u20ff",bt=mt+gt+xt,mr="\\u2700-\\u27bf",gr="a-z\\xdf-\\xf6\\xf8-\\xff",ht="\\xac\\xb1\\xd7\\xf7",Ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Vt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",yt="\\ufe0e\\ufe0f",br=ht+Ht+Vt+Ct,hr="['\u2019]",Hr="["+br+"]",vt="["+bt+"]",Vr="\\d+",Tt="["+mr+"]",Cr="["+gr+"]",yr="[^"+pr+br+Vr+mr+gr+xr+"]",wt="\\ud83c[\\udffb-\\udfff]",St="(?:"+vt+"|"+wt+")",Rt="[^"+pr+"]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",Tr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xr+"]",Mt="\\u200d",wr="(?:"+Cr+"|"+yr+")",At="(?:"+c+"|"+yr+")",Sr="(?:"+hr+"(?:d|ll|m|re|s|t|ve))?",Rr="(?:"+hr+"(?:D|LL|M|RE|S|T|VE))?",Mr=St+"?",Ar="["+yt+"]?",Pt="(?:"+Mt+"(?:"+[Rt,vr,Tr].join("|")+")"+Ar+Mr+")*",Ot="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qt=Ar+Mr+Pt,Lt="(?:"+[Tt,vr,Tr].join("|")+")"+qt,Zt=RegExp([c+"?"+Cr+"+"+Sr+"(?="+[Hr,c,"$"].join("|")+")",At+"+"+Rr+"(?="+[Hr,c+wr,"$"].join("|")+")",c+"?"+wr+"+"+Sr,c+"+"+Rr,jt,Ot,Vr,Lt].join("|"),"g");function Ut(r){return r.match(Zt)||[]}Pr.exports=Ut});var qr=o((au,jr)=>{var _t=fr(),Nt=dr(),Dt=x(),Et=Or();function It(r,e,t){return r=Dt(r),e=t?void 0:e,e===void 0?Nt(r)?Et(r):_t(r):r.match(e)||[]}jr.exports=It});var Zr=o((su,Lr)=>{var kt=S(),zt=sr(),Wt=qr(),Gt="['\u2019]",Ft=RegExp(Gt,"g");function Jt(r){return function(e){return kt(Wt(zt(e).replace(Ft,"")),r,"")}}Lr.exports=Jt});var _r=o((lu,Ur)=>{function $t(r,e,t){var u=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var i=Array(n);++u<n;)i[u]=r[u+e];return i}Ur.exports=$t});var Dr=o((fu,Nr)=>{var Bt=_r();function Qt(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:Bt(r,e,t)}Nr.exports=Qt});var h=o((cu,Er)=>{var Yt="\\ud800-\\udfff",Kt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",rn="\\u20d0-\\u20ff",en=Kt+Xt+rn,tn="\\ufe0e\\ufe0f",nn="\\u200d",un=RegExp("["+nn+Yt+en+tn+"]");function on(r){return un.test(r)}Er.exports=on});var kr=o((du,Ir)=>{function an(r){return r.split("")}Ir.exports=an});var Qr=o((pu,Br)=>{var zr="\\ud800-\\udfff",sn="\\u0300-\\u036f",ln="\\ufe20-\\ufe2f",fn="\\u20d0-\\u20ff",cn=sn+ln+fn,dn="\\ufe0e\\ufe0f",pn="["+zr+"]",H="["+cn+"]",V="\\ud83c[\\udffb-\\udfff]",mn="(?:"+H+"|"+V+")",Wr="[^"+zr+"]",Gr="(?:\\ud83c[\\udde6-\\uddff]){2}",Fr="[\\ud800-\\udbff][\\udc00-\\udfff]",gn="\\u200d",Jr=mn+"?",$r="["+dn+"]?",xn="(?:"+gn+"(?:"+[Wr,Gr,Fr].join("|")+")"+$r+Jr+")*",bn=$r+Jr+xn,hn="(?:"+[Wr+H+"?",H,Gr,Fr,pn].join("|")+")",Hn=RegExp(V+"(?="+V+")|"+hn+bn,"g");function Vn(r){return r.match(Hn)||[]}Br.exports=Vn});var Kr=o((mu,Yr)=>{var Cn=kr(),yn=h(),vn=Qr();function Tn(r){return yn(r)?vn(r):Cn(r)}Yr.exports=Tn});var re=o((gu,Xr)=>{var wn=Dr(),Sn=h(),Rn=Kr(),Mn=x();function An(r){return function(e){e=Mn(e);var t=Sn(e)?Rn(e):void 0,u=t?t[0]:e.charAt(0),n=t?wn(t,1).join(""):e.slice(1);return u[r]()+n}}Xr.exports=An});var te=o((xu,ee)=>{var Pn=re(),On=Pn("toUpperCase");ee.exports=On});var ue=o((bu,ne)=>{var jn=Zr(),qn=te(),Ln=jn(function(r,e,t){return r+(t?" ":"")+qn(e)});ne.exports=Ln});var Zn=he(ue());function oe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(oe):r}function Un(r,e){return m(this,null,function*(){var s;let{data:{key:t,params:u}}=r,n,i;try{n=yield e(...u)}catch(a){n=void 0;try{i=a.toString()}catch(f){i="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=oe(n),l.result={type:"string",value:n}),i!==void 0&&(l.error=i),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function ie(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Un(e,r.run)),T(b({},r),{json:JSON.stringify(Dn(r),null,2)})}var _n=`
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
    `,Nn=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Dn(r){let{name:e,description:t,author:u,result:n,params:i,about:l,video:s}=r,{icon:a=Nn}=r;return a==="glide"&&(a=_n),{name:e,description:t,author:u,result:n,about:l,icon:a,video:s,params:Object.entries(i).map(([f,se])=>b({name:f},se))}}function ae(r,e){let t="?"+Object.entries(e).map(([u,n])=>`${encodeURIComponent(u)}=${encodeURIComponent(n)}`).join("&");return r+t}var En=(r,e)=>m(void 0,null,function*(){let{value:t}=r,{value:u=500}=e;if(t!==void 0)return ae("https://api.qrserver.com/v1/create-qr-code/",{data:t,size:`${u}x${u}`,margin:0})}),yu=ie({name:"QR Code",description:"Generate QR codes",about:`
      Uses [goQR.me](https://goqr.me/api/)'s QR code generation API.
    `,video:"https://www.youtube.com/watch?v=142TGhaTMtI",author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:"https://glideapps.com",size:250},result:{type:"image-uri"},run:En,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H2V16H16V2ZM14 14H4V4H14V14Z" fill="currentColor"/>
      <path d="M31 42H29V46H46V44H31V42Z" fill="currentColor"/>
      <path d="M12 6H6V12H12V6Z" fill="currentColor"/>
      <path d="M2 46H16V32H2V46ZM4 34H14V44H4V34Z" fill="currentColor"/>
      <path d="M12 36H6V42H12V36Z" fill="currentColor"/>
      <path d="M32 2V16H46V2H32ZM44 14H34V4H44V14Z" fill="currentColor"/>
      <path d="M42 6H36V12H42V6Z" fill="currentColor"/>
      <path d="M46 18H42V22H46V18Z" fill="currentColor"/>
      <path d="M6 26H2V30H6V26Z" fill="currentColor"/>
      <path d="M23 18H15V20H25V16V14H27V10H25H23H21V6H23V8H30V2H28V6H25V2H24H20H19V12H23V14H19V16H23V18Z" fill="currentColor"/>
      <path d="M5 24H9H11H12V26H8V28H12V30H20V28H14V26V22H11V19H9V22H7V18H2V20H5V24Z" fill="currentColor"/>
      <path d="M24 42V37H20V33H18V39H22V42H18V44H22V46H27V44H24V42Z" fill="currentColor"/>
      <path d="M34 22H30V17H28V24H38V22H36V20H39V18H36H34H32V20H34V22Z" fill="currentColor"/>
      <path d="M32 40H35V42H39V40V38V35H35V38H32V35H30V38H28V30H26V28H24V22H17V26H19V24H22V28V32H26V38V40H28H30H32Z" fill="currentColor"/>
      <path d="M44 27H41H39H34V31H32V27H30V33H36V29H39V32H41V29H44V35H41V41H46V39H43V37H46V29V27V24H44V27Z" fill="currentColor"/>
      </svg>
      `});})();
//# sourceMappingURL=index.js.map
