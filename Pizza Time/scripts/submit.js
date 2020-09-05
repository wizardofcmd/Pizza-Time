function sendData(){
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