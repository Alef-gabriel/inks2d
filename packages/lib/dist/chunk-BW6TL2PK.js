import { a, b as b$1 } from './chunk-GJBY4KIL.js';
import { b, a as a$1 } from './chunk-JXTEU5XG.js';

var z=(t,e,l=!1)=>{let a$2=e.localBounds(),s=e.localCenterX,o=e.localCenterY;if(l&&(a$2=e.globalBounds(),s=e.globalCenterX,o=e.globalCenterY),!(e instanceof a)){let i=a$2.x-e.width*e.pivot.x,n=i+a$2.width,p=a$2.y-e.height*e.pivot.y,f=p+a$2.height;return {hasContact:t.x>i&&t.x<n&&t.y>p&&t.y<f}}return e instanceof a?{hasContact:new b(new a$1(s,o),new a$1(t.x,t.y)).length<e.radius}:{hasContact:!1}},H=(t,e)=>{let l=(e.yIntercepts-t.yIntercepts)/(t.slope-e.slope),a=t.slope*l+t.yIntercepts,s=new a$1(l,a);return m(t,s).hasContact&&m(e,s).hasContact?{hasContact:!0,overlap:s}:{hasContact:!1}},m=(t,e)=>{let l=new b(t.a.clone(),t.b.clone()),a=new b(t.a.clone(),e.clone()),s=new b(e.clone(),t.b.clone());return {hasContact:l.length>a.length&&l.length>s.length}},M=(t,e,l=!1,a=!1,s=!1)=>{let o=new b(t.a.clone(),t.b.clone()),i=new b(e.position.clone(),t.a.clone()),n=new b(e.position.clone(),new a$1),p=Math.round(i.perpDotProd(o)),f="";p>0?f="left":p<0&&(f="right"),f===""||f==="left"?n.b.set(e.position.x+o.rightNormal.normalized.x*e.radius,e.position.y+o.rightNormal.normalized.y*e.radius):n.b.set(e.position.x+o.leftNormal.normalized.x*e.radius,e.position.y+o.leftNormal.normalized.y*e.radius);let h=new b(n.b.clone(),new a$1(n.b.x+e.velocity.x,n.b.y+e.velocity.y)),y=new b(h.a.clone(),o.a.clone()).dotProd(o.leftNormal);if((y>0&&f==="left"||y<0&&f==="right")&&m(t,h.a.clone()).hasContact){let v=h.normalized.x*Math.abs(y),b=h.normalized.y*Math.abs(y);return l&&(e.position=e.position.subtract(new a$1(v,b))),a&&(e.position=e.position.add(g(e,o))),a&&s&&(e.velocity=g(e,o)),{hasContact:!0,overlap:new a$1(v,b),side:f}}return {hasContact:!1}},R=(t,e,l=!1,a=!1,s=!1)=>{let o=new b(t.a.clone(),t.b.clone()),i=new b(t.a.clone(),e.position),n=Math.round(i.perpDotProd(o)),p="";n>0?p="right":n<0&&(p="left");let f=i.projection(o.leftNormal),h=new b(new a$1(0,0),new a$1(e.halfWidth,0)),d=new b(new a$1(0,0),new a$1(0,e.halfHeight)),y=h.projection(o.leftNormal),v=d.projection(o.leftNormal);p==="left"&&y.reverse();let b$1=new b(new a$1(o.leftNormal.a.x+f.vx,o.leftNormal.a.y+f.vy),new a$1(o.leftNormal.a.x+f.vx-(y.vx-v.vx),o.leftNormal.a.y+f.vy-(y.vy-v.vy))),x=new b(o.leftNormal.a.clone(),new a$1(o.leftNormal.a.x-f.vx-b$1.vx,o.leftNormal.a.y-f.vy-b$1.vy)),P=x.dotProd(o.leftNormal);if(P>0&&p==="left"||P<0&&p==="right"){let T=e.position.add(new a$1(x.vx,x.vy));if(m(t,T).hasContact)return l&&(e.position=e.position.add(new a$1(x.vx,x.vy))),a&&(e.position=e.position.add(g(e,o))),s&&(e.velocity=g(e,o)),{hasContact:!0,overlap:new a$1(x.vx,x.vy),side:p}}return {hasContact:!1}},X=(t,e,l=!1,a=!1,s=!1,o=!1)=>{let i,n=new b(new a$1(t.localCenterX,t.localCenterY),new a$1(e.localCenterX,e.localCenterY)),p=t.bounds.width/2+e.bounds.width/2,f=n.length<p;if(l&&(n.a.x=t.globalCenterX,n.a.y=t.globalCenterY,n.b.x=e.globalCenterX,n.b.y=e.globalCenterY),a&&f){if(i=p-n.length,!o)t.position.x-=i*n.normalized.x,t.position.y-=i*n.normalized.y;else {let h=Math.abs(n.normalized.x*i/2),d=Math.abs(n.normalized.y*i/2),y=t.position.x>e.position.x?1:-1,v=t.position.y>e.position.y?1:-1;t.position.x=t.position.x+h*y,t.position.y=t.position.y+d*v,e.position.x=e.position.x+h*-y,e.position.y=e.position.y+d*-v;}if(s)if(!o)t.velocity=g(t,n.leftNormal);else {let h=new b(t.position,t.position.add(t.velocity)),d=h.projection(n),y=h.projection(n.leftNormal),v=new b(e.position,e.position.add(e.velocity)),b$1=v.projection(n),x=v.projection(n.leftNormal);t.velocity=new a$1((y.vx+b$1.vx)/t.mass,(y.vy+b$1.vy)/t.mass),e.velocity=new a$1((d.vx+x.vx)/e.mass,(d.vy+x.vy)/e.mass);}return {hasContact:!0,overlap:i}}return {hasContact:f}},u=(t,e,l=!1,a=!1,s=!1)=>{let o,i=new b(new a$1(e.localCenterX,e.localCenterY),new a$1(t.localCenterX,t.localCenterY));l&&(i.a.x=e.globalCenterX,i.a.y=e.globalCenterY,i.b.x=t.globalCenterX,i.b.y=t.globalCenterY);let n=t.bounds.width/2+e.bounds.width/2,p=t.bounds.height/2+e.bounds.height/2;if(Math.abs(i.vx)<n&&Math.abs(i.vy)<p){let f=n-Math.abs(i.vx),h=p-Math.abs(i.vy);return f>=h?(i.vy>0?(o="top",a&&(t.position.y=t.position.y+h)):(o="bottom",a&&(t.position.y=t.position.y-h)),a&&s&&(t.velocity.y*=-1,g(t,i.leftNormal))):(i.vx>0?(o="left",a&&(t.position.x=t.position.x+f)):(o="right",a&&(t.position.x=t.position.x-f)),a&&s&&(t.velocity.x*=-1,g(t,i.leftNormal))),{hasContact:!0,overlap:new a$1(f,h),side:o}}return {hasContact:!1}},N=(t,e,l=!1,a$2=!1,s=!1)=>{let o,i=new a$1(t.position.x,t.position.y),n=new a$1(e.localCenterX,e.localCenterY);if(i.y<n.y-e.halfHeight?i.x<n.x-1-e.halfWidth?o="topLeft":i.x>n.x+1+e.halfWidth?o="topRight":o="topMiddle":i.y>n.y+e.halfHeight?i.x<n.x-1-e.halfWidth?o="bottomLeft":i.x>n.x+1+e.halfWidth?o="bottomRight":o="bottomMiddle":i.x<n.x-e.halfWidth?o="leftMiddle":o="rightMiddle",o==="topMiddle"||o==="bottomMiddle"||o==="leftMiddle"||o==="rightMiddle")return u(t,e,l,a$2,s);let p=new a(.1,.1);switch(o){case"topLeft":p.position.x=e.position.x-e.width*e.pivot.x,p.position.y=e.position.y-e.height*e.pivot.y;break;case"topRight":p.position.x=e.position.x-e.width*e.pivot.x+e.width,p.position.y=e.position.y-e.height*e.pivot.y;break;case"bottomLeft":p.position.x=e.position.x-e.width*e.pivot.x,p.position.y=e.position.y-e.height*e.pivot.y+e.height;break;case"bottomRight":p.position.x=e.position.x-e.width*e.pivot.x+e.width,p.position.y=e.position.y-e.height*e.pivot.y+e.height;break}return X(t,p,!1,a$2,s,!1)},D=(t,e,l=!1,a=!1,s=!1)=>{let o=new b$1(e.hypotenuse.a.clone(),e.hypotenuse.b.clone()),i=N(t,e,!1,!1,!1);if(i.hasContact){let{side:n}=i,p=new b(new a$1(t.localCenterX,t.localCenterY),o.a.clone()),f=e.hypotenuse.perpDotProd(p);if(e.inclination==="right"){if(n==="right"||n==="top"&&f>0)return N(t,e,!1,l,s);let d=M(o,t,l,a,s);return d.hasContact?{...d,side:"hypotenuse"}:d}if(n==="left"||n==="top"&&f>0)return N(t,e,!1,l,s);let h=M(o,t,l,a,s);return h.hasContact?{...h,side:"hypotenuse"}:h}return i},W=(t,e,l=!1,a=!1,s=!1)=>{let o=u(t,e,!1,!1,!1);if(o.hasContact){let{side:i}=o,n=new b$1(e.hypotenuse.b.clone(),e.hypotenuse.a.clone());return e.inclination==="right"?i==="right"||i==="top"?u(t,e,!1,l,s):R(n,t,l,a,s):(n=new b$1(e.hypotenuse.a.clone(),e.hypotenuse.b.clone()),i==="left"||i==="top"?u(t,e,!1,l,s):R(n,t,l,a,s))}return o},g=(t,e)=>{let l=new b(t.position.clone(),t.position.add(t.velocity)),a=l.projection(e),s=l.projection(e.leftNormal);return s.reverse(),new a$1((a.vx+s.vx)/t.mass,(a.vy+s.vy)/t.mass)};

export { z as a, H as b, m as c, M as d, R as e, X as f, u as g, N as h, D as i, W as j };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-BW6TL2PK.js.map