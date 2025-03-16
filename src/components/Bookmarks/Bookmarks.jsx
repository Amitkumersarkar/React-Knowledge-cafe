
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3">
            <h2 className="text-3xl">Bookmarks : {bookmarks.length}</h2>
        </div>
    );
};

export default Bookmarks;