/*! For license information please see chunk-44WW6ROY.js.LICENSE.txt */
import{a as C}from"./chunk-3A7KKCUE.js";import{a as P}from"./chunk-NVBQCQFC.js";import{a as O,b as L}from"./chunk-T4TQMW7B.js";import{a as y}from"./chunk-7TT2TZHW.js";import{e as S}from"./chunk-MVZBAA6W.js";var T={};function b(t,e){return y.equalsEpsilon(t.latitude,e.latitude,y.EPSILON10)&&y.equalsEpsilon(t.longitude,e.longitude,y.EPSILON10)}var q=new L,v=new L;function w(t,e,i,o){let r=(e=P(e,O.equalsEpsilon)).length;if(r<2)return;let n=S(o),a=S(i),s=new Array(r),h=new Array(r),l=new Array(r),g=e[0];s[0]=g;let u=t.cartesianToCartographic(g,q);a&&(u.height=i[0]),h[0]=u.height,l[0]=n?o[0]:0;let p=h[0]===l[0],c=1;for(let m=1;m<r;++m){let r=e[m],g=t.cartesianToCartographic(r,v);a&&(g.height=i[m]),p=p&&0===g.height,b(u,g)?u.height<g.height&&(h[c-1]=g.height):(s[c]=r,h[c]=g.height,l[c]=n?o[m]:0,p=p&&h[c]===l[c],L.clone(g,u),++c)}return p||c<2?void 0:(s.length=c,h.length=c,l.length=c,{positions:s,topHeights:h,bottomHeights:l})}var D=new Array(2),F=new Array(2),B={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};T.computePositions=function(t,e,i,o,r,n){let a=w(t,e,i,o);if(!S(a))return;e=a.positions,i=a.topHeights,o=a.bottomHeights;let s,h,l=e.length,g=l-2,u=y.chordLength(r,t.maximumRadius),p=B;if(p.minDistance=u,p.ellipsoid=t,n){let t,r=0;for(t=0;t<l-1;t++)r+=C.numberOfPoints(e[t],e[t+1],u)+1;s=new Float64Array(3*r),h=new Float64Array(3*r);let n=D,a=F;p.positions=n,p.height=a;let g=0;for(t=0;t<l-1;t++){n[0]=e[t],n[1]=e[t+1],a[0]=i[t],a[1]=i[t+1];let r=C.generateArc(p);s.set(r,g),a[0]=o[t],a[1]=o[t+1],h.set(C.generateArc(p),g),g+=r.length}}else p.positions=e,p.height=i,s=new Float64Array(C.generateArc(p)),p.height=o,h=new Float64Array(C.generateArc(p));return{bottomPositions:h,topPositions:s,numCorners:g}};var j=T;export{j as a};