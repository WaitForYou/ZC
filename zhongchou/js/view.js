/*公共部分********************************************************************************/	
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
                '<li id="center" class="hover"><a href="center">我的账户</a></li>'+
            '</ul>'+
        '</li>'+
        '<li><h4><i class="nav_03"></i><span>资金管理</span></h4>'+
            '<ul>'+
                '<li id="recharge"><a href="recharge?recharge=1">充值</a></li>'+
                '<li id="cash"><a href="cash?cash=1">提现</a></li>'+
                '<li id="fund"><a href="fund">资金记录</a></li>'+
                '<li id="redEnvelope"><a href="redEnvelope">红包记录</a></li>'+
            '</ul>'+
        '</li>'+
        '<li><h4><i class="nav_04"></i><span>账户</span></h4>'+
            '<ul>'+
                '<li id="secureQuestion"><a href="secureQuestion">安全问题</a></li>'+
                '<li id="mailAuthenticate"><a href="mailAuthenticate">邮箱认证</a></li>'+
            '</ul>'+
        '</li>'+
        '<li><h4><i class="nav_02"></i><span>基本设置</span></h4>'+
            '<ul>'+
                '<li id="tel"><a href="tel">修改手机</a></li>'+
                '<li id="modifyUser"><a href="modifyUser">修改资料</a></li>'+
                '<li id="modifyPwd"><a href="modifyPwd">修改密码</a></li>'+
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
                '<li><a>管理员管理</a></li>'+
				'<li><a>公告管理</a></li>'+
				'<li><a>客户管理</a></li>'+
				'<li><a>招聘管理</a></li>'+
				'<li><a>公司资料管理</a></li>'+
				'<li><a>宣传管理</a></li>'+
				'<li><a>红包管理</a></li>'+
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
		                   +'<div class="in_title">用户名/邮箱：<input type="hidden" name=""> </div>'
		                   +'<span class="in_span"><label class="usernameIcon"> </label> <input type="text" placeholder="输入用户名/邮箱" id="userName" name="userName" onclick="txtFocus(this)" onblur="txtBlur(this);" onkeypress=""> </span>'
		                   +'<span class="in_notice"></span>'
		               +' </li> '
		                +'<li>'
		                   +' <div class="in_title">登陆密码：</div>'
		                  +' <span class="in_span"> <label class="passwordIcon"> </label> <input type="password" placeholder="输入密码" id="userPass" name="password" onclick="passFocus(this)" onblur="passBlur(this)"> </span>'
		                   +'<span class="in_notice"> </span>'
		               +' </li> '
		                +'<li> '
		                +'<div class="in_title">重复密码：</div> '
		                   +'<span class="in_span"> <label class="repeatPassIcon"> </label> <input type="password" placeholder="再次输入密码" id="checkPass" name="passwordConfirm" onclick="passFocus(this)" onblur="passBlur(this)"> </span>'
		                   +'<span class="in_notice"> </span>'
		                +'</li>' 
		                +'<li> '
		                   +'<div class="in_title">手机号码：</div>'
		                   +'<span class="in_span"> <label class="emailIcon"> </label> <input type="text" placeholder="输入手机号码" id="phoneNumber" name="phoneNumber" onclick="phoneCheck()" onblur="phoneCheck()"> </span>'
		                   +'<span id="phoneNumberNotice" class="in_notice"> </span>'
		                +'</li> '
		                +'<li> '
		        			+'<div class="in_title">短信验证码:</div> '
		                    +'<span class="btn_span" style="margin-left:23px;"> <input type="text" id="msgValidCode" name="msgValidCode" onclick="msgValidCodeCheck()" onblur="msgValidCodeCheck()"> </span> '
		                    +'<a id="btnSendmsg" onclick="msgSendCheck()" style="margin-left:15px;">获取验证码</a> '
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
		                 +'<li class="item"><input type="button" value="注　册" class="btnReg ml86" onclick="validRegForm()"></li> '
		            +'</ul> '
		             +'<div class="clear"></div> '
		          +'</div>'
		     +' </form>'
		    +'</div>'
		  +'</div>').appendTo($(this.el));
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
		$(this.el).html("资金记录")
	}
	})
/*红包记录*/
app.views.redPacketDetail = Backbone.View.extend({
	el:".mb_right",
	data:{},
	render:function(){
		console.log(this.data);
		$(this.el).html("红包记录")
	}
	})
/*安全问题*/
app.views.safeQusetion = Backbone.View.extend({
	el:".mb_right",
	render:function(){}
	})
/*邮箱验证*/
app.views.emailVerify = Backbone.View.extend({
	el:".mb_right",
	render:function(){}
	})
/*修改手机*/
app.views.setPhone = Backbone.View.extend({
	el:".mb_right",
	render:function(){}
	})
/*修改资料*/
app.views.setDetail = Backbone.View.extend({
	el:".mb_right",
	render:function(){}
	})
/*修改密码*/
app.views.setPassWord = Backbone.View.extend({
	el:".mb_right",
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