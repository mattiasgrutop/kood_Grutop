

let numbrid = [12, 45, 8, 32, 18];
console.log("Suurim arv massiivist on: " + leiaSuurim(numbrid));

function leiaSuurim(massiiv) {
    let suurim = massiiv[0];

    for (let i = 1; i < massiiv.length; i++) {
        if (massiiv[i] > suurim) {
            suurim = massiiv[i];
        }
    }

    return suurim;
}

let numbrid = [12, 45, 8, 32, 18];
console.log("Suurim arv massiivist on: " + leiaSuurim(numbrid));


function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let celsiusTemperatuur = 25;
console.log(celsiusTemperatuur + "°C on " + celsiusToFahrenheit(celsiusTemperatuur) + "°F.");


function prindiKorrutustabel(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + (num * i));
    }
}

let number = 5;
console.log(number + "-korrutustabel:");
prindiKorrutustabel(number);


function faktoriaal(n) {
    let tulemus = 1;
    for (let i = 1; i <= n; i++) {
        tulemus *= i;
    }
    return tulemus;
}

let arv = 5;
console.log(arv + "! = " + faktoriaal(arv));


function prindiTähed(n) {
    for (let i = 1; i <= n; i++) {
        let rida = "";
        for (let j = 1; j <= i; j++) {
            rida += "*";
        }
        console.log(rida);
    }
}

let tärnideArv = 5;
console.log("Tähed:");
prindiTähed(tärnideArv);


function onAlgarv(arv) {
    if (arv <= 1) {
        return false;
    }
    if (arv <= 3) {
        return true;
    }
    if (arv % 2 == 0 || arv % 3 == 0) {
        return false;
    }

    for (let i = 5; i * i <= arv; i += 6) {
        if (arv % i == 0 || arv % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

let kontrollitavArv = 17;
if (onAlgarv(kontrollitavArv)) {
    console.log(kontrollitavArv + " on algarv.");
} else {
    console.log(kontrollitavArv + " ei ole algarv.");
}
