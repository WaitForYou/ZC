/*公共部分********************************************************************************/	
/*头部*/
app.views.head = Backbone.View.extend({
	type:0,/*0普通，1空间,2管理*/
	typeBefore:null,
	el:".header",
	button:[[{id:"login",name:"登陆"},{id:"register",name:"注册"}],[{id:"zone",name:"用户中心"},{id:"out",name:"退出"}],[{id:"out",name:"退出"}]],
	nav:[{id:"mode",name:"众筹模式"},{id:"product",name:"我要众筹"},{id:"procedure",name:"众筹步聚"},{id:"FAQS",name:"常见问题"},{id:"about",name:"关于我们"}],
	render:function(){
		var buttonKey ;
		if(this.type==0){
			if(app.objs.user.get() && app.objs.user.get().id){
					buttonKey = 1
					}else{
						buttonKey = 0
						}
			}else{
				buttonKey=2
				}
			var buttonHtml="";
			$.each(this.button[buttonKey],function(i,n){
				buttonHtml += "<div id='"+n.id+"' class='btn-s1 btn-1b'>"+n.name+"</div>"
				})
			var navFirst="";
			$.each(this.nav,function(i,n){
				//navFirst+="<div id='"+n.id+"'>"+n.name+"</div>"
				//<li><a href="/cncrowd">中筹模式<br><span class="en_t">What's CNCrowd</span></a></li>
				navFirst += "<li id='"+n.id+"'><a>"+n.name+"<br><span class='en_t'>What's CNCrowd</span></a></li>";
			});
			//$(this.el).html(buttonHtml+navFirst);
			$(this.el).find(".top_btn_group").html(buttonHtml);
			$(this.el).find("#gnavi").html(navFirst);
			console.log($(this.el).find("#gnavi"))
			var page=["login","register","mode","product","procedure","FAQS","about"]
			$.each(page,function(i,n){
				$("#"+n).unbind("click").bind("click",function(){
				    app.objs.route.navigate("?page="+n,{trigger: true});
				})
			})
			$("#zone").unbind("click").bind("click",function(){
				if(app.obs.user.get().type==1){
					app.objs.route.navigate("?page=account",{trigger: true});
					}
				if(app.obs.user.get().type==2){
					app.objs.route.navigate("?page=account",{trigger: true});
					}
				})
			$("#out").unbind("click").bind("click",function(){
				app.objs.user.set(null);
				app.objs.product.set(null);
				app.objs.client.set(null);
				app.objs.admin.set(null);
				app.objs.announcement.set(null);
				app.objs.recruit.set(null);
				app.objs.company.set(null);
				app.objs.promotion.set(null);
				app.objs.redPacket.set(null);
				app.objs.userTime = 0;
				app.objs.productTime = 0;
				app.objs.clientTime = 0;
				app.objs.adminTime = 0;
				app.objs.announcementTime = 0;
				app.objs.recruitTime = 0;
				app.objs.companyTime = 0;
				app.objs.promotionTime = 0;
				app.objs.redPacketTime = 0;
				app.objs.route.navigate("?page=index",{trigger: true});
				})
		}
	})
