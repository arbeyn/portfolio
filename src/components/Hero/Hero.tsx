import React from 'react'

function Hero() {
  return (
    <div className=" mb-12 flex grow items-center shadow-lg shadow-[#2A2D33]">
      <div className="mx-auto -mt-44 w-[min(1000px,90%)]">
        <h1 className="mb-4">
          <span className="text-3xl font-extralight text-white"> I&apos;M</span>
          <span className="font-display text-6xl text-text-primary">
            {' '}
            Arvin Bajande
          </span>
        </h1>
        <p className="text-2xl font-light text-white">
          Third Year Software Engineering Student
        </p>
      </div>
    </div>
  )
}

export default Hero
