
/**
 * 
 *  Con Document yo puedo acceder al 
 *  <!DOCTYPE html></!DOCTYPE html>
 *  <html>, al <head> y al <body> 
 *  
 *  (puro nodo de orden superior)
 */

console.warn(' -**** impresion del body ****-');
const body = document.body;  // hace referencia a  la etiqueta body. 
console.log(body); 


// para sacar el div, esto es incorrecto 
// nos devolvera undefined

/**
 *  *** forma incorrecta ****
 * 
 *  const div = document.body.div; 
 *  console.log(div);
 * 
 *  *** retorna 'undefined' ***
 * 
 */

//forma incorrecta 

console.warn(' -**** forma incorrecta de llamar al div ****- ');
const divError = document.body.div; 
console.log(divError);

// Forma correcta , con childNodes se extraen todos los nodos de CUALQUIER TIPO

console.warn('-**** forma correcta de hacer referencia al div ****-');
const listaNodos = document.body.childNodes; 

console.log(listaNodos);



// Como childNodes me regresa una lista de nodos, yo puedo hacer referencia a la posicionde numero 1  
// como childNodes me regreso

const wrapper = document.body.childNodes[1];

console.warn('*** Impresión de wrapper (von childNodes) ***');
console.log(wrapper); 
console.warn('*** Impresión de la lista de elementos hijo de wrapper ***');
console.log(wrapper.childNodes);


// - Con la propiedad 'children' se extraen nodos de tipo elemento (Etiquetas HTML) o dicho de otro modo, retorna los hijos directos de un padre.  

const wrapperChildren = document.body.children; 
console.warn('*** Impresión de la lista de elementos usando la propiedad children ***');
console.log(wrapperChildren); 


/**
 * Nota: fijarse que con la propiedad  "children" 
 * retorna una HTMLCOLLECTION en lugar de un NODELIST
 */

// - Con la propiedad 'firstChild' retorna el primer nodo de  un padre , en este caso, de body(cualquier tipo de nodo).


console.warn('*** primer NODO de body usando firstChild ***');
const wrapper1erElemento = document.body.firstChild;  
console.log(wrapper1erElemento);
// - Si tengo espacios va a retornar espacios y si no sera algun nodo de tipo elemento o comentario (cualquier tipo de nodo).

// - Su contraparte 'firstElementChild' va a retornar el primer nodo de un padre pero de tipo elemento. 

// - Es decir, pura etiqueta HTML

console.warn('*** primer NODO de body que sea elemento HTML (firstElementChild) ***');
const wrapper1erElementoHtml = document.body.firstElementChild; 
console.log(wrapper1erElementoHtml);

// - Tambien tenemos 'lastChild' , extrae el ultimo nodo de cualquier tipo (en este caso seria el script);  


console.warn('*** Ultimo NODO de body (usando lastchild) ***');
const wrapperUltimoNodo = document.body.lastChild; 
console.log(wrapperUltimoNodo);



// -  'lastElementChild' => su contraparte que tambien extrae el ultimo nodo (solo nodos de tipo elemento o etiquetas HTML)

console.warn('*** ultimo NODO de body que sea elemento HTML (usando lastElementChild) ***');
const wrapperUltimoNodoHtml = document.body.lastElementChild; 
console.log( wrapperUltimoNodoHtml ); 


// - NOTA: despues del script ya no se toman mas nodos, script es considerado como el ultimo hijo de body 
//         por lo que  cosas abajo de script ya no se toman en cuenta.     

// - Ejemplo: 

console.warn('*** Ejemplo del ultimo elemento de wrapper ***');
const wrapperExample = document.body.children[0]; 
console.log( wrapperExample ); 
console.log(wrapperExample.lastElementChild); 




// - hasChildNodes me retorna verdadero si el contenedor wrapper llegara a tener hijos
// - en este caso retornara falso 
console.warn('*** Ejemplo de la propiedad hasChildNodes (True = si tiene hijos | False = no tiene hijos ) ***');
console.log( wrapperExample.hasChildNodes() ); // toma cualquier tipo de nodo. 


// - 'hasElementChild' retorna como verdadero cuando el contenedor 
//    al que apunto tiene  hijos y estos son HTML
// -  retorna  false cuando no tiene elementos hijos. 

// Si yo llegara a tener un epacio entre el div aunque llegue a eliminar las demas etiquetas 
// Ese espacio lo consideraria un nodo de tipo texto y por ende retornaria verdadero. 



// Ahora vamos a usar wrapperChildren  para sacar a  sus hijos

// const wrapper


console.warn('*** wrapperChildren22 ***');

