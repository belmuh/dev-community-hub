import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Developer } from 'src/app/models/developer.model';
import { DeveloperService } from 'src/app/services/developer.service';

@Component({
  selector: 'developers-page',
  templateUrl: './developers-page.component.html',
  styleUrls: ['./developers-page.component.css']
})
export class DevelopersPageComponent {
  filters = {
    expertise: [] as string[],
    technologies: [] as string[],
    experience: [] as string[],
    location: [] as string[]
  };

  selectedDeveloper: Developer | null = null;

  onFiltersChanged(newFilters: typeof this.filters) {
    this.filters = newFilters;
  }

  onSelectDeveloper(dev: Developer) {
    this.selectedDeveloper = dev;
  }

  onBackToList() {
    this.selectedDeveloper = null;
  }

}
