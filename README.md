# Desafio Full Stack Node Angular Trainee Kevin Morente

# Frontend + Backend + Banco de Dados (Angular, Node.js, SQLite)

## Servidor de Desenvolvimento - Frontend

1 - Instalar Node.js e npm: Certifique-se de que o Node.js e o npm estejam instalados em sua máquina. Você pode verificar isso executando os comandos `node -v` e `npm -v`.

2 - Instale o Angular CLI (se ainda não estiver instalado) com o comando `npm install -g @angular/cli`.

3 - Instale as dependências do projeto: Navegue até o diretório do projeto e execute `npm install` para instalar todas as dependências definidas no arquivo `package.json`.

4 - Execute o projeto Angular em desenvolvimento: Após a instalação das dependências, execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente.

5 - Execute o projeto Angular para deploy: Execute o comando `ng build` e todos os arquivos responsáveis por subir o site em algum host estarão disponíveis em `./dist` dentro da pasta do projeto.

## Servidor de Desenvolvimento - Backend

1 - Instalar Node.js e npm: Certifique-se de que o Node.js e o npm estejam instalados em sua máquina. Você pode verificar isso executando os comandos `node -v` e `npm -v`.

2 - Instalar Dependências: Após baixar o projeto, abra o terminal na pasta do projeto e execute o comando `npm install` para instalar todas as dependências listadas no `package.json`.

3 - Iniciar o Servidor de Desenvolvimento: Execute o comando `npm start`. Caso for realizar testes de chamadas HTTP, a porta é `http://localhost:8080`.

4 - Testar o Projeto: Execute o comando `npm test` para realizar os testes das rotas com Jest.

5 - Para fazer o deploy/build do backend, será necessário usar um serviço pago ou gratuito para subir o projeto e deixá-lo disponível globalmente.

## Testando a aplicação por completo - Frontend + Backend

1 - Recomendo apagar o arquivo `database.db` para que o backend gere um novo automaticamente e você possa inserir seus dados. Ele está disponível dentro da pasta do projeto em `backend`.

2 - Abra um terminal para cada lado, um para o frontend e outro para o backend. Inicialize os dois em desenvolvimento com `ng serve` para o frontend e `npm start` para o backend.

3 - Desfrute da aplicação que foi criada para o desafio de uma vaga Full Stack Trainee. Espero que gostem!

## Desafio Publicação

Pergunta - E se você precisar disponibilizar essa aplicação na AWS? Descreva brevemente como o faria.

Resposta - Para disponibilizar sua aplicação na AWS, você deve criar uma instância EC2 para rodar o backend Node.js e fazer o upload do código. Para o frontend Angular, compile o projeto e faça o upload dos arquivos para um bucket S3. Use o CloudFront para melhorar a distribuição do conteúdo e o Route 53 para gerenciar seu domínio. Configure a segurança e considere opções como o Elastic Beanstalk para simplificar o deploy e o Auto Scaling para ajustar a capacidade conforme necessário.
