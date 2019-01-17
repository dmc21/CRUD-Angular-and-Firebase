import { Component, OnInit } from '@angular/core';

//Servicios
import { ClienteService } from '../servicios/cliente.service';

//Clase Cliente
import { Cliente } from '../cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.sass']
})
export class ListaClientesComponent implements OnInit {

  clienteLista: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    return this.clienteService.getClientes()
      .snapshotChanges().subscribe(item => {
        this.clienteLista = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.clienteLista.push(x as Cliente);
        });
    });
  }

  deleteCliente(id: string){
    let r = confirm('Estás seguro de eliminar este cliente?');

    if(r){
      this.clienteService.removeCliente(id);
    }
  }

  actualizaCliente(cliente: Cliente){
    this.clienteService.selectedCliente = Object.assign({}, cliente);
  }

}
