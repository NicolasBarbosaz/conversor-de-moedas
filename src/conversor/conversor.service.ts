import { Injectable } from "@nestjs/common";
import { Conversor } from "./conversor.interface";

@Injectable()
export class ConversorService {

    private conversoes: Conversor[] = [];  // Array para guardar as conversoes
    private id = 1;

    create(amount: number, fromCurrency: string) {

        const dolar = 0.20;
        const euro = 0.17;

        const usdValue = amount * dolar;
        const eurValue = amount * euro;


        const newConversao: Conversor = {  // Criando o objeto de conversao
            id: this.id++,
            amount,
            fromCurrency,
            usdValue,
            eurValue
        };
      this.conversoes.push(newConversao); //aqui eu adicionei a conversao na array com todas as conversoes
        return newConversao;
    }

    findAll() : Conversor [] {  //metodo para retornar todas as conversoes

       return this.conversoes;         
    }



}

  
  

