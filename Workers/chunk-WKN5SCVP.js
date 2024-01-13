/*! For license information please see chunk-WKN5SCVP.js.LICENSE.txt */
import{a as W}from"./chunk-UQA7A4FU.js";import{a as Z}from"./chunk-XAJFOHMU.js";import{a as X}from"./chunk-UUWY23O5.js";import{b as K,c as Q,d as V}from"./chunk-3DQAB6YL.js";import{d as H}from"./chunk-HXYTWA7P.js";import{a as U}from"./chunk-JJLMPDRL.js";import{a as r,d as J}from"./chunk-T4TQMW7B.js";import{a as B}from"./chunk-7TT2TZHW.js";import{a as u}from"./chunk-XQTMMRVI.js";import{a as P}from"./chunk-QHDGFGBI.js";import{e as T}from"./chunk-MVZBAA6W.js";var ii=new r(1,1,1),S=Math.cos,q=Math.sin;function x(i){i=u(i,u.EMPTY_OBJECT);let t=u(i.radii,ii),e=u(i.innerRadii,t),o=u(i.minimumClock,0),n=u(i.maximumClock,B.TWO_PI),a=u(i.minimumCone,0),s=u(i.maximumCone,B.PI),m=Math.round(u(i.stackPartitions,10)),f=Math.round(u(i.slicePartitions,8)),c=Math.round(u(i.subdivisions,128));if(m<1)throw new P("options.stackPartitions cannot be less than 1");if(f<0)throw new P("options.slicePartitions cannot be less than 0");if(c<0)throw new P("options.subdivisions must be greater than or equal to zero.");if(T(i.offsetAttribute)&&i.offsetAttribute===W.TOP)throw new P("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._radii=r.clone(t),this._innerRadii=r.clone(e),this._minimumClock=o,this._maximumClock=n,this._minimumCone=a,this._maximumCone=s,this._stackPartitions=m,this._slicePartitions=f,this._subdivisions=c,this._offsetAttribute=i.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}x.packedLength=2*r.packedLength+8,x.pack=function(i,t,e){if(!T(i))throw new P("value is required");if(!T(t))throw new P("array is required");return e=u(e,0),r.pack(i._radii,t,e),e+=r.packedLength,r.pack(i._innerRadii,t,e),e+=r.packedLength,t[e++]=i._minimumClock,t[e++]=i._maximumClock,t[e++]=i._minimumCone,t[e++]=i._maximumCone,t[e++]=i._stackPartitions,t[e++]=i._slicePartitions,t[e++]=i._subdivisions,t[e]=u(i._offsetAttribute,-1),t};var $=new r,G=new r,b={radii:$,innerRadii:G,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};x.unpack=function(i,t,e){if(!T(i))throw new P("array is required");t=u(t,0);let o=r.unpack(i,t,$);t+=r.packedLength;let n=r.unpack(i,t,G);t+=r.packedLength;let a=i[t++],s=i[t++],m=i[t++],f=i[t++],c=i[t++],l=i[t++],d=i[t++],h=i[t];return T(e)?(e._radii=r.clone(o,e._radii),e._innerRadii=r.clone(n,e._innerRadii),e._minimumClock=a,e._maximumClock=s,e._minimumCone=m,e._maximumCone=f,e._stackPartitions=c,e._slicePartitions=l,e._subdivisions=d,e._offsetAttribute=-1===h?void 0:h,e):(b.minimumClock=a,b.maximumClock=s,b.minimumCone=m,b.maximumCone=f,b.stackPartitions=c,b.slicePartitions=l,b.subdivisions=d,b.offsetAttribute=-1===h?void 0:h,new x(b))},x.createGeometry=function(i){let t=i._radii;if(t.x<=0||t.y<=0||t.z<=0)return;let r=i._innerRadii;if(r.x<=0||r.y<=0||r.z<=0)return;let e=i._minimumClock,o=i._maximumClock,n=i._minimumCone,a=i._maximumCone,s=i._subdivisions,m=J.fromCartesian3(t),u=i._slicePartitions+1,f=i._stackPartitions+1;u=Math.round(u*Math.abs(o-e)/B.TWO_PI),f=Math.round(f*Math.abs(a-n)/B.PI),u<2&&(u=2),f<2&&(f=2);let c=0,l=1,d=r.x!==t.x||r.y!==t.y||r.z!==t.z,h=!1,_=!1;d&&(l=2,n>0&&(h=!0,c+=u),a<Math.PI&&(_=!0,c+=u));let k,p,b,P,C=s*l*(f+u),x=new Float64Array(3*C),A=2*(C+c-(u+f)*l),w=Z.createTypedArray(C,A),y=0,v=new Array(f),M=new Array(f);for(k=0;k<f;k++)P=n+k*(a-n)/(f-1),v[k]=q(P),M[k]=S(P);let g=new Array(s),O=new Array(s);for(k=0;k<s;k++)b=e+k*(o-e)/(s-1),g[k]=q(b),O[k]=S(b);for(k=0;k<f;k++)for(p=0;p<s;p++)x[y++]=t.x*v[k]*O[p],x[y++]=t.y*v[k]*g[p],x[y++]=t.z*M[k];if(d)for(k=0;k<f;k++)for(p=0;p<s;p++)x[y++]=r.x*v[k]*O[p],x[y++]=r.y*v[k]*g[p],x[y++]=r.z*M[k];for(v.length=s,M.length=s,k=0;k<s;k++)P=n+k*(a-n)/(s-1),v[k]=q(P),M[k]=S(P);for(g.length=u,O.length=u,k=0;k<u;k++)b=e+k*(o-e)/(u-1),g[k]=q(b),O[k]=S(b);for(k=0;k<s;k++)for(p=0;p<u;p++)x[y++]=t.x*v[k]*O[p],x[y++]=t.y*v[k]*g[p],x[y++]=t.z*M[k];if(d)for(k=0;k<s;k++)for(p=0;p<u;p++)x[y++]=r.x*v[k]*O[p],x[y++]=r.y*v[k]*g[p],x[y++]=r.z*M[k];for(y=0,k=0;k<f*l;k++){let i=k*s;for(p=0;p<s-1;p++)w[y++]=i+p,w[y++]=i+p+1}let j=f*s*l;for(k=0;k<u;k++)for(p=0;p<s-1;p++)w[y++]=j+k+p*u,w[y++]=j+k+(p+1)*u;if(d)for(j=f*s*l+u*s,k=0;k<u;k++)for(p=0;p<s-1;p++)w[y++]=j+k+p*u,w[y++]=j+k+(p+1)*u;if(d){let i=f*s*l,t=i+s*u;if(h)for(k=0;k<u;k++)w[y++]=i+k,w[y++]=t+k;if(_)for(i+=s*u-u,t+=s*u-u,k=0;k<u;k++)w[y++]=i+k,w[y++]=t+k}let L=new X({position:new V({componentDatatype:U.DOUBLE,componentsPerAttribute:3,values:x})});if(T(i._offsetAttribute)){let t=x.length,r=i._offsetAttribute===W.NONE?0:1,e=new Uint8Array(t/3).fill(r);L.applyOffset=new V({componentDatatype:U.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return new Q({attributes:L,indices:w,primitiveType:K.LINES,boundingSphere:H.fromEllipsoid(m),offsetAttribute:i._offsetAttribute})};var Ci=x;export{Ci as a};