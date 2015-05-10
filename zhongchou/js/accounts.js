// JavaScript Document
//主要功能 byhuangzhen
$(document).ready(function () {
	menu();
	weixin();
	gotoTop();
	checkboxStyle();
	mianPanelHeight();
	trBgColor();
	showTips();
});
$(window).resize(function () {
	mianPanelHeight();
	screenWindowTop();
	if ($(".hoverDiv").length == 1) {
		qePositon();
	}
});

function screenWindowTop() {
	if ($("div.mid_screen_window").length == 1 && $("div.mid_screen_window").css("diplay") != 'none') {
		var winHeight = $(window).height();
		if (winHeight - $("div.mid_screen_window").height() > 10) {
			var topHeight = (winHeight - $("div.mid_screen_window").height())/2;
			$("div.mid_screen_window").css("top", topHeight);
		} else {
			$("div.mid_screen_window").css("top", 5);
		}
	}	
}
/*生成进度条样式*/
function createRateClass() {
	var o = 0;
	var html = '';
	for (var i=0; i <= 100; i++) {
		html += '.big_rate' + i + ' {background:url(../images/ratebar.png) no-repeat -' + o + 'px 0px;}' + '\n';
		o += 120;
	}
	alert(html);	
}
//控制返回顶部按钮显示与否
$(window).scroll(function(){
	if ($(document).scrollTop() > 1) {
		$(".onlineWX").parent().css("border-bottom", "1px solid #fff");
		$(".online li.top").show();
	} else {
		$(".onlineWX").parent().css("border-bottom", "0px solid #fff");
		$(".online li.top").hide();
	}
	screenWindowTop();
	if ($(".tipsPanel").length > 0) {
		$.each($(".tipsPanel"), function(index, item){
			if ($(document).scrollTop() > 1) {
				$(item).remove();
			}
			if ($(document).scrollLeft() > 1) {
				$(item).remove();
			}
		});
	}
});
//返回顶部操作
function gotoTop() {
	$(".online li.top").click(function(){
		$('body,html').animate({scrollTop:0},500);
        return false;						   
	});	
}
//导航
function menu() {
	var trigger;
	$(".menuUl li.mItem").hover(function() {
		var _this = $(this);
		trigger = setTimeout(function(){
			var liposition = _this.position();
			var lileft = liposition.left;
			var litop = liposition.top;
			var liwidth = _this.width();
			_this.addClass("menuHover");
			_this.find(".childMenu").css("width", liwidth + 70);
			_this.find(".childMenu").css("left", lileft - 10);
			_this.find(".childMenu").css("top", litop + 32);
			_this.find(".childMenu").slideDown();
		}, 100);
	}, function() {
		clearTimeout(trigger);
		$(this).removeClass("menuHover");
		$(this).find(".childMenu").hide();
	});
}
//控制微信二维码显示与否
function weixin() {
	$("#weixin").hover(function() {
		var liposition = $(this).position();
		var liright = liposition.right;
		var litop = liposition.top;
		$(this).find(".twoDimensionCode").css("right", liright);
		$(this).find(".twoDimensionCode").css("top", litop);
		$(this).find(".twoDimensionCode").show();
	}, function() {
		$(this).find(".twoDimensionCode").hide();
	});
}

/*复选框背景效果*/
function checkboxStyle() {
	//单击事件
	$("span.chxspan").click(function(){
		var $li = $(this).parent();
		if ($(this).hasClass("con_itemAll")) {
			$.each($("span.con_item", $li), function(index, item){
				$(item).find(":checkbox").attr("checked", false);
				$(item).css("background-image", "url(./images/chx.png)");
				$(item).css("color", "#444");
			});
		} else {
			$("span.con_itemAll", $li).find(":checkbox").attr("checked", false);
			$("span.con_itemAll", $li).css("background-image", "url(./images/chx.png)");
			$("span.con_itemAll", $li).css("color", "#444");
		}
		if ($(this).css("background-image").indexOf("chx.png") != -1) {
			$(this).css("background-image", "url(./images/chx-checked.png)");
			$(this).css("color", "#00a0e8");
			$(this).find(":checkbox").attr("checked", true)
		} else {
			$(this).css("background-image", "url(./images/chx.png)");
			$(this).css("color", "#444");
			$(this).find(":checkbox").attr("checked", false);
			var flag = false;
            $.each($("span.con_item", $li), function (index, item) {
                if ($(item).css("background-image").indexOf("chx-checked.png") != -1) {
                    flag = true;
                    return false;
                }
            });
            if (!flag) {
                $("span.con_itemAll", $li).find(":checkbox").attr("checked", true);
                $("span.con_itemAll", $li).css("background-image", "url(./images/chx-checked.png)");
                $("span.con_itemAll", $li).css("color", "#00a0e8");
            }
		}
	});

	//协议复选框
	$("span.agreementChxChecked").click(function(){
		if (!$(this).hasClass("agreementChxNoCheck")) {
			$(this).addClass("agreementChxNoCheck");
			$(this).find(":checkbox").attr("checked", false);
		} else {
			$(this).removeClass("agreementChxNoCheck");
			$(this).find(":checkbox").attr("checked", true);
		}
	});
}

