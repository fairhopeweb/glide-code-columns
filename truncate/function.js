var jr=Object.create;var M=Object.defineProperty,zr=Object.defineProperties,Ur=Object.getOwnPropertyDescriptor,_r=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,Er=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty,kr=Object.prototype.propertyIsEnumerable;var D=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,S=(e,r)=>{for(var t in r||(r={}))W.call(r,t)&&D(e,t,r[t]);if(F)for(var t of F(r))kr.call(r,t)&&D(e,t,r[t]);return e},R=(e,r)=>zr(e,_r(r)),Fr=e=>M(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Wr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Ir(r))!W.call(e,o)&&o!=="default"&&M(e,o,{get:()=>r[o],enumerable:!(t=Ur(r,o))||t.enumerable});return e},Z=e=>Wr(Fr(M(e!=null?jr(Er(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var H=(e,r,t)=>new Promise((o,l)=>{var h=n=>{try{i(t.next(n))}catch(a){l(a)}},f=n=>{try{i(t.throw(n))}catch(a){l(a)}},i=n=>n.done?o(n.value):Promise.resolve(n.value).then(h,f);i((t=t.apply(e,r)).next())});var V=c((fa,G)=>{function Dr(e,r,t,o){var l=-1,h=e==null?0:e.length;for(o&&h&&(t=e[++l]);++l<h;)t=r(t,e[l],l,e);return t}G.exports=Dr});var J=c((la,B)=>{function Zr(e){return function(r){return e==null?void 0:e[r]}}B.exports=Zr});var $=c((da,K)=>{var Hr=J(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Vr=Hr(Gr);K.exports=Vr});var Q=c((ca,Y)=>{var Br=typeof global=="object"&&global&&global.Object===Object&&global;Y.exports=Br});var ee=c((ma,X)=>{var Jr=Q(),Kr=typeof self=="object"&&self&&self.Object===Object&&self,$r=Jr||Kr||Function("return this")();X.exports=$r});var q=c((ga,re)=>{var Yr=ee(),Qr=Yr.Symbol;re.exports=Qr});var te=c((pa,ne)=>{function Xr(e,r){for(var t=-1,o=e==null?0:e.length,l=Array(o);++t<o;)l[t]=r(e[t],t,e);return l}ne.exports=Xr});var ue=c((ha,ae)=>{var en=Array.isArray;ae.exports=en});var fe=c((ba,se)=>{var ie=q(),oe=Object.prototype,rn=oe.hasOwnProperty,nn=oe.toString,A=ie?ie.toStringTag:void 0;function tn(e){var r=rn.call(e,A),t=e[A];try{e[A]=void 0;var o=!0}catch(h){}var l=nn.call(e);return o&&(r?e[A]=t:delete e[A]),l}se.exports=tn});var de=c((xa,le)=>{var an=Object.prototype,un=an.toString;function on(e){return un.call(e)}le.exports=on});var pe=c((va,ge)=>{var ce=q(),sn=fe(),fn=de(),ln="[object Null]",dn="[object Undefined]",me=ce?ce.toStringTag:void 0;function cn(e){return e==null?e===void 0?dn:ln:me&&me in Object(e)?sn(e):fn(e)}ge.exports=cn});var be=c((ya,he)=>{function mn(e){return e!=null&&typeof e=="object"}he.exports=mn});var ve=c((Ta,xe)=>{var gn=pe(),pn=be(),hn="[object Symbol]";function bn(e){return typeof e=="symbol"||pn(e)&&gn(e)==hn}xe.exports=bn});var Pe=c((Ca,we)=>{var ye=q(),xn=te(),vn=ue(),yn=ve(),Tn=1/0,Te=ye?ye.prototype:void 0,Ce=Te?Te.toString:void 0;function Se(e){if(typeof e=="string")return e;if(vn(e))return xn(e,Se)+"";if(yn(e))return Ce?Ce.call(e):"";var r=e+"";return r=="0"&&1/e==-Tn?"-0":r}we.exports=Se});var N=c((Sa,Re)=>{var Cn=Pe();function Sn(e){return e==null?"":Cn(e)}Re.exports=Sn});var Oe=c((wa,Ae)=>{var wn=$(),Pn=N(),Rn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,An="\\u0300-\\u036f",On="\\ufe20-\\ufe2f",Mn="\\u20d0-\\u20ff",qn=An+On+Mn,Nn="["+qn+"]",Ln=RegExp(Nn,"g");function jn(e){return e=Pn(e),e&&e.replace(Rn,wn).replace(Ln,"")}Ae.exports=jn});var qe=c((Pa,Me)=>{var zn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Un(e){return e.match(zn)||[]}Me.exports=Un});var Le=c((Ra,Ne)=>{var _n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function In(e){return _n.test(e)}Ne.exports=In});var Ye=c((Aa,$e)=>{var je="\\ud800-\\udfff",En="\\u0300-\\u036f",kn="\\ufe20-\\ufe2f",Fn="\\u20d0-\\u20ff",Wn=En+kn+Fn,ze="\\u2700-\\u27bf",Ue="a-z\\xdf-\\xf6\\xf8-\\xff",Dn="\\xac\\xb1\\xd7\\xf7",Zn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Hn="\\u2000-\\u206f",Gn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_e="A-Z\\xc0-\\xd6\\xd8-\\xde",Vn="\\ufe0e\\ufe0f",Ie=Dn+Zn+Hn+Gn,Ee="['\u2019]",ke="["+Ie+"]",Bn="["+Wn+"]",Fe="\\d+",Jn="["+ze+"]",We="["+Ue+"]",De="[^"+je+Ie+Fe+ze+Ue+_e+"]",Kn="\\ud83c[\\udffb-\\udfff]",$n="(?:"+Bn+"|"+Kn+")",Yn="[^"+je+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",He="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+_e+"]",Qn="\\u200d",Ge="(?:"+We+"|"+De+")",Xn="(?:"+P+"|"+De+")",Ve="(?:"+Ee+"(?:d|ll|m|re|s|t|ve))?",Be="(?:"+Ee+"(?:D|LL|M|RE|S|T|VE))?",Je=$n+"?",Ke="["+Vn+"]?",et="(?:"+Qn+"(?:"+[Yn,Ze,He].join("|")+")"+Ke+Je+")*",rt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tt=Ke+Je+et,at="(?:"+[Jn,Ze,He].join("|")+")"+tt,ut=RegExp([P+"?"+We+"+"+Ve+"(?="+[ke,P,"$"].join("|")+")",Xn+"+"+Be+"(?="+[ke,P+Ge,"$"].join("|")+")",P+"?"+Ge+"+"+Ve,P+"+"+Be,nt,rt,Fe,at].join("|"),"g");function it(e){return e.match(ut)||[]}$e.exports=it});var Xe=c((Oa,Qe)=>{var ot=qe(),st=Le(),ft=N(),lt=Ye();function dt(e,r,t){return e=ft(e),r=t?void 0:r,r===void 0?st(e)?lt(e):ot(e):e.match(r)||[]}Qe.exports=dt});var rr=c((Ma,er)=>{var ct=V(),mt=Oe(),gt=Xe(),pt="['\u2019]",ht=RegExp(pt,"g");function bt(e){return function(r){return ct(gt(mt(r).replace(ht,"")),e,"")}}er.exports=bt});var tr=c((qa,nr)=>{function xt(e,r,t){var o=-1,l=e.length;r<0&&(r=-r>l?0:l+r),t=t>l?l:t,t<0&&(t+=l),l=r>t?0:t-r>>>0,r>>>=0;for(var h=Array(l);++o<l;)h[o]=e[o+r];return h}nr.exports=xt});var ur=c((Na,ar)=>{var vt=tr();function yt(e,r,t){var o=e.length;return t=t===void 0?o:t,!r&&t>=o?e:vt(e,r,t)}ar.exports=yt});var U=c((La,ir)=>{var Tt="\\ud800-\\udfff",Ct="\\u0300-\\u036f",St="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",Pt=Ct+St+wt,Rt="\\ufe0e\\ufe0f",At="\\u200d",Ot=RegExp("["+At+Tt+Pt+Rt+"]");function Mt(e){return Ot.test(e)}ir.exports=Mt});var sr=c((ja,or)=>{function qt(e){return e.split("")}or.exports=qt});var hr=c((za,pr)=>{var fr="\\ud800-\\udfff",Nt="\\u0300-\\u036f",Lt="\\ufe20-\\ufe2f",jt="\\u20d0-\\u20ff",zt=Nt+Lt+jt,Ut="\\ufe0e\\ufe0f",_t="["+fr+"]",_="["+zt+"]",I="\\ud83c[\\udffb-\\udfff]",It="(?:"+_+"|"+I+")",lr="[^"+fr+"]",dr="(?:\\ud83c[\\udde6-\\uddff]){2}",cr="[\\ud800-\\udbff][\\udc00-\\udfff]",Et="\\u200d",mr=It+"?",gr="["+Ut+"]?",kt="(?:"+Et+"(?:"+[lr,dr,cr].join("|")+")"+gr+mr+")*",Ft=gr+mr+kt,Wt="(?:"+[lr+_+"?",_,dr,cr,_t].join("|")+")",Dt=RegExp(I+"(?="+I+")|"+Wt+Ft,"g");function Zt(e){return e.match(Dt)||[]}pr.exports=Zt});var xr=c((Ua,br)=>{var Ht=sr(),Gt=U(),Vt=hr();function Bt(e){return Gt(e)?Vt(e):Ht(e)}br.exports=Bt});var yr=c((_a,vr)=>{var Jt=ur(),Kt=U(),$t=xr(),Yt=N();function Qt(e){return function(r){r=Yt(r);var t=Kt(r)?$t(r):void 0,o=t?t[0]:r.charAt(0),l=t?Jt(t,1).join(""):r.slice(1);return o[e]()+l}}vr.exports=Qt});var Cr=c((Ia,Tr)=>{var Xt=yr(),ea=Xt("toUpperCase");Tr.exports=ea});var wr=c((Ea,Sr)=>{var ra=rr(),na=Cr(),ta=ra(function(e,r,t){return e+(t?" ":"")+na(r)});Sr.exports=ta});var Mr=c((j,Or)=>{"use strict";var Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Ar(j))==="object"?Or.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},o=function(n){return n!==n},l=function(n){return isFinite(n)&&!o(parseFloat(n))},h=function(n){var a=Object.prototype.toString.call(n);return a==="[object Array]"},f={intword:function(n,a){var u=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(n,u)},compactInteger:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];a=Math.max(a,0);var u=parseInt(n,10),s=u<0?"-":"",d=Math.abs(u),m=String(d),y=m.length,b=[13,10,7,4],T=["T","B","M","k"];if(d<1e3)return""+s+m;if(y>b[0]+3)return u.toExponential(a).replace("e+","x10^");for(var x=void 0,v=0;v<b.length;v++){var C=b[v];if(y>=C){x=C;break}}var p=y-x+1,g=m.split(""),w=g.slice(0,p),Nr=g.slice(p,p+a+1),k=w.join(""),O=Nr.join("");O.length<a&&(O+=""+Array(a-O.length+1).join("0"));var z=void 0;if(a===0)z=""+s+k+T[b.indexOf(x)];else{var Lr=Number(k+"."+O).toFixed(a);z=""+s+Lr+T[b.indexOf(x)]}return z},intComma:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(n,a)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(n){var a=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var u in r)if(r.hasOwnProperty(u)){var s=r[u];if(n>=s)return f.formatNumber(n/s,a,"")+" "+u+"B"}return n>=1024?f.formatNumber(n/1024,0)+" KB":f.formatNumber(n,0)+f.pluralize(n," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1],u=arguments.length<=2||arguments[2]===void 0?",":arguments[2],s=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(p,g,w){return w?p.substr(0,w)+g:""},m=function(p,g,w){return p.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+g)},y=function(p,g,w){return w?g+f.toFixed(Math.abs(p),w).split(".")[1]:""},b=f.normalizePrecision(a),T=n<0&&"-"||"",x=String(parseInt(f.toFixed(Math.abs(n||0),b),10)),v=x.length>3?x.length%3:0;return T+d(x,u,v)+m(x,u,v)+y(n,s,b)},toFixed:function(n,a){a=t(a)?a:f.normalizePrecision(a,0);var u=Math.pow(10,a);return(Math.round(n*u)/u).toFixed(a)},normalizePrecision:function(n,a){return n=Math.round(Math.abs(n)),o(n)?a:n},ordinal:function(n){var a=parseInt(n,10);if(a===0)return n;var u=a%100;if([11,12,13].indexOf(u)>=0)return a+"th";var s=a%10,d=void 0;switch(s){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+a+d},times:function(n){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(l(n)&&n>=0){var u=parseFloat(n),s=["never","once","twice"];if(t(a[u]))return String(a[u]);var d=t(s[u])&&s[u].toString();return d||u.toString()+" times"}return null},pluralize:function(n,a,u){return t(n)&&t(a)?(u=t(u)?u:a+"s",parseInt(n,10)===1?a:u):null},truncate:function(n){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>a?n.substring(0,a-u.length)+u:n},truncateWords:function(n,a){for(var u=n.split(" "),s="",d=0;d<a;)t(u[d])&&(s+=u[d]+" "),d++;return u.length>a?s+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(n){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],s=void 0;return l(n)&&l(a)&&n>a&&(s=a+u),(s||n).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(n,a,u){var s=n.length,d=void 0;if(s<2)return String(n);if(s===2)return n.join(" and ");if(t(a)&&s>a){var m=s-a;d=a,u=t(u)?u:", and "+m+" "+f.pluralize(m,"other")}else d=-1,u=", and "+n[s-1];return n.slice(0,d).join(", ")+u},dictionary:function(n){var a=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],u=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],s="";if(t(n)&&(typeof n=="undefined"?"undefined":Ar(n))==="object"&&!h(n)){var d=[];for(var m in n)if(n.hasOwnProperty(m)){var y=n[m];d.push(""+m+a+y)}return d.join(u)}return s},frequency:function(n,a){if(!h(n))return null;var u=n.length,s=f.times(u);return u===0?s+" "+a:a+" "+s},pace:function(n,a){var u=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||a===0)return"No "+f.pluralize(0,u);for(var s="Approximately",d=void 0,m=void 0,y=n/a,b=0;b<e.length;++b){var T=e[b];if(m=y*T.value,m>1){d=T.name;break}}d||(s="Less than",m=1,d=e[e.length-1].name);var x=Math.round(m);return u=f.pluralize(x,u),s+" "+x+" "+u+" per "+d},nl2br:function(n){var a=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,a)},br2nl:function(n){var a=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,a)},capitalize:function(n){var a=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(a?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},titleCase:function(n){var a=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,u=/\S+[A-Z]+\S*/,s=/\s+/,d=/-/,m=void 0;return m=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],x=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],v=[],C=b.split(T?d:s),p=0;p<C.length;++p){var g=C[p];if(g.indexOf("-")!==-1){v.push(m(g,!0,p===0||p===C.length-1));continue}if(x&&(p===0||p===C.length-1)){v.push(u.test(g)?g:f.capitalize(g));continue}u.test(g)?v.push(g):a.test(g)?v.push(g.toLowerCase()):v.push(f.capitalize(g))}return v.join(T?"-":" ")},m(n)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var E=Z(wr());function aa(e){return R(S({},e),{json:JSON.stringify(ia(e),null,2)})}var ua=`
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
    `,Pr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function ia(e){let{name:r,category:t,description:o,author:l,result:h,params:f,about:i,video:n}=e,{icon:a=Pr}=e;return a==="glide"&&(a=ua),{name:r,category:t,description:o,author:l,result:h,about:i,icon:a,video:n,params:Object.entries(f).map(([u,s])=>S({name:u},s))}}var oa={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Pr,about:void 0,video:void 0,run(){return H(this,null,function*(){})}},L=class{constructor(r={},t=[]){this.definition=S(S({},oa),r),this.requiredParams=[...t]}with(r,t=[]){return new L(S(S({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withDescription(r){return this.with({description:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,o){return o===void 0&&(o=(0,E.default)(t)),this.with({params:R(S({},this.definition.params),{[t]:{type:r,displayName:o}})})}withRequiredParam(r,t,o){return o===void 0&&(o=(0,E.default)(t)),this.with({params:R(S({},this.definition.params),{[t]:{type:r,displayName:o}})},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,o=this.requiredParams,l=Object.keys(t);function h(...f){let i={};if(f.forEach(({value:n},a)=>{i[l[a]]=n}),!o.some(n=>i[n]===void 0))return r(i)}return aa(R(S({},this.definition),{run:h}))}};function Rr(e,r){return new L({name:e,category:r})}var qr=Z(Mr()),Wa=Rr("Truncate Text","Text").withDescription('Truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("\u2026").').withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredStringParam("string").withNumberParam("length").withStringParam("ending").withExample({string:"long text is good for you",length:19}).run(({string:e,length:r,ending:t})=>qr.default.truncate(e,r,t));export{Wa as default};
//# sourceMappingURL=function.js.map
