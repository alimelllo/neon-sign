import { usePannelContext } from "../../../context/PannelContext";
import CountUp from 'react-countup';

const Final = () => {

    const { Text , font , height , width , SetChooseOptionsHandler , SetShowFinalHandler , SetHeaderNameHandler } = usePannelContext();
   
    const nextButtonStyle = "p-1 w-3/12 boxShadow cursor-pointer bg-gradient-to-r from-[#c4531f] to-[#ac3361] font-[monospace] text-white m-auto my-[0.5rem] rounded-[15px] md:w-4/12  transition-all duration-200 tracking-[1px] text-[1.25rem] hover:scale-110";

    return (
        <>
    <div className="FINAL-FACTOR flex flex-col p-[1rem] fadeAnimation  rounded-[10px]">
     <div className="flex flex-row justify-between">
        <p className="text-[white] font-[600] tracking-[1px]">{`FONT : ${font}`}</p>
          <div className="flex flex-row">
          <p className="text-[rgb(255,255,255)] font-[600] tracking-[1px]">{`Colors `}</p>
          <span className={`w-[1.5rem] h-[1.5rem] bg-[#1498f0] mx-[1rem] rounded-[50%]`}></span>
       </div>
     </div>

<p className="text-[white] font-[600] tracking-[1px] mt-[1rem] flex flex-row">TEXT : <p className=" text-[#b5c6ff] font-normal ml-[2rem] ">{Text}</p></p>
<p className="text-[white] font-[600] tracking-[1px] mt-[1rem] flex flex-row">SIZE : <p className=" text-[#b5c6ff] font-normal md:px-[2rem] md:text-[0.75rem] ml-[2rem] px-[1rem] py-1 rounded-[10px] border-[1px] border-solid border-[#7291f7]">{`${height} X ${width}`}</p></p>
<p className="text-[white] font-[600] tracking-[1px] mt-[1rem] flex flex-row">ACCESORIES  : <p className=" text-[#b5c6ff] font-normal ml-[2rem] ">Water Proof </p> </p>
<div className="flex flex-row mt-[2rem] "><p className="text-[white] font-[600] tracking-[1px] pt-[1rem] md:pt-[0.5rem]">PRICE  : </p><p className=" text-[#ffffff] font-[600]   mx-auto rounded-[10px]  text-[1.5rem] md:text-[1rem]  border-[1px] w-6/12 md:w-8/12 text-center border-solid border-[#c04a13] bg-[#11141d] py-2 font-[serif]"><CountUp end={1200000}  duration={3} className='tracking-[5px]'/> T  </p></div>
<div className="flex flex-row mt-[2rem] md:mt-[1rem]">
<button onClick={() => { SetHeaderNameHandler( 'Accesories '); SetChooseOptionsHandler(true); SetShowFinalHandler(false); }} className={nextButtonStyle} > Back </button>
    <button className='p-1 w-3/12 m-auto  rounded-[15px] md:w-4/12 transition-all duration-200 tracking-[1px] hover:tracking-[1px]  bg-gradient-to-r from-[#0855c9] to-[#5a2d80] font-[monospace] text-[1.25rem] hover:scale-110'> $ BUY </button>
   </div>
   
    </div>
</>
    )
}

export default Final;