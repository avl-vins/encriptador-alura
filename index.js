
const getText = document.querySelector('textarea');
const botones=document.querySelector('.btn')
const btnEncriptar =botones.childNodes[1]
const btnDesencriptar =botones.childNodes[3]
const btnCopiar = document.querySelector('.texto-desencriptado button')
const mostrarImagen=document.querySelector('.mensaje-usuario')
const mostrarMensaje=document.querySelector('.texto-desencriptado')

// let textoAdesencriptar=''
// let textoDesencriptado='' 

let encriptar = (texto)=>{
    let frase=''
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i)
         switch (letra) {
                case 'a':letra='ai';break;
                case 'e':letra='enter';;break;
                case 'i':letra='imes';break;
                case 'o':letra='ober';break;
                case 'u':letra='ufat';break;
            default:
                break;
         }
         frase=frase+letra
    }
 return frase
}
let desencriptar = (texto)=>{
    let desencritado=texto.replaceAll('ai','a')
      desencritado=desencritado.replaceAll('enter','e')
      desencritado=desencritado.replaceAll('imes','i')
      desencritado=desencritado.replaceAll('ober','o')
      desencritado=desencritado.replaceAll('ufat','u')
      return desencritado
}
let insertarTexto=(texto)=>{
    mostrarMensaje.childNodes[1].textContent=texto
   
}
btnEncriptar.addEventListener('click',()=>{
    if(getText.value!=''){
        // textoAdesencriptar=encriptar(getText.value) 
        mostrarImagen.style.display='none'
        mostrarMensaje.style.display='inline-block'
        insertarTexto(encriptar(getText.value))
    }else{
        alert('Ingrese texto para encriptar')
    }
})
btnDesencriptar.addEventListener('click',()=>{
    if( getText.value!=''){
        // textoDesencriptado=desencriptar(textoAdesencriptar);
        mostrarImagen.style.display='none'
        mostrarMensaje.style.display='inline-block'
        insertarTexto(desencriptar(getText.value))
    }
        else{
       alert('No hay texto para desencriptar')
    }
    
})




