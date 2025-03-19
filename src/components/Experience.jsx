function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Experencia Laboral</h2>

        {/* Resume */}
        <div className="relative mx-12 pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 before:content-[''] md:space-x-4]">
          <div className="flex flex-row gap-16 mb-12">
            <div className="relative pb-4">
              <div className="sticky top-0">
                <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">
                  •
                </span>
                <h3 className="text-xl font-bold text-yellow-400 mb-2 whitespace-nowrap">
                  Information Security Analyst
                </h3>
                <h4 className="text-xl font-semibold text-gray-600">
                  Global Hitss 🇪c
                </h4>
                <time className="text-sm text-gray-600/80">Actualmente...</time>
              </div>
            </div>

            <p className="text-gray-600">
              Divulgo sobre programación y desarrollo web en diferentes
              plataformas. Galardonado como mejor creador de contenido de habla
              no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
            </p>
          </div>

          {/* Mejorar codigo en esta parte */}
          <div className="flex flex-row gap-16">
            <div className="relative pb-4">
              <div className="sticky top-0">
                <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">
                  •
                </span>
                <h3 className="text-xl font-bold text-yellow-400 mb-2 whitespace-nowrap">
                  Information Security Analyst
                </h3>
                <h4 className="text-xl font-semibold text-gray-600">
                  Global Hitss 🇪c
                </h4>
                <time className="text-sm text-gray-600/80">Actualmente...</time>
              </div>
            </div>

            <p className="text-gray-600">
              Divulgo sobre programación y desarrollo web en diferentes
              plataformas. Galardonado como mejor creador de contenido de habla
              no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
