async function obterAlunos() {
    let response = await fetch('http://localhost:3000/alunos/listar');
    let json = await response.json();
    let table = document.getElementById('table');
    let tableBody = document.getElementById('table-body');

    tableBody.innerHTML = ''
    
    for( aluno of json){
        const novaTr = document.createElement("tr");
        const novaTd = document.createElement("td");
        const novaTd2 = document.createElement("td");
        const novaTd3 = document.createElement("td");
        const novaTd4 = document.createElement("td");
        const novaTd5 = document.createElement("td");
        const novaTd6 = document.createElement("td");
        const novoLink = document.createElement("a");
        const img = document.createElement("img");
        // const img2 = document.createElement("img");
        
        img.src = 'https://img.icons8.com/windows/32/create-new.png'
        // img2.src = 'https://img.icons8.com/material-outlined/24/filled-trash.png'
        // img2.style.cursor = 'pointer';
        novoLink.appendChild(img);
        novoLink.href = `./pages/editarAluno.html?id=${aluno.id}`;
        novaTd.innerHTML = aluno.id;
        novaTd2.innerHTML = aluno.nome;
        novaTd3.innerHTML = aluno.curso;
        novaTd4.innerHTML = aluno.ira;
        novaTd6.innerHTML = `<img src='https://img.icons8.com/material-outlined/24/filled-trash.png' onclick='apagarAluno(${aluno.id})' style="cursor: pointer;">`


        novaTd5.appendChild(novoLink);
        novaTr.appendChild(novaTd);
        novaTr.appendChild(novaTd2);
        novaTr.appendChild(novaTd3);
        novaTr.appendChild(novaTd4);
        novaTr.appendChild(novaTd5);
        novaTr.appendChild(novaTd6);
        tableBody.appendChild(novaTr);
    }
}
obterAlunos();

async function apagarAluno(id) {
    const temCerteza = confirm("Tem certeza que deseja deletar este aluno?");

    if (!temCerteza) {
        console.log("Operação de deleção cancelada pelo usuário.");
        return; 
    }

   try {
        const response = await fetch(`http://localhost:3000/alunos/deletar/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            // Trata erros de resposta da API (ex: 404, 500)
            const errorText = await response.text();
            throw new Error(`Erro ao deletar aluno: ${response.status} - ${errorText}`);
        }

        const json = await response.json();
        console.log(json);

        // Atualiza a lista de alunos após a deleção
        obterAlunos(); 

    } catch (error) {
        console.error("Ocorreu um erro ao tentar apagar o aluno:", error);
        alert("Não foi possível apagar o aluno. Tente novamente mais tarde.");
    }
}