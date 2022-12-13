$(document).ready(function(){
  menu(".menu > a","nav");
  hover1(".contentsBsBox li");
  hover1(".catagory li");
  scroll(".fB");
  scroll(".project > div");
  scroll(".contentsBs h2");
  scroll(".catagory");
  scroll(".contentsAboutRom h2,p,span");
  scroll(".contentsAboutRom");
  $("header h1").click(function(){
    $(window).scrollTop(0);
  });
  // 슬라이드 기능
  let count = 0;
  $(".next").click(function(e){
    e.preventDefault();
    count++;
    if(count >= 3){count=0;}
    $(".slider > li").removeClass("on");
    $(".slider > li").eq(count).addClass("on");
    $(".bRound li").removeClass("on");
    $(".bRound li").eq(count).addClass("on");
  });
  // 배너 밑 버튼 누르면 이동
  $(".bRound li").click(function(e){
    e.preventDefault();
    let count1 =  $(this).index();
    $(".slider > li").removeClass("on");
    $(".slider > li").eq(count1).addClass("on");
    $(".bRound li").removeClass("on");
    $(".bRound li").eq(count1).addClass("on");
  });
  $(".prev").click(function(e){
    e.preventDefault();
    count--;
    if(count < 0){count=2;}
    $(".slider > li").removeClass("on");
    $(".slider > li").eq(count).addClass("on");
    //네비게이션이 활성화되는 부분
    $(".bRound li").removeClass("on");
    $(".bRound li").eq(count).addClass("on");
  });
  let timer1 = setInterval(function(){
    count++;
    //슬라이드가 이동하는 부분
    if(count >= 3){count=0;}
    $(".slider li").removeClass("on")
    $(".slider li").eq(count).addClass("on")
    //네비게이션이 활성화되는 부분
    $(".bRound >li").removeClass("on");
    $(".bRound >li").eq(count).addClass("on");
  },3000);
  // 스크롤
  $(window).scroll(function(){
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop()+(windowHeight/2);
    let percentTop = $(".contentsBs").offset().top;
    if(percentTop < scrollTop){
      $(".contentsBs").css("animation","show 1s ease forwards");
    }
  });
  $(window).scroll(function(){
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop()+(windowHeight/2);
    let percentTop = $(".project").offset().top;
    if(percentTop < scrollTop){
      $(".project p").css("animation","moveUp 1.3s ease forwards");
    }
  });
  $(".projectRound a").mouseover(function(){
    $(this).css("animation","none");
  });
  $(".projectRound a").mouseout(function(){
    $(this).css("animation","moveAround 5s linear infinite");
  });
  $(window).scroll(function(){
    let windowHeight = $(window).height();
    let scrollTop = $(window).scrollTop()+(windowHeight/2);
    let percentTop = $(".ego").offset().top;
    if(percentTop < scrollTop){
      $(".ego p").css("animation","moveUp 1s ease forwards");
    }
  });
  // 클릭막기
  $(".contentsBsBox li").click(function(e){
    e.preventDefault();
  });
  $(".project a").click(function(e){
    e.preventDefault();
  });
});
