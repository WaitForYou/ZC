/*公共部分********************************************************************************/	
function popOpen(fn,closeFn){
	$("#pop").show();
	if(fn){
		fn();
		}
		
		$("#popClose").unbind("click").bind("click",function(){
			if(closeFn){
				popClose(closeFn);
				}
			});
	}
function popClose(fn){
	if(fn){
		fn();
		}
		$("#pop").hide();
		$("#popMain").empty();
	}
/*头部*/
app.views.head = Backbone.View.extend({
	type:0,/*0普通，1空间,2管理*/
	typeBefore:null,
	el:".header",
	button:[[{id:"login",name:"登陆"},{id:"register",name:"注册"}],[{id:"zone",name:"用户中心"},{id:"out",name:"退出"}],[{id:"out",name:"退出"}]],
	nav:[{id:"product",name:"我要众筹"},{id:"procedure",name:"众筹步聚"},{id:"FAQS",name:"常见问题"},{id:"about",name:"关于我们"}],
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
				    app.objs.route.navigate(location.pathname.replace("/","")+"?page="+n,{trigger: true});
				})
			})
			$("#zone").unbind("click").bind("click",function(){
				if(app.obs.user.get().type==1){
					app.objs.route.navigate(location.pathname.replace("/","")+"?page=account",{trigger: true});
					}
				if(app.obs.user.get().type==2){
					app.objs.route.navigate(location.pathname.replace("/","")+"?page=account",{trigger: true});
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
				app.objs.route.navigate(location.pathname.replace("/","")+"?page=index",{trigger: true});
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
				app.objs.route.navigate(location.pathname.replace("/","")+"?page="+n.id,{trigger: true});
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
			'<div class="member_top">'+
    '<div class="member">'+
        '<h2><img src="/img/uc/member_headerpic.jpg"></h2>'+
        '<h4><span>jiumogaoao86</span> 您好，欢迎回来！</h4>'+
        '<h5 style="display: block;" id="redEnvelopeBanner"><span>您有未领取的红包！</span><a href="redEnvelope">领取</a></h5>'+
    '</div>'+
'</div>'+
			'<div class="content_center">'+
		'<!-- left -->'+
'<div class="mb_left" id="tabs_menu">'+
    '<ul>'+
        '<li class=""><h4><i class="nav_01"></i><span>我的账户</span></h4>'+
            '<ul>'+
                '<li id="account" class="hover"><a>我的账户</a></li>'+
            '</ul>'+
        '</li>'+
        '<li><h4><i class="nav_03"></i><span>资金管理</span></h4>'+
            '<ul>'+
                '<li id="capitalDetail"><a>资金记录</a></li>'+
                '<li id="redPacketDetail"><a>红包记录</a></li>'+
            '</ul>'+
        '</li>'+
        '<li><h4><i class="nav_04"></i><span>账户</span></h4>'+
            '<ul>'+
                '<li id="safeQusetion"><a>安全问题</a></li>'+
                '<li id="emailVerify"><a>邮箱认证</a></li>'+
            '</ul>'+
        '</li>'+
        '<li><h4><i class="nav_02"></i><span>基本设置</span></h4>'+
            '<ul>'+
                '<li id="setPhone"><a>修改手机</a></li>'+
                '<li id="setDetail"><a>修改资料</a></li>'+
                '<li id="setPassWord"><a>修改密码</a></li>'+
            '</ul>'+
        '</li>'+
    '</ul>'+
'</div>'+
		'<!-- right -->'+
		'<div class="mb_right" style="height: 672px;">'+
			
		'</div>'+
		'<div class="clear"></div>'+
	'</div>',
	'<div class="member_top">'+
    '<div class="member">'+
        '<h2><img src="/img/uc/member_headerpic.jpg"></h2>'+
        '<h4><span>jiumogaoao86</span> 您好，欢迎回来！</h4>'+
    '</div>'+
'</div>'+
			'<div class="content_center">'+
		'<!-- left -->'+
'<div class="mb_left" id="tabs_menu">'+
    '<ul>'+
        '<li class=""><h4><i class="nav_01"></i><span>后台管理</span></h4>'+
            '<ul>'+
                '<li id="adminManage"><a>管理员管理</a></li>'+
				'<li id="announcementManage"><a>公告管理</a></li>'+
				'<li id="clientManage"><a>客户管理</a></li>'+
				'<li id="procedureManage"><a>产品管理</a></li>'+
				'<li id="recruitManage"><a>招聘管理</a></li>'+
				'<li id="companyManage"><a>公司资料管理</a></li>'+
				'<li id="promotionManage"><a>宣传管理</a></li>'+
				'<li id="redPacketManage"><a>红包管理</a></li>'+
            '</ul>'+
        '</li>'+
    '</ul>'+
'</div>'+
		'<!-- right -->'+
		'<div class="mb_right" style="height: 672px;">'+
			
		'</div>'+
		'<div class="clear"></div>'+
	'</div>'
	],
	page:["account","recharge","paid","card","capitalDetail","redPacketDetail","safeQusetion","emailVerify","setPhone","setDetail","setPassWord","adminManage","announcementManage","clientManage","procedureManage","recruitManage","companyManage","promotionManage","redPacketManage"],
	render:function(){
		$(this.el).html(this.template[this.type]);
		$.each(this.page,function(i,n){
			$("#"+n).unbind("click").bind("click",function(){
			    app.objs.route.navigate(location.pathname.replace("/","")+"?page="+n,{trigger: true});
			})
		});
		}
	})
/*首页*/
app.views.index = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		$(this.el).empty();
		/*$('<div id="visual"> '   
		           +'<div id="demo" style="overflow: hidden; width:100%; align: center;">'
		            +'<table cellspacing="0" cellpadding="0" align="center" border="0">'
		              +'<tbody>'
		              +'<tr>'
		                +'<td id="marquePic1" valign="top">'
		                    +'<table width="100%" height="494" border="0" cellpadding="0" cellspacing="0">'
		                      +'<tbody><tr>'
		                        +'<td class="marquee_pic"><a href="/reg"><img src="/images/visual.jpg"></a></td>'
		                        +'<td class="marquee_pic"><a href="/reg"><img src="/images/visual.jpg"></a></td>'
		                      +'</tr>'
		                    +'</tbody></table>'    
		                +'</td>'
		                +'<td id="marquePic2" valign="top">'
		                    +'<table width="100%" height="494" border="0" cellpadding="0" cellspacing="0">'
		                      +'<tbody><tr>'
		                        +'<td class="marquee_pic"><a href="/reg"><img src="/images/visual.jpg"></a></td>'
		                        +'<td class="marquee_pic"><a href="/reg"><img src="/images/visual.jpg"></a></td>'
		                      +'</tr>'
		                    +'</tbody></table>  '  
		                +'</td>'
		              +'</tr>'
		            +'</tbody></table>'
		            +'<p>'
		            +'</p>' 
		        +'</div>'

		      +'<div class="header-banner">'
		       +'<div class="inner">'
		           +'<div class="banner">'
		            +'<a href="reg" rel="nofollow">'
		                +'<img class="hover" src="/img/top/header_banner2-1.png" alt="">'
		           +'</a>'
		            +'<a href=+'+'"#smp">'
		              +'<img class="hover" src="/img/top/header_banner3.png" alt="">'
		            +'</a>'
		          +'</div>'
		        +'</div>'
		      +'</div>'
		    +'</div>'
*/
$('<div class="index_top">'
	+'<div class="index_top_left">'
		+'<div class="index_message_head">全国首家专业房地产众筹平台</div>'
		+'<div class="index_message_frame">'
			+'<div class="index_message_title">预期年化利率达<span style="font-size:30px">15%</span>以上</div>'
			+'<div class="index_message_list">资金全程托管 安全可靠</div>'
			+'<div class="index_message_list">投资门槛低 100元即可参与</div>'
			+'<div class="index_message_list">专业、优秀的风控及资管团队</div>'
			+'<div class="index_message_list">一线城市或地标优质资产</div>'
			+'<div class="index_message_list">注册即可享受随机红包10-100元</div>'
		+'</div>'
		+'<img class="index_message_foot" src="images/index.png"/>'
	+'</div>'
	+'<div class="index_top_right">'
		+'<div class="index_canvar_1">'
			+'<div class="index_canvar_title">图1</div>'
			+'<canvas id="canvar_1" class="index_canvar_left" width="125" height="125"></canvas>'
			+'<div class="index_canvar_right"></div>'
			+'<div class="clear"></div>'
		+'</div>'
		+'<div class="index_canvar_2">'
			+'<div class="index_canvar_title">图2</div>'
			+'<canvas id="canvar_2" class="index_canvar_single"></canvas>'
		+'</div>'
		+'<div class="index_canvar_3">'
			+'<div class="index_canvar_title">图3</div>'
			+'<canvas id="canvar_3" class="index_canvar_single"/></canvas>'
		+'</div>'
		+'<div class="index_promo_1"></div>'
		+'<div class="index_promo_2"></div>'
		+'<div class="index_promo_3"></div>'
	+'</div>'
	+'<div class="clear"></div>'
	+'</div>').appendTo($(this.el));
			
		   $(' <div id="topics">'
			     +'<div class="inner" style=" height:30px;">'
			       +' <span style=" display:block; float:left;"><img src="img/topics.png" alt=""></span>'
			        +'<div id="slides"><div class="slides_container"></div></div>'
			        +'<a href="/company?id=3" style=" color:#F00; font-size:12px; float:right;">查看更多 &gt;&gt;</a>'
			      +'</div>'
			    +'</div>'
		    +'</div>'
		   /* +'<div class="recharge_style03"></div>'*/
		    +'<div class="index_center"><div class="project_area"></div></div>'
		    +'<div class="slide earnings"></div> ').appendTo($(this.el));
		  /*  +'<div class="team" id="smp"></div>'*/
              /*var demo = document.getElementById("demo");
              var marquePic2 = document.getElementById("marquePic2");
              var marquePic1 = document.getElementById("marquePic1");
     	      var speed=15 ;
              marquePic2.innerHTML=marquePic1.innerHTML;
              function Marquee(){ 
                 if(demo.scrollLeft>=marquePic1.scrollWidth){ 
                   demo.scrollLeft=0 ;
                  }else{ 
                   demo.scrollLeft++ ;
                 }
              } 
              var MyMar=setInterval(Marquee,speed);
              if(demo){ 
		          demo.onmouseover=function() {clearInterval(MyMar);}; 
		          demo.onmouseout=function() {MyMar=setInterval(Marquee,speed);};  
              }
       */
       var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}

	var ctx = document.getElementById("canvar_3").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		})

