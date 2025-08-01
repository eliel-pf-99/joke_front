import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useContext, useState } from "react"
import { StatusContext } from "../context/status"
import type { Joke } from "../utils/types"

type AddType = {
    action(joke: Joke): void
}

export default function CardAdd(props: AddType){
    const [status] = useContext(StatusContext)

    const [joke, setJoke] = useState<Joke>({answer: '', question: ''})

    const updateJoke = (tag: string, value: string) => {
        if (tag == 'question'){
            setJoke({question: value, answer: joke.answer})
        }
        else {
            setJoke({answer: value, question: joke.question})
        }
        props.action(joke)
    }

    useGSAP(() => {
        if(status === 'joker') {
            gsap.to("#card_add", {
                x: 150,
                opacity: 0,
                duration: 1
             })
        }

        if(status === 'create') {
            gsap.fromTo("#card_add", {
                x: 150,
                opacity: 0,
             }, {
                x: 0,
                opacity: 1,
                duration: 1,
             })
        }
        
    }, [status])
    return (
        <div id="card_add" className="bg-white font-oswald border-8 border-[#36561a] text-4xl w-4/5 m-7 min-[h-1/3] md:h-3/5 md:w-1/2 rounded-2xl relative gap-15 text-black text-center flex flex-col justify-center py-7">
           <textarea onChange={e => updateJoke('question', e.target.value)} className="text-center outline-none field-sizing-content no-scrollbar" placeholder="Digite a questão aqui!">{joke.question}</textarea>
           <textarea onChange={e => updateJoke('answer', e.target.value)} className="text-center outline-none field-sizing-content no-scrollbar" placeholder="Digite a resposta aqui!">{joke.answer}</textarea>
        </div>
    )
}