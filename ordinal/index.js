(()=>{var zr=Object.create;var O=Object.defineProperty,kr=Object.defineProperties,Ir=Object.getOwnPropertyDescriptor,Ur=Object.getOwnPropertyDescriptors,_r=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,Er=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable;var W=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&W(e,t,r[t]);if(F)for(var t of F(r))Fr.call(r,t)&&W(e,t,r[t]);return e},q=(e,r)=>kr(e,Ur(r)),Dr=e=>O(e,"__esModule",{value:!0});var m=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Wr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of _r(r))!D.call(e,s)&&s!=="default"&&O(e,s,{get:()=>r[s],enumerable:!(t=Ir(r,s))||t.enumerable});return e},Z=e=>Wr(Dr(O(e!=null?zr(Er(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var k=(e,r,t)=>new Promise((s,o)=>{var g=n=>{try{u(t.next(n))}catch(i){o(i)}},l=n=>{try{u(t.throw(n))}catch(i){o(i)}},u=n=>n.done?s(n.value):Promise.resolve(n.value).then(g,l);u((t=t.apply(e,r)).next())});var V=m((fi,H)=>{function Zr(e,r,t,s){var o=-1,g=e==null?0:e.length;for(s&&g&&(t=e[++o]);++o<g;)t=r(t,e[o],o,e);return t}H.exports=Zr});var B=m((mi,G)=>{function Hr(e){return function(r){return e==null?void 0:e[r]}}G.exports=Hr});var K=m((ci,J)=>{var Vr=B(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Br=Vr(Gr);J.exports=Br});var Y=m((gi,$)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Jr});var X=m((pi,Q)=>{var Kr=Y(),$r=typeof self=="object"&&self&&self.Object===Object&&self,Yr=Kr||$r||Function("return this")();Q.exports=Yr});var M=m((hi,ee)=>{var Qr=X(),Xr=Qr.Symbol;ee.exports=Xr});var te=m((bi,re)=>{function et(e,r){for(var t=-1,s=e==null?0:e.length,o=Array(s);++t<s;)o[t]=r(e[t],t,e);return o}re.exports=et});var ie=m((vi,ne)=>{var rt=Array.isArray;ne.exports=rt});var oe=m((xi,se)=>{var ae=M(),ue=Object.prototype,tt=ue.hasOwnProperty,nt=ue.toString,S=ae?ae.toStringTag:void 0;function it(e){var r=tt.call(e,S),t=e[S];try{e[S]=void 0;var s=!0}catch(g){}var o=nt.call(e);return s&&(r?e[S]=t:delete e[S]),o}se.exports=it});var de=m((yi,le)=>{var at=Object.prototype,ut=at.toString;function st(e){return ut.call(e)}le.exports=st});var ge=m((Ti,ce)=>{var fe=M(),ot=oe(),lt=de(),dt="[object Null]",ft="[object Undefined]",me=fe?fe.toStringTag:void 0;function mt(e){return e==null?e===void 0?ft:dt:me&&me in Object(e)?ot(e):lt(e)}ce.exports=mt});var he=m((wi,pe)=>{function ct(e){return e!=null&&typeof e=="object"}pe.exports=ct});var ve=m((Pi,be)=>{var gt=ge(),pt=he(),ht="[object Symbol]";function bt(e){return typeof e=="symbol"||pt(e)&&gt(e)==ht}be.exports=bt});var Ce=m((Ci,Pe)=>{var xe=M(),vt=te(),xt=ie(),yt=ve(),Tt=1/0,ye=xe?xe.prototype:void 0,Te=ye?ye.toString:void 0;function we(e){if(typeof e=="string")return e;if(xt(e))return vt(e,we)+"";if(yt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-Tt?"-0":r}Pe.exports=we});var N=m((Ri,Re)=>{var wt=Ce();function Pt(e){return e==null?"":wt(e)}Re.exports=Pt});var Ae=m((Si,Se)=>{var Ct=K(),Rt=N(),St=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,At="\\u0300-\\u036f",Ot="\\ufe20-\\ufe2f",qt="\\u20d0-\\u20ff",Mt=At+Ot+qt,Nt="["+Mt+"]",Lt=RegExp(Nt,"g");function jt(e){return e=Rt(e),e&&e.replace(St,Ct).replace(Lt,"")}Se.exports=jt});var qe=m((Ai,Oe)=>{var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function kt(e){return e.match(zt)||[]}Oe.exports=kt});var Ne=m((Oi,Me)=>{var It=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ut(e){return It.test(e)}Me.exports=Ut});var $e=m((qi,Ke)=>{var Le="\\ud800-\\udfff",_t="\\u0300-\\u036f",Et="\\ufe20-\\ufe2f",Ft="\\u20d0-\\u20ff",Dt=_t+Et+Ft,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Wt="\\xac\\xb1\\xd7\\xf7",Zt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ht="\\u2000-\\u206f",Vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Gt="\\ufe0e\\ufe0f",Ie=Wt+Zt+Ht+Vt,Ue="['\u2019]",_e="["+Ie+"]",Bt="["+Dt+"]",Ee="\\d+",Jt="["+je+"]",Fe="["+ze+"]",De="[^"+Le+Ie+Ee+je+ze+ke+"]",Kt="\\ud83c[\\udffb-\\udfff]",$t="(?:"+Bt+"|"+Kt+")",Yt="[^"+Le+"]",We="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",R="["+ke+"]",Qt="\\u200d",He="(?:"+Fe+"|"+De+")",Xt="(?:"+R+"|"+De+")",Ve="(?:"+Ue+"(?:d|ll|m|re|s|t|ve))?",Ge="(?:"+Ue+"(?:D|LL|M|RE|S|T|VE))?",Be=$t+"?",Je="["+Gt+"]?",en="(?:"+Qt+"(?:"+[Yt,We,Ze].join("|")+")"+Je+Be+")*",rn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nn=Je+Be+en,an="(?:"+[Jt,We,Ze].join("|")+")"+nn,un=RegExp([R+"?"+Fe+"+"+Ve+"(?="+[_e,R,"$"].join("|")+")",Xt+"+"+Ge+"(?="+[_e,R+He,"$"].join("|")+")",R+"?"+He+"+"+Ve,R+"+"+Ge,tn,rn,Ee,an].join("|"),"g");function sn(e){return e.match(un)||[]}Ke.exports=sn});var Qe=m((Mi,Ye)=>{var on=qe(),ln=Ne(),dn=N(),fn=$e();function mn(e,r,t){return e=dn(e),r=t?void 0:r,r===void 0?ln(e)?fn(e):on(e):e.match(r)||[]}Ye.exports=mn});var er=m((Ni,Xe)=>{var cn=V(),gn=Ae(),pn=Qe(),hn="['\u2019]",bn=RegExp(hn,"g");function vn(e){return function(r){return cn(pn(gn(r).replace(bn,"")),e,"")}}Xe.exports=vn});var tr=m((Li,rr)=>{function xn(e,r,t){var s=-1,o=e.length;r<0&&(r=-r>o?0:o+r),t=t>o?o:t,t<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var g=Array(o);++s<o;)g[s]=e[s+r];return g}rr.exports=xn});var ir=m((ji,nr)=>{var yn=tr();function Tn(e,r,t){var s=e.length;return t=t===void 0?s:t,!r&&t>=s?e:yn(e,r,t)}nr.exports=Tn});var I=m((zi,ar)=>{var wn="\\ud800-\\udfff",Pn="\\u0300-\\u036f",Cn="\\ufe20-\\ufe2f",Rn="\\u20d0-\\u20ff",Sn=Pn+Cn+Rn,An="\\ufe0e\\ufe0f",On="\\u200d",qn=RegExp("["+On+wn+Sn+An+"]");function Mn(e){return qn.test(e)}ar.exports=Mn});var sr=m((ki,ur)=>{function Nn(e){return e.split("")}ur.exports=Nn});var pr=m((Ii,gr)=>{var or="\\ud800-\\udfff",Ln="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",kn=Ln+jn+zn,In="\\ufe0e\\ufe0f",Un="["+or+"]",U="["+kn+"]",_="\\ud83c[\\udffb-\\udfff]",_n="(?:"+U+"|"+_+")",lr="[^"+or+"]",dr="(?:\\ud83c[\\udde6-\\uddff]){2}",fr="[\\ud800-\\udbff][\\udc00-\\udfff]",En="\\u200d",mr=_n+"?",cr="["+In+"]?",Fn="(?:"+En+"(?:"+[lr,dr,fr].join("|")+")"+cr+mr+")*",Dn=cr+mr+Fn,Wn="(?:"+[lr+U+"?",U,dr,fr,Un].join("|")+")",Zn=RegExp(_+"(?="+_+")|"+Wn+Dn,"g");function Hn(e){return e.match(Zn)||[]}gr.exports=Hn});var br=m((Ui,hr)=>{var Vn=sr(),Gn=I(),Bn=pr();function Jn(e){return Gn(e)?Bn(e):Vn(e)}hr.exports=Jn});var xr=m((_i,vr)=>{var Kn=ir(),$n=I(),Yn=br(),Qn=N();function Xn(e){return function(r){r=Qn(r);var t=$n(r)?Yn(r):void 0,s=t?t[0]:r.charAt(0),o=t?Kn(t,1).join(""):r.slice(1);return s[e]()+o}}vr.exports=Xn});var Tr=m((Ei,yr)=>{var ei=xr(),ri=ei("toUpperCase");yr.exports=ri});var Pr=m((Fi,wr)=>{var ti=er(),ni=Tr(),ii=ti(function(e,r,t){return e+(t?" ":"")+ni(r)});wr.exports=ii});var Mr=m((j,qr)=>{"use strict";var Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Or(j))==="object"?qr.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},s=function(n){return n!==n},o=function(n){return isFinite(n)&&!s(parseFloat(n))},g=function(n){var i=Object.prototype.toString.call(n);return i==="[object Array]"},l={intword:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return l.compactInteger(n,a)},compactInteger:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];i=Math.max(i,0);var a=parseInt(n,10),d=a<0?"-":"",f=Math.abs(a),c=String(f),y=c.length,b=[13,10,7,4],T=["T","B","M","k"];if(f<1e3)return""+d+c;if(y>b[0]+3)return a.toExponential(i).replace("e+","x10^");for(var v=void 0,x=0;x<b.length;x++){var w=b[x];if(y>=w){v=w;break}}var h=y-v+1,p=c.split(""),P=p.slice(0,h),Lr=p.slice(h,h+i+1),E=P.join(""),A=Lr.join("");A.length<i&&(A+=""+Array(i-A.length+1).join("0"));var z=void 0;if(i===0)z=""+d+E+T[b.indexOf(v)];else{var jr=Number(E+"."+A).toFixed(i);z=""+d+jr+T[b.indexOf(v)]}return z},intComma:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return l.formatNumber(n,i)},intcomma:function(){return l.intComma.apply(l,arguments)},fileSize:function(n){var i=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var a in r)if(r.hasOwnProperty(a)){var d=r[a];if(n>=d)return l.formatNumber(n/d,i,"")+" "+a+"B"}return n>=1024?l.formatNumber(n/1024,0)+" KB":l.formatNumber(n,0)+l.pluralize(n," byte")},filesize:function(){return l.fileSize.apply(l,arguments)},formatNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1],a=arguments.length<=2||arguments[2]===void 0?",":arguments[2],d=arguments.length<=3||arguments[3]===void 0?".":arguments[3],f=function(h,p,P){return P?h.substr(0,P)+p:""},c=function(h,p,P){return h.substr(P).replace(/(\d{3})(?=\d)/g,"$1"+p)},y=function(h,p,P){return P?p+l.toFixed(Math.abs(h),P).split(".")[1]:""},b=l.normalizePrecision(i),T=n<0&&"-"||"",v=String(parseInt(l.toFixed(Math.abs(n||0),b),10)),x=v.length>3?v.length%3:0;return T+f(v,a,x)+c(v,a,x)+y(n,d,b)},toFixed:function(n,i){i=t(i)?i:l.normalizePrecision(i,0);var a=Math.pow(10,i);return(Math.round(n*a)/a).toFixed(i)},normalizePrecision:function(n,i){return n=Math.round(Math.abs(n)),s(n)?i:n},ordinal:function(n){var i=parseInt(n,10);if(i===0)return n;var a=i%100;if([11,12,13].indexOf(a)>=0)return i+"th";var d=i%10,f=void 0;switch(d){case 1:f="st";break;case 2:f="nd";break;case 3:f="rd";break;default:f="th"}return""+i+f},times:function(n){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(o(n)&&n>=0){var a=parseFloat(n),d=["never","once","twice"];if(t(i[a]))return String(i[a]);var f=t(d[a])&&d[a].toString();return f||a.toString()+" times"}return null},pluralize:function(n,i,a){return t(n)&&t(i)?(a=t(a)?a:i+"s",parseInt(n,10)===1?i:a):null},truncate:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>i?n.substring(0,i-a.length)+a:n},truncateWords:function(n,i){for(var a=n.split(" "),d="",f=0;f<i;)t(a[f])&&(d+=a[f]+" "),f++;return a.length>i?d+"...":null},truncatewords:function(){return l.truncateWords.apply(l,arguments)},boundedNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],d=void 0;return o(n)&&o(i)&&n>i&&(d=i+a),(d||n).toString()},truncatenumber:function(){return l.boundedNumber.apply(l,arguments)},oxford:function(n,i,a){var d=n.length,f=void 0;if(d<2)return String(n);if(d===2)return n.join(" and ");if(t(i)&&d>i){var c=d-i;f=i,a=t(a)?a:", and "+c+" "+l.pluralize(c,"other")}else f=-1,a=", and "+n[d-1];return n.slice(0,f).join(", ")+a},dictionary:function(n){var i=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],a=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],d="";if(t(n)&&(typeof n=="undefined"?"undefined":Or(n))==="object"&&!g(n)){var f=[];for(var c in n)if(n.hasOwnProperty(c)){var y=n[c];f.push(""+c+i+y)}return f.join(a)}return d},frequency:function(n,i){if(!g(n))return null;var a=n.length,d=l.times(a);return a===0?d+" "+i:i+" "+d},pace:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||i===0)return"No "+l.pluralize(0,a);for(var d="Approximately",f=void 0,c=void 0,y=n/i,b=0;b<e.length;++b){var T=e[b];if(c=y*T.value,c>1){f=T.name;break}}f||(d="Less than",c=1,f=e[e.length-1].name);var v=Math.round(c);return a=l.pluralize(v,a),d+" "+v+" "+a+" per "+f},nl2br:function(n){var i=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,i)},br2nl:function(n){var i=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,i)},capitalize:function(n){var i=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(i?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(i){return i.toUpperCase()})},titleCase:function(n){var i=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,a=/\S+[A-Z]+\S*/,d=/\s+/,f=/-/,c=void 0;return c=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],v=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],x=[],w=b.split(T?f:d),h=0;h<w.length;++h){var p=w[h];if(p.indexOf("-")!==-1){x.push(c(p,!0,h===0||h===w.length-1));continue}if(v&&(h===0||h===w.length-1)){x.push(a.test(p)?p:l.capitalize(p));continue}a.test(p)?x.push(p):i.test(p)?x.push(p.toLowerCase()):x.push(l.capitalize(p))}return x.join(T?"-":" ")},c(n)},titlecase:function(){return l.titleCase.apply(l,arguments)}};return l})});var Cr=Z(Pr());function Rr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Rr):e}function ai(e,r){return k(this,null,function*(){var u;let{data:{key:t,params:s}}=e,o,g;try{o=yield r(...s)}catch(n){o=void 0;try{g=n.toString()}catch(i){g="Exception can't be stringified."}}let l={key:t};o!==void 0&&(o=Rr(o),l.result={type:"string",value:o}),g!==void 0&&(l.error=g),((u=e.source)==null?void 0:u.postMessage).call(u,l,"*")})}function ui(e){return typeof window!="undefined"&&window.addEventListener("message",r=>ai(r,e.run)),q(C({},e),{json:JSON.stringify(oi(e),null,2)})}var si=`
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
    `,Sr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function oi(e){let{name:r,category:t,released:s,description:o,author:g,result:l,params:u,about:n,video:i}=e,{icon:a=Sr}=e;return a==="glide"&&(a=si),{name:r,category:t,released:s,description:o,author:g,result:l,about:n,icon:a,video:i,params:Object.entries(u).map(([d,f])=>C({name:d},f))}}var li={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Sr,about:void 0,video:void 0,tests:[],run(){return k(this,null,function*(){})}},L=class{constructor(r={},t=[]){this.definition=C(C({},li),r),this.requiredParams=[...t]}with(r,t=[]){return new L(C(C({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:s=[]}=this.definition;return this.with({tests:[...s,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:s=[]}=this.definition;return this.with({tests:[...s,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,s){return s===void 0&&(s=(0,Cr.default)(t)),this.with({params:q(C({},this.definition.params),{[t]:{type:r,displayName:s}})})}withRequiredParam(r,t,s){return this.withParam(r,t,s).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,s=this.requiredParams,o=Object.keys(t);function g(...l){let u={};if(l.forEach(({value:n},i)=>{u[o[i]]=n}),!s.some(n=>u[n]===void 0))return r(u)}return ui(q(C({},this.definition),{run:g}))}};function Ar(e){return new L({name:e})}var Nr=Z(Mr()),Zi=Ar("Ordinal").withCategory("Number").withReleased("direct").withDescription("Converts an integer to its ordinal as a string. e.g. 22nd").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withTest({number:22},"22nd").run(({number:e})=>Nr.default.ordinal(e));})();
//# sourceMappingURL=index.js.map