var pieData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];

			var ctx1 = document.getElementById("canvar_1").getContext("2d");
				window.myPie = new Chart(ctx1).Pie(pieData);
				$("#canvar_1").width(160);
				$("#canvar_1").height(125);
	var radarChartData = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65,59,90,81,56,55,40]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28,48,40,19,96,27,100]
			}
		]
	};
	window.myRadar = new Chart(document.getElementById("canvar_2").getContext("2d")).Radar(radarChartData, {
			responsive: true
		});
		console.log(this.data);//http://mini.114dianxin.com/pop2/images/bg_阴.png
		var that = this;
		//公告
		$.each(this.data.announcement,function(i,n){
			var newAn=$('<div class="caption">'+n.title+'</div>').appendTo($("#slides").children(".slides_container"));
			newAn.data("an",n);

			newAn.unbind("click").bind("click",function(){
				app.objs.announcementDetailV.data = $(this).data("an");
				app.objs.route.navigate(location.pathname.replace("/","")+"?page=announcementDetail",{trigger: true});
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
		/*
		$("#index_video").find("h1").text(this.data.promotion.introduceVideo.title);
		$("#index_video").find("h2").text(this.data.promotion.introduceVideo.dsc);
		$.each(this.data.promotion.introduceVideo.data,function(i,n){
			var newElem = $('<div class="video_style1 mg_r34">'
            +'<span class="vedette1 mobileCS" style="display: none;">'
                  +'<video id="Html5Video" poster="'+n.image+'" controls="controls" width="302" height="170">'
                      +'<source src="'+n.video+'" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">'
                  +'</video>'
             +'</span>'
	         +'<span class="computerCS" style="display: block;">'
	         +'<a href="#videomodal1" data-toggle="modal" data-target="#video-modal1">'
	         +'<img src="'+n.image+'">'
	         +'</a>'
	         +'</span>'
	         +'<h4>'+n.name+'</h4>'
	         +'<h5>'+n.dsc+'</h5>'
	      +'</div>').appendTo($("#index_video").find(".video_area"));
            newElem.data("data",n);
			newElem.unbind("click").bind("click",function(){
				//app.objs.announcementDetailV.data = $(this).data("an");
				//app.objs.route.navigate(location.pathname.replace("/","")+"?page=announcementDetail",{trigger: true});
			});
		});*/
 /*       $(".video_style1").last().removeClass("mg_r34");
        //大图充值
        var introducePicElem =$(".recharge_style03").css("background-image","url("+this.data.promotion.introducePic.data[0].image+")");
         //$('<span style="background:url('+this.data.promotion.introducePic.data[0].image+') 185px 80px no-repeat"><a href="#">立即充值</a></span>').appendTo($(".recharge_style03"));
		introducePicElem.data("data",this.data.promotion.introducePic);*/
		//产品
        $.each(this.data.product,function(i,value){
            var newElem = $('<div class="project_intro">'
	          +'<div class="left">'
	             +'<span class="intro_pic"><a href="/items/30093164">'
        		  +'<img src="'+value.image[0]+'" width="475" height="255">'
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
                   +'<h5 class="home_progress_bar"><b style="width:'+(value.payedCount/value.copy)*100+'%;">'
				   +'</b></h5>'
                   +'<h6> 已众筹：'+(value.payedCount/value.copy)*100+'%</h6>'
	         +'</div>'
	      +'</div>').appendTo($(".project_area"));

        });
        //----start人物介绍
        // console.log(this.data.promotion) alert();
        /*
         var peopleData = this.data.promotion.danger;
         var peoplesElem = $('<h1>'+peopleData.name+'</h1>'
		  +'<h2><span>'+peopleData["dsc_1"]+'</span>,<br><span>'+peopleData.dsc+'</span></h2>').appendTo($('#smp'));
         var peoplesElem = $('<ul></ul>');
         $.each(peopleData.data,function(i,value){
               var singlePeopleElem = $('<li>'
		         +'<span><img src="'+value.image+'"></span>'
		         +'<h4>'+value.job+'</h4>'
		         +'<h5>'+value.name+'</h5>'
		         +'<h6>'+value.dsc+'</h6>'
		      +'</li>').appendTo(peoplesElem);
              singlePeopleElem.data("data",value);
              if(value.zhiJi){ 
                 $('<i style="font-style:normal;">'+value.zhiJi+'</i>').appendTo(singlePeopleElem.find('h4'));
              }
         });//eac.appendTo()h peopleData
         peoplesElem.appendTo($('#smp'));*/
         //收益介绍

         var earnings = app.objs.configData.earnings;

         var earningsElem = $('<div class="slide_pic">'
	     +'<h1>'+earnings.titleText+'</h1>'
	     +'<h2>'+earnings.dsc+'</h2>  '
	      
	      // +'<h3>'+earnings.earningsRateTitle+'<span>'+earnings.earningsRate+'</span></h3>'
	       //+'<h6 class="spear">'+earnings.title_2+'</h6>'
	       +'<ul>'
	           +'<li><img src="'+earnings.image+'"></li>' 
	       +'</ul>'
	    +'</div>').appendTo($(".earnings"));
        //$.each(earnings.steps,function(i,value){
          // earningsElem.find(".spear").before('<h4 class="sp_'+i+'">'+value+'</h4>');
        //});


		}//rendert
})
/*登录*/
app.views.login = Backbone.View.extend({
	el:".middle",
	render:function(){
	$(this.el).empty(); 
      var loginElem=$('<div class="mainPanel calHeight"> '
    +' <div class="main"> '
     +'<div class="login_title">'
         +'<h1>欢迎登录</h1>'
         +'<h2>使用您的用户名、手机号码、绑定邮箱都可登录</h2>'
         +'<h4><span></span></h4>'
     +'</div>'
      +'<form action="user/login" method="post" id="loginForm" name="loginForm">'
        +'<div class="login_input_area"> '
       +'<ul class="loginUl">'
        +' <li> '
            +'<span class="login_span"> '
              +'<label class="usernameIcon"></label> <input type="text" placeholder="用户名/已验证手机/已绑定邮箱" id="userName" name="userName"> '
            +'</span> '
         +' </li> '
         +' <li> '
           +' <span class="login_span"> '
             +' <label class="passwordIcon"></label> <input type="password" placeholder="输入密码" value="" id="userPass" name="password" class="vn"> '
            +'</span> '
         +' </li> '
         +' <li>'
            +'<span class="btn_span mt5 ">'
              +'<input type="text" placeholder="输入验证码" id="code1" name="imgValidCode" onkeydown="keyDown(event)">'
            +'</span>' 
            +'<div class="verificationCode" id="vCode1" style="width:100px;height:41px;margin-top:13px;">'
              // +'<img id="validImg" onclick="javascript:refreshImgValidCode();" src="/imageServlet"><input type="hidden" id="imgCode" value="366f2">'
            +'</div> '
            +'<span href="" onClick="javascript:void(0)" id="refreshBtn" type="button" class="codeRefresh" style="margin-top:13px;"></span>'
          +'</li> '
          +'<li class="h30 mt100"> '
            +'<span class="chx_span mt0 w304"> '
            +'<span class="agreementChxChecked agreementChxNoCheck" style=" display:none; float:left;">'
              +'<input type="checkbox" name="agreement" id="agreement" value="" class="agreementChx">'
            +'</span> '
            +'<label style="display:none; float:left; margin-top:5px;">记住用户名</label> '
            +'<a href="" id="register" class="fbtext fr">立即注册</a> '
            +'<span class="fr">&nbsp;&nbsp;|&nbsp;&nbsp;</span>'
            +'<a href="findPass" class="fr mr5">忘记密码</a>  '
           +' </span> '
         +' </li> '
          +'<li class="h50">' 
          +'  <input id="login" type="button" value="登　录" class="btnLogin"> '
         +' </li>'
      +' </ul> '
      +' </div>'
      +'</form>'
     +'</div> '
    +'</div>').appendTo($(this.el));
	loginElem.find("#login").unbind("click").bind("click",function(){
		//登录按钮
	var data = {"userName":loginElem.find("#userName").val(),/*登录名/手机/邮箱*/
				"passWord":loginElem.find("#userPass").val()}/*密码*/
	app.apis.login(data,function(data){
		app.objs.route.navigate(location.pathname.replace("/","")+"?page=account",{trigger: true});
	},function(error){});
		
	})
    loginElem.find("#userName").blur(function(){
       app.apis.checkUser($(this).val(),function(data){},function(data){});
    });
	loginElem.find("#register").unbind("click").bind("click",function(){
	    app.objs.route.navigate(location.pathname.replace("/","")+"?page=register",{trigger: true});
	});
	/**验证码***/

    // document.getElementById("btn1").addEventListener("click", function () {
    //     alert(code1.verify(document.getElementById("code1").value));
    // }, false);
	
}
})
/*注册*/
app.views.register = Backbone.View.extend({
	el:".middle",
	render:function(){
		var templateData = {
		"id":app.fns.uuid(),/*id*/
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
		"password":"123456",/*密码*/
		"password2":"123456"/*密码2*/
	}
		$(this.el).empty();
		var registerElem=$('<div class="mainPanel calHeight">'
		    +'<div class="main reg">'
		      +'<div class="login_title">'
		        +'<h1>欢迎注册</h1>'
		        +'<h2>设置您的用户名及密码，绑定手机号码即可注册</h2>'
		      +'</div>'
		       
		      +'<div class="fr" style="position:absolute; top:30px; right:30px;"> 已有账号？ <a href="" id="loginBtn" class="fbtext" style=""> 立即登录 </a> </div> '
		      +'<form action="/user/reg" method="post" id="regForm" name="regForm"> '
		         +' <div class="reg_input_area">  '
		             +'<ul class="regUl"> '
		                +'<li> '
		                   +'<div class="in_title">用户名：<input type="hidden" name=""> </div>'
		                   +'<span class="in_span"><label class="usernameIcon"> </label> <input to="userName" formtype="simple" type="text" placeholder="输入用户名" id="userName" name="userName"/> </span>'
		                   +'<span class="in_notice"></span>'
		               +' </li> '
		                +'<li>'
		                   +' <div class="in_title">登陆密码：</div>'
		                  +' <span class="in_span"> <label class="passwordIcon"> </label> <input type="password" to="password" formtype="simple" placeholder="输入密码" id="userPass" name="password"/> </span>'
		                   +'<span class="in_notice"> </span>'
		               +' </li> '
		                +'<li> '
		                +'<div class="in_title">重复密码：</div> '
		                   +'<span class="in_span"> <label class="repeatPassIcon"> </label> <input type="password" to="password2" formtype="simple" placeholder="再次输入密码" id="checkPass" name="passwordConfirm"> </span>'
		                   +'<span class="in_notice"> </span>'
		                +'</li>' 
						+'<li> '
		                   +'<div class="in_title">邮箱：<input type="hidden" name=""> </div>'
		                   +'<span class="in_span"><label class="usernameIcon"> </label> <input type="text" placeholder="输入邮箱" formtype="simple" to="email" id="userName" name="userName"> </span>'
		                   +'<span class="in_notice"></span>'
		               +' </li> '
		                +'<li> '
		                   +'<div class="in_title">手机号码：</div>'
		                   +'<span class="in_span"> <label class="emailIcon"> </label> <input type="text" placeholder="输入手机号码" id="phoneNumber" name="phoneNumber" to="phone" formtype="simple"> </span>'
		                   +'<span id="phoneNumberNotice" class="in_notice"> </span>'
		                +'</li> '
		                +'<li> '
		        			+'<div class="in_title">短信验证码:</div> '
		                    +'<span class="btn_span" style="margin-left:23px;"> <input type="text" id="msgValidCode" name="msgValidCode"> </span> '
		                    +'<a id="btnSendmsg" style="margin-left:15px;">获取验证码</a> '
		                    +'<span id="msgValidNotice" class="in_notice"> </span> '
		         		+'</li>'
		               
		                  
		                +'<li class="item40" style=" position:relative; margin-top:10px;">'
		                   +'<span class="chx_span ml86" id="jieru" style=" margin-top:0; margin-left:120px;">'
		                   +'<span class="agreementChxChecked agreementChxNoCheck"> '
		                        +'<input type="checkbox" name="" id="agreement" value="" class="agreementChx" onclick="txtFocus(this)"> '
		                   +'</span>'
		                       +'<label class="f14"> 我同意 <a target="blank" href="/assets/service_prot.pdf" class="fbtext"> 《服务协议》 </a> </label>'
		                   +'</span>'
		                   +'<span id="agreeMentNotice" class="in_notice mt" style=" margin-top:-20px; margin-left:-140px;"></span>'
		                +'</li>'
		                 +'<li class="item"><input id="registerSend" type="button" value="注　册" class="btnReg ml86"/></li> '
		            +'</ul> '
		             +'<div class="clear"></div> '
		          +'</div>'
		     +' </form>'
		    +'</div>'
		  +'</div>').appendTo($(this.el));
		  registerElem.find("[formtype='simple']").each(function(i,n){
			  $(this).unbind("change").bind("change",function(){
				  templateData[$(this).attr("to")]=$(this).val();
				  })
			  });
		registerElem.find("#registerSend").unbind("click").bind("click",function(){
			
			})
$("#agreement").click(function(){
   $(this).parents().toggleClass("agreementChxNoCheck");
});
	registerElem.find("#loginBtn").unbind("click").bind("click",function(){
	    app.objs.route.navigate(location.pathname.replace("/","")+"?page=login",{trigger: true});
	})
	
	}
	})
/*众筹模式*/
app.views.mode = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		$(this.el).empty();
		app.fns.setSecondNav($(this.el),"众筹模式");
		var pageData = this.data[0];
		console.log(pageData);


        $('<div id="mark-navi">'
		    +'<img src="/img/concept/bar-up.png" class="bar-up" alt="">'
		    +'<ul><li class="active"><a href="#b00"></a></li><li class=""><a href="#b01"></a></li><li class=""><a href="#b02"></a></li><li class=""><a href="#b03"></a></li><li class=""><a href="#b04"></a></li><li class=""><a href="#b05"></a></li><li class=""><a href="#b06"></a></li><li><a href="#b07"></a></li><li><a href="#b08"></a></li><li><a href="#b09"></a></li></ul>'
		    +'<img src="/img/concept/bar-down.png" class="bar-down" alt="">' 
		  +'</div>').appendTo($(this.el));

        var picBoxElem = $('<div id="main" class="concept"></div>').appendTo($(this.el));
        $.each(pageData.data,function(i,value){
          var str = '';
          if(i%2!=0){ 
             str += '<div class="box box2 clearfix" id="b0'+i+'">'
          }else{ 
            str += '<div class="box clearfix" id="b0'+i+'">'
          }
          str +='<div style="background-color: #fff; height: 296px; line-height: 296px; text-align: center;">'
		        +'<img style="vertical-align: middle;" src="'+value.image[0]+'" alt=""/><img style="vertical-align: middle;" src="'+value.image[1]+'" alt=""/><p></p>'
		      +'</div>'
		      +'<p class="next-btn"><a href="#b0'+i+'"><img src="/img/concept/next-btn.png" alt=""></a></p>'
		    +'</div>';
          $(str).appendTo(picBoxElem);
        //  $('<p id="p01" style=" ">'
        //      +'<a href="https://www.cncrowd.com:443/reg"><img class="oc" src="/img/start/btn01.png" alt=""></a>'
        //  +'</p>').appendTo(picBoxElem);
        });
	}
})
/*我要众筹*/
app.views.product = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
				$(this.el).empty();
		console.log(this.data);
		app.fns.setSecondNav($(this.el),"我要众筹");
		var that = this;

		var navElem = $('<div id="product_tab" class="product">'
		    +'<ul id="tab" class="clearfix">'
		      +'<li id="products1"  v="end_product" class="hover select">火爆众筹中</li>'
		      +'<li id="products2"  v="noStart_product" class="">即将开始众筹</li>'
		      +'<li id="products3"  v="on_product" class="">众筹结束</li>'
		    +'</ul>'
		    +'<div id="con_products_1" class="products-lst" style="display: none;">'
		    +'<ul>').appendTo($(that.el));
		navElem.find("li").unbind("click").bind("click",function(){
          $(this).siblings().removeClass('hover select');
          $(this).addClass('hover select');
          $(".products-lst").hide();
          $("#"+$(this).attr("v")).show();
		});
		$('<div id="end_product" class="products-lst"></div>'
         +'<div id="noStart_product" class="products-lst" style="display: none;"></div>'
         +'<div id="on_product" class="products-lst" style="display: none;"></div>').appendTo($(that.el));
		$.each(this.data,function(i,n){
			$.each(n,function(index,value){
			     var newProduct = $('<div class="project_intro">'
				          +'<div class="left">'
				             +'<span class="intro_pic"><a href="/items/30093164">'
			        		  +'<img src="'+value.image[0]+'" width="475" height="255">'
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
				      +'</div>').appendTo($("#"+i+"_product"));
				

			//var newProduct=$('<div>商品'+i+'</div>').appendTo($(that.el));
			newProduct.data("product",value);

			newProduct.unbind("click").bind("click",function(){
				app.objs.productDetailV.data = $(this).data("product");
				app.objs.route.navigate(location.pathname.replace("/","")+"?page=productDetail",{trigger: true});

				app.apis.buy({},this.render(),function(){})
			});
		});
	})
	}
});
/*众筹步聚*/
app.views.procedure = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		$(this.el).empty();
		console.log(this.data);
		var pageData = this.data[0];
		app.fns.setSecondNav($(this.el),"众筹步聚");
		    var newProcedure = $('<div class="cnc_step">'
			   +'<div class="step_s1">'
					+'<img src="'+pageData.data[0].image+'">' 
			   +'</div>'
			   +'<div class="step_list">'
			       +'<ul>'
			       +'</ul>'
			   +'</div>'
			+'<div class="clear" style=" "></div>'
			   +'<br>'
		      +'<p class="text-center" style=" ">'
		        +'<a href="https://www.cncrowd.com:443/declare"><img class="oc" src="/img/start/btn_sm.png" alt=""></a>'
		      +'</p>'
			+'</div>').appendTo($(this.el));
		$.each(this.data[1].data,function(index,value){ 
          // if(index>0){ 
             $('<li><img src="'+value.image+'"></li>').appendTo(newProcedure.find("ul"));
          // }
		});
	}
})
/*常见问题*/
app.views.FAQS = Backbone.View.extend({
	el:".middle",
	render:function(){
		console.log(this.data)
		$(this.el).empty();
		app.fns.setSecondNav($(this.el),"常见问题");

		var qu_answer_s1=$('<div class="qu_answer_s1">'
		    +'<div class="qa_contain">'
		    +'</div>'
		+'</div>').appendTo($(this.el));
	    var qu_answer_s2=$('<div class="qu_answer_s2">'
			+'<div class="qa_contain">'
		    +'</div>'
		+'</div>').appendTo($(this.el));

		$.each(this.data[0].data,function(index,value){ 
		  var qu_list = $(' <div class="qu_list">'
            +'<h4><i>'+(index+1)+'</i><span>'+value.name+'</span></h4>'
            +'<p>'+value.dsc+'</p>'
          +'</div>');
          qu_list.data("data",value);
           if(index<3){ 
             qu_list.appendTo(qu_answer_s1.find('.qa_contain'));
           }else{
           	 qu_list.appendTo(qu_answer_s2.find('.qa_contain'));
           }
		});


	}
})
/*关于我们*/
app.views.about = Backbone.View.extend({
	el:".middle",
	data:{},
	render:function(){
		var that=this;
		console.log(this.data)
		var that = this
		$(this.el).empty();
		var navElem = $('<div id="company_tab" class="company">'
		+'<ul id="tab" class="clearfix">'
			+'<li id="company1"  v="company_1" class="hover select">团队介绍</li>'
			+'<li id="company5"   v="company_5" class="">公司信息</li>'
			+'<li id="company2"  v="company_2" class="">经营理念</li>'
			+'<li id="company3"  v="company_3" class="">企业公告</li>'
			+'<li id="company4" v="company_4" cclass="">招贤纳士</li>'
		+'</ul>'
	+'</div>'
	+'<div id="con_company_1" class="team_intro tabCompany" style="display: block;"></div>').appendTo($(this.el));
	$('<div id="con_company_5" class="content tabCompany" style="display: none;"></div>'
		+'<div id="con_company_2" class="content tabCompany" style="display: none;"></div>'
		+'<div id="con_company_3" class="content tabCompany" style="display: none;"></div>'
		+'<div id="con_company_4" class="content tabCompany" style="display: none;"></div>').appendTo($(this.el));
	navElem.find("li").unbind("click").bind("click",function(){
          $(this).siblings().removeClass('hover select');
          $(this).addClass('hover select');
          $(".tabCompany").hide();
          $("#con_"+$(this).attr("v")).show();
		});
    $('<div class="team_introbox1"><img alt="" src="'+this.data.team[0].data[0].image+'"></div>').appendTo($("#con_company_1"));
    $('<div class="team_introbox3"></div><div class="clear"></div>').appendTo($("#con_company_1"));
    $.each(this.data.team[1].data,function(index,value){ 
   	 var fengxian_team = $('<div class="fengxian_team mr_40">'
             +'<h2><img src="'+value.image+'"></h2>'
             +'<h3>'+value.name+'</h3>'
             +'<h4>'+value.job+'</h4>'
             +'<p>'+value.dsc+'</p>'
        +'</div>')
     if((index!=0)&&(index%3==0)){
     	fengxian_team.removeClass('mr_40');
     }
   	 fengxian_team.appendTo($(".team_introbox3"));
      fengxian_team.data("data",value);
   });
   var team_introbox3 = $('<div class="team_introbox3"></div>').after('.tab_3');
   /********************/
   $.each(this.data.team[2].data,function(index,value){ 
      var elem = $('<div class="team_introbox2">'
      	 +'<h1>'+that.data.team[2].name+'</h1>'
        +'<div class="leader_intro2">'
	    +'<h2>'+value.name+'<span>'+value.job+'</span></h2>'
	    +'<p>'+value.dsc+'</p>'
	+'<img alt="" src="'+value.image+'">'
        +'</div>'
    +'</div>').appendTo($("#con_company_1"));
      elem.data("data",value);
   });
   $.each(this.data.team[3].data,function(index,value){ 
      var elem = $('<div class="team_introbox2">'
      	 +'<h1>'+that.data.team[3].name+'</h1>'
        +'<div class="leader_intro2">'
	    +'<h2>'+value.name+'<span>'+value.job+'</span></h2>'
	    +'<p>'+value.dsc+'</p>'
	+'<img alt="" src="'+value.image+'">'
        +'</div>'
    +'</div>').appendTo($("#con_company_1"));
      elem.data("data",value);
   });
   var tableElem=$('<div class="conts cf seminar">'
		    +'<div class="contMain">'
		      +'<section class="wrap mgn-btm">'
		        +'<table class="table-std">'
		          +'<tbody>'
		              +'</tbody>'
			        +'</table>'
			      +'</section>'
			    +'</div>'
			  +'</div>').appendTo($("#con_company_5"));
   $.each(this.data.company,function(index,value){ 
      var elem = $('<tr><th class="little"><span>'+value.title+'</span></th><td>'+value.message+'</td></tr>').appendTo(tableElem.find("tbody"));
      elem.data("data",value);
   });
    
   /****经营理念*****/
   $('<div class="conts cf seminar">'
			+'<div class="contMain">'
				+'<div>'
					+'<div class="wrap">'
						+'<br>'
						+'<p class="box text-center">'
							+'<img alt="" src="'+this.data.idea[0].data[0].image+'">'
						+'</p>'
					+'</div>'
					+'<div class="wrap mgn-btm">'
						+'<p class="business_detail">'+this.data.idea[0].data[0].title+'</p>'
						+'<p class="business_detail">'+this.data.idea[0].data[0].title_0+'</p>'
						+'<br>'
						+'<p class="business_detail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+this.data.idea[0].data[0].dsc+'</p>'
						+'<br>'
						+'<p class="text text-right">'+this.data.idea[0].data[0].company+'</p>'
						+'<p class="text text-right">'+this.data.idea[0].data[0].time+'</p>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>').appendTo($("#con_company_2"));
   /****企业公告*****/
   var gongGaoElem=$(' <div class="conts cf ir">'
	+'<div class="wrap mgn-btm">'
		+'<section class="box">'
			+'<div class="title-box">'
				+'<h1 class="title">公司新闻</h1>'
				+'<p class="eng">Hot News</p>'
			+'</div>'
			+'<ul>'
			+'</ul>'
		+'</section>'
	+'</div>'
+'</div>').appendTo($("#con_company_3"));
 $.each(this.data.announcement,function(index,value){ 
  var elem=$('<li><p><strong>'+value.start+' &nbsp; </strong><a href="">'+value.message+'</a></p></li>').appendTo(gongGaoElem.find("ul"));
	// newAn.data("an",n);
	elem.data("data",value);
	elem.find("a").unbind("click").bind("click",function(){
		app.objs.announcementDetailV.data = $(this).data("data");
		app.objs.route.navigate(location.pathname.replace("/","")+"?page=announcementDetail",{trigger: true});
	});
  }); 
   var tableElem=$('<div class="conts cf seminar">'
		    +'<div class="contMain">'
		      +'<section class="wrap mgn-btm">'
		        +'<table class="table-std">'
		          +'<tbody>'
		              +'</tbody>'
			        +'</table>'
			      +'</section>'
			    +'</div>'
			  +'</div>').appendTo($("#con_company_4"));
   $.each(this.data.company,function(index,value){ 
      var elem = $('<tr><th class="little"><span>'+value.title+'</span></th><td></td></tr>').appendTo(tableElem.find("tbody"));
      elem.find("td").html(value.message);
      elem.data("data",value);
   });
			// <div class="uc_pagnation" id="uc_pagnation">
   //               <a href="javascript: gotoPage(1)">首页</a>                
   //               <a href="javascript: gotoPage(1-1)" class="page-prev"></a>                                 
   //               <a href="javascript: gotoPage(1+1)" class="page-next"></a>       
   //               <a href="javascript: gotoPage(2)">尾页</a>
   //               <span class="uc_gopage2">转到:
   //               	<select onchange="gotoPage(this.value)" id="_pn">
                 		            
   //                        <option value="1">1</option>                   
                                   
   //                        <option value="2">2</option>                   
                                               
   //                 </select>
   //              	页</span>
   //          </div>
   //          <input id="pageCount" type="hidden" value="2">
   //          <input id="currentPage" type="hidden" value="1">

		// $.each(this.data.announcement,function(i,n){
		// 	var newAn=$('<div>公告'+i+'</div>').appendTo($(that.el));
		// 	newAn.data("an",n);
		// 	newAn.unbind("click").bind("click",function(){
		// 		app.objs.announcementDetailV.data = $(this).data("an");
		// 		app.objs.route.navigate("?page=announcementDetail",{trigger: true});
		// 	})
		// })
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
	el:".mb_right",
	data:{},
	render:function(){
		console.log(this);
		$(this.el).html('<div class="my_assets" style="width: 703px; height: auto; border: 1px solid #c8c8c8; margin-bottom: 1px;">'+
				'<h2>我的资产</h2>'+
				'<ul>'+
					'<li class="m_a_left"><p>盈利：'+
						'</p><h4>'+
							'<span>￥0</span>元'+
						'</h4>'+
						'<p></p>'+
						'<p>亏损：'+
						'</p><h4>'+
							'<span id="reAmt">￥0.00</span>元'+
						'</h4>'+
						'<p></p>'+
						'</li>'+
					'<li class="m_a_center"><p>现持有价值：'+
						'</p><h4>'+
							'<span id="totalBal">￥0</span>元'+
						'</h4>'+
						'<p></p>'+
						'<!-- <p>已认购金额：20,000.00 元</p> --></li>'+
					'<li class="m_a_right"><a href="recharge?recharge=1">充值</a><a onclick="Prompt()">提现</a></li>'+
				'</ul>'+
			'</div>'+
			


			'<div class="my_accountsafety">'+
				'<h2>账户安全</h2>'+
				'<ul>'+
					'<li class="m_ac_top"><h3>'+
							'安全等级：<span>低'+
								
								
								'</span>'+
						'</h3>'+
						'<h4 class="m_ac_progress">'+
							'<img src="/img/uc/progress_pic1.png">'+
						'</h4>'+
						'<h4 class="m_ac_progress" style="display:none">'+
							'<img src="/img/uc/progress_pic2.png">'+
						'</h4>'+
						'<h4 class="m_ac_progress" style="display:none">'+
							'<img src="/img/uc/progress_pic3.png">'+
						'</h4>'+
						'<h4 class="m_ac_progress" style="display:none">'+
							'<img src="/img/uc/progress_pic4.png">'+
						'</h4></li>'+
					'<div class="clear"></div>'+
					'<li class="m_ac_propic" id="mailSet">'+
						'<img src="/img/uc/icon_a1.jpg" alt="">'+
					'<h4>电子邮箱</h4>'+
						'<a href="mailAuthenticate">未绑定</a>'+
					'</li>'+
					'<li class="m_ac_propic" id="mailModify" style="display:none">'+
						'<img src="/img/uc/icon_a1_on.jpg" alt="">'+
					'<h4>电子邮箱</h4>'+
						'<a href="mailAuthenticate">修改</a>'+
					'</li>'+
					'<li class="m_ac_propic" id="secQuesSet">'+
						'<img src="/img/uc/icon_a2.jpg" alt="">'+
					'<h4>密码问题</h4>'+
						'<a href="secureQuestion">未设置</a>'+
					'</li>'+
					'<li class="m_ac_propic" id="secQuesModify" style="display:none">'+
						'<img src="/img/uc/icon_a2_on.jpg" alt="">'+
					'<h4>密码问题</h4>'+
						'<a href="secureQuestion">修改</a>'+
					'</li>'+
					'<li class="m_ac_propic" id="infoSet">'+
						'<img src="/img/uc/icon_a3.jpg" alt="">'+
					'<h4>个人资料</h4>'+
						'<a href="modifyUser">未完善</a>'+
					'</li>'+
					'<li class="m_ac_propic" id="infoModify" style="display:none">'+
						'<img src="/img/uc/icon_a3_on.jpg" alt="">'+
					'<h4>个人资料</h4>'+
						'<a href="modifyUser">修改</a>'+
					'</li>'+
				'</ul>'+
			'</div>'+

			'<div class="my_projectlist">'+
				'<h2>我的众筹产品</h2>'+
				'<ul>'+
					
					'<div class="clear"></div>'+
				'</ul>'+
			'</div>')
	}
	})
/*充值*/
app.views.recharge = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		$(this.el).html("充值")
	}
	})
