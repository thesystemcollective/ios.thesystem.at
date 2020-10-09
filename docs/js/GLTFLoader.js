import{a as e,b as t,S as r}from"../main.js";import{TextureLoader as s,MeshBasicMaterial as n,BackSide as a,BoxGeometry as i,Mesh as o,Loader as l,LoaderUtils as u,FileLoader as c,Color as p,MeshStandardMaterial as h,TangentSpaceNormalMap as d,ImageBitmapLoader as m,InterleavedBuffer as f,BufferAttribute as v,RGBFormat as g,LinearFilter as T,LinearMipmapLinearFilter as y,RepeatWrapping as x,PointsMaterial as M,Material as R,LineBasicMaterial as S,DoubleSide as _,Vector2 as E,sRGBEncoding as w,PropertyBinding as A,BufferGeometry as b,SkinnedMesh as L,LineSegments as I,Line as P,LineLoop as O,Points as N,Group as C,PerspectiveCamera as U,Math as F,OrthographicCamera as H,InterpolateLinear as D,AnimationClip as k,Bone as G,Object3D as j,Matrix4 as K,Skeleton as B,SpotLight as V,PointLight as X,DirectionalLight as z,MeshPhysicalMaterial as q,Interpolant as Y,NearestFilter as $,NearestMipmapNearestFilter as Z,LinearMipmapNearestFilter as J,NearestMipmapLinearFilter as Q,ClampToEdgeWrapping as ee,MirroredRepeatWrapping as te,InterpolateDiscrete as re,FrontSide as se,InterleavedBufferAttribute as ne,CanvasTexture as ae,TriangleFanDrawMode as ie,TriangleStripDrawMode as oe,VectorKeyframeTrack as le,QuaternionKeyframeTrack as ue,NumberKeyframeTrack as ce,Box3 as pe,Vector3 as he,Sphere as de}from"./three.module.js";const me=async({data:r,scene:l,visible:u=!1})=>{const c=r.sky||"default",p=`${t}/${c}`,h=["px","nx","py","ny","pz","nz"],d=await Promise.all(h.map((async e=>{const t=await(async(e,t=new s)=>new Promise(((r,s)=>{t.load(e,r,(()=>{}),s)})))(`${p}/${e}.jpg`);return new n({map:t,side:a})}))),m=new i(...e),f=new o(m,d);return f.visible=u,l.add(f),f},fe=({controller:e,model:t,reticle:s,scene:n,type:a})=>()=>{const i=document.getElementById("three-debug");i.innerHTML="xr: "+W.XR,i.style.position="fixed",i.style.left="0px",i.style.top="0px";try{if(W.XR){if(a===r.HIT)s.visible&&(t.position.setFromMatrixPosition(s.matrix),n.add(t));else if(a===r.FLOAT){const r=t.clone();r.position.set(0,0,-1).applyMatrix4(e.matrixWorld),r.quaternion.setFromRotationMatrix(e.matrixWorld),n.add(r)}}else n.add(t)}catch(e){i.innerHTML+=e.toString()}};var ve=function(){function e(e){l.call(this,e),this.dracoLoader=null,this.ddsLoader=null,this.ktx2Loader=null,this.pluginCallbacks=[],this.register((function(e){return new me(e)})),this.register((function(e){return new ve(e)})),this.register((function(e){return new fe(e)})),this.register((function(e){return new i(e)}))}function t(){var e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}e.prototype=Object.assign(Object.create(l.prototype),{constructor:e,load:function(e,t,r,s){var n,a=this;n=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:u.extractUrlBase(e),this.manager.itemStart(e);var i=function(t){s?s(t):console.error(t),a.manager.itemError(e),a.manager.itemEnd(e)},o=new c(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(function(r){try{a.parse(r,n,(function(r){t(r),a.manager.itemEnd(e)}),i)}catch(e){i(e)}}),r,i)},setDRACOLoader:function(e){return this.dracoLoader=e,this},setDDSLoader:function(e){return this.ddsLoader=e,this},setKTX2Loader:function(e){return this.ktx2Loader=e,this},register:function(e){return-1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this},unregister:function(e){return-1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this},parse:function(e,t,s,n){var i,o={},l={};if("string"==typeof e)i=e;else if(u.decodeText(new Uint8Array(e,0,4))===ge){try{o[r.KHR_BINARY_GLTF]=new xe(e)}catch(e){return void(n&&n(e))}i=o[r.KHR_BINARY_GLTF].content}else i=u.decodeText(new Uint8Array(e));var c=JSON.parse(i);if(void 0===c.asset||c.asset.version[0]<2)n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else{var p=new Ye(c,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,manager:this.manager,ktx2Loader:this.ktx2Loader});p.fileLoader.setRequestHeader(this.requestHeader);for(var h=0;h<this.pluginCallbacks.length;h++){var d=this.pluginCallbacks[h](p);l[d.name]=d,o[d.name]=!0}if(c.extensionsUsed)for(h=0;h<c.extensionsUsed.length;++h){var m=c.extensionsUsed[h],f=c.extensionsRequired||[];switch(m){case r.KHR_MATERIALS_UNLIT:o[m]=new W;break;case r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[m]=new _e;break;case r.KHR_DRACO_MESH_COMPRESSION:o[m]=new Me(c,this.dracoLoader);break;case r.MSFT_TEXTURE_DDS:o[m]=new a(this.ddsLoader);break;case r.KHR_TEXTURE_TRANSFORM:o[m]=new Re;break;case r.KHR_MESH_QUANTIZATION:o[m]=new Ee;break;default:f.indexOf(m)>=0&&void 0===l[m]&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}p.setExtensions(o),p.setPlugins(l),p.parse(s,n)}}});var r={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",MSFT_TEXTURE_DDS:"MSFT_texture_dds"};function a(e){if(!e)throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");this.name=r.MSFT_TEXTURE_DDS,this.ddsLoader=e}function i(e){this.parser=e,this.name=r.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}function W(){this.name=r.KHR_MATERIALS_UNLIT}function me(e){this.parser=e,this.name=r.KHR_MATERIALS_CLEARCOAT}function fe(e){this.parser=e,this.name=r.KHR_MATERIALS_TRANSMISSION}function ve(e){this.parser=e,this.name=r.KHR_TEXTURE_BASISU}i.prototype._markDefs=function(){for(var e=this.parser,t=this.parser.json.nodes||[],r=0,s=t.length;r<s;r++){var n=t[r];n.extensions&&n.extensions[this.name]&&void 0!==n.extensions[this.name].light&&e._addNodeRef(this.cache,n.extensions[this.name].light)}},i.prototype._loadLight=function(e){var t=this.parser,r="light:"+e,s=t.cache.get(r);if(s)return s;var n,a=t.json,i=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],o=new p(16777215);void 0!==i.color&&o.fromArray(i.color);var l=void 0!==i.range?i.range:0;switch(i.type){case"directional":(n=new z(o)).target.position.set(0,0,-1),n.add(n.target);break;case"point":(n=new X(o)).distance=l;break;case"spot":(n=new V(o)).distance=l,i.spot=i.spot||{},i.spot.innerConeAngle=void 0!==i.spot.innerConeAngle?i.spot.innerConeAngle:0,i.spot.outerConeAngle=void 0!==i.spot.outerConeAngle?i.spot.outerConeAngle:Math.PI/4,n.angle=i.spot.outerConeAngle,n.penumbra=1-i.spot.innerConeAngle/i.spot.outerConeAngle,n.target.position.set(0,0,-1),n.add(n.target);break;default:throw new Error('THREE.GLTFLoader: Unexpected light type, "'+i.type+'".')}return n.position.set(0,0,0),n.decay=2,void 0!==i.intensity&&(n.intensity=i.intensity),n.name=t.createUniqueName(i.name||"light_"+e),s=Promise.resolve(n),t.cache.add(r,s),s},i.prototype.createNodeAttachment=function(e){var t=this,r=this.parser,s=r.json.nodes[e],n=(s.extensions&&s.extensions[this.name]||{}).light;return void 0===n?null:this._loadLight(n).then((function(e){return r._getNodeRef(t.cache,n,e)}))},W.prototype.getMaterialType=function(){return n},W.prototype.extendParams=function(e,t,r){var s=[];e.color=new p(1,1,1),e.opacity=1;var n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){var a=n.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}void 0!==n.baseColorTexture&&s.push(r.assignTexture(e,"map",n.baseColorTexture))}return Promise.all(s)},me.prototype.getMaterialType=function(e){var t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?q:null},me.prototype.extendMaterialParams=function(e,t){var r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();var n=[],a=s.extensions[this.name];if(void 0!==a.clearcoatFactor&&(t.clearcoat=a.clearcoatFactor),void 0!==a.clearcoatTexture&&n.push(r.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),void 0!==a.clearcoatRoughnessFactor&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),void 0!==a.clearcoatRoughnessTexture&&n.push(r.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),void 0!==a.clearcoatNormalTexture&&(n.push(r.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),void 0!==a.clearcoatNormalTexture.scale)){var i=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new E(i,i)}return Promise.all(n)},fe.prototype.getMaterialType=function(e){var t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?q:null},fe.prototype.extendMaterialParams=function(e,t){var r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();var n=[],a=s.extensions[this.name];return void 0!==a.transmissionFactor&&(t.transmission=a.transmissionFactor),void 0!==a.transmissionTexture&&n.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(n)},ve.prototype.loadTexture=function(e){var t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;var n=s.extensions[this.name],a=r.images[n.source],i=t.options.ktx2Loader;if(!i)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return t.loadTextureImage(e,a,i)};var ge="glTF",Te=1313821514,ye=5130562;function xe(e){this.name=r.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,12);if(this.header={magic:u.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ge)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");for(var s=new DataView(e,12),n=0;n<s.byteLength;){var a=s.getUint32(n,!0);n+=4;var i=s.getUint32(n,!0);if(n+=4,i===Te){var o=new Uint8Array(e,12+n,a);this.content=u.decodeText(o)}else if(i===ye){var l=12+n;this.body=e.slice(l,l+a)}n+=a}if(null===this.content)throw new Error("THREE.GLTFLoader: JSON content not found.")}function Me(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=r.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}function Re(){this.name=r.KHR_TEXTURE_TRANSFORM}function Se(e){h.call(this),this.isGLTFSpecularGlossinessMaterial=!0;var t=["#ifdef USE_SPECULARMAP","\tuniform sampler2D specularMap;","#endif"].join("\n"),r=["#ifdef USE_GLOSSINESSMAP","\tuniform sampler2D glossinessMap;","#endif"].join("\n"),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","\tvec4 texelSpecular = texture2D( specularMap, vUv );","\ttexelSpecular = sRGBToLinear( texelSpecular );","\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","\tspecularFactor *= texelSpecular.rgb;","#endif"].join("\n"),n=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );","\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","\tglossinessFactor *= texelGlossiness.a;","#endif"].join("\n"),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.specularRoughness += geometryRoughness;","material.specularRoughness = min( material.specularRoughness, 1.0 );","material.specularColor = specularFactor;"].join("\n"),i={specular:{value:(new p).setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=i,this.onBeforeCompile=function(e){for(var o in i)e.uniforms[o]=i[o];e.fragmentShader=e.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",r).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",n).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return i.specular.value},set:function(e){i.specular.value=e}},specularMap:{get:function(){return i.specularMap.value},set:function(e){i.specularMap.value=e,e?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return i.glossiness.value},set:function(e){i.glossiness.value=e}},glossinessMap:{get:function(){return i.glossinessMap.value},set:function(e){i.glossinessMap.value=e,e?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}function _e(){return{name:r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,specularGlossinessParams:["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"],getMaterialType:function(){return Se},extendParams:function(e,t,r){var s=t.extensions[this.name];e.color=new p(1,1,1),e.opacity=1;var n=[];if(Array.isArray(s.diffuseFactor)){var a=s.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(void 0!==s.diffuseTexture&&n.push(r.assignTexture(e,"map",s.diffuseTexture)),e.emissive=new p(0,0,0),e.glossiness=void 0!==s.glossinessFactor?s.glossinessFactor:1,e.specular=new p(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),void 0!==s.specularGlossinessTexture){var i=s.specularGlossinessTexture;n.push(r.assignTexture(e,"glossinessMap",i)),n.push(r.assignTexture(e,"specularMap",i))}return Promise.all(n)},createMaterial:function(e){var t=new Se(e);return t.fog=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,t.normalMapType=d,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}}function Ee(){this.name=r.KHR_MESH_QUANTIZATION}function we(e,t,r,s){Y.call(this,e,t,r,s)}Me.prototype.decodePrimitive=function(e,t){var r=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,i={},o={},l={};for(var u in a){var c=De[u]||u.toLowerCase();i[c]=a[u]}for(u in e.attributes){c=De[u]||u.toLowerCase();if(void 0!==a[u]){var p=r.accessors[e.attributes[u]],h=Ce[p.componentType];l[c]=h,o[c]=!0===p.normalized}}return t.getDependency("bufferView",n).then((function(e){return new Promise((function(t){s.decodeDracoFile(e,(function(e){for(var r in e.attributes){var s=e.attributes[r],n=o[r];void 0!==n&&(s.normalized=n)}t(e)}),i,l)}))}))},Re.prototype.extendTexture=function(e,t){return e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.needsUpdate=!0,e},Se.prototype=Object.create(h.prototype),Se.prototype.constructor=Se,Se.prototype.copy=function(e){return h.prototype.copy.call(this,e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this},we.prototype=Object.create(Y.prototype),we.prototype.constructor=we,we.prototype.copySampleValue_=function(e){for(var t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,n=e*s*3+s,a=0;a!==s;a++)t[a]=r[n+a];return t},we.prototype.beforeStart_=we.prototype.copySampleValue_,we.prototype.afterEnd_=we.prototype.copySampleValue_,we.prototype.interpolate_=function(e,t,r,s){for(var n=this.resultBuffer,a=this.sampleValues,i=this.valueSize,o=2*i,l=3*i,u=s-t,c=(r-t)/u,p=c*c,h=p*c,d=e*l,m=d-l,f=-2*h+3*p,v=h-p,g=1-f,T=v-p+c,y=0;y!==i;y++){var x=a[m+y+i],M=a[m+y+o]*u,R=a[d+y+i],S=a[d+y]*u;n[y]=g*x+T*M+f*R+v*S}return n};var Ae=0,be=1,Le=2,Ie=3,Pe=4,Oe=5,Ne=6,Ce={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ue={9728:$,9729:T,9984:Z,9985:J,9986:Q,9987:y},Fe={33071:ee,33648:te,10497:x},He={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},De={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ke={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ge={CUBICSPLINE:void 0,LINEAR:D,STEP:re},je="OPAQUE",Ke="MASK",Be="BLEND";function Ve(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}function Xe(e,t,r){for(var s in r.extensions)void 0===e[s]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=r.extensions[s])}function ze(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function qe(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(var r=0,s=t.weights.length;r<s;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){var n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(r=0,s=n.length;r<s;r++)e.morphTargetDictionary[n[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function We(e){for(var t="",r=Object.keys(e).sort(),s=0,n=r.length;s<n;s++)t+=r[s]+":"+e[r[s]]+";";return t}function Ye(e,r){this.json=e||{},this.extensions={},this.plugins={},this.options=r||{},this.cache=new t,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.nodeNamesUsed={},"undefined"!=typeof createImageBitmap&&!1===/Firefox/.test(navigator.userAgent)?this.textureLoader=new m(this.options.manager):this.textureLoader=new s(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.fileLoader=new c(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}function $e(e,t,r){var s=t.attributes,n=[];function a(t,s){return r.getDependency("accessor",t).then((function(t){e.setAttribute(s,t)}))}for(var i in s){var o=De[i]||i.toLowerCase();o in e.attributes||n.push(a(s[i],o))}if(void 0!==t.indices&&!e.index){var l=r.getDependency("accessor",t.indices).then((function(t){e.setIndex(t)}));n.push(l)}return ze(e,t),function(e,t,r){var s=t.attributes,n=new pe;if(void 0!==s.POSITION){var a=(h=r.json.accessors[s.POSITION]).min,i=h.max;if(void 0!==a&&void 0!==i){n.set(new he(a[0],a[1],a[2]),new he(i[0],i[1],i[2]));var o=t.targets;if(void 0!==o){for(var l=new he,u=new he,c=0,p=o.length;c<p;c++){var h,d=o[c];if(void 0!==d.POSITION)a=(h=r.json.accessors[d.POSITION]).min,i=h.max,void 0!==a&&void 0!==i?(u.setX(Math.max(Math.abs(a[0]),Math.abs(i[0]))),u.setY(Math.max(Math.abs(a[1]),Math.abs(i[1]))),u.setZ(Math.max(Math.abs(a[2]),Math.abs(i[2]))),l.max(u)):console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}n.expandByVector(l)}e.boundingBox=n;var m=new de;n.getCenter(m.center),m.radius=n.min.distanceTo(n.max)/2,e.boundingSphere=m}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}(e,t,r),Promise.all(n).then((function(){return void 0!==t.targets?function(e,t,r){for(var s=!1,n=!1,a=0,i=t.length;a<i&&(void 0!==(u=t[a]).POSITION&&(s=!0),void 0!==u.NORMAL&&(n=!0),!s||!n);a++);if(!s&&!n)return Promise.resolve(e);var o=[],l=[];for(a=0,i=t.length;a<i;a++){var u=t[a];if(s){var c=void 0!==u.POSITION?r.getDependency("accessor",u.POSITION):e.attributes.position;o.push(c)}n&&(c=void 0!==u.NORMAL?r.getDependency("accessor",u.NORMAL):e.attributes.normal,l.push(c))}return Promise.all([Promise.all(o),Promise.all(l)]).then((function(t){var r=t[0],a=t[1];return s&&(e.morphAttributes.position=r),n&&(e.morphAttributes.normal=a),e.morphTargetsRelative=!0,e}))}(e,t.targets,r):e}))}function Ze(e,t){var r=e.getIndex();if(null===r){var s=[],n=e.getAttribute("position");if(void 0===n)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(var a=0;a<n.count;a++)s.push(a);e.setIndex(s),r=e.getIndex()}var i=r.count-2,o=[];if(t===ie)for(a=1;a<=i;a++)o.push(r.getX(0)),o.push(r.getX(a)),o.push(r.getX(a+1));else for(a=0;a<i;a++)a%2==0?(o.push(r.getX(a)),o.push(r.getX(a+1)),o.push(r.getX(a+2))):(o.push(r.getX(a+2)),o.push(r.getX(a+1)),o.push(r.getX(a)));o.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");var l=e.clone();return l.setIndex(o),l}return Ye.prototype.setExtensions=function(e){this.extensions=e},Ye.prototype.setPlugins=function(e){this.plugins=e},Ye.prototype.parse=function(e,t){var r=this,s=this.json,n=this.extensions;this.cache.removeAll(),this._invokeAll((function(e){return e._markDefs&&e._markDefs()})),Promise.all([this.getDependencies("scene"),this.getDependencies("animation"),this.getDependencies("camera")]).then((function(t){var a={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:r,userData:{}};Xe(n,a,s),ze(a,s),e(a)})).catch(t)},Ye.prototype._markDefs=function(){for(var e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[],s=0,n=t.length;s<n;s++)for(var a=t[s].joints,i=0,o=a.length;i<o;i++)e[a[i]].isBone=!0;for(var l=0,u=e.length;l<u;l++){var c=e[l];void 0!==c.mesh&&(this._addNodeRef(this.meshCache,c.mesh),void 0!==c.skin&&(r[c.mesh].isSkinnedMesh=!0)),void 0!==c.camera&&this._addNodeRef(this.cameraCache,c.camera)}},Ye.prototype._addNodeRef=function(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)},Ye.prototype._getNodeRef=function(e,t,r){if(e.refs[t]<=1)return r;var s=r.clone();return s.name+="_instance_"+e.uses[t]++,s},Ye.prototype._invokeOne=function(e){var t=Object.values(this.plugins);t.push(this);for(var r=0;r<t.length;r++){var s=e(t[r]);if(s)return s}},Ye.prototype._invokeAll=function(e){var t=Object.values(this.plugins);t.unshift(this);for(var r=[],s=0;s<t.length;s++){var n=e(t[s]);n&&r.push(n)}return r},Ye.prototype.getDependency=function(e,t){var r=e+":"+t,s=this.cache.get(r);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne((function(e){return e.loadMesh&&e.loadMesh(t)}));break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne((function(e){return e.loadBufferView&&e.loadBufferView(t)}));break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne((function(e){return e.loadMaterial&&e.loadMaterial(t)}));break;case"texture":s=this._invokeOne((function(e){return e.loadTexture&&e.loadTexture(t)}));break;case"skin":s=this.loadSkin(t);break;case"animation":s=this.loadAnimation(t);break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(r,s)}return s},Ye.prototype.getDependencies=function(e){var t=this.cache.get(e);if(!t){var r=this,s=this.json[e+("mesh"===e?"es":"s")]||[];t=Promise.all(s.map((function(t,s){return r.getDependency(e,s)}))),this.cache.add(e,t)}return t},Ye.prototype.loadBuffer=function(e){var t=this.json.buffers[e],s=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[r.KHR_BINARY_GLTF].body);var n=this.options;return new Promise((function(e,r){s.load(Ve(t.uri,n.path),e,void 0,(function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))}))}))},Ye.prototype.loadBufferView=function(e){var t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then((function(e){var r=t.byteLength||0,s=t.byteOffset||0;return e.slice(s,s+r)}))},Ye.prototype.loadAccessor=function(e){var t=this,r=this.json,s=this.json.accessors[e];if(void 0===s.bufferView&&void 0===s.sparse)return Promise.resolve(null);var n=[];return void 0!==s.bufferView?n.push(this.getDependency("bufferView",s.bufferView)):n.push(null),void 0!==s.sparse&&(n.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(n).then((function(e){var n,a,i=e[0],o=He[s.type],l=Ce[s.componentType],u=l.BYTES_PER_ELEMENT,c=u*o,p=s.byteOffset||0,h=void 0!==s.bufferView?r.bufferViews[s.bufferView].byteStride:void 0,d=!0===s.normalized;if(h&&h!==c){var m=Math.floor(p/h),g="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,T=t.cache.get(g);T||(n=new l(i,m*h,s.count*h/u),T=new f(n,h/u),t.cache.add(g,T)),a=new ne(T,o,p%h/u,d)}else n=null===i?new l(s.count*o):new l(i,p,s.count*o),a=new v(n,o,d);if(void 0!==s.sparse){var y=He.SCALAR,x=Ce[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,R=s.sparse.values.byteOffset||0,S=new x(e[1],M,s.sparse.count*y),_=new l(e[2],R,s.sparse.count*o);null!==i&&(a=new v(a.array.slice(),a.itemSize,a.normalized));for(var E=0,w=S.length;E<w;E++){var A=S[E];if(a.setX(A,_[E*o]),o>=2&&a.setY(A,_[E*o+1]),o>=3&&a.setZ(A,_[E*o+2]),o>=4&&a.setW(A,_[E*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return a}))},Ye.prototype.loadTexture=function(e){var t,s,n=this.json,a=this.options,i=n.textures[e],o=i.extensions||{};return(t=o[r.MSFT_TEXTURE_DDS]?n.images[o[r.MSFT_TEXTURE_DDS].source]:n.images[i.source]).uri&&(s=a.manager.getHandler(t.uri)),s||(s=o[r.MSFT_TEXTURE_DDS]?this.extensions[r.MSFT_TEXTURE_DDS].ddsLoader:this.textureLoader),this.loadTextureImage(e,t,s)},Ye.prototype.loadTextureImage=function(e,t,r){var s=this,n=this.json,a=this.options,i=n.textures[e],o=self.URL||self.webkitURL,l=t.uri,u=!1,c=!0;return"image/jpeg"===t.mimeType&&(c=!1),void 0!==t.bufferView&&(l=s.getDependency("bufferView",t.bufferView).then((function(e){if("image/png"===t.mimeType){var r=new DataView(e,25,1).getUint8(0,!1);c=6===r||4===r||3===r}u=!0;var s=new Blob([e],{type:t.mimeType});return l=o.createObjectURL(s)}))),Promise.resolve(l).then((function(e){return new Promise((function(t,s){var n=t;!0===r.isImageBitmapLoader&&(n=function(e){t(new ae(e))}),r.load(Ve(e,a.path),n,void 0,s)}))})).then((function(t){!0===u&&o.revokeObjectURL(l),t.flipY=!1,i.name&&(t.name=i.name),c||(t.format=g);var r=(n.samplers||{})[i.sampler]||{};return t.magFilter=Ue[r.magFilter]||T,t.minFilter=Ue[r.minFilter]||y,t.wrapS=Fe[r.wrapS]||x,t.wrapT=Fe[r.wrapT]||x,s.associations.set(t,{type:"textures",index:e}),t}))},Ye.prototype.assignTexture=function(e,t,s){var n=this;return this.getDependency("texture",s.index).then((function(a){if(void 0===s.texCoord||0==s.texCoord||"aoMap"===t&&1==s.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+s.texCoord+" for texture "+t+" not yet supported."),n.extensions[r.KHR_TEXTURE_TRANSFORM]){var i=void 0!==s.extensions?s.extensions[r.KHR_TEXTURE_TRANSFORM]:void 0;if(i){var o=n.associations.get(a);a=n.extensions[r.KHR_TEXTURE_TRANSFORM].extendTexture(a,i),n.associations.set(a,o)}}e[t]=a}))},Ye.prototype.assignFinalMaterial=function(e){var t=e.geometry,r=e.material,s=void 0!==t.attributes.tangent,n=void 0!==t.attributes.color,a=void 0===t.attributes.normal,i=!0===e.isSkinnedMesh,o=Object.keys(t.morphAttributes).length>0,l=o&&void 0!==t.morphAttributes.normal;if(e.isPoints){var u="PointsMaterial:"+r.uuid,c=this.cache.get(u);c||(c=new M,R.prototype.copy.call(c,r),c.color.copy(r.color),c.map=r.map,c.sizeAttenuation=!1,this.cache.add(u,c)),r=c}else if(e.isLine){u="LineBasicMaterial:"+r.uuid;var p=this.cache.get(u);p||(p=new S,R.prototype.copy.call(p,r),p.color.copy(r.color),this.cache.add(u,p)),r=p}if(s||n||a||i||o){u="ClonedMaterial:"+r.uuid+":";r.isGLTFSpecularGlossinessMaterial&&(u+="specular-glossiness:"),i&&(u+="skinning:"),s&&(u+="vertex-tangents:"),n&&(u+="vertex-colors:"),a&&(u+="flat-shading:"),o&&(u+="morph-targets:"),l&&(u+="morph-normals:");var h=this.cache.get(u);h||(h=r.clone(),i&&(h.skinning=!0),s&&(h.vertexTangents=!0),n&&(h.vertexColors=!0),a&&(h.flatShading=!0),o&&(h.morphTargets=!0),l&&(h.morphNormals=!0),this.cache.add(u,h),this.associations.set(h,this.associations.get(r))),r=h}r.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv),r.normalScale&&!s&&(r.normalScale.y=-r.normalScale.y),r.clearcoatNormalScale&&!s&&(r.clearcoatNormalScale.y=-r.clearcoatNormalScale.y),e.material=r},Ye.prototype.getMaterialType=function(){return h},Ye.prototype.loadMaterial=function(e){var t,s=this,a=this.json,i=this.extensions,o=a.materials[e],l={},u=o.extensions||{},c=[];if(u[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){var h=i[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];t=h.getMaterialType(),c.push(h.extendParams(l,o,s))}else if(u[r.KHR_MATERIALS_UNLIT]){var d=i[r.KHR_MATERIALS_UNLIT];t=d.getMaterialType(),c.push(d.extendParams(l,o,s))}else{var m=o.pbrMetallicRoughness||{};if(l.color=new p(1,1,1),l.opacity=1,Array.isArray(m.baseColorFactor)){var f=m.baseColorFactor;l.color.fromArray(f),l.opacity=f[3]}void 0!==m.baseColorTexture&&c.push(s.assignTexture(l,"map",m.baseColorTexture)),l.metalness=void 0!==m.metallicFactor?m.metallicFactor:1,l.roughness=void 0!==m.roughnessFactor?m.roughnessFactor:1,void 0!==m.metallicRoughnessTexture&&(c.push(s.assignTexture(l,"metalnessMap",m.metallicRoughnessTexture)),c.push(s.assignTexture(l,"roughnessMap",m.metallicRoughnessTexture))),t=this._invokeOne((function(t){return t.getMaterialType&&t.getMaterialType(e)})),c.push(Promise.all(this._invokeAll((function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,l)}))))}!0===o.doubleSided&&(l.side=_);var v=o.alphaMode||je;return v===Be?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,v===Ke&&(l.alphaTest=void 0!==o.alphaCutoff?o.alphaCutoff:.5)),void 0!==o.normalTexture&&t!==n&&(c.push(s.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new E(1,1),void 0!==o.normalTexture.scale&&l.normalScale.set(o.normalTexture.scale,o.normalTexture.scale)),void 0!==o.occlusionTexture&&t!==n&&(c.push(s.assignTexture(l,"aoMap",o.occlusionTexture)),void 0!==o.occlusionTexture.strength&&(l.aoMapIntensity=o.occlusionTexture.strength)),void 0!==o.emissiveFactor&&t!==n&&(l.emissive=(new p).fromArray(o.emissiveFactor)),void 0!==o.emissiveTexture&&t!==n&&c.push(s.assignTexture(l,"emissiveMap",o.emissiveTexture)),Promise.all(c).then((function(){var n;return n=t===Se?i[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l):new t(l),o.name&&(n.name=o.name),n.map&&(n.map.encoding=w),n.emissiveMap&&(n.emissiveMap.encoding=w),ze(n,o),s.associations.set(n,{type:"materials",index:e}),o.extensions&&Xe(i,n,o),n}))},Ye.prototype.createUniqueName=function(e){for(var t=A.sanitizeNodeName(e||""),r=1;this.nodeNamesUsed[t];++r)t=e+"_"+r;return this.nodeNamesUsed[t]=!0,t},Ye.prototype.loadGeometries=function(e){var t=this,s=this.extensions,n=this.primitiveCache;function a(e){return s[r.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then((function(r){return $e(r,e,t)}))}for(var i,o,l=[],u=0,c=e.length;u<c;u++){var p,h=e[u],d=(o=void 0,(o=(i=h).extensions&&i.extensions[r.KHR_DRACO_MESH_COMPRESSION])?"draco:"+o.bufferView+":"+o.indices+":"+We(o.attributes):i.indices+":"+We(i.attributes)+":"+i.mode),m=n[d];if(m)l.push(m.promise);else p=h.extensions&&h.extensions[r.KHR_DRACO_MESH_COMPRESSION]?a(h):$e(new b,h,t),n[d]={primitive:h,promise:p},l.push(p)}return Promise.all(l)},Ye.prototype.loadMesh=function(e){for(var t,r=this,s=this.json.meshes[e],n=s.primitives,a=[],i=0,l=n.length;i<l;i++){var u=void 0===n[i].material?(void 0===(t=this.cache).DefaultMaterial&&(t.DefaultMaterial=new h({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:se})),t.DefaultMaterial):this.getDependency("material",n[i].material);a.push(u)}return a.push(r.loadGeometries(n)),Promise.all(a).then((function(t){for(var a=t.slice(0,t.length-1),i=t[t.length-1],l=[],u=0,c=i.length;u<c;u++){var p,h=i[u],d=n[u],m=a[u];if(d.mode===Pe||d.mode===Oe||d.mode===Ne||void 0===d.mode)!0!==(p=!0===s.isSkinnedMesh?new L(h,m):new o(h,m)).isSkinnedMesh||p.geometry.attributes.skinWeight.normalized||p.normalizeSkinWeights(),d.mode===Oe?p.geometry=Ze(p.geometry,oe):d.mode===Ne&&(p.geometry=Ze(p.geometry,ie));else if(d.mode===be)p=new I(h,m);else if(d.mode===Ie)p=new P(h,m);else if(d.mode===Le)p=new O(h,m);else{if(d.mode!==Ae)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);p=new N(h,m)}Object.keys(p.geometry.morphAttributes).length>0&&qe(p,s),p.name=r.createUniqueName(s.name||"mesh_"+e),i.length>1&&(p.name+="_"+u),ze(p,s),r.assignFinalMaterial(p),l.push(p)}if(1===l.length)return l[0];var f=new C;for(u=0,c=l.length;u<c;u++)f.add(l[u]);return f}))},Ye.prototype.loadCamera=function(e){var t,r=this.json.cameras[e],s=r[r.type];if(s)return"perspective"===r.type?t=new U(F.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):"orthographic"===r.type&&(t=new H(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),ze(t,r),Promise.resolve(t);console.warn("THREE.GLTFLoader: Missing camera parameters.")},Ye.prototype.loadSkin=function(e){var t=this.json.skins[e],r={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(r):this.getDependency("accessor",t.inverseBindMatrices).then((function(e){return r.inverseBindMatrices=e,r}))},Ye.prototype.loadAnimation=function(e){for(var t=this.json.animations[e],r=[],s=[],n=[],a=[],i=[],o=0,l=t.channels.length;o<l;o++){var u=t.channels[o],c=t.samplers[u.sampler],p=u.target,h=void 0!==p.node?p.node:p.id,d=void 0!==t.parameters?t.parameters[c.input]:c.input,m=void 0!==t.parameters?t.parameters[c.output]:c.output;r.push(this.getDependency("node",h)),s.push(this.getDependency("accessor",d)),n.push(this.getDependency("accessor",m)),a.push(c),i.push(p)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(n),Promise.all(a),Promise.all(i)]).then((function(r){for(var s=r[0],n=r[1],a=r[2],i=r[3],o=r[4],l=[],u=0,c=s.length;u<c;u++){var p=s[u],h=n[u],d=a[u],m=i[u],f=o[u];if(void 0!==p){var v;switch(p.updateMatrix(),p.matrixAutoUpdate=!0,ke[f.path]){case ke.weights:v=ce;break;case ke.rotation:v=ue;break;case ke.position:case ke.scale:default:v=le}var g=p.name?p.name:p.uuid,T=void 0!==m.interpolation?Ge[m.interpolation]:D,y=[];ke[f.path]===ke.weights?p.traverse((function(e){!0===e.isMesh&&e.morphTargetInfluences&&y.push(e.name?e.name:e.uuid)})):y.push(g);var x=d.array;if(d.normalized){var M;if(x.constructor===Int8Array)M=1/127;else if(x.constructor===Uint8Array)M=1/255;else if(x.constructor==Int16Array)M=1/32767;else{if(x.constructor!==Uint16Array)throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");M=1/65535}for(var R=new Float32Array(x.length),S=0,_=x.length;S<_;S++)R[S]=x[S]*M;x=R}for(S=0,_=y.length;S<_;S++){var E=new v(y[S]+"."+ke[f.path],h.array,x,T);"CUBICSPLINE"===m.interpolation&&(E.createInterpolant=function(e){return new we(this.times,this.values,this.getValueSize()/3,e)},E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),l.push(E)}}}var w=t.name?t.name:"animation_"+e;return new k(w,void 0,l)}))},Ye.prototype.loadNode=function(e){var t,r=this.json,s=this.extensions,n=this,a=r.nodes[e],i=a.name?n.createUniqueName(a.name):"";return(t=[],void 0!==a.mesh&&t.push(n.getDependency("mesh",a.mesh).then((function(e){var t=n._getNodeRef(n.meshCache,a.mesh,e);return void 0!==a.weights&&t.traverse((function(e){if(e.isMesh)for(var t=0,r=a.weights.length;t<r;t++)e.morphTargetInfluences[t]=a.weights[t]})),t}))),void 0!==a.camera&&t.push(n.getDependency("camera",a.camera).then((function(e){return n._getNodeRef(n.cameraCache,a.camera,e)}))),n._invokeAll((function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)})).forEach((function(e){t.push(e)})),Promise.all(t)).then((function(t){var r;if((r=!0===a.isBone?new G:t.length>1?new C:1===t.length?t[0]:new j)!==t[0])for(var o=0,l=t.length;o<l;o++)r.add(t[o]);if(a.name&&(r.userData.name=a.name,r.name=i),ze(r,a),a.extensions&&Xe(s,r,a),void 0!==a.matrix){var u=new K;u.fromArray(a.matrix),r.applyMatrix4(u)}else void 0!==a.translation&&r.position.fromArray(a.translation),void 0!==a.rotation&&r.quaternion.fromArray(a.rotation),void 0!==a.scale&&r.scale.fromArray(a.scale);return n.associations.set(r,{type:"nodes",index:e}),r}))},Ye.prototype.loadScene=function(){function e(t,r,s,n){var a=s.nodes[t];return n.getDependency("node",t).then((function(e){return void 0===a.skin?e:n.getDependency("skin",a.skin).then((function(e){for(var r=[],s=0,a=(t=e).joints.length;s<a;s++)r.push(n.getDependency("node",t.joints[s]));return Promise.all(r)})).then((function(r){return e.traverse((function(e){if(e.isMesh){for(var s=[],n=[],a=0,i=r.length;a<i;a++){var o=r[a];if(o){s.push(o);var l=new K;void 0!==t.inverseBindMatrices&&l.fromArray(t.inverseBindMatrices.array,16*a),n.push(l)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[a])}e.bind(new B(s,n),e.matrixWorld)}})),e}));var t})).then((function(t){r.add(t);var i=[];if(a.children)for(var o=a.children,l=0,u=o.length;l<u;l++){var c=o[l];i.push(e(c,t,s,n))}return Promise.all(i)}))}return function(t){var r=this.json,s=this.extensions,n=this.json.scenes[t],a=new C;n.name&&(a.name=this.createUniqueName(n.name)),ze(a,n),n.extensions&&Xe(s,a,n);for(var i=n.nodes||[],o=[],l=0,u=i.length;l<u;l++)o.push(e(i[l],a,r,this));return Promise.all(o).then((function(){return a}))}}(),e}();export{ve as G,me as a,fe as s};
