let armazem = [];

function artigo() {
    let inputTitulo = document.getElementById("titulo").value;
    let inputResumo = document.getElementById("resumo").value;
    let inputAutor = document.getElementById("autor").value;
    let inputData = document.getElementById("data").value;
    let inputCategorias = document.getElementById("categorias").value;
    let date = inputData.split("-");
    let dateBr = date.reverse().join("/");

    let lista = [inputTitulo, inputAutor, dateBr, inputCategorias, inputResumo];

        if (inputTitulo == '' || inputResumo == '' || inputAutor == '' || inputData == '' || inputCategorias == '') {
            alert("Preencha o(s) campo(s) em branco!")

            inputTitulo = document.getElementById("titulo").value = "";
            inputResumo = document.getElementById("resumo").value = "";
            inputAutor = document.getElementById("autor").value = "";
            inputData = document.getElementById("data").value = "";
            inputCategorias = document.getElementById("categorias").value = "";

            `
            <div class = "artigosCard">
            <div id="infoCard">
            <h1 id="tituloComentarios" class="pArtigos">${noticia[0]}</h1>
            <p id="autorComentarios" class="pArtigos">${noticia[1]}</p>
            <p id="dataComentarios" class="pArtigos">${noticia[2]}</p>
            <p id="categoriasComentarios" class="pArtigos">${noticia[3]}</p>
            <p id="Comentarios" class="pArtigos">${noticia[4]}</p>
            </div>
            <div id="iconCard">
            <img id="iconLixeira" onclick="deletar(${i})" src="./../assets/images/lixeira_icon.png" alt="" width="32px">  
            </div>
                   
                    
            </div>
            `
        }

    armazem.push(lista);

 
    atualizarLista();

    inputTitulo = document.getElementById("titulo").value = "";
    inputResumo = document.getElementById("resumo").value = "";
    inputAutor = document.getElementById("autor").value = "";
    inputData = document.getElementById("data").value = "";
    inputCategorias = document.getElementById("categorias").value = "Escolha uma categoria";

}

function atualizarLista() {
    let msg = "";
    const lista = document.getElementById("divArtigo");

    for (let i = 0; i < armazem.length; i++) {
        let noticia = armazem[i];

        msg += `
        <div class = "artigosCard">
        <div id="infoCard">
        <h1 id="tituloComentarios" class="pArtigos">${noticia[0]}</h1>
        <p id="autorComentarios" class="pArtigos">${noticia[1]}</p>
        <p id="dataComentarios" class="pArtigos">${noticia[2]}</p>
        <p id="categoriasComentarios" class="pArtigos">${noticia[3]}</p>
        <p id="Comentarios" class="pArtigos">${noticia[4]}</p>
        </div>
        <div id="iconCard">
        <img id="iconLixeira" onclick="deletar(${i})" src="./../assets/images/lixeira_icon.png" alt="" width="32px">  
        </div>
               
                
        </div>
        `
    }

    lista.innerHTML = msg;
}

function deletar(index) {
    armazem.splice(index, 1);
    atualizarLista();
}

// Se sobrar tempo Verificar se o data que esta sendo adicionado nao é no passado
