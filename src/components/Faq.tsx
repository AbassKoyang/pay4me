import {useState } from 'react';

const Faq = () => {
    const [accordionNumber, setAccordionNumber] = useState<number>(1);
    const handleAccordionButtonClick = (number: number) => {
        if(accordionNumber === number){
            setAccordionNumber(0);
        } else {
            setAccordionNumber(number);
        }
    }
  return (
    <section className='w-full min-h-screen w-full flex justify-center bg-white px-6 md:px-24 py-24 relative'>
        <div className='w-full max-w-[1400px] flex flex-col md:flex-row md:justify-between'>
            <img src='/src/assets/images/Ellipse.png' className='absolute bottom-0 left-0 z-0 md:z-10' />

            <div className='max-w-[445px] relative'>
                <h2 className='text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins'>FAQ</h2>
                <p className='font-normal text-[18px] text-black/80 leading-[1.5] mt-3'>Answers to your most pressing Pay4me App Questions. We've Got you!</p>
                <img src='/src/assets/images/faq-arrow.svg' className='hidden md:block absolute top-30 right-[-100px]' />
            </div>
            <div className='flex flex-col gap-5 w-full md:w-[600px] mt-5 md:mt-0 z-20'>
                <div className='w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>What is the Pay4me App?</h3>
                        <button onClick={() => handleAccordionButtonClick(1)}>{accordionNumber === 1? (<img src='/src/assets/images/minus.svg'/>) : (<img src='/src/assets/images/plus.svg'/>)}</button>
                    </div>
                    <div className={`w-full ${accordionNumber === 1 ? 'h-[140px]' : 'h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
                        <p className='mt-4 text-[18px] leading-[1.3] font-normal text-black/80'>Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad</p>
                    </div>
                </div>
                <div className='w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>What is the Payment Processing Timeline of the Pay4me App? </h3>
                        <button onClick={() => handleAccordionButtonClick(2)}>{accordionNumber == 2? (<img src='/src/assets/images/minus.svg'/>) : (<img src='/src/assets/images/plus.svg'/>)}</button>
                    </div>
                    <div className={`w-full ${accordionNumber === 2 ? 'h-[140px]' : 'h-0'}  overflow-hidden transition-all duration-300 ease-in-out`}>
                        <p className='mt-4 text-[18px] leading-[1.3] font-normal text-black/80'>Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad</p>
                    </div>
                </div>
                <div className='w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>How does the Pay4me App Works?</h3>
                        <button onClick={() => handleAccordionButtonClick(3)}>{accordionNumber == 3? (<img src='/src/assets/images/minus.svg'/>) : (<img src='/src/assets/images/plus.svg'/>)}</button>
                    </div>
                    <div className={`w-full ${accordionNumber === 3 ? 'h-[140px]' : 'h-0'}  overflow-hidden transition-all duration-300 ease-in-out`}>
                        <p className='mt-4 text-[18px] leading-[1.3] font-normal text-black/80'>Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad</p>
                    </div>
                </div>
                <div className='w-full rounded-lg bg-primarygray p-4'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-black text-[19px] font-semibold font-poppins max-w-[250px] md:max-w-fit'>How do I get Started with the Pay4me App?</h3>
                        <button onClick={() => handleAccordionButtonClick(4)}>{accordionNumber === 4? (<img src='/src/assets/images/minus.svg'/>) : (<img src='/src/assets/images/plus.svg'/>)}</button>
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