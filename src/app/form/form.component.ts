import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Servicios
import { ClienteService } from '../servicios/cliente.service';

import { LoginService } from '../servicios/login.service';

import { Router } from '@angular/router';




// Clases

import { Cliente } from '../cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private login: LoginService,
    private router: Router
    ) { }

  ngOnInit() {

    this.login.estaLogueado().catch(e => {
      this.router.navigate(['']);
    });


    this.clienteService.getClientes();
    this.resetForm();
  }

  resetForm(formulario?: NgForm) {
    if (formulario != null) {
      formulario.reset();
    }
    this.clienteService.selectedCliente = new Cliente();
  }



  onSubmit(cliente: NgForm) {

  if (cliente.value.$key == null) {
      this.clienteService.insertClient(cliente.value);
  } else {
    this.clienteService.updateCliente(cliente.value);
  }

  this.resetForm(cliente);

  }

  desconectar() {
    this.login.logout();
    this.router.navigate(['']);
  }

}
