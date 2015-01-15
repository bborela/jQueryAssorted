//a $.postJSON function, that posts JSON (obviously)
//and receives JSONs in return
//(uses the functions from showAjaxLoader.js because
//we don't want to leave our users in the dark)

(function($) {
    $.postJSON = function(url, data, success, options) {
        var defaults = {
            type: 'POST',
            data: JSON.stringify(data),
            crossDomain: true, //this one is suited for crossdomain use, might need some customization for most cases
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: success,
            beforeSend: function () {
                if (options.callerButton)
                    $(options.callerButton).showLoader();
            },
            complete: function () {
                if (options.callerButton)
                    $(options.callerButton).hideLoader();
            }
        };

        $.extend(defaults, options);
        $.ajax(url, defaults);
    };
})(jQuery);
