(()=>{var ut=Object.create;var z=Object.defineProperty,ot=Object.defineProperties,at=Object.getOwnPropertyDescriptor,st=Object.getOwnPropertyDescriptors,ft=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ct=Object.getPrototypeOf,rr=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var er=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t)=>{for(var n in t||(t={}))rr.call(t,n)&&er(e,n,t[n]);if(Q)for(var n of Q(t))lt.call(t,n)&&er(e,n,t[n]);return e},E=(e,t)=>ot(e,st(t)),dt=e=>z(e,"__esModule",{value:!0});var p=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var xt=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let f of ft(t))!rr.call(e,f)&&f!=="default"&&z(e,f,{get:()=>t[f],enumerable:!(n=at(t,f))||n.enumerable});return e},tr=e=>xt(dt(z(e!=null?ut(ct(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var W=(e,t,n)=>new Promise((f,l)=>{var x=i=>{try{r(n.next(i))}catch(a){l(a)}},s=i=>{try{r(n.throw(i))}catch(a){l(a)}},r=i=>i.done?f(i.value):Promise.resolve(i.value).then(x,s);r((n=n.apply(e,t)).next())});var ir=p((Wi,nr)=>{function pt(e,t,n,f){var l=-1,x=e==null?0:e.length;for(f&&x&&(n=e[++l]);++l<x;)n=t(n,e[l],l,e);return n}nr.exports=pt});var or=p((Vi,ur)=>{function mt(e){return function(t){return e==null?void 0:e[t]}}ur.exports=mt});var sr=p((Xi,ar)=>{var gt=or(),ht={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},bt=gt(ht);ar.exports=bt});var cr=p((Fi,fr)=>{var yt=typeof global=="object"&&global&&global.Object===Object&&global;fr.exports=yt});var dr=p((Hi,lr)=>{var wt=cr(),vt=typeof self=="object"&&self&&self.Object===Object&&self,Tt=wt||vt||Function("return this")();lr.exports=Tt});var k=p((Ji,xr)=>{var Ct=dr(),Rt=Ct.Symbol;xr.exports=Rt});var mr=p((Bi,pr)=>{function St(e,t){for(var n=-1,f=e==null?0:e.length,l=Array(f);++n<f;)l[n]=t(e[n],n,e);return l}pr.exports=St});var hr=p((Yi,gr)=>{var Pt=Array.isArray;gr.exports=Pt});var vr=p(($i,wr)=>{var br=k(),yr=Object.prototype,qt=yr.hasOwnProperty,At=yr.toString,U=br?br.toStringTag:void 0;function jt(e){var t=qt.call(e,U),n=e[U];try{e[U]=void 0;var f=!0}catch(x){}var l=At.call(e);return f&&(t?e[U]=n:delete e[U]),l}wr.exports=jt});var Cr=p((Ki,Tr)=>{var Mt=Object.prototype,Ot=Mt.toString;function Lt(e){return Ot.call(e)}Tr.exports=Lt});var qr=p((Qi,Pr)=>{var Rr=k(),Nt=vr(),Dt=Cr(),Ut="[object Null]",_t="[object Undefined]",Sr=Rr?Rr.toStringTag:void 0;function zt(e){return e==null?e===void 0?_t:Ut:Sr&&Sr in Object(e)?Nt(e):Dt(e)}Pr.exports=zt});var jr=p((ru,Ar)=>{function Et(e){return e!=null&&typeof e=="object"}Ar.exports=Et});var Or=p((eu,Mr)=>{var kt=qr(),Gt=jr(),It="[object Symbol]";function Zt(e){return typeof e=="symbol"||Gt(e)&&kt(e)==It}Mr.exports=Zt});var zr=p((tu,_r)=>{var Lr=k(),Wt=mr(),Vt=hr(),Xt=Or(),Ft=1/0,Nr=Lr?Lr.prototype:void 0,Dr=Nr?Nr.toString:void 0;function Ur(e){if(typeof e=="string")return e;if(Vt(e))return Wt(e,Ur)+"";if(Xt(e))return Dr?Dr.call(e):"";var t=e+"";return t=="0"&&1/e==-Ft?"-0":t}_r.exports=Ur});var G=p((nu,Er)=>{var Ht=zr();function Jt(e){return e==null?"":Ht(e)}Er.exports=Jt});var Gr=p((iu,kr)=>{var Bt=sr(),Yt=G(),$t=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt="\\u0300-\\u036f",Qt="\\ufe20-\\ufe2f",rn="\\u20d0-\\u20ff",en=Kt+Qt+rn,tn="["+en+"]",nn=RegExp(tn,"g");function un(e){return e=Yt(e),e&&e.replace($t,Bt).replace(nn,"")}kr.exports=un});var Zr=p((uu,Ir)=>{var on=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function an(e){return e.match(on)||[]}Ir.exports=an});var Vr=p((ou,Wr)=>{var sn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function fn(e){return sn.test(e)}Wr.exports=fn});var fe=p((au,se)=>{var Xr="\\ud800-\\udfff",cn="\\u0300-\\u036f",ln="\\ufe20-\\ufe2f",dn="\\u20d0-\\u20ff",xn=cn+ln+dn,Fr="\\u2700-\\u27bf",Hr="a-z\\xdf-\\xf6\\xf8-\\xff",pn="\\xac\\xb1\\xd7\\xf7",mn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",gn="\\u2000-\\u206f",hn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jr="A-Z\\xc0-\\xd6\\xd8-\\xde",bn="\\ufe0e\\ufe0f",Br=pn+mn+gn+hn,Yr="['\u2019]",$r="["+Br+"]",yn="["+xn+"]",Kr="\\d+",wn="["+Fr+"]",Qr="["+Hr+"]",re="[^"+Xr+Br+Kr+Fr+Hr+Jr+"]",vn="\\ud83c[\\udffb-\\udfff]",Tn="(?:"+yn+"|"+vn+")",Cn="[^"+Xr+"]",ee="(?:\\ud83c[\\udde6-\\uddff]){2}",te="[\\ud800-\\udbff][\\udc00-\\udfff]",O="["+Jr+"]",Rn="\\u200d",ne="(?:"+Qr+"|"+re+")",Sn="(?:"+O+"|"+re+")",ie="(?:"+Yr+"(?:d|ll|m|re|s|t|ve))?",ue="(?:"+Yr+"(?:D|LL|M|RE|S|T|VE))?",oe=Tn+"?",ae="["+bn+"]?",Pn="(?:"+Rn+"(?:"+[Cn,ee,te].join("|")+")"+ae+oe+")*",qn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",An="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jn=ae+oe+Pn,Mn="(?:"+[wn,ee,te].join("|")+")"+jn,On=RegExp([O+"?"+Qr+"+"+ie+"(?="+[$r,O,"$"].join("|")+")",Sn+"+"+ue+"(?="+[$r,O+ne,"$"].join("|")+")",O+"?"+ne+"+"+ie,O+"+"+ue,An,qn,Kr,Mn].join("|"),"g");function Ln(e){return e.match(On)||[]}se.exports=Ln});var le=p((su,ce)=>{var Nn=Zr(),Dn=Vr(),Un=G(),_n=fe();function zn(e,t,n){return e=Un(e),t=n?void 0:t,t===void 0?Dn(e)?_n(e):Nn(e):e.match(t)||[]}ce.exports=zn});var xe=p((fu,de)=>{var En=ir(),kn=Gr(),Gn=le(),In="['\u2019]",Zn=RegExp(In,"g");function Wn(e){return function(t){return En(Gn(kn(t).replace(Zn,"")),e,"")}}de.exports=Wn});var me=p((cu,pe)=>{function Vn(e,t,n){var f=-1,l=e.length;t<0&&(t=-t>l?0:l+t),n=n>l?l:n,n<0&&(n+=l),l=t>n?0:n-t>>>0,t>>>=0;for(var x=Array(l);++f<l;)x[f]=e[f+t];return x}pe.exports=Vn});var he=p((lu,ge)=>{var Xn=me();function Fn(e,t,n){var f=e.length;return n=n===void 0?f:n,!t&&n>=f?e:Xn(e,t,n)}ge.exports=Fn});var V=p((du,be)=>{var Hn="\\ud800-\\udfff",Jn="\\u0300-\\u036f",Bn="\\ufe20-\\ufe2f",Yn="\\u20d0-\\u20ff",$n=Jn+Bn+Yn,Kn="\\ufe0e\\ufe0f",Qn="\\u200d",ri=RegExp("["+Qn+Hn+$n+Kn+"]");function ei(e){return ri.test(e)}be.exports=ei});var we=p((xu,ye)=>{function ti(e){return e.split("")}ye.exports=ti});var Ae=p((pu,qe)=>{var ve="\\ud800-\\udfff",ni="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",oi=ni+ii+ui,ai="\\ufe0e\\ufe0f",si="["+ve+"]",X="["+oi+"]",F="\\ud83c[\\udffb-\\udfff]",fi="(?:"+X+"|"+F+")",Te="[^"+ve+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",ci="\\u200d",Se=fi+"?",Pe="["+ai+"]?",li="(?:"+ci+"(?:"+[Te,Ce,Re].join("|")+")"+Pe+Se+")*",di=Pe+Se+li,xi="(?:"+[Te+X+"?",X,Ce,Re,si].join("|")+")",pi=RegExp(F+"(?="+F+")|"+xi+di,"g");function mi(e){return e.match(pi)||[]}qe.exports=mi});var Me=p((mu,je)=>{var gi=we(),hi=V(),bi=Ae();function yi(e){return hi(e)?bi(e):gi(e)}je.exports=yi});var Le=p((gu,Oe)=>{var wi=he(),vi=V(),Ti=Me(),Ci=G();function Ri(e){return function(t){t=Ci(t);var n=vi(t)?Ti(t):void 0,f=n?n[0]:t.charAt(0),l=n?wi(n,1).join(""):t.slice(1);return f[e]()+l}}Oe.exports=Ri});var De=p((hu,Ne)=>{var Si=Le(),Pi=Si("toUpperCase");Ne.exports=Pi});var _e=p((bu,Ue)=>{var qi=xe(),Ai=De(),ji=qi(function(e,t,n){return e+(n?" ":"")+Ai(t)});Ue.exports=ji});var Ze=p((Ie,H)=>{(function(e,t,n){function f(r){var i=this,a=s();i.next=function(){var u=2091639*i.s0+i.c*23283064365386963e-26;return i.s0=i.s1,i.s1=i.s2,i.s2=u-(i.c=u|0)},i.c=1,i.s0=a(" "),i.s1=a(" "),i.s2=a(" "),i.s0-=a(r),i.s0<0&&(i.s0+=1),i.s1-=a(r),i.s1<0&&(i.s1+=1),i.s2-=a(r),i.s2<0&&(i.s2+=1),a=null}function l(r,i){return i.c=r.c,i.s0=r.s0,i.s1=r.s1,i.s2=r.s2,i}function x(r,i){var a=new f(r),u=i&&i.state,o=a.next;return o.int32=function(){return a.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,u&&(typeof u=="object"&&l(u,a),o.state=function(){return l(a,{})}),o}function s(){var r=4022871197,i=function(a){a=String(a);for(var u=0;u<a.length;u++){r+=a.charCodeAt(u);var o=.02519603282416938*r;r=o>>>0,o-=r,o*=r,r=o>>>0,o-=r,r+=o*4294967296}return(r>>>0)*23283064365386963e-26};return i}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.alea=x})(Ie,typeof H=="object"&&H,typeof define=="function"&&define)});var Ve=p((We,J)=>{(function(e,t,n){function f(s){var r=this,i="";r.x=0,r.y=0,r.z=0,r.w=0,r.next=function(){var u=r.x^r.x<<11;return r.x=r.y,r.y=r.z,r.z=r.w,r.w^=r.w>>>19^u^u>>>8},s===(s|0)?r.x=s:i+=s;for(var a=0;a<i.length+64;a++)r.x^=i.charCodeAt(a)|0,r.next()}function l(s,r){return r.x=s.x,r.y=s.y,r.z=s.z,r.w=s.w,r}function x(s,r){var i=new f(s),a=r&&r.state,u=function(){return(i.next()>>>0)/4294967296};return u.double=function(){do var o=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},u.int32=i.next,u.quick=u,a&&(typeof a=="object"&&l(a,i),u.state=function(){return l(i,{})}),u}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xor128=x})(We,typeof J=="object"&&J,typeof define=="function"&&define)});var Fe=p((Xe,B)=>{(function(e,t,n){function f(s){var r=this,i="";r.next=function(){var u=r.x^r.x>>>2;return r.x=r.y,r.y=r.z,r.z=r.w,r.w=r.v,(r.d=r.d+362437|0)+(r.v=r.v^r.v<<4^(u^u<<1))|0},r.x=0,r.y=0,r.z=0,r.w=0,r.v=0,s===(s|0)?r.x=s:i+=s;for(var a=0;a<i.length+64;a++)r.x^=i.charCodeAt(a)|0,a==i.length&&(r.d=r.x<<10^r.x>>>4),r.next()}function l(s,r){return r.x=s.x,r.y=s.y,r.z=s.z,r.w=s.w,r.v=s.v,r.d=s.d,r}function x(s,r){var i=new f(s),a=r&&r.state,u=function(){return(i.next()>>>0)/4294967296};return u.double=function(){do var o=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},u.int32=i.next,u.quick=u,a&&(typeof a=="object"&&l(a,i),u.state=function(){return l(i,{})}),u}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xorwow=x})(Xe,typeof B=="object"&&B,typeof define=="function"&&define)});var Je=p((He,Y)=>{(function(e,t,n){function f(s){var r=this;r.next=function(){var a=r.x,u=r.i,o,c,d;return o=a[u],o^=o>>>7,c=o^o<<24,o=a[u+1&7],c^=o^o>>>10,o=a[u+3&7],c^=o^o>>>3,o=a[u+4&7],c^=o^o<<7,o=a[u+7&7],o=o^o<<13,c^=o^o<<9,a[u]=c,r.i=u+1&7,c};function i(a,u){var o,c,d=[];if(u===(u|0))c=d[0]=u;else for(u=""+u,o=0;o<u.length;++o)d[o&7]=d[o&7]<<15^u.charCodeAt(o)+d[o+1&7]<<13;for(;d.length<8;)d.push(0);for(o=0;o<8&&d[o]===0;++o);for(o==8?c=d[7]=-1:c=d[o],a.x=d,a.i=0,o=256;o>0;--o)a.next()}i(r,s)}function l(s,r){return r.x=s.x.slice(),r.i=s.i,r}function x(s,r){s==null&&(s=+new Date);var i=new f(s),a=r&&r.state,u=function(){return(i.next()>>>0)/4294967296};return u.double=function(){do var o=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},u.int32=i.next,u.quick=u,a&&(a.x&&l(a,i),u.state=function(){return l(i,{})}),u}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xorshift7=x})(He,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Ye=p((Be,$)=>{(function(e,t,n){function f(s){var r=this;r.next=function(){var a=r.w,u=r.X,o=r.i,c,d;return r.w=a=a+1640531527|0,d=u[o+34&127],c=u[o=o+1&127],d^=d<<13,c^=c<<17,d^=d>>>15,c^=c>>>12,d=u[o]=d^c,r.i=o,d+(a^a>>>16)|0};function i(a,u){var o,c,d,w,A,R=[],L=128;for(u===(u|0)?(c=u,u=null):(u=u+"\0",c=0,L=Math.max(L,u.length)),d=0,w=-32;w<L;++w)u&&(c^=u.charCodeAt((w+32)%u.length)),w===0&&(A=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,w>=0&&(A=A+1640531527|0,o=R[w&127]^=c+A,d=o==0?d+1:0);for(d>=128&&(R[(u&&u.length||0)&127]=-1),d=127,w=4*128;w>0;--w)c=R[d+34&127],o=R[d=d+1&127],c^=c<<13,o^=o<<17,c^=c>>>15,o^=o>>>12,R[d]=c^o;a.w=A,a.X=R,a.i=d}i(r,s)}function l(s,r){return r.i=s.i,r.w=s.w,r.X=s.X.slice(),r}function x(s,r){s==null&&(s=+new Date);var i=new f(s),a=r&&r.state,u=function(){return(i.next()>>>0)/4294967296};return u.double=function(){do var o=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},u.int32=i.next,u.quick=u,a&&(a.X&&l(a,i),u.state=function(){return l(i,{})}),u}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.xor4096=x})(Be,typeof $=="object"&&$,typeof define=="function"&&define)});var Ke=p(($e,K)=>{(function(e,t,n){function f(s){var r=this,i="";r.next=function(){var u=r.b,o=r.c,c=r.d,d=r.a;return u=u<<25^u>>>7^o,o=o-c|0,c=c<<24^c>>>8^d,d=d-u|0,r.b=u=u<<20^u>>>12^o,r.c=o=o-c|0,r.d=c<<16^o>>>16^d,r.a=d-u|0},r.a=0,r.b=0,r.c=2654435769|0,r.d=1367130551,s===Math.floor(s)?(r.a=s/4294967296|0,r.b=s|0):i+=s;for(var a=0;a<i.length+20;a++)r.b^=i.charCodeAt(a)|0,r.next()}function l(s,r){return r.a=s.a,r.b=s.b,r.c=s.c,r.d=s.d,r}function x(s,r){var i=new f(s),a=r&&r.state,u=function(){return(i.next()>>>0)/4294967296};return u.double=function(){do var o=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},u.int32=i.next,u.quick=u,a&&(typeof a=="object"&&l(a,i),u.state=function(){return l(i,{})}),u}t&&t.exports?t.exports=x:n&&n.amd?n(function(){return x}):this.tychei=x})($e,typeof K=="object"&&K,typeof define=="function"&&define)});var Qe=p(()=>{});var et=p((rt,Z)=>{(function(e,t,n){var f=256,l=6,x=52,s="random",r=n.pow(f,l),i=n.pow(2,x),a=i*2,u=f-1,o;function c(m,g,y){var b=[];g=g==!0?{entropy:!0}:g||{};var h=R(A(g.entropy?[m,N(t)]:m??L(),3),b),v=new d(b),C=function(){for(var T=v.g(l),P=r,S=0;T<i;)T=(T+S)*f,P*=f,S=v.g(1);for(;T>=a;)T/=2,P/=2,S>>>=1;return(T+S)/P};return C.int32=function(){return v.g(4)|0},C.quick=function(){return v.g(4)/4294967296},C.double=C,R(N(v.S),t),(g.pass||y||function(T,P,S,j){return j&&(j.S&&w(j,v),T.state=function(){return w(v,{})}),S?(n[s]=T,P):T})(C,h,"global"in g?g.global:this==n,g.state)}function d(m){var g,y=m.length,b=this,h=0,v=b.i=b.j=0,C=b.S=[];for(y||(m=[y++]);h<f;)C[h]=h++;for(h=0;h<f;h++)C[h]=C[v=u&v+m[h%y]+(g=C[h])],C[v]=g;(b.g=function(T){for(var P,S=0,j=b.i,_=b.j,D=b.S;T--;)P=D[j=u&j+1],S=S*f+D[u&(D[j]=D[_=u&_+P])+(D[_]=P)];return b.i=j,b.j=_,S})(f)}function w(m,g){return g.i=m.i,g.j=m.j,g.S=m.S.slice(),g}function A(m,g){var y=[],b=typeof m,h;if(g&&b=="object")for(h in m)try{y.push(A(m[h],g-1))}catch(v){}return y.length?y:b=="string"?m:m+"\0"}function R(m,g){for(var y=m+"",b,h=0;h<y.length;)g[u&h]=u&(b^=g[u&h]*19)+y.charCodeAt(h++);return N(g)}function L(){try{var m;return o&&(m=o.randomBytes)?m=m(f):(m=new Uint8Array(f),(e.crypto||e.msCrypto).getRandomValues(m)),N(m)}catch(b){var g=e.navigator,y=g&&g.plugins;return[+new Date,e,y,e.screen,N(t)]}}function N(m){return String.fromCharCode.apply(0,m)}if(R(n.random(),t),typeof Z=="object"&&Z.exports){Z.exports=c;try{o=Qe()}catch(m){}}else typeof define=="function"&&define.amd?define(function(){return c}):n["seed"+s]=c})(typeof self!="undefined"?self:rt,[],Math)});var nt=p((Tu,tt)=>{var Ui=Ze(),_i=Ve(),zi=Fe(),Ei=Je(),ki=Ye(),Gi=Ke(),M=et();M.alea=Ui;M.xor128=_i;M.xorwow=zi;M.xorshift7=Ei;M.xor4096=ki;M.tychei=Gi;tt.exports=M});var ze=tr(_e());function Ee(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Ee):e}function Mi(e,t){return W(this,null,function*(){var r;let{data:{key:n,params:f}}=e,l,x;try{l=yield t(...f)}catch(i){l=void 0;try{x=i.toString()}catch(a){x="Exception can't be stringified."}}let s={key:n};l!==void 0&&(l=Ee(l),s.result={type:"string",value:l}),x!==void 0&&(s.error=x),((r=e.source)==null?void 0:r.postMessage).call(r,s,"*")})}function Oi(e){return typeof window!="undefined"&&window.addEventListener("message",t=>Mi(t,e.run)),E(q({},e),{json:JSON.stringify(Ni(e),null,2)})}var Li=`
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
    `,ke=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ni(e){let{name:t,category:n,description:f,author:l,result:x,params:s,about:r,video:i}=e,{icon:a=ke}=e;return a==="glide"&&(a=Li),{name:t,category:n,description:f,author:l,result:x,about:r,icon:a,video:i,params:Object.entries(s).map(([u,o])=>q({name:u},o))}}var Di={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:ke,about:void 0,video:void 0,tests:[],run(){return W(this,null,function*(){})}},I=class{constructor(t={},n=[]){this.definition=q(q({},Di),t),this.requiredParams=[...n]}with(t,n=[]){return new I(q(q({},this.definition),t),[...this.requiredParams,...n])}withName(t){return this.with({name:t})}withCategory(t){return this.with({category:t})}withDescription(t){return this.with({description:t})}withAbout(t){return this.with({about:t})}withVideo(t){return this.with({video:t})}withIcon(t){return this.with({icon:t})}withAuthor(t,n){return this.with({author:`${t} <${n}>`})}withTest(t,n){let{tests:f=[]}=this.definition;return this.with({tests:[...f,{params:t,expectedResult:n}]})}withResult(t){return this.with({result:{type:t}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(t,n,f){return f===void 0&&(f=(0,ze.default)(n)),this.with({params:E(q({},this.definition.params),{[n]:{type:t,displayName:f}})})}withRequiredParam(t,n,f){return this.withParam(t,n,f).with({},[n])}withPrimitiveParam(t,n){return this.withParam("primitive",t,n)}withStringParam(t,n){return this.withParam("string",t,n)}withDateParam(t,n){return this.withParam("date-time",t,n)}withNumberParam(t,n){return this.withParam("number",t,n)}withRequiredPrimitiveParam(t,n){return this.withRequiredParam("primitive",t,n)}withRequiredStringParam(t,n){return this.withRequiredParam("string",t,n)}withRequiredDateParam(t,n){return this.withRequiredParam("date-time",t,n)}withRequiredNumberParam(t,n){return this.withRequiredParam("number",t,n)}run(t){let{params:n}=this.definition,f=this.requiredParams,l=Object.keys(n);function x(...s){let r={};if(s.forEach(({value:i},a)=>{r[l[a]]=i}),!f.some(i=>r[i]===void 0))return t(r)}return Oi(E(q({},this.definition),{run:x}))}};function Ge(e){return new I({name:e})}var it=tr(nt());function Ii(e,t){if(t===0)return;let n=t>0?1:-1,f=(0,it.default)(e)();return n*(Math.floor(Math.abs(t*f))+1)}var Ru=Ge("Roll Dice").withCategory("Number").withDescription("Roll dice of various sizes.").withRequiredPrimitiveParam("seed","Roll Seed").withNumberParam("sides","Sides (default is 6)").withNumberResult().withTest({seed:6},1).withTest({seed:6,sides:6},1).withTest({seed:6,sides:0},void 0).run(({seed:e,sides:t=6})=>Ii(e,t));})();
//# sourceMappingURL=index.js.map
