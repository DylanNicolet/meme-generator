import logo from "./images/troll-face.png"

export default function Header(){
    return(
        <header>
            <img className="header--image" src={logo} />
            <h1 className="header--title">Meme Generator</h1>
            <p className="header--description">React Course Project 3</p>
        </header>
    )
}