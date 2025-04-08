import invertePalavra from "../src/PalavraInvertida";

describe("Testes da função invertePalavra", () => {
    test("Deve inverter a palavra 'ABACAXI'", () => {
        expect(invertePalavra("ABACAXI")).toBe("IXACABA");
    });

    test("Deve inverter a palavra 'javascript'", () => {
        expect(invertePalavra("javascript")).toBe("tpircsavaj");
    });

    test("Deve inverter uma string vazia", () => {
        expect(invertePalavra("o")).toBe("o");
    });

    test("Deve inverter uma palavra com apenas um caractere", () => {
        expect(invertePalavra("A")).toBe("A");
    });
});
