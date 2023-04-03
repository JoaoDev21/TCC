var salario        = document.getElementById('salario');
var inss           = document.getElementById('inss');
var transporte     = document.getElementById('transporte');
var VaVr           = document.getElementById('VaVr');
var convmedico     = document.getElementById('convmedico');
var convodonto     = document.getElementById('convodonto');
var outros         = document.getElementById('outros');

function Calcular(){
    var SalarioValue           = salario.value        .trim();
    var inssValue              = inss.value           .trim();
    var transporteValue        = transporte.value     .trim();
    var VaVrValue              = VaVr.value           .trim();
    var convmedicoValue        = convmedico.value     .trim();
    var convodontoValue        = convodonto.value     .trim();
    var outrosValue            = outros.value         .trim();
    var TotalDescontosValue    = parseFloat(inssValue) + parseFloat(transporteValue) + parseFloat(VaVrValue) + parseFloat(convmedicoValue) + parseFloat(convodontoValue) + parseFloat(outrosValue);
    var TotalReceberValue      = SalarioValue - TotalDescontosValue;

    if(SalarioValue == ''){
        alert('O Valor do Salario Encontra-se Vazio!')
    }

    else if(inssValue === ''){
        
        
    }

    else{
        document.getElementById("TotalReceber").innerHTML = TotalReceberValue;
        document.getElementById("TotalDescontos").innerHTML = TotalDescontosValue;
    }
}
var Salliquido   = document.getElementById('Salliquido');
var Condominio   = document.getElementById('Condominio');
var Aluguel      = document.getElementById('Aluguel');
var Faculdade    = document.getElementById('Faculdade');
var Carro        = document.getElementById('Carro');
var Luz          = document.getElementById('Luz');
var Agua         = document.getElementById('Agua');
var Internet     = document.getElementById('Internet');
var Mercado      = document.getElementById('Mercado');
var Cartao       = document.getElementById('Cartao');
var Lazer        = document.getElementById('Lazer');
var Outros       = document.getElementById('Outros');

function Calcular_Despesas(){
    var SalliquidoValue   = Salliquido.value    .trim();
    var CondominioValue   = Condominio.value    .trim();
    var AluguelValue      = Aluguel.value       .trim();
    var FaculdadeValue    = Faculdade.value     .trim();
    var CarroValue        = Carro.value         .trim();
    var LuzValue          = Luz.value           .trim();
    var AguaValue         = Agua.value          .trim();
    var InternetValue     = Internet.value      .trim();
    var MercadoValue      = Mercado.value       .trim();
    var CartaoValue       = Cartao.value        .trim();
    var LazerValue        = Lazer.value         .trim();
    var OutrosValue       = Outros.value        .trim();
    var DespesasValue     = parseFloat(CondominioValue) + parseFloat(AluguelValue) + parseFloat(FaculdadeValue) + parseFloat(CarroValue) + parseFloat(LuzValue) + parseFloat(AguaValue) + parseFloat(InternetValue) + parseFloat(MercadoValue) + parseFloat(CartaoValue) + parseFloat(LazerValue) + parseFloat(OutrosValue);
    var InvestimentoValue = SalliquidoValue -DespesasValue//- CondominioValue - AluguelValue - FaculdadeValue - CarroValue - LuzValue - AguaValue - InternetValue - MercadoValue - CartaoValue - LazerValue - LazerValue;

    if(SalliquidoValue == ''){
        alert('O Valor do Salario Liquido Encontra-se Vazio!')        
    }
    else{
        document.getElementById("Investimento").innerHTML = InvestimentoValue;
        document.getElementById("Despesas").innerHTML = DespesasValue;
    }
}

function RedirectCad(){
    window.location = "CadastroUsuario.html";
}

