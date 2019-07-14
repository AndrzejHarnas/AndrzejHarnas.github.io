document.addEventListener("DOMContentLoaded", function(event) {

    console.log("DOM został wczytany");
    console.log("Tutaj dopiero wyłapujemy elementy");

});


var buttons = document.querySelectorAll("button");
var inputs = document.querySelectorAll("input");
var lev=0;
var i = 0;
var miss = 0;
var point = 0;
var turn = 0;
var oldTurn = 0;


function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );

     if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }

     return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function level(speed) {

     lev+=1;
     setTimeout(randImage, speed);
}

function counter(m){
  if(turn!==0 && turn!==oldTurn){
      if(buttons[m].value==="0"){
        miss +=1;
        inputs[1].value = miss;
      console.log("miss="+miss);
      } else {
        point +=1;
        console.log("points="+point);
        inputs[0].value =""+point+"/50";
        turn=oldTurn;
      }
    }
}

function randImage(){

  buttons[0].disabled=true;
  buttons[0].style.backgroundColor="#8AA29E";
  var x = rand(2,46);
  for(var k =2; k<=46; k++){
    buttons[k].style.backgroundImage ="url('header.png')";
    buttons[k].value = "0";
  }
  buttons[x].style.backgroundImage ="url('straznik.png')";
  buttons[x].value = "1";
 i++;
 if(i<6){
   speed = 5000;
   level(speed);
 }

 if(i>5 && i<11){
   speed = 3000;
   level(speed);
 }

 if(i>10 && i<16){
   speed = 1000;
   level(speed);
 }

 if(i>15 && i<21){
   speed = 900;
   level(speed);
 }

 if(i>20 && i<26){
   speed = 900;
   level(speed);
 }

 if(i>25 && i<31){
   speed = 800;
   level(speed);
 }

 if(i>30 && i<36){
   speed = 800;
   level(speed);
 }

 if(i>35 && i<41){
   speed = 700;
   level(speed);
 }

 if(i>40 && i<46){
   speed = 700;
   level(speed);
 }

 if(i>45 && i <51){
   speed = 600;
   level(speed);
 }

turn=i;
}

for(var k =2; k<=46; k++){
  buttons[k].style.backgroundImage ="url('header.png')";
  buttons[k].value = "0";
}

buttons[0].addEventListener("click", randImage);
buttons[1].addEventListener("click", function() {  location.reload();})

      buttons[2].addEventListener("click", function(){counter(2);});
      buttons[3].addEventListener("click", function(){counter(3);});
      buttons[4].addEventListener("click", function(){counter(4);});
      buttons[5].addEventListener("click", function(){counter(5);});
      buttons[6].addEventListener("click", function(){counter(6);});
      buttons[7].addEventListener("click", function(){counter(7);});
      buttons[8].addEventListener("click", function(){counter(8);});
      buttons[9].addEventListener("click", function(){counter(9);});
      buttons[10].addEventListener("click", function(){counter(10);});
      buttons[11].addEventListener("click", function(){counter(11);});
      buttons[12].addEventListener("click", function(){counter(12);});
      buttons[13].addEventListener("click", function(){counter(13);});
      buttons[14].addEventListener("click", function(){counter(14);});
      buttons[15].addEventListener("click", function(){counter(15);});
      buttons[16].addEventListener("click", function(){counter(16);});
      buttons[17].addEventListener("click", function(){counter(17);});
      buttons[18].addEventListener("click", function(){counter(18);});
      buttons[19].addEventListener("click", function(){counter(19);});
      buttons[20].addEventListener("click", function(){counter(20);});
      buttons[21].addEventListener("click", function(){counter(21);});
      buttons[22].addEventListener("click", function(){counter(22);});
      buttons[23].addEventListener("click", function(){counter(23);});
      buttons[24].addEventListener("click", function(){counter(24);});
      buttons[25].addEventListener("click", function(){counter(25);});
      buttons[26].addEventListener("click", function(){counter(26);});
      buttons[27].addEventListener("click", function(){counter(27);});
      buttons[28].addEventListener("click", function(){counter(28);});
      buttons[29].addEventListener("click", function(){counter(29);});
      buttons[30].addEventListener("click", function(){counter(30);});
      buttons[31].addEventListener("click", function(){counter(31);});
      buttons[32].addEventListener("click", function(){counter(32);});
      buttons[33].addEventListener("click", function(){counter(33);});
      buttons[34].addEventListener("click", function(){counter(34);});
      buttons[35].addEventListener("click", function(){counter(35);});
      buttons[36].addEventListener("click", function(){counter(36);});
      buttons[37].addEventListener("click", function(){counter(37);});
      buttons[38].addEventListener("click", function(){counter(38);});
      buttons[39].addEventListener("click", function(){counter(39);});
      buttons[40].addEventListener("click", function(){counter(40);});
      buttons[41].addEventListener("click", function(){counter(41);});
      buttons[42].addEventListener("click", function(){counter(42);});
      buttons[43].addEventListener("click", function(){counter(43);});
      buttons[44].addEventListener("click", function(){counter(44);});
      buttons[45].addEventListener("click", function(){counter(45);});
      buttons[46].addEventListener("click", function(){counter(46);});
