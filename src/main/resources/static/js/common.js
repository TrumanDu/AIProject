$(function(){
	$("#queryNo").keypress(function (e) {
	    if (e.which == 13) {
	    	search()
	    }
	});
});

function search() {
	$("span").remove(".detailData");
	var queryNo = $("#queryNo").val();
	if (queryNo == undefined || $.trim(queryNo) == '') {
		swal("请输入你的客户信息!", {
			buttons : false,
			icon : "error",
			timer : 2500,
		});
		$("#map").show();
		$("#detail").hide();
		return;
	}
	$("#map").show();
	$("#detail").hide();
	queryNo = $.trim(queryNo);
	$.ajax({
		type : "post",
		url : webRoot + "/ammeter",
		contentType : "application/json",
		dataType : "json",
		data : JSON.stringify({
			"queryNo" : queryNo
		}),
		success : function(ammeter) {
			if (ammeter != null && ammeter.id != undefined) {
				$("#queryNo").val("");
				$("#map").hide();
				if(ammeter.manager=='王大秦'){
					selectArea(1);
				}else if(ammeter.manager=='刘坤'){
					selectArea(2);
				}else if(ammeter.manager=='杨玉荣'){
					selectArea(3);
				}else if(ammeter.manager=='华波'){
					selectArea(7);
				}else if(ammeter.manager=='王春明'){
					selectArea(10);
				}else if(ammeter.manager=='付哲'){
					selectArea(4);
				}else if(ammeter.manager=='马春杰'){
					selectArea(8);
				}else if(ammeter.manager=='胡永峰'){
					selectArea(9);
				}else if(ammeter.manager=='朱磊'){
					selectArea(6);
				}else{
					selectArea(5);
				}
				
				
				var du = parseInt((ammeter.julyMonth+ammeter.augMonth+ammeter.sepMonth)/3);
				var detailName = "detail1"
				if(du<=90){
					detailName = "detail1"
				}else if(91<=du&&du<180){
					detailName = "detail2"
				}else if(180<=du&&du<360){
					detailName = "detail3"
				}else if(360<=du&&du<520){
					detailName = "detail4"
				}else{
					detailName = "detail5"
				}
				$("#detail").attr("src", webRoot + "/images/"+detailName+".jpg");
				$("#detail").show();
				$("#detail").after(
						'<span class="detailData" style="position: absolute; top: 260px;left: 350px;">'
								+ ammeter.name + '</span> ').after(
						'<span class="detailData" style="position: absolute; top: 260px;left: 579px;">'
								+ ammeter.userNo + '</span> ').after(
						'<span class="detailData" style="position: absolute; top: 260px;left: 915px;">'
								+ ammeter.idCard + '</span> ')
				$("#detail").after(
						'<span class="detailData" id="julyMonth" style="position: absolute; top: 346px;left: 693px;font-size:x-large">'
								+ ammeter.julyMonth + ' kWh</span> ');

				$("#detail").after(
						'<span class="detailData" id="augMonth" style="position: absolute; top: 424px;left: 693px;font-size:x-large">'
								+ ammeter.augMonth + ' kWh</span> ');

				$("#detail").after(
						'<span class="detailData" id="sepMonth" style="position: absolute; top: 508px;left: 693px;font-size:x-large">'
								+ ammeter.sepMonth + ' kWh</span> ');
			} else {
				swal("你输入的的客户信息不存在!", {
					buttons : false,
					icon : "error",
					timer : 2500,
				});
			}
		},
		error : function(err) {
			swal("你输入的的客户信息不存在!", {
				buttons : false,
				icon : "error",
				timer : 2500,
			});
		}
	});
}

function selectArea(area) {
	$(".people").attr("src", webRoot + "/images/" + area + ".jpg");
}

function print(){
	/*$("#main").jqprint({
		debug : false, // 如果是true则可以显示iframe查看效果（iframe默认高和宽都很小，可以再源码中调大），默认是false
		importCSS : true, // true表示引进原来的页面的css，默认是true。（如果是true，先会找$("link[media=print]")，若没有会去找$("link")中的css文件）
		printContainer : true, // 表示如果原来选择的对象必须被纳入打印（注意：设置为false可能会打破你的CSS规则）。
	});*/
	//printJS('main', 'html',{css:'../style.css'});
	$(".people").hide();
	printJS({ printable: 'main', type: 'html', scanStyles: false, css: ['../style.css'] });
	$(".people").show();
}

function back(){
	$("span").remove(".detailData");
	$("#map").show();
	$("#detail").hide();
}
