function menu(classnameA,classname){
  let status = false;
  $(classnameA).click(function(e){
    e.preventDefault();
    if(status == false){
      $(classname).addClass("on");
      status = true;
    }else{
      $(classname).removeClass("on");
      status =false;
    }
  });
}
