import { useContext, useEffect, useState } from "react"
import Card from "./assets/Components/Card"
import JokeBtn from "./assets/Components/JokeBtn"
import {getJoke} from "./assets/API/API"
import { convertJoke, type Joke } from "./assets/utils/types"
import MenuBtnMobile from "./assets/Components/MenuBtnMobile"
import CardAdd from "./assets/Components/CardAdd"
import AddJokeBtn from "./assets/Components/AddJokeBtn"
import { AlertContext, StatusContext } from "./assets/context/status"
import Navbar from "./assets/Components/Navbar"
import Popup from "./assets/Components/Popup"

function App() {
  const [status] = useContext(StatusContext)
  const [, setAlert] = useContext(AlertContext)

  const [currentJoke, setCurrentJoke] = useState<Joke>({question: "", answer:""})
  const [createJoke, setCreateJoke] = useState<Joke>({question: "", answer:""})
  const [loading, setLoading] = useState(false)

  function changeCreateJoke(joke: Joke){
    setCreateJoke(joke)
  }

  async function changeJoke(){
    setLoading(true)
    await getJoke().then(joke => {
      setCurrentJoke(convertJoke({delivery: joke.delivery, setup: joke.setup, id: joke.id}))
      console.log('loadign false', loading)
    })
    setLoading(false)
  }
  
  useEffect(() => {
    changeJoke()
  },[null])

  return (
    <>
      <div className="main min-h-dvh flex flex-col items-center justify-between py-7">
        <Navbar jokeId={currentJoke.id}/>

        { status === 'joker' ? <Card question={currentJoke.question} answer={currentJoke.answer} loading={loading} /> : '' }
        { status === 'create' ? <CardAdd action={changeCreateJoke} /> : ''}
        <MenuBtnMobile jokeId={currentJoke.id} />
        
        <div className="flex w-full justify-between px-12 md:px-24 items-center">
          <img src="/why.svg" alt="" className="w-30" />
         { status === 'joker' ? <JokeBtn click={changeJoke}/> : '' }
         { status === 'create' ?  <AddJokeBtn action={() => setAlert("add")} joke={createJoke}/> : '' }
        </div>
        
        <Popup   />
      </div>
    </>
  )
}

export default App
