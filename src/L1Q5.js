class Pilha {
    constructor(size = 10) {
        this.topo = -1;
        this.dados = [];
        this.size = size; // faltava salvar o size
    }

    push(elemento) {
        if (this.isFull()) {
            throw new Error("Stack Overflow");
        }
        this.topo++;
        this.dados[this.topo] = elemento;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Underflow");
        }
        const elemento = this.dados[this.topo];
        this.topo--;
        return elemento;
    }

    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo];
        }
    }

    isEmpty() {
        return this.topo === -1;
    }

    isFull() {
        return this.topo === this.size - 1;
    }

    clear() {
        this.topo = -1;
    }

    length() {
        return this.topo + 1;
    }
}


export default function verificacao(texto) {
    let p = new Pilha(texto.length);

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        if (char === '(' || char === '[') {
            p.push(char);
        } else if (char === ')' || char === ']') {
            if (p.isEmpty()) return false;
            const aux = p.pop();
            if ((aux === '(' && char !== ')') || (aux === '[' && char !== ']')) {
                return false;
            }
        }
    }

    return p.isEmpty();
}