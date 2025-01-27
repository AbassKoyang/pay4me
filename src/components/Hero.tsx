import Button from './Button'
const Hero = () => {
  return (
    <section className='bg-secondarygray min-h-screen md:min-h-fit lg:min-h-screen w-screen flex justify-center relative px-6 md:px-12'>
        <img src='/images/swirl1.png' className='absolute left-0 top-0 z-10'/>
        <img src='/images/swirl2.png' className='absolute right-0 top-0 z-10'/>
        <div className='w-full max-w-[1400px] flex flex-col'>
            <div className='flex items-center justify-center flex-col mt-28 md:mt-32 z-20'>
                <h1 className='font-poppins font-semibold text-3xl md:text-[3rem] lg:text-[3rem] text-center leading-[1.2] md:leading-[62px] max-w-md md:max-w-2xl lg:max-w-4xl'>Simplifying Cross-Border Payments for International Students</h1>
                <p className='font-poppins text-xs md:text-[20px] max-w-2xl text-center mt-4 md:leading-[1.2]'>The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</p>
                <Button text='Get Started Now' containerClass='mt-5'/>
                <div className='flex flex-col md:flex-row items-center gap-2 mt-7'>
                    <p className='text-[#9A9A9A] text-xs md:text-md italic'>Trusted by 1000+ students</p>
                    <img src='/images/avatars.png' className='md:scale-[0.8]'/>
                </div>
            </div>

            <div className='z-20 w-full h-[420px] md:h-[520px] flex items-end md:items-start justify-center lg:justify-between relative overflow-hidden'>
                <img src='/images/globe.png' className='scale-x-[1.5] md:scale-100 w-full absolute bottom-0 md:bottom-0 lg:top-0 left-[50%]  translate-x-[-50%]' /> 
                <div className='hidden lg:flex items-center gap-5 z-30 mt-32'>
                    <div className='w-[252px] h-[164px] rounded-lg bg-primarygray p-4'>
                        <img src='/images/card-send.png' className='' />
                        <p className='text-black text-sm leading-[21px] font-medium mt-3'>
                        Send payments quickly to universities, businesses, or government agencies worldwide.
                        </p>
                    </div>
                    <img src='/images/arrow3.png' className='' />
                </div>
                <div className='mt-12 z-30'>
                    <img src='/images/phone.png' className='' />
                </div>
                <div className='hidden lg:flex items-center gap-5 z-30 mt-16'>
                    <img src='/images/arrow2.png' className='' />
                    <div className='w-[252px] h-[164px] rounded-lg bg-primarygray p-4'>
                        <img src='/images/empty-wallet-add.png' className='' />
                        <p className='text-black text-sm leading-[21px] font-medium mt-3'>
                        Easily add funds to your wallet using multiple payment methods.
                        </p>
                    </div>
                </div>

                <div className='w-full h-[80px] md:h-[180px] from-secondarygray via-[rgba(249, 250, 255, 0.9)] to-[rgba(249, 250, 255, 0.5)] absolute bottom-0 left-0 z-40 bg-gradient-to-t' />
            </div>
        </div>
    </section>
  )
}

export default Hero;