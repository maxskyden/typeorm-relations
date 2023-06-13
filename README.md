# typeorm-relations

Este é um projeto que eu fiz para aprender como usar o TypeORM. O TypeORM é uma ferramenta que me ajuda a guardar e pegar informações no banco de dados. Eu usei o Node.js, o Postgres, o Docker, o TypeScript e o Swagger para fazer esse projeto. Eu fiz uma API Rest que tem algumas rotas para criar e ver usuários, pedidos e etiquetas.

<details> <summary>

**Sumário**

</summary>

- [Introdução](#Introdução)
- [Tecnologias](#tecnologias)
- [Relações](#Relações)
- [Configuração](#Configuração)
- [Execução](#Execução)
- [Documentação](#Documentação)
- [Rotas](#rotas)
- [Contribuições](#Contribuições)
- [Contato](#Contato)
- [Licença](#Licença)

</details>

## Introdução <a name=“Introdução”></a>

Uma API Rest é uma forma de fazer a comunicação entre diferentes sistemas usando o protocolo HTTP. Ela usa os métodos GET, POST, PUT e DELETE para realizar as operações de leitura, criação, atualização e remoção de dados. Ela também usa um formato padrão para enviar e receber os dados, como JSON ou XML.

Neste projeto, eu criei uma API Rest que permite manipular usuários, pedidos e etiquetas. Os usuários podem ter vários pedidos, e os pedidos podem ter vários produtos e etiquetas. Os produtos são armazenados em uma tabela separada, e são relacionados aos pedidos através de uma tabela intermediária que contém a quantidade e o preço de cada produto no pedido. As etiquetas são usadas para classificar os pedidos de acordo com algum critério.

## Tecnologias <a name=“Tecnologias”></a>

-   **Node.js**: é um ambiente que permite executar código JavaScript fora do navegador. Ele é usado para criar aplicações web escaláveis e eficientes.
-   **Postgres SQL**: é um sistema de gerenciamento de banco de dados relacional. Ele é usado para guardar as informações da aplicação em tabelas e colunas.
-   **Docker**: é uma plataforma que permite criar, executar e compartilhar aplicações usando contêineres. Os contêineres são ambientes isolados que contêm tudo o que a aplicação precisa para funcionar.
-   **TypeScript**: é uma linguagem de programação que adiciona tipos ao JavaScript. Os tipos ajudam a evitar erros e melhorar a legibilidade do código.
-   **TypeORM**: é uma ferramenta que facilita o uso do banco de dados no Node.js. Ele permite definir as entidades do banco de dados usando classes e decoradores, e realizar operações usando métodos simples e intuitivos.
-   **Swagger**: é uma ferramenta que ajuda a documentar e testar as rotas da API. Ele mostra as informações sobre os parâmetros, respostas e exemplos de cada rota.

## Relações <a name=“Relações”></a>

As relações do TypeORM são as formas de conectar as entidades do banco de dados entre si. Elas podem ser de quatro tipos: one-to-one, one-to-many, many-to-one e many-to-many. Cada tipo de relação tem um significado diferente e precisa de uma configuração específica no TypeORM.

No meu projeto, eu usei as seguintes relações:

-   **One-to-one**: é quando uma entidade se relaciona com apenas uma outra entidade. Por exemplo, um usuário tem apenas um endereço.
-   **One-to-many**: é quando uma entidade se relaciona com várias outras entidades. Por exemplo, um usuário pode ter vários pedidos.
-   **Many-to-one**: é quando várias entidades se relacionam com uma outra entidade. Por exemplo, vários pedidos podem pertencer a um mesmo usuário.
-   **Many-to-many**: é quando várias entidades se relacionam com várias outras entidades. Por exemplo, vários pedidos podem ter vários produtos, e vários produtos podem estar em vários pedidos.

## Configuração <a name=“Configuração”></a>

Para executar este projeto localmente, você precisa ter instalado o Node.js, o Docker e o Docker Compose. Em seguida, siga os passos abaixo:

1.  Clone este repositório usando o comando  `git clone https://github.com/nettoquerois/typeorm-relations.git`.
2.  Entre na pasta do projeto usando o comando  `cd typeorm-relations`.
3.  Instale as dependências do projeto usando o comando  `npm install`.
4.  Crie um arquivo  `.env.development`  na raiz do projeto e copie o conteúdo do arquivo  `.env.example`. Dentro desse arquivo, defina os valores das variáveis  `DATABASE_USER`,  `DATABASE_PASS`  e  `DATABASE_NAME`.
5.  Inicie os contêineres do Postgres e da aplicação usando o comando  `npm run docker:up`.

## Execução <a name=“Execução”></a>

Para fazer a API funcionar, você pode usar o comando  `npm run dev`. Isso vai fazer a API ficar pronta na porta 3333. Você pode mudar a porta no arquivo  `.env.development`  se quiser.

Para usar as rotas da API, você precisa colocar  `/v1/`  antes delas. Por exemplo, para ver todos os usuários, você precisa escrever  `/v1/users`.

## Documentação <a name=“Documentação”></a>

Você pode usar o Swagger para testar as rotas da API. Você pode ver a página do Swagger em  `/api-docs`. Lá você vai encontrar o que você precisa escrever e o que você vai receber de cada rota.

## Rotas <a name=“Rotas”></a>

A API possui as seguintes rotas:

-   POST  `/users`: cria um novo usuário no banco de dados. Você precisa enviar um objeto com os campos  `name`,  `email`  e  `password`.
    
-   GET  `/users`: mostra todos os usuários que estão no banco de dados.
    
-   DELETE  `/users/{id}`: apaga um usuário específico pelo seu id.
    
-   GET  `/users/{id}`: mostra um usuário específico pelo seu id.
    
-   PUT  `/users/{id}`: muda um usuário específico pelo seu id. Você pode mudar os campos  `name`,  `email`  ou  `password`.
    
-   GET  `/users/{id}/history`: mostra todos os pedidos feitos por um usuário específico pelo seu id.
    
-   POST  `/orders`: cria um novo pedido no banco de dados. Você precisa enviar um objeto com os campos  `user_id`  e  `products`. O campo  `products`  deve ser um array de objetos com os campos  `id`  e  `quantity`, que são o id e a quantidade do produto respectivamente.
    
-   GET  `/orders`: mostra todos os pedidos que estão no banco de dados.
    
-   DELETE  `/orders/{id}`: apaga um pedido específico pelo seu id.
    
-   GET  `/orders/{id}`: mostra um pedido específico pelo seu id.
    
-   PUT  `/orders/{id}`: muda um pedido específico pelo seu id. Você pode mudar os campos  `user_id`  ou  `products`.
    
-   GET  `/orders/{id}/history`: mostra todas as etiquetas associadas a um pedido específico pelo seu id.
    
-   POST  `/labels`: cria uma nova etiqueta no banco de dados. Você precisa enviar um objeto com o campo  `name`.
    
-   GET  `/labels`: mostra todas as etiquetas que estão no banco de dados.
    
-   DELETE  `/labels/{id}`: apaga uma etiqueta específica pelo seu id.
    
-   GET  `/labels/{id}`: mostra uma etiqueta específica pelo seu id.
    
-   PUT  `/labels/{id}`: muda uma etiqueta específica pelo seu id. Você pode mudar o campo  `name`.
    
-   GET  `/labels/order/{id}`: mostra todos os pedidos que têm uma etiqueta específica pelo seu id.

## Contribuições<a name=“Contribuições”></a>

Este repositório não tem uma finalidade além de servir para eu por o que aprendi sobre as tecnologias que usei. Mas se você quiser contribuir com alguma sugestão, crítica ou melhoria, fique à vontade para abrir uma issue ou um pull request. Eu ficarei feliz em receber o seu feedback e aprender com você.

## Contato<a name=“Contato”></a>

[WhatsApp](https://wa.me/5582999567786)
[@nettoquerois](https://github.com/nettoquerois)

## Licença<a name=“Licença”></a>

Copyright © 2023 @nettoquerois
Este projeto está licenciado sob a GNU AGPL v3.0
