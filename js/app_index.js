$(document).ready(function(){
  // 메뉴바
  let status = false;
 $(".fa-bars").click(function(){
   if(status==false){
     $("header").addClass("on");
     status = true;
   }else{
     $("header").removeClass("on");
     status = false;
   }
 });
 // 메인 필터
  let status1 = false;
 $(".filter li").click(function(){
   if(status1 == false){
     $(".conTop ul").addClass("on");
     status1 = true;
   }else{
     $(".conTop ul").removeClass("on");
     status1 = false;
   }
 });
 // 서브 리스트 필터
 let status2 = false;
 $(".fillter ul").click(function(){
   if(status2 == false){
     $(".fillter ul ul").addClass("on");
     status2 = true;
   }else{
     $(".fillter ul ul").removeClass("on");
     status2 = false;
   }
 });
 $(".done").click(function(){
   $(".fillter ul ul li p").removeClass("on");
   if(status2 == true){
     $(".fillter ul ul").removeClass("on");
     status2 = false;
   }
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
