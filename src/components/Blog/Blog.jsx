import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover, author, author_image, reading_time, } = blog;
    return (
        <div>
            <img className='p-4' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div>
                    <img className='w-14' src={author_image} alt="" />
                    <div>

                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;