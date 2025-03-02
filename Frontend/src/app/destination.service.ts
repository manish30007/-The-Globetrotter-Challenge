import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService { 
 
  private baseUrl = 'https://the-globetrotter-challenge-6z8o.vercel.app/';

  constructor(public http:HttpClient) {}

  startNewGame(userId:any){
    return this.http.post<any>(`${this.baseUrl}/game/startGame`,{userId});
  }

  getRandomDestination(gameSessionId: any) {
    return this.http.get<any>(`${this.baseUrl}/game/clues?gameSessionId=${gameSessionId}`);
  } 

  verifyAnswer(data:any){
    return this.http.post<any>(`${this.baseUrl}/game/verifyAnswer`,data);
  }

}
