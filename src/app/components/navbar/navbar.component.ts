import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent {

  constructor(public authService: AuthService, private router: Router){}


  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
