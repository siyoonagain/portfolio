//스크롤이벤트 - 이미지와 텍스트에 애니메이션 효과 주기
function scrollEffec(){
    document.addEventListener('scroll',function() {
        const imgs = document.querySelectorAll(".contents > img");
        const txts = document.querySelectorAll(".txt");
        const contentTop = document.querySelectorAll(".contents");
        const firstTop = contentTop[0].offsetTop/2;
        const secondTop = contentTop[1].offsetTop/1.1;

        if(firstTop < window.scrollY){
            imgs[0].classList.add("on");
            txts[0].style.animation = "asideOn 1s ease-out forwards";
        }else{
            txts[0].style.animation = "asideOff 1s ease-out forwards";
        }
        if(secondTop < window.scrollY){
            imgs[1].classList.add("on");
            txts[1].style.animation = "asideOn 1s ease-out forwards";
        }else{
            txts[1].style.animation = "asideOff 1s ease-out forwards";
        };
    });
}
scrollEffec();

function stopClick(e){ 
    e.preventDefault();
};

//로고 클릭하면 맨 상단으로 이동하기
function moveTop(){
    window.scrollTo({top:0,left:0,behavior:'smooth'});
}

