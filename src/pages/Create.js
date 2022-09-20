import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Bassem');
  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    fetch('https://blog-eg.herokuapp.com/blogs/',{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      navigate('/');
    })
  }

  return (
    <div className="create card shadow-sm p-4 mx-2">
      <h2 className="text-primary">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Bassem">Bassem</option>
          <option value="N/A">N/A</option>
        </select>
        <button className="btn btn-outline-primary">Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
