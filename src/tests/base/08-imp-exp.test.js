import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Prueba archivo 08-imp-exp', () => {

    test('Prueba retornar heroe por id', () => {
        const id = 1;

        const heroe = getHeroeById(id);

        const heroesData = heroes.find(x => x.id === id);

        expect(heroe).toEqual(heroesData);

    });

    test('Prueba retornar heroe sino existe', () => {
        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('Prueba retornar heroes de DC', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(x => x.owner === owner);

        expect(heroes).toEqual(heroesData);
    });

    test('Prueba retornar heroes de Marvel', () => {
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(x => x.owner === owner);

        expect(heroes.length).toBe(heroesData.length);
    });



});
