import { usePannelContext } from "../../../context/PannelContext";

const Path = () => {

const { chooseFont ,font, chooseColor , color , chooseSize , chooseWall,size , chooseOptions , showFinal} = usePannelContext();

    return (
         <div className="ROAD flex flex-row md:w-[90%]  mx-auto">
             <p className="bg-[#477ee4]  text-white rounded-[20px] px-2 fadeAnimation boxShadow">1</p>
             <span className={`Line w-[3rem] mb-[0.75rem] border-b-[3px] border-b-solid fadeAnimation boxShadow ${chooseFont || chooseColor || chooseSize || chooseOptions || showFinal ? 'border-b-[#4f8cfd]' : 'border-b-[#383838]' }`}></span>
             <p className={` ${chooseFont || chooseColor || chooseSize || chooseOptions || showFinal   ?'bg-[#477ee4]' : 'bg-[#494949]' }  fadeAnimation text-white rounded-[20px] px-2 boxShadow`}>2</p>
             <span className={`Line w-[3rem] mb-[0.75rem] border-b-[3px] border-b-solid fadeAnimation ${chooseColor || chooseSize || chooseOptions || showFinal  ? 'border-b-[#4f8cfd]' : 'border-b-[#383838]' }`}></span>
             <p className={` ${chooseColor || chooseSize || chooseOptions || showFinal ?'bg-[#477ee4]' : 'bg-[#494949]' } fadeAnimation text-white rounded-[20px] px-2 boxShadow`}>3</p>
             <span className={`Line w-[3rem] mb-[0.75rem] border-b-[3px] border-b-solid fadeAnimation ${chooseSize || chooseOptions || showFinal ? 'border-b-[#4f8cfd]' : 'border-b-[#383838]' }`}></span>
             <p className={` ${chooseSize || chooseOptions || showFinal ?'bg-[#477ee4]' : 'bg-[#494949]' } fadeAnimation text-white rounded-[20px] px-2 boxShadow`}>4</p>
             <span className={`Line w-[3rem] mb-[0.75rem] border-b-[3px] border-b-solid fadeAnimation ${chooseOptions || showFinal ? 'border-b-[#4f8cfd]' : 'border-b-[#383838]' }`}></span>
             <p className={` ${chooseOptions || showFinal ?'bg-[#477ee4]' : 'bg-[#494949]' } fadeAnimation text-white rounded-[20px] px-2 boxShadow`}>5</p>
             <span className={`Line w-[3rem] mb-[0.75rem] border-b-[3px] border-b-solid fadeAnimation ${showFinal  ? 'border-b-[#4f8cfd]' : 'border-b-[#383838]' }`}></span>
             <p className={` ${showFinal  ?'bg-[#477ee4]' : 'bg-[#494949]' } fadeAnimation text-white rounded-[20px] px-2`}>6</p>

         </div>
    )
}

export default Path;