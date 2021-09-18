let convidados =[] //inicia um array(vetor) vazio

function adicionarConvidados() {
    //pegar os dados do input
    let convidado = {}
    
    convidado.nome = document.getElementById("nome").value;
    convidado.email= document.getElementById("email").value;
    convidado.idade = Number(document.getElementById("idade").value);
    
    let erros = validar(convidado);

    if(erros.length >0){
       exibirErros(erros);
    }else{
        document.getElementById("alerta").innerHTML = ""
        convidados.push(convidado);
        limparFormulario();
        listarConvidados();

    }
    
}

function listarConvidados() {
    document.getElementById("convidados").innerHTML="" //zerando a lista de convidados
    for (let i=0; i < convidados.length; i++){
        document.getElementById("convidados").innerHTML+= `
        <tr>
        <td>${convidados[i].nome} </td>
        <td>${convidados[i].email}</td>
        <td>${convidados[i].idade}</td>
        <td>
        <button onclick="remover(${i})">Excluir</button>
        </td>
        </tr>`;
        console.log(convidados[i]);

    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('idade').value = '';
}

function validar(convidado) {
    let erros = []

    if(convidado.nome==''){
        erros.push("Campo nome é obrigatório");
    }

    if(convidado.email==''){
        erros.push("Campo email é obrigatório");
    }

    if(convidado.idade ==''){
        erros.push("Campo idade é obrigatório");
    }
//verificar se convidado é maior de idade

if (convidado.idade <18){
    erros.push("Convidado é menor de idade");
}
//validando email
 if( convidado.email.indexOf("@") ==-1  ){
    erros.push("Email do convidado não contem \'@\'");
 }
 if( convidado.email.indexOf(".") ==-1 ){
    erros.push("Email não contem \'.\'");
 }
 if( convidado.email.indexOf(` `) >=0 ){
    erros.push("O email não deve conter espaço");
 }


    return erros;
   

}

function exibirErros(erros) {
    let divAlerta = document.getElementById("alerta");
    divAlerta.innerHTML = `Os seguintes erros foram encontrados: ${erros.toString()}`
    
}

function remover(posicao) {
    convidados.splice(posicao,1);
    listarConvidados();
    
}