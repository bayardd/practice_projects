import React from "react"
import Joke from "./Joke"
import  "../styles/style.css"

const App = (() => {
  return(
    <div>
      <h1> Welcome to the Joke Booth </h1>
      <h3> Hover over the image below to show a joke!</h3>
      <Joke />
    </div>
  )
})

export default App;