var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
    sectionsColor: ['#efefef', '#efefef', '#fff','#fff','#fff','#fff'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    responsiveHeight:350,  //세로 높이가 350px보다 작아졌을때는 오토스크롤링 작동X
    scrollBar:true, 
    // navigation:true  //오른쪽 페이지 버튼
    normalScrollElements: '#s4',    //오토스크롤이 아니라 정상 스크롤이 적용

    navigation:true,
    navigationTooltips: ['HOME', 'ABOUT', 'SKILLS', 'WEB', 'DEISIGN', 'CONTACT'],
    showActiveTooltip: true,


});




document.querySelector('.nextS').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});
document.querySelector('.prevS').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});


new WOW().init();







// var myScroll = new IScroll('.total_menu');
myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    scrollbars: true
});



function winOpen(){
    window.open('https://rys6077.github.io/korea/','popup','width=412, height=915,resizable=no ')
}


//이미지 팝업(라이트 박스)
lightbox.option();







