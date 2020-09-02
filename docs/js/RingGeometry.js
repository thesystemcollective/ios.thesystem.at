import"./MathUtils.js";import"./constants.js";import"./Color.js";import"./Quaternion.js";import{V as t}from"./Object3D.js";import{B as e,V as s,F as r}from"./BufferGeometry.js";import{G as o}from"./Geometry.js";class i extends o{constructor(t,e,s,r,o,i){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:s,phiSegments:r,thetaStart:o,thetaLength:i},this.fromBufferGeometry(new n(t,e,s,r,o,i)),this.mergeVertices()}}class n extends e{constructor(e,o,i,n,a,h){super(),this.type="RingBufferGeometry",this.parameters={innerRadius:e,outerRadius:o,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:h},e=e||.5,o=o||1,a=void 0!==a?a:0,h=void 0!==h?h:2*Math.PI,i=void 0!==i?Math.max(3,i):8;const m=[],u=[],p=[],c=[];let f=e;const y=(o-e)/(n=void 0!==n?Math.max(1,n):1),d=new t,x=new s;for(let t=0;t<=n;t++){for(let t=0;t<=i;t++){const e=a+t/i*h;d.x=f*Math.cos(e),d.y=f*Math.sin(e),u.push(d.x,d.y,d.z),p.push(0,0,1),x.x=(d.x/o+1)/2,x.y=(d.y/o+1)/2,c.push(x.x,x.y)}f+=y}for(let t=0;t<n;t++){const e=t*(i+1);for(let t=0;t<i;t++){const s=t+e,r=s,o=s+i+1,n=s+i+2,a=s+1;m.push(r,o,a),m.push(o,n,a)}}this.setIndex(m),this.setAttribute("position",new r(u,3)),this.setAttribute("normal",new r(p,3)),this.setAttribute("uv",new r(c,2))}}export{n as RingBufferGeometry,i as RingGeometry};
