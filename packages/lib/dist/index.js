import { a as a$4 } from './chunk-R2FKUAS3.js';
import { a } from './chunk-NIVAMNAF.js';
export { a as Scene } from './chunk-NIVAMNAF.js';
import { f as f$2 } from './chunk-RM5BZPL6.js';
import { b } from './chunk-YI57HGPY.js';
import './chunk-7TAUG27C.js';
import { a as a$3 } from './chunk-BW6TL2PK.js';
import { b as b$1 } from './chunk-GJBY4KIL.js';
import { a as a$2, b as b$3, e, c as c$1, f as f$1, d } from './chunk-6LMX6XHW.js';
export { g as DisplayObject } from './chunk-6LMX6XHW.js';
import { a as a$1, b as b$2 } from './chunk-JXTEU5XG.js';

var c=class{_x=0;_y=0;_g;downTime=0;elapsedTime;isDown=!1;isUp=!0;tapped=!1;isPrimary=!1;clear=!1;dragSprite=null;dragOffsetX=0;dragOffsetY=0;constructor(t){this._g=t;}get x(){return this._x/this._g.getViewportScale().x}set x(t){this._x=t;}get y(){return this._y/this._g.getViewportScale().y}set y(t){this._y=t;}},u=class{_g;_element;_x=0;_y=0;_cursors;_startPoint=new a$1;_endPoint=new a$1;isDown=!1;isUp=!0;tapped=!1;press;release;tap;move;swipe;swipeTolerance=10;constructor(t){this._g=t,this._element=t.canvas,this._cursors=new Map,this._element.addEventListener("pointerdown",this.downHandler.bind(this),!1),this._element.addEventListener("pointerup",this.upHandler.bind(this),!1),this._element.addEventListener("pointermove",this.moveHandler.bind(this),!1),this._element.style.touchAction="none";}get x(){return this._x/this._g.getViewportScale().x}get y(){return this._y/this._g.getViewportScale().y}get centerX(){return this._x}get centerY(){return this._y}get cursors(){return this._cursors}swipeDirection(){let t=this._startPoint.x-this._endPoint.x,i=this._startPoint.y-this._endPoint.y;Math.abs(t)+Math.abs(i)>this.swipeTolerance&&(Math.abs(t)>Math.abs(i)?t>0?this.swipe!=null&&this.swipe("left"):this.swipe!=null&&this.swipe("right"):i>0?this.swipe!=null&&this.swipe("up"):this.swipe!=null&&this.swipe("down"));}downHandler(t){let i=new c(this._g);i.x=t.pageX-this._element.offsetLeft,i.y=t.pageY-this._element.offsetTop,i.isDown=!0,i.isUp=!1,i.tapped=!1,i.downTime=Date.now(),this._cursors.set(t.pointerId,i),t.isPrimary&&(this._x=t.pageX-this._element.offsetLeft,this._y=t.pageY-this._element.offsetTop,this.isDown=!0,this.isUp=!1,this.tapped=!1,i.isPrimary=!0),this.press!=null&&this.press(i),this._startPoint.set(this._x,this._y),t.preventDefault();}upHandler(t){let i=this._cursors.get(t.pointerId);i&&(i.x=t.pageX-this._element.offsetLeft,i.y=t.pageY-this._element.offsetTop,i.isDown=!1,i.isUp=!0,i.elapsedTime=Math.abs(i.downTime-Date.now()),this._cursors.set(t.pointerId,i),i.elapsedTime<=200&&!i.tapped&&(i.tapped=!0,this.tap!=null&&this.tap(i)),t.isPrimary&&(this._x=t.pageX-this._element.offsetLeft,this._y=t.pageY-this._element.offsetTop,this.isDown=!1,this.isUp=!0,this.tapped=i.tapped),this.release!=null&&this.release(i),this._endPoint.set(this._x,this._y),this.swipeDirection(),i.clear=!0,t.preventDefault());}moveHandler(t){let i=this._cursors.get(t.pointerId);i||(i=new c(this._g)),i.x=t.pageX-this._element.offsetLeft,i.y=t.pageY-this._element.offsetTop,this._cursors.set(t.pointerId,i),t.isPrimary&&(this._x=t.pageX-this._element.offsetLeft,this._y=t.pageY-this._element.offsetTop),this.move!=null&&this.move(i),t.preventDefault();}clearCache(){let t=Array.from(this._cursors.keys());for(let i=this._cursors.size-1;i>=0;i--){let e=this._cursors.get(t[i]);e&&e.clear&&this._cursors.delete(t[i]);}}_____updateDragAndDrop(){let t=Array.from(this._cursors.keys());for(let i=0;i<t.length;i++){let e=this._cursors.get(t[i]);if(e){if(e.isDown)if(e.dragSprite===null)for(let n=a$2.length-1;n>-1;n--){let o=a$2[n];if(a$3(new a$1(e.x,e.y),o,!0).hasContact&&o.draggable&&o.visible){if(o.allowHorizontalDrag&&(e.dragOffsetX=e.x-o.position.x),o.allowVerticalDrag&&(e.dragOffsetY=e.y-o.position.y),e.dragSprite=o,o.allowFocusDrag){let r=o.parent?.children;r&&(r.splice(r.indexOf(o),1),r.push(o));}a$2.splice(a$2.indexOf(o),1),a$2.push(o);break}}else e.dragSprite.allowHorizontalDrag&&(e.dragSprite.position.x=e.x-e.dragOffsetX),e.dragSprite.allowVerticalDrag&&(e.dragSprite.position.y=e.y-e.dragOffsetY);e.isUp&&(e.dragSprite=null);}}a$2.some(i=>a$3(new a$1(this._x,this._y),i,!0).hasContact&&i.draggable&&i.visible?(this._element.style.cursor="pointer",!0):!1);}};var f=class{_imgExt=["png","jpg","gif"];_fontExt=["ttf","otf","ttc","woff"];_jsonExt=["json"];_audioExt=["mp3","ogg","wav","webm","m4a"];_store={};toLoad=0;loaded=0;onUpdate;onComplete;get store(){return this._store}async load(t){return await new Promise(i=>{let e=()=>{this.loaded+=1,this.onUpdate!=null&&this.onUpdate(this.loaded,this.toLoad),this.toLoad===this.loaded&&(this.toLoad=0,this.loaded=0,this.onComplete!=null&&this.onComplete(this.loaded),i(!0));};this.loaded=0,this.toLoad=t.length,t.forEach(n=>{let o=n.split(".").pop();if(this._imgExt.includes(o))this.loadImage(n,e);else if(this._fontExt.includes(o))this.loadFont(n,e);else if(this._jsonExt.includes(o))this.loadJson(n,e);else if(this._audioExt.includes(o))this.loadSound(n,e);else throw new Error(`File type not recognized: ${n}`)});})}loadbase64Image(t,i,e){let n=new Image;e!=null&&n.addEventListener("load",e),this._store[i]=n,n.src=t;}loadImage(t,i){let e=new Image;i!=null&&e.addEventListener("load",i),this._store[t]=e,e.src=t;}loadFont(t,i){let e=t.split("/").pop()?.split(".")[0]??"",n=document.createElement("style"),o=`@font-face {font-family: '${e}'; src: url('${t}');}`;n.appendChild(document.createTextNode(o)),document.head.appendChild(n),i?.();}loadJson(t,i){fetch(t).then(e=>{e.status===200&&e.json().then(n=>{if(n.name=t,this._store[n.name]=n,n.frames){this.createTilesetFrames(n,t,i);return}i?.();});});}createTilesetFrames(t,i,e){let n=i.replace(/[^\\/]*$/,""),o=t.meta.image,r=n+o,a=()=>{this._store[r]=s,Object.keys(t.frames).forEach(d=>{this._store[d]=t.frames[d],this._store[d].source=s;}),e?.();},s=new Image;s.addEventListener("load",a),s.src=r;}loadSound(t,i){let e=new a$4(t);e.load().then(()=>{this._store[e.name]=e,i?.();});}};var E=class{canvas;debug=!1;pointer;loader;print="";_scene=new a;_paused=!1;_viewport={scale:new a$1(1,1),x:0,y:0,width:0,height:0};_interval;_screenmode="normal";_then=0;_lag=0;_counter=0;_elapsed=0;_delta=0;_fixed;_fps;constructor(t=256,i=256,e=60,n=!0,o="1px dashed black",r="white"){this._interval=1e3/e,this._fixed=n,this._fps=e;let a$1=document.querySelector("#game");a$1.width=t,a$1.height=i,a$1.style.border=o,a$1.style.backgroundColor=r,this.canvas=a$1,a$1.addEventListener("blur",s=>{s.preventDefault();},!1),this.pointer=new u(this),this.loader=new f,this._scene=new a,this._scene.start(this),this._viewport.width=this.canvas.width,this._viewport.height=this.canvas.height;}get stage(){return this._scene.stage}get elapsed(){return this._delta}get fullscreen(){return this._screenmode==="full"}set fullscreen(t){this._screenmode=t?"full":"normal",this.resize();}get centerscreen(){return this._screenmode==="center"}set centerscreen(t){this._screenmode=t?"center":"normal",this.resize();}get playing(){return !this._paused}get scene(){return this._scene}set scene(t){this._scene&&this._scene.destroy(),this._scene=t,this._scene.start(this);}get fps(){return this._fps}pause(){this._paused=!0;}resume(){this._paused=!1;}start(){if(!this.stage)throw new Error("Game Scene not Found!");if(this._then=Date.now(),this._fixed){window.setInterval(this.update.bind(this),1e3/this._fps);return}this.update();}update(){if(!this.stage)throw new Error("Game Scene not Found!");this._fixed||requestAnimationFrame(this.update.bind(this));let t=this.canvas,i=this.stage.graphics;t.style.cursor="auto",i.clearRect(0,0,t.width,t.height);let e=Date.now();for(this._delta=e-this._then,this._elapsed+=this._delta,this._lag+=this._delta,this._counter++,this._elapsed>1e3&&(this._fps=this._counter,this._elapsed=0,this._counter=0);this._lag>=this._interval;)this._lag-=this._interval,this.gameloop();this.render(),this._then=e;}render(){let t=this,i=this.stage,e=this.stage?.graphics,n=0,o=0;e.save(),e.scale(this._viewport.scale.x,this._viewport.scale.y),e.save(),e.translate(-this._viewport.x,-this._viewport.y),i.children.forEach(s=>{a(s);}),e.restore(),this.debug&&(e.save(),e.beginPath(),e.rect(0,0,i.width,i.height),e.fillStyle="gray",e.globalAlpha=.5,e.fill(),e.restore(),e.save(),e.font="normal normal 14px sans-serif",e.fillStyle="white",e.textBaseline="top",e.textAlign="left",e.fillText("FPS: ",15,15),e.fillText("Objects: ",15,32),e.fillText("Drawing: ",15,49),e.fillText("Debug: ",15,66),e.fillText(this._fps.toString(),80,15),e.fillText(o.toString(),80,32),e.fillText(n.toString(),80,49),e.fillText(this.print.toString(),80,67),e.restore()),e.restore();function r(s){return .5+s|0}function a(s){let d=s.parent===void 0?1:s.parent.alpha;o++,(s.visible&&t.isOnViewport(s)||s.renderOutside)&&(n++,e.save(),e.translate(r(s.position.x),r(s.position.y)),e.rotate(s.rotation),e.globalAlpha=s.alpha*d,e.scale(s.scale.x,s.scale.y),s.shadow&&(e.shadowColor=s.shadowColor,e.shadowOffsetX=s.shadowOffsetX,e.shadowOffsetY=s.shadowOffsetY,e.shadowBlur=s.shadowBlur),s.blendMode&&(e.globalCompositeOperation=s.blendMode),e.filter=s.filter,s instanceof b&&(s.customProperties.elapsed=t.elapsed),s.render&&s.render(e),e.filter="none",t.debug&&(e.rotate(-s.rotation),e.beginPath(),s instanceof Text||(e.rect(s.bounds.x-s.width*s.pivot.x,s.bounds.y-s.height*s.pivot.y,s.bounds.width,s.bounds.height),e.lineWidth=3,e.strokeStyle="red",e.stroke(),e.closePath()),e.beginPath(),e.rect(-2.5,-2.5,5,5),e.lineWidth=3,e.strokeStyle="black",e.stroke(),e.closePath()),s.children&&s.children.length>0&&(e.translate(0,0),s.children.forEach(C=>{a(C);})),e.restore());}}getViewportScale(){return this._viewport.scale.clone()}getViewportSize(){return {width:this._viewport.width,height:this._viewport.height}}isOnViewport(t){if(t instanceof b$1)return t.isOnViewport=!0,t.isOnViewport;let i=this._viewport.width/2,e=this._viewport.height/2,n=new b$2(new a$1(t.gx-t.width*t.pivot.x+t.halfWidth,t.gy-t.height*t.pivot.y+t.halfHeight),new a$1(this._viewport.x+i,this._viewport.y+e)),o=t.halfWidth+i,r=t.halfHeight+e;return Math.abs(n.vx)<o&&Math.abs(n.vy)<r?(t.isOnViewport=!0,t.isOnViewport):(t.isOnViewport=!1,t.isOnViewport)}gameloop(){a$2.length>0&&this.pointer._____updateDragAndDrop(),b$3.length>0&&b$3.forEach(t=>{t.customProperties.buttonProps._____updateButton(this.pointer),(t.customProperties.buttonProps.state==="over"||t.customProperties.buttonProps.state==="down")&&t.parent!==void 0&&(this.canvas.style.cursor="pointer");}),e.length>0&&e.forEach(t=>{t._____updateEmitter(this.elapsed);}),c$1.length>0&&c$1.forEach(t=>{t.customProperties._____updateParticle();}),f$1.length>0&&f$1.forEach(t=>{t.update(this.elapsed);}),d.length>0&&d.forEach(t=>{t.customProperties._____updateShake();}),this._scene&&!this._paused&&this._scene&&this._scene.update(),this.pointer.clearCache();}resize(){if(!this.stage)throw new Error("Game Scene not Found!");let t="auto",i=this.canvas,e=this.stage;i.style.top=t,i.style.left=t,i.style.marginTop=t,i.style.marginLeft=t,i.style.position="static",i.style.transform="scale(1, 1)",i.width=e.width,i.height=e.height,this._viewport.scale.x=1,this._viewport.scale.y=1;let n=f$2.Android()?window.outerWidth:window.innerWidth,o=f$2.Android()?window.outerHeight:window.innerHeight;switch(this._screenmode){case"full":this._viewport.scale.x=n/e.width,this._viewport.scale.y=o/e.height,i.style.transformOrigin="0 0",i.style.transform="scale(1)",i.width=n,i.height=o;break;case"center":i.style.top="50%",i.style.left="50%",i.style.marginTop=`${-e.height/2}px`,i.style.marginLeft=`${-e.width/2}px`,i.style.position="absolute";break}}};

export { E as Engine };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map