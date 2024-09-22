'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavBar = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div className='navbar justify-center bg-yellow-400 text-black'>
        <a href='/?genre=trending' className={`btn btn-ghost text-xl hover:bg-transparent ${genre === 'trending' ? 'underline underline-offset-8 decoration-2' : ''}`}>Trending</a>
        <a href='/?genre=topRated' className={`btn btn-ghost text-xl hover:bg-transparent ${genre === 'topRated' ? 'underline underline-offset-8 decoration-2' : ''}`}>Top Rated</a>
    </div>
  )
}

export default NavBar