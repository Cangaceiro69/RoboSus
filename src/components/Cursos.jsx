import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faCode,
  faRobot,
  faBolt,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

function Cursos() {
  const cursos = [
    {
      titulo: "Manutenção de Computadores",
      icone: faLaptop,
      descricao:
        "Aprenda montagem, manutenção preventiva e corretiva de computadores, diagnóstico de hardware e instalação de sistemas.",
      local: "Centro - Fortaleza",
      horario: "Segunda e Quarta - 18h às 20h",
    },
    {
      titulo: "Introdução à Programação",
      icone: faCode,
      descricao:
        "Conceitos básicos de lógica de programação, algoritmos e desenvolvimento web para iniciantes.",
      local: "Aldeota - Fortaleza",
      horario: "Terça e Quinta - 18h às 20h",
    },
    {
      titulo: "Robótica Educacional",
      icone: faRobot,
      descricao:
        "Desenvolvimento de projetos com robótica sustentável, integração com eletrônica e pensamento computacional.",
      local: "Meireles - Fortaleza",
      horario: "Sábado - 09h às 12h",
    },
    {
      titulo: "Elétrica Básica",
      icone: faBolt,
      descricao:
        "Noções fundamentais de eletricidade residencial, segurança elétrica e pequenos reparos.",
      local: "Centro - Fortaleza",
      horario: "Sexta - 18h às 21h",
    },
  ];

  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-200 dark:bg-gray-900 py-14 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-4">
            Nossos Cursos
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Oferecemos cursos voltados para tecnologia, sustentabilidade e
            capacitação profissional para jovens e adultos.
          </p>
        </div>
      </section>

      {/* LISTA DE CURSOS */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {cursos.map((curso, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <FontAwesomeIcon
                  icon={curso.icone}
                  className="text-3xl text-green-600 dark:text-green-400"
                />
                <h2 className="text-2xl font-semibold dark:text-white">
                  {curso.titulo}
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {curso.descricao}
              </p>

              <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm mb-6">
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {curso.local}
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} />
                  {curso.horario}
                </p>
              </div>

              <Link
                to="/contato"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Quero participar
              </Link>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Cursos;