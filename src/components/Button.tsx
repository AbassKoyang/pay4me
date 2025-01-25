import { IoArrowForwardCircle } from "react-icons/io5";

const Button = ({text, containerClass} : {text: string; containerClass: string;}) => {
  return (
    <button className={`text-black text-sm md:text-md font-semibold md:font-[650] font-poppins bg-primarygreen px-4 py-1.5 rounded-full flex items-center justify-center gap-2 ${containerClass}`}>
        <span>{text}</span>
        <IoArrowForwardCircle className='text-[22px] rotate-[-45deg] text-black m-0 p-0' />
    </button>
  )
}

export default Button