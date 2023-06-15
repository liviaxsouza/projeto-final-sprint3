let armazem = [];

function artigo() {
    let inputTitulo = document.getElementById("titulo").value;
    let inputResumo = document.getElementById("resumo").value;
    let inputAutor = document.getElementById("autor").value;
    let inputData = document.getElementById("data").value;
    let inputCategorias = document.getElementById("categorias").value;
    let lista = [inputTitulo, inputAutor, inputData, inputCategorias, inputResumo];


    if (inputTitulo = "") {

    }
     // Verificar se os campos estao preencido antes de permitir adicionar no vetor.


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

    for (let i = 0; i < armazem.length; i++) {
        let noticia = armazem[i];

        msg += `
        <div class = "artigosCard">
                <h1 id="tituloComentarios" class="pArtigos">${noticia[0]}</h1>
                <p id="autorComentarios" class="pArtigos">${noticia[1]}</p>
                <p id="dataComentarios" class="pArtigos">${noticia[2].toLocalDateString()}</p>
                <p id="categoriasComentarios" class="pArtigos">${noticia[3]}</p>
                <p id="Comentarios" class="pArtigos">${noticia[4]}</p>
                <button class = "buttonDeletarArtigosCards" onclick = deletar(${i})>Deletar</button>
        </div>
        `
    }

    lista.innerHTML = msg;
}

function deletar(index) {
    armazem.splice(index, 1);
    atualizarLista();
}

// Estiliar os inputs para ficar do tamanho certo
// Deixar a data no padrao brasil


// Se sobrar tempo Verificar se o data que esta sendo adicionado nao é no passado
// Ao inves do botao, colocar um icone de lixeira

