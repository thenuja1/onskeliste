import React, {useState} from "react"
import ReactDOM from "react-dom"
import './App.css'
import Tags from './components/Tags'

const varene = ["iPhone 11", "Sokker", "Shrek 3"]

const App = () => {
  const [nyVare, setNyVare] = useState("")
  const [onskeliste, setOnskeliste] = useState(varene)
  
  const addVare = () => {
    setOnskeliste([...onskeliste, nyVare])
    setNyVare("")
  }
  
  const endreNyVare = (evt) => {
    setNyVare(evt.target.value)
  }
  
  const slett = (i) => {
    console.log(i)
    let kopi = [...onskeliste]
    kopi.splice(i, 1)
    setOnskeliste(kopi)
  }
  
  return (
    <section className="minOnskeliste">
      <h1>Min ønskeliste</h1>
      
      <input className='nyVare'onChange={endreNyVare} type="text" value={nyVare}/>
      <button onClick={addVare}>Legg til vare</button>
      
      <div className='liste'>
        {
          onskeliste.map( 
            (vare, i) => <p key={i}>{vare} <Tags/> <button className='slett'onClick={() => slett(i)}>Klikk her for å slette fra liste</button></p>
          )
        }
      </div>
      
    </section>
  )  
}

ReactDOM.render(<App/>, document.getElementById('root'))

export default App