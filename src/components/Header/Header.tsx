import React from 'react'
import { Link } from 'react-scroll'

function Header() {
  return (
    <header>
      <div className="mx-auto my-8 flex w-[min(1000px,90%)]">
        <div>
          <div className="">
            <a href="">
              <span className="text-lg font-bold text-text-primary">Arvin</span>
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center gap-8 text-text-accent">
          <div className="">
            <Link to="about" smooth={true} className="hover:cursor-pointer">
              About
            </Link>
          </div>
          <div className="">
            <Link to="skills" smooth={true} className="hover:cursor-pointer">
              Skills
            </Link>
          </div>
          <div className="">
            <Link to="portfolio" smooth={true} className="hover:cursor-pointer">
              Portfolio
            </Link>
          </div>
          <div className="">
            <Link
              to="experience"
              smooth={true}
              className="hover:cursor-pointer"
            >
              Experience
            </Link>
          </div>
          <div className="">
            <Link to="contact" smooth={true} className="hover:cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
