var Qe=Object.create;var b=Object.defineProperty,rt=Object.defineProperties,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertyNames,M=Object.getOwnPropertySymbols,nt=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))j.call(e,t)&&_(r,t,e[t]);if(M)for(var t of M(e))ut.call(e,t)&&_(r,t,e[t]);return r},x=(r,e)=>rt(r,tt(e)),at=r=>b(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var st=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of it(e))!j.call(r,n)&&n!=="default"&&b(r,n,{get:()=>e[n],enumerable:!(t=et(e,n))||t.enumerable});return r},L=r=>st(at(b(r!=null?Qe(nt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var N=(r,e,t)=>new Promise((n,u)=>{var s=a=>{try{o(t.next(a))}catch(f){u(f)}},l=a=>{try{o(t.throw(a))}catch(f){u(f)}},o=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,l);o((t=t.apply(r,e)).next())});var I=i((qu,E)=>{function ot(r,e,t,n){var u=-1,s=r==null?0:r.length;for(n&&s&&(t=r[++u]);++u<s;)t=e(t,r[u],u,r);return t}E.exports=ot});var k=i((Au,U)=>{function dt(r){return function(e){return r==null?void 0:r[e]}}U.exports=dt});var z=i((Ou,D)=>{var ft=k(),ct={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},lt=ft(ct);D.exports=lt});var Z=i((Mu,V)=>{var mt=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=mt});var W=i((ju,F)=>{var pt=Z(),gt=typeof self=="object"&&self&&self.Object===Object&&self,bt=pt||gt||Function("return this")();F.exports=bt});var h=i((_u,G)=>{var xt=W(),ht=xt.Symbol;G.exports=ht});var J=i((Lu,H)=>{function yt(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}H.exports=yt});var $=i((Nu,B)=>{var Tt=Array.isArray;B.exports=Tt});var Q=i((Eu,X)=>{var Y=h(),K=Object.prototype,wt=K.hasOwnProperty,Pt=K.toString,m=Y?Y.toStringTag:void 0;function vt(r){var e=wt.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(s){}var u=Pt.call(r);return n&&(e?r[m]=t:delete r[m]),u}X.exports=vt});var er=i((Iu,rr)=>{var Rt=Object.prototype,Ct=Rt.toString;function St(r){return Ct.call(r)}rr.exports=St});var ur=i((Uu,nr)=>{var tr=h(),qt=Q(),At=er(),Ot="[object Null]",Mt="[object Undefined]",ir=tr?tr.toStringTag:void 0;function jt(r){return r==null?r===void 0?Mt:Ot:ir&&ir in Object(r)?qt(r):At(r)}nr.exports=jt});var sr=i((ku,ar)=>{function _t(r){return r!=null&&typeof r=="object"}ar.exports=_t});var w=i((Du,or)=>{var Lt=ur(),Nt=sr(),Et="[object Symbol]";function It(r){return typeof r=="symbol"||Nt(r)&&Lt(r)==Et}or.exports=It});var P=i((zu,mr)=>{var dr=h(),Ut=J(),kt=$(),Dt=w(),zt=1/0,fr=dr?dr.prototype:void 0,cr=fr?fr.toString:void 0;function lr(r){if(typeof r=="string")return r;if(kt(r))return Ut(r,lr)+"";if(Dt(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-zt?"-0":e}mr.exports=lr});var p=i((Vu,pr)=>{var Vt=P();function Zt(r){return r==null?"":Vt(r)}pr.exports=Zt});var br=i((Zu,gr)=>{var Ft=z(),Wt=p(),Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Bt="\\u20d0-\\u20ff",$t=Ht+Jt+Bt,Yt="["+$t+"]",Kt=RegExp(Yt,"g");function Xt(r){return r=Wt(r),r&&r.replace(Gt,Ft).replace(Kt,"")}gr.exports=Xt});var hr=i((Fu,xr)=>{var Qt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ri(r){return r.match(Qt)||[]}xr.exports=ri});var Tr=i((Wu,yr)=>{var ei=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ti(r){return ei.test(r)}yr.exports=ti});var Dr=i((Gu,kr)=>{var wr="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",ai=ii+ni+ui,Pr="\\u2700-\\u27bf",vr="a-z\\xdf-\\xf6\\xf8-\\xff",si="\\xac\\xb1\\xd7\\xf7",oi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",di="\\u2000-\\u206f",fi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",ci="\\ufe0e\\ufe0f",Cr=si+oi+di+fi,Sr="['\u2019]",qr="["+Cr+"]",li="["+ai+"]",Ar="\\d+",mi="["+Pr+"]",Or="["+vr+"]",Mr="[^"+wr+Cr+Ar+Pr+vr+Rr+"]",pi="\\ud83c[\\udffb-\\udfff]",gi="(?:"+li+"|"+pi+")",bi="[^"+wr+"]",jr="(?:\\ud83c[\\udde6-\\uddff]){2}",_r="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Rr+"]",xi="\\u200d",Lr="(?:"+Or+"|"+Mr+")",hi="(?:"+c+"|"+Mr+")",Nr="(?:"+Sr+"(?:d|ll|m|re|s|t|ve))?",Er="(?:"+Sr+"(?:D|LL|M|RE|S|T|VE))?",Ir=gi+"?",Ur="["+ci+"]?",yi="(?:"+xi+"(?:"+[bi,jr,_r].join("|")+")"+Ur+Ir+")*",Ti="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",wi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Pi=Ur+Ir+yi,vi="(?:"+[mi,jr,_r].join("|")+")"+Pi,Ri=RegExp([c+"?"+Or+"+"+Nr+"(?="+[qr,c,"$"].join("|")+")",hi+"+"+Er+"(?="+[qr,c+Lr,"$"].join("|")+")",c+"?"+Lr+"+"+Nr,c+"+"+Er,wi,Ti,Ar,vi].join("|"),"g");function Ci(r){return r.match(Ri)||[]}kr.exports=Ci});var Vr=i((Hu,zr)=>{var Si=hr(),qi=Tr(),Ai=p(),Oi=Dr();function Mi(r,e,t){return r=Ai(r),e=t?void 0:e,e===void 0?qi(r)?Oi(r):Si(r):r.match(e)||[]}zr.exports=Mi});var Fr=i((Ju,Zr)=>{var ji=I(),_i=br(),Li=Vr(),Ni="['\u2019]",Ei=RegExp(Ni,"g");function Ii(r){return function(e){return ji(Li(_i(e).replace(Ei,"")),r,"")}}Zr.exports=Ii});var Gr=i((Bu,Wr)=>{function Ui(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(u);++n<u;)s[n]=r[n+e];return s}Wr.exports=Ui});var v=i(($u,Hr)=>{var ki=Gr();function Di(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:ki(r,e,t)}Hr.exports=Di});var g=i((Yu,Jr)=>{var zi="\\ud800-\\udfff",Vi="\\u0300-\\u036f",Zi="\\ufe20-\\ufe2f",Fi="\\u20d0-\\u20ff",Wi=Vi+Zi+Fi,Gi="\\ufe0e\\ufe0f",Hi="\\u200d",Ji=RegExp("["+Hi+zi+Wi+Gi+"]");function Bi(r){return Ji.test(r)}Jr.exports=Bi});var $r=i((Ku,Br)=>{function $i(r){return r.split("")}Br.exports=$i});var ie=i((Xu,te)=>{var Yr="\\ud800-\\udfff",Yi="\\u0300-\\u036f",Ki="\\ufe20-\\ufe2f",Xi="\\u20d0-\\u20ff",Qi=Yi+Ki+Xi,rn="\\ufe0e\\ufe0f",en="["+Yr+"]",R="["+Qi+"]",C="\\ud83c[\\udffb-\\udfff]",tn="(?:"+R+"|"+C+")",Kr="[^"+Yr+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",nn="\\u200d",re=tn+"?",ee="["+rn+"]?",un="(?:"+nn+"(?:"+[Kr,Xr,Qr].join("|")+")"+ee+re+")*",an=ee+re+un,sn="(?:"+[Kr+R+"?",R,Xr,Qr,en].join("|")+")",on=RegExp(C+"(?="+C+")|"+sn+an,"g");function dn(r){return r.match(on)||[]}te.exports=dn});var S=i((Qu,ne)=>{var fn=$r(),cn=g(),ln=ie();function mn(r){return cn(r)?ln(r):fn(r)}ne.exports=mn});var ae=i((ra,ue)=>{var pn=v(),gn=g(),bn=S(),xn=p();function hn(r){return function(e){e=xn(e);var t=gn(e)?bn(e):void 0,n=t?t[0]:e.charAt(0),u=t?pn(t,1).join(""):e.slice(1);return n[r]()+u}}ue.exports=hn});var oe=i((ea,se)=>{var yn=ae(),Tn=yn("toUpperCase");se.exports=Tn});var fe=i((ta,de)=>{var wn=Fr(),Pn=oe(),vn=wn(function(r,e,t){return r+(t?" ":"")+Pn(e)});de.exports=vn});var ge=i((na,pe)=>{var An=9007199254740991,On=Math.floor;function Mn(r,e){var t="";if(!r||e<1||e>An)return t;do e%2&&(t+=r),e=On(e/2),e&&(r+=r);while(e);return t}pe.exports=Mn});var xe=i((ua,be)=>{function jn(r){return function(e){return e==null?void 0:e[r]}}be.exports=jn});var ye=i((aa,he)=>{var _n=xe(),Ln=_n("length");he.exports=Ln});var Ae=i((sa,qe)=>{var Te="\\ud800-\\udfff",Nn="\\u0300-\\u036f",En="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Un=Nn+En+In,kn="\\ufe0e\\ufe0f",Dn="["+Te+"]",q="["+Un+"]",A="\\ud83c[\\udffb-\\udfff]",zn="(?:"+q+"|"+A+")",we="[^"+Te+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",ve="[\\ud800-\\udbff][\\udc00-\\udfff]",Vn="\\u200d",Re=zn+"?",Ce="["+kn+"]?",Zn="(?:"+Vn+"(?:"+[we,Pe,ve].join("|")+")"+Ce+Re+")*",Fn=Ce+Re+Zn,Wn="(?:"+[we+q+"?",q,Pe,ve,Dn].join("|")+")",Se=RegExp(A+"(?="+A+")|"+Wn+Fn,"g");function Gn(r){for(var e=Se.lastIndex=0;Se.test(r);)++e;return e}qe.exports=Gn});var O=i((oa,Oe)=>{var Hn=ye(),Jn=g(),Bn=Ae();function $n(r){return Jn(r)?Bn(r):Hn(r)}Oe.exports=$n});var _e=i((da,je)=>{var Me=ge(),Yn=P(),Kn=v(),Xn=g(),Qn=O(),ru=S(),eu=Math.ceil;function tu(r,e){e=e===void 0?" ":Yn(e);var t=e.length;if(t<2)return t?Me(e,r):e;var n=Me(e,eu(r/Qn(e)));return Xn(e)?Kn(ru(n),0,r).join(""):n.slice(0,r)}je.exports=tu});var Ne=i((fa,Le)=>{var iu=/\s/;function nu(r){for(var e=r.length;e--&&iu.test(r.charAt(e)););return e}Le.exports=nu});var Ie=i((ca,Ee)=>{var uu=Ne(),au=/^\s+/;function su(r){return r&&r.slice(0,uu(r)+1).replace(au,"")}Ee.exports=su});var ke=i((la,Ue)=>{function ou(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}Ue.exports=ou});var Ze=i((ma,Ve)=>{var du=Ie(),De=ke(),fu=w(),ze=0/0,cu=/^[-+]0x[0-9a-f]+$/i,lu=/^0b[01]+$/i,mu=/^0o[0-7]+$/i,pu=parseInt;function gu(r){if(typeof r=="number")return r;if(fu(r))return ze;if(De(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=De(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=du(r);var t=lu.test(r);return t||mu.test(r)?pu(r.slice(2),t?2:8):cu.test(r)?ze:+r}Ve.exports=gu});var Ge=i((pa,We)=>{var bu=Ze(),Fe=1/0,xu=17976931348623157e292;function hu(r){if(!r)return r===0?r:0;if(r=bu(r),r===Fe||r===-Fe){var e=r<0?-1:1;return e*xu}return r===r?r:0}We.exports=hu});var Je=i((ga,He)=>{var yu=Ge();function Tu(r){var e=yu(r),t=e%1;return e===e?t?e-t:e:0}He.exports=Tu});var $e=i((ba,Be)=>{var wu=_e(),Pu=O(),vu=Je(),Ru=p();function Cu(r,e,t){r=Ru(r),e=vu(e);var n=e?Pu(r):0;return e&&n<e?r+wu(e-n,t):r}Be.exports=Cu});var ce=L(fe());function Rn(r){return x(d({},r),{json:JSON.stringify(Sn(r),null,2)})}var Cn=`
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
    `,le=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Sn(r){let{name:e,category:t,released:n,description:u,author:s,result:l,params:o,about:a,video:f}=r,{icon:T=le}=r;return T==="glide"&&(T=Cn),{name:e,category:t,released:n,description:u,author:s,result:l,about:a,icon:T,video:f,params:Object.entries(o).map(([Ke,Xe])=>d({name:Ke},Xe))}}var qn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:le,about:void 0,video:void 0,tests:[],run(){return N(this,null,function*(){})}},y=class{constructor(e={},t=[]){this.definition=d(d({},qn),e),this.requiredParams=[...t]}with(e,t=[]){return new y(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,ce.default)(t)),this.with({params:x(d({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function s(...l){let o={};if(l.forEach(({value:a},f)=>{o[u[f]]=a}),!n.some(a=>o[a]===void 0))return e(o)}return Rn(x(d({},this.definition),{run:s}))}};function me(r){return new y({name:r})}var Ye=L($e()),ha=me("Pad Text at End").withCategory("Text").withReleased("direct").withDescription("Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withTest({text:"abc",length:8},"abc     ").run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,Ye.default)(r,e,t));export{ha as default};
//# sourceMappingURL=function.js.map
