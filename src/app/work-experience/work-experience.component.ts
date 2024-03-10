import { Component } from '@angular/core';
import{WorkExperience} from '../models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Intern',
      company: 'MS Tech',
      duration: 'Jan 2024 - Now',
      description: [
        'Working On Fulbari Website.'
      ],
    }
  
     
  ];
  constructor() {}
}