//注册验证
function checkRegister() {
	var namereg =/^\w*[a-zA-Z]+\w*$/;
	var pwdreg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
	var emailreg =/^[\w-\.]+@(?:[A-Za-z0-9-]+\.)+[a-z]+$/;
	var phonereg = /^1\d{10}$/;
	var userName = $("#userName").val();
	var userNotice = $("#userName").parent().next("span.in_notice");
	var userEmail = $("#userEmail").val();
	var emailNotice = $("#userEmail").parent().next("span.in_notice");
	var userPass = $("#userPass").val();
	var passNotice = $("#userPass").parent().next("span.in_notice");
	var checkPass = $("#checkPass").val();
	var checkNotice = $("#checkPass").parent().next("span.in_notice");
	var phone = $('#phoneNumber').val();
	var phoneNotice = $('#phoneNumber').parent().next("span.in_notice");
	var verificationCode = $("#verificationCode").val();  //输入校验码
	var imgCode = $("#imgCode").val();  //验证码图片的值
	var msgValidCode = $("#msgValidCode").val();  //短信校验码
	var msgValidCodeNotice = $("#btnSendmsg").next("span.in_notice");
	var companyOrgCode = $('#companyOrgCode').val();
	var companyOrgCodeNotice = $('#companyOrgCode').parent().next("span.in_notice");
	var companyLicenseNo = $('#companyLicenseNo').val();
	var companyLicenseNoNotice = $("#companyLicenseNo").parent().next("span.in_notice");
	var projName = $('#projName').val();
	var projNameNotice = $("#projName").parent().next("span.in_notice");
	var projDeveloper = $('#projDeveloper').val();
	var projDeveloperNotice = $("#projDeveloper").parent().next("span.in_notice");
	var projAddress = $('#projAddress').val();
	var projAddressNotice = $("#projAddress").parent().next("span.in_notice");
	var projPhoneNumber = $('#projPhoneNumber').val();
	var projPhoneNumberNotice = $("#projPhoneNumber").parent().next("span.in_notice");
	if(userName=="") return;
	//用户名
	if (userName != '' && userName != '输入用户名' ) {
		if(userName.length < 6 || userName.length > 25 ){
			userNotice.text("用户名长度必须在6至25个字符之间");
			userNotice.addClass("msgError");
			userNotice.removeClass("msgSuccess");
			return false;
		}
		if(!emailreg.test(userName)){  //如果不是邮箱注册，用户名需按照以下规则；如果是邮箱，则直接以邮箱作为用户名
			if (!namereg.test(userName)) {
				userNotice.text("用户名可由字母，数字和下划线组成，且必须包含字母");
				userNotice.addClass("msgError");
				userNotice.removeClass("msgSuccess");
				return false;
			}
		}
		if (checkUseName(userName)==false) {
			userNotice.text("用户名或者邮箱已存在");
			userNotice.addClass("msgError");
			userNotice.removeClass("msgSuccess");
			return false;		
		} else {
			/*后台需添加用户名是否重复验证*/
			userNotice.text("");
			userNotice.removeClass("msgError");	
			userNotice.addClass("msgSuccess");	
		}
	} else if (userName == '' || userName == '输入用户名' ) {
		userNotice.text("用户名不能为空");
		userNotice.addClass("msgError");
		userNotice.removeClass("msgSuccess");
		return false;
	}

	//邮箱
	if (userEmail != undefined) {
		if (userEmail != '' && userEmail != '输入邮箱' ) {
			if (!emailreg.test(userEmail)) {
				emailNotice.text("邮箱格式不正确");
				emailNotice.addClass("msgError");
				emailNotice.removeClass("msgSuccess");
				return false;
			} else {
				/*后台需添加邮箱是否重复验证*/
				
				emailNotice.text("");
				emailNotice.removeClass("msgError");
				emailNotice.addClass("msgSuccess");
			}
		} else if (userEmail == '' || userEmail == '输入邮箱' ) {
			emailNotice.text("邮箱不能为空");
			emailNotice.addClass("msgError");
			emailNotice.removeClass("msgSuccess");
			return false;
		}
	};
	//密码
	if (userPass != '' && userPass != '输入密码') {
		if(userPass.length < 8 || userPass.length > 16 ){
			passNotice.text("密码长度必须在8至16个字符之间");
			passNotice.addClass("msgError");
			passNotice.removeClass("msgSuccess");
			return false;
		} else if (!pwdreg.test(userPass)) {
			passNotice.text("密码可由字母，数字和特殊字符组成，且必须包含字母和数字");
			passNotice.addClass("msgError");
			passNotice.removeClass("msgSuccess");
			return false;
		} else {
			passNotice.text("");
			passNotice.removeClass("msgError");
			passNotice.addClass("msgSuccess");
		}
	} else if (userPass == '' || userPass == '输入密码') {
		passNotice.text("密码不能为空");
		passNotice.addClass("msgError");
		passNotice.removeClass("msgSuccess");
		return false;
	}
	//重复密码
	if (checkPass != '' && checkPass != '再次输入密码') {
		if(checkPass != userPass){
			checkNotice.text("重复密码与密码不一致");
			checkNotice.addClass("msgError");
			checkNotice.removeClass("msgSuccess");
			return false;
		} else {
			checkNotice.text("");
			checkNotice.removeClass("msgError");
			checkNotice.addClass("msgSuccess");
		}
	} else if (checkPass == '' || checkPass == '再次输入密码') {
		checkNotice.text("密码不能为空");
		checkNotice.addClass("msgError");
		checkNotice.removeClass("msgSuccess");
		return false;
	}
	//手机号码
	if(!phoneNumberCheck()){
		return false;
	}
	
	//验证码
//	if(verificationCode != undefined){
//		if (verificationCode != '') {
//			if(verificationCode != imgCode){
//				codeNotice.text("验证码不正确");
//				codeNotice.addClass("msgError");
//				codeNotice.removeClass("msgSuccess");
//				return false;
//			} else {
//				codeNotice.text("");
//				codeNotice.removeClass("msgError");
//				codeNotice.addClass("msgSuccess");
//			}
//		} else if (verificationCode == '') {
//			codeNotice.text("验证码不能为空");
//			codeNotice.addClass("msgError");
//			codeNotice.removeClass("msgSuccess");
//			return false;
//		}
//	}
	
	//短信验证码
	if(!msgValidCodeCheck()){
		return false;
	}
	
	//TODO 张宁福 display可见时，输入框必填，companyOrgCode 长度必须是9位
	if($('.hidClass').css('display') != "none"){
		if(companyOrgCode == ''){
			companyOrgCodeNotice.text('请输入组织机构代码');
			companyOrgCodeNotice.addClass("msgError");
			companyOrgCodeNotice.removeClass("msgSuccess");
			return false;
		}else if(companyOrgCode.length != 9){
			companyOrgCodeNotice.text('组织机构代码长度必须为9位');
			companyOrgCodeNotice.addClass("msgError");
			companyOrgCodeNotice.removeClass("msgSuccess");
			return false;
		}else{
			companyOrgCodeNotice.text('');
			companyOrgCodeNotice.removeClass("msgError");
			companyOrgCodeNotice.addClass("msgSuccess");
		}
		
		if(companyLicenseNo == ""){
			companyLicenseNoNotice.text('请输入营业执照编号');
			companyLicenseNoNotice.addClass('msgError');
			companyLicenseNoNotice.removeClass('msgSuccess');
			return false;
		}else {
			companyLicenseNoNotice.text('');
			companyLicenseNoNotice.removeClass('msgError');
			companyLicenseNoNotice.addClass('msgSuccess');
		}
		if(projName){
			projNameNotice.text('');
			projNameNotice.removeClass('msgError');
			projNameNotice.addClass('msgSuccess');
		}else{
			projNameNotice.text('请输入项目名称');
			projNameNotice.addClass('msgError');
			projNameNotice.removeClass('msgSuccess');
			return false;
		}
		if(projDeveloper){
			projDeveloperNotice.text('');
			projDeveloperNotice.removeClass('msgError');
			projDeveloperNotice.addClass('msgSuccess');
		}else{
			projDeveloperNotice.text('请输入项目公司名称');
			projDeveloperNotice.addClass('msgError');
			projDeveloperNotice.removeClass('msgSuccess');
			return false;
		}
		if(projAddress){
			projAddressNotice.text('');
			projAddressNotice.removeClass('msgError');
			projAddressNotice.addClass('msgSuccess');
		}else{
			projAddressNotice.text('请输入项目公司所在地');
			projAddressNotice.addClass('msgError');
			projAddressNotice.removeClass('msgSuccess');
			return false;
		}
		if (projPhoneNumber) {
			if (!phonereg.test(projPhoneNumber)) {
				projPhoneNumberNotice.text('联系电话格式不正确');
				projPhoneNumberNotice.addClass('msgError');
				projPhoneNumberNotice.removeClass("msgSuccess");
				return false;
			}else{
				projPhoneNumberNotice.text("");
				projPhoneNumberNotice.removeClass('msgError');
				projPhoneNumberNotice.addClass('msgSuccess');
				return true;
			}
		} else if (!projPhoneNumber) {
			projPhoneNumberNotice.text('联系电话不能为空');
			projPhoneNumberNotice.addClass('msgError');
			projPhoneNumberNotice.removeClass("msgSuccess");
			return false;
		}
	}
	//服务协议
	var agreement = $("#agreement");
	var agreeNotice = $("#agreeMentNotice");
	if (!agreement.prop("checked")) {
		agreeNotice.text("请勾选接入协议！");
		agreeNotice.removeClass("msgSuccess");
		agreeNotice.addClass("msgError");
		return false;
	}else{
		agreeNotice.text("");
		agreeNotice.removeClass("msgError");
		agreeNotice.addClass("msgSuccess");
	}
	return true;
	/*后台需添加验证后的提交操作*/
}

