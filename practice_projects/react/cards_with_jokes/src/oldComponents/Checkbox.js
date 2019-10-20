import React from "react"

const Checkbox = ( () => {

    const testProp = {
        backgroundColor: "purple",
        textColor:"blue",
        fontSize:"300%"
    }

    return(
        <div>
            <input type="checkbox"></input>
            <span style={testProp}> Hard code...</span>
        </div>
    )
});

export default Checkbox