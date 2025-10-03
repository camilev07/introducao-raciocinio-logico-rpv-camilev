// Exemplo do conector AND (&&)

// Este conector retorna 'true' apenas se TODAS as condições forem verdadeiros.

//Se eu tenho 18 anos e tenho CNH eu posso dirigir.
let idade = 18
let possuoCNH = true
let nacionalidade = 'Brasileira'

// true------------------true--- //
if(idade >= 18 && possuoCNH == true && nacionalidade === 'Brasileira'){
    console.log('Eu posso dirigir')
} else {
  console.log('Eu não posso dirigir')
  
}
