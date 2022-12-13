function circleProgress(){
    $("#skill ul > li").each(function(){
      let percent = Number($(this).children("span").text());
      let tagClicked = $(this);
      let num = 0;
      let timer1 = setInterval(function(){
        if(num < percent){
        num++;
        $(tagClicked).children("span").text(num+"%");
      }else{
        clearInterval(timer1);
      }
      },10);
      $(this).find("svg").css("stroke-dashoffset",314-(314*percent/100));
    });
  }
  function scrollline(class1,class2){
    $(window).scroll(function(){
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop()+(windowHeight/3);
      let pbTop = $(class1).offset().top;
      if(pbTop < scrollTop){
        // $("header ul li").removeClass("on");
        // $(class2).addClass("on");
        $("header ul li").css("text-decoration","none");
        $(class2).css("text-decoration","underline");
      }
    });
  }
  function openSubPb(clickClass,spaceAdd,showClass,clickClass1,list,clickClass2){
    $(clickClass).click(function(e){
      e.preventDefault();
      var pbNumber = $(this).index();

      $(clickClass).removeClass("on");
      $(spaceAdd).addClass("on");
      $(showClass).removeClass("show");
      $(showClass).eq(pbNumber).addClass("show");

      $(clickClass1).click(function(){
        pbNumber++;
        if(pbNumber >= 8){pbNumber = 0;}
        $(list).removeClass("show");
        $(list).eq(pbNumber).addClass("show");
      });
      $(clickClass2).click(function(){
        pbNumber--;
        if(pbNumber <= 0){pbNumber = 7;}
        $(list).removeClass("show");
        $(list).eq(pbNumber).addClass("show");
      });
    });
  }
  function closeSubPb(clickClass,setClass,spaceClass){
    $(clickClass).click(function(){
      $(setClass).removeClass("on");
      $(spaceClass).removeClass("on");
    });
  }
  function underLine(classArea,remClass,adClass){
    $(window).scroll(function(){
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop()+(windowHeight/4);
      let percentTop = $(classArea).offset().top;
      if(percentTop < scrollTop){
        $(remClass).removeClass("on");
        $(adClass).addClass("on");
      }
    });
  }
  function moveSubT(wHeight,moveClass){
    $(window).scroll(function(){
      let windowHeight = $(window).height();
      let scrollTop = $(window).scrollTop()+(windowHeight/2);
      let percentTop = $(wHeight).offset().top;
      if(percentTop < scrollTop){
        $(moveClass).css("transform","translateX(0)").css("opacity","1");
      }
    });
  }