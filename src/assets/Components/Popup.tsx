import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Alert from "./Alerts";
import { useContext, useRef } from "react";
import { AlertContext } from "../context/status";

export default function Popup(){
    const [alert, setAlert] = useContext(AlertContext)
    const boxRef = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setAlert('')
        });
        tl.fromTo(boxRef.current, {
            y: 150,
            opacity: 0,
            duration: .5
        }, {
            y: 0,
            opacity: 1,
            duration: .5
        });
        tl.to(boxRef.current, {
            y: 150,
            opacity: 0,
            duration: .5,
            delay: 3,
        }, "<")
        
    }, {dependencies: [alert]})
    
    return (
        <div ref={boxRef} className="fixed bottom-4">
            <Alert kind={alert} />
        </div>
    )
}