import background1 from '../../../public/images/wall.webp';
import background2 from '../../../public/images/background2.jpeg';
import background3 from '../../../public/images/background3.jpeg';
import background4 from '../../../public/images/background4.jpeg';
import background5 from '../../../public/images/background5.jpeg';
import background6 from '../../../public/images/background6.jpeg';
import Image from "next/image";
import { usePannelContext } from '../../../context/PannelContext';
import { useState } from 'react';

const ChooseWall = ( ) => {
  
    const { SetChooseWallHandler ,
        SetBackgroundHandler,
        SetHeaderNameHandler  ,
        SetChooseFontHandler  } = usePannelContext();
  
        const [index , SetIndex] = useState(0);
        
        const backgrounds = [ 
        background1 ,
        background2 ,
        background3 , 
        background4 ,
        background5 ,
        background6 ,
    ]
  

    const nextButtonStyle = "p-1 mt-[2rem] md:mt-1 w-3/12 boxShadow  cursor-pointer bg-gradient-to-r from-[#c4531f] to-[#ac3361] font-[monospace] text-white m-auto my-[1.5rem] rounded-[15px] md:w-4/12  transition-all duration-200 tracking-[1px] text-[1.25rem] hover:scale-110";

    
  return (
<>
<div className="CHOOSE-BACKGROUND-CONTAINER flex h-[20rem] p-[1rem] fadeAnimation ">
    
{ index > 0 && <p onClick={() =>{ SetIndex(index - 1) ; SetBackgroundHandler(backgrounds[index-1]) }} className='mt-[8rem]  md:mt-[4rem]  h-[2.5rem] w-[2.5rem] rounded-[50%] p-2 boxShadow text-center bg-[#2c2c2c]  cursor-pointer hover:scale-110 transition-all duration-200 mx-2 md:mr-2'>{`<`} </p>}
    <div className='w-[90%] md:w-[95%] h-[15rem] md:h-[10rem] mt-[1rem] mx-auto' > <Image src={backgrounds[index]} className='boxShadow rounded-[10px] transition-all duration-200 fadeAnimation' /></div>
    { index < backgrounds.length - 1  && <p onClick={() =>{ SetIndex(index + 1);SetBackgroundHandler(backgrounds[index + 1]) }} className=' mt-[8rem] md:mt-[4rem] h-[2.5rem] w-[2.5rem] rounded-[50%] p-2 boxShadow text-center bg-[#2c2c2c] cursor-pointer hover:scale-110 transition-all duration-200 mx-2 md:ml-2'> {`>`} </p>}
</div>
<button onClick={() => {SetChooseWallHandler(false); SetChooseFontHandler(true); SetHeaderNameHandler('Font ')}} className={nextButtonStyle}> Next </button>
</> 
)
}

export default ChooseWall;