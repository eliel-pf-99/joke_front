import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faFaceLaughSquint, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { StatusContext, AlertContext } from "../context/status";
import { denounceJoke } from "../API/API";


export default function MenuBtnMobile({jokeId}: {jokeId?: number}){
    const [status, setStatus] = useContext(StatusContext)
    const [, setAlert] = useContext(AlertContext)

    function addJoke(){
        setStatus(status === 'create' ? 'joker' : 'create')
    }

     function action(){
        denounceJoke(jokeId)
        setAlert('denounce')
    }

    return (
        <div className="flex flex-col uppercase gap-5 md:hidden">
            <button onClick={addJoke} id="btn_add_mobile" className={"flex gap-5 items-center text-xl p-4 rounded-full cursor-pointer " + (status === 'joker' ? 'bg-yellow-500' : 'bg-[#36561a]')}>
                {status == 'joker' ? <> <FontAwesomeIcon icon={faFaceLaughSquint} size="1x" />
                                Adicionar Piada</> :
                                <><FontAwesomeIcon icon={faHouse} size="1x" />
                                Home</>}
            </button>
            <button onClick={action} id="btn_denounce_mobile" className="flex gap-5 text-center items-center text-xl bg-red-700 p-4 rounded-full cursor-pointer">
                <FontAwesomeIcon icon={faTriangleExclamation} size="1x"/>
                Denunciar Piada
            </button>
        </div>
    );
}