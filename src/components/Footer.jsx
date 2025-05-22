import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import YouTube from "./icons/Youtube";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container md:max-w-2xl lg:max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-10">
          <ul className="inline-flex items-center justify-center gap-8">
            <li>
              <a
                href="https://github.com/KevinLuna17"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kevin-luna-gonzalez-a2168b194/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@MrKevin199714"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube />
              </a>
            </li>
          </ul>
          <span className="text-sm text-center text-gray-600">
            © {currentYear} Kevin Luna.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
