(()=>{var Xe=Object.create;var x=Object.defineProperty,Qe=Object.defineProperties,rt=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyDescriptors,tt=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,it=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var N=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))L.call(e,t)&&N(r,t,e[t]);if(_)for(var t of _(e))nt.call(e,t)&&N(r,t,e[t]);return r},m=(r,e)=>Qe(r,et(e)),ut=r=>x(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ot=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of tt(e))!L.call(r,i)&&i!=="default"&&x(r,i,{get:()=>e[i],enumerable:!(t=rt(e,i))||t.enumerable});return r},E=r=>ot(ut(x(r!=null?Xe(it(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var h=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},c=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var I=n((qu,U)=>{function at(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}U.exports=at});var D=n((Au,z)=>{function st(r){return function(e){return r==null?void 0:r[e]}}z.exports=st});var Z=n((Ou,k)=>{var ft=D(),dt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ct=ft(dt);k.exports=ct});var F=n((ju,W)=>{var lt=typeof global=="object"&&global&&global.Object===Object&&global;W.exports=lt});var V=n((Mu,G)=>{var mt=F(),pt=typeof self=="object"&&self&&self.Object===Object&&self,bt=mt||pt||Function("return this")();G.exports=bt});var y=n((_u,H)=>{var gt=V(),xt=gt.Symbol;H.exports=xt});var B=n((Lu,J)=>{function ht(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}J.exports=ht});var Y=n((Nu,$)=>{var yt=Array.isArray;$.exports=yt});var rr=n((Eu,Q)=>{var K=y(),X=Object.prototype,Tt=X.hasOwnProperty,St=X.toString,p=K?K.toStringTag:void 0;function Ct(r){var e=Tt.call(r,p),t=r[p];try{r[p]=void 0;var i=!0}catch(o){}var u=St.call(r);return i&&(e?r[p]=t:delete r[p]),u}Q.exports=Ct});var tr=n((Uu,er)=>{var vt=Object.prototype,Rt=vt.toString;function wt(r){return Rt.call(r)}er.exports=wt});var or=n((Iu,ur)=>{var ir=y(),Pt=rr(),qt=tr(),At="[object Null]",Ot="[object Undefined]",nr=ir?ir.toStringTag:void 0;function jt(r){return r==null?r===void 0?Ot:At:nr&&nr in Object(r)?Pt(r):qt(r)}ur.exports=jt});var sr=n((zu,ar)=>{function Mt(r){return r!=null&&typeof r=="object"}ar.exports=Mt});var C=n((Du,fr)=>{var _t=or(),Lt=sr(),Nt="[object Symbol]";function Et(r){return typeof r=="symbol"||Lt(r)&&_t(r)==Nt}fr.exports=Et});var v=n((ku,pr)=>{var dr=y(),Ut=B(),It=Y(),zt=C(),Dt=1/0,cr=dr?dr.prototype:void 0,lr=cr?cr.toString:void 0;function mr(r){if(typeof r=="string")return r;if(It(r))return Ut(r,mr)+"";if(zt(r))return lr?lr.call(r):"";var e=r+"";return e=="0"&&1/r==-Dt?"-0":e}pr.exports=mr});var b=n((Zu,br)=>{var kt=v();function Zt(r){return r==null?"":kt(r)}br.exports=Zt});var xr=n((Wu,gr)=>{var Wt=Z(),Ft=b(),Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Vt="\\u0300-\\u036f",Ht="\\ufe20-\\ufe2f",Jt="\\u20d0-\\u20ff",Bt=Vt+Ht+Jt,$t="["+Bt+"]",Yt=RegExp($t,"g");function Kt(r){return r=Ft(r),r&&r.replace(Gt,Wt).replace(Yt,"")}gr.exports=Kt});var yr=n((Fu,hr)=>{var Xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Qt(r){return r.match(Xt)||[]}hr.exports=Qt});var Sr=n((Gu,Tr)=>{var ri=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ei(r){return ri.test(r)}Tr.exports=ei});var kr=n((Vu,Dr)=>{var Cr="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ui=ti+ii+ni,vr="\\u2700-\\u27bf",Rr="a-z\\xdf-\\xf6\\xf8-\\xff",oi="\\xac\\xb1\\xd7\\xf7",ai="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",si="\\u2000-\\u206f",fi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wr="A-Z\\xc0-\\xd6\\xd8-\\xde",di="\\ufe0e\\ufe0f",Pr=oi+ai+si+fi,qr="['\u2019]",Ar="["+Pr+"]",ci="["+ui+"]",Or="\\d+",li="["+vr+"]",jr="["+Rr+"]",Mr="[^"+Cr+Pr+Or+vr+Rr+wr+"]",mi="\\ud83c[\\udffb-\\udfff]",pi="(?:"+ci+"|"+mi+")",bi="[^"+Cr+"]",_r="(?:\\ud83c[\\udde6-\\uddff]){2}",Lr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+wr+"]",gi="\\u200d",Nr="(?:"+jr+"|"+Mr+")",xi="(?:"+l+"|"+Mr+")",Er="(?:"+qr+"(?:d|ll|m|re|s|t|ve))?",Ur="(?:"+qr+"(?:D|LL|M|RE|S|T|VE))?",Ir=pi+"?",zr="["+di+"]?",hi="(?:"+gi+"(?:"+[bi,_r,Lr].join("|")+")"+zr+Ir+")*",yi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ti="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Si=zr+Ir+hi,Ci="(?:"+[li,_r,Lr].join("|")+")"+Si,vi=RegExp([l+"?"+jr+"+"+Er+"(?="+[Ar,l,"$"].join("|")+")",xi+"+"+Ur+"(?="+[Ar,l+Nr,"$"].join("|")+")",l+"?"+Nr+"+"+Er,l+"+"+Ur,Ti,yi,Or,Ci].join("|"),"g");function Ri(r){return r.match(vi)||[]}Dr.exports=Ri});var Wr=n((Hu,Zr)=>{var wi=yr(),Pi=Sr(),qi=b(),Ai=kr();function Oi(r,e,t){return r=qi(r),e=t?void 0:e,e===void 0?Pi(r)?Ai(r):wi(r):r.match(e)||[]}Zr.exports=Oi});var Gr=n((Ju,Fr)=>{var ji=I(),Mi=xr(),_i=Wr(),Li="['\u2019]",Ni=RegExp(Li,"g");function Ei(r){return function(e){return ji(_i(Mi(e).replace(Ni,"")),r,"")}}Fr.exports=Ei});var Hr=n((Bu,Vr)=>{function Ui(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}Vr.exports=Ui});var R=n(($u,Jr)=>{var Ii=Hr();function zi(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Ii(r,e,t)}Jr.exports=zi});var g=n((Yu,Br)=>{var Di="\\ud800-\\udfff",ki="\\u0300-\\u036f",Zi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Fi=ki+Zi+Wi,Gi="\\ufe0e\\ufe0f",Vi="\\u200d",Hi=RegExp("["+Vi+Di+Fi+Gi+"]");function Ji(r){return Hi.test(r)}Br.exports=Ji});var Yr=n((Ku,$r)=>{function Bi(r){return r.split("")}$r.exports=Bi});var ne=n((Xu,ie)=>{var Kr="\\ud800-\\udfff",$i="\\u0300-\\u036f",Yi="\\ufe20-\\ufe2f",Ki="\\u20d0-\\u20ff",Xi=$i+Yi+Ki,Qi="\\ufe0e\\ufe0f",rn="["+Kr+"]",w="["+Xi+"]",P="\\ud83c[\\udffb-\\udfff]",en="(?:"+w+"|"+P+")",Xr="[^"+Kr+"]",Qr="(?:\\ud83c[\\udde6-\\uddff]){2}",re="[\\ud800-\\udbff][\\udc00-\\udfff]",tn="\\u200d",ee=en+"?",te="["+Qi+"]?",nn="(?:"+tn+"(?:"+[Xr,Qr,re].join("|")+")"+te+ee+")*",un=te+ee+nn,on="(?:"+[Xr+w+"?",w,Qr,re,rn].join("|")+")",an=RegExp(P+"(?="+P+")|"+on+un,"g");function sn(r){return r.match(an)||[]}ie.exports=sn});var q=n((Qu,ue)=>{var fn=Yr(),dn=g(),cn=ne();function ln(r){return dn(r)?cn(r):fn(r)}ue.exports=ln});var ae=n((ro,oe)=>{var mn=R(),pn=g(),bn=q(),gn=b();function xn(r){return function(e){e=gn(e);var t=pn(e)?bn(e):void 0,i=t?t[0]:e.charAt(0),u=t?mn(t,1).join(""):e.slice(1);return i[r]()+u}}oe.exports=xn});var fe=n((eo,se)=>{var hn=ae(),yn=hn("toUpperCase");se.exports=yn});var ce=n((to,de)=>{var Tn=Gr(),Sn=fe(),Cn=Tn(function(r,e,t){return r+(t?" ":"")+Sn(e)});de.exports=Cn});var ge=n((no,be)=>{var An=9007199254740991,On=Math.floor;function jn(r,e){var t="";if(!r||e<1||e>An)return t;do e%2&&(t+=r),e=On(e/2),e&&(r+=r);while(e);return t}be.exports=jn});var he=n((uo,xe)=>{function Mn(r){return function(e){return e==null?void 0:e[r]}}xe.exports=Mn});var Te=n((oo,ye)=>{var _n=he(),Ln=_n("length");ye.exports=Ln});var Oe=n((ao,Ae)=>{var Se="\\ud800-\\udfff",Nn="\\u0300-\\u036f",En="\\ufe20-\\ufe2f",Un="\\u20d0-\\u20ff",In=Nn+En+Un,zn="\\ufe0e\\ufe0f",Dn="["+Se+"]",O="["+In+"]",j="\\ud83c[\\udffb-\\udfff]",kn="(?:"+O+"|"+j+")",Ce="[^"+Se+"]",ve="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Zn="\\u200d",we=kn+"?",Pe="["+zn+"]?",Wn="(?:"+Zn+"(?:"+[Ce,ve,Re].join("|")+")"+Pe+we+")*",Fn=Pe+we+Wn,Gn="(?:"+[Ce+O+"?",O,ve,Re,Dn].join("|")+")",qe=RegExp(j+"(?="+j+")|"+Gn+Fn,"g");function Vn(r){for(var e=qe.lastIndex=0;qe.test(r);)++e;return e}Ae.exports=Vn});var M=n((so,je)=>{var Hn=Te(),Jn=g(),Bn=Oe();function $n(r){return Jn(r)?Bn(r):Hn(r)}je.exports=$n});var Le=n((fo,_e)=>{var Me=ge(),Yn=v(),Kn=R(),Xn=g(),Qn=M(),ru=q(),eu=Math.ceil;function tu(r,e){e=e===void 0?" ":Yn(e);var t=e.length;if(t<2)return t?Me(e,r):e;var i=Me(e,eu(r/Qn(e)));return Xn(e)?Kn(ru(i),0,r).join(""):i.slice(0,r)}_e.exports=tu});var Ee=n((co,Ne)=>{var iu=/\s/;function nu(r){for(var e=r.length;e--&&iu.test(r.charAt(e)););return e}Ne.exports=nu});var Ie=n((lo,Ue)=>{var uu=Ee(),ou=/^\s+/;function au(r){return r&&r.slice(0,uu(r)+1).replace(ou,"")}Ue.exports=au});var De=n((mo,ze)=>{function su(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}ze.exports=su});var Fe=n((po,We)=>{var fu=Ie(),ke=De(),du=C(),Ze=0/0,cu=/^[-+]0x[0-9a-f]+$/i,lu=/^0b[01]+$/i,mu=/^0o[0-7]+$/i,pu=parseInt;function bu(r){if(typeof r=="number")return r;if(du(r))return Ze;if(ke(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ke(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=fu(r);var t=lu.test(r);return t||mu.test(r)?pu(r.slice(2),t?2:8):cu.test(r)?Ze:+r}We.exports=bu});var He=n((bo,Ve)=>{var gu=Fe(),Ge=1/0,xu=17976931348623157e292;function hu(r){if(!r)return r===0?r:0;if(r=gu(r),r===Ge||r===-Ge){var e=r<0?-1:1;return e*xu}return r===r?r:0}Ve.exports=hu});var Be=n((go,Je)=>{var yu=He();function Tu(r){var e=yu(r),t=e%1;return e===e?t?e-t:e:0}Je.exports=Tu});var Ye=n((xo,$e)=>{var Su=Le(),Cu=M(),vu=Be(),Ru=b();function wu(r,e,t){r=Ru(r),e=vu(e);var i=e?Cu(r):0;return e&&i<e?r+Su(e-i,t):r}$e.exports=wu});var A=E(ce());function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function vn(r,e){return h(this,null,function*(){var s;let{data:{key:t,params:i}}=r,u,o;try{u=yield e(...i)}catch(a){u=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let c={key:t};u!==void 0&&(u=le(u),c.result={type:"string",value:u}),o!==void 0&&(c.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,c,"*")})}function Rn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>vn(e,r.run)),m(d({},r),{json:JSON.stringify(Pn(r),null,2)})}var wn=`
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
</svg>`;function Pn(r){let{name:e,description:t,author:i,result:u,params:o,about:c,video:s}=r,{icon:a=me}=r;return a==="glide"&&(a=wn),{name:e,description:t,author:i,result:u,about:c,icon:a,video:s,params:Object.entries(o).map(([f,S])=>d({name:f},S))}}var qn={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:me,about:void 0,video:void 0,run(){return h(this,null,function*(){})}},T=class{constructor(e={},t=[]){this.definition=d(d({},qn),e),this.requiredParams=[...t]}with(e,t=[]){return new T(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,A.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return i===void 0&&(i=(0,A.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:i}})},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){return h(this,null,function*(){let s={};if(c.forEach(({value:f},S)=>{s[u[S]]=f}),i.some(f=>s[f]===void 0))return;let a=e(s);return Promise.resolve(a)})}return Rn(m(d({},this.definition),{run:o}))}};function pe(r){return new T({name:r})}var Ke=E(Ye()),yo=pe("Pad Text at End").withDescription("Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withExample({text:"abc",length:8}).run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,Ke.default)(r,e,t));})();
//# sourceMappingURL=index.js.map
