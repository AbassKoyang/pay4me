import Button from './Button';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const PaymentSection = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            duration: 0.5,
            scrollTrigger: {
                trigger: '.paymentsection-trigger',
                start: 'top 80%',
            }
        });
        tl.from('.payment-header',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        tl.from('.payment-desc',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        tl.from('.payment-button',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline({
            duration: 0.5,
            scrollTrigger: {
                trigger: '.paymentsection-trigger-2',
                start: 'top 80%',
            }
        });
        tl.from('.payment-header-2',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        tl.from('.payment-desc-2',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        tl.from('.payment-button-2',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
    }, [])
    useGSAP(() => {
        gsap.from('.payment-image',{
            x: 200,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.paymentsection-trigger',
                start: 'top 80%',
            }
        })
        gsap.from('.payment-image-2',{
            x: -200,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.paymentsection-trigger',
                start: 'top 80%',
            }
        })
    }, [])
  return (
    <section className='paymentsection-trigger w-full min-h-screen w-full flex justify-center bg-white px-6 mlg:px-0 py-16 md:py-0'>
        <div className='w-full max-w-[1400px]'>
            <div className='w-full h-fit md:h-[560px] grid grid-cols-0 md:grid-cols-2'>
                <div className='md:col-span-1 relative lg:pl-12 flex items-center'>
                    <div className=''>
                        <h1 className='payment-header text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] md:max-w-[563px]'>
                            Super fast tuition and school fees <span className='relative'>payments <div className='absolute right-0 -bottom-2 md:-bottom-5 w-[50px] h-[5px] md:w-[100px] md:h-[10px] bg-primarygreen' /></span>
                        </h1>
                        <p className='payment-desc text-xs md:text-[18px] md:leading-[2] text-black/80 font-poppins max-w-xs md:max-w-[563px] mt-6 md:mt-12'>Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.</p>
                        <Button text='Make a Payment' containerClass='payment-button mt-6 md:mt-8' />
                    </div>
                    <img src='/images/grid.png' className='w-full absolute top-0 left-0' />
                </div>
                <div className='md:col-span-1 flex items-center justify-end bg-white mt-20 md:mt-0'>
                    <img src='/images/universities.png' className='payment-image w-[300px] lg:w-fit' />
                </div>
            </div>
            <div className='paymentsection-trigger-2 w-full h-fit md:h-[560px] md:grid grid-cols-0 md:grid-cols-2 flex flex-col flex-col-reverse mt-16 md:mt-0'>
                <div className='col-span-1 flex items-center justify-start bg-white mt-24 md:mt-0'>
                    <img src='/images/visa.png' className='w-[300px] lg:w-fit payment-image-2' />
                </div>
                <div className='col-span-1 relative pl-6 md:pl-12 flex items-center'>
                    <div className=''>
                        <h1 className='payment-header-2 text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] md:max-w-[563px]'>
                        Pay for SEVIS, WES, Visa, Applications & <span className='relative'>More<div className='absolute right-0 -bottom-2 md:-bottom-5 w-[50px] h-[5px] md:w-[100px] md:h-[10px] bg-primarygreen' /></span>
                        </h1>
                        <p className='payment-desc-2 text-xs md:text-[18px] md:leading-[2] text-black/80 font-poppins max-w-xs md:max-w-[563px] mt-6 md:mt-12'>We help you get closer to your study abroad and relocation goals faster by promptly completing your payment orders for credential evaluation, immigration, and visa purposes.</p>
                        <Button text='Make a Payment' containerClass='payment-button-2 mt-6 md:mt-8' />
                    </div>
                    <img src='/images/grid.png' className='w-full absolute top-0 left-0' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PaymentSection