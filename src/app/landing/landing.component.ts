import { Component, ElementRef, Inject, Input, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ScrollingService } from '../services/scrolling.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  @Input() vis: string = 'moon';
  visibility: string = 'moon';


  protected _scrollingservice = new ScrollingService(this);
  constructor(public elref: ElementRef) {}
 


}
