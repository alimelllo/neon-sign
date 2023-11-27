import homeIcon from '../../public/images/homeicon.png';
import shopingcart from '../../public/images/shopingcart.png';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useShopContext } from '../../context/ShopContext';

const Header = () => {

    const { basket } = useShopContext();


return (

    <div className="HEADER-CONTAINER  flex flex-row  p-[1rem] md:p-[0.5rem] justify-around boxShadow border-b-[1px] border-solid border-[#3b3b3b]">
    
    <div className="HEADER-CELL w-[35%] flex flex-row TopAnimation md:w-[20%]">
    <Link href='/'><div className='w-[3.5rem] h-[3.5rem] transition-all duration-200 hover:scale-110 boxShadow p-2 md:w-[80%] bg-gradient-to-r from-[#379e66] to-[#226f9c] shadow-2xl cursor-pointer  rounded-[1rem]'><Image src={homeIcon}/></div></Link>
    </div>
      
    <div className="HEADER-CELL w-[25%]  mx-auto md:mr-[1rem] md:w-[60%]" >
    <p className="text-center text-[2rem] font-[300] tracking-[1px] pt-[0.5rem]  text-[#ffffffab] font-mono sm:text-[1.5rem]  ">Upload Image</p>
    </div>
    
    <div className="HEADER-CELL w-[35%] flex flex-row justify-end TopAnimation md:w-[20%]">
    <Link href='/ShopingCart'><div className="ml-[1rem] p-2 relative w-[3.5rem] h-[3.5rem]  hover:scale-110 boxShadow rounded-[1rem] bg-gradient-to-r from-[#379e66] to-[#226f9c] shadow-2xl cursor-pointer  transition-all duration-200"><Image src={shopingcart}/><span className={`bg-[#b93333] font-[monospace] text-[1rem] rounded-[20px] absolute px-2 left-[70%] bottom-[70%] boxShadow text-white`}>{basket.length}</span></div></Link>
    </div>
     
    
    </div>

 )
}
export default Header;