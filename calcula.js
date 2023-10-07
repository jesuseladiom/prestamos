let boton = document.getElementById('btnCalcula');
let resp = document.getElementById('respuesta');

boton.addEventListener('click', calcula);

function calcula() {
    let imp = parseFloat(document.getElementById('impte').value);
    let porc = parseFloat(document.getElementById('porcentaje').value);

    let q4= redondea_5(Math.round((imp+(imp*porc/100*2))/4))
    let q6= redondea_5(Math.round((imp+(imp*porc/100*3))/6))
    let q8= redondea_5(Math.round((imp+(imp*porc/100*4))/8))
    let q10= redondea_5(Math.round((imp+(imp*porc/100*5))/10))
    let q12= redondea_5(Math.round((imp+(imp*porc/100*6))/12))
    let q14= redondea_5(Math.round((imp+(imp*porc/100*7))/14))

    resp.innerHTML=`<p>El pago Quincenal a 4 quincenas es  ${q4}, total a pagar es: ${q4*4}</p>`;
    resp.innerHTML+=`<p>El pago Quincenal a 6 quincenas es  ${q6}, total a pagar es: ${q6*6}</p>`;
    resp.innerHTML+=`<p>El pago Quincenal a 8 quincenas es  ${q8}, total a pagar es: ${q8*8}</p>`;
    resp.innerHTML+=`<p>El pago Quincenal a 10 quincenas es  ${q10}, total a pagar es: ${q10*10}</p>`;
    resp.innerHTML+=`<p>El pago Quincenal a 12 quincenas es  ${q12}, total a pagar es: ${q12*12}</p>`;
    resp.innerHTML+=`<p>El pago Quincenal a 14 quincenas es  ${q14}, total a pagar es: ${q14*14}</p>`;

}

function redondea_5(x) {
    return Math.ceil(x / 5) * 5;
}
