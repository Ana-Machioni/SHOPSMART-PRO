// captura dos inputs para reutilizar em outras operaçoes 
const valor01 = document.getElementById('valor01');
const valor02 = document.getElementById('valor02');
// capturando o container onde o resultado sera exibido 
const resultado = document.getElementById('resultado').style.display = 'flex';
const mostrarResultado = document.getElementById('resultado').style.display = 'flex';
// style.dysplay definindo como html e renderizando a pagina

// ──────────────────────── calcular total ────────────────────────
function calcularTotal() {
    const preco = parseFloat(valor01.value);
    const quantidade = parseFloat(valor02.value);
    // exibir a div resultado 
    if(isNaN (preco) || isNaN(quantidade)) {
        mostrarResultado.textContent = 'Por favor, insira um número válido';
        return;
    }

     const total = preco * quantidade;

    // capturando o container onde o resultado sera exibido 
    // const resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <h2>Voce vai pagar um valor de R$${total}</h2>
        <ul>
        <li> voce esta adquirindo R$${preco} unidades com valor unitario de  R$${quantidade}</li>
        </ul>
    `;

};

// ──────────────────────── desconto ────────────────────────
function desconto() {

    const preco = parseFloat(valor01.value);
    const desconto  = parseFloat(valor02.value);

    document.getElementById('resultado').style.display = 'flex';

    let desconto = (valor01 * valor02) / 100;
    let total = valor01 - desconto;

    toFixed(2)
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Total do desconto</h2>
    <ul>
        <li>DESCONTO </li>
        <li>Valor 01: R$ ${valor01}</li>
        <li>Porcentagem de desconto: R$ ${valor02}%</li>
        <li>Valor do desconto: R$ ${desconto}</li>
        <li>Valor final: R$ ${total}</li>
    </ul>
    `;
}
// ──────────────────────── juros ────────────────────────
function juros() {
    let valor01 = parseFloat(input01.value);
    let valor02 = parseFloat(input02.value);
    // exibir a div resultado 
    // document.getElementById('resultado').style.display = 'flex';

    let acrescimo = (valor01 * valor02) / 100;
    let total = valor01 + acrescimo
    // capturando o container onde o resultado sera exibido 
    // const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
        `
        <h2>Acréscimo aplicado</h2>
        <ul>
            <li>Acrescimo de: R$${valor01}</li>

            <li>sobre o valor de : R$${valor02}</li>
            <li>valor do juros R$${acrescimo}</li>
            <li>Valor final: R$${total}</li>
        </ul>
    `;

};

// ──────────────────────── comissao ────────────────────────
function comissao() {
    let valor01 = parseFloat(input01.value);
    let valor02 = parseFloat(input02.value);

    // document.getElementById('resultado').style.display = 'flex';

    let comissao = (valor02 / 100) * valor01;

    if(isNaN (valor01) || isNaN(valor02)) {

        alert('valor01 ou valor02 invalido. Digite um numero');

    } else {
        resultado.style.display = 'flex';

        resultado.innerHTML = 
        `
        <h2>Comissão calculada</h2>
        <ul>
            <li>Comissão de R$${valor02} sobre uma venda de R$${valor01}</li>
            <h2>Valor da comissão: R$${comissao}</h2>
        </ul>
        `};

}; 

// ──────────────────────── lucro ────────────────────────
function lucro() {
    let valor01 = parseFloat(input01.value);
    let valor02 = parseFloat(input02.value);
    // exibir a div resultado 
    // document.getElementById('resultado').style.display = 'flex';

    let lucro = (valor01 - valor02);


    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
        `
        <h2>Total lucro obtido</h2>
        <ul>
            <li>Preço de venda: R$${valor01}</li>
            <li>Custo: R$${valor02}</li>
            <li>Valor final: R$${lucro}</li>
        </ul>
    `;

};

// ──────────────────────── limpar ────────────────────────
function limpar() {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';

};

function mostrarMensagem (mensagem) {
    mostrarResultado.textContent = mensagem
}