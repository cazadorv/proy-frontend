import {Injectable} from '@angular/core';
import {Cliente} from '../../Clases/Cliente';

const CLIENTES: Array<Cliente> = [
    new Cliente('Carlos','Garcia','Salta 49'),
];
//tiempo de retraso
const RETRASO = 500;

@Injectable()
export class ListaClienteClaseService{
    getClientes(){
        return new Promise<Cliente[]>(data =>{
            setTimeout(()=>{
                data(CLIENTES);
            },RETRASO);
        });
    }
}