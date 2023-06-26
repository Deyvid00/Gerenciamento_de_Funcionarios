# Gerenciamento_de_Funcionarios

Este projeto é uma aplicação web desenvolvida como parte da disciplina de Web 2 do curso de Informática para Internet do IFPE Campus Jaboatão dos Guararapes. Ele implementa um sistema de gerenciamento de funcionários, permitindo adicionar, editar e excluir registros de funcionários.
## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter os seguintes requisitos instalados:

- Node.js: [Download](https://nodejs.org)
- NPM (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório para o seu ambiente local:

   ```
   git clone https://github.com/Deyvid00/Gerenciamento_de_Funcionarios.git
   ```

2. Acesse a pasta do projeto:

   ```
   cd Gerenciamento_de_Funcionarios
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

## Executando a aplicação

Após a conclusão da instalação, você pode executar a aplicação com o seguinte comando:

```
node server.js
```

Isso iniciará o servidor na porta 3000. Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação.

## Uso

Ao acessar a aplicação no navegador, você encontrará um formulário para adicionar um novo funcionário. Preencha os campos "Nome", "Função" e "Salário" e clique no botão "Adicionar" para criar um novo funcionário.

A tabela abaixo do formulário exibirá a lista de funcionários cadastrados. Cada funcionário terá botões "Editar" e "Excluir" que permitirão atualizar as informações ou remover o funcionário, respectivamente.

Ao clicar no botão "Editar" de um funcionário, você será solicitado a digitar as novas informações (nome, função e salário) em caixas de diálogo separadas. Após fornecer as informações atualizadas, o funcionário será atualizado na lista.

Ao clicar no botão "Excluir" de um funcionário, você será solicitado a confirmar a exclusão do funcionário. Se confirmado, o funcionário será removido da lista.



