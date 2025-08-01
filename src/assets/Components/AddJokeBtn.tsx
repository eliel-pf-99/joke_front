import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { Joke } from "../utils/types";
import { createJoke } from "../API/API";

function AddJokeBtn({action, joke}: {action: () => void, joke: Joke}){

    function saveJoke(){
        createJoke(joke)
        action()
    }

    return (
        <div onClick={saveJoke}  className= {" transition-all duration-300 fade-in bg-yellow-500 flex justify-center items-center h-15 w-15 rounded-full cursor-pointer uppercase font-bold text-2xl self-end "}>
            <FontAwesomeIcon icon={faPlus} size="xl" />
        </div>
    )
}

export default AddJokeBtn;