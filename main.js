// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function recibirNumero(num) {
    if (num % 2 == 0) {
        console.log("Es par")
    }
    else {
        console.log("Es impar")
    }

}
recibirNumero(3)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function numeroMayorMenor(num1, num2) {
    if (num1 == num2) {
        console.log("Son iguales")
    }
    else {
        if (num1 > num2) {
            console.log(`El primer numero: ${num1} es el mayor`)
        }
        else {
            console.log(`El segundo numero: ${num2} es el mayor`)
        }
    }
}
numeroMayorMenor(7,6)

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo5(num1) {
    if (num1 % 5 == 0) {
        console.log(`El numero ${num1} es multiplo de 5`)
    }
    else {
        console.log(`El numero ${num1} no es multiplo de 5`)
    }
}
multiplo5(1)

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumero(num) {
    let i = 0
    while (i <= num) {
        console.log(i)
        i++
    }
}

imprimirNumero(10)

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function imprimirNumeroPalabra(palabra,num) {
    let i = 0
    while (i < num) {
        console.log(palabra)
        i++
    }
}
imprimirNumeroPalabra("enzo",5)

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray (vector) {
    let i = 0
    while (i < vector.length) {
        console.log(vector[i])
        i++
    }
}
const vector = [1,2,3,4,5]
imprimirArray(vector)

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function imprimirSinQuinto(array) {
    let i = 0
    while (i < array.length) {
        if (i !== 4) {
        console.log(array[i]);
        }
        i++
    }
}
const miArray = [1,2,3,4,5,6,7,8,9,10];
imprimirSinQuinto(miArray);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function imprimirArrayNumero(vec,num) {
    let i = 0
    while (i < vec.length) {
        console.log(vec[i] * num)
        i++
    }
}
const vec = [1,2,3,4,5]
imprimirArrayNumero(vec,5)