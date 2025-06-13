import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  selectedFilters = {
    expertise: [],
    technologies: [],
    experience: [],
    location: []
  };

  expertise = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
  technologies = ['.NET Core', 'C#', 'Angular', 'Azure'];
  experience = ['Junior (0-2 Yıl)', 'Mid-Level (3-5 Yıl)', 'Senior (6+ Yıl)'];
  location = ['İstanbul', 'Ankara', 'Remote'];

  
  resetFilters() {
    this.selectedFilters = {
      expertise: [],
      technologies: [],
      experience: [],
      location: []
    };
    this.filtersChanged.emit(this.selectedFilters);
  }
}
