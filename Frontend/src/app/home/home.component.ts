import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { DestinationService } from '../destination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {
  gameSessionId:any;
  destinationData:any;
  userScore:any=0;
  selectedOption: string | null = null;
  isAnswered = false;
  isCorrect = false;
  funFact: string = '';
  showUsernameModal = false;
  username: string = '';
  showShareModal = false;
  inviteLink = '';
  isLoading = false;
  userId: any ;
  trivia: any;
  correctAnswerCount: any;
  inCorrectAnswerCount: any;
  highestScore: any;
isAnswerLoading: any;
correctAnswer: any;
  inviteeId: any;
  inviteeData: any;
 userData:any;
  constructor(
    private route: ActivatedRoute, private router: Router,
    private destinationService: DestinationService,
    private userService: UserService,
 
  ) {
  
  }

  ngOnInit(): void {

   this.userData = this.userService.getUserData();
   this.userId = this.userData?.userId;
   this.username = this.userData?.username;
   console.log(this.userData);
    this.route.queryParams.subscribe(params => {
      this.inviteeId = params['inviteeId']; 
    });

    if(this.inviteeId){
      this.getInviteeData();
    }else{
    this.checkUser();
    }
  }

  getInviteeData(){
    this.userService.fetchUser(this.userId).subscribe({
      next:(data:any)=>{
        this.inviteeData = data;
        console.log(this.inviteeData);
      },
      error:(error:any)=>{
        console.log(error);
      }
    })
  }

  startGame(){
    this.userScore = 0;
    this.destinationData = null;
    this.destinationService.startNewGame(this.userId).subscribe({
      next:(data:any)=>{
      this.gameSessionId = data.gameSessionId;
    
      this.loadNewDestination();
      }, 
      error:(error:any)=>{
        console.log(error);
      }
    })

  }

  checkUser(): void {
 
    if (!this.userId) {
     this.showUsernameModal = true;
    }

  }

  saveUsername() {
    this.userService.createUser(this.username).subscribe({
     next:(data:any)=>{
      console.log(data);
      this.userData = data;
      this.userId = data.userId;
      this.username = data.username;
      this.showUsernameModal = false;
     },
     error:(error:any)=>{
       console.log(error)
     }
    })
   }

  loadNewDestination(): void {

    this.isLoading = true;
    this.isAnswered = false;
    this.selectedOption = null;
    this.isCorrect = false;
    this.correctAnswer = null;

  
    this.destinationService.getRandomDestination(this.gameSessionId).subscribe({
     next: (data:any) => {
        this.destinationData = data;
        console.log(this.destinationData);
        this.isLoading = false;
      },
    error:  (error:any) => {
        console.error('Error loading random destination:', error);
        this.isLoading = false;
      }
  });
  }

  checkAnswer(answer: string): void {
    if (this.isAnswered) return;
    this.isAnswerLoading = true;
    this.selectedOption = answer;
    this.isAnswered = true;
    this.isAnswerLoading = true;

    this.destinationService.verifyAnswer({selectedOption:this.selectedOption, gameSessionId:this.gameSessionId, destinationId:this.destinationData.destinationId, userId:this.userId}).subscribe({

      next:(data:any)=>{
        console.log('verified', data);
        this.funFact = data.fun_fact[0];
        this.trivia = data.trivia[0];
        this.isCorrect = data.isCorrect;
        this.correctAnswer = data.correctAnswer;
        this.correctAnswerCount = data.gameSessionData.correctAnswerCount,
        this.inCorrectAnswerCount = data.gameSessionData.inCorrectAnswerCount,
        this.userScore = data.gameSessionData.totalScore,
        this.highestScore = data.highestScore
        this.isAnswerLoading = false;
        if(this.inCorrectAnswerCount==5){
          this.showMaxIncorrectAlert();
        }
      },

      error:(error:any)=>{
        console.log(error);
      }

    })
  }

  showMaxIncorrectAlert(): void {
    Swal.fire({
      title: 'Game Over!',
      html: `
        <div class="max-incorrect-alert">
 
          <p>You've reached 5 incorrect answers!</p>
          <div class="score-summary">
            <div class="score-item">
              <span class="score-label">Correct</span>
              <span class="score-value correct">${this.inCorrectAnswerCount}</span>
            </div>
            <div class="score-item">
              <span class="score-label">Incorrect</span>
              <span class="score-value incorrect">5</span>
            </div>
          </div>
          <p class="travel-quote">"The world is a book, and those who do not travel read only one page."</p>
        </div>
      `,
      background: '#fff url(/assets/world-map-pattern-light.svg)',
      backdrop: `
        rgba(25, 53, 78, 0.8)
      `,
      confirmButtonText: 'Play Again',
      confirmButtonColor: '#2E933C',
      allowOutsideClick: false,
      showCancelButton: false,
      customClass: {
        popup: 'game-over-popup',
        confirmButton: 'game-over-confirm-btn'
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut'
      }
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.startGame();
      }
    });
  }

  playConfetti(): void {
    // This would be implemented with a confetti library like canvas-confetti
    const confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    document.body.appendChild(confettiScript);
    
    confettiScript.onload = () => {
      // @ts-ignore
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    };
  }

  nextChallenge(): void {
    console.log('hit');
    this.loadNewDestination();
  }

  // saveUsername(): void {
  //   if (this.username.trim()) {
  //     this.userService.setUser({
  //       username: this.username,
  //       score: { correct: 0, total: 0 }
  //     });
  //     this.showUsernameModal = false;
  //   }
  // }

  challengeFriend(): void {
    const baseUrl = window.location.origin;
    this.inviteLink = `${baseUrl}/challenge?inviteeId=${this.userId}`;
    const dialog = document.getElementById('showChallenge') as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  }

  shareToWhatsApp(): void {
    const text = `I'm playing Globetrotter Challenge and scored ${this.userScore}! Can you beat me? Join here: ${this.inviteLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  copyLink(): void {
    navigator.clipboard.writeText(this.inviteLink);
    // Show a toast or notification
    alert('Link copied to clipboard!');
  }

  closeShareModal(): void {
    const dialog = document.getElementById('showChallenge') as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }
}