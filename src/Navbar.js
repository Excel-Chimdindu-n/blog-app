import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    // variables
    const body = document.querySelector("body");
    let bgColor = "#ffffff";
    const [mode, setMode] = useState("night");
   

    // functions and effects
    // useEffect(()=>{

    // },[])
    const handleBackgroundColor = () => {

        if (bgColor === "#ffffff") {
            bgColor = "#000";
            body.style.backgroundColor = bgColor;
            body.style.color = "white";
            setMode("day");
        } else {
            bgColor = "#fff";
            body.style.backgroundColor = bgColor;
            body.style.color = "white";
            setMode("night");
        }
        
    }

    return ( 
        <div className="navbar">
               <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top" >
                <a className="navbar-brand mx-3" href="/">RealBlogs</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-around" id="collapsibleNavId">
                    <ul className="navbar-nav d-flex mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active mx-2">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/create">AddBlog</Link>
                        </li>
                        <li className="nav-item  mx-2">
                            <Link className="nav-link " to="/link2">Link2</Link>
                        </li>
                    </ul>                   
                    <button className="btn btn-dark border-light" onClick={handleBackgroundColor}>{mode}</button> 
                </div>

               </nav>
        </div> 
    );
}
 
export default Navbar;