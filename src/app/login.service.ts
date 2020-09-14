import { Injectable } from '@angular/core';
import { FirebaseAppConfig } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService:FirebaseAppConfig) { }

  createEmailAndPassword(email,password,phoneNumber){
    this.authService.createEmailAndPassword(email,password,phoneNumber).then(() =>{

      alert('successfully logged in');
    });
  }

  authEmailAndPasswordPhoneNumber(email,password,phoneNumber){
return this.authService.signInUserWithEmailAndPasswordPhoneNumber(email,password,phoneNumber);
  }


  //constructor(private authService: SocialAuthService) { }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  ngOnInit(): void {
  }

}


