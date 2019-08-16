// This is a JavaScript file
function retorno(){

}

function retorno2(buttonIndex) {
    if(buttonIndex == 1){
      navigator.notification.alert("Sim");
      navigator.notification.beep(1);
    }else{
       navigator.notification.alert("Não");
       navigator.notification.beep(2);
    }
    
}

$(document).on("click","#alerta",function(){
    //navigator.notification.alert("Olá Mundo - Primeiro App!",retorno,"Aviso!","ok!");
    //navigator.notification.beep(2);
    
    navigator.notification.confirm("Escolha uma opção!",retorno2,"Titulo",['Sim','Não']);
});

cordova.plugins.barcodeScanner.scan(
       função ( resultado ) {
           alert ( " Recebemos um código de barras \ n "  + 
                " Resultado: "  +  resultado . texto  +  " \ n "  + 
                " Formato: "  +  resultado . format  +  " \ n "  + 
                " Cancelado: "  +  resultado . cancelado );
      }
      function ( error ) {
           alert ( " Falha na digitalização: "  + erro);
      }
      {
          preferFrontCamera :  true , // iOS e Android 
          showFlipCameraButton :  true , // iOS e Android 
          showTorchButton :  true , // iOS e Android 
          torchOn :  true , // Android, iniciar com a tocha ativada (se disponível) 
          saveHistory :  true , / / Android, salvar 
          prompt do histórico de varredura (padrão falso) :  " Colocar um código de barras dentro da área de varredura " ,// Android 
          resultDisplayDuration :  500 , // Android, exibe o texto digitalizado por X ms. 0 suprime totalmente, o padrão 1500 
          formatos :  " QR_CODE, PDF_417 " , / / padrão: todos, mas PDF_417 e 
          orientação RSS_EXPANDED :  " paisagem " , / / Android apenas (retrato | paisagem), padrão unset por isso gira com o dispositivo 
          disableAnimations :  verdade , // iOS 
          disableSuccessBeep :  falso  // iOS e Android
      }
   );

