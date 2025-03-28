function Experience() {
  const experiences = [
    {
      title: "Desarrollador de Software",
      company: "Freelance",
      time: "Actualmente",
      description:
        "Desarrolle un sistema web administrativo y aplicativo movil Android para asistir en servicios medicos a domicilio a los habitantes de Guayaquil utilizando tecnologias como React, React native y Firebase. Desarrolle landing page de un profesional en economia utilizando Wordpress",
    },
    {
      title: "Analista de Seguridad de la Informacion",
      company: "Global Hitss 🇪c",
      time: "May 2022 - Ene 2024",
      description:
        "Desarrolle procesos automaticos utilizando PL/SQL, NodeJs, Power Automate y Shell Scripting para el analisis y ejecucion de los controles SOX de accesos no autorizados y temporalidad de cuentas de usuarios. Responsable de la creacion, eliminacion, modificacion y control de accesos de usuarios internos y externos en IAM y Azure AD.",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Experiencia Laboral</h2>

        {/* Resume */}
        <div className="relative mx-12 pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:space-x-4]">
          {experiences.map((value, index) => {
            return (
              <div key={index} className="flex flex-row gap-16 mb-12">
                <div className="relative pb-4">
                  <div className="sticky top-0">
                    <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">
                      •
                    </span>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2 whitespace-nowrap">
                      {value.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-600">
                      {value.company}
                    </h4>
                    <time className="text-sm text-gray-600/80">
                      {value.time}
                    </time>
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
