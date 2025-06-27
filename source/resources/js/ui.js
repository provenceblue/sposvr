$(document).ready(function () {

    // pc menu open 
    const gnbTag = $('.main__depth');
    const depth1Box = $('.main__depth > li');
    const gnbBg = $('.gnb__bg');
    const depth2Wrap = $('.sub__wrap');
    const lastLst = $('.main__depth > li:last-child .depth__1 > li:last-child');
    //const overNot = $('.main__depth > li.has__not');

    depth1Box.each(function () {
        let tagDepth01 = $(this).find('>a');
        tagDepth01.on('mouseenter , focusin', function () {
            let thisList = $(this).siblings('.sub__wrap');
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
        $('.gnb__wrap').focus();
    });
    mobileMenuClose.on('click', function () {
        $('.menu__mobile, body').removeClass('is__open');
        mobileMenuBtn.focus();
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

    
    
    //left menu(pc)
    const $leftMenuOpen = $('.left__menu').find('button');
    const $liToggle = $('.left__menu>ul>li');
    
    $leftMenuOpen.on('click',function(){
        const $target = $(this).parent('li');
        let isVisible = $target.hasClass('active');
        if (isVisible) {
           $target.removeClass('active');
        }else{
            $liToggle.removeClass('active');
            $target.addClass('active');
        }
    })
    
    // let gfn_dim = {
    //     show: function ($target, level, parent, returnName) {
    //         $('<div class="dim" data-return=' + returnName + ' data-parent=' + parent + ' />').insertBefore($target);
    //         $target.prev('.dim').fadeIn(200).css('z-index', (level - 1));
    //     },
    //     hide: function ($target) {
    //         $target != '' ? '$(".dim")' : $target;
    //         const returnName = $(this).data('return');
    //         const $returnName = $('[data-return-name=' + returnName + ']');
    //         $target.fadeOut(200, function () {
    //             $(this).remove();
    //         });
    //         $returnName.focus();
    //     }
    // };
    
    
    $('body').on('click', '.dim', function () {
        const layerName = $body.find('div').attr('data-layered-name');
        const parentName = $(this).data('parent');
        const returnName = $(this).data('return');
        gfn_layered.close(layerName, parentName, returnName);
        gfn_dim.hide($(this));
    });
    
    // let gfn_layered = {
    //     open: function (name, parent, returnName) {
    //         const $parent = $(parent);
    //         //const returnName = returnName;
    //         if (name != '' && name != undefined) {
    //             let $selectedLayer = $parent.find('div[data-layered-name=' + name + ']');
    //             if ($selectedLayer.length === 0) return;
    //             gfn_dim.show($selectedLayer, layeredLevel, parent, returnName);
    //             if (parent == 'body') {
    //                 $selectedLayer.addClass('is__active').css('z-index', layeredLevel).focus();
    //             }else{
    //                 $parent.addClass('is__active');
    //                 $selectedLayer.css('z-index', layeredLevel).focus();
    //             }
    //             gfn_body.hold(true);
    //             layeredLevel = layeredLevel + 2;
    //         }
    //     },
    //     close: function (name, parent, returnName) {
    //         const $parent = $(parent);
    //         const $return = $('[data-return-name='+ returnName +']');
    //         if (name != '' && name != undefined) {
    //             let $selectedLayer = $parent.find('div[data-layered-name=' + name + ']');
    //             console.log($selectedLayer);
    //             gfn_body.hold(false);
    //             gfn_dim.hide($selectedLayer.prev('.dim'), parent, returnName);
    //             if (parent == 'body') {
    //                 $selectedLayer.removeClass('is__active').removeAttr('style');
    //             }else{
    //                 $parent.removeClass('is__active').removeAttr('style');
    //                 $selectedLayer.removeAttr('style');
    //             }
                
    //             $return.focus();
    //         } else {
    //             gfn_body.hold(false);
    //             if (parent == 'body') {
    //                 $parent.find('div[data-layered-name]').removeClass('is__active').removeAttr('style');
    //             }else{
    //                 $parent.removeClass('is__active').removeAttr('style');
    //                 $selectedLayer.removeAttr('style');
    //             }
    //             $return.focus();
    //         }
    //     }
    // };
    

    //call search
    $('body').on('click', '[data-call-layered]', function () {
        let name = $(this).data('call-layered');
        let returnName = $(this).data('return-name');
        gfn_layered.open(name, '.search__area', returnName);
    });
    //call modal
    $('body').on('click', 'button[data-call-modal]', function () {
        let name = $(this).data('call-modal');
        let returnName = $(this).data('return-name');
        gfn_layered.open(name, 'body', returnName);
    });

    //close search
    $('body').on('click', '[data-action=close]', function () {
        let name = $(this).parents('div[data-layered-name]').data('layered-name');
        let returnName = $(this).data('return');
        gfn_layered.close(name, '.search__area', returnName);
    });
    //close modal
    $('body').on('click', '[data-modal=close]', function () {
        let name = $(this).parents('div[data-layered-name]').data('layered-name');
        let returnName = $(this).data('return');
        gfn_layered.close(name, 'body', returnName);
    });
    //accordion
    $('body').on('click', 'button[data-call-more]', function () {
        let name = $(this).data('call-more');
        let $target = $('#'+$(this).attr('aria-controls'));
        let isVisible = $target.is(':visible');
        if (isVisible) {
            $target.hide().removeClass('active');
            $(this).attr('aria-expanded', false);
            $(this).removeClass('on');
        }else{
            $('.' + name).hide();
            $('.' + $(this).attr('class')).removeClass('on');//같은 클래스명을 가진 버튼을 비활성화 시킴 
            $target.show().addClass('active');
            $(this).attr('aria-expanded', true);
            $(this).addClass('on');
        }
    });
    $('body').on('change', '.select__box', function () {
        //console.log($(this).find('option').index($(this).find('option:selected')));
        $(this).prev('.select__label').hide();
    });
    //tab
    $('body').on('click', 'button[data-call-tab]', function () {
        let name = $(this).data('call-tab');
        let $target = $('#' + $(this).attr('aria-controls'));
        let $parent = $(this).parent();
        $parent.siblings().removeClass('active');
        $parent.addClass('active');
        $('.' + name).hide().removeClass('active');
        $target.show().addClass('active');
        $('.' + $(this).attr('aria-expanded', false));
        $(this).attr('aria-expanded', true);
    });
    
    
})
 
//byte check
function gfn_fnChkByte($target, maxByte) {
    maxByte = maxByte.replace(/[\D\s\._\-]+/g, "");
    let str = $target.val();
    let str_len = str.length;

    let rbyte = 0;
    let rlen = 0;
    let one_char = "";
    let str2 = "";

    for (let i = 0; i < str_len; i++) {
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
//mobile search bottom sheet popup 
let $body = $('body');
let layeredLevel = 2002;
let gfn_body = {
    hold: function (tf) {
        if (tf) {
            $body.addClass('is__open');
        } else {
            $body.removeClass('is__open');
        }
    }
};
const gfn_dim = {
    show($target, level, parent, returnName) {
        $('<div class="dim">')
            .attr({
                'data-return': returnName,
                'data-parent': parent
            })
            .insertBefore($target)
            .fadeIn(200)
            .css('z-index', level - 1);
    },

    hide($dim) {
        if (!$dim || !$dim.length) return;

        const returnName = $dim.data('return');
        $dim.fadeOut(200, function () {
            $(this).remove();
            $(`[data-return-name="${returnName}"]`).focus();
        });
    }
};

const gfn_layered = {
    open(name, parent, returnName) {
        if (!name) return;
        const $parent = $(parent);
        const $layer = $parent.find(`[data-layered-name="${name}"]`);
        if (!$layer.length) return;

        gfn_dim.show($layer, layeredLevel, parent, returnName);
        $layer.css('z-index', layeredLevel).addClass('is__active');
        $layer.find('[data-modal="close"]', '[data-action="close"]').attr('data-return', returnName);
        if (parent !== 'body') $parent.addClass('is__active');
        gfn_body.hold(true);
        layeredLevel += 2;
        $layer.focus();
    },

    close(name, parent, returnName) {
        const $parent = $(parent);
        const $return = $(`[data-return-name="${returnName}"]`);
        const $layer = name ? $parent.find(`[data-layered-name="${name}"]`) : $parent.find('div[data-layered-name]');

        gfn_body.hold(false);
        if (name && !$layer.length) return;

        gfn_dim.hide($layer.prev('.dim'), parent, returnName);
        $layer.removeClass('is__active').removeAttr('style');
        if (parent !== 'body') $parent.removeClass('is__active').removeAttr('style');

        $return.focus();
    }
};