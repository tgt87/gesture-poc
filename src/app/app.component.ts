import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 eventText: string;
 displayText: string;
 initialTouchPos: any;
 lastTouchPos: any;
//  rafPending: boolean = false;
 startTime: number = 0; 
 endTime: number = 0;
 timeThreshold: number = 300;
 distThreshold: number = 100;
 diffInX: number = 0;
 diffInY: number = 0;
 imgSrc = ["cat", "owl", "test"];
 imgIndex = 0;
 imgToShow: string;
 imgNo: string = "Image " + (this.imgIndex + 1).toString();
  constructor(){

  }
  ngOnInit(){
    // let test = this.element.nativeElement.querySelector("#test");
    // this.renderer.listen(test, 'pointerdown', this.handleGestureStart)
    this.imgToShow = `../assets/${this.imgSrc[0]}.jpg`;
  }

  handleGestureStart(event){
    console.log('start');
    
    console.log(event);
    event.preventDefault();
    if(event.touches && event.touches.length > 1) return;
     
    this.initialTouchPos = this.getGesturePoint(event);
   // console.log(event.target);
    this.startTime = new Date().getTime();
    event.target.setPointerCapture(event.pointerId);
   // this.eventText = "pointer down " + this.initialTouchPos.x.toString() + "," + this.initialTouchPos.y.toString();
    console.log(this.initialTouchPos);
    
  }

  handleGestureMove(event){
    console.log('move');
    
    event.preventDefault();
    if(!this.initialTouchPos) return;
    this.lastTouchPos = this.getGesturePoint(event);
   // console.log(this.lastTouchPos);
    this.endTime = new Date().getTime();
    this.diffInX = this.lastTouchPos.x - this.initialTouchPos.x;
    this.diffInY = this.lastTouchPos.y - this.initialTouchPos.y;
    if(this.endTime - this.startTime <= this.timeThreshold){
      if(this.diffInX > 0 && this.diffInX >= this.distThreshold){
        this.eventText = 'swipe right';
      } else if(this.diffInX < 0 && Math.abs(this.diffInX) >= this.distThreshold){
        this.eventText = 'swipe left';        
      } else if(this.diffInY > 0 && this.diffInY >= this.distThreshold){
        this.eventText = 'swipe down';
      } else if(this.diffInY < 0 && Math.abs(this.diffInY) >= this.distThreshold){
        this.eventText = 'swipe up';
      } else {
        this.eventText = 'distance too short'
      }  
    } else {
      this.eventText = 'Too slow';
    }

  }

  handleGestureEnd(event){
    console.log('end');
    this.displayText = this.eventText;
    event.target.releasePointerCapture(event.pointerId);
  }

  handleSwipeEnd(event){
    if(this.eventText === 'swipe right'){
      console.log('right');
      if(this.imgIndex - 1 >= 0){
        this.imgIndex -= 1;
        this.imgToShow = `../assets/${this.imgSrc[this.imgIndex]}.jpg`;
        this.imgNo = "Image " + (this.imgIndex + 1).toString();
      }
         
    } else if (this.eventText === 'swipe left'){
      console.log('left');
      if(this.imgIndex + 1 <= this.imgSrc.length - 1){
        this.imgIndex += 1;
        this.imgToShow = `../assets/${this.imgSrc[this.imgIndex]}.jpg`;
        this.imgNo = "Image " + (this.imgIndex + 1).toString();
      } 
    }
    event.target.releasePointerCapture(event.pointerId);
  }

  getGesturePoint(event){
    let point = {x: 0, y: 0};
    point.x = event.clientX;
    point.y = event.clientY;
    return point;
  }
}
