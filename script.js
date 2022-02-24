$(document).ready(function () {
    $("#guess").click(function (e) { 
        e.preventDefault();
        var num=$("#num").val();
    if(num==0 || num==""){
        alert("Please Enter Number..");
    }
    else{
    
    var rd=Math.floor(Math.random() * 3);
    console.log(rd);
   
    if(rd==num){
        // document.getElementById('rs').innerHTML="You Guess Correct";
        $("#rs").html("You Guess Correct");
    }
    else{
        // document.getElementById('rs').innerHTML="Ohh You Lose the Game!";
        $("#rs").html("Ohh You Lose the Game!");


    }
}
    });
});

