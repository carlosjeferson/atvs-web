async function criarAluno(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const ira = document.getElementById('ira').value;
    const divform = document.getElementById('criarAluno')
    const btnVoltar = document.getElementById('btn-voltar');
    const p = document.createElement("p");
    
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

    // Mensagem de cadastro concluída
    p.textContent = "O usuário foi cadastrado com sucesso";
    divform.insertBefore(p, btnVoltar)

    const json = await response.json();
    console.log(json)
    
    // Limpar formulário
    document.getElementById('nome').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('ira').value = '';
    
}
