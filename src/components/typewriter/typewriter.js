import React from "react"
import Typewriter from "typewriter-effect";

export default function Typer() {

    return (
        <>
            <Typewriter onInit={(typewriter)=> { 
                typewriter 
                .typeString("I'm Web publisher")
                .pauseFor(1000)
                .deleteAll()
                .typeString("but I...")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Front-end developer Too!")
                .start();
                }}/>
        </>
    );
}