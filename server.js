// server.js

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Array para armazenar os funcionários
const employees = [];

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/funcionarios.html');
});

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.post('/employees', (req, res) => {
  const { nome, funcao, salario } = req.body;
  
  // Cria um novo objeto de funcionário
  const employee = {
    id: employees.length + 1, // Gera um ID único
    nome,
    funcao,
    salario,
  };
  
  employees.push(employee); // Adiciona o funcionário ao array
  
  res.status(201).json({ message: 'Funcionário criado com sucesso' });
});

app.put('/employees/:id', (req, res) => {
  const { id } = req.params;
  const { nome, funcao, salario } = req.body;
  
  // Procura o funcionário no array pelo ID
  const employee = employees.find(emp => emp.id === parseInt(id));
  
  if (!employee) {
    res.status(404).json({ error: 'Funcionário não encontrado' });
    return;
  }
  
  // Atualiza os dados do funcionário
  employee.nome = nome;
  employee.funcao = funcao;
  employee.salario = salario;
  
  res.json({ message: 'Funcionário atualizado com sucesso' });
});

app.delete('/employees/:id', (req, res) => {
  const { id } = req.params;
  
  // Procura o índice do funcionário no array pelo ID
  const index = employees.findIndex(emp => emp.id === parseInt(id));
  
  if (index === -1) {
    res.status(404).json({ error: 'Funcionário não encontrado' });
    return;
  }
  
  // Remove o funcionário do array
  employees.splice(index, 1);
  
  res.json({ message: 'Funcionário excluído com sucesso' });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
