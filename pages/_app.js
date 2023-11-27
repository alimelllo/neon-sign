import '../styles/globals.css'
import '../components/CustomDesign/customDesign.css';
import "animate.css/animate.min.css";
import PannelContextProvider from '../context/PannelContext';
import ShopContextProvider from '../context/ShopContext';
import { ToastContainer} from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <PannelContextProvider>
      <ShopContextProvider>
        <Component {...pageProps} />
        <ToastContainer
         position="top-center"
         autoClose={2000}
         hideProgressBar={true}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         pauseOnHover
         theme='dark'
         icon
         closeButton={false}/>
      </ShopContextProvider>
    </PannelContextProvider> ) 
}


export default MyApp;
