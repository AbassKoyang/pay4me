
const Testimonial = () => {
  return (
    <section className='bg-secondarygray w-full md:h-[500px] flex justify-center px-6 md:px-12 py-12 mt-6 md:mt-0'>
        <div className='w-full md:h-full max-w-[1400px] md:grid md:grid-cols-3 md:px-12'>
            <div className='col-span-1'>
                <h1 className='text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] md:max-w-[563px]'>Trusted <span className='relative'>by <br/><div className='absolute right-[-100px] md:right-[-120px] top-3 md:top-5 w-[50px] h-[5px] md:w-[100px] md:h-[10px] bg-primarygreen' /></span> thousands of students and immigrants around the world</h1>
            </div>
            <div className='col-span-2 flex flex-col md:flex-row md:justify-end gap-5 h-fit md:h-full mt-6 md:mt-0'>
                <div className='group box-1 rounded-xl md:ms-24 w-full md:w-[20%] md:hover:w-[60%] h-[400px] md:h-full relative transition-all duration-500 ease-in-out'>
                    <img src='/src/assets/images/man.jpg' className='z-10 w-full md:scale-[3] group-hover:scale-[1] object-center absolute top-[50%] translate-y-[-50%] left-0 transition-all duration-500 ease-in-out' />
                    <button className='md:opacity-0 group-hover:opacity-100 w-[60px] h-[60px] rounded-full bg-primarygreen flex items-center justify-center  absolute z-20 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] animate-pulse transition-all duration-500 ease-in-out'>
                        <img src='/src/assets/images/video-circle.png' className='scale-[0.7]' />
                    </button>
                    <div className='z-20 absolute bottom-[5%] left-[5%] md:translate-x-[-150px] group-hover:translate-x-[0px] transition-all duration-500 ease-in-out'>
                        <h4 className='text-white text-[28px] leading-[1] font-semibold'>Chizoba Henry</h4>
                        <img src='/src/assets/images/rating.png' className='w-[140px]' />
                    </div>
                </div>
                <div className='group box-1 w-full md:w-[20%] md:hover:w-[60%] h-[400px] md:h-full rounded-xl relative  transition-all duration-500 ease-in-out'>
                    <img src='/src/assets/images/woman-1.jpg' className='w-full md:scale-[3] group-hover:scale-[1] object-center absolute top-[50%] translate-y-[-50%] left-0 transition-all duration-500 ease-in-out' />
                    <button className='md:opacity-0 group-hover:opacity-100 w-[60px] h-[60px] rounded-full bg-primarygreen flex items-center justify-center  absolute z-20 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] animate-pulse transition-all duration-500 ease-in-out'>
                        <img src='/src/assets/images/video-circle.png' className='scale-[0.7]' />
                    </button>
                    <div className='z-20 absolute bottom-[5%] left-[5%] md:translate-x-[-150px] group-hover:translate-x-[0px] transition-all duration-500 ease-in-out'>
                        <h4 className='text-white text-[28px] leading-[1] font-semibold'>Janet Bliss</h4>
                        <img src='/src/assets/images/rating.png' className='w-[140px]' />
                    </div>
                </div>
                <div className='group box-1 w-full md:w-[20%] md:hover:w-[60%] h-[400px] md:h-full rounded-xl relative  transition-all duration-500 ease-in-out'>
                    <img src='/src/assets/images/man-2.jpg' className='w-full md:scale-[3] group-hover:scale-[1] object-center absolute top-[50%] translate-y-[-50%] left-0 transition-all duration-500 ease-in-out' />
                    <button className='md:opacity-0 group-hover:opacity-100 w-[60px] h-[60px] rounded-full bg-primarygreen flex items-center justify-center  absolute z-20 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] animate-pulse transition-all duration-500 ease-in-out'>
                        <img src='/src/assets/images/video-circle.png' className='scale-[0.7]' />
                    </button>
                    <div className='z-20 absolute bottom-[5%] left-[5%] md:translate-x-[-150px] group-hover:translate-x-[0px] transition-all duration-500 ease-in-out'>
                        <h4 className='text-white text-[28px] leading-[1] font-semibold'>Ayo Charles</h4>
                        <img src='/src/assets/images/rating.png' className='w-[140px]' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial