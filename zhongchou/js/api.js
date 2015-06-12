
/**********************************************************************/
/*获取商品*/
app.apis.getProduct=function(data,fn,err){
	data=app.objs.productTime/*更新时间*/;
	var sendData = {
		model:"product",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(productReturn){
		if(productReturn && productReturn.code && productReturn.code != 0){
		if(productReturn.code == 1){
			app.objs.productTime = productReturn.time;
			app.objs.product.set(productReturn.data)
			}
			fn(app.objs.product.get())
		}else{
			alert("获取商品信息失败")
			err();
			}
	})
	
	}
/*添加商品*/
app.apis.addProduct=function(data,fn,err){
	console.log(data)
	var sendData = {
		model:"product",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(addReturn){
		if(addReturn && addReturn.code){
				fn(addReturn.data)
			}else{
				err()
			}
	});
	}
/*修改商品*/
app.apis.editProduct=function(data,fn,err){
	console.log(data)
	var sendData = {
		model:"product",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(editReturn){
		if(editReturn&&editReturn.code){
			fn(editReturn.data)
		}else{
			err()
		}
	});
	
	}
/*删除商品*/
app.apis.removeProduct=function(data,fn,err){
	
	var sendData = {
		model:"product",
		action:"remove",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(removeReturn){
		if(removeReturn && (removeReturn.code = 1)){
			fn();
		}else{
			err();
		}
	});

	
	
	}
/**********************************************************************/
/*获取客户*/
app.apis.getClient=function(data,fn,err){
	var data = app.objs.clientTime/*更新时间*/
	var sendData = {
		model:"client",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(clientReturn){
		if(clientReturn && clientReturn.code && clientReturn.code != 0){
		if(clientReturn.code == 1){
			app.objs.clientTime = clientReturn.time
			app.objs.client.set(clientReturn.data)
			}
		fn(app.objs.client.get())
		}else{
			alert("获取客户信息失败")
			err()
			}
	});
	
	}
/*添加客户*/
app.apis.addClient=function(data,fn,err){
	console.log(data)
	var sendData = {
		model:"client",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(addReturn){
		if(addReturn && addReturn.code){
			fn(addReturn.data)
		}else{
			err()
		}
	});
	
	}
/*修改客户*/
app.apis.editClient=function(data,fn,err){
	//var data = {
	//	"id":"24253",/*id*/
	//	"type":1,/*类型,1普通用户2管理用户*/
	//	"userName":"用户名",/*用户名*/
	//	"image":"http://",/*头像*/
	//	"place":"地址",/*地址*/
	//	"phone":"18239208903",/*手机*/
	//	"email":"fhdj@email.com",/*邮箱*/
	//	"name":"真实名",/*真实姓名*/
	//	"contacts":"联系人",/*联系人*/
	//	"contactsPhone":"2738948393",/*联系人电话*/
	//	"record":"本科",/*学历*/
	//	"university":"华农",/*毕业院校*/
	//	"job":"这个职位",/*职位*/
	//	"company":"公司"/*公司*/
	//}
	console.log(data)
	var sendData = {
		model:"client",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(editReturn){
		if(editReturn && editReturn.code){
			fn(editReturn.data)
		}else{
			err()
		}
	});

	}
/*删除客户*/
app.apis.removeClient=function(data,fn,err){
	//var data = "eeerf"/*客户id*/
	console.log(data)
	var sendData = {
		model:"client",
		action:"remove",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(removeReturn){
		if(removeReturn && removeReturn.code){
		fn(removeReturn.data)
		}else{
			err();
		}
	});
	
	}

/*检测用户名*/
app.apis.checkUser=function(data,fn,err){
	console.log(data);
	var sendData = {
		model:"client",
		action:"checkUser",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(checkReturn){
		if(checkReturn&&checkReturn.code){
		fn(true);
	}else{
		err();
	}
	});

	
	
	}
/*检测用户名*/
app.apis.checkUserName=function(data,fn,err){
	console.log(data);
	var sendData = {
		model:"client",
		action:"checkUserName",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(checkReturn){
		if(checkReturn&&checkReturn.code){
		fn(checkReturn.data);
	}else{
		err();
	}
	});

	
	
	}
