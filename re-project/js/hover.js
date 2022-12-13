// 
function hover1(classname1){
  $(classname1).hover(function(){
    $(this).addClass("on");
  },function(){
    $(classname1).removeClass("on");
  });
}
function menu(classnameA,classname){
  let status = false;
  $(classnameA).click(function(){
    if(status == false){
      $(classname).addClass("on");
      status = true;
    }else{
      $(classname).removeClass("on");
      status =false;
    }
  });
}
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
