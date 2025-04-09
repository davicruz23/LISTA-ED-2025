export class Pilha {
    constructor(size = 100) {
        this.dados = [];
        this.topo = -1;
        this.maxSize = size;
    }

    push(valor) {
        if (this.isFull()) throw new Error("Stack Overflow");
        this.dados[++this.topo] = valor;
    }

    pop() {
        if (this.isEmpty()) throw new Error("Stack Underflow");
        return this.dados[this.topo--];
    }

    top() {
        if (this.isEmpty()) return null;
        return this.dados[this.topo];
    }

    isEmpty() {
        return this.topo === -1;
    }

    isFull() {
        return this.topo >= this.maxSize - 1;
    }

    size() {
        return this.topo + 1;
    }

    toArray() {
        return this.dados.slice(0, this.topo + 1);
    }

    toString() {
        return `[${this.toArray().join(" ")}]`;
    }
}

export default Pilha;
