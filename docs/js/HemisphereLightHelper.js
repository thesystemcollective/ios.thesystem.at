import"./main.js";import{B as t,F as e,a3 as o,a6 as s,C as n,b as r,c0 as i,a9 as a,M as l}from"./HemisphereLight.js";class c extends t{constructor(t,n,r,i){super(),this.type="PolyhedronBufferGeometry",this.parameters={vertices:t,indices:n,radius:r,detail:i},r=r||1;const a=[],l=[];function c(t,e,o,s){const n=Math.pow(2,s),r=[];for(let s=0;s<=n;s++){r[s]=[];const i=t.clone().lerp(o,s/n),a=e.clone().lerp(o,s/n),l=n-s;for(let t=0;t<=l;t++)r[s][t]=0===t&&s===n?i:i.clone().lerp(a,t/l)}for(let t=0;t<n;t++)for(let e=0;e<2*(n-t)-1;e++){const o=Math.floor(e/2);e%2==0?(h(r[t][o+1]),h(r[t+1][o]),h(r[t][o])):(h(r[t][o+1]),h(r[t+1][o+1]),h(r[t+1][o]))}}function h(t){a.push(t.x,t.y,t.z)}function u(e,o){const s=3*e;o.x=t[s+0],o.y=t[s+1],o.z=t[s+2]}function d(t,e,o,s){s<0&&1===t.x&&(l[e]=t.x-1),0===o.x&&0===o.z&&(l[e]=s/2/Math.PI+.5)}function p(t){return Math.atan2(t.z,-t.x)}!function(t){const e=new o,s=new o,r=new o;for(let o=0;o<n.length;o+=3)u(n[o+0],e),u(n[o+1],s),u(n[o+2],r),c(e,s,r,t)}(i=i||0),function(t){const e=new o;for(let o=0;o<a.length;o+=3)e.x=a[o+0],e.y=a[o+1],e.z=a[o+2],e.normalize().multiplyScalar(t),a[o+0]=e.x,a[o+1]=e.y,a[o+2]=e.z}(r),function(){const t=new o;for(let o=0;o<a.length;o+=3){t.x=a[o+0],t.y=a[o+1],t.z=a[o+2];const s=p(t)/2/Math.PI+.5,n=(e=t,Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5);l.push(s,1-n)}var e;(function(){const t=new o,e=new o,n=new o,r=new o,i=new s,c=new s,h=new s;for(let o=0,s=0;o<a.length;o+=9,s+=6){t.set(a[o+0],a[o+1],a[o+2]),e.set(a[o+3],a[o+4],a[o+5]),n.set(a[o+6],a[o+7],a[o+8]),i.set(l[s+0],l[s+1]),c.set(l[s+2],l[s+3]),h.set(l[s+4],l[s+5]),r.copy(t).add(e).add(n).divideScalar(3);const u=p(r);d(i,s+0,t,u),d(c,s+2,e,u),d(h,s+4,n,u)}})(),function(){for(let t=0;t<l.length;t+=6){const e=l[t+0],o=l[t+2],s=l[t+4],n=Math.max(e,o,s),r=Math.min(e,o,s);n>.9&&r<.1&&(e<.2&&(l[t+0]+=1),o<.2&&(l[t+2]+=1),s<.2&&(l[t+4]+=1))}}()}(),this.setAttribute("position",new e(a,3)),this.setAttribute("normal",new e(a.slice(),3)),this.setAttribute("uv",new e(l,2)),0===i?this.computeVertexNormals():this.normalizeNormals()}}class h extends c{constructor(t,e){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronBufferGeometry",this.parameters={radius:t,detail:e}}}const u=new o,d=new n,p=new n;class m extends r{constructor(t,e,o){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=o;const s=new h(e);s.rotateY(.5*Math.PI),this.material=new i({wireframe:!0,fog:!1,toneMapped:!1}),void 0===this.color&&(this.material.vertexColors=!0);const n=s.getAttribute("position"),r=new Float32Array(3*n.count);s.setAttribute("color",new a(r,3)),this.add(new l(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");d.copy(this.light.color),p.copy(this.light.groundColor);for(let t=0,o=e.count;t<o;t++){const s=t<o/2?d:p;e.setXYZ(t,s.r,s.g,s.b)}e.needsUpdate=!0}t.lookAt(u.setFromMatrixPosition(this.light.matrixWorld).negate())}}export{m as HemisphereLightHelper};
