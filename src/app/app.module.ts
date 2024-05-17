import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/navbar/nav.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { VideoComponent } from './componentes/video/video.component';
import { PaquetesComponent } from './componentes/paquetes/paquetes.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoriaComponent,
    ProductoComponent,
    VideoComponent,
    PaquetesComponent,
    FormularioComponent,
    UbicacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    HistoriaComponent,
    ProductoComponent,
    VideoComponent,
    PaquetesComponent,
    FormularioComponent,
    UbicacionComponent,
    FooterComponent
  ]
})
export class AppModule { }
