import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string = "";
  password: string = "";
  errorMessage: string = "";
  result: boolean = false;

  constructor(private authService: AuthService, private router: Router){}

  onLogin(){
    this.authService.login(this.username, this.password).subscribe({
      next: token => {
        this.router.navigate(['/developer-page']);
      },
      error: err => {
        this.errorMessage = err.message || 'fail';
      }
    });
  }
}
