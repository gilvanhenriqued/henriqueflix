import config from '../config';

const URL_VIDEOS = `${config.URL_BASE}/videos`;

function submitVideo(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        return data;
      }

      throw new Error('Não foi possível cadastrar seu vídeo :(');
    });
}

export default {
  submitVideo,
};
