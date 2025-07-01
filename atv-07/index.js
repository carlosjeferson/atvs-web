const tableBody = document.getElementById('table-body');

async function listarEstados() {
    const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1');
    const json =  await response.json();
    console.log(json.data)
}

listarEstados()