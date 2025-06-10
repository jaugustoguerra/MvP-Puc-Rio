const form = document.getElementById("formAluno");
const divAlunos = document.getElementById("alunos");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const aluno = {
  nome: form.nome.value,
  email: form.email.value,
  data_nascimento: form.data_nascimento.value,
  cpf: form.cpf.value
};
  await fetch("http://localhost:5000/cadastrar_aluno", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(aluno),
  });
  form.reset();
  carregarAlunos();
});

async function carregarAlunos() {
  const res = await fetch("http://localhost:5000/buscar_alunos");
  const alunos = await res.json();
  divAlunos.innerHTML = alunos.map(a => `
    <div class="card">
      <strong>ID: ${a.id}</strong><br>
      <strong>${a.nome}</strong><br>
      Email: ${a.email}<br>
      Nascimento: ${(a.data_nascimento)}<br>
      CPF: ${a.cpf}<br>
      <button onclick="deletarAluno(${a.id})">Excluir</button>
      
    </div>
  `).join("");
}

async function deletarAluno(id) {
  await fetch(`http://localhost:5000/deletar_aluno/${id}`, {
    method: "DELETE"
  });
  carregarAlunos();
}

window.onload = carregarAlunos;

async function buscarAlunoPorCpf() {
  const cpf = document.getElementById("buscarCpf").value;
  if (!cpf) return alert("Informe um CPF");

  const res = await fetch(`http://localhost:5000/buscar_aluno/${cpf}`);
  const resultadoDiv = document.getElementById("resultadoBusca");

  if (res.status === 404) {
    resultadoDiv.innerHTML = `<p style="color: red;">Aluno não encontrado.</p>`;
    return;
  }

  const aluno = await res.json();
  resultadoDiv.innerHTML = `
    <div class="card">
      <strong>${aluno.nome}</strong><br>
      CPF: ${aluno.cpf}<br>
      Email: ${aluno.email}<br>
      Nascimento: ${formatarData(aluno.data_nascimento)}
    </div>
  `;
}

function formatarData(dataISO) {
  if (!dataISO) return "";
  const [dia, mes, ano] = dataISO.split("/");
  return `${dia}/${mes}/${ano}`;
}