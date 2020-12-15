import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Prueba archivo 09-promesas', () => {

    test('Prueba heroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then((heroe) => {
                expect(heroe).toEqual(heroes[0]);
                done();
            });
    });

    test('Prueba heroe async no existe el heroe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch((error) => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });

});
