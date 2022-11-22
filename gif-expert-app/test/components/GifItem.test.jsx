import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('Componente <GifItem />', () => {

    const title = 'Lana Rhoades';
    const url = 'https://jestjs.io/docs/configuration#testenvironment-string';

    test('Crear el snapshot ', () => {
        const { container } = render(
            <GifItem
                title={title}
                url={url}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(
            <GifItem
                title={title}
                url={url}
            />
        );
        expect(screen.getAllByRole('img').length).toBe(1);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el parrafo con el título', () => {
        render(
            <GifItem
                title={title}
                url={url}
            />
        );
        expect(screen.getByText(title)).toBeTruthy();
        expect(screen.getAllByText(title).length).toBe(1);
    });

});