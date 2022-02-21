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


$(".koreaculture").click(function(){
    window.open("https://rkqdldyd.cafe24.com/01/%EC%9C%A0%EC%98%81%EC%83%81_%EC%8A%A4%EB%A7%88%ED%8A%B8%EB%AC%B8%ED%99%94%EC%95%B1UX%EC%84%A4%EA%B3%84/index.html", "", "resizable=no, toolbar=no, width=400 , height=1000");
});





