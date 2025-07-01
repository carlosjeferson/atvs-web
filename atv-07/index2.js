async function listarPaises() {
    const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries');
    const json = await response.json();

    for (let pais of json.data) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td'); // País
        let td2 = document.createElement('td'); // Casos
        let td3 = document.createElement('td'); // Confirmados
        let td4 = document.createElement('td'); // Mortes
        let td5 = document.createElement('td'); // Recuperados

        // Valores com tratamento
        let casos = pais.cases ?? pais.confirmed ?? "N/D";
        let confirmados = pais.confirmed ?? "N/D";
        let mortes = pais.deaths ?? "N/D";
        let recuperados = pais.recovered ?? "N/D";

        td1.textContent = pais.country;
        td2.textContent = casos;
        td3.textContent = confirmados;
        td4.textContent = mortes;
        td5.textContent = recuperados;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        if (pais.country.toLowerCase() === 'brazil') {
            tr.classList.add('destaque-brasil');
        }

        document.getElementById('table-body').appendChild(tr);
    }
}

listarPaises();
