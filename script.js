let clicked = 0;
let clicked_2 = 0;
$(document).ready(function(){
    $("#show_hide").click(function(){
      $("#hidden_1").animate({height: "toggle"}, 1000);
      clicked++;
      if (clicked % 2 === 1)
        {
            $("#show_hide").html("<b>Kevesebb</b>");
        }
        else
        {
            $("#show_hide").html("<b>Tovább</b>");
        }
    });

    $("#show_hide_2").click(function(){
        $("#hidden_2").animate({height: "toggle"}, 1000);
        clicked_2++;
        if (clicked_2 % 2 === 1)
          {
              $("#show_hide_2").html("<b>Kevesebb</b>");
          }
          else
          {
              $("#show_hide_2").html("<b>Tovább</b>");
          }
      });

});

