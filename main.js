$(document).ready(function() {
 
  var count1 = parseInt($(".change").text());
  var breakcount1 = parseInt($(".bv").text());
  var breaktime;
  var start;
  $(".start").click(function() {
    $(".stop").fadeIn(10);
    $("button")
      .not(".stop")
      .hide(10);
    $(".break").html(breakcount1);
   
    var hours  = (count1/60).toFixed(0);
    var minute = count1%60-1;
   var hours2  = (breakcount1/60).toFixed(0);
    var minute2= breakcount1%60-1;
     var counter= (hours*60*60+(count1%60)*60);
     var counter2= (hours2*60*60+( breakcount1%60)*60);
    console.log(counter);
    $(".change").html(count1);
    start = setInterval(timer, 1000);
    var second = 60;
    var second2 = 60;
    function timer() {
      counter = counter-1;
      second=second-1;
      if (minute <0){
        hours = hours -1;
        minute= 59;
      }
      if(second<0){
        minute = minute-1;
        second = 59;
      }
      
      $(".change").html(hours +":" +minute+ ":" + second);
      if (counter< 0) {
        
       
        $(".change").html(0+":"+0 + ":" + 0);
       
     
        clearInterval(start);
         
        var wav = 'http://www.codingtutorials360.com/14244764.mp3';
      var audio = new Audio(wav);
			audio.play();
        $("#brdiv").fadeIn(10);
        $("#sediv").hide(10);
        $(".change").html(count1);
       
        breaktime = setInterval(breaktimer, 1000);
        var breakcount = breakcount1;
        function breaktimer() {
          counter2--;
          second2 = second2 - 1;
           if (minute2 <0){
        hours2 = hours2 -1;
        minute2= 59;
      }
      if(second2<0){
        minute2= minute2-1;
        second2 = 59;
      }
     
          
          $(".break").html(hours2+":"+minute2 + ":" + second2);
          if (counter2 < 0) {
            $(".break").html(0+":"+ 0 + ":" + 0);
            clearInterval(breaktime);
            breakcount = breakcount1;
            $("#sediv").fadeIn(10);
            $("#brdiv").fadeOut(10);
            $("button")
              .not(".stop")
              .fadeIn(10);
            $(".stop").fadeOut(10);
          }
        }
      }
    }
    $(".stop").click(function() {
      clearInterval(breaktime);
      clearInterval(start);
      $(".stop").fadeOut(10);
      $(".break").html(breakcount1);
      $(".change").html(count1);
       $("#sediv").fadeIn(10);
            $("#brdiv").fadeOut(10);
      $("button")
        .not(".stop")
        .fadeIn(10);
      
      $(".break").html(breakcount1);
      $(".change").html(count1);
    });
  });

  $(".btn3").click(function() {
    count1++;
    $(".change").html(count1);
    $(".sv").html(count1);
  });
  $(".btn4").click(function() {
    if (count1 > 0) {
      count1--;
      $(".change").html(count1);
      $(".sv").html(count1);
    }
  });
  $(".btn1").click(function() {
    breakcount1++;
    $(".break").html(breakcount1);
    $(".bv").html(breakcount1);
  });
  $(".btn2").click(function() {
    if (breakcount1 > 0) {
      breakcount1--;
      $(".break").html(breakcount1);
      $(".bv").html(breakcount1);
    }
  });
});
