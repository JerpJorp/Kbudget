import { timeout } from 'rxjs/operator/timeout';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DisplayStateService } from "../display-state.service";

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  auth2: any;  

  constructor(
    private DisplayStateService: DisplayStateService ) { }
    private ready = false;
  ngOnInit() {
    setTimeout( () => { this.googleInit(); }, 300);
   }

  public googleInit() {
    console.log("googleInit");
    this.ready = true;
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: '640778788540-gf59i4al004spro6n1cjkperbievhhck.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      console.log("attachSignin");
      that.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {
        console.log("here");
        let profile = googleUser.getBasicProfile();

        that.DisplayStateService.SetLoggedInUser({
          token: googleUser.getAuthResponse().id_token,
          id: profile.getId(),
          name: profile.getName(),
          imageUrl: profile.getImageUrl(),
          email: profile.getEmail()
        });
        
        console.log('called navigate!');
      }, function (error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit() {
    
    
  }

}