/*提现*/
app.views.paid = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		$(this.el).html("提现")
	}
	})
/*银行卡*/
app.views.card = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		$(this.el).html("银行卡")
	}
	})
/*资金纪录*/
app.views.capitalDetail = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		$(this.el).empty();

		$(this.el).html('<div id="con_funds_1">'+
        '<div class="right_table">'+
            '<table id="table1" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>项目名称</td>'+
                    '<td>订单号</td>'+
                    '<td>交易时间</td>'+
                    '<td>交易类型</td>'+
                    '<td>交易金额</td>'+
                    '<td>交易状态</td>'+
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>'+
        	'<div id="pagination">'+
            	'<a id="prePage_1" href="javascript:void(0)" onclick="pageDown(1,1)">上一页</a>'+
                	'<span id="currPage_1">1</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span id="totalPage_1">1</span>'+
                '<a id="nextPage_1" href="javascript:void(0)" onclick="pageDown(2,1)">下一页</a>'+
            '</div>'+
        '</div>');
	}
	})
/*红包记录*/
app.views.redPacketDetail = Backbone.View.extend({
	el:".mb_right",
	data:{},
	render:function(){
		console.log(this.data);
		$(this.el).html('<div class="credit_lending">'+
            '<h2>我的红包</h2>'+
            '<div class="lending_table">'+
            '<table width="100%" border="0" id="pro_table">'+
                '<thead>'+
                  '<tr>'+
                  	'<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>发放日期</td>'+
                    '<td>红包金额</td>'+
                    '<td>红包类型</td>'+
                    '<td>红包状态</td>'+
                    '<td>消费日期</td>'+
                  '</tr>'+
                '</thead>'+
               '<tbody><tr><td width="5%"></td><td>1</td><td>2015-05-14 23:25</td><td>10</td><td>注册红包</td><td class="lq_btn"><a href="javascript:void(0)" onclick="receiveRE(60001702)">领取</a></td><td></td></tr></tbody></table>'+
               
            '</div>'+
            '<!-- 分页  -->'+
          '<div id="pagination">'+
            '<a id="prePage" href="javascript:void(0)" onclick="pageDown(1)">上一页</a>'+
            '<span id="currPage">1</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span id="totalPage">1</span>'+
            '<a id="nextPage" href="javascript:void(0)" onclick="pageDown(2)">下一页</a>'+
          '</div>'+
            '<div class="clear"></div>'+
        '</div>')
	}
	})