//文本框默认值
function txtFocus(el) {
	checkRegister();
}

function txtBlur(el) {
	checkRegister();
}

//密码框默认值
function passFocus(el) {
	checkRegister();
}

function passBlur(el) {
	checkRegister();
}

function phoneFocus(el) {
	checkRegister();
}

function phoneBlur(el) {
	checkRegister();
}

function mianPanelHeight() {
	//$(".calHeight").height($(".calHeight").height() + 30);
	var headheight = 0;
	if ($(".header").length > 0) {
		headheight = $(".header").height();
	}
	var topheight = $(".navPanel").height();
	var footheight = $(".footer").height();
	var mainheight = $(".calHeight").height();
	var winheight = $(window).height();
	var h = winheight - footheight - topheight - headheight;
	if (h > mainheight) {
		$(".calHeight").height(h-1);
	}
}

/*银行卡号输入*/
function cardNoInput (CardNo) {
	if ($("#magnifier_div").length == 0) {
		var pos = $(CardNo).position();
		var leftWidth = pos.left;
		var topHeight = pos.top - 46;
		var html = '';
		html = '<div id="magnifier_div" style="position:absolute; z-index:1000; left:' + leftWidth + 'px; top:' + topHeight + 'px; height:50px; line-height:50px; font-size:30px; color:#00a0e8; background:#f3f3f3; border:1px solid #eee; padding:0 10px; font-weight:normal; border-radius:4px; filter:alpha(opacity=80); opacity: 0.8;"><div>';
		$(CardNo).after(html);
	}
	if (CardNo.value == "") {
		removeMagnifier(CardNo);
		return;
	} else {
		var account = new String (CardNo.value);
		account = account.substring(0,23); /*帐号的总数, 包括空格在内 */
		if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null) {
			/* 对照格式 */
			if (account.match (".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|" + ".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}|.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}") == null) {
				var accountNumeric = accountChar = "", i;
				for (i=0;i<account.length;i++) {
					accountChar = account.substr (i,1);
					if (!isNaN (accountChar) && (accountChar != " ")) accountNumeric = accountNumeric + accountChar;
				}
				account = "";
				for (i=0;i<accountNumeric.length;i++) { /* 可将以下空格改为-,效果也不错 */
					if (i == 4) account = account + " "; /* 帐号第四位数后加空格 */
					if (i == 8) account = account + " "; /* 帐号第八位数后加空格 */
					if (i == 12) account = account + " ";/* 帐号第十二位后数后加空格 */
					if (i == 16) account = account + " ";/* 帐号第十六位后数后加空格 */
					account = account + accountNumeric.substr (i,1);
				}
				
			}
		} else {
			account = " " + account.substring (1,5) + " " + account.substring (6,10) + " " + account.substring (14,18) + "-" + account.substring(18,25);
		}
		if (account != CardNo.value) CardNo.value = account;
		$("#magnifier_div").text(account);
	}
}

