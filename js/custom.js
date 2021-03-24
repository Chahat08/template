// navbar colour on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

