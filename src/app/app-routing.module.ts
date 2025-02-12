import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { LoginComponent } from "./login/login.component";
import { AdministrarReservasComponent } from "./administrar-reservas/administrar-reservas.component";
import { IntegracionComponent } from "./integracion/integracion.component";
import { RecursosCategoriaComponent } from "./recursos-categoria/recursos-categoria.component";
import { GestionUsuarioComponent } from "./gestion-usuario/gestion-usuario.component";
const routes: Routes = [
   { path: "", component: PaginaPrincipalComponent },
   { path: "login", component: LoginComponent },
   { path: "administrar-reservas", component: AdministrarReservasComponent },
   { path: "integracion", component: IntegracionComponent },
   { path: "recursos-categoria", component: RecursosCategoriaComponent },
  {path: 'gestion-usuario',component: GestionUsuarioComponent},
   { path: "**", redirectTo: "", pathMatch: "full" }, // Ruta para manejar rutas no encontradas
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
