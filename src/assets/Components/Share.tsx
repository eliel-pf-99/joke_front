import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

function Share({className}: {className:string}){
    return (
        <div className={className}>
            <FontAwesomeIcon icon={faShareNodes} size='2x' color='white'/>
        </div>
    )
}

export default Share;