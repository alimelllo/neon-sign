import homeIcon from '../../public/images/homeicon.png';
import shopingcart from '../../public/images/shopingcart.png';
import searchIcon from '../../public/images/searchicon.png';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import { useShopContext } from '../../context/ShopContext';
import backIcon from '../../public/images/back.png';

const Header = () => {

   const { showProduct , SetShowProductHandler , basket} = useShopContext();

 return (
    <div className="HEADER-CONTAINER  flex flex-row  p-[1rem] md:py-[0.5rem] justify-around boxShadow border-b-[1px] border-solid border-[#3b3b3b]">
    
    <div className="HEADER-CELL w-[35%] flex flex-row TopAnimation md:w-[20%]">
    {!showProduct && <Link href='/'><div className='w-[3.5rem] h-[3.5rem] transition-all duration-200 hover:scale-110 boxShadow p-2 md:w-[80%] bg-gradient-to-r from-[#5d25f7] to-[#9b19e7] shadow-2xl cursor-pointer  rounded-[1rem]'><Image src={homeIcon}/></div></Link>}
   {showProduct && <div onClick={()=> SetShowProductHandler(false)} className="  hover:scale-110  font-[monospace] p-[1.25rem] w-[15%] md:w-full cursor-pointer transition-all duration-200"><Image src={backIcon}/></div>}
    </div>
      
    
    <div className="HEADER-CELL w-[25%] md:w-[15%] mx-auto md:mr-[1rem]">
    <p className="text-center text-[2rem] font-[300] tracking-[1px] pt-[0.5rem]  text-[#ffffffab] font-mono sm:text-[1.5rem]  ">Shop</p>
    </div>
    
    <div className="HEADER-CELL w-[35%] flex flex-row justify-end TopAnimation md:w-[60%]">
    <div className="ml-[1rem] hoverEffect  font-[monospace] p-[1.25rem] w-[15%] md:w-[30%] cursor-pointer transition-all duration-200 "><Image src={searchIcon}/></div>
    <Link href='./ShopingCart'><div onClick={() => SetShowProductHandler(false)} className="ml-[1rem] p-2  w-[3.5rem] h-[3.5rem]   boxShadow z-20 rounded-[1rem] bg-gradient-to-r from-[#5d25f7] to-[#9b19e7] shadow-2xl cursor-pointer relative transition-all duration-200"><Image src={shopingcart}/><span className={`bg-[#b93333] font-[monospace] text-[1rem] rounded-[20px] absolute px-2 left-[70%] bottom-[70%] boxShadow text-white`}>{basket.length}</span></div></Link>
    </div>
     
    
    </div>

 )
}

export default Header;