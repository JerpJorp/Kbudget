import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ChangeType, DisplayStateService } from './display-state.service';
import { GoogleUser } from './interfaces';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userLoggedin = false;

  constructor(private DisplayStateService: DisplayStateService,
  private ref:ChangeDetectorRef) { }

  userCheck() 
  {
    if (this.DisplayStateService.LoggedInUser !== undefined) { 
      this.userLoggedin = true;
    }
    this.ref.detectChanges();

  }
  ngOnInit() {
    console.log('ngOnInit');
    
    this.DisplayStateService.event.subscribe(x => {
      console.log("service event...");
      if (x == ChangeType.LoggedInUser) {
        console.log("got login in home");
        this.userCheck();
      }
    });
    
  }
}
