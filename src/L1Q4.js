class conversor {
    constructor(tam = 20) {
        this.maxSize = tam;
        this.dados = [];
        this.topo = -1;
    }

    push(dado) {
        if (this.isFull()) {
            throw new Error("Overflow");
        } else {
            this.dados[++this.topo] = dado;
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Underflow");
        } else {
            return this.dados[this.topo--];
        }
    }

    isFull() {
        return this.topo === this.maxSize - 1;
    }

    isEmpty() {
        return this.topo === -1;
    }

    converte(numero) {
        let resto;
        let resultado = "";
        while (numero > 0) {
            resto = Math.floor(numero % 2);
            this.push(resto);
            numero = Math.floor(numero / 2);
        }

        while (!this.isEmpty()) {
            resultado += this.pop().toString();
        }

        return resultado;
    }
}

export default conversor;
