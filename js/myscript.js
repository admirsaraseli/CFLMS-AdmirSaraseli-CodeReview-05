$(document).ready(function() {

	//convert Json file from string to object
	var movies = JSON.parse(factory);	

	//add json data to html
	function addData(movies) {
		for (let i = 0; i < movies.length; i++){

			let movie = 
			`<div class="movie_box">
				<img src="${movies[i].image}">
				<div class="movie_data">
					<h1>${movies[i].title}</h1>
					<p>${movies[i].actors}</p>
					<p>${movies[i].distributed}</p>
					<p class="description">${movies[i].description}</p>
					<div class="likes" id="${i}">
						<a>
							<i class="fa fa-heart" ></i>
						</a>
						<p>Likes</p>
						<div id="counter" >${movies[i].likes}</div>
					</div>
				</div>
			</div>`;
			$("#wrapper").append(movie);	
		};	
	}	

	//call the function 
	addData(movies); 

	//count likes function
	$("body").on("click",".likes", function() {
		
		let selector = $(this).find("#counter");

		x = Number(selector.html())+1;
		movies[this.id].likes = x;
		
		selector.html(x);
	});

	//sort function by likes and names
	$("select").on("change", function() {
		
		let seldata = $("select option:selected").val();
		$("#wrapper").text("");

		if (seldata === "likes") {
			movies.sort(function(a, b) {
				return b.likes-a.likes;
			});
		} else if(seldata === "names") {
			movies.sort(function(a, b) {
				return a.title.localeCompare(b.title);
			});
		}

		addData(movies);
	});
   
});	

	