/*安全问题*/
app.views.safeQusetion = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		$(this.el).html('<div class="account_security">'+
            '<h2>温馨提示：您好，您的安全问题未设置，请填写以下信息进行设置</h2>'+
            '<ul>'+
                '<p>请在下面的下拉列表中选择问题，并在答案部分予以回答。<br>注意：回答安全问题是您修改手机号码，变更邮箱，找回密码和修改银行账号的必备验证程序，请妥善保存您的安全问题及答案，谢谢。</p>'+
                '<li><h4>问题一：</h4>'+
                    '<span>'+
                       '<select id="question1" name="请选择">'+
                           '<option>我的出生地在哪？</option>'+
                           '<option>我的母亲叫什么？</option>'+
                           '<option>我的星座是什么？</option>'+
                           
                       '</select>'+
                     '</span>'+
                '</li>'+
                '<li><h4>答案一：</h4><span><input id="answer1" name="answer1" type="text"></span><i id="answer1Notice" class="ts"></i></li>'+
                '<li><h4>问题二：</h4>'+
                    '<span>'+
                       '<select id="question2" name="请选择">'+
                           '<option>我最喜欢的食物是什么？</option>'+
                           '<option>我最喜欢的电影是什么？</option>'+
                           '<option>我最喜欢的歌曲是什么？</option>'+
                       '</select>'+
                     '</span>'+
                '</li>'+
                '<li><h4>答案二：</h4><span><input id="answer2" name="answer2" type="text"></span><i id="answer2Notice" class="ts"></i></li>'+
                '<a onclick="secQuesSubmit();" class="confirm_btn">提交更新</a>'+
                '<!-- <div class="cancel_btn"><a href="#">取消</a></div> -->'+
            '</ul>'+
            '<div class="clear"></div>'+
        '</div>')
	}
	})
/*邮箱验证*/
app.views.emailVerify = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		$(this.el).html('<div class="email_authentication">'+
            '<h2>邮箱认证</h2>'+
            '<ul>'+
               '<h4>请输入您的邮箱地址:</h4>'+
               '<li class="form-item">'+
                 '<input type="text" value="" id="myEmail" class="shadow-none">'+
                 '<i class="glyphicon glyphicon-envelope"></i>'+
               '</li>'+
               '<li id="mailNotice"></li>'+
               '<li id="sendBtn" class="basics_btn"><a id="bindBtn" onclick="mailAuthSend()">绑定</a></li>'+
               '<li id="mailLoginBtn" class="basics_btn" style="display:none"><a onclick="mailAuthSend()">登录邮箱</a></li>'+
               '<div class="clear"></div>'+
            '</ul>'+
            
        '</div>')
	}
	})
/*修改手机*/
app.views.setPhone = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		$(this.el).html('<div class="bankcard" style="position:relative;">'+
	            '<h2>用户手机修改</h2>'+
	            '<ul>'+
	                '<li><h4>用户名:</h4>'+app.objs.user.get().userName+'</li>'+
	                '<li><h4>新手机号:</h4><span><input id="phoneNumber" name="phoneNumber" type="text"/></span><i id="phoneNumberNotice" class="in_notice" style="margin-top:145px;margin-left:290px;"></i></li>'+
	                '<li>'+
		                '<h4>输入验证码:</h4><span><input id="msgValidCode" name="msgValidCode" type="text" onfocus="msgValidCodeCheck();" onblur="msgValidCodeCheck();"></span><i id="msgValidNotice" class="in_notice" style="margin-top:190px;margin-left:290px;"></i>'+
		                '<h4 class="yzm" style="position:absolute; right:205px; top:194px;width:150px;"><a id="btnSendmsg" href="javascript:void(0)" onclick="msgSendCheck()" style="width:150px; height:30px; line-height:30px; box-shadow:none;">[获取验证码]</a></h4>'+
	                '</li>'+
	                '<div class="bankcard_confirm"><a href="javascript:void(0)" onclick="submitCheck()">确&nbsp;&nbsp;认</a></div>'+
	            '</ul>'+
	            '<div class="clear"></div>'+
	        '</div>')
	}
	})
