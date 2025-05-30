$(document).ready(function () {

    // pc menu open 
    const gnbTag = $('.main__depth');
    const depth1Box = $('.main__depth > li');
    const gnbBg = $('.gnb__bg');
    const depth2Wrap = $('.sub__wrap');
    const lastLst = $('.main__depth > li:last-child .depth__1 > li:last-child');
    //const overNot = $('.main__depth > li.has__not');

    depth1Box.each(function () {
        var tagDepth01 = $(this).find('>a');
        tagDepth01.on('mouseenter , focusin', function () {
            var thisList = $(this).siblings('.sub__wrap');
            depth2Wrap.removeClass('on');
            gnbBg.addClass('on');
            thisList.addClass('on');
        });
    });
    lastLst.on('focusout', function () {
        depth2Wrap.removeClass('on');
        gnbBg.removeClass('on');
    });
    gnbTag.on('mouseleave', function () {
        depth2Wrap.removeClass('on');
        gnbBg.removeClass('on');
    });


    // mobile menu open
    const mobileMenuBtn = $('.btn__navi');
    const mobileMenuClose = $('.gnb__header .btn__close');
    const menuTrigger = $('.menu__trigger')
    mobileMenuBtn.on('click', function () {
        $('.menu__mobile, body').addClass('is__open');
    });
    mobileMenuClose.on('click', function () {
        $('.menu__mobile, body').removeClass('is__open');
    });
    menuTrigger.on('click', function () {
        let openChk = $(this).parent('li').hasClass('active');
        if (openChk) {
            $(this).parent('li').removeClass('active');

        } else {
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
        }
    });

    //datepicker date setting
    const dateInputs = document.querySelectorAll(".date__picker");

    dateInputs.forEach(input => {
        input.addEventListener("input", () => {
            // 숫자만 추출
            let val = input.value.replace(/\D/g, "");
            let result = '';

            if (val.length < 5) {
                result = val;
            } else if (val.length < 7) {
                result = `${val.slice(0, 4)}.${val.slice(4)}`;
            } else {
                result = `${val.slice(0, 4)}.${val.slice(4, 6)}.${val.slice(6, 8)}`;
            }

            input.value = result;
        });
    });

    //mobile search bottom sheet popup 
    var gfn_body = {
        hold: function (tf) {
            if (tf) {
                $body.addClass('is__open');
            } else {
                $body.removeClass('is__open');
            }
        }
    };
    
    var $body = $('body');
    var $layered = $('.search__area');
    var gfn_dim = {
        show: function ($target, level) {
            $('<div class="dim" />').insertBefore($target);
            $target.prev('.dim').fadeIn(200).css('z-index', (level - 1));
        },
        hide: function ($target) {
            $target != '' ? '$(".dim")' : $target;
            $target.fadeOut(200, function () {
                $(this).remove();
            });
        }
    };
    $('body').on('click', '.dim', function () {
        gfn_dim.hide($(this));
        gfn_layered.close($(this).next('div').attr('data-layered-name'));
    });
    var layeredLevel = 2000;
    var gfn_layered = {
        open: function (name, dim) {
            if (name != '' && name != undefined) {
                var $selectedLayer = $layered.children('div[data-layered-name=' + name + ']');
                if ($selectedLayer.length === 0) return;

                if (!$selectedLayer.hasClass('popup')) gfn_dim.show($selectedLayer, layeredLevel);
                $layered.addClass('is__active').css('z-index', layeredLevel);
                $selectedLayer.css('z-index', layeredLevel);
                gfn_body.hold(true);

                layeredLevel = layeredLevel + 2;
            }
        },
        close: function (name) {
            if (name != '' && name != undefined) {
                var $selectedLayer = $layered.children('div[data-layered-name=' + name + ']');
                gfn_body.hold(false);
                gfn_dim.hide($selectedLayer.prev('.dim'));
                $layered.removeClass('is__active').removeAttr('style');
                $selectedLayer.removeAttr('style');
            }
        }
    };

    //call layer
    $('body').on('click', '[data-call-layered]', function () {
        var name = $(this).data('call-layered');
        gfn_layered.open(name);
    });

    //close layer
    $('body').on('click', '[data-action=close]', function () {
        var name = $(this).parents('div[data-layered-name]').data('layered-name');
        gfn_layered.close(name);
    });

    
    
})
 
//byte check
function gfn_fnChkByte($target, maxByte) {
    maxByte = maxByte.replace(/[\D\s\._\-]+/g, "");
    var str = $target.val();
    var str_len = str.length;

    var rbyte = 0;
    var rlen = 0;
    var one_char = "";
    var str2 = "";

    for (var i = 0; i < str_len; i++) {
        one_char = str.charAt(i);
        // if (encodeURIComponent(one_char).length > 4) {
        //     rbyte += 2; //한글2Byte
        // } else {
            rbyte++; //영문 등 나머지 1Byte
        //}

        if (rbyte <= maxByte) {
            rlen = i + 1; //return할 문자열 갯수
        }
    }

    if (rbyte > maxByte) {
        alert(`${maxByte}자까지 입력 가능합니다.`);
        str2 = str.substr(0, rlen); //문자열 자르기
        $target.val(str2);
        gfn_fnChkByte($target, maxByte);
    } else {
        $target.closest('.answer').find('.current').text(gfn_comma3Digit(rbyte));
    }  
    
}
//세자리수 콤마
function gfn_comma3Digit(number) {
    if (number === "") return;
    if (typeof number === "number") number = String(number);
    number = number.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    return Number(number).toLocaleString();
}