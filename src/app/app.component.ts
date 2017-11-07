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
 rafPending: boolean = false;
  constructor(private renderer: Renderer2, private element: ElementRef){

  }
  ngOnInit(){
    // let test = this.element.nativeElement.querySelector("#test");
    // this.renderer.listen(test, 'pointerdown', this.handleGestureStart)
  }

  handleGestureStart(event){
    console.log(event);
    event.preventDefault();
    if(event.touches && event.touches.length > 1) return;
     
    this.initialTouchPos = this.getGesturePoint(event);
    console.log(event.target);
    
    event.target.setPointerCapture(event.pointerId);
    this.eventText = "pointer down " + this.initialTouchPos.x.toString() + "," + this.initialTouchPos.y.toString();
    console.log(this.initialTouchPos);
    
  }

  handleGestureMove(event){
    console.log('here');
    
    event.preventDefault();
    if(!this.initialTouchPos) return;
    this.lastTouchPos = this.getGesturePoint(event);
    if(this.rafPending) return;
    this.rafPending = true;
    // window.requestAnimationFrame
  }

  handleGestureEnd(event){

  }

  getGesturePoint(event){
    let point = {x: 0, y: 0};
    point.x = event.clientX;
    point.y = event.clientY;
    return point;
  }
}
