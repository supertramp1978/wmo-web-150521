
// =============================================
//    DOM contentLoaded
// ============================================= 
const bgiAppear = function () {
    const bgc = document.querySelector('.fadeIn');
    bgc.style.opacity = '1';
}

// document.addEventListener('DOMContentLoaded', charAnimation());
document.addEventListener('load', bgiAppear());


// =============================================
//     ページ内スクロール
// ============================================= 

$(function () {
    $('nav a').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({ 'scrollTop': position }, 500)
    })
});



// =============================================
//     スクロール検知 Works
// ============================================= 

// 監視対象とするHTML要素を取得
const child1 = document.querySelector(".child1");
const child2 = document.querySelector(".child2");
const child3 = document.querySelector(".child3");
const child4 = document.querySelector(".child4");
const child5 = document.querySelector(".child5");
const child6 = document.querySelector(".child6");
const child7 = document.querySelector(".child7");
const child8 = document.querySelector(".child8");
const child9 = document.querySelector(".child9");
const child10 = document.querySelector(".child10");


const cb = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('inview');
        };
    });


}



// IntersectionObserverをインスタンス化して定数ioに代入
const io = new IntersectionObserver(cb);

// 監視対象となるDOMを登録
io.observe(child1);
io.observe(child2);
io.observe(child3);
io.observe(child4);
io.observe(child5);
io.observe(child6);
io.observe(child7);
io.observe(child8);
io.observe(child9);
io.observe(child10);
