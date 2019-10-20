import React from "react"
import CardFront from "./CardFront"
import CardBack from "./CardBack"

const FlipCard = ((params) => {
   const question = params.joke.question
   const answer = params.joke.answer

    const joke = {question: question, answer: answer}

   if(question === undefined){
       //Do something..
   }
    return(
        <div>
           

            <div className="flip-card">
                <div className = "flip-card-inner">
                    < CardFront />
                    < CardBack joke={joke}/>


                </div>
            </div>

        </div>
    )
})


export default FlipCard