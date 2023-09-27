let boton = document.getElementById('btnCalcula');
let resp = document.getElementById('respuesta');

boton.addEventListener('click', calcula);

function calcula() {
    let imp = parseFloat(document.getElementById('impte').value);

    let s4= redondea_5(Math.round((imp+(imp*0.12*1))/4))
    let s6= redondea_5(Math.round((imp+(imp*0.12*2))/6))
    let s8= redondea_5(Math.round((imp+(imp*0.12*2))/8))
    let s10= redondea_5(Math.round((imp+(imp*0.12*3))/10))
    let s12= redondea_5(Math.round((imp+(imp*0.12*3))/12))
    let s14= redondea_5(Math.round((imp+(imp*0.12*4))/14))
    let s16= redondea_5(Math.round((imp+(imp*0.12*4))/16))

    resp.innerHTML=`<p>El pago semanal a 4 semanas es  ${s4}, total a pagar es: ${s4*4}</p>`;
    resp.innerHTML+=`<p>El pago semanal a 6 semanas es  ${s6}, total a pagar es: ${s6*6}</p>`;
    resp.innerHTML+=`<p>El pago semanal a 8 semanas es  ${s8}, total a pagar es: ${s8*8}</p>`;
    resp.innerHTML+=`<p>El pago semanal a 10 semanas es  ${s10}, total a pagar es: ${s10*10}</p>`;
    resp.innerHTML+=`<p>El pago semanal a 12 semanas es  ${s12}, total a pagar es: ${s12*12}</p>`;
    resp.innerHTML+=`<p>El pago semanal a 14 semanas es  ${s14}, total a pagar es: ${s14*14}</p>`;
    resp.innerHTML+=`<p>El pago semanal a 16 semanas es  ${s16}, total a pagar es: ${s16*16}</p>`;

}

function redondea_5(x) {
    return Math.ceil(x / 5) * 5;
}