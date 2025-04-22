# Scraper Amazon

## Descrição do Projeto

Este é um projeto simples que faz o scraping da Amazon para buscar produtos com base em um termo de pesquisa. Utilizamos o **Bun** para o backend, que gerencia a API que consulta a Amazon, e o **frontend** foi desenvolvido com **HTML**, **CSS** e **Vanilla JavaScript**. O objetivo é buscar produtos da Amazon, extrair detalhes como título, avaliação, número de avaliações e a URL da imagem, e exibir esses dados em uma interface simples.

## Tecnologias Utilizadas

### Backend

- **Bun**: Utilizado para gerenciar o backend e o servidor.
- **Express**: Framework minimalista para criação da API.
- **Axios**: Biblioteca para fazer requisições HTTP (no caso, para obter os dados da Amazon).
- **JSDOM**: Usado para fazer o parsing do HTML da Amazon e extrair os dados necessários.

### Frontend

- **HTML**: Estrutura da página.
- **CSS**: Estilização da interface.
- **Vanilla JavaScript**: Para interatividade e comunicação com o backend via AJAX.

## Funcionalidades

- Através de um campo de input, o usuário pode buscar produtos na Amazon.
- O backend faz uma requisição para a Amazon e extrai informações relevantes de produtos, como:
  - Título do produto
  - Avaliação (quantidade de estrelas)
  - Número de avaliações
  - URL da imagem do produto
- Esses dados são retornados e exibidos na interface de forma limpa e organizada.

## Como Rodar o Projeto

### Requisitos

- **Node.js** (versão 16 ou superior)
- **Bun** (instalado globalmente para gerenciar o backend)

### Passos para Rodar o Backend

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/danielMonteiro84/scrapeamazon
   cd scraperamazon

   ```

2. **Instale as dependências**:

   ```bash
   bun install

   ```

3. **Inicie o servidor**:

   ```bash
   bun install
   O servidor será executado em http://localhost:3000.
   ```

### Passos para roddar o Frontend

1. **Abra a pasta do Frontend**:

   ```bash
   cd scrapeamazon/screapeamazon-frontend
   ```

2. **Abra o index.html no seu navegador**

### Como funciona

O usuário insere um termo de pesquisa no campo de busca.

Ao clicar no botão "Pesquisar", uma requisição GET é feita ao backend (/api/scrape?keyword=termo).

O backend faz o scraping da Amazon e retorna os dados dos produtos encontrados.

O frontend exibe as informações de cada produto na página, como o título, avaliação, número de avaliações e a imagem.

### Exemplo de uso

Abra o navegador e acesse a página do frontend.

Digite o nome de um produto, por exemplo, "laptop", no campo de busca.

Clique no botão "Pesquisar".

O backend será acionado, e os resultados dos produtos encontrados serão exibidos na tela.
