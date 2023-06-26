import React from "react";

export default function Meme(){
    const [memes, setMemes] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    })

    const[allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(results => results.json())
            .then(data => setAllMemes(data.data.memes)) 
    }, [])

   /*  const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg") */

   function GetMemeImage() {
    const randomNumber = Math.floor(Math.random()*allMemes.length)
    const url = allMemes[randomNumber].url
    setMemes(prevMeme => ({
        ...prevMeme,
        randomImage:url
    }))
}


    function handleChange(event){
        const {name,value} = event.target
        setMemes(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        value={memes.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={memes.bottomText}
                        onChange={handleChange}
                    />
                    <button 
                        className="form--button"
                        onClick={GetMemeImage}
                    >Get a new meme image😁</button>
                </div>
                <div className="meme">
                    <img src={memes.randomImage} className="meme--image"/>
                    <h2 className="meme--text top">{memes.topText}</h2>
                    <h2 className="meme--text bottom">{memes.bottomText}</h2>    
                </div>
                
        </main>
    )
}
