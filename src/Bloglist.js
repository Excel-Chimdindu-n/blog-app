import { Link } from "react-router-dom";
const Bloglist = ({blogs, title}) => {

    return ( 
        <div className="bloglist card-container">
            <h3 className="text-info my-4">{title}🗒️</h3>
            {
                blogs.map((blog)=>{
                    return(
                        // creates the blogs individually by targeting the key which is the blog id in this case 
                        <div className="blog-preview card shadow" key={blog.id} data-toggle="tooltip" data-placement="top" title="Click to See Blog">
                            <Link className="stretched-link" to={`/blogs/${blog.id}`}>
                            <h2 className=" card-title">{blog.title}</h2>
                            <span className="card-text">Written by:<b className="text-info"> {blog.author}</b> </span>
                            </Link>
                        </div>
                    )
                })
            }
        </div> 
        );
}
 
export default Bloglist;