var mr=Object.create;var p=Object.defineProperty,cr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,br=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,hr=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&R(r,t,e[t]);if(v)for(var t of v(e))xr.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>cr(r,gr(e)),Tr=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var yr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of br(e))!C.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=pr(e,i))||t.enumerable});return r},wr=r=>yr(Tr(p(r!=null?mr(hr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var S=(r,e,t)=>new Promise((i,u)=>{var s=a=>{try{o(t.next(a))}catch(d){u(d)}},m=a=>{try{o(t.throw(a))}catch(d){u(d)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,m);o((t=t.apply(r,e)).next())});var q=n((Gi,A)=>{function Pr(r,e,t,i){var u=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++u]);++u<s;)t=e(t,r[u],u,r);return t}A.exports=Pr});var L=n((Wi,O)=>{function vr(r){return function(e){return r==null?void 0:r[e]}}O.exports=vr});var j=n((Fi,M)=>{var Cr=L(),Rr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Sr=Cr(Rr);M.exports=Sr});var U=n((zi,N)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ar});var D=n((Hi,k)=>{var qr=U(),Or=typeof self=="object"&&self&&self.Object===Object&&self,Lr=qr||Or||Function("return this")();k.exports=Lr});var b=n((Ji,_)=>{var Mr=D(),jr=Mr.Symbol;_.exports=jr});var I=n((Bi,E)=>{function Nr(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}E.exports=Nr});var Z=n((Yi,V)=>{var Ur=Array.isArray;V.exports=Ur});var z=n(($i,F)=>{var G=b(),W=Object.prototype,kr=W.hasOwnProperty,Dr=W.toString,c=G?G.toStringTag:void 0;function _r(r){var e=kr.call(r,c),t=r[c];try{r[c]=void 0;var i=!0}catch(s){}var u=Dr.call(r);return i&&(e?r[c]=t:delete r[c]),u}F.exports=_r});var J=n((Ki,H)=>{var Er=Object.prototype,Ir=Er.toString;function Vr(r){return Ir.call(r)}H.exports=Vr});var K=n((Qi,$)=>{var B=b(),Zr=z(),Gr=J(),Wr="[object Null]",Fr="[object Undefined]",Y=B?B.toStringTag:void 0;function zr(r){return r==null?r===void 0?Fr:Wr:Y&&Y in Object(r)?Zr(r):Gr(r)}$.exports=zr});var X=n((Xi,Q)=>{function Hr(r){return r!=null&&typeof r=="object"}Q.exports=Hr});var re=n((en,ee)=>{var Jr=K(),Br=X(),Yr="[object Symbol]";function $r(r){return typeof r=="symbol"||Br(r)&&Jr(r)==Yr}ee.exports=$r});var se=n((rn,ae)=>{var te=b(),Kr=I(),Qr=Z(),Xr=re(),et=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ue(r){if(typeof r=="string")return r;if(Qr(r))return Kr(r,ue)+"";if(Xr(r))return ne?ne.call(r):"";var e=r+"";return e=="0"&&1/r==-et?"-0":e}ae.exports=ue});var h=n((tn,oe)=>{var rt=se();function tt(r){return r==null?"":rt(r)}oe.exports=tt});var de=n((nn,le)=>{var it=j(),nt=h(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",lt=at+st+ot,dt="["+lt+"]",ft=RegExp(dt,"g");function mt(r){return r=nt(r),r&&r.replace(ut,it).replace(ft,"")}le.exports=mt});var me=n((un,fe)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(ct)||[]}fe.exports=pt});var pe=n((an,ce)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return gt.test(r)}ce.exports=bt});var Ne=n((sn,je)=>{var ge="\\ud800-\\udfff",ht="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=ht+xt+Tt,be="\\u2700-\\u27bf",he="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",Te=wt+Pt+vt+Ct,ye="['\u2019]",we="["+Te+"]",St="["+yt+"]",Pe="\\d+",At="["+be+"]",ve="["+he+"]",Ce="[^"+ge+Te+Pe+be+he+xe+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+St+"|"+qt+")",Lt="[^"+ge+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+xe+"]",Mt="\\u200d",Ae="(?:"+ve+"|"+Ce+")",jt="(?:"+f+"|"+Ce+")",qe="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",Oe="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",Le=Ot+"?",Me="["+Rt+"]?",Nt="(?:"+Mt+"(?:"+[Lt,Re,Se].join("|")+")"+Me+Le+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=Me+Le+Nt,_t="(?:"+[At,Re,Se].join("|")+")"+Dt,Et=RegExp([f+"?"+ve+"+"+qe+"(?="+[we,f,"$"].join("|")+")",jt+"+"+Oe+"(?="+[we,f+Ae,"$"].join("|")+")",f+"?"+Ae+"+"+qe,f+"+"+Oe,kt,Ut,Pe,_t].join("|"),"g");function It(r){return r.match(Et)||[]}je.exports=It});var ke=n((on,Ue)=>{var Vt=me(),Zt=pe(),Gt=h(),Wt=Ne();function Ft(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Zt(r)?Wt(r):Vt(r):r.match(e)||[]}Ue.exports=Ft});var _e=n((ln,De)=>{var zt=q(),Ht=de(),Jt=ke(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return zt(Jt(Ht(e).replace(Yt,"")),r,"")}}De.exports=$t});var Ie=n((dn,Ee)=>{function Kt(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(u);++i<u;)s[i]=r[i+e];return s}Ee.exports=Kt});var Ze=n((fn,Ve)=>{var Qt=Ie();function Xt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Qt(r,e,t)}Ve.exports=Xt});var y=n((mn,Ge)=>{var ei="\\ud800-\\udfff",ri="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ri+ti+ii,ui="\\ufe0e\\ufe0f",ai="\\u200d",si=RegExp("["+ai+ei+ni+ui+"]");function oi(r){return si.test(r)}Ge.exports=oi});var Fe=n((cn,We)=>{function li(r){return r.split("")}We.exports=li});var Qe=n((pn,Ke)=>{var ze="\\ud800-\\udfff",di="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",mi="\\u20d0-\\u20ff",ci=di+fi+mi,pi="\\ufe0e\\ufe0f",gi="["+ze+"]",w="["+ci+"]",P="\\ud83c[\\udffb-\\udfff]",bi="(?:"+w+"|"+P+")",He="[^"+ze+"]",Je="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",hi="\\u200d",Ye=bi+"?",$e="["+pi+"]?",xi="(?:"+hi+"(?:"+[He,Je,Be].join("|")+")"+$e+Ye+")*",Ti=$e+Ye+xi,yi="(?:"+[He+w+"?",w,Je,Be,gi].join("|")+")",wi=RegExp(P+"(?="+P+")|"+yi+Ti,"g");function Pi(r){return r.match(wi)||[]}Ke.exports=Pi});var er=n((gn,Xe)=>{var vi=Fe(),Ci=y(),Ri=Qe();function Si(r){return Ci(r)?Ri(r):vi(r)}Xe.exports=Si});var tr=n((bn,rr)=>{var Ai=Ze(),qi=y(),Oi=er(),Li=h();function Mi(r){return function(e){e=Li(e);var t=qi(e)?Oi(e):void 0,i=t?t[0]:e.charAt(0),u=t?Ai(t,1).join(""):e.slice(1);return i[r]()+u}}rr.exports=Mi});var nr=n((hn,ir)=>{var ji=tr(),Ni=ji("toUpperCase");ir.exports=Ni});var ar=n((xn,ur)=>{var Ui=_e(),ki=nr(),Di=Ui(function(r,e,t){return r+(t?" ":"")+ki(e)});ur.exports=Di});var sr=wr(ar());function _i(r){return g(l({},r),{json:JSON.stringify(Ii(r),null,2)})}var Ei=`
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
    `,or=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ii(r){let{name:e,category:t,released:i,description:u,author:s,result:m,params:o,about:a,video:d}=r,{icon:T=or}=r;return T==="glide"&&(T=Ei),{name:e,category:t,released:i,description:u,author:s,result:m,about:a,icon:T,video:d,params:Object.entries(o).map(([dr,fr])=>l({name:dr},fr))}}var Vi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:or,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},Vi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,sr.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function s(...m){let o={};if(m.forEach(({value:a},d)=>{o[u[d]]=a}),!i.some(a=>o[a]===void 0))return e(o)}return _i(g(l({},this.definition),{run:s}))}};function lr(r){return new x({name:r})}var wn=lr("Text Length").withCategory("Text").withReleased("direct").withDescription("Gets the length of a text snippet").withNumberResult().withRequiredStringParam("text").withTest({text:"This is some text"},17).run(({text:r})=>r.length);export{wn as default};
//# sourceMappingURL=function.js.map
