import { Injectable } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  menu = new MenuComponent (this.landingComponent)
  constructor(private landingComponent: LandingComponent) { }

    
}
