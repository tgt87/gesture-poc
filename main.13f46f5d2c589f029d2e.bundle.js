webpackJsonp([1],{0:function(n,t,l){n.exports=l("cDNt")},cDNt:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("/oeL"),i=function(){return function(){}}(),o=function(){function n(){this.startTime=0,this.endTime=0,this.timeThreshold=300,this.distThreshold=100,this.diffInX=0,this.diffInY=0,this.imgSrc=["https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg","https://pbs.twimg.com/profile_images/724794677522616324/B1CH7eCf.jpg","http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/grumpy-dog-11.jpg"],this.imgIndex=0,this.imgNo="Image "+(this.imgIndex+1).toString()}return n.prototype.ngOnInit=function(){this.imgToShow="../assets/"+this.imgSrc[0]+".jpg"},n.prototype.handleGestureStart=function(n){console.log("start"),console.log(n),n.preventDefault(),n.touches&&n.touches.length>1||(this.initialTouchPos=this.getGesturePoint(n),this.startTime=(new Date).getTime(),n.target.setPointerCapture(n.pointerId),console.log(this.initialTouchPos))},n.prototype.handleGestureMove=function(n){console.log("move"),n.preventDefault(),this.initialTouchPos&&(this.lastTouchPos=this.getGesturePoint(n),this.endTime=(new Date).getTime(),this.diffInX=this.lastTouchPos.x-this.initialTouchPos.x,this.diffInY=this.lastTouchPos.y-this.initialTouchPos.y,this.endTime-this.startTime<=this.timeThreshold?this.diffInX>0&&this.diffInX>=this.distThreshold?this.eventText="swipe right":this.diffInX<0&&Math.abs(this.diffInX)>=this.distThreshold?this.eventText="swipe left":this.diffInY>0&&this.diffInY>=this.distThreshold?this.eventText="swipe down":this.diffInY<0&&Math.abs(this.diffInY)>=this.distThreshold?this.eventText="swipe up":this.eventText="distance too short":this.eventText="Too slow")},n.prototype.handleGestureEnd=function(n){console.log("end"),this.displayText=this.eventText,n.target.releasePointerCapture(n.pointerId)},n.prototype.handleSwipeEnd=function(n){"swipe right"===this.eventText?(console.log("right"),this.imgIndex-1>=0&&(this.imgIndex-=1,this.imgToShow=this.imgSrc[this.imgIndex],this.imgNo="Image "+(this.imgIndex+1).toString())):"swipe left"===this.eventText&&(console.log("left"),this.imgIndex+1<=this.imgSrc.length-1&&(this.imgIndex+=1,this.imgToShow=this.imgSrc[this.imgIndex],this.imgNo="Image "+(this.imgIndex+1).toString())),n.target.releasePointerCapture(n.pointerId)},n.prototype.getGesturePoint=function(n){var t={x:0,y:0};return t.x=n.clientX,t.y=n.clientY,t},n.ctorParameters=function(){return[]},n}(),u=[[""]],s=e._4({encapsulation:0,styles:u,data:{}}),r=e._2("app-root",o,function(n){return e._21(0,[(n()(),e._7(0,0,null,null,1,"app-root",[],null,null,null,function(n){return e._21(0,[(n()(),e._20(-1,null,["\n"])),(n()(),e._7(1,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._20(-1,null,["Using Pointer Event"])),(n()(),e._20(-1,null,["\n"])),(n()(),e._7(4,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e._20(-1,null,["\n"])),(n()(),e._7(6,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._20(-1,null,["Test swipe action"])),(n()(),e._20(-1,null,["\n"])),(n()(),e._7(9,0,null,null,1,"div",[["style","width: 200px; height: 200px; background-color: lightblue; text-align: center; vertical-align: middle; line-height:200px;"]],null,[[null,"pointerdown"],[null,"pointermove"],[null,"pointerup"],[null,"pointercancel"]],function(n,t,l){var e=!0,i=n.component;return"pointerdown"===t&&(e=!1!==i.handleGestureStart(l)&&e),"pointermove"===t&&(e=!1!==i.handleGestureMove(l)&&e),"pointerup"===t&&(e=!1!==i.handleGestureEnd(l)&&e),"pointercancel"===t&&(e=!1!==i.handleGestureEnd(l)&&e),e},null,null)),(n()(),e._20(10,null,["","\n"])),(n()(),e._20(-1,null,["\n"])),(n()(),e._7(12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e._20(-1,null,["\n"])),(n()(),e._7(14,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._20(-1,null,["There are a total of 3 images."])),(n()(),e._20(-1,null,["\n"])),(n()(),e._7(17,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._20(-1,null,["Swipe left and right to change image"])),(n()(),e._20(-1,null,["\n"])),(n()(),e._7(20,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),e._20(-1,null,["\n  "])),(n()(),e._7(22,0,null,null,0,"img",[["height","200px"],["style","border: 1px solid black;"],["width","200px"]],[[8,"src",4]],[[null,"pointerdown"],[null,"pointermove"],[null,"pointerup"],[null,"pointercancel"]],function(n,t,l){var e=!0,i=n.component;return"pointerdown"===t&&(e=!1!==i.handleGestureStart(l)&&e),"pointermove"===t&&(e=!1!==i.handleGestureMove(l)&&e),"pointerup"===t&&(e=!1!==i.handleSwipeEnd(l)&&e),"pointercancel"===t&&(e=!1!==i.handleSwipeEnd(l)&&e),e},null,null)),(n()(),e._20(-1,null,["\n  "])),(n()(),e._7(24,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e._20(25,null,["",""])),(n()(),e._20(-1,null,["\n"]))],null,function(n,t){var l=t.component;n(t,10,0,l.displayText),n(t,22,0,l.imgToShow),n(t,25,0,l.imgNo)})},s)),e._5(1,114688,null,0,o,[],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),h=l("qbdv"),a=l("fc+i"),d=l("bm2B"),c=l("CPp0"),p=e._3(i,[o],function(n){return e._17([e._18(512,e.i,e._0,[[8,[r]],[3,e.i],e.x]),e._18(5120,e.v,e._16,[[3,e.v]]),e._18(4608,h.d,h.c,[e.v]),e._18(4608,e.h,e.h,[]),e._18(5120,e.a,e._8,[]),e._18(5120,e.t,e._13,[]),e._18(5120,e.u,e._14,[]),e._18(4608,a.b,a.s,[h.b]),e._18(6144,e.J,null,[a.b]),e._18(4608,a.e,a.f,[]),e._18(5120,a.c,function(n,t,l,e){return[new a.k(n),new a.o(t),new a.n(l,e)]},[h.b,h.b,h.b,a.e]),e._18(4608,a.d,a.d,[a.c,e.z]),e._18(135680,a.m,a.m,[h.b]),e._18(4608,a.l,a.l,[a.d,a.m]),e._18(6144,e.H,null,[a.l]),e._18(6144,a.p,null,[a.m]),e._18(4608,e.O,e.O,[e.z]),e._18(4608,a.g,a.g,[h.b]),e._18(4608,a.i,a.i,[h.b]),e._18(4608,d.c,d.c,[]),e._18(4608,c.c,c.c,[]),e._18(4608,c.g,c.b,[]),e._18(5120,c.i,c.j,[]),e._18(4608,c.h,c.h,[c.c,c.g,c.i]),e._18(4608,c.f,c.a,[]),e._18(5120,c.d,c.k,[c.h,c.f]),e._18(512,h.a,h.a,[]),e._18(1024,e.l,a.q,[]),e._18(1024,e.b,function(n,t){return[a.r(n,t)]},[[2,a.h],[2,e.y]]),e._18(512,e.c,e.c,[[2,e.b]]),e._18(131584,e._6,e._6,[e.z,e._1,e.r,e.l,e.i,e.c]),e._18(2048,e.e,null,[e._6]),e._18(512,e.d,e.d,[e.e]),e._18(512,a.a,a.a,[[3,a.a]]),e._18(512,d.b,d.b,[]),e._18(512,d.a,d.a,[]),e._18(512,c.e,c.e,[]),e._18(512,i,i,[])])});Object(e.U)(),Object(a.j)().bootstrapModuleFactory(p)},gFIY:function(n,t){function l(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="gFIY"}},[0]);