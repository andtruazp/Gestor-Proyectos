import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: any[] = [];
  proyectoForm: FormGroup;
  usuario: any;
  id: number| null

  constructor(
    private proyectoService: ProyectoService,
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.proyectoForm = this.fb.group({
      id_u: [''],
      nom_p: [''],
      des_p: [''],
      fecha_i: [''],
      fecha_f: [''], 
    });
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.usuario = 1;
  }

  ngOnInit() :void{
    this.getProyecto()
  }
  getProyecto(){
    try{
      console.log('el id del Proyecto es:',this.id)
      this.proyectoService.getProyecto(this.id).subscribe(proyecto => {
        this.proyecto = proyecto;
        console.log('los valores son',proyecto)
      },
      error => {
        console.error('Error al obtener datos de empresa:', error);
      } )
    }catch{
      this.id = 0
      console.log('no existe');
    }
    
  }
  createProyecto() {
    const proyectoData = this.proyectoForm.value;
    proyectoData.id_u = this.usuario;
    console.log('create',this.id)
    if(this.id !== null && this.id !== 0){
      const pryectoData=this.proyectoForm.value
      this.proyectoService.updateProyeto(this.id, proyectoData).subscribe( proyecto => {
          console.log('Proyecto Creado:');
        },
        (error) => {
          console.error('Error al crear el Proyecto:', error);
        }
      
    );
    }else{
      if (this.proyectoForm.valid){
        this.proyectoService.createProyecto(proyectoData).subscribe(
          (response) => {
            console.log('Solicitud POST exitosa', response);
          },
          (error) => {
            console.error('Error en la solicitud POST', error);
          }
        );
      } 
    } 
  }

  updateProyecto() {
    if (this.id !== 0 || this.id !== null){
      console.log('id del metodo update',this.id)
      this.proyectoService.getProyecto(this.id).subscribe(data =>{
        console.log(data)
        this.proyectoForm.patchValue({
          nombre: data.nombre,
          id_u: data.id_u,
          nom_p: data.nom_p,
          des_p: data.des_p,
          fecha_i: data.fecha_i,
          fecha_f: data.fecha_f
        })
      })
    }
  }

  deleteEmpresa(id: any) {
    this.proyectoService.deleteProyecto(id).subscribe(
      (response) => {
        console.log('Proyecto eliminado:', response);
      },
      (error) => {
        console.error('Error al eliminar el Proyecto:', error);
      }
    );
  }
}