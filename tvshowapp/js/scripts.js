(function($) {
    $(function() {
        $('.picbox').on('click', function(e) {
        	toPopup = this.id + '-pop';
            e.preventDefault();
            $('#' + toPopup).bPopup();
        });
    });
})(jQuery);

(function($) {
    $(function() {
        $('.close-button').on('click', function(e) {
        	toClose = this.parentNode.id;
            e.preventDefault();
            $('#' + toClose).bPopup().close();
        });
    });
})(jQuery);