/*修改资料*/
app.views.setDetail = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		var templateData=this.data;
		$(this.el).html('<div class="bankcard">'+
            '<h2>用户资料修改</h2>'+
            '<form action="/user/updateUser" method="post" id="modifyUserForm" name="modifyUserForm">'+
	            '<ul>'+
	              '<li><h4>用户名:</h4>'+app.objs.user.get().userName+'</li>'+
	              '<li><h4>手机号:</h4>13692146343<a href="tel">[修改]</a></li>'+
	              '<li><h4>邮箱:</h4><a href="mailAuthenticate">[绑定]</a></li>'+
	              '<li><h4>真实姓名:</h4>'+
	              '<span>'+
		              '<span>'+
			              	'<input id="name" name="name" formtype="simple" to="userName" type="text" value="'+templateData.userName+'">'+
		              '</span>'+
	              '</span>'+
	              '<i id="nameNotice" class="ts"></i></li>'+
	              '<!-- '+
	              '<li><h4>性别:</h4>'+
	              '<span>'+
	              	'<select to="sex" formtype="select">'+
						'<option value="0">女</option>'+
						'<option value="1">男</option>'+
					'</select>'+
	              '</span>'+
	              '<i id="passwordNotice" class="ts"></i></li>'+
	               '-->'+
	              '<li><h4>紧急联系人:</h4><span><input id="emerName" name="emerName" formtype="simple" type="text" to="contacts" value="'+templateData.contacts+'"></span>'+
	              '<i id="emerNameNotice" class="ts"></i></li>'+
	              '<li><h4>联系人手机号:</h4><span><input id="emerTel" name="emerTel" formtype="simple" type="text" to="contactsPhone" value="'+templateData.contactsPhone+'"></span>'+
	              '<i id="emerTelNotice" class="ts"></i></li>'+
	              '<li><h4>居住地址:</h4><span><input id="address" name="address" formtype="simple" type="text" to="place" value="'+templateData.place+'"></span>'+
	              '<i id="addressNotice" class="ts"></i></li>'+
	              '<li><h4>最高学历:</h4><span><input id="education" name="education" formtype="simple" type="text" to="record" value="'+templateData.record+'" ></span>'+
	              '<i id="educationNotice" class="ts"></i></li>'+
	              '<li><h4>毕业院校:</h4><span><input id="schoolName" name="schoolName" formtype="simple" type="text" to="university" value="'+templateData.university+'" ></span>'+
	              '<i id="schoolNameNotice" class="ts"></i></li>'+
	              '<li><h4>职位:</h4><span><input id="position" name="position" formtype="simple" type="text" to="job" value="'+templateData.job+'"></span>'+
	              '<i id="positionNotice" class="ts"></i></li>'+
	              '<li><h4>所在公司:</h4><span><input id="userCorp" name="userCorp" formtype="simple" type="text" to="company" value="'+templateData.company+'"></span>'+
	              '<i id="userCorpNotice" class="ts"></i></li>'+
	              '<div class="bankcard_confirm"><a">确&nbsp;&nbsp;认</a></div>'+
	            '</ul>'+
            '</form>'+
            '<div class="clear"></div>'+
        '</div>')
		$(this.el).find("[ formtype='simple']").each(function(){
			$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})
			})
		$(this.el).find("[ formtype='select']").each(function(){
			
			$(this).find("[value='"+templateData[$(this).attr("to")]+"']").attr("selected","selected");
			$(this).selectmenu({
				change: function( event,ui ) {
					templateData[$(this).attr("to")]=ui.item.value;
					}
				});
			if(templateState){
				$(this).selectmenu(templateState);
				}	
			})
	}
	})
/*修改密码*/
app.views.setPassWord = Backbone.View.extend({
	el:".mb_right",
	render:function(){
		templateData={
				id:app.objs.user.get().id,/*用户id*/
				oldKey:"",/*旧密码*/
				newKey:"",/*新密码*/
				newKey2:""/*新密码*/
				}
		$(this.el).html('<div class="bankcard">'+
            '<h2>登录密码修改</h2>'+
            '<form action="/user/modifypassword" method="post" id="pwdModifyForm"> '+
            '<ul>'+
                '<li><h4>用户名:</h4>'+app.objs.user.get().userName+'</li>'+
                '<li><h4>原密码:</h4><span><input id="password" name="password" to="oldKey" formtype="simple" type="password"></span><i id="passwordNotice" class="ts"></i></li>'+
                '<li><h4>新密码:</h4><span><input id="newPassword" name="newPassword" to="newKey" formtype="simple" type="password" onclick="validateInput()" onblur="validateInput()"></span><i id="newPasswordNotice" class="ts"></i></li>'+
                '<li class="pw_ts"><h4>密码规则：</h4>8-16个字符的英文字母、符号和数字组合</li>'+
                '<!--  <li><h4>密码强度:</h4><h5 class="pg_bar"><b id="" style="width:352px;"></b></h5></li>-->'+
                '<li><h4>再次输入密码:</h4><span><input id="passagain" to="newKey2" formtype="simple" name="passagain" type="password" onclick="validateInput()" onblur="validateInput()"></span><i id="passagainNotice" class="ts"></i></li>'+
                '<div class="bankcard_confirm"><a onclick="submitValid();">确&nbsp;&nbsp;认</a></div>'+
            '</ul>'+
            '</form>'+
            '<div class="clear"></div>'+
        '</div>')
		$(this.el).find("[formtype='simple']").each(function(){
			$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})
			})
	}
	})
/*后台部分************************************************************************************/
/*管理员管理*/
app.views.adminManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){
		function templateFn(state,data){
			console.log(data)
			var templateData={
				id: app.fns.uuid(),
				userName: app.objs.user.get().userName,
				admin: "0",
				client: "0",
				announcement: "0",
				company: "0",
				product: "0",
				promotion: "0",
				recruit: "0",
				redPacket: "0"
				
				};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">编号</div>'+
				'<div class="templatePointRight">'+templateData.id+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">用户名</div>'+
				'<div class="templatePointRight">'+templateData.userName+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">管理员管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="admin">'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">客户管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="client">'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">公告管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="announcement">'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">企业管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="company">'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">产品管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="product">'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">宣传管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="promotion">'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">招聘管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="recruit">'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">红包管理</div>'+
				'<div class="templatePointRight">'+
					'<select to="redPacket" readonly>'+
						'<option value="0">无权限</option>'+
						'<option value="1">只读</option>'+
						'<option value="2">修改</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		templateDom.find("select").each(function(){
			$(this).find("[value='"+templateData[$(this).attr("to")]+"']").attr("selected","selected");
			$(this).selectmenu({
				change: function( event,ui ) {
					templateData[$(this).attr("to")]=ui.item.value;
					}
				});
			if(templateState){
				$(this).selectmenu(templateState);
				}	
			});
		templateDom.appendTo($("#popMain"));
			}
		function add(target){
			var openfn=function(){new templateFn(1,null)};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			window.location.reload();
			}
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		$(this.el).html('<div class="addButton"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="right_table">'+
            '<table id="tableadmin" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>姓名</td>'+
                    '<td width="5%">编辑</td>'+
                    '<td width="5%">删除</td>'+
                    //'<td>公告管理</td>'+
                   // '<td>招聘管理</td>'+
                    //'<td>企业信息管理</td>'+
                   // '<td>产品管理</td>'+
                   // '<td>宣传管理</td>'+
                   // '<td>红包管理</td>'+
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>');
        $.each(this.data,function(i,n){
        	var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.userName+'</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                    '<td width="5%"><div class="tableButton remove"></div></td>'+
                  '</tr>').appendTo($("#tableadmin"));
				newPoint.data("result",n);
				newPoint.unbind("click").bind("click",function(e){
					show($(this));
					});
				newPoint.find(".edit").unbind("click").bind("click",function(e){
					e.stopPropagation()
					edit($(this));
					});
				newPoint.find(".remove").unbind("click").bind("click",function(e){
					e.stopPropagation()
					remove($(this));
					});
        });
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		
	}
	})
/*公告管理*/
app.views.announcementManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){
		
		console.log(this.data)
		function templateFn(state,data){
			var openTime=new Date().getTime();
			var templateData={
				id: app.fns.uuid(),
				end: new Date().getTime()+24*3600*1000,
				start: new Date().getTime(),
				message: "<h1>eee</h1>",
				title: ""};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">编号</div>'+
				'<div class="templatePointRight">'+templateData.id+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">标题</div>'+
				'<div class="templatePointRight"><input to="title" formtype="simple" value="'+templateData.title+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">内容</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_message" to="message" formtype="html" type="text/plain" style="width:570px;height:250px;"></script></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">开始时间</div>'+
				'<div class="templatePointRight"><input to="start" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">结束时间</div>'+
				'<div class="templatePointRight"><input to="end" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		templateDom.appendTo($("#popMain"));
		templateDom.find("[formtype='html']").each(function(){
			
			var to = $(this).attr("to")
			console.log($(this))
			var ue = UE.getEditor($(this).attr("id"));
			console.log("a")	
			ue.addListener( 'ready', function( editor ) {
				console.log("b")	
     			ue.setContent(templateData[to]); //编辑器家在完成后，让编辑器拿到焦点
 } );			
		ue.addListener( 'afterSelectionChange', function( editor ) {
     			templateData[to]=ue.getContent(); //编辑器家在完成后，让编辑器拿到焦点
 } );		
			
			});
		
		templateDom.find("[formtype='date']").each(
			function(){
				$(this).datepicker({
					onSelect:function( event,ui ) {
						templateData[$(this).attr("to")]=app.fns.d2t($(this).val());
						}
					}).datepicker("setDate", app.fns.t2d(templateData[$(this).attr("to")]));
			}
		)
		templateDom.find("[formtype='simple']").each(
			function(){$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})}
		)
		
			}
		function add(target){
			var openfn=function(){new templateFn(1,null)};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			window.location.reload();
			}
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		$(this.el).html('<div class="addButton"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="right_table">'+
            '<table id="tableannouncement" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>标题</td>'+
                    '<td>描述</td>'+
                    '<td width="5%">编辑</td>'+
                    '<td width="5%">删除</td>'+
                    //'<td>开始时间</td>'+
                    //'<td>结束时间</td>'+
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>');
        $.each(this.data,function(i,n){
        	var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.title+'</td>'+
                    '<td>'+n.message+'</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                    '<td width="5%"><div class="tableButton remove"></div></td>'+
                  '</tr>').appendTo($("#tableannouncement"));
				  newPoint.data("result",n);
				  newPoint.unbind("click").bind("click",function(e){
					show($(this));
					});
				newPoint.find(".edit").unbind("click").bind("click",function(e){
					e.stopPropagation()
					edit($(this));
					});
				newPoint.find(".remove").unbind("click").bind("click",function(e){
					e.stopPropagation()
					remove($(this));
					});
        });
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
	}
	})
