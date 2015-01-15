//extends the jQuery object with a feature
//for indicating ajax activity

jQuery.fn.extend({
    showLoader: function () {
        //replaces the element with a spinning gif
        //or whatever to show the user that the
        //server is processing his request
        //element is usually a button
        return this.each(function () {
            var pos = $(this).position();
            var height = parseInt($(this).outerHeight()/3);
            var width = parseInt($(this).outerWidth()/2);
            var loader = $('<div class="ajax-loader"></div>').css({
                position: 'absolute',
                top: (pos.top + height) + 'px',
                left: (pos.left + width) + 'px'
            });
            $(this).parent().append(loader);
            $(this).hide();
        });
    },
    hideLoader: function () {
        //gets rid of the spinning thing and
        //back with the element
        return this.each(function () {
            $(this).parent().find('.ajax-loader').remove();
            $(this).show();
        });
    }
});

//the ajax loader css, i.e.
//.ajax-loader {
//  width: 16px;
//  height: 16px;
//  background:url(../img/ajax-loader.gif) no-repeat;
//}

//example usage:
$.ajax(url, {
  beforeSend: function () {
    $('.btn-sign-in').showLoader();
  },
  complete: function () {
    $('.btn-sign-in').hideLoader();
  }
});
