import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  portfolios = [
    {
      id: 'UNTUTOR',
      url: '../../assets/images/portfolios/portfolio1.png',
      title: 'unTutor backend',
      desc: 'servicio backend para aplicación móvil de tutorías académicas',
      languages: [
        {name:'nodejs', clname:'fa-brands fa-js bg-moon-success mb-3 text-moon-primary'},
        {name:'mongodb', clname:'fa-solid fa-database bg-[#AA4C38] mb-3'},
      ],
      githuburl:{url:'https://github.com/mavalero010/untutor-backend',
      cls:"fa-brands fa-github"
    }
    },
    {
      id: 'SOPHOS',
      url: '../../assets/images/portfolios/portfolio2.png',
      title: 'sophos backend',
      desc: 'servicio backend para matrícula y registro de materias',
      languages: [{name:'springboot', clname:'fa-brands fa-java bg-[#d07206] mb-3 text-moon-primary'}],
      githuburl:{url:'https://github.com/mavalero010/Unisophos',
    cls:"fa-brands fa-github"
    }
    },
    {
      id: 'juanrebolledo.com',
      url: '../../assets/images/portfolios/portfolio3.png',
      title: 'portafolio para ingeniero',
      desc: 'portafolio de presentación para ingeniero ambiental a la medida',
      languages: [
        {name:'wordpress', clname:'fa-brands fa-wordpress bg-[#9cb6e2] mb-3 text-moon-primary'},
      ],
      githuburl:{
        url:'https://juanrebolledo.com/',
        cls:"fa-solid fa-link"
      }
    },
    {
      id: 'mvportfolio',
      url: '../../assets/images/portfolios/portfolio4.png',
      title: 'portafolio de presentación',
      desc: 'portafolio personal desarrollado en angular y almacenado en github',
      languages: [
        {name:'angular', clname:'fa-brands fa-angular bg-[#a32d14] mb-3 text-moon-whitenew'},
      ],
      githuburl:{
        url:'https://github.com/mavalero010/portfoliomichael',
        cls:"fa-brands fa-github"
      }
    }
  ];

  slideRight() {
    this.carousel.nativeElement.scrollLeft += 200;
  }

  slideLeft() {
    this.carousel.nativeElement.scrollLeft -= 200;

    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  ngAfterViewInit()  {
    
    for(let i=0;i<= this.portfolios.length-1;i++){
      this.portfolios[i].languages.forEach(l=>
        this.addLanguages(l.name,l.clname,this.portfolios[i].id)

        )
        
    }
  }

  showLeftArrow() {
    return this.currentIndex > 0;
  }
  showRightArrow() {
    return this.currentIndex < this.portfolios.length - 1;
  }
  addLanguages(lng: string,iconsclasses: string, portfolioid: string) {
    const tag = `${lng}${portfolioid}`;
    console.log(tag);

    console.log(this.carousel.nativeElement.querySelector(`.${tag}`));
  }
}
