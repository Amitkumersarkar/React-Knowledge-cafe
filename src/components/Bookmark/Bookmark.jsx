import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {

    const { title } = bookmark;

    return (
        <div className="bg-cyan-700 p-4 m-4 rounded-2xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

Bookmark.PropTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;