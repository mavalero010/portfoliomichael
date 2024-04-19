import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { MenuComponent } from '../menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  menu = new MenuComponent (this.landingComponent)
  constructor(private landingComponent: LandingComponent) { }
 

}
