import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState ([
        {title: 'My Web Site', author: 'Premil', id: 1},
        {title: 'My Blog Site', author: 'Jayasundara', id: 2},
        {title: 'My FB Site', author: 'Ranganath', id: 3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog =>blog.id !== id);
        setBlog(newBlogs);
    }

    useEffect(() => {                                   //useEffect Hook - [ReactJS Tutorials 14]
        console.log('use effect run')
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;