import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover, author, author_image, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='p-4' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='p-4'>
                    <img className='w-14' src={author_image} alt="" />
                    <div>
                        <span>{author}</span>
                        <div>
                            <span>{posted_date}</span>
                        </div>
                        <div>
                            <span>{hashtags}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>

        </div >
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;