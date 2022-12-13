function scroll(classname){
  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height()/2;
    $(classname).each(function(){
      if(scrollTop+windowHeight > $(classname).offset().top){
        $(this).addClass("on");
      }else{
        $(this).removeClass("on");
      }
    });
  });
}
