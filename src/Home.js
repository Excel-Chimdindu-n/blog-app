
import useFetch from "./useFectch";
import Bloglist from "./Bloglist";
import { useState } from "react";

const Home = () => {
    // variables
    const { data:blogs, isLoading, error} = useFetch("http://localhost:3501/blogs")
    const [author, setAuthor] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState(null);
  
    // functions And effects
    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredBlogs = blogs.filter((blog) => blog.author.includes(author));
        setFilteredBlogs(filteredBlogs);
      };
      

    // main code
    return (
        <div className="home">
             <form className="form-inline d-flex my-2 my-lg-0 mx-3" onSubmit={handleSubmit}>
                <input type="text" className="form-control" id="" autoCapitalize="on" value={author} onChange={(e)=>{setAuthor(e.target.value)}}  placeholder="Enter the Author's name"/> 
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div id="content" className="container">
                {error && <div className="error-display jumbotron text-danger"><h2> {error}😓</h2> <p className="text-danger ">Check your server link !!😐 </p></div> }
                {isLoading && <h6 className=" text-info"><span className="spinner-border"></span> Loading ...</h6>}
                {filteredBlogs ? (<Bloglist blogs={filteredBlogs} title ={`${author} blogs`} />) : 
                                 (blogs && <Bloglist blogs={blogs} title="All blogs" />)}

            </div>
        </div> 
        );
}
 
export default Home;