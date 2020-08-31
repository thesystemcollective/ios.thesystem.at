import{M as t}from"./MathUtils.js";import{bn as i,f as e,R as s}from"./constants.js";import{V as r,O as a}from"./Object3D.js";import{d as o}from"./BufferGeometry.js";import{C as n}from"./Camera.js";import{T as h}from"./Texture.js";function f(e,s){this.array=e,this.stride=s,this.count=void 0!==e?e.length/s:0,this.usage=i,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=t.generateUUID()}Object.defineProperty(f.prototype,"needsUpdate",{set:function(t){!0===t&&this.version++}}),Object.assign(f.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(t){return this.usage=t,this},copy:function(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this},copyAt:function(t,i,e){t*=this.stride,e*=i.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=i.array[e+s];return this},set:function(t,i){return void 0===i&&(i=0),this.array.set(t,i),this},clone:function(i){void 0===i.arrayBuffers&&(i.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=t.generateUUID()),void 0===i.arrayBuffers[this.array.buffer._uuid]&&(i.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new f(new this.array.constructor(i.arrayBuffers[this.array.buffer._uuid]),this.stride);return e.setUsage(this.usage),e},onUpload:function(t){return this.onUploadCallback=t,this},toJSON:function(i){return void 0===i.arrayBuffers&&(i.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=t.generateUUID()),void 0===i.arrayBuffers[this.array.buffer._uuid]&&(i.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const u=new r;function d(t,i,e,s){this.name="",this.data=t,this.itemSize=i,this.offset=e,this.normalized=!0===s}function c(t,i,e,s,r,a){n.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=void 0!==t?t:-1,this.right=void 0!==i?i:1,this.top=void 0!==e?e:1,this.bottom=void 0!==s?s:-1,this.near=void 0!==r?r:.1,this.far=void 0!==a?a:2e3,this.updateProjectionMatrix()}Object.defineProperties(d.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(t){this.data.needsUpdate=t}}}),Object.assign(d.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(t){for(let i=0,e=this.data.count;i<e;i++)u.x=this.getX(i),u.y=this.getY(i),u.z=this.getZ(i),u.applyMatrix4(t),this.setXYZ(i,u.x,u.y,u.z);return this},setX:function(t,i){return this.data.array[t*this.data.stride+this.offset]=i,this},setY:function(t,i){return this.data.array[t*this.data.stride+this.offset+1]=i,this},setZ:function(t,i){return this.data.array[t*this.data.stride+this.offset+2]=i,this},setW:function(t,i){return this.data.array[t*this.data.stride+this.offset+3]=i,this},getX:function(t){return this.data.array[t*this.data.stride+this.offset]},getY:function(t){return this.data.array[t*this.data.stride+this.offset+1]},getZ:function(t){return this.data.array[t*this.data.stride+this.offset+2]},getW:function(t){return this.data.array[t*this.data.stride+this.offset+3]},setXY:function(t,i,e){return t=t*this.data.stride+this.offset,this.data.array[t+0]=i,this.data.array[t+1]=e,this},setXYZ:function(t,i,e,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=i,this.data.array[t+1]=e,this.data.array[t+2]=s,this},setXYZW:function(t,i,e,s,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=i,this.data.array[t+1]=e,this.data.array[t+2]=s,this.data.array[t+3]=r,this},clone:function(t){if(void 0===t){const t=[];for(let i=0;i<this.count;i++){const e=i*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[e+i])}return new o(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new d(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(t){if(void 0===t){const t=[];for(let i=0;i<this.count;i++){const e=i*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[e+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}),c.prototype=Object.assign(Object.create(n.prototype),{constructor:c,isOrthographicCamera:!0,copy:function(t,i){return n.prototype.copy.call(this,t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this},setViewOffset:function(t,i,e,s,r,a){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=e,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),e=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=e-t,a=e+t,o=s+i,n=s-i;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,i=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,a=r+t*this.view.width,o-=i*this.view.offsetY,n=o-i*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,n,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(t){const i=a.prototype.toJSON.call(this,t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,null!==this.view&&(i.object.view=Object.assign({},this.view)),i}});const l={enabled:!1,files:{},add:function(t,i){!1!==this.enabled&&(this.files[t]=i)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};const m=new function(t,i,e){const s=this;let r=!1,a=0,o=0,n=void 0;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=e,this.itemStart=function(t){o++,!1===r&&void 0!==s.onStart&&s.onStart(t,a,o),r=!0},this.itemEnd=function(t){a++,void 0!==s.onProgress&&s.onProgress(t,a,o),a===o&&(r=!1,void 0!==s.onLoad&&s.onLoad())},this.itemError=function(t){void 0!==s.onError&&s.onError(t)},this.resolveURL=function(t){return n?n(t):t},this.setURLModifier=function(t){return n=t,this},this.addHandler=function(t,i){return h.push(t,i),this},this.removeHandler=function(t){const i=h.indexOf(t);return-1!==i&&h.splice(i,2),this},this.getHandler=function(t){for(let i=0,e=h.length;i<e;i+=2){const e=h[i],s=h[i+1];if(e.global&&(e.lastIndex=0),e.test(t))return s}return null}};function p(t){this.manager=void 0!==t?t:m,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}function v(t){p.call(this,t)}function y(t){p.call(this,t)}Object.assign(p.prototype,{load:function(){},loadAsync:function(t,i){const e=this;return new Promise((function(s,r){e.load(t,s,i,r)}))},parse:function(){},setCrossOrigin:function(t){return this.crossOrigin=t,this},setPath:function(t){return this.path=t,this},setResourcePath:function(t){return this.resourcePath=t,this},setRequestHeader:function(t){return this.requestHeader=t,this}}),v.prototype=Object.assign(Object.create(p.prototype),{constructor:v,load:function(t,i,e,s){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=l.get(t);if(void 0!==a)return r.manager.itemStart(t),setTimeout((function(){i&&i(a),r.manager.itemEnd(t)}),0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function n(){o.removeEventListener("load",n,!1),o.removeEventListener("error",h,!1),l.add(t,this),i&&i(this),r.manager.itemEnd(t)}function h(i){o.removeEventListener("load",n,!1),o.removeEventListener("error",h,!1),s&&s(i),r.manager.itemError(t),r.manager.itemEnd(t)}return o.addEventListener("load",n,!1),o.addEventListener("error",h,!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}),y.prototype=Object.assign(Object.create(p.prototype),{constructor:y,load:function(t,i,r,a){const o=new h,n=new v(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(t,(function(r){o.image=r;const a=t.search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/);o.format=a?e:s,o.needsUpdate=!0,void 0!==i&&i(o)}),r,a),o}});export{l as C,f as I,p as L,c as O,y as T,d as a};
//# sourceMappingURL=TextureLoader.js.map
