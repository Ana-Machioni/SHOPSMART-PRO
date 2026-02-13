// captura dos inputs para reutilizar em outras operaçoes 
const valor01 = document.getElementById('valor01');
const valor02 = document.getElementById('valor02');
// capturando o container onde o resultado sera exibido 
const resultado = document.getElementById('resultado');

// ──────────────────────── calcular total ────────────────────────
function calcularTotal() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';
    let total = (valor01 * valor02);

    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <h2>Voce vai pagar um valor de ${total}</h2>
        <ul>
        <li> voce esta adquirindo ${valor01} unidades com valor unitario de  ${valor02}</li>
        </ul>
    `;

};

// ──────────────────────── desconto ────────────────────────
function desconto() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';

    let desconto = (valor01 * valor02) / 100;
    let total = valor01 - desconto;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Total do desconto</h2>
    <ul>
        <li>DESCONTO </li>
        <li>Valor 01: ${valor01}</li>
        <li>Porcentagem de desconto: ${valor02}%</li>
        <li>Valor do desconto: ${desconto}</li>
        <li>Valor final: ${total}</li>
    </ul>
    `;
}
// ──────────────────────── juros ────────────────────────
function juros() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';

    let acrescimo = (valor01 * valor02) / 100;
    let total = valor01 + acrescimo
    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Acréscimo aplicado</h2>
    <ul>
        <li>Acrescimo de: ${valor01}</li>
        <li>sobre o valor de : ${valor02}</li>
        <li>valor do juros ${acrescimo}</li>
        <li>Valor final: ${total}</li>
    </ul>
    `;

};

// ──────────────────────── comissao ────────────────────────
function comissao() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);

    document.getElementById('resultado').style.display = 'flex';

    let comissao = (valor02 / 100) * valor01;

    if(isNaN (valor01) || isNaN(valor02)) {

        alert('valor01 ou valor02 invalido. Digite um numero');

    } else {
        resultado.style.display = 'flex';

        resultado.innerHTML = 
        `
        <h2>Comissão calculada</h2>
        <ul>
            <li>Comissão de ${valor02} sobre uma venda de ${valor01}</li>
            <h2>Valor da comissão: ${comissao}</h2>
        </ul>
        `};

}; 

// ──────────────────────── lucro ────────────────────────
function lucro() {
    let valor01 = parseFloat(document.getElementById('valor01').value);
    let valor02 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';

    let lucro = (valor01 - valor02);


    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = 
    `
    <h2>Total lucro obtido</h2>
    <ul>
        <li>Preço de venda: ${valor01}</li>
        <li>Custo: ${valor02}</li>
        <li>Valor final: ${lucro}</li>
    </ul>
    `;

};

// ──────────────────────── limpar ────────────────────────
function limpar() {
    document.getElementById('resultado').style.display = 'none';

};