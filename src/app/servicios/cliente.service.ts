import { Injectable } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Cliente } from '../cliente';

// Firebase

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listaClientes: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  selectedCliente: Cliente = new Cliente();

  getClientes() {
    return this.listaClientes = this.firebase.list('clientes');
  }

  insertClient(cliente: Cliente) {

    this.listaClientes.push({
      nombre: cliente.nombre,
      apellidos: cliente.apellidos,
      puesto: cliente.puesto
    });
  }

  removeCliente(id: string) {
    this.listaClientes.remove(id);
  }

  updateCliente(cliente: Cliente) {
    this.listaClientes.update(cliente.$key, {
      nombre: cliente.nombre,
      apellidos: cliente.apellidos,
      puesto: cliente.puesto
    });
  }

}
