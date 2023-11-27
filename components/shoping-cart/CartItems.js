import { useShopContext } from "../../context/ShopContext";
import testImage from '../../public/images/product.webp';
import Image from 'next/dist/client/image';

const CartItems = () => {

    const { basket , removeFromBasketHandler } = useShopContext();

    let amount = 0;

    for( let i= 0 ; i < basket.length ; i++ ){
        amount = basket[i].price + amount ;
    }


    const items = basket.map(( item , i ) => 
        <div className="w-6/12 md:w-11/12 text-white bottomAnimation border-[1px] border-solid boxShadow border-[#414141] mx-auto my-[2rem] rounded-[10px] font-[monospace] p-[0.75rem]">
         <div className="flex flex-row justify-between"><p className="text-[1.25rem]">{item.name}</p><div className="w-2/12"><Image src={testImage} className='rounded-[5px]' /></div></div>
         <div className="flex flex-row mt-[1rem] justify-between"><div className="flex flex-row text-[1rem]"><p onClick={() => removeFromBasketHandler(i)} className="bg-[#b12727] text-[1.25rem]  boxShadow rounded-[10px] hover:scale-110 transition-all duration-200 text-center cursor-pointer px-2"> - </p></div><p className="text-[1.25rem] text-[#eb7754] tracking-[1px]">{item.price} T</p> <div><p className="text-[1rem] text-[#727272]">{item.size}</p></div></div>
        </div>
        ) 



    return ( 
        <div className="w-full">
             <div className="flex flex-row w-6/12 md:w-11/12 mx-auto  border-b-[1px] border-b-solid border-b-[#5c5c5c] py-3 justify-between"><div className="flex flex-row justify-between"><p className="text-[1.5rem] md:text-[1.25rem] font-[monospace]"> Amount :  </p><p className="text-[#db5932] text-[1.5rem] md:text-[1.25rem]  ml-[1rem] font-[monospace]">{amount} T</p></div><button className="bg-[#485c94fa] boxShadow rounded-[15px] w-3/12 md:w-4/12 cursor-pointer hover:scale-110 transition-all duration-200 font-[monospace] text-[1rem] tracking-[1px]">$ Payment</button> </div>
            {items}
        </div>
    )
}

export default CartItems;