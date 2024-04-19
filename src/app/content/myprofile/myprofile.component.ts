import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  @Input() vis : string = 'moon'
   visibility:string = 'moon'
   
}
