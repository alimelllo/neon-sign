import Image from 'next/dist/client/image';
import plus from '../../public/images/plus.png';

const UploadPannel = () => {

    return (
        <div className="UPLOAD-PANNEL flex flex-row md:flex-col fadeAnimation">
           
            <div className="w-[50%] md:w-full  p-[10rem] md:p-[3rem] flex justify-center ">
            <div className='w-6/12 md:w-[30%] border-[1px] p-[2rem] md:p-3 boxShadow hover:scale-110 transition-all duration-200 cursor-pointer border-dashed border-[#57585a] rounded-[15px]'>
                <Image src={plus}/>
            </div>
            </div>





            <div className="w-[60%] md:w-[95%] flex flex-col fadeAnimation"> 
            <p className='text-white text-center text-[1.5rem] font-[monospace] pt-[2rem] md:pt-0'>Upload Your Design</p>
            <p className='text-[#585858] ml-[1rem] text-[1.25rem] font-[monospace] mt-[1rem]'>Please read before ordering :</p>
            <p className='text-[#8f8f8f] ml-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem]'>1 : your image format shoud be ( jpg , png , jpeg , web ).</p>
            <p className='text-[#8f8f8f] ml-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem]'>2 : your design should be clear to make (taking 2 to 4 days) depending on size.</p>
            <p className='text-[#8f8f8f] ml-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem]'>3 : your design will be chacked and if it get confirmed you'll get called and options pannel will be availbe .</p>
            <p className='text-[#8f8f8f] ml-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace] mt-[1rem]'>4 : you can confirm the payment and check your order process</p>
         <label className='w-3/12 md:w-8/12 mb-[1rem] font-[monospace] text-[1rem] mx-auto mt-[2rem] boxShadow hover:scale-110 transition-all duration-200 cursor-pointer py-[0.5rem] text-white rounded-[10px] bg-gradient-to-r from-[#379e66] to-[#226f9c] text-center'>+ Upload
         <input type='file' className='hidden' />
         </label>
          </div>
           
        </div>
    )
} 

export default UploadPannel;