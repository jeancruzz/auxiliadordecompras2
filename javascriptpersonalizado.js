$(function(){
  
  //ean_8_reader
Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#camera'),   // Or '#yourElement' (optional)
      locate : false
    },
    decoder : {
      readers : ["ean_8_reader" ]
    },
    locator :{
        halfSample: true
    },
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });
 
    Quagga.onDetected(function(data){
         if((data === "9788577220090")){
            alert(dados);
        }
        
      console.log(data);
    
      document.getElementById("pesquisa").innerHTML = data.codeResult.code;
    var code =  document.getElementById("resul").innerHTML = data.codeResult.code;

    });

    var valorProduto = document.getElementsByClassName("valorProduto");
    var resultado = document.getElementById("result1");
        //code_39_reader
    Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      locate : false,
      target: document.querySelector('#camera')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_39_reader" ]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });
 
    Quagga.onDetected(function(data){
         if((data === "9788577220090")){
            alert(dados);
        }
        
      var resultado1 = data;
      console.log(data);
      document.getElementById("pesquisa").innerHTML = data.codeResult.code;
      var code = document.getElementById("resul").innerHTML = data.codeResult.code;
    });

    

    Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      locate : false,
      target: document.querySelector('#camera')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["ean_reader" ]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });
 
    Quagga.onDetected(function(data){
        
        if((data === "9788577220090")){
            alert(dados);
        }
        
      console.log(data);
        var resultado1 = data;
      document.getElementById("pesquisa").innerHTML = data.codeResult.code;
    var code =  document.getElementById("resul").innerHTML = data.codeResult.code;
    
    });
    
    console.log(code);

});

 var dados = ["Livro: O reporte de outro mundo", "Zibia Gasparetto", "Lançamento: 2015"];

