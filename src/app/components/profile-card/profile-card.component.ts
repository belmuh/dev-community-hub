import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() email: string = '';
  @Input() imageUrl: string = '';

}
