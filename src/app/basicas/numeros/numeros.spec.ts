import { incrementar } from './numeros';
describe('Pruebas de números', () => {
    it( 'Debe retornar 100 si el numero es mayor a 100', () => {
        const res = incrementar(300);
        expect(res).toBe(100);
    })

    it( 'Debe retornar el número ingresado + 1 si no es mayor a 100', () => {
        const res = incrementar(50);
        expect(res).toBe(51);
    })

})