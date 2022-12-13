$(document).ready(function(){
  $(".wrap").css("opacity","1");
  menu(".menu > a","nav");
  hover1(".product figure");
  scroll(".fB");
  $(window).scroll(function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop < 200){
      $(".subCategory li").css("transform","translateY(0px)");
    }else if(scrollTop < 600){
      $(".subCategory li").css("transform","translateY(600px)");
    }else if(scrollTop < 1301){
      $(".subCategory li").css("transform","translateY(1220px)");
    }else if(scrollTop < 2200){
      $(".subCategory li").css("transform","translateY(1840px)");
    }else{
      $(".subCategory li").css("transform","translateY(0px)");
    }
    // header on
    if(scrollTop >=200){
      $("header").addClass("on");
    }else{
      $("header").removeClass("on");
    }
  });
});
