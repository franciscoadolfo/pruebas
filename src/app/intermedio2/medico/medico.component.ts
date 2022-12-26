import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../intermedio2/medico/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  medicos:any[] = [];

  constructor(public medicoService: MedicoService ){

  }
  
  ngOnInit(): void {
  }

  saludarMedico(nombre:string){
    return `hola ${nombre}`;
  }

  obtenerMedicos(){
    this.medicoService.getMedicos()
      .subscribe((medicos:any) => this.medicos = medicos)
  }

}
