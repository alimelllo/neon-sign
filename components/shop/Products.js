
import { useShopContext } from "../../context/ShopContext";
import ProductItem from './ProductItem';
import { products } from "../../data/data";

const Products = () => {

    

    const productItems = products.map(( item , index , arr)=> (

    <ProductItem 
    array={arr}
    index={index} 
    name={item.name}
    existCount={item.existCount}
    colors={item.colors}
    size={item.size}
    price={item.price}
    options={item.options}
    />

    ))


    return (
        <div className="PRODUCTS_CONTAINER w-11/12 md:w-[95%] flex flex-wrap justify-around  m-auto mt-[3rem] "> 
        
        {productItems}
        
        </div>

    )
}

export default Products;