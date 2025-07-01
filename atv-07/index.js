const tableBody = document.getElementById('table-body');
const mediaEstado = document.getElementById('media');

async function listarEstados() {
    const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1');
    const json = await response.json();
    
    let dados = []; 
    let cases = 0, suspects = 0, deaths = 0;

    for (estado of json.data) {
        const estadoObj = {
            nome: estado.state,
            uf: estado.uf,
            cases: Number(estado.cases),
            suspects: Number(estado.suspects),
            deaths: Number(estado.deaths),
            tr: document.createElement('tr')
        };

        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        td.innerHTML = estado.state;
        td2.innerHTML = estado.uf;
        td3.innerHTML = estadoObj.cases;
        td4.innerHTML = estadoObj.suspects;
        td5.innerHTML = estadoObj.deaths;

        estadoObj.tr.appendChild(td);
        estadoObj.tr.appendChild(td2);
        estadoObj.tr.appendChild(td3);
        estadoObj.tr.appendChild(td4);
        estadoObj.tr.appendChild(td5);
        tableBody.appendChild(estadoObj.tr);

        cases += estadoObj.cases;
        suspects += estadoObj.suspects;
        deaths += estadoObj.deaths;

        dados.push(estadoObj);
    }

    const mediaDeaths = Media(deaths);

    // EXERCÍCIO 3 – Destacar acima da média de falecimentos
    dados.forEach(estado => {
        if (estado.deaths > mediaDeaths) {
            estado.tr.style.backgroundColor = '#ffe0e0'; // Destaque com vermelho claro
        }
    });

    // EXERCÍCIO 4 e 5 – Relação Casos/Falecimentos
    let maiorRelacao = -Infinity;
    let menorRelacao = Infinity;
    let estadoMaior = "";
    let estadoMenor = "";

    dados.forEach(estado => {
        if (estado.deaths === 0) return; // evita divisão por zero

        const relacao = estado.cases / estado.deaths;

        if (relacao > maiorRelacao) {
            maiorRelacao = relacao;
            estadoMaior = estado.nome;
        }

        if (relacao < menorRelacao) {
            menorRelacao = relacao;
            estadoMenor = estado.nome;
        }
    });

    // Mostrando as médias e as relações
    mediaEstado.children[0].innerHTML = `Média do Número de Casos: ${Media(cases).toFixed(2)}`;
    mediaEstado.children[1].innerHTML = `Média do Número de Suspeitos: ${Media(suspects).toFixed(2)}`;
    mediaEstado.children[2].innerHTML = `Média do Número de Mortes: ${Media(deaths).toFixed(2)}`;

    const relacoes = document.createElement('div');
    relacoes.innerHTML = `
        <p><strong>Maior relação Casos/Falecimentos:</strong> ${estadoMaior} (${maiorRelacao.toFixed(2)})</p>
        <p><strong>Menor relação Casos/Falecimentos:</strong> ${estadoMenor} (${menorRelacao.toFixed(2)})</p>
    `;
    mediaEstado.appendChild(relacoes);
}

listarEstados();

function Media(qtd) {
    return qtd / 27;
}
