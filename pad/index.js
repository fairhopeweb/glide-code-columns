(()=>{var tt=Object.create;var p=Object.defineProperty,it=Object.defineProperties,nt=Object.getOwnPropertyDescriptor,at=Object.getOwnPropertyDescriptors,ot=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,st=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var I=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))O.call(e,t)&&I(r,t,e[t]);if(j)for(var t of j(e))ut.call(e,t)&&I(r,t,e[t]);return r},b=(r,e)=>it(r,at(e)),dt=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var lt=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ot(e))!O.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=nt(e,i))||t.enumerable});return r},_=r=>lt(dt(p(r!=null?tt(st(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var v=(r,e,t)=>new Promise((i,a)=>{var o=s=>{try{u(t.next(s))}catch(c){a(c)}},d=s=>{try{u(t.throw(s))}catch(c){a(c)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(o,d);u((t=t.apply(r,e)).next())});var U=n((Fa,N)=>{function ct(r,e,t,i){var a=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++a]);++a<o;)t=e(t,r[a],a,r);return t}N.exports=ct});var E=n((Ba,V)=>{function ft(r){return function(e){return r==null?void 0:r[e]}}V.exports=ft});var D=n((Ga,z)=>{var mt=E(),ht={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},gt=mt(ht);z.exports=gt});var H=n((Wa,L)=>{var pt=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=pt});var B=n((Za,F)=>{var bt=H(),xt=typeof self=="object"&&self&&self.Object===Object&&self,wt=bt||xt||Function("return this")();F.exports=wt});var x=n((Ja,G)=>{var vt=B(),Tt=vt.Symbol;G.exports=Tt});var Z=n(($a,W)=>{function yt(r,e){for(var t=-1,i=r==null?0:r.length,a=Array(i);++t<i;)a[t]=e(r[t],t,r);return a}W.exports=yt});var $=n((Ya,J)=>{var Pt=Array.isArray;J.exports=Pt});var Q=n((Xa,K)=>{var Y=x(),X=Object.prototype,Rt=X.hasOwnProperty,Ct=X.toString,m=Y?Y.toStringTag:void 0;function St(r){var e=Rt.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var a=Ct.call(r);return i&&(e?r[m]=t:delete r[m]),a}K.exports=St});var er=n((Ka,rr)=>{var qt=Object.prototype,Mt=qt.toString;function kt(r){return Mt.call(r)}rr.exports=kt});var ar=n((Qa,nr)=>{var tr=x(),At=Q(),jt=er(),Ot="[object Null]",It="[object Undefined]",ir=tr?tr.toStringTag:void 0;function _t(r){return r==null?r===void 0?It:Ot:ir&&ir in Object(r)?At(r):jt(r)}nr.exports=_t});var sr=n((ro,or)=>{function Nt(r){return r!=null&&typeof r=="object"}or.exports=Nt});var T=n((eo,ur)=>{var Ut=ar(),Vt=sr(),Et="[object Symbol]";function zt(r){return typeof r=="symbol"||Vt(r)&&Ut(r)==Et}ur.exports=zt});var y=n((to,mr)=>{var dr=x(),Dt=Z(),Lt=$(),Ht=T(),Ft=1/0,lr=dr?dr.prototype:void 0,cr=lr?lr.toString:void 0;function fr(r){if(typeof r=="string")return r;if(Lt(r))return Dt(r,fr)+"";if(Ht(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-Ft?"-0":e}mr.exports=fr});var h=n((io,hr)=>{var Bt=y();function Gt(r){return r==null?"":Bt(r)}hr.exports=Gt});var pr=n((no,gr)=>{var Wt=D(),Zt=h(),Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$t="\\u0300-\\u036f",Yt="\\ufe20-\\ufe2f",Xt="\\u20d0-\\u20ff",Kt=$t+Yt+Xt,Qt="["+Kt+"]",ri=RegExp(Qt,"g");function ei(r){return r=Zt(r),r&&r.replace(Jt,Wt).replace(ri,"")}gr.exports=ei});var xr=n((ao,br)=>{var ti=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ii(r){return r.match(ti)||[]}br.exports=ii});var vr=n((oo,wr)=>{var ni=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ai(r){return ni.test(r)}wr.exports=ai});var zr=n((so,Er)=>{var Tr="\\ud800-\\udfff",oi="\\u0300-\\u036f",si="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",di=oi+si+ui,yr="\\u2700-\\u27bf",Pr="a-z\\xdf-\\xf6\\xf8-\\xff",li="\\xac\\xb1\\xd7\\xf7",ci="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",fi="\\u2000-\\u206f",mi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",hi="\\ufe0e\\ufe0f",Cr=li+ci+fi+mi,Sr="['\u2019]",qr="["+Cr+"]",gi="["+di+"]",Mr="\\d+",pi="["+yr+"]",kr="["+Pr+"]",Ar="[^"+Tr+Cr+Mr+yr+Pr+Rr+"]",bi="\\ud83c[\\udffb-\\udfff]",xi="(?:"+gi+"|"+bi+")",wi="[^"+Tr+"]",jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Or="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+Rr+"]",vi="\\u200d",Ir="(?:"+kr+"|"+Ar+")",Ti="(?:"+f+"|"+Ar+")",_r="(?:"+Sr+"(?:d|ll|m|re|s|t|ve))?",Nr="(?:"+Sr+"(?:D|LL|M|RE|S|T|VE))?",Ur=xi+"?",Vr="["+hi+"]?",yi="(?:"+vi+"(?:"+[wi,jr,Or].join("|")+")"+Vr+Ur+")*",Pi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ri="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ci=Vr+Ur+yi,Si="(?:"+[pi,jr,Or].join("|")+")"+Ci,qi=RegExp([f+"?"+kr+"+"+_r+"(?="+[qr,f,"$"].join("|")+")",Ti+"+"+Nr+"(?="+[qr,f+Ir,"$"].join("|")+")",f+"?"+Ir+"+"+_r,f+"+"+Nr,Ri,Pi,Mr,Si].join("|"),"g");function Mi(r){return r.match(qi)||[]}Er.exports=Mi});var Lr=n((uo,Dr)=>{var ki=xr(),Ai=vr(),ji=h(),Oi=zr();function Ii(r,e,t){return r=ji(r),e=t?void 0:e,e===void 0?Ai(r)?Oi(r):ki(r):r.match(e)||[]}Dr.exports=Ii});var Fr=n((lo,Hr)=>{var _i=U(),Ni=pr(),Ui=Lr(),Vi="['\u2019]",Ei=RegExp(Vi,"g");function zi(r){return function(e){return _i(Ui(Ni(e).replace(Ei,"")),r,"")}}Hr.exports=zi});var Gr=n((co,Br)=>{function Di(r,e,t){var i=-1,a=r.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(a);++i<a;)o[i]=r[i+e];return o}Br.exports=Di});var P=n((fo,Wr)=>{var Li=Gr();function Hi(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Li(r,e,t)}Wr.exports=Hi});var g=n((mo,Zr)=>{var Fi="\\ud800-\\udfff",Bi="\\u0300-\\u036f",Gi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Zi=Bi+Gi+Wi,Ji="\\ufe0e\\ufe0f",$i="\\u200d",Yi=RegExp("["+$i+Fi+Zi+Ji+"]");function Xi(r){return Yi.test(r)}Zr.exports=Xi});var $r=n((ho,Jr)=>{function Ki(r){return r.split("")}Jr.exports=Ki});var ie=n((go,te)=>{var Yr="\\ud800-\\udfff",Qi="\\u0300-\\u036f",rn="\\ufe20-\\ufe2f",en="\\u20d0-\\u20ff",tn=Qi+rn+en,nn="\\ufe0e\\ufe0f",an="["+Yr+"]",R="["+tn+"]",C="\\ud83c[\\udffb-\\udfff]",on="(?:"+R+"|"+C+")",Xr="[^"+Yr+"]",Kr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",sn="\\u200d",re=on+"?",ee="["+nn+"]?",un="(?:"+sn+"(?:"+[Xr,Kr,Qr].join("|")+")"+ee+re+")*",dn=ee+re+un,ln="(?:"+[Xr+R+"?",R,Kr,Qr,an].join("|")+")",cn=RegExp(C+"(?="+C+")|"+ln+dn,"g");function fn(r){return r.match(cn)||[]}te.exports=fn});var S=n((po,ne)=>{var mn=$r(),hn=g(),gn=ie();function pn(r){return hn(r)?gn(r):mn(r)}ne.exports=pn});var oe=n((bo,ae)=>{var bn=P(),xn=g(),wn=S(),vn=h();function Tn(r){return function(e){e=vn(e);var t=xn(e)?wn(e):void 0,i=t?t[0]:e.charAt(0),a=t?bn(t,1).join(""):e.slice(1);return i[r]()+a}}ae.exports=Tn});var ue=n((xo,se)=>{var yn=oe(),Pn=yn("toUpperCase");se.exports=Pn});var le=n((wo,de)=>{var Rn=Fr(),Cn=ue(),Sn=Rn(function(r,e,t){return r+(t?" ":"")+Cn(e)});de.exports=Sn});var pe=n((Po,ge)=>{var Fn=9007199254740991,Bn=Math.floor;function Gn(r,e){var t="";if(!r||e<1||e>Fn)return t;do e%2&&(t+=r),e=Bn(e/2),e&&(r+=r);while(e);return t}ge.exports=Gn});var xe=n((Ro,be)=>{function Wn(r){return function(e){return e==null?void 0:e[r]}}be.exports=Wn});var ve=n((Co,we)=>{var Zn=xe(),Jn=Zn("length");we.exports=Jn});var ke=n((So,Me)=>{var Te="\\ud800-\\udfff",$n="\\u0300-\\u036f",Yn="\\ufe20-\\ufe2f",Xn="\\u20d0-\\u20ff",Kn=$n+Yn+Xn,Qn="\\ufe0e\\ufe0f",ra="["+Te+"]",M="["+Kn+"]",k="\\ud83c[\\udffb-\\udfff]",ea="(?:"+M+"|"+k+")",ye="[^"+Te+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",ta="\\u200d",Ce=ea+"?",Se="["+Qn+"]?",ia="(?:"+ta+"(?:"+[ye,Pe,Re].join("|")+")"+Se+Ce+")*",na=Se+Ce+ia,aa="(?:"+[ye+M+"?",M,Pe,Re,ra].join("|")+")",qe=RegExp(k+"(?="+k+")|"+aa+na,"g");function oa(r){for(var e=qe.lastIndex=0;qe.test(r);)++e;return e}Me.exports=oa});var A=n((qo,Ae)=>{var sa=ve(),ua=g(),da=ke();function la(r){return ua(r)?da(r):sa(r)}Ae.exports=la});var Ie=n((Mo,Oe)=>{var je=pe(),ca=y(),fa=P(),ma=g(),ha=A(),ga=S(),pa=Math.ceil;function ba(r,e){e=e===void 0?" ":ca(e);var t=e.length;if(t<2)return t?je(e,r):e;var i=je(e,pa(r/ha(e)));return ma(e)?fa(ga(i),0,r).join(""):i.slice(0,r)}Oe.exports=ba});var Ne=n((ko,_e)=>{var xa=/\s/;function wa(r){for(var e=r.length;e--&&xa.test(r.charAt(e)););return e}_e.exports=wa});var Ve=n((Ao,Ue)=>{var va=Ne(),Ta=/^\s+/;function ya(r){return r&&r.slice(0,va(r)+1).replace(Ta,"")}Ue.exports=ya});var ze=n((jo,Ee)=>{function Pa(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}Ee.exports=Pa});var Fe=n((Oo,He)=>{var Ra=Ve(),De=ze(),Ca=T(),Le=0/0,Sa=/^[-+]0x[0-9a-f]+$/i,qa=/^0b[01]+$/i,Ma=/^0o[0-7]+$/i,ka=parseInt;function Aa(r){if(typeof r=="number")return r;if(Ca(r))return Le;if(De(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=De(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=Ra(r);var t=qa.test(r);return t||Ma.test(r)?ka(r.slice(2),t?2:8):Sa.test(r)?Le:+r}He.exports=Aa});var We=n((Io,Ge)=>{var ja=Fe(),Be=1/0,Oa=17976931348623157e292;function Ia(r){if(!r)return r===0?r:0;if(r=ja(r),r===Be||r===-Be){var e=r<0?-1:1;return e*Oa}return r===r?r:0}Ge.exports=Ia});var Je=n((_o,Ze)=>{var _a=We();function Na(r){var e=_a(r),t=e%1;return e===e?t?e-t:e:0}Ze.exports=Na});var Xe=n((No,Ye)=>{var $e=Ie(),Ua=A(),Va=Je(),Ea=h(),za=Math.ceil,Da=Math.floor;function La(r,e,t){r=Ea(r),e=Va(e);var i=e?Ua(r):0;if(!e||i>=e)return r;var a=(e-i)/2;return $e(Da(a),t)+r+$e(za(a),t)}Ye.exports=La});var fe=_(le());var qn=`
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
    `,Mn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,kn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,ce=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,An=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,jn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,On=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,In=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,_n=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Un=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Vn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,En={Glide:qn,"Machine Learning":Un,General:ce,Array:An,Number:kn,Encoding:Vn,Text:Nn,"Data & APIs":_n,Image:jn,Fun:On,"Date & Time":In,Code:Mn};function q({icon:r,category:e}){var t;return(t=r!=null?r:En[e])!=null?t:ce}function me(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(me):r}function zn(r,e){return v(this,null,function*(){var u;let{data:{key:t,params:i}}=r,a,o;try{a=yield e(...i)}catch(s){a=void 0;try{o=s.toString()}catch(c){o="Exception can't be stringified."}}let d={key:t};a!==void 0&&(a=me(a),d.result={type:"string",value:a}),o!==void 0&&(d.error=o),((u=r.source)==null?void 0:u.postMessage).call(u,d,"*")})}function Dn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>zn(e,r.run)),b(l({},r),{json:JSON.stringify(Ln(r),null,2)})}function Ln(r){let{name:e,category:t,released:i,description:a,author:o,result:d,params:u,about:s,video:c}=r,Qe=q(r);return{name:e,category:t,released:i,description:a,author:o,result:d,about:s,icon:Qe,video:c,params:Object.entries(u).map(([rt,et])=>l({name:rt},et))}}var Hn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return v(this,null,function*(){})}},w=class{constructor(e={},t=[]){this.definition=l(l({},Hn),e),this.requiredParams=[...t]}with(e,t=[]){return new w(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:q({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,fe.default)(t)),this.with({params:b(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function o(...d){let u={};if(d.forEach(({value:s},c)=>{u[a[c]]=s}),!i.some(s=>u[s]===void 0))return e(u)}return Dn(b(l({},this.definition),{run:o}))}};function he(r){return new w({name:r})}var Ke=_(Xe()),Vo=he("Pad Text").withCategory("Text").withReleased("direct").withDescription("Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.").withAuthor("lodash Project","lodash.com").withRequiredStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withStringResult().withTest({text:"abc",length:8},"  abc   ").run(({text:r,length:e,chars:t})=>(0,Ke.default)(r,e,t));})();
//# sourceMappingURL=index.js.map
