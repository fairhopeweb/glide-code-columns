(()=>{var ze=Object.create;var g=Object.defineProperty,He=Object.defineProperties,Be=Object.getOwnPropertyDescriptor,Je=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,Ye=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;var A=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))q.call(e,t)&&A(r,t,e[t]);if(v)for(var t of v(e))Xe.call(e,t)&&A(r,t,e[t]);return r},b=(r,e)=>He(r,Je(e)),Ke=r=>g(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Qe=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of $e(e))!q.call(r,n)&&n!=="default"&&g(r,n,{get:()=>e[n],enumerable:!(t=Be(e,n))||t.enumerable});return r},O=r=>Qe(Ke(g(r!=null?ze(Ye(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((n,u)=>{var a=o=>{try{s(t.next(o))}catch(f){u(f)}},c=o=>{try{s(t.throw(o))}catch(f){u(f)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,c);s((t=t.apply(r,e)).next())});var I=i((gu,j)=>{function rt(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}j.exports=rt});var M=i((bu,L)=>{function et(r){return function(e){return r==null?void 0:r[e]}}L.exports=et});var _=i((xu,N)=>{var tt=M(),it={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},nt=tt(it);N.exports=nt});var U=i((hu,E)=>{var ut=typeof global=="object"&&global&&global.Object===Object&&global;E.exports=ut});var F=i((Tu,D)=>{var at=U(),ot=typeof self=="object"&&self&&self.Object===Object&&self,st=at||ot||Function("return this")();D.exports=st});var x=i((yu,k)=>{var ft=F(),ct=ft.Symbol;k.exports=ct});var Z=i((wu,G)=>{function dt(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}G.exports=dt});var V=i((Cu,W)=>{var lt=Array.isArray;W.exports=lt});var J=i((Ru,B)=>{var z=x(),H=Object.prototype,mt=H.hasOwnProperty,pt=H.toString,m=z?z.toStringTag:void 0;function gt(r){var e=mt.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(a){}var u=pt.call(r);return n&&(e?r[m]=t:delete r[m]),u}B.exports=gt});var Y=i((Pu,$)=>{var bt=Object.prototype,xt=bt.toString;function ht(r){return xt.call(r)}$.exports=ht});var w=i((Su,Q)=>{var X=x(),Tt=J(),yt=Y(),wt="[object Null]",Ct="[object Undefined]",K=X?X.toStringTag:void 0;function Rt(r){return r==null?r===void 0?Ct:wt:K&&K in Object(r)?Tt(r):yt(r)}Q.exports=Rt});var er=i((vu,rr)=>{function Pt(r){return r!=null&&typeof r=="object"}rr.exports=Pt});var C=i((qu,tr)=>{var St=w(),vt=er(),qt="[object Symbol]";function At(r){return typeof r=="symbol"||vt(r)&&St(r)==qt}tr.exports=At});var sr=i((Au,or)=>{var ir=x(),Ot=Z(),jt=V(),It=C(),Lt=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(jt(r))return Ot(r,ar)+"";if(It(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-Lt?"-0":e}or.exports=ar});var p=i((Ou,fr)=>{var Mt=sr();function Nt(r){return r==null?"":Mt(r)}fr.exports=Nt});var dr=i((ju,cr)=>{var _t=_(),Et=p(),Ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Dt="\\u0300-\\u036f",Ft="\\ufe20-\\ufe2f",kt="\\u20d0-\\u20ff",Gt=Dt+Ft+kt,Zt="["+Gt+"]",Wt=RegExp(Zt,"g");function Vt(r){return r=Et(r),r&&r.replace(Ut,_t).replace(Wt,"")}cr.exports=Vt});var mr=i((Iu,lr)=>{var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Ht(r){return r.match(zt)||[]}lr.exports=Ht});var gr=i((Lu,pr)=>{var Bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Jt(r){return Bt.test(r)}pr.exports=Jt});var Nr=i((Mu,Mr)=>{var br="\\ud800-\\udfff",$t="\\u0300-\\u036f",Yt="\\ufe20-\\ufe2f",Xt="\\u20d0-\\u20ff",Kt=$t+Yt+Xt,xr="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",Qt="\\xac\\xb1\\xd7\\xf7",ri="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ei="\\u2000-\\u206f",ti=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",ii="\\ufe0e\\ufe0f",yr=Qt+ri+ei+ti,wr="['\u2019]",Cr="["+yr+"]",ni="["+Kt+"]",Rr="\\d+",ui="["+xr+"]",Pr="["+hr+"]",Sr="[^"+br+yr+Rr+xr+hr+Tr+"]",ai="\\ud83c[\\udffb-\\udfff]",oi="(?:"+ni+"|"+ai+")",si="[^"+br+"]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+Tr+"]",fi="\\u200d",Ar="(?:"+Pr+"|"+Sr+")",ci="(?:"+l+"|"+Sr+")",Or="(?:"+wr+"(?:d|ll|m|re|s|t|ve))?",jr="(?:"+wr+"(?:D|LL|M|RE|S|T|VE))?",Ir=oi+"?",Lr="["+ii+"]?",di="(?:"+fi+"(?:"+[si,vr,qr].join("|")+")"+Lr+Ir+")*",li="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",mi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pi=Lr+Ir+di,gi="(?:"+[ui,vr,qr].join("|")+")"+pi,bi=RegExp([l+"?"+Pr+"+"+Or+"(?="+[Cr,l,"$"].join("|")+")",ci+"+"+jr+"(?="+[Cr,l+Ar,"$"].join("|")+")",l+"?"+Ar+"+"+Or,l+"+"+jr,mi,li,Rr,gi].join("|"),"g");function xi(r){return r.match(bi)||[]}Mr.exports=xi});var Er=i((Nu,_r)=>{var hi=mr(),Ti=gr(),yi=p(),wi=Nr();function Ci(r,e,t){return r=yi(r),e=t?void 0:e,e===void 0?Ti(r)?wi(r):hi(r):r.match(e)||[]}_r.exports=Ci});var Dr=i((_u,Ur)=>{var Ri=I(),Pi=dr(),Si=Er(),vi="['\u2019]",qi=RegExp(vi,"g");function Ai(r){return function(e){return Ri(Si(Pi(e).replace(qi,"")),r,"")}}Ur.exports=Ai});var kr=i((Eu,Fr)=>{function Oi(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}Fr.exports=Oi});var Zr=i((Uu,Gr)=>{var ji=kr();function Ii(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:ji(r,e,t)}Gr.exports=Ii});var R=i((Du,Wr)=>{var Li="\\ud800-\\udfff",Mi="\\u0300-\\u036f",Ni="\\ufe20-\\ufe2f",_i="\\u20d0-\\u20ff",Ei=Mi+Ni+_i,Ui="\\ufe0e\\ufe0f",Di="\\u200d",Fi=RegExp("["+Di+Li+Ei+Ui+"]");function ki(r){return Fi.test(r)}Wr.exports=ki});var zr=i((Fu,Vr)=>{function Gi(r){return r.split("")}Vr.exports=Gi});var Qr=i((ku,Kr)=>{var Hr="\\ud800-\\udfff",Zi="\\u0300-\\u036f",Wi="\\ufe20-\\ufe2f",Vi="\\u20d0-\\u20ff",zi=Zi+Wi+Vi,Hi="\\ufe0e\\ufe0f",Bi="["+Hr+"]",P="["+zi+"]",S="\\ud83c[\\udffb-\\udfff]",Ji="(?:"+P+"|"+S+")",Br="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",$r="[\\ud800-\\udbff][\\udc00-\\udfff]",$i="\\u200d",Yr=Ji+"?",Xr="["+Hi+"]?",Yi="(?:"+$i+"(?:"+[Br,Jr,$r].join("|")+")"+Xr+Yr+")*",Xi=Xr+Yr+Yi,Ki="(?:"+[Br+P+"?",P,Jr,$r,Bi].join("|")+")",Qi=RegExp(S+"(?="+S+")|"+Ki+Xi,"g");function rn(r){return r.match(Qi)||[]}Kr.exports=rn});var ee=i((Gu,re)=>{var en=zr(),tn=R(),nn=Qr();function un(r){return tn(r)?nn(r):en(r)}re.exports=un});var ie=i((Zu,te)=>{var an=Zr(),on=R(),sn=ee(),fn=p();function cn(r){return function(e){e=fn(e);var t=on(e)?sn(e):void 0,n=t?t[0]:e.charAt(0),u=t?an(t,1).join(""):e.slice(1);return n[r]()+u}}te.exports=cn});var ue=i((Wu,ne)=>{var dn=ie(),ln=dn("toUpperCase");ne.exports=ln});var oe=i((Vu,ae)=>{var mn=Dr(),pn=ue(),gn=mn(function(r,e,t){return r+(t?" ":"")+pn(e)});ae.exports=gn});var me=i((Hu,le)=>{var wn=9007199254740991,Cn=Math.floor;function Rn(r,e){var t="";if(!r||e<1||e>wn)return t;do e%2&&(t+=r),e=Cn(e/2),e&&(r+=r);while(e);return t}le.exports=Rn});var ge=i((Bu,pe)=>{function Pn(r,e){return r===e||r!==r&&e!==e}pe.exports=Pn});var T=i((Ju,be)=>{function Sn(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}be.exports=Sn});var he=i(($u,xe)=>{var vn=w(),qn=T(),An="[object AsyncFunction]",On="[object Function]",jn="[object GeneratorFunction]",In="[object Proxy]";function Ln(r){if(!qn(r))return!1;var e=vn(r);return e==On||e==jn||e==An||e==In}xe.exports=Ln});var ye=i((Yu,Te)=>{var Mn=9007199254740991;function Nn(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Mn}Te.exports=Nn});var Ce=i((Xu,we)=>{var _n=he(),En=ye();function Un(r){return r!=null&&En(r.length)&&!_n(r)}we.exports=Un});var Pe=i((Ku,Re)=>{var Dn=9007199254740991,Fn=/^(?:0|[1-9]\d*)$/;function kn(r,e){var t=typeof r;return e=e??Dn,!!e&&(t=="number"||t!="symbol"&&Fn.test(r))&&r>-1&&r%1==0&&r<e}Re.exports=kn});var ve=i((Qu,Se)=>{var Gn=ge(),Zn=Ce(),Wn=Pe(),Vn=T();function zn(r,e,t){if(!Vn(t))return!1;var n=typeof e;return(n=="number"?Zn(t)&&Wn(e,t.length):n=="string"&&e in t)?Gn(t[e],r):!1}Se.exports=zn});var Ae=i((ra,qe)=>{var Hn=/\s/;function Bn(r){for(var e=r.length;e--&&Hn.test(r.charAt(e)););return e}qe.exports=Bn});var je=i((ea,Oe)=>{var Jn=Ae(),$n=/^\s+/;function Yn(r){return r&&r.slice(0,Jn(r)+1).replace($n,"")}Oe.exports=Yn});var Ne=i((ta,Me)=>{var Xn=je(),Ie=T(),Kn=C(),Le=0/0,Qn=/^[-+]0x[0-9a-f]+$/i,ru=/^0b[01]+$/i,eu=/^0o[0-7]+$/i,tu=parseInt;function iu(r){if(typeof r=="number")return r;if(Kn(r))return Le;if(Ie(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=Ie(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=Xn(r);var t=ru.test(r);return t||eu.test(r)?tu(r.slice(2),t?2:8):Qn.test(r)?Le:+r}Me.exports=iu});var Ue=i((ia,Ee)=>{var nu=Ne(),_e=1/0,uu=17976931348623157e292;function au(r){if(!r)return r===0?r:0;if(r=nu(r),r===_e||r===-_e){var e=r<0?-1:1;return e*uu}return r===r?r:0}Ee.exports=au});var Fe=i((na,De)=>{var ou=Ue();function su(r){var e=ou(r),t=e%1;return e===e?t?e-t:e:0}De.exports=su});var Ge=i((ua,ke)=>{var fu=me(),cu=ve(),du=Fe(),lu=p();function mu(r,e,t){return(t?cu(r,e,t):e===void 0)?e=1:e=du(e),fu(lu(r),e)}ke.exports=mu});var se=O(oe());function fe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(fe):r}function bn(r,e){return y(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,a;try{u=yield e(...n)}catch(o){u=void 0;try{a=o.toString()}catch(f){a="Exception can't be stringified."}}let c={key:t};u!==void 0&&(u=fe(u),c.result={type:"string",value:u}),a!==void 0&&(c.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,c,"*")})}function xn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>bn(e,r.run)),b(d({},r),{json:JSON.stringify(Tn(r),null,2)})}var hn=`
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
</svg>`;function Tn(r){let{name:e,category:t,description:n,author:u,result:a,params:c,about:s,video:o}=r,{icon:f=ce}=r;return f==="glide"&&(f=hn),{name:e,category:t,description:n,author:u,result:a,about:s,icon:f,video:o,params:Object.entries(c).map(([We,Ve])=>d({name:We},Ve))}}var yn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:ce,about:void 0,video:void 0,tests:[],run(){return y(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},yn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,se.default)(t)),this.with({params:b(d({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...c){let s={};if(c.forEach(({value:o},f)=>{s[u[f]]=o}),!n.some(o=>s[o]===void 0))return e(s)}return xn(b(d({},this.definition),{run:a}))}};function de(r){return new h({name:r})}var Ze=O(Ge()),oa=de("Repeat Text").withCategory("Text").withDescription("Repeats the given string n times.").withAuthor("lodash Project","lodash.com").withRequiredStringParam("text").withRequiredNumberParam("n","Repetitions").withStringResult().withTest({text:"*",n:8},"********").run(({text:r,n:e})=>(0,Ze.default)(r,e));})();
//# sourceMappingURL=index.js.map
