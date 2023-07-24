const listadecadastros = []

function exibirMensagem(mensagem) {
    alert(mensagem)
}

function cadastrarUsuarios() {
    //Armazenando dados do usuario
    const nome = prompt("digite o seu nome")
    const idade = prompt("digite o seu idade")
    const sexo = prompt("digite o seu sexo")
    const email = prompt("digite o seu e-mail")
    const senha = prompt("digite o sua senha")
    //Gerando informações de usuarios
    const usuario = {
        nome,
        idade,
        sexo,
        email,
        senha,
    }
    listadecadastros.push(usuario)
}

function exibirCadastros() {
    if (listadecadastros.length === 0)
        return exibirMensagem("nenhum cadastro foi realizado")

    listadecadastros.forEach(function (item) {
        exibirMensagem("nome:" + item.nome + "\n idade:" + item.idade + "\nsexo:" + item.sexo + "\nemail:" + item.email + "\nsenha" + item.senha)
    })

}
function executarPrograma() {
    const opçoes = prompt("ecolha uma das opção" +
        "\n1-cadastrar" +
        "\n2-exibir lista de usuarios" +
        "\n3-sair")

    if (opçoes === "1") {
        return cadastrarUsuarios()
    }
    else if (opçoes === "2") {
        return exibirCadastros()
    }


}
while (true) {
    executarPrograma()
}

