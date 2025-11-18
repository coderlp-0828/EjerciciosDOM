/**
 *  Variables ...
 *  
 */

const wrapper = document.querySelector('[data-id = "wrapper"]'); 
const input = document.querySelector('[type="text"]');
const changeUser = document.querySelector('[data-id="name"]'); 


const section = document.querySelector('.section'); 
const buttonShow = document.querySelector('[data-id="button-show"]'); 
const buttonHide =document. querySelector('[data-id="button-hide"]'); 


function showSection(event){
    console.log(event);
    console.log("type => ",event.type); 
    console.log("target => ", event.target); 
    wrapper.className ="show"; 
} 

function hideSection(e){
    e.preventDefault(); //aqui quitamos  el comportamiento  por defecto del elemento "a"
    wrapper.className= "hide"; 
}


/**
 * 
 *      Necesito detectar un evento del boton, tanto de show como de hide.  
 *      En este caso seria un evento de tipo click (es decir, cada que el usuario de un click en el boton). 
 *      Una vez que de click en el boton, vamos a ejecutar una accion, para eso estan los eventos, para a detectar un evento y ejecutar una accion. 
 *      
 *      Un evento en JS es una accion o señal que sucede en el navegador. Por ejemplo, cuando alguien da click en un boton de una pagina web,
 *      cuando recargamos una pagina web, que el usario oprima una tecla en especifico, que un formulario se envie  a una direccion http
 *      estos  son ejemplos de eventos.
 * 
 *      Se deja de tarea revisar la documentacion de mozilla  como referencia:
 *      https://developer.mozilla.org/es/docs/Web/Events
 * 
 *      https://www.youtube.com/shorts/olMekpI6eC0
 * 
 */


/**
 * 
 *  para entender como funcionan los eventos  tenemos que tener en  cuenta 2 conceptos 
 * 
 *  - los listener's ó detectores de eventos  que estos van a detectar cuando se ejecuta o sucede un evento. => detectan el evento
 *  - los manejadores de eventos, son funciones con acciones en especifico que se ejecutan cuando sucede un evento. => crean una accion cada que suceda este evento
 * 
 */

/**
 * 
 * - Evento "change"  =>  se ejecuta cada que yo hago foco en un elemento (doy click en el input  y luego doy click  fuera del input y se motrar en el titulo )
 * - addEevntListener =>  escucha al evento change (con este metodo detectamos cuando sucede un evento)
 * - function (){}    =>  la funcion es el manejador( handler )  que va a determinar lo que pasara cuando suceda el evento (aqui codificamos la logica).  
 * 
 */

// codigo: 

// input.addEventListener('change', function(e){
//     changeUser.textContent = e.target.value;
// });


/**
 * 
 *  para que el evento  suceda  tenemos que dar foco al input, escribir nuestro nombre o algun texto 
 *  y despues dejar de poner foco sobre el input (con e cursor dar click en el fondo blanco)
 * 
 */


/**
 *  Aqui pasamos al HTML para ver la manera mas sencilla de detectar un evento,  s
 *  Se propone  detetectar un evento de tipo click en un boton, para eso se puede poner un atributo a los elementos HTML
 *         
 *  Para poder agregar un detector eventos como atributo se pone el prefijo "on" y despues el evento que quiero detectar ( EN ESTE CASO  el click)
 *  Ejemplo: onclick: "" 
 *  Dentro de las comillas poner => alert('Diste Click a este boton ')
 * 
 *               Ejemplo 1, atributo => onclick="alert('Diste Click a este boton')".
 *  
 *  De la misma forma podemos llamar una funcion y solicitar el nombre: 
 * 
 *              Ejemplo 2, atributo => onclick="controladorEvento()".
 */

//codigo: 

function controladorEvento(){
    const nombre = prompt('¿Cual es tu nombre?');
    alert(`Hola ${nombre}`); 
}


/**
 *  
 *  Sobre el ejemplo anterior:
 *  
 *  Es muy poco legible encrustar codigo JS del lado del HTML
 *  Tambien es considerado como mala practica.
 *  
 *  Es mejor escuchar a los eventos desde JS, 
 *  esto se hace de la siguiente forma:
 *   
 */

