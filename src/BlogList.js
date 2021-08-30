const BlogList = (props) => {               /*const BlogList =( {blogs, title} ) => {return ();} */
    const blogs = props.blogs;              // can be PROPS create upper methods
    const title = props.title;
    const handleDelete = props.handleDelete;

    return (  
        <div className="blogList">
            <h2>{title}</h2>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Wietten By {blog.author}</p>
                    <button onClick= {() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;