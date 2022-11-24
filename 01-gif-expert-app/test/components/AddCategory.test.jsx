import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('Pruebas <AddCategory />', () => {

    const target = {
        value: 'Lana Rhoades'
    };
    
    test('Debe cambiar el valor de la caja de texto', () => {
        render(
            <AddCategory
                onNewCategory={() => {}}
            />
        );
        const input = screen.getByPlaceholderText('Buscar gifs');
        fireEvent.change(input, { target });
        expect(input.value).toBe(target.value);
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        const onNewCategory = jest.fn();
        render(
            <AddCategory
                onNewCategory={onNewCategory}
            />
        );
        const input = screen.getByPlaceholderText('Buscar gifs');
        const form = screen.getByRole('form');
        fireEvent.change(input, { target });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(target.value.trim());
    });

    test('No debe llamar onNewCategory si el input esta vacío', () => {
        const onNewCategory = jest.fn();
        render(
            <AddCategory
                onNewCategory={onNewCategory}
            />
        );
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});