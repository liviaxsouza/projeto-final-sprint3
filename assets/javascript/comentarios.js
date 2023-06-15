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
    
    inputTitulo = document.getElementById("titulo").value = "";
    inputResumo = document.getElementById("resumo").value = "";
    inputAutor = document.getElementById("autor").value = "";
    inputData = document.getElementById("data").value = "";
    inputCategorias = document.getElementById("categorias").value = "Culinária";

}

function atualizarLista() {
    let msg = "";
    const lista = document.getElementById("divArtigo");

    for (let i = 0; i <  armazem.length; i++) {
        let noticia = armazem[i];

        msg += `
        <div class = "artigosCard">
                <h1 id="tituloComentarios" class="pArtigos">${noticia[0]}</h1>
                <p id="autorComentarios" class="pArtigos">${noticia[1]}</p>
                <p id="dataComentarios" class="pArtigos">${noticia[2]}</p>
                <p id="categoriasComentarios" class="pArtigos">${noticia[3]}</p>
                <p id="Comentarios" class="pArtigos">${noticia[4]}</p>
        </div>
        `
    }   
    
    lista.innerHTML = msg;
}

