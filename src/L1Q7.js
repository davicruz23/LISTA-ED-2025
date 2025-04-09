import Pilha from "./L1Q7Pilha";

export default function removeDuplicatasComPilha(pilha) {
    const arrayOriginal = pilha.toArray(); // base → topo
    const vistos = new Set();
    const resultado = new Pilha(pilha.maxSize);

    // percorre do início (base) para o fim (topo)
    for (let i = 0; i < arrayOriginal.length; i++) {
        const valor = arrayOriginal[i];
        if (!vistos.has(valor)) {
            vistos.add(valor);
            resultado.push(valor);
        }
    }

    return resultado;
}