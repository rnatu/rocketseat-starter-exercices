// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.
// function temHabilidade(skills) {
//  // código aqui
// }
// var skills = ["Javascript", "ReactJS", "React Native"];
// temHabilidade(skills); // true ou false
// Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

function temHabilidade(skills, language) {
    //convertendo o parametro language para lowerCase
    langLower = language.toLowerCase();
    
    skillsLower = [];
    //convertendo os elementos em lowerCase e adic para o array vazio acima;
    skills.forEach(element => {
        skillsLower.push(element.toLowerCase());
    });

    //checando se não existe um index com a language informada no array de skills
    idx = skillsLower.indexOf(langLower);
    if (idx === -1) {
        return console.log('Não foi encontrada ou digitada incorretamente');
    }

    //se existir
    return console.log(true);
}

let skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills, 'JavaScript'); // true ou false
