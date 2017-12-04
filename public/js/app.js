$(document).ready(function () {

	const data = [
		{
			"id": 1,
			"manufacturer": "Mazda",
			"model": "Mazda3",
			"year": 2018,
			"price": 18095,
			"image": "https://s3.amazonaws.com/fef-final/images/2018-mazda3.jpg"
		},
		{
			"id": 2,
			"manufacturer": "Mazda",
			"model": "Mazda6",
			"year": 2017,
			"price": 21495,
			"image": "https://s3.amazonaws.com/fef-final/images/mazda6.jpg"
		},
		{
			"id": 3,
			"manufacturer": "Mazda",
			"model": "CX-9",
			"year": 2017,
			"price": 32130,
			"image": "https://s3.amazonaws.com/fef-final/images/cx-9.jpg"
		},
		{
			"id": 4,
			"manufacturer": "Mazda",
			"model": "Miata MX-5",
			"year": 2017,
			"price": 24915,
			"image": "https://s3.amazonaws.com/fef-final/images/miata-mx-5.jpg"
		},
		{
			"id": 5,
			"manufacturer": "Mazda",
			"model": "RX-8",
			"year": 2011,
			"price": 26795,
			"image": "https://s3.amazonaws.com/fef-final/images/rx-8.jpg"
		}
	];

  /*
    If we want to load it from a json file...
    $.getJSON('path/to/file.json', function (data) {
      // do the stuff below right here
    });
	*/

	let button = '<button id="btn-tax" class="btn btn-xs btn-success">Add Tax</button>'
	
	const template = `
		<div class="row">
			<div class="col-sm-6 col-md-offset-3">
				<div class="thumbnail">
					<img src="%image%" class="image-fluid" id="img-%manufacturer%" alt="%model%">
					<div class="caption">
						<h3>%year% %model%</h3>
						<p>$%price% ${button}</p>
					</div>
				</div>
			</div>
	</div>`;

	let html = [];
	for (let i = 0, l = data.length; i < l; i++) {
		const element = data[i];
		html.push(
			template
				.replace(/%manufacturer%/gi, element.manufacturer)
				.replace(/%model%/gi, element.model)
				.replace(/%year%/gi, element.year)
				.replace(/%price%/gi, element.price)
				.replace(/%image%/gi, element.image)
		);
		let tax = element.price * 0.08;
		console.log(tax);
	}
	
	$('#table').html(html.join(''));

	// Tax handler
	// $('body').on('click', '#btn-tax', function(e) {
	// 	e.preventDefault();
	// 	let $this = $(this);

	// 	let regPrice = $this.parent().find('.norm-price').text();
	// 	regPrice = parseInt(regPrice.replace(/\,/g,''));


	// 	let total = regPrice + tax;

	// 	if( ! $this.parent().find('.norm-price').parent().hasClass('w-tax') ) {
	// 			$this.parent().find('.norm-price').html($.number( total ));
	// 			$this.parent().addClass('w-tax');
	// 			$this.addClass('disabled');
	// 	}

	
	// Contact Form Chars Remaining
	$('#characterLeft').text('140 characters left');

	$('#message').keydown(function () {
		let max = 140;
		let len = $(this).val().length;
		if (len >= max) {
			$('#characterLeft').text('You have reached the limit');
			$('#characterLeft').addClass('red');
			$('#btnSubmit').addClass('disabled');
		}
		else {
			let ch = max - len;
			$('#characterLeft').text(ch + ' characters left');
			$('#btnSubmit').removeClass('disabled');
			$('#characterLeft').removeClass('red');
		}
	});

});