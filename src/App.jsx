import "./App.css";
import "./index.css";
import Header from "./components/Headers/Header";
import Blogs from "./components/Headers/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between items-center ">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
