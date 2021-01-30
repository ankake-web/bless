jQuery(function ($) {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

        //スクロールしてトップ
        // topBtn.click(function () {
            // $('body,html').animate({
                // scrollTop: 0
            // }, 500);
            // return false;
        // });

});


  $(function() {
    $('a[href^="#"]').click(function() {
       var speed = 400;
       var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
       var position = target.offset().top;
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });

 $(function () {
    var $body = $('body');
    
    //開閉用ボタンをクリックでクラスの切替え
    $('.js__btn').on('click', function () {
        $body.toggleClass('open');
       
    });
    

    //メニュー名以外の部分をクリックで閉じる
    $('#js__nav').on('click', function () {
        $body.removeClass('open');
    });
});


$('form').validate({
    rules: {
        mytext: { required: true }
    }
  });