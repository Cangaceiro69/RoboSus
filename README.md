# Robótica Sustentável — Site

Pequeno site institucional para o projeto "Robótica Sustentável", com UI em React + Vite + Tailwind.

## Funcionalidades principais
- Banner rotativo automático (carousel) — componente [`Home`](src/components/Home.jsx).  
- Seção "Sobre o Instituto" com vídeo institucional embutido.  
- Lista de Pontos de Coleta com link para contato.  
- Cards de Eventos.  
- Marquee de empresas parceiras (animação via CSS).  
- Tema claro/escuro com persistência em localStorage — controle no [`Header`](src/components/Header.jsx).  
- Rodapé com contato e redes — [`Footer`](src/components/Footer.jsx).

## Como rodar
```sh
npm install
npm run dev
```

## Estrutura relevante
- Páginas e componentes:
  - [`Home`](src/components/Home.jsx) — conteúdo principal da home.
  - [`Header`](src/components/Header.jsx) — navegação, menu mobile e toggle de tema.
  - [`Footer`](src/components/Footer.jsx) — informação de contato e redes.
  - Rotas definidas em [src/main.jsx](src/main.jsx).
- Configuração:
  - [package.json](package.json) — scripts e dependências.
  - [vite.config.js](vite.config.js)
  - [tailwind.config.js](tailwind.config.js)
  - [index.html](index.html)

## Observações rápidas
- As páginas adicionais (`/sobre`, `/cursos`, `/projetos`, `/contato`) estão preparadas em [src/Pages](src/Pages) e importadas/comentadas em [src/main.jsx](src/main.jsx).
- Animação de logos está em [src/index.css](src/index.css).

## Contatos
- Editar textos, imagens e links diretamente em [`src/components/Home.jsx`](src/components/Home.jsx) e nos componentes correspondentes.
