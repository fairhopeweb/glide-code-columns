(()=>{var fr=Object.create;var m=Object.defineProperty,mr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,br=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,xr=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,Tr=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&S(r,t,e[t]);if(R)for(var t of R(e))Tr.call(e,t)&&S(r,t,e[t]);return r},p=(r,e)=>mr(r,gr(e)),wr=r=>m(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var yr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of br(e))!C.call(r,n)&&n!=="default"&&m(r,n,{get:()=>e[n],enumerable:!(t=pr(e,n))||t.enumerable});return r},Pr=r=>yr(wr(m(r!=null?fr(xr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((n,i)=>{var u=s=>{try{o(t.next(s))}catch(h){i(h)}},d=s=>{try{o(t.throw(s))}catch(h){i(h)}},o=s=>s.done?n(s.value):Promise.resolve(s.value).then(u,d);o((t=t.apply(r,e)).next())});var A=a((zi,k)=>{function vr(r,e,t,n){var i=-1,u=r==null?0:r.length;for(n&&u&&(t=r[++i]);++i<u;)t=e(t,r[i],i,r);return t}k.exports=vr});var O=a((Fi,q)=>{function Rr(r){return function(e){return r==null?void 0:r[e]}}q.exports=Rr});var M=a((Bi,L)=>{var Cr=O(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},kr=Cr(Sr);L.exports=kr});var N=a((Hi,j)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Ar});var D=a((Ji,U)=>{var qr=N(),Or=typeof self=="object"&&self&&self.Object===Object&&self,Lr=qr||Or||Function("return this")();U.exports=Lr});var g=a((Yi,_)=>{var Mr=D(),jr=Mr.Symbol;_.exports=jr});var I=a(($i,E)=>{function Nr(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}E.exports=Nr});var Z=a((Ki,V)=>{var Ur=Array.isArray;V.exports=Ur});var F=a((Qi,z)=>{var G=g(),W=Object.prototype,Dr=W.hasOwnProperty,_r=W.toString,f=G?G.toStringTag:void 0;function Er(r){var e=Dr.call(r,f),t=r[f];try{r[f]=void 0;var n=!0}catch(u){}var i=_r.call(r);return n&&(e?r[f]=t:delete r[f]),i}z.exports=Er});var H=a((Xi,B)=>{var Ir=Object.prototype,Vr=Ir.toString;function Zr(r){return Vr.call(r)}B.exports=Zr});var K=a((en,$)=>{var J=g(),Gr=F(),Wr=H(),zr="[object Null]",Fr="[object Undefined]",Y=J?J.toStringTag:void 0;function Br(r){return r==null?r===void 0?Fr:zr:Y&&Y in Object(r)?Gr(r):Wr(r)}$.exports=Br});var X=a((rn,Q)=>{function Hr(r){return r!=null&&typeof r=="object"}Q.exports=Hr});var re=a((tn,ee)=>{var Jr=K(),Yr=X(),$r="[object Symbol]";function Kr(r){return typeof r=="symbol"||Yr(r)&&Jr(r)==$r}ee.exports=Kr});var se=a((nn,ue)=>{var te=g(),Qr=I(),Xr=Z(),et=re(),rt=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ae(r){if(typeof r=="string")return r;if(Xr(r))return Qr(r,ae)+"";if(et(r))return ne?ne.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}ue.exports=ae});var b=a((an,oe)=>{var tt=se();function it(r){return r==null?"":tt(r)}oe.exports=it});var le=a((un,de)=>{var nt=M(),at=b(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ot+dt,ht="["+lt+"]",ct=RegExp(ht,"g");function ft(r){return r=at(r),r&&r.replace(ut,nt).replace(ct,"")}de.exports=ft});var ce=a((sn,he)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(mt)||[]}he.exports=pt});var me=a((on,fe)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return gt.test(r)}fe.exports=bt});var je=a((dn,Me)=>{var pe="\\ud800-\\udfff",xt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",yt=xt+Tt+wt,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",Te=Pt+vt+Rt+Ct,we="['\u2019]",ye="["+Te+"]",kt="["+yt+"]",Pe="\\d+",At="["+ge+"]",ve="["+be+"]",Re="[^"+pe+Te+Pe+ge+be+xe+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+kt+"|"+qt+")",Lt="[^"+pe+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xe+"]",Mt="\\u200d",ke="(?:"+ve+"|"+Re+")",jt="(?:"+c+"|"+Re+")",Ae="(?:"+we+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+we+"(?:D|LL|M|RE|S|T|VE))?",Oe=Ot+"?",Le="["+St+"]?",Nt="(?:"+Mt+"(?:"+[Lt,Ce,Se].join("|")+")"+Le+Oe+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Le+Oe+Nt,Et="(?:"+[At,Ce,Se].join("|")+")"+_t,It=RegExp([c+"?"+ve+"+"+Ae+"(?="+[ye,c,"$"].join("|")+")",jt+"+"+qe+"(?="+[ye,c+ke,"$"].join("|")+")",c+"?"+ke+"+"+Ae,c+"+"+qe,Dt,Ut,Pe,Et].join("|"),"g");function Vt(r){return r.match(It)||[]}Me.exports=Vt});var Ue=a((ln,Ne)=>{var Zt=ce(),Gt=me(),Wt=b(),zt=je();function Ft(r,e,t){return r=Wt(r),e=t?void 0:e,e===void 0?Gt(r)?zt(r):Zt(r):r.match(e)||[]}Ne.exports=Ft});var _e=a((hn,De)=>{var Bt=A(),Ht=le(),Jt=Ue(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(r){return function(e){return Bt(Jt(Ht(e).replace($t,"")),r,"")}}De.exports=Kt});var Ie=a((cn,Ee)=>{function Qt(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(i);++n<i;)u[n]=r[n+e];return u}Ee.exports=Qt});var Ze=a((fn,Ve)=>{var Xt=Ie();function ei(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Xt(r,e,t)}Ve.exports=ei});var y=a((mn,Ge)=>{var ri="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ai=ti+ii+ni,ui="\\ufe0e\\ufe0f",si="\\u200d",oi=RegExp("["+si+ri+ai+ui+"]");function di(r){return oi.test(r)}Ge.exports=di});var ze=a((pn,We)=>{function li(r){return r.split("")}We.exports=li});var Qe=a((gn,Ke)=>{var Fe="\\ud800-\\udfff",hi="\\u0300-\\u036f",ci="\\ufe20-\\ufe2f",fi="\\u20d0-\\u20ff",mi=hi+ci+fi,pi="\\ufe0e\\ufe0f",gi="["+Fe+"]",P="["+mi+"]",v="\\ud83c[\\udffb-\\udfff]",bi="(?:"+P+"|"+v+")",Be="[^"+Fe+"]",He="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",xi="\\u200d",Ye=bi+"?",$e="["+pi+"]?",Ti="(?:"+xi+"(?:"+[Be,He,Je].join("|")+")"+$e+Ye+")*",wi=$e+Ye+Ti,yi="(?:"+[Be+P+"?",P,He,Je,gi].join("|")+")",Pi=RegExp(v+"(?="+v+")|"+yi+wi,"g");function vi(r){return r.match(Pi)||[]}Ke.exports=vi});var er=a((bn,Xe)=>{var Ri=ze(),Ci=y(),Si=Qe();function ki(r){return Ci(r)?Si(r):Ri(r)}Xe.exports=ki});var tr=a((xn,rr)=>{var Ai=Ze(),qi=y(),Oi=er(),Li=b();function Mi(r){return function(e){e=Li(e);var t=qi(e)?Oi(e):void 0,n=t?t[0]:e.charAt(0),i=t?Ai(t,1).join(""):e.slice(1);return n[r]()+i}}rr.exports=Mi});var nr=a((Tn,ir)=>{var ji=tr(),Ni=ji("toUpperCase");ir.exports=Ni});var ur=a((wn,ar)=>{var Ui=_e(),Di=nr(),_i=Ui(function(r,e,t){return r+(t?" ":"")+Di(e)});ar.exports=_i});var sr=Pr(ur());function or(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(or):r}function Ei(r,e){return w(this,null,function*(){var o;let{data:{key:t,params:n}}=r,i,u;try{i=yield e(...n)}catch(s){i=void 0;try{u=s.toString()}catch(h){u="Exception can't be stringified."}}let d={key:t};i!==void 0&&(i=or(i),d.result={type:"string",value:i}),u!==void 0&&(d.error=u),((o=r.source)==null?void 0:o.postMessage).call(o,d,"*")})}function Ii(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Ei(e,r.run)),p(l({},r),{json:JSON.stringify(Zi(r),null,2)})}var Vi=`
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
    `,dr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Zi(r){let{name:e,category:t,released:n,description:i,author:u,result:d,params:o,about:s,video:h}=r,{icon:T=dr}=r;return T==="glide"&&(T=Vi),{name:e,category:t,released:n,description:i,author:u,result:d,about:s,icon:T,video:h,params:Object.entries(o).map(([hr,cr])=>l({name:hr},cr))}}var Gi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:dr,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},Gi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,sr.default)(t)),this.with({params:p(l({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function u(...d){let o={};if(d.forEach(({value:s},h)=>{o[i[h]]=s}),!n.some(s=>o[s]===void 0))return e(o)}return Ii(p(l({},this.definition),{run:u}))}};function lr(r){return new x({name:r})}var vn=lr("Text Offset").withCategory("Text").withDescription("Gets the zero-based offset of the zero-based N-th occurence of needle in haystack").withNumberResult().withReleased("direct").withRequiredStringParam("haystack").withRequiredStringParam("needle").withNumberParam("nth").withTest({haystack:"there is one @ here",needle:"@"},13).withTest({haystack:"there is one @ here",needle:"@",nth:0},13).withTest({haystack:"there is one @ here",needle:"@",nth:1},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:2},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:-1},13).withTest({haystack:"there is one @ here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@"},void 0).withTest({haystack:"But none here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@",nth:-1},void 0).withTest({haystack:"But none here",needle:"@",nth:0},void 0).withTest({haystack:"But none here",needle:"@",nth:1},void 0).withTest({haystack:"But none here",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-3},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-2},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:0},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-2},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:0},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:2},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:3},void 0).withTest({haystack:"@ and we want @ the second @",needle:"@"},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:1},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:2},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-1},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-2},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-3},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-4},void 0).withTest({haystack:"and == we can do == long == numbers ==",needle:"=="},4).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:1},17).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:2},25).run(({needle:r,haystack:e,nth:t})=>{let n=Math.floor(t!=null?t:0),i=-1;if(n<0){n=-n,i=e.length;for(let u=0;u<n&&(e=e.substring(0,i),i=e.lastIndexOf(r),!(i<0));u++);}else{n++;let u=0;for(let d=0;d<n;d++){if(e=e.substring(i+1),i=e.indexOf(r),i<0){u=-1;break}u+=d===0?i:i+1}i=u}return i<0?void 0:i});})();
//# sourceMappingURL=index.js.map
