import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function getImageUrl(path: string) {
  return (`https://image.tmdb.org/t/p/original/${path}`)
}

export async function generateStaticParams() {
  // const resp = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  // const data = await resp.json();
  // const results = data.results;

  // if (!resp.ok) {
  //   throw new Error('Something went wrong');
  // }

  // return results.map((movie => {
  //   searchId: movie.id
  // }));
  return [
    {id: '238', genres: {id: '18', name: 'Drama'}},
    {id: '240', genres: {id: '18', name: 'Drama'}}
  ]
}

export default async function moviePage({ params }) {
  const resp = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`);
  // const respSim = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${process.env.API_KEY}`);
  const result = await resp.json();
  // const resultSim = await respSim.json();
  // const dataSim = resultSim.results;

  const path = result.backdrop_path || result.poster_path;
  const url = getImageUrl(path);

  return (
    <div>
      <div 
        className='md:flex p-3'
      >
        {Boolean(path) && 
          <Image 
            src={url} 
            width={500} 
            height={500} 
            className='rounded-lg' 
            style={{height: '100%'}} 
            alt={''}
          />
          }
        <div 
          className='md:ml-5'
        >
          <h1 
            className='text-lg font-bold'
          >
            {result.title || result.name}
          </h1>
          <p 
            className='font-semibold'
          >
            {result.genres.map((genre) => {
              return (
                <span 
                  className='border rounded-md px-0.5 mr-0.5' 
                  key={genre.name}
                >
                  {genre.name}
                </span>
              );
            })}
          </p>
          <p 
            className='my-2'
          >
            {result.overview}
          </p>
          <div 
            className=''
          >
            <p 
              className='font-semibold'
            >
              Release Date: 
              <span 
                className='font-normal'
              >
                {new Date(result.release_date || result.first_air_date).toLocaleString('en-us', {month: 'long', day:'numeric', year:'numeric'})}
              </span>
            </p>
            <div 
              className='rating modal-middle font-semibold my-0.5'
            >
              Score: 
              <div 
                className="badge badge-neutral badge-lg mx-2 font-normal"
              >
                {result.vote_average.toFixed(1)}
              </div>
              <svg 
                className="w-5 h-5 text-yellow-300 me-2" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 22 20"
              >
                <path 
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
            <div 
              className='flex font-semibold my-0.5'
            >
              Votes: 
              <div 
                className='badge badge-neutral badge-lg mx-2 font-normal'
              >
                {result.vote_count}
              </div>
              <div 
                className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-1"
              >
                <svg 
                  className="absolute w-8 h-8 text-gray-400 -left-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                    clipRule="evenodd"
                  >
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div 
        className='font-bold text-center'
      >
        Similar Movies
{/*         <div 
          className='2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 sm:grid text-center p-8'
        >
          {dataSim.map((movie) => {
          const path = movie.backdrop_path || movie.poster_path;
          const url = getImageUrl(path);

            return (
              <div 
                key={movie.id} 
                className='m-2'
              >
                <Link 
                  href={`/movie/${movie.id}`}
                >
                  {Boolean(path) && 
                    <Image 
                      src={url} 
                      width={200} 
                      height={200} 
                      className='rounded-lg w-full' 
                      style={{maxHeight: '100px'}} alt={''}
                    />
                  }
                  <h1 
                    className='text-lg font-normal'
                  >
                    {movie.title || movie.name}
                  </h1>
                </Link>
              </div>
            )
          })
          }
        </div> */}
      </div>
    </div>
  )
}
