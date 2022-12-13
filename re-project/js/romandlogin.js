$(document).ready(function(){
  $(".contentLogin").css("opacity","1");
  $(".contentLogin").css("height","800px");
  menu(".menu > a","nav");
  $("dt").click(function(){
    $("dt").next().removeClass("on");
    $(this).next().addClass("on");
  });
});
