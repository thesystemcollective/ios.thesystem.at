import"./MathUtils.js";import{C as t}from"./Color.js";import"./Quaternion.js";import{O as o}from"./Object3D.js";import{L as i}from"./Light.js";function r(r,s,p){i.call(this,r,p),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy(o.DefaultUp),this.updateMatrix(),this.groundColor=new t(s)}r.prototype=Object.assign(Object.create(i.prototype),{constructor:r,isHemisphereLight:!0,copy:function(t){return i.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}});export{r as HemisphereLight};
//# sourceMappingURL=HemisphereLight.js.map
