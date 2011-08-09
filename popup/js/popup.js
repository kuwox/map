function cerrar() {  
   $("#pop").fadeOut('slow');  
} //checkHover 
$(document).ready(function (){ 
   //Conseguir valores de la img  
   var img_w = $("#pop img").width(338) + 10;  
   var img_h = $("#pop img").height(205) + 28;  
     
   //Darle el alto y ancho  
   $("#pop").css('width', img_w + 'px');  
   $("#pop").css('height', img_h + 'px');  
 
    //Consigue valores de la ventana del navegador  
   var w = $(this).width(338);  
   var h = $(this).height(205);  
     
   //Centra el popup     
   w = (w/2) - (img_w/2);  
   h = (h/2) - (img_h/2);  
   $("#pop").css("left",w + "px");  
   $("#pop").css("top",h + "px"); 
   //temporizador, para que no aparezca de golpe  
   setTimeout("cerrar()",25800); 
   //Función para cerrar el popup  
   $("#pop").click(function (){  
      $(this).fadeOut('slow');  
      
   }); 
     })