function removeMagnifier(obj) {
	$("#magnifier_div").text("");
	$("#magnifier_div").remove();
}

/*表格行背景*/
function trBgColor() {
	$.each($(".dataTbl tbody tr"), function(index, item) {
		if (index > 0 && index%2 != 0) {
			$(item).addClass("trBg");
		}
	});	
}

function bubbleMsg(message, id) {
	var w = $("#" + id).width();
	var h = $("#" + id).height();
	var pos = $("#" + id).position();
	var leftWidth = pos.left - w;
	var topHeight = pos.top - h;
	var html = '';
	html += '<div class="bubbleMsg">';
	html += message;
	html += '</div>';
	$("#" + id).before(html);
}


//CharMode函数 
//测试某个字符是属于哪一类. 
function CharMode(iN) {
	if (iN >= 48 && iN <= 57) //数字 
		return 1;
	if (iN >= 65 && iN <= 90) //大写字母 
		return 2;
	if (iN >= 97 && iN <= 122) //小写 
		return 4;
	else
		return 8; //特殊字符 
}
//bitTotal函数 
//计算出当前密码当中一共有多少种模式 
function bitTotal(num) {
	modes = 0;
	for (i = 0; i < 4; i++) {
		if (num & 1) modes++;
		num >>>= 1;
	}
	return modes;
}
//checkStrong函数 
//返回密码的强度级别 
function checkStrong(sPW) {
	if (sPW.length <= 4)
		return 0; //密码太短 
	Modes = 0;
	for (i = 0; i < sPW.length; i++) {
		//测试每一个字符的类别并统计一共有多少种模式. 
		Modes |= CharMode(sPW.charCodeAt(i));
	}
	return bitTotal(Modes);
}
/*密码强度提示*/
function AuthPasswd(obj) {
	var string = $(obj).val();
	var level = checkStrong(string);
	if (level == 0) {
		$(".save_grade1").removeClass("bggreen");
		$(".save_grade2").removeClass("bggreen");
		$(".save_grade3").removeClass("bggreen");
		$(".save_grade1").removeClass("bgorange");
		$(".save_grade2").removeClass("bgorange");
		$(".save_grade3").removeClass("bgorange");
		$(".save_grade1").removeClass("bgred");
		$(".save_grade2").removeClass("bgred");
		$(".save_grade3").removeClass("bgred");
	} else if (level == 1) {
		$(".save_grade1").addClass("bgred");
	} else if (level == 2) {
		$(".save_grade1").addClass("bgorange");
		$(".save_grade2").addClass("bgorange");
	} else if (level == 3) {
		$(".save_grade1").addClass("bggreen");
		$(".save_grade2").addClass("bggreen");
		$(".save_grade3").addClass("bggreen");
	}
}

/*禁止粘贴文本框*/
function fncKeyStop(evt) {
	if(!window.event) {
		var keycode = evt.keyCode; 
		var key = String.fromCharCode(keycode).toLowerCase();
		if(evt.ctrlKey && key == "v") {
			evt.preventDefault(); 
			evt.stopPropagation();
		}	
		if(evt.ctrlKey && key == "x") {
            evt.preventDefault(); 
            evt.stopPropagation();
        }
    }
}

function inputInt(obj, minNum, maxNum) {
	if('' != obj.value.replace(/\d{1,}/,'')) {
		var val = obj.value = obj.value.match(/\d{1,}/);
		if (val == null) {
			
		} else {
			obj.value.match(/\d{1,}/);
		}
	}
	if (minNum != null && minNum != '' && maxNum != null && maxNum != '') {
		if (obj.value >= minNum && obj.value <= maxNum) {
					
		} else {
			obj.value = '';
		}
	} else if (minNum != null && minNum != '' && (maxNum == null || maxNum == '')) {
		if (obj.value >= minNum) {
				
		} else {
			obj.value = '';
		}
	} else if ((minNum == null || minNum == '') && maxNum != null && maxNum != '') {
		if (obj.value <= maxNum) {
				
		} else {
			obj.value = '';
		}
	}
}

function inputFloat(obj, minNum, maxNum) {
	if('' != obj.value.replace(/\d{1,}\.{0,1}\d{0,}/,'')) {
		var val = obj.value = obj.value.match(/\d{1,}\.{0,1}\d{0,}/);
		if (val == null) {
			
		} else {
			obj.value.match(/\d{1,}\.{0,1}\d{0,}/);
		}
	}
	if (minNum != null && minNum != '' && maxNum != null && maxNum != '') {
		if (obj.value >= minNum && obj.value <= maxNum) {
					
		} else {
			obj.value = '';
		}
	} else if (minNum != null && minNum != '' && (maxNum == null || maxNum == '')) {
		if (obj.value >= minNum) {
				
		} else {
			obj.value = '';
		}
	} else if ((minNum == null || minNum == '') && maxNum != null && maxNum != '') {
		if (obj.value <= maxNum) {
				
		} else {
			obj.value = '';
		}
	}
}

