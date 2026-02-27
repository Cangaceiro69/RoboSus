import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo + descrição */}
        <div>
          <img
            src="https://via.placeholder.com/120x40?text=LOGO"
            alt="Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm text-green-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>

          <ul className="space-y-4 text-sm">

            {/* Mapa */}
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Fortaleza+CE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <FontAwesomeIcon icon={faMapLocationDot} />
                Fortaleza - CE
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:contato@ongesperanca.org"
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                contato@ongesperanca.org
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>

          <div className="flex gap-6 text-2xl">
            
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5585999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

          </div>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="bg-green-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} robótica sustentável — Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;