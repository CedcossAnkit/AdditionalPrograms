console.log("working");

$(document).ready(function () {
    $("#changeBG").click(function () { 
        var a=$('#inp').val();
        console.log("helo");
        if(a==""){
            alert('Please Enter Color Name');
        }
        else{
            var color=['ForestGreen','Salmon','HotPink','Tomato','Lavender'];
        
            var rd=Math.floor(Math.random() * 4);
            console.log(rd);
            console.log(color[rd]);
            
            var b=a.toLowerCase();
            // document.getElementById('bdy').style.transitionDuration='2s';
            $('#bdy').css("transitionDuration","2s");
            // document.getElementById('continer').style.transitionDuration='2s';
            $('#continer').css("transitionDuration","2s");
            // document.getElementById('bdy').style.backgroundColor=b;
            $('#bdy').css("backgroundColor",b);
            // document.getElementById('continer').style.backgroundColor=color[rd];
            $('#continer').css("backgroundColor",color[rd]);
            // document.getElementById('clr').style.color='white'
            $('#clr').css("color","white");
        }
    });
    
});

