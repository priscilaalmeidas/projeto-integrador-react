import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-blue-950 text-white flex justify-between items-center p-4">
      <button onClick={() => navigate("/")}>
        <p className="text-2xl cursor-pointer">My App Unyleya</p>
      </button>
      <p className="text-sm">© 2025 My App. Todos os direitos reservados.</p>
      <nav>
        <ul className="flex flex-col space-x-4 items-center">
          <li>
            <Link to="/contact-us" className="hover:underline">
              Fale Conosco
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:underline">
              Termos de Serviço
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