/*客户管理*/
app.views.clientManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){
		console.log(this.data)
		function templateFn(state,data){
			var templateData={
				id: app.fns.uuid(),
				userName: app.objs.user.get().userName,
				image: "http://",
				name: "fdgh",
				company: "你妹的",
				job: "做你妹",
				contacts: "sddfsf",
				contactsPhone: "34242",
				email: "dcghf@tgh.com",
				phone: "6575798",
				place: "bb",
				type: 1,
				university: "你妹的学校",
				record: "本科"
				};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">编号</div>'+
				'<div class="templatePointRight">'+templateData.id+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">用户名</div>'+
				'<div class="templatePointRight">'+templateData.userName+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">头像</div>'+
				'<div class="templatePointRight"></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">姓名</div>'+
				'<div class="templatePointRight"><input to="name" formtype="simple" value="'+templateData.name+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">公司</div>'+
				'<div class="templatePointRight"><input to="company" formtype="simple" value="'+templateData.company+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">工作</div>'+
				'<div class="templatePointRight"><input to="job" formtype="simple" value="'+templateData.job+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">联系方式</div>'+
				'<div class="templatePointRight"><input to="contacts" formtype="simple" value="'+templateData.contacts+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">联系电话</div>'+
				'<div class="templatePointRight"><input to="contactsPhone" formtype="simple" value="'+templateData.contactsPhone+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">邮箱</div>'+
				'<div class="templatePointRight"><input to="email" formtype="simple" value="'+templateData.email+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">手机</div>'+
				'<div class="templatePointRight"><input to="phone" formtype="simple" value="'+templateData.phone+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">住址</div>'+
				'<div class="templatePointRight"><input to="place" formtype="simple" value="'+templateData.place+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">学校</div>'+
				'<div class="templatePointRight"><input to="university" formtype="simple" value="'+templateData.university+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">专业</div>'+
				'<div class="templatePointRight"><input to="record" formtype="simple" value="'+templateData.record+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		templateDom.find("[formtype='simple']").each(
			function(){$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})}
		)
		templateDom.appendTo($("#popMain"));
			}
		function add(target){
			var openfn=function(){new templateFn(1,null)};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			window.location.reload();
			}
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		$(this.el).html('<div class="addButton"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="right_table">'+
            '<table id="tableclient" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>用户名</td>'+
                    '<td width="5%">编辑</td>'+
                    '<td width="5%">删除</td>'+
                    //'<td>头像</td>'+
                    //'<td>住址</td>'+
                    //'<td>邮箱</td>'+
                    //'<td>姓名</td>'+
                    //'<td>邮箱</td>'+
                    //'<td>联系方式</td>'+
                    //'<td>联系电话</td>'+
                    //'<td>学历</td>'+
                    //'<td>学校</td>'+
                    //'<td>工作</td>'+
                    //'<td>公司</td>'+
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>')
        $.each(this.data,function(i,n){
        	var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.userName+'</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                    '<td width="5%"><div class="tableButton remove"></div></td>'+
                  '</tr>').appendTo($("#tableclient"));
				  newPoint.data("result",n);
				  newPoint.unbind("click").bind("click",function(e){
					show($(this));
					});
				newPoint.find(".edit").unbind("click").bind("click",function(e){
					e.stopPropagation()
					edit($(this));
					});
				newPoint.find(".remove").unbind("click").bind("click",function(e){
					e.stopPropagation()
					remove($(this));
					});
        });
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
	}
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
	render:function(){
		console.log(this.data);
		function templateFn(state,data){
			var templateData={
				UnitPrice: 9,
				area: 1223,
				buildTime: new Date().getTime()+24*3600*1000,
				copy: 20,
				costPrice: 2000,
				costUnitPrice: 10,
				decorate: "0",
				developer: "你妹",
				haveLease: "0",
				id: app.fns.uuid(),
				image:["http://","http://"],
				maxTime: 10086,
				maxUnit: 200,
				minUnit: 1,
				money: 20000,
				more: 0,
				payed: 10000,
				payedCount: 10,
				place: "那个地址",
				price: 1000,
				propertyType: "0",
				rightType: "0",
				stratTime: new Date().getTime(),
				subhead: "nnnn",
				tax: 8,
				title: "aa",
				yearReturn: "15%以上"};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">编号</div>'+
				'<div class="templatePointRight">'+templateData.id+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">标题</div>'+
				'<div class="templatePointRight"><input to="title" formtype="simple" value="'+templateData.title+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">副标</div>'+
				'<div class="templatePointRight"><input to="subhead" formtype="simple" value="'+templateData.subhead+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">图片</div>'+
				'<div class="templatePointRight"></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">价格</div>'+
				'<div class="templatePointRight"><input to="price" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">原价</div>'+
				'<div class="templatePointRight"><input to="costPrice" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">金额</div>'+
				'<div class="templatePointRight"><input to="money" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">已筹金额</div>'+
				'<div class="templatePointRight"><input to="payed" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">众筹笔数</div>'+
				'<div class="templatePointRight"><input to="payedCount" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">份数</div>'+
				'<div class="templatePointRight"><input to="copy" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">持有限期</div>'+
				'<div class="templatePointRight"><input to="maxTime" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">最小单位</div>'+
				'<div class="templatePointRight"><input to="minUnit" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">最大单位</div>'+
				'<div class="templatePointRight"><input to="maxUnit" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">税费预算</div>'+
				'<div class="templatePointRight"><input to="tax" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">面积</div>'+
				'<div class="templatePointRight"><input to="area" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">原单价</div>'+
				'<div class="templatePointRight"><input to="costUnitPrice" formtype="number"/></div></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">单价</div>'+
				'<div class="templatePointRight"><input to="UnitPrice" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">开发商</div>'+
				'<div class="templatePointRight"><input to="developer" formtype="simple" value="'+templateData.developer+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">地址</div>'+
				'<div class="templatePointRight"><input to="place" formtype="simple" value="'+templateData.place+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">装修状况</div>'+
				'<div class="templatePointRight">'+
					'<select to="decorate">'+
						'<option value="0">无披房</option>'+
						'<option value="1">豪华装修</option>'+
						'<option value="2">简单专修</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">物业类型</div>'+
				'<div class="templatePointRight">'+
					'<select to="propertyType">'+
						'<option value="0">公寓</option>'+
						'<option value="1">复式</option>'+
						'<option value="2">豪宅</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">开始时间</div>'+
				'<div class="templatePointRight"><input to="stratTime" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">建造时间</div>'+
				'<div class="templatePointRight"><input to="buildTim" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">产权类型</div>'+
				'<div class="templatePointRight">'+
					'<select to="rightType">'+
						'<option value="0">商业用房</option>'+
						'<option value="1">住宅用房</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">是否租约</div>'+
				'<div class="templatePointRight">'+
					'<select to="haveLease">'+
						'<option value="0">否</option>'+
						'<option value="1">是</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">年收益率</div>'+
				'<div class="templatePointRight"><input to="yearReturn" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">增值</div>'+
				'<div class="templatePointRight"><input to="more" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>');
		templateDom.find("[formtype='date']").each(
			function(){
				$(this).datepicker({
					onSelect:function( event,ui ) {
						templateData[$(this).attr("to")]=app.fns.d2t($(this).val());
						}
					}).datepicker("setDate", app.fns.t2d(templateData[$(this).attr("to")]));
			}
		)
		templateDom.find("[formtype='simple']").each(
			function(){$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})}
		)
		templateDom.find("[formtype='number']").each(
			function(){
				$(this).spinner({change:function(event,ui){
				templateData[$(this).attr("to")]=$(this).spinner("value")
				}}).spinner("value",templateData[$(this).attr("to")]);
			
			}
		)
		templateDom.find("select").each(function(){
			$(this).find("[value='"+templateData[$(this).attr("to")]+"']").attr("selected","selected");
			$(this).selectmenu({
				change: function( event,ui ) {
					templateData[$(this).attr("to")]=ui.item.value;
					}
				});
			if(templateState){
				$(this).selectmenu(templateState);
				}	
			});
		templateDom.appendTo($("#popMain"));
			}
		function add(target){
			var openfn=function(){new templateFn(1,null)};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			window.location.reload();
			}
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		$(this.el).html('<div class="addButton"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="right_table">'+
            '<table id="tableprocedure" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>标题</td>'+
                    '<td>描述</td>'+
                    '<td width="5%">编辑</td>'+
                    '<td width="5%">删除</td>'+
                    //'<td>副标题</td>'+
                    //'<td>图片</td>'+
                    //'<td>价格</td>'+
                    //'<td>原价</td>'+
                    //'<td>金额</td>'+
                    //'<td>比数</td>'+
                    //'<td>份数</td>'+
                    //'<td>期限</td>'+
                    //'<td>最大单位</td>'+
                    //'<td>最小单位</td>'+
                    //'<td>税费预算</td>'+
                    //'<td>面积</td>'+
                    //'<td>原单价</td>'+
                    //'<td>单价</td>'+
                    //'<td>开发商</td>'+
                    //'<td>地址</td>'+
                    //'<td>装修</td>'+
                    //'<td>物业类型</td>'+
                    //'<td>开始时间</td>'+
                    //'<td>建造时间</td>'+
                    //'<td>产权类型</td>'+
                    //'<td>租约</td>'+
                    //'<td>年收益率</td>'+
                    //'<td>增值</td>'+
                  '</tr>'+
                '</thead>'+
                
            '</table>'+
        '</div>');
		$.each(this.data,function(i,n){
			var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.title+'</td>'+
                    '<td>'+n.subhead+'</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                    '<td width="5%"><div class="tableButton remove"></div></td>'+
                  '</tr>').appendTo($("#tableprocedure"));
				  newPoint.data("result",n);
				  newPoint.unbind("click").bind("click",function(e){
					show($(this));
					});
				newPoint.find(".edit").unbind("click").bind("click",function(e){
					e.stopPropagation()
					edit($(this));
					});
				newPoint.find(".remove").unbind("click").bind("click",function(e){
					e.stopPropagation()
					remove($(this));
					});
		});
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
	}
	})
/*招聘管理 公司资料管理*/
app.views.recruitManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){
		console.log(this.data);
		function templateFn(state,data){
			var openTime=new Date().getTime();
			var templateData={
				end: new Date().getTime()+24*3600*1000,
				id: app.fns.uuid(),
				message: "fkdjf",
				start: new Date().getTime(),
				title: "bhk"};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">编号</div>'+
				'<div class="templatePointRight">'+templateData.id+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">标题</div>'+
				'<div class="templatePointRight"><input to="title" formtype="simple" value="'+templateData.title+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">描述</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_message" to="message" formtype="html" type="text/plain" style="height:250px;"></script></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">开始时间</div>'+
				'<div class="templatePointRight"><input to="start" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">结束时间</div>'+
				'<div class="templatePointRight"><input to="end" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		templateDom.appendTo($("#popMain"));
		templateDom.find("[formtype='html']").each(function(){
			var to = $(this).attr("to")
			var ue = UE.getEditor($(this).attr("id"));
			ue.addListener( 'ready', function( editor ) {	
     			ue.setContent(templateData[to]); //编辑器家在完成后，让编辑器拿到焦点
 } );			
		ue.addListener( 'afterSelectionChange', function( editor ) {
     			templateData[to]=ue.getContent(); //编辑器家在完成后，让编辑器拿到焦点
 } );		
			
			});
		templateDom.find("[formtype='date']").each(
			function(){
				$(this).datepicker({
					onSelect:function( event,ui ) {
						templateData[$(this).attr("to")]=app.fns.d2t($(this).val());
						}
					}).datepicker("setDate", app.fns.t2d(templateData[$(this).attr("to")]));
			}
		)
		templateDom.find("[formtype='simple']").each(
			function(){$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})}
		)
		
			}
		function add(target){
			var openfn=function(){new templateFn(1,null)};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			window.location.reload();
			}
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		$(this.el).html('<div class="addButton"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="right_table">'+
            '<table id="tablerecruit" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>标题</td>'+
                    '<td>描述</td>'+
                    '<td width="5%">编辑</td>'+
                    '<td width="5%">删除</td>'+
                    //'<td>开始时间</td>'+
                    //'<td>结束时间</td>'+
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>');
        $.each(this.data,function(i,n){
        	var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.title+'</td>'+
                    '<td>'+n.message+'</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                    '<td width="5%"><div class="tableButton remove"></div></td>'+
                  '</tr>').appendTo($("#tablerecruit"));
				  newPoint.data("result",n);
				  newPoint.unbind("click").bind("click",function(e){
					show($(this));
					});
				newPoint.find(".edit").unbind("click").bind("click",function(e){
					e.stopPropagation()
					edit($(this));
					});
				newPoint.find(".remove").unbind("click").bind("click",function(e){
					e.stopPropagation()
					remove($(this));
					});
        });
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
	}
	})