const wrapperChildren22 = document.body.children[0]; 
console.log( wrapperChildren22 );
const divprueba = wrapperChildren22.children; 
console.warn('*** divPrueba - retornar  a los hijos de wrapperChildren22 ***');
console.log( divprueba );
// const primerElementoWrapper = 
// console.log(primerElementoWrapper); 

// Para acceder a algun elemento  hijo de wrapper lo hacemos del siguiente modo

const hijo1 = wrapperChildren22.children[1];
console.warn('hijo1');
console.log( hijo1);

//------------------------------
// console.warn('div');
// const div = divprueba.children[1]; 
// console.log(div);



// - 'nextSibling' retorna el hermano siguiente del nodo actual en el caso de  "div"  hay una
//      hay una etiqueta 'a' que esta  al mismo nivel de div 
//      A esto se le llama elemento hermano.

console.warn('Hermano siguiente de hijo1 - propiedad nextSibling'); 
console.log(hijo1.nextSibling); 
//retorna al siguiente nodo,  puede ser de texto html o comentario 

//- 'nextElementSibling' retorna el siguientenodo de tipo elemento de html.

console.warn('Hermano siguiente para nodos tipo elemento - propiedad nextElementSibling');
console.log(hijo1.nextElementSibling); 

// - 'previousSibling' retorna   al hermano anterior de mi nodo actual

console.warn('Hermano anterior de hijo1 - propiedad nextSibling'); 
console.log(hijo1.previousSibling); // retorna cualquier nodo 


//- previousElementSibling  retorna cualquier nodo de tipo HTML

console.warn('Hermano anterior para nodos tipo elemento - propiedad previousElementSibling)');
console.log(hijo1.previousElementSibling); 

// Cuando no hay un hermano siguente o anterior me retorna  un null 

/**
 *  Con lo anterior mencionado, ya podemos navegar entre mis etiquetas  y la 
 *  ventaja que tengo al hacer esto es lo siguiente 
 *  Ejemplo: 
 *      Podemos cambiar  el texto la etiqueta h1
 *      Podemos cambiar el fondo de la pagina.
 */

// h1.textContent = "Esto siendo modificado desde el DOM "

//Ejemplo:   del cambio de texto en el titulo 

const h1_Hijo0 = hijo1.previousElementSibling; 
console.log('h1_Hijo0: ',h1_Hijo0)

h1_Hijo0.textContent = "Estoy siendo modificado desde el DOM "; 


//  - Ejemplo anterior pero con una 'funcion para un evento con boton' 

const anchorDiv= wrapperChildren22.children[1];
console.log(anchorDiv);
const anchorButton = anchorDiv.children[0]; 
console.log(anchorButton);

anchorButton.addEventListener('click', function(){
    h1_Hijo0.textContent = "Estoy siendo modificado desde el DOM con addEventListener";
})


// - Ejemplo para cambio de color del texto y del fondo (background)

const anchorBakcground = anchorDiv.children[1];

anchorBakcground.addEventListener( 'click', function(){
    document.documentElement.style.background = 'black'; 
    document.documentElement.style.color ='white'; 
} )


// - documentElement => representa al HTML 
// - style  => NOS permite cambiar estilos del html  y podemos elegir cualquier propiedad de background 

// los ejemplo anteriores representan la importancia de aprender a navegar  con el DOM para poder acceder a todos los elementos LOS ELEMENTOS 


// - Con 'parentNode' regresamos a contenedor padre de que quien lo contiene, es decir,  vamos  escalando. 

// Podemos regresar hasta el #doctype 

console.warn(' Uso de parentNode para escalar al padre de anchorButton');

console.log(anchorButton.parentNode); 

console.warn('Lo podemos usar varias veces para llegar mas arriba, es decir ver el padre de div');
console.log(anchorButton.parentNode.parentNode.parentNode);// y asi hasta llegar al #documentt 

console.warn('Hasta  llegar #document');
console.log(anchorButton.parentNode.parentNode.parentNode.parentNode.parentNode);


// Recordar que document es el nodo raiz y va despues de la etiqueta HTML
// cuando ya no hay mas nodos padre retorna un null (NO HYA BADA NAS ARRIBA DE DOCUMENT )

// - tambien esta 'parentElement'.  que solo reconoce puros nodos de tipo elemento (HTML)

console.warn(' Uso de parentElement con anchorButton ');
console.log(anchorButton.parentElement.parentElement.parentElement. parentElement);


// CON PARET ELEMENT NO LLEGAMOS A #DOCUMENT , UNA VEZ LLEGA AL HTML  NOS DA NULL
// esto pasa porque con parenElement solo retorna nodos padre de tipo elemento


