$(document).ready(function() {
	
});
function validAuthForm() {
	var userName = $("#userName").val();
	var type = $("#type").val();
	if (userName === "" || type === "") {
		$("#errorMsg").text("所有项均为必填项，请填写！");
	} else {
		$('#authenticateUserForm').submit();
	}
}

function validModifyForm() {
	var userName = $("#userName").val();
	var name = $("#name").val();
	var idCard = $("#idCard").val();
	var phoneNumber = $("#phoneNumber").val();
	var msgValidCode = $("#msgValidCode").val();
	var email = $("#email").val();
	if (userName === "" || phoneNumber === "" || msgValidCode === "") {
		$("#errorMsg").text("所有项均为必填项，请填写！");
	} else {
		$('#modifyUserForm').submit();
	}
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
		o.val("(" + wait + ")秒后重新发送");
		wait--;
		setTimeout(function() {
			sendmsg();
		},
		1000)
	}
}

function sendMsgValidCode() {
	var phoneNum = $("#phoneNumber").val();
	var urlPath = "user/sendMsg?phoneNum=" + phoneNum;
	if ("" !== phoneNum) {
		$("#msgBtn").prop("disabled", "disabled");
		$.ajax({
			type : 'GET',
			url : urlPath,
			dataType : 'json',
			success : function(data) {
		
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) {
		
			}
		});
		sendmsg();
	} else {
		$("#errorMsg").val("请填写手机号！");
	}
}

function modifyUserCheck(){
	var emailreg =/^[\w-\.]+@(?:[A-Za-z0-9-]+\.)+[a-z]+$/;
	var phonereg = /^1\d{10}$/;
	var name = $("#name").val();
	var nameNotice = $('#nameNotice');
	var emerName = $("#emerName").val();
	var emerNameNotice = $('#emerNameNotice');
	var emerTel = $("#emerTel").val();
	var emerTelNotice = $('#emerTelNotice');
	var address = $("#address").val();
	var addressNotice = $('#addressNotice');
	var education = $("#education").val();
	var educationNotice = $('#educationNotice');
	var schoolName = $("#schoolName").val();
	var schoolNameNotice = $('#schoolNameNotice');
	var position = $("#position").val();
	var positionNotice = $('#positionNotice');
	var userCorp = $("#userCorp").val();
	var userCorpNotice = $('#userCorpNotice');
	
	//联系人手机号
	if (emerTel != "") {
		if (!phonereg.test(emerTel)) {
			emerTelNotice.text('手机格式不正确');
			return false;
		}else{
			emerTelNotice.text("");
		}
	};
	
	//有资料修改，才提交表单
	if(name != "${userInfo.name}" 
		|| emerName != "${userInfo.emerName}" 
			|| emerTel != "${userInfo.emerTel}" 
				|| address != "${userInfo.address}" 
					|| education != "${userInfo.education}" 
						|| schoolName != "${userInfo.schoolName}" 
							|| position != "${userInfo.position}" 
								|| userCorp != "${userInfo.userCorp}"){
		return true;
	}
	return false;
}

function updateUserNameCheck(){
	var namereg =/^\w*[a-zA-Z]+\w*$/;
	var userNameNew = $("#userNameNew").val();
	var userNameNewNotice = $("#userNameNewNotice");
	if (userNameNew != '') {
		if(userNameNew.length < 6 || userNameNew.length > 15 ){
			userNameNewNotice.text("用户名长度必须在6至15个字符之间");
			userNameNewNotice.addClass("error");
			return false;
		} else if (!namereg.test(userNameNew)) {
			userNameNewNotice.text("用户名可由字母，数字和下划线组成，且必须包含字母");
			userNameNewNotice.addClass("error");
			return false;
		} else if (checkUseName(userNameNew)==false) {
			userNameNewNotice.text("用户名已存在");
			userNameNewNotice.addClass("error");
			return false;		
		} else {
			userNameNewNotice.text("");
			userNameNewNotice.removeClass("error");	
		}
	} else if (userNameNew == '') {
		userNameNewNotice.text("用户名不能为空");
		userNameNewNotice.addClass("error");
		return false;
	}
	
	return true;
}

