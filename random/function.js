var nt=Object.create;var E=Object.defineProperty,ut=Object.defineProperties,at=Object.getOwnPropertyDescriptor,ot=Object.getOwnPropertyDescriptors,st=Object.getOwnPropertyNames,K=Object.getOwnPropertySymbols,ft=Object.getPrototypeOf,Q=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var rr=(t,r,i)=>r in t?E(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,q=(t,r)=>{for(var i in r||(r={}))Q.call(r,i)&&rr(t,i,r[i]);if(K)for(var i of K(r))ct.call(r,i)&&rr(t,i,r[i]);return t},_=(t,r)=>ut(t,ot(r)),lt=t=>E(t,"__esModule",{value:!0});var m=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var dt=(t,r,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let c of st(r))!Q.call(t,c)&&c!=="default"&&E(t,c,{get:()=>r[c],enumerable:!(i=at(r,c))||i.enumerable});return t},er=t=>dt(lt(E(t!=null?nt(ft(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var tr=(t,r,i)=>new Promise((c,d)=>{var x=u=>{try{e(i.next(u))}catch(o){d(o)}},s=u=>{try{e(i.throw(u))}catch(o){d(o)}},e=u=>u.done?c(u.value):Promise.resolve(u.value).then(x,s);e((i=i.apply(t,r)).next())});var nr=m((Gn,ir)=>{function mt(t,r,i,c){var d=-1,x=t==null?0:t.length;for(c&&x&&(i=t[++d]);++d<x;)i=r(i,t[d],d,t);return i}ir.exports=mt});var ar=m((In,ur)=>{function xt(t){return function(r){return t==null?void 0:t[r]}}ur.exports=xt});var sr=m((Vn,or)=>{var pt=ar(),gt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ht=pt(gt);or.exports=ht});var cr=m((Zn,fr)=>{var bt=typeof global=="object"&&global&&global.Object===Object&&global;fr.exports=bt});var dr=m((Wn,lr)=>{var yt=cr(),wt=typeof self=="object"&&self&&self.Object===Object&&self,vt=yt||wt||Function("return this")();lr.exports=vt});var z=m((Fn,mr)=>{var Tt=dr(),Ct=Tt.Symbol;mr.exports=Ct});var pr=m((Xn,xr)=>{function Pt(t,r){for(var i=-1,c=t==null?0:t.length,d=Array(c);++i<c;)d[i]=r(t[i],i,t);return d}xr.exports=Pt});var hr=m((Hn,gr)=>{var Rt=Array.isArray;gr.exports=Rt});var vr=m((Jn,wr)=>{var br=z(),yr=Object.prototype,St=yr.hasOwnProperty,qt=yr.toString,k=br?br.toStringTag:void 0;function At(t){var r=St.call(t,k),i=t[k];try{t[k]=void 0;var c=!0}catch(x){}var d=qt.call(t);return c&&(r?t[k]=i:delete t[k]),d}wr.exports=At});var Cr=m((Bn,Tr)=>{var jt=Object.prototype,Ot=jt.toString;function Mt(t){return Ot.call(t)}Tr.exports=Mt});var qr=m((Yn,Sr)=>{var Pr=z(),Lt=vr(),Nt=Cr(),Ut="[object Null]",kt="[object Undefined]",Rr=Pr?Pr.toStringTag:void 0;function Dt(t){return t==null?t===void 0?kt:Ut:Rr&&Rr in Object(t)?Lt(t):Nt(t)}Sr.exports=Dt});var jr=m(($n,Ar)=>{function Et(t){return t!=null&&typeof t=="object"}Ar.exports=Et});var Mr=m((Kn,Or)=>{var _t=qr(),zt=jr(),Gt="[object Symbol]";function It(t){return typeof t=="symbol"||zt(t)&&_t(t)==Gt}Or.exports=It});var Er=m((Qn,Dr)=>{var Lr=z(),Vt=pr(),Zt=hr(),Wt=Mr(),Ft=1/0,Nr=Lr?Lr.prototype:void 0,Ur=Nr?Nr.toString:void 0;function kr(t){if(typeof t=="string")return t;if(Zt(t))return Vt(t,kr)+"";if(Wt(t))return Ur?Ur.call(t):"";var r=t+"";return r=="0"&&1/t==-Ft?"-0":r}Dr.exports=kr});var G=m((ru,_r)=>{var Xt=Er();function Ht(t){return t==null?"":Xt(t)}_r.exports=Ht});var Gr=m((eu,zr)=>{var Jt=sr(),Bt=G(),Yt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$t="\\u0300-\\u036f",Kt="\\ufe20-\\ufe2f",Qt="\\u20d0-\\u20ff",ri=$t+Kt+Qt,ei="["+ri+"]",ti=RegExp(ei,"g");function ii(t){return t=Bt(t),t&&t.replace(Yt,Jt).replace(ti,"")}zr.exports=ii});var Vr=m((tu,Ir)=>{var ni=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ui(t){return t.match(ni)||[]}Ir.exports=ui});var Wr=m((iu,Zr)=>{var ai=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function oi(t){return ai.test(t)}Zr.exports=oi});var fe=m((nu,se)=>{var Fr="\\ud800-\\udfff",si="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",li=si+fi+ci,Xr="\\u2700-\\u27bf",Hr="a-z\\xdf-\\xf6\\xf8-\\xff",di="\\xac\\xb1\\xd7\\xf7",mi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xi="\\u2000-\\u206f",pi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jr="A-Z\\xc0-\\xd6\\xd8-\\xde",gi="\\ufe0e\\ufe0f",Br=di+mi+xi+pi,Yr="['\u2019]",$r="["+Br+"]",hi="["+li+"]",Kr="\\d+",bi="["+Xr+"]",Qr="["+Hr+"]",re="[^"+Fr+Br+Kr+Xr+Hr+Jr+"]",yi="\\ud83c[\\udffb-\\udfff]",wi="(?:"+hi+"|"+yi+")",vi="[^"+Fr+"]",ee="(?:\\ud83c[\\udde6-\\uddff]){2}",te="[\\ud800-\\udbff][\\udc00-\\udfff]",M="["+Jr+"]",Ti="\\u200d",ie="(?:"+Qr+"|"+re+")",Ci="(?:"+M+"|"+re+")",ne="(?:"+Yr+"(?:d|ll|m|re|s|t|ve))?",ue="(?:"+Yr+"(?:D|LL|M|RE|S|T|VE))?",ae=wi+"?",oe="["+gi+"]?",Pi="(?:"+Ti+"(?:"+[vi,ee,te].join("|")+")"+oe+ae+")*",Ri="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Si="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qi=oe+ae+Pi,Ai="(?:"+[bi,ee,te].join("|")+")"+qi,ji=RegExp([M+"?"+Qr+"+"+ne+"(?="+[$r,M,"$"].join("|")+")",Ci+"+"+ue+"(?="+[$r,M+ie,"$"].join("|")+")",M+"?"+ie+"+"+ne,M+"+"+ue,Si,Ri,Kr,Ai].join("|"),"g");function Oi(t){return t.match(ji)||[]}se.exports=Oi});var le=m((uu,ce)=>{var Mi=Vr(),Li=Wr(),Ni=G(),Ui=fe();function ki(t,r,i){return t=Ni(t),r=i?void 0:r,r===void 0?Li(t)?Ui(t):Mi(t):t.match(r)||[]}ce.exports=ki});var me=m((au,de)=>{var Di=nr(),Ei=Gr(),_i=le(),zi="['\u2019]",Gi=RegExp(zi,"g");function Ii(t){return function(r){return Di(_i(Ei(r).replace(Gi,"")),t,"")}}de.exports=Ii});var pe=m((ou,xe)=>{function Vi(t,r,i){var c=-1,d=t.length;r<0&&(r=-r>d?0:d+r),i=i>d?d:i,i<0&&(i+=d),d=r>i?0:i-r>>>0,r>>>=0;for(var x=Array(d);++c<d;)x[c]=t[c+r];return x}xe.exports=Vi});var he=m((su,ge)=>{var Zi=pe();function Wi(t,r,i){var c=t.length;return i=i===void 0?c:i,!r&&i>=c?t:Zi(t,r,i)}ge.exports=Wi});var Z=m((fu,be)=>{var Fi="\\ud800-\\udfff",Xi="\\u0300-\\u036f",Hi="\\ufe20-\\ufe2f",Ji="\\u20d0-\\u20ff",Bi=Xi+Hi+Ji,Yi="\\ufe0e\\ufe0f",$i="\\u200d",Ki=RegExp("["+$i+Fi+Bi+Yi+"]");function Qi(t){return Ki.test(t)}be.exports=Qi});var we=m((cu,ye)=>{function rn(t){return t.split("")}ye.exports=rn});var Ae=m((lu,qe)=>{var ve="\\ud800-\\udfff",en="\\u0300-\\u036f",tn="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",un=en+tn+nn,an="\\ufe0e\\ufe0f",on="["+ve+"]",W="["+un+"]",F="\\ud83c[\\udffb-\\udfff]",sn="(?:"+W+"|"+F+")",Te="[^"+ve+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",fn="\\u200d",Re=sn+"?",Se="["+an+"]?",cn="(?:"+fn+"(?:"+[Te,Ce,Pe].join("|")+")"+Se+Re+")*",ln=Se+Re+cn,dn="(?:"+[Te+W+"?",W,Ce,Pe,on].join("|")+")",mn=RegExp(F+"(?="+F+")|"+dn+ln,"g");function xn(t){return t.match(mn)||[]}qe.exports=xn});var Oe=m((du,je)=>{var pn=we(),gn=Z(),hn=Ae();function bn(t){return gn(t)?hn(t):pn(t)}je.exports=bn});var Le=m((mu,Me)=>{var yn=he(),wn=Z(),vn=Oe(),Tn=G();function Cn(t){return function(r){r=Tn(r);var i=wn(r)?vn(r):void 0,c=i?i[0]:r.charAt(0),d=i?yn(i,1).join(""):r.slice(1);return c[t]()+d}}Me.exports=Cn});var Ue=m((xu,Ne)=>{var Pn=Le(),Rn=Pn("toUpperCase");Ne.exports=Rn});var De=m((pu,ke)=>{var Sn=me(),qn=Ue(),An=Sn(function(t,r,i){return t+(i?" ":"")+qn(r)});ke.exports=An});var Ie=m((Ge,X)=>{(function(t,r,i){function c(e){var u=this,o=s();u.next=function(){var n=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=n-(u.c=n|0)},u.c=1,u.s0=o(" "),u.s1=o(" "),u.s2=o(" "),u.s0-=o(e),u.s0<0&&(u.s0+=1),u.s1-=o(e),u.s1<0&&(u.s1+=1),u.s2-=o(e),u.s2<0&&(u.s2+=1),o=null}function d(e,u){return u.c=e.c,u.s0=e.s0,u.s1=e.s1,u.s2=e.s2,u}function x(e,u){var o=new c(e),n=u&&u.state,a=o.next;return a.int32=function(){return o.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,n&&(typeof n=="object"&&d(n,o),a.state=function(){return d(o,{})}),a}function s(){var e=4022871197,u=function(o){o=String(o);for(var n=0;n<o.length;n++){e+=o.charCodeAt(n);var a=.02519603282416938*e;e=a>>>0,a-=e,a*=e,e=a>>>0,a-=e,e+=a*4294967296}return(e>>>0)*23283064365386963e-26};return u}r&&r.exports?r.exports=x:i&&i.amd?i(function(){return x}):this.alea=x})(Ge,typeof X=="object"&&X,typeof define=="function"&&define)});var Ze=m((Ve,H)=>{(function(t,r,i){function c(s){var e=this,u="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var n=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^n^n>>>8},s===(s|0)?e.x=s:u+=s;for(var o=0;o<u.length+64;o++)e.x^=u.charCodeAt(o)|0,e.next()}function d(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e}function x(s,e){var u=new c(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,l=(a+f)/(1<<21);while(l===0);return l},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&d(o,u),n.state=function(){return d(u,{})}),n}r&&r.exports?r.exports=x:i&&i.amd?i(function(){return x}):this.xor128=x})(Ve,typeof H=="object"&&H,typeof define=="function"&&define)});var Fe=m((We,J)=>{(function(t,r,i){function c(s){var e=this,u="";e.next=function(){var n=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(n^n<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,s===(s|0)?e.x=s:u+=s;for(var o=0;o<u.length+64;o++)e.x^=u.charCodeAt(o)|0,o==u.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function d(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e.v=s.v,e.d=s.d,e}function x(s,e){var u=new c(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,l=(a+f)/(1<<21);while(l===0);return l},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&d(o,u),n.state=function(){return d(u,{})}),n}r&&r.exports?r.exports=x:i&&i.amd?i(function(){return x}):this.xorwow=x})(We,typeof J=="object"&&J,typeof define=="function"&&define)});var He=m((Xe,B)=>{(function(t,r,i){function c(s){var e=this;e.next=function(){var o=e.x,n=e.i,a,f,l;return a=o[n],a^=a>>>7,f=a^a<<24,a=o[n+1&7],f^=a^a>>>10,a=o[n+3&7],f^=a^a>>>3,a=o[n+4&7],f^=a^a<<7,a=o[n+7&7],a=a^a<<13,f^=a^a<<9,o[n]=f,e.i=n+1&7,f};function u(o,n){var a,f,l=[];if(n===(n|0))f=l[0]=n;else for(n=""+n,a=0;a<n.length;++a)l[a&7]=l[a&7]<<15^n.charCodeAt(a)+l[a+1&7]<<13;for(;l.length<8;)l.push(0);for(a=0;a<8&&l[a]===0;++a);for(a==8?f=l[7]=-1:f=l[a],o.x=l,o.i=0,a=256;a>0;--a)o.next()}u(e,s)}function d(s,e){return e.x=s.x.slice(),e.i=s.i,e}function x(s,e){s==null&&(s=+new Date);var u=new c(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,l=(a+f)/(1<<21);while(l===0);return l},n.int32=u.next,n.quick=n,o&&(o.x&&d(o,u),n.state=function(){return d(u,{})}),n}r&&r.exports?r.exports=x:i&&i.amd?i(function(){return x}):this.xorshift7=x})(Xe,typeof B=="object"&&B,typeof define=="function"&&define)});var Be=m((Je,Y)=>{(function(t,r,i){function c(s){var e=this;e.next=function(){var o=e.w,n=e.X,a=e.i,f,l;return e.w=o=o+1640531527|0,l=n[a+34&127],f=n[a=a+1&127],l^=l<<13,f^=f<<17,l^=l>>>15,f^=f>>>12,l=n[a]=l^f,e.i=a,l+(o^o>>>16)|0};function u(o,n){var a,f,l,w,A,P=[],L=128;for(n===(n|0)?(f=n,n=null):(n=n+"\0",f=0,L=Math.max(L,n.length)),l=0,w=-32;w<L;++w)n&&(f^=n.charCodeAt((w+32)%n.length)),w===0&&(A=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,w>=0&&(A=A+1640531527|0,a=P[w&127]^=f+A,l=a==0?l+1:0);for(l>=128&&(P[(n&&n.length||0)&127]=-1),l=127,w=4*128;w>0;--w)f=P[l+34&127],a=P[l=l+1&127],f^=f<<13,a^=a<<17,f^=f>>>15,a^=a>>>12,P[l]=f^a;o.w=A,o.X=P,o.i=l}u(e,s)}function d(s,e){return e.i=s.i,e.w=s.w,e.X=s.X.slice(),e}function x(s,e){s==null&&(s=+new Date);var u=new c(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,l=(a+f)/(1<<21);while(l===0);return l},n.int32=u.next,n.quick=n,o&&(o.X&&d(o,u),n.state=function(){return d(u,{})}),n}r&&r.exports?r.exports=x:i&&i.amd?i(function(){return x}):this.xor4096=x})(Je,typeof Y=="object"&&Y,typeof define=="function"&&define)});var $e=m((Ye,$)=>{(function(t,r,i){function c(s){var e=this,u="";e.next=function(){var n=e.b,a=e.c,f=e.d,l=e.a;return n=n<<25^n>>>7^a,a=a-f|0,f=f<<24^f>>>8^l,l=l-n|0,e.b=n=n<<20^n>>>12^a,e.c=a=a-f|0,e.d=f<<16^a>>>16^l,e.a=l-n|0},e.a=0,e.b=0,e.c=2654435769|0,e.d=1367130551,s===Math.floor(s)?(e.a=s/4294967296|0,e.b=s|0):u+=s;for(var o=0;o<u.length+20;o++)e.b^=u.charCodeAt(o)|0,e.next()}function d(s,e){return e.a=s.a,e.b=s.b,e.c=s.c,e.d=s.d,e}function x(s,e){var u=new c(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,l=(a+f)/(1<<21);while(l===0);return l},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&d(o,u),n.state=function(){return d(u,{})}),n}r&&r.exports?r.exports=x:i&&i.amd?i(function(){return x}):this.tychei=x})(Ye,typeof $=="object"&&$,typeof define=="function"&&define)});var Ke=m(()=>{});var rt=m((Qe,V)=>{(function(t,r,i){var c=256,d=6,x=52,s="random",e=i.pow(c,d),u=i.pow(2,x),o=u*2,n=c-1,a;function f(p,g,y){var b=[];g=g==!0?{entropy:!0}:g||{};var h=P(A(g.entropy?[p,N(r)]:p??L(),3),b),v=new l(b),C=function(){for(var T=v.g(d),S=e,R=0;T<u;)T=(T+R)*c,S*=c,R=v.g(1);for(;T>=o;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return v.g(4)|0},C.quick=function(){return v.g(4)/4294967296},C.double=C,P(N(v.S),r),(g.pass||y||function(T,S,R,j){return j&&(j.S&&w(j,v),T.state=function(){return w(v,{})}),R?(i[s]=T,S):T})(C,h,"global"in g?g.global:this==i,g.state)}function l(p){var g,y=p.length,b=this,h=0,v=b.i=b.j=0,C=b.S=[];for(y||(p=[y++]);h<c;)C[h]=h++;for(h=0;h<c;h++)C[h]=C[v=n&v+p[h%y]+(g=C[h])],C[v]=g;(b.g=function(T){for(var S,R=0,j=b.i,D=b.j,U=b.S;T--;)S=U[j=n&j+1],R=R*c+U[n&(U[j]=U[D=n&D+S])+(U[D]=S)];return b.i=j,b.j=D,R})(c)}function w(p,g){return g.i=p.i,g.j=p.j,g.S=p.S.slice(),g}function A(p,g){var y=[],b=typeof p,h;if(g&&b=="object")for(h in p)try{y.push(A(p[h],g-1))}catch(v){}return y.length?y:b=="string"?p:p+"\0"}function P(p,g){for(var y=p+"",b,h=0;h<y.length;)g[n&h]=n&(b^=g[n&h]*19)+y.charCodeAt(h++);return N(g)}function L(){try{var p;return a&&(p=a.randomBytes)?p=p(c):(p=new Uint8Array(c),(t.crypto||t.msCrypto).getRandomValues(p)),N(p)}catch(b){var g=t.navigator,y=g&&g.plugins;return[+new Date,t,y,t.screen,N(r)]}}function N(p){return String.fromCharCode.apply(0,p)}if(P(i.random(),r),typeof V=="object"&&V.exports){V.exports=f;try{a=Ke()}catch(p){}}else typeof define=="function"&&define.amd?define(function(){return f}):i["seed"+s]=f})(typeof self!="undefined"?self:Qe,[],Math)});var tt=m((yu,et)=>{var Nn=Ie(),Un=Ze(),kn=Fe(),Dn=He(),En=Be(),_n=$e(),O=rt();O.alea=Nn;O.xor128=Un;O.xorwow=kn;O.xorshift7=Dn;O.xor4096=En;O.tychei=_n;et.exports=O});var Ee=er(De());function jn(t){return _(q({},t),{json:JSON.stringify(Mn(t),null,2)})}var On=`
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
    `,_e=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Mn(t){let{name:r,category:i,released:c,description:d,author:x,result:s,params:e,about:u,video:o}=t,{icon:n=_e}=t;return n==="glide"&&(n=On),{name:r,category:i,released:c,description:d,author:x,result:s,about:u,icon:n,video:o,params:Object.entries(e).map(([a,f])=>q({name:a},f))}}var Ln={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:_e,about:void 0,video:void 0,tests:[],run(){return tr(this,null,function*(){})}},I=class{constructor(r={},i=[]){this.definition=q(q({},Ln),r),this.requiredParams=[...i]}with(r,i=[]){return new I(q(q({},this.definition),r),[...this.requiredParams,...i])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,i){return this.with({author:`${r} <${i}>`})}withTest(r,i){let{tests:c=[]}=this.definition;return this.with({tests:[...c,{params:r,expectedResult:i}]})}withFailingTest(r,i){let{tests:c=[]}=this.definition;return this.with({tests:[...c,{params:r,expectedResult:i,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,i,c){return c===void 0&&(c=(0,Ee.default)(i)),this.with({params:_(q({},this.definition.params),{[i]:{type:r,displayName:c}})})}withRequiredParam(r,i,c){return this.withParam(r,i,c).with({},[i])}withPrimitiveParam(r,i){return this.withParam("primitive",r,i)}withStringParam(r,i){return this.withParam("string",r,i)}withDateParam(r,i){return this.withParam("date-time",r,i)}withNumberParam(r,i){return this.withParam("number",r,i)}withRequiredPrimitiveParam(r,i){return this.withRequiredParam("primitive",r,i)}withRequiredStringParam(r,i){return this.withRequiredParam("string",r,i)}withRequiredDateParam(r,i){return this.withRequiredParam("date-time",r,i)}withRequiredNumberParam(r,i){return this.withRequiredParam("number",r,i)}withStringArrayParam(r,i){return this.withParam({kind:"array",items:"string"},r,i)}withRequiredStringArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"string"},r,i)}withNumberArrayParam(r,i){return this.withParam({kind:"array",items:"number"},r,i)}withPrimitiveArrayParam(r,i){return this.withParam({kind:"array",items:"primitive"},r,i)}withRequiredPrimitiveArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"primitive"},r,i)}withExample(r){return this.with({example:r})}run(r){let{params:i}=this.definition,c=this.requiredParams,d=Object.keys(i);function x(...s){let e={};if(s.forEach(({value:u},o)=>{e[d[o]]=u}),!c.some(u=>e[u]===void 0))return r(e)}return jn(_(q({},this.definition),{run:x}))}};function ze(t){return new I({name:t})}var it=er(tt()),vu=ze("Random Number").withCategory("Number").withReleased("direct").withDescription("Turn any value into a stable random number.").withAuthor("davidbau","github.com/davidbau/seedrandom").withVideo("https://www.youtube.com/watch?v=GtOt7EBNEwQ").withRequiredPrimitiveParam("seed").withNumberResult().withTest({seed:"Glide"},.3711851882348728).run(({seed:t})=>(0,it.default)(t)());export{vu as default};
//# sourceMappingURL=function.js.map
