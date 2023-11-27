import { usePannelContext } from "../../../context/PannelContext";
import { useState } from "react";

const ChooseFont = () => {
    
    const [ textLang , SetTextLang ] = useState('ltr');
    const [ placeHolder , setPlaceHolder] = useState('Enter Your Text ...');

    const {  SetChooseWallHandler ,
        SetHeaderNameHandler ,
        SetChooseFontHandler , SetFontHandler ,
         SetChooseColorHandler , 
      Text , SetTextHandler } = usePannelContext();


    const fontItemStyle = "w-2/12 md:w-3/12 text-center m-[0.5rem] border-[1px] bordr-solid border-[white] activeSize rounded-[10px] h-[2rem] cursor-pointer";
    const nextButtonStyle = "p-1 w-3/12 boxShadow  cursor-pointer bg-gradient-to-r from-[#c4531f] to-[#ac3361] font-[monospace] text-white m-auto my-[1.5rem] rounded-[15px] md:w-4/12  transition-all duration-200 tracking-[1px] text-[1.25rem] hover:scale-110";
    
    
    return (
<>

<div className="flex flex-row justify-around border-t-[1px] border-t-solid border-t-[#3f3f3f] fadeAnimation">
    <textarea className={`boxShadow TextInput overflow-hidden placeholder:text-center placeholder:tracking-[1px] mx-auto my-[1rem] w-9/12 md:w-8/12 px-[1rem] py-[0.75rem] ${textLang}`}  onChange={(e) => { SetTextHandler(e.target.value); }} placeholder={placeHolder} value={Text} />
    <div className="w-2/12 md:w-3/12 m-auto cursor-pointer " onClick={ () =>{ textLang === 'ltr' ? ( SetTextLang('rtl') , setPlaceHolder('متن دلخواه را وارد کنید ...')) :  ( SetTextLang('ltr') , setPlaceHolder('Enter Your Text ...'))} }><p className="text-[#ffffff] bg-gradient-to-r hover:scale-110 transition-all duration-200 boxShadow from-[#5920c4] to-[#2e66b9] py-[0.5rem]  tracking-[1px] font-[bhoma] rounded-[10px]  text-center">{textLang === 'ltr' ? 'English' : 'فارسی'}</p></div>    
    
</div>
<div className="CHOOSE-FONT-CONTAINER flex flex-wrap boxShadow justify-between h-[15rem] md:h-[10rem] overflow-y-scroll p-[1rem] fadeAnimation">
   { textLang === 'ltr' && <> 
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[Vibur]')}>Vibur</button>
   <button className={ `${fontItemStyle} font-[serif]`}  onClick={() =>SetFontHandler('font-[serif]')}>serif</button>
   <button className={ `${fontItemStyle} font-[laquer]`}  onClick={() =>SetFontHandler('font-[laquer]')}>laq</button>
   <button className={ `${fontItemStyle} font-[monospace]`}  onClick={() =>SetFontHandler('font-[monospace]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[mono]')}>Mono</button>
    </>}

    { textLang === 'rtl' && <> 
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bbadr]')}>badr</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bbaran]')}>baran</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bbardia]')}>bardia</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bcompset]')}>compset</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bdavat]')}>davat</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[belham]')}>elham</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[besfahan]')}>esfahan</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bfantezy]')}>fantezy</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bfarnaz]')}>farnaz</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bferdosi]')}>ferdosi</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bhamid]')}>hamid</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bhoma]')}>homa</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bhelal]')}>helal</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bjadid]')}>jadid</button>
   <button className={ `${fontItemStyle} font-[Vibur]`}  onClick={() =>SetFontHandler('font-[bkodak]')}>kodak</button>
    </>}

</div>
 
<div className="flex flex-row justify-between">
   <button onClick={() => { SetHeaderNameHandler( 'BackGround '); SetChooseFontHandler(false);SetChooseWallHandler(true); }} className={nextButtonStyle} > Back </button>
   <button onClick={() => { SetHeaderNameHandler(' Colors' ); SetChooseFontHandler(false);SetChooseColorHandler(true); } } className={nextButtonStyle}> Next </button>

</div>

</>
    )
}

export default ChooseFont;