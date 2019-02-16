import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

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
    this.firebased.auth.signOut();
  }
}


