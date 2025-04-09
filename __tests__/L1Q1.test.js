import L1Q1 from "../src/L1Q1";

describe("Testes da função invertePalavra", () => {
    test("Deve inverter a palavra 'ABACAXI'", () => {
        expect(L1Q1("ABACAXI")).toBe("IXACABA");
    });

    test("Deve inverter a palavra 'javascript'", () => {
        expect(L1Q1("javascript")).toBe("tpircsavaj");
    });

    test("Deve inverter uma string vazia", () => {
        expect(L1Q1("o")).toBe("o");
    });

    test("Deve inverter uma palavra com apenas um caractere", () => {
        expect(L1Q1("A")).toBe("A");
    });
});
