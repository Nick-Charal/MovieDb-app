import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:grid text-center p-5'>
        {
          results.map((result) => (
              <Card key={result.id} result={result}/>
          ))
        }
    </div>
  )
}
