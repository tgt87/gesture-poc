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
 distThreshold: number = 20;
 diffInX: number = 0;
 diffInY: number = 0;
 //imgSrc = ["cat", "owl", "test"];
 imgSrc = ["https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg", 
            "https://pbs.twimg.com/profile_images/724794677522616324/B1CH7eCf.jpg", 
            "http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/grumpy-dog-11.jpg"];
 imgIndex = 0;
 imgToShow: string;
 imgNo: string = "Image " + (this.imgIndex + 1).toString();

 imgIndex2 = 0;
 imgToShow2: string;
 imgNo2: string = "Image " + (this.imgIndex + 1).toString();

  constructor(){

  }
  ngOnInit(){
    // let test = this.element.nativeElement.querySelector("#test");
    // this.renderer.listen(test, 'pointerdown', this.handleGestureStart)
    //this.imgToShow = `../assets/${this.imgSrc[0]}.jpg`;
    this.imgToShow = this.imgSrc[0];
    this.imgToShow2 = this.imgSrc[0];
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
   console.log(this.lastTouchPos);
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
        //this.imgToShow = `../assets/${this.imgSrc[this.imgIndex]}.jpg`;
        this.imgToShow = this.imgSrc[this.imgIndex];
        this.imgNo = "Image " + (this.imgIndex + 1).toString();
      }
         
    } else if (this.eventText === 'swipe left'){
      console.log('left');
      if(this.imgIndex + 1 <= this.imgSrc.length - 1){
        this.imgIndex += 1;
        //this.imgToShow = `../assets/${this.imgSrc[this.imgIndex]}.jpg`;
        this.imgToShow = this.imgSrc[this.imgIndex];
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

  swipe(action){
    console.log(action);
    if(action === 'swipeleft' && this.imgIndex2 + 1 <= this.imgSrc.length - 1){
      this.imgIndex2 += 1;
      this.imgToShow2 = this.imgSrc[this.imgIndex2];
      this.imgNo2 = "Image " + (this.imgIndex2 + 1).toString();
    } else if(action === 'swiperight' && this.imgIndex2 - 1 >= 0){
      this.imgIndex2 -= 1;
      this.imgToShow2 = this.imgSrc[this.imgIndex2];
      this.imgNo2 = "Image " + (this.imgIndex2 + 1).toString();
    }
  }

  display(msg){
    alert(msg);
  }
}
