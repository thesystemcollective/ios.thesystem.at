import{M as t}from"./MathUtils.js";class s{constructor(t=0,s=0,i=0,h=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=s,this._z=i,this._w=h}static slerp(t,s,i,h){return i.copy(t).slerp(s,h)}static slerpFlat(t,s,i,h,_,e,r){let n=i[h+0],a=i[h+1],o=i[h+2],l=i[h+3];const y=_[e+0],c=_[e+1],u=_[e+2],x=_[e+3];if(l!==x||n!==y||a!==c||o!==u){let t=1-r;const s=n*y+a*c+o*u+l*x,i=s>=0?1:-1,h=1-s*s;if(h>Number.EPSILON){const _=Math.sqrt(h),e=Math.atan2(_,s*i);t=Math.sin(t*e)/_,r=Math.sin(r*e)/_}const _=r*i;if(n=n*t+y*_,a=a*t+c*_,o=o*t+u*_,l=l*t+x*_,t===1-r){const t=1/Math.sqrt(n*n+a*a+o*o+l*l);n*=t,a*=t,o*=t,l*=t}}t[s]=n,t[s+1]=a,t[s+2]=o,t[s+3]=l}static multiplyQuaternionsFlat(t,s,i,h,_,e){const r=i[h],n=i[h+1],a=i[h+2],o=i[h+3],l=_[e],y=_[e+1],c=_[e+2],u=_[e+3];return t[s]=r*u+o*l+n*c-a*y,t[s+1]=n*u+o*y+a*l-r*c,t[s+2]=a*u+o*c+r*y-n*l,t[s+3]=o*u-r*l-n*y-a*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,s,i,h){return this._x=t,this._y=s,this._z=i,this._w=h,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,s){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,h=t._y,_=t._z,e=t._order,r=Math.cos,n=Math.sin,a=r(i/2),o=r(h/2),l=r(_/2),y=n(i/2),c=n(h/2),u=n(_/2);switch(e){case"XYZ":this._x=y*o*l+a*c*u,this._y=a*c*l-y*o*u,this._z=a*o*u+y*c*l,this._w=a*o*l-y*c*u;break;case"YXZ":this._x=y*o*l+a*c*u,this._y=a*c*l-y*o*u,this._z=a*o*u-y*c*l,this._w=a*o*l+y*c*u;break;case"ZXY":this._x=y*o*l-a*c*u,this._y=a*c*l+y*o*u,this._z=a*o*u+y*c*l,this._w=a*o*l-y*c*u;break;case"ZYX":this._x=y*o*l-a*c*u,this._y=a*c*l+y*o*u,this._z=a*o*u-y*c*l,this._w=a*o*l+y*c*u;break;case"YZX":this._x=y*o*l+a*c*u,this._y=a*c*l+y*o*u,this._z=a*o*u-y*c*l,this._w=a*o*l-y*c*u;break;case"XZY":this._x=y*o*l-a*c*u,this._y=a*c*l-y*o*u,this._z=a*o*u+y*c*l,this._w=a*o*l+y*c*u}return!1!==s&&this._onChangeCallback(),this}setFromAxisAngle(t,s){const i=s/2,h=Math.sin(i);return this._x=t.x*h,this._y=t.y*h,this._z=t.z*h,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const s=t.elements,i=s[0],h=s[4],_=s[8],e=s[1],r=s[5],n=s[9],a=s[2],o=s[6],l=s[10],y=i+r+l;if(y>0){const t=.5/Math.sqrt(y+1);this._w=.25/t,this._x=(o-n)*t,this._y=(_-a)*t,this._z=(e-h)*t}else if(i>r&&i>l){const t=2*Math.sqrt(1+i-r-l);this._w=(o-n)/t,this._x=.25*t,this._y=(h+e)/t,this._z=(_+a)/t}else if(r>l){const t=2*Math.sqrt(1+r-i-l);this._w=(_-a)/t,this._x=(h+e)/t,this._y=.25*t,this._z=(n+o)/t}else{const t=2*Math.sqrt(1+l-i-r);this._w=(e-h)/t,this._x=(_+a)/t,this._y=(n+o)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,s){let i=t.dot(s)+1;return i<1e-6?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*s.z-t.z*s.y,this._y=t.z*s.x-t.x*s.z,this._z=t.x*s.y-t.y*s.x,this._w=i),this.normalize()}angleTo(s){return 2*Math.acos(Math.abs(t.clamp(this.dot(s),-1,1)))}rotateTowards(t,s){const i=this.angleTo(t);if(0===i)return this;const h=Math.min(1,s/i);return this.slerp(t,h),this}identity(){return this.set(0,0,0,1)}inverse(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,s){return void 0!==s?this.multiplyQuaternions(t,s):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,s){const i=t._x,h=t._y,_=t._z,e=t._w,r=s._x,n=s._y,a=s._z,o=s._w;return this._x=i*o+e*r+h*a-_*n,this._y=h*o+e*n+_*r-i*a,this._z=_*o+e*a+i*n-h*r,this._w=e*o-i*r-h*n-_*a,this._onChangeCallback(),this}slerp(t,s){if(0===s)return this;if(1===s)return this.copy(t);const i=this._x,h=this._y,_=this._z,e=this._w;let r=e*t._w+i*t._x+h*t._y+_*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=e,this._x=i,this._y=h,this._z=_,this;const n=1-r*r;if(n<=Number.EPSILON){const t=1-s;return this._w=t*e+s*this._w,this._x=t*i+s*this._x,this._y=t*h+s*this._y,this._z=t*_+s*this._z,this.normalize(),this._onChangeCallback(),this}const a=Math.sqrt(n),o=Math.atan2(a,r),l=Math.sin((1-s)*o)/a,y=Math.sin(s*o)/a;return this._w=e*l+this._w*y,this._x=i*l+this._x*y,this._y=h*l+this._y*y,this._z=_*l+this._z*y,this._onChangeCallback(),this}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,s){return void 0===s&&(s=0),this._x=t[s],this._y=t[s+1],this._z=t[s+2],this._w=t[s+3],this._onChangeCallback(),this}toArray(t,s){return void 0===t&&(t=[]),void 0===s&&(s=0),t[s]=this._x,t[s+1]=this._y,t[s+2]=this._z,t[s+3]=this._w,t}fromBufferAttribute(t,s){return this._x=t.getX(s),this._y=t.getY(s),this._z=t.getZ(s),this._w=t.getW(s),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}export{s as Q};
