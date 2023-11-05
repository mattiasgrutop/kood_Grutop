function harjutus1(nimi) {
    console.log("Tere tulemast " + nimi);
}

function harjutus2(mark, mudel, värv) { 
    console.log("Minu auto on " + värv + " " + mark + " " + mudel + ".");
}

function harjutus3(pindala, kõrgus) {
    let ruumala = (1 / 3) * pindala * kõrgus
    console.log("Püramiidi ruumala on " + ruumala + ".")
}

function harjutus4(nimi) {
    if (nimi.length > 5) {
        nimi = nimi.slice(0, 5) + "..."
    } else {
        return nimi;
    }
}

function harjutus5(nimi) {
    return nimi.split('').reverse().join('');
}

function harjutus6() {
    for (let i = 1; i < 101; i++) {
        console.log(i);
    }
}

function harjutus7() {
    let i = 100;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

function harjutus10() {
    const myNameComponents = ('Samuel', 'L', 'Jackson')
    const nimi = myNameComponents.join(' ');
    console.log('Minu nimi on ${nimi}')
}

function harjtusus11(hinded) {
    let summa = 0;
    for (let hinne of hinded) {
        summa += hinne;
    }
    let keskmineHinne = summa / hinded.length;
    console.log('Keskmine hinne on ${keskmineHinne}')
}

function harjutus12() {
    for (let i = 1; i <= 100; i++) {
        let tulemus = ""
        if (i % 3 === 0) {
            console.log("Tallinna")
        }
        if (i % 5 === 0) {
        console.log("Prantsuse")
        }
        if (i % 3 === 0) && (i % 5 === 0)
    }
}


function harjutus13(massiiv) {
    if (massiiv.includes("Marek")) {
        console.log("Marek on massiivis");
    } else {
        console.log("Marek pole massiivis");
    }
}


let inimesed = [
    {
        nimi: 'Alice',
        vanus: 28,
        aadress: 'Pargi 7',
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: 'Bob',
        vanus: 32,
        aadress: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: 'Marek',
        vanus: 22,
        aadress: 'Metsatee 3',
        telefon: '8594032',
        email: 'marek@example.com'
    }
];

function harjutus14(inimesed) {
    let vanim = inimesed[0];
    let pikimAadress = inimesed[0];
    let lühimTelefon = inimesed[0];
    let eestiEmail = null;

    for (let inimene of inimesed) {
        if (inimene.vanus > vanim.vanus) {
            vanim = inimene;
        }
        if (inimene.aadress.length > pikimAadress.aadress.length) {
            pikimAadress = inimene;
        }
        if (inimene.telefon.length < lühimTelefon.telefon.length) {
            lühimTelefon = inimene;
        }
        if (inimene.email.includes("eesti")) {
            eestiEmail = inimene;
        }
    }

    console.log("Kõige vanem: " + vanim.nimi);
    console.log("Pikima aadressiga: " + pikimAadress.nimi);
    console.log("Lühima telefoninumbriga: " + lühimTelefon.nimi);
    if (eestiEmail) {
        console.log("E-post sisaldab sõna 'eesti': " + eestiEmail.nimi);
    }
}

