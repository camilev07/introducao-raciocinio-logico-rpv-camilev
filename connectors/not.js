// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

let idade = 18
let possuiCNH = true
let nacionalidade = 'Brasileiro'
let mnhaValidacao = idade >= 18 && possuiCNH == true && nacionalidade == 'Brasileiro'
let possuiInformacao = 1
if (possuiInformacao) {
    console.log('Possui Informação')
} else {
    console.log('Não possui Informação')
}

// if(!(idade >= 18 && possuiCNH == true && nacionalidade == 'Brasileiro')) {
//     console.log('Você pode dirigir!!')
// } else {
//     console.log('Você não pode dirigir')
// }
