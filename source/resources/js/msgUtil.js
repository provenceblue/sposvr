/**
 ----------------------------------------------------------------------------
@ 파일명: msgUtil.js 
@ 프로그램명: 메시지 공통 javascript
@ 작성일: 2024.02.07
@ 작성자: 조형근
----------------------------------------------------------------------------
*/

/**
 * alert message 
 */
$.alert = function(){
	$(this).blur();
	var msg=arguments[0];
	var fnDone=arguments[1];
	var code=arguments[2];
	var opt=arguments[3];
    //포커스 되돌리기
    var returnName = arguments[4];
	msg = msg.replace(/\n/gi, "<br>");
	msg = msg.replaceAll("&lt;br/&gt;","<br/>");
	if(opt) {
		if(opt.isStatic){
			// 백드롭 클릭 Close 방지여부
			//msgLayer.attr("data-coreui-backdrop", "static");
		}
	}

	var newMsgId = $('[data-layered-name="alertMsg"]').length + 1;
	var layer = '<div class="popup__wrap" data-layered-name="alertMsg" id="msgPop_' + newMsgId + '">';

	layer += '<div class="dim__bg"></div>';
	layer +=    '<div class="modal__popup alert" tabindex="0">'
	layer +=        '<div class="pop__con">';
	layer +=            '<div class="modal__header">';

	layer +=            '</div>';
	layer +=            '<div class="modal__inner"><span>';
	layer +=                msg
	layer +=            '</span></div>';
	layer +=            '<div class="modal__bottom">';
	layer +=                '<div class="btn__area">';
	layer +=                    '<button id="btnAlertPop" class="btn primary medium btnAlertClose" type="button"><span>';
	layer += 					    '확인';
	layer +=                    '</span></button>';
	layer += 			    '</div>';
	layer += 		    '</div>';
	layer += 	    '</div>';
    layer +=        '<button class="btn__close btnAlertClose" data-modal="close"><span>닫기</span></button>';
	layer +=    '</div>';
	layer += '</div>';
	
	$("body").append(layer).addClass('is__open');
    const $target = $("#msgPop_" + newMsgId);
    $target.find('.dim__bg').show();
    $target.find('.modal__popup').addClass('is__active').focus();

		
	//document.getElementById('btnAlertPop').focus();
	
	$('.btnAlertClose').on('click', function (e) {
		// 모달 재사용을 위해 엘리먼트 삭제
		$(".popup__wrap").remove();
        $("body").removeClass('is__open');
		typeof fnDone=='function'?fnDone.call():'';
		
		// 세션 타임 아웃시 로그인 페이지로
		if( code && (code == "info.session.timeout.msg" || code == "401") )
			location.href="/login";
		
//		메시지 인덱스 지정
		//cmmUtil.dropBackModal();

        $('#' + returnName).focus();
	});
	//cmmUtil.dropBackModal();
}

/**
 * confirm message 
 */
$.confirm = function(){
	$("#confirmLayer").remove();

	var msg=arguments[0];
	var fnDone=arguments[1];
	var fnFail=arguments[2];

	// 버튼텍스트 커스텀 추가
	var txtBtnDone=arguments[3];
	var txtBtnFail=arguments[4];
    //포커스 되돌리기
    var returnName = arguments[5];

	//txtBtnDone = cmmUtil.isEmpty(txtBtnDone) ? '확인' : txtBtnDone;
	//txtBtnFail = cmmUtil.isEmpty(txtBtnFail) ? '취소' : txtBtnFail;
    txtBtnDone = txtBtnDone ? txtBtnDone : '확인' ;
    txtBtnFail = txtBtnFail ? txtBtnFail : '취소' ;

	msg = msg.replace(/\n/gi, "<br>");
	msg = msg.replaceAll("&lt;br/&gt;","<br/>");
	
	var newMsgId = $('[data-layered-name="alertMsg"]').length + 1;
	var layer = '<div class="popup__wrap" data-layered-name="alertMsg" id="msgPop_' + newMsgId + '">';

	layer += '<div class="dim__bg"></div>';
	layer +=    '<div class="modal__popup alert" tabindex="0">'
	layer +=        '<div class="pop__con">';
	layer +=            '<div class="modal__header">';

	layer +=            '</div>';
	layer +=            '<div class="modal__inner"><span>';
	layer +=                msg
	layer +=            '</span></div>';
	layer +=            '<div class="modal__bottom">';
	layer +=                '<div class="btn__area">';
	layer +=                    '<button type="button" class="btn primary medium" id="btnModalMsgApply"><span>';
	layer += 					    txtBtnDone;
	layer +=                    '</span></button>';
	layer +=                    '<button type="button" class="btn primary medium outline btnModalMsgClose"><span>';
	layer += 					    txtBtnFail;
	layer +=                    '</span></button>';
	layer += 			    '</div>';
	layer += 		    '</div>';
    layer +=            '<button class="btn__close btnModalMsgClose" data-modal="close"><span>닫기</span></button>';
	layer += 	'</div>';
	layer += '</div>';
		
	

    $("body").append(layer).addClass('is__open');
    const $target = $("#msgPop_" + newMsgId);
    $target.find('.dim__bg').show();
    $target.find('.modal__popup').addClass('is__active').focus();
		
	//document.getElementById('btnModalMsgApply').focus();
	
	$('#btnModalMsgApply').on('click', function (e) {
		$(".popup__wrap").remove();
        $("body").removeClass('is__open');
		typeof fnDone=='function'?fnDone.call():'';
		//cmmUtil.dropBackModal();
        $('#' + returnName).focus();
	});
	
	$('.btnModalMsgClose').on('click', function (e) {
		// 모달 재사용을 위해 엘리먼트 삭제
		$(".popup__wrap").remove();
        $("body").removeClass('is__open');
		typeof fnFail=='function'?fnFail.call():'';
		//cmmUtil.dropBackModal();
        $('#' + returnName).focus();
		return false;
	});
	
//	메시지 인덱스 지정
	//cmmUtil.dropBackModal();
}