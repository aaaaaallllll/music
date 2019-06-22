$(function(){
	$.ajax({
		url:"header.html",
		type:"get",
		success:function(html){
			$(html).replaceAll("#first");
			$(`<link rel="stylesheet" href="../css/header.css"/>`).appendTo("head");
		}
	})
})
$(function(){
	$.ajax({
		url:"footer.html",
		type:"get",
		success:function(html){
			$(html).replaceAll("#last");
			$(`<link rel="stylesheet" href="../css/footer.css"/>`).appendTo("head");
		}
	})
})