var be=Object.create;var p=Object.defineProperty,he=Object.defineProperties,xe=Object.getOwnPropertyDescriptor,Te=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,we=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&R(r,t,e[t]);if(P)for(var t of P(e))ve.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>he(r,Te(e)),Pe=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ce=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ye(e))!C.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=xe(e,i))||t.enumerable});return r},S=r=>Ce(Pe(p(r!=null?be(we(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var A=(r,e,t)=>new Promise((i,u)=>{var s=a=>{try{o(t.next(a))}catch(d){u(d)}},c=a=>{try{o(t.throw(a))}catch(d){u(d)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,c);o((t=t.apply(r,e)).next())});var O=n((Hi,q)=>{function Re(r,e,t,i){var u=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++u]);++u<s;)t=e(t,r[u],u,r);return t}q.exports=Re});var M=n((Ji,L)=>{function Se(r){return function(e){return r==null?void 0:r[e]}}L.exports=Se});var N=n(($i,j)=>{var Ae=M(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Oe=Ae(qe);j.exports=Oe});var k=n((Bi,U)=>{var Le=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Le});var D=n((Yi,_)=>{var Me=k(),je=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Me||je||Function("return this")();_.exports=Ne});var b=n((Ki,E)=>{var Ue=D(),ke=Ue.Symbol;E.exports=ke});var I=n((Qi,Z)=>{function _e(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}Z.exports=_e});var z=n((Xi,V)=>{var De=Array.isArray;V.exports=De});var H=n((rn,F)=>{var W=b(),G=Object.prototype,Ee=G.hasOwnProperty,Ze=G.toString,m=W?W.toStringTag:void 0;function Ie(r){var e=Ee.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(s){}var u=Ze.call(r);return i&&(e?r[m]=t:delete r[m]),u}F.exports=Ie});var $=n((en,J)=>{var Ve=Object.prototype,ze=Ve.toString;function We(r){return ze.call(r)}J.exports=We});var Q=n((tn,K)=>{var B=b(),Ge=H(),Fe=$(),He="[object Null]",Je="[object Undefined]",Y=B?B.toStringTag:void 0;function $e(r){return r==null?r===void 0?Je:He:Y&&Y in Object(r)?Ge(r):Fe(r)}K.exports=$e});var rr=n((nn,X)=>{function Be(r){return r!=null&&typeof r=="object"}X.exports=Be});var tr=n((un,er)=>{var Ye=Q(),Ke=rr(),Qe="[object Symbol]";function Xe(r){return typeof r=="symbol"||Ke(r)&&Ye(r)==Qe}er.exports=Xe});var or=n((an,sr)=>{var ir=b(),rt=I(),et=z(),tt=tr(),it=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(et(r))return rt(r,ar)+"";if(tt(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-it?"-0":e}sr.exports=ar});var h=n((sn,lr)=>{var nt=or();function ut(r){return r==null?"":nt(r)}lr.exports=ut});var fr=n((on,dr)=>{var at=N(),st=h(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lt="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",ft="\\u20d0-\\u20ff",ct=lt+dt+ft,mt="["+ct+"]",pt=RegExp(mt,"g");function gt(r){return r=st(r),r&&r.replace(ot,at).replace(pt,"")}dr.exports=gt});var mr=n((ln,cr)=>{var bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ht(r){return r.match(bt)||[]}cr.exports=ht});var gr=n((dn,pr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(r){return xt.test(r)}pr.exports=Tt});var Ur=n((fn,Nr)=>{var br="\\ud800-\\udfff",yt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",vt="\\u20d0-\\u20ff",Pt=yt+wt+vt,hr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",yr=Ct+Rt+St+At,wr="['\u2019]",vr="["+yr+"]",Ot="["+Pt+"]",Pr="\\d+",Lt="["+hr+"]",Cr="["+xr+"]",Rr="[^"+br+yr+Pr+hr+xr+Tr+"]",Mt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Ot+"|"+Mt+")",Nt="[^"+br+"]",Sr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+Tr+"]",Ut="\\u200d",qr="(?:"+Cr+"|"+Rr+")",kt="(?:"+f+"|"+Rr+")",Or="(?:"+wr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+wr+"(?:D|LL|M|RE|S|T|VE))?",Mr=jt+"?",jr="["+qt+"]?",_t="(?:"+Ut+"(?:"+[Nt,Sr,Ar].join("|")+")"+jr+Mr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Et="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Zt=jr+Mr+_t,It="(?:"+[Lt,Sr,Ar].join("|")+")"+Zt,Vt=RegExp([f+"?"+Cr+"+"+Or+"(?="+[vr,f,"$"].join("|")+")",kt+"+"+Lr+"(?="+[vr,f+qr,"$"].join("|")+")",f+"?"+qr+"+"+Or,f+"+"+Lr,Et,Dt,Pr,It].join("|"),"g");function zt(r){return r.match(Vt)||[]}Nr.exports=zt});var _r=n((cn,kr)=>{var Wt=mr(),Gt=gr(),Ft=h(),Ht=Ur();function Jt(r,e,t){return r=Ft(r),e=t?void 0:e,e===void 0?Gt(r)?Ht(r):Wt(r):r.match(e)||[]}kr.exports=Jt});var Er=n((mn,Dr)=>{var $t=O(),Bt=fr(),Yt=_r(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(r){return function(e){return $t(Yt(Bt(e).replace(Qt,"")),r,"")}}Dr.exports=Xt});var Ir=n((pn,Zr)=>{function ri(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(u);++i<u;)s[i]=r[i+e];return s}Zr.exports=ri});var zr=n((gn,Vr)=>{var ei=Ir();function ti(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ei(r,e,t)}Vr.exports=ti});var y=n((bn,Wr)=>{var ii="\\ud800-\\udfff",ni="\\u0300-\\u036f",ui="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",si=ni+ui+ai,oi="\\ufe0e\\ufe0f",li="\\u200d",di=RegExp("["+li+ii+si+oi+"]");function fi(r){return di.test(r)}Wr.exports=fi});var Fr=n((hn,Gr)=>{function ci(r){return r.split("")}Gr.exports=ci});var Xr=n((xn,Qr)=>{var Hr="\\ud800-\\udfff",mi="\\u0300-\\u036f",pi="\\ufe20-\\ufe2f",gi="\\u20d0-\\u20ff",bi=mi+pi+gi,hi="\\ufe0e\\ufe0f",xi="["+Hr+"]",w="["+bi+"]",v="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+w+"|"+v+")",Jr="[^"+Hr+"]",$r="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",yi="\\u200d",Yr=Ti+"?",Kr="["+hi+"]?",wi="(?:"+yi+"(?:"+[Jr,$r,Br].join("|")+")"+Kr+Yr+")*",vi=Kr+Yr+wi,Pi="(?:"+[Jr+w+"?",w,$r,Br,xi].join("|")+")",Ci=RegExp(v+"(?="+v+")|"+Pi+vi,"g");function Ri(r){return r.match(Ci)||[]}Qr.exports=Ri});var ee=n((Tn,re)=>{var Si=Fr(),Ai=y(),qi=Xr();function Oi(r){return Ai(r)?qi(r):Si(r)}re.exports=Oi});var ie=n((yn,te)=>{var Li=zr(),Mi=y(),ji=ee(),Ni=h();function Ui(r){return function(e){e=Ni(e);var t=Mi(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),u=t?Li(t,1).join(""):e.slice(1);return i[r]()+u}}te.exports=Ui});var ue=n((wn,ne)=>{var ki=ie(),_i=ki("toUpperCase");ne.exports=_i});var se=n((vn,ae)=>{var Di=Er(),Ei=ue(),Zi=Di(function(r,e,t){return r+(t?" ":"")+Ei(e)});ae.exports=Zi});var ce=n(fe=>{"use strict";var Gi=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;fe.validate=function(r){if(!r||r.length>254)return!1;var e=Gi.test(r);if(!e)return!1;var t=r.split("@");if(t[0].length>64)return!1;var i=t[1].split(".");return!i.some(function(u){return u.length>63})}});var oe=S(se());function Ii(r){return g(l({},r),{json:JSON.stringify(zi(r),null,2)})}var Vi=`
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
</svg>`;function zi(r){let{name:e,category:t,released:i,description:u,author:s,result:c,params:o,about:a,video:d}=r,{icon:T=le}=r;return T==="glide"&&(T=Vi),{name:e,category:t,released:i,description:u,author:s,result:c,about:a,icon:T,video:d,params:Object.entries(o).map(([pe,ge])=>l({name:pe},ge))}}var Wi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:le,about:void 0,video:void 0,tests:[],run(){return A(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function s(...c){let o={};if(c.forEach(({value:a},d)=>{o[u[d]]=a}),!i.some(a=>o[a]===void 0))return e(o)}return Ii(g(l({},this.definition),{run:s}))}};function de(r){return new x({name:r})}var me=S(ce()),Sn=de("Email Validator").withCategory("Text").withReleased("direct").withDescription("Indicates whether text is an email.").withBooleanResult().withStringParam("email").withTest({email:"hello@world.co"},!0).run(({email:r})=>r!==void 0&&me.default.validate(r));export{Sn as default};
//# sourceMappingURL=function.js.map
