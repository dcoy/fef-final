$(document).ready(function () {


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

	const jsonData = [
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

	let taxButton = '<button id="tax-btn" class="btn btn-xs btn-success">Add Tax</button>'
	
	const createTable = function (data) {
		const template = `
 		<div class="row">
 			<div class="col-sm-6 col-md-offset-3">
 				<div class="thumbnail">
 					<img src="%image%" class="image-fluid" id="img-%manufacturer%" alt="%model%">
 					<div class="caption text-center">
 						<h3>%year% %model%</h3>
						 <p>$<span id="bfr-price">%price%</span></p>
						 <p>${taxButton}</p>
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
		}
		$('#table').html(html.join(''));
	};

	$("#tax-btn").on("click", function() {
		
	});

	createTable(jsonData);

	const filterAndCreate = function (term) {
		// Filter our data by selected model
		const filteredData = jsonData.filter((element) => {
			return element.model.toLowerCase() === term.toLowerCase();
		});
		// Rebuild the table
		createTable(filteredData);
	};

	// Extract "model" only field
	const models = jsonData.map((element) => element.model);

	// Setup autocomplete
	$("#search").autocomplete({
		selector: '#search',
		minChars: 2,
		source: function (term, suggest) {
			term = term.toLowerCase();
			const choices = models;
			let matches = [];
			for (i = 0; i < choices.length; i++)
				if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
			suggest(matches);
		},
		onSelect: function (e, term, item) {
			// Filter our data by selected model
			const filteredData = jsonData.filter((element) => {
				return element.model.toLowerCase() === term.toLowerCase();
			});
			// Rebuild the table
			createTable(filteredData);
		}
	});

	// If you want to filter results as you type, we will add the 'keyup' event to the input
	// then update the table properly
	$('#search').on('keyup', function (event) {
		// Filter our data by selected model
		const filteredData = jsonData.filter((element) => {
			// If includes the word, not if it is exactly the same word
			return element.model.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
		});
		// Rebuild the table
		createTable(filteredData);
	});

	// Price w/tax
		$("#tax-btn").on("click", function () {
			let taxPrice = $("#bfr-price").text();
			let intPrice = parseInt(taxPrice, 10);
			let tax = (intPrice * 0.08);
			let taxedPrice = intPrice + tax;

			$("#bfr-price").text(taxedPrice);
		});
});