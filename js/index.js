import"./MathUtils.js";import"./constants.js";import{M as t}from"./Material.js";import{C as e}from"./Color.js";import"./Quaternion.js";import{V as i,M as r,O as s,L as n}from"./Object3D.js";import{V as a,B as o}from"./BufferGeometry.js";import{T as c,R as h}from"./Triangle.js";import{I as p,a as l,O as m,T as u}from"./TextureLoader.js";import"./Camera.js";import"./Texture.js";import{Scene as d}from"./Scene.js";function y(i){t.call(this),this.type="SpriteMaterial",this.color=new e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(i)}let w;y.prototype=Object.create(t.prototype),y.prototype.constructor=y,y.prototype.isSpriteMaterial=!0,y.prototype.copy=function(e){return t.prototype.copy.call(this,e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this};const f=new i,x=new i,j=new i,g=new a,M=new a,b=new r,O=new i,S=new i,W=new i,v=new a,A=new a,C=new a;function P(t){if(s.call(this),this.type="Sprite",void 0===w){w=new o;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new p(t,5);w.setIndex([0,1,2,0,2,3]),w.setAttribute("position",new l(e,3,0,!1)),w.setAttribute("uv",new l(e,2,3,!1))}this.geometry=w,this.material=void 0!==t?t:new y,this.center=new a(.5,.5)}function z(t,e,i,r,s,n){g.subVectors(t,i).addScalar(.5).multiply(r),void 0!==s?(M.x=n*g.x-s*g.y,M.y=s*g.x+n*g.y):M.copy(g),t.copy(e),t.x+=M.x,t.y+=M.y,t.applyMatrix4(b)}function T(t,e,i,r){this.ray=new h(t,e),this.near=i||0,this.far=r||1/0,this.camera=null,this.layers=new n,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return this.Points}}})}function L(t,e){return t.distance-e.distance}function V(t,e,i,r){if(t.layers.test(e.layers)&&t.raycast(e,i),!0===r){const r=t.children;for(let t=0,s=r.length;t<s;t++)V(r[t],e,i,!0)}}P.prototype=Object.assign(Object.create(s.prototype),{constructor:P,isSprite:!0,raycast:function(t,e){t.camera,x.setFromMatrixScale(this.matrixWorld),b.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),j.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&x.multiplyScalar(-j.z);const i=this.material.rotation;let r,s;0!==i&&(s=Math.cos(i),r=Math.sin(i));const n=this.center;z(O.set(-.5,-.5,0),j,n,x,r,s),z(S.set(.5,-.5,0),j,n,x,r,s),z(W.set(.5,.5,0),j,n,x,r,s),v.set(0,0),A.set(1,0),C.set(1,1);let o=t.ray.intersectTriangle(O,S,W,!1,f);if(null===o&&(z(S.set(-.5,.5,0),j,n,x,r,s),A.set(0,1),o=t.ray.intersectTriangle(O,W,S,!1,f),null===o))return;const h=t.ray.origin.distanceTo(f);h<t.near||h>t.far||e.push({distance:h,point:f.clone(),uv:c.getUV(f,O,S,W,v,A,C,new a),face:null,object:this})},copy:function(t){return s.prototype.copy.call(this,t),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}}),Object.assign(T.prototype,{set:function(t,e){this.ray.set(t,e)},setFromCamera:function(t,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera&&(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e)},intersectObject:function(t,e,i){const r=i||[];return V(t,this,r,e),r.sort(L),r},intersectObjects:function(t,e,i){const r=i||[];if(!1===Array.isArray(t))return r;for(let i=0,s=t.length;i<s;i++)V(t[i],this,r,e);return r.sort(L),r}});const F={init(){const t=window.innerWidth/2,e=window.innerHeight/2;this.camera=new m(-t,t,e,-e,1,10),this.camera.position.z=10,this.scene=new d,this.scene.add(this.camera);(new u).load("textures/sprite0.png",this.create),this.raycaster=new T},clickListener(t){const e=t.clientX/window.innerWidth*2-1,i=-t.clientY/window.innerHeight*2+1;this.raycaster.setFromCamera({x:e,y:i},this.camera);const r=this.raycaster.intersectObjects([this.exitButton],!0);if(r.length>0){r[0]}},render(t){t.clearDepth(),t.render(this.scene,this.camera)},createSprite({material:t,center:e=[0,1]}){const i=new P(t);return i.center.set(...e),i.scale.set(width,height,1),this.scene.add(i),document.body.addEventListener("click",this.clickListener.bind(this)),i},create(t){const e=new SpriteMaterial({map:t});this.exitButton=this.createSprite({material:e,center:[0,1]}),this.update()},onWindowResize(){const t=window.innerWidth/2,e=window.innerHeight/2;this.camera.left=-t,this.camera.right=t,this.camera.top=e,this.camera.bottom=-e,this.camera.updateProjectionMatrix(),this.update()},update(){const t=window.innerWidth/2,e=window.innerHeight/2;this.exitButton.position.set(t,-e,1)}};export{F as HUD};
//# sourceMappingURL=index.js.map
