import homeIcon from '../../public/images/homeicon.png';
import Image from 'next/image';
import menuIcon from '../../public/images/menuicon.jpg';
import Link from 'next/link';
import { usePannelContext } from '../../context/PannelContext';

const Header = ( props ) => {
 
  const {headerName } = usePannelContext();


  return (
    <div className="HEADER w-full text-center py-[1rem] fadeAnimation flex flex-row justify-around boxShadow">
      <div className='ml-[1rem] w-[35%] md:w-[30%]'>
     <Link href='/'><div className='boxShadow p-2 cursor-pointer hover:scale-110 rounded-[1rem] h-[3.5rem] w-[3.5rem] transition-all duration-200 bg-gradient-to-r from-[#c4531f] to-[#ac3361]'><Image src={homeIcon}/></div></Link> 
        </div>
      <p className=" text-[1.5rem] text-white font-[monospace] w-[30%] md:w-[40%]"> {headerName} </p>
      <div className='mr-[1rem] w-[35%] md:w-[30%]  flex justify-end'>
      <div className='boxShadow p-2 cursor-pointer hover:scale-110 rounded-[1rem] h-[3.5rem] w-[3.5rem] transition-all duration-200 bg-gradient-to-r from-[#c4531f] to-[#ac3361]'><Image src={menuIcon}/></div>
        </div>
    </div>
  )
}

export default Header;