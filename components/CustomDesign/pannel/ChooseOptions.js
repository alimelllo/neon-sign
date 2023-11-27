import { usePannelContext } from "../../../context/PannelContext";

const ChooseOptions = () => {
    
    const {
        SetHeaderNameHandler , SetChooseSizeHandler ,
        SetChooseOptionsHandler,
        SetShowFinalHandler } = usePannelContext();

        const nextButtonStyle = "p-1 w-3/12 boxShadow  cursor-pointer bg-gradient-to-r from-[#c4531f] to-[#ac3361] font-[monospace] text-white m-auto my-[1rem] rounded-[15px] md:w-4/12  transition-all duration-200 tracking-[1px] text-[1.25rem] hover:scale-110";
const orderButtonStyle= 'p-1 hover:scale-110 transition-all duration-200 w-3/12 m-auto  rounded-[15px] md:w-4/12  transition-all duration-200 tracking-[1px] hover:tracking-[1px]  bg-gradient-to-r from-[#0855c9] to-[#5a2d80] font-[monospace] text-[1.25rem]';
    
    return (

        



<>
<div className="CHOOSE-OPTIONS-CONTAINER flex flex-col p-[1rem]  fadeAnimation ">

<div className="w-10/12 flex flex-row pt-[1.5rem] md:pt-[1rem] ml-[1rem] ">
<input type='checkbox' className="ml-[2rem] h-[1.5rem] w-[1.5rem]" />
<p className="ml-[1rem] font-[monospace] text-[1rem] "> Water Proof Neons </p>
</div>
<div className="w-10/12 flex flex-row pt-[1.5rem] md:pt-[1rem] ml-[1rem] ">
<input type='checkbox' className="ml-[2rem] h-[1.5rem] w-[1.5rem]" />
<p className="ml-[1rem] font-[monospace] text-[1rem]"> 10A adabter 220v</p>
</div>
<div className="w-10/12 flex flex-row pt-[1.5rem] md:pt-[1rem] ml-[1rem] ">
<input type='checkbox' className="ml-[2rem] h-[1.5rem] w-[1.5rem] bg-[#5a5a5a]" />
<p className="ml-[1rem] font-[monospace] text-[1rem]"> Rgba Animated Neons</p>
</div>
<div className="w-10/12 flex flex-row pt-[1.5rem] md:pt-[1rem] ml-[1rem] ">
<input type='checkbox' className="ml-[2rem] h-[1.5rem] w-[1.5rem] bg-[#5a5a5a]" />
<p className="ml-[1rem] font-[monospace] text-[1rem]"> Remote control </p>
</div>
<div className="w-10/12 flex flex-row pt-[1.5rem] md:pt-[1rem]  ml-[1rem] ">
<input type='checkbox' className="ml-[2rem] h-[1.5rem] w-[1.5rem] bg-[#5a5a5a]" />
<p className="ml-[1rem] font-[monospace] text-[1rem]"> White Cable </p>
</div>


</div>
<div className="flex flex-row justify-between mt-[2rem] md:mt-[0.75rem]">
<button onClick={() => { SetHeaderNameHandler('Size'); SetChooseSizeHandler(true); SetChooseOptionsHandler(false);} } className={nextButtonStyle}> Back </button>
<button onClick={() => { SetHeaderNameHandler('$ Buy'); SetChooseOptionsHandler(false); SetShowFinalHandler(true); }} className={orderButtonStyle}> Order </button>
</div>
</>
    )
}
export default ChooseOptions;