
var app = {
    // Application Constructor
    initialize: function() {
		if(!app.total){
			app.total=true;
			var chushi=setTimeout(function(){

			  //  app.objs.route=new app.routers();	
			    app.onDeviceReady();
               // debugger;
			},100);
		}
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      //  Backbone.history.start({pushState : true});
	  function hashparse(){
		  var hash=window.location.hash.replace("#","").split("/")
		  if(!hash[0]){
			  hash[0]="index"
			  }
			var dataObj={}
			$.each(hash,function(i,n){
				if(i==0){
					dataObj.page=n
					}else{
						var key=n.split(":")
						dataObj[key[0]]=key[1]
						}
				})
			app.apis.getConfig(null,function(data){
			console.log(data)
			app.objs.configData=data;

			app.objs.headV.type = app.objs.routeTable[dataObj.page].type;
			if(app.objs.headV.typeBefore!=app.objs.headV.type){
				app.objs.headV.typeBefore=app.objs.headV.type;
				app.objs.headV.render();
				}
			app.objs.middleV.type = app.objs.routeTable[dataObj.page].type;
			if(app.objs.middleV.typeBefore!=app.objs.middleV.type){
				app.objs.middleV.typeBefore=app.objs.middleV.type;
				app.objs.middleV.render();
				}
		if(!app.objs.footV.done){
			app.objs.footV.done = true;
			app.objs.footV.render();
			}
		
		app.objs.routeTable[dataObj.page].fn(dataObj);
		})
		  }
	  	window.onhashchange = function(event) {
			hashparse()
		};
		hashparse();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		$(".loading").hide();
        $("#deviceready").show();
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};
var resizeArry = {}
var scrollArry = {}
$(window).scroll(function(){
	if(scrollArry){
		var x=$(window).scrollLeft();
		var y=$(window).scrollTop();
		$.each(scrollArry,function(i,n){
			n(x,y);
			})
		}
	})
$(window).resize(function(){
	if(resizeArry){
		var w = $(window).width()
		var h = $(window).height()
		$.each(resizeArry,function(i,n){
			n(w,h);
			})
		}
	})

var $_GET = function(){
  var url = window.document.location.href.toString();
  var u = url.split("?");
  if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
		$.each(u,function(o,p){
			var j = p.split("=");
			get[j[0]] = j[1];
			})
        return get;
    }else{
       return {};
    }
};


app.apis={};
app.views={};
app.objs={};
app.fns={};
$.support.cors = true;


