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
      title: 'unTutor',
      desc: 'servicio backend para aplicación mobile de tutorías',
      languages: [
        {name:'html', clname:'fa-brands fa-html5 bg-[#AA4C38] mb-3'},
        {name:'nodejs', clname:'fa-brands fa-js bg-[#FFD43B] mb-3 text-moon-primary'},
      ],
    },
    {
      id: 'SOPHOS',
      url: '../../assets/images/portfolios/portfolio2.png',
      title: 'sophos backend',
      desc: 'servicio backend para matrícula y registro de materias',
      languages: [{name:'java', clname:'fa-brands fa-java bg-[#d07206] mb-3 text-moon-primary'}]
    },
    {
      id: 'UNTUTOR',
      url: '../../assets/images/portfolios/portfolio1.png',
      title: 'unTutor',
      desc: 'servicio backend para aplicación mobile de tutorías',
      languages: [
        {name:'html', clname:'fa-brands fa-html5 bg-[#AA4C38] mb-3'},
        {name:'nodejs', clname:'fa-brands fa-js bg-[#FFD43B] mb-3 text-moon-primary'},
      ],
    },
    {
      id: 'SOPHOS',
      url: '../../assets/images/portfolios/portfolio2.png',
      title: 'sophos backend',
      desc: 'servicio backend para matrícula y registro de materias',
      languages: [{name:'java', clname:'fa-brands fa-java bg-[#d07206] mb-3 text-moon-primary'}]
    },
    {
      id: 'UNTUTOR',
      url: '../../assets/images/portfolios/portfolio1.png',
      title: 'unTutor',
      desc: 'servicio backend para aplicación mobile de tutorías',
      languages: [
        {name:'html', clname:'fa-brands fa-html5 bg-[#AA4C38] mb-3'},
        {name:'nodejs', clname:'fa-brands fa-js bg-[#FFD43B] mb-3 text-moon-primary'},
      ],
    },
    {
      id: 'SOPHOS',
      url: '../../assets/images/portfolios/portfolio2.png',
      title: 'sophos backend',
      desc: 'servicio backend para matrícula y registro de materias',
      languages: [{name:'java', clname:'fa-brands fa-java bg-[#d07206] mb-3 text-moon-primary'}]
    },
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
