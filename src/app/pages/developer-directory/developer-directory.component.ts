import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { DeveloperService } from 'src/app/services/developer.service';
import { Developer } from 'src/app/models/developer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'developer-directory',
  templateUrl: './developer-directory.component.html',
  styleUrls: ['./developer-directory.component.css']
})
export class DeveloperDirectoryComponent implements OnInit{
  @Input() filters!: {
    expertise: string[],
    technologies: string[],
    experience: string[],
    location: string[]
  };

  @Output() selectDeveloper = new EventEmitter<Developer>();

  developers: Developer[] = [];
  filtered: Developer[] = [];

  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.developerService.getDevelopers().subscribe(devs => {
      this.developers = devs;
      this.applyFilters();
    });
  }

  ngOnChanges() {
    this.applyFilters();
  }

  applyFilters() {
    if (!this.developers.length) return;

    this.filtered = this.developers.filter(dev => {
      return (
        (!this.filters.expertise.length || this.filters.expertise.includes(dev.expertise)) &&
        (!this.filters.technologies.length || this.filters.technologies.some(t => dev.technologies.includes(t))) &&
        (!this.filters.experience.length || this.filters.experience.includes(dev.experience)) &&
        (!this.filters.location.length || this.filters.location.includes(dev.location))
      );
    });
  }

  select(dev: Developer) {
    this.selectDeveloper.emit(dev);
  }


}
