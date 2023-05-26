import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Calificaciones } from 'src/app/interface/calificaciones';

@Component({
  selector: 'app-datos-calificaciones',
  templateUrl: './datos-calificaciones.component.html',
  styleUrls: ['./datos-calificaciones.component.scss'],
})
export class DatosCalificacionesComponent  implements OnInit {
  @Input() calificacionList:Calificaciones[] =[];
  @Output() eliminar: any = new EventEmitter<Calificaciones[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}