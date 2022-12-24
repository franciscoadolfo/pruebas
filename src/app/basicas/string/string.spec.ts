import { mensaje } from './string';

describe('Pruebas de strings', () =>{
    it( 'Debe de regresar un string' , () =>{
        const resp = mensaje('Francisco');
        expect( typeof resp ).toBe('string');
    })

    it( 'Debe de retornar un saludo con el nombre enviado' , () =>{
        const   nombre = 'Francisco',
                resp = mensaje(nombre);
        expect( resp ).toContain(`Saludos ${nombre}`);
    })

});