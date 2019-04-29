import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent} from './components/formulario/formulario.component'
import { Listado } from './components/listado/listado.component';
import { ListaClientesService } from './ClientesService/clientes/listaClientes-service'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Listado    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListaClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
