import ChooseWall from "./ChooseWall";
import ChooseFont from "./ChooseFont";
import ChooseColor from "./ChooseColor";
import ChooseSize from "./ChooseSize";
import ChooseOptions from "./ChooseOptions";
import Final from "./Final";
import { usePannelContext } from "../../../context/PannelContext";

const Pannel = () => {

const { chooseWall , chooseFont ,
     chooseColor , chooseSize , chooseOptions ,
     showFinal  } = usePannelContext();

return (
    <div className="PANNEL-CONTAINER w-[40%] md:w-[90%] h-[25rem] md:h-[20rem] flex flex-col mx-auto bg-gradient-to-r from-[#131313] to-[#141414]  text-white mt-[1rem] mb-[2rem] border-[1px] border-solid border-[#ff5e49] rounded-[10px] boxShadow ">

{ chooseWall && <ChooseWall /> }

{ chooseFont && <ChooseFont />}

{ chooseColor && <ChooseColor />}

{ chooseSize && <ChooseSize />}

{ chooseOptions && <ChooseOptions />}

{ showFinal && <Final/>}

    </div>
)

}

export default Pannel;