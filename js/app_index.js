$(document).ready(function(){
  // 앱 메뉴 열고 닫기 기능
  let appStatus = false;
 $(".fa-bars").click(function(e){
    e.preventDefault();
   if(appStatus==false){
     $("header").addClass("on");
     appStatus = true;
   }else{
     $("header").removeClass("on");
     appStatus = false;
   }
 });
 // 필터열고 닫기 기능
  let fillterStatus = false;
 $(".filter li").click(function(e){
    e.preventDefault();
   if(fillterStatus == false){
     $(".filter").addClass("on");
     fillterStatus = true;
   }else{
     $(".filter").removeClass("on");
     fillterStatus = false;
   }
 });
 $("filter li").click(function(){
  $(".filter").removeClass("on");
 });

//  상품리스트 필터 열고 닫기 기능
 let subStatus = false;
 $(".filter").click(function(e){
    e.preventDefault();
   if(subStatus == false){
     $(".filter").addClass("on");
     $(".filter").css("border-radius","10px 10px 0 0");
     subStatus = true;
   }else{
     $(".filter").removeClass("on");
     $(".filter").css("border-radius","10px");
     subStatus = false;
   }
 });
 $("filter").click(function(){
  $(".filter").removeClass("on");
 });
// 북마크 체크 기능
 let bookmarkStatus = false;
 $(".fa-bookmark").click(function(){
    if(bookmarkStatus == false){
      $(this).css("color","#7c7c67");
      bookmarkStatus = true;
    }else{
      $(this).css("color","#c2cb80");
      bookmarkStatus = false;
    }
 });
 $(".filter ul li").click(function(){
    $(".filter ul li").removeClass("on");
    $(this).addClass("on");
 });
 $(".fillter ul ul li p").click(function(){
   $(this).addClass("on");
 });
 $(".fa-arrow-rotate-left").click(function(){
   $(".fillter ul ul li p").removeClass("on");
 });
 $("header").click(function(){
   $(".fillter ul ul").removeClass("on");
   $(".align1").removeClass("on");
   $(".align").removeClass("on");
 });
 $(".align > ul > li").click(function(){
   $(".align1").addClass("on");
   $(".align").addClass("on");
 });
 let liststatus = false;
 $(".mypagelist ul li").click(function(){
   if(liststatus == false){
     $(this).children().addClass("on");
     liststatus = true;
   }else{
     $(".mypagelist ul li").removeClass("on");
     $(this).children().removeClass("on");
     liststatus = false;
   }
 });
 let dstatus = false;
 $(".mypagelist ul li ul li").click(function(){
   if(dstatus ==false){
     $(this).children().addClass("on");
     dstatus = true;
   }else{
     $(this).children().removeClass("on");
     dstatus = false;
   }
 });
 let appstatus = false;
 $(".check").click(function(){
   if(appstatus == false){
     $(".checklist").addClass("on");
     appstatus = true;
   }else{
     $(".checklist").removeClass("on");
     appstatus = false;
   }
});
});