/*宣传管理*/
app.views.promotionManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){
		console.log(this.data);
		var templateArry={};
		/**********************************************/
		templateArry.A=function(state,data){
			var openTime=new Date().getTime();
			var templateData={"id":"001","name":"广告位一","image":["http://"],"dsc":"","job":"",group:"index"};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<script id="editor'+openTime+'_to_dsc" to="dsc" formtype="html" type="text/plain" style="height:250px;"></script>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		templateDom.appendTo($("#popMain"));
		templateDom.find("[formtype='html']").each(function(){
			var to = $(this).attr("to")
			var ue = UE.getEditor($(this).attr("id"));
			ue.addListener( 'ready', function( editor ) {	
     			ue.setContent(templateData[to]); //编辑器家在完成后，让编辑器拿到焦点
 } );			
		ue.addListener( 'afterSelectionChange', function( editor ) {
     			templateData[to]=ue.getContent(); //编辑器家在完成后，让编辑器拿到焦点
 } );		
			
			});
			}
		/**********************************************/
		templateArry.B=function(state,data){
			var openTime=new Date().getTime();
			var templateData={"id":"004","name":"饼状图","image":["http://"],"dsc":"","job":"",group:"index",data:[
										{"name":"19岁以下","value":1},
										{"name":"20-29岁以下","value":25},
										{"name":"30-39岁以下","value":62},
										{"name":"40-49岁以下","value":7},
										{"name":"50岁以上","value":4},
										]};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templatePoint">'+
				'<div class="templateListLeft">标题</div>'+
				'<div class="templateListCenter">数值</div>'+
				'<div class="templateListRight">删除</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateFrame"></div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		
		templateDom.appendTo($("#popMain"));
		function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.data,function(i,n){
			var newpoint=$('<div class="templatePoint">'+
				'<div class="templateListLeft"><input to="name" formtype="simple" value="'+n.name+'"/></div>'+
				'<div class="templateListCenter"><input to="value" formtype="number"/></div>'+
				'<div class="templateListRight" formtype="remove" to="data" num="'+i+'">删除</div>'+
				'<div class="clear"></div>'+
			'</div>').appendTo(templateDom.find(".templateFrame"));
			
			newpoint.data("result",n);
			newpoint.find("[formtype='simple']").each(function(){
				$(this).unbind("change").bind("change",function(){
					$(this).parents(".templatePoint").data("result").name=$(this).val();
					})
				})
			newpoint.find("[formtype='number']").each(
			function(){
				$(this).spinner({change:function(event,ui){
				$(this).parents(".templatePoint").data("result").value=$(this).spinner("value")
				}}).spinner("value",n.value);
			}
		)
			newpoint.find("[formtype='remove']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].splice(Number($(this).attr("num")),1);
					reflash();
					})
				})
			})
			}
			$("[formtype='add']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].push({"name":"未命名","value":0});
					reflash();
					})
				})
			reflash();
			}
		/**********************************************/
		templateArry.C=function(state,data){
			var openTime=new Date().getTime();
			var templateData={"id":"007","name":"众筹步聚","image":["images/step_01.jpg","images/step_02.jpg","images/step_03.jpg","images/step_04.jpg","images/step_05.jpg"],"dsc":"","job":"",group:"procedure"};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="mulipic">'+
				'<label for="mulipic'+openTime+'_to_images">'+
					'<div style="background-color:#E30A0D;width:100px;height:100px"></div>'+
					'<input type="file" id="mulipic'+openTime+'_to_images" to="image" name="upfile" style="width:0px;height:0px;"></input>'+
				'</label>'+
			'</form>'+
			'<div class="templateFrame"></div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		
		templateDom.appendTo($("#popMain"));
		function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.image,function(i,n){
			var newpoint=$('<div class="templateMuliPic">'+
				'<img src="'+n+'"/>'+
				'<div class="templateMuliPicRemove" num="'+i+'"></div>'+
			'</div>').appendTo(templateDom.find(".templateFrame"))
			
			})
			$('<div class="clear"></div>').appendTo(templateDom.find(".templateFrame"))
			}
			$("[formtype='mulipic']").each(function(){
				$(this).ajaxForm({
			success:function(data){
				console.log(data);
			}
		});
				$(this).find("input").unbind("change").bind("change",function(){
					var to=$(this).attr("to");
					$(this).parents("form").ajaxSubmit({
							success:function(data){
								var data=JSON.parse(data);
								if(data.state=="SUCCESS"){
									console.log(templateData)
									console.log(to)
									console.log(templateData[to])
									templateData[to].push(data.url);
									reflash();
									};
						}
					})
				});
			
	
				
			});
			reflash();
			}
		/**********************************************/
		templateArry.D=function(state,data){
			var openTime=new Date().getTime();
			var templateData={id:"008",
					name:"常见问题",
					dsc:"不说",
					data:[
								{"id":"012","name":"在中筹网金平台，需要多少钱才可以参与投资？","image":[""],"dsc":"中筹网金平台众筹者最低认购额度仅为100元人民币。中筹网金就是让普通大众能以较少金额，参与投资千万级别的房产项目，享受高端投资者才能享有的投资机会和收益。","job":"",group:"FAQS"},
							{"id":"013","name":"整个众筹过程中，中筹网金承担什么角色？","image":[""],"dsc":"“中筹网金”为提供众筹信息的第三方平台，不参与众筹和资产运作。平台在项目交易过程中，仅作为项目众筹的交易平台，提供一个信息收集、呈现、及发布的角色，众筹者与房产开发商（或持有人）本着自愿的原则完成相关交易。","job":"",group:"FAQS"},
							{"id":"014","name":"急用钱资金周转不过来，中途是否可以自由转让众筹份额？","image":[""],"dsc":"参与众筹者可在规定期限后，到平台即将上线的【转让中心】频道，进行项目众筹份额协议转让。最大限度地提高您的资金流动性，不必担心资金周转不过来。","job":"",group:"FAQS"},
							{"id":"015","name":"房地产众筹，为什么会有如此高的收益空间？","image":[""],"dsc":"中筹网金平台的所有项目均是开发商直接申请进行众筹合作项目，获最低折扣的同时，通过网络平台简化链条，砍掉中介的佣金和银行贷款利率，所以会让项目众筹价格更低廉；成功众筹的项目，在持有期间会有机会参与项目的租金分红，升值后投票售出、转让，都会产生无限的收益空间。市场分析得出，房地产众筹项目的预期年化收益率达15%以上。 ","job":"",group:"FAQS"},
							{"id":"016","name":"退出机制中，众筹的项目如何投票出售？","image":[""],"dsc":"众筹者成功众筹的项目，最长持有期限不超过12个月，是目前市面上最短“去化期限”的房地产众筹平台。 成功众筹的项目托管方-第三方资产管理公司可寻找到买家，参与众筹者可投票决定是否售出，一人一票制，参与众筹者投票超过51%即为通过，方可售出获得投资收益。","job":"",group:"FAQS"},
							{"id":"017","name":"在交易环节，中筹网金如何保障众筹者的利益的？","image":[""],"dsc":"①平台众筹项目中所涉及的各个交易环节均严格依照法律政策规定，并经过平台风险控制小组严格把控；②众筹者所有资金全权托管于第三方托管账户（汇付天下），全程定向流入流出，并在个人中心更新资金明细；③众筹者和房产开发商双方会根据协议，项目全权由第三方资产管理公司管理，保障众筹的合法权益和利益。","job":"",group:"FAQS"}],group:"FAQS"};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templatePoint">'+
				'<div class="templateListLeft">标题</div>'+
				'<div class="templateListCenter">描述</div>'+
				'<div class="templateListRight">删除</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateFrame"></div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		
		templateDom.appendTo($("#popMain"));
		function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.data,function(i,n){
			var newpoint=$('<div class="templatePoint">'+
				'<div class="templateListLeft"><input formtype="simple" to="name" value="'+n.name+'"/></div>'+
				'<div class="templateListCenter"><textarea formtype="simple" to="dsc">'+n.dsc+'</textarea></div>'+
				'<div class="templateListRight" to="data" num="'+i+'" formtype="remove">删除</div>'+
				'<div class="clear"></div>'+
			'</div>').appendTo(templateDom.find(".templateFrame"))
			newpoint.data("result",n)
			newpoint.find("[formtype='simple']").each(function(){
				$(this).unbind("change").bind("change",function(){
					$(this).parents(".templatePoint").data("result")[$(this).attr("to")]=$(this).val();
					})
				})
			newpoint.find("[formtype='remove']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].splice(Number($(this).attr("num")),1);
					reflash();
					})
				})
			})
			$('<div class="clear"></div>').appendTo(templateDom.find(".templateFrame"))
			}
			templateDom.find("[formtype='add']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].push({"id":"017","name":"暂未填写","image":[""],"dsc":"暂未填写","job":"",group:"FAQS"});
					reflash();
					})
				})
			reflash();
			}
		/**********************************************/
		templateArry.E=function(state,data){
			var openTime=new Date().getTime();
			var templateData={id:"010",
					name:"风险控制小组",
					dsc:"不说",
					data:[
							{"id":"032","name":"龚刚","image":["images/1111.jpg"],"dsc":"现任北京和天津的投资公司和基金公司的创始人及管理人。 二十二年国内及海外十多个国家房地产及金融投资和管理经验，美国通用电气资本公司全球地产特殊机会投资部的创始人， 国内最大私募股权基金鼎晖投资的地产基金创始合伙人。在国内，成功投资、开发和管理了多个从最南（三亚）到最北（哈尔滨）的地标及创新型项目， 任四十多家地产投资及开发公司、基金及管理公司的法人代表、董事长、执行董事等；在美洲、欧洲、亚洲等地投资并管理过上百亿美元的资产组合。","job":"风控组长",group:"009"},
							{"id":"033","name":"周雪爽","image":["images/444.jpg"],"dsc":"现任上海华诚律师事务所合伙人。毕业于上海交通大学。周律师在金融、房地产、互联网等法律领域有着丰富的经验，他带领的律师团队从2004年开始服务建行、中行、光大、广发等多家商业银行，提供了超过4万笔的风险防控及不良资产处置法律服务。 周律师同时拥有深厚的互联网行业和企业法律服务背景，担任包括大型企业集团，新兴中小企业等多家企业常年法律顾问。","job":"法律法规",group:"009"},
							{"id":"034","name":"谢猛虎","image":["images/5555.jpg"],"dsc":"现任上海中礁资产管理公司总经理。曾就职于上海某商业地产集团公司，长期从事商业类地产，工业地产等的投资咨询，代理，交易，运营，顾问等服务工作。专注于为银行，信托，基金，政府等部门进行房地产方面的全产业链服务。包括存量资 产，不良资产的盘活，处置，评估，融资等。负责资产交易风险控制，特殊投资机会的策略建议，资产管理和增值运营。","job":"资产管理",group:"009"},
							{"id":"035","name":"李明","image":["images/c.jpg"],"dsc":"现任沪港国际咨询集团有限公司副总经理、上海璨石资产管理有限公司董事长。沪港国际咨询集团有限公司由上海沪港建设咨询、上海沪港金茂会计师事务所、上海沪港资产评估、上海沪港房地产估价、上海沪港项目投资咨询、上海建设审计进修学院等单位组建而成的集团型中介组织。有工程造价咨询甲级资质、招标代理甲级资质、工程咨询甲级资质、上海市政府采购招标甲级资质、司法审计等资质。","job":"评估咨询",group:"009"},
							{"id":"036","name":"郑福泉","image":["images/d.jpg"],"dsc":"现任中瑞岳华税务师事务所合伙人。郑福泉先生毕业于上海外国语大学，现任上海财经大学兼职导师。郑福泉先生在国际知名事务所从事中国税务咨询超过10年，并曾任百安居中国税务总监。在税务合规性、税务审核、尽职调查、交易架构、投资、资金汇回、企业并购、公司上市、企业业务模式和税务审计风险防范等方面有着倍受认可的的工作业绩。","job":"税务管理",group:"009"}
						],group:"team"
					};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templateFrame"></div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		
		templateDom.appendTo($("#popMain"));
		function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.data,function(i,n){
			var newpoint=$('<div class="templatePoint">'+
				'<div class="templatePointFormLeft">头像</div>'+
				'<div class="templatePointFormRight">'+
				'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="singlepic">'+
				'<label for="singlepic'+openTime+'_to_images">'+
					'<div style="background-image:url('+n.image[0]+');width:100px;height:100px"></div>'+
					'<input type="file" id="singlepic'+openTime+'_to_images" to="image" name="upfile" style="width:0px;height:0px;"></input>'+
				'</label>'+
			'</form>'+
				'</div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormLeft">姓名</div>'+
				'<div class="templatePointFormRight"><input to="name" formtype="simple" value="'+n.name+'"/></div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormLeft">职务</div>'+
				'<div class="templatePointFormRight"><input to="job" formtype="simple" value="'+n.job+'"/></div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormLeft">描述</div>'+
				'<div class="templatePointFormRight"><textarea to="dsc" formtype="simple">'+n.dsc+'</textarea></div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormRemove" to="data" formtype="remove" num="'+i+'">删除</div>'+
			'</div>').appendTo(templateDom.find(".templateFrame"))
			newpoint.data("result",n)
			newpoint.find("[formtype='simple']").each(function(){
				$(this).unbind("change").bind("change",function(){
					$(this).parents(".templatePoint").data("result")[$(this).attr("to")]=$(this).val();
					})
				})
			newpoint.find("[formtype='remove']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].splice(Number($(this).attr("num")),1);
					reflash();
					})
				})
			newpoint.find("[formtype='singlepic']").each(function(){
				$(this).ajaxForm({
			success:function(data){
				console.log(data);
			}
		});
				$(this).find("input").unbind("change").bind("change",function(){
					var to=$(this).attr("to");
					var targetData=$(this).parents(".templatePoint").data("result")
					$(this).parents("form").ajaxSubmit({
							success:function(data){
								var data=JSON.parse(data);
								if(data.state=="SUCCESS"){
									targetData[to]=[data.url];
									reflash();
									};
						}
					})
				});
			
	
				
			});
			})
			$('<div class="clear"></div>').appendTo(templateDom.find(".templateFrame"))
			}
			templateDom.find("[formtype='add']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].push({"id":"036","name":"暂未填写","image":["http://"],"dsc":"暂未填写","job":"暂未填写",group:"009"});
					reflash();
					})
				})
			reflash();
			}
		/**********************************************/
		templateArry.F=function(state,data){
			var openTime=new Date().getTime();
			var templateData={id:"011",
					name:"底部专栏",
					dsc:"不说",
					data:[
							{"id":"037","name":"马红漫","image":["images/mahongman_pic.png"],"dsc":"经济学博士，著名财经主持人、制片人、资深财经评论员、上海十大青年经济人物。 现为第一财经《财经关键词》、《头脑风暴》主持人，《财经夜行线》新闻主播，东方卫视《东方夜新闻》新闻评论员。长期担任《第一财经日报》、《环球时报》、《人民日报》、《解放日报》等国内知名平面媒体专栏作者与评论员工作。拥有丰富的高端财经论坛主持评论经验，担任博鳌亚洲论坛、上海浦东新年论坛、虹桥论坛、全国私人银行论坛等各类高端财经论坛活动评论工作。","job":"","title":"马博士学堂",group:"010"},
							{"id":"038","name":"杨介生","image":["images/yangjiesheng_pic.png"],"dsc":'上海浙江商会执行副会长、上海温州商会名誉会长、上海锦丽斯投资集团有限公司董事长。 中共党员，上海市长宁区第十三届人大代表；上海市长宁区第十二届政协委员；上海温州商会第二届、第三届会长；温州市第八届、第九届政协委员；世界温州人联谊总会常务副会长。1998年获"上海十大杰出青年"提名，1998年获“温州改革开放风云人物”荣誉称号，1999年获上海市十大优秀青年企业家"金鹰奖"，2008年获评温州“改革开放30年在外风云温商30人”之一。',"job":"",group:"011",title:"荣誉顾问"}
						],group:"team"
					};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templateFrame"></div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		
		templateDom.appendTo($("#popMain"));
		function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.data,function(i,n){
			var newpoint=$('<div class="templatePoint">'+
				'<div class="templatePointFormLeft">头像</div>'+
				'<div class="templatePointFormRight">'+
				'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="singlepic">'+
				'<label for="singlepic'+openTime+'_to_images">'+
					'<div style="background-image:url('+n.image[0]+');width:100px;height:100px"></div>'+
					'<input type="file" id="singlepic'+openTime+'_to_images" to="image" name="upfile" style="width:0px;height:0px;"></input>'+
				'</label>'+
			'</form>'+
				'</div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormLeft">姓名</div>'+
				'<div class="templatePointFormRight"><input to="name" formtype="simple" value="'+n.name+'"/></div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormLeft">专栏名</div>'+
				'<div class="templatePointFormRight"><input to="title" formtype="simple" value="'+n.title+'"/></div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormLeft">描述</div>'+
				'<div class="templatePointFormRight"><textarea to="dsc" formtype="simple">'+n.dsc+'</textarea></div>'+
				'<div class="clear"></div>'+
				'<div class="templatePointFormRemove" to="data" formtype="remove" num="'+i+'">删除</div>'+
			'</div>').appendTo(templateDom.find(".templateFrame"))
			newpoint.data("result",n)
			newpoint.find("[formtype='simple']").each(function(){
				$(this).unbind("change").bind("change",function(){
					$(this).parents(".templatePoint").data("result")[$(this).attr("to")]=$(this).val();
					})
				})
			newpoint.find("[formtype='remove']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].splice(Number($(this).attr("num")),1);
					reflash();
					})
				})
			newpoint.find("[formtype='singlepic']").each(function(){
				$(this).ajaxForm({
			success:function(data){
				console.log(data);
			}
		});
				$(this).find("input").unbind("change").bind("change",function(){
					var to=$(this).attr("to");
					var targetData=$(this).parents(".templatePoint").data("result")
					$(this).parents("form").ajaxSubmit({
							success:function(data){
								var data=JSON.parse(data);
								if(data.state=="SUCCESS"){
									targetData[to]=[data.url];
									reflash();
									};
						}
					})
				});
			
	
				
			});
			})
			$('<div class="clear"></div>').appendTo(templateDom.find(".templateFrame"))
			}
			templateDom.find("[formtype='add']").each(function(){
				$(this).unbind("click").bind("click",function(){
					templateData[$(this).attr("to")].push({"id":"036","name":"暂未填写","image":["http://"],"dsc":"暂未填写","job":"暂未填写",group:"009"});
					reflash();
					})
				})
			reflash();
			}		
		/************************************************************************/
		var fnArry={"001":"A","002":"A","003":"A","004":"B","005":"B","006":"B","007":"C","008":"D","009":"A","010":"E","011":"F","012":"A"}	
		function edit(target){
			var openfn=function(){new templateArry[fnArry[target.parents("tr").data("result").id]](2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function show(target){
			var openfn=function(){new templateArry[fnArry[target.data("result").id]](0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		var pageName={
				"index":"首页",
				"mode":"众筹模式",
				"procedure":"众筹步聚",
				"FAQS":"常见问题",
				"team":"团队介绍",
				"idea":"经营理念"
			}
		$(this.el).html(
			'<div class="right_table">'+
            '<table id="table1promotion" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>页面</td>'+
                    '<td>位置</td>'+
                    '<td width="5%">编辑</td>'+
                  '</tr>'+
                '</thead>'+
                
            '</table>'+
        '</div>')
		$.each(this.data,function(i,n){
			var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+pageName[n.group]+'</td>'+
                    '<td>'+n.name+'</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                  '</tr>').appendTo($("#table1promotion"));
			newPoint.data("result",n);
				  newPoint.unbind("click").bind("click",function(e){
					show($(this));
					});
				newPoint.find(".edit").unbind("click").bind("click",function(e){
					e.stopPropagation()
					edit($(this));
					});
			})
		
	}
	})

/*红包管理*/
app.views.redPacketManage = Backbone.View.extend({
	el:".right",
	data:{},
	render:function(){
		console.log(this.data);
		function templateFn(state,data){
			var templateData={
				end: new Date().getTime()+24*3600*1000,
				id: app.fns.uuid(),
				money: 0,
				strat: new Date().getTime(),
				type: "0",
				userId: app.objs.user.get().userId
				};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">编号</div>'+
				'<div class="templatePointRight">'+templateData.id+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">账号</div>'+
				'<div class="templatePointRight">'+templateData.userId+'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">金额</div>'+
				'<div class="templatePointRight"><input to="money" formtype="number"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">激活时间</div>'+
				'<div class="templatePointRight"><input to="strat" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">截止时间</div>'+
				'<div class="templatePointRight"><input to="end" formtype="date"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">类型</div>'+
				'<div class="templatePointRight">'+
					'<select to="type">'+
						'<option value="0">用户派发</option>'+
						'<option value="1">系统派发</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>');
		templateDom.find("[formtype='date']").each(
			function(){
				$(this).datepicker({
					onSelect:function( event,ui ) {
						templateData[$(this).attr("to")]=app.fns.d2t($(this).val());
						}
					}).datepicker("setDate", app.fns.t2d(templateData[$(this).attr("to")]));
			}
		)
		templateDom.find("[formtype='number']").each(
			function(){
				$(this).spinner({change:function(event,ui){
				templateData[$(this).attr("to")]=$(this).spinner("value")
				}}).spinner("value",templateData[$(this).attr("to")]);
			
			}
		)
		templateDom.find("select").each(function(){
			$(this).find("[value='"+templateData[$(this).attr("to")]+"']").attr("selected","selected");
			$(this).selectmenu({
				change: function( event,ui ) {
					templateData[$(this).attr("to")]=ui.item.value;
					}
				});
			if(templateState){
				$(this).selectmenu(templateState);
				}	
			});
		templateDom.appendTo($("#popMain"));
			}
		function add(target){
			var openfn=function(){new templateFn(1,null)};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			window.location.reload();
			}
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		$(this.el).html('<div class="addButton"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="right_table">'+
            '<table id="tableredPacket" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>用户Id</td>'+
                    '<td>金额</td>'+
                    '<td width="5%">编辑</td>'+
                    '<td width="5%">删除</td>'+
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>');
        $.each(this.data,function(i,n){
        	var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.userId+'</td>'+
                    '<td>'+n.money+'</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                    '<td width="5%"><div class="tableButton remove"></div></td>'+
                  '</tr>').appendTo($("#tableredPacket"));
				  newPoint.data("result",n);
				  newPoint.unbind("click").bind("click",function(e){
					show($(this));
					});
				newPoint.find(".edit").unbind("click").bind("click",function(e){
					e.stopPropagation()
					edit($(this));
					});
				newPoint.find(".remove").unbind("click").bind("click",function(e){
					e.stopPropagation()
					remove($(this));
					});
        });
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
	}
});