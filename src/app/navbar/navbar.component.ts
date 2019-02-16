import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(
    private login: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  desconectar() {
    this.login.logout();
    this.router.navigate(['']);
  }

}
