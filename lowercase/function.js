var be=Object.create;var p=Object.defineProperty,he=Object.defineProperties,xe=Object.getOwnPropertyDescriptor,Te=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,we=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(r,t,e[t]);if(P)for(var t of P(e))Ce.call(e,t)&&S(r,t,e[t]);return r},g=(r,e)=>he(r,Te(e)),ve=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Pe=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ye(e))!R.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=xe(e,i))||t.enumerable});return r},A=r=>Pe(ve(p(r!=null?be(we(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var q=(r,e,t)=>new Promise((i,u)=>{var s=a=>{try{o(t.next(a))}catch(l){u(l)}},c=a=>{try{o(t.throw(a))}catch(l){u(l)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(s,c);o((t=t.apply(r,e)).next())});var L=n((Ji,O)=>{function Re(r,e,t,i){var u=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++u]);++u<s;)t=e(t,r[u],u,r);return t}O.exports=Re});var j=n((Bi,M)=>{function Se(r){return function(e){return r==null?void 0:r[e]}}M.exports=Se});var U=n((Yi,N)=>{var Ae=j(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Oe=Ae(qe);N.exports=Oe});var _=n(($i,k)=>{var Le=typeof global=="object"&&global&&global.Object===Object&&global;k.exports=Le});var E=n((Ki,D)=>{var Me=_(),je=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Me||je||Function("return this")();D.exports=Ne});var b=n((Qi,I)=>{var Ue=E(),ke=Ue.Symbol;I.exports=ke});var Z=n((Xi,V)=>{function _e(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}V.exports=_e});var G=n((rn,W)=>{var De=Array.isArray;W.exports=De});var J=n((en,H)=>{var z=b(),F=Object.prototype,Ee=F.hasOwnProperty,Ie=F.toString,m=z?z.toStringTag:void 0;function Ve(r){var e=Ee.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(s){}var u=Ie.call(r);return i&&(e?r[m]=t:delete r[m]),u}H.exports=Ve});var Y=n((tn,B)=>{var Ze=Object.prototype,We=Ze.toString;function Ge(r){return We.call(r)}B.exports=Ge});var X=n((nn,Q)=>{var $=b(),ze=J(),Fe=Y(),He="[object Null]",Je="[object Undefined]",K=$?$.toStringTag:void 0;function Be(r){return r==null?r===void 0?Je:He:K&&K in Object(r)?ze(r):Fe(r)}Q.exports=Be});var er=n((un,rr)=>{function Ye(r){return r!=null&&typeof r=="object"}rr.exports=Ye});var ir=n((an,tr)=>{var $e=X(),Ke=er(),Qe="[object Symbol]";function Xe(r){return typeof r=="symbol"||Ke(r)&&$e(r)==Qe}tr.exports=Xe});var dr=n((sn,or)=>{var nr=b(),rt=Z(),et=G(),tt=ir(),it=1/0,ur=nr?nr.prototype:void 0,ar=ur?ur.toString:void 0;function sr(r){if(typeof r=="string")return r;if(et(r))return rt(r,sr)+"";if(tt(r))return ar?ar.call(r):"";var e=r+"";return e=="0"&&1/r==-it?"-0":e}or.exports=sr});var h=n((on,lr)=>{var nt=dr();function ut(r){return r==null?"":nt(r)}lr.exports=ut});var cr=n((dn,fr)=>{var at=U(),st=h(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dt="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",ft="\\u20d0-\\u20ff",ct=dt+lt+ft,mt="["+ct+"]",pt=RegExp(mt,"g");function gt(r){return r=st(r),r&&r.replace(ot,at).replace(pt,"")}fr.exports=gt});var pr=n((ln,mr)=>{var bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ht(r){return r.match(bt)||[]}mr.exports=ht});var br=n((fn,gr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(r){return xt.test(r)}gr.exports=Tt});var kr=n((cn,Ur)=>{var hr="\\ud800-\\udfff",yt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",vt=yt+wt+Ct,xr="\\u2700-\\u27bf",Tr="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",wr=Pt+Rt+St+At,Cr="['\u2019]",vr="["+wr+"]",Ot="["+vt+"]",Pr="\\d+",Lt="["+xr+"]",Rr="["+Tr+"]",Sr="[^"+hr+wr+Pr+xr+Tr+yr+"]",Mt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Ot+"|"+Mt+")",Nt="[^"+hr+"]",Ar="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+yr+"]",Ut="\\u200d",Or="(?:"+Rr+"|"+Sr+")",kt="(?:"+f+"|"+Sr+")",Lr="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Mr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=jt+"?",Nr="["+qt+"]?",_t="(?:"+Ut+"(?:"+[Nt,Ar,qr].join("|")+")"+Nr+jr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Et="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=Nr+jr+_t,Vt="(?:"+[Lt,Ar,qr].join("|")+")"+It,Zt=RegExp([f+"?"+Rr+"+"+Lr+"(?="+[vr,f,"$"].join("|")+")",kt+"+"+Mr+"(?="+[vr,f+Or,"$"].join("|")+")",f+"?"+Or+"+"+Lr,f+"+"+Mr,Et,Dt,Pr,Vt].join("|"),"g");function Wt(r){return r.match(Zt)||[]}Ur.exports=Wt});var Dr=n((mn,_r)=>{var Gt=pr(),zt=br(),Ft=h(),Ht=kr();function Jt(r,e,t){return r=Ft(r),e=t?void 0:e,e===void 0?zt(r)?Ht(r):Gt(r):r.match(e)||[]}_r.exports=Jt});var y=n((pn,Er)=>{var Bt=L(),Yt=cr(),$t=Dr(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(r){return function(e){return Bt($t(Yt(e).replace(Qt,"")),r,"")}}Er.exports=Xt});var Vr=n((gn,Ir)=>{function ri(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(u);++i<u;)s[i]=r[i+e];return s}Ir.exports=ri});var Wr=n((bn,Zr)=>{var ei=Vr();function ti(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ei(r,e,t)}Zr.exports=ti});var w=n((hn,Gr)=>{var ii="\\ud800-\\udfff",ni="\\u0300-\\u036f",ui="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",si=ni+ui+ai,oi="\\ufe0e\\ufe0f",di="\\u200d",li=RegExp("["+di+ii+si+oi+"]");function fi(r){return li.test(r)}Gr.exports=fi});var Fr=n((xn,zr)=>{function ci(r){return r.split("")}zr.exports=ci});var Xr=n((Tn,Qr)=>{var Hr="\\ud800-\\udfff",mi="\\u0300-\\u036f",pi="\\ufe20-\\ufe2f",gi="\\u20d0-\\u20ff",bi=mi+pi+gi,hi="\\ufe0e\\ufe0f",xi="["+Hr+"]",C="["+bi+"]",v="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+C+"|"+v+")",Jr="[^"+Hr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",yi="\\u200d",$r=Ti+"?",Kr="["+hi+"]?",wi="(?:"+yi+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",Ci=Kr+$r+wi,vi="(?:"+[Jr+C+"?",C,Br,Yr,xi].join("|")+")",Pi=RegExp(v+"(?="+v+")|"+vi+Ci,"g");function Ri(r){return r.match(Pi)||[]}Qr.exports=Ri});var ee=n((yn,re)=>{var Si=Fr(),Ai=w(),qi=Xr();function Oi(r){return Ai(r)?qi(r):Si(r)}re.exports=Oi});var ie=n((wn,te)=>{var Li=Wr(),Mi=w(),ji=ee(),Ni=h();function Ui(r){return function(e){e=Ni(e);var t=Mi(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),u=t?Li(t,1).join(""):e.slice(1);return i[r]()+u}}te.exports=Ui});var ue=n((Cn,ne)=>{var ki=ie(),_i=ki("toUpperCase");ne.exports=_i});var se=n((vn,ae)=>{var Di=y(),Ei=ue(),Ii=Di(function(r,e,t){return r+(t?" ":"")+Ei(e)});ae.exports=Ii});var ce=n((Rn,fe)=>{var zi=y(),Fi=zi(function(r,e,t){return r+(t?" ":"")+e.toLowerCase()});fe.exports=Fi});var oe=A(se());function Vi(r){return g(d({},r),{json:JSON.stringify(Wi(r),null,2)})}var Zi=`
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
    `,de=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Wi(r){let{name:e,category:t,released:i,description:u,author:s,result:c,params:o,about:a,video:l}=r,{icon:T=de}=r;return T==="glide"&&(T=Zi),{name:e,category:t,released:i,description:u,author:s,result:c,about:a,icon:T,video:l,params:Object.entries(o).map(([pe,ge])=>d({name:pe},ge))}}var Gi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:de,about:void 0,video:void 0,tests:[],run(){return q(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=d(d({},Gi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function s(...c){let o={};if(c.forEach(({value:a},l)=>{o[u[l]]=a}),!i.some(a=>o[a]===void 0))return e(o)}return Vi(g(d({},this.definition),{run:s}))}};function le(r){return new x({name:r})}var me=A(ce()),An=le("Lowercase Text").withCategory("Text").withReleased("direct").withDescription("Converts string, as space separated words, to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withTest({text:"--Foo-Bar--"},"foo bar").run(({text:r})=>r===void 0?void 0:(0,me.default)(r));export{An as default};
//# sourceMappingURL=function.js.map
