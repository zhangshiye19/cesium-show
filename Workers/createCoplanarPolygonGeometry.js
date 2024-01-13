/*! For license information please see createCoplanarPolygonGeometry.js.LICENSE.txt */
import{a as et}from"./chunk-THO776GY.js";import{a as U}from"./chunk-A2ICXRGJ.js";import"./chunk-3M3462KZ.js";import{a as y}from"./chunk-5V6YZTXN.js";import"./chunk-EQLRADTK.js";import{a as I}from"./chunk-QGLI6LEB.js";import{a as $}from"./chunk-Y3WNYLCC.js";import"./chunk-TBE3AFZU.js";import"./chunk-5Q3AVAQU.js";import{a as u}from"./chunk-TI5V2UQQ.js";import"./chunk-ZI3LUCJT.js";import"./chunk-WEOEL435.js";import{b as ot}from"./chunk-55576DY4.js";import{a as tt}from"./chunk-NVBQCQFC.js";import"./chunk-H2V7D5W3.js";import"./chunk-UNOEZU66.js";import"./chunk-7AJQ7HJO.js";import{a as J}from"./chunk-XAJFOHMU.js";import{a as X}from"./chunk-UUWY23O5.js";import{b as K,c as Y,d as z}from"./chunk-3DQAB6YL.js";import{d as Z,f as Q}from"./chunk-HXYTWA7P.js";import"./chunk-AT27Z3WO.js";import"./chunk-HB5KYIAZ.js";import{a as N}from"./chunk-JJLMPDRL.js";import{a as i,c as x,d as m,e as P}from"./chunk-T4TQMW7B.js";import{a as q}from"./chunk-7TT2TZHW.js";import"./chunk-FRKPHPJC.js";import"./chunk-OHNTPGT4.js";import{a as f}from"./chunk-XQTMMRVI.js";import{b as B}from"./chunk-QHDGFGBI.js";import{e as g}from"./chunk-MVZBAA6W.js";var st=new i,at=new et,pt=new x,lt=new x,mt=new i,ft=new i,ut=new i,V=new i,yt=new i,ht=new i,nt=new Q,dt=new P,gt=new P,Pt=new i;function wt(t,e,n,o,r,a,s,c,p){let l=t.positions,u=ot.triangulate(t.positions2D,t.holes);u.length<3&&(u=[0,1,2]);let m=J.createTypedArray(l.length,u.length);m.set(u);let h=dt;if(0!==o){let t=Q.fromAxisAngle(s,o,nt);if(h=P.fromQuaternion(t,h),e.tangent||e.bitangent){t=Q.fromAxisAngle(s,-o,nt);let n=P.fromQuaternion(t,gt);c=i.normalize(P.multiplyByVector(n,c,c),c),e.bitangent&&(p=i.normalize(i.cross(s,c,p),p))}}else h=P.clone(P.IDENTITY,h);let y=lt;e.st&&(y.x=n.x,y.y=n.y);let d=l.length,f=3*d,k=new Float64Array(f),A=e.normal?new Float32Array(f):void 0,T=e.tangent?new Float32Array(f):void 0,w=e.bitangent?new Float32Array(f):void 0,j=e.st?new Float32Array(2*d):void 0,v=0,_=0,E=0,F=0,L=0;for(let i=0;i<d;i++){let t=l[i];if(k[v++]=t.x,k[v++]=t.y,k[v++]=t.z,e.st)if(g(r)&&r.positions.length===d)j[L++]=r.positions[i].x,j[L++]=r.positions[i].y;else{let e=a(P.multiplyByVector(h,t,st),pt);x.subtract(e,y,e);let o=q.clamp(e.x/n.width,0,1),i=q.clamp(e.y/n.height,0,1);j[L++]=o,j[L++]=i}e.normal&&(A[_++]=s.x,A[_++]=s.y,A[_++]=s.z),e.tangent&&(T[F++]=c.x,T[F++]=c.y,T[F++]=c.z),e.bitangent&&(w[E++]=p.x,w[E++]=p.y,w[E++]=p.z)}let b=new X;return e.position&&(b.position=new z({componentDatatype:N.DOUBLE,componentsPerAttribute:3,values:k})),e.normal&&(b.normal=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:A})),e.tangent&&(b.tangent=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:T})),e.bitangent&&(b.bitangent=new z({componentDatatype:N.FLOAT,componentsPerAttribute:3,values:w})),e.st&&(b.st=new z({componentDatatype:N.FLOAT,componentsPerAttribute:2,values:j})),new Y({attributes:b,indices:m,primitiveType:K.TRIANGLES})}function E(t){let e=(t=f(t,f.EMPTY_OBJECT)).polygonHierarchy,n=t.textureCoordinates;B.defined("options.polygonHierarchy",e);let o=f(t.vertexFormat,u.DEFAULT);this._vertexFormat=u.clone(o),this._polygonHierarchy=e,this._stRotation=f(t.stRotation,0),this._ellipsoid=m.clone(f(t.ellipsoid,m.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=y.computeHierarchyPackedLength(e,i)+u.packedLength+m.packedLength+(g(n)?y.computeHierarchyPackedLength(n,x):1)+2}E.fromPositions=function(t){return t=f(t,f.EMPTY_OBJECT),B.defined("options.positions",t.positions),new E({polygonHierarchy:{positions:t.positions},vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,textureCoordinates:t.textureCoordinates})},E.pack=function(t,e,n){return B.typeOf.object("value",t),B.defined("array",e),n=f(n,0),n=y.packPolygonHierarchy(t._polygonHierarchy,e,n,i),m.pack(t._ellipsoid,e,n),n+=m.packedLength,u.pack(t._vertexFormat,e,n),n+=u.packedLength,e[n++]=t._stRotation,g(t._textureCoordinates)?n=y.packPolygonHierarchy(t._textureCoordinates,e,n,x):e[n++]=-1,e[n++]=t.packedLength,e};var _t=m.clone(m.UNIT_SPHERE),At=new u,bt={polygonHierarchy:{}};E.unpack=function(t,e,n){B.defined("array",t),e=f(e,0);let o=y.unpackPolygonHierarchy(t,e,i);e=o.startingIndex,delete o.startingIndex;let r=m.unpack(t,e,_t);e+=m.packedLength;let a=u.unpack(t,e,At);e+=u.packedLength;let s=t[e++],c=-1===t[e]?void 0:y.unpackPolygonHierarchy(t,e,x);g(c)?(e=c.startingIndex,delete c.startingIndex):e++;let p=t[e++];return g(n)||(n=new E(bt)),n._polygonHierarchy=o,n._ellipsoid=m.clone(r,n._ellipsoid),n._vertexFormat=u.clone(a,n._vertexFormat),n._stRotation=s,n._textureCoordinates=c,n.packedLength=p,n},E.createGeometry=function(t){let e=t._vertexFormat,n=t._polygonHierarchy,o=t._stRotation,r=t._textureCoordinates,a=g(r),s=n.positions;if(s=tt(s,i.equalsEpsilon,!0),s.length<3)return;let c=mt,p=ft,l=ut,u=yt,m=ht;if(!U.computeProjectTo2DArguments(s,V,u,m))return;if(c=i.cross(u,m,c),c=i.normalize(c,c),!i.equalsEpsilon(V,i.ZERO,q.EPSILON6)){let e=t._ellipsoid.geodeticSurfaceNormal(V,Pt);i.dot(c,e)<0&&(c=i.negate(c,c),u=i.negate(u,u))}let h=U.createProjectPointsTo2DFunction(V,u,m),d=U.createProjectPointTo2DFunction(V,u,m);e.tangent&&(p=i.clone(u,p)),e.bitangent&&(l=i.clone(m,l));let f=y.polygonsFromHierarchy(n,a,h,!1),k=f.hierarchy,A=f.polygons,P=a?y.polygonsFromHierarchy(r,!0,(function(t){return t}),!1).polygons:void 0;if(0===k.length)return;s=k[0].outerRing;let x=Z.fromPoints(s),T=y.computeBoundingRectangle(c,d,s,o,at),w=[];for(let i=0;i<A.length;i++){let t=new I({geometry:wt(A[i],e,T,o,a?P[i]:void 0,d,c,p,l)});w.push(t)}let j=$.combineInstances(w)[0];j.attributes.position.values=new Float64Array(j.attributes.position.values),j.indices=J.createTypedArray(j.attributes.position.values.length/3,j.indices);let v=j.attributes;return e.position||delete v.position,new Y({attributes:v,indices:j.indices,primitiveType:j.primitiveType,boundingSphere:x})};var W=E;function kt(t,e){return g(e)&&(t=W.unpack(t,e)),W.createGeometry(t)}var Xt=kt;export{Xt as default};