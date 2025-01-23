import Button from './Button'


const Header = () => {
  return (
    <div className='w-full h-20 flex items-center justify-center bg-transparent fixed top-0 left-0 z-[1000]'>
      <header className='flex items-center justify-between w-[95%] h-16 bg-black rounded-xl px-6 py-[19px]'>
          <a className='flex items-center gap-2' href="#">
              <img src='/src/assets/images/Logo.png' />
              <p className='text-sm text-white font-poppins font-bold'>Pay4Me App</p>
          </a>
          <nav>
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
          <Button text='Download App' containerClass='!bg-white' />
      </header>
    </div>
  )
}

export default Header