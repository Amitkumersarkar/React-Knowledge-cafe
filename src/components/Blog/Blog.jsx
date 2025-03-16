import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
    // console.log(blog);
    const { title, cover, author, author_image, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-2 p-4'>
            <img className='p-4 w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='p-4'>
                    <img className='w-14' src={author_image} alt="" />
                    <div>
                        <span>{author}</span>
                        <div>
                            <span>{posted_date}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-pink-600'><FaRegBookmark></FaRegBookmark> </button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) =>
                        <span key={index}>
                            <a href="">#{hash}</a>
                        </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.function
}

export default Blog;