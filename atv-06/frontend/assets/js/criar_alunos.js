async function criarAluno(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const ira = document.getElementById('ira').value;

    const novoAluno = {nome: nome, curso: curso, ira: ira}

    const response = await fetch(
        "http://localhost:3000/alunos/criar"
        ,
        {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(novoAluno)
        }
    )
    const json = await response.json();
    console.log(json);
}