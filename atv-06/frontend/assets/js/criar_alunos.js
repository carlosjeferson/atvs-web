async function criarAluno(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const ira = document.getElementById('ira').value;
    const divform = document.getElementById('criarAluno');
    const form = document.querySelector('form');

    let p;

    if (divform.children[2] && divform.children[2].tagName === 'P') {
        // Se já existe um parágrafo no segundo filho, apenas atualiza o texto dele
        p = divform.children[2];
        p.textContent = "O usuário foi cadastrado com sucesso";
    } else {
        // Se não existe ou não é um parágrafo, cria um novo e insere
        p = document.createElement("p");
        p.textContent = "O usuário foi cadastrado com sucesso";
        divform.insertBefore(p, form);
    }

    // Remove o parágrafo após 5 segundos (5000 milissegundos)
    setTimeout(() => {
        if (p && p.parentNode) {
            p.parentNode.removeChild(p);
        }
    }, 3000);

    const novoAluno = { nome: nome, curso: curso, ira: ira };
    
    const response = await fetch("http://localhost:3000/alunos/criar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoAluno)
    });

    const json = await response.json();
    console.log(json);

    // Limpar formulário
    document.getElementById('nome').value = '';
    document.getElementById('curso').value = '';
    document.getElementById('ira').value = '';
}