"use strict";var d=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(t){throw (i=0, t)}};};var y=d(function(Q,g){
var z=require('@stdlib/strided-base-reinterpret-complex64/dist'),I=require('@stdlib/complex-float32-real/dist'),_=require('@stdlib/complex-float32-imag/dist'),v=require('@stdlib/number-float64-base-to-float32/dist');function A(a,i,t,u,s,q,k){var n,c,o,p,e,j,x,l,r,m,f;if(a<=0)return s;if(n=I(i),c=_(i),o=I(t),p=_(t),e=z(s,0),l=q*2,r=k*2,a===1)return u?(e[r]=o,e[r+1]=p):(e[r]=n,e[r+1]=c),s;for(e[r]=n,e[r+1]=c,r+=l,u&&(a-=1),m=v(a),j=v(v(o-n)/m),x=v(v(p-c)/m),f=1;f<a;f++)e[r]=v(n+v(j*f)),e[r+1]=v(c+v(x*f)),r+=l;return u&&(e[r]=o,e[r+1]=p),s}g.exports=A
});var E=d(function(S,w){
var B=require('@stdlib/strided-base-stride2offset/dist'),C=y();function D(a,i,t,u,s,q){return C(a,i,t,u,s,q,B(a,q))}w.exports=D
});var b=d(function(T,O){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),G=y();F(M,"ndarray",G);O.exports=M
});var H=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=b(),R,h=J(H(__dirname,"./native.js"));K(h)?R=L:R=h;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
