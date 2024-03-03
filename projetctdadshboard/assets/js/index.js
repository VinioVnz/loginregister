var botaoSignIn = document.querySelector(".sign-in");
var container2 = document.getElementById("container2");

function mostrarContainer2() {
    container2.style.display = "flex";
}

botaoSignIn.addEventListener("click", function() {
    mostrarContainer2();
    // Redireciona para a página inicial
    window.location.href = "/";
});

   // Obtém uma referência para o botão sign-in e para o container2
   var botaoSignIn = document.querySelector(".sign-in2");
   var container2 = document.getElementById("container2");

   // Define uma função para mostrar o container2
   function mostrarContainer2() {
       container2.style.display = "flex";
   }

   // Associa a função ao evento de clique do botão sign-in
   botaoSignIn.addEventListener("click", mostrarContainer2);

       // Obtém uma referência para o botão sign-in e para o container1
       var botaoSignIn = document.querySelector(".sign-in");
       var container1 = document.getElementById("container1");
   
       // Define uma função para ocultar o container1
       function ocultarContainer1() {
           container1.style.display = "none";
       }
   
       // Associa a função ao evento de clique do botão sign-in
       botaoSignIn.addEventListener("click", ocultarContainer1);

           // Obtém uma referência para o botão e para o container a ser mostrado
    var botaoMostrarContainer1 = document.querySelector(".sign-up2");
    var container1 = document.getElementById("container1");
    var container1before = document.getElementById("container1::before");
    

    // Define uma função para mostrar o container1
    function mostrarContainer1() {
        container1.style.display = "flex"; // ou "block", dependendo do valor inicial do display do container
        container1before.style.display = "flex";
    }

    // Associa a função ao evento de clique do botão
    botaoMostrarContainer1.addEventListener("click", mostrarContainer1);

        // Obtém uma referência para o botão e para o container a ser ocultado/mostrado
        var botao = document.querySelector(".sign-up2");
        var container = document.getElementById("container2");
    
        // Define uma função para alternar a exibição do container
        function toggleContainer() {
            if (container.style.display === "none") {
                container.style.display = "flex"; // ou "block", dependendo do valor inicial do display do container
            } else {
                container.style.display = "none";
            }
        }
    
        // Associa a função ao evento de clique do botão
        botao.addEventListener("click", toggleContainer);