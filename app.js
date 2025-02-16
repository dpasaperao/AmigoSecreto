// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

const AmigoSecreto = [];

function agregarAmigo() {
  let txtAmigo = document.getElementById("amigo").value;
  
  if(txtAmigo === null || txtAmigo === ''){
    alert("Por favor Ingrese un nombre Valido !");
    return;
  }
    AmigoSecreto.push(txtAmigo);
    actualizarLista();
    limpiarCaja();
    console.log(AmigoSecreto);
}

function limpiarCaja() {
  document.querySelector('#amigo').value = '';
  document.getElementById('amigo').focus();
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    AmigoSecreto.forEach( amigo => {
                            const li = document.createElement("li");
                            li.textContent = amigo;
                            listaAmigos.appendChild(li);
                                    }
                        )
}

function sortearAmigo() {
      if(AmigoSecreto.length === 0){
          alert("No hay Amigos para sortear, Primero ingresar Nombre");
          return;
      }
      const ElegirAmigo = Math.floor ( Math.random() * AmigoSecreto.length );
      const AmigoElegido = AmigoSecreto[ElegirAmigo];

      const mostrarAmigoelegido = document.getElementById("resultado");
      mostrarAmigoelegido.innerHTML = `<li>${AmigoElegido}</li>`;

          document.addEventListener('DOMContentLoaded', () => {
                                  document.getElementById("btnAdicionar").addEventListener("click",agregarAmigo);
                                  document.getElementById("btnSortear").addEventListener("click",sortearAmigo);                                                      
          });
}