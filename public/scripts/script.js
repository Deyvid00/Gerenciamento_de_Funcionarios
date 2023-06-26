$(document).ready(() => {
    loadEmployees();
  
    $('#employeeForm').submit((event) => {
      event.preventDefault();
      const nome = $('#nome').val();
      const funcao = $('#funcao').val();
      const salario = $('#salario').val();
      addEmployee(nome, funcao, salario);
    });
  });
  
  function loadEmployees() {
    $.get('/employees', (data) => {
      const table = $('#employeeTable');
      table.empty();
      table.append('<tr><th>ID</th><th>Nome</th><th>Função</th><th>Salário</th><th>Ações</th></tr>');
  
      data.forEach((employee) => {
        const row = `<tr>
          <td>${employee.id}</td>
          <td>${employee.nome}</td>
          <td>${employee.funcao}</td>
          <td>${employee.salario}</td>
          <td>
            <button onclick="editEmployee(${employee.id})">Editar</button>
            <button onclick="deleteEmployee(${employee.id})">Excluir</button>
          </td>
        </tr>`;
        table.append(row);
      });
    });
  }
  
  function addEmployee(nome, funcao, salario) {
    $.post('/employees', { nome, funcao, salario }, (data) => {
      alert(data.message);
      $('#employeeForm')[0].reset();
      loadEmployees();
    }).fail((error) => {
      alert('Erro ao adicionar funcionário: ' + error.responseJSON.error);
    });
  }
  
  function editEmployee(id) {
    const nome = prompt('Digite o novo nome:');
    const funcao = prompt('Digite a nova função:');
    const salario = prompt('Digite o novo salário:');
    if (nome && funcao && salario) {
      $.ajax({
        url: `/employees/${id}`,
        method: 'PUT',
        data: { nome, funcao, salario },
        success: () => {
          loadEmployees();
        },
        error: (error) => {
          alert('Erro ao atualizar funcionário: ' + error.responseJSON.error);
        }
      });
    }
  }
  
  function deleteEmployee(id) {
    if (confirm('Tem certeza de que deseja excluir este funcionário?')) {
      $.ajax({
        url: `/employees/${id}`,
        method: 'DELETE',
        success: () => {
          loadEmployees();
        },
        error: (error) => {
          alert('Erro ao excluir funcionário: ' + error.responseJSON.error);
        }
      });
    }
  }
  