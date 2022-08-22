import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import Create from './pages/Create';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
