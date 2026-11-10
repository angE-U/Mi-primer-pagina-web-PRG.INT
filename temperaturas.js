function convertir(){
    let temp = document.getElementById("temp").value;
const unidad = document.getElementById("tempe"); 
let resp = document.getElementById("resultado");

 if (isNaN(temp)) {
        resp.textContent = "Por favor, ingrese una temperatura.";
        return;
    }

if(unidad==="C"){
    let conver = (temp * 9/5) + 32;
    resp.textContent =" La temperatura es igual a " + conver.toFixed(2) + " Grados Fahrenheit" 
}else{
    let conver = (temp - 32) * 5/9;
    resp.textContent =" La temperatura es igual a " + conver.toFixed(2) + " Grados Celsius"
}
}
