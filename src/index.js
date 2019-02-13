document.getElementById("encode").addEventListener("click",()=>{
 
    let message = document.getElementById("cipherExample").value; 
    let secret = document.getElementById("secretNumber").value; 

    let result = window.cipher.encode(secret, message);

 document.getElementById("end").value = result;
});


document.getElementById("decode").addEventListener("click",()=>{

    let message = document.getElementById("cipherExample").value;
    let secret = document.getElementById("secretNumber").value;

    let result = window.cipher.decode(secret, message);

    document.getElementById("end").value = result;

});























