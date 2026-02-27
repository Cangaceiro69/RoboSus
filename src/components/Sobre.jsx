import FotoProga from "../assets/FotoProga.jpg";

function Sobre() {
  const equipe = [
    {
      nome: "João Silva",
      cargo: "Fundador e Diretor",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      foto: "https://via.placeholder.com/150",
    },
    {
      nome: "Maria Oliveira",
      cargo: "Coordenadora Pedagógica",
      descricao:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      foto: "https://via.placeholder.com/150",
    },
    {
      nome: "Matheus Fontenele",
      cargo: "Progamador",
      descricao:
        "Progamador Fullstack.",
      foto: FotoProga,
    },
    {
      nome: "Ana Costa",
      cargo: "Instrutora de Programação",
      descricao:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      foto: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>

      {/* HERO */}
      <section className="bg-gray-200 dark:bg-gray-900 py-12 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
            Quem Somos
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça nossa história e a equipe que faz tudo acontecer.
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
          </p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-12">
            Nossa Equipe
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {equipe.map((membro, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Foto */}
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="w-32 h-32 rounded-full object-cover"
                />

                {/* Texto */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {membro.nome}
                  </h3>

                  <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                    {membro.cargo}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {membro.descricao}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Sobre;