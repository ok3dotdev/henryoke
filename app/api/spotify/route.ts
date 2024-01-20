import { NextRequest, NextResponse } from 'next/server';
import { getNowPlaying } from '../../../lib/spotify';

export async function GET(request: NextRequest) {
  try {
    const res = await getNowPlaying();
    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
  }
}

// https://accounts.spotify.com/authorize?client_id=058a2739656c4de8ab4b19b39f35ffcf&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing

// code
// AQDhGSYHhL5KFTh03EBWOchHR1QxGfRErVo0QGlYMcNeWiNGASCs-Ex7SLjGNcYZ46tJtCkbpH50I-_TwpAZNcfXovxsqR-9srxWsdorFoGfb3t1o56mqIqWmsth3gipjx0Os5knJzAe9G2kV8VYHWu9bBO0Yd4uQ00TIIvoW-0kgSuBOhJosM67ullom2Hsy2loQQXDqFjCKHw7xgFc

// curl -H "Authorization: Basic MDU4YTI3Mzk2NTZjNGRlOGFiNGIxOWIzOWYzNWZmY2Y6ODIzNDZkODQwZmVkNGUzMmFjZmJlYThlOWIxZDc5OTI=" -d grant_type=authorization_code -d code=AQDhGSYHhL5KFTh03EBWOchHR1QxGfRErVo0QGlYMcNeWiNGASCs-Ex7SLjGNcYZ46tJtCkbpH50I-_TwpAZNcfXovxsqR-9srxWsdorFoGfb3t1o56mqIqWmsth3gipjx0Os5knJzAe9G2kV8VYHWu9bBO0Yd4uQ00TIIvoW-0kgSuBOhJosM67ullom2Hsy2loQQXDqFjCKHw7xgFc -d redirect_uri=http%3A%2F%2Flocalhost:3000/callback https://accounts.spotify.com/api/token

// base 64
// MDU4YTI3Mzk2NTZjNGRlOGFiNGIxOWIzOWYzNWZmY2Y6ODIzNDZkODQwZmVkNGUzMmFjZmJlYThlOWIxZDc5OTI=

// {
//   "access_token": "BQAle8LR7h5fviTRp4_ORa0j5_Xbwt655K56h5VrPmCRkQVWKFdZ4m2VLEu82YSjNeIaZ2ON-LhdeJszOUZtY3PeE0dhfZ8mMpQD8PMuMcswlB4tP5xEco1tET_27o8i0hBOnGaRz9EbzfsF5Jn7E4VLiCT0mmqPRKCl-wZxHXqbp9cPZg5v4bKrpJpVqwWHm4ynNBfl2f8",
//   "token_type": "Bearer",
//   "expires_in": 3600,
//   "refresh_token": "AQAI88hJ50N__Tq90UpJAQYX-H5ybgPcoRaW58lFQu7pbXQxmH14ew5PS3j1eCWLg-CVeB9qQ3EKjuHH6BgKUwxg9ow-75kpKaGXZEO146LE5titIYS0PAA_fWpVst0-0z0",
//   "scope": "user-read-currently-playing"
// }
