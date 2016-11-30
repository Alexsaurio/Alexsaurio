$(document).ready(function(){

	var $div = $('div');

    for (var i = 1; i <=10 ; i++) {
		$div.append("<img"+" src="+"image/"+i+".jpg"+">");
	}

	$('img').hover(function(){
		$(this).addClass('hove');
	}, function(){
		$(this).removeClass('hove');
	});
})