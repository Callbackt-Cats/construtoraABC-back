# Construtora ABC - Back End 🚧


## Sobre 📝


Este projeto consiste em um trabalho prático para a disciplina de Engenharia de Software 2. O sistema foi construído pensando em atender uma construtora e ser uma ferramenta de gerenciamento, realizando o controle de clientes, obras, materiais, entre outros. As tecnologias utilizadas em sua implementação foram **Node js** e **Javascript**.


O **Back End** da aplicação tem o papel de **Servidor** na arquitetura Cliente/Servidor, sendo a parte do sistema que faz o armazenamento e processamento dos dados, atuando no plano de fundo de forma invisível ao Cliente. Recebe as requisições do Front End, processando-as e gerando respostas fornecendo os dados necessários para o Cliente.


## Banco de Dados 📁


### SQLite
O banco de dados utilizado na aplicação é o **SQLite**, uma base de dados relacional feito em código aberto e que é amplamente utilizada em aplicações Web e Mobile dada sua simplicidade.



### Knex.js
Outra ferramenta utilizada na implementação da base de dados é o **Knex.js**, um Query Builder de SQL. Com ele é possível criar a conexão do banco de dados assim como as requisições de forma mais simples.



### Migrations
O modelo de dados é definido através das **Migrations**, de modo que as tabelas são criadas, as linhas que serão armazenadas e o tipo dos dados que serão armazenados, se são Strings e Numbers, por exemplo, e se são dados obrigatórios. Funcionam de forma semelhante às *classes* da aplicação, uma vez que contém os atributos dos nossos modelos de dados.



### Controllers
Os **Controllers** equivalem aos métodos das nossas *classes*. São responsáveis por executar as funções dos nossos modelos de dados, como criar, editar, excluir e ler (CRUD).


## Modelo de Dados 📖 

### Cliente 💸  
#### Atributos:

- **Nome**: tipo **String** e obrigatório;

- **Email**: tipo **String** e obrigatório;

- **CPF**: tipo **String** e obrigatório;


### Imóvel 🏬 
#### Atributos:

- **Endereço**: tipo **String** e obrigatório;

- **idCliente**: tipo **String** e obrigatório;

- **Descrição**: tipo **String** e obrigatório;


### Material
#### Atributos:

- **Nome**: tipo **String** e obrigatório;

- **Código**: tipo **String** e obrigatório;

- **idFornecedor**: tipo **String** e obrigatório;

- **idResponsável**: tipo **String** e obrigatório;


### Colaborador 👲 
#### Atributos:

- **Nome**: tipo **String** e obrigatório;

- **Email**: tipo **String** e obrigatório;

- **CPF**: tipo **String** e obrigatório;

- **Tipo**: tipo **String** e obrigatório;


### Obra 🔨 
#### Atributos:

- **Endereço**: tipo **String** e obrigatório;

- **Localização**: tipo **String** e obrigatório;

- **Descrição**: tipo **String** e obrigatório;

- **Valor**: tipo **String** e obrigatório;

- **idImóvel**: tipo **String** e obrigatório;

- **idEngenheiro**: tipo **String** e obrigatório;
