import Button from './Button'

const PaymentSection = () => {
  return (
    <section className='w-full min-h-screen w-full flex justify-center bg-white py-16 md:py-0'>
        <div className='w-full max-w-[1400px]'>
            <div className='w-full h-fit md:h-[560px] grid grid-cols-0 md:grid-cols-2'>
                <div className='md:col-span-1 relative pl-6 md:pl-12 flex items-center'>
                    <div className=''>
                        <h1 className='text-3xl [md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] md:max-w-[563px]'>
                            Super fast tuition and school fees <span className='relative'>payments <div className='absolute right-0 -bottom-2 md:-bottom-5 w-[50px] h-[5px] md:w-[100px] md:h-[10px] bg-primarygreen' /></span>
                        </h1>
                        <p className='text-xs md:text-[18px] text-black/80 font-poppins max-w-xs md:max-w-[563px] mt-6 md:mt-12'>Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.</p>
                        <Button text='Make a Payment' containerClass='mt-6 md:mt-8' />
                    </div>
                    <img src='/src/assets/images/grid.png' className='w-full absolute top-0 left-0' />
                </div>
                <div className='md:col-span-1 flex items-center justify-center bg-white mt-20 md:mt-0'>
                    <img src='/src/assets/images/universities.png' className='w-[300px] md:w-fit' />
                </div>
            </div>
            <div className='w-full h-fit md:h-[560px] md:grid grid-cols-0 md:grid-cols-2 flex flex-col flex-col-reverse mt-16 md:mt-0'>
                <div className='col-span-1 flex items-center justify-center bg-white mt-24 md:mt-0'>
                    <img src='/src/assets/images/visa.png' className='w-[300px] md:w-fit' />
                </div>
                <div className='col-span-1 relative pl-6 md:pl-12 flex items-center'>
                    <div className=''>
                        <h1 className='text-3xl [md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] md:max-w-[563px]'>
                        Pay for SEVIS, WES, Visa, Applications & <span className='relative'>More<div className='absolute right-0 -bottom-2 md:-bottom-5 w-[50px] h-[5px] md:w-[100px] md:h-[10px] bg-primarygreen' /></span>
                        </h1>
                        <p className='text-xs md:text-[18px] text-black/80 font-poppins max-w-xs md:max-w-[563px] mt-6 md:mt-12'>We help you get closer to your study abroad and relocation goals faster by promptly completing your payment orders for credential evaluation, immigration, and visa purposes.</p>
                        <Button text='Make a Payment' containerClass='mt-6 md:mt-8' />
                    </div>
                    <img src='/src/assets/images/grid.png' className='w-full absolute top-0 left-0' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PaymentSection