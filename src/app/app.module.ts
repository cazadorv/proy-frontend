import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FormularioClientesComponent} from './components/formulario/formulario.component'
import { ListadoClientesComponent } from './components/listado/listado.component';
import { ListaClientesService } from './ClientesService/clientes/listaClientes-service'

@NgModule({
  declarations: [
    AppComponent,
    FormularioClientesComponent,
    ListadoClientesComponent    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [
    ListaClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
