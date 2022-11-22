import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('Componente <GifGrid />', () => {

    const category = 'Lana Rhoades';

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(
            <GifGrid
                category={category}
            />
        );
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Debe de mostrar items cuando se cargan las imágenes', () => {
        const gifs = [
            {
                id: 'uuid1',
                title: 'Lana Rhoades 1',
                url: 'https://media0.giphy.com/media/J1e5nltkBnNBSg22cE/…dgzzg6cuqyb4bi053i3dqicpkdnftf&rid=giphy.gif&ct=g'
            },
            {
                id: 'uuid2',
                title: 'Lana Rhoades 2',
                url: 'https://media0.giphy.com/media/KH7PTfg9x0yx0pFgGN/…dgzzg6cuqyb4bi053i3dqicpkdnftf&rid=giphy.gif&ct=g'
            },
            {
                id: 'uuid3',
                title: 'Lana Rhoades 3',
                url: 'https://media2.giphy.com/media/UdPAMYgXfKAH40hKJS/…dgzzg6cuqyb4bi053i3dqicpkdnftf&rid=giphy.gif&ct=g'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(
            <GifGrid
                category={category}
            />
        );
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });
    
});