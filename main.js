//* Hacemos que los labels bajen y se vean dentro de los inputs, solo si los inputs estan vacios.


//* Guardamos en textInput todos los elementos con la clase form_input
const textInput = document.getElementsByClassName('form_input')

//* Iniciamos un bucle for para recorrer cada elemento de los que se han guardado en textInput. La variable -i- se utiliza como índice del bucle y la inicializamos en 0, aumentando en cada iteracion hasta el total de los elelmentos que hay en textInput.
for (let i = 0; i < textInput.length; i++){
  textInput[i].addEventListener('keyup', () => {
    //* Con EventListener, escuchamos si keyup(evento que se dispara cuando soltamos una tecla despues de pulsarla dentro de un input) es igual o mayor a un valor.
    if (textInput[i].value.length >= 1) {
      textInput[i].nextElementSibling.classList.add('fixed');
      //* Si hay valor, nextElementSibiling añade la clase fixed al siguiente elemento que es el label.
    } else {
      textInput[i].nextElementSibling.classList.remove('fixed');
      //* Si no hay nada escrito remove 'fixed' y baja el elemento label.
      }
  });
}