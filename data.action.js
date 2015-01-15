//when clicked, div elements that have the attribute
//data-action will redirect to that url (useful for
//treating div elements like action buttons)
$(function () {
    $.extend({
        bindAction: function() {
            $('div[data-action]').each(function() {
                $(this).unbind('click');
                $(this).click(function() {
                    var url = $(this).attr('data-action');
                    
                    //if there is an attribute data-action-callback, assumes it
                    //contains the name of a function that will be called to
                    //decide whether to redirect
                    var callback = $(this).attr('data-action-callback');

                    if (url !== undefined) {
                        var redirect = true;
                        if (callback !== undefined) {
                            redirect = window[callback] !== undefined && window[callback](this);
                        }

                        if (redirect) {
                            window.location.href = url;
                        }
                    }
                });
            });
        }
    });

    $.bindAction();
});
