var lr=Object.create;var f=Object.defineProperty,cr=Object.defineProperties,fr=Object.getOwnPropertyDescriptor,mr=Object.getOwnPropertyDescriptors,pr=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,gr=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&R(e,t,r[t]);if(w)for(var t of w(r))br.call(r,t)&&R(e,t,r[t]);return e},P=(e,r)=>cr(e,mr(r)),xr=e=>f(e,"__esModule",{value:!0});var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var hr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of pr(r))!v.call(e,n)&&n!=="default"&&f(e,n,{get:()=>r[n],enumerable:!(t=fr(r,n))||t.enumerable});return e},Tr=e=>hr(xr(f(e!=null?lr(gr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var x=(e,r,t)=>new Promise((n,u)=>{var a=o=>{try{l(t.next(o))}catch(s){u(s)}},g=o=>{try{l(t.throw(o))}catch(s){u(s)}},l=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,g);l((t=t.apply(e,r)).next())});var A=i((Ii,S)=>{function yr(e,r,t,n){var u=-1,a=e==null?0:e.length;for(n&&a&&(t=e[++u]);++u<a;)t=r(t,e[u],u,e);return t}S.exports=yr});var O=i((ki,q)=>{function Cr(e){return function(r){return e==null?void 0:e[r]}}q.exports=Cr});var j=i((zi,M)=>{var wr=O(),vr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Rr=wr(vr);M.exports=Rr});var U=i((Gi,L)=>{var Pr=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=Pr});var V=i((Wi,N)=>{var Sr=U(),Ar=typeof self=="object"&&self&&self.Object===Object&&self,qr=Sr||Ar||Function("return this")();N.exports=qr});var m=i((Fi,_)=>{var Or=V(),Mr=Or.Symbol;_.exports=Mr});var D=i((Ji,H)=>{function jr(e,r){for(var t=-1,n=e==null?0:e.length,u=Array(n);++t<n;)u[t]=r(e[t],t,e);return u}H.exports=jr});var E=i((Bi,Z)=>{var Lr=Array.isArray;Z.exports=Lr});var G=i(($i,z)=>{var I=m(),k=Object.prototype,Ur=k.hasOwnProperty,Nr=k.toString,c=I?I.toStringTag:void 0;function Vr(e){var r=Ur.call(e,c),t=e[c];try{e[c]=void 0;var n=!0}catch(a){}var u=Nr.call(e);return n&&(r?e[c]=t:delete e[c]),u}z.exports=Vr});var F=i((Yi,W)=>{var _r=Object.prototype,Hr=_r.toString;function Dr(e){return Hr.call(e)}W.exports=Dr});var Y=i((Ki,$)=>{var J=m(),Zr=G(),Er=F(),Ir="[object Null]",kr="[object Undefined]",B=J?J.toStringTag:void 0;function zr(e){return e==null?e===void 0?kr:Ir:B&&B in Object(e)?Zr(e):Er(e)}$.exports=zr});var Q=i((Qi,K)=>{function Gr(e){return e!=null&&typeof e=="object"}K.exports=Gr});var ee=i((Xi,X)=>{var Wr=Y(),Fr=Q(),Jr="[object Symbol]";function Br(e){return typeof e=="symbol"||Fr(e)&&Wr(e)==Jr}X.exports=Br});var ae=i((en,ue)=>{var re=m(),$r=D(),Yr=E(),Kr=ee(),Qr=1/0,te=re?re.prototype:void 0,ie=te?te.toString:void 0;function ne(e){if(typeof e=="string")return e;if(Yr(e))return $r(e,ne)+"";if(Kr(e))return ie?ie.call(e):"";var r=e+"";return r=="0"&&1/e==-Qr?"-0":r}ue.exports=ne});var p=i((rn,oe)=>{var Xr=ae();function et(e){return e==null?"":Xr(e)}oe.exports=et});var de=i((tn,se)=>{var rt=j(),tt=p(),it=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nt="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",ot=nt+ut+at,st="["+ot+"]",dt=RegExp(st,"g");function lt(e){return e=tt(e),e&&e.replace(it,rt).replace(dt,"")}se.exports=lt});var ce=i((nn,le)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ft(e){return e.match(ct)||[]}le.exports=ft});var me=i((un,fe)=>{var mt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function pt(e){return mt.test(e)}fe.exports=pt});var Le=i((an,je)=>{var pe="\\ud800-\\udfff",gt="\\u0300-\\u036f",bt="\\ufe20-\\ufe2f",xt="\\u20d0-\\u20ff",ht=gt+bt+xt,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",Tt="\\xac\\xb1\\xd7\\xf7",yt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",vt="\\ufe0e\\ufe0f",he=Tt+yt+Ct+wt,Te="['\u2019]",ye="["+he+"]",Rt="["+ht+"]",Ce="\\d+",Pt="["+ge+"]",we="["+be+"]",ve="[^"+pe+he+Ce+ge+be+xe+"]",St="\\ud83c[\\udffb-\\udfff]",At="(?:"+Rt+"|"+St+")",qt="[^"+pe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+xe+"]",Ot="\\u200d",Se="(?:"+we+"|"+ve+")",Mt="(?:"+d+"|"+ve+")",Ae="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",Oe=At+"?",Me="["+vt+"]?",jt="(?:"+Ot+"(?:"+[qt,Re,Pe].join("|")+")"+Me+Oe+")*",Lt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nt=Me+Oe+jt,Vt="(?:"+[Pt,Re,Pe].join("|")+")"+Nt,_t=RegExp([d+"?"+we+"+"+Ae+"(?="+[ye,d,"$"].join("|")+")",Mt+"+"+qe+"(?="+[ye,d+Se,"$"].join("|")+")",d+"?"+Se+"+"+Ae,d+"+"+qe,Ut,Lt,Ce,Vt].join("|"),"g");function Ht(e){return e.match(_t)||[]}je.exports=Ht});var Ne=i((on,Ue)=>{var Dt=ce(),Zt=me(),Et=p(),It=Le();function kt(e,r,t){return e=Et(e),r=t?void 0:r,r===void 0?Zt(e)?It(e):Dt(e):e.match(r)||[]}Ue.exports=kt});var _e=i((sn,Ve)=>{var zt=A(),Gt=de(),Wt=Ne(),Ft="['\u2019]",Jt=RegExp(Ft,"g");function Bt(e){return function(r){return zt(Wt(Gt(r).replace(Jt,"")),e,"")}}Ve.exports=Bt});var De=i((dn,He)=>{function $t(e,r,t){var n=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(u);++n<u;)a[n]=e[n+r];return a}He.exports=$t});var Ee=i((ln,Ze)=>{var Yt=De();function Kt(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:Yt(e,r,t)}Ze.exports=Kt});var h=i((cn,Ie)=>{var Qt="\\ud800-\\udfff",Xt="\\u0300-\\u036f",ei="\\ufe20-\\ufe2f",ri="\\u20d0-\\u20ff",ti=Xt+ei+ri,ii="\\ufe0e\\ufe0f",ni="\\u200d",ui=RegExp("["+ni+Qt+ti+ii+"]");function ai(e){return ui.test(e)}Ie.exports=ai});var ze=i((fn,ke)=>{function oi(e){return e.split("")}ke.exports=oi});var Ke=i((mn,Ye)=>{var Ge="\\ud800-\\udfff",si="\\u0300-\\u036f",di="\\ufe20-\\ufe2f",li="\\u20d0-\\u20ff",ci=si+di+li,fi="\\ufe0e\\ufe0f",mi="["+Ge+"]",T="["+ci+"]",y="\\ud83c[\\udffb-\\udfff]",pi="(?:"+T+"|"+y+")",We="[^"+Ge+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",gi="\\u200d",Be=pi+"?",$e="["+fi+"]?",bi="(?:"+gi+"(?:"+[We,Fe,Je].join("|")+")"+$e+Be+")*",xi=$e+Be+bi,hi="(?:"+[We+T+"?",T,Fe,Je,mi].join("|")+")",Ti=RegExp(y+"(?="+y+")|"+hi+xi,"g");function yi(e){return e.match(Ti)||[]}Ye.exports=yi});var Xe=i((pn,Qe)=>{var Ci=ze(),wi=h(),vi=Ke();function Ri(e){return wi(e)?vi(e):Ci(e)}Qe.exports=Ri});var rr=i((gn,er)=>{var Pi=Ee(),Si=h(),Ai=Xe(),qi=p();function Oi(e){return function(r){r=qi(r);var t=Si(r)?Ai(r):void 0,n=t?t[0]:r.charAt(0),u=t?Pi(t,1).join(""):r.slice(1);return n[e]()+u}}er.exports=Oi});var ir=i((bn,tr)=>{var Mi=rr(),ji=Mi("toUpperCase");tr.exports=ji});var ur=i((xn,nr)=>{var Li=_e(),Ui=ir(),Ni=Li(function(e,r,t){return e+(t?" ":"")+Ui(r)});nr.exports=Ni});var Vi=Tr(ur());function ar(e){return P(b({},e),{json:JSON.stringify(Di(e),null,2)})}var _i=`
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
    `,Hi=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Di(e){let{name:r,category:t,description:n,author:u,result:a,params:g,about:l,video:o}=e,{icon:s=Hi}=e;return s==="glide"&&(s=_i),{name:r,category:t,description:n,author:u,result:a,about:l,icon:s,video:o,params:Object.entries(g).map(([sr,dr])=>b({name:sr},dr))}}function or(e,r){let t="?"+Object.entries(r).map(([n,u])=>`${encodeURIComponent(n)}=${encodeURIComponent(u)}`).join("&");return e+t}var C;(function(r){r.UPC_A="UPC_A"})(C||(C={}));var Zi=(e,r)=>x(void 0,null,function*(){let{value:t}=e,{value:n=500}=r;if(t!==void 0)return or("https://mobiledemand-barcode.azurewebsites.net/barcode/image",{content:t,size:n,symbology:C.UPC_A,format:"png",text:!0})}),wn=ar({name:"Barcode",category:"Image",description:"Generates barcode images",about:`
      Uses [ruggedtabletpc.com](https://ruggedtabletpc.com) to generate images of barcodes.

      Only supports 11-digit barcodes for now.
    `,author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:12345678910,size:250},result:{type:"image-uri"},run:Zi,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4H1V44H3V4Z" fill="currentColor"/>
    <path d="M47 4H45V44H47V4Z" fill="currentColor"/>
    <path d="M8 4H6V39H8V4Z" fill="currentColor"/>
    <path d="M42 4H40V39H42V4Z" fill="currentColor"/>
    <path d="M37 4H35V39H37V4Z" fill="currentColor"/>
    <path d="M18 4H11V39H18V4Z" fill="currentColor"/>
    <path d="M33 4H27V39H33V4Z" fill="currentColor"/>
    <path d="M24 4H21V39H24V4Z" fill="currentColor"/>
    </svg>`});export{wn as default};
//# sourceMappingURL=function.js.map
