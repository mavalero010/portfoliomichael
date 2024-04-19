import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

    languages = [
      {name:'javascript', clname:'fa-brands fa-js bg-[#FFD43B] mb-r text-moon-primary'},
      {name:'typescript', clname:'fa-brands fa-css3 bg-[#1a4fa3] mb-r text-moon-whitenew'},
      {name:'java', clname:'fa-brands fa-java bg-[#d07206] mb-r text-moon-secondary'},
      {name:'html', clname:'fa-brands fa-html5 bg-[#AA4C38] mr-3'},
      {name:'python', clname:'fa-brands fa-python bg-[#07395f] mb-r text-moon-textlightselected'},
      {name:'css', clname:'fa-brands fa-css3 bg-[#1a4fa3] mb-r text-moon-whitenew'},
      {name:'wordpress', clname:'fa-brands fa-wordpress bg-[#9cb6e2] mb-r text-moon-primary'},

    ]
    
    frameworks = [
      {name:'nodejs', clname:'fa-brands fa-js bg-[#FFD43B] mb-r text-moon-primary'},
      {name:'springboot', clname:'fa-brands fa-java bg-[#d07206] mb-r text-moon-secondary'},
      {name:'expressjs', clname:'fa-brands fa-js bg-moon-secondsuccess mb-r text-moon-whitenew'},
      {name:'angular', clname:'fa-brands fa-angular bg-[#a32d14] mr-3'},
    ]

    tools = [
      {name:'vs code', clname:'bg-[#1a4fa3] text-moon-whitenew'},
      {name:'eclipse', clname:'bg-[#a60be3] border-moon-whitenew text-moon-whitenew'},
      {name:'github', clname:'bg-[#07395f] border-moon-whitenew text-moon-whitenew'},
      {name:'mongodb', clname:'bg-moon-secondsuccess mb-r text-moon-whitenew'},
      {name:'postgreSQL', clname:'bg-[#1a4fa3] mb-r text-moon-whitenew'},
      {name:'intellij idea', clname:'bg-[#FFD43B] bg-gradient-to-r from-moon-textlightselected to-[#a60be3]'},
    ]
  learning = [
    {name:'c# [asp.net]'},
    {name:'nest.js'},
    {name:'aws s3'}
  ]
}
