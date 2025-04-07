function Hero() {
  return (
    <section className="py-10 md:py-20 scroll-m-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center md:justify-center gap-4 mb-12">
          <img
            src="/kevinsurf.webp"
            alt="kevinlu"
            className="rounded-full shadow-lg size-16 lg:size-26"
          />
          <a
            href="https://www.linkedin.com/in/kevin-luna-gonzalez-a2168b194/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center rounded-full p-2 cursor-pointer transition md:hover:scale-105"
          >
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
              <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap">
                Disponible para trabajar
              </div>
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-10 md:items-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 mb-6">
            Hola, soy Kevin Luna
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            +5 años de experiencia. {""}
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Ingeniero en Sistemas Computacionales. Amo el Desarrollo de
              Software y la Seguridad Informatica.
            </span>{" "}
            Soy de Guayaquil, Ecuador 🇪c. Especializado en el desarrollo de
            aplicaciones web y moviles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
