import { Component, Renderer2, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'app works!';
 eventText: string;
 initialTouchPos: any;
 lastTouchPos: any;
//  rafPending: boolean = false;
 startTime: number = 0; 
 endTime: number = 0;
 timeThreshold: number = 300;
 distThreshold: number = 100;
 diffInX: number = 0;
 diffInY: number = 0;
  constructor(private renderer: Renderer2, private element: ElementRef){

  }
  ngOnInit(){
    // let test = this.element.nativeElement.querySelector("#test");
    // this.renderer.listen(test, 'pointerdown', this.handleGestureStart)
  }

  handleGestureStart(event){
    console.log('start');
    
    console.log(event);
    event.preventDefault();
    if(event.touches && event.touches.length > 1) return;
     
    this.initialTouchPos = this.getGesturePoint(event);
    console.log(event.target);
    this.startTime = new Date().getTime();
    event.target.setPointerCapture(event.pointerId);
    this.eventText = "pointer down " + this.initialTouchPos.x.toString() + "," + this.initialTouchPos.y.toString();
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
      }
    }
    // if(this.rafPending) return;
    // this.rafPending = true;
    
    
    // window.requestAnimationFrame
  }

  handleGestureEnd(event){
    console.log('end');
    
    event.target.releasePointerCapture(event.pointerId);
  }

  getGesturePoint(event){
    let point = {x: 0, y: 0};
    point.x = event.clientX;
    point.y = event.clientY;
    return point;
  }
}
