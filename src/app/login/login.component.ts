import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

// servicio login
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginService.estaLogueado().then(e => {
      this.router.navigate(['admin']);
    });

    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]]
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.loginService.login(this.loginForm.value).then(
      res => {
        this.router.navigate(['admin']);
      });
  }
}
