import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent} from './components/formulario/formulario.component'
import { Listado } from './components/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Listado
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