/*脚部*/
app.views.foot = Backbone.View.extend({
	done:null,
	el:".footerBox",
	data:app.objs.configData,
	nav:[{id:"mode",name:"中筹模式"},{id:"product",name:"我要众筹"},{id:"procedure",name:"众筹步聚"},{id:"FAQS",name:"常见问题"},{id:"about",name:"关于我们"}],
	info:{titleText:"全国首家专业房地产众筹平台",slogan:"人人参与  创新投资",mobile:"（021）6181-3682",fax:"（021）6181-3682",time:"（周一至周五 10:00-18:30）",number:"400-661-3350",
	      companyName:"上海中筹互联网金融信息服务有限公司",referredToAs:"",companyUrl:"",concept:["为全国首家专业房地产众筹平台","致力于通过互联网金融的创新","推动传统房地产投融资模式的变革和创新"],
	      cooperationEmail:"biz@cncrowd.com",recruitmentEmail:"biz@cncrowd.com",address:["地址：上海市长宁区延安西路1118号","龙之梦大厦2202室&nbsp;&nbsp;&nbsp;&nbsp;","200052"],
	      copRight:"©2014 CNCrowd",record:" 沪ICP备14044695号-1"
         },
	render:function(){
		console.log(app.objs.configData)
		var configData = app.objs.configData.footerInfo;
		var newElem = $('<div class="footer_area">'
			   +'<div class="footer">'
			   		+'<h1>'+configData.titleText+'</h1>'
			        +'<h2><i></i><span> '+configData.slogan+'</span><i></i></h2>' 
			        +'<div class="contact_infor">'
			           +' <ul>'
			                +'<li class="fci_s1 ">'
			                    +'<i></i><p>电话: '+configData.mobile+'传真: '+configData.fax+'</p>'
			                +'</li>'
			                +'<li class="fci_s2 ">'
			                    +'<i></i><p>众筹洽谈'+configData.time+'<br><span>'+configData.number+'</span></p>'
			                +'</li>'
			                +'<li class="fci_s3 ">'
			                    +'<p>'+configData.companyName+'<br>'+configData.referredToAs+'（'+configData.number+'）<br>'+configData.conText_0+'<br>'+configData.conText_1+'<br>'+configData.conText_2+'</p>'
			                +'</li>'
			                +'<li class="fci_s4 ">'
			                   +' <i></i><p>商务合作：'+configData.cooperationEmail+'<br>人才招聘：'+configData.recruitmentEmail+'</p>'
			                +'</li>'
			                +'<li class="fci_s5">'
			                   +' <i></i><p>地址：'+configData.address[0]+'<br>'+configData.address[1]+'&nbsp;&nbsp;&nbsp;&nbsp;邮编：'+configData.address[2]+'</p>'
			               +' </li>'
			                +'<li class="fci_s6">'
			                    
			                +'</li>'
			                +'<div class="clear"></div>'
			            +'</ul>'
			        +'</div>'
			        +'<div class="footer_logo">'
			            +'<div id="fl_s1"></div> '
			            +'<div id="fl_s2"></div> ' 
			            +'<div id="fl_s3"></div>'  
			            +'<a href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=www.cncrowd.com&amp;lang=zh_cn" target="_blank">'
			                +'<div id="fl_s4"></div>'
			            +'</a> '
			            +'<div id="fl_s1_img" style="display: none;"></div>'
			           +' <div id="fl_s2_img" style="display: none;"></div>'
			            +'<div id="fl_s3_img" style="display: none;"></div>'
			            +'<div id="fl_s4_img" style="display: none;"></div> ' 
			        +'</div>'
			     +'<h3></h3>'
			        +'<h5>'+configData.copRight+' &nbsp;&nbsp;&nbsp;&nbsp;备案号: <a target="_blank" href="http://www.beianbeian.com/beianxinxi/1c979456-a73d-42d8-bb76-2ab1afbb4a5e.html"> '+configData.record+'</a></h5>'
			  +'</div>'
			   +'<div class="clear"></div>'
			+'</div>').appendTo($(this.el));
		var nav="";
		$.each(configData.nav,function(i,n){
			nav += '<a class="'+n.id+'" id="'+n.id+'">'+n.name+'</a>|';
			})
		//$(this.el).find("h3").html(nav)
		$.each(this.nav,function(i,n){
			$("."+n.id).unbind("click").bind("click",function(){
				app.objs.route.navigate("?page="+n.id,{trigger: true});
			});
		});
		}
	})
/*中部*/
app.views.middle = Backbone.View.extend({
	type:0,/*0普通，1空间,2管理*/
	typeBefore:null,
	el:".middle",
	template:[
			'',
			'<div class="top"></div>'+
			'<div class="bottom">'+
				'<div class="left">'+
					'<div id="account">我的帐户</div>'+
					'<div id="recharge">充值</div>'+
					'<div id="paid">提现</div>'+
					'<div id="card">银行卡</div>'+
					'<div id="capitalDetail">资金记录</div>'+
					'<div id="redPacketDetail">红包记录</div>'+
					'<div id="safeQusetion">安全问题</div>'+
					'<div id="emailVerify">邮箱验证</div>'+
					'<div id="setPhone">修改手机</div>'+
					'<div id="setDetail">修改资料</div>'+
					'<div id="setPassWord">修改密码</div>'+
				'</div>'+
				'<div class="right"></div>'+
				'<div class="clear"></div>'+
			'</div>',
			'<div class="bottom">'+
				'<div class="left">'+
					'<div id="adminManage">管理员管理</div>'+
					'<div id="announcementManage">公告管理</div>'+
					'<div id="clientManage">客户管理</div>'+
					'<div id="procedureManage">商品管理</div>'+
					'<div id="recruitManage">招聘管理</div>'+
					'<div id="companyManage">公司资料管理</div>'+
					'<div id="promotionManage">宣传管理</div>'+
					'<div id="redPacketManage">红包管理</div>'+
				'</div>'+
				'<div class="right"></div>'+
				'<div class="clear"></div>'+
			'</div>'
	],
	page:["account","recharge","paid","card","capitalDetail","redPacketDetail","safeQusetion","emailVerify","setPhone","setDetail","setPassWord","adminManage","announcementManage","clientManage","procedureManage","recruitManage","companyManage","promotionManage","redPacketManage"],
	render:function(){
		$(this.el).html(this.template[this.type]);
		$.each(this.page,function(i,n){
			$("#"+n).unbind("click").bind("click",function(){
			app.objs.route.navigate("?page="+n,{trigger: true});
			})
		});
		}
	})
