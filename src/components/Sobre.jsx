import FotoProga from "../assets/FotoProga.jpg";
import FotoMark from "../assets/karine.png";
import FotoPres from "../assets/andre.png";
import FotoCood from "../assets/Wuller.jpeg";
import FotoHard from "../assets/Gabriel.jpeg";
import FotoCorm from "../assets/victor.png";
import FotoRobo from "../assets/Carlos.jpeg";
import FotoOrga from "../assets/karine.png";
import FotoAdmi from "../assets/karine.png";

function Sobre() {
  const equipe = [
    {
      nome: "André Cardoso",
      cargo: "Presidente",
      foto: FotoPres,
    },
    {
      nome: "Wuller",
      cargo: "Coordenador de educação",
      foto: FotoCood,
    },
    {
      nome: "Gabriel",
      cargo: "Técnico de Hardware",
      foto: FotoHard,
    },
    {
      nome: "Karine Mota",
      cargo: "Marketing",
      foto: FotoMark,
    },
    {
      nome: "Victor Almirando",
      cargo: "Comercial",
      foto: FotoCorm,
    },
    {
      nome: "Ed Carlos",
      cargo: "Técnico de Robótica",
      foto: FotoRobo,
    },
    {
      nome: "Gertrudes",
      cargo: "Organização",
      foto: "https://via.placeholder.com/150",
    },
    {
      nome: "Luana",
      cargo: "Administrativo",
      foto: "https://via.placeholder.com/150",
    },
    {
      nome: "Matheus Fontenele",
      cargo: "Desenvolvedor Web",
      foto: FotoProga,
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
            A Robótica Sustentável nasceu em 2016 como um projeto em uma escola pública de Fortaleza, idealizado
por André Cardoso, professor de Ciências Biológicas, com o objetivo de transformar resíduos eletrônicos
em educação e inovação. Inicialmente chamada de “Robótica de Baixo Custo”, a iniciativa uniu professores
e alunos em um laboratório improvisado com recursos limitados, mas com um propósito grandioso: capacitar
jovens, promover a inclusão digital e transformar realidades.
          </p>

          <p>
          O projeto começou com oficinas que utilizavam sucata eletrônica para montar robôs e experimentar
conceitos científicos. A primeira conquista veio em uma Feira de Ciências estadual, onde a equipe ficou em
2o lugar. Essa vitória não apenas abriu portas para competições maiores, mas também trouxe um senso de
propósito para alunos e professores. Ao longo dos anos, a Robótica Sustentável se consolidou como uma
referência em educação ambiental e tecnológica, ampliando seu alcance com campanhas de
conscientização, oficinas, exposições e parcerias com empresas e instituições de ensino.
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

                  <p className="text-green-600 dark:text-green-400 font-big mb-3">
                    {membro.cargo}
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