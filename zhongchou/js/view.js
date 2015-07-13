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
app.views.head = function(){return {
	type:0,/*0普通，1空间,2管理*/
	typeBefore:null,
	el:".header",
	button:[[{id:"login",name:"登陆"},{id:"register",name:"注册"}],[{id:"zone",name:"用户中心"},{id:"out",name:"退出"}],[{id:"out",name:"退出"}]],
	nav:[{id:"product",name:"我要众筹"},{id:"procedure",name:"众筹步聚"},{id:"FAQS",name:"常见问题"},{id:"about",name:"关于我们"}],
	render:function(){
		$("#headIcon").attr("src",app.objs.config.get().logo);
		var buttonKey ;
		var buttonArry;
		if(this.type==0){
			if(app.objs.user.get() && app.objs.user.get().id){
					buttonKey = 1
					if(app.objs.user.get().type==1){
						buttonArry=[{id:"zone",name:"用户中心"},{id:"out",name:"退出"}];
						}else{
							buttonArry=[{id:"admin",name:"管理中心"},{id:"out",name:"退出"}];
							}
					}else{
						buttonKey = 0;
						buttonArry=[{id:"login",name:"登录"},{id:"register",name:"注册"}];
						}
			}else if(this.type==1){
				buttonKey=2
				if(app.objs.user.get()&&app.objs.user.get().type==1){
						buttonArry=[{id:"out",name:"退出"}];
						}else{
							buttonArry=[{id:"admin",name:"管理中心"},{id:"out",name:"退出"}];
							}
				}else{
					buttonArry=[{id:"out",name:"退出"}];
					}
			var buttonHtml="";
			$.each(buttonArry,function(i,n){
				buttonHtml += "<div id='"+n.id+"' class='btn-s1 btn-1b'>"+n.name+"</div>"
				})
			var navFirst="";
			$.each(this.nav,function(i,n){
				//navFirst+="<div id='"+n.id+"'>"+n.name+"</div>"
				//<li><a href="/cncrowd">中筹模式<br><span class="en_t">What's CNCrowd</span></a></li>
				// navFirst += "<li id='"+n.id+"'><a>"+n.name+"<br><span class='en_t'>What's CNCrowd</span></a></li>";

                if((i==0)&&!sessionStorage.hl){
                	sessionStorage.hl = n.id;
                }
   navFirst += '<li id="'+n.id+'"><a class="three-d">'+n.name+'</a></li>';



			});
			$(this.el).find(".top_btn_group").html(buttonHtml);
			$(this.el).find("#gnavi").html(navFirst);
			$(this.el).find("li#"+sessionStorage.hl).children('a').addClass("active");
		
			var page=["login","register","mode","product","procedure","FAQS","about"]
			$.each(page,function(i,n){
				$("#"+n).unbind("click").bind("click",function(e){
				   // $("#gnavi").find("a").removeClass("active");
				   // sessionStorage.hl = n; 
					window.location.hash=n;
					
				    //debugger
				})
			})
			$("#zone").unbind("click").bind("click",function(){

					window.location.hash="account";
				})
			$("#admin").unbind("click").bind("click",function(){
				window.location.hash="adminManage";
				})
			$("#out").unbind("click").bind("click",function(){
				app.objs.user.set(null);
				Cookies('zc_user', '', { expires: -1 }); // 删除 cookie
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

						window.location.hash="index";
						window.location.reload();
				
				
				})
		}
	}}
/*脚部*/
app.views.foot = function(){return {
	done:null,
	el:".footerBox",
	data:app.objs.configData,
	render:function(){
	
		var configData = app.objs.configData.footerInfo;
		var newElem = $('<div class="footer_area">'
			   +'<div class="footer">'
			   		+'<h1>'+configData.titleText+'</h1>'
			        +'<h2><i></i><span> '+configData.slogan+'</span><i></i></h2>' 
			        +'<div class="contact_infor">'
					   +'<ul>'
                +'<li class="fci_s1 ">'
                    +'<i></i><p>电话:'+configData.mobile+'<br>传真:'+configData.fax+'</p>'
               +' </li>'
                +'<li class="fci_s2 ">'
                    +'<i></i><p>众筹洽谈（'+configData.time+'）<br><span'+configData.number+'</span></p>'
               +' </li>         '
               +' <li class="fci_s3" id="fci_s3">'
                  +'  <i></i><p>欢迎您关注'+configData.companyName+'官方微信<br>官方微信号：'+configData.wx+'</p>'
               +' </li>'
                +'<li class="fci_s4">'
                   +' <i></i><p>商务合作'+configData.cooperationEmail+'<br>人才招聘：'+configData.recruitmentEmail+'</p>'
               +' </li>'
                +'<li class="fci_s5">'
                   +' <i></i><p>地址：'+configData.cooperationEmail+'<br/>邮编：'+configData["zip_code"]+'</p>'
               +' </li>'
                +'<li class="fci_s6" id="fci_s6">'
                    +'<i></i><p>欢迎您关注'+configData.companyName+'官方微博<br>官方微博：@'+configData.wb+'</p>'
               +' </li>'
               +' <div class="clear"></div>'
            +'</ul>'
			        +'</div>'
			        +'<div class="footer_logo">'
            +'<!--<div id="fl_s1"></div><div id="fl_s2"></div>-->  '
            +'<div id="fl_s3"></div>'
            +'<div id="fl_s4"></div>'
            +'<div id="fl_s5"></div>'
            +'<a href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=www.cncrowd.com&amp;lang=zh_cn" target="_blank">'
            +'<div id="fl_s6"></div>'
            +'</a>          '   
        +'</div>'
			     +'<h3></h3>'
			        +'<h5>'+configData.copRight+' &nbsp;&nbsp;&nbsp;&nbsp;备案号: <a target="_blank" href="http://www.beianbeian.com/beianxinxi/1c979456-a73d-42d8-bb76-2ab1afbb4a5e.html"> '+configData.record+'</a></h5>'
			  +'</div>'
			   +'<div class="clear"></div>'
			+'</div>').appendTo($(this.el));
		var nav="";
		$.each(app.objs.configData.nav,function(i,n){
			nav += '<a class="'+n.id+'" id="'+n.id+'">'+n.name+'</a>|';
			})
		//$(this.el).find("h3").html(nav)
		$.each(app.objs.configData.nav,function(i,n){
			$("."+n.id).unbind("click").bind("click",function(){
				window.location.hash=n.id
			});
		});
		}
	}}
