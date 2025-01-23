import Button from './Button'
const Hero = () => {
  return (
    <section className='bg-secondarygray min-h-screen w-screen flex justify-center relative px-6 md:px-12'>
        <img src='/src/assets/images/swirl1.png' className='absolute left-0 top-0 z-10'/>
        <img src='/src/assets/images/swirl2.png' className='absolute right-0 top-0 z-10'/>
        <div className='w-full max-w-[1400px] flex flex-col'>
            <div className='flex items-center justify-center flex-col mt-32 z-20'>
                <h1 className='font-poppins font-semibold text-[3rem] text-center leading-[62px] max-w-4xl'>Simplifying Cross-Border Payments for International Students</h1>
                <p className='font-poppins text-[20px] max-w-2xl text-center mt-4'>The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</p>
                <Button text='Get Started Now' containerClass='mt-5'/>
                <div className='flex items-center gap-2 mt-7'>
                    <p className='text-[#9A9A9A] text-md italic'>Trusted by 1000+ students</p>
                    <img src='/src/assets/images/avatars.png' className='scale-[0.8]'/>
                </div>
            </div>

            <div className='z-20 w-full h-dvh flex items-start justify-between bg-blue-100 relative'>
                <img src='/src/assets/images/globe.png' className='absolute top-[0%] left-[50%]  translate-x-[-50%]' /> 
                <div className='flex items-center gap-5 z-30 mt-20'>
                    <div className='w-[252px] h-[164px] rounded-lg bg-primarygray p-4'>
                        <img src='/src/assets/images/card-send.png' className='' />
                        <p className='text-black text-lg leading-[21px] font-medium mt-3'>
                        Send payments quickly to universities, businesses, or government agencies worldwide.
                        </p>
                    </div>
                    <img src='/src/assets/images/arrow3.png' className='' />
                </div>
                <div className=' z-30'>
                    <img src='/src/assets/images/phone.png' className='' />
                </div>
                <div className='flex items-center gap-5 z-30 mt-6'>
                    <img src='/src/assets/images/arrow2.png' className='' />
                    <div className='w-[252px] h-[164px] rounded-lg bg-primarygray p-4'>
                        <img src='/src/assets/images/card-send.png' className='' />
                        <p className='text-black text-lg leading-[21px] font-medium mt-3'>
                        Send payments quickly to universities, businesses, or government agencies worldwide.
                        </p>
                    </div>
                </div>

                <div className='w-full h-[180px] bg-blue-100 absolute bottom-0 left-0 z-40' />
            </div>
        </div>
    </section>
  )
}

export default Hero;