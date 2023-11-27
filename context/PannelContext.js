import { Children, createContext , useContext , useState } from "react";


const PannelContext = createContext({});

export const usePannelContext = () => {
    return useContext(PannelContext);
}


const PannelContextProvider = ({children}) => {
    const [chooseWall,SetChooseWall] = useState(true);
    const SetChooseWallHandler = (state) => {
        SetChooseWall(state);
    }
    
    const [chooseFont , SetChooseFont ] = useState(false);
    const SetChooseFontHandler = (state) => {
        SetChooseFont(state);
    }

    const [chooseColor , SetChooseColor] = useState(false);
    const SetChooseColorHandler = (state) => {
        SetChooseColor(state);
    }

    const [chooseSize , SetChooseSize ] = useState(false);
    const SetChooseSizeHandler = (state) => {
        SetChooseSize(state);
    }

    const [chooseOptions , SetChooseOptions] = useState(false);
    const SetChooseOptionsHandler = (state) => {
        SetChooseOptions(state);
    }

    const [showFinal , SetShowFinal] = useState(false);
    const SetShowFinalHandler = (state) => {
        SetShowFinal(state);
    }



    const [headerName , SetHeaderName] = useState('BackGround');
    const SetHeaderNameHandler = (text) => {
        SetHeaderName(text);
    }
  
    const [ font , SetFont] = useState('serif');
    const SetFontHandler = (font) => {
        SetFont(font);
    }

    const [ color , SetColor ] = useState('text-[white]');
    const SetColorHandler = (color) => {
        SetColor(color);
    }

    const [ plexi , setPlexi] = useState('glassMorphism_glass');
    const setPlexiHandler = (plexi) => {
        setPlexi(plexi);
    }

    const [ border , setBorder] = useState('');
    const setBorderHandler = (border) => {
        setBorder(border);
    }
   
    const [ size , SetSize ] = useState(false);
    const [ width , setWidth ] = useState(false);
    const [ height , SetHeight ] = useState(false);
    const SetSizeHandler = (  width ,height ,size ) => {
        SetSize(size);
        setWidth(width);
        SetHeight(height);
    }

    const [Text , SetText] = useState('Text...');
    const SetTextHandler = ( text ) => {
        SetText(text);
    }

    const [ background , SetBackground] = useState(false);
    const SetBackgroundHandler = (index) => {
        SetBackground(index);
    }

   
   
   
   
   
  

    return (

  <PannelContext.Provider value={{
    chooseWall , SetChooseWallHandler ,
    background , SetBackgroundHandler,
    SetHeaderNameHandler , headerName ,
     chooseFont , SetChooseFontHandler ,
      SetFontHandler, font ,
      chooseColor , SetChooseColorHandler ,
      color , SetColorHandler ,
      plexi , setPlexiHandler , 
      border , setBorderHandler , 
      chooseSize ,SetChooseSizeHandler ,
      size ,SetSizeHandler , width , height , 
      chooseOptions , SetChooseOptionsHandler ,
      showFinal , SetShowFinalHandler ,
      Text , SetTextHandler

  }}>
    {children}
</PannelContext.Provider>

    )
}

export default PannelContextProvider;
