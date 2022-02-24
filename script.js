$(document).ready(function () {
    $("#bt").click(function (e) { 
        e.preventDefault();
        console.log('Clicked');
        var len=$("#txt").val();
        var htm="";
        for(var i=0;i<len;i++){
            htm+="<div class='box'><p style='text-align:center'>"+i+"</p></div><br>"
        }
        $("#boxes").html(htm);
    });
});

