(()=>{

    let element = document.querySelector('.texto');

    element.innerHTML=`
    <p>Este  es un texto agregado desde un  un archivo js</p>
    <input id="nombre" type="text">
    <button onclick="addPrint()">Imprimir en consola</button>
    `;

    console.log('Ejecutandose y agregando texto');
    let element2 = document.getElementById('nombre');
    console.log(element2.value);

})();

const addPrint = (element2) => {

    console.log(element2.value);

}