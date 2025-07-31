import { faFaceLaughSquint, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Alert({kind}: {kind: string}){
    switch(kind){
        case 'denounce':
            return (<div className="uppercase flex gap-5 justify-center items-center bg-red-700 py-5 px-10 font-dirk rounded-full">
                <FontAwesomeIcon icon={faTriangleExclamation} size="2x"/>
                <p>Piada Denunciada!</p>
            </div>)
        case 'add':
            return (<div className="uppercase flex gap-5 justify-center items-center bg-yellow-500 py-5 px-10 font-dirk rounded-full">
                <FontAwesomeIcon icon={faFaceLaughSquint} size="2x" />
                <p>Piada Adicionada</p>
            </div>)
        default:
            return <></>
    }
}