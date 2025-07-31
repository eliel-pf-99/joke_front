import { useState } from "react";
import App from "./App";
import { AlertContext, StatusContext } from "./assets/context/status";



function Joker(){
    const status = useState('joker')
    const alert = useState('')

    return (
        <StatusContext value={status}>
            <AlertContext value={alert}>
                <App />
            </AlertContext>
        </StatusContext>
    )
}

export default Joker;