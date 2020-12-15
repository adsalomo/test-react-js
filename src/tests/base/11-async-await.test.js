import { getImagen } from "../../base/11-async-await";

describe('Pruebas 11-async-await', () => {

    test('debe retornar url de la imagen', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });

});
