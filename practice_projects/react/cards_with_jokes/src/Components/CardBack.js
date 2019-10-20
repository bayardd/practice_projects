import React from "react"

const CardBack = ((params) => {
    return(
        <div className="flip-card-back">
            <p> Question: {params.joke.question}</p>
            <p> Answer: {params.joke.answer}    </p>
        </div>
    )
})

export default CardBack