function showTips() {
	$(".showTips").hover(function() {
		var tips = $(this).attr("tips");
		var html = '<div class="tipsPanel"><div class="tipsArrow"></div><div class="tipsContent">' + tips + '</div></div>';
		$(this).html(html);
		$(".tipsPanel").find(".tipsArrow").width($(".tipsPanel").width());
		var thisHeight = $(this).height();
		var thisWidth = $(this).width()/2;
		if (thisWidth == 0 && $(this).hasClass("prompt")) {
			thisWidth = $(this).height()/2;
		}
		var tipsWidth = $(".tipsPanel").width()/2 - thisWidth + 1;
		var liposition = $(this).offset();
		var lileft = liposition.left - tipsWidth;
		var litop = liposition.top + thisHeight;
		if ($(document).scrollTop() > 1) {
			litop = litop - $(document).scrollTop();
		}
		$(this).find(".tipsPanel").css("left", lileft);
		$(this).find(".tipsPanel").css("top", litop);
		$(this).find(".tipsPanel").show();
	}, function() {
		$(this).find(".tipsPanel").remove();
	});
}

/*成功提示*/
var alertSucMsg = function(title, msg, url, btnVal) {
	if (!btnVal) {
		btnVal = "确定";
	}
	var html = '';
	html += '<div class="commonMsgBox_opacity"></div>';
	html += '<div class="commonMsgBox">';
	html += '<div class="commonMsgBox_title"><label>' + title + '</label><input type="button" class="closeBtnBlue" id="commonMsgBox_close" /></div>';
	html += '<div class="commonMsgBox_content">';
	html += '<table style="width:100%;"><tr><td style="width:40px;">';
	html += '<div class="commonMsgBox_icon" style="background:url(./images/success.png) no-repeat center;"></div>';
	html += '</td>';
	html += '<td>';
	html += '<div class="commonMsgBox_msg">';
	html += msg;
	html += '</div>';
	html += '</td></tr></table>';
	html += '</div>';
	html += '<div class="commonMsgBox_bar"><input type="button" value="' + btnVal + '" id="commonMsgBox_btn" /></div>';
	html += '</div>';
	
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".commonMsgBox").width();
	var boxHeight = $(".commonMsgBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".commonMsgBox").css("left", lileft);
	$(".commonMsgBox").css("top", litop - 100);
	$(".commonMsgBox").show();
	
	var closeCommonMsgWindow = function(){
		$("#commonMsgBox_close").parent().parent().remove();
		$(".commonMsgBox_opacity").remove();
		$(".commonMsgBox_lucency").remove();
		if (url != null && url != '' && url != undefined) {
			window.location.href = url;	
		}
	}
	$("#commonMsgBox_close")[0].onclick = closeCommonMsgWindow;
	$("#commonMsgBox_btn")[0].onclick = closeCommonMsgWindow;
}

/*失败提示*/
var alertErrMsg = function(title, msg, url, btnVal) {
	var html = '';
	html += '<div class="commonMsgBox_opacity"></div>';
	html += '<div class="commonMsgBox">';
	html += '<div class="commonMsgBox_title"><label>' + title + '</label><input type="button" class="closeBtnBlue" id="commonMsgBox_close" /></div>';
	html += '<div class="commonMsgBox_content">';
	html += '<table style="width:100%;"><tr><td style="width:40px;">';
	html += '<div class="commonMsgBox_icon" style="background:url(./images/error.png) no-repeat center;"></div>';
	html += '</td>';
	html += '<td>';
	html += '<div class="commonMsgBox_msg">';
	html += msg;
	html += '</div>';
	html += '</td></tr></table>';
	html += '</div>';
	if (btnVal != null && btnVal != '' && btnVal != undefined) {
		html += '<div class="commonMsgBox_bar"><input type="button" value="' + btnVal + '" id="commonMsgBox_btn" /></div>';
	}
	html += '</div>';
	
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".commonMsgBox").width();
	var boxHeight = $(".commonMsgBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".commonMsgBox").css("left", lileft);
	$(".commonMsgBox").css("top", litop - 100);
	$(".commonMsgBox").show();
	
	var closeCommonMsgWindow = function(){
		$("#commonMsgBox_close").parent().parent().remove();
		$(".commonMsgBox_opacity").remove();
		$(".commonMsgBox_lucency").remove();
		if (url != null && url != '' && url != undefined) {
			window.location.href = url;	
		}
	}
	$("#commonMsgBox_close")[0].onclick = closeCommonMsgWindow;
	if (btnVal != null && btnVal != '' && btnVal != undefined) {
		$("#commonMsgBox_btn")[0].onclick = closeCommonMsgWindow;
	}
}

/*警告提示*/
var alertWarnMsg = function(title, msg, url, btnVal) {
	var html = '';
	html += '<div class="commonMsgBox_opacity"></div>';
	html += '<div class="commonMsgBox">';
	html += '<div class="commonMsgBox_title"><label>' + title + '</label><input type="button" class="closeBtnBlue" id="commonMsgBox_close" /></div>';
	html += '<div class="commonMsgBox_content">';
	html += '<table style="width:100%;"><tr><td style="width:40px;">';
	html += '<div class="commonMsgBox_icon" style="background:url(./images/warning.png) no-repeat center;"></div>';
	html += '</td>';
	html += '<td>';
	html += '<div class="commonMsgBox_msg">';
	html += msg;
	html += '</div>';
	html += '</td></tr></table>';
	html += '</div>';
	if (btnVal != null && btnVal != '' && btnVal != undefined) {
		html += '<div class="commonMsgBox_bar"><input type="button" value="' + btnVal + '" id="commonMsgBox_btn" /></div>';
	}
	html += '</div>';
	
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".commonMsgBox").width();
	var boxHeight = $(".commonMsgBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".commonMsgBox").css("left", lileft);
	$(".commonMsgBox").css("top", litop - 100);
	$(".commonMsgBox").show();
	
	var closeCommonMsgWindow = function(){
		$("#commonMsgBox_close").parent().parent().remove();
		$(".commonMsgBox_opacity").remove();
		$(".commonMsgBox_lucency").remove();
		if (url != null && url != '' && url != undefined) {
			window.location.href = url;	
		}
	}
	
	var closeWarnMsgWindow = function(){
		$("#commonMsgBox_close").parent().parent().remove();
		$(".commonMsgBox_opacity").remove();
		$(".commonMsgBox_lucency").remove();
	}
	
	$("#commonMsgBox_close")[0].onclick = closeWarnMsgWindow;
	if (btnVal != null && btnVal != '' && btnVal != undefined) {
		$("#commonMsgBox_btn")[0].onclick = closeCommonMsgWindow;
	}
}

