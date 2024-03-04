import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const requestData = {
      usuario: this.username,
      contrasena: this.password,
    };
  
    this.http.post('http://localhost:3003/login', null, { params: requestData }).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        if (response.message === 'Inicio de sesión exitoso') {
          const rolUsuario = response.usuario.rolUsuario;
          console.log('Rol del usuario:', rolUsuario);
          if (rolUsuario === 0 || rolUsuario === 1) { // Puedes redirigir para ambos roles
            this.router.navigate(['/home']);
          }
        } else {
          console.error('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error('Error en la solicitud: ', error);
      }
    );
  }
  

  registrar() {
    const requestData = {
      nombre: '', // Ajusta los valores según los datos que desees enviar al backend
      usuario: this.username,
      contrasena: this.password,
      rol: 0 // Establece el valor del rol a 0
    };

    this.http.post('http://localhost:3003/registrar', requestData).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error en la solicitud de registro: ', error);
      }
    );
  }
}
