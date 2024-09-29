import Results from '@/components/Results';

export async function generateStaticParams() {
  return [
    {genre: 'topRated'},
    {genre: 'trending'}
  ]
}

export const dynamic = 'force-static';

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'trending';
  const resp = await fetch(`https://api.themoviedb.org/3${genre === 'topRated' ? `/movie/top_rated` : `/trending/movie/week`}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  
  const data = await resp.json();

  if(!resp.ok) {
    throw new Error('Something went wrong');
  }

  const results = data.results;

  return (
    <div>
      <Results 
        results={results}
      />
    </div>
  )
}