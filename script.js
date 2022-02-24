$(document).ready(function () {
    $("#gen").click(function (e) { 
        e.preventDefault();
        var ch=$('#txt').val();
        
    if(ch==""){
        alert("Required Feild");
        $("#txt").css("borderColor","red");
    }
    else{
        var ascii=ch.charCodeAt(0);
        // document.getElementById('rs').innerHTML="ch==>"+ascii;
        $("#rs").html("ASCII Code: "+ascii);
    }
    });
});