export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <p className="text-2xl">My App</p>
      </div>
      <p className="text-sm">© 2025 My App. Todos os direitos reservados.</p>
      <nav>
        <ul className="flex flex-col space-x-4 items-center">
          <li>
            <a href="#contact" className="hover:underline">
              Contato
            </a>
          </li>
          <li>
            <a href="#privacy" className="hover:underline">
              Política de Privacidade
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:underline">
              Termos de Serviço
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
