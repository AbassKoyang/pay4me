

const Sponsors = () => {
  return (
    <div className='w-full flex justify-center bg-secondarygray px-6 md:px-12 mt-7 pb-16 md:pb-28 relative'>
        <div className='w-full max-w-[1400px] flex flex-col justify-center items-center'>
            <div className='h-full w-[80px] md:w-[120px] bg-gradient-to-r from-secondarygray via-[rgba(249, 250, 255, 0.5)] to-[rgba(249, 250, 255, 0.5)] absolute top-0 left-0 z-20' />
            <div className='h-full w-[80px] md:w-[120px] bg-gradient-to-l from-secondarygray via-[rgba(249, 250, 255, 0.5)] to-[rgba(249, 250, 255, 0.5)] absolute top-0 right-0 z-20' />
            <div className='sponsors-container-1 w-full md:w-[85%] flex items-center justify-center gap-6 md:gap-16'>
                <img src='/images/image 15monify.png' className='w-16 md:w-fit'/>
                <img src='/images/image 5across.png' className='w-16 md:w-fit'/>
                <img src='/images/image 6mpower.png' className='w-16 md:w-fit'/>
                <img src='/images/image 7prodigy.png' className='w-16 md:w-fit'/>
                <img src='/images/image 8techstar.png' className='w-16 md:w-fit'/>
            </div>
            <div className='sponsors-container-2 w-full md:w-[85%] flex items-center justify-center gap-4 md:gap-16 mt-8 md:mt-16'>
                <img src='/images/image 16seerbit.png' className='w-16 md:w-fit'/>
                <img src='/images/image 17verto.png' className='w-16 md:w-fit'/>
                <img src='/images/image 9stripe.png' className='w-16 md:w-fit'/>
                <img src='/images/image 10paystack.png' className='w-16 md:w-fit'/>
                <img src='/images/image 11providus.png' className='w-16 md:w-fit'/>
                <img src='/images/image 18smile.png' className='w-16 md:w-fit'/>
            </div>
        </div>
    </div>
  )
}

export default Sponsors