import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (res) => {
      const data = await res.json();
      return data;
    });
}

export default {
  getAllWithVideos,
};
