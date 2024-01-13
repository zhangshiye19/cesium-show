/*! For license information please see createVectorTileGeometries.js.LICENSE.txt */
import{a as P}from"./chunk-IMNTO4PY.js";import{a as z}from"./chunk-K3QPRVQL.js";import"./chunk-D26HTPVM.js";import{a as H}from"./chunk-WX44YCE2.js";import{a as Y}from"./chunk-54KKWN6C.js";import{a as j}from"./chunk-DIWDGKD2.js";import"./chunk-UQA7A4FU.js";import"./chunk-TI5V2UQQ.js";import{a as W}from"./chunk-XAJFOHMU.js";import"./chunk-UUWY23O5.js";import"./chunk-3DQAB6YL.js";import{d as E}from"./chunk-HXYTWA7P.js";import"./chunk-AT27Z3WO.js";import{b as d}from"./chunk-HB5KYIAZ.js";import"./chunk-JJLMPDRL.js";import{a as o}from"./chunk-T4TQMW7B.js";import"./chunk-7TT2TZHW.js";import"./chunk-FRKPHPJC.js";import"./chunk-OHNTPGT4.js";import"./chunk-XQTMMRVI.js";import"./chunk-QHDGFGBI.js";import{e as l}from"./chunk-MVZBAA6W.js";function X(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var J=X,S=new o,$=d.packedLength+o.packedLength,ee=d.packedLength+2,ne=d.packedLength+o.packedLength,te=o.packedLength+1,u={modelMatrix:new d,boundingVolume:new E};function oe(e,t){let n=t*$,r=o.unpack(e,n,S);n+=o.packedLength;let i=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(i,r,i);let s=u.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=Math.sqrt(3),u}function ce(e,t){let n=t*ee,r=e[n++],i=e[n++],s=o.fromElements(r,r,i,S),a=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(a,s,a);let l=u.boundingVolume;return o.clone(o.ZERO,l.center),l.radius=Math.sqrt(2),u}function se(e,t){let n=t*ne,r=o.unpack(e,n,S);n+=o.packedLength;let i=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(i,r,i);let s=u.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=1,u}function ie(e,t){let n=t*te,r=e[n++],i=o.unpack(e,n,S),s=d.fromTranslation(i,u.modelMatrix);d.multiplyByUniformScale(s,r,s);let a=u.boundingVolume;return o.clone(o.ZERO,a.center),a.radius=1,u}var de=new o;function R(e,t,n,r,i){if(!l(t))return;let s=n.length,a=r.attributes.position.values,c=r.indices,u=e.positions,f=e.vertexBatchIds,h=e.indices,p=e.batchIds,m=e.batchTableColors,b=e.batchedIndices,k=e.indexOffsets,g=e.indexCounts,y=e.boundingVolumes,I=e.modelMatrix,x=e.center,A=e.positionOffset,w=e.batchIdIndex,B=e.indexOffset,j=e.batchedIndicesOffset;for(let l=0;l<s;++l){let e=i(t,l),r=e.modelMatrix;d.multiply(I,r,r);let s=n[l],O=a.length;for(let t=0;t<O;t+=3){let e=o.unpack(a,t,de);d.multiplyByPoint(r,e,e),o.subtract(e,x,e),o.pack(e,u,3*A+t),f[w++]=s}let T=c.length;for(let t=0;t<T;++t)h[B+t]=c[t]+A;let v=l+j;b[v]=new J({offset:B,count:T,color:P.fromRgba(m[s]),batchIds:[s]}),p[v]=s,k[v]=B,g[v]=T,y[v]=E.transform(e.boundingVolume,r),A+=O/3,B+=T}e.positionOffset=A,e.batchIdIndex=w,e.indexOffset=B,e.batchedIndicesOffset+=s}var K=new o,Q=new d;function re(e){let t=new Float64Array(e),n=0;o.unpack(t,n,K),n+=o.packedLength,d.unpack(t,n,Q)}function le(e){let t=e.length,n=0;for(let o=0;o<t;++o)n+=P.packedLength+3+e[o].batchIds.length;return n}function ae(e,t,n){let o=n.length,r=2+o*E.packedLength+1+le(t),i=new Float64Array(r),s=0;i[s++]=e,i[s++]=o;for(let l=0;l<o;++l)E.pack(n[l],i,s),s+=E.packedLength;let a=t.length;i[s++]=a;for(let l=0;l<a;++l){let e=t[l];P.pack(e.color,i,s),s+=P.packedLength,i[s++]=e.offset,i[s++]=e.count;let n=e.batchIds,o=n.length;i[s++]=o;for(let t=0;t<o;++t)i[s++]=n[t]}return i}function fe(e,t){let n=l(e.boxes)?new Float32Array(e.boxes):void 0,o=l(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,r=l(e.cylinders)?new Float32Array(e.cylinders):void 0,i=l(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,s=l(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,a=l(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,c=l(e.spheres)?new Float32Array(e.spheres):void 0,d=l(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,u=l(n)?o.length:0,f=l(r)?i.length:0,h=l(s)?a.length:0,p=l(c)?d.length:0,m=j.getUnitBox(),b=z.getUnitCylinder(),k=H.getUnitEllipsoid(),g=m.attributes.position.values,y=b.attributes.position.values,I=k.attributes.position.values,x=g.length*u;x+=y.length*f,x+=I.length*(h+p);let A=m.indices,w=b.indices,B=k.indices,O=A.length*u;O+=w.length*f,O+=B.length*(h+p);let T=new Float32Array(x),v=new Uint16Array(x/3),M=W.createTypedArray(x/3,O),U=u+f+h+p,E=new Uint16Array(U),L=new Array(U),P=new Uint32Array(U),V=new Uint32Array(U),F=new Array(U);re(e.packedBuffer);let C={batchTableColors:new Uint32Array(e.batchTableColors),positions:T,vertexBatchIds:v,indices:M,batchIds:E,batchedIndices:L,indexOffsets:P,indexCounts:V,boundingVolumes:F,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:Q,center:K};R(C,n,o,m,oe),R(C,r,i,b,ce),R(C,s,a,k,se),R(C,c,d,k,ie);let S=ae(M.BYTES_PER_ELEMENT,L,F);return t.push(T.buffer,v.buffer,M.buffer),t.push(E.buffer,P.buffer,V.buffer),t.push(S.buffer),{positions:T.buffer,vertexBatchIds:v.buffer,indices:M.buffer,indexOffsets:P.buffer,indexCounts:V.buffer,batchIds:E.buffer,packedBuffer:S.buffer}}var Oe=Y(fe);export{Oe as default};