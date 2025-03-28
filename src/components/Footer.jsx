function Footer() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-10">
          <ul className="inline-flex items-center justify-center gap-8">
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Youtube</li>
          </ul>
          <span className="text-sm text-center text-gray-600">
            © 2025 Kevin Luna. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