/**
 *  Ejemplo - para detectar eventos desde el lado de JS  
 *  
 *  Realiza lo mismo que en el ejemplo anterior PER CON REFERENCIA 
 *  a traves de buttonShow 
 */ 

// codigo: 

// buttonShow.onclick = controladorEvento; 



/**
 *  NOTA: 
 *  Si a esta sintaxis  yo le agrego el parentesis al final, 
 *  la funcion se llama automaticamente, es decir, aparece 
 *  en pantalla sin que pase el evento. 
 * 
 *  buttonShow.onclick = controladorEvento(); 
 *  
 *  HAY QUE REFERENCIAR SIN LLAMAR CON PARENTESIS 
 * 
 */


/**
 * 
 *  Ejemplo para desactivar el dectector de Eventos  
 *  PARA DESACTIVAR LA FUNCION RELACIONADA AL EVENTO 
 * 
 */


// Codigo:

// buttonShow.onclick = null; 

/**
 *  Una caracteristica de agregar eventos de esta manera es que yo no puedo agregarle otro controlador de eventos
 *  para el mismo evento, se va a mostrar el ultimo controlador de evento porque sobrescribe al anterior 
 * 
 *  Tambien de esta manera no detecta todos los eventos. 
 *  Por ejemplo  => DOMContentLoad => Este evento  se sejecuta  cuando se ha cargado tod el DOM  de la pagina,
 *  es decir, cuando se cargue toda la estuctura del HTML va a ejecutar este evento.
 * 
 *  Como  conclusion  no es una buena idea usar los eventos de esta forma. 
 */

/**
 * 
 *  la mejor forma de  inegrar un evento  es usando 
 *  addEventListener(''); 
 * 
 */

// buttonShow.addEventListener('click',controladorEvento); 
// buttonShow.addEventListener('click', ()=>{
//    alert('soy otro manejador');
// });  //=> soporta mas de una funcion manejadora

/**
 * 
 *  - Este evento soporta todos los evetos que hay en el DOM 
 *  - tambien puedo agregar  mas de una funcion manejadora  por evento  
 *  - Los ejecuta de arriba hacia abajo. 
 * 
 */


// buttonShow.addEventListener('click',showSection); 
// buttonHide.addEventListener('click',hideSection);

/**
 * 
 *  Recordar que al usar classname sobreescribimos todas 
 *  las clases del elemento referenciado, entonces  cuando damos 
 *  click a los botones sobreescribimos las propiedades de "class"  
 * 
 */

/**
 * 
 *  Ahora vamos a agregar a la funcion showSection un console.log
 *  para ver el objeto event que se pasa como argumento de forma automatica 
 *  en nuestra funcion (showSection(event)). 
 * 
 *  Este argumento "event" la podemos simplificar con una letra "e".
 * 
 *  Algunas de las propieddades del objeto event  que son de relevancia 
 *  para nosotros es:
 * 
 *  target => nos indica el elemento al cual  le dimos click. Ej: target:button 
 *  type => nos idnica el tipo de  evento. Ej: type:"click"
 *  
 *  Los vamos a imprimir por consola para comprobar  su valor  en cada propiedad 
 *  (Esto esta agregado  a parti de la linea 16  de este codgo   dentro de la funcion showSection )
 */

/**
 * 
 *  Con lo aprendido , podemos hacer lo mismo  que con las funciones anteriores 
 *  Ejemplo:
 * 
 */


// input.addEventListener('change', function(e){
//     console.log("evento en input: ");     
//     console.log(e.target); 
//     console.dir(e.target);
//     console.log("Accediendo al valor  que tiene target ")
//     console.log(e.target.value);
// } ); 


/**
 *  Haciendo  un cambio de color en Wrapper 
 *  aqui vemos que cosas podemos  hacer con event
 * 
 *  cambiamos los estilos de los elementos. 
 * 
 */

// wrapper.addEventListener('click', function(e){

    // console.dir(e.target);  // aqui vemos  a que elemento  le doy click
    // damos click (puede ser el h1  o el input , todos los elementos que este
    // dentro de wrapper  )
    // e.target.style.backgroundColor = "hotpink"; 
// })

