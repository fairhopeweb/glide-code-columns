(()=>{var xr=Object.create;var h=Object.defineProperty,yr=Object.defineProperties,Tr=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyDescriptors,vr=Object.getOwnPropertyNames,A=Object.getOwnPropertySymbols,Cr=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var j=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&j(e,t,r[t]);if(A)for(var t of A(r))Pr.call(r,t)&&j(e,t,r[t]);return e},b=(e,r)=>yr(e,wr(r)),Rr=e=>h(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Sr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of vr(r))!O.call(e,i)&&i!=="default"&&h(e,i,{get:()=>r[i],enumerable:!(t=Tr(r,i))||t.enumerable});return e},qr=e=>Sr(Rr(h(e!=null?xr(Cr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var C=(e,r,t)=>new Promise((i,n)=>{var u=s=>{try{l(t.next(s))}catch(c){n(c)}},o=s=>{try{l(t.throw(s))}catch(c){n(c)}},l=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,o);l((t=t.apply(e,r)).next())});var L=a((Xi,M)=>{function Ar(e,r,t,i){var n=-1,u=e==null?0:e.length;for(i&&u&&(t=e[++n]);++n<u;)t=r(t,e[n],n,e);return t}M.exports=Ar});var N=a((en,E)=>{function Or(e){return function(r){return e==null?void 0:e[r]}}E.exports=Or});var z=a((rn,D)=>{var jr=N(),Mr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Lr=jr(Mr);D.exports=Lr});var U=a((tn,k)=>{var Er=typeof global=="object"&&global&&global.Object===Object&&global;k.exports=Er});var I=a((nn,_)=>{var Nr=U(),Dr=typeof self=="object"&&self&&self.Object===Object&&self,zr=Nr||Dr||Function("return this")();_.exports=zr});var x=a((an,F)=>{var kr=I(),Ur=kr.Symbol;F.exports=Ur});var Z=a((un,V)=>{function _r(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}V.exports=_r});var W=a((sn,J)=>{var Ir=Array.isArray;J.exports=Ir});var Y=a((on,B)=>{var G=x(),H=Object.prototype,Fr=H.hasOwnProperty,Vr=H.toString,g=G?G.toStringTag:void 0;function Zr(e){var r=Fr.call(e,g),t=e[g];try{e[g]=void 0;var i=!0}catch(u){}var n=Vr.call(e);return i&&(r?e[g]=t:delete e[g]),n}B.exports=Zr});var $=a((ln,K)=>{var Jr=Object.prototype,Wr=Jr.toString;function Gr(e){return Wr.call(e)}K.exports=Gr});var re=a((cn,ee)=>{var Q=x(),Hr=Y(),Br=$(),Yr="[object Null]",Kr="[object Undefined]",X=Q?Q.toStringTag:void 0;function $r(e){return e==null?e===void 0?Kr:Yr:X&&X in Object(e)?Hr(e):Br(e)}ee.exports=$r});var ie=a((dn,te)=>{function Qr(e){return e!=null&&typeof e=="object"}te.exports=Qr});var ae=a((fn,ne)=>{var Xr=re(),et=ie(),rt="[object Symbol]";function tt(e){return typeof e=="symbol"||et(e)&&Xr(e)==rt}ne.exports=tt});var de=a((mn,ce)=>{var ue=x(),it=Z(),nt=W(),at=ae(),ut=1/0,se=ue?ue.prototype:void 0,oe=se?se.toString:void 0;function le(e){if(typeof e=="string")return e;if(nt(e))return it(e,le)+"";if(at(e))return oe?oe.call(e):"";var r=e+"";return r=="0"&&1/e==-ut?"-0":r}ce.exports=le});var y=a((pn,fe)=>{var st=de();function ot(e){return e==null?"":st(e)}fe.exports=ot});var pe=a((gn,me)=>{var lt=z(),ct=y(),dt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ft="\\u0300-\\u036f",mt="\\ufe20-\\ufe2f",pt="\\u20d0-\\u20ff",gt=ft+mt+pt,ht="["+gt+"]",bt=RegExp(ht,"g");function xt(e){return e=ct(e),e&&e.replace(dt,lt).replace(bt,"")}me.exports=xt});var he=a((hn,ge)=>{var yt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Tt(e){return e.match(yt)||[]}ge.exports=Tt});var xe=a((bn,be)=>{var wt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function vt(e){return wt.test(e)}be.exports=vt});var ke=a((xn,ze)=>{var ye="\\ud800-\\udfff",Ct="\\u0300-\\u036f",Pt="\\ufe20-\\ufe2f",Rt="\\u20d0-\\u20ff",St=Ct+Pt+Rt,Te="\\u2700-\\u27bf",we="a-z\\xdf-\\xf6\\xf8-\\xff",qt="\\xac\\xb1\\xd7\\xf7",At="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ot="\\u2000-\\u206f",jt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ve="A-Z\\xc0-\\xd6\\xd8-\\xde",Mt="\\ufe0e\\ufe0f",Ce=qt+At+Ot+jt,Pe="['\u2019]",Re="["+Ce+"]",Lt="["+St+"]",Se="\\d+",Et="["+Te+"]",qe="["+we+"]",Ae="[^"+ye+Ce+Se+Te+we+ve+"]",Nt="\\ud83c[\\udffb-\\udfff]",Dt="(?:"+Lt+"|"+Nt+")",zt="[^"+ye+"]",Oe="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+ve+"]",kt="\\u200d",Me="(?:"+qe+"|"+Ae+")",Ut="(?:"+m+"|"+Ae+")",Le="(?:"+Pe+"(?:d|ll|m|re|s|t|ve))?",Ee="(?:"+Pe+"(?:D|LL|M|RE|S|T|VE))?",Ne=Dt+"?",De="["+Mt+"]?",_t="(?:"+kt+"(?:"+[zt,Oe,je].join("|")+")"+De+Ne+")*",It="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ft="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Vt=De+Ne+_t,Zt="(?:"+[Et,Oe,je].join("|")+")"+Vt,Jt=RegExp([m+"?"+qe+"+"+Le+"(?="+[Re,m,"$"].join("|")+")",Ut+"+"+Ee+"(?="+[Re,m+Me,"$"].join("|")+")",m+"?"+Me+"+"+Le,m+"+"+Ee,Ft,It,Se,Zt].join("|"),"g");function Wt(e){return e.match(Jt)||[]}ze.exports=Wt});var _e=a((yn,Ue)=>{var Gt=he(),Ht=xe(),Bt=y(),Yt=ke();function Kt(e,r,t){return e=Bt(e),r=t?void 0:r,r===void 0?Ht(e)?Yt(e):Gt(e):e.match(r)||[]}Ue.exports=Kt});var Fe=a((Tn,Ie)=>{var $t=L(),Qt=pe(),Xt=_e(),ei="['\u2019]",ri=RegExp(ei,"g");function ti(e){return function(r){return $t(Xt(Qt(r).replace(ri,"")),e,"")}}Ie.exports=ti});var Ze=a((wn,Ve)=>{function ii(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(n);++i<n;)u[i]=e[i+r];return u}Ve.exports=ii});var We=a((vn,Je)=>{var ni=Ze();function ai(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:ni(e,r,t)}Je.exports=ai});var P=a((Cn,Ge)=>{var ui="\\ud800-\\udfff",si="\\u0300-\\u036f",oi="\\ufe20-\\ufe2f",li="\\u20d0-\\u20ff",ci=si+oi+li,di="\\ufe0e\\ufe0f",fi="\\u200d",mi=RegExp("["+fi+ui+ci+di+"]");function pi(e){return mi.test(e)}Ge.exports=pi});var Be=a((Pn,He)=>{function gi(e){return e.split("")}He.exports=gi});var tr=a((Rn,rr)=>{var Ye="\\ud800-\\udfff",hi="\\u0300-\\u036f",bi="\\ufe20-\\ufe2f",xi="\\u20d0-\\u20ff",yi=hi+bi+xi,Ti="\\ufe0e\\ufe0f",wi="["+Ye+"]",R="["+yi+"]",S="\\ud83c[\\udffb-\\udfff]",vi="(?:"+R+"|"+S+")",Ke="[^"+Ye+"]",$e="(?:\\ud83c[\\udde6-\\uddff]){2}",Qe="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="\\u200d",Xe=vi+"?",er="["+Ti+"]?",Pi="(?:"+Ci+"(?:"+[Ke,$e,Qe].join("|")+")"+er+Xe+")*",Ri=er+Xe+Pi,Si="(?:"+[Ke+R+"?",R,$e,Qe,wi].join("|")+")",qi=RegExp(S+"(?="+S+")|"+Si+Ri,"g");function Ai(e){return e.match(qi)||[]}rr.exports=Ai});var nr=a((Sn,ir)=>{var Oi=Be(),ji=P(),Mi=tr();function Li(e){return ji(e)?Mi(e):Oi(e)}ir.exports=Li});var ur=a((qn,ar)=>{var Ei=We(),Ni=P(),Di=nr(),zi=y();function ki(e){return function(r){r=zi(r);var t=Ni(r)?Di(r):void 0,i=t?t[0]:r.charAt(0),n=t?Ei(t,1).join(""):r.slice(1);return i[e]()+n}}ar.exports=ki});var or=a((An,sr)=>{var Ui=ur(),_i=Ui("toUpperCase");sr.exports=_i});var cr=a((On,lr)=>{var Ii=Fe(),Fi=or(),Vi=Ii(function(e,r,t){return e+(t?" ":"")+Fi(r)});lr.exports=Vi});var hr=a((Mn,w)=>{w.exports=function(e){return new f(e)};var gr=w.exports.STATE_KEYS=["categories","docCount","totalDocuments","vocabulary","vocabularySize","wordCount","wordFrequencyCount","options"];w.exports.fromJson=function(e){var r;try{r=JSON.parse(e)}catch(i){throw new Error("Naivebayes.fromJson expects a valid JSON string.")}var t=new f(r.options);return gr.forEach(function(i){if(typeof r[i]=="undefined"||r[i]===null)throw new Error("Naivebayes.fromJson: JSON string is missing an expected property: `"+i+"`.");t[i]=r[i]}),t};var Bi=function(e){var r=/[^(a-zA-ZA-Яa-я0-9_)+\s]/g,t=e.replace(r," ");return t.split(/\s+/)};function f(e){if(this.options={},typeof e!="undefined"){if(!e||typeof e!="object"||Array.isArray(e))throw TypeError("NaiveBayes got invalid `options`: `"+e+"`. Pass in an object.");this.options=e}this.tokenizer=this.options.tokenizer||Bi,this.vocabulary={},this.vocabularySize=0,this.totalDocuments=0,this.docCount={},this.wordCount={},this.wordFrequencyCount={},this.categories={}}f.prototype.initializeCategory=function(e){return this.categories[e]||(this.docCount[e]=0,this.wordCount[e]=0,this.wordFrequencyCount[e]={},this.categories[e]=!0),this};f.prototype.learn=async function(e,r){var t=this;t.initializeCategory(r),t.docCount[r]++,t.totalDocuments++;var i=await t.tokenizer(e),n=t.frequencyTable(i);return Object.keys(n).forEach(function(u){t.vocabulary[u]||(t.vocabulary[u]=!0,t.vocabularySize++);var o=n[u];t.wordFrequencyCount[r][u]?t.wordFrequencyCount[r][u]+=o:t.wordFrequencyCount[r][u]=o,t.wordCount[r]+=o}),t};f.prototype.categorize=async function(e){var r=this,t=-1/0,i=null,n=await r.tokenizer(e),u=r.frequencyTable(n);return Object.keys(r.categories).forEach(function(o){var l=r.docCount[o]/r.totalDocuments,s=Math.log(l);Object.keys(u).forEach(function(c){var p=u[c],v=r.tokenProbability(c,o);s+=p*Math.log(v)}),s>t&&(t=s,i=o)}),i};f.prototype.tokenProbability=function(e,r){var t=this.wordFrequencyCount[r][e]||0,i=this.wordCount[r];return(t+1)/(i+this.vocabularySize)};f.prototype.frequencyTable=function(e){var r=Object.create(null);return e.forEach(function(t){r[t]?r[t]++:r[t]=1}),r};f.prototype.toJson=function(){var e={},r=this;gr.forEach(function(i){e[i]=r[i]});var t=JSON.stringify(e);return t}});var dr=qr(cr());function fr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(fr):e}function Zi(e,r){return C(this,null,function*(){var l;let{data:{key:t,params:i}}=e,n,u;try{n=yield r(...i)}catch(s){n=void 0;try{u=s.toString()}catch(c){u="Exception can't be stringified."}}let o={key:t};n!==void 0&&(n=fr(n),o.result={type:"string",value:n}),u!==void 0&&(o.error=u),((l=e.source)==null?void 0:l.postMessage).call(l,o,"*")})}function Ji(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Zi(r,e.run)),b(d({},e),{json:JSON.stringify(Gi(e),null,2)})}var Wi=`
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
    `,mr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Gi(e){let{name:r,category:t,released:i,description:n,author:u,result:o,params:l,about:s,video:c}=e,{icon:p=mr}=e;return p==="glide"&&(p=Wi),{name:r,category:t,released:i,description:n,author:u,result:o,about:s,icon:p,video:c,params:Object.entries(l).map(([v,br])=>d({name:v},br))}}var Hi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:mr,about:void 0,video:void 0,tests:[],run(){return C(this,null,function*(){})}},T=class{constructor(r={},t=[]){this.definition=d(d({},Hi),r),this.requiredParams=[...t]}with(r,t=[]){return new T(d(d({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,dr.default)(t)),this.with({params:b(d({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...o){let l={};if(o.forEach(({value:s},c)=>{l[n[c]]=s}),!i.some(s=>l[s]===void 0))return r(l)}return Ji(b(d({},this.definition),{run:u}))}};function pr(e){return new T({name:e})}var Yi=hr(),Ki="",q={};function $i(e){var r;return(r=q[e])!=null?r:q[e]=Yi()}var En=pr("Classify Text").withCategory("Machine Learning").withReleased("direct").withDescription("Categorize text based on examples.").withAuthor("ttezel","https://github.com/ttezel/bayes").withAbout(`
      The Classify Text column takes training data in the form of text values, and known categories for those text values. When it sees new text values without categories provided, it tries to infer the category based on the examples it's seen.

      **This is just a proof of concept. Because Glide does not guarantee that all columns are evaluated (it only evaluates columns required to show the current screen), this will usually not produce good results.**`).withVideo("https://www.youtube.com/watch?v=Qu9MM8YAAM0").withRequiredStringParam("phrase").withStringParam("category","Training Data").withStringParam("id","Classifier ID").withStringResult().run(({id:e=Ki,phrase:r,category:t})=>{let i=$i(e);return t!==void 0?(i.learn(r,t),t):i.categorize(r)});})();
//# sourceMappingURL=index.js.map
