import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className="mb-20">
      <img
        className="rounded-xl w-full mb-8"
        src={cover}
        alt={`Cover picture`}
      />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="w-14" src="src/assets/images/boy1.png" alt="" />

          <div className="space-y-3">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}</span>

          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="" className="text-blue-800 ">
              {" "}
              #{hash}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
export default Blog;
