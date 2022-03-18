var botaoBusca = document.querySelector("#buscar-paciente");

botaoBusca.addEventListener("click", function() {
    console.log("Buscando pacientes . . .")

    var xhr = new XMLHttpRequest();
    var erro = document.querySelector("#erro-ajax");
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            })
        } else {
            erro.classList.remove("invisivel");
        }


    });

    xhr.send();
})