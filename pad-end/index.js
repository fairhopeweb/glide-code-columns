(()=>{var rt=Object.create;var b=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptor,it=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,ut=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var L=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))_.call(e,t)&&L(r,t,e[t]);if(j)for(var t of j(e))at.call(e,t)&&L(r,t,e[t]);return r},x=(r,e)=>et(r,it(e)),st=r=>b(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ot=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of nt(e))!_.call(r,i)&&i!=="default"&&b(r,i,{get:()=>e[i],enumerable:!(t=tt(e,i))||t.enumerable});return r},N=r=>ot(st(b(r!=null?rt(ut(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((i,u)=>{var a=s=>{try{o(t.next(s))}catch(c){u(c)}},d=s=>{try{o(t.throw(s))}catch(c){u(c)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,d);o((t=t.apply(r,e)).next())});var I=n((Ou,E)=>{function dt(r,e,t,i){var u=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}E.exports=dt});var k=n((Mu,U)=>{function ft(r){return function(e){return r==null?void 0:r[e]}}U.exports=ft});var z=n((ju,D)=>{var ct=k(),lt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},mt=ct(lt);D.exports=mt});var Z=n((_u,V)=>{var pt=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=pt});var W=n((Lu,F)=>{var gt=Z(),bt=typeof self=="object"&&self&&self.Object===Object&&self,xt=gt||bt||Function("return this")();F.exports=xt});var h=n((Nu,G)=>{var ht=W(),yt=ht.Symbol;G.exports=yt});var J=n((Eu,H)=>{function Tt(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}H.exports=Tt});var $=n((Iu,B)=>{var wt=Array.isArray;B.exports=wt});var Q=n((Uu,X)=>{var Y=h(),K=Object.prototype,Pt=K.hasOwnProperty,vt=K.toString,m=Y?Y.toStringTag:void 0;function Rt(r){var e=Pt.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var u=vt.call(r);return i&&(e?r[m]=t:delete r[m]),u}X.exports=Rt});var er=n((ku,rr)=>{var Ct=Object.prototype,St=Ct.toString;function qt(r){return St.call(r)}rr.exports=qt});var ur=n((Du,nr)=>{var tr=h(),At=Q(),Ot=er(),Mt="[object Null]",jt="[object Undefined]",ir=tr?tr.toStringTag:void 0;function _t(r){return r==null?r===void 0?jt:Mt:ir&&ir in Object(r)?At(r):Ot(r)}nr.exports=_t});var sr=n((zu,ar)=>{function Lt(r){return r!=null&&typeof r=="object"}ar.exports=Lt});var P=n((Vu,or)=>{var Nt=ur(),Et=sr(),It="[object Symbol]";function Ut(r){return typeof r=="symbol"||Et(r)&&Nt(r)==It}or.exports=Ut});var v=n((Zu,mr)=>{var dr=h(),kt=J(),Dt=$(),zt=P(),Vt=1/0,fr=dr?dr.prototype:void 0,cr=fr?fr.toString:void 0;function lr(r){if(typeof r=="string")return r;if(Dt(r))return kt(r,lr)+"";if(zt(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-Vt?"-0":e}mr.exports=lr});var p=n((Fu,pr)=>{var Zt=v();function Ft(r){return r==null?"":Zt(r)}pr.exports=Ft});var br=n((Wu,gr)=>{var Wt=z(),Gt=p(),Ht=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Jt="\\u0300-\\u036f",Bt="\\ufe20-\\ufe2f",$t="\\u20d0-\\u20ff",Yt=Jt+Bt+$t,Kt="["+Yt+"]",Xt=RegExp(Kt,"g");function Qt(r){return r=Gt(r),r&&r.replace(Ht,Wt).replace(Xt,"")}gr.exports=Qt});var hr=n((Gu,xr)=>{var ri=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ei(r){return r.match(ri)||[]}xr.exports=ei});var Tr=n((Hu,yr)=>{var ti=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ii(r){return ti.test(r)}yr.exports=ii});var Dr=n((Ju,kr)=>{var wr="\\ud800-\\udfff",ni="\\u0300-\\u036f",ui="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",si=ni+ui+ai,Pr="\\u2700-\\u27bf",vr="a-z\\xdf-\\xf6\\xf8-\\xff",oi="\\xac\\xb1\\xd7\\xf7",di="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",fi="\\u2000-\\u206f",ci=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",li="\\ufe0e\\ufe0f",Cr=oi+di+fi+ci,Sr="['\u2019]",qr="["+Cr+"]",mi="["+si+"]",Ar="\\d+",pi="["+Pr+"]",Or="["+vr+"]",Mr="[^"+wr+Cr+Ar+Pr+vr+Rr+"]",gi="\\ud83c[\\udffb-\\udfff]",bi="(?:"+mi+"|"+gi+")",xi="[^"+wr+"]",jr="(?:\\ud83c[\\udde6-\\uddff]){2}",_r="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+Rr+"]",hi="\\u200d",Lr="(?:"+Or+"|"+Mr+")",yi="(?:"+l+"|"+Mr+")",Nr="(?:"+Sr+"(?:d|ll|m|re|s|t|ve))?",Er="(?:"+Sr+"(?:D|LL|M|RE|S|T|VE))?",Ir=bi+"?",Ur="["+li+"]?",Ti="(?:"+hi+"(?:"+[xi,jr,_r].join("|")+")"+Ur+Ir+")*",wi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vi=Ur+Ir+Ti,Ri="(?:"+[pi,jr,_r].join("|")+")"+vi,Ci=RegExp([l+"?"+Or+"+"+Nr+"(?="+[qr,l,"$"].join("|")+")",yi+"+"+Er+"(?="+[qr,l+Lr,"$"].join("|")+")",l+"?"+Lr+"+"+Nr,l+"+"+Er,Pi,wi,Ar,Ri].join("|"),"g");function Si(r){return r.match(Ci)||[]}kr.exports=Si});var Vr=n((Bu,zr)=>{var qi=hr(),Ai=Tr(),Oi=p(),Mi=Dr();function ji(r,e,t){return r=Oi(r),e=t?void 0:e,e===void 0?Ai(r)?Mi(r):qi(r):r.match(e)||[]}zr.exports=ji});var Fr=n(($u,Zr)=>{var _i=I(),Li=br(),Ni=Vr(),Ei="['\u2019]",Ii=RegExp(Ei,"g");function Ui(r){return function(e){return _i(Ni(Li(e).replace(Ii,"")),r,"")}}Zr.exports=Ui});var Gr=n((Yu,Wr)=>{function ki(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++i<u;)a[i]=r[i+e];return a}Wr.exports=ki});var R=n((Ku,Hr)=>{var Di=Gr();function zi(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Di(r,e,t)}Hr.exports=zi});var g=n((Xu,Jr)=>{var Vi="\\ud800-\\udfff",Zi="\\u0300-\\u036f",Fi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Gi=Zi+Fi+Wi,Hi="\\ufe0e\\ufe0f",Ji="\\u200d",Bi=RegExp("["+Ji+Vi+Gi+Hi+"]");function $i(r){return Bi.test(r)}Jr.exports=$i});var $r=n((Qu,Br)=>{function Yi(r){return r.split("")}Br.exports=Yi});var ie=n((ra,te)=>{var Yr="\\ud800-\\udfff",Ki="\\u0300-\\u036f",Xi="\\ufe20-\\ufe2f",Qi="\\u20d0-\\u20ff",rn=Ki+Xi+Qi,en="\\ufe0e\\ufe0f",tn="["+Yr+"]",C="["+rn+"]",S="\\ud83c[\\udffb-\\udfff]",nn="(?:"+C+"|"+S+")",Kr="[^"+Yr+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",un="\\u200d",re=nn+"?",ee="["+en+"]?",an="(?:"+un+"(?:"+[Kr,Xr,Qr].join("|")+")"+ee+re+")*",sn=ee+re+an,on="(?:"+[Kr+C+"?",C,Xr,Qr,tn].join("|")+")",dn=RegExp(S+"(?="+S+")|"+on+sn,"g");function fn(r){return r.match(dn)||[]}te.exports=fn});var q=n((ea,ne)=>{var cn=$r(),ln=g(),mn=ie();function pn(r){return ln(r)?mn(r):cn(r)}ne.exports=pn});var ae=n((ta,ue)=>{var gn=R(),bn=g(),xn=q(),hn=p();function yn(r){return function(e){e=hn(e);var t=bn(e)?xn(e):void 0,i=t?t[0]:e.charAt(0),u=t?gn(t,1).join(""):e.slice(1);return i[r]()+u}}ue.exports=yn});var oe=n((ia,se)=>{var Tn=ae(),wn=Tn("toUpperCase");se.exports=wn});var fe=n((na,de)=>{var Pn=Fr(),vn=oe(),Rn=Pn(function(r,e,t){return r+(t?" ":"")+vn(e)});de.exports=Rn});var be=n((aa,ge)=>{var Mn=9007199254740991,jn=Math.floor;function _n(r,e){var t="";if(!r||e<1||e>Mn)return t;do e%2&&(t+=r),e=jn(e/2),e&&(r+=r);while(e);return t}ge.exports=_n});var he=n((sa,xe)=>{function Ln(r){return function(e){return e==null?void 0:e[r]}}xe.exports=Ln});var Te=n((oa,ye)=>{var Nn=he(),En=Nn("length");ye.exports=En});var Oe=n((da,Ae)=>{var we="\\ud800-\\udfff",In="\\u0300-\\u036f",Un="\\ufe20-\\ufe2f",kn="\\u20d0-\\u20ff",Dn=In+Un+kn,zn="\\ufe0e\\ufe0f",Vn="["+we+"]",A="["+Dn+"]",O="\\ud83c[\\udffb-\\udfff]",Zn="(?:"+A+"|"+O+")",Pe="[^"+we+"]",ve="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Fn="\\u200d",Ce=Zn+"?",Se="["+zn+"]?",Wn="(?:"+Fn+"(?:"+[Pe,ve,Re].join("|")+")"+Se+Ce+")*",Gn=Se+Ce+Wn,Hn="(?:"+[Pe+A+"?",A,ve,Re,Vn].join("|")+")",qe=RegExp(O+"(?="+O+")|"+Hn+Gn,"g");function Jn(r){for(var e=qe.lastIndex=0;qe.test(r);)++e;return e}Ae.exports=Jn});var M=n((fa,Me)=>{var Bn=Te(),$n=g(),Yn=Oe();function Kn(r){return $n(r)?Yn(r):Bn(r)}Me.exports=Kn});var Le=n((ca,_e)=>{var je=be(),Xn=v(),Qn=R(),ru=g(),eu=M(),tu=q(),iu=Math.ceil;function nu(r,e){e=e===void 0?" ":Xn(e);var t=e.length;if(t<2)return t?je(e,r):e;var i=je(e,iu(r/eu(e)));return ru(e)?Qn(tu(i),0,r).join(""):i.slice(0,r)}_e.exports=nu});var Ee=n((la,Ne)=>{var uu=/\s/;function au(r){for(var e=r.length;e--&&uu.test(r.charAt(e)););return e}Ne.exports=au});var Ue=n((ma,Ie)=>{var su=Ee(),ou=/^\s+/;function du(r){return r&&r.slice(0,su(r)+1).replace(ou,"")}Ie.exports=du});var De=n((pa,ke)=>{function fu(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}ke.exports=fu});var Fe=n((ga,Ze)=>{var cu=Ue(),ze=De(),lu=P(),Ve=0/0,mu=/^[-+]0x[0-9a-f]+$/i,pu=/^0b[01]+$/i,gu=/^0o[0-7]+$/i,bu=parseInt;function xu(r){if(typeof r=="number")return r;if(lu(r))return Ve;if(ze(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ze(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=cu(r);var t=pu.test(r);return t||gu.test(r)?bu(r.slice(2),t?2:8):mu.test(r)?Ve:+r}Ze.exports=xu});var He=n((ba,Ge)=>{var hu=Fe(),We=1/0,yu=17976931348623157e292;function Tu(r){if(!r)return r===0?r:0;if(r=hu(r),r===We||r===-We){var e=r<0?-1:1;return e*yu}return r===r?r:0}Ge.exports=Tu});var Be=n((xa,Je)=>{var wu=He();function Pu(r){var e=wu(r),t=e%1;return e===e?t?e-t:e:0}Je.exports=Pu});var Ye=n((ha,$e)=>{var vu=Le(),Ru=M(),Cu=Be(),Su=p();function qu(r,e,t){r=Su(r),e=Cu(e);var i=e?Ru(r):0;return e&&i<e?r+vu(e-i,t):r}$e.exports=qu});var ce=N(fe());function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function Cn(r,e){return w(this,null,function*(){var o;let{data:{key:t,params:i}}=r,u,a;try{u=yield e(...i)}catch(s){u=void 0;try{a=s.toString()}catch(c){a="Exception can't be stringified."}}let d={key:t};u!==void 0&&(u=le(u),d.result={type:"string",value:u}),a!==void 0&&(d.error=a),((o=r.source)==null?void 0:o.postMessage).call(o,d,"*")})}function Sn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Cn(e,r.run)),x(f({},r),{json:JSON.stringify(An(r),null,2)})}var qn=`
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
    `,me=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function An(r){let{name:e,category:t,released:i,description:u,author:a,result:d,params:o,about:s,video:c}=r,{icon:T=me}=r;return T==="glide"&&(T=qn),{name:e,category:t,released:i,description:u,author:a,result:d,about:s,icon:T,video:c,params:Object.entries(o).map(([Xe,Qe])=>f({name:Xe},Qe))}}var On={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:me,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},y=class{constructor(e={},t=[]){this.definition=f(f({},On),e),this.requiredParams=[...t]}with(e,t=[]){return new y(f(f({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,ce.default)(t)),this.with({params:x(f({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function a(...d){let o={};if(d.forEach(({value:s},c)=>{o[u[c]]=s}),!i.some(s=>o[s]===void 0))return e(o)}return Sn(x(f({},this.definition),{run:a}))}};function pe(r){return new y({name:r})}var Ke=N(Ye()),Ta=pe("Pad Text at End").withCategory("Text").withReleased("direct").withDescription("Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withTest({text:"abc",length:8},"abc     ").run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,Ke.default)(r,e,t));})();
//# sourceMappingURL=index.js.map
