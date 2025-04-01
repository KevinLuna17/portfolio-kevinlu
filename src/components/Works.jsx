import ImgProyecto from "../assets/react.svg";

function Works() {
  const technologies = {
    REACT: {
      name: "Reactjs",
      className: "text-blue-600",
    },
    NATIVE: {
      name: "React Native",
      className: "text-[#61DBFB]",
    },
    TAILWIND: {
      name: "Tailwind CSS",
      className: "text-[#38BDF8]",
    },
    FIREBASE: {
      name: "Firebase",
      className: "text-[#F57C00]",
    },
  };
  const projects = [
    {
      id: 0,
      title: "Salud en Casa Web",
      image: "/projects/sc_web.png",
      description:
        "Dashboard para gestionar los servicios ofrecidos y usuarios con rol de medicos del negocio.",
      techs: [technologies.REACT, technologies.FIREBASE],
      github: "https://github.com/KevinLuna17/WebSaludEnCasa",
      link: "https://github.com/KevinLuna17/WebSaludEnCasa",
    },
    {
      id: 1,
      title: "Salud en Casa App",
      image: "/projects/sc_app.png",
      description:
        "Aplicacion movil Android para solicitar servicios medicos a domicilio en Guayaquil.",
      techs: [technologies.NATIVE, technologies.FIREBASE],
      github: "https://github.com/KevinLuna17/saludEnCasa_reactNative",
      link: "https://github.com/KevinLuna17/saludEnCasa_reactNative",
    },
    {
      id: 2,
      title: "Netflix Clone",
      image: "/projects/netflix_clone.png",
      description:
        "Sitio web como Netflix en React JS con un video dedicado a mi novia por su cumpleanos.",
      techs: [technologies.REACT, technologies.TAILWIND],
      github: "https://github.com/KevinLuna17/reactjs-netflix-clone",
      link: "https://reactjs-netflix-clone.vercel.app/",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-6xl">
        <h2 className="text-3xl font-bold mb-12">Proyectos</h2>

        {/* ProjectsCards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
            ({ id, title, image, description, techs, github, link }) => {
              return (
                <div
                  key={id}
                  className="flex flex-col gap-5 items-center justify-center p-6 bg-white rounded-xl shadow-sm"
                >
                  <img
                    src={image}
                    className="w-full object-cover aspect-video rounded-lg overflow-hidden hover:scale-110 block transition"
                  />
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                  <ul className="flex flex-wrap gap-7">
                    {techs.map((tag, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 rounded-full py-1 px-2"
                      >
                        <span className={`text-sm ${tag.className}`}>
                          {tag.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-7">
                    <li>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg px-3 py-2 text-xs text-center md:text-base text-gray-800 bg-white transition border border-gray-300 hover:bg-gray-800 hover:border-gray-900 hover:text-white active:bg-black"
                      >
                        Preview
                      </a>
                    </li>
                    <li>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg px-3 py-2 text-xs text-center md:text-base text-gray-800 bg-white transition border border-gray-300 hover:bg-gray-800 hover:border-gray-900 hover:text-white active:bg-black"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Works;
