import{B as t,D as e}from"./constants.js";import{a as r}from"./MeshBasicMaterial.js";import{V as i,a as n,M as s,O as o}from"./Object3D.js";import{S as a,V as c,e as h,B as l}from"./BufferGeometry.js";const u=new i,d=new i,m=new i,p=new i,f=new i,y=new i,g=new i;class b{constructor(t,e){this.origin=void 0!==t?t:new i,this.direction=void 0!==e?e:new i(0,0,-1)}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return void 0===e&&(e=new i),e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,u)),this}closestPointToPoint(t,e){void 0===e&&(e=new i),e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=u.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(u.copy(this.direction).multiplyScalar(e).add(this.origin),u.distanceToSquared(t))}distanceSqToSegment(t,e,r,i){d.copy(t).add(e).multiplyScalar(.5),m.copy(e).sub(t).normalize(),p.copy(this.origin).sub(d);const n=.5*t.distanceTo(e),s=-this.direction.dot(m),o=p.dot(this.direction),a=-p.dot(m),c=p.lengthSq(),h=Math.abs(1-s*s);let l,u,f,y;if(h>0)if(l=s*a-o,u=s*o-a,y=n*h,l>=0)if(u>=-y)if(u<=y){const t=1/h;l*=t,u*=t,f=l*(l+s*u+2*o)+u*(s*l+u+2*a)+c}else u=n,l=Math.max(0,-(s*u+o)),f=-l*l+u*(u+2*a)+c;else u=-n,l=Math.max(0,-(s*u+o)),f=-l*l+u*(u+2*a)+c;else u<=-y?(l=Math.max(0,-(-s*n+o)),u=l>0?-n:Math.min(Math.max(-n,-a),n),f=-l*l+u*(u+2*a)+c):u<=y?(l=0,u=Math.min(Math.max(-n,-a),n),f=u*(u+2*a)+c):(l=Math.max(0,-(s*n+o)),u=l>0?n:Math.min(Math.max(-n,-a),n),f=-l*l+u*(u+2*a)+c);else u=s>0?-n:n,l=Math.max(0,-(s*u+o)),f=-l*l+u*(u+2*a)+c;return r&&r.copy(this.direction).multiplyScalar(l).add(this.origin),i&&i.copy(m).multiplyScalar(u).add(d),f}intersectSphere(t,e){u.subVectors(t.center,this.origin);const r=u.dot(this.direction),i=u.dot(u)-r*r,n=t.radius*t.radius;if(i>n)return null;const s=Math.sqrt(n-i),o=r-s,a=r+s;return o<0&&a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return null===r?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);if(0===e)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,i,n,s,o,a;const c=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return c>=0?(r=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(r=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(n=(t.min.y-u.y)*h,s=(t.max.y-u.y)*h):(n=(t.max.y-u.y)*h,s=(t.min.y-u.y)*h),r>s||n>i?null:((n>r||r!=r)&&(r=n),(s<i||i!=i)&&(i=s),l>=0?(o=(t.min.z-u.z)*l,a=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,a=(t.min.z-u.z)*l),r>a||o>i?null:((o>r||r!=r)&&(r=o),(a<i||i!=i)&&(i=a),i<0?null:this.at(r>=0?r:i,e)))}intersectsBox(t){return null!==this.intersectBox(t,u)}intersectTriangle(t,e,r,i,n){f.subVectors(e,t),y.subVectors(r,t),g.crossVectors(f,y);let s,o=this.direction.dot(g);if(o>0){if(i)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}p.subVectors(this.origin,t);const a=s*this.direction.dot(y.crossVectors(p,y));if(a<0)return null;const c=s*this.direction.dot(f.cross(p));if(c<0)return null;if(a+c>o)return null;const h=-s*p.dot(g);return h<0?null:this.at(h/o,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}const x=new i,w=new i,V=new n;class M{constructor(t,e){Object.defineProperty(this,"isPlane",{value:!0}),this.normal=void 0!==t?t:new i(1,0,0),this.constant=void 0!==e?e:0}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,i){return this.normal.set(t,e,r),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const i=x.subVectors(r,e).cross(w.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return void 0===e&&(e=new i),e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){void 0===e&&(e=new i);const r=t.delta(x),n=this.normal.dot(r);if(0===n)return 0===this.distanceToPoint(t.start)?e.copy(t.start):void 0;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?void 0:e.copy(r).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return void 0===t&&(t=new i),t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||V.getNormalMatrix(t),i=this.coplanarPoint(x).applyMatrix4(t),n=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(n),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}}const S=new i,T=new i,v=new i,P=new i,B=new i,A=new i,q=new i,I=new i,z=new i,j=new i;class F{constructor(t,e,r){this.a=void 0!==t?t:new i,this.b=void 0!==e?e:new i,this.c=void 0!==r?r:new i}static getNormal(t,e,r,n){void 0===n&&(n=new i),n.subVectors(r,e),S.subVectors(t,e),n.cross(S);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,r,n,s){S.subVectors(n,e),T.subVectors(r,e),v.subVectors(t,e);const o=S.dot(S),a=S.dot(T),c=S.dot(v),h=T.dot(T),l=T.dot(v),u=o*h-a*a;if(void 0===s&&(s=new i),0===u)return s.set(-2,-1,-1);const d=1/u,m=(h*c-a*l)*d,p=(o*l-a*c)*d;return s.set(1-m-p,p,m)}static containsPoint(t,e,r,i){return this.getBarycoord(t,e,r,i,P),P.x>=0&&P.y>=0&&P.x+P.y<=1}static getUV(t,e,r,i,n,s,o,a){return this.getBarycoord(t,e,r,i,P),a.set(0,0),a.addScaledVector(n,P.x),a.addScaledVector(s,P.y),a.addScaledVector(o,P.z),a}static isFrontFacing(t,e,r,i){return S.subVectors(r,e),T.subVectors(t,e),S.cross(T).dot(i)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,i){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[i]),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return S.subVectors(this.c,this.b),T.subVectors(this.a,this.b),.5*S.cross(T).length()}getMidpoint(t){return void 0===t&&(t=new i),t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return F.getNormal(this.a,this.b,this.c,t)}getPlane(t){return void 0===t&&(t=new M),t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return F.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,r,i,n){return F.getUV(t,this.a,this.b,this.c,e,r,i,n)}containsPoint(t){return F.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return F.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){void 0===e&&(e=new i);const r=this.a,n=this.b,s=this.c;let o,a;B.subVectors(n,r),A.subVectors(s,r),I.subVectors(t,r);const c=B.dot(I),h=A.dot(I);if(c<=0&&h<=0)return e.copy(r);z.subVectors(t,n);const l=B.dot(z),u=A.dot(z);if(l>=0&&u<=l)return e.copy(n);const d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(r).addScaledVector(B,o);j.subVectors(t,s);const m=B.dot(j),p=A.dot(j);if(p>=0&&m<=p)return e.copy(s);const f=m*h-c*p;if(f<=0&&h>=0&&p<=0)return a=h/(h-p),e.copy(r).addScaledVector(A,a);const y=l*p-m*u;if(y<=0&&u-l>=0&&m-p>=0)return q.subVectors(s,n),a=(u-l)/(u-l+(m-p)),e.copy(n).addScaledVector(q,a);const g=1/(y+f+d);return o=f*g,a=d*g,e.copy(r).addScaledVector(B,o).addScaledVector(A,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const D=new s,O=new b,N=new a,U=new i,X=new i,C=new i,G=new i,_=new i,k=new i,R=new i,L=new i,W=new i,E=new c,H=new c,J=new c,K=new i,Q=new i;function Y(t,e){o.call(this),this.type="Mesh",this.geometry=void 0!==t?t:new l,this.material=void 0!==e?e:new r,this.updateMorphTargets()}function Z(r,i,n,s,o,a,c,h){let l;if(l=i.side===t?s.intersectTriangle(c,a,o,!0,h):s.intersectTriangle(o,a,c,i.side!==e,h),null===l)return null;Q.copy(h),Q.applyMatrix4(r.matrixWorld);const u=n.ray.origin.distanceTo(Q);return u<n.near||u>n.far?null:{distance:u,point:Q.clone(),object:r}}function $(t,e,r,i,n,s,o,a,l,u,d,m){U.fromBufferAttribute(n,u),X.fromBufferAttribute(n,d),C.fromBufferAttribute(n,m);const p=t.morphTargetInfluences;if(e.morphTargets&&s&&p){R.set(0,0,0),L.set(0,0,0),W.set(0,0,0);for(let t=0,e=s.length;t<e;t++){const e=p[t],r=s[t];0!==e&&(G.fromBufferAttribute(r,u),_.fromBufferAttribute(r,d),k.fromBufferAttribute(r,m),o?(R.addScaledVector(G,e),L.addScaledVector(_,e),W.addScaledVector(k,e)):(R.addScaledVector(G.sub(U),e),L.addScaledVector(_.sub(X),e),W.addScaledVector(k.sub(C),e)))}U.add(R),X.add(L),C.add(W)}t.isSkinnedMesh&&(t.boneTransform(u,U),t.boneTransform(d,X),t.boneTransform(m,C));const f=Z(t,e,r,i,U,X,C,K);if(f){a&&(E.fromBufferAttribute(a,u),H.fromBufferAttribute(a,d),J.fromBufferAttribute(a,m),f.uv=F.getUV(K,U,X,C,E,H,J,new c)),l&&(E.fromBufferAttribute(l,u),H.fromBufferAttribute(l,d),J.fromBufferAttribute(l,m),f.uv2=F.getUV(K,U,X,C,E,H,J,new c));const t=new h(u,d,m);F.getNormal(U,X,C,t.normal),f.face=t}return f}Y.prototype=Object.assign(Object.create(o.prototype),{constructor:Y,isMesh:!0,copy:function(t){return o.prototype.copy.call(this,t),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this},updateMorphTargets:function(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,r=Object.keys(e);if(r.length>0){const t=e[r[0]];if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,r=t.length;e<r;e++){const r=t[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=e}}}}else{const e=t.morphTargets;void 0!==e&&e.length}},raycast:function(t,e){const r=this.geometry,i=this.material,n=this.matrixWorld;if(void 0===i)return;if(null===r.boundingSphere&&r.computeBoundingSphere(),N.copy(r.boundingSphere),N.applyMatrix4(n),!1===t.ray.intersectsSphere(N))return;if(D.getInverse(n),O.copy(t.ray).applyMatrix4(D),null!==r.boundingBox&&!1===O.intersectsBox(r.boundingBox))return;let s;if(r.isBufferGeometry){const n=r.index,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative,h=r.attributes.uv,l=r.attributes.uv2,u=r.groups,d=r.drawRange;if(null!==n)if(Array.isArray(i))for(let r=0,m=u.length;r<m;r++){const m=u[r],p=i[m.materialIndex];for(let r=Math.max(m.start,d.start),i=Math.min(m.start+m.count,d.start+d.count);r<i;r+=3){const i=n.getX(r),u=n.getX(r+1),d=n.getX(r+2);s=$(this,p,t,O,o,a,c,h,l,i,u,d),s&&(s.faceIndex=Math.floor(r/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{for(let r=Math.max(0,d.start),u=Math.min(n.count,d.start+d.count);r<u;r+=3){const u=n.getX(r),d=n.getX(r+1),m=n.getX(r+2);s=$(this,i,t,O,o,a,c,h,l,u,d,m),s&&(s.faceIndex=Math.floor(r/3),e.push(s))}}else if(void 0!==o)if(Array.isArray(i))for(let r=0,n=u.length;r<n;r++){const n=u[r],m=i[n.materialIndex];for(let r=Math.max(n.start,d.start),i=Math.min(n.start+n.count,d.start+d.count);r<i;r+=3){s=$(this,m,t,O,o,a,c,h,l,r,r+1,r+2),s&&(s.faceIndex=Math.floor(r/3),s.face.materialIndex=n.materialIndex,e.push(s))}}else{for(let r=Math.max(0,d.start),n=Math.min(o.count,d.start+d.count);r<n;r+=3){s=$(this,i,t,O,o,a,c,h,l,r,r+1,r+2),s&&(s.faceIndex=Math.floor(r/3),e.push(s))}}}else if(r.isGeometry){const n=Array.isArray(i),o=r.vertices,a=r.faces;let h;const l=r.faceVertexUvs[0];l.length>0&&(h=l);for(let r=0,l=a.length;r<l;r++){const l=a[r],u=n?i[l.materialIndex]:i;if(void 0===u)continue;const d=o[l.a],m=o[l.b],p=o[l.c];if(s=Z(this,u,t,O,d,m,p,K),s){if(h&&h[r]){const t=h[r];E.copy(t[0]),H.copy(t[1]),J.copy(t[2]),s.uv=F.getUV(K,d,m,p,E,H,J,new c)}s.face=l,s.faceIndex=r,e.push(s)}}}}});var tt=Object.freeze({__proto__:null,Mesh:Y});export{Y as M,M as P,b as R,tt as a};
