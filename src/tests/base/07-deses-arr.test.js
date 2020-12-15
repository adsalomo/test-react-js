import { retornaArreglo } from "../../base/07-deses-arr";

describe('Prueba 07-deses-arr', () => {

    test('Debe ser un arreglo', () => {
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');

        expect(numeros).toBe(123);
    })


})