/**
 *  SIGUEINTES PROPIEDADES A VER: 
 *  getElementById();
 *  getElementByClassName(); 
 *  getElementByTagName();
 *  getElementsByName();
 *  querySelector(); 
 *  querySelectorAll(); 
 *  
 * 
 *  LO ANTERIOR MOSTRADO NO ES UNA FORMA SENCILLA U OPTIMA  
 *  DE NAVAGAR ENTRE NODOS O ELEMENTOS. 
 *  
 *  UNA FORMA MAS PRACTICA  ES COMO SE MUESTRA A CONTINUACION
 *  Ya que para acceder a un elemento tenemos que acceder a a body, luego al hijo de body, 
 *  despues al hijo del hijo de body, hasta acceder al elemento que necesitamos  
 * 
 *  Hay matedos para acceder a elementos que tengan caracteristicas espaciales      
 */


// -  Ejemplo para acceder a wrapper. 

// - getElementById  nos permite  obtener un elemento con base a su ID

console.warn('wrapper2 => usando getElementById()');
const wrapper2 = document.getElementById("wrapper"); 
console.log(wrapper2);
// En este caso llamamos al elemento wrapper

// si pongo un id que no existe en mi HTML entonces me va a retornar un "null"

// NOTA: Solamente esta permititido usarse con el nodo raiz, es decir, en 'document'

// - getElementsByClassName():HTMLCollection =>     nos ayuda a obtner una lista HTML que contenga  
//                                                  el valor ingresado en el metodo dentro de su 
//                                                  atributo class
//  Ahora para buscar a taves de la priopiedad 'class'.

// vamos a usar este metodo en el objeto global document. 

console.warn('Obteniendo lista de elementos que contengan la clase link usando getElementsByClassName()'); 
const links = document.getElementsByClassName('link');
console.log(links); 

//Esto hace mas sencillo buscar a los elementos de tipo class 

// para ingresar al primerelemento: 

console.warn('Obteniendo el primer elemento de mi lista');
console.log(links[0]); 

//Me retorna un HTMLCollection, tener cuidado de querer usar propiedades que pertenecen
//a elementos padre como 'children', ya que no pueden usarse debido al tipo de dato.

// - Ejemplo:  

// console.log(links.children);  //error

// me retorna una coleccion HTML mas no un nodo padre como tal 

// NOTA: getElementsByClassName => puede ser utilizado por cualquier nodo de tipo elemento 

// - Ejemplo: 

console.warn('Usando la propiedad getElementsByClassName() en un elemento hijo (wrapper2)');
const classLinksWrapper2 = wrapper2.getElementsByClassName('link');
console.log(classLinksWrapper2);


// - getElementByTagName() =>  retorna una lista  de elementos HTML (CollectionHTML) 
//  con todos los nodos que concidan  con la etiqueta especificada en el metodo 

// si no se encuentra la etiqueta, va a retornar  una lista vacia 


console.warn("trabajando con el metodo getElementsByTagName()"); 
const divs = document.getElementsByTagName("div");
console.log(divs); 

//NOTA: este metodo  puede ser utilizado en cualquier elemento del DOM 

//Si llegamos a usarlo dentro de un nodo, solomente va a poder buscar dentro de los nodos del nodo en el que estamos buscando

// - Ejemplo:  

console.warn(' buscandos etiquetas div en wrapper2 ');
const divsInWrapper = wrapper2.getElementsByTagName('div'); 
console.log(divsInWrapper);

// - getElementsByName() => Este metodo retorna  una lista  elementos HTML con todos los nodos que contengan en el atributo name el valor
//   especificado  en el metodo 
//   En pocas palabras, busca los elementos HTML que tengan el atributo name (NORMALMENTE USADO PARA INPUTS); 

console.warn('Usando getElementsByName() para buscar el input');
const input = document.getElementsByName('telefono'); 
console.log(input);

// Hay que darnos cuenta de que retorna un NodeList 

// NOTA: solo puede usar con 'document', es decir, el nodo padre.

// - querySelector() =>  funciona ingresando un selector de CSS , 
//   Solamente retorna al PRIMER ELEMENTO que coincida con el selector que ingresamos
//   Es el metodo mas versatil 


console.warn(' Uso del querySelector - busqueda por id');
const wrapperForId = document.querySelector('#wrapper'); 
console.log(wrapperForId); 

console.warn('Uso del querySelector - busqueda por clase (class)'); 
const wrapperforClass = document.querySelector('.wrapper'); 
console.log(wrapperforClass);

console.warn( 'Uso del querySelector - busqueda por atributo' );
const wrapperForAtribute = document.querySelector('[class="wrapper"]'); 
console.log(wrapperForAtribute); 

console.warn( 'Uso del queryslector - busqueda por etiqueta HTML' ); 
const wrapperForTag = document.querySelector('div'); 
console.log(wrapperForTag);

