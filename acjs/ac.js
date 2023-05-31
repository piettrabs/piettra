const { add } = require('lodash');

class PAPELARIA {
    constructor(id, nomeProduto, tipo, descricao, ativo, estoque, preco){
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.tipo = tipo;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco
    }
    ativar(){
        this.ativo = true;
    }

    retirarEstoque() {
        if (this.ativo) {
            if (valor < 0) {
              console.log("Impossivel realizar, valor negativo...");
            } else if (valor == 0) {
              console.log("Impossivel realizar, valor zerado...");
            } else if (valor > this.estoque) {
              console.log("Impossivel realizar, essa quantidade está indisponivel no nosso estoque");
            } else {
              this.estoque -= valor;
            }
          } else {
            console.log("Produto não encontrado");
          }
    }
    incluirEstoque() {
        if (this.ativo) {
            if (valor < 0) {
              console.log("Impossivel adicionar essa quantidade ao estoque, valor negativo");
            } else if (valor == 0) {
              console.log("Impossivel adicionar essa quantidade ao estoque, valor zerado...");
            }else if (valor > 10) {
                console.log("Impossivel adicionar essa quantidade ao estoque, valor acima do limite...");
              }
               else {
              this.estoque += valor;
            }
          } else {
            console.log("Produto não encontrado");
          }
    }
}


const leia = require('prompt-sync')()
let comecar = ""
do {
    console.log("PAPELARIA PIETTRA");
    console.log("papelaria criativa \n");
    
    comecar = leia("Deseja fazer alguma compra? Digite S ou N: ").toUpperCase()

    if(comecar == "S"){
        console.log("Opa!")
        const id = leia("Digite o id: ")
        const nomeProduto = leia("Digite o nome do produto: ")
        const tipo = leia("Digite o tipo do produto: ")
        const descricao = leia("Digite a descrição do produto: ")
        const preco = leia("Digite o preço do produto: ")
        let PAPELARIA1 = new PAPELARIA(id, nomeProduto, tipo, descricao, ativo, estoque, preco)

        PAPELARIA1.ativar()

        for (let x = 1; x <= 5; x ++){
            valor = parseInt(leia("Digite a quantidade de produtos que deseja: "));

            PAPELARIA1.retirarEstoque(valor);
            console.log("Estoque atual de produtos:" + PAPELARIA1.estoque);
            console.log("Preço a se pagar: " + (valor*PAPELARIA1.preco))
        }

        add = parseInt (leia("Digite a quantidade que deseja: "))
        PAPELARIA1.incluirEstoque(add)
        console.log("Estoque atual do produto: " + PAPELARIA1.estoque)
        

    }  
    else{
        console.log("Valor digitado não disponível. Favor digitar S ou N.")
    }
} while(comecar != "N")
    console.log("Tchau!")

