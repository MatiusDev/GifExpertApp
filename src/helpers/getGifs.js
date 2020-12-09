export const getGifs = async (category) => {
    const API_KEY = 'dK0uoKVoDhSP0EJEMBwcgznUiJ4tIcTL';
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${API_KEY}`;
    const res = await fetch(URL);
    const { data } = await res.json();

    const gifs = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            url: images.downsized_medium.url
        }
    });

    return gifs;
}
