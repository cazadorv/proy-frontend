import { Component,OnInit } from '@angular/core';
import { Cliente} from '../app/Clases/Cliente';
//import { ListaClientesService } from '../app/ClientesService/clientes/listaClientes-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  clientes: Array<Cliente>=[];

  //constructor(private servicio:ListaClientesService){}
  ngOnInit(){
    //se prueba ingresar dos clientes
    this.clientes.push(new Cliente('Alejandro','Almiron','Salta 50'));
    this.clientes.push(new Cliente('Carlos','Rosales','Santos LIma 30'));
    this.clientes.push(new Cliente('Sergio','Toreto','Corrientes 30'));
    //this.servicio.getLista().then(data => {
    //  this.clientes = data;
    }; 
  guardar(model:Cliente){
    this.clientes.push(model);
    console.log(model);
  }
}

