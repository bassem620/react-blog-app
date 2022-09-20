import useFetch from '../useFetch';
import BlogList from '../components/BlogList';

const Home = () => {
  const {error, isPending, data: blogs} = useFetch('http://localhost:8000/blogs');
  return (
    <>
    <div className="nav-margin container">
      {error && <span className='fs-4 fw-bold'> {error} </span>}
      {isPending && <span className='fs-4 fw-bold'>Loading...</span>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
    </>
  );
}

export default Home