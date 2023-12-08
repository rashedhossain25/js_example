//js

//text change
function animal() {

    document.getElementById('kala').innerHTML="Alhamdullih";
}

function keyBord() {

    document.getElementById('key').innerHTML="Dhaka";
}

function allOver(){

    document.getElementsByClassName('clasic')[2].innerHTML="Bangladesh";
}

//show date

function showDate(){
    
    document.getElementById('sp').innerHTML=Date();
}


//bulb on/off

function bulbOn(){

    document.getElementById('img').src="images/on.gif";
}


function bulbOff(){

    document.getElementById('img').src="images/off.gif";
}
//change imoji

function sad(){
    
     document.getElementById('imj').src="images/sad.gif";
}

function happy(){
    
     document.getElementById('imj').src="images/happy.gif";
}
//border show

function showBorder(){

    document.getElementById('sb').style.border="2px solid black";
}
//font change
function fontChange(){

    document.getElementById('fc').style.fontSize="35px"
}

//text show/hide

function showText(){
    document.getElementById('sht').style.display="block";
}


function hideText(){;

    document.getElementById('sht').style.display="none";
}


// variable start //

//show result

var number1 = 6;
var number2 = 6;

var result = number1 + number2


function showResult(){

    document.getElementById('result').innerHTML=result;
} 


// use let variable

let number5, number6, total;

 number5 = 6;
 number6 = 9;

 total = number5 + number6


function openTotal(){

    document.getElementById('ttp').innerHTML=total;
} 

//tag selector use

function cName(){

    var data = document.getElementsByTagName('h3');
    alert(data.length);
}






//jq

$(document).ready(function(){

    //show alert messege
    $('#t_p').on('click', function(){

        alert("Good morning");

    });

    //show/hide text
    $('#hide').on( 'click', function(){

        $('#sh_h3').hide();

    });

    $('#show').on( 'click', function(){

    $('#sh_h3').show();

    });
    $('#togg').on( 'click', function(){

    $('#sh_h3').toggle(300);

    });
        //fade out,fade in,fade toggle
    $('#out').on( 'click', function(){

        $('#f_all').fadeOut();
    });
    $('#in').on( 'click', function(){

        $('#f_all').fadeIn();
    });
    $('#toggl').on( 'click', function(){

        $('#f_all').fadeToggle(300);
    });
    

    //slide up slide down

    $('.btn').on( 'click', function(){

        $('#pp1').slideUp(2000).slideDown(2000);
    });








})