/**
 * 
 *  Ahora cambiamos los botones por elementos anchor.  
 *  o "a" y le agregamos una url ( que direcciona a google )
 *  
 *  AL dar click: observamos los comportamientos de los 
 *  botones y vemos que realiza la funcion de mostrar 
 *  u ocultar el titulo seguido del direccionamiento.     
 * 
 *  Lo que se pretende mostrar en este ejemplo es 
 *  como quitar el comportamiento de un elemento, 
 *  en este caso el de anchor o "a" . 
 * 
 *  event.preventDefault(); // esto le quita su  comportamiento por defecto. 
 * 
 *  ESTA LINEA DE CODIGO LA AGEGAMOS EN LA FUNCION hideSection
 */


/**
 * 
 *  Otro ejemplo : 
 *  Tenemos  en el formulario un input de tipo submit (el boton )
 *  que al momento de  dar click  nos envia  la informacion al archivo
 *  "/verificacion.php"
 * 
 *  para restringir el funcionamietno del form para enviar un action 
 *  debo de ir a el padre el input  
 * 
 */


//   const form = input.parentElement; 

//   console.log(form); 
/**
 *  ahora vamos a añadirle  un evento 
 * 
 * 
 */

// form.addEventListener('submit', function(e){
//     e.preventDefault(); 
//     console.log ('Hola '); 
// }); 

/**
 *  si utilizamos la forma de creacion de eventos 
 *  con el prefijo "on" , para prevenir los comportamientos 
 *   por defectos ( como lo anterior visto)
 *  tenemos que agregar a l final un return 
 *  
 *      return false;   
 * 
 */


// form.onsubmit =function(){

//     console.log('Enviado'); 
//     return false; 
// } 

/**
 *  Tambien  podemos utilizar la plalabra "this" 
 * 
 *  "this"  hara referencia al elemento donde  se disparó el evento 
 *      
 *      imprimir en consola 
 * 
 *              console.log(this); 
 *              
 *      para ver a que hace referencia 
 * 
 */


/**
 * 
 *  con arrow function ( ()=>{} )   
 *  cambia la referecia al elemtento (no recomendable al usar "this" )
 *  ya que hace referencia Objeto global window 
 *  es decir, que tomara el contexto  de la funcion contenedora 
 *  de la arrow function(Objeto global window)
 * 
 *  Esto solo  lo podemos hacer con la declaracion tradicional 
 *   
 *                      function(){}
 * 
 */


/**
 * 
 *  Tambien  podemos  poner  una funcion anonima en lugar de hacer 
 *  La referencia  al manejador como una funcion (lo que estabamos haciendo)
 *      
 *      Con manejador o referencia: 
 * 
 *      buttonShow.addEventListener('click',showSection); 
 * 
 *      Como funcion anonima: 
 *      
 *      buttonHide.addEventListener('click', function(event){
 *          event.preventDefault(); 
 *  
 *      });
 * 
 */


/**
 *  Cuando queremos remover el evento de buttonShow 
 *   lo podemos  hacer  de la siguiente forma:  
 *  ( solo que PARA QUE FUNCIONE tenemos que 
 *  cambiar los enlaces por botones )
 * 
 *  removeEventListener() =>    este es un evento que me permite remover una funcion manejadora
 *                              sus paramtros son los mismos('el evento ', elManejador(){}).  
 */

    // buttonShow.removeEventListener('click', showSection); 
    // buttonHide.removeEventListener('click', hideSection); 


/**
 * 
 *   Recomendaciones: 
 * 
 *      Es mejor usar funciones independientes para  los manejadores
 *      que usar funciones anonimas, al menos para removeEventListener.   
 *      Asi evitamos que sucedan cosas raras
 * 
 *      la explicacion, es que con las funciones anonimas  no tenemos referencia
 *      a la funcion addEventListener
 *      En este caso no se puede remover el evento donde  no 
 *      tengamos acceso a la funcion . 
 *      
 *      Es por eso la ventaja de que la funcion se una funcion independiente.  
 *      Ya que de esta manera nos permite remover la funcion manejadora 
 * 
 */


/**
 *  -------PROPAAGACION DE EVENTOS (event booblig) ----
 *  
 *  Es una carateristica de los eventos en JS, por ejemplo:  
 *  
 *   Ya sebemos que si damos click en un boton, se va a descencadenar un
 *   EVENTO DE TIPO CLICK 
 *   Pero no solamente en el boton, sino TAMBIEN en el contenedor del boton  
 *   y ASI  de manera sucesiva en todos los contendores.   
 *  
 *   "Propaga el evento en orden ascendente en el DOM "
 * 
 *   Lo anterior mencionado  es un comportamiento por defecto. 
 *   Ejemplo: 
 */


