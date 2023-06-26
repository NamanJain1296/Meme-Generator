import React from "react";
import Troll from "./troll-face.png"

export default function Header(){
    return(
        <header className="header">
            <img src={Troll} className="header--image"/>
            <h2 className="header--title">MemeGenerator</h2>
        </header>
    )
}