/*检测手机号*/
app.apis.checkPhone=function(data,fn,err){
	//var data = "phone"/*传输入的东西过来*/
	console.log(data)
	var sendData = {
		model:"client",
		action:"checkPhone",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(checkReturn){
		if(checkReturn&&checkReturn.code){
		fn(true);
	}else{
		err();
	}
	});
	
	}
/*检测邮箱*/
app.apis.checkEmail=function(data,fn,err){
	console.log(data)
	//var data = "email"/*传输入的东西过来*/
	var sendData = {
		model:"client",
		action:"checkEmail",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(checkReturn){
		if(checkReturn&&checkReturn.code){
		fn(true);
	}else{
		err();
	}
	});

	}
/*登录*/
app.apis.login=function(data,fn,err){
	//var data = {"userName":"aa",/*登录名/手机/邮箱*/
				//"passWord":"djisk"}/*密码*/
	var sendData = {
		model:"client",
		action:"login",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(loginReturn){
		if(loginReturn && loginReturn.code && loginReturn.code != 0){
		if(loginReturn.code == 1){
			var userSting=JSON.stringify(loginReturn.data[0]);
			Cookies("zc_user",userSting,{expires:60*30});
			app.objs.user.set(loginReturn.data[0])
			}
		fn(app.objs.user.get())
		}else{
			alert("登陆失败");
			err();
			}
	});
	
	}
/*注册*/
app.apis.register=function(data,fn,err){
	
	//var data = {
	//	"id":uuid(),/*id*/
	//	"type":1,/*类型,1普通用户2管理用户*/
	//	"userName":"用户名",/*用户名*/
	//	"sex":"0",
	//	"image":"http://",/*头像*/
	//	"place":"地址",/*地址*/
	//	"phone":"18239208903",/*手机*/
	//	"email":"fhdj@email.com",/*邮箱*/
	//	"name":"真实名",/*真实姓名*/
	//	"contacts":"联系人",/*联系人*/
	//	"contactsPhone":"2738948393",/*联系人电话*/
	//	"record":"本科",/*学历*/
	//	"university":"华农",/*毕业院校*/
	//	"job":"这个职位",/*职位*/
	//	"company":"公司",/*公司*/
	//	"password":"123456"/*密码*/
	//}
	var sendData = {
		model:"client",
		action:"register",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(registerReturn){
		if(registerReturn && registerReturn.code){
		fn(registerReturn.data)
	}else{
		err()
	}
	});
	
	}
/*重置密码*/
app.apis.resetKey=function(data,fn,err){
	console.log(data)
		var sendData = {
		model:"client",
		action:"resetKey",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(resetReturn){
		if(resetReturn && resetReturn.code){
			fn(resetReturn.data);
		}else{
			err();
		}
	});
		
	}
/*获取绑定信息*/
app.apis.getBind=function(data,fn,err){
	var sendData = {
		model:"client",
		action:"getBind",
		data:app.objs.user.get().id
	}
	$.get("http://"+config.sour+":8888/",sendData,function(accountReturn){
		if(accountReturn && accountReturn.code){
		fn(accountReturn.data)
	}else{
		err()
	}
	});
	
	}
/*获取验证吗*/
app.apis.getBindCode=function(data,fn,err){
	console.log(data)
	var sendData = {
		model:"client",
		action:"getBindCode",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(BindReturn){
		if(BindReturn && BindReturn.code){
		fn(BindReturn.data)
	}else{
		err()
	}
	});

	
}
/*绑定*/
app.apis.bind=function(data,fn,err){
	//data={"type":"email","id":"","number":"","code":""}
	var sendData = {
		model:"client",
		action:"bind",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(BindReturn){
		if(BindReturn && BindReturn.code){
		fn(BindReturn.data)
	}else{
		err()
	}
	});
	
	
}

/*获取安全问题*/
app.apis.getSafeQusetion=function(data,fn,err){
	data=app.objs.user.get().id;
	var sendData = {
		model:"client",
		action:"getSafeQusetion",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(qusetionReturn){
		if(qusetionReturn && qusetionReturn.code){
		fn()
	}else{
		err()
	}
	});
	
	}

/*设置安全问题*/
app.apis.setSafeQusetion=function(data,fn,err){
	data=app.objs.user.get().id;
	var sendData = {
		model:"client",
		action:"getSafeQusetion",
		data:data
	}
	$.get("http://"+location.hostname+":8888/",sendData,function(qusetionReturn){
		if(qusetionReturn && qusetionReturn.code){
		fn()
	}else{
		err()
	}
	});
	
	}
