import{o as e}from"./main.js";import{Vector3 as t,MOUSE as n,TOUCH as o,Quaternion as a,Spherical as i,Vector2 as c,EventDispatcher as s}from"./three.module.js";import{s as r,a as u}from"./GLTFLoader.js";var m=function(e,s){var r,u,m,h,l,p;this.object=e,this.domElement=s,this.enabled=!0,this.target=new t,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:n.ROTATE,MIDDLE:n.DOLLY,RIGHT:n.PAN},this.touches={ONE:o.ROTATE,TWO:o.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return T.phi},this.getAzimuthalAngle=function(){return T.theta},this.saveState=function(){d.target0.copy(d.target),d.position0.copy(d.object.position),d.zoom0=d.object.zoom},this.reset=function(){d.target.copy(d.target0),d.object.position.copy(d.position0),d.object.zoom=d.zoom0,d.object.updateProjectionMatrix(),d.dispatchEvent(b),d.update(),v=g.NONE},this.update=(r=new t,u=(new a).setFromUnitVectors(e.up,new t(0,1,0)),m=u.clone().inverse(),h=new t,l=new a,p=2*Math.PI,function(){var e=d.object.position;r.copy(e).sub(d.target),r.applyQuaternion(u),T.setFromVector3(r),d.autoRotate&&v===g.NONE&&H(2*Math.PI/60/60*d.autoRotateSpeed),d.enableDamping?(T.theta+=y.theta*d.dampingFactor,T.phi+=y.phi*d.dampingFactor):(T.theta+=y.theta,T.phi+=y.phi);var t=d.minAzimuthAngle,n=d.maxAzimuthAngle;return isFinite(t)&&isFinite(n)&&(t<-Math.PI?t+=p:t>Math.PI&&(t-=p),n<-Math.PI?n+=p:n>Math.PI&&(n-=p),T.theta=t<n?Math.max(t,Math.min(n,T.theta)):T.theta>(t+n)/2?Math.max(t,T.theta):Math.min(n,T.theta)),T.phi=Math.max(d.minPolarAngle,Math.min(d.maxPolarAngle,T.phi)),T.makeSafe(),T.radius*=P,T.radius=Math.max(d.minDistance,Math.min(d.maxDistance,T.radius)),!0===d.enableDamping?d.target.addScaledVector(L,d.dampingFactor):d.target.add(L),r.setFromSpherical(T),r.applyQuaternion(m),e.copy(d.target).add(r),d.object.lookAt(d.target),!0===d.enableDamping?(y.theta*=1-d.dampingFactor,y.phi*=1-d.dampingFactor,L.multiplyScalar(1-d.dampingFactor)):(y.set(0,0,0),L.set(0,0,0)),P=1,!!(A||h.distanceToSquared(d.object.position)>O||8*(1-l.dot(d.object.quaternion))>O)&&(d.dispatchEvent(b),h.copy(d.object.position),l.copy(d.object.quaternion),A=!1,!0)}),this.dispose=function(){d.domElement.removeEventListener("contextmenu",ce,!1),d.domElement.removeEventListener("pointerdown",J,!1),d.domElement.removeEventListener("wheel",te,!1),d.domElement.removeEventListener("touchstart",oe,!1),d.domElement.removeEventListener("touchend",ie,!1),d.domElement.removeEventListener("touchmove",ae,!1),d.domElement.ownerDocument.removeEventListener("pointermove",$,!1),d.domElement.ownerDocument.removeEventListener("pointerup",ee,!1),d.domElement.removeEventListener("keydown",ne,!1)};var d=this,b={type:"change"},f={type:"start"},E={type:"end"},g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},v=g.NONE,O=1e-6,T=new i,y=new i,P=1,L=new t,A=!1,j=new c,w=new c,N=new c,D=new c,M=new c,Y=new c,k=new c,x=new c,R=new c;function S(){return Math.pow(.95,d.zoomSpeed)}function H(e){y.theta-=e}function C(e){y.phi-=e}var X,_=(X=new t,function(e,t){X.setFromMatrixColumn(t,0),X.multiplyScalar(-e),L.add(X)}),F=function(){var e=new t;return function(t,n){!0===d.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(d.object.up,e)),e.multiplyScalar(t),L.add(e)}}(),I=function(){var e=new t;return function(t,n){var o=d.domElement;if(d.object.isPerspectiveCamera){var a=d.object.position;e.copy(a).sub(d.target);var i=e.length();i*=Math.tan(d.object.fov/2*Math.PI/180),_(2*t*i/o.clientHeight,d.object.matrix),F(2*n*i/o.clientHeight,d.object.matrix)}else d.object.isOrthographicCamera?(_(t*(d.object.right-d.object.left)/d.object.zoom/o.clientWidth,d.object.matrix),F(n*(d.object.top-d.object.bottom)/d.object.zoom/o.clientHeight,d.object.matrix)):d.enablePan=!1}}();function z(e){d.object.isPerspectiveCamera?P/=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom*e)),d.object.updateProjectionMatrix(),A=!0):d.enableZoom=!1}function Z(e){d.object.isPerspectiveCamera?P*=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom/e)),d.object.updateProjectionMatrix(),A=!0):d.enableZoom=!1}function U(e){j.set(e.clientX,e.clientY)}function B(e){D.set(e.clientX,e.clientY)}function V(e){if(1==e.touches.length)j.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);j.set(t,n)}}function K(e){if(1==e.touches.length)D.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);D.set(t,n)}}function G(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);k.set(0,o)}function q(e){if(1==e.touches.length)w.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);w.set(t,n)}N.subVectors(w,j).multiplyScalar(d.rotateSpeed);var o=d.domElement;H(2*Math.PI*N.x/o.clientHeight),C(2*Math.PI*N.y/o.clientHeight),j.copy(w)}function W(e){if(1==e.touches.length)M.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);M.set(t,n)}Y.subVectors(M,D).multiplyScalar(d.panSpeed),I(Y.x,Y.y),D.copy(M)}function Q(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);x.set(0,o),R.set(0,Math.pow(x.y/k.y,d.zoomSpeed)),z(R.y),k.copy(x)}function J(e){if(!1!==d.enabled)switch(e.pointerType){case"mouse":!function(e){var t;switch(e.preventDefault(),d.domElement.focus?d.domElement.focus():window.focus(),e.button){case 0:t=d.mouseButtons.LEFT;break;case 1:t=d.mouseButtons.MIDDLE;break;case 2:t=d.mouseButtons.RIGHT;break;default:t=-1}switch(t){case n.DOLLY:if(!1===d.enableZoom)return;!function(e){k.set(e.clientX,e.clientY)}(e),v=g.DOLLY;break;case n.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enablePan)return;B(e),v=g.PAN}else{if(!1===d.enableRotate)return;U(e),v=g.ROTATE}break;case n.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enableRotate)return;U(e),v=g.ROTATE}else{if(!1===d.enablePan)return;B(e),v=g.PAN}break;default:v=g.NONE}v!==g.NONE&&(d.domElement.ownerDocument.addEventListener("pointermove",$,!1),d.domElement.ownerDocument.addEventListener("pointerup",ee,!1),d.dispatchEvent(f))}(e)}}function $(e){if(!1!==d.enabled)switch(e.pointerType){case"mouse":!function(e){if(!1===d.enabled)return;switch(e.preventDefault(),v){case g.ROTATE:if(!1===d.enableRotate)return;!function(e){w.set(e.clientX,e.clientY),N.subVectors(w,j).multiplyScalar(d.rotateSpeed);var t=d.domElement;H(2*Math.PI*N.x/t.clientHeight),C(2*Math.PI*N.y/t.clientHeight),j.copy(w),d.update()}(e);break;case g.DOLLY:if(!1===d.enableZoom)return;!function(e){x.set(e.clientX,e.clientY),R.subVectors(x,k),R.y>0?z(S()):R.y<0&&Z(S()),k.copy(x),d.update()}(e);break;case g.PAN:if(!1===d.enablePan)return;!function(e){M.set(e.clientX,e.clientY),Y.subVectors(M,D).multiplyScalar(d.panSpeed),I(Y.x,Y.y),D.copy(M),d.update()}(e)}}(e)}}function ee(e){if(!1!==d.enabled)switch(e.pointerType){case"mouse":!function(e){if(!1===d.enabled)return;d.domElement.ownerDocument.removeEventListener("pointermove",$,!1),d.domElement.ownerDocument.removeEventListener("pointerup",ee,!1),d.dispatchEvent(E),v=g.NONE}()}}function te(e){!1===d.enabled||!1===d.enableZoom||v!==g.NONE&&v!==g.ROTATE||(e.preventDefault(),e.stopPropagation(),d.dispatchEvent(f),function(e){e.deltaY<0?Z(S()):e.deltaY>0&&z(S()),d.update()}(e),d.dispatchEvent(E))}function ne(e){!1!==d.enabled&&!1!==d.enableKeys&&!1!==d.enablePan&&function(e){var t=!1;switch(e.keyCode){case d.keys.UP:I(0,d.keyPanSpeed),t=!0;break;case d.keys.BOTTOM:I(0,-d.keyPanSpeed),t=!0;break;case d.keys.LEFT:I(d.keyPanSpeed,0),t=!0;break;case d.keys.RIGHT:I(-d.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),d.update())}(e)}function oe(e){if(!1!==d.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(d.touches.ONE){case o.ROTATE:if(!1===d.enableRotate)return;V(e),v=g.TOUCH_ROTATE;break;case o.PAN:if(!1===d.enablePan)return;K(e),v=g.TOUCH_PAN;break;default:v=g.NONE}break;case 2:switch(d.touches.TWO){case o.DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&G(e),d.enablePan&&K(e)}(e),v=g.TOUCH_DOLLY_PAN;break;case o.DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&G(e),d.enableRotate&&V(e)}(e),v=g.TOUCH_DOLLY_ROTATE;break;default:v=g.NONE}break;default:v=g.NONE}v!==g.NONE&&d.dispatchEvent(f)}}function ae(e){if(!1!==d.enabled)switch(e.preventDefault(),e.stopPropagation(),v){case g.TOUCH_ROTATE:if(!1===d.enableRotate)return;q(e),d.update();break;case g.TOUCH_PAN:if(!1===d.enablePan)return;W(e),d.update();break;case g.TOUCH_DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&Q(e),d.enablePan&&W(e)}(e),d.update();break;case g.TOUCH_DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&Q(e),d.enableRotate&&q(e)}(e),d.update();break;default:v=g.NONE}}function ie(e){!1!==d.enabled&&(d.dispatchEvent(E),v=g.NONE)}function ce(e){!1!==d.enabled&&e.preventDefault()}d.domElement.addEventListener("contextmenu",ce,!1),d.domElement.addEventListener("pointerdown",J,!1),d.domElement.addEventListener("wheel",te,!1),d.domElement.addEventListener("touchstart",oe,!1),d.domElement.addEventListener("touchend",ie,!1),d.domElement.addEventListener("touchmove",ae,!1),d.domElement.addEventListener("keydown",ne,!1),-1===d.domElement.tabIndex&&(d.domElement.tabIndex=0),this.update()};(m.prototype=Object.create(s.prototype)).constructor=m;var h=function(e,t){m.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=n.PAN,this.mouseButtons.RIGHT=n.ROTATE,this.touches.ONE=o.PAN,this.touches.TWO=o.DOLLY_ROTATE};(h.prototype=Object.create(s.prototype)).constructor=h;const l=async t=>{const{camera:n,data:o,model:a,renderer:i,scene:c,xrSupported:s}=t,h=new m(n,i.domElement);Object.entries(e).forEach(([e,t])=>{h[e]=t});const l=a.getObjectByName("lookat");l&&(h.target=l.position),r({camera:n,controller:h,model:a,scene:c,xrSupported:s})();const{reflect:p}=t;let{skybox:d}=p;d||(d=u({data:o,scene:c})),d.visible=!0};export{l as fallback};
