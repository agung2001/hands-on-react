import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-hidden min-h-screen bg-gray-50">
        <Navbar />

        <div className="max-w-7xl mx-auto py-4 px-8 mt-8 z-10 bg-white shadow-xl rounded-md">
          <h1>Blog</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
