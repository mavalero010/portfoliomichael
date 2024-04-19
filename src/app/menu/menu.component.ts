import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  profilephoto: string = '../../assets/images/profilemichael.png';
  @Input() vis: string = 'moon';
  visibility: string = 'moon';
  landingelement: ElementRef;
  landingcomponents = [
    '#profile',
    '#contactme',
    '#aboutme',
    '#skills',
    '#education',
    '#portfolio',
  ];
  menucomponents=[ 
    ['#profile','#titleprofile'],
    ['#contactme','#titlecontactme'],
    ['#aboutme','#titleaboutme'],
    ['#skills','#titleskills'],
    ['#education','#titleeducation'],
    ['#portfolio','#titleportfolio'],
  ];
  @ViewChild('menu') menuelement!: ElementRef;

  constructor(private Landing: LandingComponent) {
    this.landingelement = Landing.elref.nativeElement;
    
  }
  ngOnInit() {
    this.menucomponents.forEach((c) =>
      window.addEventListener('scroll', () => {
        this.validateIfIsInsideSpecificId(c[0],c[1]);
      })
    );
  }
  scrollToSection(id: string) {
    const section = this.Landing.elref.nativeElement.querySelector(`${id}`);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }
 
  pressMenu(id: string) {
    this.menuelement.nativeElement.querySelector(id).classList.remove('text-moon-textlight','hover:text-moon-textlightselected');
    this.menuelement.nativeElement.querySelector(id).classList.add('text-moon-marineblue','hover:text-moon-marinebluelight');
  }

  unPressMenu(id: string) {
    this.menuelement.nativeElement.querySelector(id).classList.remove('text-moon-marineblue','hover:text-moon-marinebluelight');
    this.menuelement.nativeElement.querySelector(id).classList.add('text-moon-textlight','hover:text-moon-textlightselected');
  }


  validateIfIsInsideSpecificId(id: string,idmenu: string) {
    const containerDiv = this.Landing.elref.nativeElement.querySelector(id);

    if (containerDiv) {
      const isInsideContainer = containerDiv.contains(
        document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
      );

      if (isInsideContainer) {
        this.pressMenu(idmenu);
      }else {
        this.unPressMenu(idmenu)
    }
    } else {
      console.error(
        'La etiqueta div específica no se encontró en el documento.'
      );
    }
  }
}
