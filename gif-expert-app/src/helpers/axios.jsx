import axios from 'axios';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=V6uvDtlVNrQvxvgO8hBgRjDDoYUzlvVH&q=${category}&limit=10`;
    const { data: { data } } = await axios.get(url);
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
};