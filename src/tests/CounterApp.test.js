import React from 'react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Prueba CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    // Inicializa antes de ejecutar cada prueba
    beforeEach(() => {
        wrapper = shallow(
            <CounterApp />
        );
    });

    test('Prueba CounterApp', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Mostrar valor por defecto de 100', () => {

        const wrapper = shallow(
            <CounterApp
                value={100} />
        );

        const valor = wrapper.find('h2').text();

        expect(valor).toBe('100');
    });

    test('Debe incrementar con el boton 1', () => {

        wrapper.find('button').at(0).simulate('click');

        const valor = wrapper.find('h2').text();

        expect(valor).toBe('11');

    });

    test('Debe reducir con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const valor = wrapper.find('h2').text();

        expect(valor).toBe('9');

    });

    test('Debe realizar reset', () => {

        const wrapper = shallow(
            <CounterApp
                value={100} />
        );

        wrapper.find('button').at(1).simulate('click');

        const valor = wrapper.find('h2').text();

        expect(valor).toBe('100');

    });

});
