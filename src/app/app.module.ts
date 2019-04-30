import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FormularioClientesComponent} from './components/formulario/formulario.component'
import { ListadoClientesComponent } from './components/listado/listado.component';
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'

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
    ListaClienteClaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
