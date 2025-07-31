import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faFaceLaughSquint, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AlertContext, StatusContext } from "../context/status";

export default function MenuBtn(){
    const [toogle, setToogle] = useState(false)
    const [status, setStatus] = useContext(StatusContext)
    const [, setAlert] = useContext(AlertContext)

    useGSAP(() => {
        const tl = gsap.timeline({paused: true})
        tl.to('#stripe2', {
            x: toogle ? -100 : 0,
            opacity: toogle ? 0 : 1,
            duration: 0.5
        });
        tl.fromTo("#btn_add", {
            opacity: toogle ? 0 : 1,
            x: 100
        }, {
            opacity: toogle ? 1 : 0,
            x: 0
        }, "<")
        tl.fromTo("#btn_denounce", {
            opacity: toogle ? 0 : 1,
            x: -100
        }, {
            opacity: toogle ? 1 : 0,
            x: 0
        }, "<")
        tl.to('#stripe1', {
            y: toogle ? 16: 0,
            rotate: toogle ? 135 : 0
        }, "<")
        tl.to('#stripe3', {
            y: toogle ? -16: 0,
            rotate: toogle ? -135 : 0
        }, "<")
        tl.play();
    },[toogle])
    
    function animate(){
        setToogle(!toogle)
    }

    function addJoke(){
        setStatus(status === 'create' ? 'joker' : 'create')
    }

    function denounceJoke(){
        //TODO
        setAlert('denounce')
    }
    

    return (
        <div className="md:flex gap-5 flex-row-reverse uppercase ">
            <div onClick={animate} className="flex flex-col justify-center gap-3 cursor-pointer ">
                <div id="stripe1" className="h-1 w-15 bg-white"></div>
                <div id="stripe2" className="h-1 w-8 bg-white self-end"></div>
                <div id="stripe3"  className="h-1 w-15 bg-white"></div>
            </div>
            <button onClick={addJoke} id="btn_add" className={"flex opacity-0 gap-5 items-center text-xl p-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out " + (status === 'joker' ? 'bg-yellow-500' : 'bg-[#36561a]')}>
                {status == 'joker' ? <> <FontAwesomeIcon icon={faFaceLaughSquint} size="1x" />
                Adicionar Piada</> :
                <><FontAwesomeIcon icon={faHouse} size="1x" />
                Home</>}
            </button>
            <button onClick={denounceJoke} id="btn_denounce" className="flex gap-5 items-center text-xl bg-red-700 p-4 rounded-full cursor-pointer">
                <FontAwesomeIcon icon={faTriangleExclamation} size="1x"/>
                Denunciar Piada
            </button>
        </div>
    );
}