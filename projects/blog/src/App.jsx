import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="relative overflow-hidden min-h-screen bg-gray-50">
        <Navbar />

        <div className="max-w-7xl mx-auto py-4 px-8 mt-8 z-10 bg-white shadow-xl rounded-md">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
