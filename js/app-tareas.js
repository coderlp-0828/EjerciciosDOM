

/* Haciendo referencia a los siguientes elementos: */

const button = document.querySelector('.button'); 
const form = document. querySelector('.form'); 
const input = form.querySelector('.input'); 
const listContainer = document. querySelector('.list-container'); /* Hace referencia a la lista desordenada (<ul></ul>) ó contenedor de mis tareas*/

/**
 * 
 *  El HTML esta compuesto de: 
 *  Un div con la clase "wrapper" => Wrapper - siginifica en español envoltura. 
 *  
 */


form.addEventListener('submit', handleSubmit); 

function handleSubmit(e){
    e.preventDefault();
    const inputValue = input.value;
    console.log(inputValue); 
    createTask(inputValue);
    this.reset(); /** Limpia mi imput  */
}

function createTask(value){
    const newTask = document.createElement("li");/** creo el elemento html "li" y la guardo en  una constante */
    newTask.textContent = value;/**  A la constante newTask, puedo usarle el metodo textContent */
    listContainer.appendChild(newTask); //=> listContainer es nuestra referencia a la lista desorfrnada(<ul>) y con 
                                        // apenChild agrego un elemetno dentro de <ul></ul> como ultimo hijo <li></li> 
    console.log(newTask); /** Aqui imprimo en consola */
}


/*

Aqui lo que se hace es agregar un evento de tipo "submit", para que cuando el usuario escriba una tarea con un minimo de tres caracteres => ' minlength="3" '
estos creara  un evento de tipo submit y hara que se recargue la pagina  por que se 

Hara que se recargue la pagina 
Una vez demos click en el boton se 
Crea una tarea (porque cuando dimos click  se envia la información).  

Ahora vamos a trabajar con la funcion manejadora y sera llamada "HandleSubmit".

Creamos una fucncion => handleSubmit que tenga el objeto event(e){} 
Aqui lo que se pretende es prevenir el comportamiento por defecto "e.preventdefault()"
con lo antenrior ya no se recarga la pagina.  

Despues se declara una constante que es => inputValue = input.value; 
Con la constante anterior se obtiene  el valor del input   

Con console.log(inputValue); nos va a permitir ver en consola lo que escibimos en el  

Ahora ¿Como se agrega un elemento <li></li> dentro de <ul></ul> o lista contenedora (desordenada)?
Recordar que ademas  de obtener elementos del DOM o cambiar clases o estilos, 
tambien podemos agregar elementos que se pueden agregar al DOM, 
en este caso agregaremos una lista de tareas y para eso se agrega la funcion:  

function createTask (){  //=> aqui vamos a  crear la tarea 
    const newTask = document.createElement(tagElement);   // => nos vamos al nodo principal ( Que es document ) con createElement creamos una nueva etiqueta o elemento (O NODO).   
                                                tipo HTML, para despues poder insertarlo en el DOM 
                                                
                                                El parametro de la etiqueta tagElelement es el nombre de la etiqueta que yo quiero crear.
                                                Ejemplos: "li"  "a"  "section" o cualquier etiqueta HTML ( EN ESTE CASO USAREMOS LA eqitueta "li")

                                                Y se va a guardar este nodo o elemento en una constante que se llame newTask, para hacer referencia al elemento li.     
                                                que cree con JS . 

console.log(newTask);  
                                                DESPUES VAMOS A MANDARLO POR CONSOLA O A IMPRIMIRLO.  
                                                
                                                y Por ultimo vamos a referenciar esta fucnion (createTask) Dentro de la funcion handleSubmit.  

                                                Despues vamos a agregar el texto del nodo a traves de un parametro que le vamos a poner a nuestra funcion "createTask()"
                                                que va a ser la constante "inputValue";

                                                Una ves mandado  vamos a usar  nuestra  constante newTask dentro de nuesta funcion "createTask" y vamos usar 
                                                Su metodo texContent para asignar dentro del "li"  lo que se escribio  en el input 

                                                Si imprimimos en consola newTask veremos que ya se agrego el texto dentro de "li"
                                                En firefox lo veremos si desglosamos las etiqueta de li en su propiedad  "textContent: " 
                                                veremos que dice "ir a correr". 

                                                Sin embargo cuando yo agrego una nueva tarea, en el input  no se borra autamticamente la información que escribo.  
                                                
                                                Entonces en la funcion manejadora  despues de llamar a createTask( inputValue ) hay que escribir  un  "this "  que hace referencia a 
                                                " form  "



                                                Recordar que appendChild  va a permitirme  crear un nodo hijo, a un elemento, 
                                                solamente se puede agregar un nodo hijo a la vez   
                                                Pero si ncesito agregar a mas de un nodo hijo, requiero  de usar a "append"  en lugar de appendChild  



    }
*/  



