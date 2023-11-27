import Header from "../components/shop/Header";
import { useShopContext } from "../context/ShopContext";
import Products from "../components/shop/Products";
import ProductView from "../components/shop/ProductView";


const shop = () => {

const { showProduct } = useShopContext();

    return (
        <div className="SHOP-CONTAINER flex flex-col w-full ">

        <Header/>
         
        { !showProduct && <Products/> } 

        { showProduct && <ProductView/> }
       
        </div>
    )
}

export default shop;

