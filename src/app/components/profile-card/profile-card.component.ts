import { Component, Input } from '@angular/core';
import { Developer } from 'src/app/models/developer.model';
import { Router } from '@angular/router';

@Component({
    selector: 'profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.css'],
    standalone: false
})
export class ProfileCardComponent {
  @Input() developer!: Developer;

  constructor(private router: Router){}

  viewProfile(){
    console.log(this.developer.id);
    this.router.navigate(['/developers/:id', this.developer.id]);
  }

}
