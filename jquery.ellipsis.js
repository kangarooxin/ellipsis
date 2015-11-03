(function($) {
    $.fn.ellipsis = function(options) {
        if($.isNumeric(options)) {
            options = {def_len : options};
        }
        options = $.extend($.fn.ellipsis.defaults, options);
        return this.each(function() {
            var maxlen = $(this).attr(options.len_attr) || options.def_len;
            var otext = $.trim($(this).text());
            if(options.ignore_chinese_char && otext.length > maxlen) {
                $(this).text(otext.substring(0, maxlen) + options.end_text);
            } else if(!options.ignore_chinese_char) {
                var str_length = 0;
                var charCode;
                var str_cut = "";
                for (var i = 0; i < otext.length; i++) {
                    str_length++;
                    charCode  = otext.charCodeAt(i);
                    if (charCode > 127 || charCode == 94) {
                        str_length++;
                    }
                    if(str_length <= maxlen) {
                        str_cut = str_cut + otext.charAt(i);
                    }
                    if (str_length >= maxlen && i < otext.length - 1) {
                        str_cut = str_cut + options.end_text;
                        $(this).text(str_cut);
                        break;
                    }
                }
            }
            if(options.set_tit) {
                $(this).attr(options.tit_attr, otext);
            }
        });
    };


    $.fn.ellipsis.defaults = {
        len_attr : 'max-len',
        def_len : 20,
        set_tit : true,
        tit_attr : 'title',
        ignore_chinese_char: false,
        end_text : '...'
    };
})(jQuery);