/*验证安全问题*/
app.apis.checkSafeQusetion=function(data,fn,err){
	data={"id":"",main:""}
	var sendData = {
		model:"client",
		action:"checkSafeQusetion",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(checkReturn){
		if(checkReturn && checkReturn.code){
		fn(checkReturn.data)
	}else{
		err()
	}
	});
	
	}

app.apis.getCard=function(data,fn,err){
	var sendData = {
		model:"client",
		action:"getBind",
		data:app.objs.user.get().id
	}
	$.get("http://"+config.sour+":8888/",sendData,function(accountReturn){
		if(accountReturn && accountReturn.code){
		fn(accountReturn.data)
	}else{
		err()
	}
	});
	}
/************************************************************************/
/*获取管理员*/
app.apis.getAdmin=function(data,fn,err){
	var data = app.objs.adminTime/*更新时间*/
	var sendData = {
		model:"admin",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(adminReturn){
		if(adminReturn && adminReturn.code && adminReturn.code != 0){
			if(adminReturn.code==1){
				app.objs.adminTime = adminReturn.time;
				var newClient = new app.collections.admin();

				app.objs.admin.set(adminReturn.data)
				}
			fn(app.objs.admin.get());
			}else{
				err();
				}
	});
	
	}
/*添加管理员*/
app.apis.addAdmin=function(data,fn,err){
	//var data = {
		//"id":uuid(),/*id*/
		//"userName":"sfdffgdgdgd",/*帐号*/
		//}
	console.log(data);
	var sendData = {
		model:"admin",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(addReturn){
		if(addReturn && addReturn.code){
			fn()
		}else{
			err()
		}
	});

	}
/*修改管理员*/
app.apis.editAdmin=function(data,fn,err){
	console.log(data)
	var sendData = {
		model:"admin",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(editReturn){
		if(editReturn && editReturn.code){
			fn()
		}else{
			err()
		}
	});
	
	}
/*删除管理员*/
app.apis.removeAdmin=function(data,fn,err){
	//var data = "ddgdgd"/*管理员id*/
	var sendData = {
		model:"admin",
		action:"remove",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(removeReturn){
		if(removeReturn && removeReturn.code){
		fn(removeReturn.data)
	}else{
		err()
	}
	});

	}
/**************************************************************************/
/*获取公告*/
app.apis.getannouncement=function(data,fn,err){
	var data=app.objs.announcementTime/*更新时间*/
	var sendData = {
		model:"announcement",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(announcementReturn){
		if(announcementReturn && announcementReturn.code && announcementReturn.code != 0){
		if(announcementReturn.code==1){
			app.objs.announcementTime = announcementReturn.time
			app.objs.announcement.set(announcementReturn.data)
			}
			fn(app.objs.announcement.get())
		}else{
			alert("获取公告失败")
			err();
			}
	});
	
	
	}
/*添加公告*/
app.apis.addannouncement=function(data,fn,err){
	console.log(data)
		var sendData = {
		model:"announcement",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(addReturn){
		if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	});

	}
/*修改公告*/
app.apis.editannouncement=function(data,fn,err){
	console.log(data)
		var sendData = {
		model:"announcement",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(editReturn){
		if(editReturn && editReturn.code){
		fn()
	}else{
		err()
	}
	});

	}
/*删除公告*/
app.apis.removeannouncement=function(data,fn,err){
	//var data="ehdjk"/*id*/
	console.log(data)
	var sendData = {
		model:"announcement",
		action:"remove",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(removeReturn){
		if(removeReturn && removeReturn.code){
		fn()
	}else{
		err()
	}
	});
	
	}
/******************************************************************************/
/*获取招聘*/
app.apis.getrecruit=function(data,fn,err){
	var data = app.objs.recruitTime/*更新时间*/
	var sendData = {
		model:"recruit",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(recruitReturn){
		console.log(recruitReturn);
		if(recruitReturn && recruitReturn.code && recruitReturn.code !=0){
			if(recruitReturn.code == 1){
				app.objs.recruitTime = recruitReturn.time;
				app.objs.recruit.set(recruitReturn.data)
				}
				fn(app.objs.recruit.get());
			}else{
				alert("获取招聘信息失败")
				err();
				}
	});

		

	}
