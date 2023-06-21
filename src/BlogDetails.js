import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFectch";


const BlogDetals = () => {
    // variables
    const {id} = useParams();
    const {data:blog, isLoading, error} = useFetch(" http://localhost:3501/blogs/"+ id);
    const navigate = useNavigate();
    // functions
    const handleClick = ()=>{
        fetch(" http://localhost:3501/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate("/")
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <h6 className=" text-info"><span className="spinner-border"></span> Loading ...</h6>}
            {error && <div className="error-display jumbotron text-danger">{error}😓<p className="text-danger">Check your server link !!😐</p></div>}
            {blog && (
                <article className="container">
                     <h2 className="">{blog.title}</h2>
                    <span>Written by: {blog.author}</span>
                    <div>
                        {blog.content}
                    </div>
                    <button className="btn btn-danger" onClick={handleClick} >Delete Blog</button>
                    <Link to="/" className="btn m-4 btn-primary">Back</Link>
                </article>
                )
            }
            
        </div>
     );
}
 
export default BlogDetals;