import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
     // varibles / states
     const [title, setTitle] = useState('');
     const [content, setBody] = useState('');
     const [author, setAuthor] = useState('Excel')
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();

    // fuctions and Effects
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = { title, content, author };
        console.log(blog)
        setIsLoading(true);

        fetch("http://localhost:3501/blogs", {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
          }).then(() => {
            setIsLoading(false);
          }).then(()=>{
            navigate("/")
          });
          
    }
    const handleReset = (e)=>{
        e.preventDefault();
        setAuthor("");
        setBody("");
        setTitle("");
    }
    // main code
    return(
        <div className="create container">
        <h2 className="d-flex m-4 text-info">Add a New Blog</h2> 
        
        
        {/* <Link to="/" className="btn btn-primary">Back</Link> */}
        <form className="form" onSubmit={handleSubmit}>

            <div className="form-group m-3">
                <label >Blog Title:</label>
                <input
                    type="text" 
                    className="form-control"
                    required
                    autoCapitalize="words"
                    placeholder=" Blog Title"
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value)}} 
                />
            </div>
            <div className="form-group m-3">
                <label>Blog Author:</label>
                <input
                    type="text"
                    className="form-control"
                    required
                    value={author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                />
            </div>
            <div className="form-group m-3">
                <label >Blog Author</label>
                <select
                 value={author}
                 onChange={(e)=>{setAuthor(e.target.value)}}
                 >
                    <option className="p-3 m-2" value="Predator">Predator</option>
                    <option className="p-3 m-2" value="Excel">Excel</option>
                    <option className="p-3 m-2" value="Loner">Loner</option>
                    {/* {Add more options} */}
                </select>
            </div>
            <div className="form-group m-3">
                <label >Blog Content:</label>
                <textarea  
                    className="form-control"
                    required
                    placeholder="Enter Content"
                    value={content}
                    onChange={(e)=>{setBody(e.target.value)}}
                >
                </textarea>
            </div>
            <div className="row mx-auto d-flex btn-group">
            {!isLoading && <button type="submit" className="col-6 m-4 btn btn-primary ">Add Blog</button>}
            {isLoading && <button type="submit"className="col-6 m-4 btn btn-primary " disabled><span className="spinner-border text-info"></span>Adding Blog</button>}
            <button type="button" onClick={handleReset} className="col-2 btn btn-danger m-4 "> Reset </button>
            </div>
        </form>
    </div>
    // to capture the info gotten from the form above
    //  1 >  we setup some states for the values to be collected 
    //  2 >  give the values of the states to the input tags   
    //  2 >  add the onChange event and the e.target.value to change the state  
    )
}

export default Create;