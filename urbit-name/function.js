var st=Object.create;var G=Object.defineProperty,lt=Object.defineProperties,ft=Object.getOwnPropertyDescriptor,ct=Object.getOwnPropertyDescriptors,dt=Object.getOwnPropertyNames,te=Object.getOwnPropertySymbols,pt=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var ie=(r,t,n)=>t in r?G(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,q=(r,t)=>{for(var n in t||(t={}))ne.call(t,n)&&ie(r,n,t[n]);if(te)for(var n of te(t))mt.call(t,n)&&ie(r,n,t[n]);return r},z=(r,t)=>lt(r,ct(t)),xt=r=>G(r,"__esModule",{value:!0});var p=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var bt=(r,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of dt(t))!ne.call(r,l)&&l!=="default"&&G(r,l,{get:()=>t[l],enumerable:!(n=ft(t,l))||n.enumerable});return r},ue=r=>bt(xt(G(r!=null?st(pt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var oe=(r,t,n)=>new Promise((l,d)=>{var m=u=>{try{e(n.next(u))}catch(a){d(a)}},s=u=>{try{e(n.throw(u))}catch(a){d(a)}},e=u=>u.done?l(u.value):Promise.resolve(u.value).then(m,s);e((n=n.apply(r,t)).next())});var se=p((Vi,ae)=>{function gt(r,t,n,l){var d=-1,m=r==null?0:r.length;for(l&&m&&(n=r[++d]);++d<m;)n=t(n,r[d],d,r);return n}ae.exports=gt});var fe=p((Xi,le)=>{function ht(r){return function(t){return r==null?void 0:r[t]}}le.exports=ht});var de=p((Hi,ce)=>{var yt=fe(),wt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},vt=yt(wt);ce.exports=vt});var me=p((Fi,pe)=>{var Tt=typeof global=="object"&&global&&global.Object===Object&&global;pe.exports=Tt});var be=p(($i,xe)=>{var Ct=me(),St=typeof self=="object"&&self&&self.Object===Object&&self,Rt=Ct||St||Function("return this")();xe.exports=Rt});var E=p((Ji,ge)=>{var Pt=be(),qt=Pt.Symbol;ge.exports=qt});var ye=p((Bi,he)=>{function At(r,t){for(var n=-1,l=r==null?0:r.length,d=Array(l);++n<l;)d[n]=t(r[n],n,r);return d}he.exports=At});var ve=p((Ki,we)=>{var jt=Array.isArray;we.exports=jt});var Re=p((Yi,Se)=>{var Te=E(),Ce=Object.prototype,Ot=Ce.hasOwnProperty,Mt=Ce.toString,k=Te?Te.toStringTag:void 0;function Lt(r){var t=Ot.call(r,k),n=r[k];try{r[k]=void 0;var l=!0}catch(m){}var d=Mt.call(r);return l&&(t?r[k]=n:delete r[k]),d}Se.exports=Lt});var qe=p((Qi,Pe)=>{var Ut=Object.prototype,Dt=Ut.toString;function Nt(r){return Dt.call(r)}Pe.exports=Nt});var Me=p((eu,Oe)=>{var Ae=E(),kt=Re(),_t=qe(),Gt="[object Null]",zt="[object Undefined]",je=Ae?Ae.toStringTag:void 0;function Et(r){return r==null?r===void 0?zt:Gt:je&&je in Object(r)?kt(r):_t(r)}Oe.exports=Et});var Ue=p((ru,Le)=>{function It(r){return r!=null&&typeof r=="object"}Le.exports=It});var Ne=p((tu,De)=>{var Zt=Me(),Wt=Ue(),Vt="[object Symbol]";function Xt(r){return typeof r=="symbol"||Wt(r)&&Zt(r)==Vt}De.exports=Xt});var Ie=p((nu,Ee)=>{var ke=E(),Ht=ye(),Ft=ve(),$t=Ne(),Jt=1/0,_e=ke?ke.prototype:void 0,Ge=_e?_e.toString:void 0;function ze(r){if(typeof r=="string")return r;if(Ft(r))return Ht(r,ze)+"";if($t(r))return Ge?Ge.call(r):"";var t=r+"";return t=="0"&&1/r==-Jt?"-0":t}Ee.exports=ze});var I=p((iu,Ze)=>{var Bt=Ie();function Kt(r){return r==null?"":Bt(r)}Ze.exports=Kt});var Ve=p((uu,We)=>{var Yt=de(),Qt=I(),en=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rn="\\u0300-\\u036f",tn="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",un=rn+tn+nn,on="["+un+"]",an=RegExp(on,"g");function sn(r){return r=Qt(r),r&&r.replace(en,Yt).replace(an,"")}We.exports=sn});var He=p((ou,Xe)=>{var ln=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function fn(r){return r.match(ln)||[]}Xe.exports=fn});var $e=p((au,Fe)=>{var cn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function dn(r){return cn.test(r)}Fe.exports=dn});var pr=p((su,dr)=>{var Je="\\ud800-\\udfff",pn="\\u0300-\\u036f",mn="\\ufe20-\\ufe2f",xn="\\u20d0-\\u20ff",bn=pn+mn+xn,Be="\\u2700-\\u27bf",Ke="a-z\\xdf-\\xf6\\xf8-\\xff",gn="\\xac\\xb1\\xd7\\xf7",hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",yn="\\u2000-\\u206f",wn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ye="A-Z\\xc0-\\xd6\\xd8-\\xde",vn="\\ufe0e\\ufe0f",Qe=gn+hn+yn+wn,er="['\u2019]",rr="["+Qe+"]",Tn="["+bn+"]",tr="\\d+",Cn="["+Be+"]",nr="["+Ke+"]",ir="[^"+Je+Qe+tr+Be+Ke+Ye+"]",Sn="\\ud83c[\\udffb-\\udfff]",Rn="(?:"+Tn+"|"+Sn+")",Pn="[^"+Je+"]",ur="(?:\\ud83c[\\udde6-\\uddff]){2}",or="[\\ud800-\\udbff][\\udc00-\\udfff]",L="["+Ye+"]",qn="\\u200d",ar="(?:"+nr+"|"+ir+")",An="(?:"+L+"|"+ir+")",sr="(?:"+er+"(?:d|ll|m|re|s|t|ve))?",lr="(?:"+er+"(?:D|LL|M|RE|S|T|VE))?",fr=Rn+"?",cr="["+vn+"]?",jn="(?:"+qn+"(?:"+[Pn,ur,or].join("|")+")"+cr+fr+")*",On="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Mn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ln=cr+fr+jn,Un="(?:"+[Cn,ur,or].join("|")+")"+Ln,Dn=RegExp([L+"?"+nr+"+"+sr+"(?="+[rr,L,"$"].join("|")+")",An+"+"+lr+"(?="+[rr,L+ar,"$"].join("|")+")",L+"?"+ar+"+"+sr,L+"+"+lr,Mn,On,tr,Un].join("|"),"g");function Nn(r){return r.match(Dn)||[]}dr.exports=Nn});var xr=p((lu,mr)=>{var kn=He(),_n=$e(),Gn=I(),zn=pr();function En(r,t,n){return r=Gn(r),t=n?void 0:t,t===void 0?_n(r)?zn(r):kn(r):r.match(t)||[]}mr.exports=En});var gr=p((fu,br)=>{var In=se(),Zn=Ve(),Wn=xr(),Vn="['\u2019]",Xn=RegExp(Vn,"g");function Hn(r){return function(t){return In(Wn(Zn(t).replace(Xn,"")),r,"")}}br.exports=Hn});var yr=p((cu,hr)=>{function Fn(r,t,n){var l=-1,d=r.length;t<0&&(t=-t>d?0:d+t),n=n>d?d:n,n<0&&(n+=d),d=t>n?0:n-t>>>0,t>>>=0;for(var m=Array(d);++l<d;)m[l]=r[l+t];return m}hr.exports=Fn});var vr=p((du,wr)=>{var $n=yr();function Jn(r,t,n){var l=r.length;return n=n===void 0?l:n,!t&&n>=l?r:$n(r,t,n)}wr.exports=Jn});var H=p((pu,Tr)=>{var Bn="\\ud800-\\udfff",Kn="\\u0300-\\u036f",Yn="\\ufe20-\\ufe2f",Qn="\\u20d0-\\u20ff",ei=Kn+Yn+Qn,ri="\\ufe0e\\ufe0f",ti="\\u200d",ni=RegExp("["+ti+Bn+ei+ri+"]");function ii(r){return ni.test(r)}Tr.exports=ii});var Sr=p((mu,Cr)=>{function ui(r){return r.split("")}Cr.exports=ui});var Lr=p((xu,Mr)=>{var Rr="\\ud800-\\udfff",oi="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",li=oi+ai+si,fi="\\ufe0e\\ufe0f",ci="["+Rr+"]",F="["+li+"]",$="\\ud83c[\\udffb-\\udfff]",di="(?:"+F+"|"+$+")",Pr="[^"+Rr+"]",qr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",pi="\\u200d",jr=di+"?",Or="["+fi+"]?",mi="(?:"+pi+"(?:"+[Pr,qr,Ar].join("|")+")"+Or+jr+")*",xi=Or+jr+mi,bi="(?:"+[Pr+F+"?",F,qr,Ar,ci].join("|")+")",gi=RegExp($+"(?="+$+")|"+bi+xi,"g");function hi(r){return r.match(gi)||[]}Mr.exports=hi});var Dr=p((bu,Ur)=>{var yi=Sr(),wi=H(),vi=Lr();function Ti(r){return wi(r)?vi(r):yi(r)}Ur.exports=Ti});var kr=p((gu,Nr)=>{var Ci=vr(),Si=H(),Ri=Dr(),Pi=I();function qi(r){return function(t){t=Pi(t);var n=Si(t)?Ri(t):void 0,l=n?n[0]:t.charAt(0),d=n?Ci(n,1).join(""):t.slice(1);return l[r]()+d}}Nr.exports=qi});var Gr=p((hu,_r)=>{var Ai=kr(),ji=Ai("toUpperCase");_r.exports=ji});var Er=p((yu,zr)=>{var Oi=gr(),Mi=Gr(),Li=Oi(function(r,t,n){return r+(n?" ":"")+Mi(t)});zr.exports=Li});var Xr=p((Vr,J)=>{(function(r,t,n){function l(e){var u=this,a=s();u.next=function(){var i=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=i-(u.c=i|0)},u.c=1,u.s0=a(" "),u.s1=a(" "),u.s2=a(" "),u.s0-=a(e),u.s0<0&&(u.s0+=1),u.s1-=a(e),u.s1<0&&(u.s1+=1),u.s2-=a(e),u.s2<0&&(u.s2+=1),a=null}function d(e,u){return u.c=e.c,u.s0=e.s0,u.s1=e.s1,u.s2=e.s2,u}function m(e,u){var a=new l(e),i=u&&u.state,o=a.next;return o.int32=function(){return a.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,i&&(typeof i=="object"&&d(i,a),o.state=function(){return d(a,{})}),o}function s(){var e=4022871197,u=function(a){a=String(a);for(var i=0;i<a.length;i++){e+=a.charCodeAt(i);var o=.02519603282416938*e;e=o>>>0,o-=e,o*=e,e=o>>>0,o-=e,e+=o*4294967296}return(e>>>0)*23283064365386963e-26};return u}t&&t.exports?t.exports=m:n&&n.amd?n(function(){return m}):this.alea=m})(Vr,typeof J=="object"&&J,typeof define=="function"&&define)});var Fr=p((Hr,B)=>{(function(r,t,n){function l(s){var e=this,u="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var i=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^i^i>>>8},s===(s|0)?e.x=s:u+=s;for(var a=0;a<u.length+64;a++)e.x^=u.charCodeAt(a)|0,e.next()}function d(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e}function m(s,e){var u=new l(s),a=e&&e.state,i=function(){return(u.next()>>>0)/4294967296};return i.double=function(){do var o=u.next()>>>11,f=(u.next()>>>0)/4294967296,c=(o+f)/(1<<21);while(c===0);return c},i.int32=u.next,i.quick=i,a&&(typeof a=="object"&&d(a,u),i.state=function(){return d(u,{})}),i}t&&t.exports?t.exports=m:n&&n.amd?n(function(){return m}):this.xor128=m})(Hr,typeof B=="object"&&B,typeof define=="function"&&define)});var Jr=p(($r,K)=>{(function(r,t,n){function l(s){var e=this,u="";e.next=function(){var i=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(i^i<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,s===(s|0)?e.x=s:u+=s;for(var a=0;a<u.length+64;a++)e.x^=u.charCodeAt(a)|0,a==u.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function d(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e.v=s.v,e.d=s.d,e}function m(s,e){var u=new l(s),a=e&&e.state,i=function(){return(u.next()>>>0)/4294967296};return i.double=function(){do var o=u.next()>>>11,f=(u.next()>>>0)/4294967296,c=(o+f)/(1<<21);while(c===0);return c},i.int32=u.next,i.quick=i,a&&(typeof a=="object"&&d(a,u),i.state=function(){return d(u,{})}),i}t&&t.exports?t.exports=m:n&&n.amd?n(function(){return m}):this.xorwow=m})($r,typeof K=="object"&&K,typeof define=="function"&&define)});var Kr=p((Br,Y)=>{(function(r,t,n){function l(s){var e=this;e.next=function(){var a=e.x,i=e.i,o,f,c;return o=a[i],o^=o>>>7,f=o^o<<24,o=a[i+1&7],f^=o^o>>>10,o=a[i+3&7],f^=o^o>>>3,o=a[i+4&7],f^=o^o<<7,o=a[i+7&7],o=o^o<<13,f^=o^o<<9,a[i]=f,e.i=i+1&7,f};function u(a,i){var o,f,c=[];if(i===(i|0))f=c[0]=i;else for(i=""+i,o=0;o<i.length;++o)c[o&7]=c[o&7]<<15^i.charCodeAt(o)+c[o+1&7]<<13;for(;c.length<8;)c.push(0);for(o=0;o<8&&c[o]===0;++o);for(o==8?f=c[7]=-1:f=c[o],a.x=c,a.i=0,o=256;o>0;--o)a.next()}u(e,s)}function d(s,e){return e.x=s.x.slice(),e.i=s.i,e}function m(s,e){s==null&&(s=+new Date);var u=new l(s),a=e&&e.state,i=function(){return(u.next()>>>0)/4294967296};return i.double=function(){do var o=u.next()>>>11,f=(u.next()>>>0)/4294967296,c=(o+f)/(1<<21);while(c===0);return c},i.int32=u.next,i.quick=i,a&&(a.x&&d(a,u),i.state=function(){return d(u,{})}),i}t&&t.exports?t.exports=m:n&&n.amd?n(function(){return m}):this.xorshift7=m})(Br,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Qr=p((Yr,Q)=>{(function(r,t,n){function l(s){var e=this;e.next=function(){var a=e.w,i=e.X,o=e.i,f,c;return e.w=a=a+1640531527|0,c=i[o+34&127],f=i[o=o+1&127],c^=c<<13,f^=f<<17,c^=c>>>15,f^=f>>>12,c=i[o]=c^f,e.i=o,c+(a^a>>>16)|0};function u(a,i){var o,f,c,w,A,S=[],U=128;for(i===(i|0)?(f=i,i=null):(i=i+"\0",f=0,U=Math.max(U,i.length)),c=0,w=-32;w<U;++w)i&&(f^=i.charCodeAt((w+32)%i.length)),w===0&&(A=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,w>=0&&(A=A+1640531527|0,o=S[w&127]^=f+A,c=o==0?c+1:0);for(c>=128&&(S[(i&&i.length||0)&127]=-1),c=127,w=4*128;w>0;--w)f=S[c+34&127],o=S[c=c+1&127],f^=f<<13,o^=o<<17,f^=f>>>15,o^=o>>>12,S[c]=f^o;a.w=A,a.X=S,a.i=c}u(e,s)}function d(s,e){return e.i=s.i,e.w=s.w,e.X=s.X.slice(),e}function m(s,e){s==null&&(s=+new Date);var u=new l(s),a=e&&e.state,i=function(){return(u.next()>>>0)/4294967296};return i.double=function(){do var o=u.next()>>>11,f=(u.next()>>>0)/4294967296,c=(o+f)/(1<<21);while(c===0);return c},i.int32=u.next,i.quick=i,a&&(a.X&&d(a,u),i.state=function(){return d(u,{})}),i}t&&t.exports?t.exports=m:n&&n.amd?n(function(){return m}):this.xor4096=m})(Yr,typeof Q=="object"&&Q,typeof define=="function"&&define)});var rt=p((et,ee)=>{(function(r,t,n){function l(s){var e=this,u="";e.next=function(){var i=e.b,o=e.c,f=e.d,c=e.a;return i=i<<25^i>>>7^o,o=o-f|0,f=f<<24^f>>>8^c,c=c-i|0,e.b=i=i<<20^i>>>12^o,e.c=o=o-f|0,e.d=f<<16^o>>>16^c,e.a=c-i|0},e.a=0,e.b=0,e.c=2654435769|0,e.d=1367130551,s===Math.floor(s)?(e.a=s/4294967296|0,e.b=s|0):u+=s;for(var a=0;a<u.length+20;a++)e.b^=u.charCodeAt(a)|0,e.next()}function d(s,e){return e.a=s.a,e.b=s.b,e.c=s.c,e.d=s.d,e}function m(s,e){var u=new l(s),a=e&&e.state,i=function(){return(u.next()>>>0)/4294967296};return i.double=function(){do var o=u.next()>>>11,f=(u.next()>>>0)/4294967296,c=(o+f)/(1<<21);while(c===0);return c},i.int32=u.next,i.quick=i,a&&(typeof a=="object"&&d(a,u),i.state=function(){return d(u,{})}),i}t&&t.exports?t.exports=m:n&&n.amd?n(function(){return m}):this.tychei=m})(et,typeof ee=="object"&&ee,typeof define=="function"&&define)});var tt=p(()=>{});var it=p((nt,W)=>{(function(r,t,n){var l=256,d=6,m=52,s="random",e=n.pow(l,d),u=n.pow(2,m),a=u*2,i=l-1,o;function f(x,b,y){var h=[];b=b==!0?{entropy:!0}:b||{};var g=S(A(b.entropy?[x,D(t)]:x??U(),3),h),v=new c(h),C=function(){for(var T=v.g(d),P=e,R=0;T<u;)T=(T+R)*l,P*=l,R=v.g(1);for(;T>=a;)T/=2,P/=2,R>>>=1;return(T+R)/P};return C.int32=function(){return v.g(4)|0},C.quick=function(){return v.g(4)/4294967296},C.double=C,S(D(v.S),t),(b.pass||y||function(T,P,R,j){return j&&(j.S&&w(j,v),T.state=function(){return w(v,{})}),R?(n[s]=T,P):T})(C,g,"global"in b?b.global:this==n,b.state)}function c(x){var b,y=x.length,h=this,g=0,v=h.i=h.j=0,C=h.S=[];for(y||(x=[y++]);g<l;)C[g]=g++;for(g=0;g<l;g++)C[g]=C[v=i&v+x[g%y]+(b=C[g])],C[v]=b;(h.g=function(T){for(var P,R=0,j=h.i,_=h.j,N=h.S;T--;)P=N[j=i&j+1],R=R*l+N[i&(N[j]=N[_=i&_+P])+(N[_]=P)];return h.i=j,h.j=_,R})(l)}function w(x,b){return b.i=x.i,b.j=x.j,b.S=x.S.slice(),b}function A(x,b){var y=[],h=typeof x,g;if(b&&h=="object")for(g in x)try{y.push(A(x[g],b-1))}catch(v){}return y.length?y:h=="string"?x:x+"\0"}function S(x,b){for(var y=x+"",h,g=0;g<y.length;)b[i&g]=i&(h^=b[i&g]*19)+y.charCodeAt(g++);return D(b)}function U(){try{var x;return o&&(x=o.randomBytes)?x=x(l):(x=new Uint8Array(l),(r.crypto||r.msCrypto).getRandomValues(x)),D(x)}catch(h){var b=r.navigator,y=b&&b.plugins;return[+new Date,r,y,r.screen,D(t)]}}function D(x){return String.fromCharCode.apply(0,x)}if(S(n.random(),t),typeof W=="object"&&W.exports){W.exports=f;try{o=tt()}catch(x){}}else typeof define=="function"&&define.amd?define(function(){return f}):n["seed"+s]=f})(typeof self!="undefined"?self:nt,[],Math)});var ot=p((Cu,ut)=>{var _i=Xr(),Gi=Fr(),zi=Jr(),Ei=Kr(),Ii=Qr(),Zi=rt(),O=it();O.alea=_i;O.xor128=Gi;O.xorwow=zi;O.xorshift7=Ei;O.xor4096=Ii;O.tychei=Zi;ut.exports=O});var Ir=ue(Er());function Ui(r){return z(q({},r),{json:JSON.stringify(Ni(r),null,2)})}var Di=`
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
    `,Zr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ni(r){let{name:t,category:n,description:l,author:d,result:m,params:s,about:e,video:u}=r,{icon:a=Zr}=r;return a==="glide"&&(a=Di),{name:t,category:n,description:l,author:d,result:m,about:e,icon:a,video:u,params:Object.entries(s).map(([i,o])=>q({name:i},o))}}var ki={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Zr,about:void 0,video:void 0,tests:[],run(){return oe(this,null,function*(){})}},Z=class{constructor(t={},n=[]){this.definition=q(q({},ki),t),this.requiredParams=[...n]}with(t,n=[]){return new Z(q(q({},this.definition),t),[...this.requiredParams,...n])}withName(t){return this.with({name:t})}withCategory(t){return this.with({category:t})}withDescription(t){return this.with({description:t})}withAbout(t){return this.with({about:t})}withVideo(t){return this.with({video:t})}withIcon(t){return this.with({icon:t})}withAuthor(t,n){return this.with({author:`${t} <${n}>`})}withTest(t,n){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:t,expectedResult:n}]})}withResult(t){return this.with({result:{type:t}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(t,n,l){return l===void 0&&(l=(0,Ir.default)(n)),this.with({params:z(q({},this.definition.params),{[n]:{type:t,displayName:l}})})}withRequiredParam(t,n,l){return this.withParam(t,n,l).with({},[n])}withPrimitiveParam(t,n){return this.withParam("primitive",t,n)}withStringParam(t,n){return this.withParam("string",t,n)}withDateParam(t,n){return this.withParam("date-time",t,n)}withNumberParam(t,n){return this.withParam("number",t,n)}withRequiredPrimitiveParam(t,n){return this.withRequiredParam("primitive",t,n)}withRequiredStringParam(t,n){return this.withRequiredParam("string",t,n)}withRequiredDateParam(t,n){return this.withRequiredParam("date-time",t,n)}withRequiredNumberParam(t,n){return this.withRequiredParam("number",t,n)}run(t){let{params:n}=this.definition,l=this.requiredParams,d=Object.keys(n);function m(...s){let e={};if(s.forEach(({value:u},a)=>{e[d[a]]=u}),!l.some(u=>e[u]===void 0))return t(e)}return Ui(z(q({},this.definition),{run:m}))}};function Wr(r){return new Z({name:r})}var at=ue(ot()),V=["doz","mar","bin","wan","sam","lit","sig","hid","fid","lis","sog","dir","wac","sab","wis","sib","rig","sol","dop","mod","fog","lid","hop","dar","dor","lor","hod","fol","rin","tog","sil","mir","hol","pas","lac","rov","liv","dal","sat","lib","tab","han","tic","pid","tor","bol","fos","dot","los","dil","for","pil","ram","tir","win","tad","bic","dif","roc","wid","bis","das","mid","lop","ril","nar","dap","mol","san","loc","nov","sit","nid","tip","sic","rop","wit","nat","pan","min","rit","pod","mot","tam","tol","sav","pos","nap","nop","som","fin","fon","ban","mor","wor","sip","ron","nor","bot","wic","soc","wat","dol","mag","pic","dav","bid","bal","tim","tas","mal","lig","siv","tag","pad","sal","div","dac","tan","sid","fab","tar","mon","ran","nis","wol","mis","pal","las","dis","map","rab","tob","rol","lat","lon","nod","nav","fig","nom","nib","pag","sop","ral","bil","had","doc","rid","moc","pac","rav","rip","fal","tod","til","tin","hap","mic","fan","pat","tac","lab","mog","sim","son","pin","lom","ric","tap","fir","has","bos","bat","poc","hac","tid","hav","sap","lin","dib","hos","dab","bit","bar","rac","par","lod","dos","bor","toc","hil","mac","tom","dig","fil","fas","mit","hob","har","mig","hin","rad","mas","hal","rag","lag","fad","top","mop","hab","nil","nos","mil","fop","fam","dat","nol","din","hat","nac","ris","fot","rib","hoc","nim","lar","fit","wal","rap","sar","nal","mos","lan","don","dan","lad","dov","riv","bac","pol","lap","tal","pit","nam","bon","ros","ton","fod","pon","sov","noc","sor","lav","mat","mip","fip"],re=["zod","nec","bud","wes","sev","per","sut","let","ful","pen","syt","dur","wep","ser","wyl","sun","ryp","syx","dyr","nup","heb","peg","lup","dep","dys","put","lug","hec","ryt","tyv","syd","nex","lun","mep","lut","sep","pes","del","sul","ped","tem","led","tul","met","wen","byn","hex","feb","pyl","dul","het","mev","rut","tyl","wyd","tep","bes","dex","sef","wyc","bur","der","nep","pur","rys","reb","den","nut","sub","pet","rul","syn","reg","tyd","sup","sem","wyn","rec","meg","net","sec","mul","nym","tev","web","sum","mut","nyx","rex","teb","fus","hep","ben","mus","wyx","sym","sel","ruc","dec","wex","syr","wet","dyl","myn","mes","det","bet","bel","tux","tug","myr","pel","syp","ter","meb","set","dut","deg","tex","sur","fel","tud","nux","rux","ren","wyt","nub","med","lyt","dus","neb","rum","tyn","seg","lyx","pun","res","red","fun","rev","ref","mec","ted","rus","bex","leb","dux","ryn","num","pyx","ryg","ryx","fep","tyr","tus","tyc","leg","nem","fer","mer","ten","lus","nus","syl","tec","mex","pub","rym","tuc","fyl","lep","deb","ber","mug","hut","tun","byl","sud","pem","dev","lur","def","bus","bep","run","mel","pex","dyt","byt","typ","lev","myl","wed","duc","fur","fex","nul","luc","len","ner","lex","rup","ned","lec","ryd","lyd","fen","wel","nyd","hus","rel","rud","nes","hes","fet","des","ret","dun","ler","nyr","seb","hul","ryl","lud","rem","lys","fyn","wer","ryc","sug","nys","nyl","lyn","dyn","dem","lux","fed","sed","bec","mun","lyr","tes","mud","nyt","byr","sen","weg","fyr","mur","tel","rep","teg","pec","nel","nev","fes"];function M(r,t){let n=t();return r[Math.floor(n*r.length)]}var X={galaxy(r){return`~${M(V,r)}`},star(r){let t=M(V,r),n=M(re,r);return`~${t}${n}`},planet(r){let t=M(V,r),n=M(re,r),l=M(V,r),d=M(re,r);return`~${t}${n}-${l}${d}`}},Ru=Wr("Urbit Name").withCategory("Fun").withDescription("Galaxy, star, and planet names in the Urbit computational metaverse.").withAbout(`
    This is just a playful implementation of Urbit names. Don't expect reliable or faithful
    results when compared to official implementation.


    More details [on Stack Overflow](https://stackoverflow.com/questions/38139453/how-are-urbit-phonetic-names-encoded).
  `).withAuthor("urbit Project","urbit.org").withVideo("https://www.youtube.com/watch?v=M04AKTCDavc").withIcon(`
  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M22 14.0488H19.6306C19.4522 15.0976 18.9936 15.7317 18.1783 15.7317C16.7006 15.7317 15.8599 14 13.5669 14C11.3503 14 10.1783 15.3659 10 17.9756H12.3694C12.5478 16.9024 13.0064 16.2683 13.8471 16.2683C15.3248 16.2683 16.1146 18 18.4586 18C20.6242 18 21.8217 16.6341 22 14.0488Z" fill="currentColor"/>
  </svg>
  `).withRequiredPrimitiveParam("value").withStringParam("kind",`Kind (${Object.keys(X).join(", ")})`).withStringResult().withTest({value:"Glide"},"~micmec-talrun").withTest({value:"Glide",kind:"galaxy"},"~sop").withTest({value:"Glide",kind:"star"},"~ranwes").withTest({value:"Glide",kind:"planet"},"~micmec-talrun").run(({value:r,kind:t="planet"})=>{var l;let n=(0,at.default)(""+r+t);return(l=X[t])==null?void 0:l.call(X,n)});export{Ru as default};
//# sourceMappingURL=function.js.map
