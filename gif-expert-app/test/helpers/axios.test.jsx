import { getGifs } from '../../src/helpers/axios';

describe('Pruebas en getGifs', () => {

    const category = 'Lana Rhoades';
    
    test('Debe retornar un arreglo de gifs ', async () => {
        const gifs = await getGifs(category);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });

});