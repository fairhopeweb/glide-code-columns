var br=Object.create;var h=Object.defineProperty,xr=Object.defineProperties,yr=Object.getOwnPropertyDescriptor,Tr=Object.getOwnPropertyDescriptors,wr=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,vr=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Cr=Object.prototype.propertyIsEnumerable;var O=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&O(r,t,e[t]);if(q)for(var t of q(e))Cr.call(e,t)&&O(r,t,e[t]);return r},b=(r,e)=>xr(r,Tr(e)),Pr=r=>h(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Rr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of wr(e))!A.call(r,i)&&i!=="default"&&h(r,i,{get:()=>e[i],enumerable:!(t=yr(e,i))||t.enumerable});return r},Sr=r=>Rr(Pr(h(r!=null?br(vr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var j=(r,e,t)=>new Promise((i,n)=>{var u=s=>{try{l(t.next(s))}catch(c){n(c)}},o=s=>{try{l(t.throw(s))}catch(c){n(c)}},l=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,o);l((t=t.apply(r,e)).next())});var L=a(($i,M)=>{function qr(r,e,t,i){var n=-1,u=r==null?0:r.length;for(i&&u&&(t=r[++n]);++n<u;)t=e(t,r[n],n,r);return t}M.exports=qr});var N=a((Qi,E)=>{function Ar(r){return function(e){return r==null?void 0:r[e]}}E.exports=Ar});var z=a((Xi,D)=>{var Or=N(),jr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Mr=Or(jr);D.exports=Mr});var U=a((en,k)=>{var Lr=typeof global=="object"&&global&&global.Object===Object&&global;k.exports=Lr});var I=a((rn,_)=>{var Er=U(),Nr=typeof self=="object"&&self&&self.Object===Object&&self,Dr=Er||Nr||Function("return this")();_.exports=Dr});var x=a((tn,F)=>{var zr=I(),kr=zr.Symbol;F.exports=kr});var Z=a((nn,V)=>{function Ur(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}V.exports=Ur});var W=a((an,J)=>{var _r=Array.isArray;J.exports=_r});var Y=a((un,B)=>{var G=x(),H=Object.prototype,Ir=H.hasOwnProperty,Fr=H.toString,g=G?G.toStringTag:void 0;function Vr(r){var e=Ir.call(r,g),t=r[g];try{r[g]=void 0;var i=!0}catch(u){}var n=Fr.call(r);return i&&(e?r[g]=t:delete r[g]),n}B.exports=Vr});var $=a((sn,K)=>{var Zr=Object.prototype,Jr=Zr.toString;function Wr(r){return Jr.call(r)}K.exports=Wr});var re=a((on,ee)=>{var Q=x(),Gr=Y(),Hr=$(),Br="[object Null]",Yr="[object Undefined]",X=Q?Q.toStringTag:void 0;function Kr(r){return r==null?r===void 0?Yr:Br:X&&X in Object(r)?Gr(r):Hr(r)}ee.exports=Kr});var ie=a((ln,te)=>{function $r(r){return r!=null&&typeof r=="object"}te.exports=$r});var ae=a((cn,ne)=>{var Qr=re(),Xr=ie(),et="[object Symbol]";function rt(r){return typeof r=="symbol"||Xr(r)&&Qr(r)==et}ne.exports=rt});var de=a((dn,ce)=>{var ue=x(),tt=Z(),it=W(),nt=ae(),at=1/0,se=ue?ue.prototype:void 0,oe=se?se.toString:void 0;function le(r){if(typeof r=="string")return r;if(it(r))return tt(r,le)+"";if(nt(r))return oe?oe.call(r):"";var e=r+"";return e=="0"&&1/r==-at?"-0":e}ce.exports=le});var y=a((fn,fe)=>{var ut=de();function st(r){return r==null?"":ut(r)}fe.exports=st});var pe=a((mn,me)=>{var ot=z(),lt=y(),ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dt="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",mt="\\u20d0-\\u20ff",pt=dt+ft+mt,gt="["+pt+"]",ht=RegExp(gt,"g");function bt(r){return r=lt(r),r&&r.replace(ct,ot).replace(ht,"")}me.exports=bt});var he=a((pn,ge)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function yt(r){return r.match(xt)||[]}ge.exports=yt});var xe=a((gn,be)=>{var Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function wt(r){return Tt.test(r)}be.exports=wt});var ke=a((hn,ze)=>{var ye="\\ud800-\\udfff",vt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",Pt="\\u20d0-\\u20ff",Rt=vt+Ct+Pt,Te="\\u2700-\\u27bf",we="a-z\\xdf-\\xf6\\xf8-\\xff",St="\\xac\\xb1\\xd7\\xf7",qt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",At="\\u2000-\\u206f",Ot=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ve="A-Z\\xc0-\\xd6\\xd8-\\xde",jt="\\ufe0e\\ufe0f",Ce=St+qt+At+Ot,Pe="['\u2019]",Re="["+Ce+"]",Mt="["+Rt+"]",Se="\\d+",Lt="["+Te+"]",qe="["+we+"]",Ae="[^"+ye+Ce+Se+Te+we+ve+"]",Et="\\ud83c[\\udffb-\\udfff]",Nt="(?:"+Mt+"|"+Et+")",Dt="[^"+ye+"]",Oe="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+ve+"]",zt="\\u200d",Me="(?:"+qe+"|"+Ae+")",kt="(?:"+m+"|"+Ae+")",Le="(?:"+Pe+"(?:d|ll|m|re|s|t|ve))?",Ee="(?:"+Pe+"(?:D|LL|M|RE|S|T|VE))?",Ne=Nt+"?",De="["+jt+"]?",Ut="(?:"+zt+"(?:"+[Dt,Oe,je].join("|")+")"+De+Ne+")*",_t="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ft=De+Ne+Ut,Vt="(?:"+[Lt,Oe,je].join("|")+")"+Ft,Zt=RegExp([m+"?"+qe+"+"+Le+"(?="+[Re,m,"$"].join("|")+")",kt+"+"+Ee+"(?="+[Re,m+Me,"$"].join("|")+")",m+"?"+Me+"+"+Le,m+"+"+Ee,It,_t,Se,Vt].join("|"),"g");function Jt(r){return r.match(Zt)||[]}ze.exports=Jt});var _e=a((bn,Ue)=>{var Wt=he(),Gt=xe(),Ht=y(),Bt=ke();function Yt(r,e,t){return r=Ht(r),e=t?void 0:e,e===void 0?Gt(r)?Bt(r):Wt(r):r.match(e)||[]}Ue.exports=Yt});var Fe=a((xn,Ie)=>{var Kt=L(),$t=pe(),Qt=_e(),Xt="['\u2019]",ei=RegExp(Xt,"g");function ri(r){return function(e){return Kt(Qt($t(e).replace(ei,"")),r,"")}}Ie.exports=ri});var Ze=a((yn,Ve)=>{function ti(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(n);++i<n;)u[i]=r[i+e];return u}Ve.exports=ti});var We=a((Tn,Je)=>{var ii=Ze();function ni(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ii(r,e,t)}Je.exports=ni});var C=a((wn,Ge)=>{var ai="\\ud800-\\udfff",ui="\\u0300-\\u036f",si="\\ufe20-\\ufe2f",oi="\\u20d0-\\u20ff",li=ui+si+oi,ci="\\ufe0e\\ufe0f",di="\\u200d",fi=RegExp("["+di+ai+li+ci+"]");function mi(r){return fi.test(r)}Ge.exports=mi});var Be=a((vn,He)=>{function pi(r){return r.split("")}He.exports=pi});var tr=a((Cn,rr)=>{var Ye="\\ud800-\\udfff",gi="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",bi="\\u20d0-\\u20ff",xi=gi+hi+bi,yi="\\ufe0e\\ufe0f",Ti="["+Ye+"]",P="["+xi+"]",R="\\ud83c[\\udffb-\\udfff]",wi="(?:"+P+"|"+R+")",Ke="[^"+Ye+"]",$e="(?:\\ud83c[\\udde6-\\uddff]){2}",Qe="[\\ud800-\\udbff][\\udc00-\\udfff]",vi="\\u200d",Xe=wi+"?",er="["+yi+"]?",Ci="(?:"+vi+"(?:"+[Ke,$e,Qe].join("|")+")"+er+Xe+")*",Pi=er+Xe+Ci,Ri="(?:"+[Ke+P+"?",P,$e,Qe,Ti].join("|")+")",Si=RegExp(R+"(?="+R+")|"+Ri+Pi,"g");function qi(r){return r.match(Si)||[]}rr.exports=qi});var nr=a((Pn,ir)=>{var Ai=Be(),Oi=C(),ji=tr();function Mi(r){return Oi(r)?ji(r):Ai(r)}ir.exports=Mi});var ur=a((Rn,ar)=>{var Li=We(),Ei=C(),Ni=nr(),Di=y();function zi(r){return function(e){e=Di(e);var t=Ei(e)?Ni(e):void 0,i=t?t[0]:e.charAt(0),n=t?Li(t,1).join(""):e.slice(1);return i[r]()+n}}ar.exports=zi});var or=a((Sn,sr)=>{var ki=ur(),Ui=ki("toUpperCase");sr.exports=Ui});var cr=a((qn,lr)=>{var _i=Fe(),Ii=or(),Fi=_i(function(r,e,t){return r+(t?" ":"")+Ii(e)});lr.exports=Fi});var gr=a((On,w)=>{w.exports=function(r){return new f(r)};var pr=w.exports.STATE_KEYS=["categories","docCount","totalDocuments","vocabulary","vocabularySize","wordCount","wordFrequencyCount","options"];w.exports.fromJson=function(r){var e;try{e=JSON.parse(r)}catch(i){throw new Error("Naivebayes.fromJson expects a valid JSON string.")}var t=new f(e.options);return pr.forEach(function(i){if(typeof e[i]=="undefined"||e[i]===null)throw new Error("Naivebayes.fromJson: JSON string is missing an expected property: `"+i+"`.");t[i]=e[i]}),t};var Gi=function(r){var e=/[^(a-zA-ZA-Яa-я0-9_)+\s]/g,t=r.replace(e," ");return t.split(/\s+/)};function f(r){if(this.options={},typeof r!="undefined"){if(!r||typeof r!="object"||Array.isArray(r))throw TypeError("NaiveBayes got invalid `options`: `"+r+"`. Pass in an object.");this.options=r}this.tokenizer=this.options.tokenizer||Gi,this.vocabulary={},this.vocabularySize=0,this.totalDocuments=0,this.docCount={},this.wordCount={},this.wordFrequencyCount={},this.categories={}}f.prototype.initializeCategory=function(r){return this.categories[r]||(this.docCount[r]=0,this.wordCount[r]=0,this.wordFrequencyCount[r]={},this.categories[r]=!0),this};f.prototype.learn=async function(r,e){var t=this;t.initializeCategory(e),t.docCount[e]++,t.totalDocuments++;var i=await t.tokenizer(r),n=t.frequencyTable(i);return Object.keys(n).forEach(function(u){t.vocabulary[u]||(t.vocabulary[u]=!0,t.vocabularySize++);var o=n[u];t.wordFrequencyCount[e][u]?t.wordFrequencyCount[e][u]+=o:t.wordFrequencyCount[e][u]=o,t.wordCount[e]+=o}),t};f.prototype.categorize=async function(r){var e=this,t=-1/0,i=null,n=await e.tokenizer(r),u=e.frequencyTable(n);return Object.keys(e.categories).forEach(function(o){var l=e.docCount[o]/e.totalDocuments,s=Math.log(l);Object.keys(u).forEach(function(c){var p=u[c],v=e.tokenProbability(c,o);s+=p*Math.log(v)}),s>t&&(t=s,i=o)}),i};f.prototype.tokenProbability=function(r,e){var t=this.wordFrequencyCount[e][r]||0,i=this.wordCount[e];return(t+1)/(i+this.vocabularySize)};f.prototype.frequencyTable=function(r){var e=Object.create(null);return r.forEach(function(t){e[t]?e[t]++:e[t]=1}),e};f.prototype.toJson=function(){var r={},e=this;pr.forEach(function(i){r[i]=e[i]});var t=JSON.stringify(r);return t}});var dr=Sr(cr());function Vi(r){return b(d({},r),{json:JSON.stringify(Ji(r),null,2)})}var Zi=`
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
    `,fr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ji(r){let{name:e,category:t,released:i,description:n,author:u,result:o,params:l,about:s,video:c}=r,{icon:p=fr}=r;return p==="glide"&&(p=Zi),{name:e,category:t,released:i,description:n,author:u,result:o,about:s,icon:p,video:c,params:Object.entries(l).map(([v,hr])=>d({name:v},hr))}}var Wi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fr,about:void 0,video:void 0,tests:[],run(){return j(this,null,function*(){})}},T=class{constructor(e={},t=[]){this.definition=d(d({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new T(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,dr.default)(t)),this.with({params:b(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...o){let l={};if(o.forEach(({value:s},c)=>{l[n[c]]=s}),!i.some(s=>l[s]===void 0))return e(l)}return Vi(b(d({},this.definition),{run:u}))}};function mr(r){return new T({name:r})}var Hi=gr(),Bi="",S={};function Yi(r){var e;return(e=S[r])!=null?e:S[r]=Hi()}var Mn=mr("Classify Text").withCategory("Machine Learning").withReleased("direct").withDescription("Categorize text based on examples.").withAuthor("ttezel","https://github.com/ttezel/bayes").withAbout(`
      The Classify Text column takes training data in the form of text values, and known categories for those text values. When it sees new text values without categories provided, it tries to infer the category based on the examples it's seen.

      **This is just a proof of concept. Because Glide does not guarantee that all columns are evaluated (it only evaluates columns required to show the current screen), this will usually not produce good results.**`).withVideo("https://www.youtube.com/watch?v=Qu9MM8YAAM0").withRequiredStringParam("phrase").withStringParam("category","Training Data").withStringParam("id","Classifier ID").withStringResult().run(({id:r=Bi,phrase:e,category:t})=>{let i=Yi(r);return t!==void 0?(i.learn(e,t),t):i.categorize(e)});export{Mn as default};
//# sourceMappingURL=function.js.map
