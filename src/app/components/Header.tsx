import "../styles/header.css";
import Image from "next/image";

export default function Header() {

    return(
        <header>
        <div className="overlay">
    <h1>My Personal Blog</h1>
    <h3>Spending my free time writing stories</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
        <br/>
        <a href="#blogs"><button>READ MORE</button></a>
            </div>
    </header>
    
    );
}