// function handleEvent(e){
    // console.log(`Has dado click  en ${e.currentTarget.nodeName}`); 
// }

// function handleEventStop(e){
    // e.stopPropagation(); 
    // e.stopImmediatePropagation(); 
    // console.log(`Has dado  click  en ${e.currentTarget.nodeName}`);
// }


// document.body.addEventListener('click', handleEvent); 

/**
 * 
 *  Con el ejemplo anterior podemos ver   la diferencia entre 
 *  target           =>  si yo doy click solo se propaga hasta  el elemento donde yo doy click ( EN ESTE CASO DI CLICK EN H1 y sale h1). 
 *  currentTarget    =>  desencadena una propagacion de eventos que se ira de manera ascenddente  hasta llegar al HTML. 
 * 
 */

/**
 * 
 * Ahora vamos  a hacer  mas ejemplos 
 * vamos a ver con section
 * 
 * 
 */

// section.addEventListener( "click", handleEvent ); 


/**
 * 
 *  Vemos que nos retorna que: 
 *  Hemos dado click  en SECTION
 *  y  esto genera una propagacion de eventos 
 * (para que lo anterior sucediera le tenemos que dar click en
 *  en algun elemento interno de section)
 * 
 */

// buttonShow.addEventListener('click', handleEvent);
// section.addEventListener( "click", handleEvent ); 
// document.body.addEventListener('click', handleEvent ); 

/**
 * 
 *  Aqui creamos 3 eventos donde triplicamos 
 *  la funcion manejadora 
 *  Observamos que los 3 eventos se desencadenan 
 *  porque propaga el evento click desde boton 
 *  pasando por section y por ultimo body. 
 * 
 */

/**
 *  ¿que pasa si yo quiero detener   la propagacion de eventos ?
 *  Hay  un metodo llamado 
 *  stopPropagation =>  detiene la propagacion de eventos  tanto en la  
 *                      en la fase de boobling  como en la fase de cpatura.  
 *                      detiene la propagacion en el evento en el cual 
 *                      es delcarado el evento 
 * 
 *  Este metodo es parte del objeto event 
 * 
 *  Vamos a crear mas arriba una funcion llamada 
 *  
 *          "handleEventStop() "
 *  
 * 
 *  Vamos a cambiar el manejador en section  y vamos  a volver a ejecutar  
 *  los 3  eventos para  ver que  es lo que sucede: 
 * 
 */

// buttonShow.addEventListener('click', handleEvent);
// section.addEventListener( "click", handleEventStop); 
// document.body.addEventListener('click', handleEvent ); 



/**
 *  Vemos que al dar click en el boton "MOSTRAR SECCION"
 *  ya no se propaga hasta  body. 
 * 
 *  Si comentamaos stopPropagation dentro de nuestra funcion 
 *  vemos que al dar clcik dentro de nuestro cuadro morado de section
 *  Ya propaga hasta el body:  
 * 
 *  - section 
 *  - body  
 * 
 *   
 * 
 */


/**
 * 
 *  Ahora se modificara  stopPropagation() para ver la propiedad  
 *  
 *  stopInmediatePropagation() =>   este metodo detiene la fase de captura como la fase de boobling
 *                                  funciona exactamente igual que stopPropagation(); solo que con una caracteristica extra, 
 *                                  evita que se agreguen mas de un manejadores de eventos.   
 * 
 *  Para entender esto: 
 *  
 *   hay que agregar otro evento en section      
 *  handleEventStop(){} => cambiar  el stopPropagation() por stopImmediatePropagation()
 * 
 */


// buttonShow.addEventListener('click', handleEvent);
// section.addEventListener( "click", handleEventStop); 
// section.addEventListener("click", ()=>{
//     alert("Hola mundo");
// });

/**
 *  Evita la propagacion de eventos 
 *   y tambien  que un evento tenga mas de una  funcion manejadora. 
 * 
 */

