const voluntarios = [
  "Matrud Alves",
  "Lucas de Souza",
  "Rodolfo de Oliveira",
  "Samara Alexandra",
  "Hector da Silva",
  "Renato Alves",
  "João Bastita",
  "Frabicio de Oliveira",
  "Maxsuel Carneiro",
  "Yago Santiago",
  "Luan David",
  "Alejandor Lima",
  "Eduardo Teixeira",
  "Francisco Weberson",
  "Hector Ribeiro",
  "Pedro Yuri",
  "Levi Santos",
  "Rafael dos Santos",
  "Weslley de Castro",
  "Guilherme Victor",
  "João Vitor",
  "João Vascamcelos",
  "Karla Borges",
  "Luiz Silva",
  "Jamile Braga",
  "Sarah de Sousa",
  "Pedro Henrique",
  "Levi da Nóbrega",
  "Francisco Gustavo",
];

function Voluntarios() {
  return (
    <div className="w-full">

      {/* Título */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-12">
          Voluntários
        </h1>

        {/* Lista */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

          {voluntarios.map((nome, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl text-center"
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {nome}
              </h2>
            </div>
          ))}

        </div>

        {/* Botão */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Quero ser voluntário
          </a>
        </div>

      </section>
    </div>
  );
}

export default Voluntarios;