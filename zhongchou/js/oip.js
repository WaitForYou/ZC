$(document).ready(function() {
	
});
var ctx = $("#ctx").val();
function validLoginForm() {
	var userName = $("#userName").val();
	var userPass = $("#userPass").val();
	var imgValidCode = $("#imgValidCode").val();
	if (userName == "" || userPass == "" || imgValidCode == "") {
		$("#errorMsg").val("所有项均为必填项，请填写！");
	} else {
		$('#loginForm').submit();
	}
}

function validLogoutForm() {
	$('#logoutForm').submit();
}

function validRegForm() {
//	var userName = $("#userName").val();
//	var phoneNumber = $("#phoneNumber").val();
//	var msgValidCode = $("#msgValidCode").val();
//	var password = $("#password").val();
//	var passwordConfirm = $("#passwordConfirm").val();
//	var imgValidCode = $("#imgValidCode").val();
//	var agreeNotice = $("#agreeMentNotice");
//	if (userName == "" || phoneNumber === "" || msgValidCode == "" || password === "" || passwordConfirm == "" || imgValidCode === "") {
//		$("#errorMsg").text("所有项均为必填项，请填写！");
//		return;
//	}
//	
//	if (!$("#agreement").prop("checked")) {
//		agreeNotice.text("您还未同意接入协议！");
//		agreeNotice.addClass("msgError");
//		return;
//	}
	
	if(checkRegister()){
		var agreement = $("#agreement");
		var agreeNotice = $("#agreeMentNotice");
		//服务协议
		if (!agreement.prop("checked")) {
			agreeNotice.text("请勾选接入协议！");
			agreeNotice.removeClass("msgSuccess");
			agreeNotice.addClass("msgError");
			return false;
		}
		$('#regForm')[0].submit();
	}
}

function validModifyUserForm() {
	var usertype = $("#usertype").val();
	var phonenumber = $("#phonenumber").val();
	var imgValidCode = $("#imgValidCode").val();
	if (!$("#checkbox").prop("checked")) {
		$("#errorMsg").val("您还未同意中筹网金的协议！");
		return;
	}
	if (usertype == "" || username == "" || phonenumber === ""  || imgValidCode === "") {
		$("#errorMsg").val("用户类型、用户名、手机、验证码均为必填项，请填写！");
		return;
	}
	$('#modifyUserForm').submit();
}

function validPasswordForm() {
	
	var userName = $("#userName").val();
	var password = $("#password").val();
	var newPassword = $("#newPassword").val();
	var confirmPassword = $("#confirmPassword").val();
	if (userName === "" || password === "" || newPassword === "" || confirmPassword === "") {
		$("#errorMsg").val("所有项均为必填项，请填写！");
	} else {
		$('#passwordForm').submit();
	}
}

function refreshImgValidCode() {
	var validImg = $('#validImg');
	var ctx = $('#ctx').val();
	validImg.attr("src",ctx+"/imageServlet?"+Math.random());
}

var wait = 60;
function countDown4Resend(flag) {
	var o = $('#btnSendmsg');
	if (wait == 0) {
		//o.attr("disabled", false);			
		//o.val("获取验证码");
		o.attr("onclick", "sendMsgValidCode("+flag+")");
		o.text("获取验证码");
		wait = 60;
	} else {
		//o.attr("disabled", true);
		//o.val("(" + wait + ")秒后重新发送");
		o.attr("onclick", "");
		o.text("(" + wait + ")秒后重新获取");
		wait--;
		setTimeout(function() {
			countDown4Resend(flag);
		},
		1000);
	}
}

function sendMsgValidCode(flag) {
	var ctx = $('#ctx');
	var url_prefix = "";
	var phoneNum = $("#phoneNumber").val();
	if(ctx.val() != undefined){
		url_prefix = ctx.val() + "/";
	}
	var urlPath = url_prefix + "user/sendMsg?phoneNum=" + phoneNum + "&msgSource=" + flag;
	//$("#msgBtn").prop("disabled", "disabled");
	$.ajax({
		type : 'GET',
		url : urlPath,
		dataType : 'json',
		success : function(data) {
			try{
				console.log(data);
			}catch(e){
				
			}
			countDown4Resend(flag);
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			try{
				console.log(XMLHttpRequest);
				console.log(textStatus);
				console.log(errorThrown);
			}catch(e){
				
			}
		}
	});
}

