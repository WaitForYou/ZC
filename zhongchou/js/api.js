/*检测用户名*/
app.apis.checkUser=function(data,fn,err){
	fn(true)
	var data = "name"/*传输入的东西过来*/
	var checkReturn = {code:1}
	if(checkReturn&&checkReturn.code){
		fn(true);
	}else{
		err();
	}
	
	}
/*检测手机号*/
app.apis.checkPhone=function(data,fn,err){
	var data = "phone"/*传输入的东西过来*/
	var checkReturn = {code:1}
	if(checkReturn&&checkReturn.code){
		fn(true);
	}else{
		err();
	}
	}
/*检测邮箱*/
app.apis.checkEmail=function(data,fn,err){
	var data = "email"/*传输入的东西过来*/
	var checkReturn = {code:1}
	if(checkReturn&&checkReturn.code){
		fn(true);
	}else{
		err();
	}
	}
/*登录*/
app.apis.login=function(data,fn,err){
	var data = {"userName":"aa",/*登录名/手机/邮箱*/
				"passWord":"djisk"}/*密码*/
	var loginReturn={
					code:1,
					data:{"id":"001","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"}
					}
	if(loginReturn && loginReturn.code && loginReturn.code != 0){
		if(loginReturn.code == 1){
			var newUser = new app.models.member(loginReturn.data);
			app.objs.user.set(newUser)
			}
		fn(app.objs.user.toJSON)
		}else{
			alert("登陆失败");
			err();
			}
	
	}
/*注册*/
app.apis.register=function(data,fn,err){
	var data = {
		"id":uuid(),/*id*/
		"type":1,/*类型,1普通用户2管理用户*/
		"userName":"用户名",/*用户名*/
		"image":"http://",/*头像*/
		"place":"地址",/*地址*/
		"phone":"18239208903",/*手机*/
		"email":"fhdj@email.com",/*邮箱*/
		"name":"真实名",/*真实姓名*/
		"contacts":"联系人",/*联系人*/
		"contactsPhone":"2738948393",/*联系人电话*/
		"record":"本科",/*学历*/
		"university":"华农",/*毕业院校*/
		"job":"这个职位",/*职位*/
		"company":"公司",/*公司*/
		"password":"123456"/*密码*/
	}
	var registerReturn = {code:1}
	if(registerReturn && registerReturn.code){
		fn()
	}else{
		err()
	}
	
	}
/*重置密码*/
app.apis.resetKey=function(data,fn,err){
	var data = {
				id:"2333r3",/*用户id*/
				oldKey:"1231231",/*旧密码*/
				newKey:"532424"/*新密码*/
				}
		var resetReturn = {code:1}
		if(resetReturn && resetReturn.code){
			fn();
		}else{
			err();
		}
	}
