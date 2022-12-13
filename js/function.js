$(document).ready(function(){
  // 로고 누르면 상단으로 가는 기능
  $("header h1").click(function(){
    $(window).scrollTop(0);
  });
  $(".me").click(function(){
    $(window).scrollTop(0);
  });
  //메뉴열고닫기기능
  let hState = false;
  $(".menu").click(function(){
    if(hState == false){
      $("header ul").addClass("on");
      $(".menu").css("color","#fff");
      $(".menu").text("CLOSE");
      hState = true;
    }else if(hState == true){
      $("header ul").removeClass("on");
      $(".menu").css("color","#22618e");
      $(".menu").text("MENU");
      hState = false;
    }
  });
  // 스킬 페이지 원 차오르는 기능
    $(window).scroll(function(){
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop()+(windowHeight/2);
        let percentTop = $("#skill ul").offset().top;
        if(percentTop < scrollTop){
          circleProgress();
          $("#skill span").css("font-size","1rem");
          $("#skill > h2").css("transform","translateX(0)").css("opacity","1");
          $("#skill > p").css("transform","translateX(0)").css("opacity","1");

        }
      });

      // 각 세션 소제목 스크롤에 따른 애니메이션
      moveSubT("#PB","#PB > h2");
      moveSubT("#PB","#PB > p");
      moveSubT("#RD","#RD > h2");
      moveSubT("#RD","#RD > p");
      moveSubT("#app","#app > h2");
      moveSubT("#app","#app > p");
      moveSubT("#contact","#contact > h2");
      moveSubT("#contact","#contact > p");


      // 해당 섹션에 도달하면 해당 메뉴 text-decoration 적용
      underLine("#me","header li","header li:nth-of-type(1)")
      underLine("#skill","header li","header li:nth-of-type(2)")
      underLine("#PB","header li","header li:nth-of-type(3)");
      underLine("#RD","header li","header li:nth-of-type(4)")
      underLine("#app","header li","header li:nth-of-type(5)")
      underLine("#contact","header li","header li:nth-of-type(6)")

      // 메뉴 누르면 text-decoration 위치 바뀌기
      $("header > ul li").click(function(){
        $("header > ul li").removeClass("on");
        $(this).addClass("on");
        $("header ul").removeClass("on");
        $(".menu").css("color","#22618e")
        $(".menu").text("MENU");
      });

      // PB섹션 스크롤 애니메이션
      $(window).scroll(function(){
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop()+(windowHeight/2);
        let percentTop = $("#PB").offset().top;
        if(percentTop < scrollTop){
          $(".aboutPB").css("transform","scale(1)").css("opacity","1");
        }
      });

      // RD섹션 스크롤 애니메이션
      $(window).scroll(function(){
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop()+(windowHeight/2);
        let percentTop = $("#RD").offset().top;
        if(percentTop < scrollTop){
          $(".RDL").css("transform","translateY(0)").css("opacity","1");
          $(".RDR").css("transform","translateY(0)").css("opacity","1");
        }
      });
      // app섹션 스크롤 애니메이션
      $(window).scroll(function(){
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop()+(windowHeight/2);
        let percentTop = $("#app").offset().top;
        if(percentTop < scrollTop){
          $(".appDetail > span:nth-of-type(2)").css("transform","translateX(0)").css("opacity","1");
        }
      });      
      // app 섹션 호버했을때 
      $("#app figure ul li").mouseover(function(){
        $("#app img").css("filter","grayscale(1) blur(4px)");
      });
      $("#app figure ul li").mouseout(function(){
        $("#app img").css("filter","grayscale(0) blur(0)");
      });

      // PB섹션 제목 클릭했을 때 활성화 기능
      $(".aboutPB > dt").click(function(){
        $(".aboutPB > dt").removeClass("on");
        $(".aboutPB > dd").removeClass("on");
        $(this).addClass("on");
        $(this).next().addClass("on");
        let pbClass = $(".aboutPB > dd:nth-of-type(2)")
        if(this == pbClass){
          $(this).css("justify-content","flex-start");
        }
      });
      // PB섹션 아래 이미지 누르면 서브페이지 활성화 기능 &화살표 누르면 이전 혹은 다음 페이지로 이동 기능
      openSubPb(".aboutPB > dd:first-of-type a",".popSpace",".pop > li",".control .next",".pop > li",".control .prev");
      openSubPb(".aboutPB > dd:nth-of-type(2) a",".bannerSpace",".banner > li",".bControl .next",".banner > li",".bControl .prev");

      // PB섹션 서브페이지 활성화 닫기 버튼 기능
      closeSubPb(".popSpace > span",".aboutPB > dd:first-of-type a img",".popSpace");
      closeSubPb(".bannerSpace > span",".aboutPB > dd:nth-of-type(2) a img",".bannerSpace");

      //PB 배너 누르면 높이 조절되기 
      $(window).resize(function(){
        if(window.innerwidth >= 1400){
          $("#PB dt").click(function(){
            let dtNum = $(this).index();
            if(dtNum == 2){
              $("#PB").css("height","100rem");
            }else{
              $("#PB").css("height","90rem");
            }
          });
        }else if(window.innderwidth >= 1399){
          $("#PB").css("height","80rem");
        }
      }).resize();

    //   #contact p:first-of-type:hover{
    //     animation:leftToRight 1s ease infinite reverse;
    // }
    $(window).scroll(function(){
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop()+(windowHeight/2);
      let percentTop = $("#contact").offset().top;
      if(percentTop < scrollTop){
        $(".roundFrame > p:first-of-type").css("animation","leftToRight 1s ease 8 reverse");
      }
    });
    let iW = window.innerWidth
    if(iW <= 479){
      $(".popSpace > span").text("Close");
      $(".bannerSpace > span").text("Close");
    }
  // 어플 팝업창 열기
  $(".appShow").click(function(e){
    e.preventDefault();
    window.open("app_index.html","AONGAPP","top=50, left=50, width=414, height=896");
  });
});