function submitProblem(){
	var phoneNumber = $('#phoneNumber').val();
	phoneNumber = phoneNumber.replace(/(^\s*)|(\s*$)/g, "");
	var emailAddr = $('#emailAddr').val();
	emailAddr = emailAddr.replace(/(^\s*)|(\s*$)/g, "");
	var content = $('#problemContent').val();
	content = content.replace(/(^\s*)|(\s*$)/g, "");
	var contactWay="";
	if(phoneNumber=='手机号码' && emailAddr=='电子邮箱'){
		alert("请至少填写一种联系方式！");
		return;
	}
	if(phoneNumber!='手机号码'){
		var phonereg = /^1\d{10}$/;
		if (!phonereg.test(phoneNumber)) {
			alert("请填写正确的手机号码！");
			return;
		}else{
			contactWay = phoneNumber;
		}
	}
	if(emailAddr!='电子邮箱'){
		var mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		if (!mailReg.test(emailAddr)) {
			alert("请填写正确的邮箱地址！");
			return;
		}else{
			if(contactWay==""){
				contactWay = emailAddr;
			}else{
				contactWay = contactWay+"/"+emailAddr;
			}
		}
	}
	if(content=='还有疑问？您可以在这里编辑您的问题......（限300个字）'){
		alert("请填写您的问题！");
		return;
	}
	var ctx = $('#ctx').val();
	$.ajax({
		url: ctx+"/submitProblem",
		type: "POST",
		data: 'contactWay='+contactWay+'&content='+content,
		async:false,
		dataType: "json",
		success: function (data) {
			if(data.rst){
				alert("问题提交成功！");
				window.location.href=ctx+"/faq";
			}
		},
		error: function (data) {
			ret = false;
		}
	});
	
}

