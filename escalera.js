"use strict";
let N = 987654321;
// Encontrar el divisor correspondiente al primer dígito
let divisor;
if (N >= 100000000) {
    divisor = 100000000;
}
else if (N >= 10000000) {
    divisor = 10000000;
}
else if (N >= 1000000) {
    divisor = 1000000;
}
else if (N >= 100000) {
    divisor = 100000;
}
else if (N >= 10000) {
    divisor = 10000;
}
else if (N >= 1000) {
    divisor = 1000;
}
else if (N >= 100) {
    divisor = 100;
}
else if (N >= 10) {
    divisor = 10;
}
else {
    divisor = 1;
}
// Primer dígito
let anterior = Math.floor(N / divisor);
// Número de la escalera actual
let escaleraActual = anterior;
// Longitud de la escalera actual
let longitudActual = 1;
// Número de la escalera más larga
let escaleraMayor = anterior;
// Longitud de la escalera más larga
let longitudMayor = 1;
// Quitar el primer dígito
N = N % divisor;
// Pasar al siguiente divisor
divisor = Math.floor(divisor / 10);
while (divisor >= 1) {
    let actual = Math.floor(N / divisor);
    if (actual == anterior + 1) {
        longitudActual = longitudActual + 1;
        escaleraActual = escaleraActual * 10 + actual;
    }
    else {
        if (longitudActual > longitudMayor) {
            longitudMayor = longitudActual;
            escaleraMayor = escaleraActual;
        }
        longitudActual = 1;
        escaleraActual = actual;
    }
    anterior = actual;
    N = N % divisor;
    if (divisor == 1) {
        divisor = 0;
    }
    else {
        divisor = Math.floor(divisor / 10);
    }
}
// Revisar la última escalera
if (longitudActual > longitudMayor) {
    longitudMayor = longitudActual;
    escaleraMayor = escaleraActual;
}
console.log("Longitud:", longitudMayor);
console.log("Escalera:", escaleraMayor);
