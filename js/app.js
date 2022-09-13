import { valida } from "./validacao.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    if(input.dataset.tipo === 'preco'){ //esse if é referente a máscara de valores monetários do simple mask money
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        });
    }

    input.addEventListener("blur", (event) => { //blur é um tipo de evento que é acionado sempre que o elemento deixar de ficar selecionado
        valida(event.target); //event.target seleciona o elemento html quando o evento é acionado
    })
});