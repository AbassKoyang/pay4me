import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Download = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
          duration: 0.5,
          scrollTrigger: {
              trigger: '.download-trigger',
              start: 'top 80%',
          }
        });
        tl.from('.download-header',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        tl.from('.download-desc',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        tl.from('.download-button',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        gsap.from('.download-image',{
            y: 150,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.download-trigger',
                start: 'top 80%',
            }
        })
    }, [])

  return (
    <section className='download-trigger w-full min-h-fit lg:min-h-screen w-full flex justify-center bg-white px-6 md:px-0 md:py-12 lg:py-24'>
        <div className='w-full h-[600px] md:h-[500px] max-w-[1400px] flex md:px-12 lg:px-24'>
            <div className='size-full rounded-2xl overflow-hidden relative bg-secondarygray p-6 md:p-12 pb-0 flex flex-col md:flex-row justify-between'>
                <div className='z-20'>
                    <h2 className='download-header text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] md:max-w-[563px]'>Download the Pay4Me App</h2>
                    <p className='download-desc text-xs md:text-[18px] md:leading-[1.4] text-black/80 font-poppins max-w-xs md:max-w-[563px] mt-3'>Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.</p>

                    <div className='download-button flex gap-3 mt-8'>
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

                <div className='download-image z-20 relative md:h-full mt-6 md:mt-0 flex flex-col justify-end'>
                    <img src='/images/device-2.png' className='md:w-[600px] lg:w-fit' />
                    <img src='/images/qr.png' className='hidden lg:block absolute left-[-130px] bottom-0 md:w-fit' />
                </div>

                <img src='/images/Ellipse-2.png' className='absolute bottom-0 left-0 z-10' />
            </div>
        </div>
    </ section>
  )
}

export default Download