import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Developer } from 'src/app/models/developer.model';
import { DeveloperService } from 'src/app/services/developer.service';

@Component({
  selector: 'community-member',
  templateUrl: './community-member.component.html',
  styleUrls: ['./community-member.component.css']
})
export class CommunityMemberComponent implements OnInit{
  developerId!: number;
  developer?: Developer;
 

  constructor(private route: ActivatedRoute, private developerService: DeveloperService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.developerId = +params.get('id')!;

      this.developerService.getDeveloperById(this.developerId).subscribe(developer => {
        console.log(developer);
        this.developer = developer;
      });
      
      console.log(this.developer);
    })
  }

}
