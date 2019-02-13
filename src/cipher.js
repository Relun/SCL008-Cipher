window.cipher = {
  encode: (secret,message) => {

    let result = "";   //declaro variable vacia para que muestre el resultado 
    for(let i=0; i<message.length; i++){ //para recorrer string (textoqueescribe el usuario)i es cada letra
      let asciiNumber = message.charCodeAt(i); //obtiene alfabeto ascii, ejem la A pasa a 65, saco ascii de cada letra (i)
      if (asciiNumber >= 65 && message <= 90);//determinar si está la letra mayuscula
      let formula=(asciiNumber-65+parseInt(secret))%26+65; //aqui va la formula de michelle, aqui aplica el offset
   result += String.fromCharCode(formula); //para pasar de ascii a letra (ejemp A->65, LO PASA A A)
    }  

    return result;
  },
  
  decode: (secret, message) => {
   
    let result= "";
    for(let i=0; i<message.length; i++){
      let asciiNumber = message.charCodeAt(i);
      if(asciiNumber >=65 && asciiNumber <=90);
      let formula=(asciiNumber-90-(parseInt(secret)))%26+90;
   result+=String.fromCharCode(formula);

  }
  return result;
  }
  };