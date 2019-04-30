import {Component,Input} from '@angular/core';
import { Cliente} from '../../Clases/Cliente';

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})

export class ListadoClientesComponent {
    @Input() clientes:Array<Cliente>;
    
    displayCliente(clientes: Cliente){
        console.log(clientes);
    }
    
    /*listaCliente: Array<string>;
    constructor(){
        this.listaCliente=[];
    }

    anadirDatos(datos:string){
        this.listaCliente.push(datos);
        console.log('Se ha anadido los datos del cliente ' + this.listaCliente);
    }*/
}