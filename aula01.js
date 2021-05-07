var nome, estoque, pacote, inicio, passeios, mensagem;
nome="Erik Proença";
estoque=150;
pacote="35";
inicio=false;
passeios=new Array("Curitiba", "Rio de Janeiro");


console.log(nome);
console.log(typeof(nome));
console.log(estoque);
console.log(typeof(estoque));
console.log(estoque+parseInt("20"));
console.log(estoque+parseInt(pacote));
console.log(parseInt(100+2.5));
console.log("A variável início é do tipo: " + typeof(inicio))
console.log(typeof(passeios));
console.log(passeios[1]);
console.log(mensagem);
mensagem = "Ano passado eu fui para " + passeios[0] + " nas minhas férias!";
console.log(mensagem);

let box1=document.querySelector("#box1");
let salario=10000;
let aumento=1.1;
console.log(box1);
let funcionario="Carlos";
console.log(funcionario);
let novoSalario = salario*aumento;
box1.innerHTML="<p>" + funcionario + " receberá um salário de R$" + novoSalario + ",00 mensal</p>";
box1.innerHTML+="<p>" + funcionario + "seu salario era de R$" + salario + ",00 mensais";
//////////

//condicionais (tomadas de decisão)

let nivel;
let box2=document.querySelector("#box2");
console.log(box2);
nivel = 4;//1 = administrador, 2 = editor, 3 = usuário
if(nivel == 1){
    alert("Administrador");
} else if(nivel == 2) {
    alert("Editor");
} else if (nivel == 3) {
    alert("Usuário");
} else {
    box2.innerHTML="Você precisa se cadastrar no sistema";
}