import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Contato() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-200 dark:bg-gray-900 py-12 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
            Fale Conosco
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Entre em contato conosco para participar dos cursos ou tirar dúvidas.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Informações */}
          <div className="space-y-8">

            {/* Telefone */}
            <div className="flex items-start gap-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl text-green-600 dark:text-green-400"
              />
              <div>
                <h3 className="font-semibold text-lg dark:text-white">
                  Telefone
                </h3>
                <a
                  href="https://wa.me/5585999999999"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
                >
                  (85) 99999-9999
                </a>
              </div>
            </div>

            {/* Localização */}
<div className="space-y-4">
  <div className="flex items-start gap-4">
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      className="text-2xl text-green-600 dark:text-green-400"
    />
    <div>
      <h3 className="font-semibold text-lg dark:text-white">
        Localização
      </h3>
      <a
        href="https://www.google.com/maps/place/Fortaleza+-+CE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
      >
        Fortaleza - Ceará
      </a>
    </div>
  </div>

  {/* Google Maps Embed */}
  <div className="w-full rounded-xl overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps?q=Fortaleza,+CE&output=embed"
      width="100%"
      height="300"
      allowFullScreen=""
      loading="lazy"
      className="border-0"
    ></iframe>
  </div>
</div>

          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-lg mb-6 dark:text-white">
              Redes Sociais
            </h3>

            <div className="flex gap-6 text-3xl text-green-600 dark:text-green-400">
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://wa.me/5585999999999"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contato;