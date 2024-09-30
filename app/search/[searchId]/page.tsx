import Results from '@/components/Results';
import React from 'react'

// export async function generateStaticParams() {
//   // const resp = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
//   // const data = await resp.json();
//   // const results = data.results;

//   // if (!resp.ok) {
//   //   throw new Error('Something went wrong');
//   // }

//   // return results.map((movie => {
//   //   searchId: movie.id
//   // }));
//   return [
//     {searchId: '238'},
//     {searchId: '240'}
//   ]
// }

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
