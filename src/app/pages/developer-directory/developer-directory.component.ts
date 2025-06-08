import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/app/services/developer.service';
import { Developer } from 'src/app/models/developer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'developer-directory',
  templateUrl: './developer-directory.component.html',
  styleUrls: ['./developer-directory.component.css']
})
export class DeveloperDirectoryComponent implements OnInit{
  role: string | null = null;
  developers: Developer[] = [];
  filteredDevelopers: Developer[] = [];

  constructor(private developerService: DeveloperService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.developerService.getDevelopers().subscribe({
      next: (devs) => {
        this.developers = devs;
        this.filteredDevelopers = devs;
        this.route.paramMap.subscribe(params => {
          this.role = params.get('role');
          this.applyFilter();
        })
      },
      error: (err) => console.error('Error fetching developers', err)
    });
  }

  applyFilter(): void {
    console.log(this.role);
    if (!this.role || this.role === "all") {
      this.filteredDevelopers = this.developers;
    } else {
      this.filteredDevelopers = this.developers.filter(dev =>
        dev.role?.toLowerCase() === this.role?.toLowerCase()
      );
    }
  }  
}
