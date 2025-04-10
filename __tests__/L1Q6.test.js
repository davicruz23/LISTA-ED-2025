import infixaParaPosfixa from "../src/L1Q6";

test("conversão para RPN: (a+(b*c)) → abc*+", () => {
    expect(infixaParaPosfixa("(a+(b*c))")).toBe("abc*+");
});

test("conversão para RPN: ((a+b)*(z+x)) → ab+zx+*", () => {
    expect(infixaParaPosfixa("((a+b)*(z+x))")).toBe("ab+zx+*");
});

test("conversão para RPN: a+b*c-d → abc*+d-", () => {
    expect(infixaParaPosfixa("a+b*c-d")).toBe("abc*+d-");
});

test("conversão para RPN: (a+b)+c/d → ab+cd/+", () => {
    expect(infixaParaPosfixa("(a+b)+c/d")).toBe("ab+cd/+");
});

