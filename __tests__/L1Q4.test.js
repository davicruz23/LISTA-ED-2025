import conversor from "../src/L1Q4";



let c;

beforeEach(()=>{
    c = new conversor();
});

test("Converter de decimal pra binário '-' ", ()=>{
    expect(c.converte(10)).toBe("1010");
});