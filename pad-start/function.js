var Xe=Object.create;var x=Object.defineProperty,Qe=Object.defineProperties,rt=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyDescriptors,tt=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,it=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,s=(r,e)=>{for(var t in e||(e={}))M.call(e,t)&&_(r,t,e[t]);if(j)for(var t of j(e))nt.call(e,t)&&_(r,t,e[t]);return r},m=(r,e)=>Qe(r,et(e)),ut=r=>x(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ot=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of tt(e))!M.call(r,n)&&n!=="default"&&x(r,n,{get:()=>e[n],enumerable:!(t=rt(e,n))||t.enumerable});return r},L=r=>ot(ut(x(r!=null?Xe(it(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var N=(r,e,t)=>new Promise((n,u)=>{var a=o=>{try{f(t.next(o))}catch(d){u(d)}},l=o=>{try{f(t.throw(o))}catch(d){u(d)}},f=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,l);f((t=t.apply(r,e)).next())});var U=i((Pu,I)=>{function at(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}I.exports=at});var z=i((qu,E)=>{function st(r){return function(e){return r==null?void 0:r[e]}}E.exports=st});var k=i((Au,D)=>{var ft=z(),dt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ct=ft(dt);D.exports=ct});var W=i((Ou,Z)=>{var lt=typeof global=="object"&&global&&global.Object===Object&&global;Z.exports=lt});var G=i((ju,F)=>{var mt=W(),pt=typeof self=="object"&&self&&self.Object===Object&&self,gt=mt||pt||Function("return this")();F.exports=gt});var h=i((Mu,V)=>{var bt=G(),xt=bt.Symbol;V.exports=xt});var J=i((_u,H)=>{function ht(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}H.exports=ht});var $=i((Lu,B)=>{var yt=Array.isArray;B.exports=yt});var Q=i((Nu,X)=>{var Y=h(),K=Object.prototype,Tt=K.hasOwnProperty,St=K.toString,p=Y?Y.toStringTag:void 0;function Ct(r){var e=Tt.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(a){}var u=St.call(r);return n&&(e?r[p]=t:delete r[p]),u}X.exports=Ct});var er=i((Iu,rr)=>{var vt=Object.prototype,Rt=vt.toString;function wt(r){return Rt.call(r)}rr.exports=wt});var ur=i((Uu,nr)=>{var tr=h(),Pt=Q(),qt=er(),At="[object Null]",Ot="[object Undefined]",ir=tr?tr.toStringTag:void 0;function jt(r){return r==null?r===void 0?Ot:At:ir&&ir in Object(r)?Pt(r):qt(r)}nr.exports=jt});var ar=i((Eu,or)=>{function Mt(r){return r!=null&&typeof r=="object"}or.exports=Mt});var T=i((zu,sr)=>{var _t=ur(),Lt=ar(),Nt="[object Symbol]";function It(r){return typeof r=="symbol"||Lt(r)&&_t(r)==Nt}sr.exports=It});var S=i((Du,mr)=>{var fr=h(),Ut=J(),Et=$(),zt=T(),Dt=1/0,dr=fr?fr.prototype:void 0,cr=dr?dr.toString:void 0;function lr(r){if(typeof r=="string")return r;if(Et(r))return Ut(r,lr)+"";if(zt(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-Dt?"-0":e}mr.exports=lr});var g=i((ku,pr)=>{var kt=S();function Zt(r){return r==null?"":kt(r)}pr.exports=Zt});var br=i((Zu,gr)=>{var Wt=k(),Ft=g(),Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Vt="\\u0300-\\u036f",Ht="\\ufe20-\\ufe2f",Jt="\\u20d0-\\u20ff",Bt=Vt+Ht+Jt,$t="["+Bt+"]",Yt=RegExp($t,"g");function Kt(r){return r=Ft(r),r&&r.replace(Gt,Wt).replace(Yt,"")}gr.exports=Kt});var hr=i((Wu,xr)=>{var Xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Qt(r){return r.match(Xt)||[]}xr.exports=Qt});var Tr=i((Fu,yr)=>{var ri=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ei(r){return ri.test(r)}yr.exports=ei});var Dr=i((Gu,zr)=>{var Sr="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ui=ti+ii+ni,Cr="\\u2700-\\u27bf",vr="a-z\\xdf-\\xf6\\xf8-\\xff",oi="\\xac\\xb1\\xd7\\xf7",ai="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",si="\\u2000-\\u206f",fi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",di="\\ufe0e\\ufe0f",wr=oi+ai+si+fi,Pr="['\u2019]",qr="["+wr+"]",ci="["+ui+"]",Ar="\\d+",li="["+Cr+"]",Or="["+vr+"]",jr="[^"+Sr+wr+Ar+Cr+vr+Rr+"]",mi="\\ud83c[\\udffb-\\udfff]",pi="(?:"+ci+"|"+mi+")",gi="[^"+Sr+"]",Mr="(?:\\ud83c[\\udde6-\\uddff]){2}",_r="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Rr+"]",bi="\\u200d",Lr="(?:"+Or+"|"+jr+")",xi="(?:"+c+"|"+jr+")",Nr="(?:"+Pr+"(?:d|ll|m|re|s|t|ve))?",Ir="(?:"+Pr+"(?:D|LL|M|RE|S|T|VE))?",Ur=pi+"?",Er="["+di+"]?",hi="(?:"+bi+"(?:"+[gi,Mr,_r].join("|")+")"+Er+Ur+")*",yi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ti="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Si=Er+Ur+hi,Ci="(?:"+[li,Mr,_r].join("|")+")"+Si,vi=RegExp([c+"?"+Or+"+"+Nr+"(?="+[qr,c,"$"].join("|")+")",xi+"+"+Ir+"(?="+[qr,c+Lr,"$"].join("|")+")",c+"?"+Lr+"+"+Nr,c+"+"+Ir,Ti,yi,Ar,Ci].join("|"),"g");function Ri(r){return r.match(vi)||[]}zr.exports=Ri});var Zr=i((Vu,kr)=>{var wi=hr(),Pi=Tr(),qi=g(),Ai=Dr();function Oi(r,e,t){return r=qi(r),e=t?void 0:e,e===void 0?Pi(r)?Ai(r):wi(r):r.match(e)||[]}kr.exports=Oi});var Fr=i((Hu,Wr)=>{var ji=U(),Mi=br(),_i=Zr(),Li="['\u2019]",Ni=RegExp(Li,"g");function Ii(r){return function(e){return ji(_i(Mi(e).replace(Ni,"")),r,"")}}Wr.exports=Ii});var Vr=i((Ju,Gr)=>{function Ui(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}Gr.exports=Ui});var C=i((Bu,Hr)=>{var Ei=Vr();function zi(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Ei(r,e,t)}Hr.exports=zi});var b=i(($u,Jr)=>{var Di="\\ud800-\\udfff",ki="\\u0300-\\u036f",Zi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Fi=ki+Zi+Wi,Gi="\\ufe0e\\ufe0f",Vi="\\u200d",Hi=RegExp("["+Vi+Di+Fi+Gi+"]");function Ji(r){return Hi.test(r)}Jr.exports=Ji});var $r=i((Yu,Br)=>{function Bi(r){return r.split("")}Br.exports=Bi});var ie=i((Ku,te)=>{var Yr="\\ud800-\\udfff",$i="\\u0300-\\u036f",Yi="\\ufe20-\\ufe2f",Ki="\\u20d0-\\u20ff",Xi=$i+Yi+Ki,Qi="\\ufe0e\\ufe0f",rn="["+Yr+"]",v="["+Xi+"]",R="\\ud83c[\\udffb-\\udfff]",en="(?:"+v+"|"+R+")",Kr="[^"+Yr+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",tn="\\u200d",re=en+"?",ee="["+Qi+"]?",nn="(?:"+tn+"(?:"+[Kr,Xr,Qr].join("|")+")"+ee+re+")*",un=ee+re+nn,on="(?:"+[Kr+v+"?",v,Xr,Qr,rn].join("|")+")",an=RegExp(R+"(?="+R+")|"+on+un,"g");function sn(r){return r.match(an)||[]}te.exports=sn});var w=i((Xu,ne)=>{var fn=$r(),dn=b(),cn=ie();function ln(r){return dn(r)?cn(r):fn(r)}ne.exports=ln});var oe=i((Qu,ue)=>{var mn=C(),pn=b(),gn=w(),bn=g();function xn(r){return function(e){e=bn(e);var t=pn(e)?gn(e):void 0,n=t?t[0]:e.charAt(0),u=t?mn(t,1).join(""):e.slice(1);return n[r]()+u}}ue.exports=xn});var se=i((ro,ae)=>{var hn=oe(),yn=hn("toUpperCase");ae.exports=yn});var de=i((eo,fe)=>{var Tn=Fr(),Sn=se(),Cn=Tn(function(r,e,t){return r+(t?" ":"")+Sn(e)});fe.exports=Cn});var pe=i((io,me)=>{var qn=9007199254740991,An=Math.floor;function On(r,e){var t="";if(!r||e<1||e>qn)return t;do e%2&&(t+=r),e=An(e/2),e&&(r+=r);while(e);return t}me.exports=On});var be=i((no,ge)=>{function jn(r){return function(e){return e==null?void 0:e[r]}}ge.exports=jn});var he=i((uo,xe)=>{var Mn=be(),_n=Mn("length");xe.exports=_n});var qe=i((oo,Pe)=>{var ye="\\ud800-\\udfff",Ln="\\u0300-\\u036f",Nn="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Un=Ln+Nn+In,En="\\ufe0e\\ufe0f",zn="["+ye+"]",q="["+Un+"]",A="\\ud83c[\\udffb-\\udfff]",Dn="(?:"+q+"|"+A+")",Te="[^"+ye+"]",Se="(?:\\ud83c[\\udde6-\\uddff]){2}",Ce="[\\ud800-\\udbff][\\udc00-\\udfff]",kn="\\u200d",ve=Dn+"?",Re="["+En+"]?",Zn="(?:"+kn+"(?:"+[Te,Se,Ce].join("|")+")"+Re+ve+")*",Wn=Re+ve+Zn,Fn="(?:"+[Te+q+"?",q,Se,Ce,zn].join("|")+")",we=RegExp(A+"(?="+A+")|"+Fn+Wn,"g");function Gn(r){for(var e=we.lastIndex=0;we.test(r);)++e;return e}Pe.exports=Gn});var O=i((ao,Ae)=>{var Vn=he(),Hn=b(),Jn=qe();function Bn(r){return Hn(r)?Jn(r):Vn(r)}Ae.exports=Bn});var Me=i((so,je)=>{var Oe=pe(),$n=S(),Yn=C(),Kn=b(),Xn=O(),Qn=w(),ru=Math.ceil;function eu(r,e){e=e===void 0?" ":$n(e);var t=e.length;if(t<2)return t?Oe(e,r):e;var n=Oe(e,ru(r/Xn(e)));return Kn(e)?Yn(Qn(n),0,r).join(""):n.slice(0,r)}je.exports=eu});var Le=i((fo,_e)=>{var tu=/\s/;function iu(r){for(var e=r.length;e--&&tu.test(r.charAt(e)););return e}_e.exports=iu});var Ie=i((co,Ne)=>{var nu=Le(),uu=/^\s+/;function ou(r){return r&&r.slice(0,nu(r)+1).replace(uu,"")}Ne.exports=ou});var Ee=i((lo,Ue)=>{function au(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}Ue.exports=au});var Ze=i((mo,ke)=>{var su=Ie(),ze=Ee(),fu=T(),De=0/0,du=/^[-+]0x[0-9a-f]+$/i,cu=/^0b[01]+$/i,lu=/^0o[0-7]+$/i,mu=parseInt;function pu(r){if(typeof r=="number")return r;if(fu(r))return De;if(ze(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ze(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=su(r);var t=cu.test(r);return t||lu.test(r)?mu(r.slice(2),t?2:8):du.test(r)?De:+r}ke.exports=pu});var Ge=i((po,Fe)=>{var gu=Ze(),We=1/0,bu=17976931348623157e292;function xu(r){if(!r)return r===0?r:0;if(r=gu(r),r===We||r===-We){var e=r<0?-1:1;return e*bu}return r===r?r:0}Fe.exports=xu});var He=i((go,Ve)=>{var hu=Ge();function yu(r){var e=hu(r),t=e%1;return e===e?t?e-t:e:0}Ve.exports=yu});var Be=i((bo,Je)=>{var Tu=Me(),Su=O(),Cu=He(),vu=g();function Ru(r,e,t){r=vu(r),e=Cu(e);var n=e?Su(r):0;return e&&n<e?Tu(e-n,t)+r:r}Je.exports=Ru});var P=L(de());function vn(r){return m(s({},r),{json:JSON.stringify(wn(r),null,2)})}var Rn=`
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
    `,ce=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function wn(r){let{name:e,category:t,description:n,author:u,result:a,params:l,about:f,video:o}=r,{icon:d=ce}=r;return d==="glide"&&(d=Rn),{name:e,category:t,description:n,author:u,result:a,about:f,icon:d,video:o,params:Object.entries(l).map(([Ye,Ke])=>s({name:Ye},Ke))}}var Pn={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:ce,about:void 0,video:void 0,run(){return N(this,null,function*(){})}},y=class{constructor(e={},t=[]){this.definition=s(s({},Pn),e),this.requiredParams=[...t]}with(e,t=[]){return new y(s(s({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,P.default)(t)),this.with({params:m(s({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return n===void 0&&(n=(0,P.default)(t)),this.with({params:m(s({},this.definition.params),{[t]:{type:e,displayName:n}})},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...l){let f={};if(l.forEach(({value:o},d)=>{f[u[d]]=o}),!n.some(o=>f[o]===void 0))return e(f)}return vn(m(s({},this.definition),{run:a}))}};function le(r,e){return new y({name:r,category:e})}var $e=L(Be()),ho=le("Pad Text at Start","Text").withDescription("Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withExample({text:"abc",length:8}).run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,$e.default)(r,e,t));export{ho as default};
//# sourceMappingURL=function.js.map
