// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
// function pares(x, y) {
//  // código aqui
// }
// pares(32, 321);

function pares(x, y) {
    if (x % 2 !== 0) x += 1;

    while (x <= y) {
        console.log(x);
        x += 2;
    }
}

pares(32, 321);