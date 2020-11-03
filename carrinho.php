<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
    localStorage.setItem("leite","5");
    localStorage.setItem("file de frango","10");
    localStorage.setItem("cerveja jeje","19");

    function AddCarrinho(produto, qtd, valor, posicao)
 { 
 localStorage.setItem("produto" + posicao, produto);
 localStorage.setItem("qtd" + posicao, qtd);
 valor = valor * qtd;
 localStorage.setItem("valor" + posicao, valor);
 alert("Produto adicionado ao carrinho!");
 }
    </script>
</head>
<body>
<button type="button" id="adicionar1" id="produto1" onclick="AddCarrinho('leite', document.getElementById('qtd1').value, '5', 1)"> Comprar </button>
    
<meta charset="UTF-8">
<div id="itens"> </div>
<div>Total: <span id="total"></span> </div>

<script>
 var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
 var i = 0;     // variável que irá percorrer as posições
 var valor = 0; // variável que irá receber o preço do produto convertido em Float.
 
 for(i=1; i<=99; i++) // verifica até 99 produtos registrados na localStorage
 {
	 var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
	 if(prod != null) 
	 {	
		 // exibe os dados da lista dentro da div itens
		 document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
		 document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
		 document.getElementById("itens").innerHTML += " ";
         document.getElementById("itens").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";
     }
    }
        
         </script>
</body>
</html>