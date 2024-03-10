import { Component } from '@angular/core';
import { Project } from '../models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Spotify clone',
      technologies: 'HTML , CSS , Javascript',
      description: [
        'Basic interactive FrontEnd Part Of Spotify Website',
      ],
    },
    {
      title: 'TIK TAC TOE',
      technologies: 'HTML , CSS , Javascript',
      description: [
        'Basic interactive FrontEnd Part Of TIK TAC TOE game'
      ],
    },
    {
      title: 'Amazon Clone',
      technologies: 'HTML, CSS, JS',
      description: [
        'Basic interactive FrontEnd Part Of Amazon Website',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
