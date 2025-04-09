import Pilha from "./L1Q3Pilha";

export default function trocaTopoBase(pilha) {
    if (pilha.length() <= 1) return pilha;

    const aux = new Pilha(pilha.maxSize);
    const topo = pilha.pop();

    while (pilha.length() > 1) {
        aux.push(pilha.pop());
    }

    const base = pilha.pop();

    pilha.push(topo);

    while (!aux.isEmpty()) {
        pilha.push(aux.pop());
    }

    pilha.push(base);

    return pilha;
}