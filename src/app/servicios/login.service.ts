import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firebased: AngularFireAuth) { }

  login(user) {
   return new Promise<any>((resolve, reject) => {
    this.firebased.auth.signInWithEmailAndPassword(user.mail, user.pass).then(data => {
      resolve(data);
    }, err => {
      reject(err);
    });
   });
  }

  estaLogueado() {

    return new Promise<any>((resolve, reject) => {
      this.firebased.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject(user);
        }
      });
    });


  }

  logout() {
    firebase.auth().signOut();
  }
}


