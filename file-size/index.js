(()=>{var zr=Object.create;var O=Object.defineProperty,kr=Object.defineProperties,Ir=Object.getOwnPropertyDescriptor,Ur=Object.getOwnPropertyDescriptors,_r=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,Er=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable;var W=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,P=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&W(e,t,r[t]);if(F)for(var t of F(r))Fr.call(r,t)&&W(e,t,r[t]);return e},M=(e,r)=>kr(e,Ur(r)),Dr=e=>O(e,"__esModule",{value:!0});var m=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Wr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of _r(r))!D.call(e,s)&&s!=="default"&&O(e,s,{get:()=>r[s],enumerable:!(t=Ir(r,s))||t.enumerable});return e},Z=e=>Wr(Dr(O(e!=null?zr(Er(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var k=(e,r,t)=>new Promise((s,o)=>{var g=n=>{try{u(t.next(n))}catch(i){o(i)}},l=n=>{try{u(t.throw(n))}catch(i){o(i)}},u=n=>n.done?s(n.value):Promise.resolve(n.value).then(g,l);u((t=t.apply(e,r)).next())});var V=m((di,H)=>{function Zr(e,r,t,s){var o=-1,g=e==null?0:e.length;for(s&&g&&(t=e[++o]);++o<g;)t=r(t,e[o],o,e);return t}H.exports=Zr});var B=m((mi,G)=>{function Hr(e){return function(r){return e==null?void 0:e[r]}}G.exports=Hr});var K=m((ci,J)=>{var Vr=B(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Br=Vr(Gr);J.exports=Br});var Y=m((gi,$)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Jr});var X=m((pi,Q)=>{var Kr=Y(),$r=typeof self=="object"&&self&&self.Object===Object&&self,Yr=Kr||$r||Function("return this")();Q.exports=Yr});var N=m((hi,ee)=>{var Qr=X(),Xr=Qr.Symbol;ee.exports=Xr});var te=m((bi,re)=>{function et(e,r){for(var t=-1,s=e==null?0:e.length,o=Array(s);++t<s;)o[t]=r(e[t],t,e);return o}re.exports=et});var ie=m((vi,ne)=>{var rt=Array.isArray;ne.exports=rt});var oe=m((xi,se)=>{var ae=N(),ue=Object.prototype,tt=ue.hasOwnProperty,nt=ue.toString,R=ae?ae.toStringTag:void 0;function it(e){var r=tt.call(e,R),t=e[R];try{e[R]=void 0;var s=!0}catch(g){}var o=nt.call(e);return s&&(r?e[R]=t:delete e[R]),o}se.exports=it});var fe=m((yi,le)=>{var at=Object.prototype,ut=at.toString;function st(e){return ut.call(e)}le.exports=st});var ge=m((Ti,ce)=>{var de=N(),ot=oe(),lt=fe(),ft="[object Null]",dt="[object Undefined]",me=de?de.toStringTag:void 0;function mt(e){return e==null?e===void 0?dt:ft:me&&me in Object(e)?ot(e):lt(e)}ce.exports=mt});var he=m((wi,pe)=>{function ct(e){return e!=null&&typeof e=="object"}pe.exports=ct});var ve=m((Ci,be)=>{var gt=ge(),pt=he(),ht="[object Symbol]";function bt(e){return typeof e=="symbol"||pt(e)&&gt(e)==ht}be.exports=bt});var Pe=m((Pi,Ce)=>{var xe=N(),vt=te(),xt=ie(),yt=ve(),Tt=1/0,ye=xe?xe.prototype:void 0,Te=ye?ye.toString:void 0;function we(e){if(typeof e=="string")return e;if(xt(e))return vt(e,we)+"";if(yt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-Tt?"-0":r}Ce.exports=we});var q=m((Si,Se)=>{var wt=Pe();function Ct(e){return e==null?"":wt(e)}Se.exports=Ct});var Ae=m((Ri,Re)=>{var Pt=K(),St=q(),Rt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,At="\\u0300-\\u036f",Ot="\\ufe20-\\ufe2f",Mt="\\u20d0-\\u20ff",Nt=At+Ot+Mt,qt="["+Nt+"]",Lt=RegExp(qt,"g");function jt(e){return e=St(e),e&&e.replace(Rt,Pt).replace(Lt,"")}Re.exports=jt});var Me=m((Ai,Oe)=>{var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function kt(e){return e.match(zt)||[]}Oe.exports=kt});var qe=m((Oi,Ne)=>{var It=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ut(e){return It.test(e)}Ne.exports=Ut});var $e=m((Mi,Ke)=>{var Le="\\ud800-\\udfff",_t="\\u0300-\\u036f",Et="\\ufe20-\\ufe2f",Ft="\\u20d0-\\u20ff",Dt=_t+Et+Ft,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Wt="\\xac\\xb1\\xd7\\xf7",Zt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ht="\\u2000-\\u206f",Vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Gt="\\ufe0e\\ufe0f",Ie=Wt+Zt+Ht+Vt,Ue="['\u2019]",_e="["+Ie+"]",Bt="["+Dt+"]",Ee="\\d+",Jt="["+je+"]",Fe="["+ze+"]",De="[^"+Le+Ie+Ee+je+ze+ke+"]",Kt="\\ud83c[\\udffb-\\udfff]",$t="(?:"+Bt+"|"+Kt+")",Yt="[^"+Le+"]",We="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",S="["+ke+"]",Qt="\\u200d",He="(?:"+Fe+"|"+De+")",Xt="(?:"+S+"|"+De+")",Ve="(?:"+Ue+"(?:d|ll|m|re|s|t|ve))?",Ge="(?:"+Ue+"(?:D|LL|M|RE|S|T|VE))?",Be=$t+"?",Je="["+Gt+"]?",en="(?:"+Qt+"(?:"+[Yt,We,Ze].join("|")+")"+Je+Be+")*",rn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nn=Je+Be+en,an="(?:"+[Jt,We,Ze].join("|")+")"+nn,un=RegExp([S+"?"+Fe+"+"+Ve+"(?="+[_e,S,"$"].join("|")+")",Xt+"+"+Ge+"(?="+[_e,S+He,"$"].join("|")+")",S+"?"+He+"+"+Ve,S+"+"+Ge,tn,rn,Ee,an].join("|"),"g");function sn(e){return e.match(un)||[]}Ke.exports=sn});var Qe=m((Ni,Ye)=>{var on=Me(),ln=qe(),fn=q(),dn=$e();function mn(e,r,t){return e=fn(e),r=t?void 0:r,r===void 0?ln(e)?dn(e):on(e):e.match(r)||[]}Ye.exports=mn});var er=m((qi,Xe)=>{var cn=V(),gn=Ae(),pn=Qe(),hn="['\u2019]",bn=RegExp(hn,"g");function vn(e){return function(r){return cn(pn(gn(r).replace(bn,"")),e,"")}}Xe.exports=vn});var tr=m((Li,rr)=>{function xn(e,r,t){var s=-1,o=e.length;r<0&&(r=-r>o?0:o+r),t=t>o?o:t,t<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var g=Array(o);++s<o;)g[s]=e[s+r];return g}rr.exports=xn});var ir=m((ji,nr)=>{var yn=tr();function Tn(e,r,t){var s=e.length;return t=t===void 0?s:t,!r&&t>=s?e:yn(e,r,t)}nr.exports=Tn});var I=m((zi,ar)=>{var wn="\\ud800-\\udfff",Cn="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",Sn="\\u20d0-\\u20ff",Rn=Cn+Pn+Sn,An="\\ufe0e\\ufe0f",On="\\u200d",Mn=RegExp("["+On+wn+Rn+An+"]");function Nn(e){return Mn.test(e)}ar.exports=Nn});var sr=m((ki,ur)=>{function qn(e){return e.split("")}ur.exports=qn});var pr=m((Ii,gr)=>{var or="\\ud800-\\udfff",Ln="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",kn=Ln+jn+zn,In="\\ufe0e\\ufe0f",Un="["+or+"]",U="["+kn+"]",_="\\ud83c[\\udffb-\\udfff]",_n="(?:"+U+"|"+_+")",lr="[^"+or+"]",fr="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",En="\\u200d",mr=_n+"?",cr="["+In+"]?",Fn="(?:"+En+"(?:"+[lr,fr,dr].join("|")+")"+cr+mr+")*",Dn=cr+mr+Fn,Wn="(?:"+[lr+U+"?",U,fr,dr,Un].join("|")+")",Zn=RegExp(_+"(?="+_+")|"+Wn+Dn,"g");function Hn(e){return e.match(Zn)||[]}gr.exports=Hn});var br=m((Ui,hr)=>{var Vn=sr(),Gn=I(),Bn=pr();function Jn(e){return Gn(e)?Bn(e):Vn(e)}hr.exports=Jn});var xr=m((_i,vr)=>{var Kn=ir(),$n=I(),Yn=br(),Qn=q();function Xn(e){return function(r){r=Qn(r);var t=$n(r)?Yn(r):void 0,s=t?t[0]:r.charAt(0),o=t?Kn(t,1).join(""):r.slice(1);return s[e]()+o}}vr.exports=Xn});var Tr=m((Ei,yr)=>{var ei=xr(),ri=ei("toUpperCase");yr.exports=ri});var Cr=m((Fi,wr)=>{var ti=er(),ni=Tr(),ii=ti(function(e,r,t){return e+(t?" ":"")+ni(r)});wr.exports=ii});var Nr=m((j,Mr)=>{"use strict";var Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Or(j))==="object"?Mr.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},s=function(n){return n!==n},o=function(n){return isFinite(n)&&!s(parseFloat(n))},g=function(n){var i=Object.prototype.toString.call(n);return i==="[object Array]"},l={intword:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return l.compactInteger(n,a)},compactInteger:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];i=Math.max(i,0);var a=parseInt(n,10),f=a<0?"-":"",d=Math.abs(a),c=String(d),y=c.length,b=[13,10,7,4],T=["T","B","M","k"];if(d<1e3)return""+f+c;if(y>b[0]+3)return a.toExponential(i).replace("e+","x10^");for(var v=void 0,x=0;x<b.length;x++){var w=b[x];if(y>=w){v=w;break}}var h=y-v+1,p=c.split(""),C=p.slice(0,h),Lr=p.slice(h,h+i+1),E=C.join(""),A=Lr.join("");A.length<i&&(A+=""+Array(i-A.length+1).join("0"));var z=void 0;if(i===0)z=""+f+E+T[b.indexOf(v)];else{var jr=Number(E+"."+A).toFixed(i);z=""+f+jr+T[b.indexOf(v)]}return z},intComma:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return l.formatNumber(n,i)},intcomma:function(){return l.intComma.apply(l,arguments)},fileSize:function(n){var i=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var a in r)if(r.hasOwnProperty(a)){var f=r[a];if(n>=f)return l.formatNumber(n/f,i,"")+" "+a+"B"}return n>=1024?l.formatNumber(n/1024,0)+" KB":l.formatNumber(n,0)+l.pluralize(n," byte")},filesize:function(){return l.fileSize.apply(l,arguments)},formatNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1],a=arguments.length<=2||arguments[2]===void 0?",":arguments[2],f=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(h,p,C){return C?h.substr(0,C)+p:""},c=function(h,p,C){return h.substr(C).replace(/(\d{3})(?=\d)/g,"$1"+p)},y=function(h,p,C){return C?p+l.toFixed(Math.abs(h),C).split(".")[1]:""},b=l.normalizePrecision(i),T=n<0&&"-"||"",v=String(parseInt(l.toFixed(Math.abs(n||0),b),10)),x=v.length>3?v.length%3:0;return T+d(v,a,x)+c(v,a,x)+y(n,f,b)},toFixed:function(n,i){i=t(i)?i:l.normalizePrecision(i,0);var a=Math.pow(10,i);return(Math.round(n*a)/a).toFixed(i)},normalizePrecision:function(n,i){return n=Math.round(Math.abs(n)),s(n)?i:n},ordinal:function(n){var i=parseInt(n,10);if(i===0)return n;var a=i%100;if([11,12,13].indexOf(a)>=0)return i+"th";var f=i%10,d=void 0;switch(f){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+i+d},times:function(n){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(o(n)&&n>=0){var a=parseFloat(n),f=["never","once","twice"];if(t(i[a]))return String(i[a]);var d=t(f[a])&&f[a].toString();return d||a.toString()+" times"}return null},pluralize:function(n,i,a){return t(n)&&t(i)?(a=t(a)?a:i+"s",parseInt(n,10)===1?i:a):null},truncate:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>i?n.substring(0,i-a.length)+a:n},truncateWords:function(n,i){for(var a=n.split(" "),f="",d=0;d<i;)t(a[d])&&(f+=a[d]+" "),d++;return a.length>i?f+"...":null},truncatewords:function(){return l.truncateWords.apply(l,arguments)},boundedNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],f=void 0;return o(n)&&o(i)&&n>i&&(f=i+a),(f||n).toString()},truncatenumber:function(){return l.boundedNumber.apply(l,arguments)},oxford:function(n,i,a){var f=n.length,d=void 0;if(f<2)return String(n);if(f===2)return n.join(" and ");if(t(i)&&f>i){var c=f-i;d=i,a=t(a)?a:", and "+c+" "+l.pluralize(c,"other")}else d=-1,a=", and "+n[f-1];return n.slice(0,d).join(", ")+a},dictionary:function(n){var i=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],a=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],f="";if(t(n)&&(typeof n=="undefined"?"undefined":Or(n))==="object"&&!g(n)){var d=[];for(var c in n)if(n.hasOwnProperty(c)){var y=n[c];d.push(""+c+i+y)}return d.join(a)}return f},frequency:function(n,i){if(!g(n))return null;var a=n.length,f=l.times(a);return a===0?f+" "+i:i+" "+f},pace:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||i===0)return"No "+l.pluralize(0,a);for(var f="Approximately",d=void 0,c=void 0,y=n/i,b=0;b<e.length;++b){var T=e[b];if(c=y*T.value,c>1){d=T.name;break}}d||(f="Less than",c=1,d=e[e.length-1].name);var v=Math.round(c);return a=l.pluralize(v,a),f+" "+v+" "+a+" per "+d},nl2br:function(n){var i=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,i)},br2nl:function(n){var i=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,i)},capitalize:function(n){var i=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(i?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(i){return i.toUpperCase()})},titleCase:function(n){var i=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,a=/\S+[A-Z]+\S*/,f=/\s+/,d=/-/,c=void 0;return c=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],v=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],x=[],w=b.split(T?d:f),h=0;h<w.length;++h){var p=w[h];if(p.indexOf("-")!==-1){x.push(c(p,!0,h===0||h===w.length-1));continue}if(v&&(h===0||h===w.length-1)){x.push(a.test(p)?p:l.capitalize(p));continue}a.test(p)?x.push(p):i.test(p)?x.push(p.toLowerCase()):x.push(l.capitalize(p))}return x.join(T?"-":" ")},c(n)},titlecase:function(){return l.titleCase.apply(l,arguments)}};return l})});var Pr=Z(Cr());function Sr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Sr):e}function ai(e,r){return k(this,null,function*(){var u;let{data:{key:t,params:s}}=e,o,g;try{o=yield r(...s)}catch(n){o=void 0;try{g=n.toString()}catch(i){g="Exception can't be stringified."}}let l={key:t};o!==void 0&&(o=Sr(o),l.result={type:"string",value:o}),g!==void 0&&(l.error=g),((u=e.source)==null?void 0:u.postMessage).call(u,l,"*")})}function ui(e){return typeof window!="undefined"&&window.addEventListener("message",r=>ai(r,e.run)),M(P({},e),{json:JSON.stringify(oi(e),null,2)})}var si=`
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
</svg>`;function oi(e){let{name:r,category:t,released:s,description:o,author:g,result:l,params:u,about:n,video:i}=e,{icon:a=Rr}=e;return a==="glide"&&(a=si),{name:r,category:t,released:s,description:o,author:g,result:l,about:n,icon:a,video:i,params:Object.entries(u).map(([f,d])=>P({name:f},d))}}var li={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Rr,about:void 0,video:void 0,tests:[],run(){return k(this,null,function*(){})}},L=class{constructor(r={},t=[]){this.definition=P(P({},li),r),this.requiredParams=[...t]}with(r,t=[]){return new L(P(P({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:s=[]}=this.definition;return this.with({tests:[...s,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,s){return s===void 0&&(s=(0,Pr.default)(t)),this.with({params:M(P({},this.definition.params),{[t]:{type:r,displayName:s}})})}withRequiredParam(r,t,s){return this.withParam(r,t,s).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,s=this.requiredParams,o=Object.keys(t);function g(...l){let u={};if(l.forEach(({value:n},i)=>{u[o[i]]=n}),!s.some(n=>u[n]===void 0))return r(u)}return ui(M(P({},this.definition),{run:g}))}};function Ar(e){return new L({name:e})}var qr=Z(Nr()),Zi=Ar("File Size").withCategory("Number").withDescription("Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withRequiredNumberParam("fileSize").withStringResult().withTest({fileSize:1024*2e3},"1.95 MB").run(({fileSize:e})=>qr.default.fileSize(e));})();
//# sourceMappingURL=index.js.map
