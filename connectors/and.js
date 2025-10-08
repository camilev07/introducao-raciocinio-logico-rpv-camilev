// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiros.

//Se eu tenho 18 anos e tenho CNH eu posso dirigir.

// ---------------------------------//
// ----- CONTEXTO DE ATRIBUIÇÃO ----//
// ---------------------------------//
let idade = 18
let possuoCNH = true
let nacionalidade = 'Brasileira'

// ---------------------------------//
// ----- CONTEXTO DE VALIDACAO -----//
// ---------------------------------//
// true------------------true--- //
if(idade >= 18 && possuoCNH == true && nacionalidade === 'Brasileira'){
    console.log('Eu posso dirigir')
} else {
  console.log('Eu não posso dirigir')
  
}
// ----------------------------- //