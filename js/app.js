var vehicles = document.querySelector("#vehicles");

var year = document.querySelector("#year");

window.onload = function(){

	getRoot();

	getBrand();

}


function getRoot(){

	return window.location.protocol+"//"+window.location.hostname+window.location.pathname+"";

}


// funçao para pegar os dados da api em json
async function ajaxFunction(action, brandId = "", vehicleId = ""){

	try{

	let url = getRoot()+"controllerFipe.php?action="+action+brandId+vehicleId+"";

	let response = await fetch(url,{

		method:"POST",
		// body:dados,
		dataType:"json"

	});

    var dados = {};

    dados = await response.json()


	}catch(err){
	
        console.log('fetch failed', err);
	
	}finally{

	let dadosJson = JSON.parse(dados);

	let brand = document.querySelector("#brand");

	console.log(dadosJson);

	dadosJson.forEach((dadoJson, index)=>{

		// POLUINDO O SELECT COM OPTION DO ID E NAME 
		//	DOS DADOS JSON
		document.querySelector(`#${action}`).innerHTML +=`
			<option value="${dadoJson.id}">${dadoJson.name}</option>
		`;


		});

	}

}


// GET BRAND
function getBrand(){

	ajaxFunction("brand");

	let brand = document.querySelector("#brand");
	
	brand.addEventListener("change", function(){

	vehicles.style.display = "block";
	
	getVehicles(this.value);

	});

}

// GET VEHICLES
function getVehicles(brandId){

	ajaxFunction("vehicles","&brandId="+brandId);
	
	vehicles.addEventListener("change", function(){
	
	year.style.display = "block";
	
	getYear(brandId, this.value);

	});

}


// GET YEAR
function getYear(brandId, vehicleId){

	ajaxFunction("vehicles","&brandId="+brandId,"&vehicleId="+vehicleId);

}