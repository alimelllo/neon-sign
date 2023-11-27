import Pannel from "./pannel/Pannel";
import Image from 'next/image';
import background1 from '../../public/images/wall.webp';
import { useState } from "react";
import Draggable from 'react-draggable';
import { usePannelContext } from "../../context/PannelContext";
import Path from "./pannel/Path";


const MainImage = () => {

    const { font , color , plexi , border , size , height , width , Text , background } = usePannelContext();


 const [ textDirection , SetTextDirection] = useState('ltr');

 const finalOrder = {
 font : font ,
 color : color , 
 text : Text , 
 size : `${width} x ${height}` , 
 }

    return (
        <div className="MAIN-IMAGE-CONTAINER flex flex-row md:flex-col m-auto w-full overflow-hidden">
        
        <div className="flex flex-col w-[50%] md:w-[90%] m-auto  ">
        <div className=" my-[2rem] md:my-[1rem] h-[20rem] md:h-[10rem] relative justify-center fadeAnimation">
        <Image src={background ? background : background1} layout='fill' objectFit="cover" className="rounded-[10px]"/>
        
        
         <Draggable bounds={{top: -20, left: -80, right: 180, bottom: 150}}>
         <div className="ml-[5rem] w-full">
        { size && <p className="text-white fadeAnimation text-center mb-[1rem] border-b-[2px] border-b-solid border-b-[#e0e0e0] w-7/12 md:w-8/12 widthAnimation">{width}</p>}
         <pre className={`${font} ${color} ${plexi} ${border} ${textDirection === 'rtl' ? 'rtl' : 'ltr'} select-none md:pt-[0.5rem] md:text-[1.5rem] text-[3rem] min-h-[3.5rem] overflow-hidden w-7/12 md:w-8/12 cursor-pointer rounded-[15px] tracking-[3px] px-[0.5rem] `}>{Text}</pre>
        { size && <p className="text-white fadeAnimation text-right absolute left-[60%] md:left-[70%] bottom-[5%] md:text-[0.8rem] border-l-[3px] h-[3rem] py-[0.5rem] border-l-solid border-l-[#cfcfcf] pl-[0.5rem] md:pl-[0.3rem] heightAnimation">{height}</p>}
         </div>
         </Draggable>
         </div>

         <Path/>
         </div>

        <Pannel final={finalOrder}/>

        </div>
    )
}

export default MainImage;