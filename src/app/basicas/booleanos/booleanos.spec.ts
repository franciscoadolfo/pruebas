import { usuarioIngresado } from './booleanos';

describe('Prueba de booleanos', () =>{
    it('Debe retornar true', () =>{
        const res = usuarioIngresado();
        // expect(res).not.toBeTruthy();
        expect(res).toBeTruthy();
    })
})