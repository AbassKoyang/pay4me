import Button from './Button';
const Why = () => {
  return (
    <section className='w-full min-h-screen w-full flex justify-center bg-secondarygray px-6 md:px-0 py-24'>
        <div className='w-full h-[500px] max-w-[1400px] flex md:px-24'>
            <div className='size-full rounded-2xl overflow-hidden relative'>
                <img src='/src/assets/images/why.jpg' className='scale-[3] md:scale-100 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-10' />
                <div className='size-full bg-black/60 absolute top-0 left-0 z-20' />

                <div className='w-full absolute z-30 flex flex-col items-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'>
                    <h2 className='text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins text-white'>Why we built pay4me</h2>
                    <p className='font-normal text-[16px] md:text-[20px] text-white leading-[1.3] mt-3 text-center max-w-[300px] md:max-w-[850px]'>Pay4Me is a financial technology company making it easier for international students and immigrants to pay their tuition and fees in minutes.</p>
                    <Button text='Play Video' containerClass='mt-5' />
                </div>
            </div>
        </div>
    </ section>
  )
}

export default Why