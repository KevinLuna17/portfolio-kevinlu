function About() {
  return (
    <section id="about-me" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold mb-12">Acerca de mi</h2>
        <div className="grid md:grid-cols-2 gap-7">
          <div className="flex items-center justify-center">
            <img
              src="/kevinlu.jpeg"
              alt="Kevin Luna"
              className="size-52 p-1 object-center rotate-3 lg:p-2 aspect-square rounded-2xl bg-gray-50 ring-1 ring-gray-400"
            />
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <p>
              Ingeniero en Sistemas Computacionales con experiencia en
              desarrollo de sotware utilizando tecnologias como React Native,
              React, C# Java, MySQL, PL/SQL, Firebase. Soy de Guayaquil Ecuador.
              Amo la tecnologia y el desarrollo de software.
            </p>
            <p>
              Participe en proyectos como Innova, administracion de accesos
              privilegiados (PAM), SAP GRC y controles ISO 27001 por parte del
              equipo de Claro Ecuador como Analista de Seguridad de la
              Informacion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
