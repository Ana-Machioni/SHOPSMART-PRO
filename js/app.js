// captura dos inputs para reutilizar em outras operaçoes 
const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');
// capturando o container onde o resultado sera exibido 
const resultado = document.getElementById('resultado');

function calcularTotal() {
    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';
    let total = (valor01 * valor02);

    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');


    resultado.innerHTML = `
        <h2>Valor total</h2>
        <ul>
        <li> Operação: <span>SOMA</span> </li>
    `;

};

function desconto() {
    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';
    let desconto = (v1 * v2)/100;
    let total = v1 - desconto;

};

function juros() {
    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';
    let total = (valor01 * valor02);

    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');

};

function comissao() {
    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';
    let total = (valor01 * valor02);

    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');



}; 

function lucro() {
    let v1 = parseFloat(document.getElementById('valor01').value);
    let v2 = parseFloat(document.getElementById('valor02').value);
    // exibir a div resultado 
    document.getElementById('resultado').style.display = 'flex';
    let total = (valor01 * valor02);

    // capturando o container onde o resultado sera exibido 
    const resultado = document.getElementById('resultado');



};

function limpar() {



}