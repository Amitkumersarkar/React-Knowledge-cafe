import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1 className="text-4xl p-3">Blogs: {blogs.length}
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </h1>
        </div>
    );
};

export default Blogs;