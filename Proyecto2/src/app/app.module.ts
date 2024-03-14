import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { Error404Component } from './error/error404/error404.component';
import { Error403Component } from './error/error403/error403.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EquipoComponent,
    ProyectoComponent,
    TareaComponent,
    ActividadesComponent,
    Error404Component,
    Error403Component,
    SitemapComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
