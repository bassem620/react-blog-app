import {Link} from 'react-router-dom';

const BlogList = ({blogs}) => {
  return (
    <>
      <div className="d-flex flex-column gap-3 nav-margin">
        {
          blogs.map(blog => {
            return (
              <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
                <div className="card shadow-sm" key={blog.id}>
                  <div className="card-body">
                    <h4 className='card-title text-primary'>{blog.title}</h4>
                    <p className='card-text'>Written by: {blog.author}</p>
                  </div>
              </div>
              </Link>)
          })
        }
      </div>
    </>
  );
}

export default BlogList;

