import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationItems = [
    {
      field: 'egresado en ingeniería de sistemas',
      date: 'enero 2016 - julio 2023',
      info: 'universidad del norte',
      time: '5 años de estudio',
      url: '../../../assets/documents/diploma michael.pdf',
    },
    {
      field: 'técnico en diseño gráfico',
      date: 'enero 2015 - diciembre 2015',
      info: 'ITSA (hoy UTB)',
      time: '1 año de estudio',
      url: '',
    },
    {
      field: 'typescript avanzado',
      date: 'octubre 2023',
      info: 'linkedIn-Learning',
      time: '2,45 horas de estudio',
      url: 'https://www.linkedin.com/learning/certificates/a2c67a988c011d6dda9fe7d324a51532c7c3c33850c6082d88da8017f1dd0946',
    },
    {
      field: 'node.js avanzado',
      date: 'octubre 2023',
      info: 'linkedIn-Learning',
      time: '3 horas de estudio',
      url: 'https://www.linkedin.com/learning/certificates/9d5ff449ad49441b747507d9a5927670468a75b735b751996b3451b6363fc42b',
    },
    {
      field: 'describe cloud concepts',
      date: 'septiembre 2023',
      info: 'microsoft azure fundamentals',
      time: '1 mes de estudio',
      url: 'https://learn.microsoft.com/en-us/users/michaelandresvaleropolo-2167/achievements/ksjk2e6b',
    },
    {
      field: 'python essentials 2',
      date: 'septiembre 2023',
      info: 'Cisco',
      time: '2 semanas de estudio',
      url: 'https://www.credly.com/badges/137470d5-10fd-494d-8ede-b74407f8f75d/linked_in_profile',
    }
  ];
}
