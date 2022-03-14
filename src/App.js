import logo from "./logo.svg"
import "./App.css"
import axios from "axios"
import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const accessDB = () => {
    axios
      .get("/api/info")
      .then((res) => {
        console.log(res.data)
        setName(res.data.name)
        setPrice(res.data.price)
      })
      .catch((err) => console.log(err.res.data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{name ? name : "No Product..."}</h2> {/*ternary*/}
        <h3>{price ? price : "No price.."}</h3> {/*ternary*/}
        <button onClick={accessDB}>Access Database</button>
      </header>
    </div>
  )
}

export default App
