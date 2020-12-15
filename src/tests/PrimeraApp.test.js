import React from 'react';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas PrimeraApp', () => {

    /*test('Debe de mostrar el mensaje "Hola soy Goku"', () => {

        const saludo = 'Hola, soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();

    });*/

    test('Debe de mostrar el mensaje "Hola soy Goku"', () => {

        const saludo = 'Hola, soy Goku';

        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el subtitulo', () => {

        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo} />
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);

    });


});
