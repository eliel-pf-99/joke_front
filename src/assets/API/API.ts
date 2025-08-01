    import axios from "axios";
    import type { Joke, JokeAPI } from "../utils/types";

    const URL = `https://joker-api-1i13.onrender.com/`;
    // const URL = `http://127.0.0.1:8000/`;

    export async function getJoke(): Promise<JokeAPI>{
        const res = await axios.get(URL + 'getJoke').then(data => data.data)
        return res 
    }

    export async function createJoke(joke: Joke) {
        const res = await axios.post(URL + 'createJoke', {'setup': joke.question, 'delivery': joke.answer}).then(res => res)
        console.log(res)
    }

    export async function denounceJoke(jokeId?: number){
        console.log(jokeId)
        const res = await axios.patch(URL + 'denounceJoke', {id: jokeId ?? 0}).then(res => res)
        console.log(res)
    }
