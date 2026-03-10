import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Banner from "../assets/0011.png";


import Zenir from "../assets/Logos/zenir-moveis-seeklogo.png";
import Coca from "../assets/Logos/solar-coca-cola-seeklogo.png";
import Pague from "../assets/Logos/pague-menos-seeklogo.png";
import Farias from "../assets/Logos/organizacao-educacional-farias-brito-seeklogo.png";

const empresas = [
  Zenir,
  Coca,
  Pague,
  Farias,
  Zenir,
  Coca,
  Pague,
  Farias
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % empresas.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (

      

    <div className="w-full">

      {/* 🎞 Banner */}
      <section className="w-100% flex justify-center">
        <img
          src={Banner}
          alt="Banner"
          className="w-100% object-cover"
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
                  src="https://www.youtube.com/embed/b22XbWmYgAQ"
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
          {[" Av. Dom Manuel, 1020 - Centro, Fortaleza - CE, 60060-090", 
          "Rua Torres Câmara, 600 - Casa 47 - Aldeota, Fortaleza - CE, 60150-060.", 
          "Rua Francisquinha Portela, 1050 c Altos - Fortaleza - CE, 60351-840.", 
          "Av. Barão de Studart, 1980 - Mezanino - Aldeota, Fortaleza - CE, 60120-001", 
          "Av. Barão de Studart, 1980 - 1° ANDAR - Aldeota, Fortaleza - CE, 60120-001", 
          "R. Carneiro da Cunha, 180 - Jacarecanga, Fortaleza - CE, 60010-470"
          ].map((bairro, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-8 rounded-xl transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {bairro}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/coleta"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Mais Locais
          </Link>
        </div>
      </section>

      {/* 🚀 Projetos dos Alunos */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-12">
          Projetos dos Alunos
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              titulo: "Robô com lixo eletrônico",
              img: "https://via.placeholder.com/400x250",
              desc: "Projeto feito reutilizando peças de computadores antigos."
            },
            {
              titulo: "Carrinho movido a energia solar",
              img: "https://via.placeholder.com/400x250",
              desc: "Experimento de energia sustentável criado por alunos."
            },
            {
              titulo: "Braço robótico reciclado",
              img: "https://via.placeholder.com/400x250",
              desc: "Braço robótico feito com motores reaproveitados."
            }
          ].map((projeto, index) => (

            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition-colors duration-300"
            >
              <img
                src={projeto.img}
                alt={projeto.titulo}
                className="w-full"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {projeto.titulo}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {projeto.desc}
                </p>
              </div>
            </div>

          ))}

        </div>
      </section>

      {/* 🤝 Empresas Parceiras */}
<section className="py-16 bg-gray-100 dark:bg-gray-900 transition">

  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
    Empresas Parceiras
  </h2>

  <div className="flex justify-center items-center h-24">

    <img
      src={empresas[index]}
      alt="Empresa parceira"
      className="h-20 object-contain grayscale hover:grayscale-0 transition"
    />

  </div>

</section>
    </div>
  );
}

export default Home;