export type Joke = {
    question: string
    answer: string
    id?: number 
}

export type JokeAPI = {
    setup: string
    delivery: string
    id?: number 
}

export function convertJoke(data: JokeAPI): Joke {
    return {question: data.setup, answer: data.delivery, id: data.id}
}