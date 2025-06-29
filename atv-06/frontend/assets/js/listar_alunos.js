async function obterAlunos() {
    let response = await fetch('http://localhost:3000/alunos/listar');
    let json = await response.json();
    let table = document.getElementById('table');
    
    for( aluno of json){
        const novaTr = document.createElement("tr");
        const novaTd = document.createElement("td");
        const novaTd2 = document.createElement("td");
        const novaTd3 = document.createElement("td");
        const novaTd4 = document.createElement("td");
        
        novaTd.innerHTML = aluno.id;
        novaTd2.innerHTML = aluno.nome;
        novaTd3.innerHTML = aluno.curso;
        novaTd4.innerHTML = aluno.ira;

        novaTr.appendChild(novaTd);
        novaTr.appendChild(novaTd2);
        novaTr.appendChild(novaTd3);
        novaTr.appendChild(novaTd4);
        table.appendChild(novaTr);
    }
}

obterAlunos();