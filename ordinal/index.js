(()=>{var zr=Object.create;var M=Object.defineProperty,Ur=Object.defineProperties,_r=Object.getOwnPropertyDescriptor,Ir=Object.getOwnPropertyDescriptors,Er=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols,kr=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable;var Z=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&Z(e,t,r[t]);if(W)for(var t of W(r))Fr.call(r,t)&&Z(e,t,r[t]);return e},R=(e,r)=>Ur(e,Ir(r)),Wr=e=>M(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Dr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Er(r))!D.call(e,o)&&o!=="default"&&M(e,o,{get:()=>r[o],enumerable:!(t=_r(r,o))||t.enumerable});return e},H=e=>Dr(Wr(M(e!=null?zr(kr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var q=(e,r,t)=>new Promise((o,s)=>{var g=n=>{try{i(t.next(n))}catch(u){s(u)}},f=n=>{try{i(t.throw(n))}catch(u){s(u)}},i=n=>n.done?o(n.value):Promise.resolve(n.value).then(g,f);i((t=t.apply(e,r)).next())});var V=c((lu,G)=>{function Zr(e,r,t,o){var s=-1,g=e==null?0:e.length;for(o&&g&&(t=e[++s]);++s<g;)t=r(t,e[s],s,e);return t}G.exports=Zr});var J=c((cu,B)=>{function Hr(e){return function(r){return e==null?void 0:e[r]}}B.exports=Hr});var $=c((mu,K)=>{var Gr=J(),Vr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Br=Gr(Vr);K.exports=Br});var Q=c((gu,Y)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;Y.exports=Jr});var ee=c((pu,X)=>{var Kr=Q(),$r=typeof self=="object"&&self&&self.Object===Object&&self,Yr=Kr||$r||Function("return this")();X.exports=Yr});var L=c((bu,re)=>{var Qr=ee(),Xr=Qr.Symbol;re.exports=Xr});var te=c((hu,ne)=>{function en(e,r){for(var t=-1,o=e==null?0:e.length,s=Array(o);++t<o;)s[t]=r(e[t],t,e);return s}ne.exports=en});var ae=c((xu,ue)=>{var rn=Array.isArray;ue.exports=rn});var fe=c((vu,se)=>{var ie=L(),oe=Object.prototype,nn=oe.hasOwnProperty,tn=oe.toString,A=ie?ie.toStringTag:void 0;function un(e){var r=nn.call(e,A),t=e[A];try{e[A]=void 0;var o=!0}catch(g){}var s=tn.call(e);return o&&(r?e[A]=t:delete e[A]),s}se.exports=un});var le=c((yu,de)=>{var an=Object.prototype,on=an.toString;function sn(e){return on.call(e)}de.exports=sn});var pe=c((Cu,ge)=>{var ce=L(),fn=fe(),dn=le(),ln="[object Null]",cn="[object Undefined]",me=ce?ce.toStringTag:void 0;function mn(e){return e==null?e===void 0?cn:ln:me&&me in Object(e)?fn(e):dn(e)}ge.exports=mn});var he=c((Tu,be)=>{function gn(e){return e!=null&&typeof e=="object"}be.exports=gn});var ve=c((Su,xe)=>{var pn=pe(),bn=he(),hn="[object Symbol]";function xn(e){return typeof e=="symbol"||bn(e)&&pn(e)==hn}xe.exports=xn});var Pe=c((wu,we)=>{var ye=L(),vn=te(),yn=ae(),Cn=ve(),Tn=1/0,Ce=ye?ye.prototype:void 0,Te=Ce?Ce.toString:void 0;function Se(e){if(typeof e=="string")return e;if(yn(e))return vn(e,Se)+"";if(Cn(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-Tn?"-0":r}we.exports=Se});var N=c((Pu,Re)=>{var Sn=Pe();function wn(e){return e==null?"":Sn(e)}Re.exports=wn});var Oe=c((Ru,Ae)=>{var Pn=$(),Rn=N(),An=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,On="\\u0300-\\u036f",Mn="\\ufe20-\\ufe2f",qn="\\u20d0-\\u20ff",Ln=On+Mn+qn,Nn="["+Ln+"]",jn=RegExp(Nn,"g");function zn(e){return e=Rn(e),e&&e.replace(An,Pn).replace(jn,"")}Ae.exports=zn});var qe=c((Au,Me)=>{var Un=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function _n(e){return e.match(Un)||[]}Me.exports=_n});var Ne=c((Ou,Le)=>{var In=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function En(e){return In.test(e)}Le.exports=En});var Ye=c((Mu,$e)=>{var je="\\ud800-\\udfff",kn="\\u0300-\\u036f",Fn="\\ufe20-\\ufe2f",Wn="\\u20d0-\\u20ff",Dn=kn+Fn+Wn,ze="\\u2700-\\u27bf",Ue="a-z\\xdf-\\xf6\\xf8-\\xff",Zn="\\xac\\xb1\\xd7\\xf7",Hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Gn="\\u2000-\\u206f",Vn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_e="A-Z\\xc0-\\xd6\\xd8-\\xde",Bn="\\ufe0e\\ufe0f",Ie=Zn+Hn+Gn+Vn,Ee="['\u2019]",ke="["+Ie+"]",Jn="["+Dn+"]",Fe="\\d+",Kn="["+ze+"]",We="["+Ue+"]",De="[^"+je+Ie+Fe+ze+Ue+_e+"]",$n="\\ud83c[\\udffb-\\udfff]",Yn="(?:"+Jn+"|"+$n+")",Qn="[^"+je+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",He="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+_e+"]",Xn="\\u200d",Ge="(?:"+We+"|"+De+")",et="(?:"+P+"|"+De+")",Ve="(?:"+Ee+"(?:d|ll|m|re|s|t|ve))?",Be="(?:"+Ee+"(?:D|LL|M|RE|S|T|VE))?",Je=Yn+"?",Ke="["+Bn+"]?",rt="(?:"+Xn+"(?:"+[Qn,Ze,He].join("|")+")"+Ke+Je+")*",nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ut=Ke+Je+rt,at="(?:"+[Kn,Ze,He].join("|")+")"+ut,it=RegExp([P+"?"+We+"+"+Ve+"(?="+[ke,P,"$"].join("|")+")",et+"+"+Be+"(?="+[ke,P+Ge,"$"].join("|")+")",P+"?"+Ge+"+"+Ve,P+"+"+Be,tt,nt,Fe,at].join("|"),"g");function ot(e){return e.match(it)||[]}$e.exports=ot});var Xe=c((qu,Qe)=>{var st=qe(),ft=Ne(),dt=N(),lt=Ye();function ct(e,r,t){return e=dt(e),r=t?void 0:r,r===void 0?ft(e)?lt(e):st(e):e.match(r)||[]}Qe.exports=ct});var rr=c((Lu,er)=>{var mt=V(),gt=Oe(),pt=Xe(),bt="['\u2019]",ht=RegExp(bt,"g");function xt(e){return function(r){return mt(pt(gt(r).replace(ht,"")),e,"")}}er.exports=xt});var tr=c((Nu,nr)=>{function vt(e,r,t){var o=-1,s=e.length;r<0&&(r=-r>s?0:s+r),t=t>s?s:t,t<0&&(t+=s),s=r>t?0:t-r>>>0,r>>>=0;for(var g=Array(s);++o<s;)g[o]=e[o+r];return g}nr.exports=vt});var ar=c((ju,ur)=>{var yt=tr();function Ct(e,r,t){var o=e.length;return t=t===void 0?o:t,!r&&t>=o?e:yt(e,r,t)}ur.exports=Ct});var _=c((zu,ir)=>{var Tt="\\ud800-\\udfff",St="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",Pt="\\u20d0-\\u20ff",Rt=St+wt+Pt,At="\\ufe0e\\ufe0f",Ot="\\u200d",Mt=RegExp("["+Ot+Tt+Rt+At+"]");function qt(e){return Mt.test(e)}ir.exports=qt});var sr=c((Uu,or)=>{function Lt(e){return e.split("")}or.exports=Lt});var br=c((_u,pr)=>{var fr="\\ud800-\\udfff",Nt="\\u0300-\\u036f",jt="\\ufe20-\\ufe2f",zt="\\u20d0-\\u20ff",Ut=Nt+jt+zt,_t="\\ufe0e\\ufe0f",It="["+fr+"]",I="["+Ut+"]",E="\\ud83c[\\udffb-\\udfff]",Et="(?:"+I+"|"+E+")",dr="[^"+fr+"]",lr="(?:\\ud83c[\\udde6-\\uddff]){2}",cr="[\\ud800-\\udbff][\\udc00-\\udfff]",kt="\\u200d",mr=Et+"?",gr="["+_t+"]?",Ft="(?:"+kt+"(?:"+[dr,lr,cr].join("|")+")"+gr+mr+")*",Wt=gr+mr+Ft,Dt="(?:"+[dr+I+"?",I,lr,cr,It].join("|")+")",Zt=RegExp(E+"(?="+E+")|"+Dt+Wt,"g");function Ht(e){return e.match(Zt)||[]}pr.exports=Ht});var xr=c((Iu,hr)=>{var Gt=sr(),Vt=_(),Bt=br();function Jt(e){return Vt(e)?Bt(e):Gt(e)}hr.exports=Jt});var yr=c((Eu,vr)=>{var Kt=ar(),$t=_(),Yt=xr(),Qt=N();function Xt(e){return function(r){r=Qt(r);var t=$t(r)?Yt(r):void 0,o=t?t[0]:r.charAt(0),s=t?Kt(t,1).join(""):r.slice(1);return o[e]()+s}}vr.exports=Xt});var Tr=c((ku,Cr)=>{var eu=yr(),ru=eu("toUpperCase");Cr.exports=ru});var wr=c((Fu,Sr)=>{var nu=rr(),tu=Tr(),uu=nu(function(e,r,t){return e+(t?" ":"")+tu(r)});Sr.exports=uu});var qr=c((z,Mr)=>{"use strict";var Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof z=="undefined"?"undefined":Or(z))==="object"?Mr.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(z,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},o=function(n){return n!==n},s=function(n){return isFinite(n)&&!o(parseFloat(n))},g=function(n){var u=Object.prototype.toString.call(n);return u==="[object Array]"},f={intword:function(n,u){var a=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(n,a)},compactInteger:function(n){var u=arguments.length<=1||arguments[1]===void 0?0:arguments[1];u=Math.max(u,0);var a=parseInt(n,10),d=a<0?"-":"",l=Math.abs(a),m=String(l),y=m.length,h=[13,10,7,4],C=["T","B","M","k"];if(l<1e3)return""+d+m;if(y>h[0]+3)return a.toExponential(u).replace("e+","x10^");for(var x=void 0,v=0;v<h.length;v++){var T=h[v];if(y>=T){x=T;break}}var b=y-x+1,p=m.split(""),w=p.slice(0,b),Nr=p.slice(b,b+u+1),F=w.join(""),O=Nr.join("");O.length<u&&(O+=""+Array(u-O.length+1).join("0"));var U=void 0;if(u===0)U=""+d+F+C[h.indexOf(x)];else{var jr=Number(F+"."+O).toFixed(u);U=""+d+jr+C[h.indexOf(x)]}return U},intComma:function(n){var u=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(n,u)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(n){var u=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var a in r)if(r.hasOwnProperty(a)){var d=r[a];if(n>=d)return f.formatNumber(n/d,u,"")+" "+a+"B"}return n>=1024?f.formatNumber(n/1024,0)+" KB":f.formatNumber(n,0)+f.pluralize(n," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(n){var u=arguments.length<=1||arguments[1]===void 0?0:arguments[1],a=arguments.length<=2||arguments[2]===void 0?",":arguments[2],d=arguments.length<=3||arguments[3]===void 0?".":arguments[3],l=function(b,p,w){return w?b.substr(0,w)+p:""},m=function(b,p,w){return b.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+p)},y=function(b,p,w){return w?p+f.toFixed(Math.abs(b),w).split(".")[1]:""},h=f.normalizePrecision(u),C=n<0&&"-"||"",x=String(parseInt(f.toFixed(Math.abs(n||0),h),10)),v=x.length>3?x.length%3:0;return C+l(x,a,v)+m(x,a,v)+y(n,d,h)},toFixed:function(n,u){u=t(u)?u:f.normalizePrecision(u,0);var a=Math.pow(10,u);return(Math.round(n*a)/a).toFixed(u)},normalizePrecision:function(n,u){return n=Math.round(Math.abs(n)),o(n)?u:n},ordinal:function(n){var u=parseInt(n,10);if(u===0)return n;var a=u%100;if([11,12,13].indexOf(a)>=0)return u+"th";var d=u%10,l=void 0;switch(d){case 1:l="st";break;case 2:l="nd";break;case 3:l="rd";break;default:l="th"}return""+u+l},times:function(n){var u=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(s(n)&&n>=0){var a=parseFloat(n),d=["never","once","twice"];if(t(u[a]))return String(u[a]);var l=t(d[a])&&d[a].toString();return l||a.toString()+" times"}return null},pluralize:function(n,u,a){return t(n)&&t(u)?(a=t(a)?a:u+"s",parseInt(n,10)===1?u:a):null},truncate:function(n){var u=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>u?n.substring(0,u-a.length)+a:n},truncateWords:function(n,u){for(var a=n.split(" "),d="",l=0;l<u;)t(a[l])&&(d+=a[l]+" "),l++;return a.length>u?d+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(n){var u=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],d=void 0;return s(n)&&s(u)&&n>u&&(d=u+a),(d||n).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(n,u,a){var d=n.length,l=void 0;if(d<2)return String(n);if(d===2)return n.join(" and ");if(t(u)&&d>u){var m=d-u;l=u,a=t(a)?a:", and "+m+" "+f.pluralize(m,"other")}else l=-1,a=", and "+n[d-1];return n.slice(0,l).join(", ")+a},dictionary:function(n){var u=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],a=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],d="";if(t(n)&&(typeof n=="undefined"?"undefined":Or(n))==="object"&&!g(n)){var l=[];for(var m in n)if(n.hasOwnProperty(m)){var y=n[m];l.push(""+m+u+y)}return l.join(a)}return d},frequency:function(n,u){if(!g(n))return null;var a=n.length,d=f.times(a);return a===0?d+" "+u:u+" "+d},pace:function(n,u){var a=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||u===0)return"No "+f.pluralize(0,a);for(var d="Approximately",l=void 0,m=void 0,y=n/u,h=0;h<e.length;++h){var C=e[h];if(m=y*C.value,m>1){l=C.name;break}}l||(d="Less than",m=1,l=e[e.length-1].name);var x=Math.round(m);return a=f.pluralize(x,a),d+" "+x+" "+a+" per "+l},nl2br:function(n){var u=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,u)},br2nl:function(n){var u=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,u)},capitalize:function(n){var u=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(u?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(u){return u.toUpperCase()})},titleCase:function(n){var u=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,a=/\S+[A-Z]+\S*/,d=/\s+/,l=/-/,m=void 0;return m=function(h){for(var C=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],x=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],v=[],T=h.split(C?l:d),b=0;b<T.length;++b){var p=T[b];if(p.indexOf("-")!==-1){v.push(m(p,!0,b===0||b===T.length-1));continue}if(x&&(b===0||b===T.length-1)){v.push(a.test(p)?p:f.capitalize(p));continue}a.test(p)?v.push(p):u.test(p)?v.push(p.toLowerCase()):v.push(f.capitalize(p))}return v.join(C?"-":" ")},m(n)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var k=H(wr());function Pr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Pr):e}function au(e,r){return q(this,null,function*(){var i;let{data:{key:t,params:o}}=e,s,g;try{s=yield r(...o)}catch(n){s=void 0;try{g=n.toString()}catch(u){g="Exception can't be stringified."}}let f={key:t};s!==void 0&&(s=Pr(s),f.result={type:"string",value:s}),g!==void 0&&(f.error=g),((i=e.source)==null?void 0:i.postMessage).call(i,f,"*")})}function iu(e){return typeof window!="undefined"&&window.addEventListener("message",r=>au(r,e.run)),R(S({},e),{json:JSON.stringify(su(e),null,2)})}var ou=`
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
    `,Rr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function su(e){let{name:r,description:t,author:o,result:s,params:g,about:f,video:i}=e,{icon:n=Rr}=e;return n==="glide"&&(n=ou),{name:r,description:t,author:o,result:s,about:f,icon:n,video:i,params:Object.entries(g).map(([u,a])=>S({name:u},a))}}var fu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Rr,about:void 0,video:void 0,run(){return q(this,null,function*(){})}},j=class{constructor(r={},t=[]){this.definition=S(S({},fu),r),this.requiredParams=[...t]}with(r,t=[]){return new j(S(S({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withDescription(r){return this.with({description:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,o){return o===void 0&&(o=(0,k.default)(t)),this.with({params:R(S({},this.definition.params),{[t]:{type:r,displayName:o}})})}withRequiredParam(r,t,o){return o===void 0&&(o=(0,k.default)(t)),this.with({params:R(S({},this.definition.params),{[t]:{type:r,displayName:o}})},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,o=this.requiredParams,s=Object.keys(t);function g(...f){return q(this,null,function*(){let i={};if(f.forEach(({value:u},a)=>{i[s[a]]=u}),o.some(u=>i[u]===void 0))return;let n=r(i);return Promise.resolve(n)})}return iu(R(S({},this.definition),{run:g}))}};function Ar(e){return new j({name:e})}var Lr=H(qr()),Zu=Ar("Ordinal").withDescription("Converts an integer to its ordinal as a string.").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withExample({number:22}).run(({number:e})=>Lr.default.ordinal(e));})();
//# sourceMappingURL=index.js.map
