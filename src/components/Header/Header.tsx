import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="mx-auto flex w-[min(1000px,90%)] py-8">
        <div>
          <div className="">
            <Link to="/portfolio">
              <span className="text-lg font-bold text-text-primary">Arvin</span>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center gap-8 text-text-accent">
          <div className="">
            <Link to="/about">About </Link>
          </div>
           <div className="">
            <Link to="/skills">Skills</Link>
          </div>
          <div className="">
            <Link to="/portfolios">Portfolio</Link>
          </div>
          <div className="">
            <Link to="/experience">Experience</Link>
          </div>
          <div className="">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
