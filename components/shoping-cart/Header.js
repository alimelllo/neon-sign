import homeIcon from '../../public/images/homeicon.png';
import shopingcart from '../../public/images/shopingcart.png';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import { useShopContext } from '../../context/ShopContext';

const Header = () => {

    
    const { basket } = useShopContext();
    
return (

    <div className="HEADER-CONTAINER  flex flex-row  p-[1rem] md:p-[0.75rem] justify-around boxShadow border-b-[1px] border-solid border-[#3b3b3b]">
    
    <div className="HEADER-CELL w-[35%] flex flex-row TopAnimation md:w-[20%]">
    <Link href='/'><div className='w-[3.5rem] h-[3.5rem] transition-all duration-200 hover:scale-110 boxShadow p-2 md:w-[80%] bg-gradient-to-r from-[#693949] to-[#104a6b] shadow-2xl cursor-pointer  rounded-[1rem]'><Image src={homeIcon}/></div></Link>
    </div>
      
    <div className="HEADER-CELL w-[25%]  mx-auto md:mr-[1rem] md:w-[60%]" >
    <p className="text-center text-[2rem] font-[300] tracking-[1px] pt-[0.5rem]  text-[#ffffffab] font-mono sm:text-[1.5rem]  ">Cart $</p>
    </div>
    
    <div className="HEADER-CELL w-[35%] flex flex-row justify-end TopAnimation md:w-[20%]">
    <Link href='./shop'><div className="ml-[1rem] hover:scale-110 p-2  w-[3.5rem] h-[3.5rem] boxShadow rounded-[1rem] bg-gradient-to-r from-[#693949] to-[#104a6b] shadow-2xl cursor-pointer  transition-all duration-200 flex text-center "><p className='m-auto font-[monospace] text-center text-[1.25rem]'>Shop</p></div></Link>
    </div>
     
    
    </div>

 )
}
export default Header;