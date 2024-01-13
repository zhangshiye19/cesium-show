/*! For license information please see chunk-H2V7D5W3.js.LICENSE.txt */
import{a as p,b as P,d as q}from"./chunk-T4TQMW7B.js";import{a}from"./chunk-7TT2TZHW.js";import{a as T}from"./chunk-XQTMMRVI.js";import{a as S,b as g}from"./chunk-QHDGFGBI.js";import{e as l}from"./chunk-MVZBAA6W.js";function y(t,i,e){if(0===t)return i*e;let a=t*t,n=a*a,s=n*a,l=s*a,h=l*a,o=h*a,d=e;return i*((1-a/4-3*n/64-5*s/256-175*l/16384-441*h/65536-4851*o/1048576)*d-(3*a/8+3*n/32+45*s/1024+105*l/4096+2205*h/131072+6237*o/524288)*Math.sin(2*d)+(15*n/256+45*s/1024+525*l/16384+1575*h/65536+155925*o/8388608)*Math.sin(4*d)-(35*s/3072+175*l/12288+3675*h/262144+13475*o/1048576)*Math.sin(6*d)+(315*l/131072+2205*h/524288+43659*o/8388608)*Math.sin(8*d)-(693*h/1310720+6237*o/5242880)*Math.sin(10*d)+1001*o/8388608*Math.sin(12*d))}function z(t,i,e){let a=t/e;if(0===i)return a;let n=a*a,s=n*a,l=s*a,h=i*i,o=h*h,d=o*h,u=d*h,r=u*h,c=r*h,g=Math.sin(2*a),_=Math.cos(2*a),p=Math.sin(4*a),M=Math.cos(4*a),f=Math.sin(6*a),m=Math.cos(6*a),P=Math.sin(8*a),O=Math.cos(8*a),T=Math.sin(10*a);return a+a*h/4+7*a*o/64+15*a*d/256+579*a*u/16384+1515*a*r/65536+16837*a*c/1048576+(3*a*o/16+45*a*d/256-a*(32*n-561)*u/4096-a*(232*n-1677)*r/16384+a*(399985-90560*n+512*l)*c/5242880)*_+(21*a*d/256+483*a*u/4096-a*(224*n-1969)*r/16384-a*(33152*n-112599)*c/1048576)*M+(151*a*u/4096+4681*a*r/65536+1479*a*c/16384-453*s*c/32768)*m+(1097*a*r/65536+42783*a*c/1048576)*O+8011*a*c/1048576*Math.cos(10*a)+(3*h/8+3*o/16+213*d/2048-3*n*d/64+255*u/4096-33*n*u/512+20861*r/524288-33*n*r/512+l*r/1024+28273*c/1048576-471*n*c/8192+9*l*c/4096)*g+(21*o/256+21*d/256+533*u/8192-21*n*u/512+197*r/4096-315*n*r/4096+584039*c/16777216-12517*n*c/131072+7*l*c/2048)*p+(151*d/6144+151*u/4096+5019*r/131072-453*n*r/16384+26965*c/786432-8607*n*c/131072)*f+(1097*u/131072+1097*r/65536+225797*c/10485760-1097*n*c/65536)*P+(8011*r/2621440+8011*c/1048576)*T+293393*c/251658240*Math.sin(12*a)}function O(t,i){if(0===t)return Math.log(Math.tan(.5*(a.PI_OVER_TWO+i)));let e=t*Math.sin(i);return Math.log(Math.tan(.5*(a.PI_OVER_TWO+i)))-t/2*Math.log((1+e)/(1-e))}function G(t,i,e,n,s){let l=O(t._ellipticity,e),h=O(t._ellipticity,s);return Math.atan2(a.negativePiToPi(n-i),h-l)}function k(t,i,e,n,s,l,h){let o=t._heading,d=l-n,u=0;if(a.equalsEpsilon(Math.abs(o),a.PI_OVER_TWO,a.EPSILON8))if(i===e)u=i*Math.cos(s)*a.negativePiToPi(d);else{let e=Math.sin(s);u=i*Math.cos(s)*a.negativePiToPi(d)/Math.sqrt(1-t._ellipticitySquared*e*e)}else{let e=y(t._ellipticity,i,s);u=(y(t._ellipticity,i,h)-e)/Math.cos(o)}return Math.abs(u)}var A=new p,w=new p;function D(t,i,e,a){let n=p.normalize(a.cartographicToCartesian(i,w),A),s=p.normalize(a.cartographicToCartesian(e,w),w);g.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(p.angleBetween(n,s))-Math.PI),.0125);let l=a.maximumRadius,h=a.minimumRadius,o=l*l,d=h*h;t._ellipticitySquared=(o-d)/o,t._ellipticity=Math.sqrt(t._ellipticitySquared),t._start=P.clone(i,t._start),t._start.height=0,t._end=P.clone(e,t._end),t._end.height=0,t._heading=G(t,i.longitude,i.latitude,e.longitude,e.latitude),t._distance=k(t,a.maximumRadius,a.minimumRadius,i.longitude,i.latitude,e.longitude,e.latitude)}function v(t,i,e,n,s,h){if(0===e)return P.clone(t,h);let o,d,u,r=s*s;if(Math.abs(a.PI_OVER_TWO-Math.abs(i))>a.EPSILON8){if(d=z(y(s,n,t.latitude)+e*Math.cos(i),s,n),Math.abs(i)<a.EPSILON10)o=a.negativePiToPi(t.longitude);else{let e=O(s,t.latitude),n=O(s,d);u=Math.tan(i)*(n-e),o=a.negativePiToPi(t.longitude+u)}}else{let l;if(d=t.latitude,0===s)l=n*Math.cos(t.latitude);else{let i=Math.sin(t.latitude);l=n*Math.cos(t.latitude)/Math.sqrt(1-r*i*i)}u=e/l,o=i>0?a.negativePiToPi(t.longitude+u):a.negativePiToPi(t.longitude-u)}return l(h)?(h.longitude=o,h.latitude=d,h.height=0,h):new P(o,d,0)}function m(t,i,e){let a=T(e,q.WGS84);this._ellipsoid=a,this._start=new P,this._end=new P,this._heading=void 0,this._distance=void 0,this._ellipticity=void 0,this._ellipticitySquared=void 0,l(t)&&l(i)&&D(this,t,i,a)}Object.defineProperties(m.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return g.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},heading:{get:function(){return g.defined("distance",this._distance),this._heading}}}),m.fromStartHeadingDistance=function(t,i,e,n,s){g.defined("start",t),g.defined("heading",i),g.defined("distance",e),g.typeOf.number.greaterThan("distance",e,0);let h=T(n,q.WGS84),o=h.maximumRadius,d=h.minimumRadius,u=o*o,r=d*d,c=Math.sqrt((u-r)/u),_=v(t,i=a.negativePiToPi(i),e,h.maximumRadius,c);return!l(s)||l(n)&&!n.equals(s.ellipsoid)?new m(t,_,h):(s.setEndPoints(t,_),s)},m.prototype.setEndPoints=function(t,i){g.defined("start",t),g.defined("end",i),D(this,t,i,this._ellipsoid)},m.prototype.interpolateUsingFraction=function(t,i){return this.interpolateUsingSurfaceDistance(t*this._distance,i)},m.prototype.interpolateUsingSurfaceDistance=function(t,i){if(g.typeOf.number("distance",t),!l(this._distance)||0===this._distance)throw new S("EllipsoidRhumbLine must have distinct start and end set.");return v(this._start,this._heading,t,this._ellipsoid.maximumRadius,this._ellipticity,i)},m.prototype.findIntersectionWithLongitude=function(t,i){if(g.typeOf.number("intersectionLongitude",t),!l(this._distance)||0===this._distance)throw new S("EllipsoidRhumbLine must have distinct start and end set.");let e=this._ellipticity,n=this._heading,s=Math.abs(n),h=this._start;if(t=a.negativePiToPi(t),a.equalsEpsilon(Math.abs(t),Math.PI,a.EPSILON14)&&(t=a.sign(h.longitude)*Math.PI),l(i)||(i=new P),Math.abs(a.PI_OVER_TWO-s)<=a.EPSILON8)return i.longitude=t,i.latitude=h.latitude,i.height=0,i;if(a.equalsEpsilon(Math.abs(a.PI_OVER_TWO-s),a.PI_OVER_TWO,a.EPSILON8))return a.equalsEpsilon(t,h.longitude,a.EPSILON12)?void 0:(i.longitude=t,i.latitude=a.PI_OVER_TWO*a.sign(a.PI_OVER_TWO-n),i.height=0,i);let o,d=h.latitude,u=e*Math.sin(d),r=Math.tan(.5*(a.PI_OVER_TWO+d))*Math.exp((t-h.longitude)/Math.tan(n)),c=(1+u)/(1-u),_=h.latitude;do{o=_;let t=e*Math.sin(o),i=(1+t)/(1-t);_=2*Math.atan(r*Math.pow(i/c,e/2))-a.PI_OVER_TWO}while(!a.equalsEpsilon(_,o,a.EPSILON12));return i.longitude=t,i.latitude=_,i.height=0,i},m.prototype.findIntersectionWithLatitude=function(t,i){if(g.typeOf.number("intersectionLatitude",t),!l(this._distance)||0===this._distance)throw new S("EllipsoidRhumbLine must have distinct start and end set.");let e=this._ellipticity,n=this._heading,s=this._start;if(a.equalsEpsilon(Math.abs(n),a.PI_OVER_TWO,a.EPSILON8))return;let h=O(e,s.latitude),o=O(e,t),d=Math.tan(n)*(o-h),u=a.negativePiToPi(s.longitude+d);return l(i)?(i.longitude=u,i.latitude=t,i.height=0,i):new P(u,t,0)};var $=m;export{$ as a};