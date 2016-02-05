// O nome do módulo aqui é o nome do arquivo, quando não usamos a palavra-chave module
export class Calc
{
    public  soma(a:number, b:number):number
    {
        return (a+b);
    }

    public  subtracao(a:number, b:number):number
    {
        return (a-b);
    }

    public  multiplicacao(a:number, b:number):number
    {
        return (a*b);
    }

    public divisao(a:number, b:number):number
    {
        if (!b) {
            throw new Error("Divisão por 0!");
        }
        return (a/b);
    }
}
