import Button from './Button';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Why = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.5,
      scrollTrigger: {
          trigger: '.why-trigger',
          start: 'top 80%',
      }
    });
    tl.from('.why-header',{
        y: 50,
        opacity: 0,
        ease: 'power1.inOut',
    })
    tl.from('.why-desc',{
        y: 50,
        opacity: 0,
        ease: 'power1.inOut',
    })
    tl.from('.why-button',{
        y: 50,
        opacity: 0,
        ease: 'power1.inOut',
    })
}, [])

  return (
    <section className='why-trigger w-full min-h-screen md:min-h-fit lg:min-h-screen w-full flex items-center justify-center bg-secondarygray px-6 md:px-0 py-24'>
        <div className='w-full h-[500px] max-w-[1400px] flex md:px-24 items-center justify-center'>
            <div className='size-full rounded-2xl overflow-hidden relative'>
                <img src='/images/why.jpg' className='scale-[3] md:scale-[2] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-10' />
                <div className='size-full bg-black/60 absolute top-0 left-0 z-20' />

                <div className='w-full absolute z-30 flex flex-col items-center left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] px-6 md:px-12 lg:px-0'>
                    <h2 className='why-header text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins text-white text-center'>Why we built pay4me</h2>
                    <p className='why-desc font-normal text-[16px] md:text-[20px] text-white leading-[1.3] mt-3 text-center max-w-[300px] md:max-w-[850px]'>Pay4Me is a financial technology company making it easier for international students and immigrants to pay their tuition and fees in minutes.</p>
                    <Button text='Play Video' containerClass='why-button mt-5' />
                </div>
            </div>
        </div>
    </ section>
  )
}

export default Why