import { Subject } from 'rxjs/Rx';
import { GoogleUser } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class DisplayStateService {

  event: Subject<ChangeType>;
  LoggedInUser: GoogleUser;
  

  constructor() { 
    this.event = new Subject<ChangeType>();
    
  }
  
  UserIsLoggedIn(): boolean {
    const returnValue = this.LoggedInUser !== undefined && this.LoggedInUser.email !== undefined;
    console.log(`DisplayStateService.UserIsLoggedIn: ${returnValue}`);
    return returnValue;
  }

  SetLoggedInUser( googleUser: GoogleUser) {
    console.log(`setting user: `);
    this.LoggedInUser = googleUser;
    this.event.next(ChangeType.LoggedInUser);
  }
}

export enum ChangeType {
  LoggedInUser = 1
}