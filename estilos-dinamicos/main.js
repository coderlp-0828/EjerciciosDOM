/**
 * Haciendo referencia  a 3 elementos 
 */

const title = document.querySelector('.title');
const inputColor = document.querySelector('[type="color"]');
const inputRange = document. querySelector('[type="range"]'); 

/***
 * 
 *  Aqui veremos como manipular el CSSOM O ( CSS OBJECT MODEL) 
 *  
 *  esta es la manera de representar CSS  como objetos, esto  nos permite modificar
 *  el CSS de nuestro  proyecto. 
 * 
 */

/**
 * 
 *  con propiedad .style => POPDEMOS OBTENER UN ESTILOS  O DETERMINAR UN ESTILO 
 *                          Desterminar los estilos en linea
 * 
 *  imprimiendo la propiedad por consola: 
 * 
 */

console.log("imprimiendo la propiedad style");
console.log(title.style); 


/**
 *  Lo anterior se imprime en 0  porque solamente 
 *  contiene los elementos en linea de ese elemento
 * 
 *  Recordar  que un stilo en linea  es dar  al elemento del lado del  html
 *   un estilo usano  el atributo " style="" ".
 * 
 *  Para ver esto vamos a  agregar  color a un elemento dentro de este atributo 
 *  para que imprimer ahora "style", 
 * 
 * 
 *  Algo que hay que tener encuenta  es  que al momento de agregar estilos  con 
 *  style  puede llegar a romper  la ESPECIFICIDAD y esto puede llegar a ser un problema.  
 */


/**
 *  Obteniendo el valor  de color dentro  de  style
 *   nos imprime en consola el valor de steelblue
 * */

console.log(title.style.color); 

/**
 * La propuedad style  es un OBJETO DE LECTURA Y ESCRITURA
 * donde  todas sus propiedades son CSS QUE AL SER CAMBIARDA SE AGREGARA COMO OBJETOS EN LINEA 
 *  
 *  Esta tiene  una caracteristica de para llamr a las propiededades de CSS se escriben  con 
 *  camellCase
 *  
 *  Ejemplo: cambieando la fuente  del titulo 
 *  
 */

title.style.fontFamily = "cursive";

// cambiando el color del titulo 

title.style.color = "darkred";

// cambiando el color del titulo 

title.style.fontSize ="4rem";

/**
 *  Si en el inspector vemos el HTML del titulo "h1" 
 *  nos daremos cuenta que se escriben los elementos de la
 * 
 *  tambien podemos imprimir  los valores argegados a las prpiedades anterires 
 *  
 *  Ejemplo:
 * 
 */


console.log(title.style.color);


/**
 *  Ejemplo de como agregar una curtom-property (o variable css  en este caso )
 *   con la prop
 */



/**
 *  setProperty
 * 
 * 
 */


/**
 *  getproperty
 * 
 */


/**
 * 
 *  Estilos finales de un elemento
 */


/**
 *   nos retornna Valores  finales o computados 
 *   del elemento el cual se usa  como parametro 
 *  por ejemplo 
 *   imprimento los estilos finales del elemento title
 */

console.log("Imprimiendo valores computados"); 
console.log( getComputedStyle(title)); 

console.log("imprimiendo valores computados  de una propiedad"); 
console.log( getComputedStyle(title).background ); 

/**
 * 
 *  Lo anterior es el retorno de los valores finales.   
 *  Retorna los valores  finales  que interpreta al final el navegador;
 * 
 */



/**
 * Ejemplo de uso para la cuando usamos un AFTER O BEFORE  
 * 
 *  getComputedStyle(title, '::after'));
 */



/**
 *  como resumen retorna
 * 
 *  sin importar si son estilos en linea o estilos normales 
 * 
 * 
 *  ESTILOS COMPUTADOS => SON LOS ESTILOS COMPUTADOS QUE SE AGREGAN  AL FINAL DEL ELEMENTO. 
 *  
 * 
 *  3 REM = 48PX
 * 
 *  PARA CUALQUIER SHORTHAND VA A RETORNAR  LOS VALORES DEL MISMO.  eJEMPLO DEL MARGIN  Y COMO LE ASIGNA LOS VALORES, 
 *  POR SEPAra con margin top  o bottom  y al  final se imprime  
 */