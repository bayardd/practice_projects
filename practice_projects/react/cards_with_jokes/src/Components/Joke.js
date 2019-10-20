import React from "react"
import FlipCard from "./FlipCard"
// import FlipCard from "./FlipCard"

//each joke component gets a question + punchline parameter
// If questiom not received, how to show only punchline instead?

const joke1 = {
    question: "What did the fox say", answer: "song..",
}

const joke2 = {
    question: "What did the squirrel say", answer: "nutz"
}

const joke3 = {
    question: "What did the turtle say", answer: "..."
}

const Joke = (() => {
    //send question + punchline back as one object
    //if object parameter of question is empty, just display the punch line
    
    return(
        <div>
            <FlipCard joke = {joke1} />
            <FlipCard joke = {joke2} />
            <FlipCard joke = {joke3} />
        </div>


    )
});

export default Joke