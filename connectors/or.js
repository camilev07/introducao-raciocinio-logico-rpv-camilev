// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.

//Eu posso votar caso eu seja Homem ou Mulher
// tenha mais de 16 anos
// tenga titulo de eleitor 
// -----------------------------//
//----Contexto de Atribuçao----//
//----------------------------//

let sexo = 'H' // ou 'M'
let idade = 17
let possuiTituloEleitor = true

//----------------------------//
//---Contexto de Validação----//
//----------------------------//

if((sexo == 'H' || sexo == 'M') && idade >= 16 && possuiTituloEleitor == true){
    console.log('Você pode votar')
} else {
    console.log('Você não pode votar')
}
