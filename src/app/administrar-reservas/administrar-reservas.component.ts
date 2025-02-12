import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminService } from "../admin.service";
import {
   historialReservaResponse,
   reservaActivaResponse,
} from "../modelos/responses";

@Component({
   selector: "app-administrar-reservas",
   templateUrl: "./administrar-reservas.component.html",
   styleUrl: "./administrar-reservas.component.css",
})
export class AdministrarReservasComponent {
   listaReservaActiva: Array<any>;
   listaHistorialReserva: Array<any>;
   hayError: boolean = false;
   mensajeError: string;

   constructor(
      private http: HttpClient,
      private fb: FormBuilder,
      private router: Router,
      private adminServicio: AdminService
   ) {}

   ngOnInit(): void {
      if (this.adminServicio.hayUsuarioLogeado) {
         this.router.navigate(["/administrar-reservas"]);
      } else {
         this.router.navigate(["/login"]);
      }

      this.obtenerReservasActivas();
      //this.obtenerHistorialReservas();
   }

   obtenerReservasActivas() {
      const idUsuario = this.adminServicio.obtenerIdUsuario();
      console.log("Id usuario:", idUsuario);
      this.http
         .get<{ reservas_vigentes: any[] }>(
            `https://backend-integraservicios.onrender.com/reservasVigentes/${idUsuario}`
         )
         .subscribe({
            next: (res) => {
               console.log("Respuesta API:", res); // 🔍 Depuración

               if (res && res.reservas_vigentes) {
                  this.listaReservaActiva = res.reservas_vigentes; // ✅ Almacenar correctamente
                  console.log("Reservas activas:", this.listaReservaActiva);
               } else {
                  console.warn("Estructura inesperada en la respuesta:", res);
               }
            },
            error: (error) => {
               console.error("Error al obtener reservas activas:", error);
               this.listaReservaActiva = []; // Evita errores si no hay reservas
            },
         });
   }


   obtenerHistorialReservas() {
      this.http.get<historialReservaResponse>("").subscribe({
         next: (res) => {
            this.listaHistorialReserva = res.data;
            console.log(this.listaHistorialReserva);
         },
         error: (error) => {
            console.log(error);
         },
      });
   }

   cancelarReserva(dato: string) {
      // this.obtenerReservasActivas(idUsuario);
      this.obtenerHistorialReservas();

      const datosFormulario = {
         idReserva: dato,
      };
      console.log(datosFormulario);
      this.hayError = false;
      this.http.post("", datosFormulario).subscribe({
         next: (res) => this.mostrarError("Cancelar exitoso!!!!"),
         error: (err) => this.mostrarError("Error al cancelar reserva"),
      });

      // this.obtenerReservasActivas();
      this.obtenerHistorialReservas();
   }

   terminarReserva(dato: string) {
      //this.obtenerReservasActivas();
      this.obtenerHistorialReservas();

      const datosFormulario = {
         idReserva: dato,
      };
      console.log(datosFormulario);
      this.hayError = false;
      this.http.post("", datosFormulario).subscribe({
         next: (res) => this.mostrarError("Terminar exitoso!!!!"),
         error: (err) => this.mostrarError("Error al terminar reserva"),
      });

      //  this.obtenerReservasActivas();
      this.obtenerHistorialReservas();
   }

   mostrarError(mensaje: string) {
      this.hayError = true;
      this.mensajeError = mensaje;
      this.openAlertDialog();
   }

   scrollTo(section: string) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
   }

   openAlertDialog(): void {
      window.alert(this.mensajeError);
   }
}
