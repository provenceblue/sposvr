$(document).ready(function () {
// ====== gnb start ====== //   

const gnbTag = $('.main__depth');
const depth1Box = $('.main__depth > li');
const gnbBg = $('.gnb__bg');
const depth2Wrap = $('.sub__wrap');
const lastLst = $('.main__depth > li:last-child .depth__1 > li:last-child');
const overNot = $('.main__depth > li.has__not');

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
// overNot.on('mouseenter , focusin', function(){
//      depth2Wrap.removeClass('on');
//     gnbBg.removeClass('on');
// })


// ====== gnb end ====== //  
})