import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'developer-filters',
  templateUrl: './developer-filters.component.html',
  styleUrls: ['./developer-filters.component.css']
})
export class DeveloperFiltersComponent implements OnInit{
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

  selectedFilters: { [key: string]: Set<string> } = {};

  ngOnInit() {
    for (const key of Object.keys(this.filterOptions)) {
      this.selectedFilters[key] = new Set<string>();
    }
   }

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

      const set = this.selectedFilters[category];
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
    
  }

  resetFilters(): void {
    this.filters = {
      expertise: [],
      technologies: [],
      experience: [],
      location: []
    };
  
    this.filtersChanged.emit({
      expertise: [],
      technologies: [],
      experience: [],
      location: []
    });

    for (const key in this.selectedFilters) {
      this.selectedFilters[key].clear();
    }
  }
  
}
