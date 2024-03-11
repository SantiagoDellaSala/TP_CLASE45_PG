window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let estadoSecreto = 0;
    let inputTitulo = document.querySelector('#titulo');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    
    /* En ​moviesAdd.ejs​, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color. */
titulo.addEventListener("mouseover", () => {
  titulo.style.color = "red"; 
});

/* En ​moviesAdd.ejs​ vamos con un desafío bastante más complejo. Tenemos que crear una
máquina de estados. Nuestro objetivo será detectar cuando el usuario tipee de corrido la
palabra “​secreto​”, en el input para ingresar el título de la película. El problema es que
solamente podemos definir un evento cuando el usuario presiona una tecla y no cuando
escribe toda una palabra. Por eso es que para empezar el ejercicio vamos a definir una
variable ​estadoSecreto ​que empiece con el número ​0​. */
inputTitulo.addEventListener("keydown", (event) => {
  let tecla = event.key.toLowerCase();

  switch (estadoSecreto) {
    case 0:
      if (tecla === 's') estadoSecreto = 1;
      break;
    case 1:
      if (tecla === 'e') estadoSecreto = 2;
      else estadoSecreto = 0;
      break;
    case 2:
      if (tecla === 'c') estadoSecreto = 3;
      else estadoSecreto = 0;
      break;
    case 3:
      if (tecla === 'r') estadoSecreto = 4;
      else estadoSecreto = 0;
      break;
    case 4:
      if (tecla === 'e') estadoSecreto = 5;
      else estadoSecreto = 0;
      break;
    case 5:
      if (tecla === 't') estadoSecreto = 6;
      else estadoSecreto = 0;
      break;
    case 6:
      if (tecla === 'o') {
        estadoSecreto = 0;
        alert('SECRETO MAGICO');
      } else {
        estadoSecreto = 0;
      }
      break;
    default:
      estadoSecreto = 0;
      break;
  }
});
};