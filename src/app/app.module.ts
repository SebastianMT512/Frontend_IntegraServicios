import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { LoginComponent } from "./login/login.component";
import { RecursosCategoriaComponent } from "./recursos-categoria/recursos-categoria.component";
import { AdministrarReservasComponent } from "./administrar-reservas/administrar-reservas.component";
import { GestionUsuarioComponent } from "./gestion-usuario/gestion-usuario.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
   declarations: [
      AppComponent,
      PaginaPrincipalComponent,
      LoginComponent,
      RecursosCategoriaComponent,
      AdministrarReservasComponent,
      GestionUsuarioComponent,
   ],
   imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
