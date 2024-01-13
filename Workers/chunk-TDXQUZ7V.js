/*! For license information please see chunk-TDXQUZ7V.js.LICENSE.txt */
import{a as c,b as p,d as f}from"./chunk-T4TQMW7B.js";import{a as d}from"./chunk-7TT2TZHW.js";import{a as u}from"./chunk-XQTMMRVI.js";import{a as s}from"./chunk-QHDGFGBI.js";import{e as a}from"./chunk-MVZBAA6W.js";function e(e){this._ellipsoid=u(e,f.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(e.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),e.mercatorAngleToGeodeticLatitude=function(e){return d.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},e.geodeticLatitudeToMercatorAngle=function(t){t>e.MaximumLatitude?t=e.MaximumLatitude:t<-e.MaximumLatitude&&(t=-e.MaximumLatitude);let i=Math.sin(t);return.5*Math.log((1+i)/(1-i))},e.MaximumLatitude=e.mercatorAngleToGeodeticLatitude(Math.PI),e.prototype.project=function(t,i){let o=this._semimajorAxis,r=t.longitude*o,u=e.geodeticLatitudeToMercatorAngle(t.latitude)*o,s=t.height;return a(i)?(i.x=r,i.y=u,i.z=s,i):new c(r,u,s)},e.prototype.unproject=function(t,i){if(!a(t))throw new s("cartesian is required");let o=this._oneOverSemimajorAxis,r=t.x*o,u=e.mercatorAngleToGeodeticLatitude(t.y*o),n=t.z;return a(i)?(i.longitude=r,i.latitude=u,i.height=n,i):new p(r,u,n)};var L=e;export{L as a};