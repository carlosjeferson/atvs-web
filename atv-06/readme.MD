# Projeto CRUD Simples (Fullstack - Node.js/Express & HTML/CSS/JS)

Este projeto é um sistema CRUD (Create, Read, Update, Delete) simples, desenvolvido para consolidar conhecimentos em desenvolvimento web fullstack. Ele utiliza um frontend tradicional (HTML, CSS, JavaScript) e um backend em Node.js com o framework Express.

Embora simples em sua concepção, este projeto representa um **grande passo e um marco importante** para quem, como eu, está dando os primeiros passos na carreira de desenvolvimento. Este projeto me permitiu solidificar conhecimentos essenciais em uma arquitetura **fullstack**.

### Backend (`backend/`)

* **`bin/`**: Contém o script de inicialização do servidor Express.
* **`controllers/`**: Lógica de negócios para manipular as requisições (ex: `aluno.js`).
* **`data/`**: (Provavelmente para dados temporários ou mockados, já que o BD será implementado futuramente).
* **`models/`**: Definição da estrutura de dados (ex: `alunos.js`).
* **`routes/`**: Define as rotas da API (ex: `aluno_routes.js`, `index.js`, `users.js`).
* **`app.js`**: Configuração principal do aplicativo Express.
* **`package.json`**: Metadados do projeto e lista de dependências do backend.

### Frontend (`frontend/`)

* **`assets/`**: Contém arquivos estáticos como CSS e JavaScript.
    * **`css/`**: Estilos da aplicação.
    * **`js/`**: Scripts JavaScript do lado do cliente.
* **`pages/`**: Contém as páginas HTML da aplicação.
    * **`index.html`**: Página principal.
    * **`criarAluno.html`**: Formulário para criar novos alunos.
    * **`editarAluno.html`**: Formulário para editar alunos existentes.

## Tecnologias Utilizadas

* **Frontend**: HTML, CSS, JavaScript (Fetch API, Async/Await)
* **Backend**: Node.js, Express.js

## Como Iniciar o Projeto

Siga os passos abaixo para clonar o repositório, instalar as dependências e rodar a aplicação.

### 1. Clonar o Repositório

Primeiro, clone este repositório para o seu ambiente local:

git clone <URL_DO_SEU_REPOSITORIO>

cd atv-06

### 2. Instalar Dependências do Backend

Navegue até a pasta backend e instale as dependências do Node.js:

cd backend

npm install

### 3. Iniciar o Servior Backend

Após a instalação das dependências, você pode iniciar o servidor backend:

npm start

O servidor Express geralmente roda na porta 3000 por padrão (ou a porta configurada no bin/www ou app.js). Você verá uma mensagem no terminal indicando que o servidor está escutando em uma determinada porta.

### 4. Acessar o Frontend

O frontend é composto por arquivos HTML estáticos que são servidos pelo backend.
Com o servidor backend em execução, abra seu navegador e acesse:

http://localhost:3000/
Isso carregará o index.html (ou a rota principal configurada para servir arquivos estáticos) do seu frontend. Você poderá navegar para criarAluno.html e editarAluno.html a partir daí, ou acessá-los diretamente através das rotas definidas no backend, se houver.

* **Nota**: As requisições JavaScript no frontend (usando Fetch API) farão chamadas para as rotas da API expostas pelo seu servidor Node.js/Express.

Próximos Passos (Futuras Implementações)
* **Persistência de Dados**: Implementação de um banco de dados para armazenar as informações de forma permanente.

* **Autenticação JWT**: Adição de um sistema de login e senha com JSON Web Tokens para segurança da aplicação.

* **Migração Frontend para Axios**: Substituição da Fetch API por Axios para consumo das APIs.

* **Refatoração Frontend para React**: Reconstrução da interface do usuário utilizando o framework React para uma experiência mais moderna e reativa.

