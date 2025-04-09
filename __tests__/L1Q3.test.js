import trocaTopoBase from "../src/L1Q3";
import Pilha from "../src/L1Q3Pilha";

let p;
beforeEach(()=>{
    p = new Pilha(5);
});

test("testes", ()=>{
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    p.push(5);

    expect(p.toString()).toBe("[1 2 3 4 5]");
    expect(trocaTopoBase(p).toString()).toBe("[5 2 3 4 1]");
});