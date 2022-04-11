import React from "react";

export default function ShowQuotes({ simpsons }) {
    console.log(simpsons)
    return (
        simpsons &&
        <div>
            <h1>API REACT SIMPSONS</h1>
            <p>{simpsons[0].character}</p>
            <p>{simpsons[0].quote}</p>
            <img src={simpsons[0].image} alt="simpsons perso" />
        </div>

    )
}