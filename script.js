async function buscar(){
const ticker=document.getElementById('ticker').value.trim();
if(!ticker){
alert('Informe o ticker');
return;
}

const url=`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`;

try{
const r=await fetch(url);
const j=await r.json();
const preco=j.chart.result[0].meta.regularMarketPrice;
document.getElementById('resultado').innerHTML=
`Preço atual de <b>${ticker}</b>: R$ ${preco}`;
}catch(e){
document.getElementById('resultado').innerHTML=
'Erro ao consultar o Yahoo Finance. Se estiver no GitHub Pages, isso provavelmente é bloqueio de CORS.';
console.error(e);
}
}
