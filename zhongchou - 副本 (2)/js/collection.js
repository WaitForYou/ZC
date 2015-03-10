/*客户列表*/
app.collections.client = Backbone.Collection.extend({
	model:app.models.member
	})
/*管理员列表*/
app.collections.admin = Backbone.Collection.extend({
	model:app.models.admin
	})
/*商品列表*/
app.collections.product = Backbone.Collection.extend({
	model:app.models.product
	})
/*公告/招聘/企业信息列表*/	
app.collections.message = Backbone.Collection.extend({
	model:app.models.message
	})
/*职员/常见问题列表/图片展示众筹模式众筹步聚列表*/
app.collections.imageAndWord = Backbone.Collection.extend({
	model:app.models.imageAndWord
	})
/*红包列表*/
app.collections.redPacket = Backbone.Collection.extend({
	model:app.models.redPacket
	})
