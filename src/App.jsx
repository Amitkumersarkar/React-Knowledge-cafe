import { useState } from 'react';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';
import './index.css';
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    // console.log('bookmarks adding soon');
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App;