/*首页*/
app.views.index = Backbone.View.extend({
	el:".middleTab",
	data:{},
	render:function(){
		console.log(this.data);//http://mini.114dianxin.com/pop2/images/bg_阴.png
		var that = this;
		//公告
		$.each(this.data.announcement,function(i,n){
			var newAn=$('<div class="caption">'+n.title+'</div>').appendTo($("#slides").children(".slides_container"));
			newAn.data("an",n);

			newAn.unbind("click").bind("click",function(){
				app.objs.announcementDetailV.data = $(this).data("an");
				app.objs.route.navigate("?page=announcementDetail",{trigger: true});
			});
		});
		$(function(){
              $('#slides').slides({
                preload: true,
                play: 4000,
                pause: 1000,
                hoverPause: true
              });
         });
		//介绍我们是做什么的
		$("#index_video").find("h1").text(this.data.promotion.introduceVideo.title);
		$("#index_video").find("h2").text(this.data.promotion.introduceVideo.dsc);
		$.each(this.data.promotion.introduceVideo.data,function(i,n){
			var newElem = $('<div class="video_style1 mg_r34">'
            +'<span class="vedette1 mobileCS" style="display: none;">'
                  +'<video id="Html5Video" poster="/img/top/video_m5.png" controls="controls" width="302" height="170">'
                      +'<source src="/flowplayer/v6.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">'
                  +'</video>'
             +'</span>'
	         +'<span class="computerCS" style="display: block;">'
	         +'<a href="#videomodal1" data-toggle="modal" data-target="#video-modal1">'
	         +'<img src="/img/top/video_m5.png">'
	         +'</a>'
	         +'</span>'
	         +'<h4>马博士课堂·三期</h4>'
	         +'<h5>新年理财第一步 关注房地产众筹</h5>'
	      +'</div>').appendTo($("#index_video").find(".video_area"));
            newElem.data("data",n);
			newElem.unbind("click").bind("click",function(){
				//app.objs.announcementDetailV.data = $(this).data("an");
				//app.objs.route.navigate("?page=announcementDetail",{trigger: true});
			});
		});
        $(".video_style1").last().removeClass("mg_r34");
        //大图充值
        var introducePicElem = $('<span style="background:url('+this.data.promotion.introducePic.data[0].image+') 185px 80px no-repeat"><a href="#">立即充值</a></span>').appendTo($(".recharge_style03"));
		introducePicElem.data("data",this.data.promotion.introducePic);
		//产品
        $.each(this.data.product,function(i,value){
            var newElem = $('<div class="project_intro">'
	          +'<div class="left">'
	             +'<span class="intro_pic"><a href="/items/30093164">'
        		  +'<img src="/img/top/project_03a.jpg" width="475" height="255">'
		         +'</a></span>'
	             +'<span class="timer">'
	             +'<div id="30093164" class="remaining-day">火爆众筹中 ……</div></span>'
	          +'</div>'
	          +'<div class="right">'
	            +'<div class="r01">'
                       +'<h4>目标金额：<span>￥'+value.payed+'</span></h4>'
                       +'<a class="a" role="button" data-toggle="modal" onclick="">认&nbsp;&nbsp;&nbsp;&nbsp;购</a>'
                   +'</div>'
                   +'<div class="clear"></div>'
                   +'<div class="title01">'
                       +'<h2><a href="/items/30093164">'+value.title+'-'+value.subhead+'</a></h2>'
                       +'<h4>年化收益率高达'+value.yearReturn+'以上</h4>'
                   +'</div>'
                   +'<div class="price">'
                       +'<span class="price_01"><h4>当前市值</h4><h5>￥'+value.costPrice+'</h5></span>'
                       +'<span class="price_01"><h4>中筹价格</h4><h5>￥'+value.payed+'</h5></span>'
                       +'<span class="price_02"><h4>持有期限不超过</h4><h5>'+value.maxTime+'</h5></span>'
                  +' </div>'
                   +'<h5 class="home_progress_bar"><b style="width:'+(value.payedCount/value.copy)*100+'%;"></b></h5>'
                   +'<h6> 已众筹：'+(value.payedCount/value.copy)*100+'%</h6>'
	         +'</div>'
	      +'</div>').appendTo($(".project_area"));

        });
		}//render
})
/*登录*/
app.views.login = Backbone.View.extend({
	el:".middle",
	render:function(){}
	})
