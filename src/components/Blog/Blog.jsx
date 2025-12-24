import PropTypes from 'prop-types';
const Blog = ({blog}) => {
      const {title, cover, author, auhor_img, posted_date, reading_time, hashtage} = blog;
      return (
            <div>
                  <img src={cover} alt={`Cover picture of the title ${title}`} />
                  <div className="flex justify-between m-4 items-center">
                        <div className='flex'>
                              <img className='w-14 rounded-full' src={auhor_img} alt="" />
                              <div className='ml-4'>
                                    <h3 className='text-2xl font-bold'>{author}</h3>
                                    <p>{posted_date}</p>
                              </div>
                        </div>
                        <div>
                              <span>{reading_time}</span>
                              <button></button>
                        </div>
                  </div>
                  <h2 className="text-4xl">{title}</h2>
                  <p>
                        {
                              hashtage.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                        }
                  </p>
            </div>
      );
};

Blog.propTypes = {
      blog: PropTypes.object.isRequired
}

export default Blog;