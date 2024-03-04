import { SitemapComponent } from './components/sitemap/sitemap.component';
import { Error403Component } from './error/error403/error403.component';
import { Error404Component } from './error/error404/error404.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActividadesComponent } from './components/actividades/actividades.component';



const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'equipo', component: EquipoComponent},
  {path:'proyecto', component: ProyectoComponent},
  {path:'tarea', component: TareaComponent},
  {path:'actividades', component: ActividadesComponent},
  {path:'error404', component: Error404Component},
  {path:'error403', component: Error403Component},
  {path:'sitemap', component: SitemapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
