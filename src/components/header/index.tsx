export default function Header() {
  return (
    <header className="bg-blue-950 text-white flex justify-between items-center p-4">
      <h1 className="text-3xl ">My App</h1>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Quem Somos
            </a>
          </li>
          <li>
            <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Entrar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
