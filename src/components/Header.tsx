import Button from './Button';
import {useState} from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='w-full h-fit md:h-20 flex items-center justify-center bg-transparent fixed top-3 md:top-0 left-0 z-[1000]'>
      <header className='flex flex-col items-center justify-center w-[95%] max-w-[1400px] h-fit md:h-16 bg-black rounded-xl px-2 md:px-6 py-[14px] md:py-[19px]'>
          <div className='w-full h-full flex items-center justify-between'>
          <a className='flex items-center gap-2' href="#">
              <img src='/src/assets/images/Logo.png' />
              <p className='text-sm text-white font-poppins font-bold'>Pay4Me App</p>
          </a>
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              <li>
                <a href='#' className='text-white text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-white/70 text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='text-white/70 text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-white/70 text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  Support
                </a>
              </li>
            </ul>
          </nav>

          <Button text='Download App' containerClass='!bg-white hidden md:flex' />

          <button onClick={()=> setIsMenuOpen((prev) => !prev)} className='flex md:hidden flex-col items-center gap-1'>
            <div className={`w-10 h-[2.5px] bg-white rounded-full ${isMenuOpen ? 'rotate-[45deg]' : ''} transition-all duration-300 ease-in-out`} />
            <div className={`w-10 h-[2.5px] bg-white rounded-full ${isMenuOpen ? 'rotate-[-45deg]' : ''} transition-all duration-300 ease-in-out`} />
          </button>
          </div>

          {/* Mobile Menu */}
          <nav className={`${isMenuOpen ? 'mt-3 h-fit overflow-auto opacity-100' : 'mt-0 h-0 overflow-hidden opacity-0'} transition-all duration-300 ease-in-out`}>
          <ul className='flex flex-col items-center gap-4'>
              <li>
                <a href='#' className='text-white text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-white/70 text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='text-white/70 text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-white/70 text-sm font-normal font-poppins hover:text-white transition-all duration-200 ease-in-out'>
                  Support
                </a>
              </li>
            </ul>
            <Button text='Download App' containerClass='!bg-white flex md:hidden mt-3 !w-full' />
          </nav>
      </header>
    </div>
  )
}

export default Header