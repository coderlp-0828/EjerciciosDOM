

/**
 * 
 *          ---------------MANEJO DE CLASES  EN EL DOM -----------------------
 * 
 *  metodoos para modificar las clases (con CSS)
 *  
 *  MINUTO 1:44:29
 * 
 * 
 * Se realizan algunas modificaciones en  los estilos del modal modal 
 * (lo que hacemos es ocultar el modal invirtiendo algunos valores  en la class show u en la class modal)
 *   lo  que hay que hacer es agregarle al modal la clase show 
 *   y cuando queramos cerrar el modal debemos quitarle la clase show, sin quitar la clase actual. 
 * 
 *  Si recordamos tenemos  la propiedad classname  que me retorna un string con las clases del elemento
 * o Tambien me permite sobrescribir las clases del elemento, pero ... sobrescribe todas. 
 * 
 * Si yo quiero que permanesca la clase modal (linea 14) 
 * 
 * 
 */

const button = document.querySelector('.button'); 
const modal = document.querySelector('.modal'); 
const closeModal = document.querySelector('.modal__close'); // es para cerrar el modal

console.log(modal.classList);

/**
 *  classlist =>    Esta propiedad devuelve un array de tipo DOMTokenlist (es de solo lectura)
 *                  lo que devuelve son los valores separados de cada clase  que tiene el elemento 
 *                  donde se llama la propiedad. 
 *                  En conclusion : retorna una lista con cada elemento del nodo actual 
 *                  Esta propiedad tiene metodos para manipular  las clases
 *              
 *                  Se ponen 3 ejemplos de  clases para visualizar lo explicado:   
 *              
 *                  La propiedad classlist tiene metodos para manipular las clases 
 * 
 *  .item (0) =>    Retorna un elemento de la lista con base a su posicion.
 * 
 *  add() =>        Permite agregar clases a la lista de clases de un nodo, 
 *                  sin alterar las clases que estan actualmente (podemos 
 *                  agregar mas de una clase  con esta con este metodo ).
 *   
 *  
 *  
 *  Ejemplo: 
 * 
 */

console.log(modal.classList.item(2));

/**
 * 
 *  Es lo mismot que poner  corchetes cuadrados
 *  pegado a classlist[2]
 * 
 */
console.log(modal.classList[2]);

/**
 *  Ahora vamos a aplicar un metodo relacionado 
 *  con lo visto anteriormente.
 * 
 * 
 *  Ejemplo: 
 * 
 *  Abre modal a travez de 
 *   
 */

// button.addEventListener('click', function(){
//     console.log(modal.classList);
//     modal.classList.add('show');
//     console.log(modal.classList);
// })

/**
 *  METODO ADD()
 * 
 *  Ahora utilizamos el metodo "add()" este metodo nos permite 
 *  Agregar una clase a la lista de clases del modal( o de un nodo), sin modificar a las 
 *  clases anteriores. 
 * 
 *  Ejemplo: 
 *  Vamos a pasar  la clase show  a modal 
 * 
 *  Imprimimos en consola antes y despues de agregar la clase para ver como se comporta al agregar estos elementos. 
 * 
 *  Podemos agregas mas de una clase poniendo una coma despues de nuestra primera clave 
 * 
 *  Modal.classList.add('show', 'otra__clase');
 * 
 */

/**
 * METODO REMOVE() 
 * 
 *  Ahora, si yo quiero cerrar el  modal. Vamos a crear un elemento  al icono de cerrar.  
 *  Quiero que la funcion manejadora se encarge de cerrar el modal para eso   el metodo  
 *  remove('clase_a_remover')  
 * 
 *  En este caso  removemos la  clase show  ( y  podemos 
 *  remover mas de una clase al iguale que con add agregar mas de una clase )
 *  
 *  Ejemplo: 
 * 
 *  CIERRA el modal
 * 
 */


// closeModal.addEventListener('click', function(){
//     modal.classList.remove('show');
// });


/**
 *  EJERCICIO CAMBIO DE COLOR EN EL BOTON  (alternancia). 
 *   
 * 
 */


button.addEventListener('click', function(){
    
    
    /**
     *  Primera forma de alternancia 
     * 
    */
    
    // if(button.matches('.red')){  // matches => pregunta si  el boton contiene un selector  con la clase red

    //     button.classList.remove('red'); 
    // }else{
    //     button.classList.add('red'); 
    // }


    /***
     *  segunda  forma de alternancia 
     *  con el metodo toggle('red'); =>    nos permite alternar con el 
     *                                     metodo "add()  o remove()"
     *  
     *  ejemplo: 
     */
    
    console.log("uso de toggle"); 
    button.classList.toggle('red'); 
}); 


/**
 *  classlist tambien cuenta con un metodo para encontrar una clase en especifico.
 *  este metodo es llamado  "contains()" => retorna true  si lo encuentra
 *                                          retorna false si no lo encuentra 
 *      
 *  ejemplo:  
 *  
 * 
 */

console.log("imprimiendo modal => lista de clases");
console.log(modal.classList); 


console.log("usando contains para saber si existe un elemento dentro de la lista");

// preguntando si existe la clase uno
console.log(modal.classList.contains('uno'));

//preguntando si existe dentro de la lista la clase modal

console.log(modal.classList.contains('modal'));


/**
 *  Reamplazar una clase por  una nueva 
 * 
 *  "replace("Primer_parametro_es_el_que_se_reemplaza","Segundo_parametro_es_la_nueva_clase");"
 * 
 *  Haciendo el ejemplo para reemplazar a la clase uno en modal. Ejemplo: 
 * 
 */

modal.classList.replace('clase1', 'nueva_clase_mejorada'); 


/**
 *  NOTA:   SI LA CLASE QUE QUEREMOs REEMPLAZAR  NO EXISTE
 *          ENTONCES NO SE AGREGA NADA.  
 *  
 * 
 *   Estos son algunos metodos( los mas principales para manipular las clases - selectores )   
 */