/*毫秒转日期*/
app.fns.t2d=function(time){
		var date=new Date();
		date.setTime(time);
		return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
		};
/*************************************************************************************/
/*日期转毫秒*/
app.fns.d2t=function(date){
	  var time=new Date();
	  time.setFullYear(Number(date.split("/")[0]),(Number(date.split("/")[1])-1),Number(date.split("/")[2]));
	  return time.getTime();
};
/*************************************************************************************/
/*本地缓存*/
app.fns.storage=function(key,value,remove){
	if(key&&remove){
			if(localStorage["com_talk_www_"+key]){
				delete localStorage["com_talk_www_"+key];
				}
		}else if(key&&value){
			localStorage["com_talk_www_"+key]=JSON.stringify(value);
	}else if(key){
			if(localStorage["com_talk_www_"+key]){
				return JSON.parse(localStorage["com_talk_www_"+key]);
				}else{
					return false;
					};	
	};
};
/*************************************************************************************/
/*uuid*/
app.fns.uuid=function(){
	/*获取唯一id*/
	 return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return (v.toString(16)).toUpperCase();
    });
};
/*************************************************************************************/
/*终止冒泡*/
app.fns.stopBubble=function(e){
  /*一般用在鼠标或键盘事件上*/
  if(e && e.stopPropagation){
  /*W3C取消冒泡事件*/
  e.stopPropagation();
  }else{
  /*IE取消冒泡事件*/
  window.event.cancelBubble = true;
  };
  };
