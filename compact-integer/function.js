var zr=Object.create;var A=Object.defineProperty,Ir=Object.defineProperties,Lr=Object.getOwnPropertyDescriptor,Ur=Object.getOwnPropertyDescriptors,Vr=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,Dr=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?A(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,C=(r,e)=>{for(var t in e||(e={}))H.call(e,t)&&_(r,t,e[t]);if(F)for(var t of F(e))Fr.call(e,t)&&_(r,t,e[t]);return r},k=(r,e)=>Ir(r,Ur(e)),Hr=r=>A(r,"__esModule",{value:!0});var c=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var _r=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of Vr(e))!H.call(r,u)&&u!=="default"&&A(r,u,{get:()=>e[u],enumerable:!(t=Lr(e,u))||t.enumerable});return r},E=r=>_r(Hr(A(r!=null?zr(Dr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var W=(r,e,t)=>new Promise((u,m)=>{var p=n=>{try{s(t.next(n))}catch(i){m(i)}},l=n=>{try{s(t.throw(n))}catch(i){m(i)}},s=n=>n.done?u(n.value):Promise.resolve(n.value).then(p,l);s((t=t.apply(r,e)).next())});var G=c((yi,B)=>{function Er(r,e,t,u){var m=-1,p=r==null?0:r.length;for(u&&p&&(t=r[++m]);++m<p;)t=e(t,r[m],m,r);return t}B.exports=Er});var J=c((Ti,Z)=>{function Wr(r){return function(e){return r==null?void 0:r[e]}}Z.exports=Wr});var Y=c((Pi,$)=>{var Br=J(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Zr=Br(Gr);$.exports=Zr});var Q=c((Ci,K)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;K.exports=Jr});var ee=c((Ri,X)=>{var $r=Q(),Yr=typeof self=="object"&&self&&self.Object===Object&&self,Kr=$r||Yr||Function("return this")();X.exports=Kr});var q=c((Si,re)=>{var Qr=ee(),Xr=Qr.Symbol;re.exports=Xr});var ne=c((Mi,te)=>{function et(r,e){for(var t=-1,u=r==null?0:r.length,m=Array(u);++t<u;)m[t]=e(r[t],t,r);return m}te.exports=et});var ae=c((Ai,ie)=>{var rt=Array.isArray;ie.exports=rt});var le=c((ki,oe)=>{var ue=q(),se=Object.prototype,tt=se.hasOwnProperty,nt=se.toString,S=ue?ue.toStringTag:void 0;function it(r){var e=tt.call(r,S),t=r[S];try{r[S]=void 0;var u=!0}catch(p){}var m=nt.call(r);return u&&(e?r[S]=t:delete r[S]),m}oe.exports=it});var me=c((qi,de)=>{var at=Object.prototype,ut=at.toString;function st(r){return ut.call(r)}de.exports=st});var he=c((Oi,ge)=>{var ce=q(),ot=le(),lt=me(),dt="[object Null]",mt="[object Undefined]",fe=ce?ce.toStringTag:void 0;function ct(r){return r==null?r===void 0?mt:dt:fe&&fe in Object(r)?ot(r):lt(r)}ge.exports=ct});var ve=c((Ni,pe)=>{function ft(r){return r!=null&&typeof r=="object"}pe.exports=ft});var xe=c((ji,be)=>{var gt=he(),ht=ve(),pt="[object Symbol]";function vt(r){return typeof r=="symbol"||ht(r)&&gt(r)==pt}be.exports=vt});var Re=c((zi,Ce)=>{var we=q(),bt=ne(),xt=ae(),wt=xe(),yt=1/0,ye=we?we.prototype:void 0,Te=ye?ye.toString:void 0;function Pe(r){if(typeof r=="string")return r;if(xt(r))return bt(r,Pe)+"";if(wt(r))return Te?Te.call(r):"";var e=r+"";return e=="0"&&1/r==-yt?"-0":e}Ce.exports=Pe});var O=c((Ii,Se)=>{var Tt=Re();function Pt(r){return r==null?"":Tt(r)}Se.exports=Pt});var Ae=c((Li,Me)=>{var Ct=Y(),Rt=O(),St=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Mt="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",kt="\\u20d0-\\u20ff",qt=Mt+At+kt,Ot="["+qt+"]",Nt=RegExp(Ot,"g");function jt(r){return r=Rt(r),r&&r.replace(St,Ct).replace(Nt,"")}Me.exports=jt});var qe=c((Ui,ke)=>{var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function It(r){return r.match(zt)||[]}ke.exports=It});var Ne=c((Vi,Oe)=>{var Lt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ut(r){return Lt.test(r)}Oe.exports=Ut});var Ke=c((Di,Ye)=>{var je="\\ud800-\\udfff",Vt="\\u0300-\\u036f",Dt="\\ufe20-\\ufe2f",Ft="\\u20d0-\\u20ff",Ht=Vt+Dt+Ft,ze="\\u2700-\\u27bf",Ie="a-z\\xdf-\\xf6\\xf8-\\xff",_t="\\xac\\xb1\\xd7\\xf7",Et="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Wt="\\u2000-\\u206f",Bt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Le="A-Z\\xc0-\\xd6\\xd8-\\xde",Gt="\\ufe0e\\ufe0f",Ue=_t+Et+Wt+Bt,Ve="['\u2019]",De="["+Ue+"]",Zt="["+Ht+"]",Fe="\\d+",Jt="["+ze+"]",He="["+Ie+"]",_e="[^"+je+Ue+Fe+ze+Ie+Le+"]",$t="\\ud83c[\\udffb-\\udfff]",Yt="(?:"+Zt+"|"+$t+")",Kt="[^"+je+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",We="[\\ud800-\\udbff][\\udc00-\\udfff]",R="["+Le+"]",Qt="\\u200d",Be="(?:"+He+"|"+_e+")",Xt="(?:"+R+"|"+_e+")",Ge="(?:"+Ve+"(?:d|ll|m|re|s|t|ve))?",Ze="(?:"+Ve+"(?:D|LL|M|RE|S|T|VE))?",Je=Yt+"?",$e="["+Gt+"]?",en="(?:"+Qt+"(?:"+[Kt,Ee,We].join("|")+")"+$e+Je+")*",rn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nn=$e+Je+en,an="(?:"+[Jt,Ee,We].join("|")+")"+nn,un=RegExp([R+"?"+He+"+"+Ge+"(?="+[De,R,"$"].join("|")+")",Xt+"+"+Ze+"(?="+[De,R+Be,"$"].join("|")+")",R+"?"+Be+"+"+Ge,R+"+"+Ze,tn,rn,Fe,an].join("|"),"g");function sn(r){return r.match(un)||[]}Ye.exports=sn});var Xe=c((Fi,Qe)=>{var on=qe(),ln=Ne(),dn=O(),mn=Ke();function cn(r,e,t){return r=dn(r),e=t?void 0:e,e===void 0?ln(r)?mn(r):on(r):r.match(e)||[]}Qe.exports=cn});var rr=c((Hi,er)=>{var fn=G(),gn=Ae(),hn=Xe(),pn="['\u2019]",vn=RegExp(pn,"g");function bn(r){return function(e){return fn(hn(gn(e).replace(vn,"")),r,"")}}er.exports=bn});var nr=c((_i,tr)=>{function xn(r,e,t){var u=-1,m=r.length;e<0&&(e=-e>m?0:m+e),t=t>m?m:t,t<0&&(t+=m),m=e>t?0:t-e>>>0,e>>>=0;for(var p=Array(m);++u<m;)p[u]=r[u+e];return p}tr.exports=xn});var ar=c((Ei,ir)=>{var wn=nr();function yn(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:wn(r,e,t)}ir.exports=yn});var I=c((Wi,ur)=>{var Tn="\\ud800-\\udfff",Pn="\\u0300-\\u036f",Cn="\\ufe20-\\ufe2f",Rn="\\u20d0-\\u20ff",Sn=Pn+Cn+Rn,Mn="\\ufe0e\\ufe0f",An="\\u200d",kn=RegExp("["+An+Tn+Sn+Mn+"]");function qn(r){return kn.test(r)}ur.exports=qn});var or=c((Bi,sr)=>{function On(r){return r.split("")}sr.exports=On});var pr=c((Gi,hr)=>{var lr="\\ud800-\\udfff",Nn="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",In=Nn+jn+zn,Ln="\\ufe0e\\ufe0f",Un="["+lr+"]",L="["+In+"]",U="\\ud83c[\\udffb-\\udfff]",Vn="(?:"+L+"|"+U+")",dr="[^"+lr+"]",mr="(?:\\ud83c[\\udde6-\\uddff]){2}",cr="[\\ud800-\\udbff][\\udc00-\\udfff]",Dn="\\u200d",fr=Vn+"?",gr="["+Ln+"]?",Fn="(?:"+Dn+"(?:"+[dr,mr,cr].join("|")+")"+gr+fr+")*",Hn=gr+fr+Fn,_n="(?:"+[dr+L+"?",L,mr,cr,Un].join("|")+")",En=RegExp(U+"(?="+U+")|"+_n+Hn,"g");function Wn(r){return r.match(En)||[]}hr.exports=Wn});var br=c((Zi,vr)=>{var Bn=or(),Gn=I(),Zn=pr();function Jn(r){return Gn(r)?Zn(r):Bn(r)}vr.exports=Jn});var wr=c((Ji,xr)=>{var $n=ar(),Yn=I(),Kn=br(),Qn=O();function Xn(r){return function(e){e=Qn(e);var t=Yn(e)?Kn(e):void 0,u=t?t[0]:e.charAt(0),m=t?$n(t,1).join(""):e.slice(1);return u[r]()+m}}xr.exports=Xn});var Tr=c(($i,yr)=>{var ei=wr(),ri=ei("toUpperCase");yr.exports=ri});var Cr=c((Yi,Pr)=>{var ti=rr(),ni=Tr(),ii=ti(function(r,e,t){return r+(t?" ":"")+ni(e)});Pr.exports=ii});var qr=c((j,kr)=>{"use strict";var Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol?"symbol":typeof r};(function(r,e){(typeof j=="undefined"?"undefined":Ar(j))==="object"?kr.exports=e():typeof define=="function"&&define.amd?define([],function(){return r.Humanize=e()}):r.Humanize=e()})(j,function(){var r=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],e={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},u=function(n){return n!==n},m=function(n){return isFinite(n)&&!u(parseFloat(n))},p=function(n){var i=Object.prototype.toString.call(n);return i==="[object Array]"},l={intword:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return l.compactInteger(n,a)},compactInteger:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];i=Math.max(i,0);var a=parseInt(n,10),o=a<0?"-":"",d=Math.abs(a),f=String(d),w=f.length,v=[13,10,7,4],y=["T","B","M","k"];if(d<1e3)return""+o+f;if(w>v[0]+3)return a.toExponential(i).replace("e+","x10^");for(var b=void 0,x=0;x<v.length;x++){var T=v[x];if(w>=T){b=T;break}}var h=w-b+1,g=f.split(""),P=g.slice(0,h),Nr=g.slice(h,h+i+1),D=P.join(""),M=Nr.join("");M.length<i&&(M+=""+Array(i-M.length+1).join("0"));var z=void 0;if(i===0)z=""+o+D+y[v.indexOf(b)];else{var jr=Number(D+"."+M).toFixed(i);z=""+o+jr+y[v.indexOf(b)]}return z},intComma:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return l.formatNumber(n,i)},intcomma:function(){return l.intComma.apply(l,arguments)},fileSize:function(n){var i=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var a in e)if(e.hasOwnProperty(a)){var o=e[a];if(n>=o)return l.formatNumber(n/o,i,"")+" "+a+"B"}return n>=1024?l.formatNumber(n/1024,0)+" KB":l.formatNumber(n,0)+l.pluralize(n," byte")},filesize:function(){return l.fileSize.apply(l,arguments)},formatNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?0:arguments[1],a=arguments.length<=2||arguments[2]===void 0?",":arguments[2],o=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(h,g,P){return P?h.substr(0,P)+g:""},f=function(h,g,P){return h.substr(P).replace(/(\d{3})(?=\d)/g,"$1"+g)},w=function(h,g,P){return P?g+l.toFixed(Math.abs(h),P).split(".")[1]:""},v=l.normalizePrecision(i),y=n<0&&"-"||"",b=String(parseInt(l.toFixed(Math.abs(n||0),v),10)),x=b.length>3?b.length%3:0;return y+d(b,a,x)+f(b,a,x)+w(n,o,v)},toFixed:function(n,i){i=t(i)?i:l.normalizePrecision(i,0);var a=Math.pow(10,i);return(Math.round(n*a)/a).toFixed(i)},normalizePrecision:function(n,i){return n=Math.round(Math.abs(n)),u(n)?i:n},ordinal:function(n){var i=parseInt(n,10);if(i===0)return n;var a=i%100;if([11,12,13].indexOf(a)>=0)return i+"th";var o=i%10,d=void 0;switch(o){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+i+d},times:function(n){var i=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(m(n)&&n>=0){var a=parseFloat(n),o=["never","once","twice"];if(t(i[a]))return String(i[a]);var d=t(o[a])&&o[a].toString();return d||a.toString()+" times"}return null},pluralize:function(n,i,a){return t(n)&&t(i)?(a=t(a)?a:i+"s",parseInt(n,10)===1?i:a):null},truncate:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>i?n.substring(0,i-a.length)+a:n},truncateWords:function(n,i){for(var a=n.split(" "),o="",d=0;d<i;)t(a[d])&&(o+=a[d]+" "),d++;return a.length>i?o+"...":null},truncatewords:function(){return l.truncateWords.apply(l,arguments)},boundedNumber:function(n){var i=arguments.length<=1||arguments[1]===void 0?100:arguments[1],a=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],o=void 0;return m(n)&&m(i)&&n>i&&(o=i+a),(o||n).toString()},truncatenumber:function(){return l.boundedNumber.apply(l,arguments)},oxford:function(n,i,a){var o=n.length,d=void 0;if(o<2)return String(n);if(o===2)return n.join(" and ");if(t(i)&&o>i){var f=o-i;d=i,a=t(a)?a:", and "+f+" "+l.pluralize(f,"other")}else d=-1,a=", and "+n[o-1];return n.slice(0,d).join(", ")+a},dictionary:function(n){var i=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],a=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],o="";if(t(n)&&(typeof n=="undefined"?"undefined":Ar(n))==="object"&&!p(n)){var d=[];for(var f in n)if(n.hasOwnProperty(f)){var w=n[f];d.push(""+f+i+w)}return d.join(a)}return o},frequency:function(n,i){if(!p(n))return null;var a=n.length,o=l.times(a);return a===0?o+" "+i:i+" "+o},pace:function(n,i){var a=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||i===0)return"No "+l.pluralize(0,a);for(var o="Approximately",d=void 0,f=void 0,w=n/i,v=0;v<r.length;++v){var y=r[v];if(f=w*y.value,f>1){d=y.name;break}}d||(o="Less than",f=1,d=r[r.length-1].name);var b=Math.round(f);return a=l.pluralize(b,a),o+" "+b+" "+a+" per "+d},nl2br:function(n){var i=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,i)},br2nl:function(n){var i=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,i)},capitalize:function(n){var i=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(i?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(i){return i.toUpperCase()})},titleCase:function(n){var i=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,a=/\S+[A-Z]+\S*/,o=/\s+/,d=/-/,f=void 0;return f=function(v){for(var y=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],b=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],x=[],T=v.split(y?d:o),h=0;h<T.length;++h){var g=T[h];if(g.indexOf("-")!==-1){x.push(f(g,!0,h===0||h===T.length-1));continue}if(b&&(h===0||h===T.length-1)){x.push(a.test(g)?g:l.capitalize(g));continue}a.test(g)?x.push(g):i.test(g)?x.push(g.toLowerCase()):x.push(l.capitalize(g))}return x.join(y?"-":" ")},f(n)},titlecase:function(){return l.titleCase.apply(l,arguments)}};return l})});var Sr=E(Cr());var ai=`
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
    `,ui=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,si=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Rr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,oi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,li=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,di=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,mi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,ci=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,pi={Glide:ai,"Machine Learning":gi,General:Rr,Array:oi,Number:si,Encoding:hi,Text:fi,"Data & APIs":ci,Image:li,Fun:di,"Date & Time":mi,Code:ui};function V({icon:r,category:e}){var t;return(t=r!=null?r:pi[e])!=null?t:Rr}function vi(r){return k(C({},r),{json:JSON.stringify(bi(r),null,2)})}function bi(r){let{name:e,category:t,released:u,description:m,author:p,result:l,params:s,about:n,video:i}=r,a=V(r);return{name:e,category:t,released:u,description:m,author:p,result:l,about:n,icon:a,video:i,params:Object.entries(s).map(([o,d])=>C({name:o},d))}}var xi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return W(this,null,function*(){})}},N=class{constructor(e={},t=[]){this.definition=C(C({},xi),e),this.requiredParams=[...t]}with(e,t=[]){return new N(C(C({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:V({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:u=[]}=this.definition;return this.with({tests:[...u,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:u=[]}=this.definition;return this.with({tests:[...u,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,u){return u===void 0&&(u=(0,Sr.default)(t)),this.with({params:k(C({},this.definition.params),{[t]:{type:e,displayName:u}})})}withRequiredParam(e,t,u){return this.withParam(e,t,u).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,u=this.requiredParams,m=Object.keys(t);function p(...l){let s={};if(l.forEach(({value:n},i)=>{s[m[i]]=n}),!u.some(n=>s[n]===void 0))return e(s)}return vi(k(C({},this.definition),{run:p}))}};function Mr(r){return new N({name:r})}var Or=E(qr()),ra=Mr("Abbreviate Number").withCategory("Number").withReleased("direct").withDescription("Converts an integer into its most compact representation.").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withNumberParam("decimals","Decimal Places").withTest({number:123456789},"123M").withTest({number:123456789,decimals:2},"123.46M").run(({number:r,decimals:e})=>Or.default.compactInteger(r,e));export{ra as default};
//# sourceMappingURL=function.js.map
