import { Component } from '@angular/core';
import { Education } from '../models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute:  'Tribhuvan University',
      course: 'Computer Engineering',
      duration: '2019-2024',
     
    },
    {
      institute:'Rehdon College',
      course: 'Science',
      duration: '2016-2018',
  
    },
    {
      institute: "SouthWesyern School",
      course:'School level subjects',
      duration:'2008-2015'
    }
  ];

  constructor() {}

}
