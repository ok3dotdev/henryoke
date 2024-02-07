// import { unstable_noStore as noStore } from 'next/cache';

export const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

  const { SPOTIFY_CLIENT_ID: client_Id, SPOTIFY_CLIENT_SECRET: client_Secret } =
    process.env;

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${client_Id}:${client_Secret}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token || '',
    }).toString(),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  console.log('getting now playing');
  // noStore();
  const CURRENT_SONG = 'https://api.spotify.com/v1/me/player/currently-playing';
  const { access_token } = await getAccessToken();

  try {
    const res = await fetch(CURRENT_SONG, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (res.status === 204 || res.status > 400) {
      console.log('Status not playing');
      return null;
    }

    let nowPlaying;
    try {
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        nowPlaying = await res.json();
      } else {
        console.log('Response is not JSON:', res.statusText);
        return null; // or handle non-JSON response accordingly
      }
    } catch (error) {
      console.error('Error parsing JSON:');
      return null;
    }

    if (nowPlaying?.item === null) {
      console.log('Status not playing');
      return null;
    }

    const isPlaying = nowPlaying.is_playing;
    const title = nowPlaying.item.name;
    const artist = nowPlaying.item.artists
      .map((_artist: any) => _artist.name)
      .join(', ');
    const album = nowPlaying.item.album.name;
    const albumImageUrl = nowPlaying.item.album.images[0].url;
    const songUrl = nowPlaying.item.external_urls.spotify;
    console.log('alb', title);
    return {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
