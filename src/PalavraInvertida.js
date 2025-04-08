import Pilha from "./Pilha";

function invertePalavra(palavra) {
    let p = new Pilha(palavra.length);

    for (let char of palavra) {
        p.push(char);
    }

    let palavraInvertida = "";

    while (!p.isEmpty()) {
        palavraInvertida += p.pop();
    }
    return palavraInvertida;
}

export default invertePalavra;
