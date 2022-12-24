import { from, EMPTY, throwError, Observable } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null!);

    beforeEach( () => {
        componente = new MedicosComponent(servicio)
    });


    it('Init debe de cargar los médicos', () => {
        spyOn(servicio,'getMedicos').and.callFake( () => from([['Medico 1','Medico 2','Medico 3']]));
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0)
   
    });

    it('Debe de llamar al servidor para agregar un médico', () =>{
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(() =>EMPTY)
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    })

    it('Debe de agregar un nuevo médico al arreglo', () =>{
        const medico = { id: 1, nombre: 'Juan'};
        spyOn( servicio, 'agregarMedico').and.returnValue(
            from([medico])
        )
        componente.agregarMedico();
        expect( componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    })

    it('Si fall la adición, la propiedad mensajeError, debe ser igual al error del servicio', () =>{
        const miError = 'No se pudo agregar al médico';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError( miError ));
        componente.agregarMedico();
        expect( componente.mensajeError ).toBe(miError);
    })


    it('Debe llamar al servidor para borrar un médico', () =>{
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY)
        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');
    })


    it('No debe llamar al servidor para borrar un médico', () =>{
        spyOn(window, 'confirm').and.returnValue(false);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY)
        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');
    })
});
