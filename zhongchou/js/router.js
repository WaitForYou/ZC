/* JavaScript Document*/
app.objs.routeTable={
	/*公共部分***********************************************************************************/
	/*首页*/
	"index":{
			type:0,
			fn:function(data){
			/*获取宣传*/
			app.apis.getpromotion(data,function(promotion){
				/*获取公告*/
				app.apis.getannouncement(data,function(announcement){
					/*获取商品*/
					app.apis.getProduct(data,function(product){
						/*出页面*/
						console.log(promotion);
						console.log(announcement);
						console.log(product);
						app.objs.indexV.data = {
							promotion : promotion.index,
							announcement : announcement,
							product : product
							}
						app.objs.indexV.render();

						});
					});
				});
			}
		},
	/*众筹模式*/
	"mode":{
			type:0,
			fn:function(data){
			/*获取宣传*/
			app.apis.getpromotion(data,function(promotion){
				/*出页面*/
				app.objs.modeV.data = promotion.mode
				app.objs.modeV.render();
				});
			}
		},
	/*我要众筹*/
	"product":{
				type:0,
				fn:function(data){
				/*获取商品*/
						app.apis.getProduct(data,function(Product){
							/*出页面*/
							app.objs.productV.data = {
								noStart:[{"id":"001","title":"中筹第四期Ι","subhead":"中建公元一号","image":["images/1427941637448962.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"002","title":"中筹第三期Ι","subhead":"中华SOHO未来","image":["images/project_03a.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"003","title":"中筹第一期","subhead":"首创青旅岛尚","image":["images/project_pic01.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"004","title":"中筹第二期","subhead":"首创青旅岛尚","image":["images/project_pic02_over.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"}],
								on:[{"id":"001","title":"中筹第四期Ι","subhead":"中建公元一号","image":["images/1427941637448962.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"002","title":"中筹第三期Ι","subhead":"中华SOHO未来","image":["images/project_03a.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"003","title":"中筹第一期","subhead":"首创青旅岛尚","image":["images/project_pic01.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"004","title":"中筹第二期","subhead":"首创青旅岛尚","image":["images/project_pic02_over.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"}],
								end:[{"id":"001","title":"中筹第四期Ι","subhead":"中建公元一号","image":["images/1427941637448962.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"002","title":"中筹第三期Ι","subhead":"中华SOHO未来","image":["images/project_03a.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"003","title":"中筹第一期","subhead":"首创青旅岛尚","image":["images/project_pic01.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"},
				{"id":"004","title":"中筹第二期","subhead":"首创青旅岛尚","image":["images/project_pic02_over.jpg","http://"],"price":1000,"costPrice":2000,"money":20000,"payed":10000,"payedCount":10,"copy":20,"maxTime":10086,"minUnit":1,"maxUnit":200,"tax":8,"area":1223,"costUnitPrice":10,"UnitPrice":9,"developer":"你妹","place":"那个地址","decorate":"一般","propertyType":"公寓","stratTime":0,"buildTime":1024,"rightType":"商业用房","haveLease":0,"yearReturn":"15%以上"}]
							};
							app.objs.productV.render();
						});
				}
		},
	/*众筹步聚*/	
	"procedure":{
				type:0,
				fn:function(data){
				/*获取宣传*/
				app.apis.getpromotion(data,function(promotion){
					/*出页面*/
					app.objs.procedureV.data = promotion.procedure
					app.objs.procedureV.render();
					});
				}
		},
	/*常见问题*/
	"FAQS":{
			type:0,
			fn:function(data){
			/*获取宣传*/
			app.apis.getpromotion(data,function(promotion){
				/*出页面*/
				app.objs.FAQSV.data=promotion.FAQS
			app.objs.FAQSV.render();
				});
			}
		},
	/*关于我们*/
	"about":{
			type:0,
			fn:function(data){
			/*获取宣传*/
			app.apis.getpromotion(data,function(promotion){
				/*获取公告*/
				app.apis.getannouncement(data,function(announcement){
					/*获取招聘*/
					app.apis.getrecruit(data,function(recruit){
						/*获取公司信息*/
						app.apis.getcompany(data,function(company){
							/*出页面*/
						app.objs.aboutV.data={
							team:promotion.team,
							idea:promotion.idea,
							announcement:announcement,
							recruit:recruit,
							company:company
						}
						app.objs.aboutV.render();
						},function(){alert("获取公司信息失败")})
						});
					});
				});
			}
		},
	/*产品详情*/	
	"productDetail":{
					type:0,
					fn:function(data){
					/*出页面*/
					app.objs.productDetailV.render();
					}
		},
	/*公告详情*/
	"announcementDetail":{
					type:0,
					fn:function(data){
					/*出页面*/
					app.objs.announcementDetailV.render();
					}
		},
	/*登录*/
	"login":{
			type:0,
			fn:function(data){
			/*出页面*/
			app.objs.loginV.render();
	
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
	var container1 = document.getElementById("vCode1");
    var code1 = new vCode(container1);
    document.getElementById("code1").addEventListener("blur", function () {
        alert(code1.verify(document.getElementById("code1").value));
    }, false);
    $("#refreshBtn").click(function(){
     $("#vCode1").click();
    });
}).call(this);
		//onload = function () {

		}
		//	}
		},
	/*注册*/
	"register":{
				type:0,
				fn:function(data){
				/*出页面*/
				app.objs.registerV.render();
				}
		},
	/*用户空间***********************************************************************************/
	/*帐户*/
	"account":{
				type:1,
				fn:function(data){
				/*获取帐户信息*/
				app.apis.getAccount(data,function(Account){
					/*出页面*/
					app.objs.accountV.render();
					});
				}
		},
	/*充值*/
	"recharge":{
				type:1,
				fn:function(data){
				/*出页面*/
				app.objs.rechargeV.render();
				}
		},
	/*提现*/
	"paid":{
			type:1,
			fn:function(data){
			/*获取帐户信息*/
			app.apis.getAccount(data,function(Account){
				/*出页面*/
				app.objs.paidV.render();
				});
			}
		},
	/*银行卡*/
	"card":{
		type:1,
		fn:function(data){
		/*获取帐户信息*/
		app.apis.getAccount(data,function(Account){
			/*出页面*/
		app.objs.cardV.render();
		});
		}
		},
	/*资金记录*/
	"capitalDetail":{
					type:1,
					fn:function(data){
					/*获取帐户信息*/
					app.apis.getAccount(data,function(Account){
						/*出页面*/
					app.objs.capitalDetailV.render();
					});
					}
		},
	/*红包记录*/
	"redPacketDetail":{
						type:1,
						fn:function(data){
						/*获取红包*/
						app.apis.redPacketDetail(data,function(redPacket){
							app.objs.redPacketDetailV.data=redPacket;
							/*出页面*/
						app.objs.redPacketDetailV.render();
							});
						}
		},
	/*安全问题*/
	"safeQusetion":{
					type:1,
					fn:function(data){
					/*获取安全问题*/
					app.apis.getSafeQusetion(data,function(SafeQusetion){
						/*出页面*/
						app.objs.safeQusetionV.render();
						})
					}
		},
	/*邮箱验证*/
	"emailVerify":{
					type:1,
					fn:function(data){
					/*出页面*/
					app.objs.emailVerifyV.data=app.objs.user.set();
					app.objs.emailVerifyV.render();
					}
		},
	/*修改手机*/
	"setPhone":{
				type:1,
				fn:function(data){
				/*出页面*/
				app.objs.setPhoneV.data=app.objs.user.set();
				app.objs.setPhoneV.render();
				}
		},
	/*修改资料*/
	"setDetail":{
				type:1,
				fn:function(data){
				/*出页面*/
				app.objs.setDetailV.data=app.objs.user.set();
				app.objs.setDetailV.render();
				}
		},
	/*修改密码*/
	"setPassWord":{
					type:1,
					fn:function(data){
					/*出页面*/
					app.objs.setPassWord.render();
					}
		},
	/*后台管理***********************************************************************************************/
	/*管理员管理*/
	"adminManage":{
					type:2,
					fn:function(data){
					/*获取管理员*/
					app.apis.getAdmin(data,function(Admin){
						/*出页面*/
					app.objs.adminManageV.data=Admin;
					app.objs.adminManageV.render();
						});
					}
		},
	/*公告管理*/
	"announcementManage":{
						type:2,
						fn:function(data){
						/*获取公告*/
						app.apis.getannouncement(data,function(announcement){
							/*出页面*/
						app.objs.announcementManageV.data=announcement
						app.objs.announcementManageV.render()
							})
						}
		},
	/*客户管理*/
	"clientManage":{
					type:2,
					fn:function(data){
					/*获取客户资料*/
					app.apis.getClient(data,function(Client){
						/*出页面*/
						app.objs.clientManageV.data=Client;
						app.objs.clientManageV.render();
						})
					}
		},
	/*客户详情*/
	"clientDetail":{
				type:2,
				fn:function(data){
				/*出页面*/
				app.objs.clientDetailV.render();
				}
		},
	/*商品管理*/
	"procedureManage":{
					type:2,
					fn:function(data){
					/*获取商品信息*/
					app.apis.getProduct(data,function(Product){
						/*出页面*/
					app.objs.procedureManageV.data=Product;
					app.objs.procedureManageV.render();
						})
					}
		},
	/*招聘管理*/
	"recruitManage":{
		type:2,
		fn:function(data){
		/*获取招聘信息*/
		app.apis.getrecruit(data,function(recruit){
			/*出页面*/
			app.objs.recruitManageV.data=recruit;
			app.objs.recruitManageV.render();
			})
		}
	},
	/*公司资料管理*/
	"companyManage":{
		type:2,
		fn:function(data){
		/*获取公司资料*/
		app.apis.getcompany(data,function(company){
			/*出页面*/
			app.objs.recruitManageV.data=company;
			app.objs.recruitManageV.render();
			})	
		}
		},
	/*宣传管理*/
	"promotionManage":{
		type:2,
		fn:function(data){
		/*获取宣传信息*/
		app.apis.getpromotion(data,function(promotion){
			/*出页面*/
			app.objs.promotionManageV.data(promotion)
			app.objs.promotionManageV.render();
			})
		}
		},
	/*红包管理*/
	"redPacketManage":{
				type:2,
				fn:function(data){
				/*获取红包信息*/
				app.apis.getRedPacket(data,function(redPacket){
					/*出页面*/
					app.objs.redPacketManageV.data=redPacket;
					app.objs.redPacketManageV.render();
					})
				}
		}		
	}
app.routers=Backbone.Router.extend({
	"routes":{
		"*action":"changePage"
    },
	"changePage":function(){
		app.apis.config(null,function(data){
			app.objs.configData=data;
			var get=$_GET();
		if(!get.page){
			get.page = "index"
			}
			app.objs.headV.type = app.objs.routeTable[get.page].type;
			if(app.objs.headV.typeBefore!=app.objs.headV.type){
				app.objs.headV.typeBefore=app.objs.headV.type;
				app.objs.headV.render();
				}
			app.objs.middleV.type = app.objs.routeTable[get.page].type;
			if(app.objs.middleV.typeBefore!=app.objs.middleV.type){
				app.objs.middleV.typeBefore=app.objs.middleV.type;
				app.objs.middleV.render();
				}
		if(!app.objs.footV.done){
			app.objs.footV.done = true;
			app.objs.footV.render();
			}
		
		app.objs.routeTable[get.page].fn(get);
		}) 
		
		}
	});