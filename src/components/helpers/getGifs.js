export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q= ${encodeURI(
    category
  )} &limit=50&api_key=gghj2O6zlKZcCpVcN7YGa6zCQSCzz1Bv`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
