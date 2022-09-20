import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../useFetch';

const BlogDetails = () => {
  const {id} = useParams();
  const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+ id );
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: "DELETE"
    })
    .then(() => {
      navigate('/');
    })
  }

  return (
    <div className="blog-details nav-margin">
      <div className="container">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        {blog && (
          <article className="w-100">
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <hr />
            <div className="body-text">{ blog.body }</div>
            <button className="btn btn-danger my-4 d-block ms-auto" onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>
    </div>
  );
}

export default BlogDetails;