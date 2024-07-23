# Prova_Pratica_Desenvolvedor_Front-end_Gabriel
Prova Prática Desenvolvedor Front-end Gabriel
Desafio de Desenvolvimento Web - IPM
Este repositório contém a implementação de um desafio de desenvolvimento web, projetado para a vaga de Front-End na IPM.

Descrição do Projeto
O projeto está dividido em três partes principais:

Parte 1: Desenvolvimento de Interface
A primeira parte envolve a criação de uma página web utilizando HTML, CSS e JavaScript. A página inclui:

Um cabeçalho com o logo e um menu de navegação.
Uma seção de conteúdo principal com um título, parágrafo e uma imagem.
Uma seção de formulários contendo campos para nome, e-mail, mensagem e um botão de envio.
Um rodapé com links para redes sociais.
A página foi desenvolvida com boas práticas de organização e semântica no HTML, além de ser estilizada com CSS para garantir responsividade.

Parte 2: Integração com API RESTful
A segunda parte consiste em desenvolver um script em Python para consumir uma API RESTful.

Utilizando a Random User API, o script realiza as seguintes tarefas:

Criação de uma aplicação Flask que inclui uma rota para obter dados de usuários a partir da API.
Realização de uma requisição GET à API para obter dados de usuários.
Exibição dos dados dos usuários em uma lista na página HTML, incluindo informações como nome, e-mail e foto do perfil.
Parte 3: Design (Opcional)
A terceira parte é opcional e envolve a criação de um mockup da interface desenvolvida na Parte 1 utilizando uma ferramenta de design como o Figma.

Como Executar o Projeto
Pré-requisitos:
Python 3.6 ou superior
Git
Passo a Passo
Clone o repositório:

bash
Copy code
git clone https://github.com/white-reis/prova-pratica-desenvolvedor-front-end-gabriel.git
cd prova-pratica-desenvolvedor-front-end-gabriel
Crie um ambiente virtual e ative-o:

bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate
Instale as dependências:

bash
Copy code
pip install -r requirements.txt
Execute o aplicativo Flask:

bash
python app.py
Acesse a aplicação no navegador:
Abra o navegador e vá para http://127.0.0.1:5000 para ver a aplicação em execução.

Estrutura do Projeto
app.py: Script principal da aplicação Flask que consome a API Random User.
templates/index.html: Página HTML principal que exibe os dados dos usuários.
static/: Pasta contendo arquivos estáticos como CSS e JavaScript.
requirements.txt: Lista de dependências Python.
Contato

Para mais informações ou dúvidas, entre em contato pelo e-mail: Dev.fabio.reis@gmail.com

Sinta-se à vontade para ajustar qualquer parte da descrição conforme necessário!