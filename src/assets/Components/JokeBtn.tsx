import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function JokeBtn({click}: {click(): void }){
    const [rotate, setRotate] = useState("")
    function animateRotate(){
        setRotate('animate-spin')
        setTimeout(() => {setRotate("")}, 1000)
    }

    return (
        <div onClick={click} onMouseUp={animateRotate} className= {rotate + " bg-[#36561a] transition-all duration-300 ease-in-out flex justify-center items-center h-15 w-15 rounded-full cursor-pointer uppercase font-bold text-2xl self-end "}>
            <FontAwesomeIcon icon={faArrowRotateRight} size="xl" />
        </div>
    )
}

export default JokeBtn;