/*添加招聘*/
app.apis.addrecruit=function(data,fn,err){
console.log(data)
		var sendData = {
		model:"recruit",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(addReturn){
		if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	});
	
	}
/*修改招聘*/
app.apis.editrecruit=function(data,fn,err){
	console.log(data)
		var sendData = {
		model:"recruit",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(editReturn){
		if(editReturn && editReturn.code){
		fn()
	}else{
		err()
	}
	});
	
	}
/*删除招聘*/
app.apis.removerecruit=function(data,fn,err){
	
	var sendData = {
		model:"recruit",
		action:"remove",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(removeReturn){
		if(removeReturn && removeReturn.code){
		fn()
	}else{
		err()
	}
	});

	
	}
/******************************************************************************/
/*获取企业资料*/
app.apis.getcompany=function(data,fn,err){
	var data = app.objs.companyTime;/*更新时间*/
	var sendData = {
		model:"company",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(companyReturn){
		if(companyReturn && companyReturn.code && companyReturn.code !=0){
			if(companyReturn.code == 1){
				app.objs.companyTime = companyReturn.time
				
				app.objs.company.set(companyReturn.data)
				}
				
			fn(app.objs.company.get());
			}else{
				alert("获取企业资料失败")
				err();
				}
	});

		
	
	}
/*添加企业资料*/
app.apis.addcompany=function(data,fn,err){

	var sendData = {
		model:"company",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(addReturn){
		if(addReturn && addReturn.code){
			fn(addReturn.data)
		}else{
			err()
		}
	});
	
	}
/*修改企业资料*/
app.apis.editcompany=function(data,fn,err){

	var sendData = {
		model:"company",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(editReturn){
		if(editReturn && editReturn.code){
		fn(editReturn.data)
	}else{
		err()
	}
	});
	
	}
/*删除企业资料*/
app.apis.removecompany=function(data,fn,err){

	var sendData = {
		model:"company",
		action:"remove",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(removeReturn){
		if(removeReturn && removeReturn.code){
		fn(removeReturn.data)
	}else{
		err()
	}
	});
	
	}
/********************************************************************/
/*获取宣传*/
app.apis.getpromotion=function(data,fn,err){
	var data=app.objs.promotionTime/*更新时间*/
	var sendData = {
		model:"promotion",
		action:"get",
		data:data
	};
	$.support.cors = true;

	$.get("http://"+config.sour+":8888/",sendData,function(promotionReturn){
		if(promotionReturn && promotionReturn.code !=0){
		if(promotionReturn.code == 1){
			app.objs.promotionTime = promotionReturn.time
			app.objs.promotion.set(promotionReturn.data)
			}
		}else{
			alert("获取宣传信息失败")
			}
	fn(app.objs.promotion.get())
	},"json");

	
	}
/*修改宣传*/
app.apis.editpromotion=function(data,fn,err){

	var sendData = {
		model:"promotion",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(editReturn){
		if(editReturn && editReturn.code){
			fn()
		}else{
			err() 
		}
	});
	
	}

/************************************************************************/
/*获取单用户红包*/
app.apis.redPacketDetail=function(data,fn,err){
	var data = "ssfsfs"/*用户id*/
	var sendData = {
		model:"redPacket",
		action:"detail",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(redPacketReturn){
		if(redPacketReturn && redPacketReturn.code && redPacketReturn.code !=0){
			if(redPacketReturn.code == 1){
				app.objs.redPacketTime = redPacketReturn.time;
				app.objs.redPacket.set(redPacketReturn.data);
				}
			fn(app.objs.redPacket.get())
			}else{
				err();
				}
	});
		
	
	}
/*获取所有红包*/
app.apis.getRedPacket=function(data,fn,err){
	var data = app.objs.redPacketTime/*更新时间*/
	var sendData = {
		model:"redPacket",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(getReturn){
		if(getReturn && getReturn.code){
		fn(getReturn.data)
	}else{
		err();
	}
	});
	
	}
/*发红包*/
app.apis.addRedPacket=function(data,fn,err){
	console.log(data)
	var sendData = {
		model:"redPacket",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(addReturn){
		if(addReturn&&addReturn.code){
		fn()
	}else{
		err()
	}
	});

	
	}
