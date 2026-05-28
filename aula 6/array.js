//metodos de array

let aluno = ["Cadu", 12345, true, "Dev.Web", 5]

//let aluno_string = aluno[2].toString()
//console.log(aluno_string)

//aluno.forEach(item => console.log(item + ' é tipo ' + typeof item) )

//let aluno_join = aluno.join(' ')
//console.log(aluno_join + ' ' + typeof aluno_join)
/*
aluno.pop()
console.log(aluno)

aluno.push('12345678911')
console.log(aluno)
*/

let Alt = ['Brenda', 'Helena', 'Gabi', 'Barbara', 'Nalu']
Alt.pop()
console.log(Alt)

Alt.push("Grabiel")
Alt.shift()

let new_Alt = Alt.shift()

console.log(new_Alt)
console.log(Alt)

Alt.unshift('Cazuza')
console.log(Alt)

delete Alt[2]
console.log(Alt)



