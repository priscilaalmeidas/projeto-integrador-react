import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-950 text-white flex justify-between items-center p-4">
      <button onClick={() => navigate("/")}>
        <h1 className="text-xl pl-4 cursor-pointer">My App Unyleya</h1>
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
            <button
              onClick={() => navigate("/login")}
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Entrar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
