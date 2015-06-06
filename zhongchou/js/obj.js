/****************************************************************************************/
app.objs.uploadUrl = []
app.objs.uploadOk = [];
/****************************************************************************************/
(function(objs){

	/*用户信息*/
	var userMessage=null;
	/*商品信息*/
	var product = null;
	/*客户列表*/
	var client = null;
	/*管理员列表*/
	var admin = null;
	/*公告列表*/
	var announcement = null;
	/*招聘列表*/
	var recruit = null;
	/*企业信息列表*/
	var company = null;
	/*宣传列表*/
	var promotion = null;
	/*红包列表*/
	var redPacket = null;
	/*交易信息*/
	var deal = null;
/***************************************************************************/	
objs.user={}
	objs.user.get = function(){
		if(!userMessage&&$.cookie("zc_user")){
			userMessage=JSON.parse($.cookie("zc_user"));
			}
		return	userMessage
		}
	objs.user.set = function(data){
		if(data){
			userMessage=data
			}
		}
/***************************************************************************/	
objs.deal={}
	objs.deal.get = function(){
		return	deal
		}
	objs.deal.set = function(data){
		if(data){
			deal=data
			}
		}
	
/***************************************************************************/	
objs.product = {}
	objs.product.get = function(){
		return product
	}
	objs.product.set = function(data){
		product = data;
		}
/***************************************************************************/		

objs.client = {}
	objs.client.get = function(){
		return client
	}
	objs.client.set = function(data){
		client = data;
		}
/***************************************************************************/		

objs.admin = {}
	
	objs.admin.get = function(){
		return admin
	}
	objs.admin.set = function(data){
		admin = data;
		}
/***************************************************************************/		

objs.announcement = {}
	
	objs.announcement.get = function(){
		return announcement
	}
	objs.announcement.set = function(data){
		announcement = data;
		}
/***************************************************************************/	

objs.recruit = {}
	
	objs.recruit.get = function(){
		return recruit
	}
	objs.recruit.set = function(data){
		recruit = data;
		}
/***************************************************************************/		

objs.company = {}
	
	objs.company.get = function(){
		return company
	}
	objs.company.set = function(data){
		company = data;
		}
/***************************************************************************/	

objs.promotion = {}
	
	objs.promotion.get = function(){
		return promotion
	}
	objs.promotion.set = function(data){
		promotion = data;
		}
/***************************************************************************/		

objs.redPacket = {}
objs.redPacket.get = function(){
		return redPacket
	}
objs.redPacket.set = function(data){
		redPacket = data;
		}
/***************************************************************************/	

	})(app.objs)
/****************************************************************************************/
app.objs.userTime = 0;
app.objs.productTime = 0;
app.objs.clientTime = 0;
app.objs.adminTime = 0;
app.objs.announcementTime = 0;
app.objs.recruitTime = 0;
app.objs.companyTime = 0;
app.objs.promotionTime = 0;
app.objs.redPacketTime = 0;
app.objs.dealTime=0;
/****************************************************************************************/

app.objs.headV = new app.views.head();
app.objs.footV = new app.views.foot();
app.objs.middleV = new app.views.middle();
app.objs.indexV = new app.views.index();
app.objs.modeV = new app.views.mode();
app.objs.productV = new app.views.product();
app.objs.procedureV = new app.views.procedure();
app.objs.FAQSV = new app.views.FAQS();
app.objs.aboutV = new app.views.about();
app.objs.productDetailV = new app.views.productDetail();
app.objs.announcementDetailV = new app.views.announcementDetail();
app.objs.accountV = new app.views.account();
app.objs.rechargeV = new app.views.recharge();
app.objs.paidV = new app.views.paid();
app.objs.cardV = new app.views.card();
app.objs.capitalDetailV = new app.views.capitalDetail();
app.objs.redPacketDetailV = new app.views.redPacketDetail();
app.objs.safeQusetionV = new app.views.safeQusetion();
app.objs.emailVerifyV = new app.views.emailVerify();
app.objs.setPhoneV = new app.views.setPhone();
app.objs.setDetailV = new app.views.setDetail();
app.objs.setPassWordV = new app.views.setPassWord();
app.objs.adminManageV = new app.views.adminManage();
app.objs.announcementManageV = new app.views.announcementManage();
app.objs.clientManageV = new app.views.clientManage();
app.objs.clientDetailV = new app.views.clientDetail();
app.objs.procedureManageV = new app.views.procedureManage();
app.objs.recruitManageV = new app.views.recruitManage();
app.objs.companyManageV = new app.views.companyManage();
app.objs.promotionManageV = new app.views.promotionManage();
app.objs.loginV = new app.views.login();
app.objs.registerV = new app.views.register();
app.objs.redPacketManageV = new app.views.redPacketManage();
app.objs.buyV = new app.views.buy();
app.objs.sellV = new app.views.sell();
app.objs.changeV = new app.views.change();
app.objs.configData = null;
/****************************************************************************************/
/*
app.objs.user.get()
*/