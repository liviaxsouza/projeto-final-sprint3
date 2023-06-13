let armazem = [];

function artigo() {
    let inputTitulo = document.getElementById("titulo").value;
    let inputResumo = document.getElementById("resumo").value;
    let inputAutor = document.getElementById("autor").value;
    let inputData = document.getElementById("data").value;
    let inputCategorias = document.getElementById("categorias").value;
    let lista = [inputTitulo, inputAutor, inputData, inputCategorias, inputResumo];

    armazem.push(lista);

    atualizarLista();
}

function atualizarLista() {
    let msg = "";
    const lista = document.getElementById("divArtigo");

    for (let i = 0; i <  armazem.length; i++) {
        let noticia = armazem[i];

        msg += `
        <li>
            <div>
                <h1 id="tituloComentarios">${noticia[0]}</h1>
                <p id="autorComentarios">${noticia[1]}</p>
                <p id="dataComentarios">${noticia[2]}</p>
                <p id="categoriasComentarios">${noticia[3]}</p>
                <p id="Comentarios">${noticia[4]}</p>
            </div>
        </li>
        `
    }   
    
    lista.innerHTML = msg;
}
