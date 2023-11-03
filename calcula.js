let boton = document.getElementById('btnCalcula');
let resp = document.getElementById('respuesta');


boton.addEventListener('click', calcula);

function calcula() {
    let selec= document.getElementById('tipo').value;

    if (selec=="quincenal") calcula_quincenal();
    else calcula_semanal();

}

function calcula_quincenal() {
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

function calcula_semanal() {
    let imp = parseFloat(document.getElementById('impte').value);
    let porc = parseFloat(document.getElementById('porcentaje').value);

    let s4= redondea_5(Math.round((imp+(imp*porc/100*1))/4))
    let s6= redondea_5(Math.round((imp+(imp*porc/100*2))/6))
    let s8= redondea_5(Math.round((imp+(imp*porc/100*2))/8))
    let s10= redondea_5(Math.round((imp+(imp*porc/100*3))/10))
    let s12= redondea_5(Math.round((imp+(imp*porc/100*3))/12))
    let s14= redondea_5(Math.round((imp+(imp*porc/100*4))/14))
    let s16= redondea_5(Math.round((imp+(imp*porc/100*4))/16))

    resp.innerHTML=`<p>El pago Semanal a 4 Semanas es  ${s4}, total a pagar es: ${s4*4}</p>`;
    resp.innerHTML+=`<p>El pago Semanal a 6 Semanas es  ${s6}, total a pagar es: ${s6*6}</p>`;
    resp.innerHTML+=`<p>El pago Semanal a 8 Semanas es  ${s8}, total a pagar es: ${s8*8}</p>`;
    resp.innerHTML+=`<p>El pago Semanal a 10 Semanas es  ${s10}, total a pagar es: ${s10*10}</p>`;
    resp.innerHTML+=`<p>El pago Semanal a 12 Semanas es  ${s12}, total a pagar es: ${s12*12}</p>`;
    resp.innerHTML+=`<p>El pago Semanal a 14 Semanas es  ${s14}, total a pagar es: ${s14*14}</p>`;
    resp.innerHTML+=`<p>El pago Semanal a 16 Semanas es  ${s16}, total a pagar es: ${s16*16}</p>`;

}

function redondea_5(x) {
    return Math.ceil(x / 5) * 5;
}
