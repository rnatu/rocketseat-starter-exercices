// Crie uma função que dado o objeto a seguir:
// var endereco = {
//  rua: "Rua dos pinheiros",
//  numero: 1293,
//  bairro: "Centro",
//  cidade: "São Paulo",
//  uf: "SP"
// };
// Retorne o seguinte conteúdo:
// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293.

let endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
};

function returnString (endereco) {
    console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}`);
};

returnString(endereco);