'use server';

const {SPOTIFY_CLIENT_SECRET: clientId, SPOTIFY_CLIENT_ID: clientSecret } = process.env;
const callback = 'http://localhost:3000/callback';
const getAccessToken = async () => {
  const 
  const { access_token } = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
       "Content-Type: application/x-www-form-urlencoded",
      },
      body:     

    }
  );
  return;
};