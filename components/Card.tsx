import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Card({result}) {
  const path = result.backdrop_path || result.poster_path
	const url = `https://image.tmdb.org/t/p/original/${path}`
  return (
    <div 
      className='p-1 m-1 hover:cursor-pointer hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] hover:scale-105 rounded-xl hover:opacity-75'
    >
      <Link 
        href={`/movie/${result.id}`}
      >
        {!!path && 
          <Image 
            src={url} 
            width={500} 
            height={500} 
            className='rounded-lg' 
            alt={''} 
          />
        }
        <div>
          <h1 
            className='text-lg font-bold'
          >
            {result.title || result.name}
          </h1>
          <p>
            {new Date(result.release_date || result.first_air_date).toLocaleString('en-us', {month: 'long', day:'numeric', year:'numeric'})}
          </p>
          <p className='line-clamp-3'>
            {result.overview}
          </p>
          <div 
            className='flex justify-evenly'
          >
            <div 
              className='rating modal-middle'
            >
              <svg 
                className="w-5 h-5 text-yellow-300 me-1" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 22 20"
              >
                <path 
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
              <div 
                className="badge badge-neutral badge-lg"
              >
                {result.vote_average.toFixed(1)}
              </div>
            </div>
              <div 
                className='flex'
              >
                <div 
                  className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-1"
                >
                  <svg 
                    className="absolute w-8 h-8 text-gray-400 -left-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg">
                      <path 
                        fillRule="evenodd" 
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                        clipRule="evenodd"
                      >
                      </path>
                  </svg>
                </div>
                <div 
                  className="badge badge-neutral badge-lg"
                >
                  {result.vote_count}
                </div>
              </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
