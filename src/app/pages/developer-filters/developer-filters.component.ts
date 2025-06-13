import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'developer-filters',
  templateUrl: './developer-filters.component.html',
  styleUrls: ['./developer-filters.component.css']
})
export class DeveloperFiltersComponent {
  filters = {
    expertise: [] as string[],
    technologies: [] as string[],
    experience: [] as string[],
    location: [] as string[]
  };

  @Output() filtersChanged = new EventEmitter<typeof this.filters>();

  // Örnek filtre verileri, istediğin gibi güncelleyebilirsin
  filterOptions = {
    expertise: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps Mühendisi', 'Yazılım Mimarı'],
    technologies: ['.NET Core', 'C#', 'Angular', 'TypeScript', 'Blazor', 'Entity Framework Core', 'Azure', 'Docker', 'Microservices'],
    experience: ['Junior (0-2 Yıl)', 'Mid-Level (3-5 Yıl)', 'Senior (6+ Yıl)', 'Lead/Manager (8+ Yıl)'],
    location: ['İstanbul', 'Ankara', 'İzmir', 'Remote']
  };



    toggleFilter(category: string, value: string) {
      const key = category as keyof typeof this.filters;
      const i = this.filters[key].indexOf(value);
      if (i === -1) this.filters[key].push(value);
      else this.filters[key].splice(i, 1);
    
      this.filtersChanged.emit({
        expertise: [...this.filters.expertise],
        technologies: [...this.filters.technologies],
        experience: [...this.filters.experience],
        location: [...this.filters.location]
      });
    
  }
}
