import { MedicoComponent } from './medico.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('MedicoComponent', () =>{

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations:[MedicoComponent],
            providers:[MedicoService],
            imports:[HttpClientModule]
        })
        fixture = TestBed.createComponent( MedicoComponent);
        component = fixture.componentInstance;
    })

    it( 'Debe crearse el componente', () => {
        expect(component).toBeTruthy();
    })

    it( 'Debe de retornar el nombre del médico', () => {
        const nombre = 'Francisco';
        const res = component.saludarMedico(nombre);
        expect(res).toContain(nombre);
    })

})