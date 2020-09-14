import { Component, OnInit } from '@angular/core';
import { FirebaseAppConfig } from '@angular/fire';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
//   constructor(private authService:FirebaseAppConfig) { }

//   createEmailAndPassword(email,password,phoneNumber){
//     this.authService.createEmailAndPassword(email,password,phoneNumber).then(() =>{

//       alert('successfully logged in');
//     }).catch(err =>{
//       alert('faild to log in')
//         }) 
//   }

//   authEmailAndPasswordPhoneNumber(email,password,phoneNumber){
// return this.authService.signInUserWithEmailAndPasswordPhoneNumber(email,password,phoneNumber);
//   }


//   //constructor(private authService: SocialAuthService) { }
//   signInWithGoogle(): void {
//     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
//   }
 
//   signInWithFB(): void {
//     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
//   }
//   ngOnInit(): void {
//   }

}

