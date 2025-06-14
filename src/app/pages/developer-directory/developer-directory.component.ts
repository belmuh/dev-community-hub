import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { DeveloperService } from 'src/app/services/developer.service';
import { Developer } from 'src/app/models/developer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'developer-directory',
  templateUrl: './developer-directory.component.html',
  styleUrls: ['./developer-directory.component.css']
})
export class DeveloperDirectoryComponent implements OnInit {
  @Input() filters!: {
    expertise: string[],
    technologies: string[],
    experience: string[],
    location: string[]
  };

  @Output() selectDeveloper = new EventEmitter<Developer>();

  developers: Developer[] = [];
  filtered: Developer[] = [];

  // Pagination state
  pageSize = 6; // 6 öğe = 2 satır x 3 sütun gibi olabilir
  currentPage = 1;
  totalPages = 1;
  pagedDevelopers: Developer[] = [];

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

    this.totalPages = Math.ceil(this.filtered.length / this.pageSize);
    this.currentPage = 1;
    this.updatePagedDevelopers();
  }

  updatePagedDevelopers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedDevelopers = this.filtered.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedDevelopers();
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }

  select(dev: Developer) {
    this.selectDeveloper.emit(dev);
  }
}
