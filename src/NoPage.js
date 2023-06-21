import { Link } from "react-router-dom";


function NoPage(){
    return ( 
        <div className="no-page bg-info container p-5">
            <h1 className="">Sorry 😥!!</h1>
            <p className="">Couldn't find the page</p>
            <Link className="btn btn-primary" to="/" >Back to home</Link>
        </div>
    )
}

export default NoPage;