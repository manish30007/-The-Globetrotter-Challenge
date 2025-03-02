import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerData = {
    username: '',
    email: '',
    password: '',
    avatarIndex: 0
  };
  
  showPassword = false;
  isSubmitting = false;
  
  avatarOptions = [
    { src: 'assets/avatars/explorer1.svg', alt: 'Explorer with hat' },
    { src: 'assets/avatars/explorer2.svg', alt: 'Explorer with camera' },
    { src: 'assets/avatars/explorer3.svg', alt: 'Explorer with backpack' },
    { src: 'assets/avatars/explorer4.svg', alt: 'Explorer with map' },
    { src: 'assets/avatars/explorer5.svg', alt: 'Explorer with compass' },
    { src: 'assets/avatars/explorer6.svg', alt: 'Explorer with binoculars' }
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  selectAvatar(index: number): void {
    this.registerData.avatarIndex = index;
  }

  onRegister(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // this.userService.register(this.registerData).subscribe(
    //   (data:any) => {
    //     this.isSubmitting = false;
    //     this.router.navigate(['/home']);
    //   },
    //   (error:any) => {
    //     this.isSubmitting = false;
    //     console.error('Registration error:', error);
    //     // Handle error - could add a toast notification system here
    //   }
    // );
  }
}