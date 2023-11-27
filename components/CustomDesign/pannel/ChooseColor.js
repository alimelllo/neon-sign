import { usePannelContext } from "../../../context/PannelContext";

const ChooseColor = () => {

    const { 
        SetHeaderNameHandler ,
        SetChooseFontHandler , 
         SetChooseColorHandler , 
        SetColorHandler , setPlexiHandler  , 
        setBorderHandler  ,SetChooseSizeHandler  } = usePannelContext();

    const nextButtonStyle = "p-1 w-3/12 boxShadow  cursor-pointer bg-gradient-to-r from-[#c4531f] to-[#ac3361] font-[monospace] text-white m-auto my-[1.5rem] rounded-[15px] md:w-4/12  transition-all duration-200 tracking-[1px] text-[1.25rem] hover:scale-110";


return (
<>
<p className="my-[0.75rem] md:my-[0.25rem] tracking-[1px] text-[1rem] ml-[3rem] md:ml-[1.5rem]">Neon Color :  </p>
<div className="CHOOSE-COLOR-CONTAINER flex flex-wrap justify-between boxShadow p-[0.5rem] md:p-[0.5rem] fadeAnimation gradientBorder  w-10/12 md:w-11/12 mx-auto ">
   <button onClick={() => SetColorHandler('text-[#0080ff] color1')} className="w-[1.5rem] h-[1.5rem] bg-[#0080ff] activeBorder rounded-[50%] cursor-pointer opacity-[0.8]"></button>
   <button onClick={() => SetColorHandler('text-[#ff00aa] color2')} className="w-[1.5rem] h-[1.5rem] bg-[#ff00aa] activeBorder rounded-[50%] cursor-pointer opacity-[0.8]"></button>
   <button onClick={() => SetColorHandler('text-[#ff0062] color4')} className="w-[1.5rem] h-[1.5rem] bg-[#ff0062] activeBorder rounded-[50%] cursor-pointer opacity-[0.8]"></button>
   <button onClick={() => SetColorHandler('text-[#f0f0f0] color5')} className="w-[1.5rem] h-[1.5rem] bg-[#ffffff] activeBorder rounded-[50%] cursor-pointer opacity-[0.8]"></button>
   <button onClick={() => SetColorHandler('text-[#15eb47] color6')} className="w-[1.5rem] h-[1.5rem] bg-[#15eb47] activeBorder rounded-[50%] cursor-pointer opacity-[0.8]"></button>
   <button onClick={() => SetColorHandler('text-[#d017f6] color7')} className="w-[1.5rem] h-[1.5rem] bg-[#d017f6] activeBorder rounded-[50%] cursor-pointer opacity-[0.8]"></button>
   <button onClick={() => SetColorHandler('text-[#12f7e4] color8')} className="w-[1.5rem] h-[1.5rem] bg-[#12f7e4] activeBorder rounded-[50%] cursor-pointer opacity-[0.8]"></button>
</div>

<p className="my-[0.75rem] md:my-[0.25rem] tracking-[1px] text-[1rem] ml-[3rem] md:ml-[1.5rem]">BackGround :  </p>

<div className="w-10/12 flex flex-row p-[0.5rem] boxShadow mx-auto md:w-11/12 justify-around gradientBorder fadeAnimation ">
<button onClick={() => setPlexiHandler('glassMorphism_glass')} className="h-[1.5rem] activeBorder w-[1.5rem]  glassMorphism bg-[#bdbdbd] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setPlexiHandler('glassMorphism_black')} className="h-[1.5rem] activeBorder w-[1.5rem]  glassMorphism bg-[#2c2c2c] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setPlexiHandler('glassMorphism_pink')} className="h-[1.5rem] activeBorder w-[1.5rem]  glassMorphism bg-[#f158ff] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setPlexiHandler('glassMorphism_purple')} className="h-[1.5rem] activeBorder w-[1.5rem]  glassMorphism bg-[#8011c0] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setPlexiHandler('glassMorphism_green')} className="h-[1.5rem] activeBorder w-[1.5rem]  glassMorphism bg-[#37c96f] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setPlexiHandler('glassMorphism_blue')} className="h-[1.5rem] activeBorder w-[1.5rem]  glassMorphism bg-[#2c8fff] rounded-[50%] cursor-pointer"></button>
</div>
<div className="w-10/12 flex flex-row  mt-[1rem] mx-auto">
<p className=" text-[1rem] tracking-[1px]">Round Neon : </p>

</div>
 <div className="w-10/12 flex flex-row p-[0.5rem] boxShadow md:p-[0.5rem] mt-[0.5rem] mx-auto md:w-11/12 justify-around fadeAnimation gradientBorder">
<button onClick={() => setBorderHandler('border_pink')} className="h-[1.5rem] activeBorder w-[1.5rem] glassMorphism bg-[#e41bff] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setBorderHandler('border_blue')} className="h-[1.5rem] activeBorder w-[1.5rem] glassMorphism bg-[#2294ff] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setBorderHandler('border_green')} className="h-[1.5rem] activeBorder w-[1.5rem] glassMorphism bg-[#51db86] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setBorderHandler('border_purple')} className="h-[1.5rem] activeBorder w-[1.5rem] glassMorphism bg-[#7108c7] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setBorderHandler('border_red')} className="h-[1.5rem] activeBorder w-[1.5rem] glassMorphism bg-[#c70851] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setBorderHandler('border_yellow')} className="h-[1.5rem] activeBorder w-[1.5rem] glassMorphism bg-[#f7e012] rounded-[50%] cursor-pointer"></button>
<button onClick={() => setBorderHandler('border_white')} className="h-[1.5rem] activeBorder w-[1.5rem] glassMorphism bg-[#fafafa] rounded-[50%] cursor-pointer"></button>
</div> 

<div className="flex flex-row justify-between mt-[2rem] md:mt-1">
<button onClick={() => { SetHeaderNameHandler( ' Font '); SetChooseFontHandler(true); SetChooseColorHandler(false); }} className={nextButtonStyle} > Back </button>
<button onClick={() => { SetChooseSizeHandler(true) ; SetChooseColorHandler(false);  SetHeaderNameHandler(' Size  ')} }  className={nextButtonStyle} > Next </button>
</div>
</> 
)

}

export default ChooseColor;