console.warn( 'Uso del querySelector - usandose en otro nodo (no en nodo raiz)' );
const wrapperLinkBold = wrapperForId.querySelector('.link.bold'); // Se colocan 2 elementos de clase.   
console.log(wrapperLinkBold);

console.warn('Uso del querySelector - buscando al ultimo tipo de class=link ')
const wrapperLastLink = wrapperForId.querySelector('.link:last-of-type'); 
console.log(wrapperLastLink);
// si quiero buscar  por id  colocare el hash (#wrapper)
// si quiero bucar por clase voy a buscar con punto (.wrapper) => OJO  que aqui apunto a class
// tambien puedo buscar por atributo, este caso la clase, pero puede ser otro ( '[class="wrapper"]'); 
// tambien puedo buscar por elemento , en este caso la etiqueta div

//NOTA: el metodo querySelector() se puede utilizar en cualquier nodo del DOM


// - querySelectorAll() =>  retorna todos los elementos que coincidan con el selector que ponemos en el metodo. 

console.warn('usando el querySelectorAll() - lista de elementos con la clase link');
const links2 = wrapperForId.querySelectorAll('.link');
console.log(links2);

// retorna un NodelIST( n elementos ) 
// Se puede utilizar en cualquier nodo

// - DIFERENCIAS ENTRE  NODELIST Y HTML COLLECTIONS 








//      La primera deferencia de nodelist con HTMLCollections es que podemos guardar cualquier tipo de nodo
//      La segunda diferencia es que podemos trbajar con el foreach() en el nodeLsit  | Una lista HTMLCollection no puede utilizar foreach. 
//      linksNode (Node list())  no es un objeto vivo, una vez que se obtiene una lista  de nodos ya no se actualiza aunque el DOM CAMBIE


// nodelist puede guardar cualquier tipo de nodos //texto, comentarios, atributos, documentos, etc  
// nodelist  usa foreach 
// nodelist no es un objeto vivo 

// HTML COLLECTION NO PUEDE USAR  FOREACH
// HTML COLLECTION ES UN  OBJETO VIVO QUE SE ACTUALIZA SI EL DOM CAMBIA
// HTML COLLECTION PUEDE USAR EL METODO ".item()" DONDE PUEDO OBTENER A SUS ELEMENTOS POR SU POSICION    


//  con la etiqueta nodelist podemos ver como mantiene los primeros 4 elementos 
// y el ultimo elemento que se a creado no lo actualiza en su longitud 

//si vemos el HTMLcollection  vemos que si toma al siguiente valor. 


//para poder usar foreach en querySelectorAll necesitamos cmambiar  la lista  HTMLCollections 
// a un array   

const linksNode = Array.from(document.querySelectorAll('.link'));  


//RECORDAR QUE TODOS LOS NODOS  SON OBJETOS EN JAVASCRIPT

//CONSOLE.DIR Es  la manera de ver todas la propiedades que tiene un objeto. 


// Creando un documento para entender el concepto de un objeto vivo 


// -propiedad.className 

// utilizar  className para darle clases a  los elementos no estan buena idea si no queremos sobrescribir las clases anteriores  


//Dando  console.dir a los elementos con las clase link 

// Vemos como cada elemento puede tener elemntos diferenctes, por ejemplo, la propiedad href  con el cual podemos modificar la url  o el enlace.  


// con esto podemos ver que tenemos el valor de los atributos como propiedades del nodo 


// ¿que pasa si yo le agrego a una etiqueta, un atributo href?

// no la reconoce y me rotorna 'undefined' si yo quiero mostrarla, ejemplo: 

//En el estandard  los elementos h21 no tienen el atributo href


// - propiedad.nodeName 

// no retorna el nombre del nodo, es una propiedad que reconoce todos los nodo del DOM  

// en el caso de title  el nombre del nodo es H1

//  #text  es el nombre de  un nodo de tipo texto. 



//  - propiedad. innerHTML

// RETORNA  el HTML interno del  nodo  en donde es llamado 

// ejemplo con el div.wrapper (retorna todo el html interno de wrapper )
// tambien  puede sobreescribre el HTML INTERNO  de wrapper 

// si queires poner texto  que ingresa el usuario, debes evitar utilizar innerHTML   

// YA QUE CON EL PUEDEN INGRESAR CODIGO HTML Y TAMBIEN CON ESTO 
// CODIGO JS Y ESTO PUEDE EJUCUTAR CODIGO MALICIOSO EN TU PROYECTO

// - PALABRA reservada para crear indetificadores personalizados  "data-nombrePropiedad". 

// para  modificar atributos personalizados puedes hacerlo con getatribute o con setAtribute 

// ó en su lugar dataset  donde se encuentran todos los atributos personalizados 

