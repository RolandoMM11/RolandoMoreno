import { Injectable } from '@angular/core';
import { Calificaciones } from '../interface/calificaciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  private calificaciones: Calificaciones[]= [];

  constructor() { }


  public agregarCalificacion(calificacion: Calificaciones){
    if(this.calificaciones.length>0){
      calificacion.id = this.calificaciones.length + 1 ;
    } else {
      calificacion.id = 1;
    }
    this.calificaciones.push(calificacion);
  }

  public borrarCalificacion(id: number){
    this.calificaciones =
    this.calificaciones.filter((al=>al.id!=id));
  }

  public getCalificaciones(): Calificaciones[]{
    return this.calificaciones;
  }

  public setCalificaciones(calificaciones: Calificaciones[]){
    this.calificaciones = calificaciones;
  }

  public actualiza(calificacion: Calificaciones): Calificaciones[]{
    this.calificaciones.filter(
      (al)=>al.id==calificacion.id
    ).map(al=>{
      al.materia=calificacion.materia;
      al.aprobado = calificacion.aprobado;
      al.cal = calificacion.cal;
    });
    return this.calificaciones;
  }
  
}