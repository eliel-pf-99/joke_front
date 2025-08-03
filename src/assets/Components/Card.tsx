import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useContext } from 'react'
import { StatusContext } from '../context/status'

function Card({question, answer, loading}: {question: string, answer: string, loading: boolean}){
    const [status] = useContext(StatusContext);
    
    useGSAP(() => {
        const question = new SplitText('#question_id', {type: 'chars, words'})
        const answer = new SplitText('#answer_id', {type: 'chars'})
        
        gsap.from(question.chars, {
            opacity: 0,
            duration: 0.05,
            ease: 'power1.out',
            stagger: {
                amount: 0.4,
                from: 'random'
            },
            repeat: loading ? -1 : 0,
            yoyo: true
        })
        gsap.from(answer.chars, {
            opacity: 0,
            duration: 0.05,
            ease: 'power1.out',
            stagger: {
                amount: 0.4,
                from: 'random'
            },
            repeat: loading ? -1 : 0,
            yoyo: true
        });
        
    }, [question])
    useGSAP(() => {
        if(status === 'create') {
            gsap.to("#card", {
                x: -150,
                opacity: 0,
                duration: 1
             })
        }

        if(status === 'joker') {
            gsap.fromTo("#card", {
                x: -150,
                opacity: 0,
             }, {
                x: 0,
                opacity: 1,
                duration: 1,
             })
        }
        
    }, [status])

    return (
        <div id="card" className="bg-white  card font-oswald border-8 border-amber-300 text-4xl w-4/5 m-7 min-[h-1/3] md:h-3/5 md:w-1/2 rounded-2xl relative text-black text-center flex flex-col justify-center py-7">
           
            <h2 id="question_id" className="p-5 break-normal ">{question}</h2>
            <h2 id="answer_id" className="p-5 break-normal ">{answer}</h2>
           
        </div>
    )
}

export default Card