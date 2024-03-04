import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  Proyectos: FormGroup;
  usuario: any;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.Proyectos = this.fb.group({
      nom_p: [''],
      des_p: [''],
      fecha_i: [''],
      fecha_f: ['']
    });
  }

  ngOnInit() {
    // Realizar solicitud GET para obtener detalles del usuario
    this.http.get<any>('http://localhost:3003/usuario').subscribe(response => {
      this.usuario = response;
      console.log('Detalles del usuario:', this.usuario);
      // Aquí puedes realizar cualquier acción con los detalles del usuario obtenidos
    }, error => {
      console.error('Error al obtener detalles del usuario:', error);
      // Aquí puedes manejar cualquier error que ocurra durante la solicitud
    });
  }
  onSubmit() {
    console.log(this.Proyectos.value);
    this.http.post<any>('http://localhost:3003/proyectos', this.Proyectos.value).subscribe(response => {
      console.log('Proyecto agregado correctamente:', response);
      // Aquí puedes manejar la respuesta del servidor si es necesario
    }, error => {
      console.error('Error al agregar proyecto:', error);
      // Aquí puedes manejar cualquier error que ocurra durante la solicitud
    });
  }
}