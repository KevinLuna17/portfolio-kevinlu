function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold mb-12">About me</h2>
        <div className="grid md:grid-cols-2 gap-7">
          <div className="flex items-center justify-center">
            <img
              src="/kevinlu.jpeg"
              alt="Kevin Luna"
              className="size-52 p-1 rotate-3 lg:p-2 aspect-square rounded-2xl bg-gray-50 ring-1 ring-gray-400"
            />
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <p>
              I'm a Software Engineer, Content creator from Lima Peru and a
              recognized Google Developer Expert. I love technology and mobile
              software development, working on Android / iOS mobile applications
              since 2010.
            </p>
            <p>
              I gave many talks/conferences/workshops around the world! and I'm
              creating content about technology/programming/entertainment on all
              the social networks under the username 'diegoveloper'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
