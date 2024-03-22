
//Ejercicio uno
function obtenerElementos(pila, numero) {
    let resultado = [];
    
    for (let i = 0; i < numero; i++) {
      resultado.push(pila[i]);
    }
    
    return resultado;
  }
  
  // Ejemplo de uso
  let pilaEjemplo = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
  let elementosObtenidos = obtenerElementos(pilaEjemplo, 4);
  console.log(elementosObtenidos);


  //Ejercicio dos
  
  function reemplazar(pila, nuevo, viejo) {
    let encontrado = false;
    
    for (let i = 0; i < pila.length; i++) {
      if (pila[i] === viejo) {
        pila[i] = nuevo;
        encontrado = true;
        break;
      }
    }
    
    if (encontrado) {
      while (pila.pop() !== nuevo);
    }
    
    return pila;
  }
  
  // Ejemplo de uso
  let pilaNumeros = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
  let resultadoReemplazo = reemplazar(pilaNumeros, 7, 2);
  console.log(resultadoReemplazo);

  //Ejercicio 3

  function mostrarCamino(pueblos) {
    let caminoIda = pueblos.join(' → ');
    let caminoVuelta = pueblos.slice().reverse().join(' → ');
    
    console.log('Recorrido: ' + caminoIda);
    console.log('Regreso: ' + caminoVuelta);
  }
  
  // Ejemplo de uso
  let pueblosRecorrido = ['Pueblo Origen', 'pueblo 1', 'pueblo 2', 'destino'];
  mostrarCamino(pueblosRecorrido);

  //Ejercicio 4
  class Stack {
    constructor() {
      this.items = [];
    }
  
    // Método para agregar un elemento a la pila
    push(element) {
      this.items.push(element);
    }
  
    // Método para sacar un elemento de la pila
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Método para verificar si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para obtener el elemento en la cima de la pila
    peek() {
      return !this.isEmpty() ? this.items[this.items.length - 1] : null;
    }
  
    // Método para obtener el tamaño de la pila
    size() {
      return this.items.length;
    }
  
    // Método para imprimir la pila
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Función para retirar un contenedor específico
  function retirarContenedor(pila, contenedor) {
    let pilaTemporal = new Stack();
    let contenedorRetirado = null;
  
    // Retirar contenedores hasta encontrar el específico
    while (!pila.isEmpty()) {
      let contenedorActual = pila.pop();
      if (contenedorActual === contenedor) {
        contenedorRetirado = contenedorActual;
        break;
      } else {
        pilaTemporal.push(contenedorActual);
      }
    }
  
    // Regresar contenedores a su lugar original
    while (!pilaTemporal.isEmpty()) {
      pila.push(pilaTemporal.pop());
    }
  
    return contenedorRetirado;
  }
  
  // Ejemplo de uso
  let almacen = new Stack();
  almacen.push(1);
  almacen.push(2);
  almacen.push(3);
  almacen.push(4);
  almacen.push(5);
  
  console.log("Almacen original: " + almacen.printStack());
  console.log("Contenedor retirado: " + retirarContenedor(almacen, 3));
  console.log("Almacen después de retirar el contenedor: " + almacen.printStack());
  