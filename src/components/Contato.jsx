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
                  href="https://wa.me/5585996214279"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
                >
                  (85) 99621-4279
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
        href="https://maps.app.goo.gl/t3X6Yp22W5aXGMe16"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition"
      >
        Rua Francisquinha Portela, Quintino Cunha 1050
      </a>
    </div>
  </div>

  {/* Google Maps Embed */}
  <div className="w-full rounded-xl overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3893303992527!2d-38.60104502593426!3d-3.7249918431529183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74a4e506be45f%3A0x784d4f064031c3e1!2sR.%20Francisquinha%20Portela%2C%201050%20-%20Quintino%20Cunha%2C%20Fortaleza%20-%20CE%2C%2060351-840!5e0!3m2!1spt-BR!2sbr!4v1772640551368!5m2!1spt-BR!2sbr"
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
                href="https://www.instagram.com/robotica_sustentavel/"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.facebook.com/roboticasustentavel"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://wa.me/5585996214279"
                target="_blank"
                className="hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="https://www.youtube.com/channel/UCRT8j1WHxb4AZ9JE_fw-jXA"
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