class Pilhas {

    constructor(tam = 10){
        this.t = tam;
        this.dados = [];
        this.topoA = -1;
        this.topoB = tam;
    }

    isEmptyA(){
        return this.topoA === -1;
    }

    isEmptyB(){
        return this.topoB === this.t;
    }

    pushA(dado){
        if(this.isFull()){
            throw new Error("Overflow");
        }else{
            this.dados[++this.topoA] = dado;
        }
    }

    pushB(dado){
        if(this.isFull()){
            throw new Error("Overflow");
        }else{
            this.dados[--this.topoB] = dado;
        }
    }

    isFull(){
        if(this.topoA + 1 === this.topoB || this.topoB === this.topoA){
            return true;
        }
    }

    popA(){
        if(this.isEmptyA()){
            throw new Error("Pilha vazia");
        }else{
            return this.dados[this.topoA--];
        }
    }

    popB(){
        if(this.isEmptyB()){
            throw new Error("Pilha vazia");
        }else{
            return this.dados[this.topoB++];
        }
    }
}

export default Pilhas;