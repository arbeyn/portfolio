import React from 'react'

function Header(about) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
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
            <a href="#" onClick={() => scrollToSection(about)}>
              About
            </a>
          </div>
          <div className="">
            <a href="">Portfolio</a>
          </div>
          <div className="">
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
