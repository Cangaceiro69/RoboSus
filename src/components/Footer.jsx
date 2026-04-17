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
import Logo from "../assets/TransBranco.png";

function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Logo + descrição */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-40 md:h-40 object-contain"
          />
          
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>

          <ul className="space-y-4 text-sm">

            {/* Mapa */}
            <li>
              <a
                href="https://maps.app.goo.gl/t3X6Yp22W5aXGMe16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <FontAwesomeIcon icon={faMapLocationDot} />
                Rua Francisquinha Portela, Quintino Cunha 1050
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=roboticasustentavel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-300 transition"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                roboticasustentavel@gmail.com
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
              href="https://www.instagram.com/robotica_sustentavel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5585996214279"
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