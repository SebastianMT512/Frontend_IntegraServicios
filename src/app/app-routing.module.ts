import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";

import { RecursosCategoriaComponent } from "./recursos-categoria/recursos-categoria.component";
import { LoginComponent } from "./login/login.component";
import { AdministrarReservasComponent } from "./administrar-reservas/administrar-reservas.component";

import { IntegracionComponent } from "./integracion/integracion.component";

const routes: Routes = [
   { path: "", redirectTo: "pagina-principal", pathMatch: "full" },
   { path: "pagina-principal", component: PaginaPrincipalComponent },
   { path: "login", component: LoginComponent },
   { path: "administrar-reservas", component: AdministrarReservasComponent },
   { path: "integracion", component: IntegracionComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