/************************************************************************/


/*获取交易*/
app.apis.getdeal=function(data,fn,err){
	data={"time":app.objs.dealTime}

	var sendData = {
		model:"deal",
		action:"get",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(returndata){
		if(returndata && returndata.code && returndata.code != 0){
		if(returndata.code == 1){
			app.objs.deal.set(returndata.data)
			}
		fn(app.objs.deal.get())
		}else{
			alert("登陆失败");
			err();
			}
	});
	
	}
/*添加订单*/
app.apis.adddeal=function(data,fn,err){
	//data={"id":uuid(),"productId":"","userId":"","startTime":10086,"buyPrice":100,"count":100}
	var sendData = {
		model:"deal",
		action:"add",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(returndata){
		if(returndata && returndata.code){
		fn(returndata.data)
	}else{
		err()
	}
	});
	
	}
/*修改订单*/
app.apis.editdeal=function(data,fn,err){
	
	var sendData = {
		model:"deal",
		action:"edit",
		data:JSON.stringify(data)
	}
	$.get("http://"+config.sour+":8888/",sendData,function(returndata){
		if(returndata && returndata.code){
		fn(returndata.data)
	}else{
		err()
	}
	});
	
	}
/*删除订单*/
app.apis.removedeal=function(data,fn,err){
	data={"id":""}
	var sendData = {
		model:"deal",
		action:"remove",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(returndata){
		if(returndata && returndata.code){
		fn(returndata.data)
	}else{
		err()
	}
	});
	
	}
/*获取交易记录*/
app.apis.getdealList=function(data,fn,err){
	data=app.objs.user.get().id;
	var sendData = {
		model:"deal",
		action:"list",
		data:data
	}
	$.get("http://"+config.sour+":8888/",sendData,function(returndata){
		if(returndata && returndata.code){
		fn(returndata.data)
	}else{
		err()
	}
	});
	
	}


/*********************************by Lin*******************************************/
/*添加首页头部的内容*/
app.apis.getHeaderConent=function(data,fn,err){
	fn();
}
app.apis.config = function(data,fn,err){
	var data = {
		
		footerInfo:{
			titleText:"全国首家专业房地产众筹平台",
			slogan:"人人参与  创新投资",
			mobile:"（021）6181-3682",
			fax:"（021）6181-3682",
			time:"（周一至周五 10:00-18:30）",
			number:"400-661-3350",
	      companyName:"上海中筹互联网金融信息服务有限公司",
		  referredToAs:"",
		  companyUrl:"",
	      cooperationEmail:"biz@cncrowd.com",
		  recruitmentEmail:"biz@cncrowd.com",
		  address:["地址：上海市长宁区延安西路1118号","龙之梦大厦2202室&nbsp;&nbsp;&nbsp;&nbsp;","200052"],
	      copRight:"©2014 CNCrowd",
		  record:" 沪ICP备14044695号-1",
	      nav:[{id:"mode",name:"中筹模式"},{id:"product",name:"我要众筹"},{id:"procedure",name:"众筹步聚"},{id:"FAQS",name:"常见问题"},{id:"about",name:"关于我们"}],
	      conText_0:"为全国首家专业房地产众筹平台",
	      conText_1:"致力于通过互联网金融的创新",
	      conText_2:"推动传统房地产投融资模式的变革和创新"
         },
         earnings:{
           titleText:"高收益从何而来",
           dsc:"高收益来自于对市场的深度判断和有力操控",
           earningsRateTitle:"收益率",
           earningsRate:"15%",
           steps:["开始众筹","风险把控","资产来源","每份100元","众筹获利","增值管理","溢价出售"],
           title_2:"众筹",
           image:"images/slide_01.png"
         },
		 logo:"http://",
		 more:"1",
		 change:"1",
         button:[[{id:"login",name:"登录"},{id:"register",name:"注册"}],[{id:"zone",name:"用户中心"},{id:"out",name:"退出"}],[{id:"out",name:"退出"}]],
         nav:[{id:"mode",name:"众筹模式"},{id:"product",name:"我要众筹"},{id:"procedure",name:"众筹步聚"},{id:"FAQS",name:"常见问题"},{id:"about",name:"关于我们"}]
     }
	 fn(data);
}

