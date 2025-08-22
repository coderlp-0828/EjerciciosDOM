
console.log("className, nodeName, innerHTML, outerHTML, textContent"); 
console.log("Estamos en 'continuacion DOM'"); 




const wrapper = document.querySelector('#wrapper'); 
const title =  document.querySelector('.title');
const link = document. querySelector('.link.bold'); 
const inputNumber =  document.querySelector('[type=number]');

const img = document.querySelector('img'); 
const figcaption =  document.querySelector('figcaption');

/**
 * Ejemplo  del uso del identificadir personalizado
 */
const idImg = document.querySelector('[data-identificador="img"]');

/**
 * Recordar que todos los nodos son OBJETOS  en JS. 
 */

 /**
  *  esta es la manera de mostrar todas la propiedades de un objeto en consola.
  *  
  */

 console.dir(wrapper); 


 /**
  * de la lista q ue se muestra, una de las propiedades principales  es el className 
  * Esta propiedad retorna un string  con todas las clases  que tiene 
  */

 console.log("Imprimiendo classname => ", wrapper.className);

 /**
  * Tambien a esta propiedad podemos asignale una nueva propiedad 
  * EL probelma es que lo sobresecrtibimos. 
  * 
  */

wrapper.className = "container"; 

console.log(wrapper.className);

/**
 *  Este elemento  tiene propiedades diferentes 
 *  uno que hay que resaltar es la propiedad href  
 *  donde podemos extraer la url:  http://127.0.0.1:5502/plantilla-youtube.html#
 */

console.dir(link);  

/**
 *  imprimiento el enlace 
 */
console.log(link.href);  


/**
 *  Si le pasamos un title con la propiedad de href, esto nos retorna undefined
 *  A pesar de que en h1 viene  le agregaamos  href (o se lo podemos agregar como atributo en el html)
 *  por  estandard  los elementos h1 no tienen un atributo  href, por eso no lo  reconoce  
 */

// console.log(title.href); // retorna  udenfined 

/**
 *  Igual en el input, 
 *  la propiedad value  al parecer solo se le puede asignar al input.   
 *  
 */

/**
 * para retornar el nombre del nodo 
 * 
 */

console.log(title.nodeName); 


/**
 *  AQUI llamamos al nombre del primer nodo ( con childNodes jalamos todo los nodos de cualquier tipo) 
 */

console.log(wrapper.childNodes[0].nodeName);

/**
 *   --innerHTML-- retorna todo lo que contiene wrapper, incluso loss espacios
 */

console.log(wrapper.innerHTML); 


/**
 * 
 *  tambien  sirve para sobrescribir el HTML
 *  asignandole a este valor una propiedad 
 *  Ejemplo: 
 */

// wrapper.innerHTML =  `
// <h2> He sobrescrito el Dom</h2>
// `;

/**
 * 
 *  si quuieres agregar texto que ingrese el usuario
 *  debes evitar usar innerHTML, ya que puedes ingresar codigo HTML Y TAMBIEN CON 
 *  esto codigo javascript. Con esto puedes ejecutar codigo malisioso  en tu proyecto 
 *  ejemplo: 
 */

// wrapper.innerHTML =`
// <img  src="error" onerror="alert('te han hackeado!')"/>
// `; 


/**
 * Tambien podemos concatenar un HTML nuevo;
 * Ejemplo: 
 * 
 */

// wrapper.innerHTML += `
// <h2> Este es un html concatenado</h2>
// `; 

/**
 *  El tema que se tiene  con concatenar 
 *  es que se recarga el HTML VIEJITO, esto hace  
 *  que se renderice(y no es tan bueno porque puedo tomar muchos recursos del usuario). 
 * 
 *  como conclusion innerHTML retorna  o nos permite sorescribir el HTML interno de un elemento. 
 */


/**
 * 
 * con outerHTML podemos ver todo el HTML INCLUYENDO el ELEMENTO de donde es llamado  
 */
console.log(wrapper.outerHTML); 

/**
 *  Tambien nos permite reemplazar el HTML  QUE TENEMOS EN EL ELEMENTO (LO SOBRESCRIBE)
 *  
 */

// wrapper.outerHTML = `
//   <h2>Utilizando outerHTML</h2>
// `;

/**
 *  Pero a diferencia de innerHTML, outerHTML no elimina el HTML anterior (o en el que se sobreescribio)
 *  Por lo tanto, al hacer refenrecia a "wrapper" (podemos hacerlo en consola para verlo)
 *  podemos  ver como nos jala el HTML anterior  
 * 
 *  Lo anterior solo pasa si nosotros guardamos el HTML  ANTERIOR  en una variable. 
 */


// console.log(wrapper); 



/**
 *  textContent me va a permitir actualizar un nodo o reemplazarlo 
 *  no acepta etiquetas HTML, solo texto. 
 * 
 *  El metodo es ideal para agregar contenido nuevo que el usuario ingrese 
 *  porque solamente acepta texto.   
 */


console.log(title.textContent);

/**
 *  Imprimiendo el texto de  de wrapper
 * 
 */

console.log(wrapper.textContent);

