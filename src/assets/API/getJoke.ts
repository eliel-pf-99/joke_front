import axios from "axios";
import type { Joke, JokeAPI } from "../utils/types";

const URL = `https://v2.jokeapi.dev/joke/Any?lang=pt&blacklistFlags=racist`;

export default async function getJoke(): Promise<Joke>{
    return await axios.get<JokeAPI>(URL)
        .then(data => data.data)
        .then(res => ({question: res.setup, answer: res.delivery}))
}
