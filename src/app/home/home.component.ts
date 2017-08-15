import { GoogleUser } from '../interfaces';
import { DisplayStateService, ChangeType } from '../display-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  user: any;
  constructor(private DisplayStateService: DisplayStateService) {
    this.user = this.DisplayStateService.LoggedInUser;
  }

}
