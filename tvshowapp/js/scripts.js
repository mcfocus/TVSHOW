    ;(function($) {
        $(function() {
            $('.picbox').on('click', function(e) {
                e.preventDefault();
                $('#' + this.id + '-pop').bPopup();
            });
        });
    })(jQuery);

    