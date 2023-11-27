import Image from 'next/image';

import AnimatedText from 'react-animated-text-content';
import  ScrollAnimation   from 'react-animate-on-scroll';
import instagramIcon from '../../public/images/instagram.png';
import mainbg from '../../public/images/mainbg.jpg';
import ScrollIntoView from 'react-scroll-into-view';
import picture from '../../public/images/picture.png';
import payment from '../../public/images/payment.png';
import delivery from '../../public/images/delivery.png';
import whatsapp from '../../public/images/whatsapp.png';
import email from '../../public/images/email.png';
import location from '../../public/images/location.png';
import send from '../../public/images/send.png';
import confirmdesign from '../../public/images/confirmdesign.png';
import addoptions from '../../public/images/addoptions.png';
import produce from '../../public/images/produce.png';
import deliveryproduct from '../../public/images/deliveryproduct.png';
import recieveproduct from '../../public/images/recieveproduct.png';
import guarantee from '../../public/images/guarantee.png';


const MainSection = () => {


return (

    <>
      <div className="HEADER-CONTAINER flex flex-row z-20 sticky p-[0.75rem] justify-around boxShadow2x TopAnimation ">
    
    <div className="HEADER-CELL w-[25%] TopAnimation sm:w-[25%]">
    <div className='select-none h-[3.5rem] font-[Vibur]  flex flex-row '><p className='text-white text-[1.75rem] md:text-[1.35rem]'>Cutsom</p><p className='text-[1.5rem] md:text-[1.25rem] text-[#e6356a] pl-2 md:pl-0 pt-5 tracking-[1px]'>Neon</p></div>
    </div>
    
    <div className="HEADER-CELL w-[50%] sm:w-[60%]  pt-2 flex flex-row justify-around font-[monospace] text-[1.25rem] md:text-[0.8rem] text-center text-[white]">
    <ScrollIntoView selector="#order" smooth={true}><p className=' opacity-[0.7] hover:opacity-[1] hover:scale-110 cursor-pointer transition-all duration-150'>Order</p></ScrollIntoView>
    <ScrollIntoView selector="#options" smooth={true}><p className=' opacity-[0.7] hover:opacity-[1] hover:scale-110 cursor-pointer transition-all duration-150'>Options </p></ScrollIntoView>
    <ScrollIntoView selector="#contact" smooth={true}><p className=' opacity-[0.7] hover:opacity-[1] hover:scale-110 cursor-pointer transition-all duration-150'> Contact</p></ScrollIntoView>
    </div>
    
    <div className="HEADER-CELL w-[25%] flex flex-row justify-end TopAnimation sm:w-[25%]">
    <div className="boxShadow p-2 cursor-pointer rounded-[1rem] h-[3rem] w-[3rem] bg-gradient-to-r from-[#c40b43] to-[#691faf]  transition-all duration-200 hover:scale-110"> <Image src={instagramIcon}/></div>
    </div>
    
      </div>



<div className='MAIN-WALL-CONTAINER flex flex-col overflow-hidden z-10 '>
    
<div className=' flex flex-row md:flex-col z-10 '>
<div className=' w-[50%] md:w-[90%] md:mx-auto text-center leftAnimation rounded-r-[15px] boxShadow '><Image src={mainbg} className='rounded-r-[15px]' alt='نئون'/></div>
<div className=' w-[50%] md:w-full mt-[5rem] md:mt-3'>
  <p className=' m-auto w-[70%] md:w-11/12 font-[Vibur] text-[2.5rem] md:text-[1.75rem] md:mt-[1rem] text-[#dddddd] fadeAnimation'>Custom Neon</p>
  <AnimatedText  className=' text-[#a0a0a0] w-[70%] md:w-11/12 m-auto font-[monospace] text-[1.25rem] md:text-[1rem] md:mt-2 mt-[3rem]' type="chars" animationType='diagonal' interval={0.07}>Custom neon is an online shop working through creating cutom neons signs on users choice with multiple options for each product.</AnimatedText>
  <AnimatedText  className=' text-[#a0a0a0] w-[70%] md:w-11/12 m-auto font-[monospace] text-[1.25rem] md:text-[1rem] md:mt-3 mt-[3rem]' type="chars"  animationType='diagonal' interval={0.3} >So you can order any custome idea :)</AnimatedText>
  <ScrollIntoView selector="#order" smooth={true}><p className='text-white w-4/12 md:w-7/12 m-auto font-[monospace] text-[1.25rem] mt-[3rem] md:mt-[2rem] cursor-pointer fadeAnimation bg-gradient-to-r from-[#c40b43] to-[#691faf] text-center rounded-[10px] p-2 boxShadow  transition-all duration-100 hover:scale-110'>How to order ?</p></ScrollIntoView>
  </div>

</div>

{/* Order Road section================================================ */}
{/* Order Road section================================================ */}
<ScrollAnimation  animateIn="leftAnimation">
<div className='text-[white] w-9/12 mx-auto font-[monospace]  text-[2rem] mt-[12rem] font-[600] tracking-[1px] ' id='order' > How to order ? </div>
</ScrollAnimation>
<ScrollAnimation  animateIn="rightAnimation">
<div className='w-10/12 mx-auto mt-[5rem] flex flex-row md:flex-col justify-around font-[monospace] text-[1rem] text-[#cacaca] rightAnimation'>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='pt-[8rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center '>1.Send Design on What's App </p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#ff99b7] to-[#c40b43] md:w-5/12 p-4'><Image src={send}/></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#c40b43] to-[#691faf] md:w-5/12 p-4'><Image src={confirmdesign}/></div>
  <div className='pb-[9rem] md:pb-[2rem] pt-[3rem] mx-auto md:w-6/12'><p className='text-center'>2.Confirm Design with Opretor</p></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='pt-[8rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center'>3.Add Order Final Options</p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#691faf] to-[#c053ce] md:w-5/12 p-3'><Image src={addoptions}/></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#c053ce] to-[#2a72c4] md:w-5/12'><Image src={payment}/></div>
  <div className='pb-[9rem] md:pb-[2rem] pt-[3rem] mx-auto md:w-6/12'><p className='text-center'>4.Confirm Product Payment $  </p></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='pt-[8rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center'>5.Order goes to Making Process</p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#2a72c4] to-[#2ac4bc] md:w-5/12 p-5'><Image src={produce}/></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#2ac4bc] to-[#0bc45e] md:w-5/12'><Image src={deliveryproduct}/></div>
  <div className='pb-[9rem] md:pb-[2rem] pt-[3rem] mx-auto md:w-6/12'><p className='text-center'>6.Express Delivery To ( Worlwide )</p></div>
</div>

<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
<div className='pt-[9rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center'>7.Recieve Product</p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#0bc45e] to-[#0bc4ab] md:w-5/12 p-5'><Image src={recieveproduct}/></div>
  
</div>


</div>
</ScrollAnimation>
{/* Order Road section================================================ */}
{/* Order Road section================================================ */}










{/* options section================================================ */}
{/* options section================================================ */}

<ScrollAnimation  animateIn="leftAnimation">
<div className='text-white w-9/12 mx-auto font-[monospace] text-[2rem] mt-[12rem] font-[600] tracking-[1px]' id='options' > Options </div>
</ScrollAnimation>
<ScrollAnimation  animateIn="rightAnimation">
<div className='w-10/12  mx-auto flex flex-row justify-around md:flex-col mt-[5rem] md:mt-[2rem] font-[monospace]'>
<div className='bg-gradient-to-b from-[#d33e45] to-[#7e1ed8] w-[25%] md:w-[90%] md:mx-auto rounded-[15px] boxShadow py-4 md:my-5'>
   <p className='text-[#f0f0f0] text-center text-[1.5rem] pt-3 md:pt-1'>Add Options</p>
    <div className='w-5/12 mx-auto mt-[3rem] md:mt-[1rem] opacity-[0.8]'><Image src={addoptions}/></div>
   <p className='text-[#ffffff] w-10/12 mx-auto text-[1rem] text-center mt-[2rem] md:mt-[1.5rem]'>You can add multiple items to your order such as Remote control , stand , water proof ,Custom background and neon color and .... add your items while ordering. </p>
</div>
<div className='bg-gradient-to-b from-[#457ac0] to-[#1fafaf] w-[25%] md:w-[90%] md:mx-auto rounded-[15px] boxShadow py-4 md:my-5'>
  <p className='text-white text-center text-[1.5rem] pt-3 md:pt-1'> Fair Price $</p>
    <div className='w-6/12 mx-auto mt-[1rem] opacity-[0.8]'><Image src={payment}/></div>
   <p className='text-[#ffffff] w-10/12 mx-auto text-[1rem] text-center mt-[2rem] md:mt-[1.5rem]'>Price is depended on neon size , font type , added options and design details as we try our best to a fair price for customer. </p>
</div>
<div className='bg-gradient-to-b from-[#2bb82b] to-[#1fafaf] w-[25%] md:w-[90%] md:mx-auto rounded-[15px] boxShadow py-4 md:my-5'>
  <p className='text-white text-center text-[1.5rem] pt-3 md:pt-1'>2/M Guarantee</p>
    <div className='w-6/12 mx-auto opacity-[0.8] p-5'><Image src={guarantee}/></div>
   <p className='text-[#ffffff] w-10/12 mx-auto text-[1rem] text-center '>1 mounth guarantee for changing the product if it's not broken , burned or got wet otherwise the shop will guarantee our product and return a new one.  </p>
  </div>

</div>
</ScrollAnimation>

{/* options section================================================ */}
{/* options section================================================ */}


{/* about section================================================ */}
{/* about section================================================ */}
<ScrollAnimation  animateIn="leftAnimation">
<div className='text-white w-9/12 mx-auto font-[monospace] text-[2rem] mt-[12rem]  font-[600] tracking-[1px]' id='contact' > About Us</div>
</ScrollAnimation>
<ScrollAnimation  animateIn="rightAnimation">
<div className='flex flex-row md:flex-col justify-around mt-[4rem] md:mt-[2rem] mb-[5rem]'>
  <div className='w-4/12 md:w-10/12 mx-auto text-[#bdbdbd] text-[1.25rem] md:text-[1rem] font-[monospace]'><AnimatedText type='chars' animationType='diagonal' interval={0.07} >Custom Neon is an online shop , located in Iran Tehran , we just get order from what's app massenger or instagram direct masseges(no payment gateway here). orders will take up to 2 or 4 days to make and deliver.</AnimatedText><AnimatedText type='chars' animationType='diagonal' interval={0.07} className='mt-[2rem]'>This approche will make the build process and customers requirments easier.</AnimatedText></div>
    <div className='w-5/12 md:w-full mx-auto md:mt-[2rem] flex flex-col '>
       <div className='w-full flex flex-row '><div className='w-1/12 md:w-[10%] px-1 pt-1 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={whatsapp}/></div><AnimatedText  type="chars" animationType='diagonal' interval={0.07} className='text-white text-center  text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem] ml-[2rem]'>0904 632 9661</AnimatedText></div>
       <div className='w-full flex flex-row mt-[1rem] '><div className='w-1/12 md:w-[10%] px-1 pt-1 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={instagramIcon}/></div><AnimatedText type="chars" animationType='diagonal' interval={0.07} className='text-white text-center text-[1rem] font-[monospace]  tracking-[1px] mt-[1rem] ml-[2rem] md:text-[0.75rem]'>@Customneoon</AnimatedText></div>
       <div className='w-full flex flex-row mt-[1rem] '><div className='w-1/12 md:w-[10%] px-1 pt-1 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={email}/></div><AnimatedText type="chars" animationType='diagonal' interval={0.07} className='text-white text-center text-[1rem] font-[monospace]  tracking-[1px] mt-[1rem] ml-[2rem] md:text-[0.75rem]'>CustomNeon@gmail.com</AnimatedText></div>
       <div className='w-full flex flex-row mt-[1rem] '><div className='w-1/12 md:w-[10%] px-1 pt-2 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={location}/></div><AnimatedText type="chars" animationType='diagonal' interval={0.07} className='text-white text-center text-[1rem] font-[monospace]  tracking-[1px] mt-[2rem] md:mt-[1rem] ml-[2rem] md:text-[0.75rem]'>Tehran Province</AnimatedText></div>
    </div>
</div>
</ScrollAnimation>
{/* about section================================================ */}
{/* about section================================================ */}

<p className='text-[#a1a1a1] text-center my-[1rem] text-[1rem] font-[monospace]'>&copy;2022 CustomNeon IR,inc.All rights reserved </p>




</div>


    </>
)

}

export default MainSection;