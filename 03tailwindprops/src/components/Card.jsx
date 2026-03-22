import React from 'react'

function Card({username, year="2025"}) {
    
    console.log(username)
    console.log(year)
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl border-2 border-amber-50">
          <div>
            <img
              className="size-48 shadow-xl rounded-md"
              alt=""
              src="https://images.pexels.com/photos/36528379/pexels-photo-36528379.jpeg"
            />
          </div>
          <div className="flex items-center md:items-start">
            <span className="text-2xl font-medium">{username}</span>
            <span className="font-medium text-sky-500">The Anti-Patterns</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
              <span>No. 4</span>
              <span>·</span>
              <span>{year}</span>
            </span>
          </div>
        </div>
  )
}

export default Card