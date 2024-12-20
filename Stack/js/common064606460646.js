"use strict";

$(document).ready(function() {
    // changed
    function modal_open(el) {
        $('body').addClass('modal-opened');
        el.addClass('opened');
        el.fadeIn('fast');
    }

    function modal_close(el) {
        el.removeClass('opened');
        el.fadeOut('fast');

        if (!$('.modal.opened').length) {
            $('body').removeClass('modal-opened');
        }
    }

    $('.modal-backdrop, .modal-close, .js-modal-close').click(function() {
        modal_close($(this).closest('.modal'));
        return false;
    });
    $('[data-modal]').click(function() {
        modal_open($($(this).data('src')));
        return false;
    }); // changed end

    $('.subscribe-form').submit(function() {
        $(this).find('.input').val('');
        showMessage('success', 'Success', ''); // changed

        var popup = $('#subscribe');
        modal_close(popup); // end

        return false;
    }); // copy Solidity Code

    $('.copy').click(function() {
        var btn = $(this);
        var item = $('.language-javascript').eq(0);
        copyTextToClipboard(item.text());
        var range = new Range();
        range.setStart(item.parent().get(0).childNodes[1].firstChild, 0);
        range.setEnd(item.parent().get(0).childNodes[1].firstChild, 1);
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(range);
        btn.text('Copied');
        setTimeout(function() {
            btn.text('Copy code');
        }, 1000);
    }); // page scroll top function

    $('.gotop').click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    }); // close notice on click x

    $('.notice-wrap').on('click', '.notice-close', function() {
        var item = $(this).closest('.notice');
        item.fadeOut(400, function() {
            item.remove();
        });
        return false;
    }); // hide notices on pageload with delay

    var notices = 0;
    $('.notice').each(function() {
        var item = $(this);
        notices--;
        setTimeout(function() {
            item.fadeOut(400, function() {
                item.remove();
            });
        }, 3000 + notices * 300);
    }); // changed
    // changed end
    // calculate rates

    $(".js-calc").each(function() {
        setInputFilter($(this).get(0), function(value) {
            return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
        });
    });
    $(".js-calc").on('keyup change', function() {
        $('.js-calc').not($(this)).val($(this).val());
        calculate();
    }); // mobile menu controls

    $('.menu-toggle').click(function() {
        $('body').addClass('menu-opened');
        return false;
    });
    $('.menu-close').click(function() {
        $('body').removeClass('menu-opened');
        return false;
    }); // hide tooltips on mobile devices

    $('body').click(function() {
        $('.info-icon').removeClass('opened');
    });
    $('body').on('click', '.info-icon', function(e) {
        $(this).addClass('opened');
        e.stopPropagation();
    }); // close menu on movile devices

    $(document).mouseup(function(e) {
        var div = $(".menu-wrap");

        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('body').removeClass('menu-opened');
        }
    }); // Interest Calculator


    $('.how-form').submit(function() {
        // changed
        var popup = $('#make-deposit');
        modal_open(popup); // end

        return false;
    }); // copy buttons in popups

    $('[data-copy]').click(function() {
        var btn = $(this);
        var item = $($(this).data('copy')).eq(0);
        copyTextToClipboard(item.text());
        var range = new Range();
        range.setStart(item.get(0), 0);
        range.setEnd(item.get(0), 1);
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(range);
        btn.addClass('done');
        setTimeout(function() {
            btn.removeClass('done');
        }, 1000);
        return false;
    }); // banners popup ( #promo )

    $('.banners-select .select').change(function() {
        var w = $(this).find('option:selected').data('w');
        var h = $(this).find('option:selected').data('h');
        var gif = '/banners/' + w + 'x' + h + '_si.png';
        $('.banners-code').val("<a href='" + $('.your_ref_url').html() + "'><img src='https://smartinu.app/banners/" + w + "x" + h + "_si.png' width='" + w + "px' height='" + h + "px' /></a>");
        $('.gif-link').attr('href', gif);
        $('.banners-cont').show();
    });
    $('.banners-copy').click(function() {
        var btn = $(this);
        var item = $('.banners-cont textarea').eq(0);
        copyTextToClipboard(item.val());
        btn.text('Copied');
        setTimeout(function() {
            btn.text('Copy code');
        }, 1000);
        return false;
    }); // pagnation for referals popup

    $(".paginate").each(function() {
        var cur = $(this);
        cur.paginga({
            itemsPerPage: cur.data('perpage')
        });
    }); // number animation (Current Daily Profit)

    $('[data-toggle="scroll"]').click(function() {
        var item = $($(this).attr('href'));

        if (item.length) {
            $('body, html').animate({
                scrollTop: item.offset().top - 30
            }, 500);
        }

        return false;
    }); // withdraw button in #stat

}); // easings
// t: current time, b: begInnIng value, c: change In value, d: duration

$.easing.jswing = $.easing.swing;
$.extend($.easing, {
    def: 'easeOutQuad',
    easeOutQuart: function easeOutQuart(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeOutCubic: function easeOutCubic(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }
});

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text; // Avoid scrolling to bottom

    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }

    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function calculate() {
    var input = $(".js-calc");
    var amount = input.val();

    if (amount > 999999999) {
        amount = 999999999;
        $(".js-calc").val(amount);
    }

    ;
    var totalBonus = input.attr("data-current-bonus") / 100;
    console.log(totalBonus);
    var hourly = (amount * totalBonus / 24).toFixed(6);
    var daily = (amount * totalBonus).toFixed(6);
    var roi = (amount * 1.5).toFixed(6);
    $(".js-calc-amount").html(amount);
    $(".js-calc-amount-hourly").html(hourly);
    $(".js-replace-roi").html(roi);
} // Restricts input for the given textbox to the given inputFilter function.


function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
} // type: "success" / "error"


function showMessage() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var mess = '';

    if (title != '') {
        mess += '<div class="notice-title">' + title + '</div>';
    }

    if (title != '') {
        mess += '<div class="notice-text">' + text + '</div>';
    }

    $('.notice-wrap').append('<div class="notice ' + type + '"><button class="notice-close"></button><div class="notice-content">' + mess + '</div></div>');
    var item = $('.notice-wrap .notice').eq(-1);
    setTimeout(function() {
        item.fadeOut(400, function() {
            item.remove();
        });
    }, 5000);
}