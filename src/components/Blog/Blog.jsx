import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover } = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div>

                </div>
                <div>

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