/*询问提示
var alertAskMsg = function(title, msg, url) {
	var html = '';
	html += '<div class="commonMsgBox_opacity"></div>';
	html += '<div class="commonMsgBox">';
	html += '<div class="commonMsgBox_title"><label>' + title + '</label><input type="button" class="closeBtnBlue" id="commonMsgBox_close" /></div>';
	html += '<div class="commonMsgBox_content">';
	html += '<table style="width:100%;"><tr><td style="width:40px;">';
	html += '<div class="commonMsgBox_icon" style="background:url(./images/question.png) no-repeat center;"></div>';
	html += '</td>';
	html += '<td>';
	html += '<div class="commonMsgBox_msg">';
	html += msg;
	html += '</div>';
	html += '</td></tr></table>';
	html += '</div>';
	html += '</div>';
	
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".commonMsgBox").width();
	var boxHeight = $(".commonMsgBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".commonMsgBox").css("left", lileft);
	$(".commonMsgBox").css("top", litop - 100);
	$(".commonMsgBox").show();
	
	var closeCommonMsgWindow = function(){
		$("#commonMsgBox_close").parent().parent().remove();
		$(".commonMsgBox_opacity").remove();
		$(".commonMsgBox_lucency").remove();
		if (url != null && url != '' && url != undefined) {
			window.location.href = url;	
		}
	}
	$("#commonMsgBox_close")[0].onclick = closeCommonMsgWindow;
	$("#commonMsgBox_btn")[0].onclick = closeCommonMsgWindow;
}*/

/*确认提示
var confirmMsg = function(title, msg) {
	var confirmObj = new Object();
	if ($(".commonMsgBox").length == 0) {
		showConfirmBox(title, msg);
		confirmObj.res = 'pass';
	} else {
		$("#commonMsgBox_close").parent().parent().remove();
		$(".commonMsgBox_opacity").remove();
		$(".commonMsgBox_lucency").remove();
		confirmObj.res = 'sure';
	}
	return confirmObj;
}

function showConfirmBox(title, msg) {
	var html = '';
	html += '<div class="commonMsgBox_opacity"></div>';
	html += '<div class="commonMsgBox">';
	html += '<div class="commonMsgBox_title"><label>' + title + '</label><input type="button" class="closeBtnBlue" id="commonMsgBox_close" /></div>';
	html += '<div class="commonMsgBox_content">';
	html += '<table style="width:100%;"><tr><td style="width:40px;">';
	html += '<div class="commonMsgBox_icon" style="background:url(./images/question.png) no-repeat center;"></div>';
	html += '</td>';
	html += '<td>';
	html += '<div class="commonMsgBox_msg">';
	html += msg;
	html += '</div>';
	html += '</td></tr></table>';
	html += '</div>';
	html += '</div>';
	
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".commonMsgBox").width();
	var boxHeight = $(".commonMsgBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".commonMsgBox").css("left", lileft);
	$(".commonMsgBox").css("top", litop - 100);
	$(".commonMsgBox").show();
	
	$("#commonMsgBox_close")[0].onclick = confirmMsg;
}

function closeMsg (){
	$("#commonMsgBox_close").parent().parent().remove();
	$(".commonMsgBox_opacity").remove();
	$(".commonMsgBox_lucency").remove();
}*/

