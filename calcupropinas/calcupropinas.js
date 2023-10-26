function calcula() {
    let numComensals = Number(document.forms["myForm"]["num-comensals"].value);
    let totalFactura = Number(document.forms["myForm"]["total-factura"].value);
    let opinioServei = Number(document.forms["myForm"]["opinio-servei"].value);
    
    /*console.log(numComensals);
    console.log(totalFactura);
    console.log(opinioServei);*/


    let propina;
    let facturaPlus;

    facturaPlus = totalFactura * opinioServei / 100;
    propina = facturaPlus/numComensals;

    if(propina < 0.5) {
        propina = 0.5;
    }
    
    console.log(propina);




    document.getElementById("result").innerHTML = `Cada comensal ha de pagar ${propina.toFixed(2)}€ de propina`;
    document.forms["myForm"]["num-comensals"].value = 1;
    document.forms["myForm"]["total-factura"].value = "";
    document.forms["myForm"]["opinio-servei"].value = "";
    
    

    return false;
}