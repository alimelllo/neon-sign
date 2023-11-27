import Image from 'next/dist/client/image';
import producttest from '../../public/images/product.webp';
import CountUp from 'react-countup';
import { useShopContext } from '../../context/ShopContext';
import { products } from '../../data/data';
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ProductView = () => {

    const { chosenItemIndex , addToBasketHandler } = useShopContext();

     console.log( chosenItemIndex )

     let item = products[chosenItemIndex]
     
    return (
        <div className=" mt-[1rem] md:mt-0 md:flex-col w-full mx-auto flex flex-row ">

        <div className=' w-6/12 md:w-full p-[1rem] md:p-[1.25rem] '>
            <Image src={producttest} className='rounded-[10px] fadeAnimation shadow-2xl'/>
        </div>

        <div className='flex flex-col  w-6/12 md:w-full mx-auto  p-[2rem] md:p-[0.75rem] boxShadow rounded-[15px] bg-gradient-to-r from-[#0a0b16] to-[#131313c9]'>
            <p className='text-[white]  tracking-[1px] text-[1.5rem] md:text-[1rem] font-[monospace]'>{item.name}</p>
            <p className='text-[#d3d3d3] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[2rem] md:mt-[1rem]'> Colors : </p>

            <div className='text-[#d3d3d3] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem] md:mt-[0.5rem] flex flex-row'><p >Available Size : </p><p className='ml-[3rem]'> {item.size}</p></div>
        
            <div className='text-[#d3d3d3] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[2rem] md:mt-[1rem] flex flex-row'><p > Options : </p><p className='ml-[3rem]'>Water Proof , Remote </p></div>
        
            <p className='text-[#d3d3d3] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem] md:mt-[0.5rem]'> Output : 6A 220V , USB , Adapter </p>
        
            <p className='text-[#d3d3d3] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem] md:mt-[0.5rem]'> Stand : Wall , Roof </p> 

        <div className='text-[#e6e6e6] text-[1.25rem] font-[monospace] mt-[2rem] md:mt-[1rem] flex flex-row tracking-[1px]'><p > Price : </p><p className='ml-[3rem] text-[1.25rem]  text-[#967eff]'>  <CountUp end={item.price}  duration={3} className='tracking-[5px]'/> T</p></div>
       
       <div className='w-full flex flex-row justify-around mt-[1.5rem] md:mt-0'>
       <button onClick={() =>{ addToBasketHandler( products[chosenItemIndex]) ; toast.success('Added To Cart') } } className='w-3/12 mt-[1.5rem] md:w-5/12 py-2 rounded-[10px] bg-gradient-to-r from-[#a3504d] to-[#ec7444c9] text-white hover:scale-110 transition-all duration-200 font-[monospace] text-[1rem] mx-auto boxShadow'>+ Add To Cart </button>

       <button className='w-3/12 mt-[1.5rem] md:w-5/12 py-2 rounded-[10px] bg-gradient-to-r from-[#4d54a3] to-[#4463ecc9] text-white hover:scale-110 transition-all duration-200 font-[monospace] text-[1rem] mx-auto boxShadow'>$ Buy </button>

        </div>
        
        </div>

        </div>
    )
}

export default ProductView;