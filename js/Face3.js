import{C as r}from"./Color.js";import{V as t}from"./Object3D.js";function o(o,e,s,i,l,a){this.a=o,this.b=e,this.c=s,this.normal=i&&i.isVector3?i:new t,this.vertexNormals=Array.isArray(i)?i:[],this.color=l&&l.isColor?l:new r,this.vertexColors=Array.isArray(l)?l:[],this.materialIndex=void 0!==a?a:0}Object.assign(o.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(r){this.a=r.a,this.b=r.b,this.c=r.c,this.normal.copy(r.normal),this.color.copy(r.color),this.materialIndex=r.materialIndex;for(let t=0,o=r.vertexNormals.length;t<o;t++)this.vertexNormals[t]=r.vertexNormals[t].clone();for(let t=0,o=r.vertexColors.length;t<o;t++)this.vertexColors[t]=r.vertexColors[t].clone();return this}});export{o as F};
//# sourceMappingURL=Face3.js.map
