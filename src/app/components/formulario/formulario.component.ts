import { Component, Output, EventEmitter } from '@angular/core';
import { Cliente} from '../../Clases/Cliente';

@Component({
  selector: 'formularioAlta',
  templateUrl: './formulario.component.html',
})

export class FormularioComponent {
  model: Cliente = new Cliente('','','');
  @Output() onsubmit= new EventEmitter<any>();

  public submit(){
    this.onsubmit.emit(this.model);
    console.log(this.model);
    this.model = new Cliente('','','');
  }
}