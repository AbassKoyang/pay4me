
const Footer = () => {
  return (
    <footer className='w-full h-fit w-full flex justify-center bg-white px-6 md:px-24 py-12'>
        <div className='w-full md:h-[286px] max-w-[1400px] flex flex-col md:flex-row justify-between'>
            <div className='md:h-full flex flex-col justify-between'>
                <div>
                    <a className='flex items-center gap-2' href="#">
                    <img src='/images/Logo.png' />
                    <p className='text-sm text-black font-poppins font-bold'>Pay4Me App</p>
                    </a>
                    <p className='text-xs md:text-[18px] md:leading-[1.3] text-black/60 font-poppins max-w-xs mt-4'>© 2020-2024 Pay4Me, Inc.</p>
                </div>
                <div className='mt-5 md:mt-0 flex items-center gap-2'>
                    <img src='/images/twitter.svg' />
                    <img src='/images/facebook.svg' />
                    <img src='/images/instagram.svg' />
                    <img src='/images/linkedin.svg' />
                </div>
            </div>
            <div className='mt-8 md:mt-0 flex flex-col md:flex-row gap-8 md:gap-14'>
                <div className='flex flex-col gap-5 md:gap-9'>
                    <h4 className='text-[20px] font-semibold text-black'>Company</h4>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>About</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Blog</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>FAQs</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Support</a>
                </div>
                <div className='flex flex-col gap-5 md:gap-9'>
                    <h4 className='text-[20px] font-semibold text-black'>Legal</h4>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Terms of Service</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Order Cancellation aolicy</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Privacy Policy</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>KYC/AML Policy</a>
                </div>
                <div className='flex flex-col gap-5 md:gap-9'>
                    <h4 className='text-[20px] font-semibold text-black'>Resources</h4>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Android Reviews</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>IOS Reviews</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Jobs</a>
                    <a href='#' className='text-[18px] font-semibold text-black/60 hover:text-black'>Testimonials</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer