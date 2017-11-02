$(function() {

	var url = 'http://api.icndb.com/jokes/random';
	var button = document.getElementById('get-joke');
	var paragraph = document.getElementById('joke');
	button.addEventListener('click', function(){
  		getJoke();
  		
	});

	function getJoke() {
		$.ajax({
			method: 'GET',
			url: url, 
			success: function(res) {
				paragraph.innerHTML = res.value.joke;
			}
		});
	}

  	function getJoke2() {
  		var xhr = new XMLHttpRequest();
  		xhr.open('GET', url);
  		xhr.send();
  		xhr.addEventListener('load', function(){
    		var response = JSON.parse(xhr.response);
    		paragraph.innerHTML = response.value.joke;
  		});
	}

	getJoke(); 

});