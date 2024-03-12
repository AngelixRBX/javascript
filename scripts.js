//Modificar el texto
function sayHello(){
    const input =
document.getElementById('name');
    const h1 =
document.getElementById('titulo');
    h1.innerHTML = "Hola " + input.value;
}

//Modifcar un atributo(style)
function sayHelloIf(){
    const input = document.getElementById('name');
    if(input.value == ''){
    input.setAttribute('style', 'border: 1px solid red;');
    console.log("Debe ingresar un nombre");
    return;
    }
    input.removeAttribute('style');
    const h1 = document.getElementById('titulo');
    h1.innerHTML = "Hola " + input.value;
    }
//Agregar elementos
function addItem(){
    const item = document.getElementById('item');
    if(item.value == ''){
    item.setAttribute('style', 'border: 1px solid red;')
    console.log("Debe ingresar un producto");
    return;
    }
    item.removeAttribute('style');
    const p = document.createElement('p');
    p.innerHTML = item.value;
    const listItems = document.getElementById('list');
    listItems.appendChild(p);
}
//Hacer una suma
function sumar(){
    const respuesta = document.getElementById('respuesta')
    const numero1 = document.getElementById('1numero');
    if(numero1.value == ''){
    numero1.setAttribute('style', 'border: 1px solid red;');
    console.log("Debe ingresar un numero");
    return;
    }
    const numero2 = document.getElementById('2numero');
    if(numero2.value == ''){
    numero2.setAttribute('style', 'border: 1px solid red;');
    console.log("Debe ingresar un segundo numero");
    return;
    }
    numero1.removeAttribute('style');
    numero2.removeAttribute('style');
    const resultado = Number(numero1.value)+Number(numero2.value);
    const p = document.createElement('p');
    p.innerHTML = resultado;
    respuesta.appendChild(p);
}