const API_KEY = process.env.API_KEY;

import Results from '@/components/Results';
import React from 'react'

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'trending';
  const resp = await fetch(
    `https://api.themoviedb.org/3${
    genre === 'topRated' ? `/movie/top_rated` : `/trending/movie/week`}?api_key=${API_KEY}&language=en-US&page=1`
  );
  
  const data = await resp.json();

  if(!resp.ok) {
    throw new Error('Something went wrong');
  }

  const results = data.results;

  return (
    <div>
      <Results results={results}/>
    </div>
  )
}