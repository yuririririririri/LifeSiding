$(function () {
    $(".toggle-btn , nav a").on("click", function () {
        $("header").toggleClass("open");
    });
});

// クリックイベント（ボタンがクリックされた際に実行）
pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
});

$(window).scroll(function () {
    $(".slide").each(function () {

        var scroll = $(window).scrollTop();

        var target = $(this).offset().top;

        var windowHeight = $(window).height();

        if (scroll > target - windowHeight + $(this).outerHeight()) {
            // outerHeight()はpaddingを含めた高さを取得する
            $(this).addClass("slideAnime");
        }
    });
});