/*中部*/
var dd=function(){if(app.objs.user.get()&&app.objs.user.get().userName){return app.objs.user.get().userName}else{return ""}}
app.views.middle = function(){return {
	type:0,/*0普通，1空间,2管理*/
	typeBefore:null,
	el:".middle",
	template:[
			'',
			'<div class="member_top">'+
    '<div class="member">'+
        '<h2><img src="img/uc/member_headerpic.jpg"></h2>'+
        '<h4><span id="username">'+dd()+'</span> 您好，欢迎回来！</h4>'+
        '<h5 style="display: block;" id="redEnvelopeBanner"><span>您有未领取的红包！</span><a href="redEnvelope">领取</a></h5>'+
    '</div>'+
'</div>'+
			'<div class="content_center">'+
		'<!-- left -->'+
'<div class="mb_left" id="tabs_menu" style="height: 672px;">'+
    '<ul>'+
        '<li class=""><h4><i class="nav_01"></i><span>我的账户</span></h4>'+
            '<ul>'+
                '<li id="account"><a>我的账户</a></li>'+
				'<li id="share"><a>分享</a></li>'+
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
        '<h2><img src="img/uc/member_headerpic.jpg"></h2>'+
        '<h4><span id="username">'+dd()+'</span> 您好，欢迎回来！</h4>'+
    '</div>'+
'</div>'+
			'<div class="content_center">'+
		'<!-- left -->'+
'<div class="mb_left" id="tabs_menu" style="height: 672px;">'+
    '<ul>'+
        '<li class=""><h4><i class="nav_01"></i><span>后台管理</span></h4>'+
            '<ul>'+
				'<li id="adminManage"><a>管理员管理</a></li>'+
				'<li id="configManage"><a>配置管理</a></li>'+
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
	page:["account","share","recharge","paid","card","capitalDetail","redPacketDetail","safeQusetion","emailVerify","setPhone","setDetail","setPassWord","adminManage","announcementManage","clientManage","procedureManage","recruitManage","companyManage","promotionManage","redPacketManage","configManage"],
	render:function(){
		$(this.el).html(this.template[this.type]);
		$("#username").html(dd());
		$.each(this.page,function(i,n){
			$("#"+n).unbind("click").bind("click",function(){
			    window.location.hash=n
			})
		});
		}
	}}
/*首页*/
app.views.index = function(){return {
	el:".middle",
	data:{},
	render:function(){
		$(this.el).empty();
		$('<div class="slider-wrapper theme-bar">'+
            '<div id="slider" class="nivoSlider">'+
                '<img src="images/toystory.jpg" data-thumb="images/toystory.jpg" alt="" />'+
                '<a href="http://dev7studios.com"><img src="images/up.jpg" data-thumb="images/up.jpg" alt="" title="This is an example of a caption" /></a>'+
                '<img src="images/walle.jpg" data-thumb="images/walle.jpg" alt="" data-transition="slideInLeft" />'+
                '<img src="images/nemo.jpg" data-thumb="images/nemo.jpg" alt="" title="#htmlcaption" />'+
            '</div>'+
            '<div id="htmlcaption" class="nivo-html-caption">'+
                '<strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>. '+
            '</div>'+
        '</div>').appendTo($(this.el));
		$('#slider').nivoSlider();
var newElem = $('<div class="index_top_left">'
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
	+'<div class="index_top">'
	+'<div class="index_top_right">'
		+'<div class="index_canvar_1" id="canvar_1"></div>'
		+'<div class="index_promo_1"></div>'
		+'<div class="clear"></div>'
		+'<div class="index_promo_2"></div>'
		+'<div class="index_canvar_2" id="canvar_2"></div>'
		+'<div class="clear"></div>'
	+'</div>'
	+'<div class="clear"></div>'
+'</div>').appendTo($(this.el));
$('<br/><br/>').appendTo($(this.el));


$('<div id="topics">'
+'<div class="inner" style=" height:30px;">'
			       +' <span style=" display:block; float:left;"><img src="img/topics.png" alt=""></span>'
			        +'<div id="slides"><div class="slides_container"></div></div>'
			        +'<a href="/company?id=3" style=" color:#F00; font-size:12px; float:right;">查看更多 &gt;&gt;</a>'
			      +'</div>'
+'</div>'
+'<div class="index_center"><div class="secondHand_area"></div><div class="project_area"></div></div>'
		    +'<div class="slide earnings"></div>'
).appendTo($(this.el));
		
	   var promoObj=_.indexBy(this.data.promotion, 'id');
	
	   $(".index_promo_1").html(promoObj["001"].dsc)
	   $(".index_promo_2").html(promoObj["002"].dsc)
	  // $(".index_promo_3").html(promoObj["003"].dsc)
	   var nameArry5=[];
	   var valueArry5=[];
	   $.each(promoObj["005"].data,function(i,n){
		   nameArry5.push(n.name)
		   valueArry5.push(n.value)
		   })
	   var nameArry6=[];
	   var valueArry6=[];
	   $.each(promoObj["006"].data,function(i,n){
		   nameArry6.push(n.name)
		   valueArry6.push(n.value)
		   })
	   /***********************************************************************************************/
	   // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie',// 使用柱状图就加载bar模块，按需加载
				 'echarts/chart/bar',
				 'echarts/chart/line'
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('canvar_2')); 
                
                var option = {
                    
    title : {
        text: promoObj["004"].name,
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:promoObj["004"].name,
            type:'pie',
            radius : [30, 80],
            center : ['50%', 170],
            roseType : 'area',
            x: '50%',               // for funnel
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel
            data:promoObj["004"].data
        }
    ]

                };
        
                // 为echarts对象加载数据 
                myChart.setOption(option);
/***********************************************************/				
				 var myChart2 = ec.init(document.getElementById('canvar_1')); 
				 var option2={
    title : {
        text: promoObj["006"].name
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : nameArry6
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:promoObj["006"].name,
            type:'bar',
            data:valueArry6,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
				 myChart2.setOption(option2);
				 
				// var myChart3 = ec.init(document.getElementById('canvar_3')); 
		/*		 var option3 = {
    title : {
        text: promoObj["005"].name,
    },
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : nameArry5
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    series : [
        {
            name:promoObj["005"].name,
            type:'line',
            data:valueArry5,
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};*/
				// myChart3.setOption(option3);
            }
        );
	   
	   /*************************************************************************************************/

	
		var that = this;
		//公告
		if(this.data.announcement){
			$.each(this.data.announcement,function(i,n){
			var newAn=$('<div class="caption">'+n.title+'</div>').appendTo($("#slides").children(".slides_container"));
			newAn.data("an",n);

			newAn.unbind("click").bind("click",function(){
				app.objs.announcementDetailV.data = $(this).data("an");
				window.location.hash="announcementDetail";
			});
		});
			}
		
		$(function(){
              $('#slides').slides({
                preload: true,
                play: 4000,
                pause: 1000,
                hoverPause: true
              });
         });
		 
		//产品
		if(this.data.product){
			var decorateArry=["无披房","豪华装修","简单装修"];
		var propertyTypeArry=["公寓","复式","豪宅"];
		var rightTypeArry=["商业用房","住在用房"];
			$.each(this.data.product,function(i,value){
				value.dsc=value.dsc.replace(/<(?!br).*?>/g,"");
				if(value.dsc.length>40){
					value.dsc=value.dsc.substr(0,40)+"...";
					}
				var secondHand=$('<div class="secondHand">'+
					'<div class="secondHandTop">'+
						'<img src="'+value.image[0]+'" width="316" height="200"/>'+
						'<div class="secondHandTopTag">预热期</div>'+
						'<div class="secondHandTopMessage">'+
							'<div class="secondHandTopMessageL">已众筹：'+(value.payedCount/value.copy)*100+'%</div>'+
							'<div class="secondHandTopMessageR">持有限期 '+value.maxTime+'个月</div>'+
							'<div class="clear"></div>'+
						'</div>'+
					'</div>'+
					'<div class="secondHandBottom">'+
						'<div class="secondHandBottomTitle">'+value.title+'-'+value.subhead+'</div>'+
						'<div class="secondHandBottomTagArea">'+
							'<div class="secondHandBottomTagPoint">'+decorateArry[value.decorate]+'</div>'+
							'<div class="secondHandBottomTagPoint">'+propertyTypeArry[value.propertyType]+'</div>'+
							'<div class="secondHandBottomTagPoint">'+rightTypeArry[value.rightType]+'</div>'+
							'<div class="clear"></div>'+
						'</div>'+
						'<div class="secondHandBottomDsc">'+value.dsc+'</div>'+
						'<div class="clear"></div>'+
						'<div class="secondHandBottomMore">当前市值 ￥'+value.costPrice+'</div>'+
						'<div class="secondHandBottomMoney">众筹单价 ￥'+value.UnitPrice+'</div>'+
						'<div class="clear"></div>'+
					'</div>'+
				'</div>').appendTo($(".secondHand_area"));
				secondHand.data("result",value);
				secondHand.unbind("click").bind("click",function(){
				window.location.hash="productDetail/id:"+$(this).data("result").id;
				})
				var morebar="";
			if(app.objs.config.get().more=="1"){
				morebar='<div class="home_progress_bar"><b style="width:'+value.more+'%;background-image: none;background-color: #E85D5D;">'
				   +'</b>'
				   +'<h6> 增值：'+value.more+'%</h6>'
				   +'</div>'
				}
            var newElem = $('<div class="project_intro">'
	          +'<div class="left">'
	             +'<span class="intro_pic"><a>'
        		  +'<img src="'+value.image[0]+'" width="475" height="255">'
		         +'</a></span>'
	             +'<span class="timer">'
	             +'<div id="30093164" class="remaining-day">火爆众筹中 ……</div></span>'
	          +'</div>'
	          +'<div class="right">'
	            +'<div class="r01">'
                       +'<h4>目标金额：<span>￥'+value.money+'</span></h4>'
                       +'<a class="a" role="button" data-toggle="modal">认&nbsp;&nbsp;&nbsp;&nbsp;购</a>'
                   +'</div>'
                   +'<div class="clear"></div>'
                   +'<div class="title01">'
                       +'<h2><a>'+value.title+'-'+value.subhead+'</a></h2>'
                       +'<h4>年化收益率高达'+value.yearReturn+'以上</h4>'
                   +'</div>'
                   +'<div class="price">'
                       +'<span class="price_01"><h4>当前市值</h4><h5>￥'+value.costPrice+'</h5></span>'
                       +'<span class="price_01"><h4>众筹价格</h4><h5>￥'+value.price+'</h5></span>'
                       +'<span class="price_02"><h4>持有期限不超过</h4><h5>'+value.maxTime+'个月</h5></span>'
                  +' </div>'
				  
                   +'<div class="home_progress_bar"><b style="width:'+(value.payedCount/value.copy)*100+'%;">'
				   +'</b>'
				   +'<h6> 已众筹：'+(value.payedCount/value.copy)*100+'%</h6>'
				   +'</div>'
                   +morebar
	         +'</div>'
	      +'</div>').appendTo($(".project_area"));
		  
		  newElem.data("result",value)
			newElem.unbind("click").bind("click",function(){
				window.location.hash="productDetail/id:"+$(this).data("result").id;
				})
        });
		$('<div class="clear"></div>').appendTo($(".project_area"));
		  $('<div class="clear"></div>').appendTo($(".secondHand_area"));
			}
        
        //----start人物介绍
    
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
}}
/*登录*/
app.views.login = function(){return {
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
              +'<input type="text" placeholder="输入验证码" id="code1" name="imgValidCode">'
            +'</span>' 
            +'<div class="verificationCode" id="vCode1" style="width:122px;height:41px;margin-top:13px;">'
              // +'<img id="validImg" onclick="javascript:refreshImgValidCode();" src="/imageServlet"><input type="hidden" id="imgCode" value="366f2">'
            +'</div> '
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
		if(!$.idcode.validateCode()){
			alert("验证码错误")
			return false;
			}
		//登录按钮
	var data = {"userName":loginElem.find("#userName").val(),/*登录名/手机/邮箱*/
				"passWord":loginElem.find("#userPass").val()}/*密码*/
	app.apis.login(data,function(data){
		if(data.type==1){
			window.location.hash="account";
			}else if(data.type==2){
				window.location.hash="adminManage";
				}
		
	},function(error){
		alert("账号或密码错误")
		});
		
	})
    loginElem.find("#userName").blur(function(){
       app.apis.checkUser($(this).val(),function(data){},function(data){});
    });
	loginElem.find("#register").unbind("click").bind("click",function(){
	    window.location.hash="register";
	});
	/**验证码***/
	$.idcode.setCode();
    // document.getElementById("btn1").addEventListener("click", function () {
    //     alert(code1.verify(document.getElementById("code1").value));
    // }, false);
	
}
}}
/*注册*/
app.views.register = function(){return {
	el:".middle",
	render:function(){
		var code="";
		var userCheck=false;
		var phoneCheck=false;
		var emailCheck=false;
		var templateData = {
		"id":app.fns.uuid(),/*id*/
		"type":1,/*类型,1普通用户2管理用户*/
		"userName":"",/*用户名*/
		"userType":"0",/*用户类型,0普通1企业*/
		"image":"",/*头像*/
		"sex":"",/*性别*/
		"place":"",/*地址*/
		"phone":"",/*手机*/
		"email":"",/*邮箱*/
		"name":"",/*真实姓名*/
		"contacts":"",/*联系人*/
		"contactsPhone":"",/*联系人电话*/
		"record":"",/*学历*/
		"university":"",/*毕业院校*/
		"job":"",/*职位*/
		"company":"",/*公司*/
		"password":"",
		"password2":"",
		"code":"",/*验证码*/
		"introducer":""/*介绍人*/
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
		                    +'<span class="btn_span" style="margin-left:23px;"> <input type="text" id="msgValidCode" name="msgValidCode" to="code" formtype="simple"> </span> '
		                    +'<a id="btnSendmsg" style="margin-left:15px;">获取验证码</a> '
		                    +'<span id="msgValidNotice" class="in_notice"> </span> '
		         		+'</li>'
						+'<li> '
		                   +'<div class="in_title">账号类型：</div>'
		                   +'<select to="userType" style="width: 400px;float: left;background: url(../img/signup-gray.png) no-repeat -1px -1px;height: 47px;margin-top: 13px;margin-left: 20px;">'
						   +'<option value="0">个人</option>'
						   +'<option value="1">机构</option>'
						   +'</select>'
		                   +'<span id="phoneNumberNotice" class="in_notice"> </span>'
		                +'</li> '
		               +'<li> '
		                   +'<div class="in_title">邀请码：</div>'
		                   +'<span class="in_span"> <label class="emailIcon"> </label> <input type="text" placeholder="请输入邀请码" id="phoneNumber" name="phoneNumber" to="introducer" formtype="simple"> </span>'
		                   +'<span id="phoneNumberNotice" class="in_notice"> </span>'
		                +'</li> '
		                  
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
		  var getcodeTime;
		  function getcode(){
			  registerElem.find("#btnSendmsg").html("获取验证码");
			  registerElem.find("#btnSendmsg").unbind("click").bind("click",function(){
				  
			  app.apis.getBindCode({"type":"phone",number:$(this).parents("form").find("[to='phone']").val()},function(data){
			
				  code=data;
				  var totalTime=60;
				  registerElem.find("#btnSendmsg").unbind("click")
				  getcodeTime=setInterval(function(){
					  $("#btnSendmsg").html(totalTime+"秒后可重新发送验证码")
					  totalTime--;
					  if(totalTime==0){
						  clearInterval(getcodeTime);
						  getcode();
						  }
					  },1000)
		
				  },function(){
					  alert("发送失败，请检查手机号是否有效")
					  })
			  }) 
			  }
		  getcode()
		  registerElem.find("[formtype='simple']").each(function(i,n){
			  $(this).unbind("change").bind("change",function(){
				  templateData[$(this).attr("to")]=$(this).val();
				  })
			  });
		registerElem.find("[to='userName']").on("change",function(){
			  app.apis.checkUser($(this).val(),function(){
				  userCheck=true;
				  },function(){
					  userCheck=false;
					  alert("账号已注册")
					  })
			  });
		  registerElem.find("[to='email']").on("change",function(){
			  app.apis.checkEmail($(this).val(),function(){
				  emailCheck=true;
				  },function(){
					  emailCheck=false;
					  alert("邮箱已注册")
					  })
			  });
		registerElem.find("[to='phone']").on("change",function(){
			  app.apis.checkPhone($(this).val(),function(){
				  phoneCheck=true;
				  },function(){
					  phoneCheck=false;
					  alert("手机已注册")
					  })
			  });
		registerElem.find("#registerSend").unbind("click").bind("click",function(){
			if(!$("#agreement")[0].checked){
				alert("必须先同意服务协议才能注册")
				return false;
				}
			if(!userCheck){
				alert("请填写唯一的用户名")
				return false;
				}
			if(!phoneCheck){
				alert("请填写唯一的手机号")
				return false;
				}
			if(!emailCheck){
				alert("请填写唯一的邮箱")
				return false;
				}
			if(!code||code!=templateData.code){
				alert("请填写正确验证码")
				return false;
				}
			app.apis.register(templateData,function(){
				alert("注册成功");
				window.location.hash="login";
				},function(){alert("err")});
			})
$("#agreement").click(function(){
   $(this).parents().toggleClass("agreementChxNoCheck");
});
	registerElem.find("#loginBtn").unbind("click").bind("click",function(){
	    window.location.hash="login";
	})
	
	}
	}}
/*众筹模式*/
app.views.mode = function(){return {
	el:".middle",
	data:{},
	render:function(){
		$(this.el).empty();
		app.fns.setSecondNav($(this.el),"众筹模式");
		var pageData = this.data[0];
	


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
}}
/*我要众筹*/
app.views.product = function(){return {
	el:".middle",
	data:{},
	render:function(){
				$(this.el).empty();
	
		app.fns.setSecondNav($(this.el),"我要众筹");
		var that = this;

		var navElem = $('<div id="product_tab" class="product">'
		    +'<ul id="tab" class="clearfix">'
		      +'<li id="products1"  v="on_product" class="hover select">火爆众筹中</li>'
		      +'<li id="products2"  v="noStart_product" class="">即将开始众筹</li>'
		      +'<li id="products3"  v="end_product" class="">众筹结束</li>'
		    +'</ul>'
		    +'<div id="con_products_1" class="products-lst" style="display: none;">'
		    +'<ul>').appendTo($(that.el));
		navElem.find("li").unbind("click").bind("click",function(){
          $(this).siblings().removeClass('hover select');
          $(this).addClass('hover select');
          $(".products-lst").hide();
          $("#"+$(this).attr("v")).show();
		});
		$('<div id="end_product" class="products-lst" style="display: none;"></div>'
         +'<div id="noStart_product" class="products-lst" style="display: none;"></div>'
         +'<div id="on_product" class="products-lst"></div>').appendTo($(that.el));
		$.each(this.data,function(i,n){
			$.each(n,function(index,value){
					var morebar="";
			if(app.objs.config.get().more=="1"){
				morebar='<div class="home_progress_bar"><b style="width:'+value.more+'%;background-image: none;background-color: #E85D5D;">'
				   +'</b>'
				   +'<h6> 增值：'+value.more+'%</h6>'
				   +'</div>'
				}
			     var newProduct = $('<div class="project_intro">'
				          +'<div class="left">'
				             +'<span class="intro_pic"><a>'
			        		  +'<img src="'+value.image[0]+'" width="475" height="255">'
					         +'</a></span>'
				             +'<span class="timer">'
				             +'<div id="30093164" class="remaining-day">火爆众筹中 ……</div></span>'
				          +'</div>'
				          +'<div class="right">'
				            +'<div class="r01">'
			                       +'<h4>目标金额：<span>￥'+value.money+'</span></h4>'
			                       +'<a class="a" role="button" data-toggle="modal" onclick="">认&nbsp;&nbsp;&nbsp;&nbsp;购</a>'
			                   +'</div>'
			                   +'<div class="clear"></div>'
			                   +'<div class="title01">'
			                       +'<h2><a>'+value.title+'-'+value.subhead+'</a></h2>'
			                       +'<h4>年化收益率高达'+value.yearReturn+'以上</h4>'
			                   +'</div>'
			                   +'<div class="price">'
			                       +'<span class="price_01"><h4>当前市值</h4><h5>￥'+value.costPrice+'</h5></span>'
			                       +'<span class="price_01"><h4>众筹价格</h4><h5>￥'+value.price+'</h5></span>'
			                       +'<span class="price_02"><h4>持有期限不超过</h4><h5>'+value.maxTime+'个月</h5></span>'
			                  +' </div>'
			                   +'<div class="home_progress_bar"><b style="width:'+(value.payedCount/value.copy)*100+'%;"></b>'
							   +'<h6> 已众筹：'+(value.payedCount/value.copy)*100+'%</h6>'
							   +'</div>'
			                   
							   +morebar
				         +'</div>'
				      +'</div>').appendTo($("#"+i+"_product"));
				

			//var newProduct=$('<div>商品'+i+'</div>').appendTo($(that.el));
			newProduct.data("product",value);

			newProduct.unbind("click").bind("click",function(){
				app.objs.productDetailV.data = $(this).data("product");
				window.location.hash="productDetail/id:"+$(this).data("product").id;

				//app.apis.buy({},this.render(),function(){})
			});
		});
	})
	}
}};
/*众筹步聚*/
app.views.procedure = function(){return {
	el:".middle",
	data:{},
	render:function(){
		$(this.el).empty();
		
		var pageData = this.data[0];
		app.fns.setSecondNav($(this.el),"众筹步聚");
		    var newProcedure = $('<div class="cnc_step">'
			   +'<div class="step_s1">'
					+'<img src="images/greenland_reserve.jpg">' 
			   +'</div>'
			   +'<div class="step_list">'
			       +'<ul>'
			       +'</ul>'
			   +'</div>'
			+'<div class="clear" style=" "></div>'
			+'</div>').appendTo($(this.el));
		$.each(this.data[0].image,function(index,value){ 
          // if(index>0){ 
             $('<li><img src="'+value+'"></li>').appendTo(newProcedure.find("ul"));
          // }
		});
	}
}}
/*常见问题*/
app.views.FAQS = function(){return {
	el:".middle",
	render:function(){
		
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
}}
/*关于我们*/
app.views.about = function(){return {
	el:".middle",
	data:{},
	render:function(){
		var that=this;
		
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
	var teamObj=_.indexBy(this.data.team,"id");
	
    $('<div class="team_introbox1">'+teamObj["009"].dsc+'</div>').appendTo($("#con_company_1"));
    $('<div class="team_introbox3"></div><div class="clear"></div>').appendTo($("#con_company_1"));
    $.each(teamObj["010"].data,function(index,value){ 
   	 var fengxian_team = $('<div class="fengxian_team mr_40">'
             +'<h2><img src="'+value.image[0]+'"></h2>'
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
   $.each(teamObj["011"].data,function(index,value){ 
      var elem = $('<div class="team_introbox2">'
      	 +'<h1>'+value.title+'</h1>'
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
	if(this.data.company){
		 $.each(this.data.company,function(index,value){ 
      var elem = $('<tr><th class="little"><span>'+value.title+'</span></th><td>'+value.message+'</td></tr>').appendTo(tableElem.find("tbody"));
      elem.data("data",value);
   });
		}
  
    
   /****经营理念*****/
   $('<div class="conts cf seminar">'
			+'<div class="contMain">'
				+'<div>'
					+this.data.idea[0].dsc
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
if(this.data.announcement){
	 $.each(this.data.announcement,function(index,value){ 
  var elem=$('<li><p><strong>'+value.start+' &nbsp; </strong><a href="">'+value.message+'</a></p></li>').appendTo(gongGaoElem.find("ul"));
	// newAn.data("an",n);
	elem.data("data",value);
	elem.find("a").unbind("click").bind("click",function(){
		app.objs.announcementDetailV.data = $(this).data("data");
		window.location.hash="announcementDetail";
	});
  }); 
	}

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
	if(this.data.company){
		$.each(this.data.company,function(index,value){ 
      var elem = $('<tr><th class="little"><span>'+value.title+'</span></th><td></td></tr>').appendTo(tableElem.find("tbody"));
      elem.find("td").html(value.message);
      elem.data("data",value);
   });
		}
   
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
	}}
/*商品详情*/
app.views.productDetail = function(){return {
	el:".middle",
	data:{},
	render:function(){
	
		var buyButton=''
		if(this.data.copy<=this.data.payedCount||this.data.money<=this.data.payed){
									buyButton=	'<li class="pl_buy_btn"><a id="crowdBtn">众筹结束</a></li>'
										}else if(this.data.stratTime<new Date().getTime()){
											buyButton='<li class="input_amount_2" id="redEnvelopeLi">可用红包：<span id="reAmtVal"></span>元&nbsp;&nbsp;&nbsp;立即使用？<input type="checkbox" id="useREFlag" style="width:16px;height:16px; margin-top:-2px;"></li>'+
                      '<li class="pl_buy_btn"><a id="crowdBtn" formtype="buybutton">立即购买</a></li>'
											}else{
												buyButton=	'<li class="pl_buy_btn"><a id="crowdBtn">敬请期待</a></li>'
												}
		var decorateArry=["无披房","豪华装修","简单装修"];
		var propertyTypeArry=["公寓","复式","豪宅"];
		var rightTypeArry=["商业用房","住在用房"];
		var haveLeaseArry=["否","是"];
		$(this.el).html('<div class="topic-path">'+
    '<div class="inner clearfix">'+
        '<div class="topics-text">'+
            '<p>'+
                '<a href="/">'+
                    '首页'+
                '</a>'+
                '&gt;'+
                '<a href="/items">'+
                   '投资项目'+
                '</a>'+
                '&gt; <a href="#">'+this.data.title+'-'+this.data.subhead+'</a>'+
            '</p>'+
        '</div>'+
    '</div>'+
'</div>'+
'<div class="top-wrapper">'+
    '<div class="top-wrap">'+
        '<div class="top-wrap-in">'+
            '<div class="top-wrap-inner2">'+
                '<h2>'+
                    this.data.title+'-'+this.data.subhead+
                '</h2>'+
                  '<div class="clear">'+
                '</div>'+
            '</div>'+
            '<div class="top-wrap-inner3">'+
                '<p style="line-height: 25px;margin:10px 0 0 0;">'+
					'<span>众筹资金托管方：</span>'+
					'<img src="img/zsyh.png" style="width: 88px;margin-right: 20px;">'+
					'<span>众筹资金支付通道：</span>'+
					'<img src="img/llzf.png" style="width: 88px;margin-right: 20px;">'+
					'<img src="img/hftx.png" style="width: 88px;margin-right: 20px;">'+
				'</p>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'+
'<div id="content">'+
    '<div class="project">'+
        '<div class="intro">'+
            '<div class="prodect_left_detail">'+
              '<div class="pl_buy">'+
                '<form id="businessForm" action="/business/add" method="post">'+
                   '<h4>单笔不能超过总额的<span>5%</span>，即<span>465</span>份</h4>'+
                   '<ul>'+
                      '<li class="input_amount">众筹份数：<input id="crowdCount" name="crowdCount" type="text" placeholder="'+this.data.minUnit+'元/份" autocomplete="off"  to="price" formtype="number">份</li>'+
                      '<input type="hidden" name="projUuid" value="30093164">'+
                      '<input type="hidden" name="crowSmallest" value="100">'+
                      '<input type="hidden" id="accAmt" name="accAmt" value="0">'+
                      '<input type="hidden" id="reAmt" name="reAmt" value="0">'+
                      '<input type="hidden" id="reUuid" name="reUuid">'+
                      '<li class="input_amount_ts" id="crowdNotice" style="display: none;"></li>'+
                      '<li class="input_amount_2">众筹金额：<span id="crowdAmt">'+this.data.money+'</span>元</li>'+
                      buyButton+
                      '<li class="pl_progress"><b style="width:'+((this.data.payedCount/this.data.copy)*100)+'%;"></b><h6>已众筹：'+((this.data.payedCount/this.data.copy)*100)+'%</h6></li>'+
                   '</ul>'+
                '</form>'+
              '</div>'+
              
              '<div class="pl_detail_contain">'+
                 '<ul>'+
                     '<li><h4>已众筹金额</h4><span>￥'+this.data.payed+'</span></li>'+
                     '<li><h4>众筹金额</h4><span>￥'+this.data.money+'</span></li>'+
                     '<li><h4>众筹笔数</h4><span>'+this.data.copy+'笔</span></li>'+
                     '<li><h4>预期年化收益率</h4><span>'+this.data.yearReturn+'</span></li>'+
                     '<li><h4>最小单位</h4><span id="crowSmallest">￥'+this.data.minUnit+'份</span></li>'+
                     '<li><h4>最大单位</h4><span>'+this.data.maxUnit+'份（总额的5%）</span></li>'+
                     '<li><h4>总份数</h4><span>'+this.data.copy+'份</span></li>'+
                      '<li><h4>剩余份数</h4><span>'+(this.data.copy-this.data.payedCount)+'份 </span></li>'+
                 '</ul>'+
                 '<div class="clear"></div>'+
              '</div>'+
              
          '</div>'+
            
            '<div class="lef fr">'+
	    		'<!-- <a href="#videomodal" data-toggle="modal" data-target="#video-modal"> -->'+
                	//'<img src="/project/images/20150127/142237097847095.jpg" width="650">'+
                '<!-- </a> -->'+
                '<ul class="social">'+
                    '<li>'+
                        '<a title=" " target="_top" class="b-btn" href="#">'+
                        '</a>'+
                    '</li>'+
                    '<li>'+
                    '</li>'+
                '</ul>'+
                '<div id="Tab3">'+
                    '<div class="Menubox3">'+
                        '<ul>'+
                            '<li id="three1" num="1" class="threebutton hover">'+
                                '项目介绍'+
                            '</li>'+
                            '<li id="three5" class="threebutton" num="5">'+
                               '图片集锦'+
                            '</li>'+
                            '<li id="three2" class="threebutton" num="2">'+
                                '价格走势'+
                            '</li>'+
                            '<li id="three3" class="threebutton" num="3" style="margin-right:0px;">'+
                                '专业投资建议'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="Contentbox3">'+
                        '<div id="con_three_1" class="con_three">'+
                            '<div class="tt jbxx">'+
                                '<h3>'+
                                    '基本信息'+
                                '</h3>'+
                                '<table width="100%" border="0" cellspacing="0" cellpadding="0">'+
                                    '<tbody>'+
                                        '<tr>'+
                                            '<td width="140" align="right">'+
                                                '项目名称：'+
                                            '</td>'+
                                            '<td>'+
                                                this.data.title+'-'+this.data.subhead+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td width="140" align="right">'+
                                                '项目原价：'+
                                            '</td>'+
                                            '<td>'+
                                               +this.data.costPrice +'元'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                                '中筹价格：'+
                                            '</td>'+
                                            
	                                            '<td>'+
	                                                this.data.price+'元 '+
	                                            '</td>'+
	                                        
	                                        
	                                        
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                                '众筹金额：'+
                                            '</td>'+
                                            '<td>'+
                                               this.data.money+'元'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                               ' 众筹份数：'+
                                            '</td>'+
                                            '<td>'+
                                               this.data.copy+'份'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                                '持有期限不超过：'+
                                            '</td>'+
                                            '<td>'+
                                               this.data.maxTime+'个月'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                               ' 众筹最小单位：'+
                                            '</td>'+
                                            '<td>'+
                                                this.data.minUnit+'元'+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                               ' 税费预算：'+
                                            '</td>'+
                                            '<td>'+
                                               this.data.tax+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                                '建筑面积：'+
                                           ' </td>'+
                                            '<td>'+
                                               this.data.area+'平米'+
                                                
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                               ' 市场单价：'+
                                            '</td>'+
                                            
	                                            '<td>'+
	                                               this.data.costUnitPrice+'元/平米 '+
	                                            '</td>'+
	                                        
	                                        
	                                        
                                        '</tr>'+
                                                               ' <tr>'+
                                            '<td align="right">'+
                                               ' 中筹单价：'+
                                            '</td>'+
                                            
	                                           ' <td>'+
	                                               this.data.UnitPrice+'元/平米 '+
	                                           ' </td>'+
	                                        
	                                        
	                                        
                                        '</tr>'+
                                        '<tr>'+
                                            '<td width="140" align="right">'+
                                                '开发商：'+
                                            '</td>'+
                                            '<td>'+
                                               this.data.developer+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                           ' <td align="right">'+
                                               ' 物业地址：'+
                                            '</td>'+
                                            '<td>'+
                                               this.data.place+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                               ' 装修状况：'+
                                           ' </td>'+
                                           ' <td>'+
                                               decorateArry[this.data.decorate]+
                                            '</td>'+
                                       ' </tr>'+
                                       ' <tr>'+
                                           ' <td align="right">'+
                                               ' 物业类别：'+
                                            '</td>'+
                                           ' <td>'+
                                               propertyTypeArry[this.data.propertyType]+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                               ' 开盘时间：'+
                                           ' </td>'+
                                            '<td>'+
                                               app.fns.t2d(this.data.stratTime)+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                           ' <td align="right">'+
                                               ' 建造时间：'+
                                            '</td>'+
                                            '<td>'+
                                               app.fns.t2d(this.data.buildTime)+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                                '产权类型：'+
                                            '</td>'+
                                            '<td>'+
                                                rightTypeArry[this.data.rightType]+
                                            '</td>'+
                                        '</tr>'+
                                        '<tr>'+
                                            '<td align="right">'+
                                                '是否有租约：'+
                                            '</td>'+
                                            '<td>'+
                                                haveLeaseArry[this.data.haveLease]+
                                            '</td>'+
                                        '</tr>'+
                                    '</tbody>'+
                                '</table>'+
                            '</div>'+
                            '<div class="tt xmjs">'+
                                '<h3>'+
                                    '项目简介'+
                               ' </h3>'+
								'<p></p>'+
								this.data.dsc+
                                '<p></p>'+
                            '</div>'+
                        '</div>'+
						'<div id="con_three_2" class="con_three" style="display:none">'+
						    '<div class="tt">'+
						      '<h3>历史价格走势</h3><br><br>'+
						      this.data.action+
							  '<p></p>'+	
						   '</div>'+
						'</div>'+
						'<div id="con_three_3" class="con_three" style="display:none;">'+
						     '<div class="tt jbxx">'+
						           '<h3>相关法律</h3>'+
								   '<p></p>'+	
						          this.data.low+
						          '<p></p>'+
						          '<h3>资产管理</h3>'+
								  '<p></p>'+	
						          this.data.manager+
								  '<p></p>'+
									'<h3>资产评估</h3>'+
									'<p></p>'+	
									this.data.review+
									'<p></p>'+					          
						          '<h3>综合建议</h3>'+
								  '<p></p>'+	
								  this.data.suggest+
						          '<p></p>'+	
						      '</div>'+
						'</div>'+
                        '<div id="con_three_4" class="con_three" style="display:none">'+
                          '<div class="tt detail">'+
                            '<h3> 众筹明细</h3>'+
                            '<table id="orderListTable" width="100%" border="0" cellspacing="0" cellpadding="0">'+
                                '<tbody><tr>'+
                                  '<td height="30" align="center"><span> 序号 </span></td>'+
                                  '<td align="center"><span> 用户 </span></td>'+
                                  '<td align="center"><span> 份数 </span></td>'+
                                  '<td align="center"><span> 金额 </span></td>'+
                                  '<td align="center"><span> 众筹时间 </span></td>'+
                                  '<td align="center"><span> 已转让份额 </span></td>'+
                                  '<td align="center"><span> 状态 </span></td>'+
                                '</tr>'+
                        	'</tbody></table>'+
                            '<!-- 分页  -->'+
                            '<div id="pagination">'+
                              '<a id="prePage" href="javascript:void(0)" onclick="pageDown(1)">上一页</a>'+
                              '<span id="currPage"></span>&nbsp;&nbsp;/&nbsp;&nbsp;<span id="totalPage"></span>'+
                              '<a id="nextPage" href="javascript:void(0)" onclick="pageDown(2)">下一页</a>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
						'<div id="con_three_5" class="con_three" style="display:none;">'+
						  ' <h3>实景图</h3><br>'+
						   '<div id="shijintu"></div>'+
						   '<p><br></p>'+
						   '<h3>户型图</h3><br>'+
						   '<div id="huxingtu"></div>'+
						   '<h3>区位图</h3><br>'+
						   '<div id="quweitu"></div>'+
						'</div>'+
                        '<div id="con_three_6" class="con_three" style="display:none">'+
                        '<div class="tt jbxx">'+
    '<h3>转让份额</h3>'+
    '<p style="font-size:14px;font-weight:bold; text-indent:24px; line-height:24px; padding:15px;">封闭期：份额转让在筹满结束后60天开通转让通道。<br></p>'+
 '</div>'+
                        
                        '</div>'+
                        '<div id="con_three_7" class="con_three" style="display:none">'+
                            '<div class="tt">'+
                                '<h3>'+
                                   ' 周边租金走势图'+
                                '</h3>'+
                                '<div class="jgzs">'+
                                    '<img src="/assets/products/main_19.jpg" width="496" height="275">'+
                                '</div>'+
                            '</div>'+
                            '<div class="tt">'+
                                '<h3>'+
                                   ' 运营状况'+
                               ' </h3>'+
                                '<div class="yxzk">'+
                                    '<table class="tableM" border="0" cellspacing="0" cellpadding="0">'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<td width="90">'+
                                                    '房屋状态:'+
                                                '</td>'+
                                                '<td align="left">'+
                                                    '已出租'+
                                               ' </td>'+
                                                '<td width="90">'+
                                                    '租金金额：'+
                                                '</td>'+
                                                '<td align="left">'+
                                                    '6000元/月'+
                                               ' </td>'+
                                            '</tr>'+
                                           ' <tr>'+
                                                '<td>'+
                                                   ' 承租企业：'+
                                                '</td>'+
                                                '<td align="left">'+
                                                    '上海*****有限公司'+
                                                '</td>'+
                                               ' <td>'+
                                                   ' 出租日期：'+
                                               ' </td>'+
                                                '<td align="left">'+
                                                   ' 2014.6.7'+
                                               ' </td>'+
                                           ' </tr>'+
                                        '</tbody>'+
                                   ' </table>'+
                               ' </div>'+
                            '</div>'+
                        '</div>'+
                        '<div id="con_three_8" class="con_three" style="display:none">'+
                           ' <div class="tt tp">'+
                               ' <h3>'+
                                   ' 投票'+
                               ' </h3>'+
                               ' <div class="jgzs">'+
                                    '<img src="/assets/products/main_19.jpg" width="496" height="275">'+
                                   ' <h4>'+
                                      '  当前售出价格为：16,300/m2'+
                                   ' </h4>'+
                                   ' <div class="butt">'+
                                       ' <a href="#" class="affirm">'+
                                         '   同意'+
                                       ' </a>'+
                                        '<a href="#" class="affirm">'+
                                           ' 出售'+
                                       ' </a>'+
                                   ' </div>'+
                                '</div>'+
                           ' </div>'+
                       ' </div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            
   ' <div id="video-modal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="payLabel" aria-hidden="true">'+
     ' <div class="modal-header red-header">'+
       ' <button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+
         ' ×'+
        '</button>'+
        '<h3>'+
        '  视频播放'+
        '</h3>'+
      '</div>'+
     ' <div class="modal-body center-block">'+
        '<a href="/flowplayer/daoshang.flv" style="display:block;width:500px;height:300px;" id="player1"><object width="100%" height="100%" id="player1_api" name="player1_api" data="/flowplayer/flowplayer-3.2.18.swf" type="application/x-shockwave-flash"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="quality" value="high"><param name="bgcolor" value="#000000"><param name="flashvars" value="config={&quot;clip&quot;:{&quot;autoPlay&quot;:false,&quot;autoBuffering&quot;:true,&quot;url&quot;:&quot;/flowplayer/daoshang.flv&quot;},&quot;playerId&quot;:&quot;player1&quot;,&quot;playlist&quot;:[{&quot;autoPlay&quot;:false,&quot;autoBuffering&quot;:true,&quot;url&quot;:&quot;/flowplayer/daoshang.flv&quot;}]}"></object></a>'+
       

     ' </div>'+
      
   ' </div>'+
       ' </div>'+
    '</div>'+
'</div>');
var that=this
$("[formtype='buybutton']").unbind("click").bind("click",function(){
	if(app.objs.user.get()&&app.objs.user.get().id){
		window.location.hash="buy/id:"+that.data.id+"/count:"+$("#crowdCount").val();
		}else{
			alert("请先登录再购买");
			window.location.hash="login";
			}
	})
$("[formtype='number']").each(
			function(){
				$(this).spinner({change:function(event,ui){
				$("#crowdAmt").html($(this).spinner("value")*that.data.UnitPrice)
				}});
			}
		)
$(".Menubox3 li").each(function(){
	$(this).unbind("click").bind("click",function(){
		$(".threebutton").removeClass("hover");
		$(this).addClass("hover");
		$(".con_three").hide();
		$("#con_three_"+$(this).attr("num")).show();
		})
	})
$.each(this.data.image,function(i,n){
	$('<p><img src="'+n+'"/></p>').appendTo($("#shijintu"))
	})
$.each(this.data.imageH,function(i,n){
	$('<p><img src="'+n+'"/></p>').appendTo($("#huxingtu"))
	})
$.each(this.data.imageA,function(i,n){
	$('<p><img src="'+n+'"/></p>').appendTo($("#quweitu"))
	})
	}
	}}
/*购买*/
app.views.buy=function(){return {
	el:".middle",
	render:function(){
		if(app.objs.user.get()){
		var that=this;
		
		$(this.el).empty();
		$(this.el).html('<div class="credit_lending singleUse">'+
            '<h2>确认并支付</h2>'+
            '<div class="lending_table">'+
            '<table width="100%" border="0" id="pro_table">'+
                '<thead>'+
                  '<tr>'+
                  	'<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>商品名</td>'+
                    '<td>现价</td>'+
                    '<td>购买份数</td>'+
                    '<td>支付金额</td>'+
                  '</tr>'+
                '</thead>'+
               '<tbody><tr>'+
			   		'<td width="5%"></td>'+
                    '<td>'+that.data.id+'</td>'+
                    '<td>'+that.data.title+"-"+that.data.subhead+'</td>'+
                    '<td>'+that.data.buyPrice+'</td>'+
                    '<td>'+that.data.count+'</td>'+
                    '<td>'+that.data.count*that.data.buyPrice+'</td>'+
			   '</tr></tbody></table>'+
               
            '</div>'+
			'<form name=llpayment action="webllpay/llpayapi.php" method=post target="_blank">'+
                        '<input type="hidden" name="user_id" value="22222222" />'+
                        '<input type="hidden" name="busi_partner" value="101001"/>'+
                        '<input type="hidden" name="no_order" value="'+that.data.id+'"/>'+
                        '<input type="hidden" name="money_order" value="'+that.data.count*that.data.buyPrice+'"/>'+
                        '<input type="hidden" name="name_goods" value="'+that.data.subhead+'"/>'+
                        '<input type="hidden" name="url_order" value=""/>'+
                        '<input type="hidden" name="info_order" value="'+that.data.id+' '+that.data.count+' '+that.data.buyPrice+'"/>'+
                        '<input type="hidden" name="bank_code" value=""/>'+
                        '<input type="hidden" name="pay_type" value=""/>'+
                        '<input type="hidden" name="acct_name" value=""/>'+
                        '<input type="hidden" name="shareing_data" value=""/>'+
                        '<input type="hidden" name="valid_order" value="10080"/>'+
                        '<button  id="payButton" class="new-btn-login" type="submit" style="text-align:center;">确认支付</button>'+
		'</form>'+
         //  '<div id="payButton">确认支付</div>'+
            '<div class="clear"></div>'+
        '</div>');
		$(this.el).find("#payButton").unbind("click").bind("click",function(){
			//app.apis.adddeal(that.data,function(){
				//alert("交易成功");
				//window.location.hash="account";
				//},function(){
				//alert("交易失败");
				//})
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
		}
	}}
/*卖出*/
app.views.sell=function(){return {
	el:".middle",
	render:function(){
		if(app.objs.user.get()){
		var that=this;
		
		$(this.el).empty();
		$(this.el).html('<div class="credit_lending singleUse">'+
            '<h2>确认并卖出</h2>'+
            '<div class="lending_table">'+
            '<table width="100%" border="0" id="pro_table">'+
                '<thead>'+
                  '<tr>'+
                  	'<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>商品名</td>'+
					'<td>买入价</td>'+
                    '<td>现价</td>'+
                    '<td>份数</td>'+
                    '<td>结算金额</td>'+
                  '</tr>'+
                '</thead>'+
               '<tbody><tr>'+
			   		'<td width="5%"></td>'+
                    '<td>'+that.data.id+'</td>'+
                    '<td>'+that.data.title+"-"+that.data.subhead+'</td>'+
                    '<td>'+that.data.buyPrice+'</td>'+
					'<td>'+that.data.sellPrice+'</td>'+
                    '<td>'+that.data.count+'</td>'+
                    '<td>'+that.data.count*that.data.sellPrice+'</td>'+
			   '</tr></tbody></table>'+
               
            '</div>'+
			'<form name=llpayment action="webllpay/llpayapi.php" method=post target="_blank">'+
                        '<input type="hidden" name="user_id" value="22222222" />'+
                        '<input type="hidden" name="busi_partner" value="101001"/>'+
                        '<input type="hidden" name="no_order" value="'+that.data.id+'"/>'+
                        '<input type="hidden" name="money_order" value="'+that.data.count*that.data.sellPrice+'"/>'+
                        '<input type="hidden" name="name_goods" value="'+that.data.subhead+'"/>'+
                        '<input type="hidden" name="url_order" value=""/>'+
                        '<input type="hidden" name="info_order" value="'+that.data.id+' '+that.data.count+' '+that.data.sellPrice+'"/>'+
                        '<input type="hidden" name="bank_code" value=""/>'+
                        '<input type="hidden" name="pay_type" value=""/>'+
                        '<input type="hidden" name="acct_name" value=""/>'+
                        '<input type="hidden" name="shareing_data" value=""/>'+
                        '<input type="hidden" name="valid_order" value="10080"/>'+
                        '<button  id="payButton" class="new-btn-login" type="submit" style="text-align:center;">确认卖出</button>'+
		'</form>'+
          // '<div id="payButton">确认卖出</div>'+
            '<div class="clear"></div>'+
        '</div>');
		$(this.el).find("#payButton").unbind("click").bind("click",function(){
			//app.apis.editdeal(that.data,function(){
				//alert("交易成功");
				//window.location.hash="account";
				//},function(){
				//alert("交易失败");
				//})
			})

		}else{
			alert("请先登录")
			window.location.hash="login"
		}
				}
	}}
/*债权转让*/
app.views.change=function(){return {
	el:".middle",
	render:function(){
		if(app.objs.user.get()){
		var that=this;
		
		$(this.el).empty();
		$(this.el).html('<div class="credit_lending singleUse">'+
            '<h2>确认并转让</h2>'+
            '<div class="lending_table">'+
            '<table width="100%" border="0" id="pro_table">'+
                '<thead>'+
                  '<tr>'+
                  	'<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>商品名</td>'+
					'<td>买入价</td>'+
                    '<td>现价</td>'+
                    '<td>份数</td>'+
                    '<td>转让手续费</td>'+
					'<td>手续费合计</td>'+
                  '</tr>'+
                '</thead>'+
               '<tbody><tr>'+
			   		'<td width="5%"></td>'+
                    '<td>'+that.data.id+'</td>'+
                    '<td>'+that.data.title+"-"+that.data.subhead+'</td>'+
                    '<td>'+that.data.buyPrice+'</td>'+
					'<td>'+that.data.sellPrice+'</td>'+
                    '<td>'+that.data.count+'</td>'+
                    '<td>'+that.data.change+'</td>'+
					'<td>'+that.data.count*that.data.change+'</td>'+
			   '</tr></tbody></table>'+
               
            '</div>'+
			'<p style="margin-left: 10px;">请输入转让客户的用户名</p>'+
			'<input style="border: 1px solid #999797;margin-left: 10px;margin-top: 10px;margin-bottom: 10px;" to="changeMember" formtype="simple"/>'+
			'<form name=llpayment action="webllpay/llpayapi.php" method=post target="_blank">'+
                        '<input type="hidden" name="user_id" value="22222222" />'+
                        '<input type="hidden" name="busi_partner" value="101001"/>'+
                        '<input type="hidden" name="no_order" value="'+that.data.id+'"/>'+
                        '<input type="hidden" name="money_order" value="'+that.data.count*that.data.change+'"/>'+
                        '<input type="hidden" name="name_goods" value="'+that.data.subhead+'"/>'+
                        '<input type="hidden" name="url_order" value=""/>'+
                        '<input type="hidden" name="info_order" value="'+that.data.id+' '+that.data.count+' '+that.data.change+'"/>'+
                        '<input type="hidden" name="bank_code" value=""/>'+
                        '<input type="hidden" name="pay_type" value=""/>'+
                        '<input type="hidden" name="acct_name" value=""/>'+
                        '<input type="hidden" name="shareing_data" value=""/>'+
                        '<input type="hidden" name="valid_order" value="10080"/>'+
                        '<button  id="payButton" class="new-btn-login" type="submit" style="text-align:center;">确认卖出</button>'+
		'</form>'+
           //'<div id="payButton">确认转让</div>'+
            '<div class="clear"></div>'+
        '</div>');
		$(this.el).find("#payButton").unbind("click").bind("click",function(){
			function editdeal(){
				app.apis.editdeal(that.data,function(){
				alert("转移成功");
				window.location.hash="account";
				},function(){
				alert("转移失败");
				})
				}
			//app.apis.checkUserName($("[to='changeMember']").val(),function(data){
				//that.data.userId=data[0].id
				//editdeal()
				//},function(){
				//alert("找不到该用户")
				//})
			
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
		}
	}}
/*公告详情*/
app.views.announcementDetail = function(){return {
	el:".middle",
	render:function(){
		
		$(this.el).html("公告详情")
	}
	}}
/*用户部分**********************************************************************/
/*账户*/
app.views.account = function(){return {
	el:".mb_right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#account").addClass('hover');
		if(app.objs.user.get()){
		var emailString='<li class="m_ac_propic" id="mailSet"><img src="img/uc/icon_a1.jpg" alt=""><h4>电子邮箱</h4><a href="#emailVerify">未绑定</a></li>';
		if(this.data.email){
			emailString='<li class="m_ac_propic" id="mailModify"><img src="img/uc/icon_a1_on.jpg" alt=""><h4>电子邮箱</h4><a href="#emailVerify">修改</a></li>'
			}
		var questionString='<li class="m_ac_propic" id="secQuesSet">'+
						'<img src="img/uc/icon_a2.jpg" alt="">'+
					'<h4>密码问题</h4>'+
						'<a href="#setPassWord">未设置</a>'+
					'</li>'
			if(this.data.saveQuestion){
				questionString='<li class="m_ac_propic" id="secQuesModify">'+
						'<img src="img/uc/icon_a2_on.jpg" alt="">'+
					'<h4>密码问题</h4>'+
						'<a href="#setPassWord">修改</a>'+
					'</li>'
				}		
		var messageString='<li class="m_ac_propic" id="infoSet">'+
						'<img src="img/uc/icon_a3.jpg" alt="">'+
					'<h4>个人资料</h4>'+
						'<a href="#setDetail">未完善</a>'+
					'</li>'
			if(this.data.name){
				messageString='<li class="m_ac_propic" id="infoModify" style="display:none">'+
						'<img src="img/uc/icon_a3_on.jpg" alt="">'+
					'<h4>个人资料</h4>'+
						'<a href="#setDetail">修改</a>'+
					'</li>'
				}
							
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
					//'<li class="m_a_right"><a href="recharge?recharge=1">充值</a><a onclick="Prompt()">提现</a></li>'+
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
							'<img src="img/uc/progress_pic1.png">'+
						'</h4>'+
						'<h4 class="m_ac_progress" style="display:none">'+
							'<img src="img/uc/progress_pic2.png">'+
						'</h4>'+
						'<h4 class="m_ac_progress" style="display:none">'+
							'<img src="img/uc/progress_pic3.png">'+
						'</h4>'+
						'<h4 class="m_ac_progress" style="display:none">'+
							'<img src="img/uc/progress_pic4.png">'+
						'</h4></li>'+
					'<div class="clear"></div>'+
					emailString+
					questionString+
					messageString+
				'</ul>'+
			'</div>'+

			'<div class="my_projectlist">'+
				'<h2>我的众筹产品</h2>'+
				'<ul id="dealListFrame">'+
					
					
				'</ul>'+
			'</div>');
			var that=this;
			if(this.data.deal){
				var changeHead="";
				if(app.objs.config.get().change=="1"){
					changeHead='<td>债权转让</td>'
					}
				$(this.el).find("#dealListFrame").html('<div class="lending_table"><table width="100%" border="0" id="deal_table">'+
                '<thead>'+
                  '<tr>'+
                  	'<td width="5%"></td>'+
                    '<td>编号</td>'+
                    '<td>商品名</td>'+
                    '<td>买入价</td>'+
					'<td>现价</td>'+
                    '<td>购买份数</td>'+
                    '<td>利润</td>'+
					'<td>卖出</td>'+
					changeHead+
                  '</tr>'+
                '</thead>'+
               '<tbody></tbody></table></div>');
			
				$.each(that.data.deal,function(i,n){
					var changeButton="";
					if(app.objs.config.get().change=="1"){
						changeButton='<td><div class="changeRight" id="'+n.id+'" style="cursor:pointer">债权转让</div></td>'
						}
					if(!n.endTime){
						$("#deal_table tbody").append('<tr>'+
			   		'<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+that.data.product[n.productId].title+"-"+that.data.product[n.productId].subhead+'</td>'+
                    '<td>'+n.buyPrice+'</td>'+
					'<td>'+that.data.product[n.productId].UnitPrice+'</td>'+
                    '<td>'+n.count+'</td>'+
                    '<td>'+n.count*(that.data.product[n.productId].UnitPrice-n.buyPrice)+'元</td>'+
					'<td><div class="sallbutton" id="'+n.id+'" style="cursor:pointer">卖出</div></td>'+
					changeButton+
			   '</tr>')
						}
					
					})
					$(".sallbutton").unbind("click").bind("click",function(){
						window.location.hash="sell/id:"+$(this).attr("id");
						})
					$(".changeRight").unbind("click").bind("click",function(){
						window.location.hash="change/id:"+$(this).attr("id");
						})
				}
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*分享*/
app.views.share = function(){return {
	el:".mb_right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#share").addClass('hover');
		if(app.objs.user.get()){
			$(this.el).html('<div class="shareTitle"><b>直接复制邀请码给好友</b></div>'+
							'<div class="shareMain">'+app.objs.user.get().id+'</div>'+
							'<div class="shareTitle"><b>点击分享到各平台</b></div>'+
							'<div class="shareMain">'+
								'<img id="qw" class="shareIcon" src="img/share/qw.jpg"/>'+
								'<img id="qz" class="shareIcon" src="img/share/qz.jpg"/>'+
								'<img id="wb" class="shareIcon" src="img/share/wb.jpg"/>'+
								'<div class="clear"></div>'+
							'</div>'+
							'<div class="shareTitle"><b>扫描二维码分享到微信</b></div>'+
							'<div class="shareMain">'+
								'<div class="shareQR"></div>'+
							'</div>'
			);
			$(this.el).find("#qw").unbind("click").bind("click",function(){
				share.sharetoqq("星众众筹","http://120.25.154.29/#register/key:"+app.objs.user.get().id,"http://120.25.154.29/img/headerLogo.jpg");
				})
			$(this.el).find("#qz").unbind("click").bind("click",function(){
				share.sharetoqqzone("星众众筹","http://120.25.154.29/#register/key:"+app.objs.user.get().id,"http://120.25.154.29/img/headerLogo.jpg");
				})
			$(this.el).find("#wb").unbind("click").bind("click",function(){
				share.sharetosina("星众众筹","http://120.25.154.29/#register/key:"+app.objs.user.get().id,"http://120.25.154.29/img/headerLogo.jpg");
				})
			$(this.el).find(".shareQR").qrcode({render	: "table",
		text	: "http://120.25.154.29/phone/#register/"+app.objs.user.get().id,width:192,height:192})
			var ShareTip = function(){}
			//分享到腾讯微博
			ShareTip.prototype.sharetoqq=function(content,url,picurl)
			{
			 var shareqqstring='http://v.t.qq.com/share/share.php?title='+content+'&url='+url+'&pic='+picurl;
			 window.open(shareqqstring,'newwindow','height=100,width=100,top=100,left=100');
			}
			//分享到新浪微博
			ShareTip.prototype.sharetosina=function(title,url,picurl)
			{
			 var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
			 window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
			}
			//分享到QQ空间
			ShareTip.prototype.sharetoqqzone=function(title,url,picurl)
			{
			 var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;
			 window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');
			}
			var share=new ShareTip();
			}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*充值*/
app.views.recharge = function(){return {
	el:".mb_right",
	render:function(){
		$(this.el).html("充值")
	}
	}}
/*提现*/
app.views.paid = function(){return {
	el:".mb_right",
	render:function(){
		$(this.el).html("提现")
	}
	}}
/*银行卡*/
app.views.card = function(){return {
	el:".mb_right",
	render:function(){
		$(this.el).html("银行卡")
	}
	}}
/*资金纪录*/
app.views.capitalDetail = function(){return {
	el:".mb_right",
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#capitalDetail").addClass('hover');
		if(app.objs.user.get()){
		$(this.el).empty();

		$(this.el).html('<div id="con_funds_1">'+
        '<div class="right_table">'+
            '<table id="table1" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>订单号</td>'+
                    '<td>商品名</td>'+
                    '<td>交易日期</td>'+
                    '<td>金额</td>'+
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>'+
        '</div>');
		var that=this;
		if(this.data&&this.data.length){
			$.each(this.data,function(i,n){
				$(that.el).find("table").append('<tr>'+
					'<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.title+'-'+n.subhead+'</td>'+
                    '<td>'+app.fns.t2d(n.startTime)+'</td>'+
                    '<td>'+n.buyPrice*n.count+'</td>'+
				'</tr>')
				if(n.endTime){
					$(that.el).find("table").append('<tr>'+
					'<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.title+'-'+n.subhead+'</td>'+
                    '<td>'+app.fns.t2d(n.endTime)+'</td>'+
                    '<td>'+n.sellPrice*n.count+'</td>'+
				'</tr>')
					}
				})
			}
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*红包记录*/
app.views.redPacketDetail = function(){return {
	el:".mb_right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#redPacketDetail").addClass('hover');
		if(app.objs.user.get()){
		
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
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*安全问题*/
app.views.safeQusetion = function(){return {
	el:".mb_right",
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#safeQusetion").addClass('hover');
		if(app.objs.user.get()){
		var templateData={"id":"",question1:"0",question2:"0",answer1:"",answer2:""}
		if(this.data){
			templateData=$.extend(templateData,this.data)
			}
			
		$(this.el).html('<div class="account_security">'+
            '<h2>温馨提示：您好，您的安全问题未设置，请填写以下信息进行设置</h2>'+
            '<ul>'+
                '<p>请在下面的下拉列表中选择问题，并在答案部分予以回答。<br>注意：回答安全问题是您修改手机号码，变更邮箱，找回密码和修改银行账号的必备验证程序，请妥善保存您的安全问题及答案，谢谢。</p>'+
                '<li><h4>问题一：</h4>'+
                    '<span>'+
                       '<select id="question1" formtype="select" to="question1" name="请选择">'+
                           '<option value="0">我的出生地在哪？</option>'+
                           '<option value="1">我的母亲叫什么？</option>'+
                           '<option value="2">我的星座是什么？</option>'+
                           
                       '</select>'+
                     '</span>'+
                '</li>'+
                '<li><h4>答案一：</h4><span><input id="answer1" name="answer1" type="text" formtype="simple" to="answer1" value="'+templateData["answer1"]+'"></span><i id="answer1Notice" class="ts"></i></li>'+
                '<li><h4>问题二：</h4>'+
                    '<span>'+
                       '<select id="question2" formtype="select" to="question2" name="请选择">'+
                           '<option value="0">我最喜欢的食物是什么？</option>'+
                           '<option value="1">我最喜欢的电影是什么？</option>'+
                           '<option value="2">我最喜欢的歌曲是什么？</option>'+
                       '</select>'+
                     '</span>'+
                '</li>'+
                '<li><h4>答案二：</h4><span><input id="answer2" name="answer2" formtype="simple" to="answer2" type="text" value="'+templateData["answer2"]+'"></span><i id="answer2Notice" class="ts"></i></li>'+
                '<a class="confirm_btn">提交更新</a>'+
                '<!-- <div class="cancel_btn"><a href="#">取消</a></div> -->'+
            '</ul>'+
            '<div class="clear"></div>'+
        '</div>')
		$(this.el).find("[ formtype='simple']").each(function(){
			$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})
			})
		$(this.el).find("select").each(function(){
			var target=$(this);
			$(this).find("option").each(function(){
				if(templateData[target.attr("to")]==$(this).attr("value")){
					$(this).attr("selected","selected");
					}
				});
			$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})

			})
		$(this.el).find(".confirm_btn").unbind("click").bind("click",function(){
			app.apis.setSafeQusetion(templateData,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*邮箱验证*/
app.views.emailVerify = function(){return {
	el:".mb_right",
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#emailVerify").addClass('hover');
		if(app.objs.user.get()){
	
		var that=this;
		var bindString='<li id="sendBtn" class="basics_btn"><a id="bindBtn">绑定</a></li>'
		if(this.data.bind&&this.data.bind.email){
			bindString='<li id="sendBtn" class="basics_btn"><a id="bindBtn">修改绑定</a></li>'
			}
		$(this.el).html('<div class="email_authentication">'+
            '<h2>邮箱认证</h2>'+
            '<ul>'+
               '<h4>请输入您的邮箱地址:</h4>'+
               '<li class="form-item">'+
                 '<input type="text" value="'+this.data.email+'" id="myEmail" class="shadow-none">'+
                 '<i class="glyphicon glyphicon-envelope"></i>'+
               '</li>'+
               '<li id="mailNotice"></li>'+
               bindString+
               '<li id="mailLoginBtn" class="basics_btn" style="display:none"><a>登录邮箱</a></li>'+
               '<div class="clear"></div>'+
            '</ul>'+    
        '</div>')
		
		function sendBind(){
			$("#bindBtn").html("绑定")
			$(that.el).find("#sendBtn").unbind("click").bind("click",function(){
			app.apis.getBindCode({"type":"email","number":$("#myEmail").val()},function(data){
					alert("信息已发送")
					$(that.el).find("#sendBtn").unbind("click");
					$("#mailLoginBtn a").attr("href","http://mail."+$("#myEmail").val().split("@")[1])
					$("#mailLoginBtn").show();
					var sendTime=30;
					var sendI=setInterval(function(){
						$("#bindBtn").html(sendTime+"秒后可重新发送");
						sendTime--;
						if(sendTime<0){
							clearInterval(sendI)
							sendBind();
							}
						},1000)
					
				},function(){
					alert("发送失败")
					})
			})
			}
		sendBind()
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*修改手机*/
app.views.setPhone = function(){return {
	el:".mb_right",
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#setPhone").addClass('hover');
		if(app.objs.user.get()){
		var code="";
		$(this.el).html('<div class="bankcard" style="position:relative;">'+
	            '<h2>用户手机修改</h2>'+
	            '<ul>'+
	                '<li><h4>用户名:</h4>'+this.data.userName+'</li>'+
	                '<li><h4>新手机号:</h4><span><input id="phoneNumber" name="phoneNumber" type="text" value="'+this.data.phone+'"/></span><i id="phoneNumberNotice" class="in_notice" style="margin-top:145px;margin-left:290px;"></i></li>'+
	                '<li>'+
		                '<h4>输入验证码:</h4><span><input id="msgValidCode" name="msgValidCode" type="text"></span><i id="msgValidNotice" class="in_notice" style="margin-top:190px;margin-left:290px;"></i>'+
		                '<h4 class="yzm" style="position:absolute; right:205px; top:194px;width:150px;"><a id="btnSendmsg"  style="width:150px; height:30px; line-height:30px; box-shadow:none;">[获取验证码]</a></h4>'+
	                '</li>'+
	                '<div class="bankcard_confirm"><a>确&nbsp;&nbsp;认</a></div>'+
	            '</ul>'+
	            '<div class="clear"></div>'+
	        '</div>')
			var that=this;
		function sendBind(){
			$(that.el).find("#btnSendmsg").html("[获取验证码]")
			$(that.el).find("#btnSendmsg").unbind("click").bind("click",function(){
				app.apis.getBindCode({"type":"phone","number":$("#phoneNumber").val()},function(data){
					alert("信息已发送")
					
					code=data;
					var sendTime=30;
					var sendI=setInterval(function(){
						$("#btnSendmsg").html(sendTime+"秒后可重新发送");
						sendTime--;
						if(sendTime<0){
							clearInterval(sendI)
							sendBind();
							}
						},1000)
					
				},function(){
					alert("发送失败")
					})
				})
			}	
			sendBind()
			$(this.el).find(".bankcard_confirm").unbind("click").bind("click",function(){
				if(code&&code==$("#msgValidCode").val()){
					app.apis.bind({
					"type":"phone","id":app.objs.user.get().id,"code":code,"number":$("#phoneNumber").val()
					},function(){
						alert("绑定成功")
						window.location.reload();
						},function(){
							alert("绑定失败")
							}
				)
					}
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
		}
	}}
/*修改资料*/
app.views.setDetail = function(){return {
	el:".mb_right",
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#setDetail").addClass('hover');
		if(app.objs.user.get()){
		var templateData=$.extend({},this.data);
	
		var phoneString='<a>[绑定]</a>'
		if(templateData.phone){
			phoneString=templateData.phone+'<a">[修改]</a>'
			}
		var emailString='<a>[绑定]</a>'
		if(templateData.email){
			emailString=templateData.email+'<a">[修改]</a>'
			}
		$(this.el).html('<div class="bankcard">'+
            '<h2>用户资料修改</h2>'+
            '<form action="/user/updateUser" method="post" id="modifyUserForm" name="modifyUserForm">'+
	            '<ul>'+
	              '<li><h4>用户名:</h4>'+templateData.userName+'</li>'+
	              '<li><h4>手机号:</h4>'+phoneString+'</li>'+
	              '<li><h4>邮箱:</h4>'+emailString+'</li>'+
	              '<li><h4>真实姓名:</h4>'+
	              '<span>'+
		              '<span>'+
			              	'<input id="name" name="name" formtype="simple" to="name" type="text" value="'+templateData.name+'">'+
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
	              '<div class="bankcard_confirm"><a>确&nbsp;&nbsp;认</a></div>'+
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
			$(this.el).find(".bankcard_confirm").unbind("click").bind("click",function(){
				app.apis.editClient(templateData,function(){
					alert("修改成功");
					var userSting=JSON.stringify(templateData);
					$.cookie("zc_user",userSting,{expires:0.5});
					},function(){
					alert("修改失败")
					});
				})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*修改密码*/
app.views.setPassWord = function(){return {
	el:".mb_right",
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#setPassWord").addClass('hover');
		if(app.objs.user.get()){
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
                '<li><h4>新密码:</h4><span><input id="newPassword" name="newPassword" to="newKey" formtype="simple" type="password"></span><i id="newPasswordNotice" class="ts"></i></li>'+
                '<li class="pw_ts"><h4>密码规则：</h4>8-16个字符的英文字母、符号和数字组合</li>'+
                '<!--  <li><h4>密码强度:</h4><h5 class="pg_bar"><b id="" style="width:352px;"></b></h5></li>-->'+
                '<li><h4>再次输入密码:</h4><span><input id="passagain" to="newKey2" formtype="simple" name="passagain" type="password"></span><i id="passagainNotice" class="ts"></i></li>'+
                '<div class="bankcard_confirm"><a>确&nbsp;&nbsp;认</a></div>'+
            '</ul>'+
            '</form>'+
            '<div class="clear"></div>'+
        '</div>')
		$(this.el).find("[formtype='simple']").each(function(){
			$(this).unbind("change").bind("change",function(){
				templateData[$(this).attr("to")]=$(this).val();
				})
			})
		$(this.el).find(".bankcard_confirm").unbind("click").bind("click",function(){
			if(templateData['newKey']==templateData['newKey2']){
				app.apis.resetKey(templateData,function(){
					alert("重置成功")
					},function(){
						alert("重置失败")
						})
				}else{
					alert("再次输入密码不正确")
					}
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*后台部分************************************************************************************/
/*管理员管理*/
app.views.adminManage = function(){return {
	el:".right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#adminManage").addClass('hover');
		if(app.objs.user.get()){
		function templateFn(state,data){
			
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
		templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.editAdmin(templateData,function(){
				alert("修改成功");
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})
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
			function addTemplateFn(){
				var templateData={
					id: app.fns.uuid(),
					userName: "",
					type:2
				};
				var templateDom=$('<div class="templateTable">'+
									'<div class="templatePoint">'+
									'<div class="templatePointLeft">用户名</div>'+
									'<div class="templatePointRight"><input to="userName" formtype="simple"></div>'+
									'<div class="clear"></div>'+
									'</div>'+
									'<div class="templateButton"><div class="templateSend">创建</div></div>'+
								'</div>')
				templateDom.find("[formtype='simple']").each(function(){
					$(this).unbind("change").bind("change",function(){
						templateData[$(this).attr("to")]=$(this).val();
						})
					})
				templateDom.find(".templateSend").unbind("click").bind("click",function(){
					app.apis.addAdmin(templateData,function(){
						alert("创建成功")
						window.location.reload();
						},function(){
							alert("创建失败")
							})
					})
				templateDom.appendTo($("#popMain"));
				}
			var openfn=function(){new addTemplateFn()};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			app.apis.removeAdmin(target.parents("tr").data("result").id,function(){
				alert("删除成功")
				window.location.reload();
				},function(){
					alert("删除失败")
					})
			
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
                    '<td>用户名</td>'+
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
		if(this.data){
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
			}

		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
		
	}
	}}
/*公告管理*/
app.views.announcementManage = function(){return {
	el:".right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#announcementManage").addClass('hover');
		if(app.objs.user.get()){
		
		function templateFn(state,data){
			var openTime=new Date().getTime();
			var templateData={
				id: app.fns.uuid(),
				end: new Date().getTime()+24*3600*1000,
				start: new Date().getTime(),
				message: "",
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
		templateDom.find(".templateSend").unbind("click").bind("click",function(){
			app.apis.addannouncement(templateData,function(){
				alert("添加成功")
				window.location.reload();
				},function(){
					alert("添加失败")
					})
			})
		templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.editannouncement(templateData,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})
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
			app.apis.removeannouncement(target.parents("tr").data("result").id,function(){
				alert("删除成功")
				window.location.reload();
				},function(){
					alert("删除失败")
					})
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
		if(this.data){
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
			}
        
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*客户管理*/
app.views.clientManage = function(){return {
	el:".right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#clientManage").addClass('hover');
		if(app.objs.user.get()){
		
		function templateFn(state,data){
			var templateData={
				id: app.fns.uuid(),
				userName: app.objs.user.get().userName,
				image: "",
				name: "",
				company: "",
				job: "",
				contacts: "",
				contactsPhone: "",
				email: "",
				phone: "",
				place: "",
				type: 1,
				university: "",
				record: ""
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
		templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.editClient(templateData,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
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
			app.apis.removeClient(target.parents("tr").data("result").id,function(){
				alert("删除成功")
				window.location.reload();
				},function(){
					alert("删除失败")
					})
			}
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		$(this.el).html('<div class="right_table">'+
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
		if(this.data){
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
			}
        
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*客户详情*/
app.views.clientDetail = function(){return {
	el:".right",
	data:{},
	render:function(){}
	}}
/*产品管理*/
app.views.procedureManage = function(){return {
	el:".right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#procedureManage").addClass('hover');
		if(app.objs.user.get()){
		
		var openTime=new Date().getTime();
		function templateFn(state,data){
			var templateData={
				UnitPrice: 0,
				area: 0,
				buildTime: new Date().getTime()+24*3600*1000,
				copy: 0,
				costPrice: 0,
				costUnitPrice: 0,
				decorate: "0",
				developer: "",
				haveLease: "0",
				id: app.fns.uuid(),
				image:[],
				imageH:[],/*户型图*/
				imageA:[],/*区位图*/
				maxTime: 0,
				maxUnit: 1,
				minUnit: 0,
				money: 0,
				more: 0,
				payed: 0,
				payedCount: 0,
				place: "",
				price: 0,
				propertyType: "0",
				rightType: "0",
				stratTime: new Date().getTime(),
				subhead: "",
				tax: 0,
				title: " ",
				yearReturn: "",
				"more":0,
				"dsc":"",//简介
				"low":"",//法律
				"action":"",//房价走势
				"manager":"",//资产管理
				"review":"",//资产评估
				"suggest":"",//综合建议
				"change":0//债券转移费用
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
				'<div class="templatePointLeft">实景图片</div>'+
				'<div class="templatePointRight">'+
					'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="mulipic">'+
						'<label for="mulipic'+openTime+'_to_image">'+
							'<div style="background-image:url(images/addfile.png); width:80px;height:80px" class="addFile"></div>'+
							'<input type="file" id="mulipic'+openTime+'_to_image" to="image" name="upfile" style="width:0px;height:0px;"></input>'+
						'</label>'+
					'</form>'+
					'<div class="templateFrame" formtype="picFrame" to="image"></div>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">户型图</div>'+
				'<div class="templatePointRight">'+
					'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="mulipic">'+
						'<label for="mulipic'+openTime+'_to_imageH">'+
							'<div class="addFile" style="background-image:url(images/addfile.png);width:80px;height:80px"></div>'+
							'<input type="file" id="mulipic'+openTime+'_to_imageH" to="imageH" name="upfile" style="width:0px;height:0px;"></input>'+
						'</label>'+
					'</form>'+
					'<div class="templateFrame" formtype="picFrame" to="imageH"></div>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">区位图</div>'+
				'<div class="templatePointRight">'+
					'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="mulipic">'+
						'<label for="mulipic'+openTime+'_to_imageA">'+
							'<div class="addFile" style="background-image:url(images/addfile.png);width:80px;height:80px"></div>'+
							'<input type="file" id="mulipic'+openTime+'_to_imageA" to="imageA" name="upfile" style="width:0px;height:0px;"></input>'+
						'</label>'+
					'</form>'+
					'<div class="templateFrame" formtype="picFrame" to="imageA"></div>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">众筹价格</div>'+
				'<div class="templatePointRight"><input to="price" formtype="number"/>&nbsp;&nbsp;元</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">项目原价</div>'+
				'<div class="templatePointRight"><input to="costPrice" formtype="number"/>&nbsp;&nbsp;元</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">众筹金额</div>'+
				'<div class="templatePointRight"><input to="money" formtype="number"/>&nbsp;&nbsp;元</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			//'<div class="templatePoint">'+
				//'<div class="templatePointLeft">已筹金额</div>'+
				//'<div class="templatePointRight"><input to="payed" formtype="number"/></div>'+
				//'<div class="clear"></div>'+
			//'</div>'+
			//'<div class="templatePoint">'+
				//'<div class="templatePointLeft">众筹笔数</div>'+
				//'<div class="templatePointRight"><input to="payedCount" formtype="number"/></div>'+
				//'<div class="clear"></div>'+
			//'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">众筹份数</div>'+
				'<div class="templatePointRight"><input to="copy" formtype="number"/>&nbsp;&nbsp;份</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">持有限期</div>'+
				'<div class="templatePointRight"><input to="maxTime" formtype="number"/>&nbsp;&nbsp;个月</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">最小单位</div>'+
				'<div class="templatePointRight"><input to="minUnit" formtype="number"/>&nbsp;&nbsp;元</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			//'<div class="templatePoint">'+
				//'<div class="templatePointLeft">最大单位</div>'+
				//'<div class="templatePointRight"><input to="maxUnit" formtype="number"/></div>'+
				//'<div class="clear"></div>'+
			//'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">税费预算</div>'+
				'<div class="templatePointRight"><input to="tax" formtype="number"/>&nbsp;&nbsp;元</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">面积</div>'+
				'<div class="templatePointRight"><input to="area" formtype="number"/>&nbsp;&nbsp;平米</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">原单价</div>'+
				'<div class="templatePointRight"><input to="costUnitPrice" formtype="number"/>&nbsp;&nbsp;元&frasl;平米</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">单价</div>'+
				'<div class="templatePointRight"><input to="UnitPrice" formtype="number"/>&nbsp;&nbsp;元&frasl;平米</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">债权转移费用</div>'+
				'<div class="templatePointRight"><input to="change" formtype="number"/>&nbsp;&nbsp;%</div>'+
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
				'<div class="templatePointRight"><input to="yearReturn" formtype="number"/>&nbsp;&nbsp;%</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">增值</div>'+
				'<div class="templatePointRight"><input to="more" formtype="number"/>&nbsp;&nbsp;%</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">简介</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_dsc" to="dsc" formtype="html" type="text/plain" style="width:570px;height:250px;"></script></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">相关法律</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_low" to="low" formtype="html" type="text/plain" style="width:570px;height:250px;"></script></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">房价走势</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_action" to="action" formtype="html" type="text/plain" style="width:570px;height:250px;"></script></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">资产管理</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_manager" to="manager" formtype="html" type="text/plain" style="width:570px;height:250px;"></script></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">资产评估</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_review" to="review" formtype="html" type="text/plain" style="width:570px;height:250px;"></script></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">综合建议</div>'+
				'<div class="templatePointRight"><script id="editor'+openTime+'_to_suggest" to="suggest" formtype="html" type="text/plain" style="width:570px;height:250px;"></script></div>'+
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
		templateDom.find(".templateSend").unbind("click").bind("click",function(){
			app.apis.addProduct(templateData,function(){
				alert("添加成功")
				window.location.reload();
				},function(){
					alert("添加失败")
					})
			})
		templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.editProduct(templateData,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})

			function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.image,function(i,n){
			var newpoint=$('<div class="templateMuliPic">'+
				'<img src="'+n+'"/>'+
				'<div class="templateMuliPicRemove" num="'+i+'"></div>'+
			'</div>').appendTo(templateDom.find("[formtype='picFrame'][to='image']"))
			})
			$.each(templateData.imageH,function(i,n){
			var newpoint=$('<div class="templateMuliPic">'+
				'<img src="'+n+'"/>'+
				'<div class="templateMuliPicRemove" num="'+i+'"></div>'+
			'</div>').appendTo(templateDom.find("[formtype='picFrame'][to='imageH']"))
			})
			$.each(templateData.imageA,function(i,n){
			var newpoint=$('<div class="templateMuliPic">'+
				'<img src="'+n+'"/>'+
				'<div class="templateMuliPicRemove" num="'+i+'"></div>'+
			'</div>').appendTo(templateDom.find("[formtype='picFrame'][to='imageA']"))
			})
			$('<div class="clear"></div>').appendTo(templateDom.find(".templateFrame"))
			}
		templateDom.find("[formtype='mulipic']").each(function(){
				$(this).ajaxForm({
			success:function(data){
				
			}
		});
				$(this).find("input").unbind("change").bind("change",function(){
					var to=$(this).attr("to");
					$(this).parents("form").ajaxSubmit({
							success:function(data){
								var data=JSON.parse(data);
								if(data.state=="SUCCESS"){
			
									templateData[to].push(data.url);
									reflash();
									};
						}
					})
				});
			
	
				
			});
		
		templateDom.appendTo($("#popMain"));
		reflash();
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
		function add(target){
			var openfn=function(){new templateFn(1,null)};
			popOpen(openfn,function(){});
			}
		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function remove(target){
			app.apis.removeProduct(target.parents("tr").data("result").id,function(){
				alert("删除成功")
				window.location.reload();
				},function(){
					alert("删除失败")
					})
			
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
		if(this.data){
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
			}
		
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*招聘管理 公司资料管理*/
app.views.recruitManage = function(){return {
	el:".right",
	type:"",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#recruitManage").addClass('hover');
		if(app.objs.user.get()){
		var that=this;
		
		function templateFn(state,data){
			var openTime=new Date().getTime();
			var templateData={
				end: new Date().getTime()+24*3600*1000,
				id: app.fns.uuid(),
				message: "",
				start: new Date().getTime(),
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
				'<div class="templatePointLeft">描述</div>'+
				'<div class="templatePointRight" style="padding-left:10px;width:577px;"><script id="editor'+openTime+'_to_message" to="message" formtype="html" type="text/plain" style="height:250px;"></script></div>'+
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

				templateDom.find(".templateSend").unbind("click").bind("click",function(){
			
			app.apis.addrecruit(templateData,function(){
				alert("创建成功")
				window.location.reload();
				},function(){
					alert("创建失败")
					})
			})
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editrecruit(templateData,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
				})
				

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

				app.apis.removerecruit(target.parents("tr").data("result").id,function(){
				alert("删除成功")
				window.location.reload();
				},function(){
					alert("删除失败")
					})
			

			
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
		if(this.data){$.each(this.data,function(i,n){
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
        });}
        
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
app.views.companyManage = function(){return {
	el:".right",
	type:"",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#companyManage").addClass('hover');
		if(app.objs.user.get()){
		var that=this;
	
		function templateFn(state,data){
			var openTime=new Date().getTime();
			var templateData={
				end: new Date().getTime()+24*3600*1000,
				id: app.fns.uuid(),
				message: "",
				start: new Date().getTime(),
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


				templateDom.find(".templateSend").unbind("click").bind("click",function(){
			
			app.apis.addcompany(templateData,function(){
				alert("创建成功")
				window.location.reload();
				},function(){
					alert("创建失败")
					})
			})
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editcompany(templateData,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
				})
				
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

			
				app.apis.removecompany(target.parents("tr").data("result").id,function(){
				alert("删除成功")
				window.location.reload();
				},function(){
					alert("删除失败")
					})
			
			
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
		if(this.data){$.each(this.data,function(i,n){
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
        });}
        
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
	}}
/*宣传管理*/
app.views.promotionManage = function(){return {
	el:".right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#promotionManage").addClass('hover');
		if(app.objs.user.get()){
		
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
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editpromotion(templateData,function(){
					alert("修改成功");
					window.location.reload();
					},function(){
						alert("修改失败")
						})
				})
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
		var templateDom=$('<div class="templateTable CJWT">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templatePoint CJWTTitle">'+
				'<div class="templateListLeft">标题</div>'+
				'<div class="templateListCenter">数值</div>'+
				'<div class="templateListRight">删除</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateFrame CJWTtemplateFrame"></div>'+
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
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editpromotion(templateData,function(){
					alert("修改成功");
					window.location.reload();
					},function(){
						alert("修改失败")
						})
				})
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
		var templateDom=$('<div class="templateTable CJWT_0">'+
			'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="mulipic">'+
				'<label for="mulipic'+openTime+'_to_images">'+
					'<div class="addFile" style="background-image:url(images/addfile.png);width:80px;height:80px"></div>'+
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
			
			}
		});
				$(this).find("input").unbind("change").bind("change",function(){
					var to=$(this).attr("to");
					$(this).parents("form").ajaxSubmit({
							success:function(data){
								var data=JSON.parse(data);
								if(data.state=="SUCCESS"){
							
									templateData[to].push(data.url);
									reflash();
									};
						}
					})
				});
			
	
				
			});
			reflash();
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editpromotion(templateData,function(){
					alert("修改成功");
					window.location.reload();
					},function(){
						alert("修改失败")
						})
				})
			}
		/**********************************************/
		templateArry.D=function(state,data){
			var openTime=new Date().getTime();
			var templateData={id:"008",
					name:"常见问题",
					dsc:"不说",
					data:[],group:"FAQS"};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable CJWT">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templatePoint CJWTTitle">'+
				'<div class="templateListLeft">标题</div>'+
				'<div class="templateListCenter">描述</div>'+
				'<div class="templateListRight">删除</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateFrame CJWTtemplateFrame"></div>'+
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
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editpromotion(templateData,function(){
					alert("修改成功");
					window.location.reload();
					},function(){
						alert("修改失败")
						})
				})
			}
		/**********************************************/
		templateArry.E=function(state,data){
			var openTime=new Date().getTime();
			var templateData={id:"010",
					name:"风险控制小组",
					dsc:"不说",
					data:[],group:"team"
					};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable CJWT_0 FLXZ">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templateFrame FLXZtemplateFrame"></div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+

		'</div>')
		
		templateDom.appendTo($("#popMain"));
		function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.data,function(i,n){
				var creatTime=new Date().getTime();
			var newpoint=$('<div class="templatePoint">'+
				'<div class="templatePointFormLeft">头像</div>'+
				'<div class="templatePointFormRight">'+
				'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="singlepic">'+
				'<label for="singlepic'+creatTime+'_to_images">'+
					'<div class="addFile singleHead" style="background-image:url('+n.image[0]+');width:80px;height:80px"></div>'+
					'<input type="file" id="singlepic'+creatTime+'_to_images" to="image" name="upfile" style="width:0px;height:0px;"></input>'+
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
				'<div class="templatePointFormRemove" to="data" formtype="remove" num="'+i+'"></div>'+
				'<div class="clear"></div>'+
			'</div>').appendTo(templateDom.find(".templateFrame"))
			newpoint.data("result",n);
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
					templateData[$(this).attr("to")].push({"id":"036","name":"暂未填写","image":["images/addfile.png"],"dsc":"暂未填写","job":"暂未填写",group:"009"});
					reflash();
					})
				})
			reflash();
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editpromotion(templateData,function(){
					alert("修改成功");
					window.location.reload();
					},function(){
						alert("修改失败")
						})
				})
			}
		/**********************************************/
		templateArry.F=function(state,data){
			var openTime=new Date().getTime();
			var templateData={id:"011",
					name:"底部专栏",
					dsc:"不说",
					data:[],group:"team"
					};
			if(data){
				templateData=data;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable CJWT_0 FLXZ">'+
			'<div class="addButton" formtype="add" to="data"><img src="images/add.png"/> 添加</div>'+
			'<div class="clear"></div>'+
			'<div class="templateFrame FLXZtemplateFrame"></div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>')
		
		templateDom.appendTo($("#popMain"));
		function reflash(){
			templateDom.find(".templateFrame").empty();
			$.each(templateData.data,function(i,n){
				var creatTime=new Date().getTime();
			var newpoint=$('<div class="templatePoint">'+
				'<div class="templatePointFormLeft">头像</div>'+
				'<div class="templatePointFormRight">'+
				'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="singlepic">'+
				'<label for="singlepic'+creatTime+'_to_images">'+
					'<div class="addFile singleHead" style="background-image:url('+n.image[0]+');width:80px;height:80px"></div>'+
					'<input type="file" id="singlepic'+creatTime+'_to_images" to="image" name="upfile" style="width:0px;height:0px;"></input>'+
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
				'<div class="templatePointFormRemove" to="data" formtype="remove" num="'+i+'"></div>'+
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
					templateData[$(this).attr("to")].push({"id":"036","name":"暂未填写","image":["images/addfile.png"],"dsc":"暂未填写","job":"暂未填写",group:"009"});
					reflash();
					})
				})
			reflash();
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
				app.apis.editpromotion(templateData,function(){
					alert("修改成功");
					window.location.reload();
					},function(){
						alert("修改失败")
						})
				})
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
		if(this.data){
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
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
		
		
	}
	}}

/*红包管理*/
app.views.redPacketManage = function(){return {
	el:".right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#redPacketManage").addClass('hover');
		if(app.objs.user.get()){
		
		function templateFn(state,data){
			var templateData={
				end: new Date().getTime()+24*3600*1000,
				id: app.fns.uuid(),
				money: 0,
				strat: new Date().getTime(),
				type: "0",
				userId: app.objs.user.get().id
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
		templateDom.find(".templateSend").unbind("click").bind("click",function(){
			app.apis.addRedPacket(templateData,function(){
				alert("创建成功")
				window.location.reload();
				},function(){
					alert("创建失败")
					})
			})
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
                  '</tr>'+
                '</thead>'+
            '</table>'+
        '</div>');
		if(this.data){
			  $.each(this.data,function(i,n){
        	var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.userId+'</td>'+
                    '<td>'+n.money+'</td>'+
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
			}
      
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
}};

/*配置管理*/
app.views.configManage = function(){return {
	el:".right",
	data:{},
	render:function(){
		$("#tabs_menu").find("li").removeClass('hover');
		$("#tabs_menu li#configManage").addClass('hover');
		if(app.objs.user.get()){
		
		function templateFn(state,data){
			var templateData={
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
	      conText_0:"为全国首家专业房地产众筹平台",
	      conText_1:"致力于通过互联网金融的创新",
	      conText_2:"推动传统房地产投融资模式的变革和创新"
         },
		 logo:"http://",
		 more:"1",
		 change:"1"
				};
			if(data){
				templateData=data.footerInfo;
				}
		var templateState="disable";
		if(state){
			templateState="";
			};
		var buttonArry=['','<div class="templateSend">创建</div>','<div class="templateEdit">确定</div>']//0只读 1创建 2修改
		var templateDom=$('<div class="templateTable">'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">标题</div>'+
				'<div class="templatePointRight"><input to="titleText" formtype="simple" value="'+templateData.titleText+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">副标</div>'+
				'<div class="templatePointRight"><input to="slogan" formtype="simple" value="'+templateData.slogan+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">联系电话</div>'+
				'<div class="templatePointRight"><input to="mobile" formtype="simple" value="'+templateData.mobile+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">传真</div>'+
				'<div class="templatePointRight"><input to="fax" formtype="simple" value="'+templateData.fax+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">约谈时间</div>'+
				'<div class="templatePointRight"><input to="time" formtype="simple" value="'+templateData.time+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">固话</div>'+
				'<div class="templatePointRight"><input to="number" formtype="simple" value="'+templateData.number+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">公司名</div>'+
				'<div class="templatePointRight"><input to="companyName" formtype="simple" value="'+templateData.companyName+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">商务合作</div>'+
				'<div class="templatePointRight"><input to="cooperationEmail" formtype="simple" value="'+templateData.cooperationEmail+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">人才招聘</div>'+
				'<div class="templatePointRight"><input to="recruitmentEmail" formtype="simple" value="'+templateData.recruitmentEmail+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">地址</div>'+
				'<div class="templatePointRight"><input to="address" formtype="simple"  value="'+templateData.address+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">邮编</div>'+
				'<div class="templatePointRight"><input to="zip_code" formtype="simple"  value="'+templateData["zip_code"]+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">微信</div>'+
				'<div class="templatePointRight"><input to="wx" formtype="simple"  value="'+templateData.wx+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">微博</div>'+
				'<div class="templatePointRight"><input to="wb" formtype="simple"  value="'+templateData.wb+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">版权</div>'+
				'<div class="templatePointRight"><input to="copRight" formtype="simple" value="'+templateData.copyRight+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templatePoint">'+
				'<div class="templatePointLeft">备案</div>'+
				'<div class="templatePointRight"><input to="record" formtype="simple" value="'+templateData.record+'"/></div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>');
		templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.setConfig(data,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})
		
		templateDom.find("[formtype='simple']").each(
			function(){
				$(this).unbind("change").bind("change",function(){
					templateData[$(this).attr("to")]=$(this).val();
					})
			
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

		function edit(target){
			
			var openfn=function(){new templateFn(2,target.parents("tr").data("result"))};
			popOpen(openfn,function(){});
			};
		function show(target){
			var openfn=function(){new templateFn(0,target.data("result"))};
			popOpen(openfn,function(){});
			}
		function logoEdit(state,data){
			var openTime=new Date().getTime();
			var templateData={};
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
				'<div class="templatePointFormLeft">头像</div>'+
				'<div class="templatePointFormRight">'+
				'<form action="ueditor/php/controller.php?action=uploadimage" method="post" enctype="multipart/form-data" formtype="singlepic">'+
				'<label for="singlepic'+openTime+'_to_images">'+
					'<div class="addFile" style="background-image:url('+templateData.logo+');width:276px;height:89px;background-size:276px 89px;background-repeat:no-repeat;"></div>'+
					'<input type="file" id="singlepic'+openTime+'_to_images" to="logo" name="upfile" style="width:0px;height:0px;"></input>'+
				'</label>'+
			'</form>'+
				'</div>'+
				'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>');
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.setConfig(data,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})
			templateDom.appendTo($("#popMain"));
					$("#popMain").find("[formtype='singlepic']").each(function(){
				$(this).ajaxForm({
			success:function(data){
				
			}
		});
				$(this).find("input").unbind("change").bind("change",function(){
					var that=this;
					var to=$(this).attr("to");
					var targetData=templateData
					$(this).parents("form").ajaxSubmit({
							success:function(data){
								var data=JSON.parse(data);
								if(data.state=="SUCCESS"){
									targetData[to]=[data.url];
									$(that).parents("label").find("div").css("background-image","url("+data.url+")")
									};
						}
					})
				});
			
	
				
			});
			}
		function changeEdit(state,data){
			var templateData={};
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
				'<div class="templatePointLeft">是否开启债权转移</div>'+
				'<div class="templatePointRight">'+
					'<select to="change">'+
						'<option value="0">否</option>'+
						'<option value="1">是</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>');
			templateDom.appendTo($("#popMain"));
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.setConfig(data,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})
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
			}
		function moreEdit(state,data){
			var templateData={};
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
				'<div class="templatePointLeft">是否显示增值</div>'+
				'<div class="templatePointRight">'+
					'<select to="more">'+
						'<option value="0">否</option>'+
						'<option value="1">是</option>'+
					'</select>'+
				'</div>'+
				'<div class="clear"></div>'+
			'</div>'+
			'<div class="templateButton">'+buttonArry[state]+'</div>'+
		'</div>');
			templateDom.appendTo($("#popMain"));
			templateDom.find(".templateEdit").unbind("click").bind("click",function(){
			app.apis.setConfig(data,function(){
				alert("修改成功")
				window.location.reload();
				},function(){
					alert("修改失败")
					})
			})
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
			}
		$(this.el).html('<div class="clear"></div>'+
			'<div class="right_table">'+
            '<table id="tableconfig" width="100%" border="0">'+
                '<thead>'+
                  '<tr>'+
                    '<td width="5%"></td>'+
                    '<td>名称</td>'+
                    '<td>描述</td>'+
                    '<td width="5%">修改</td>'+
                  '</tr>'+
                '</thead>'+
				'<tbody>'+
				   '<tr id="logoPoint">'+
                    '<td width="5%"></td>'+
                    '<td>logo</td>'+
                    '<td>网站左上方的logo</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                  '</tr>'+
				  '<tr id="changePoint">'+
                    '<td width="5%"></td>'+
                    '<td>债权转让</td>'+
                    '<td>是否开启债权转让</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                  '</tr>'+
				  '<tr id=morePoint>'+
                    '<td width="5%"></td>'+
                    '<td>增值</td>'+
                    '<td>是否显示增值</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                  '</tr>'+
				  '<tr id="footPoint">'+
                    '<td width="5%"></td>'+
                    '<td>脚部</td>'+
                    '<td>配置脚部出现的内容</td>'+
                    '<td width="5%"><div class="tableButton edit"></div></td>'+
                  '</tr>'+
				'</tbody>'+
            '</table>'+
        '</div>');
		var that=this;
		$(this.el).find("#logoPoint").unbind("click").bind("click",function(){
			var openfn=function(){new logoEdit(0,that.data)};
			popOpen(openfn,function(){});
			})
		$(this.el).find("#logoPoint .edit").unbind("click").bind("click",function(e){
			e.stopPropagation();
			var openfn=function(){new logoEdit(2,that.data)};
			popOpen(openfn,function(){});
			})
		$(this.el).find("#changePoint").unbind("click").bind("click",function(){
			var openfn=function(){new changeEdit(0,that.data)};
			popOpen(openfn,function(){});
			})
		$(this.el).find("#changePoint .edit").unbind("click").bind("click",function(e){
			e.stopPropagation();
			var openfn=function(){new changeEdit(2,that.data)};
			popOpen(openfn,function(){});
			})
		$(this.el).find("#morePoint").unbind("click").bind("click",function(){
			var openfn=function(){new moreEdit(0,that.data)};
			popOpen(openfn,function(){});
			})
		$(this.el).find("#morePoint .edit").unbind("click").bind("click",function(e){
			e.stopPropagation();
			var openfn=function(){new moreEdit(2,that.data)};
			popOpen(openfn,function(){});
			})
		$(this.el).find("#footPoint").unbind("click").bind("click",function(){
			var openfn=function(){new templateFn(0,that.data)};
			popOpen(openfn,function(){});
			})
		$(this.el).find("#footPoint .edit").unbind("click").bind("click",function(e){
			e.stopPropagation();
			var openfn=function(){new templateFn(2,that.data)};
			popOpen(openfn,function(){});
			})
		if(this.data){
			  $.each(this.data,function(i,n){
        	var newPoint=$('<tr>'+
                    '<td width="5%"></td>'+
                    '<td>'+n.id+'</td>'+
                    '<td>'+n.userId+'</td>'+
                    '<td>'+n.money+'</td>'+
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
			}
      
		$(this.el).find(".addButton").unbind("click").bind("click",function(e){
			add($(this));
			})
		}else{
			alert("请先登录")
			window.location.hash="login"
		}
		
	}
}};