function doCheck(val) {
	if(val=='0')
		$(".hidClass").hide();
	else 
		$(".hidClass").show();
}

//检查电话号码是否重复
function checkRepeatPhone(obj){
	var ret = "";
	$.ajax({
		url: ctx+"/userPhoneChecked",
		type: "POST",
		data: 'phoneNumber='+obj,
		async:false,
		dataType: "json",
		success: function (data) {
			ret = data.ret;
		},
		error: function (data) {
			ret = false;
		}
	});
	return true;
}

function checkMsgCode(obj){
	var ret = "";
	$.ajax({
		url: ctx+"/userMsgCodeChecked",
		type: "POST",
		data: 'MSGVALIDCODE='+obj,
		async:false,
		dataType: "json",
		success: function (data) {
			ret = data.ret;
		},
		error: function (data) {
			ret = false;
		}
	});
	return ret;
}

function msgValidCodeCheck(){
	var msgValidCode = $("#msgValidCode").val();
	var msgValidNotice = $("#msgValidNotice");
	if (msgValidCode == '') {
		msgValidNotice.text("校验码不能为空");
		msgValidNotice.addClass("msgError");
		msgValidNotice.removeClass("msgSuccess");
		return false;
	}else if(checkMsgCode(msgValidCode)==false){
		msgValidNotice.text("校验码错误或超时，请重试");
		msgValidNotice.addClass("msgError");
		msgValidNotice.removeClass("msgSuccess");
		return false;
	}else{
		msgValidNotice.text("");
		msgValidNotice.addClass("msgSuccess");
		msgValidNotice.removeClass("msgError");
		return true;
	}
}

function passwordCheck(){
	var pwdreg = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/;
	var password = $("#password").val();
	var passwordNotice = $("#passwordNotice");
	if (password != '') {
		if(password.length < 8 || password.length > 16 ){
			passwordNotice.text("密码长度必须在8至16个字符之间");
			passwordNotice.addClass("msgError");
			passwordNotice.removeClass("msgSuccess");
			return false;
		} else if (!pwdreg.test(password)) {
			passwordNotice.text("密码可由字母，数字和特殊字符组成，且必须包含字母和数字");
			passwordNotice.addClass("msgError");
			passwordNotice.removeClass("msgSuccess");
			return false;
		} else {
			passwordNotice.text("");
			passwordNotice.removeClass("msgError");
			passwordNotice.addClass("msgSuccess");
			return true;
		}
	} else if (password == '') {
		passwordNotice.text("密码不能为空");
		passwordNotice.addClass("msgError");
		passwordNotice.removeClass("msgSuccess");
		return false;
	}
}
function pwdConfirmCheck(){
	var password = $("#password").val();
	var pwdConfirm = $("#pwdConfirm").val();
	var pwdConfirmNotice = $("#pwdConfirmNotice");
	if (pwdConfirm != '') {
		if(pwdConfirm != password){
			pwdConfirmNotice.text("重复密码与密码不一致");
			pwdConfirmNotice.addClass("msgError");
			pwdConfirmNotice.removeClass("msgSuccess");
			return false;
		} else {
			pwdConfirmNotice.text("");
			pwdConfirmNotice.removeClass("msgError");
			pwdConfirmNotice.addClass("msgSuccess");
			return true;
		}
	} else if (pwdConfirm == '') {
		pwdConfirmNotice.text("密码不能为空");
		pwdConfirmNotice.addClass("msgError");
		pwdConfirmNotice.removeClass("msgSuccess");
		return false;
	}
}

function phoneNumberCheck(){
	var phonereg = /^1\d{10}$/;
	var phoneNumber = $("#phoneNumber").val();
	var phoneNumberNotice = $("#phoneNumberNotice");
	if (phoneNumber != '') {
		if (!phonereg.test(phoneNumber)) {
			phoneNumberNotice.text('手机格式不正确');
			phoneNumberNotice.addClass('msgError');
			phoneNumberNotice.removeClass("msgSuccess");
			return false;
		}else{
			phoneNumberNotice.text("");
			phoneNumberNotice.removeClass('msgError');
			phoneNumberNotice.addClass('msgSuccess');
			return true;
		}
	} else if (phoneNumber == '') {
		phoneNumberNotice.text('手机不能为空');
		phoneNumberNotice.addClass('msgError');
		phoneNumberNotice.removeClass("msgSuccess");
		return false;
	}
}

