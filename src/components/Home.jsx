import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const banners = [
    "https://via.placeholder.com/1200x500?text=Banner+1",
    "https://via.placeholder.com/1200x500?text=Banner+2",
    "https://via.placeholder.com/1200x500?text=Banner+3",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-24">

      {/* 🎞 Banner Rolante (MENOR AGORA) */}
      <section className="w-full overflow-hidden">
        <img
          src={banners[current]}
          alt="Banner"
          className="w-full h-[350px] md:h-[400px] object-cover transition-all duration-700"
        />
      </section>

      {/* 🏢 Sobre o Instituto */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-12 transition-colors duration-300">
            Sobre o Instituto
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <div className="text-gray-700 dark:text-gray-300 text-lg space-y-6 text-justify transition-colors duration-300">
              <p>
                Somos um Instituto especializado em Educação Tecnológica,
                através da sustentabilidade e tecnologia. Para isso,
                desenvolvemos a metodologia Robótica Sustentável, unindo
                as áreas mais modernas e inovadoras da educação,
                como S.T.E.A.M, Maker e Robótica Educacional.
              </p>

              <p>
                Utilizamos os espaços da escola como Laboratório de Ciência
                e Laboratório de Informática e desenvolvemos um plano de
                ensino com embasamento pedagógico da escola, fazendo a
                interdisciplinaridade de forma prática e sustentável.
              </p>
            </div>

            {/* Vídeo */}
            <div className="w-full max-w-sm mx-auto md:mx-0">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Vídeo Institucional"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ♻ Pontos de Coleta */}
      <section className="py-20 px-6 dark:bg-gray-950 transition-colors duration-300">
        <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-12">
          Pontos de Coleta Sustentáveis
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {["Centro", "Aldeota", "Meireles"].map((bairro, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-8 rounded-xl transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {bairro}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rua Exemplo, 123 — Fortaleza
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contato"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Quero participar!
          </Link>
        </div>
      </section>

      {/* 🎉 Eventos */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-12">
          Próximos Eventos
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((evento) => (
            <div
              key={evento}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition-colors duration-300"
            >
              <img
                src={`https://via.placeholder.com/400x250?text=Evento+${evento}`}
                alt="Evento"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Evento {evento}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Evento focado em conscientização ambiental.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🤝 Empresas Parceiras */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 overflow-hidden">
  <h2 className="text-3xl font-bold text-center mb-10 text-green-600">
    Empresas Parceiras
  </h2>

  <div className="relative w-full overflow-hidden">
    <div className="flex gap-16 animate-scroll whitespace-nowrap">
      
      {/* DUPLICA AS LOGOS */}
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-16">
          <img src="https://via.placeholder.com/150x80" className="h-16" />
          <img src="https://via.placeholder.com/150x80" className="h-16" />
          <img src="https://via.placeholder.com/150x80" className="h-16" />
          <img src="https://via.placeholder.com/150x80" className="h-16" />
        </div>
      ))}

    </div>
  </div>
</section>

    </div>
  );
}

export default Home;