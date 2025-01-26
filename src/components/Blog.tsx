import Button from './Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack} from "react-icons/io";
const Blog = () => {
  return (
    <section className='w-full min-h-screen w-full flex justify-center bg-white px-6 md:px-24 py-12'>
        <div className='w-full md:h-[500px] max-w-[1400px] flex flex-col md:flex-row md:items-center justify-between'>
            <div className='w-full md:max-w-[300px] h-fit md:h-full flex flex-col justify-between'>
                <div>
                    <h2 className='text-3xl md:text-[46px] leading-[30px] md:leading-[51px] font-semibold font-poppins max-w-[300px] '>Latest Blog & Resources</h2>
                    <p className='font-normal text-[18px] text-black/80 leading-[1.5] mt-3'>Your Go-To Guide for Pay4Me App: Answers to All Your Questions!</p>
                    <Button text='View All' containerClass='mt-5' />
                </div>

                <div className='flex items-center gap-3 mt-7 md:mt-0 md:mb-5'>
                    <button className='group p-1 hover:bg-primarygreen rounded-full border border-primarygreen'><IoIosArrowRoundBack  className='text-primarygreen group-hover:text-black text-3xl' /></button>
                    <button className='group p-1 hover:bg-primarygreen rounded-full border border-primarygreen'><IoIosArrowRoundForward className='text-primarygreen group-hover:text-black text-3xl' /></button>
                </div>
            </div>
            <div className='overflow-x-auto h-dhv mt-5 md:mt-0'>
                <div className='w-[180vw] md:w-fit flex gap-7'>
                <div className='w-[90vw] md:max-w-[380px]'>
                    <img src='/images/blog-1.png' className='w-[330px] md:w-fit'/>
                    <h3 className='font-semibold text-[19px] text-black/80 leading-[1.3] mt-3 max-w-[330px] md:max-w-380px]'>How to Navigate International Payments for Education Without Stress</h3>
                    <p className='font-normal text-[18px] text-black/80 leading-[1.3] mt-3 max-w-[330px] md:max-w-380px]'>Studying abroad can be an exciting journey, but it comes with its fair share</p>
                    <Button text='Read More' containerClass='mt-7 bg-white border-primarygreen border' />
                </div>
                <div className='w-[90vw] md:max-w-[380px]'>
                    <img src='/images/blog-1.png' className='w-[330px] md:w-fit'/>
                    <h3 className='font-semibold text-[19px] text-black/80 leading-[1.3] mt-3  max-w-[330px] md:max-w-380px]'>How to Navigate International Payments for Education Without Stress</h3>
                    <p className='font-normal text-[18px] text-black/80 leading-[1.3] mt-3  max-w-[330px] md:max-w-380px]'>Studying abroad can be an exciting journey, but it comes with its fair share</p>
                    <Button text='Read More' containerClass='mt-7 bg-white border-primarygreen border' />
                </div>
                </div>
            </div>
        </div>
    </section >
  )
}

export default Blog