/*注册*/
app.views.register = Backbone.View.extend({
	el:".middle",
	render:function(){}
	})
/*众筹模式*/
app.views.mode = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		console.log(this.data)
		$(this.el).html("众筹模式");
	}
})
/*我要众筹*/
app.views.product = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		console.log(this.data)
		var that = this;
		$(this.el).empty();
		$.each(this.data,function(i,n){
			var newProduct=$('<div>商品'+i+'</div>').appendTo($(that.el));
			newProduct.data("product",n)
			newProduct.unbind("click").bind("click",function(){
				app.objs.productDetailV.data = $(this).data("product");
				app.objs.route.navigate("?page=productDetail",{trigger: true});

				app.apis.buy({},this.render(),function(){})
			})
		})
	}
	})
/*众筹步聚*/
app.views.procedure = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		console.log(this.data)
		$(this.el).html("仲筹步聚")
	}
	})
/*常见问题*/
app.views.FAQS = Backbone.View.extend({
	el:".middle",
	render:function(){
		console.log(this.data)
		$(this.el).html("常见问题")
	}
})
/*关于我们*/
app.views.about = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		console.log(this.data)
		var that = this
		$(this.el).empty();
		$.each(this.data.announcement,function(i,n){
			var newAn=$('<div>公告'+i+'</div>').appendTo($(that.el));
			newAn.data("an",n);
			newAn.unbind("click").bind("click",function(){
				app.objs.announcementDetailV.data = $(this).data("an");
				app.objs.route.navigate("?page=announcementDetail",{trigger: true});
			})
		})
	}
	})
/*商品详情*/
app.views.productDetail = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		console.log(this.data)
		$(this.el).html("商品详情")
	}
	})
/*公告详情*/
app.views.announcementDetail = Backbone.View.extend({
	el:".middle",
	render:function(){
		console.log(this.data)
		$(this.el).html("公告详情")
	}
	})
/*用户部分**********************************************************************/
/*账户*/
app.views.account = Backbone.View.extend({
	el:".right",
	render:function(){
		$(this.el).html("帐户")
	}
	})
/*充值*/
app.views.recharge = Backbone.View.extend({
	el:".right",
	render:function(){
		$(this.el).html("充值")
	}
	})
/*提现*/
app.views.paid = Backbone.View.extend({
	el:".right",
	render:function(){
		$(this.el).html("提现")
	}
	})
/*银行卡*/
app.views.card = Backbone.View.extend({
	el:".right",
	render:function(){
		$(this.el).html("银行卡")
	}
	})
/*资金纪录*/
app.views.capitalDetail = Backbone.View.extend({
	el:".right",
	render:function(){
		$(this.el).html("资金记录")
	}
	})
/*红包记录*/
app.views.redPacketDetail = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){
		console.log(this.data);
		$(this.el).html("红包记录")
	}
	})
/*安全问题*/
app.views.safeQusetion = Backbone.View.extend({
	el:".right",
	render:function(){}
	})
/*邮箱验证*/
app.views.emailVerify = Backbone.View.extend({
	el:".right",
	render:function(){}
	})
/*修改手机*/
app.views.setPhone = Backbone.View.extend({
	el:".right",
	render:function(){}
	})
/*修改资料*/
app.views.setDetail = Backbone.View.extend({
	el:".right",
	render:function(){}
	})
/*修改密码*/
app.views.setPassWord = Backbone.View.extend({
	el:".right",
	render:function(){}
	})
/*后台部分************************************************************************************/
/*管理员管理*/
app.views.adminManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
	})
/*公告管理*/
app.views.announcementManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
	})
/*客户管理*/
app.views.clientManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
	})
/*客户详情*/
app.views.clientDetail = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
	})
/*产品管理*/
app.views.procedureManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
	})
/*招聘管理 公司资料管理*/
app.views.recruitManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
	})
/*宣传管理*/
app.views.promotionManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
	})

/*红包管理*/
app.views.redPacketManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){}
});