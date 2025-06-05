import { Link, useNavigate } from "react-router-dom";

export default function HeaderAdmin() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-950 text-white flex justify-between items-center p-4">
      <div className="flex justify-between w-full p-4">
        <button onClick={() => navigate("/")}>
          <h1 className="text-xl cursor-pointer">My App Unyleya</h1>
        </button>
        <nav>
          <ul className="flex space-x-4 items-center ">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Sair
              </Link>
            </li>
            <li>
              <button
                onClick={() => navigate("/login")}
                className="text-amber-600 bg-white px-4 py-2 rounded hover:text-white cursor-pointer hover:bg-amber-600"
              >
                Anunciar
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
