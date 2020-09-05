var mydata = data; //JSON Data
var countPizzaSize = Object.keys(mydata.pizzaSize).length;
var countCrust = Object.keys(mydata.crust).length;
var countSauce = Object.keys(mydata.sauce).length;
var countPizzaType = Object.keys(mydata.pizzaType).length;
var countIngred = Object.keys(mydata.pizzaType.ingredients).length;

function calculate(){
	var size = document.getElementById("size");
	var pizzaSizeIndex = size.options[size.selectedIndex].value;
	var sizePrice = mydata.pizzaSize[pizzaSizeIndex-1].price;
	
	var type = document.getElementById("type");
	var typeIndex = type.options[type.selectedIndex].value;
	var typePrice = mydata.pizzaType[typeIndex-1].price;
	
	var sauce = document.getElementById("sauce");
	var sauceIndex = sauce.options[sauce.selectedIndex].value;
	var saucePrice =mydata.sauce[sauceIndex-1].price;
	
	var crust = document.getElementById("crust");
	var crustIndex = crust.options[crust.selectedIndex].value;
	var crustPrice =mydata.crust[crustIndex-1].price;
	
	var price = (sizePrice)+(typePrice)+(saucePrice)+(crustPrice);
	document.getElementById("totalCost").innerHTML="Total Cost: &euro;";
	document.getElementById("totalCost").innerHTML="Total Cost: &euro;"+price;
		
}

function doSize(){
	var size = document.getElementById("size");
	var pizzaSizeIndex = size.options[size.selectedIndex].value;
	document.getElementById("sizePrice").innerHTML="Price:";
	document.getElementById("sizePrice").innerHTML=document.getElementById("sizePrice").innerHTML+" &euro;"+mydata.pizzaSize[pizzaSizeIndex-1].price;	
	
	calculate();
}

function doType(){
	var type = document.getElementById("type");
	var typeIndex = type.options[type.selectedIndex].value;
	document.getElementById("displayIn").innerHTML="Pizza Contains:";
	document.getElementById("displayIn").innerHTML=document.getElementById("displayIn").innerHTML+" "+mydata.pizzaType[typeIndex-1].ingredients;
	
	document.getElementById("typePrice").innerHTML="Price:";
	document.getElementById("typePrice").innerHTML=document.getElementById("typePrice").innerHTML+" &euro;"+mydata.pizzaType[typeIndex-1].price;
	
	calculate();
}

function doSauce(){
	var sauce = document.getElementById("sauce");
	var sauceIndex = sauce.options[sauce.selectedIndex].value;
	document.getElementById("saucePrice").innerHTML="Price:";
	document.getElementById("saucePrice").innerHTML=document.getElementById("saucePrice").innerHTML+" &euro;"+mydata.sauce[sauceIndex-1].price;
	
	calculate();
}

function doCrust(){
	var crust = document.getElementById("crust");
	var crustIndex = crust.options[crust.selectedIndex].value;
	document.getElementById("crustPrice").innerHTML="Price:";
	document.getElementById("crustPrice").innerHTML=document.getElementById("crustPrice").innerHTML+" &euro;"+mydata.crust[crustIndex-1].price;
	
	calculate();
}

														//Sorin's JQuery Code
function sendData(){
	
	var size = document.getElementById("size");
	var pizzaSizeIndex = size.options[size.selectedIndex].value;	
	var sizeName = mydata.pizzaSize[pizzaSizeIndex-1].name;
	
	var type = document.getElementById("type");
	var typeIndex = type.options[type.selectedIndex].value;	
	var typeName = mydata.pizzaType[typeIndex-1].name;
	
	var sauce = document.getElementById("sauce");
	var sauceIndex = sauce.options[sauce.selectedIndex].value;	
	var sauceName = mydata.sauce[sauceIndex-1].name;
	
	var crust = document.getElementById("crust");
	var crustIndex = crust.options[crust.selectedIndex].value;	
	var crustName = mydata.crust[crustIndex-1].name;
	
	var pizza_order = sizeName + typeName + sauceName + crustName;
	$(document).ready(function(){
				$("#button").click(function(){
					var name=$("#name").val();
					var address=$("#address").val();
					var telephone=$("#telephone").val();
					var pizza_order=$("#pizza_order").val();
					$.ajax({
						url:'insert.php',
						method:'POST',
						data:{
							name:name,
							address:address,
							telephone:telephone,
							pizza_order:pizza_order
						},
					   success:function(data){
						   alert(data);
					   }
					});
				});
	});
}

function submit(){
	calculate();
	sendData();
}