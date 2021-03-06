function contar() {

    var txtstart = document.getElementById('inicio')
    var txtend = document.getElementById('fim')
    var txtstep = document.getElementById('passo')
    var resul = document.getElementById('result')

   var start = Number(txtstart.value)
   var  end = Number(txtend.value)
   var  step = Number(txtstep.value)
  
if (end == 0 || step == 0 || start == 0)   {

    window.alert('Erro, Digite Novamente!!')

} else {

 if (start < end) {
     //contagem crescente
     
for (let cont = start; cont <= end; cont += step ) {


    if ( cont % 2 == 0) {
    // numero par    
    resul.innerHTML += `<mark>${cont}</mark> &#x1F525 `
   
}else {
        
    resul.innerHTML += `${cont} &#x1F525 ` 

        
    }
    
}
resul.innerHTML += `&#x2728`
}else {
    for(var  cont = start; cont >=end; cont -= step) {
//contagem regressiva
        if ( cont % 2 == 0) {
        // numero par 
            resul.innerHTML += `<mark>${cont}</mark> &#x1F525 `
           
        }else {

        resul.innerHTML += `${cont} &#x1F525 `
    
                  }    
                 
                } 
                resul.innerHTML += `&#x2728`        
        }    
}

}
    


function limpar () {

    var txtstart = document.getElementById('inicio')
    var txtend = document.getElementById('fim')
    var txtstep = document.getElementById('passo')
    var resul = document.getElementById('result')

    txtstart.value=""
    txtend.value=""
    txtstep.value=""
    resul.innerHTML = ` `

}