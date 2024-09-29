'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 
        className='text-xl font-bold text-center'
      >
        Something went wrong
      </h2>
    </div>
  )
}