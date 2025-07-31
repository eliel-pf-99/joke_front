import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddJokeBtn({click}: {click(): void }){

    return (
        <div onClick={click}  className= {" transition-all duration-300 fade-in bg-yellow-500 flex justify-center items-center h-15 w-15 rounded-full cursor-pointer uppercase font-bold text-2xl self-end "}>
            <FontAwesomeIcon icon={faPlus} size="xl" />
        </div>
    )
}

export default AddJokeBtn;