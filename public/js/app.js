$(document).ready(function () {
	
  const data = [
	{
	  "id": 1,
	  "manufacturer": "ford",
	  "model": "focus",
		"year": 2005,
		"price": 1895,
	  "image": "https://www.coches.com/fotos_historicas/ford/Focus/high_ford_focus-2014_r16.jpg"
	},
	{
	  "id": 2,
	  "manufacturer": "ford",
	  "model": "mustang",
		"year": 1989,
		"price": 2000,
	  "image": "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2017/collections/New_Colors/tripleYellowTriCast/960x430/mustangw1_15_tripleYellowTriCast_env_1.jpg"
	},
	{
	  "id": 3,
	  "manufacturer": "tesla",
	  "model": "x",
		"year": 2016,
		"price": 79500,
	  "image": "https://www.tesla.com/tesla_theme/assets/img/modelx/slideshow/White_Cruise-1440.jpg?20170907"
	},
	{
	  "id": 4,
	  "manufacturer": "mclaren",
	  "model": "f1",
		"year": 2000,
		"price": 13750000,
	  "image": "https://i.kinja-img.com/gawker-media/image/upload/s--I9eesD5y--/c_scale,fl_progressive,q_80,w_800/rsbivrx7uqdawjhiq0vy.png"
	},
	{
	  "id": 5,
	  "manufacturer": "opel",
	  "model": "corsa",
		"year": 2008,
		"price": 4164,
	  "image": "https://www.coches.com/fotos_historicas/opel/Corsa-3-door-2014/high_opel_corsa-3-door-2014_r10.jpg"
	}
];
  
  /*
    If we want to load it from a json file...
    $.getJSON('path/to/file.json', function (data) {
      // do the stuff below right here
    });
  */
  const template = `
    <div class="row">
      <div class="col-md-2 manufacturer">%manufacturer%</div>
      <div class="col-md-3 model">%model%</div>
			<div class="col-md-2 year">%year%</div>
			<div class="col-md-2 price">%price%</div>
      <div class="col-md-2 image">
        <img src="%image%" class="img-fluid" alt="%manufacturer% %model%" />
      </div>
    </div>
  `;
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
	
});