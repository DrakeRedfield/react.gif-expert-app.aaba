export const getGifs = async (category) => {
  /*
    TODO: fix SyntaxError: Cannot use 'import.meta' outside a module with jest
    const token = import.meta.env.VITE_GIPHY_TOKEN;
  */

  // Can create and API Token on https://developers.giphy.com
  const token = 'YOUR_TOKEN';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
}