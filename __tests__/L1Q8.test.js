import PilhaDePratos from "../src/L1Q8";

let pratos;
beforeEach(() => {
    pratos = new PilhaDePratos(3);
});

test("empilha e desempilha corretamente", () => {
    pratos.empilha(5);
    pratos.empilha(10);
    pratos.empilha(15);
    pratos.empilha(20);

    expect(pratos.desempilha()).toBe(20);
    expect(pratos.desempilha()).toBe(15);
});
