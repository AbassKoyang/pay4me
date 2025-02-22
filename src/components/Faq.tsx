import {useState } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
    const [accordionNumber, setAccordionNumber] = useState<number>(1);
    const handleAccordionButtonClick = (number: number) => {
        if(accordionNumber === number){
            setAccordionNumber(0);
        } else {
            setAccordionNumber(number);
        }
    }
    useGSAP(() => {
        const tl = gsap.timeline({
            duration: 0.5,
            scrollTrigger: {
                trigger: '.faq-trigger',
                start: 'top 80%',
            }
        })
        tl.from('.faq-header',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
        })
        tl.from('.faq-cards',{
            y: 50,
            opacity: 0,
            ease: 'power1.inOut',
            stagger: {
                amount: 0.4,
            }
        })
        gsap.from('.faq-arrow',{
            x: -100,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 0.5,
            scrollTrigger: {
                trigger: '.faq-trigger',
                start: 'top 80%',
            }
        })
        gsap.from('.faq-swirl',{
            y: 100,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 0.5,
            scrollTrigger: {
                trigger: '.faq-trigger',
                start: 'top 80%',
            }
        })
    }, [])

    
  return (
    <section className='faq-trigger w-full min-h-screen md:min-h-fit lg:min-h-screen w-full flex justify-center bg-white px-6 lg:px-24 py-24 relative'>
        <div className='w-full max-w-[1400px] flex flex-col md:flex-row md:justify-between'>
            <img src='/images/Ellipse.png' className='faq-swirl absolute bottom-0 left-0 z-0 md:z-0' />

            <div className='faq-header max-w-[445px] relative'>
                <h2 className='text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins'>FAQ</h2>
                <p className='font-normal text-[18px] text-black/80 leading-[1.5] mt-3'>Answers to your most pressing Pay4me App Questions. We've Got you!</p>
                <img src='/images/faq-arrow.svg' className='faq-arrow hidden md:block absolute w-[300px] lg:w-fit top-30 left-0 lg:left-[180px] z-30' />
            </div>
            <div className='flex flex-col gap-5 w-full md:w-[600px] mt-5 md:mt-0 z-30'>
                <div className='faq-cards w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>What is the Pay4me App?</h3>
                        <button onClick={() => handleAccordionButtonClick(1)}>{accordionNumber === 1? (<img src='/images/minus.svg'/>) : (<img src='/images/plus.svg'/>)}</button>
                    </div>
                    <div className={`w-full ${accordionNumber === 1 ? 'h-[140px]' : 'h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
                        <p className='mt-4 text-[18px] leading-[1.3] font-normal text-black/80'>Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad</p>
                    </div>
                </div>
                <div className='faq-cards w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>What is the Payment Processing Timeline of the Pay4me App? </h3>
                        <button onClick={() => handleAccordionButtonClick(2)}>{accordionNumber == 2? (<img src='/images/minus.svg'/>) : (<img src='/images/plus.svg'/>)}</button>
                    </div>
                    <div className={`w-full ${accordionNumber === 2 ? 'h-[140px]' : 'h-0'}  overflow-hidden transition-all duration-300 ease-in-out`}>
                        <p className='mt-4 text-[18px] leading-[1.3] font-normal text-black/80'>Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad</p>
                    </div>
                </div>
                <div className='faq-cards w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>How does the Pay4me App Works?</h3>
                        <button onClick={() => handleAccordionButtonClick(3)}>{accordionNumber == 3? (<img src='/images/minus.svg'/>) : (<img src='/images/plus.svg'/>)}</button>
                    </div>
                    <div className={`w-full ${accordionNumber === 3 ? 'h-[140px]' : 'h-0'}  overflow-hidden transition-all duration-300 ease-in-out`}>
                        <p className='mt-4 text-[18px] leading-[1.3] font-normal text-black/80'>Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad</p>
                    </div>
                </div>
                <div className='faq-cards w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>How do I get Started with the Pay4me App?</h3>
                        <button onClick={() => handleAccordionButtonClick(4)}>{accordionNumber === 4? (<img src='/images/minus.svg'/>) : (<img src='/images/plus.svg'/>)}</button>
                    </div>
                    <div className={`w-full ${accordionNumber === 4 ? 'h-[140px]' : 'h-0'}  overflow-hidden transition-all duration-300 ease-in-out`}>
                        <p className='mt-4 text-[18px] leading-[1.3] font-normal text-black/80'>Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq