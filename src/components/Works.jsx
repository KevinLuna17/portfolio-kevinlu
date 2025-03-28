import ImgProyecto from "../assets/react.svg";

function Works() {
  const projects = [
    {
      title: "Salud en Casa Web",
      image: ImgProyecto,
      description:
        "Dashboard para gestionar los servicios ofrecidos y usuarios con rol de medicos del negocio.",
      github: "https://github.com/KevinLuna17/WebSaludEnCasa",
    },
    {
      title: "Salud en Casa App",
      image: ImgProyecto,
      description:
        "Aplicacion movil Android para solicitar servicios medicos a domicilio en Guayaquil.",
      github: "https://github.com/KevinLuna17/saludEnCasa_reactNative",
    },
    {
      title: "Netflix Clone",
      image: ImgProyecto,
      description:
        "Sitio web como Netflix en React JS con un video dedicado a mi novia por su cumpleanos.",
      github: "https://github.com/KevinLuna17/reactjs-netflix-clone",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold mb-12">Proyectos</h2>

        {/* ProjectsCards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-5 items-center justify-center p-6 bg-white rounded-xl shadow-sm"
              >
                <img src={project.image} className="size-20 hover:scale-105" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                <ul className="flex flex-wrap gap-7">
                  <li className="text-sm text-gray-400">React</li>
                  <li className="text-sm text-gray-400">Tailwind</li>
                </ul>
                <ul className="flex flex-wrap gap-7">
                  <li>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg px-3 py-2 text-xs text-center md:text-base text-gray-800 bg-gray-100 transition border border-gray-300 hover:bg-gray-800 hover:border-gray-900 hover:text-white active:bg-black"
                    >
                      Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg px-3 py-2 text-xs text-center md:text-base text-gray-800 bg-white transition border border-gray-300 hover:bg-black/10"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Works;
