var contador=0;
var array=["#draggable1","#draggable2","#draggable3","#draggable4"];
 $(function(){
  $(document).ready(function(){
    $(":reset");

  });

 $("#draggable1").draggable({revert:true,
  revert: function(valid){
    if(!valid){
       document.getElementById('#audio3').play();
        $("#texto").text("HAS FALLADO, PRUEBA DE NUEVO");
        return true;
    }
    else{

      $("#texto").text("MUY BIEN! SIGUE ASI");
    }

  }
});
 $("#draggable2").draggable({revert:true,
  revert: function(valid){
    if(!valid){
       document.getElementById('#audio3').play();
        $("#texto").text("HAS FALLADO, PRUEBA DE NUEVO");
        return true;
    }
    else{

      $("#texto").text("MUY BIEN! SIGUE ASI");
    }

  }});
 $("#draggable3").draggable({revert:true,
  revert: function(valid){
    if(!valid){
       document.getElementById('#audio3').play();
        $("#texto").text("HAS FALLADO, PRUEBA DE NUEVO");
        return true;
    }
    else{

      $("#texto").text("MUY BIEN! SIGUE ASI");
    }

  }});
 $("#draggable4").draggable({revert:true,
  revert: function(valid){
    if(!valid){
       document.getElementById('#audio3').play();
        $("#texto").text("HAS FALLADO, PRUEBA DE NUEVO");
        return true;
    }
    else{

      $("#texto").text("MUY BIEN! SIGUE ASI");
    }

  }});
 aleatorio();

 $("#droppable1").droppable({
  accept:"#draggable1",tolerance:"intersect",
  drop: function (event, ui){
    $("#draggable1").hide();
    $("#droppable1").css("background-color","green");
    document.getElementById('#audio2').play();
    contador++;
    ganador();
    }
  });
  

  $("#droppable2").droppable({
  accept:"#draggable2",tolerance:"intersect",
    drop: function (event, ui){
    $("#draggable2").hide();
    $("#droppable2").css("background-color","#7EB4FC");
    document.getElementById('#audio2').play();
    contador++;
     ganador();
  }

});
   $("#droppable3").droppable({
  accept:"#draggable3",tolerance:"intersect",
    drop: function (event, ui){
    $("#draggable3").hide();
    $("#droppable3").css("background-color","red");
    document.getElementById('#audio2').play();
    contador++;
     ganador();
  }
});
    $("#droppable4").droppable({
  accept:"#draggable4",tolerance:"intersect",
    drop: function (event, ui){
    $("#draggable4").hide();
    $("#droppable4").css("background-color","#428bca");
    document.getElementById('#audio2').play();
    contador++;
    ganador();

  }
});

    $("#boton").click(function(){
      location.reload();

    });



});

 function ganador(){
  if(contador==4){

      $("#texto2").text("HAS GANADO!");
      document.getElementById('#audio1').play();
      }
 }
function aleatorio(){

for(var i=0;i<array.length;i++){
      array[i]="draggable"+i;

    }
  }
