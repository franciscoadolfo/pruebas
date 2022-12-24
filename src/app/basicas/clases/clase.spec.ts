import { Jugador } from './clase';
describe('Reglas de clase', () =>{
    
    let jugador = new Jugador();
    
    beforeAll( () => {
        console.log('beforeAll')
    });
    
    beforeEach( () => {
        console.log('beforeEach')
        jugador = new Jugador();
    });
    
    afterAll( () => {
        console.log('afterAll')
    });
    
    afterEach( () => {
        console.log('afterEach')
    });

    it('Debe returnar 80 de HP si recibe 20 de daño', () =>{
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    })

    it('Debe returnar 50 de HP si recibe 50 de daño', () =>{
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    })

    it('Debe returnar 0 de HP si recibe 100 de daño', () =>{
        const resp = jugador.recibeDanio(101);
        expect(resp).toBe(0);
    })
})