(()=>{var ge=Object.create;var p=Object.defineProperty,be=Object.defineProperties,he=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,ye=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var A=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&A(r,t,e[t]);if(R)for(var t of R(e))we.call(e,t)&&A(r,t,e[t]);return r},g=(r,e)=>be(r,xe(e)),ve=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Pe=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Te(e))!S.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=he(e,i))||t.enumerable});return r},q=r=>Pe(ve(p(r!=null?ge(ye(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((i,n)=>{var a=s=>{try{o(t.next(s))}catch(c){n(c)}},d=s=>{try{o(t.throw(s))}catch(c){n(c)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,d);o((t=t.apply(r,e)).next())});var L=u((Fi,O)=>{function Ce(r,e,t,i){var n=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}O.exports=Ce});var M=u((Hi,j)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}j.exports=Re});var k=u((Ji,N)=>{var Se=M(),Ae={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qe=Se(Ae);N.exports=qe});var D=u((Bi,U)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Oe});var E=u((Yi,_)=>{var Le=D(),je=typeof self=="object"&&self&&self.Object===Object&&self,Me=Le||je||Function("return this")();_.exports=Me});var b=u(($i,I)=>{var Ne=E(),ke=Ne.Symbol;I.exports=ke});var Z=u((Ki,V)=>{function Ue(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}V.exports=Ue});var G=u((Qi,W)=>{var De=Array.isArray;W.exports=De});var J=u((Xi,H)=>{var z=b(),F=Object.prototype,_e=F.hasOwnProperty,Ee=F.toString,m=z?z.toStringTag:void 0;function Ie(r){var e=_e.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var n=Ee.call(r);return i&&(e?r[m]=t:delete r[m]),n}H.exports=Ie});var Y=u((rn,B)=>{var Ve=Object.prototype,Ze=Ve.toString;function We(r){return Ze.call(r)}B.exports=We});var X=u((en,Q)=>{var $=b(),Ge=J(),ze=Y(),Fe="[object Null]",He="[object Undefined]",K=$?$.toStringTag:void 0;function Je(r){return r==null?r===void 0?He:Fe:K&&K in Object(r)?Ge(r):ze(r)}Q.exports=Je});var er=u((tn,rr)=>{function Be(r){return r!=null&&typeof r=="object"}rr.exports=Be});var ir=u((nn,tr)=>{var Ye=X(),$e=er(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}tr.exports=Qe});var dr=u((un,or)=>{var nr=b(),Xe=Z(),rt=G(),et=ir(),tt=1/0,ur=nr?nr.prototype:void 0,ar=ur?ur.toString:void 0;function sr(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,sr)+"";if(et(r))return ar?ar.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}or.exports=sr});var h=u((an,lr)=>{var it=dr();function nt(r){return r==null?"":it(r)}lr.exports=nt});var w=u((sn,cr)=>{var ut=k(),at=h(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",ct=ot+dt+lt,ft="["+ct+"]",mt=RegExp(ft,"g");function pt(r){return r=at(r),r&&r.replace(st,ut).replace(mt,"")}cr.exports=pt});var mr=u((on,fr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(gt)||[]}fr.exports=bt});var gr=u((dn,pr)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return ht.test(r)}pr.exports=xt});var kr=u((ln,Nr)=>{var br="\\ud800-\\udfff",Tt="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",vt=Tt+yt+wt,hr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",yr=Pt+Ct+Rt+St,wr="['\u2019]",vr="["+yr+"]",qt="["+vt+"]",Pr="\\d+",Ot="["+hr+"]",Cr="["+xr+"]",Rr="[^"+br+yr+Pr+hr+xr+Tr+"]",Lt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+qt+"|"+Lt+")",Mt="[^"+br+"]",Sr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+Tr+"]",Nt="\\u200d",qr="(?:"+Cr+"|"+Rr+")",kt="(?:"+f+"|"+Rr+")",Or="(?:"+wr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+wr+"(?:D|LL|M|RE|S|T|VE))?",jr=jt+"?",Mr="["+At+"]?",Ut="(?:"+Nt+"(?:"+[Mt,Sr,Ar].join("|")+")"+Mr+jr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=Mr+jr+Ut,It="(?:"+[Ot,Sr,Ar].join("|")+")"+Et,Vt=RegExp([f+"?"+Cr+"+"+Or+"(?="+[vr,f,"$"].join("|")+")",kt+"+"+Lr+"(?="+[vr,f+qr,"$"].join("|")+")",f+"?"+qr+"+"+Or,f+"+"+Lr,_t,Dt,Pr,It].join("|"),"g");function Zt(r){return r.match(Vt)||[]}Nr.exports=Zt});var Dr=u((cn,Ur)=>{var Wt=mr(),Gt=gr(),zt=h(),Ft=kr();function Ht(r,e,t){return r=zt(r),e=t?void 0:e,e===void 0?Gt(r)?Ft(r):Wt(r):r.match(e)||[]}Ur.exports=Ht});var Er=u((fn,_r)=>{var Jt=L(),Bt=w(),Yt=Dr(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Jt(Yt(Bt(e).replace(Kt,"")),r,"")}}_r.exports=Qt});var Vr=u((mn,Ir)=>{function Xt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++i<n;)a[i]=r[i+e];return a}Ir.exports=Xt});var Wr=u((pn,Zr)=>{var ri=Vr();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ri(r,e,t)}Zr.exports=ei});var v=u((gn,Gr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",ai=ii+ni+ui,si="\\ufe0e\\ufe0f",oi="\\u200d",di=RegExp("["+oi+ti+ai+si+"]");function li(r){return di.test(r)}Gr.exports=li});var Fr=u((bn,zr)=>{function ci(r){return r.split("")}zr.exports=ci});var Xr=u((hn,Qr)=>{var Hr="\\ud800-\\udfff",fi="\\u0300-\\u036f",mi="\\ufe20-\\ufe2f",pi="\\u20d0-\\u20ff",gi=fi+mi+pi,bi="\\ufe0e\\ufe0f",hi="["+Hr+"]",P="["+gi+"]",C="\\ud83c[\\udffb-\\udfff]",xi="(?:"+P+"|"+C+")",Jr="[^"+Hr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="\\u200d",$r=xi+"?",Kr="["+bi+"]?",yi="(?:"+Ti+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",wi=Kr+$r+yi,vi="(?:"+[Jr+P+"?",P,Br,Yr,hi].join("|")+")",Pi=RegExp(C+"(?="+C+")|"+vi+wi,"g");function Ci(r){return r.match(Pi)||[]}Qr.exports=Ci});var ee=u((xn,re)=>{var Ri=Fr(),Si=v(),Ai=Xr();function qi(r){return Si(r)?Ai(r):Ri(r)}re.exports=qi});var ie=u((Tn,te)=>{var Oi=Wr(),Li=v(),ji=ee(),Mi=h();function Ni(r){return function(e){e=Mi(e);var t=Li(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),n=t?Oi(t,1).join(""):e.slice(1);return i[r]()+n}}te.exports=Ni});var ue=u((yn,ne)=>{var ki=ie(),Ui=ki("toUpperCase");ne.exports=Ui});var se=u((wn,ae)=>{var Di=Er(),_i=ue(),Ei=Di(function(r,e,t){return r+(t?" ":"")+_i(e)});ae.exports=Ei});var oe=q(se());function de(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(de):r}function Ii(r,e){return y(this,null,function*(){var o;let{data:{key:t,params:i}}=r,n,a;try{n=yield e(...i)}catch(s){n=void 0;try{a=s.toString()}catch(c){a="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=de(n),d.result={type:"string",value:n}),a!==void 0&&(d.error=a),((o=r.source)==null?void 0:o.postMessage).call(o,d,"*")})}function Vi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Ii(e,r.run)),g(l({},r),{json:JSON.stringify(Wi(r),null,2)})}var Zi=`
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
</svg>`;function Wi(r){let{name:e,category:t,released:i,description:n,author:a,result:d,params:o,about:s,video:c}=r,{icon:T=le}=r;return T==="glide"&&(T=Zi),{name:e,category:t,released:i,description:n,author:a,result:d,about:s,icon:T,video:c,params:Object.entries(o).map(([me,pe])=>l({name:me},pe))}}var Gi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:le,about:void 0,video:void 0,tests:[],run(){return y(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},Gi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...d){let o={};if(d.forEach(({value:s},c)=>{o[n[c]]=s}),!i.some(s=>o[s]===void 0))return e(o)}return Vi(g(l({},this.definition),{run:a}))}};function ce(r){return new x({name:r})}var fe=q(w()),Cn=ce("Remove Text Accents").withCategory("Text").withReleased("direct").withDescription("Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withTest({text:"d\xE9j\xE0 vu"},"deja vu").run(({text:r})=>r===void 0?void 0:(0,fe.default)(r));})();
//# sourceMappingURL=index.js.map
