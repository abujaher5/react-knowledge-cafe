import "./App.css";
import "./index.css";
import Header from "./components/Headers/Header";
import Blogs from "./components/Headers/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    console.log("bookmark adding soon");
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between items-center  max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
