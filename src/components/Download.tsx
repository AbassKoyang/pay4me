
const Download = () => {
  return (
    <section className='w-full min-h-screen w-full flex justify-center bg-white px-6 md:px-0 py-24'>
        <div className='w-full md:h-[500px] max-w-[1400px] flex md:px-24'>
            <div className='size-full rounded-2xl overflow-hidden relative bg-secondarygray p-6 md:p-12 pb-0 flex flex-col md:flex-row justify-between'>
                <div className='z-20'>
                    <h2 className='text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] md:max-w-[563px]'>Download the Pay4Me App</h2>
                    <p className='text-xs md:text-[18px] md:leading-[1.4] text-black/80 font-poppins max-w-xs md:max-w-[563px] mt-3'>Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.</p>

                    <div className='flex gap-3 mt-8'>
                        <button className='p-1 bg-black rounded-md flex gap-3 items-center'>
                            <img src='/images/Playstore.svg' className='size-8' />
                            <p className='text-white flex flex-col items-start'>
                                <span className='text-[10px]'>GET It ON</span>
                                <span className='text-sm font-semibold'>Google Play</span>
                            </p>
                        </button>
                        <button className='p-1 bg-black rounded-md flex gap-3 items-center'>
                            <img src='/images/Apple.svg' className='size-8' />
                            <p className='text-white flex flex-col items-start'>
                                <span className='text-[10px]'>Download on the</span>
                                <span className='text-sm font-semibold'>App Store</span>
                            </p>
                        </button>
                    </div>
                </div>

                <div className='z-20 relative md:h-full mt-6 md:mt-0 flex flex-col justify-end bg-blue-100'>
                    <img src='/images/device-2.png' className='md:w-fit' />
                    <img src='/images/qr.png' className='hidden md:block absolute left-[-130px] bottom-0 md:w-fit' />
                </div>

                <img src='/images/ellipse-2.png' className='absolute bottom-0 left-0 z-10' />
            </div>
        </div>
    </ section>
  )
}

export default Download