(()=>{var fr=Object.create;var m=Object.defineProperty,mr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,br=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,xr=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&S(e,t,r[t]);if(C)for(var t of C(r))wr.call(r,t)&&S(e,t,r[t]);return e},p=(e,r)=>mr(e,gr(r)),Tr=e=>m(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var yr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of br(r))!R.call(e,i)&&i!=="default"&&m(e,i,{get:()=>r[i],enumerable:!(t=pr(r,i))||t.enumerable});return e},Pr=e=>yr(Tr(m(e!=null?fr(xr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var T=(e,r,t)=>new Promise((i,n)=>{var u=s=>{try{o(t.next(s))}catch(l){n(l)}},d=s=>{try{o(t.throw(s))}catch(l){n(l)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,d);o((t=t.apply(e,r)).next())});var A=a((Bn,k)=>{function vr(e,r,t,i){var n=-1,u=e==null?0:e.length;for(i&&u&&(t=e[++n]);++n<u;)t=r(t,e[n],n,e);return t}k.exports=vr});var O=a((Fn,q)=>{function Cr(e){return function(r){return e==null?void 0:e[r]}}q.exports=Cr});var M=a((Hn,L)=>{var Rr=O(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},kr=Rr(Sr);L.exports=kr});var N=a((Jn,j)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Ar});var D=a((Yn,U)=>{var qr=N(),Or=typeof self=="object"&&self&&self.Object===Object&&self,Lr=qr||Or||Function("return this")();U.exports=Lr});var g=a(($n,_)=>{var Mr=D(),jr=Mr.Symbol;_.exports=jr});var I=a((Kn,E)=>{function Nr(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}E.exports=Nr});var Z=a((Qn,V)=>{var Ur=Array.isArray;V.exports=Ur});var B=a((Xn,z)=>{var G=g(),W=Object.prototype,Dr=W.hasOwnProperty,_r=W.toString,f=G?G.toStringTag:void 0;function Er(e){var r=Dr.call(e,f),t=e[f];try{e[f]=void 0;var i=!0}catch(u){}var n=_r.call(e);return i&&(r?e[f]=t:delete e[f]),n}z.exports=Er});var H=a((ei,F)=>{var Ir=Object.prototype,Vr=Ir.toString;function Zr(e){return Vr.call(e)}F.exports=Zr});var K=a((ri,$)=>{var J=g(),Gr=B(),Wr=H(),zr="[object Null]",Br="[object Undefined]",Y=J?J.toStringTag:void 0;function Fr(e){return e==null?e===void 0?Br:zr:Y&&Y in Object(e)?Gr(e):Wr(e)}$.exports=Fr});var X=a((ti,Q)=>{function Hr(e){return e!=null&&typeof e=="object"}Q.exports=Hr});var re=a((ni,ee)=>{var Jr=K(),Yr=X(),$r="[object Symbol]";function Kr(e){return typeof e=="symbol"||Yr(e)&&Jr(e)==$r}ee.exports=Kr});var se=a((ii,ue)=>{var te=g(),Qr=I(),Xr=Z(),et=re(),rt=1/0,ne=te?te.prototype:void 0,ie=ne?ne.toString:void 0;function ae(e){if(typeof e=="string")return e;if(Xr(e))return Qr(e,ae)+"";if(et(e))return ie?ie.call(e):"";var r=e+"";return r=="0"&&1/e==-rt?"-0":r}ue.exports=ae});var b=a((ai,oe)=>{var tt=se();function nt(e){return e==null?"":tt(e)}oe.exports=nt});var he=a((ui,de)=>{var it=M(),at=b(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ht=st+ot+dt,lt="["+ht+"]",ct=RegExp(lt,"g");function ft(e){return e=at(e),e&&e.replace(ut,it).replace(ct,"")}de.exports=ft});var ce=a((si,le)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(mt)||[]}le.exports=pt});var me=a((oi,fe)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(e){return gt.test(e)}fe.exports=bt});var je=a((di,Me)=>{var pe="\\ud800-\\udfff",xt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=xt+wt+Tt,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",we=Pt+vt+Ct+Rt,Te="['\u2019]",ye="["+we+"]",kt="["+yt+"]",Pe="\\d+",At="["+ge+"]",ve="["+be+"]",Ce="[^"+pe+we+Pe+ge+be+xe+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+kt+"|"+qt+")",Lt="[^"+pe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xe+"]",Mt="\\u200d",ke="(?:"+ve+"|"+Ce+")",jt="(?:"+c+"|"+Ce+")",Ae="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",Oe=Ot+"?",Le="["+St+"]?",Nt="(?:"+Mt+"(?:"+[Lt,Re,Se].join("|")+")"+Le+Oe+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Le+Oe+Nt,Et="(?:"+[At,Re,Se].join("|")+")"+_t,It=RegExp([c+"?"+ve+"+"+Ae+"(?="+[ye,c,"$"].join("|")+")",jt+"+"+qe+"(?="+[ye,c+ke,"$"].join("|")+")",c+"?"+ke+"+"+Ae,c+"+"+qe,Dt,Ut,Pe,Et].join("|"),"g");function Vt(e){return e.match(It)||[]}Me.exports=Vt});var Ue=a((hi,Ne)=>{var Zt=ce(),Gt=me(),Wt=b(),zt=je();function Bt(e,r,t){return e=Wt(e),r=t?void 0:r,r===void 0?Gt(e)?zt(e):Zt(e):e.match(r)||[]}Ne.exports=Bt});var _e=a((li,De)=>{var Ft=A(),Ht=he(),Jt=Ue(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(e){return function(r){return Ft(Jt(Ht(r).replace($t,"")),e,"")}}De.exports=Kt});var Ie=a((ci,Ee)=>{function Qt(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(n);++i<n;)u[i]=e[i+r];return u}Ee.exports=Qt});var Ze=a((fi,Ve)=>{var Xt=Ie();function en(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Xt(e,r,t)}Ve.exports=en});var y=a((mi,Ge)=>{var rn="\\ud800-\\udfff",tn="\\u0300-\\u036f",nn="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",un=tn+nn+an,sn="\\ufe0e\\ufe0f",on="\\u200d",dn=RegExp("["+on+rn+un+sn+"]");function hn(e){return dn.test(e)}Ge.exports=hn});var ze=a((pi,We)=>{function ln(e){return e.split("")}We.exports=ln});var Qe=a((gi,Ke)=>{var Be="\\ud800-\\udfff",cn="\\u0300-\\u036f",fn="\\ufe20-\\ufe2f",mn="\\u20d0-\\u20ff",pn=cn+fn+mn,gn="\\ufe0e\\ufe0f",bn="["+Be+"]",P="["+pn+"]",v="\\ud83c[\\udffb-\\udfff]",xn="(?:"+P+"|"+v+")",Fe="[^"+Be+"]",He="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",wn="\\u200d",Ye=xn+"?",$e="["+gn+"]?",Tn="(?:"+wn+"(?:"+[Fe,He,Je].join("|")+")"+$e+Ye+")*",yn=$e+Ye+Tn,Pn="(?:"+[Fe+P+"?",P,He,Je,bn].join("|")+")",vn=RegExp(v+"(?="+v+")|"+Pn+yn,"g");function Cn(e){return e.match(vn)||[]}Ke.exports=Cn});var er=a((bi,Xe)=>{var Rn=ze(),Sn=y(),kn=Qe();function An(e){return Sn(e)?kn(e):Rn(e)}Xe.exports=An});var tr=a((xi,rr)=>{var qn=Ze(),On=y(),Ln=er(),Mn=b();function jn(e){return function(r){r=Mn(r);var t=On(r)?Ln(r):void 0,i=t?t[0]:r.charAt(0),n=t?qn(t,1).join(""):r.slice(1);return i[e]()+n}}rr.exports=jn});var ir=a((wi,nr)=>{var Nn=tr(),Un=Nn("toUpperCase");nr.exports=Un});var ur=a((Ti,ar)=>{var Dn=_e(),_n=ir(),En=Dn(function(e,r,t){return e+(t?" ":"")+_n(r)});ar.exports=En});var sr=Pr(ur());function or(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(or):e}function In(e,r){return T(this,null,function*(){var o;let{data:{key:t,params:i}}=e,n,u;try{n=yield r(...i)}catch(s){n=void 0;try{u=s.toString()}catch(l){u="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=or(n),d.result={type:"string",value:n}),u!==void 0&&(d.error=u),((o=e.source)==null?void 0:o.postMessage).call(o,d,"*")})}function Vn(e){return typeof window!="undefined"&&window.addEventListener("message",r=>In(r,e.run)),p(h({},e),{json:JSON.stringify(Gn(e),null,2)})}var Zn=`
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
</svg>`;function Gn(e){let{name:r,category:t,released:i,description:n,author:u,result:d,params:o,about:s,video:l}=e,{icon:w=dr}=e;return w==="glide"&&(w=Zn),{name:r,category:t,released:i,description:n,author:u,result:d,about:s,icon:w,video:l,params:Object.entries(o).map(([lr,cr])=>h({name:lr},cr))}}var Wn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:dr,about:void 0,video:void 0,tests:[],run(){return T(this,null,function*(){})}},x=class{constructor(r={},t=[]){this.definition=h(h({},Wn),r),this.requiredParams=[...t]}with(r,t=[]){return new x(h(h({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,sr.default)(t)),this.with({params:p(h({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...d){let o={};if(d.forEach(({value:s},l)=>{o[n[l]]=s}),!i.some(s=>o[s]===void 0))return r(o)}return Vn(p(h({},this.definition),{run:u}))}};function hr(e){return new x({name:e})}var vi=hr("Text Offset").withCategory("Text").withDescription("Gets the zero-based offset of the zero-based N-th occurence of needle in haystack").withNumberResult().withReleased("direct").withRequiredStringParam("haystack").withRequiredStringParam("needle").withNumberParam("nth").withTest({haystack:"there is one @ here",needle:"@"},13).withTest({haystack:"there is one @ here",needle:"@",nth:0},13).withTest({haystack:"there is one @ here",needle:"@",nth:1},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:2},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:-1},13).withTest({haystack:"there is one @ here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@"},void 0).withTest({haystack:"But none here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@",nth:-1},void 0).withTest({haystack:"But none here",needle:"@",nth:0},void 0).withTest({haystack:"But none here",needle:"@",nth:1},void 0).withTest({haystack:"But none here",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-3},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-2},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:0},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-2},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:0},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:2},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:3},void 0).withTest({haystack:"@ and we want @ the second @",needle:"@"},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:1},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:2},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-1},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-2},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-3},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-4},void 0).withTest({haystack:"and == we can do == long == numbers ==",needle:"=="},4).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:1},17).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:2},25).run(({needle:e,haystack:r,nth:t})=>{let i=Math.floor(t!=null?t:0),n=-1;if(i<0){i=-i,n=r.length;for(let u=0;u<i&&(r=r.substring(0,n),n=r.lastIndexOf(e),!(n<0));u++);}else{i++;let u=0;for(let d=0;d<i;d++){if(r=r.substring(n+1),n=r.indexOf(e),n<0){u=-1;break}u+=d===0?n:n+1}n=u}return n<0?void 0:n});})();
//# sourceMappingURL=index.js.map
