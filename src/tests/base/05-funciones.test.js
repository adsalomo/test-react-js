import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Prueba 05-funciones', () => {

    test('Debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('Prueba get usuario activo', () => {
        const nombre = 'Adrián';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    });

});
