var landing = {
	init: function() {
		this.formSubmit();
	}, 
	formSubmit: function () {
		$(".card__form").submit(function(event) {
			var size = $(this).find('select').val();

			console.log(size);

			if ( size !== undefined ) {
				$(this).find('input[name=comment]').val('Size: ' + size);
			}
		});
	}
}

$(document).ready(function() {
	landing.init();
});