/**
 * Ejemplo de como puede ingresar texto un usuario con text content: 
 * 
 */

// const textoUsuario = prompt('¿Como te llamas?'); 
// title.textContent = `Hola !! bienvenido ${textoUsuario}`; 


/**
 * Como conclusion nos permite sobrescribir o leer el texto actual
 *  de un nodo de tipo elemento o tipo texto 
 * 
 * E innerHTML nos permite agregar codigo HTML  para u nodo. 
 */


// ------------------

/**
 *  minutto 50:00
 *  
 *  setAttribute()
 *  hasAtribute()
 *  getAttribute()
 *  removeAtribute() 
 * 
 */

/**
 * Se pasa por console.dir() a title.  
 * Se puede ver como "h1" no tiene el atributo href 
 * como standard o parte de la lista de propiedades  a  
 * diferencia de las etiquetas "a" que esta si la tiene 
 * por standard. 
 */

console.dir(title);

/**
 * inputNumber cuenta con la propiedad "Value" 
 * ya que el elemento es un input 
 * 
 *  de aqui sacamos el valor   que nosostros 
 *  lleguemos a escribir en el input 
 *  (el input va a aparecer con la propiedad value vacia
 *  porque  no tiene na escrito dentro de el). 
 * 
 */

console.dir(inputNumber);

/**
 * ¿ como podriamos modificar u obtener atributos  
 * que no estan como propiedades de mis elementos,
 * es decir , en mi lista de propiedades o en el 
 * estandard de un elemento ? 
 * 
 */

/**
 *  get attribute me permite  obtener un atributo
 *  de un nodo de tipo elemento, no importa 
 *  que el atributo que yo especifique 
 *  en el el metodo no este listado en las propiedades 
 *  del nodo, por ejemplo  
 * 
 */

console.dir(title.getAttribute('href')); 

console.log(title.getAttribute('href'));

/**
 *  se puede impimir con console.dir 
 *  o con console.log
 * si el atributo  no existe retorna => null 
 * 
 */

/**
 * de esta manera podemos obtener cualquier atributo 
 * Ejemplo: el atributo class:
 * 
 */

console.log(title.getAttribute("class")); 

/**
 * Ahora:  ¿Que pasa  si yo quiero agregar  un atributo a title?
 * Si ya esta definida en su lista de propiedades lo podemo definir
 * de la siguiente manera: 
 */

console.log(title.id= "title__id");


/**
 * ¿Que pasa si yo quiero agregar un atributo que no
 * esta listado en sus propiedades o estandard?
 * o simplemente quierso sobrescribir  
 * un valor de un atributo  como el de id
 * 
 * para lo anterior  se usa setAtribute 
 */

console.log(title.setAttribute("id", "encabezado" )); 

/**
 * retorna por consola undefined PEEEEERO...
 *  al escribir "title"  en consola  vemos como id si se sobreescribio
 * 
 */

/**
 * Ademas de sobreescribir  tambien puedo agregar un atributo nuevo 
 */


console.log(title.setAttribute("src", "google.com" )); 

/**
 * ejemplo para agregar una imagen 
 * 
 */

img.src = "https://wallpapers.com/images/featured-full/fondos-de-spiderman-oycfyb1ksermw921.jpg"; 


/**
 * Agregando  una valor al atributo "alt"
 * 
 */

console.log(img.setAttribute("alt", "spiderman game")); 


/**
 *  Pasando a otro metodo: 
 *  "hasAttribute" => retorna  un  valor booleano 
 *  
 *  Sirve para preguntar si tiene un atributo en especidico.  
 * 
 */

console.log(img.hasAttribute("alt"));

/**
 * Quitar el valor a un atribito NO ES ELIMINAR atributo.  
 * Ejemplo: 
 * alt = "spiderman game"  => alt = ""
 * 
 */

/**
 *  Para eleminar el atributo se  utiliza: 
 *  removeAttribute
 * 
 */

img.removeAttribute("alt"); 

// console.log(img.hasAttribute("alt")); // aqui ya sale en false  porque ya se elimino. 


/**
 * Para ver todos los elementos de nuestro atributo 
 * usamos: "attributes"
 *  
 * Esto nos retorna  un objeto llamado "NameNodeMap"
 */

console.log(img.attributes); 


/**
 * Muchas veces vamos a querer establecer attributos para 
 * posteriormente manupularlos con JS. Por ejemplo:
 * 
 * Podemos  hacer atributos personalizados que se llamen 
 * - identificador 
 * - texto a mostrar 
 */


const textoMostrar = img.getAttribute('data-texto-mostrar');
figcaption.textContent= textoMostrar;

/**
 * Esta  es una manera de poner attributos para posteriomente
 * usarlos mostrarlos.  
 * 
 * HAY  QUE USAR  EL PREFIJO  "data - " para 
 * atributos  personalizados 
 * 
 */

/**
 * para atributos personalizados podemos usar 
 *  setAttribute o getAttribute. 
 *  tambien dataset
 */

 console.log(img.dataset);  // muestra los atributos personalizados 

/**
 * Lo elementos de data set los podemos usar del siguiente modo
 */

figcaption.textContent = img.dataset.identificador;
