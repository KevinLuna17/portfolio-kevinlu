import ProfileImage from "./assets/react.svg";

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-gray-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-4">
          <div className="flex items-center md:justify-center gap-4 mb-12">
            <img
              src={ProfileImage}
              alt="kevinlu"
              className="rounded-full shadow-lg size-16"
            />
            <a
              href="https://www.google.com"
              rel="noopener"
              className="rounded-full border border-blue-200 p-2 transition md:hover:scale-105"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Disponible para trabajar
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-10 items-center mb-12 max-w-xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Im' Kevinlu
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              +5 años de experiencia. {""}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                Ingeniero en Sistemas Computacionales. Apasionado por la
                tecnologia y la seguridad Informatica.
              </span>{" "}
              Soy de Guayaquil, Ecuador 🇪c. Especializado en el desarrollo de
              aplicaciones web y moviles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
