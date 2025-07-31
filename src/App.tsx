import { useContext, useEffect, useState } from "react"
import Card from "./assets/Components/Card"
import JokeBtn from "./assets/Components/JokeBtn"
import getJoke from "./assets/API/getJoke"
import type { Joke } from "./assets/utils/types"
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
  const [loading, setLoading] = useState(false)

  async function changeJoke(){
    setLoading(true)
    getJoke().then(joke => {
      setCurrentJoke(joke)
      setLoading(false)
      console.log('loadign false', loading)
    })
  }
  
  useEffect(() => {
    changeJoke()
  }, [])

  return (
    <>
      <div className="main flex flex-col items-center justify-between py-7">
        <Navbar />

        { status === 'joker' ? <Card question={currentJoke.question} answer={currentJoke.answer} loading={loading} /> : '' }
        { status === 'create' ? <CardAdd /> : ''}
        <MenuBtnMobile />
        
        <div className="flex w-full justify-between px-12 md:px-24 items-center">
          <img src="/why.svg" alt="" className="w-30" />
         { status === 'joker' ? <JokeBtn click={changeJoke}/> : '' }
         { status === 'create' ?  <AddJokeBtn click={() => {
          setTimeout(() => setAlert(''), 3000)
          setAlert('add')}
          } /> : '' }
        </div>
        
        <Popup   />
      </div>
    </>
  )
}

export default App
