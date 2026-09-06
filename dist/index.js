"use strict";var l=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(t){throw (i=0, t)}};};var m=l(function(M,I){
var k=require('@stdlib/strided-base-reinterpret-complex64/dist'),j=require('@stdlib/complex-float32-real/dist'),x=require('@stdlib/complex-float32-imag/dist');function z(e,i,t,s,v,f,h){var u,n,q,o,a,y,R,p,r,c;if(e<=0)return v;if(u=j(i),n=x(i),q=j(t),o=x(t),a=k(v,0),p=f*2,r=h*2,e===1)return s?(a[r]=q,a[r+1]=o):(a[r]=u,a[r+1]=n),v;for(a[r]=u,a[r+1]=n,r+=p,s&&(e-=1),y=(q-u)/e,R=(o-n)/e,c=1;c<e;c++)a[r]=u+y*c,a[r+1]=n+R*c,r+=p;return s&&(a[r]=q,a[r+1]=o),v}I.exports=z
});var g=l(function(P,_){
var A=require('@stdlib/strided-base-stride2offset/dist'),B=m();function C(e,i,t,s,v,f){return B(e,i,t,s,v,f,A(e,f))}_.exports=C
});var O=l(function(Q,E){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=g(),F=m();D(w,"ndarray",F);E.exports=w
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=O(),d,b=H(G(__dirname,"./native.js"));J(b)?d=K:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
