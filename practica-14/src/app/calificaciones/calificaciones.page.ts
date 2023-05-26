import { Component, OnInit } from '@angular/core';
import { Calificaciones } from '../interface/calificaciones';
import { CalificacionesService } from '../service/calificaciones.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  
  calificaciones:Calificaciones[]=[];
  materia: string ='';
  aprobado: string = '';
  cal: number = 0;
  estado: string = '';
  idActualizar: any|number = 0;
  error: boolean = false;


  constructor(private calificacionService: CalificacionesService) { }

  ngOnInit() {
    this.calificacionService.setCalificaciones([
      {id:1, materia: 'Física',
      cal: 88,aprobado: 'Aprobado'},
      {id:2, materia: 'Álgebra Lineal',
      cal: 77,aprobado: 'Aprobado'},
      {id:3, materia: 'Ingles',
      cal: 100,aprobado: 'Aprobado'}
    ]);

    this.calificaciones = this.calificacionService.getCalificaciones();
    this.estado ='guardar';
  }

  public guardar(){
    if( (this.materia == undefined || this.materia == '' ) || 
      (this.aprobado != 'Aprobado' && this.aprobado != 'Reprobado') ||
      (this.cal > 100 || this.cal < 0)  ) {
      this.error = true;
      return;
    }  
    let calificacion: Calificaciones={
      materia: this.materia,
      aprobado: this.aprobado,
      cal: this.cal
    };
    if (this.estado ==='actualizar'){
      calificacion.id = this.idActualizar;
      this.calificaciones = this.calificacionService.actualiza(calificacion);
    }
    if(this.estado === 'guardar'){
      this.calificacionService.agregarCalificacion(calificacion);
      this.calificaciones = this.calificacionService.getCalificaciones();
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'guardar';
    this.materia = '';
    this.aprobado = '';
    this.cal = 0;
    this.error = false;
  }

  public eliminar(id:number){
    this.calificacionService.borrarCalificacion(id);
    this.calificaciones = this.calificacionService.getCalificaciones();
  }

  public editar(calificacion:Calificaciones){
    this.estado = 'actualizar';
    this.materia = calificacion.materia;
    this.aprobado = calificacion.aprobado;
    this.cal = calificacion.cal;
    this.idActualizar = calificacion.id;
  }

}