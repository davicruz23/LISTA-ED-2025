import removeDuplicatasComPilha from "../src/L1Q7.js";
import Pilha from "../src/L1Q7Pilha.js";

test("remove duplicatas usando Pilha", () => {
    const original = new Pilha(10);
    [3, 7, 3, 2, 7, 1, 4, 2].forEach(n => original.push(n));

    const resultado = removeDuplicatasComPilha(original);
    expect(resultado.toArray()).toEqual([3, 7, 2, 1, 4]);
});

