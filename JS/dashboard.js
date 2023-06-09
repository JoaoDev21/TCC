var salario        = document.getElementById('salario');
var INSS_Retido    = document.getElementById('INSS_Retido');
var VT_Retido      = document.getElementById('VT_Retido')
var transporte     = document.getElementById('transporte');
var VaVr           = document.getElementById('VaVr');
var convmedico     = document.getElementById('convmedico');
var convodonto     = document.getElementById('convodonto');
var outros         = document.getElementById('outros');

function CalcularINSS() {
    var SalarioValue = salario.value.trim();
    var aliquotas = [0.075, 0.09, 0.12, 0.14, 0.145, 0.165, 0.19, 0.22];
    var Resultado_INSS;
    var Resultado_VT = SalarioValue * 0.06;

    if (SalarioValue === '') {
        alert('Preencha o Campo Salario');
        return;
    }

    var i;
    for (i = 0; i < aliquotas.length; i++) {
        var minSalary = [0, 1303, 2571.30, 3856.95, 7507.50, 12856.51, 25713.00, 50140.34][i];
        var maxSalary = [1302, 2571.29, 3856.94, 7507.49, 12856.50, 25712.99, 50140.33, Infinity][i];
        if (SalarioValue >= minSalary && SalarioValue <= maxSalary) {
            Resultado_INSS = SalarioValue * aliquotas[i];
            break;  
        }
    }
    var formattedValue1 = Resultado_VT.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    VT_Retido.textContent = formattedValue1;
    console.log('Valor de Resultado_VT:', Resultado_VT);

    var formattedValue = Resultado_INSS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    INSS_Retido.textContent = formattedValue;
    console.log('Valor de INSS_Retido:', Resultado_INSS);
}

function Calcular() {
    var SalarioValue    = parseFloat(salario.value.trim().replace(',', '.'));
    var inssValue       = parseFloat(INSS_Retido.innerText.trim().replace(/[^\d.,]/g, '').replace(',', '.'));
    var transporteValue = parseFloat(transporte.value.trim().replace(',', '.'));
    var VaVrValue       = parseFloat(VaVr.value.trim().replace(',', '.'));
    var convmedicoValue = parseFloat(convmedico.value.trim().replace(',', '.'));
    var convodontoValue = parseFloat(convodonto.value.trim().replace(',', '.'));
    var outrosValue     = parseFloat(outros.value.trim().replace(',', '.'));

    console.log('SalarioValue:', SalarioValue);
    console.log('inssValue:', inssValue);
    console.log('transporteValue:', transporteValue);
    console.log('VaVrValue:', VaVrValue);
    console.log('convmedicoValue:', convmedicoValue);
    console.log('convodontoValue:', convodontoValue);
    console.log('outrosValue:', outrosValue);

    var TotalDescontosValue = inssValue + transporteValue + VaVrValue + convmedicoValue + convodontoValue + outrosValue;
    var TotalReceberValue = SalarioValue - TotalDescontosValue;

    var formattedValue1 = TotalReceberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var formattedValue2 = TotalDescontosValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (isNaN(SalarioValue) || SalarioValue === '') {
        alert('O Valor do Salario Encontra-se Vazio ou Inválido!');
    } 
    else if(isNaN(inssValue) || inssValue === ''){
        alert('Deve calcular o valor de INSS antes!');
    }
    else {
        document.getElementById("TotalReceber").textContent = formattedValue1;
        document.getElementById("TotalDescontos").textContent = formattedValue2;
    }
}

// Função para gerar o arquivo XLS
function GerarXLS() {
    // Dados do formulário (classe form1)
    var dadosFormulario = {
      salario: document.getElementById('salario').value,
      mes: document.getElementById('Month').value,
      inss: document.getElementById('INSS_Retido').innerText,
      transporte: document.getElementById('transporte').value,
      vaVr: document.getElementById('VaVr').value,
      convMedico: document.getElementById('convmedico').value,
      convOdonto: document.getElementById('convodonto').value,
      outros: document.getElementById('outros').value,
      totalDescontos: document.getElementById('TotalDescontos').innerText,
      totalReceber: document.getElementById('TotalReceber').innerText
    };

    // Estilos CSS para a planilha
    var estiloCelulaCabecalho = 'background-color: #efefef; font-weight: bold;';
    var estiloCelulaNormal = 'background-color: #ffffff;';

    // Converter os dados do formulário para o formato XLS
    var conteudoXLS = '<table>';
    conteudoXLS += '<tr>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Salário</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Mês</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">INSS</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Transporte</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">VA/VR</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Convênio Médico</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Convênio Odonto</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Outros</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Total Descontos</td>';
    conteudoXLS += '<td style="' + estiloCelulaCabecalho + '">Total a Receber</td>';
    conteudoXLS += '</tr>';

    conteudoXLS += '<tr>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.salario + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.mes + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.inss + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.transporte + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.vaVr + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.convMedico + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.convOdonto + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.outros + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.totalDescontos + '</td>';
    conteudoXLS += '<td style="' + estiloCelulaNormal + '">' + dadosFormulario.totalReceber + '</td>';
    conteudoXLS += '</tr>';

    conteudoXLS += '</table>';

    // Criar um elemento de link temporário para download
    var linkDownload = document.createElement('a');
    linkDownload.href = 'data:application/vnd.ms-excel,' + encodeURIComponent(conteudoXLS);
    linkDownload.download = 'formulario.xls';

    // Adicionar o link ao documento e simular o clique
    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
}













/*
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
*/

