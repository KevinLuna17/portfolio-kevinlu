function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 px-4 md:px-0 lg:px-8 z-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-14">
          <nav className="flex justify-center items-center gap-4 text-sm font-medium text-gray-600 p-2 rounded-full backdrop-blur-sm shadow-md">
            <li className="list-none">
              <a href="#experiencia" className="transition hover:text-blue-500">
                Experiencia
              </a>
            </li>
            <li className="list-none">
              <a href="#proyectos" className="transition hover:text-blue-500">
                Proyectos
              </a>
            </li>
            <li className="list-none">
              <a href="#sobre-mi" className="transition hover:text-blue-500">
                Sobre mi
              </a>
            </li>
            <li className="list-none">
              <a
                href="#mailto:kelugo_14@hotmail.com"
                className="transition hover:text-blue-500"
              >
                Contacto
              </a>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
