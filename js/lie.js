$(function(){
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    $('#rock').load('./gotop.html');
    $(".biao .pen").click(function(){
		$(".biao").animate({"width":"100px",backgroundPositionX:"-1000px"},0,function(){
			$(".biao").animate({"width":"1100px",backgroundPositionX:"0px"},1300,"easeOutStrong");
		});
	})
})