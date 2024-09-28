import Results from '@/components/Results';
import React from 'react'

export default async function searchPage({ params }) {
    const searchId = params.searchId;
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchId}&page=1`);
    const data = await resp.json();
    const results = data.results;
  return (
    <div>
        {results && 
          <Results 
            results={results}
          />
        }
    </div>
  )
}
