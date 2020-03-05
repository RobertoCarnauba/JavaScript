// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find)
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//    2.1 Utilizando o map
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
  
const year = usuarios.map(function(item){
    return item.idade
})
console.log(year)

// 2.2 Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
//  ** Fundionario que trabalhão na Rocketseat **
const rockt_employer = usuarios.filter(users => users.empresa == 'Rocketseat')
console.log("Todos funcioanrios da Rocketseat")
console.log(rockt_employer)

const rockt_employer_maior =  usuarios.filter(user => user.empresa == "Rocketseat" && user.idade > 18)
console.log("Todos funcioanrios MAIOR que 18 anos")
console.log(rockt_employer_maior)

// 2.3 Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
let google_employer = usuarios.find( user => user.empresa === "Google")
console.log("Todos funcioanrios Google(não tem)")
console.log(google_employer)

// 2.4 Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:
let user_mult = usuarios.map(user =>({...user,idade: user.idade * 2})).filter(user => user.idade <= 50)
console.log("Idade mult * 2 e no maximo 50anos")
console.log(user_mult)


 
