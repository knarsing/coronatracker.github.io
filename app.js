window.onload= function(){
getCovidState();
//getCovidapi
}

//API for feting data ==> https://coronavirus-tracker-api.herokuapp.com/v2/locations/131

function getCovidState(){
	 fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations/131")
	.then(function(resp) { return resp.json() })
	.then(function(data){
	//console.log(data);
		let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('population').innerHTML=population;
		document.getElementById('update').innerHTML=update.substr(0,10);
		document.getElementById('cases').innerHTML=confirmedCases;
		document.getElementById('deaths').innerHTML=deaths;
		document.getElementById('percentage').innerHTML=((Number(deaths)/Number(confirmedCases))*100).toPrecision(3)+"%";
    })
	.catch(function(){
	console.log("error")
	})
	
}

