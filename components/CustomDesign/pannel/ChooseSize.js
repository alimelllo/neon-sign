import { usePannelContext } from "../../../context/PannelContext";

const ChooseSize = () => {

    const {
        SetHeaderNameHandler ,
        SetChooseColorHandler , 
        SetChooseSizeHandler ,
        SetSizeHandler , SetChooseOptionsHandler
        } = usePannelContext();

        const nextButtonStyle = "p-1 w-3/12 boxShadow  cursor-pointer bg-gradient-to-r from-[#c4531f] to-[#ac3361] font-[monospace] text-white m-auto my-[1rem] rounded-[15px] md:w-4/12  transition-all duration-200 tracking-[1px] text-[1.25rem] hover:scale-110";
        const sizeItemStyle = "w-5/12 font-[monospace] text-[1.25rem] hover:scale-110 transition-all duration-200 mx-auto text-center bg-gradient-to-r from-[#3d3c96] to-[#9e2ddf]  m-[0.5rem] md:text-[0.75rem] p-[1rem] md:p-[0.75rem] cursor-pointer rounded-[10px]";


    return (
<>
<div className="CHOOSE-SIZE-CONTAINER flex flex-wrap p-[1rem] fadeAnimation ">
<button onClick={() => SetSizeHandler('68 Cm','78 Cm', true)}  className={sizeItemStyle}><p className="text-white"> 66 x 78 Cm</p></button>
<button onClick={() => SetSizeHandler('76 Cm','98 Cm',true)}   className={sizeItemStyle}><p className="text-white"> 76 x 98 Cm</p></button>
<button onClick={() => SetSizeHandler('95 Cm','120 Cm',true)}  className={sizeItemStyle}><p className="text-white"> 95 x 120 Cm</p></button>
<button onClick={() => SetSizeHandler('115 Cm','145 Cm',true)} className={sizeItemStyle}><p className="text-white"> 115 x 145 Cm</p></button>
<button onClick={() => SetSizeHandler('130 Cm','170 Cm',true)} className={sizeItemStyle}><p className="text-white"> 130 x 170 Cm</p></button>
<button onClick={() => SetSizeHandler('180 Cm','200 Cm',true)} className={sizeItemStyle}><p className="text-white"> 180 x 200 Cm</p></button>
</div>

<div className="flex flex-row justify-between mt-[2rem]">
<button onClick={() => { SetHeaderNameHandler(' Colors   '); SetChooseColorHandler(true); SetChooseSizeHandler(false) ; SetSizeHandler('' , '' , false)}} className={nextButtonStyle}> Back </button>
<button onClick={()=> {  SetHeaderNameHandler('Accesories '); SetChooseSizeHandler(false); SetChooseOptionsHandler(true); } } className={nextButtonStyle}> Next </button>
</div>
</> 
    )
}

export default ChooseSize;