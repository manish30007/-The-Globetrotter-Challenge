import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-challenge',
   imports: [FormsModule,CommonModule],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {

  inviteeId: any;
  username: any;
  constructor(private route: ActivatedRoute, private router: Router, public userService:UserService){

  }
  ngOnInit(): void {
  
    this.route.queryParams.subscribe(params => {
      this.inviteeId = params['inviteeId']; 
    });
    console.log(this.inviteeId);

  }

  saveUsername() {
     this.userService.createUser(this.username).subscribe({
      next:(data:any)=>{
        this.router.navigate(["/"], {
          relativeTo: this.route,
          queryParams: { inviteeId:this.inviteeId },
        });
      },
      error:(error:any)=>{
        console.log(error)
      }
     })
    }

}
