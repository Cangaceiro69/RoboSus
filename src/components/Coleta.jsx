import pontosColeta from "../data/pontosColeta";


function Coleta() {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4 dark:bg-gray-900 transition">

          {/* Título */}
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
                Pontos de Coleta
            </h1>

          {/* Mapa */}
          <div className="w-full max-w-5xl mx-auto mb-10">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1E4cmdoH37_n32B0rbrCKtbfjMcR5vdY&ehbc=2E312F"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* Lista de locais */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

            {pontosColeta.map((ponto, index) => (

              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6"
              >
                <h2 className="text-xl font-semibold dark:text-gray-300">
                  {ponto.nome}
                </h2>

                <p className="text-gray-700 dark:text-gray-300">
                  {ponto.endereco}
                </p>
              </div>

            ))}

          </div>

    </div>
  );
}

export default Coleta;