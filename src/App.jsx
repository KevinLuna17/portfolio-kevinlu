import ProfileImage from "./assets/react.svg";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-gray-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Header />
      {/* Hero Section */}
      <section className="py-10 md:py-20 scroll-m-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center md:justify-center gap-4 mb-12">
            <img
              src={ProfileImage}
              alt="kevinlu"
              className="rounded-full shadow-lg size-16"
            />
            <a
              href="https://www.linkedin.com/in/kevin-luna-gonzalez-a2168b194/"
              rel="noopener"
              target="_blank"
              className="flex items-center rounded-full border border-blue-200 p-2 cursor-pointer transition md:hover:scale-105"
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent text-sm whitespace-nowrap">
                Disponible para trabajar
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-10 md:items-center mb-12 max-w-xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-800 mb-6">
              Im' Kevinlu
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              +5 años de experiencia. {""}
              <span className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
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
