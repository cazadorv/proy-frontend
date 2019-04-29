import {Injectable} from '@angular/core';
import {Cliente} from '../../Clases/Cliente';

const Clientes: Array<Cliente> = [
    new Cliente('Carlos','Garcia','Salta 49')
];

const RETRASO = 500;

@Injectable()
export class ListaClientesService{
    getLista(){
        return new Promise<Cliente[]>(data =>{
            setTimeout(()=>{
                data(Clientes);
            },RETRASO);
        });
    }
}