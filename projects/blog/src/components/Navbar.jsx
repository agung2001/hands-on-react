import { useNavigate, Link, useLocation } from 'react-router-dom';
import routes from '../routes';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-white border-1 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl">😎</span>
              <span className="pl-2 self-center whitespace-nowrap text-xl">Agung Sundoro</span>
            </a>
          </div>

          {/* Navbar Menu */}
          <div className="ml-10 flex items-center space-x-4">
            {routes.map(
              (menu) =>
                menu.isMenu && (
                  <Link
                    key={menu.path}
                    to={menu.path}
                    className={`px-3 py-2 ${
                      location.pathname === menu.path ? 'bg-yellow-300' : 'hover:bg-yellow-400'
                    }`}
                  >
                    {menu.name}
                  </Link>
                )
            )}

            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer bg-gray-100 text-white px-4 py-2 rounded-md"
            >
              ⬅️
            </button>
            <button
              onClick={() => navigate(1)}
              className="cursor-pointer bg-gray-100 text-white px-4 py-2 rounded-md"
            >
              ➡️
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
