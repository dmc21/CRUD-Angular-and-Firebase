import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firebase: AngularFireAuth) { }

  login(user){
   return new Promise<any>((resolve,reject) =>{
    this.firebase.auth.signInWithEmailAndPassword(user.mail, user.pass).then(data => {
      resolve(data);
    }, err => {
      reject(err);
    });
   }) 
  }
}
