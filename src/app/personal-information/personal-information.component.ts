import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Suman Karki'],
    ['DOB', '03/22/2000'],
    ['Work Exp', 'Intern'],
    ['Education', 'Final Year Running'],
    ['Interests', 'Football'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer  new at software industry.',
    'Worked as FrontEnd  Developer at MS Tech.'
  ];

}
