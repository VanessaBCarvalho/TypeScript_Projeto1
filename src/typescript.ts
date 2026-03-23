let valor: number = 3000;
let nome: string ="";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

// Tipos Personalizados (Type Alias)
type Transacao1 = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}//

//Enum
enum TipoTransacao {
    DEPOSITO1 = "Depósito",
    TRANSFERENCIA1 = "Transferência",
    PAGAMENTO_BOLETO1 = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0,

}

console.log(novaTransacao);
