<?php


/* *
 * 功能：连连支付WEB交易接口接口调试入口页面
 * 版本：1.0
 * 日期：2014-06-16
 * 说明：
 * 以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 */
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
	<title>连连支付WEB交易接口</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
*{
	margin:0;
	padding:0;
}
ul,ol{
	list-style:none;
}
.title{
    color: #ADADAD;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 16px 5px 10px;
}
.hidden{
	display:none;
}

.new-btn-login-sp{
	border:1px solid #D74C00;
	padding:1px;
	display:inline-block;
}

.new-btn-login{
    background-color: transparent;
    background-image: url("images/new-btn-fixed.png");
    border: medium none;
}
.new-btn-login{
    background-position: 0 -198px;
    width: 82px;
	color: #FFFFFF;
    font-weight: bold;
    height: 28px;
    line-height: 28px;
    padding: 0 10px 3px;
}
.new-btn-login:hover{
	background-position: 0 -167px;
	width: 82px;
	color: #FFFFFF;
    font-weight: bold;
    height: 28px;
    line-height: 28px;
    padding: 0 10px 3px;
}
.bank-list{
	overflow:hidden;
	margin-top:5px;
}
.bank-list li{
	float:left;
	width:153px;
	margin-bottom:5px;
}

#main{
	width:750px;
	margin:0 auto;
	font-size:14px;
	font-family:'宋体';
}
#logo{
	background-color: transparent;
    background-image: url("images/new-btn-fixed.png");
    border: medium none;
	background-position:0 0;
	width:166px;
	height:35px;
    float:left;
}
.red-star{
	color:#f00;
	width:10px;
	display:inline-block;
}
.null-star{
	color:#fff;
}
.content{
	margin-top:5px;
}

.content dt{
	width:160px;
	display:inline-block;
	text-align:right;
	float:left;
	
}
.content dd{
	margin-left:100px;
	margin-bottom:5px;
}
#foot{
	margin-top:10px;
}
.foot-ul li {
	text-align:center;
}
.note-help {
    color: #999999;
    font-size: 12px;
    line-height: 130%;
    padding-left: 3px;
}

.cashier-nav {
    font-size: 14px;
    margin: 15px 0 10px;
    text-align: left;
    height:30px;
    border-bottom:solid 2px #CFD2D7;
}
.cashier-nav ol li {
    float: left;
}
.cashier-nav li.current {
    color: #AB4400;
    font-weight: bold;
}
.cashier-nav li.last {
    clear:right;
}
.llpay_link {
    text-align:right;
}
.llpay_link a:link{
    text-decoration:none;
    color:#8D8D8D;
}
.llpay_link a:visited{
    text-decoration:none;
    color:#8D8D8D;
}
</style>
</head>
<body text=#000000 bgColor=#ffffff leftMargin=0 topMargin=4>

        <form name=llpayment action="webllpay/llpayapi.php" method=post target="_blank">
                      <!--商户用户唯一编号：必填-->  
                        <input size="30" name="user_id" value="22222222" />

                     <!--商户业务类型：必填  虚拟商品：101001 实物商品：109001 账户充值：108001-->
                        <input size="30" name="busi_partner" value="101001"/>

                    <!--商户唯一订单号：商户订单系统中唯一订单号，必填-->

                        <input size="30" name="no_order" value="20140416142004"/>

                      <!--交易金额：必填-->
                        <input size="30" name="money_order" value="0.1"/>
                    <!--商品名称：-->
                        <input size="30" name="name_goods" value="羽毛球"/>
                   <!--订单地址：-->
                        <input size="30" name="url_order" value=""/>
                   <!--订单描述：-->
                        <input size="30" name="info_order" value="用户13958069593购买羽毛球3桶"/>
                    <!--银行网银编号：-->
                        <input size="30" name="bank_code" value=""/>
                    <!--支付方式：-->
                        <input size="30" name="pay_type" value=""/>
                    <!--姓名：-->
                        <input size="30" name="acct_name" value=""/>
                   <!--分账信息数据：-->
                        <input size="30" name="shareing_data" value=""/>
                   <!--订单有效时间：分钟为单位，默认为10080分钟（7天）-->
                        <input size="30" name="valid_order" value="10080"/>

                            <button class="new-btn-login" type="submit" style="text-align:center;">确 认</button>
		</form>

</body>
</html>