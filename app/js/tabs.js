document.addEventListener('DOMContentLoaded', function () {

    (function($) {
        $('.tabcontent').each(function (i) {
            if (i != 0) {
                $(this).hide(0)
            }
        });

        $(document).on('click', '.tablinks a', function () {
            var itemId = $(this).attr('href');
            var activeTab = $(itemId);
            console.log(itemId)
            $('.tabcontent').hide();
            activeTab.show();
            $('.tablinks a').removeClass('active');
            $(this).addClass('active');
        });
    })(jQuery)

});


