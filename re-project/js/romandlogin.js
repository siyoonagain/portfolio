$(document).ready(function(){
  $(".contentLogin").css("opacity","1");
  $(".contentLogin").css("height","80vh");
  menu(".menu > a","nav");
  $("dt").click(function(){
    $("dt").next().removeClass("on");
    $(this).next().addClass("on");
  });
});