/*上传图片*/
function uploadFile() {
	var html = '<div class="commonMsgBox_opacity"></div>';
	html += '<div class="uploadBox">';
	html += '<div class="uploadBox_title"><label>上传文件</label><input type="button" class="closeBtnBlue" id="closeUploadWindow" onclick="closeUploadWindow();" /></div>';
	html += '<div class="uploadBox_content">';
	html += '<div class="photoBox" id="photo_box"></div>';
	html += '<p class="uploadText">资料要求：<br />';
	html += '1.显示公司名称及本人姓名的劳动合同原件、工作证、工牌或名片完整照片原图（劳动合同请按顺序从第一页拍至最后一页），图片文字需清晰可见。图片尺寸需小于2M。<br />';
	html += '2.资料请由照相机或高清手机拍摄，并将照片原图上传。请勿将照片剪切或修改，请勿上传复印件或扫描件。</p>';
	html += '<div class="uploadBar">';
	html += '<a href="#" class="grayBtn35 fl" id="choseImgBtn"><span style="width:60px;">添加图片</span></a>';
	html += '<a href="javascript:abc();" class="blueBtn35 fr" id="uploadImgBtn"><span style="width:60px;">立即上传</span></a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".uploadBox").width();
	var boxHeight = $(".uploadBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".uploadBox").css("left", lileft);
	$(".uploadBox").css("top", litop);
	initUploadWindow();
}

function closeUploadWindow() {
	$("#closeUploadWindow").parent().parent().remove();
	$(".commonMsgBox_opacity").remove();
}

/*成功提示*/
var popupBox = function(url) {
	var html = '';
	html += '<div class="screen_cover_opacity"></div>';
	html += '<div class="popupBox">';
	html += '<div class="popupBox_title"><label>提交借入申请成功</label><input type="button" class="closeBtnBlue" id="popupBox_close" /></div>';
	html += '<div class="popupBox_content">';
	html += '<div class="popupBox_msg">';
	html += '<table style="width:100%;"><tr><td style="width:40px;">';
	html += '<div class="popupBox_icon" style="background:url(./images/suc-icon.png) no-repeat center;"></div>';
	html += '</td>';
	html += '<td>';
	html += '<div class="popupBox_msg">';
	html += '汇富贷信审团队会对您的资料进行审核。<br>在此期间，您可以继续完善个人资料，资料越完善审核周期越短！';
	html += '</div>';
	html += '</td></tr></table>';
	html += '</div>';
	html += '</div>';
	html += '<div class="popupBox_bar"><a href="#" class="blueBtn35 fl" id="popupBox_btn"><span style="width:150px;">立即完善</span></a></div>';
	html += '</div>';
	
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".popupBox").width();
	var boxHeight = $(".popupBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".popupBox").css("left", lileft);
	$(".popupBox").css("top", litop - 100);
	$(".popupBox").show();
	
	var closeCommonMsgWindow = function(){
		$("#popupBox_close").parent().parent().remove();
		$(".screen_cover_opacity").remove();
		if (url != null && url != '' && url != undefined) {
			window.location.href = url;	
		}
	}
	$("#popupBox_close")[0].onclick = closeCommonMsgWindow;
	$("#popupBox_btn")[0].onclick = closeCommonMsgWindow;
}

var alertFunMsg = function(title, msg, func) {
	var html = '';
	html += '<div class="commonMsgBox_opacity"></div>';
	html += '<div class="commonMsgBox">';
	html += '<div class="commonMsgBox_title"><label>' + title + '</label><input type="button" class="closeBtnBlue" id="commonMsgBox_close" style="display:none;" /></div>';
	html += '<div class="commonMsgBox_content">';
	html += '<table style="width:100%;"><tr><td style="width:40px;">';
	html += '<div class="commonMsgBox_icon" style="background:url(./images/success.png) no-repeat center;"></div>';
	html += '</td>';
	html += '<td>';
	html += '<div class="commonMsgBox_msg">';
	html += msg;
	html += '</div>';
	html += '</td></tr></table>';
	html += '</div>';
	html += '<div class="commonMsgBox_bar"><input type="button" value="确定" id="commonMsgBox_btn" /></div>';
	html += '</div>';
	
	$(".header").before(html);
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var boxWidth = $(".commonMsgBox").width();
	var boxHeight = $(".commonMsgBox").height();
	var lileft = (winWidth - boxWidth) / 2;
	var litop = (winHeight - boxHeight) / 2;
	$(".commonMsgBox").css("left", lileft);
	$(".commonMsgBox").css("top", litop - 100);
	$(".commonMsgBox").show();
	
	var closeCommonMsgWindow = function(){
		$("#commonMsgBox_close").parent().parent().remove();
		$(".commonMsgBox_opacity").remove();
		$(".commonMsgBox_lucency").remove();
		if (func != null && func != '' && func != undefined) {
			eval(func + "()");
		}
	}
	//$("#commonMsgBox_close")[0].onclick = closeCommonMsgWindow;
	$("#commonMsgBox_btn")[0].onclick = closeCommonMsgWindow;
}

function InputSuggest(opt){ 
	this.win = null; 
	this.doc = null; 
	this.container = null; 
	this.items = null; 
	this.input = opt.input || null; 
	this.containerCls = opt.containerCls || 'suggest-container'; 
	this.itemCls = opt.itemCls || 'suggest-item'; 
	this.activeCls = opt.activeCls || 'suggest-active'; 
	this.width = opt.width; 
	this.opacity = opt.opacity; 
	this.data = opt.data || []; 
	this.active = null; 
	this.visible = false; 
	this.init(); 
} 
InputSuggest.prototype = { 
	init: function(){ 
		this.win = window; 
		this.doc = window.document; 
		this.container = this.$C('div'); 
		this.attr(this.container, 'class', this.containerCls); 
		this.doc.body.appendChild(this.container); 
		this.setPos(); 
		var _this = this, input = this.input; 
		this.on(input,'keyup',function(e){ 
			if(input.value==''){ 
				_this.hide(); 
			}else{ 
				_this.onKeyup(e); 
			} 
		}); 
		// blur会在click前发生，这里使用mousedown 
		this.on(input,'blur',function(e){ 
			_this.hide(); 
		}); 
		this.onMouseover(); 
		this.onMousedown(); 
	}, 
	$C: function(tag){ 
		return this.doc.createElement(tag); 
	}, 
	getPos: function (el){ 
		var pos=[0,0], a=el; 
		if(el.getBoundingClientRect){ 
			var box = el.getBoundingClientRect(); 
			pos=[box.left,box.top]; 
		}else{ 
			while(a && a.offsetParent){ 
				pos[0] += a.offsetLeft; 
				pos[1] += a.offsetTop; 
				a = a.offsetParent 
			} 
		} 
		return pos; 
	}, 
	setPos: function(){ 
		var input = this.input, 
		pos = this.getPos(input), 
		brow = this.brow, 
		width = this.width, 
		opacity = this.opacity, 
		container = this.container;
		container.style.cssText = 
		'position:absolute;overflow:hidden;left:' 
		+ (pos[0] - 43) + 'px;top:' 
		+ ((pos[1]+input.offsetHeight) + 2) + 'px;width:' 
		// IE6/7/8/9/Chrome/Safari input[type=text] border默认为2，Firefox为1，因此取offsetWidth-2保证与FF一致 
		+ ((brow.firefox ? input.clientWidth : input.offsetWidth-2) + 43) + 'px;';
		if(width){ 
			container.style.width = width + 'px'; 
		} 
		if(opacity){ 
			if(this.brow.ie){ 
				container.style.filter = 'Alpha(Opacity=' + opacity * 100 + ');'; 
			}else{ 
				container.style.opacity = (opacity == 1 ? '' : '' + opacity); 
			} 
		} 
	}, 
	show: function(){ 
		this.container.style.visibility = 'visible'; 
		this.visible = true; 
	}, 
	hide: function(){ 
		this.container.style.visibility = 'hidden'; 
		this.visible = false; 
	}, 
	attr: function(el, name, val){ 
		if(val === undefined){ 
			return el.getAttribute(name); 
		}else{ 
			el.setAttribute(name,val); 
			name=='class' && (el.className = val); 
		} 
	}, 
	on: function(el, type, fn){ 
		el.addEventListener ? el.addEventListener(type, fn, false) : el.attachEvent('on' + type, fn); 
	}, 
	un: function(el, type, fn){ 
		el.removeEventListener ? el.removeEventListener(type, fn, false) : el.detachEvent('on' + type, fn); 
	}, 
	brow: function(ua){ 
		return { 
			ie: /msie/.test(ua) && !/opera/.test(ua), 
			opera: /opera/.test(ua), 
			firefox: /firefox/.test(ua) 
		}; 
	}(navigator.userAgent.toLowerCase()), 
	onKeyup: function(e){ 
		var container = this.container, input = this.input, iCls = this.itemCls, aCls = this.activeCls; 
		if(this.visible){ 
			switch(e.keyCode){ 
				case 13: // Enter 
				if(this.active){ 
					input.value = this.active.firstChild.data; 
					this.hide(); 
				} 
				return; 
				case 38: // 方向键上 
				if(this.active==null){ 
					this.active = container.lastChild; 
					this.attr(this.active, 'class', aCls); 
					input.value = this.active.firstChild.data; 
				}else{ 
					if(this.active.previousSibling!=null){ 
						this.attr(this.active, 'class', iCls); 
						this.active = this.active.previousSibling; 
						this.attr(this.active, 'class', aCls); 
						input.value = this.active.firstChild.data; 
					}else{ 
						this.attr(this.active, 'class', iCls); 
						this.active = null; 
						input.focus(); 
						input.value = input.getAttribute("curr_val"); 
					} 
				} 
				return; 
				case 40: // 方向键下 
					if(this.active==null){ 
						this.active = container.firstChild; 
						this.attr(this.active, 'class', aCls); 
						input.value = this.active.firstChild.data; 
					}else{ 
						if(this.active.nextSibling!=null){ 
							this.attr(this.active, 'class', iCls); 
							this.active = this.active.nextSibling; 
							this.attr(this.active, 'class', aCls); 
							input.value = this.active.firstChild.data; 
						}else{ 
							this.attr(this.active, 'class', iCls); 
							this.active = null; 
							input.focus(); 
							input.value = input.getAttribute("curr_val"); 
						} 
					} 
					return; 
			} 
		} 
		if(e.keyCode==27){ // ESC键 
			this.hide(); 
			input.value = this.attr(input,'curr_val'); 
			return; 
		} 
		if(input.value.indexOf('@')!=-1){return;} 
		this.items = []; 
		if(this.attr(input,'curr_val')!=input.value){ 
			this.container.innerHTML = ''; 
			for(var i=0,len=this.data.length;i<len;i++){ 
				var item = this.$C('div'); 
				this.attr(item, 'class', this.itemCls); 
				item.innerHTML = input.value + '@' + this.data[i]; 
				this.items[i] = item; 
				this.container.appendChild(item); 
			} 
			this.attr(input,'curr_val',input.value); 
		} 
		this.show(); 
	}, 
	onMouseover: function(){ 
		var _this = this, icls = this.itemCls, acls = this.activeCls; 
		this.on(this.container,'mouseover',function(e){ 
			var target = e.target || e.srcElement; 
			if(target.className == icls){ 
				if(_this.active){ 
					_this.active.className = icls; 
				} 
				target.className = acls; 
				_this.active = target; 
			} 
		}); 
	}, 
	onMousedown: function(){ 
		var _this = this; 
		this.on(this.container,'mousedown',function(e){ 
			var target = e.target || e.srcElement; 
			_this.input.value = target.innerHTML; 
			_this.hide(); 
		}); 
	} 
}

function mouseClass() {
  $(":disabled").hover(function () {
      $(this).addClass("disabledMouse");
  }, function () {
      $(this).removeClass("disabledMouse");
  });
}

var wait = 60;
function sendmsg() {
	var o = $('#btnSendmsg');
	if (wait == 0) {
		o.attr("disabled", false);			
		o.val("获取验证码");
		wait = 60;
	} else {
		o.attr("disabled", true);
		o.val("(" + wait + ")秒后重新获取");
		wait--;
		setTimeout(function() {
			sendmsg();
		},
		1000)
	}
}



/*复选框背景效果
function checkOptionStyle() {
	//单击事件
	$("span.chxoption").click(function(){
		var $li = $(this).parent();
		if ($(this).hasClass("option_itemAll")) {
			$.each($("span.option_item", $li), function(index, item){
				$(item).find(":checkbox").attr("checked", false);
				$(item).removeClass("chxed");
			});
		} else {
			$("span.option_itemAll", $li).find(":checkbox").attr("checked", false);
			$("span.option_itemAll", $li).removeClass("chxed");
		}
		if (!$(this).hasClass("chxed")) {
			$(this).addClass("chxed");
			$(this).find(":checkbox").attr("checked", true)
		} else {
			$(this).removeClass("chxed");
			$(this).find(":checkbox").attr("checked", false);
			var flag = false;
            $.each($("span.option_item", $li), function (index, item) {
                if (!$(item).hasClass("chxed")) {
                    flag = true;
                    return false;
                }
            });
            if (!flag) {
                $("span.option_itemAll", $li).find(":checkbox").attr("checked", true);
				$("span.option_itemAll", $li).addClass("chxed");
            }
		}
	});
}*/