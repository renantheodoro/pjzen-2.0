# PJZen 2.0 - O site responsivo e moderno para o PJZen

Bem-vindo ao repositório do PJZen 2.0! Este projeto oferece um site moderno e responsivo para garantir uma navegação otimizada e desempenho excelente em diferentes dispositivos. Abaixo, você encontrará as informações sobre como configurar e implantar o projeto. Por favor, leia atentamente as instruções.

## Contato
Para saber mais sobre o PJZen 2.0, entre em contato: renan.b.theodoro@gmail.com.

## Requisitos
Antes de começar, certifique-se de ter o ambiente de desenvolvimento configurado com as seguintes ferramentas:

- **Vue.js**: [Guia de Instalação](https://vuejs.org/)
- **Node.js e npm**: [Download e Instalação](https://nodejs.org/)

## Instalação
Siga as etapas abaixo para configurar o projeto em sua máquina local:

1. Clone este repositório:
   ```bash
   git clone https://github.com/renantheodoro/pjzen-2.0.git
   cd pjzen-2.0
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração do Firebase
Para implantar o projeto, é necessário configurar o Firebase. Siga os passos abaixo:

1. Certifique-se de ter o Firebase CLI instalado. Caso não tenha, siga a [documentação oficial](https://firebase.google.com/docs/cli).
2. Faça login no Firebase:
   ```bash
   firebase login
   ```
3. Adicione o projeto Firebase ao seu projeto PJZen:
   ```bash
   firebase use --add
   ```

## Alterações e Implantação
Se você deseja fazer alterações no site, siga os passos abaixo para implantar o projeto:

1. Faça as alterações desejadas no código.
2. Para implantar no Firebase Hosting, execute o seguinte comando:
   ```bash
   npm run deploy
   ```

## Autor
Este projeto foi desenvolvido por Renan Theodoro. Confira mais projetos em seu perfil do GitHub.

Obrigado por acessar o PJZen 2.0! Se tiver alguma dúvida ou precisar de ajuda, entre em contato!
