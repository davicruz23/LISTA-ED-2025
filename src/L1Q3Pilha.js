class Pilha {

    constructor(size = 10){
        this.maxSize = size;
        this.dados = [];
        this.topo = -1;
    }

    push(novoDado){
        if(this.isFull()){
            throw new Error("Stack overflow");
        } else {
            this.dados[++this.topo] = novoDado;
        }
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack underflow");
        } else {
            return this.dados[this.topo--];
        }
    }

    isFull(){
        return this.topo === this.maxSize - 1;
    }

    isEmpty(){
        return this.topo === -1;
    }

    clear() {
        this.topo = -1;
    }

    length() {
        return this.topo + 1;
    }

    toString() {
        return `[${this.dados.slice(0, this.topo + 1).join(" ")}]`;
    }
}

export default Pilha;
