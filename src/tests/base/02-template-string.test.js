import { getSaludo } from "../../base/02-template-string";

describe('Prueba archivo 02-template-string', () => {
    test('Prueba get saludo ', () => {
        const nombre = 'Adrián';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    });

    test('Prueba get saludo sin argumentos', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    })

});