/**
 *  ----- FASE DE CAPTURA ------
 * 
 *  Es lo contrario a Propagar el evento de forma ascendente,es decir, 
 *  del eventBoobling 
 * 
 *  La fase de captura  va a capturar los eventos desde el nodo principal del DOM
 *  hasta llegar al element donde se disparo el evento, es decir que va a ir de
 *  manera descendente . 
 * 
 *  ¿como se hace esto?
 *  
 *  El metodo addEeventListener  tiene  un tercer parametro opcional  que es un objeto,
 *  este objeto puede tener  la propiedad "capture". Esta  se pone en "true";   
 * 
 *  
 *  
 *  
 */


// buttonShow.addEventListener('click', handleEvent,{
//     capture:true
// });
// section.addEventListener( "click", handleEvent,{
//     capture:true
// }); 
// document.body.addEventListener('click', handleEvent,{
//     capture:true 
// } );


/**
 *  al dar clcik en el boton "Mostrar Seccion"
 * 
 *  vemos como se desecandenan los eventos pero ahora de forma descendente 
 *   - BODY 
 *   - SECTION
 *   - BUTTON
 * 
 * 
 * esto tambien se puede detener con stopPropagation   y stopImmediatePropagation
 */

/**
 * 1:35: 00
 *  ---------matches() y closets() ----------  
 * 
 */


const  elements = document.querySelectorAll("[data-id]"); 
// console.log(elements);

/**
 *  Nos arroja una lista de nodos (array []) , nos ayudara para 
 *  mostrar el metodo "matches()"
 *  este metodo  se utiliza en cualquier nodo de tipo elemento 
 *  y recibe un  selector CSS como parametro y va a analizar 
 *  si el selector CSS dado coincide con el nodo actual. 
 *  Si el  selector CSS coincide  retorna "true"
 *  Si no coincide retorna  false 
 *  
 */


/**
 *  Vamos a relizar un for para recorrer cada uno de los elementos 
 *  y utilizaremos el metodo matches para encontrar  "button-show"
 * 
 */

for(element of elements){
    const currentElement = element.matches('[data-id="button-show"]'); // puede ser cualquier selector de CSS
    console.log(buttonShow);

    if(currentElement){
        console.log(element);
        console.log(`El boton ${element.nodeName} contiene el valor button-show en su atributo`)
    }
}


/**
 *  USO DEL METODO CLOSEST 
 * 
 *  Este  metodo se utiliza en cualquier nodo de tipo elemento
 *  Tambien recibe un selector CSS como parametro.
 *  
 *  Y busca al ancestro mas cercano que coincida con ese selector   
 * 
 *  Para ver su funcionamiento vamos  a buscar al elemento input (declarado al principio del codigo)
 * 
 */

console.log("input => ", input ); 


/**
 * 
 *  Le vamos a pedir que retorne a su ancestro mas cercano de la clase wrapper.  
 *  Que viene siendo <main class= "wrapper"></main> que esta por encima del boton.
 * 
 */

console.log("uso del closest");
console.log( input.closest('.wrapper') );


/**
 * 
 * EVENT DELEGATION
 * 
 *  Nos permite aprovecharnos de la propagacion de eventos para determinar una manejador de eventos 
 *  a un contenedor de nodos que haga una accion determinada por cada nodo  que contiene, 
 * 
 *  En lugar de declarar un manejador de eventos por cada nodo, vamos a declarar un manejador de eventos 
 *  global, esto optimiza el rendimiento y ademas reduce la cantidad de manejadores que se implementa.
 * 
 *  esto quiere decri que en lugar de colocar un manejador por cada boton, vamos a poner  un manejador  
 *  a la seccion que contiene a las botones,  aprovechando el "eventBoobling" o la "Propagacion de eventos"
 * 
 *  En el ejemplo veremos que en cada boton  queremos cambiar el fondo de la seccion, en este ejemplo  son tres 
 *  botones, peero... pueden ser muchos mas. 
 *  Esta es  una de las ventajas de l event delegation ya que nos ahorra  mucho tiempo y es muy practico
 * 
 *  Ejemplo:     
 * 
 */

function eventDelegation(e){
    console.log(e.target);

    if(e.target.matches('.button-color')){
        const getColor = e.target.getAttribute('data-color'); 
        e.currentTarget.style.backgroundColor = getColor; 
    }
}

section.addEventListener('click', eventDelegation)




