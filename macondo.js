let answer = "si";
let capital = 2500000;
let total = 0;

while (answer.toLowerCase() === "si") {
    let menu = prompt(`
    Hilde Brando, es gusto administrar tus gastos de alimentacion
    para tu viaje a macondo. ¿QUE DESEAS COMPRAR?...

    [ 1 ] - 15.000, ALMOJABANA CON GASEOSA.
    [ 2 ] - 23.000, SUBWAY CON GASEOSA.
    [ 3 ] - NO COMPRAR NADA.
    `);

    switch (parseInt(menu)) {
        case 1:
            console.log(" [ - ] - HAZ COMPRADO UNA ALMOJABANA CON GASEOSA...");
            console.log(" [ - ) - OOOH NOOO, LE CAERÁ MAL PORQUE LLEVA MUCHO EN EL STAND.");
            total += 15000;
            break;
        case 2:
            console.log(" [ - ] - HAZ COMPADRE UN SUBWAY CON GASEOSA...");
            console.log(" [ - ) - WOW :), ESTARÁ LLENITO Y BIEN.");
            total += 23000;
            break;
        case 3:
            console.log(" [ - ] - NO COMPRASTE NADA");
            break;
        default:
            console.log("ERROR... OPCIÓN INVÁLIDA");
            answer = "no";
    }
    console.log("EL TOTAL QUE GASTASTE FUE " + total);
    answer = prompt(" [ ? ] - ¿DESEAS ALGO PARA COMER? (si/no): ");

}


/* // la maleta de Hildebrando
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Dimensiones permitidas
let altoAerolinea = 55;
let largoAerolinea = 40;
let anchoAerolinea = 20;

// Calcululos
let factorReduccionAlto = altoAerolinea / altoOriginal;
let factorReduccionLargo = largoAerolinea / largoOriginal;
let factorReduccionAncho = anchoAerolinea / anchoOriginal;

// el factor de reducción
let factorReduccionMasPequeno = Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

// Calculamos las nuevas dimensiones ajustadas
let nuevoAlto = altoOriginal * factorReduccionMasPequeno;
let nuevoLargo = largoOriginal * factorReduccionMasPequeno;
let nuevoAncho = anchoOriginal * factorReduccionMasPequeno;

console.log("Dimensiones originales:");
console.log(`Alto: ${altoOriginal} cm, Largo: ${largoOriginal} cm, Ancho: ${anchoOriginal} cm`);
console.log("\nDimensiones ajustadas:");
console.log(`Alto: ${nuevoAlto.toFixed(2)} cm, Largo: ${nuevoLargo.toFixed(2)} cm, Ancho: ${nuevoAncho.toFixed(2)} cm`); */


/* let passwordBinario = "01110010_01101001_01110111_01101001";
passwordBinario = passwordBinario.replace(/_/g, '');
let bytes = passwordBinario.match(/.{1,8}/g);
let password = "";
for (let i = 0; i < bytes.length; i++) {
    let decimal = parseInt(bytes[i], 2);
    let caracter = String.fromCharCode(decimal);
    password += caracter;
}

console.log("Contraseña descifrada:", password); */


/* let fraseOriginal = "Taxi me puede llevar al hotel mariposas amarillas";
let fraseModificada = "";

for (let i = 0; i < fraseOriginal.length; i++) {
    let caracter = fraseOriginal[i];
    if ("aeiou".includes(caracter.toLowerCase())) {
        fraseModificada += "i";
    } else {
        fraseModificada += caracter;
    }
}

console.log("Frase modificada:", fraseModificada);


let dineroDisponible = 300000;
let diasEnMacondo = 4;
let diasPasados = 0;
let estaVivo = true;
let gastoTotal = 0;

while (diasPasados < diasEnMacondo && estaVivo) {
    let colorVestimenta = prompt(`Día ${diasPasados + 1}: ¿De qué color vestirá Hildebrando? (amarillo, verde, rojo, azul)`);

    switch (colorVestimenta.toLowerCase()) {
        case 'amarillo':
            let decisionPiscina = prompt("¿Quiere ir a la piscina? (si/no)");

            if (decisionPiscina.toLowerCase() === 'si') {
                console.log("Hildebrando se siente ahogado por el exceso de cloro. ¡Fin de las vacaciones!");
                estaVivo = false;
            } else {
                console.log("Hildebrando decide no ir a la piscina.");
            }
            break;

        case 'verde':
            let decisionCaminata = prompt("¿Quiere hacer una caminata? (si/no)");

            if (decisionCaminata.toLowerCase() === 'si') {
                let decisionCascada = prompt("¿Quiere ir a la cascada durante la caminata? (si/no)");

                if (decisionCascada.toLowerCase() === 'si') {
                    console.log("Hildebrando llega a una hermosa cascada y se toma fotos.");
                } else {
                    console.log("Hildebrando llega a cierto punto, se devuelve solo y se pierde por la noche.");
                }
            } else {
                console.log("Hildebrando decide no hacer la caminata.");
            }
            break;

        case 'rojo':
            let decisionPlaya = prompt("¿Quiere participar en actividades en la playa? (si/no)");

            if (decisionPlaya.toLowerCase() === 'si') {
                let decisionVoleibol = prompt("¿Quiere jugar voleibol? (si/no)");

                if (decisionVoleibol.toLowerCase() === 'si') {
                    console.log("Hildebrando juega voleibol y la pasa genial.");
                } else {
                    let decisionMar = prompt("¿Quiere nadar en el mar y montar moto? (si/no)");

                    if (decisionMar.toLowerCase() === 'si') {
                        console.log("Hildebrando toma cocteles, pero siente un fuerte dolor de cabeza y pierde la visión. ¡Fin de las vacaciones!");
                        estaVivo = false;
                    } else {
                        console.log("Hildebrando se relaja en la playa.");
                    }
                }
            } else {
                console.log("Hildebrando decide no participar en actividades en la playa.");
            }
            break;

        case 'azul':
            let decisionHotel = prompt("¿Quiere participar en actividades dentro del hotel? (si/no)");

            if (decisionHotel.toLowerCase() === 'si') {
                let decisionBingo = prompt("¿Quiere jugar al bingo? (si/no)");

                if (decisionBingo.toLowerCase() === 'si') {
                    console.log("Hildebrando gana en el bingo y aumenta su dinero.");
                    dineroDisponible += 50000; // Aumenta el dinero por ganar en el bingo
                } else {
                    let decisionBailar = prompt("¿Quiere bailar? (si/no)");

                    if (decisionBailar.toLowerCase() === 'si') {
                        console.log("Hildebrando baila y la pasa muy bien.");
                    } else {
                        let decisionCasino = prompt("¿Quiere ir al casino y apostar? (si/no)");

                        if (decisionCasino.toLowerCase() === 'si') {
                            console.log("Hildebrando apuesta en el casino y solo se queda con el pasaje de regreso. ¡Fin de las vacaciones!");
                            estaVivo = false;
                        } else {
                            console.log("Hildebrando decide no ir al casino.");
                        }
                    }
                }
            } else {
                console.log("Hildebrando decide no participar en actividades dentro del hotel.");
            }
            break;

        default:
            console.log("Color de vestimenta no válido.");
    }

    diasPasados++;
}

console.log(`Hildebrando estuvo en Macondo por ${diasPasados} días.`);

if (estaVivo) {
    console.log("Hildebrando logró regresar de Macondo.");
} else {
    console.log("Hildebrando no logró regresar de Macondo.");
}

console.log(`Hildebrando gastó un total de ${gastoTotal} pesos durante su estancia.`);
 */