import { useShopContext } from "../../context/ShopContext";
import producttest from '../../public/images/product.webp';
import Image from 'next/dist/client/image';

const ProductItem = ( props) => {

    const {  SetShowProductHandler , SetChosenItemIndexHandler , chosenItemIndex  } = useShopContext();

    return (
        <div onClick={()=>{  SetShowProductHandler(true); SetChosenItemIndexHandler(props.index) }} className="w-[20%] md:w-[45%] bottomAnimation flex flex-col m-[3rem] md:m-2  border-[1px] border-solid border-[#444444] rounded-[10px] text-white text-center boxShadow cursor-pointer hover:scale-110 transition-all duration-200" >
        <div className=" h-[5rem] w-full"> <Image src={producttest} layout='responsive' objectFit="cover" className="rounded-[10px]"/></div>
        <p className="text-white text-left text-[1.25rem] mt-[6rem] md:mt-[2rem] ml-1 p-1 font-[monospace]">{props.name}</p>
        <div className="flex md:flex-col justify-between"><p className="text-[#bca0ff] ml-1 tracking-[1px] text-left text-[1.25rem] mb-2 p-1 font-[monospace]">{props.price} T</p> <p onClick={()=>SetShowProductHandler(true)} className="bg-gradient-to-r from-[#4660d6] to-[#9b19e7]  h-[2rem] w-[5rem] rounded-[10px] p-1 hover:scale-110 duration-200 transition-all  mx-2 md:mb-3 font-[monospace] text-[1rem] md:w-11/12">$ BUY</p></div>
        
        </div>
    )
}

export default ProductItem;