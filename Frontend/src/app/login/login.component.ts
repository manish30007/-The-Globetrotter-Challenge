import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [   FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };
  
  showPassword = false;
  isSubmitting = false;
  loginError: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Check if user is already logged in
    // if (this.userService.isAuthenticated()) {
    //   this.router.navigate(['/home']);
    // }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.loginError = null;
    
    // this.userService.login(this.loginData).subscribe(
    //   (response:any) => {
    //     this.isSubmitting = false;
    //     this.router.navigate(['/home']);
    //   },
    //   (error:any) => {
    //     this.isSubmitting = false;
    //     this.loginError = 'Invalid email or password. Please try again.';
    //     console.error('Login error:', error);
    //   }
    // );
  }
}