/**********************************************************************/
/*获取商品*/
app.apis.getProduct=function(data,fn,err){
	var data = null/*不用传*/
	var productReturn = {
		code : 1,
		time : 10086,
		data : [
				{"id":"001","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"002","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"003","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"004","title":"aa","subhead":"nnnn","image":["http://","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"}
				]
		}
	if(productReturn && productReturn.code && productReturn.code != 0){
		if(productReturn.code == 1){
			app.objs.productTime = productReturn.time;
			var newProduct = new app.collections.product();
			newProduct.add(productReturn.data)
			app.objs.product.set(newProduct)
			}
			fn(app.objs.product.get().toJSON())
		}else{
			alert("获取商品信息失败")
			err();
			}
	
	}
/*添加商品*/
app.apis.addProduct=function(data,fn,err){
	var data = {"id":uuid(),/*id*/
				"title":"aa",/*标题*/
				"subhead":"nnnn",/*副标题*/
				"image":["http://","http://"],/*图片*/
				"price":1000,/*价格*/
				"costPrice":2000,/*原价*/
				"money":20000,/*金额*/
				"payed":10000,/*以筹金额*/
				"payedCount":10,/*众筹笔数*/
				"copy":20,/*份数*/
				"maxTime":10086,/*持有期限*/
				"minUnit":1,/*最小单位*/
				"maxUnit":200,/*最大单位*/
				"tax":8,/*税费预算*/
				"area":1223,/*面积*/
				"costUnitPrice":10,/*原单价*/
				"UnitPrice":9,/*单价*/
				"developer":"你妹",/*开发商*/
				"place":"那个地址",/*地址*/
				"decorate":"一般",/*装修状况*/
				"propertyType":"公寓",/*物业类型*/
				"stratTime":0,/*开始时间*/
				"buildTime":1024,/*建造时间*/
				"rightType":"商业用房",/*产权类型*/
				"haveLease":0,/*有否租约*/
				"yearReturn":"15%以上"/*年收益率*/
			}
	var addReturn = {code:1}
	if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	
	}
/*修改商品*/
app.apis.editProduct=function(data,fn,err){
	var data = {"id":"38u3",/*id*/
				"title":"aa",/*标题*/
				"subhead":"nnnn",/*副标题*/
				"image":["http://","http://"],/*图片*/
				"price":1000,/*价格*/
				"costPrice":2000,/*原价*/
				"money":20000,/*金额*/
				"payed":10000,/*以筹金额*/
				"payedCount":10,/*众筹笔数*/
				"copy":20,/*份数*/
				"maxTime":10086,/*持有期限*/
				"minUnit":1,/*最小单位*/
				"maxUnit":200,/*最大单位*/
				"tax":8,/*税费预算*/
				"area":1223,/*面积*/
				"costUnitPrice":10,/*原单价*/
				"UnitPrice":9,/*单价*/
				"developer":"你妹",/*开发商*/
				"place":"那个地址",/*地址*/
				"decorate":"一般",/*装修状况*/
				"propertyType":"公寓",/*物业类型*/
				"stratTime":0,/*开始时间*/
				"buildTime":1024,/*建造时间*/
				"rightType":"商业用房",/*产权类型*/
				"haveLease":0,/*有否租约*/
				"yearReturn":"15%以上"/*年收益率*/
			}
	var editReturn = {code:1}
	if(editReturn&&editReturn.code){
		fn()
	}else{
		err()
	}
	
	}
/*删除商品*/
app.apis.removeProduct=function(data,fn,err){
	var data = "ddssfs"/*商品id*/
	var removeReturn={code:1};
	if(removeReturn && (removeReturn.code = 1)){
		fn();
	}else{
		err();
	}
	
	}
/**********************************************************************/
/*获取客户*/
app.apis.getClient=function(data,fn,err){
	var data = app.objs.clientTime/*更新时间*/
	var clientReturn={
		code:1,
		time:10086,
		data:[
			{"id":"001","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"002","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"003","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"004","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
			{"id":"005","type":1,"userName":"aa","image":"http://","place":"bb","phone":"6575798","email":"dcghf@tgh.com","name":"fdgh","contacts":"sddfsf","contactsPhone":"34242","record":"本科","university":"你妹的学校","job":"做你妹","company":"你妹的"},
		]
		}
	if(clientReturn && clientReturn.code && clientReturn.code != 0){
		if(clientReturn.code == 1){
			app.objs.clientTime = clientReturn.time
			var newClient = new app.collections.client();
			newClient.add(clientReturn.data)
			app.objs.client.set(newClient)
			}
		fn(app.objs.client.get().toJSON())
		}else{
			alert("获取客户信息失败")
			err()
			}
	
	}
/*添加客户*/
app.apis.addClient=function(data,fn,err){
	var data = {
		"id":uuid(),/*id*/
		"type":1,/*类型,1普通用户2管理用户*/
		"userName":"用户名",/*用户名*/
		"image":"http://",/*头像*/
		"place":"地址",/*地址*/
		"phone":"18239208903",/*手机*/
		"email":"fhdj@email.com",/*邮箱*/
		"name":"真实名",/*真实姓名*/
		"contacts":"联系人",/*联系人*/
		"contactsPhone":"2738948393",/*联系人电话*/
		"record":"本科",/*学历*/
		"university":"华农",/*毕业院校*/
		"job":"这个职位",/*职位*/
		"company":"公司"/*公司*/
	}
	var addReturn = {code:1}
	if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	
	}
/*修改客户*/
app.apis.editClient=function(data,fn,err){
	var data = {
		"id":"24253",/*id*/
		"type":1,/*类型,1普通用户2管理用户*/
		"userName":"用户名",/*用户名*/
		"image":"http://",/*头像*/
		"place":"地址",/*地址*/
		"phone":"18239208903",/*手机*/
		"email":"fhdj@email.com",/*邮箱*/
		"name":"真实名",/*真实姓名*/
		"contacts":"联系人",/*联系人*/
		"contactsPhone":"2738948393",/*联系人电话*/
		"record":"本科",/*学历*/
		"university":"华农",/*毕业院校*/
		"job":"这个职位",/*职位*/
		"company":"公司"/*公司*/
	}
	var editReturn = {code:1}
	if(editReturn && editReturn.code){
		fn()
	}else{
		err()
	}
	}
/*删除客户*/
app.apis.removeClient=function(data,fn,err){
	var djish = "eeerf"/*客户id*/
	var removeReturn = {code:1}
	if(removeReturn && removeReturn.code){
		fn()
	}
	
	}
/************************************************************************/
/*获取管理员*/
app.apis.getAdmin=function(data,fn,err){
	var data = app.objs.adminTime/*更新时间*/
	var adminReturn={
					code:1,
					time:10086,
					data:[
						{"id":"001","userName":"","client":false,"admin":false,"announcement":false,"recruit":false,"company":false,"product":false,"promotion":false,"redPacket":false},
						{"id":"002","userName":"","client":false,"admin":false,"announcement":false,"recruit":false,"company":false,"product":false,"promotion":false,"redPacket":false},
						{"id":"003","userName":"","client":false,"admin":false,"announcement":false,"recruit":false,"company":false,"product":false,"promotion":false,"redPacket":false},
						{"id":"004","userName":"","client":false,"admin":false,"announcement":false,"recruit":false,"company":false,"product":false,"promotion":false,"redPacket":false}
					]
					}
		if(adminReturn && adminReturn.code && adminReturn.code != 0){
			if(adminReturn.code==1){
				app.objs.adminTime = adminReturn.time;
				var newClient = new app.collections.admin();
				newClient.add(adminReturn.data)
				app.objs.admin.set(newClient)
				}
			fn(app.objs.admin.toJSON);
			}else{
				err();
				}
	
	}
/*添加管理员*/
app.apis.addAdmin=function(data,fn,err){
	var data = {
		"id":uuid(),/*id*/
		"userName":"sfdffgdgdgd",/*帐号*/
		"type":2,/*类型,1普通用户2管理用户*/
		"client":false,/*用户管理*/
		"admin":false,/*管理员管理*/
		"announcement":false,/*公告管理*/
		"recruit":false,/*招聘管理*/
		"company":false,/*企业信息管理*/
		"product":false,/*商品管理*/
		"promotion":false,/*宣传管理*/
		"redPacket":false/*红包管理*/
		}
	var addReturn = {code:1}
	if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	}
/*修改管理员*/
app.apis.editAdmin=function(data,fn,err){
	var data = {
		"id":"fssfs",/*id*/
		"userName":"sfdffgdgdgd",/*帐号*/
		"type":2,/*类型,1普通用户2管理用户*/
		"client":false,/*用户管理*/
		"admin":false,/*管理员管理*/
		"announcement":false,/*公告管理*/
		"recruit":false,/*招聘管理*/
		"company":false,/*企业信息管理*/
		"product":false,/*商品管理*/
		"promotion":false,/*宣传管理*/
		"redPacket":false/*红包管理*/
		}
	var editReturn = {code:1}
	if(editReturn && editReturn.code){
		fn()
	}else{
		err()
	}
	}
/*删除管理员*/
app.apis.removeAdmin=function(data,fn,err){
	var data = "ddgdgd"/*管理员id*/
	var removeReturn = {code:1}
	if(removeReturn && removeReturn.code){
		fn()
	}else{
		err()
	}
	}
/**************************************************************************/
/*获取公告*/
app.apis.getannouncement=function(data,fn,err){
	var data=app.objs.announcementTime/*更新时间*/
	var announcementReturn={
		code:1,
		time:10086,
		data:[
				{"id":"001","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"002","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"003","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"004","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0},
				{"id":"005","title":"中筹网金唐人：2015，房地产众筹怎么玩？","message":"中筹网金唐人：2015，房地产众筹怎么玩？","start":0,"end":0}
			]
		}
	if(announcementReturn && announcementReturn.code && announcementReturn.code != 0){
		if(announcementReturn.code==1){
			app.objs.announcementTime = announcementReturn.time
			var newAnnouncement= new app.collections.message();
			newAnnouncement.add(announcementReturn.data)
			app.objs.announcement.set(newAnnouncement)
			}
			fn(app.objs.announcement.get().toJSON())
		}else{
			alert("获取公告失败")
			err();
			}
	
	}
/*添加公告*/
app.apis.addannouncement=function(data,fn,err){
	var data={
		"id":uuid(),/*id*/
		"title":"eee",/*标题*/
		"message":"rewr",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
	var addReturn = {code:1}
	if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	}
/*修改公告*/
app.apis.editannouncement=function(data,fn,err){
	var data={
		"id":"sfs",/*id*/
		"title":"eee",/*标题*/
		"message":"rewr",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
	var editReturn = {code:1}
	if(editReturn && editReturn.code){
		fn()
	}else{
		err()
	}
	}
/*删除公告*/
app.apis.removeannouncement=function(data,fn,err){
	var data="ehdjk"/*id*/
	var removeReturn = {code:1}
	if(removeReturn && removeReturn.code){
		fn()
	}else{
		err()
	}
	}
/******************************************************************************/
/*获取招聘*/
app.apis.getrecruit=function(data,fn,err){
	var data = null/*不用传*/
	var recruitReturn = {
						code:1,
						time:10086,
						data:[
						{"id":"001","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"002","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"003","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"004","title":"bhk","message":"fkdjf","start":0,"end":1008611},
						{"id":"005","title":"bhk","message":"fkdjf","start":0,"end":1008611}
						]
						}
		if(recruitReturn && recruitReturn.code && recruitReturn.code !=0){
			if(recruitReturn.code == 1){
				app.objs.recruitTime = recruitReturn.time;
				var newRecruit= new app.collections.message();
				newRecruit.add(recruitReturn.data)
				app.objs.recruit.set(newRecruit)
				}
				fn(app.objs.recruit.get().toJSON());
			}else{
				alert("获取招聘信息失败")
				err();
				}

	}
/*添加招聘*/
app.apis.addrecruit=function(data,fn,err){
	var data = {
		"id":uuid(),/*id*/
		"title":"dssfs",/*标题*/
		"message":"sfsfs",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}

	var addReturn = {code:1}
	if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	}
/*修改招聘*/
app.apis.editrecruit=function(data,fn,err){
	var data = {
		"id":"errdgd",/*id*/
		"title":"dssfs",/*标题*/
		"message":"sfsfs",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}

	var editReturn = {code:1}
	if(editReturn && editReturn.code){
		fn()
	}else{
		err()
	}
	}
/*删除招聘*/
app.apis.removerecruit=function(data,fn,err){
	var data = "dsfsg"/*招聘id*/
	var removeReturn = {code:1}
	if(removeReturn && removeReturn.code){
		fn()
	}else{
		err()
	}
	}
/******************************************************************************/
/*获取企业资料*/
app.apis.getcompany=function(data,fn,err){
	var data = app.objs.companyTime;/*更新时间*/
	var companyReturn = {
						code : 1,
						time : 10086,
						data : [
								{"id":"001","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"002","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"003","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"004","title":"dhfkh","message":"edgdf","start":0,"end":1008611},
								{"id":"005","title":"dhfkh","message":"edgdf","start":0,"end":1008611}
								]
						}
		if(companyReturn && companyReturn.code && companyReturn.code !=0){
			if(companyReturn.code == 1){
				app.objs.companyTime = companyReturn.time
				var newCompany = new app.collections.message();
				newCompany.add(companyReturn.data);
				app.objs.company.set(newCompany)
				}
			fn(app.objs.company.get().toJSON());
			}else{
				alert("获取企业资料失败")
				err();
				}
	
	}
/*添加企业资料*/
app.apis.addcompany=function(data,fn,err){
	var data={
		"id":uuid(),/*id*/
		"title":"erree",/*标题*/
		"message":"erreer",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
	var addReturn = {code:1}
	if(addReturn && addReturn.code){
		fn()
	}else{
		err()
	}
	}
/*修改企业资料*/
app.apis.editcompany=function(data,fn,err){
	var data={
		"id":"dsfs",/*id*/
		"title":"erree",/*标题*/
		"message":"erreer",/*内容*/
		"start":0,/*生效时间*/
		"end":0/*结束时间*/
		}
	var editReturn = {code:1}
	if(editReturn && editReturn.code){
		fn()
	}else{
		err()
	}
	}
/*删除企业资料*/
app.apis.removecompany=function(data,fn,err){
	var data="dfsf"/*资料id*/
	var removeReturn={code:1}
	if(removeReturn && removeReturn.code){
		fn()
	}else{
		err()
	}
	}
/********************************************************************/
/*获取宣传*/
app.apis.getpromotion=function(data,fn,err){
	var data=null/*不用传*/
	var promotionReturn = {
		code : 1,
		time : 10086,
		data : {
			"index":{
						"visualPic":{
							id:"001",
							name:"首页大图",
							dsc:"不说",
							data:[
									{"id":"001","name":"","image":"http://","dsc":"","job":"",group:"001"}
								]
						},
						"introduceVideo":{
							id:"002",
							name:"我们是做什么的",
							dsc:"提供最低的投资们门槛、最赚钱的投资模式、最简单的投资流程，助你实现投资梦想。",
							data:[
									{"id":"002","name":"马博士课堂第三期","image":"http://","dsc":"新年理财第一步，关注房地产众筹","job":"",group:"002"},
									{"id":"003","name":"房地产众筹","image":"http://","dsc":"了解我们如何创造高收益","job":"",group:"002"},
									{"id":"004","name":"大佬观点","image":"http://","dsc":"投资新观点，专业权威解读","job":"",group:"002"},
								]
						},
						"introducePic":{id:"003",
							name:"首页下部大图",
							dsc:"不说",
							data:[
									{"id":"005","name":"","image":"http://","dsc":"","job":"",group:"003"}
								]
						},
						"visualPic":{id:"004",
							name:"360°全方位风险控制",
							dsc_1:"风险控制,小组由专业、稳健、实战经验丰富的房地产相关产业链专家组成",
							dsc:"从投前筛选、投后管理到获利退出，全方位为众筹人保驾护航。",
							data:[
									{"id":"006","name":"袭刚","image":"http://","dsc":"曾任通用电气资本公司全球地产及鼎晖地产基金创始合伙人","job":"风控",group:"004","zhiJi":"组长"},
									{"id":"007","name":"周雪爽","image":"http://","dsc":"华诚律师事务所合伙人，丰富的地产及金融法律服务经验","job":"法律",group:"004"},
									{"id":"008","name":"谢猛虎","image":"http://","dsc":"中礁资产管理公司总经理，丰富的商业及工业地产等全产业链实践经验","job":"资管",group:"004"},
									{"id":"009","name":"李明","image":"http://","dsc":"沪港国际咨询集团副总经理，丰富的咨询、会计及评估领域服务经验","job":"评估",group:"004"},
									{"id":"010","name":"郑福泉","image":"http://","dsc":"中瑞岳华税务师事务所合伙人，曾任百安居中国税务总监","job":"税务",group:"004"}
								]
						},
					},
			"mode":[
					{id:"005",
					name:"众筹模式",
					dsc:"不说",
					data:[
							{"id":"011","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"012","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"013","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"014","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"015","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"016","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"017","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"018","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"019","name":"","image":"http://","dsc":"","job":"",group:"005"},
							{"id":"020","name":"","image":"http://","dsc":"","job":"",group:"005"}
						]
					}
					],
			"procedure":[
						{id:"013",
						name:"大图",
						dsc:"不说"
						data:[{"id":"021","name":"","image":"http://","dsc":"","job":"",group:"013"}]
								},
						{id:"006",
						name:"众筹步聚",
						dsc:"不说",
						data:[
								{"id":"021","name":"","image":"http://","dsc":"","job":"",group:"006"},
								{"id":"022","name":"","image":"http://","dsc":"","job":"",group:"006"},
								{"id":"023","name":"","image":"http://","dsc":"","job":"",group:"006"},
								{"id":"024","name":"","image":"http://","dsc":"","job":"",group:"006"},
								{"id":"025","name":"","image":"http://","dsc":"","job":"",group:"006"},
								{"id":"026","name":"","image":"http://","dsc":"","job":"",group:"006"}
							]
						}
						],
			"FAQS":[

					{id:"007",
					name:"常见问题",
					dsc:"不说",
					data:[
							{"id":"027","name":"在中筹网金平台，需要多少钱才可以参与投资？","image":"","dsc":"中筹网金平台众筹者最低认购额度仅为100元人民币。中筹网金就是让普通大众能以较少金额，参与投资千万级别的房产项目，享受高端投资者才能享有的投资机会和收益。","job":"",group:"007"},
							{"id":"028","name":"整个众筹过程中，中筹网金承担什么角色？","image":"","dsc":"“中筹网金”为提供众筹信息的第三方平台，不参与众筹和资产运作。平台在项目交易过程中，仅作为项目众筹的交易平台，提供一个信息收集、呈现、及发布的角色，众筹者与房产开发商（或持有人）本着自愿的原则完成相关交易。","job":"",group:"007"},
							{"id":"029","name":"急用钱资金周转不过来，中途是否可以自由转让众筹份额？","image":"","dsc":"参与众筹者可在规定期限后，到平台即将上线的【转让中心】频道，进行项目众筹份额协议转让。最大限度地提高您的资金流动性，不必担心资金周转不过来。","job":"",group:"007"},
							{"id":"030","name":"房地产众筹，为什么会有如此高的收益空间？","image":"","dsc":"中筹网金平台的所有项目均是开发商直接申请进行众筹合作项目，获最低折扣的同时，通过网络平台简化链条，砍掉中介的佣金和银行贷款利率，所以会让项目众筹价格更低廉；成功众筹的项目，在持有期间会有机会参与项目的租金分红，升值后投票售出、转让，都会产生无限的收益空间。市场分析得出，房地产众筹项目的预期年化收益率达15%以上。 ","job":"",group:"007"},
							{"id":"031","name":"退出机制中，众筹的项目如何投票出售？","image":"","dsc":"众筹者成功众筹的项目，最长持有期限不超过12个月，是目前市面上最短“去化期限”的房地产众筹平台。 成功众筹的项目托管方-第三方资产管理公司可寻找到买家，参与众筹者可投票决定是否售出，一人一票制，参与众筹者投票超过51%即为通过，方可售出获得投资收益。","job":"",group:"007"},
							{"id":"032","name":"在交易环节，中筹网金如何保障众筹者的利益的？","image":"","dsc":"①平台众筹项目中所涉及的各个交易环节均严格依照法律政策规定，并经过平台风险控制小组严格把控；②众筹者所有资金全权托管于第三方托管账户（汇付天下），全程定向流入流出，并在个人中心更新资金明细；③众筹者和房产开发商双方会根据协议，项目全权由第三方资产管理公司管理，保障众筹的合法权益和利益。","job":"",group:"007"}
						]
					}
					],
			"team":[
					{id:"008",
					name:"创始团队",
					dsc:"不说",
					data:[
							{"id":"033","name":"","image":"http://","dsc":"","job":"",group:"008"}
						]
					},
					{id:"009",
					name:"风险控制小组",
					dsc:"不说",
					data:[
							{"id":"032","name":"龚刚","image":"http://","dsc":"现任北京和天津的投资公司和基金公司的创始人及管理人。 二十二年国内及海外十多个国家房地产及金融投资和管理经验，美国通用电气资本公司全球地产特殊机会投资部的创始人， 国内最大私募股权基金鼎晖投资的地产基金创始合伙人。在国内，成功投资、开发和管理了多个从最南（三亚）到最北（哈尔滨）的地标及创新型项目， 任四十多家地产投资及开发公司、基金及管理公司的法人代表、董事长、执行董事等；在美洲、欧洲、亚洲等地投资并管理过上百亿美元的资产组合。","job":"风控组长",group:"009"},
							{"id":"033","name":"周雪爽","image":"http://","dsc":"现任上海华诚律师事务所合伙人。毕业于上海交通大学。周律师在金融、房地产、互联网等法律领域有着丰富的经验，他带领的律师团队从2004年开始服务建行、中行、光大、广发等多家商业银行，提供了超过4万笔的风险防控及不良资产处置法律服务。 周律师同时拥有深厚的互联网行业和企业法律服务背景，担任包括大型企业集团，新兴中小企业等多家企业常年法律顾问。","job":"法律法规",group:"009"},
							{"id":"034","name":"谢猛虎","image":"http://","dsc":"现任上海中礁资产管理公司总经理。曾就职于上海某商业地产集团公司，长期从事商业类地产，工业地产等的投资咨询，代理，交易，运营，顾问等服务工作。专注于为银行，信托，基金，政府等部门进行房地产方面的全产业链服务。包括存量资 产，不良资产的盘活，处置，评估，融资等。负责资产交易风险控制，特殊投资机会的策略建议，资产管理和增值运营。","job":"资产管理",group:"009"},
							{"id":"035","name":"李明","image":"http://","dsc":"现任沪港国际咨询集团有限公司副总经理、上海璨石资产管理有限公司董事长。沪港国际咨询集团有限公司由上海沪港建设咨询、上海沪港金茂会计师事务所、上海沪港资产评估、上海沪港房地产估价、上海沪港项目投资咨询、上海建设审计进修学院等单位组建而成的集团型中介组织。有工程造价咨询甲级资质、招标代理甲级资质、工程咨询甲级资质、上海市政府采购招标甲级资质、司法审计等资质。","job":"评估咨询",group:"009"},
							{"id":"036","name":"郑福泉","image":"http://","dsc":"现任中瑞岳华税务师事务所合伙人。郑福泉先生毕业于上海外国语大学，现任上海财经大学兼职导师。郑福泉先生在国际知名事务所从事中国税务咨询超过10年，并曾任百安居中国税务总监。在税务合规性、税务审核、尽职调查、交易架构、投资、资金汇回、企业并购、公司上市、企业业务模式和税务审计风险防范等方面有着倍受认可的的工作业绩。","job":"税务管理",group:"009"}
						]
					},
					{id:"010",
					name:"马博士课堂",
					dsc:"不说",
					data:[
							{"id":"037","name":"马红漫","image":"http://","dsc":"经济学博士，著名财经主持人、制片人、资深财经评论员、上海十大青年经济人物。 现为第一财经《财经关键词》、《头脑风暴》主持人，《财经夜行线》新闻主播，东方卫视《东方夜新闻》新闻评论员。长期担任《第一财经日报》、《环球时报》、《人民日报》、《解放日报》等国内知名平面媒体专栏作者与评论员工作。拥有丰富的高端财经论坛主持评论经验，担任博鳌亚洲论坛、上海浦东新年论坛、虹桥论坛、全国私人银行论坛等各类高端财经论坛活动评论工作。","job":"",group:"010"}
						]
					},
					{id:"011",
					name:"荣誉顾问",
					dsc:"不说",
					data:[
							{"id":"038","name":"杨介生","image":"http://","dsc":'上海浙江商会执行副会长、上海温州商会名誉会长、上海锦丽斯投资集团有限公司董事长。 中共党员，上海市长宁区第十三届人大代表；上海市长宁区第十二届政协委员；上海温州商会第二届、第三届会长；温州市第八届、第九届政协委员；世界温州人联谊总会常务副会长。1998年获"上海十大杰出青年"提名，1998年获“温州改革开放风云人物”荣誉称号，1999年获上海市十大优秀青年企业家"金鹰奖"，2008年获评温州“改革开放30年在外风云温商30人”之一。',"job":"",group:"011"}
						]
					}
					],
			"idea":[
					{id:"012",
					name:"经营理念",
					dsc:"不说",
					data:[
							{"id":"039","name":"","image":"http://","dsc":"【平台理念】 人人参与 创新投资【平台愿景】 致力于创新房地产的投资方式，结合互联网突破传统投资理念，为市场提供新的稳健、安全、收益高的投资理财渠道中筹网金是全国首家专业房地产众筹平台，利用最新的互联网革新，旨在改变中国6.6亿人投资房地产经济的方式。通过整合线上线下资源，精心筛选众筹资产源头、缩短交易中间环节、专业化投后管理，创新变革传统的金融和房地产行业；平台打造由专业、稳健、实战经验丰富的房地产相关产业链专家组成，从投前筛选到投后管理，全方位为众筹人保驾护航，通过市场的错位、信息的错位等来获利。通过降低投资门槛，使投资更普惠化。透过互联网让大众参与，建立价值过滤体系，营造良好的诚信机制，低门槛，高回报，重安全，以大众的力量，“普惠金融 和谐共富”，链接了普通大众和开发商的价值链条，通过互联网和互联网金融影响和改变房地产行业的模式，让广大网民和普通的投资者能享受到专业的投资服务和高收益的投资机会。中筹网金2014.10.10","job":"",group:"012"}
						]
					}	
					]
			}
		}
	if(promotionReturn && promotionReturn.code !=0){
		if(promotionReturn.code == 1){
			app.objs.promotionTime = promotionReturn.time
			app.objs.promotion.set(promotionReturn.data)
			}
		}else{
			alert("获取宣传信息失败")
			}
	fn(app.objs.promotion.get())
	}

/*修改宣传*/
app.apis.editpromotion=function(data,fn,err){
	var data = {
		page:"index",/*所在页面*/
		data:[{id:"001",/*组id*/
						title:"首页大图",/*组名*/
						dsc:"不说",/*组描述*/
						data:[
								{"id":"001","name":"","image":"http://","dsc":"","job":"",group:"001"}/*单个的*/
							]
						}] 
	}
	var editReturn = {code:1}
	if(editReturn && editReturn.code){
		fn()
	}else{
		err() 
	}
	}

/************************************************************************/
/*获取单用户红包*/
app.apis.redPacketDetail=function(data,fn,err){
	var data = "ssfsfs"/*用户id*/
	var redPacketReturn = {
							code:1,
							time:10086,
							data:[
								{"id":"001","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"002","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"003","userId":"001","money":0,"type":0,"strat":0,"end":0}
								]
							}
		if(redPacketReturn && redPacketReturn.code && redPacketReturn.code !=0){
			if(redPacketReturn.code == 1){
				app.objs.redPacketTime = redPacketReturn.time;
				var newPacket = new app.collections.redPacket();
				newPacket.add(redPacketReturn.data);
				app.objs.redPacket.set(newPacket);
				}
			fn(app.objs.redPacket.get().toJSON())
			}else{
				err();
				}
	
	}
/*获取所有红包*/
app.apis.getRedPacket=function(data,fn,err){
	var data = null/*不传*/
	var getReturn = {
		code:1,
		data:[
								{"id":"001","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"002","userId":"001","money":0,"type":0,"strat":0,"end":0},
								{"id":"003","userId":"001","money":0,"type":0,"strat":0,"end":0}
								]
	}
	if(getReturn && getReturn.code){
		fn()
	}else{
		err();
	}
	}
/*发红包*/
app.apis.addRedPacket=function(data,fn,err){
	var data = {
		"id":uuid(),/*id*/
		"userId":"sfsgsf",/*用户id*/
		"money":0,/*金额*/
		"type":0,/*类型*/
		"strat":0,/*发放日期*/
		"end":0/*消费日期*/
		}
	var addReturn={code:1}
	if(addReturn&&addReturn.code){
		fn()
	}else{
		err()
	}
	}
/************************************************************************/
/*获取帐户信息*/
app.apis.getAccount=function(data,fn,err){
	fn();
	}
/*获取安全问题*/
app.apis.getSafeQusetion=function(data,fn,err){
	fn();
	}
/*验证安全问题*/
app.apis.checkSafeQusetion=function(data,fn,err){
	fn();
	}
/*获取交易*/
app.apis.getdeal=function(data,fn,err){
	fn()
	}
/*添加订单*/
app.apis.adddeal=function(data,fn,err){
	fn()
	}
/*修改订单*/
app.apis.editdeal=function(data,fn,err){
	fn()
	}
/*删除订单*/
app.apis.removedeal=function(data,fn,err){
	fn()
	}
/*获取交易记录*/
app.apis.getdealList=function(data,fn,err){
	fn()
	}
/*确认交易*/
app.apis.confirmDeal=function(data,fn,err){
	fn()
	}
/*付款*/
app.apis.payDeal=function(data,fn,err){
	fn()
	}
/*充值*/
app.apis.recharge=function(data,fn,err){
	fn()
	}
/*提现*/
app.apis.paid=function(data,fn,err){
	fn()
	}

/*********************************by Lin*******************************************/
/*添加首页头部的内容*/
app.apis.getHeaderConent=function(data,fn,err){
	fn();
}
app.apis.config = function(data,fn,err){
	var data = {
		footerInfo:{titleText:"全国首家专业房地产众筹平台",slogan:"人人参与  创新投资",mobile:"（021）6181-3682",fax:"（021）6181-3682",time:"（周一至周五 10:00-18:30）",number:"400-661-3350",
	      companyName:"上海中筹互联网金融信息服务有限公司",referredToAs:"",companyUrl:"",
	      cooperationEmail:"biz@cncrowd.com",recruitmentEmail:"biz@cncrowd.com",address:["地址：上海市长宁区延安西路1118号","龙之梦大厦2202室&nbsp;&nbsp;&nbsp;&nbsp;","200052"],
	      copRight:"©2014 CNCrowd",record:" 沪ICP备14044695号-1",
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
           image:"http://"
         },
         button:[[{id:"login",name:"登陆"},{id:"register",name:"注册"}],[{id:"zone",name:"用户中心"},{id:"out",name:"退出"}],[{id:"out",name:"退出"}]],
         nav:[{id:"mode",name:"众筹模式"},{id:"product",name:"我要众筹"},{id:"procedure",name:"众筹步聚"},{id:"FAQS",name:"常见问题"},{id:"about",name:"关于我们"}]
     }
	 fn(data);
}

