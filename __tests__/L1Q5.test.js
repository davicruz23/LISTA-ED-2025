import verificacao from "../src/L1Q5";

let texto;

beforeEach(()=>{
    texto = "[()[)";
});

test("verifica expressão mal formada", () => {
    expect(verificacao(texto)).toBe(false);
});


test("verifica expressão vazia", () => {
    expect(verificacao("")).toBe(true);
});
