import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { Error404Component } from './Componentes/error404/error404.component';

export const routes: Routes = [

 { path: '', redirectTo: 'pagina-principal', pathMatch: 'full' },

 { path: 'pagina-principal', component: PaginaPrincipalComponent },
 { path: 'inicio-sesion', component: InicioSesionComponent },
 { path: 'registro', component: RegistroComponent },
 { path: 'error404', component: Error404Component },

 { path: '**', redirectTo: 'error404', pathMatch: 'full' },

];
