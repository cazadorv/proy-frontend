import {Component} from '@angular/core';

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})

export class Listado {
    listaCliente: Array<string>;
    constructor(){
        this.listaCliente=[];
    }

    anadirDatos(datos:string){
        this.listaCliente.push(datos);
        console.log('Se ha anadido los datos del cliente ' + this.listaCliente);
    }
}