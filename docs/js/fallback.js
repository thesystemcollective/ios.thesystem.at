import{t as e,o as t,c as n}from"../main.js";import{Vector3 as o,MOUSE as a,TOUCH as i,Quaternion as s,Spherical as c,Vector2 as r,EventDispatcher as m}from"./three.module.js";import{a as u,s as l}from"./GLTFLoader.js";var h=function(e,t){var n,m,u,l,h,p;void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new o,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:a.ROTATE,MIDDLE:a.DOLLY,RIGHT:a.PAN},this.touches={ONE:i.ROTATE,TWO:i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return y.phi},this.getAzimuthalAngle=function(){return y.theta},this.saveState=function(){d.target0.copy(d.target),d.position0.copy(d.object.position),d.zoom0=d.object.zoom},this.reset=function(){d.target.copy(d.target0),d.object.position.copy(d.position0),d.object.zoom=d.zoom0,d.object.updateProjectionMatrix(),d.dispatchEvent(b),d.update(),v=g.NONE},this.update=(n=new o,m=(new s).setFromUnitVectors(e.up,new o(0,1,0)),u=m.clone().inverse(),l=new o,h=new s,p=2*Math.PI,function(){var e=d.object.position;n.copy(e).sub(d.target),n.applyQuaternion(m),y.setFromVector3(n),d.autoRotate&&v===g.NONE&&C(2*Math.PI/60/60*d.autoRotateSpeed),d.enableDamping?(y.theta+=T.theta*d.dampingFactor,y.phi+=T.phi*d.dampingFactor):(y.theta+=T.theta,y.phi+=T.phi);var t=d.minAzimuthAngle,o=d.maxAzimuthAngle;return isFinite(t)&&isFinite(o)&&(t<-Math.PI?t+=p:t>Math.PI&&(t-=p),o<-Math.PI?o+=p:o>Math.PI&&(o-=p),y.theta=t<o?Math.max(t,Math.min(o,y.theta)):y.theta>(t+o)/2?Math.max(t,y.theta):Math.min(o,y.theta)),y.phi=Math.max(d.minPolarAngle,Math.min(d.maxPolarAngle,y.phi)),y.makeSafe(),y.radius*=P,y.radius=Math.max(d.minDistance,Math.min(d.maxDistance,y.radius)),!0===d.enableDamping?d.target.addScaledVector(L,d.dampingFactor):d.target.add(L),n.setFromSpherical(y),n.applyQuaternion(u),e.copy(d.target).add(n),d.object.lookAt(d.target),!0===d.enableDamping?(T.theta*=1-d.dampingFactor,T.phi*=1-d.dampingFactor,L.multiplyScalar(1-d.dampingFactor)):(T.set(0,0,0),L.set(0,0,0)),P=1,!!(w||l.distanceToSquared(d.object.position)>O||8*(1-h.dot(d.object.quaternion))>O)&&(d.dispatchEvent(b),l.copy(d.object.position),h.copy(d.object.quaternion),w=!1,!0)}),this.dispose=function(){d.domElement.removeEventListener("contextmenu",se,!1),d.domElement.removeEventListener("pointerdown",J,!1),d.domElement.removeEventListener("wheel",te,!1),d.domElement.removeEventListener("touchstart",oe,!1),d.domElement.removeEventListener("touchend",ie,!1),d.domElement.removeEventListener("touchmove",ae,!1),d.domElement.ownerDocument.removeEventListener("pointermove",$,!1),d.domElement.ownerDocument.removeEventListener("pointerup",ee,!1),d.domElement.removeEventListener("keydown",ne,!1)};var d=this,b={type:"change"},E={type:"start"},f={type:"end"},g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},v=g.NONE,O=1e-6,y=new c,T=new c,P=1,L=new o,w=!1,N=new r,A=new r,j=new r,R=new r,k=new r,D=new r,M=new r,Y=new r,x=new r;function S(){return Math.pow(.95,d.zoomSpeed)}function C(e){T.theta-=e}function H(e){T.phi-=e}var z,I=(z=new o,function(e,t){z.setFromMatrixColumn(t,0),z.multiplyScalar(-e),L.add(z)}),X=function(){var e=new o;return function(t,n){!0===d.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(d.object.up,e)),e.multiplyScalar(t),L.add(e)}}(),_=function(){var e=new o;return function(t,n){var o=d.domElement;if(d.object.isPerspectiveCamera){var a=d.object.position;e.copy(a).sub(d.target);var i=e.length();i*=Math.tan(d.object.fov/2*Math.PI/180),I(2*t*i/o.clientHeight,d.object.matrix),X(2*n*i/o.clientHeight,d.object.matrix)}else d.object.isOrthographicCamera?(I(t*(d.object.right-d.object.left)/d.object.zoom/o.clientWidth,d.object.matrix),X(n*(d.object.top-d.object.bottom)/d.object.zoom/o.clientHeight,d.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),d.enablePan=!1)}}();function F(e){d.object.isPerspectiveCamera?P/=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom*e)),d.object.updateProjectionMatrix(),w=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),d.enableZoom=!1)}function Z(e){d.object.isPerspectiveCamera?P*=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom/e)),d.object.updateProjectionMatrix(),w=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),d.enableZoom=!1)}function U(e){N.set(e.clientX,e.clientY)}function B(e){R.set(e.clientX,e.clientY)}function G(e){if(1==e.touches.length)N.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);N.set(t,n)}}function V(e){if(1==e.touches.length)R.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);R.set(t,n)}}function K(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);M.set(0,o)}function W(e){if(1==e.touches.length)A.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);A.set(t,n)}j.subVectors(A,N).multiplyScalar(d.rotateSpeed);var o=d.domElement;C(2*Math.PI*j.x/o.clientHeight),H(2*Math.PI*j.y/o.clientHeight),N.copy(A)}function q(e){if(1==e.touches.length)k.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);k.set(t,n)}D.subVectors(k,R).multiplyScalar(d.panSpeed),_(D.x,D.y),R.copy(k)}function Q(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);Y.set(0,o),x.set(0,Math.pow(Y.y/M.y,d.zoomSpeed)),F(x.y),M.copy(Y)}function J(e){if(!1!==d.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;switch(e.preventDefault(),d.domElement.focus?d.domElement.focus():window.focus(),e.button){case 0:t=d.mouseButtons.LEFT;break;case 1:t=d.mouseButtons.MIDDLE;break;case 2:t=d.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.DOLLY:if(!1===d.enableZoom)return;!function(e){M.set(e.clientX,e.clientY)}(e),v=g.DOLLY;break;case a.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enablePan)return;B(e),v=g.PAN}else{if(!1===d.enableRotate)return;U(e),v=g.ROTATE}break;case a.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enableRotate)return;U(e),v=g.ROTATE}else{if(!1===d.enablePan)return;B(e),v=g.PAN}break;default:v=g.NONE}v!==g.NONE&&(d.domElement.ownerDocument.addEventListener("pointermove",$,!1),d.domElement.ownerDocument.addEventListener("pointerup",ee,!1),d.dispatchEvent(E))}(e)}}function $(e){if(!1!==d.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===d.enabled)return;switch(e.preventDefault(),v){case g.ROTATE:if(!1===d.enableRotate)return;!function(e){A.set(e.clientX,e.clientY),j.subVectors(A,N).multiplyScalar(d.rotateSpeed);var t=d.domElement;C(2*Math.PI*j.x/t.clientHeight),H(2*Math.PI*j.y/t.clientHeight),N.copy(A),d.update()}(e);break;case g.DOLLY:if(!1===d.enableZoom)return;!function(e){Y.set(e.clientX,e.clientY),x.subVectors(Y,M),x.y>0?F(S()):x.y<0&&Z(S()),M.copy(Y),d.update()}(e);break;case g.PAN:if(!1===d.enablePan)return;!function(e){k.set(e.clientX,e.clientY),D.subVectors(k,R).multiplyScalar(d.panSpeed),_(D.x,D.y),R.copy(k),d.update()}(e)}}(e)}}function ee(e){if(!1!==d.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===d.enabled)return;d.domElement.ownerDocument.removeEventListener("pointermove",$,!1),d.domElement.ownerDocument.removeEventListener("pointerup",ee,!1),d.dispatchEvent(f),v=g.NONE}()}}function te(e){!1===d.enabled||!1===d.enableZoom||v!==g.NONE&&v!==g.ROTATE||(e.preventDefault(),e.stopPropagation(),d.dispatchEvent(E),function(e){e.deltaY<0?Z(S()):e.deltaY>0&&F(S()),d.update()}(e),d.dispatchEvent(f))}function ne(e){!1!==d.enabled&&!1!==d.enableKeys&&!1!==d.enablePan&&function(e){var t=!1;switch(e.keyCode){case d.keys.UP:_(0,d.keyPanSpeed),t=!0;break;case d.keys.BOTTOM:_(0,-d.keyPanSpeed),t=!0;break;case d.keys.LEFT:_(d.keyPanSpeed,0),t=!0;break;case d.keys.RIGHT:_(-d.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),d.update())}(e)}function oe(e){if(!1!==d.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(d.touches.ONE){case i.ROTATE:if(!1===d.enableRotate)return;G(e),v=g.TOUCH_ROTATE;break;case i.PAN:if(!1===d.enablePan)return;V(e),v=g.TOUCH_PAN;break;default:v=g.NONE}break;case 2:switch(d.touches.TWO){case i.DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&K(e),d.enablePan&&V(e)}(e),v=g.TOUCH_DOLLY_PAN;break;case i.DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&K(e),d.enableRotate&&G(e)}(e),v=g.TOUCH_DOLLY_ROTATE;break;default:v=g.NONE}break;default:v=g.NONE}v!==g.NONE&&d.dispatchEvent(E)}}function ae(e){if(!1!==d.enabled)switch(e.preventDefault(),e.stopPropagation(),v){case g.TOUCH_ROTATE:if(!1===d.enableRotate)return;W(e),d.update();break;case g.TOUCH_PAN:if(!1===d.enablePan)return;q(e),d.update();break;case g.TOUCH_DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&Q(e),d.enablePan&&q(e)}(e),d.update();break;case g.TOUCH_DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&Q(e),d.enableRotate&&W(e)}(e),d.update();break;default:v=g.NONE}}function ie(e){!1!==d.enabled&&(d.dispatchEvent(f),v=g.NONE)}function se(e){!1!==d.enabled&&e.preventDefault()}d.domElement.addEventListener("contextmenu",se,!1),d.domElement.addEventListener("pointerdown",J,!1),d.domElement.addEventListener("wheel",te,!1),d.domElement.addEventListener("touchstart",oe,!1),d.domElement.addEventListener("touchend",ie,!1),d.domElement.addEventListener("touchmove",ae,!1),d.domElement.addEventListener("keydown",ne,!1),-1===d.domElement.tabIndex&&(d.domElement.tabIndex=0),this.update()};(h.prototype=Object.create(m.prototype)).constructor=h;var p=function(e,t){h.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=a.PAN,this.mouseButtons.RIGHT=a.ROTATE,this.touches.ONE=i.PAN,this.touches.TWO=i.DOLLY_ROTATE};(p.prototype=Object.create(m.prototype)).constructor=p;const d=async o=>{B.classList.add(e);const{camera:a,data:i,model:s,reflect:c,renderer:r,scene:m}=o,p=new h(a,r.domElement);Object.entries(t).forEach((([e,t])=>{p[e]=t}));const d=s.getObjectByName("lookat");d&&(p.target=d.position);let{skybox:b}=c;b||(b=await u({data:i,scene:m,visible:!0}));const{pcCam:E}=i;if(E){const{y:e=n.y,z:t=n.z}=E;(e||t)&&(a.position.set(0,e,t),p.update())}l({camera:a,controller:p,model:s,scene:m})()};export{d as fallback};
