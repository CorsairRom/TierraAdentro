$(document).ready(function () {
    $("#elimProd1").click(function(){
        $("#trprod1").remove();
      });
    $("#elimProd2").click(function(){
        $("#trprod2").remove();
      });
    $("#elimProd3").click(function(){
        $("#trprod3").remove();
      });
    
    $("#eliminar1").click(function(){
    $("#trp1").remove();
    });
    $("#eliminar2").click(function(){
        $("#trp2").remove();
    });
    $("#eliminar3").click(function(){
        $("#trp3").remove();
    });
    
      //input
    $("#trp5").hide();
    $("#trp4").hide();
    $("#agregarUsr").click(function(){
        $("#trp5").show();
    });

    $("#eliminar5").click(function(){
        $("#trp5").hide();
    });
    $("#success1").click(function(){
        $("#agr1").text($("#in1").val());
        $("#agr2").text($("#in2").val());
        
        $("#trp4").show();
        $("#trp5").hide();
    });
    $("#eliminar4").click(function(){
        $("#trp4").remove();
    });
    $("#modificar1").click(function(){
      $("#11").text();  
        let inp1 = $("<input>").text("").attr("id", "in11");
        let inp2 = $("<input>").text("").attr("id", "in22");
        $( "#nom1" ).empty();
        $( "#date1" ).empty();
        $("#nom1").append(inp1);
        $("#date1").append(inp2);
        $("#agr1").text($("#in11").val());
        
    });
});

// let nom1 = $("#nom1").text();
// let dat1 = $("#date1").text();
// let inp1 = $("<input>").text(nom1);
// let inp2 = $("<input>").text(dat1);
// $("#nom1").append(inp1);
// $("#date1").append(dat1);