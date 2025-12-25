import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {

  const {
    title,
    cover,
    author,
    auhor_img,
    posted_date,
    reading_time,
    hashtage,
  } = blog;

  return (
    <div className="mb-20  space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between m-4 items-center">
        <div className="flex">
          <img className="w-14 rounded-full" src={auhor_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-blue-600 hover:text-green-500"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>

      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p>
        {hashtage.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button 
      className="text-purple-800 font-bold underline"
      onClick={() => handleMarkAsRead(reading_time)}
      >Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
