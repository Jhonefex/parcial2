function calcular(x) {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    let n3 = parseFloat(document.querySelector("#n3").value);
    let resultado = 0;

    switch(x) {
        case "suma":
            resultado = n1 + n2 + n3;
            console.log(resultado);
            break;
        case "resta":
            resultado = n1 - n2 - n3;
            console.log(resultado);
            break;
        case "multiplicacion":
            resultado = n1 * n2 * n3;
            console.log(resultado);
            break;
        case "division":
            resultado = n1 / n2 / n3;
            console.log(resultado);
            break;
        }

    document.querySelector("#result").value = result;
}

const ecuacionLineal=(a,b) => a*b 
    if (ecuacionLineal(a,b)==0)
        {
            return("tiene una solución")
        }
    

    if (ecuacionLinenal(n1,n2)==0)
        {
            return("tiene infinitas soluciones")
        }
    else
        {
            return("no tiene solución")
        }