/*********************Lin*****************/
    (function(){
    var randstr = function(length){
        var key = {
 
            str : [
                'a','b','c','d','e','f','g','h','i','j','k','l','m',
                'o','p','q','r','s','t','x','u','v','y','z','w','n',
                '0','1','2','3','4','5','6','7','8','9'
            ],
 
            randint : function(n,m){
                var c = m-n+1;
                var num = Math.random() * c + n;
                return  Math.floor(num);
            },
 
            randStr : function(){
                var _this = this;
                var leng = _this.str.length - 1;
                var randkey = _this.randint(0, leng);
                return _this.str[randkey];
            },
 
            create : function(len){
                var _this = this;
                var l = len || 10;
                var str = '';
 
                for(var i = 0 ; i<l ; i++){
                    str += _this.randStr();
                }
 
                return str;
            }
 
        };
 
        length = length ? length : 10;
 
        return key.create(length);
    };
 
    var randint = function(n,m){
        var c = m-n+1;
        var num = Math.random() * c + n;
        return  Math.floor(num);
    };
 
    var vCode = function(dom, options){
        this.codeDoms = [];
        this.lineDoms = [];
        this.initOptions(options);
        this.dom = dom;
        this.init();
        this.addEvent();
        this.update();
        this.mask();
    };
 
    vCode.prototype.init = function(){
        this.dom.style.position = "relative";
        this.dom.style.overflow = "hidden";
        this.dom.style.cursor = "pointer";
        this.dom.title = "点击更换验证码";
        this.dom.style.background = this.options.bgColor;
        this.w = this.dom.clientWidth;
        this.h = this.dom.clientHeight;
        this.uW = this.w / this.options.len;
    };
 
    vCode.prototype.mask = function(){
        var dom = document.createElement("div");
        dom.style.cssText = [
            "width: 100%",
            "height: 100%",
            "left: 0",
            "top: 0",
            "position: absolute",
            "cursor: pointer",
            "z-index: 9999999"
        ].join(";");
 
        dom.title = "点击更换验证码";
 
        this.dom.appendChild(dom);
    };
 
    vCode.prototype.addEvent = function(){
        var _this = this;
        _this.dom.addEventListener("click", function(){
            _this.update.call(_this);
        });
    };
 
    vCode.prototype.initOptions = function(options){
 
        var f = function(){
            this.len = 4;
            this.fontSizeMin = 20;
            this.fontSizeMax = 48;
            this.colors = [
                "green",
                "red",
                "blue",
                "#53da33",
                "#AA0000",
                "#FFBB00"
            ];
            this.bgColor = "#FFF";
            this.fonts = [
                "Times New Roman",
                "Georgia",
                "Serif",
                "sans-serif",
                "arial",
                "tahoma",
                "Hiragino Sans GB"
            ];
            this.lines = 8;
            this.lineColors = [
                "#888888",
                "#FF7744",
                "#888800",
                "#008888"
            ];
 
            this.lineHeightMin = 1;
            this.lineHeightMax = 3;
            this.lineWidthMin = 1;
            this.lineWidthMax = 60;
        };
 
        this.options = new f();
 
        if(typeof options === "object"){
            for(i in options){
                this.options[i] = options[i];
            }
        }
    };
 
    vCode.prototype.update = function(){
        for(var i=0; i<this.codeDoms.length; i++){
            this.dom.removeChild(this.codeDoms[i]);
        }
        for(var i=0; i<this.lineDoms.length; i++){
            this.dom.removeChild(this.lineDoms[i]);
        }
        this.createCode();
        this.draw();
    };
 
    vCode.prototype.createCode = function(){
        this.code = randstr(this.options.len);
    };
 
    vCode.prototype.verify = function(code){
        return this.code === code;
    };
 
    vCode.prototype.draw = function(){
        this.codeDoms = [];
        for(var i=0; i<this.code.length; i++){
            this.codeDoms.push(this.drawCode(this.code[i], i));
        }
 
        this.drawLines();
    };
 
    vCode.prototype.drawCode = function(code, index){
        var dom = document.createElement("span");
 
        dom.style.cssText = [
            "font-size:" + randint(this.options.fontSizeMin, this.options.fontSizeMax) + "px",
            "color:" + this.options.colors[randint(0,  this.options.colors.length - 1)],
            "position: absolute",
            "left:" + randint(this.uW * index, this.uW * index + this.uW - 10) + "px",
            "top:" + randint(0, this.h - 30) + "px",
            "transform:rotate(" + randint(-30, 30) + "deg)",
            "-ms-transform:rotate(" + randint(-30, 30) + "deg)",
            "-moz-transform:rotate(" + randint(-30, 30) + "deg)",
            "-webkit-transform:rotate(" + randint(-30, 30) + "deg)",
            "-o-transform:rotate(" + randint(-30, 30) + "deg)",
            "font-family:" + this.options.fonts[randint(0, this.options.fonts.length - 1)],
            "font-weight:" + randint(400, 900)
        ].join(";");
 
        dom.innerHTML = code;
        this.dom.appendChild(dom);
 
        return dom;
    };
 
    vCode.prototype.drawLines = function(){
        this.lineDoms = [];
        for(var i=0; i<this.options.lines; i++){
            var dom = document.createElement("div");
 
            dom.style.cssText = [
                "position: absolute",
                "opacity: " + randint(3, 8) / 10,
                "width:" + randint(this.options.lineWidthMin, this.options.lineWidthMax) + "px",
                "height:" + randint(this.options.lineHeightMin, this.options.lineHeightMax) + "px",
                "background: " + this.options.lineColors[randint(0, this.options.lineColors.length - 1)],
                "left:" + randint(0, this.w - 20) + "px",
                "top:" + randint(0, this.h) + "px",
                "transform:rotate(" + randint(-30, 30) + "deg)",
                "-ms-transform:rotate(" + randint(-30, 30) + "deg)",
                "-moz-transform:rotate(" + randint(-30, 30) + "deg)",
                "-webkit-transform:rotate(" + randint(-30, 30) + "deg)",
                "-o-transform:rotate(" + randint(-30, 30) + "deg)",
                "font-family:" + this.options.fonts[randint(0, this.options.fonts.length - 1)],
                "font-weight:" + randint(400, 900)
            ].join(";");
            this.dom.appendChild(dom);
 
            this.lineDoms.push(dom);
        }
    };
 
    this.vCode = vCode;
 
}).call(this);