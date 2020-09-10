(function ($) {


    $('.depth1 > li').hover(
        function () {
            $(this).find('.depth2')
                .stop().slideDown(700)
        },
        function () {
            $(this).find('.depth2')
                .stop().slideUp(500)
        }
    )


    $('#kimBox').load('main.html')

    $('.topmenu > a:nth-of-type(2)').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#kimBox').load(url)
    })


})(jQuery)