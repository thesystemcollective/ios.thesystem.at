import{E as t,M as i}from"./MathUtils.js";import{bn as s}from"./constants.js";import{C as e}from"./Color.js";import{V as r,M as n,O as h,a as o}from"./Object3D.js";class a{constructor(t=0,i=0){Object.defineProperty(this,"isVector2",{value:!0}),this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,i){return void 0!==i?this.addVectors(t,i):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t,i){return void 0!==i?this.subVectors(t,i):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,e=t.elements;return this.x=e[0]*i+e[3]*s+e[6],this.y=e[1]*i+e[4]*s+e[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i){return void 0===i&&(i=0),this.x=t[i],this.y=t[i+1],this}toArray(t,i){return void 0===t&&(t=[]),void 0===i&&(i=0),t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i,s){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),e=Math.sin(i),r=this.x-t.x,n=this.y-t.y;return this.x=r*s-n*e+t.x,this.y=r*e+n*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}class u{constructor(t,i){Object.defineProperty(this,"isBox3",{value:!0}),this.min=void 0!==t?t:new r(1/0,1/0,1/0),this.max=void 0!==i?i:new r(-1/0,-1/0,-1/0)}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){let i=1/0,s=1/0,e=1/0,r=-1/0,n=-1/0,h=-1/0;for(let o=0,a=t.length;o<a;o+=3){const a=t[o],u=t[o+1],c=t[o+2];a<i&&(i=a),u<s&&(s=u),c<e&&(e=c),a>r&&(r=a),u>n&&(n=u),c>h&&(h=c)}return this.min.set(i,s,e),this.max.set(r,n,h),this}setFromBufferAttribute(t){let i=1/0,s=1/0,e=1/0,r=-1/0,n=-1/0,h=-1/0;for(let o=0,a=t.count;o<a;o++){const a=t.getX(o),u=t.getY(o),c=t.getZ(o);a<i&&(i=a),u<s&&(s=u),c<e&&(e=c),a>r&&(r=a),u>n&&(n=u),c>h&&(h=c)}return this.min.set(i,s,e),this.max.set(r,n,h),this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=m.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t){return this.makeEmpty(),this.expandByObject(t)}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return void 0===t&&(t=new r),this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return void 0===t&&(t=new r),this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t){t.updateWorldMatrix(!1,!1);const i=t.geometry;void 0!==i&&(null===i.boundingBox&&i.computeBoundingBox(),y.copy(i.boundingBox),y.applyMatrix4(t.matrixWorld),this.union(y));const s=t.children;for(let t=0,i=s.length;t<i;t++)this.expandByObject(s[t]);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return void 0===i&&(i=new r),i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,m),m.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(w),z.subVectors(this.max,w),d.subVectors(t.a,w),x.subVectors(t.b,w),p.subVectors(t.c,w),f.subVectors(x,d),g.subVectors(p,x),b.subVectors(d,p);let i=[0,-f.z,f.y,0,-g.z,g.y,0,-b.z,b.y,f.z,0,-f.x,g.z,0,-g.x,b.z,0,-b.x,-f.y,f.x,0,-g.y,g.x,0,-b.y,b.x,0];return!!c(i,d,x,p,z)&&(i=[1,0,0,0,1,0,0,0,1],!!c(i,d,x,p,z)&&(M.crossVectors(f,g),i=[M.x,M.y,M.z],c(i,d,x,p,z)))}clampPoint(t,i){return void 0===i&&(i=new r),i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return m.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=.5*this.getSize(m).length(),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(l[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),l[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),l[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),l[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),l[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),l[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),l[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),l[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(l)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}function c(t,i,s,e,r){for(let n=0,h=t.length-3;n<=h;n+=3){v.fromArray(t,n);const h=r.x*Math.abs(v.x)+r.y*Math.abs(v.y)+r.z*Math.abs(v.z),o=i.dot(v),a=s.dot(v),u=e.dot(v);if(Math.max(-Math.max(o,a,u),Math.min(o,a,u))>h)return!1}return!0}const l=[new r,new r,new r,new r,new r,new r,new r,new r],m=new r,y=new u,d=new r,x=new r,p=new r,f=new r,g=new r,b=new r,w=new r,z=new r,M=new r,v=new r,A=new u;class S{constructor(t,i){this.center=void 0!==t?t:new r,this.radius=void 0!==i?i:-1}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;void 0!==i?s.copy(i):A.setFromPoints(t).getCenter(s);let e=0;for(let i=0,r=t.length;i<r;i++)e=Math.max(e,s.distanceToSquared(t[i]));return this.radius=Math.sqrt(e),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return void 0===i&&(i=new r),i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return void 0===t&&(t=new u),this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}}class B{constructor(t=0,i=0,s=0,e=1){Object.defineProperty(this,"isVector4",{value:!0}),this.x=t,this.y=i,this.z=s,this.w=e}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,e){return this.x=t,this.y=i,this.z=s,this.w=e,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t,i){return void 0!==i?this.addVectors(t,i):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t,i){return void 0!==i?this.subVectors(t,i):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,e=this.z,r=this.w,n=t.elements;return this.x=n[0]*i+n[4]*s+n[8]*e+n[12]*r,this.y=n[1]*i+n[5]*s+n[9]*e+n[13]*r,this.z=n[2]*i+n[6]*s+n[10]*e+n[14]*r,this.w=n[3]*i+n[7]*s+n[11]*e+n[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,e,r;const n=.01,h=.1,o=t.elements,a=o[0],u=o[4],c=o[8],l=o[1],m=o[5],y=o[9],d=o[2],x=o[6],p=o[10];if(Math.abs(u-l)<n&&Math.abs(c-d)<n&&Math.abs(y-x)<n){if(Math.abs(u+l)<h&&Math.abs(c+d)<h&&Math.abs(y+x)<h&&Math.abs(a+m+p-3)<h)return this.set(1,0,0,0),this;i=Math.PI;const t=(a+1)/2,o=(m+1)/2,f=(p+1)/2,g=(u+l)/4,b=(c+d)/4,w=(y+x)/4;return t>o&&t>f?t<n?(s=0,e=.707106781,r=.707106781):(s=Math.sqrt(t),e=g/s,r=b/s):o>f?o<n?(s=.707106781,e=0,r=.707106781):(e=Math.sqrt(o),s=g/e,r=w/e):f<n?(s=.707106781,e=.707106781,r=0):(r=Math.sqrt(f),s=b/r,e=w/r),this.set(s,e,r,i),this}let f=Math.sqrt((x-y)*(x-y)+(c-d)*(c-d)+(l-u)*(l-u));return Math.abs(f)<.001&&(f=1),this.x=(x-y)/f,this.y=(c-d)/f,this.z=(l-u)/f,this.w=Math.acos((a+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i){return void 0===i&&(i=0),this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t,i){return void 0===t&&(t=[]),void 0===i&&(i=0),t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i,s){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}const N=new r,U=new a;function V(t,i,e){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=i,this.count=void 0!==t?t.length/i:0,this.normalized=!0===e,this.usage=s,this.updateRange={offset:0,count:-1},this.version=0}function T(t,i,s){V.call(this,new Int8Array(t),i,s)}function k(t,i,s){V.call(this,new Uint8Array(t),i,s)}function O(t,i,s){V.call(this,new Uint8ClampedArray(t),i,s)}function P(t,i,s){V.call(this,new Int16Array(t),i,s)}function X(t,i,s){V.call(this,new Uint16Array(t),i,s)}function j(t,i,s){V.call(this,new Int32Array(t),i,s)}function q(t,i,s){V.call(this,new Uint32Array(t),i,s)}function Y(t,i,s){V.call(this,new Float32Array(t),i,s)}function F(t,i,s){V.call(this,new Float64Array(t),i,s)}Object.defineProperty(V.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(V.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this},copyAt:function(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let e=0,r=this.itemSize;e<r;e++)this.array[t+e]=i.array[s+e];return this},copyArray:function(t){return this.array.set(t),this},copyColorsArray:function(t){const i=this.array;let s=0;for(let r=0,n=t.length;r<n;r++){let n=t[r];void 0===n&&(n=new e),i[s++]=n.r,i[s++]=n.g,i[s++]=n.b}return this},copyVector2sArray:function(t){const i=this.array;let s=0;for(let e=0,r=t.length;e<r;e++){let r=t[e];void 0===r&&(r=new a),i[s++]=r.x,i[s++]=r.y}return this},copyVector3sArray:function(t){const i=this.array;let s=0;for(let e=0,n=t.length;e<n;e++){let n=t[e];void 0===n&&(n=new r),i[s++]=n.x,i[s++]=n.y,i[s++]=n.z}return this},copyVector4sArray:function(t){const i=this.array;let s=0;for(let e=0,r=t.length;e<r;e++){let r=t[e];void 0===r&&(r=new B),i[s++]=r.x,i[s++]=r.y,i[s++]=r.z,i[s++]=r.w}return this},applyMatrix3:function(t){if(2===this.itemSize)for(let i=0,s=this.count;i<s;i++)U.fromBufferAttribute(this,i),U.applyMatrix3(t),this.setXY(i,U.x,U.y);else if(3===this.itemSize)for(let i=0,s=this.count;i<s;i++)N.fromBufferAttribute(this,i),N.applyMatrix3(t),this.setXYZ(i,N.x,N.y,N.z);return this},applyMatrix4:function(t){for(let i=0,s=this.count;i<s;i++)N.x=this.getX(i),N.y=this.getY(i),N.z=this.getZ(i),N.applyMatrix4(t),this.setXYZ(i,N.x,N.y,N.z);return this},applyNormalMatrix:function(t){for(let i=0,s=this.count;i<s;i++)N.x=this.getX(i),N.y=this.getY(i),N.z=this.getZ(i),N.applyNormalMatrix(t),this.setXYZ(i,N.x,N.y,N.z);return this},transformDirection:function(t){for(let i=0,s=this.count;i<s;i++)N.x=this.getX(i),N.y=this.getY(i),N.z=this.getZ(i),N.transformDirection(t),this.setXYZ(i,N.x,N.y,N.z);return this},set:function(t,i){return void 0===i&&(i=0),this.array.set(t,i),this},getX:function(t){return this.array[t*this.itemSize]},setX:function(t,i){return this.array[t*this.itemSize]=i,this},getY:function(t){return this.array[t*this.itemSize+1]},setY:function(t,i){return this.array[t*this.itemSize+1]=i,this},getZ:function(t){return this.array[t*this.itemSize+2]},setZ:function(t,i){return this.array[t*this.itemSize+2]=i,this},getW:function(t){return this.array[t*this.itemSize+3]},setW:function(t,i){return this.array[t*this.itemSize+3]=i,this},setXY:function(t,i,s){return t*=this.itemSize,this.array[t+0]=i,this.array[t+1]=s,this},setXYZ:function(t,i,s,e){return t*=this.itemSize,this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=e,this},setXYZW:function(t,i,s,e,r){return t*=this.itemSize,this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=e,this.array[t+3]=r,this},onUpload:function(t){return this.onUploadCallback=t,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}}),T.prototype=Object.create(V.prototype),T.prototype.constructor=T,k.prototype=Object.create(V.prototype),k.prototype.constructor=k,O.prototype=Object.create(V.prototype),O.prototype.constructor=O,P.prototype=Object.create(V.prototype),P.prototype.constructor=P,X.prototype=Object.create(V.prototype),X.prototype.constructor=X,j.prototype=Object.create(V.prototype),j.prototype.constructor=j,q.prototype=Object.create(V.prototype),q.prototype.constructor=q,Y.prototype=Object.create(V.prototype),Y.prototype.constructor=Y,F.prototype=Object.create(V.prototype),F.prototype.constructor=F;class Z{constructor(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}computeGroups(t){const i=[];let s,e,r=void 0;const n=t.faces;for(e=0;e<n.length;e++){const t=n[e];t.materialIndex!==r&&(r=t.materialIndex,void 0!==s&&(s.count=3*e-s.start,i.push(s)),s={start:3*e,materialIndex:r})}void 0!==s&&(s.count=3*e-s.start,i.push(s)),this.groups=i}fromGeometry(t){const i=t.faces,s=t.vertices,e=t.faceVertexUvs,r=e[0]&&e[0].length>0,n=e[1]&&e[1].length>0,h=t.morphTargets,o=h.length;let u;if(o>0){u=[];for(let t=0;t<o;t++)u[t]={name:h[t].name,data:[]};this.morphTargets.position=u}const c=t.morphNormals,l=c.length;let m;if(l>0){m=[];for(let t=0;t<l;t++)m[t]={name:c[t].name,data:[]};this.morphTargets.normal=m}const y=t.skinIndices,d=t.skinWeights,x=y.length===s.length,p=d.length===s.length;s.length>0&&i.length;for(let t=0;t<i.length;t++){const f=i[t];this.vertices.push(s[f.a],s[f.b],s[f.c]);const g=f.vertexNormals;if(3===g.length)this.normals.push(g[0],g[1],g[2]);else{const t=f.normal;this.normals.push(t,t,t)}const b=f.vertexColors;if(3===b.length)this.colors.push(b[0],b[1],b[2]);else{const t=f.color;this.colors.push(t,t,t)}if(!0===r){const i=e[0][t];void 0!==i?this.uvs.push(i[0],i[1],i[2]):this.uvs.push(new a,new a,new a)}if(!0===n){const i=e[1][t];void 0!==i?this.uvs2.push(i[0],i[1],i[2]):this.uvs2.push(new a,new a,new a)}for(let t=0;t<o;t++){const i=h[t].vertices;u[t].data.push(i[f.a],i[f.b],i[f.c])}for(let i=0;i<l;i++){const s=c[i].vertexNormals[t];m[i].data.push(s.a,s.b,s.c)}x&&this.skinIndices.push(y[f.a],y[f.b],y[f.c]),p&&this.skinWeights.push(d[f.a],d[f.b],d[f.c])}return this.computeGroups(t),this.verticesNeedUpdate=t.verticesNeedUpdate,this.normalsNeedUpdate=t.normalsNeedUpdate,this.colorsNeedUpdate=t.colorsNeedUpdate,this.uvsNeedUpdate=t.uvsNeedUpdate,this.groupsNeedUpdate=t.groupsNeedUpdate,null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this}}function G(t){if(0===t.length)return-1/0;let i=t[0];for(let s=1,e=t.length;s<e;++s)t[s]>i&&(i=t[s]);return i}let D=1;const E=new n,R=new h,I=new r,C=new u,W=new u,L=new r;function J(){Object.defineProperty(this,"id",{value:D+=2}),this.uuid=i.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}J.prototype=Object.assign(Object.create(t.prototype),{constructor:J,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(t){Array.isArray(t)?this.index=new(G(t)>65535?q:X)(t,1):this.index=t},getAttribute:function(t){return this.attributes[t]},setAttribute:function(t,i){return this.attributes[t]=i,this},deleteAttribute:function(t){return delete this.attributes[t],this},addGroup:function(t,i,s){this.groups.push({start:t,count:i,materialIndex:void 0!==s?s:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(t,i){this.drawRange.start=t,this.drawRange.count=i},applyMatrix4:function(t){const i=this.attributes.position;void 0!==i&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(void 0!==s){const i=(new o).getNormalMatrix(t);s.applyNormalMatrix(i),s.needsUpdate=!0}const e=this.attributes.tangent;return void 0!==e&&(e.transformDirection(t),e.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(t){return E.makeRotationX(t),this.applyMatrix4(E),this},rotateY:function(t){return E.makeRotationY(t),this.applyMatrix4(E),this},rotateZ:function(t){return E.makeRotationZ(t),this.applyMatrix4(E),this},translate:function(t,i,s){return E.makeTranslation(t,i,s),this.applyMatrix4(E),this},scale:function(t,i,s){return E.makeScale(t,i,s),this.applyMatrix4(E),this},lookAt:function(t){return R.lookAt(t),R.updateMatrix(),this.applyMatrix4(R.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(I).negate(),this.translate(I.x,I.y,I.z),this},setFromObject:function(t){const i=t.geometry;if(t.isPoints||t.isLine){const t=new Y(3*i.vertices.length,3),s=new Y(3*i.colors.length,3);if(this.setAttribute("position",t.copyVector3sArray(i.vertices)),this.setAttribute("color",s.copyColorsArray(i.colors)),i.lineDistances&&i.lineDistances.length===i.vertices.length){const t=new Y(i.lineDistances.length,1);this.setAttribute("lineDistance",t.copyArray(i.lineDistances))}null!==i.boundingSphere&&(this.boundingSphere=i.boundingSphere.clone()),null!==i.boundingBox&&(this.boundingBox=i.boundingBox.clone())}else t.isMesh&&i&&i.isGeometry&&this.fromGeometry(i);return this},setFromPoints:function(t){const i=[];for(let s=0,e=t.length;s<e;s++){const e=t[s];i.push(e.x,e.y,e.z||0)}return this.setAttribute("position",new Y(i,3)),this},updateFromObject:function(t){let i=t.geometry;if(t.isMesh){let t=i.__directGeometry;if(!0===i.elementsNeedUpdate&&(t=void 0,i.elementsNeedUpdate=!1),void 0===t)return this.fromGeometry(i);t.verticesNeedUpdate=i.verticesNeedUpdate,t.normalsNeedUpdate=i.normalsNeedUpdate,t.colorsNeedUpdate=i.colorsNeedUpdate,t.uvsNeedUpdate=i.uvsNeedUpdate,t.groupsNeedUpdate=i.groupsNeedUpdate,i.verticesNeedUpdate=!1,i.normalsNeedUpdate=!1,i.colorsNeedUpdate=!1,i.uvsNeedUpdate=!1,i.groupsNeedUpdate=!1,i=t}if(!0===i.verticesNeedUpdate){const t=this.attributes.position;void 0!==t&&(t.copyVector3sArray(i.vertices),t.needsUpdate=!0),i.verticesNeedUpdate=!1}if(!0===i.normalsNeedUpdate){const t=this.attributes.normal;void 0!==t&&(t.copyVector3sArray(i.normals),t.needsUpdate=!0),i.normalsNeedUpdate=!1}if(!0===i.colorsNeedUpdate){const t=this.attributes.color;void 0!==t&&(t.copyColorsArray(i.colors),t.needsUpdate=!0),i.colorsNeedUpdate=!1}if(i.uvsNeedUpdate){const t=this.attributes.uv;void 0!==t&&(t.copyVector2sArray(i.uvs),t.needsUpdate=!0),i.uvsNeedUpdate=!1}if(i.lineDistancesNeedUpdate){const t=this.attributes.lineDistance;void 0!==t&&(t.copyArray(i.lineDistances),t.needsUpdate=!0),i.lineDistancesNeedUpdate=!1}return i.groupsNeedUpdate&&(i.computeGroups(t.geometry),this.groups=i.groups,i.groupsNeedUpdate=!1),this},fromGeometry:function(t){return t.__directGeometry=(new Z).fromGeometry(t),this.fromDirectGeometry(t.__directGeometry)},fromDirectGeometry:function(t){const i=new Float32Array(3*t.vertices.length);if(this.setAttribute("position",new V(i,3).copyVector3sArray(t.vertices)),t.normals.length>0){const i=new Float32Array(3*t.normals.length);this.setAttribute("normal",new V(i,3).copyVector3sArray(t.normals))}if(t.colors.length>0){const i=new Float32Array(3*t.colors.length);this.setAttribute("color",new V(i,3).copyColorsArray(t.colors))}if(t.uvs.length>0){const i=new Float32Array(2*t.uvs.length);this.setAttribute("uv",new V(i,2).copyVector2sArray(t.uvs))}if(t.uvs2.length>0){const i=new Float32Array(2*t.uvs2.length);this.setAttribute("uv2",new V(i,2).copyVector2sArray(t.uvs2))}this.groups=t.groups;for(const i in t.morphTargets){const s=[],e=t.morphTargets[i];for(let t=0,i=e.length;t<i;t++){const i=e[t],r=new Y(3*i.data.length,3);r.name=i.name,s.push(r.copyVector3sArray(i.data))}this.morphAttributes[i]=s}if(t.skinIndices.length>0){const i=new Y(4*t.skinIndices.length,4);this.setAttribute("skinIndex",i.copyVector4sArray(t.skinIndices))}if(t.skinWeights.length>0){const i=new Y(4*t.skinWeights.length,4);this.setAttribute("skinWeight",i.copyVector4sArray(t.skinWeights))}return null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new u);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)this.boundingBox.set(new r(-1/0,-1/0,-1/0),new r(1/0,1/0,1/0));else{if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),i)for(let t=0,s=i.length;t<s;t++){const s=i[t];C.setFromBufferAttribute(s),this.morphTargetsRelative?(L.addVectors(this.boundingBox.min,C.min),this.boundingBox.expandByPoint(L),L.addVectors(this.boundingBox.max,C.max),this.boundingBox.expandByPoint(L)):(this.boundingBox.expandByPoint(C.min),this.boundingBox.expandByPoint(C.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new S);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)this.boundingSphere.set(new r,1/0);else if(t){const s=this.boundingSphere.center;if(C.setFromBufferAttribute(t),i)for(let t=0,s=i.length;t<s;t++){const s=i[t];W.setFromBufferAttribute(s),this.morphTargetsRelative?(L.addVectors(C.min,W.min),C.expandByPoint(L),L.addVectors(C.max,W.max),C.expandByPoint(L)):(C.expandByPoint(W.min),C.expandByPoint(W.max))}C.getCenter(s);let e=0;for(let i=0,r=t.count;i<r;i++)L.fromBufferAttribute(t,i),e=Math.max(e,s.distanceToSquared(L));if(i)for(let r=0,n=i.length;r<n;r++){const n=i[r],h=this.morphTargetsRelative;for(let i=0,r=n.count;i<r;i++)L.fromBufferAttribute(n,i),h&&(I.fromBufferAttribute(t,i),L.add(I)),e=Math.max(e,s.distanceToSquared(L))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)}},computeFaceNormals:function(){},computeVertexNormals:function(){const t=this.index,i=this.getAttribute("position");if(void 0!==i){let s=this.getAttribute("normal");if(void 0===s)s=new V(new Float32Array(3*i.count),3),this.setAttribute("normal",s);else for(let t=0,i=s.count;t<i;t++)s.setXYZ(t,0,0,0);const e=new r,n=new r,h=new r,o=new r,a=new r,u=new r,c=new r,l=new r;if(t)for(let r=0,m=t.count;r<m;r+=3){const m=t.getX(r+0),y=t.getX(r+1),d=t.getX(r+2);e.fromBufferAttribute(i,m),n.fromBufferAttribute(i,y),h.fromBufferAttribute(i,d),c.subVectors(h,n),l.subVectors(e,n),c.cross(l),o.fromBufferAttribute(s,m),a.fromBufferAttribute(s,y),u.fromBufferAttribute(s,d),o.add(c),a.add(c),u.add(c),s.setXYZ(m,o.x,o.y,o.z),s.setXYZ(y,a.x,a.y,a.z),s.setXYZ(d,u.x,u.y,u.z)}else for(let t=0,r=i.count;t<r;t+=3)e.fromBufferAttribute(i,t+0),n.fromBufferAttribute(i,t+1),h.fromBufferAttribute(i,t+2),c.subVectors(h,n),l.subVectors(e,n),c.cross(l),s.setXYZ(t+0,c.x,c.y,c.z),s.setXYZ(t+1,c.x,c.y,c.z),s.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),s.needsUpdate=!0}},merge:function(t,i){if(!t||!t.isBufferGeometry)return;void 0===i&&(i=0);const s=this.attributes;for(const e in s){if(void 0===t.attributes[e])continue;const r=s[e].array,n=t.attributes[e],h=n.array,o=n.itemSize*i,a=Math.min(h.length,r.length-o);for(let t=0,i=o;t<a;t++,i++)r[i]=h[t]}return this},normalizeNormals:function(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)L.fromBufferAttribute(t,i),L.normalize(),t.setXYZ(i,L.x,L.y,L.z)},toNonIndexed:function(){function t(t,i){const s=t.array,e=t.itemSize,r=t.normalized,n=new s.constructor(i.length*e);let h=0,o=0;for(let t=0,r=i.length;t<r;t++){h=i[t]*e;for(let t=0;t<e;t++)n[o++]=s[h++]}return new V(n,e,r)}if(null===this.index)return this;const i=new J,s=this.index.array,e=this.attributes;for(const r in e){const n=t(e[r],s);i.setAttribute(r,n)}const r=this.morphAttributes;for(const e in r){const n=[],h=r[e];for(let i=0,e=h.length;i<e;i++){const e=t(h[i],s);n.push(e)}i.morphAttributes[e]=n}i.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let t=0,s=n.length;t<s;t++){const s=n[t];i.addGroup(s.start,s.count,s.materialIndex)}return i},toJSON:function(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const i=this.parameters;for(const s in i)void 0!==i[s]&&(t[s]=i[s]);return t}t.data={attributes:{}};const i=this.index;null!==i&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const i in s){const e=s[i],r=e.toJSON(t.data);""!==e.name&&(r.name=e.name),t.data.attributes[i]=r}const e={};let r=!1;for(const i in this.morphAttributes){const s=this.morphAttributes[i],n=[];for(let i=0,e=s.length;i<e;i++){const e=s[i],r=e.toJSON(t.data);""!==e.name&&(r.name=e.name),n.push(r)}n.length>0&&(e[i]=n,r=!0)}r&&(t.data.morphAttributes=e,t.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));const h=this.boundingSphere;return null!==h&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t},clone:function(){return(new J).copy(this)},copy:function(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;null!==s&&this.setIndex(s.clone(i));const e=t.attributes;for(const t in e){const s=e[t];this.setAttribute(t,s.clone(i))}const r=t.morphAttributes;for(const t in r){const s=[],e=r[t];for(let t=0,r=e.length;t<r;t++)s.push(e[t].clone(i));this.morphAttributes[t]=s}this.morphTargetsRelative=t.morphTargetsRelative;const n=t.groups;for(let t=0,i=n.length;t<i;t++){const i=n[t];this.addGroup(i.start,i.count,i.materialIndex)}const h=t.boundingBox;null!==h&&(this.boundingBox=h.clone());const o=t.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});export{J as B,Y as F,S,q as U,a as V,B as a,G as b,X as c,V as d,u as e};
//# sourceMappingURL=BufferGeometry.js.map
