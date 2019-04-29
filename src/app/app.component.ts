import { Component } from '@angular/core';
import { Cliente} from '../app/Clases/Cliente';
import { ListaClientesService } from '../app/ClientesService/clientes/listaClientes-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Front-end para NeoComplexx';
  nvocliente: Array<Cliente>=[];

  constructor(private servicio:ListaClientesService){}
  ngOnInit(){
    this.servicio.getLista().then(data => {
      this.nvocliente = data;
    });
}

}