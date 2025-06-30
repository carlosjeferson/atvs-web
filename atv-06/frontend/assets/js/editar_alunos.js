let params = new URLSearchParams(document.location.search.substring(1));
let id = params.get("id");
// console.log(id);

function getAluno(){
    fetch(`http://localhost:3000/alunos/recuperar/${id}`)
    .then(response => response.json())
    .then(json => {
        document.getElementById('nome').value = json.nome;
        document.getElementById('curso').value = json.curso;
        document.getElementById('ira').value = json.ira;
    })
    .catch(error => console.log(error))
}

getAluno()

function editarAluno(event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const curso = document.getElementById("curso").value
    const ira = document.getElementById("ira").value
    const divform = document.getElementById('criarAluno');
    const btnVoltar = document.getElementById('btn-voltar');
    const p = document.createElement("p");
    
    const alunoModificado = {nome: nome, curso: curso, ira: ira}

    fetch(
    `http://localhost:3000/alunos/editar/${id}`,
    {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(alunoModificado)
    }
)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))

     // Mensagem de edição concluída
    p.textContent = "O usuário foi editado com sucesso";
    divform.insertBefore(p, btnVoltar)

    // Limpar formulário
    document.getElementById('nome').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('ira').value = '';
}
