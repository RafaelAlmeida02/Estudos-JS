function clicar() {

    var nome = window.prompt("Qual é o seu nome?")
    var quant = Number(window.prompt("Quantos computadores receberão manutenção?"))
    var valor = Number(window.prompt("Qual é o valor Qual é o valor de cada manutenção?"))

    var total = quant * valor 

    var res = document.getElementById('res')
    res.innerHTML = 
    
    `
    <h1>Olá ${nome}, somos a empresa IT Solutions.</h1>
    <p>Seu nome é ${nome}.</p>
    <p>A quantidade informada para a manutenção é${quant}.</p>
    <p>O valor de cada manutenção é R$${valor}</p>

    <p>E o valor total do serviço ficou por R$ ${total}.</p>
    `

}