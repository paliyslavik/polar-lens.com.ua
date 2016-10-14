$(document).ready(function(){
	$("#scrollmenu").on("click","a", function (event) {
		//відмінна стандартного переходу
		event.preventDefault();

		//отримуємо ідентифікатор блоку з атримуту href
		var id  = $(this).attr('href'),

		//визначаю висоту документу
			top = $(id).offset().top;
		
		//анімацію переходу - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
