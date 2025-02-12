import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service'; // ✅ Importa el servicio

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private adminService: AdminService // ✅ Inyecta el servicio
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.obtenerUsuario(); // ✅ Llamamos a la función para obtener datos
  }

  crearFormulario() {
    this.usuarioForm = this.fb.group({
      nombre: [''],
      telefono: [''],
      correo: [''],
      contrasena: ['']
    });
  }

  obtenerUsuario() {
    const idUsuario = this.adminService.obtenerIdUsuario(); // ✅ Obtiene el ID del servicio
    console.log(idUsuario);
    if (idUsuario) {
      this.http.get<any>(`https://backend-integraservicios.onrender.com/consultarUsuarios?id_usuario=${idUsuario}`).subscribe({
        next: (res) => {
          this.usuarioForm.patchValue({
            nombre: res.nombre,
            telefono: res.telefono,
            correo: res.correo,
            contrasena: '' // La contraseña no se muestra por seguridad
          });
        },
        error: (error) => {
          console.error("Error al obtener usuario:", error);
        }
      });
    } else {
      console.error("No hay usuario registrado.");
    }
  }
}
