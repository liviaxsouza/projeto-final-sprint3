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



        if (titulo == '' || resumo == '' || descricao == '' || autor == '' || new Date(date) < new Date(dateBr) || categoria == '') {
            if (titulo == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (data == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (descricao == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (autor == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
            if (new Date(date) < new Date(dateBr)) {
                document.getElementById('error').innerHTML = 'Digite uma data válida!';
            }
            if (categoria == '') {
                document.getElementById('error').innerHTML = 'Preencha todos os campos !';
            }
    }

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

// Estiliar os inputs para ficar do tamanho certo
// Deixar a data no padrao brasil


// Se sobrar tempo Verificar se o data que esta sendo adicionado nao é no passado
// Ao inves do botao, colocar um icone de lixeira